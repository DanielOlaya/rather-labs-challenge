import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { decodeFunctionData } from 'viem';
import { QUEUES } from '../queue.constants';
import { StorageService } from '../../persistence/storage.service';
import { QueueService } from '../queue.service';
import { ChainProviderService } from '../../indexer/chain-provider.service';
import { MonitorIncompleteOperationsJob, RawEventJob } from 'shared-types';
import { OperationStatus, BufferStatus } from 'prisma';
import { RouterABI } from 'contracts';

@Processor(QUEUES.MONITOR_INCOMPLETE_OPERATIONS)
export class MonitorIncompleteOperationsProcessor extends WorkerHost {
  private readonly logger = new Logger(MonitorIncompleteOperationsProcessor.name);

  constructor(
    private storageService: StorageService,
    private queueService: QueueService,
    private chainProviderService: ChainProviderService,
  ) {
    super();
  }

  async process(job: Job<MonitorIncompleteOperationsJob>): Promise<void> {
    const { data } = job;
    this.logger.debug(`Processing monitor incomplete operations job with ${data.checkInterval} minute interval`);

    try {
      await this.checkIncompleteOperations();
      this.logger.log(`Successfully processed monitor incomplete operations job`);
    } catch (error) {
      this.logger.error(`Failed to process monitor incomplete operations job: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async checkIncompleteOperations(): Promise<void> {
    this.logger.debug('Checking for incomplete operations...');

    try {
      const incompleteOperations = await this.storageService.findIncompleteOperations();
      
      if (incompleteOperations.length === 0) {
        this.logger.debug('No incomplete operations found');
        return;
      }

      this.logger.log(`Found ${incompleteOperations.length} incomplete operations to check`);

      for (const operation of incompleteOperations) {
        await this.processIncompleteOperation(operation);
      }

    } catch (error) {
      this.logger.error(`Failed to check incomplete operations: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async processIncompleteOperation(operation: any): Promise<void> {
    try {
      const { op_id, from_chain, last_event_at } = operation;
      
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    //   const fiveMinutesAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
      
      if (last_event_at && new Date(last_event_at) > fiveMinutesAgo) {
        this.logger.debug(`Operation ${op_id} has recent events, skipping`);
        return;
      }

      this.logger.log(`Operation ${op_id} appears stuck, checking for missing events`);

      const routerContract = await this.storageService.getRouterContractAddress(from_chain);
      if (!routerContract) {
        this.logger.warn(`No router contract found for chain ${from_chain}`);
        return;
      }

      const recentTransactions = await this.chainProviderService.getRecentRouterTransactions(from_chain, routerContract);
      this.logger.debug(`Found ${recentTransactions.length} recent transactions for operation ${op_id}`);
    //   this.logger.debug(JSON.stringify(recentTransactions));
      
      const matchingTransaction = await this.findTransactionByNonce(recentTransactions, operation);
      
      if (matchingTransaction) {
        this.logger.log(`Found matching transaction ${matchingTransaction.hash} for operation ${op_id}`);
        
        await this.enqueueTransactionEvents(matchingTransaction);
      } else {
        this.logger.debug(`No matching transaction found for operation ${op_id}`);
      }

    } catch (error) {
      this.logger.error(`Failed to process incomplete operation ${operation.op_id}: ${error.message}`, error.stack);
    }
  }

  private async findTransactionByNonce(transactions: any[], operation: any): Promise<any | null> {
    try {
      const operationNonce = await this.extractNonceFromOperation(operation);
      
      if (!operationNonce) {
        this.logger.debug(`Could not extract nonce from operation ${operation.op_id}`);
        return null;
      }

      for (const tx of transactions) {
        if (tx.input && tx.input.length > 10) { // Has input data
          try {
            if (this.transactionContainsNonce(tx, operationNonce)) {
                this.logger.debug(`Found matching transaction ${tx.hash} for operation ${operation.op_id}`);
              return tx;
            }
          } catch (error) {
            this.logger.debug(`Failed to decode transaction ${tx.hash}: ${error.message}`);
          }
        }
      }

      return null;

    } catch (error) {
      this.logger.error(`Failed to find transaction by nonce: ${error.message}`, error.stack);
      return null;
    }
  }

  private async extractNonceFromOperation(operation: any): Promise<string | null> {
    try {
      if (operation.message && operation.message.nonce) {
        this.logger.debug(`Found nonce in operation message: ${operation.message.nonce}`);
        return operation.message.nonce.toString();
      }

      if (operation.start_transaction && operation.start_transaction.events) {
        for (const event of operation.start_transaction.events) {
          if (event.name === 'MessageSent' && event.params) {
            try {
              const params = JSON.parse(event.params as any);
              if (params.nonce) {
                this.logger.debug(`Found nonce in MessageSent event: ${params.nonce}`);
                return params.nonce.toString();
              }
            } catch (parseError) {
              this.logger.debug(`Failed to parse MessageSent event params: ${parseError.message}`);
            }
          }
        }
      }

      if (operation.end_transaction && operation.end_transaction.events) {
        for (const event of operation.end_transaction.events) {
          if (event.name === 'MessageReceived' && event.params) {
            try {
              const params = JSON.parse(event.params as any);
              if (params.nonce) {
                this.logger.debug(`Found nonce in MessageReceived event: ${params.nonce}`);
                return params.nonce.toString();
              }
            } catch (parseError) {
              this.logger.debug(`Failed to parse MessageReceived event params: ${parseError.message}`);
            }
          }
        }
      }

      this.logger.debug(`No nonce found for operation ${operation.op_id}`);
      return null;

    } catch (error) {
      this.logger.error(`Failed to extract nonce from operation: ${error.message}`, error.stack);
      return null;
    }
  }

  private transactionContainsNonce(transaction: any, nonce: string): boolean {
    try {
      if (!transaction.input || transaction.input.length < 10) {
        return false;
      }

      try {
        const decodedData = decodeFunctionData({
          abi: RouterABI,
          data: transaction.input as `0x${string}`,
        });

        if (decodedData.functionName === 'receiveMessage') {
          const [decodedNonce] = decodedData.args;
          
          if (decodedNonce && decodedNonce.toString() === nonce) {
            this.logger.debug(`Found receiveMessage transaction with matching nonce: ${nonce}`);
            return true;
          }
        }
      } catch (decodeError) {
        this.logger.debug(`Failed to decode transaction ${transaction.hash}: ${decodeError.message}`);
      }

    //   const txData = JSON.stringify(transaction).toLowerCase();
    //   const nonceLower = nonce.toLowerCase();
      
    //   return txData.includes(nonceLower);
    } catch (error) {
      this.logger.debug(`Failed to check transaction for nonce: ${error.message}`);
      return false;
    }
  }

  private async enqueueTransactionEvents(transaction: any): Promise<void> {
    try {
        this.logger.debug(`Enqueuing transaction ${transaction.hash} for event processing`);
      const { hash, chainId, blockNumber, blockHash, to, data } = transaction;
      
      const txChainId = Number(chainId) || transaction.chainId;
      
      if (!txChainId) {
        this.logger.warn(`Transaction ${hash} missing chain ID, skipping`);
        return;
      }

      const rawEventJob: RawEventJob = {
        chainId: txChainId,
        txHash: hash,
        logIndex: 0, // Will be updated when processing logs
        blockNumber: blockNumber?.toString() || '0',
        blockHash: blockHash || '0x',
        contractAddress: to || '0x',
        eventName: 'Unknown', // Will be determined during processing
        data: data || '0x',
        topics: [], // Will be populated during processing
        timestamp: new Date(),
      };

      await this.queueService.addRawEventJob(rawEventJob);
      
      this.logger.log(`Enqueued transaction ${hash} for event processing on chain ${txChainId}`);

    } catch (error) {
      this.logger.error(`Failed to enqueue transaction events: ${error.message}`, error.stack);
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<MonitorIncompleteOperationsJob>) {
    this.logger.debug(`Monitor incomplete operations job ${job.id} completed`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<MonitorIncompleteOperationsJob>, error: Error) {
    this.logger.error(`Monitor incomplete operations job ${job.id} failed: ${error.message}`);
  }
}
