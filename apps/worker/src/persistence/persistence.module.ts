import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ChainRepository } from './repositories/chain.repository';
import { ContractRepository } from './repositories/contract.repository';
import { TransactionRepository } from './repositories/transaction.repository';
import { EventRepository } from './repositories/event.repository';
import { MessageRepository } from './repositories/message.repository';
import { OperationRepository } from './repositories/operation.repository';
import { StorageService } from './storage.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [
    PrismaService,
    ChainRepository,
    ContractRepository,
    TransactionRepository,
    EventRepository,
    MessageRepository,
    OperationRepository,
    StorageService,
  ],
  exports: [
    PrismaService,
    ChainRepository,
    ContractRepository,
    TransactionRepository,
    EventRepository,
    MessageRepository,
    OperationRepository,
    StorageService,
  ],
})
export class PersistenceModule {}