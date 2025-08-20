import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { QUEUES } from './queue.constants';

@Module({
  imports: [
    ConfigModule,
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
    ),
  ],
  controllers: [QueueController],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}