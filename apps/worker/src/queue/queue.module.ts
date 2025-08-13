import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigService } from '../config/config.service';
import { QueueService } from './queue.service';
import { QUEUES } from './queue.constants';

@Module({
  imports: [
    // BullModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     connection: {
    //       host: new URL(configService.redisUrl).hostname,
    //       port: parseInt(new URL(configService.redisUrl).port) || 6379,
    //       password: new URL(configService.redisUrl).password || undefined,
    //     },
    //     defaultJobOptions: {
    //       removeOnComplete: 10,
    //       removeOnFail: 50,
    //       attempts: 3,
    //       backoff: {
    //         type: 'exponential',
    //         delay: 2000,
    //       },
    //     },
    //   }),
    // }),
    BullModule.forRootAsync({
      // TODO: Fix config import issue
      // imports: [ConfigService],
      // inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: "localhost", //configService.redisUrl || "redis://localhost",
          port: 6379 //configService.redisPort || 6379,
          // password: new URL(configService.redisUrl).password || undefined,
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
      }),
    }),
    BullModule.registerQueue(
      { name: QUEUES.EVENT_BUFFER },
      { name: QUEUES.EVENT_RAW },
      { name: QUEUES.EVENT_LINK },
      { name: QUEUES.OPERATION_CONSOLIDATE },
      { name: QUEUES.REORG_RECOVERY },
    ),
  ],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}