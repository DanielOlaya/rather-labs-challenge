import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { QueueService } from '../queue/queue.service';
import { MonitorIncompleteOperationsJob } from 'shared-types';

@Injectable()
export class MonitoringService implements OnModuleInit {
  private readonly logger = new Logger(MonitoringService.name);

  constructor(
    private queueService: QueueService,
  ) {}

  async onModuleInit() {
    this.logger.log('Monitoring service initialized');
    await this.startMonitoringJob();
  }

  private async startMonitoringJob(): Promise<void> {
    try {
      const monitorJob: MonitorIncompleteOperationsJob = {
        timestamp: new Date(),
        checkInterval: 5,
      };

      await this.queueService.addMonitorIncompleteOperationsJob(monitorJob);
      this.logger.log('Started monitoring job for incomplete operations (every 2 minutes)');
    } catch (error) {
      this.logger.error(`Failed to start monitoring job: ${error.message}`, error.stack);
    }
  }

  //   @Cron('0 */2 * * * *')
  @Cron(CronExpression.EVERY_5_MINUTES)
  async cronMonitorIncompleteOperations() {
    this.logger.debug('Cron job: Checking for incomplete operations...');
    
    try {
      const monitorJob: MonitorIncompleteOperationsJob = {
        timestamp: new Date(),
        checkInterval: 5,
      };

      await this.queueService.addMonitorIncompleteOperationsJob(monitorJob, 0);
      this.logger.debug('Cron job: Added monitoring job for incomplete operations');
    } catch (error) {
      this.logger.error(`Cron job failed to add monitoring job: ${error.message}`, error.stack);
    }
  }

  async triggerMonitoring(): Promise<void> {
    this.logger.log('Manually triggering monitoring of incomplete operations...');
    
    try {
      const monitorJob: MonitorIncompleteOperationsJob = {
        timestamp: new Date(),
        checkInterval: 5,
      };

      await this.queueService.addMonitorIncompleteOperationsJob(monitorJob, 0);
      this.logger.log('Manual monitoring job added successfully');
    } catch (error) {
      this.logger.error(`Failed to add manual monitoring job: ${error.message}`, error.stack);
      throw error;
    }
  }
}
