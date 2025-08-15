import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Transaction, TransactionStatus, Prisma } from 'prisma';

@Injectable()
export class TransactionRepository {
  constructor(private prisma: PrismaService) {}

  async findById(txId: string): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({
      where: { tx_id: txId },
    });
  }

  async findByHash(chainId: number, hash: string): Promise<Transaction | null> {
    return this.prisma.transaction.findFirst({
      where: {
        chain_id: chainId,
        hash: {
          equals: hash,
          mode: 'insensitive',
        },
      },
    });
  }

  async create(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    return this.prisma.transaction.create({
      data,
    });
  }

  async upsert(
    where: Prisma.TransactionWhereUniqueInput,
    create: Prisma.TransactionCreateInput,
    update: Prisma.TransactionUpdateInput,
  ): Promise<Transaction> {
    return this.prisma.transaction.upsert({
      where,
      create,
      update,
    });
  }

  async updateStatus(txId: string, status: TransactionStatus, confirmations?: number): Promise<Transaction> {
    const updateData: Prisma.TransactionUpdateInput = { status };
    if (confirmations !== undefined) {
      updateData.confirmations = confirmations;
    }
    
    return this.prisma.transaction.update({
      where: { tx_id: txId },
      data: updateData,
    });
  }

  async findPendingConfirmations(cutoffTime: Date): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: {
        status: {
          in: [TransactionStatus.pending, TransactionStatus.confirmed],
        },
        timestamp: {
          gte: cutoffTime,
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
  }

  async findByTxId(txId: string): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({
      where: { tx_id: txId },
    });
  }

  async findRecentTransactions(chainId: number, minutes: number = 60): Promise<Transaction[]> {
    const cutoffTime = new Date(Date.now() - minutes * 60 * 1000);
    
    return this.prisma.transaction.findMany({
      where: {
        chain_id: chainId,
        timestamp: {
          gte: cutoffTime,
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
  }
}