import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Chain, ChainStatus, Prisma } from 'prisma';

@Injectable()
export class ChainRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Chain[]> {
    return this.prisma.chain.findMany({
      orderBy: {
        chain_id: 'asc',
      },
    });
  }

  async findById(chainId: number): Promise<Chain | null> {
    return this.prisma.chain.findUnique({
      where: { chain_id: chainId },
    });
  }

  async findActive(): Promise<Chain[]> {
    return this.prisma.chain.findMany({
      where: {
        status: ChainStatus.active,
      },
      orderBy: {
        chain_id: 'asc',
      },
    });
  }

  async create(data: Prisma.ChainCreateInput): Promise<Chain> {
    return this.prisma.chain.create({
      data,
    });
  }

  async update(chainId: number, data: Prisma.ChainUpdateInput): Promise<Chain> {
    return this.prisma.chain.update({
      where: { chain_id: chainId },
      data,
    });
  }

  async upsert(
    chainId: number,
    create: Prisma.ChainCreateInput,
    update: Prisma.ChainUpdateInput,
  ): Promise<Chain> {
    return this.prisma.chain.upsert({
      where: { chain_id: chainId },
      create,
      update,
    });
  }

  async updateLastBlockProcessed(chainId: number, blockNumber: bigint): Promise<Chain> {
    return this.prisma.chain.update({
      where: { chain_id: chainId },
      data: {
        last_block_processed: blockNumber,
      },
    });
  }

  async updateStatus(chainId: number, status: ChainStatus): Promise<Chain> {
    return this.prisma.chain.update({
      where: { chain_id: chainId },
      data: {
        status,
      },
    });
  }

  async getHealthStatus(): Promise<{ chain_id: number; name: string; status: ChainStatus; last_block_processed: bigint }[]> {
    return this.prisma.chain.findMany({
      select: {
        chain_id: true,
        name: true,
        status: true,
        last_block_processed: true,
      },
      orderBy: {
        chain_id: 'asc',
      },
    });
  }
}