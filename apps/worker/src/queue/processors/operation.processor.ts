import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUES } from '../queue.constants';
import { StorageService } from '../../persistence/storage.service';
import { 
  ConsolidateOperationJob, 
  ReorgRecoveryJob 
} from 'shared-types';

@Processor(QUEUES.OPERATION_CONSOLIDATE)
export class OperationConsolidateProcessor extends WorkerHost {
  private readonly logger = new Logger(OperationConsolidateProcessor.name);

  constructor(private storageService: StorageService) {
    super();
  }

  async process(job: Job<ConsolidateOperationJob>): Promise<void> {
    const { data } = job;
    this.logger.debug(`Processing consolidate operation job for operation ${data.operationId}, data: ${JSON.stringify(data)}`);

    try {
      // Consolidate the operation - update status and finalize
      const operation = await this.storageService.consolidateOperation(data);

      await this.performAdditionalConsolidation(data, operation);

      this.logger.log(`Successfully consolidated operation ${data.operationId} with status ${operation.status}`);

    } catch (error) {
      this.logger.error(`Failed to consolidate operation: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async performAdditionalConsolidation(
    data: ConsolidateOperationJob, 
    operation: any
  ): Promise<void> {
    // TODO:Additional consolidation logic such as:
    // - Calculating final confidence scores
    // - Cleaning up temporary data
    
    this.logger.debug(`Performing additional consolidation for operation ${data.operationId}`);
    
    if (data.triggerEvent?.includes('Completed')) {
      this.logger.debug(`Processing completion trigger: ${data.triggerEvent}`);
    }

    if (operation.status === 'completed') {
      this.logger.debug(`Operation ${data.operationId} completed successfully`);
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<ConsolidateOperationJob>) {
    this.logger.debug(`Consolidate operation job ${job.id} completed for operation ${job.data.operationId}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<ConsolidateOperationJob>, error: Error) {
    this.logger.error(`Consolidate operation job ${job.id} failed for operation ${job.data.operationId}: ${error.message}`);
  }
}

@Processor(QUEUES.REORG_RECOVERY)
export class ReorgRecoveryProcessor extends WorkerHost {
  private readonly logger = new Logger(ReorgRecoveryProcessor.name);

  constructor(private storageService: StorageService) {
    super();
  }

  async process(job: Job<ReorgRecoveryJob>): Promise<void> {
    const { data } = job;
    this.logger.warn(`Processing reorg recovery job for chain ${data.chainId} block ${data.blockNumber}`);

    try {
      // Handle blockchain reorganization recovery
      await this.handleReorganization(data);

      this.logger.log(`Successfully processed reorg recovery for chain ${data.chainId} block ${data.blockNumber}`);

    } catch (error) {
      this.logger.error(`Failed to process reorg recovery: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async handleReorganization(data: ReorgRecoveryJob): Promise<void> {
    this.logger.warn(`Handling reorganization for chain ${data.chainId} starting from block ${data.blockNumber}`);

    // TODO: Reorganization recovery logic:
    // 1. Mark affected transactions as potentially invalid
    // 2. Re-index blocks from the reorganization point
    // 3. Update event statuses
    // 4. Recalculate operation confidence scores
    // 5. Retry failed correlations

    try {
      await this.markAffectedData(data);

      await this.triggerReindexing(data);

      await this.recalculateCorrelations(data);

    } catch (error) {
      this.logger.error(`Error during reorganization handling: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async markAffectedData(data: ReorgRecoveryJob): Promise<void> {
    this.logger.debug(`Marking affected data for chain ${data.chainId} from block ${data.blockNumber}`);
    
    // TODO:
    // - Query for all transactions/events at or after the reorg block
    // - Mark them with a special status indicating they need re-validation
    // - Update operation confidence scores that depended on these events
  }

  private async triggerReindexing(data: ReorgRecoveryJob): Promise<void> {
    this.logger.debug(`Triggering re-indexing for chain ${data.chainId} from block ${data.blockNumber}`);
    
    // TODO:
    // - Signal the indexer to re-process blocks from the reorg point
    // - Queue new raw event jobs for re-discovered events
    // - Remove events that are no longer present in the canonical chain
  }

  private async recalculateCorrelations(data: ReorgRecoveryJob): Promise<void> {
    this.logger.debug(`Recalculating correlations for chain ${data.chainId} affected by reorg`);
    
    // TODO:
    // - Find operations that had events from the affected blocks
    // - Re-run correlation algorithms with updated event data
    // - Update confidence scores based on new chain state
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<ReorgRecoveryJob>) {
    this.logger.debug(`Reorg recovery job ${job.id} completed for chain ${job.data.chainId}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<ReorgRecoveryJob>, error: Error) {
    this.logger.error(`Reorg recovery job ${job.id} failed for chain ${job.data.chainId}: ${error.message}`);
  }
}