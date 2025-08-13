import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { PersistenceModule } from './persistence/persistence.module';
import { QueueModule } from './queue/queue.module';
import { IndexerModule } from './indexer/indexer.module';
// import { CorrelationModule } from './correlation/correlation.module';

@Module({
  imports: [
    ConfigModule,
    PersistenceModule,
    QueueModule,
    IndexerModule,
    // CorrelationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
