import { Module, forwardRef } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { IndexerService } from './indexer.service';
import { ChainProviderService } from './chain-provider.service';
import { EventIndexerService } from './event-indexer.service';
import { MonitoringService } from './monitoring.service';
import { PersistenceModule } from '../persistence/persistence.module';
import { QueueModule } from '../queue/queue.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
    PersistenceModule,
    forwardRef(() => QueueModule),
  ],
  providers: [
    IndexerService,
    ChainProviderService,
    EventIndexerService,
    MonitoringService,
  ],
  exports: [IndexerService, ChainProviderService],
})
export class IndexerModule {}