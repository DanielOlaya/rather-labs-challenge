import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { PersistenceModule } from './persistence/persistence.module';
import { QueueModule } from './queue/queue.module';
import { HealthModule } from './health/health.module';
import { OperationsModule } from './operations/operations.module';
import { RelayerModule } from './relayer/relayer.module';

@Module({
  imports: [
    ConfigModule,
    PersistenceModule,
    QueueModule,
    HealthModule,
    OperationsModule,
    RelayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
