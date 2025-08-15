import { Injectable, Logger } from '@nestjs/common';
import { StorageService } from '../../persistence/storage.service';
import { QueueService } from '../queue.service';
import { MessageRepository } from '../../persistence/repositories/message.repository';
import { EventRepository } from '../../persistence/repositories/event.repository';
import { TransactionRepository } from '../../persistence/repositories/transaction.repository';
import { MessageStatus } from 'prisma';

@Injectable()
export class MessageProcessor {
  private readonly logger = new Logger(MessageProcessor.name);

  constructor(
    private storageService: StorageService,
    private queueService: QueueService,
    private messageRepository: MessageRepository,
    private eventRepository: EventRepository,
    private transactionRepository: TransactionRepository,
  ) {}

  async processMessageSentEvent(eventData: {
    nonce: number;
    sender: string;
    fromChain: number;
    toChain: number;
    messageId: string;
    data: string;
    operationId?: string;
    txHash: string;
  }): Promise<void> {
    this.logger.debug(`Processing MessageSent event for message ${eventData.messageId}`);

    try {
      const sentTransaction = await this.transactionRepository.findByHash(eventData.fromChain, eventData.txHash);
      if (!sentTransaction) {
        throw new Error(`Transaction not found for message: ${eventData.txHash}`);
      }

      const message = await this.storageService.storeMessage(
        eventData.nonce,
        eventData.fromChain,
        eventData.toChain,
        sentTransaction.tx_id
      );

      await this.scheduleMessageCorrelation(message.message_id, eventData.toChain);

      this.logger.log(`Successfully processed MessageSent event for message ${eventData.messageId}`);

    } catch (error) {
      this.logger.error(`Failed to process MessageSent event: ${error.message}`, error.stack);
      throw error;
    }
  }

  async processMessageReceivedEvent(eventData: {
    nonce: number;
    recipient: string;
    fromChain: number;
    toChain: number;
    messageId: string;
    data: string;
    txHash: string;
  }): Promise<void> {
    this.logger.debug(`Processing MessageReceived event for message ${eventData.messageId}`);

    try {
      const message = await this.storageService.updateMessageReceived(eventData.messageId);

      await this.linkReceiveTransaction(eventData.messageId, eventData.txHash);

      // TODO: Check if this completes a cross-chain operation
      // await this.checkOperationCompletion(message.message_id, eventData.messageId);
      // No operation linkage in schema; skip operation completion check

      this.logger.log(`Successfully processed MessageReceived event for message ${eventData.messageId}`);

    } catch (error) {
      this.logger.error(`Failed to process MessageReceived event: ${error.message}`, error.stack);
      throw error;
    }
  }

  async correlateMessages(chainId: number, lookbackMinutes: number = 30): Promise<void> {
    this.logger.debug(`Correlating messages for chain ${chainId} with ${lookbackMinutes} minute lookback`);

    try {
      const cutoffTime = new Date(Date.now() - lookbackMinutes * 60 * 1000);

      const unmatchedSentMessages = await this.messageRepository.findUnmatchedSentMessages(chainId, cutoffTime);

      const recentReceivedMessages = await this.messageRepository.findRecentReceivedMessages(chainId, cutoffTime);

      for (const sentMessage of unmatchedSentMessages) {
        const matchingReceived = recentReceivedMessages.find(received =>
          received.nonce === sentMessage.nonce &&
          received.from_chain === sentMessage.from_chain &&
          received.to_chain === sentMessage.to_chain &&
          received.received_at &&
          Math.abs(received.received_at.getTime() - sentMessage.sent_at.getTime()) < 300000 // 5 minute window
        );

        if (matchingReceived) {
          await this.linkMessages(sentMessage.message_id, matchingReceived.message_id);
          this.logger.log(`Correlated messages: ${sentMessage.message_id} -> ${matchingReceived.message_id}`);
        }
      }

    } catch (error) {
      this.logger.error(`Failed to correlate messages: ${error.message}`, error.stack);
      throw error;
    }
  }

  // TODO: Handle message timeouts
  async handleMessageTimeouts(timeoutMinutes: number = 60): Promise<void> {
    this.logger.debug(`Handling message timeouts for messages older than ${timeoutMinutes} minutes`);

    try {
      const cutoffTime = new Date(Date.now() - timeoutMinutes * 60 * 1000);

      const timedOutMessages = await this.messageRepository.findTimedOutMessages(cutoffTime);

      for (const message of timedOutMessages) {
        // await this.messageRepository.updateStatus(message.message_id, 'failed' as any);

        // // If this message was part of an operation, mark operation as failed
        // if (message.operation_id) {
        //   const consolidateJob = {
        //     operationId: message.operation_id,
        //     success: false,
        //     confidenceScore: 0,
        //     completedTxHash: undefined,
        //   };

        //   await this.queueService.addConsolidateOperationJob(consolidateJob);
        // }

        // this.logger.warn(`Message ${message.message_id} timed out and marked as failed`);
        await this.messageRepository.updateStatus(message.message_id, MessageStatus.timeout);
        this.logger.warn(`Message ${message.message_id} timed out and marked as timeout`);
      }

    } catch (error) {
      this.logger.error(`Failed to handle message timeouts: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async scheduleMessageCorrelation(messageId: string, targetChain: number): Promise<void> {
    // Schedule a delayed job to check for message correlation
    // This would be implemented as a separate queue job type
    this.logger.debug(`Scheduling correlation check for message ${messageId} on chain ${targetChain}`);
    
    // TODO: Implement a new job type for message correlation
    setTimeout(async () => {
      try {
        await this.correlateMessages(targetChain, 10);
      } catch (error) {
        this.logger.error(`Failed scheduled message correlation: ${error.message}`);
      }
    }, 60000); // Check after 1 minute
  }

  private async linkReceiveTransaction(messageId: string, txHash: string): Promise<void> {
    try {
      await this.messageRepository.updateReceiveTx(messageId, txHash);
      this.logger.debug(`Linked receive transaction ${txHash} to message ${messageId}`);
    } catch (error) {
      this.logger.error(`Failed to link receive transaction: ${error.message}`, error.stack);
    }
  }

  private async checkOperationCompletion(operationId: string | null, messageId: string): Promise<void> {
    if (!operationId) return;

    try {
      const isOperationComplete = await this.isOperationComplete(operationId);
      
      if (isOperationComplete) {
        const consolidateJob = {
          operationId,
          eventIds: [], // TODO: add event ids (?)
          triggerEvent: 'MessageReceived'
        };

        await this.queueService.addConsolidateOperationJob(consolidateJob, 2000); // 2 second delay
        this.logger.log(`Operation ${operationId} marked for completion due to message ${messageId}`);
      }

    } catch (error) {
      this.logger.error(`Failed to check operation completion: ${error.message}`, error.stack);
    }
  }

  private async linkMessages(sentMessageId: string, receivedMessageId: string): Promise<void> {
    try {
      await this.messageRepository.linkMessages(sentMessageId, receivedMessageId);
      this.logger.debug(`Linked messages: ${sentMessageId} -> ${receivedMessageId}`);
    } catch (error) {
      this.logger.error(`Failed to link messages: ${error.message}`, error.stack);
    }
  }

  private async isOperationComplete(operationId: string): Promise<boolean> {
    // TODO: Check if all required messages for the operation have been received
    // Need to check the operation type and its requirements
    return true;
  }

  async processMessageRouting(messageData: {
    operationId: string;
    fromChain: number;
    toChain: number;
    messageType: string;
    payload: any;
    userAddress: string;
  }): Promise<void> {
    this.logger.debug(`Processing message routing for operation ${messageData.operationId}`);

    try {
      // TODO: for cross-chain operations
      this.logger.log(`Successfully processed message routing for operation ${messageData.operationId}`);

    } catch (error) {
      this.logger.error(`Failed to process message routing: ${error.message}`, error.stack);
      throw error;
    }
  }
}