import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { IndexerService } from './indexer.service';
import { ChainProviderService } from './chain-provider.service';
import { EventIndexerService } from './event-indexer.service';
import { BlockProcessorService } from './block-processor.service';
import { ReorgDetectorService } from './reorg-detector.service';
import { PersistenceModule } from '../persistence/persistence.module';
import { QueueModule } from '../queue/queue.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
    PersistenceModule,
    QueueModule,
  ],
  providers: [
    IndexerService,
    ChainProviderService,
    EventIndexerService,
    BlockProcessorService,
    ReorgDetectorService,
  ],
  exports: [IndexerService],
})
export class IndexerModule {}