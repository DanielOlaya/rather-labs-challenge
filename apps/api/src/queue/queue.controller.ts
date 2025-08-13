import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { QueueService } from './queue.service';
import { RawEventJob } from 'shared-types';

// TODO: Delete this controller, it was used just for testing

export class AddRawEventDto implements Partial<RawEventJob> {
  chainId: number;
  txHash: string;
  logIndex: number;
  blockNumber: string;
  blockHash: string;
  contractAddress: string;
  eventName: string;
  topics: string[];
  timestamp: Date;
  data: string;
}

@Controller('queue')
export class QueueController {
  constructor(private queueService: QueueService) {}

  @Post('raw-events')
  async addRawEvent(@Body(ValidationPipe) rawEventData: AddRawEventDto) {
    try {
      await this.queueService.addRawEventJob(rawEventData);
      
      return {
        success: true,
        message: 'Raw event added to queue successfully',
        data: {
          chainId: rawEventData.chainId,
          txHash: rawEventData.txHash,
          logIndex: rawEventData.logIndex,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to add raw event to queue',
        error: error.message,
      };
    }
  }

  @Get('health')
  async getQueueHealth() {
    try {
      const health = await this.queueService.getQueueHealth();
      
      return {
        success: true,
        timestamp: new Date().toISOString(),
        queues: health,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to get queue health',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}