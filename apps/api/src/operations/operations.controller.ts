import { 
  Controller, 
  Get, 
  Query, 
  Param, 
  ValidationPipe, 
  UseGuards,
  Sse,
  MessageEvent,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Observable, interval, map, switchMap, filter } from 'rxjs';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiQuery,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse
} from '@nestjs/swagger';
import { OperationsService } from './operations.service';
import { OperationQueryDto, StreamQueryDto } from './dto/operation-query.dto';
import { 
  OperationSchema, 
  OperationWithDetailsSchema, 
  SuccessResponseSchema 
} from '../schemas/api-schemas';

@ApiTags('operations')
@Controller('operations')
// TODO: Setup and use guard fro rate limiting
// @UseGuards(ThrottlerGuard)
export class OperationsController {
  constructor(private operationsService: OperationsService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get operations with filters and pagination',
    description: 'Retrieve a paginated list of cross-chain lending operations with optional filtering'
  })
  @ApiQuery({ name: 'userAddress', required: false, description: 'Filter by user address' })
  @ApiQuery({ name: 'status', required: false, description: 'Filter by operation status' })
  @ApiQuery({ name: 'opType', required: false, description: 'Filter by operation type' })
  @ApiQuery({ name: 'fromChain', required: false, description: 'Filter by source chain ID' })
  @ApiQuery({ name: 'toChain', required: false, description: 'Filter by destination chain ID' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of operations per page (default: 20)' })
  @ApiQuery({ name: 'cursor', required: false, description: 'Cursor for pagination' })
  @ApiOkResponse({ 
    description: 'List of operations retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        operations: {
          type: 'array',
          items: { $ref: '#/components/schemas/OperationSchema' }
        },
        hasMore: { type: 'boolean' }
      }
    }
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameters' })
  async getOperations(@Query(ValidationPipe) query: OperationQueryDto) {
    return this.operationsService.getOperations(query);
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get operation by ID',
    description: 'Retrieve detailed information about a specific cross-chain lending operation'
  })
  @ApiParam({ name: 'id', description: 'Operation ID' })
  @ApiOkResponse({ 
    description: 'Operation details retrieved successfully',
    schema: { $ref: '#/components/schemas/OperationWithDetailsSchema' }
  })
  @ApiNotFoundResponse({ description: 'Operation not found' })
  async getOperationById(@Param('id') id: string) {
    return this.operationsService.getOperationById(id);
  }

  @Sse('stream')
  @ApiOperation({ 
    summary: 'Stream operations updates',
    description: 'Server-Sent Events stream for real-time operation updates'
  })
  @ApiQuery({ name: 'user', required: true, description: 'User address to stream operations for' })
  @ApiResponse({ 
    status: 200, 
    description: 'SSE stream established',
    content: {
      'text/event-stream': {
        schema: {
          type: 'string',
          example: 'data: {"type":"operations_update","operations":[],"timestamp":"2024-01-01T00:00:00.000Z"}'
        }
      }
    }
  })
  streamOperations(@Query(ValidationPipe) query: StreamQueryDto): Observable<MessageEvent> {
    return interval(5000).pipe( // Poll every 5 seconds
      switchMap(() => this.operationsService.getOperationsByUser(query.user)),
      map(operations => ({
        data: {
          type: 'operations_update',
          operations,
          timestamp: new Date().toISOString(),
        },
      })),
    );
  }
}