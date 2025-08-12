import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { PersistenceModule } from '../persistence/persistence.module';  // Temporarily disabled
import { QueueModule } from '../queue/queue.module';  // Temporarily disabled

@Module({
  imports: [
    PersistenceModule,  // Temporarily disabled
    QueueModule  // Temporarily disabled
  ],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}