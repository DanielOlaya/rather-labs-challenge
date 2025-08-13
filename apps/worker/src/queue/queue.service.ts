import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QUEUES } from './queue.constants';
import { 
  RawEventJob, 
  BufferEventJob, 
  LinkEventJob, 
  ConsolidateOperationJob, 
  ReorgRecoveryJob 
} from 'shared-types';

@Injectable()
export class QueueService {
  private readonly logger = new Logger(QueueService.name);

  constructor(
    @InjectQueue(QUEUES.EVENT_BUFFER) private eventBufferQueue: Queue<BufferEventJob>,
    @InjectQueue(QUEUES.EVENT_RAW) private eventRawQueue: Queue<RawEventJob>,
    @InjectQueue(QUEUES.EVENT_LINK) private eventLinkQueue: Queue<LinkEventJob>,
    @InjectQueue(QUEUES.OPERATION_CONSOLIDATE) private operationConsolidateQueue: Queue<ConsolidateOperationJob>,
    @InjectQueue(QUEUES.REORG_RECOVERY) private reorgRecoveryQueue: Queue<ReorgRecoveryJob>,
  ) {}

  async addRawEventJob(data: RawEventJob, delay?: number): Promise<void> {
    try {
      await this.eventRawQueue.add('process-raw-event', data, {
        delay,
        jobId: `raw-event-${data.chainId}-${data.txHash}-${data.logIndex}`,
      });
      this.logger.debug(`Added raw event job for tx ${data.txHash}`);
    } catch (error) {
      this.logger.error(`Failed to add raw event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  async addBufferEventJob(data: BufferEventJob, delay: number = 30000): Promise<void> {
    try {
      await this.eventBufferQueue.add('buffer-event', data, {
        delay,
        jobId: `buffer-event-${data.eventId}`,
      });
      this.logger.debug(`Added buffer event job for event ${data.eventId}`);
    } catch (error) {
      this.logger.error(`Failed to add buffer event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  async addLinkEventJob(data: LinkEventJob, priority?: number): Promise<void> {
    try {
      await this.eventLinkQueue.add('link-event', data, {
        priority,
        jobId: `link-event-${data.eventId}`,
      });
      this.logger.debug(`Added link event job for event ${data.eventId}`);
    } catch (error) {
      this.logger.error(`Failed to add link event job: ${error.message}`, error.stack);
      throw error;
    }
  }

  async addConsolidateOperationJob(data: ConsolidateOperationJob, delay?: number): Promise<void> {
    try {
      await this.operationConsolidateQueue.add('consolidate-operation', data, {
        delay,
        jobId: `consolidate-op-${data.operationId}`,
      });
      this.logger.debug(`Added consolidate operation job for operation ${data.operationId}`);
    } catch (error) {
      this.logger.error(`Failed to add consolidate operation job: ${error.message}`, error.stack);
      throw error;
    }
  }

  async addReorgRecoveryJob(data: ReorgRecoveryJob, priority: number = 1): Promise<void> {
    try {
      await this.reorgRecoveryQueue.add('reorg-recovery', data, {
        priority,
        jobId: `reorg-recovery-${data.chainId}-${data.blockNumber}`,
      });
      this.logger.warn(`Added reorg recovery job for chain ${data.chainId} block ${data.blockNumber}`);
    } catch (error) {
      this.logger.error(`Failed to add reorg recovery job: ${error.message}`, error.stack);
      throw error;
    }
  }

  async getQueueHealth() {
    const queues = [
      { name: 'event:buffer', queue: this.eventBufferQueue },
      { name: 'event:raw', queue: this.eventRawQueue },
      { name: 'event:link', queue: this.eventLinkQueue },
      { name: 'op:consolidate', queue: this.operationConsolidateQueue },
      { name: 'reorg:recovery', queue: this.reorgRecoveryQueue },
    ];

    const health = {};
    
    for (const { name, queue } of queues) {
      try {
        const [waiting, active, completed, failed] = await Promise.all([
          queue.getWaiting(),
          queue.getActive(),
          queue.getCompleted(),
          queue.getFailed(),
        ]);

        health[name] = {
          waiting: waiting.length,
          active: active.length,
          completed: completed.length,
          failed: failed.length,
          isHealthy: true,
        };
      } catch (error) {
        health[name] = {
          isHealthy: false,
          error: error.message,
        };
      }
    }

    return health;
  }
}