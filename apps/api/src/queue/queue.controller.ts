import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody, 
  ApiOkResponse, 
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger';
import { QueueService } from './queue.service';
import { RawEventJob } from 'shared-types';
import { 
  SuccessResponseSchema, 
  ErrorResponseSchema 
} from '../schemas/api-schemas';

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

@ApiTags('queue')
@Controller('queue')
export class QueueController {
  constructor(private queueService: QueueService) {}

  @Post('raw-events')
  @ApiOperation({ 
    summary: 'Add raw event to processing queue',
    description: 'Add a raw blockchain event to the processing queue for cross-chain operation handling'
  })
  @ApiBody({ 
    type: AddRawEventDto,
    description: 'Raw event data to be processed'
  })
  @ApiOkResponse({ 
    description: 'Raw event added to queue successfully',
    schema: { $ref: '#/components/schemas/SuccessResponseSchema' }
  })
  @ApiBadRequestResponse({ description: 'Invalid event data' })
  @ApiInternalServerErrorResponse({ description: 'Failed to add event to queue' })
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
  @ApiOperation({ 
    summary: 'Get queue system health',
    description: 'Check the health status of all processing queues'
  })
  @ApiOkResponse({ 
    description: 'Queue health status retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        timestamp: { type: 'string', format: 'date-time' },
        queues: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: {
              waiting: { type: 'number' },
              active: { type: 'number' },
              completed: { type: 'number' },
              failed: { type: 'number' }
            }
          }
        }
      }
    }
  })
  @ApiInternalServerErrorResponse({ description: 'Failed to get queue health' })
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