import { Injectable, Logger } from '@nestjs/common';
import { ChainProviderService } from './chain-provider.service';
import { QueueService } from '../queue/queue.service';
import { ConfigService } from '../config/config.service';
import { ChainRepository } from '../persistence/repositories/chain.repository';
import { ContractRepository } from '../persistence/repositories/contract.repository';

// Event signatures for the protocol
const CONTROLLER_EVENTS = [
  'AddCollateral(address indexed user, uint256 amount, address indexed asset)',
  'CollateralAdded(address indexed user, uint256 amount, address indexed asset)',
  'CollateralRejected(address indexed user, uint256 amount, address indexed asset, string reason)',
  'Borrow(address indexed user, uint256 amount, address indexed asset)',
  'BorrowUpdated(address indexed user, uint256 amount, address indexed asset)',
  'BorrowRejected(address indexed user, uint256 amount, address indexed asset, string reason)',
];

const ROUTER_EVENTS = [
  'MessageSent(uint256 indexed nonce, uint256 indexed fromChain, uint256 indexed toChain, bytes data)',
  'MessageReceived(uint256 indexed nonce, uint256 indexed fromChain, uint256 indexed toChain, bytes data)',
];

@Injectable()
export class EventIndexerService {
  private readonly logger = new Logger(EventIndexerService.name);

  constructor(
    private chainProviderService: ChainProviderService,
    private queueService: QueueService,
    private configService: ConfigService,
    private chainRepository: ChainRepository,
    private contractRepository: ContractRepository,
  ) {}

  async indexEventsForChain(chainId: number, fromBlock: bigint, toBlock: bigint): Promise<void> {
    const client = this.chainProviderService.getHttpClient(chainId);
    if (!client) {
      this.logger.warn(`No healthy client for chain ${chainId}, skipping indexing`);
      return;
    }

    const contracts = await this.contractRepository.findByChain(chainId);
    if (contracts.length === 0) {
      this.logger.warn(`No contracts configured for chain ${chainId}`);
      return;
    }

    try {
      this.logger.debug(`Indexing events for chain ${chainId} from block ${fromBlock} to ${toBlock}`);

      for (const contract of contracts) {
        await this.indexContractEvents(chainId, contract.address, contract.type, fromBlock, toBlock);
      }

      await this.chainRepository.updateLastBlockProcessed(chainId, toBlock);
      
      this.logger.debug(`Completed indexing for chain ${chainId} up to block ${toBlock}`);
    } catch (error) {
      this.logger.error(`Failed to index events for chain ${chainId}: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async indexContractEvents(
    chainId: number, 
    contractAddress: string, 
    contractType: 'Controller' | 'Router',
    fromBlock: bigint, 
    toBlock: bigint
  ): Promise<void> {
    const client = this.chainProviderService.getHttpClient(chainId);
    if (!client) return;

    const eventSignatures = contractType === 'Controller' ? CONTROLLER_EVENTS : ROUTER_EVENTS;
    
    try {
      const logs = await client.getLogs({
        address: contractAddress as `0x${string}`,
        fromBlock,
        toBlock,
      });

      this.logger.debug(`Found ${logs.length} logs for ${contractType} contract ${contractAddress} on chain ${chainId}`);

      for (const log of logs) {
        try {
          for (const eventSig of eventSignatures) {
            try {
              const eventName = eventSig.split('(')[0];
              
              this.logger.log(`Logging params to define topics field: ${JSON.stringify(log)}`)
              await this.queueService.addRawEventJob({
                chainId,
                txHash: log.transactionHash,
                logIndex: log.logIndex,
                blockNumber: BigInt(log.blockNumber).toString(),
                blockHash: log.blockHash,
                contractAddress: log.address,
                eventName,
                data: log.data,
                topics: ["log.topics"],
                timestamp: new Date(),
              });

              break; // Found a matching event, move to next log
            } catch (decodeError) {
              // This event signature doesn't match, continue with the next one
              continue;
            }
          }
        } catch (error) {
          this.logger.warn(`Failed to process log ${log.transactionHash}:${log.logIndex}: ${error.message}`);
        }
      }
    } catch (error) {
      this.logger.error(`Failed to get logs for contract ${contractAddress}: ${error.message}`);
      throw error;
    }
  }

  async subscribeToEvents(chainId: number): Promise<void> {
    const wsClient = this.chainProviderService.getWebSocketClient(chainId);
    if (!wsClient) {
      this.logger.warn(`No WebSocket client available for chain ${chainId}, falling back to polling`);
      return;
    }

    const contracts = await this.contractRepository.findByChain(chainId);
    if (contracts.length === 0) return;

    try {
      this.logger.log(`Setting up WebSocket event subscriptions for chain ${chainId}`);

      // Subscribe to new blocks to trigger event indexing
      const unwatch = wsClient.watchBlocks({
        onBlock: async (block) => {
          try {
            const chain = await this.chainRepository.findById(chainId);
            if (!chain) return;

            const fromBlock = chain.last_block_processed + 1n;
            const toBlock = block.number;

            // Only process if there are new blocks
            if (toBlock > chain.last_block_processed) {
              await this.indexEventsForChain(chainId, fromBlock, toBlock);
            }
          } catch (error) {
            this.logger.error(`Error processing new block for chain ${chainId}: ${error.message}`);
          }
        },
        onError: (error) => {
          this.logger.error(`WebSocket error for chain ${chainId}: ${error.message}`);
        },
      });

      this.logger.log(`WebSocket subscription active for chain ${chainId}`);
      
      // TODO: Store the unwatch function for cleanup if needed
      
    } catch (error) {
      this.logger.error(`Failed to set up WebSocket subscription for chain ${chainId}: ${error.message}`);
    }
  }

  async catchUpMissedBlocks(chainId: number): Promise<void> {
    const client = this.chainProviderService.getHttpClient(chainId);
    if (!client) return;

    try {
      const currentBlock = await client.getBlockNumber();
      const chain = await this.chainRepository.findById(chainId);
      
      if (!chain) {
        this.logger.warn(`Chain ${chainId} not found in database`);
        return;
      }

      const config = this.configService.indexerConfig;
      const safeBlock = currentBlock - BigInt(config.blocksBehind);
      
      if (chain.last_block_processed < safeBlock) {
        const fromBlock = chain.last_block_processed + 1n;
        const batchSize = BigInt(config.batchSize);

        this.logger.log(`Catching up chain ${chainId} from block ${fromBlock} to ${safeBlock}`);

        // Process in batches
        for (let start = fromBlock; start <= safeBlock; start += batchSize) {
          const end = start + batchSize - 1n > safeBlock ? safeBlock : start + batchSize - 1n;
          
          await this.indexEventsForChain(chainId, start, end);
          
          // Small delay between batches to avoid overwhelming the RPC
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        this.logger.log(`Catch-up complete for chain ${chainId}`);
      } else {
        this.logger.debug(`Chain ${chainId} is up to date`);
      }
    } catch (error) {
      this.logger.error(`Failed to catch up missed blocks for chain ${chainId}: ${error.message}`);
      throw error;
    }
  }
}