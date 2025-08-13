import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';
import { ChainRepository } from '../persistence/repositories/chain.repository';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);

  constructor(
    private prismaService: PrismaService,
    private chainRepository: ChainRepository,
    private queueService: QueueService,
  ) {}

  async getOverallHealth() {
    // return {
    //   status: 'healthy',
    //   timestamp: new Date().toISOString(),
    //   message: 'Basic health check - full monitoring temporarily disabled',
    // };
    try {
      const [database, chains, queues] = await Promise.all([
        this.getDatabaseHealth(),
        this.getChainsHealth(),
        this.getQueuesHealth(),
      ]);

      const isHealthy = database.isHealthy && 
                       chains.every(chain => chain.isHealthy) && 
                       Object.values(queues).every((queue: any) => queue.isHealthy);

      return {
        status: isHealthy ? 'healthy' : 'unhealthy',
        timestamp: new Date().toISOString(),
        services: {
          database,
          chains,
          queues,
        },
      };
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`, error.stack);
      return {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
      };
    }
  }

  async getDatabaseHealth() {
    try {
      const isHealthy = await this.prismaService.isHealthy();
      return {
        name: 'database',
        isHealthy,
        details: isHealthy ? 'Connected' : 'Connection failed',
      };
    } catch (error) {
      return {
        name: 'database',
        isHealthy: false,
        details: error.message,
      };
    }
  }

  async getChainsHealth() {
    try {
      const chains = await this.chainRepository.getHealthStatus();
      return chains.map(chain => ({
        chainId: chain.chain_id,
        name: chain.name,
        isHealthy: chain.status === 'active',
        status: chain.status,
        lastBlockProcessed: chain.last_block_processed.toString(),
      }));
    } catch (error) {
      this.logger.error(`Failed to get chains health: ${error.message}`);
      return [];
    }
  }

  async getQueuesHealth() {
    try {
      return await this.queueService.getQueueHealth();
    } catch (error) {
      this.logger.error(`Failed to get queues health: ${error.message}`);
      return {};
    }
  }

  async getChainStatus(chainId: number) {
    // return {
    //   found: true,
    //   chainId,
    //   name: 'Mock Chain',
    //   status: 'active',
    //   lastBlockProcessed: '12345678',
    //   providerUrls: ['https://mock-rpc.com'],
    // };
    try {
      const chain = await this.chainRepository.findById(chainId);
      if (!chain) {
        return {
          found: false,
          chainId,
        };
      }

      return {
        found: true,
        chainId: chain.chain_id,
        name: chain.name,
        status: chain.status,
        lastBlockProcessed: chain.last_block_processed.toString(),
        providerUrls: chain.provider_urls,
      };
    } catch (error) {
      this.logger.error(`Failed to get chain ${chainId} status: ${error.message}`);
      throw error;
    }
  }
}