import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUES } from '../queue.constants';
import { StorageService } from '../../persistence/storage.service';
import { QueueService } from '../queue.service';
import { 
  RawEventJob, 
  BufferEventJob, 
  LinkEventJob, 
  ConsolidateOperationJob
} from 'shared-types';

@Processor(QUEUES.EVENT_RAW)
export class RawEventProcessor extends WorkerHost {
  private readonly logger = new Logger(RawEventProcessor.name);

  constructor(
    private storageService: StorageService,
    private queueService: QueueService,
  ) {
    super();
  }

  async process(job: Job<RawEventJob>): Promise<void> {
    const { data } = job;
    this.logger.debug(`Processing raw event job for tx ${data.txHash}`);

    try {
      const event = await this.storageService.storeRawEvent(data);

      await this.storageService.parseAndStoreEventData(event);

      // Add to buffer queue for further processing
      const bufferEventJob: BufferEventJob = {
        eventId: event.event_id,
        chainId: data.chainId,
        bufferExpiresAt: new Date(Date.now() + 20000)
      };

      await this.queueService.addBufferEventJob(bufferEventJob, 20000); // 30 second delay

      this.logger.log(`Successfully processed raw event job for tx ${data.txHash}`);

    } catch (error) {
      this.logger.error(`Failed to process raw event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<RawEventJob>) {
    this.logger.debug(`Raw event job ${job.id} completed for tx ${job.data.txHash}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<RawEventJob>, error: Error) {
    this.logger.error(`Raw event job ${job.id} failed for tx ${job.data.txHash}: ${error.message}`);
  }
}

@Processor(QUEUES.EVENT_BUFFER)
export class BufferEventProcessor extends WorkerHost {
  private readonly logger = new Logger(BufferEventProcessor.name);

  constructor(
    private storageService: StorageService,
    private queueService: QueueService,
  ) {
    super();
  }

  async process(job: Job<BufferEventJob>): Promise<void> {
    const { data } = job;
    this.logger.debug(`Processing buffer event job for event ${data.eventId}`);

    try {

      const event = await this.storageService.processBufferedEvent(data);
      if (this.isOperationEvent(event.name)) {
        const linkEventJob: LinkEventJob = {
          eventId: data.eventId,
          operationId: await this.findOperationByTransactionHash(event),
          confidence: this.calculateConfidenceScore(event.name),
          strategy: 'event-based',
        };

        await this.queueService.addLinkEventJob(linkEventJob);
      }

      this.logger.log(`Successfully processed buffer event job for event ${data.eventId}`);

    } catch (error) {
      this.logger.error(`Failed to process buffer event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  private isOperationEvent(eventName: string): boolean {
    const operationEvents = [
      'OperationStarted',
      'OperationCompleted',
      'AddCollateral',
      'CollateralAdded',
      'CollateralRejected',
      'Borrow',
      'BorrowUpdated',
      'BorrowRejected',
      'Withdraw',
      'WithdrawRejected',
      'Withdrawn',
      'MessageSent',
      'MessageReceived'
    ];
    return operationEvents.includes(eventName);
  }

  private async findOperationByTransactionHash(data: any): Promise<string> {
    try {
      if (!data.operation_id) {
        this.logger.debug(`Event ${data.event_id} is not linked to an operation`);
        const existingOperation = await this.storageService.findOperationByTransactionHash(data.tx_hash);
        if (existingOperation) {
          this.logger.debug(`Found existing operation ${existingOperation.op_id} for transaction ${data.tx_hash}`);
          return existingOperation.op_id;
        }
        this.logger.error(`No existing operation found for transaction ${data.tx_hash}`);
        return '';
      }
      this.logger.debug(`Event ${data.event_id} already linked to operation ${data.operation_id}`);
      return data.operation_id;
    } catch (error) {
      this.logger.error(`Failed to create operation for event ${data.event_id}: ${error.message}`);
      // TODO: find a way to handle this error if it happens
      return `op-fallback-${data.event_id}-${Date.now()}`;
    }
  }

  private calculateConfidenceScore(eventName: string): number {
    switch (eventName) {
      case 'OperationStarted':
      case 'OperationCompleted':
        return 95;
      case 'MessageSent':
      case 'MessageReceived':
        return 90;
      case 'AddCollateral':
      case 'CollateralAdded':
      case 'Borrow':
      case 'BorrowUpdated':
      case 'Withdraw':
      case 'Withdrawn':
        return 85;
      case 'CollateralRejected':
      case 'BorrowRejected':
      case 'WithdrawRejected':
        return 75; // Lower confidence for rejected operations
      default:
        return 70;
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<BufferEventJob>) {
    this.logger.debug(`Buffer event job ${job.id} completed for event ${job.data.eventId}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<BufferEventJob>, error: Error) {
    this.logger.error(`Buffer event job ${job.id} failed for event ${job.data.eventId}: ${error.message}`);
  }
}

@Processor(QUEUES.EVENT_LINK)
export class LinkEventProcessor extends WorkerHost {
  private readonly logger = new Logger(LinkEventProcessor.name);

  constructor(
    private storageService: StorageService,
    private queueService: QueueService,
  ) {
    super();
  }

  async process(job: Job<LinkEventJob>): Promise<void> {
    const { data } = job;
    this.logger.debug(`Processing link event job for event ${data.eventId} -> operation ${data.operationId}`);

    try {
      await this.storageService.linkEventToOperation(data);

      if (await this.shouldConsolidateOperation(data.operationId)) {
        const consolidateJob: ConsolidateOperationJob = {
          operationId: data.operationId,
          eventIds: [data.eventId],
          triggerEvent: job.name
        }

        await this.queueService.addConsolidateOperationJob(consolidateJob, 5000); // 5 second delay
      }

      this.logger.log(`Successfully linked event ${data.eventId} to operation ${data.operationId}`);

    } catch (error) {
      this.logger.error(`Failed to process link event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async shouldConsolidateOperation(operationId: string): Promise<boolean> {
    // TODO: Check if operation has all required events linked
    // This would involve checking the operation's current state and linked events
    // For now, return true to demonstrate the flow
    return true;
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<LinkEventJob>) {
    this.logger.debug(`Link event job ${job.id} completed for event ${job.data.eventId}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<LinkEventJob>, error: Error) {
    this.logger.error(`Link event job ${job.id} failed for event ${job.data.eventId}: ${error.message}`);
  }
}