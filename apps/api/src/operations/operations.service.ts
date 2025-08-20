import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { OperationRepository } from '../persistence/repositories/operation.repository';
import { OperationQueryDto } from './dto/operation-query.dto';
import { OperationFilters, PaginationOptions, OperationWithRelations } from 'shared-types';
import { Prisma } from 'prisma';

@Injectable()
export class OperationsService {
  private readonly logger = new Logger(OperationsService.name);

  constructor(private operationRepository: OperationRepository) {}

  async getOperations(queryDto: OperationQueryDto) {
    const filters: OperationFilters = {};
    const pagination: PaginationOptions = {
      limit: Number(queryDto.limit) || 20,
      cursor: queryDto.cursor,
    };

    if (queryDto.user) {
      filters.userAddress = queryDto.user;
    }

    if (queryDto.status) {
      filters.status = queryDto.status;
    }

    if (queryDto.opType) {
      filters.opType = queryDto.opType;
    }

    if (queryDto.fromChain) {
      filters.fromChain = queryDto.fromChain;
    }

    if (queryDto.toChain) {
      filters.toChain = queryDto.toChain;
    }

    try {
      const result = await this.operationRepository.findMany(filters, pagination);
      
      const nextCursor = result.hasMore && result.operations.length > 0
        ? result.operations[result.operations.length - 1].op_id
        : null;

      return {
        operations: result.operations.map(op => this.formatOperation(op)),
        hasMore: result.hasMore,
        nextCursor,
      };
    } catch (error) {
      this.logger.error(`Failed to get operations: ${error.message}`, error.stack);
      throw error;
    }
  }

  async getOperationById(opId: string) {
    try {
      const operation = await this.operationRepository.findById(opId);
      if (!operation) {
        throw new NotFoundException(`Operation ${opId} not found`);
      }

      return this.formatOperationWithDetails(operation);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(`Failed to get operation ${opId}: ${error.message}`, error.stack);
      throw error;
    }
  }

  async getOperationsByUser(userAddress: string, limit: number = 50) {
    try {
      const operations = await this.operationRepository.findByUserAddress(userAddress, limit);
      return operations.map(op => this.formatOperation(op));
    } catch (error) {
      this.logger.error(`Failed to get operations for user ${userAddress}: ${error.message}`, error.stack);
      throw error;
    }
  }

  private formatOperation(operation: OperationWithRelations) {
    return {
      id: operation.op_id,
      type: operation.op_type,
      status: operation.status,
      substatus: operation.substatus,
      user: operation.user_address,
      fromChain: {
        id: operation.from_chain,
        name: operation.from_chain_rel?.name,
      },
      toChain: {
        id: operation.to_chain,
        name: operation.to_chain_rel?.name,
      },
      createdAt: operation.created_at,
      updatedAt: operation.updated_at,
      lastEventAt: operation.last_event_at,
      timeline: this.buildTimeline(operation),
    };
  }

  private formatOperationWithDetails(operation: OperationWithRelations) {
    const base = this.formatOperation(operation);
    
    return {
      ...base,
      // Core operation details
      messageNonce: operation.message_nonce ? operation.message_nonce.toString() : null,
      messageId: operation.message_id,
      
      // Detailed status information
      substatus: operation.substatus,
      retryCount: operation.retry_count,
      nextRetryAt: operation.next_retry_at,
      errorContext: operation.error_context,
      
      // Operation details and metadata
      // details: operation.details,
      lastEventAt: operation.last_event_at,
      
      // Message information (if cross-chain)
      message: operation.message ? {
        id: operation.message.message_id,
        nonce: operation.message.nonce.toString(),
        status: operation.message.status,
        fromChain: operation.message.from_chain,
        toChain: operation.message.to_chain,
        sentAt: operation.message.sent_at,
        receivedAt: operation.message.received_at,
        sentTransaction: operation.message.sent_transaction ? {
          id: operation.message.sent_transaction.tx_id,
          hash: operation.message.sent_transaction.hash,
          blockNumber: operation.message.sent_transaction.block_number.toString(),
          blockHash: operation.message.sent_transaction.block_hash,
          timestamp: operation.message.sent_transaction.timestamp,
          confirmations: operation.message.sent_transaction.confirmations,
          status: operation.message.sent_transaction.status,
          chainId: operation.message.sent_transaction.chain_id,
        } : null,
        receivedTransaction: operation.message.recv_transaction ? {
          id: operation.message.recv_transaction.tx_id,
          hash: operation.message.recv_transaction.hash,
          blockNumber: operation.message.recv_transaction.block_number.toString(),
          blockHash: operation.message.recv_transaction.block_hash,
          timestamp: operation.message.recv_transaction.timestamp,
          confirmations: operation.message.recv_transaction.confirmations,
          status: operation.message.recv_transaction.status,
          chainId: operation.message.recv_transaction.chain_id,
        } : null,
      } : null,
      
      // Transaction details
      transactions: {
        start: operation.start_transaction ? {
          id: operation.start_transaction.tx_id,
          hash: operation.start_transaction.hash,
          blockNumber: operation.start_transaction.block_number.toString(),
          blockHash: operation.start_transaction.block_hash,
          timestamp: operation.start_transaction.timestamp,
          confirmations: operation.start_transaction.confirmations,
          status: operation.start_transaction.status,
          chainId: operation.start_transaction.chain_id,
          chain: operation.start_transaction.chain ? {
            id: operation.start_transaction.chain.chain_id,
            name: operation.start_transaction.chain.name,
            status: operation.start_transaction.chain.status,
          } : null,
        } : null,
        end: operation.end_transaction ? {
          id: operation.end_transaction.tx_id,
          hash: operation.end_transaction.hash,
          blockNumber: operation.end_transaction.block_number.toString(),
          blockHash: operation.end_transaction.block_hash,
          timestamp: operation.end_transaction.timestamp,
          confirmations: operation.end_transaction.confirmations,
          status: operation.end_transaction.status,
          chainId: operation.end_transaction.chain_id,
          chain: operation.end_transaction.chain ? {
            id: operation.end_transaction.chain.chain_id,
            name: operation.end_transaction.chain.name,
            status: operation.end_transaction.chain.status,
          } : null,
        } : null,
      },
      
      // Chain information
      chains: {
        from: operation.from_chain_rel ? {
          id: operation.from_chain_rel.chain_id,
          name: operation.from_chain_rel.name,
          status: operation.from_chain_rel.status,
          lastBlockProcessed: operation.from_chain_rel.last_block_processed.toString(),
        } : null,
        to: operation.to_chain_rel ? {
          id: operation.to_chain_rel.chain_id,
          name: operation.to_chain_rel.name,
          status: operation.to_chain_rel.status,
          lastBlockProcessed: operation.to_chain_rel.last_block_processed.toString(),
        } : null,
      },
      
      // Events information
      events: {
        startTransaction: operation.start_transaction?.events?.map(event => ({
          id: event.event_id,
          name: event.name,
          contractAddress: event.contract_address,
          logIndex: event.log_index,
          params: event.params,
          bufferStatus: event.buffer_status,
          correlationWindowId: event.correlation_window_id,
          chainId: event.chain_id,
          txHash: event.tx_hash,
        })) || [],
        endTransaction: operation.end_transaction?.events?.map(event => ({
          id: event.event_id,
          name: event.name,
          contractAddress: event.contract_address,
          logIndex: event.log_index,
          params: event.params,
          bufferStatus: event.buffer_status,
          correlationWindowId: event.correlation_window_id,
          chainId: event.chain_id,
          txHash: event.tx_hash,
        })) || [],
      },
      
      // Timestamps
      timestamps: {
        created: operation.created_at,
        updated: operation.updated_at,
        lastEvent: operation.last_event_at,
        nextRetry: operation.next_retry_at,
      },
    };
  }

  private buildTimeline(operation: OperationWithRelations) {
    const timeline = [];

    // Start transaction
    if (operation.start_transaction) {
      timeline.push({
        timestamp: operation.created_at,
        status: 'started',
        description: `Operation initiated on ${operation.from_chain_rel?.name}`,
        txHash: operation.start_transaction.hash,
        chainId: operation.from_chain,
      });
    }

    // Message sent (if cross-chain)
    if (operation.message?.sent_at) {
      timeline.push({
        timestamp: operation.message.sent_at,
        status: 'message_sent',
        description: `Message sent to ${operation.from_chain_rel?.name}`,
        txHash: operation.message.sent_tx_id,
        chainId: operation.from_chain,
      });
    }

    // Message received (if cross-chain)
    if (operation.message?.received_at) {
      timeline.push({
        timestamp: operation.message.received_at,
        status: 'message_received',
        description: `Message received on ${operation.from_chain_rel?.name}`,
        txHash: operation.message.recv_tx_id,
        chainId: operation.to_chain,
      });
    }

    // End transaction
    if (operation.end_transaction) {
      timeline.push({
        timestamp: operation.updated_at,
        status: operation.status,
        description: this.getStatusDescription(operation.status, operation.substatus),
        txHash: operation.end_transaction.hash,
        chainId: operation.to_chain,
      });
    }

    return timeline.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  private getStatusDescription(status: string, substatus?: string): string {
    switch (status) {
      case 'completed':
        return 'Operation completed successfully';
      case 'rejected':
        return 'Operation was rejected';
      case 'stuck':
        return 'Operation appears to be stuck';
      case 'orphaned':
        return 'Operation was orphaned due to reorg';
      case 'timeout':
        return 'Operation timed out';
      case 'ongoing':
        switch (substatus) {
          case 'ongoing.waiting_confirmation':
            return 'Waiting for confirmation';
          case 'ongoing.message_sent':
            return 'Message sent, waiting for delivery';
          case 'ongoing.message_received':
            return 'Message received, processing';
          default:
            return 'Operation in progress';
        }
      default:
        return `Status: ${status}`;
    }
  }
}