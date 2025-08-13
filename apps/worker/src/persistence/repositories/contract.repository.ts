import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Contract, ContractType, Prisma } from 'prisma';

@Injectable()
export class ContractRepository {
  constructor(private prisma: PrismaService) {}

  async findByAddress(address: string): Promise<Contract | null> {
    return this.prisma.contract.findUnique({
      where: { address },
    });
  }

  async findByChain(chainId: number): Promise<Contract[]> {
    return this.prisma.contract.findMany({
      where: { chain_id: chainId },
    });
  }

  async findByChainAndType(chainId: number, type: ContractType): Promise<Contract[]> {
    return this.prisma.contract.findMany({
      where: {
        chain_id: chainId,
        type,
      },
    });
  }

  async create(data: Prisma.ContractCreateInput): Promise<Contract> {
    return this.prisma.contract.create({
      data,
    });
  }

  async upsert(
    address: string,
    create: Prisma.ContractCreateInput,
    update: Prisma.ContractUpdateInput,
  ): Promise<Contract> {
    return this.prisma.contract.upsert({
      where: { address },
      create,
      update,
    });
  }
}