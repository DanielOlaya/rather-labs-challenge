import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { OperationRepository } from '../persistence/repositories/operation.repository';
import { OperationQueryDto } from './dto/operation-query.dto';
import { OperationFilters, PaginationOptions } from 'shared-types';
import { Prisma } from 'prisma';

// Define a local type that matches exactly what Prisma returns
type OperationWithRelationsLocal = Prisma.OperationGetPayload<{
  include: {
    from_chain_rel: true;
    to_chain_rel: true;
    start_transaction: {
      include: {
        chain: true;
      };
    };
    end_transaction: {
      include: {
        chain: true;
      };
    };
    message: {
      include: {
        sent_transaction: true;
        recv_transaction: true;
      };
    };
  };
}>;

@Injectable()
export class OperationsService {
  private readonly logger = new Logger(OperationsService.name);

  constructor(private operationRepository: OperationRepository) {}

  async getOperations(queryDto: OperationQueryDto) {
    const filters: OperationFilters = {};
    const pagination: PaginationOptions = {
      limit: queryDto.limit || 20,
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

  private formatOperation(operation: OperationWithRelationsLocal) {
    return {
      id: operation.op_id,
      type: operation.op_type,
      status: operation.status,
      substatus: operation.substatus,
      user: operation.user_address,
      fromChain: {
        id: operation.from_chain,
        name: operation.from_chain ? operation.from_chain_rel?.name : undefined,
      },
      toChain: {
        id: operation.to_chain,
        name: operation.to_chain ? operation.to_chain_rel?.name : undefined,
      },
      createdAt: operation.created_at,
      updatedAt: operation.updated_at,
      lastEventAt: operation.last_event_at,
      timeline: this.buildTimeline(operation),
    };
  }

  private formatOperationWithDetails(operation: OperationWithRelationsLocal) {
    const base = this.formatOperation(operation);
    
    return {
      ...base,
      details: operation.details,
      retryCount: operation.retry_count,
      nextRetryAt: operation.next_retry_at,
      errorContext: operation.error_context,
      message: operation.message ? {
        id: operation.message.message_id,
        nonce: operation.message.nonce.toString(),
        status: operation.message.status,
        sentAt: operation.message.sent_at,
        receivedAt: operation.message.received_at,
      } : null,
      transactions: {
        start: operation.start_transaction ? {
          id: operation.start_transaction.tx_id,
          hash: operation.start_transaction.hash,
          blockNumber: operation.start_transaction.block_number.toString(),
          confirmations: operation.start_transaction.confirmations,
          status: operation.start_transaction.status,
          chain: operation.start_transaction?.chain_id,
        } : null,
        end: operation.end_transaction ? {
          id: operation.end_transaction.tx_id,
          hash: operation.end_transaction.hash,
          blockNumber: operation.end_transaction.block_number.toString(),
          confirmations: operation.end_transaction.confirmations,
          status: operation.end_transaction.status,
          chain: operation.end_transaction?.chain_id
        } : null,
      },
    };
  }

  private buildTimeline(operation: OperationWithRelationsLocal) {
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