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
import { OperationsService } from './operations.service';
import { OperationQueryDto, StreamQueryDto } from './dto/operation-query.dto';

@Controller('operations')
// TODO: Setup and use guard fro rate limiting
// @UseGuards(ThrottlerGuard)
export class OperationsController {
  constructor(private operationsService: OperationsService) {}

  @Get()
  async getOperations(@Query(ValidationPipe) query: OperationQueryDto) {
    return this.operationsService.getOperations(query);
  }

  @Get(':id')
  async getOperationById(@Param('id') id: string) {
    return this.operationsService.getOperationById(id);
  }

  @Sse('stream')
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