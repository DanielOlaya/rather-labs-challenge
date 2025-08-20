import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { QueueService } from './queue.service';
import { QUEUES } from './queue.constants';
import { PersistenceModule } from '../persistence/persistence.module';
import { IndexerModule } from '../indexer/indexer.module';
import { RawEventProcessor, BufferEventProcessor, LinkEventProcessor } from './processors/event.processor';
import { OperationConsolidateProcessor, ReorgRecoveryProcessor } from './processors/operation.processor';
import { MonitorIncompleteOperationsProcessor } from './processors/monitor-incomplete-operations.processor';

@Module({
  imports: [
    PersistenceModule,
    IndexerModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          connection: {
            host: new URL(configService.redisUrl).hostname,
            port: parseInt(new URL(configService.redisUrl).port) || 6379,
            password: new URL(configService.redisUrl).password || undefined,
          },
          defaultJobOptions: {
            removeOnComplete: 10,
            removeOnFail: 50,
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 2000,
            },
          },
        };
      },
    }),
    BullModule.registerQueue(
      { name: QUEUES.EVENT_BUFFER },
      { name: QUEUES.EVENT_RAW },
      { name: QUEUES.EVENT_LINK },
      { name: QUEUES.OPERATION_CONSOLIDATE },
      { name: QUEUES.REORG_RECOVERY },
      { name: QUEUES.MONITOR_INCOMPLETE_OPERATIONS },
    ),
  ],
  providers: [
    QueueService,
    RawEventProcessor,
    BufferEventProcessor,
    LinkEventProcessor,
    OperationConsolidateProcessor,
    ReorgRecoveryProcessor,
    MonitorIncompleteOperationsProcessor,
  ],
  exports: [
    QueueService,
  ],
})
export class QueueModule {}