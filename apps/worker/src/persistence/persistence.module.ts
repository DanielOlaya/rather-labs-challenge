import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ChainRepository } from './repositories/chain.repository';
import { ContractRepository } from './repositories/contract.repository';
import { TransactionRepository } from './repositories/transaction.repository';
import { EventRepository } from './repositories/event.repository';
import { MessageRepository } from './repositories/message.repository';
import { OperationRepository } from './repositories/operation.repository';

@Module({
  providers: [
    PrismaService,
    ChainRepository,
    ContractRepository,
    TransactionRepository,
    EventRepository,
    MessageRepository,
    OperationRepository,
  ],
  exports: [
    PrismaService,
    ChainRepository,
    ContractRepository,
    TransactionRepository,
    EventRepository,
    MessageRepository,
    OperationRepository,
  ],
})
export class PersistenceModule {}