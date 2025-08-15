import { Injectable, Logger } from '@nestjs/common';
import { TransactionStatus, BufferStatus } from 'prisma';
import { StorageService } from '../../persistence/storage.service';
import { TransactionRepository } from '../../persistence/repositories/transaction.repository';
import { EventRepository } from '../../persistence/repositories/event.repository';
import { QueueService } from '../queue.service';

@Injectable()
export class TransactionProcessor {
  private readonly logger = new Logger(TransactionProcessor.name);

  constructor(
    private storageService: StorageService,
    private transactionRepository: TransactionRepository,
    private eventRepository: EventRepository,
    private queueService: QueueService,
  ) {}

  /**
   * Process new blockchain transaction and extract events
   */
  async processNewTransaction(txData: {
    hash: string;
    chainId: number;
    blockNumber: string;
    blockHash: string;
    fromAddress: string;
    toAddress?: string;
    value: string;
    gasUsed: string;
    gasPrice: string;
    logs: Array<{
      address: string;
      topics: string[];
      data: string;
      logIndex: number;
    }>;
    timestamp: Date;
    operationId?: string;
  }): Promise<void> {
    this.logger.debug(`Processing new transaction ${txData.hash} on chain ${txData.chainId}`);

    try {
      // Store the transaction
      const transaction = await this.storageService.storeTransaction(
        txData.hash,
        txData.chainId,
        txData.blockNumber,
        txData.blockHash,
        // txData.fromAddress,
        // txData.toAddress,
        // txData.value,
        // txData.gasUsed,
        // txData.gasPrice,
        // txData.operationId
      );

      // Process each log/event in the transaction
      for (const log of txData.logs) {
        await this.processTransactionLog(txData, log);
      }

      // Update transaction status
      await this.updateTransactionConfirmations(transaction.tx_id, 1);

      this.logger.log(`Successfully processed transaction ${txData.hash}`);

    } catch (error) {
      this.logger.error(`Failed to process transaction: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * Process individual transaction log as raw event
   */
  private async processTransactionLog(
    txData: any,
    log: {
      address: string;
      topics: string[];
      data: string;
      logIndex: number;
    }
  ): Promise<void> {
    try {
      // Determine event name from topic signature
      const eventName = await this.getEventName(log.topics[0], log.address);

      // Create raw event job for processing
      const rawEventJob = {
        chainId: txData.chainId,
        txHash: txData.hash,
        logIndex: log.logIndex,
        blockNumber: txData.blockNumber,
        blockHash: txData.blockHash,
        contractAddress: log.address,
        eventName: eventName,
        topics: log.topics,
        data: log.data,
        timestamp: txData.timestamp,
      };

      // Queue the raw event for processing
      await this.queueService.addRawEventJob(rawEventJob);

      this.logger.debug(`Queued raw event ${eventName} from tx ${txData.hash} log ${log.logIndex}`);

    } catch (error) {
      this.logger.error(`Failed to process transaction log: ${error.message}`, error.stack);
    }
  }

  /**
   * Update transaction confirmation count
   */
  async updateTransactionConfirmations(txId: string, confirmations: number): Promise<void> {
    try {
      await this.transactionRepository.updateStatus(
        txId,
        TransactionStatus.confirmed,
        confirmations
      );

      // Note: 'finalized' status doesn't exist in schema, keeping as confirmed

    } catch (error) {
      this.logger.error(`Failed to update transaction confirmations: ${error.message}`, error.stack);
    }
  }

  /**
   * Handle failed transactions
   */
  async handleFailedTransaction(txHash: string, chainId: number, reason: string): Promise<void> {
    this.logger.warn(`Handling failed transaction ${txHash} on chain ${chainId}: ${reason}`);

    try {
      const transaction = await this.transactionRepository.findByHash(chainId, txHash);
      
      if (transaction) {
        // Update transaction status to orphaned (closest to failed)
        await this.transactionRepository.updateStatus(
          transaction.tx_id,
          TransactionStatus.orphaned,
          0
        );

        // Note: Transaction table doesn't have operation_id field per schema
        // If there were related operations, they would need to be found differently

        // Mark related events as failed
        await this.markRelatedEventsAsFailed(txHash, chainId);
      }

    } catch (error) {
      this.logger.error(`Failed to handle failed transaction: ${error.message}`, error.stack);
    }
  }

  /**
   * Process transaction replacement (e.g., speed up, cancel)
   */
  async processTransactionReplacement(
    originalTxHash: string,
    newTxHash: string,
    chainId: number,
    replacementType: 'speedup' | 'cancel'
  ): Promise<void> {
    this.logger.debug(`Processing transaction replacement: ${originalTxHash} -> ${newTxHash} (${replacementType})`);

    try {
      const originalTx = await this.transactionRepository.findByHash(chainId, originalTxHash);
      
      if (originalTx) {
        // Mark original transaction as orphaned (closest to replaced)
        await this.transactionRepository.updateStatus(
          originalTx.tx_id,
          TransactionStatus.orphaned,
          0
        );

        // Handle based on replacement type
        if (replacementType === 'cancel') {
          // Note: Transaction table doesn't have operation_id field per schema
          this.logger.debug(`Transaction ${originalTxHash} was cancelled`);
        } else if (replacementType === 'speedup') {
          // If sped up, the new transaction will be processed normally when it's mined
          this.logger.debug(`Transaction ${originalTxHash} was sped up to ${newTxHash}`);
        }
      }

    } catch (error) {
      this.logger.error(`Failed to process transaction replacement: ${error.message}`, error.stack);
    }
  }

  /**
   * Revert transaction due to blockchain reorganization
   */
  async revertTransaction(txHash: string, chainId: number): Promise<void> {
    this.logger.warn(`Reverting transaction ${txHash} on chain ${chainId} due to reorganization`);

    try {
      const transaction = await this.transactionRepository.findByHash(chainId, txHash);
      
      if (transaction) {
        // Mark transaction as orphaned (closest to reverted)
        await this.transactionRepository.updateStatus(
          transaction.tx_id,
          TransactionStatus.orphaned,
          0
        );

        // Mark related events for reprocessing
        const events = await this.eventRepository.findByTransaction(chainId, txHash);
        
        for (const event of events) {
          await this.eventRepository.updateBufferStatus(event.event_id, BufferStatus.expired);
        }

        // Create a reorg recovery job
        const reorgJob = {
          chainId: chainId,
          blockNumber: transaction.block_number.toString(),
          affectedBlocks: [transaction.block_number.toString()],
          reorgDepth: 1,
        };

        await this.queueService.addReorgRecoveryJob(reorgJob, 1); // High priority
      }

    } catch (error) {
      this.logger.error(`Failed to revert transaction: ${error.message}`, error.stack);
    }
  }

  private async getEventName(topicSignature: string, contractAddress: string): Promise<string> {
    // In a real implementation, this would look up the event signature
    // from the contract ABI or a signature database
    const eventSignatures: { [key: string]: string } = {
      '0x1234567890abcdef...': 'OperationStarted', // Example signatures
      '0xabcdef1234567890...': 'OperationCompleted',
      '0x9876543210fedcba...': 'MessageSent',
      '0xfedcba0987654321...': 'MessageReceived',
      '0x1111222233334444...': 'CollateralAdded',
      '0x5555666677778888...': 'Borrow',
      '0x9999aaaabbbbcccc...': 'Withdraw',
      '0xddddeeeeffffaaaa...': 'CollateralRejected',
    };

    return eventSignatures[topicSignature] || `UnknownEvent_${topicSignature.slice(2, 10)}`;
  }

  private async markRelatedEventsAsFailed(txHash: string, chainId: number): Promise<void> {
    try {
      const events = await this.eventRepository.findByTransaction(chainId, txHash);
      
      for (const event of events) {
        await this.eventRepository.updateBufferStatus(event.event_id, BufferStatus.expired);
      }

    } catch (error) {
      this.logger.error(`Failed to mark related events as failed: ${error.message}`, error.stack);
    }
  }

  /**
   * Monitor transaction confirmations
   */
  async monitorTransactionConfirmations(maxAge: number = 3600): Promise<void> {
    this.logger.debug(`Monitoring transaction confirmations for transactions newer than ${maxAge} seconds`);

    try {
      const cutoffTime = new Date(Date.now() - maxAge * 1000);
      
      // Find recent transactions that need confirmation updates
      const pendingTransactions = await this.transactionRepository.findPendingConfirmations(cutoffTime);

      for (const tx of pendingTransactions) {
        // In a real implementation, you would query the blockchain
        // to get the current confirmation count for each transaction
        const currentConfirmations = await this.getCurrentConfirmations(tx.hash, tx.chain_id);
        
        if (currentConfirmations !== tx.confirmations) {
          await this.updateTransactionConfirmations(tx.tx_id, currentConfirmations);
        }
      }

    } catch (error) {
      this.logger.error(`Failed to monitor transaction confirmations: ${error.message}`, error.stack);
    }
  }

  private async getCurrentConfirmations(txHash: string, chainId: number): Promise<number> {
    // Placeholder - in real implementation, query blockchain for current confirmations
    return Math.floor(Math.random() * 20) + 1;
  }
}