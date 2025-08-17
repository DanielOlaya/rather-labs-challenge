import { Injectable, Logger } from '@nestjs/common';
import { EventRepository } from './repositories/event.repository';
import { TransactionRepository } from './repositories/transaction.repository';
import { MessageRepository } from './repositories/message.repository';
import { OperationRepository } from './repositories/operation.repository';
import { ContractRepository } from './repositories/contract.repository';
import { ChainRepository } from './repositories/chain.repository';
import { 
  RawEventJob, 
  BufferEventJob, 
  LinkEventJob, 
  ConsolidateOperationJob 
} from 'shared-types';
import { 
  Event, 
  Transaction, 
  Message, 
  Operation, 
  BufferStatus,
  TransactionStatus,
  MessageStatus,
  OperationStatus,
  OperationType,
  Prisma 
} from 'prisma';
import { Decimal } from 'decimal.js';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);

  constructor(
    private eventRepository: EventRepository,
    private transactionRepository: TransactionRepository,
    private messageRepository: MessageRepository,
    private operationRepository: OperationRepository,
    private contractRepository: ContractRepository,
    private chainRepository: ChainRepository,
  ) {}

  async storeRawEvent(jobData: RawEventJob): Promise<Event> {
    this.logger.debug(`Storing raw event for tx ${jobData.txHash} log ${jobData.logIndex}`);

    try {
      await this.ensureTransactionExists(jobData);

      const eventData: Prisma.EventCreateInput = {
        name: jobData.eventName,
        contract_address: jobData.contractAddress.toLowerCase(),
        params: jobData.data as any,
        buffer_status: BufferStatus.buffered,
        log_index: jobData.logIndex,
        chain: { connect: { chain_id: jobData.chainId } },
        transaction: { connect: { hash: jobData.txHash.toLowerCase() } }
      };

      const event = await this.eventRepository.create(eventData);
      this.logger.log(`Stored raw event ${event.event_id}`);
      return event;

    } catch (error) {
      this.logger.error(`Failed to store raw event: data:: ${JSON.stringify(jobData)} error: ${error.message}`, error.stack);
      throw error;
    }
  }

  //Process buffered event and link to operations
  async processBufferedEvent(jobData: BufferEventJob): Promise<Event> {
    this.logger.debug(`Processing buffered event ${jobData.eventId}`);

    try {
      const event = await this.eventRepository.findById(jobData.eventId);
      if (!event) {
        throw new Error(`Event ${jobData.eventId} not found`);
      }

      const updatedEvent = await this.eventRepository.updateBufferStatus(
        jobData.eventId, 
        BufferStatus.processed
      );

      this.logger.log(`Processed buffered event ${jobData.eventId}`);
      return updatedEvent;

    } catch (error) {
      this.logger.error(`Failed to process buffered event: ${error.message}`, error.stack);
      throw error;
    }
  }

  async linkEventToOperation(jobData: LinkEventJob): Promise<void> {
    this.logger.debug(`Linking event ${jobData.eventId} to operation ${jobData.operationId}`);

    try {
      // Update the event to link it to the operation
      this.logger.log(`Event-operation linking noted: ${jobData.eventId} -> ${jobData.operationId} (confidence: ${jobData.confidence})`);
      await this.eventRepository.updateOperationId(jobData.eventId, jobData.operationId);
      
      this.logger.log(`Successfully linked event ${jobData.eventId} to operation ${jobData.operationId} (confidence: ${jobData.confidence})`);

    } catch (error) {
      this.logger.error(`Failed to link event to operation: ${error.message}`, error.stack);
      throw error;
    }
  }

  async storeMessage(
    nonce: number,
    fromChain: number,
    toChain: number,
    sentTxId: string,
    recvTxId?: string
  ): Promise<Message> {
    this.logger.debug(`Storing message from chain ${fromChain} to ${toChain}`);

    try {
      const messageData: Prisma.MessageCreateInput = {
        nonce: new Decimal(nonce),
        status: MessageStatus.sent,
        sent_at: new Date(),
        sent_transaction: { connect: { tx_id: sentTxId } },
        recv_transaction: recvTxId ? { connect: { tx_id: recvTxId } } : undefined,
        from_chain_rel: { connect: { chain_id: fromChain } },
        to_chain_rel: { connect: { chain_id: toChain } },
      };

      const message = await this.messageRepository.create(messageData);
      this.logger.log(`Stored message ${message.message_id}`);
      return message;

    } catch (error) {
      this.logger.error(`Failed to store message: ${error.message}`, error.stack);
      throw error;
    }
  }

  async updateMessageReceived(messageId: string): Promise<Message> {
    this.logger.debug(`Updating message ${messageId} as received`);

    try {
      const message = await this.messageRepository.updateStatus(messageId, MessageStatus.delivered);
      this.logger.log(`Updated message ${messageId} status to delivered`);
      return message;

    } catch (error) {
      this.logger.error(`Failed to update message status: ${error.message}`, error.stack);
      throw error;
    }
  }

  async storeOperation(
    operationType: OperationType,
    userAddress: string,
    fromChain: number,
    toChain: number,
    startTxId: string,
    messageNonce?: number,
    messageId?: string
  ): Promise<Operation> {
    this.logger.debug(`Storing operation of type ${operationType}, data: ${
      JSON.stringify({
        op_type: operationType,
        user_address: userAddress.toLowerCase(),
        message_nonce: messageNonce,
        status: OperationStatus.ongoing,
        details: {},
        retry_count: 0,
        last_event_at: new Date(),
        start_transaction: { connect: { tx_id: startTxId } },
        from_chain_rel: { connect: { chain_id: fromChain } },
        to_chain_rel: { connect: { chain_id: toChain } },
        message: messageId ? { connect: { message_id: messageId } } : undefined
      })
    }`);

    try {
      const operationData: Prisma.OperationCreateInput = {
        op_type: operationType,
        user_address: userAddress.toLowerCase(),
        message_nonce: messageNonce,
        status: OperationStatus.ongoing,
        details: {},
        retry_count: 0,
        last_event_at: new Date(),
        start_transaction: { connect: { tx_id: startTxId } },
        from_chain_rel: { connect: { chain_id: fromChain } },
        to_chain_rel: { connect: { chain_id: toChain } },
        message: messageId ? { connect: { message_id: messageId } } : undefined
      };

      const operation = await this.operationRepository.create(operationData);
      this.logger.log(`Stored operation ${operation.op_id}`);
      return operation;

    } catch (error) {
      this.logger.error(`Failed to store operation: ${error.message}`, error.stack);
      throw error;
    }
  }

  async consolidateOperation(jobData: ConsolidateOperationJob): Promise<Operation> {
    this.logger.debug(`Consolidating operation ${jobData.operationId}`);

    try {
      const operation = await this.operationRepository.findById(jobData.operationId);
      if (!operation) {
        throw new Error(`Operation ${jobData.operationId} not found`);
      }

      // Update operation status based on trigger event
      const status = jobData.triggerEvent?.includes('Completed') ? OperationStatus.completed : OperationStatus.ongoing;
      
      const updatedOperation = await this.operationRepository.update(jobData.operationId, {
        status: status,
        last_event_at: new Date(),
        details: {
          ...((operation.details as any) || {}),
          consolidatedEvents: jobData.eventIds,
          triggerEvent: jobData.triggerEvent
        }
      });

      this.logger.log(`Consolidated operation ${jobData.operationId} with status ${updatedOperation.status}`);
      return updatedOperation;

    } catch (error) {
      this.logger.error(`Failed to consolidate operation: ${error.message}`, error.stack);
      throw error;
    }
  }

  async storeTransaction(
    txHash: string,
    chainId: number,
    blockNumber: string,
    blockHash: string
  ): Promise<Transaction> {
    this.logger.debug(`Storing transaction ${txHash} on chain ${chainId}`);

    try {
      const txData: Prisma.TransactionCreateInput = {
        hash: txHash.toLowerCase(),
        block_number: BigInt(blockNumber),
        block_hash: blockHash.toLowerCase(),
        status: TransactionStatus.confirmed,
        confirmations: 1,
        timestamp: new Date(),
        chain: { connect: { chain_id: chainId } },
      };

      const transaction = await this.transactionRepository.create(txData);
      this.logger.log(`Stored transaction ${transaction.tx_id}`);
      return transaction;

    } catch (error) {
      this.logger.error(`Failed to store transaction: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async ensureTransactionExists(jobData: RawEventJob): Promise<void> {
    const existingTx = await this.transactionRepository.findByHash(jobData.chainId, jobData.txHash);
    
    if (!existingTx) {
      // TODO: too minimal, maybe add more fields?
      await this.storeTransaction(
        jobData.txHash,
        jobData.chainId,
        jobData.blockNumber,
        jobData.blockHash
      );
    }
  }

  async getEventById(eventId: string): Promise<Event | null> {
    return this.eventRepository.findById(eventId);
  }

  async findOperationByTransactionHash(txHash: string): Promise<{ op_id: string } | null> {
    this.logger.debug(`Searching for operation with transaction hash ${txHash}`);
    
    try {
      // Find operation_id by joining with transactions using start_tx_id
      const operation = await this.operationRepository.findByStartTransactionHash(txHash);
      
      if (operation) {
        this.logger.debug(`Found operation ${operation.op_id} for transaction ${txHash}`);
      } else {
        this.logger.debug(`No operation found for transaction ${txHash}`);
      }
      
      return operation;
    } catch (error) {
      this.logger.error(`Failed to find operation by transaction hash ${txHash}: ${error.message}`);
      return null;
    }
  }

  async parseAndStoreEventData(event: Event): Promise<void> {
    this.logger.debug(`Parsing event data for ${event.name}`);

    try {
      switch (event.name) {
        case 'OperationStarted':
          await this.handleOperationStartedEvent(event);
          break;
        case 'OperationCompleted':
          await this.handleOperationCompletedEvent(event);
          break;
        case 'MessageSent':
          await this.handleMessageSentEvent(event);
          break;
        case 'MessageReceived':
          await this.handleMessageReceivedEvent(event);
          break;
        case 'AddCollateral':
        case 'CollateralAdded':
        case 'CollateralRejected':
        case 'Borrow':
        case 'BorrowUpdated':
        case 'BorrowRejected':
        case 'Withdraw':
        case 'WithdrawRejected':
        case 'Withdrawn':
          await this.handleLendingEvent(event);
          break;
        default:
          this.logger.debug(`No specific handler for event type: ${event.name}`);
      }
    } catch (error) {
      this.logger.error(`Failed to parse event data: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async handleOperationStartedEvent(event: Event): Promise<void> {
    this.logger.log(`Operation started event: ${JSON.stringify(event)}`);
    const params = JSON.parse(event.params as any);
    if (params) {
      const operationType = this.parseOperationType(params.operationType || '0');
      const userAddress = params.user || params.userAddress;
      const transaction = await this.transactionRepository.findByHash(event.chain_id, event.tx_hash);
      if (transaction) {
        const operation = await this.storeOperation(
          operationType,
          userAddress,
          Number(params.fromChain) || event.chain_id,
          Number(params.toChain) || event.chain_id,
          transaction.tx_id
        );
        
        await this.eventRepository.updateOperationId(event.event_id, operation.op_id);
      }
    }
  }

  private async handleOperationCompletedEvent(event: Event): Promise<void> {
    this.logger.log(`Handle Operation creation event: ${JSON.stringify(event)}`);
    const params = event.params as any;
    this.logger.log(`Params: ${JSON.stringify(params)}`);
    if (params && params.operationId) {
      const success = this.parseSuccessStatus(params.success);
      
      await this.operationRepository.update(params.operationId, {
        status: success ? OperationStatus.completed : OperationStatus.rejected,
        last_event_at: new Date(),
        details: {
          completionEvent: event.name,
          success: success,
          completionTxHash: event.tx_hash
        }
      });
    }
  }

  private async handleMessageSentEvent(event: Event): Promise<void> {
    const params = JSON.parse(event.params as any);
    if (params && params.nonce) {
      const transaction = await this.transactionRepository.findByHash(event.chain_id, event.tx_hash);
      if (transaction) {
        await this.storeMessage(
          parseInt(params.nonce),
          parseInt(params.fromChain) || event.chain_id,
          parseInt(params.toChain) || event.chain_id,
          transaction.tx_id
        );
      }
    }
  }

  private async handleMessageReceivedEvent(event: Event): Promise<void> {
    const params = JSON.parse(event.params as any);
    if (params && params.nonce) {
      console.log('params.nonce', params.nonce, new Decimal(params.nonce), parseInt(params.nonce));
      const message = await this.messageRepository.findByNonce(
        parseInt(params.nonce),
        // TODO: for a real multi-chain system
        parseInt(params.fromChain) || event.chain_id,
        parseInt(params.toChain) || event.chain_id
      );
      
      if (message) {
        // TODO: consolidate operation, change status to completed
        
        await this.updateMessageReceived(message.message_id);
      }
    }
  }

  private async handleLendingEvent(event: Event): Promise<void> {
    // Handle lending protocol specific events
    // These events might be linked to existing operations or create new ones
    this.logger.debug(`Processed lending event: ${event.name}`);
  }

  // Helper methods for parsing event data
  private parseOperationType(operationType: string | number): OperationType {
    const type = typeof operationType === 'string' ? parseInt(operationType) : operationType;
    switch (type) {
      case 0: return OperationType.AddCollateral;
      case 1: return OperationType.Borrow;
      case 2: return OperationType.Withdraw;
      default: return OperationType.AddCollateral;
    }
  }

  private parseSuccessStatus(success: any): boolean {
    if (typeof success === 'boolean') return success;
    if (typeof success === 'string') return success === 'true' || success === '1';
    return Boolean(success);
  }
}