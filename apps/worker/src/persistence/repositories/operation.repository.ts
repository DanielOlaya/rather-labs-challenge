import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Operation, OperationType, OperationStatus, Prisma } from 'prisma';
import { OperationWithRelations, OperationFilters, PaginationOptions } from 'shared-types';

// Define a local type that matches exactly what Prisma returns
// type OperationWithRelationsLocal = Prisma.OperationGetPayload<{
//   include: {
//     from_chain_rel: true;
//     to_chain_rel: true;
//     start_transaction: {
//       include: {
//         chain: true;
//       };
//     };
//     end_transaction: {
//       include: {
//         chain: true;
//       };
//     };
//     message: {
//       include: {
//         sent_transaction: true;
//         recv_transaction: true;
//       };
//     };
//   };
// }>;

@Injectable()
export class OperationRepository {
  constructor(private prisma: PrismaService) {}

  async findById(opId: string): Promise<OperationWithRelations | null> {
    return this.prisma.operation.findUnique({
      where: { op_id: opId },
      include: {
        from_chain_rel: true,
        to_chain_rel: true,
        start_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        end_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        message: {
          include: {
            sent_transaction: true,
            recv_transaction: true,
          },
        },
      },
    });
  }

  async findMany(
    filters: OperationFilters,
    pagination: PaginationOptions,
  ): Promise<{ operations: OperationWithRelations[]; hasMore: boolean }> {
    const where: Prisma.OperationWhereInput = {};

    if (filters.userAddress) {
      where.user_address = {
        equals: filters.userAddress,
        mode: 'insensitive',
      };
    }

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.opType) {
      where.op_type = filters.opType;
    }

    if (filters.fromChain) {
      where.from_chain = filters.fromChain;
    }

    if (filters.toChain) {
      where.to_chain = filters.toChain;
    }

    if (pagination.cursor) {
      where.op_id = {
        lt: pagination.cursor,
      };
    }

    const operations = await this.prisma.operation.findMany({
      where,
      include: {
        from_chain_rel: true,
        to_chain_rel: true,
        start_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        end_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        message: {
          include: {
            sent_transaction: true,
            recv_transaction: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      take: pagination.limit + 1,
    });

    const hasMore = operations.length > pagination.limit;
    if (hasMore) {
      operations.pop(); // Remove the extra item
    }

    return {
      operations,
      hasMore,
    };
  }

  async create(data: Prisma.OperationCreateInput): Promise<Operation> {
    return this.prisma.operation.create({
      data,
    });
  }

  async update(opId: string, data: Prisma.OperationUpdateInput): Promise<Operation> {
    console.log('update operation', opId, data);
    return this.prisma.operation.update({
      where: { op_id: opId },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  }

  async upsert(
    where: Prisma.OperationWhereUniqueInput,
    create: Prisma.OperationCreateInput,
    update: Prisma.OperationUpdateInput,
  ): Promise<Operation> {
    return this.prisma.operation.upsert({
      where,
      create,
      update: {
        ...update,
        updated_at: new Date(),
      },
    });
  }

  async findStuckOperations(thresholdMinutes: number = 30): Promise<Operation[]> {
    const threshold = new Date(Date.now() - thresholdMinutes * 60 * 1000);
    
    return this.prisma.operation.findMany({
      where: {
        status: OperationStatus.ongoing,
        last_event_at: {
          lt: threshold,
        },
      },
    });
  }

  async findRetryableOperations(): Promise<Operation[]> {
    return this.prisma.operation.findMany({
      where: {
        next_retry_at: {
          lte: new Date(),
        },
        retry_count: {
          lt: 3, // Max 3 retries
        },
        status: {
          in: [OperationStatus.stuck, OperationStatus.orphaned],
        },
      },
    });
  }

  async incrementRetryCount(opId: string, nextRetryAt: Date): Promise<Operation> {
    return this.prisma.operation.update({
      where: { op_id: opId },
      data: {
        retry_count: {
          increment: 1,
        },
        next_retry_at: nextRetryAt,
        updated_at: new Date(),
      },
    });
  }

  async findByUserAddress(userAddress: string, limit: number = 50): Promise<OperationWithRelations[]> {
    return this.prisma.operation.findMany({
      where: {
        user_address: {
          equals: userAddress,
          mode: 'insensitive',
        },
      },
      include: {
        from_chain_rel: true,
        to_chain_rel: true,
        start_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        end_transaction: {
          include: {
            chain: true,
            events: true,
          },
        },
        message: {
          include: {
            sent_transaction: true,
            recv_transaction: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      take: limit,
    });
  }

  async findByStartTransactionHash(txHash: string): Promise<{ op_id: string } | null> {
    return this.prisma.operation.findFirst({
      where: {
        start_transaction: {
          hash: txHash.toLowerCase(),
        },
      },
      select: {
        op_id: true,
      },
    });
  }
}