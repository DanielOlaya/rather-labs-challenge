import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ChainProviderService } from './chain-provider.service';
import { EventIndexerService } from './event-indexer.service';
import { ChainRepository } from '../persistence/repositories/chain.repository';
import { ConfigService } from '../config/config.service';

@Injectable()
export class IndexerService implements OnModuleInit {
  private readonly logger = new Logger(IndexerService.name);
  private isIndexing = new Set<number>();

  constructor(
    private chainProviderService: ChainProviderService,
    private eventIndexerService: EventIndexerService,
    private chainRepository: ChainRepository,
    private configService: ConfigService,
  ) {}

  async onModuleInit() {
    this.logger.log('Indexer service starting up...');
    
    // Initialize chain data
    await this.initializeChains();
    
    // Start WebSocket subscriptions
    await this.startWebSocketSubscriptions();
    
    // Catch up any missed blocks
    await this.performInitialCatchUp();

    this.logger.log('Indexer service initialized');
  }

  private async initializeChains() {
    const chainsConfig = this.configService.chainsConfig;
    
    for (const [chainId, config] of Object.entries(chainsConfig)) {
      const chainIdNum = parseInt(chainId);
      
      try {
        await this.chainRepository.upsert(
          chainIdNum,
          {
            chain_id: chainIdNum,
            name: config.name,
            status: 'active',
            last_block_processed: 0n,
            provider_urls: config.rpcUrls,
          },
          {
            name: config.name,
            provider_urls: config.rpcUrls,
          }
        );

        this.logger.log(`Initialized chain ${config.name} (${chainIdNum})`);
      } catch (error) {
        this.logger.error(`Failed to initialize chain ${chainIdNum}: ${error.message}`);
      }
    }
  }

  private async startWebSocketSubscriptions() {
    const chainIds = this.chainProviderService.getAllChainIds();
    
    for (const chainId of chainIds) {
      try {
        await this.eventIndexerService.subscribeToEvents(chainId);
      } catch (error) {
        this.logger.error(`Failed to start WebSocket subscription for chain ${chainId}: ${error.message}`);
      }
    }
  }

  private async performInitialCatchUp() {
    const chainIds = this.chainProviderService.getAllChainIds();
    
    // Perform catch-up in parallel for better performance
    await Promise.all(
      chainIds.map(async (chainId) => {
        try {
          if (!this.chainProviderService.isChainHealthy(chainId)) {
            this.logger.warn(`Skipping catch-up for unhealthy chain ${chainId}`);
            return;
          }
          
          await this.eventIndexerService.catchUpMissedBlocks(chainId);
        } catch (error) {
          this.logger.error(`Failed initial catch-up for chain ${chainId}: ${error.message}`);
        }
      })
    );
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async performPeriodicCatchUp() {
    const chainIds = this.chainProviderService.getAllChainIds();
    
    for (const chainId of chainIds) {
      if (this.isIndexing.has(chainId)) {
        continue;
      }

      if (!this.chainProviderService.isChainHealthy(chainId)) {
        continue;
      }

      try {
        this.isIndexing.add(chainId);
        await this.eventIndexerService.catchUpMissedBlocks(chainId);
      } catch (error) {
        this.logger.error(`Periodic catch-up failed for chain ${chainId}: ${error.message}`);
      } finally {
        this.isIndexing.delete(chainId);
      }
    }
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async performHealthCheck() {
    const health = this.chainProviderService.getProviderHealth();
    
    for (const [chainId, status] of Object.entries(health)) {
      const chainIdNum = parseInt(chainId);
      
      try {
        this.logger.log(`Logging status hear to define the line below: ${JSON.stringify(status)}`)
        const newStatus = status ? 'active' : 'degraded';
        await this.chainRepository.updateStatus(chainIdNum, newStatus as any);
        
        this.logger.debug(`Updated chain ${chainId} status to ${newStatus}`);
      } catch (error) {
        this.logger.error(`Failed to update chain ${chainId} status: ${error.message}`);
      }
    }
  }

  async getIndexerStatus() {
    const chains = await this.chainRepository.getHealthStatus();
    const providerHealth = this.chainProviderService.getProviderHealth();
    
    return {
      chains: chains.map(chain => ({
        ...chain,
        provider: providerHealth[chain.chain_id],
        isIndexing: this.isIndexing.has(chain.chain_id),
      })),
      activeSubscriptions: this.chainProviderService.getAllChainIds().length,
    };
  }

  async forceReindex(chainId: number, fromBlock?: bigint) {
    if (this.isIndexing.has(chainId)) {
      throw new Error(`Chain ${chainId} is currently being indexed`);
    }

    if (!this.chainProviderService.isChainHealthy(chainId)) {
      throw new Error(`Chain ${chainId} is not healthy`);
    }

    try {
      this.isIndexing.add(chainId);
      
      if (fromBlock !== undefined) {
        // Reset the last processed block
        await this.chainRepository.updateLastBlockProcessed(chainId, fromBlock - 1n);
      }
      
      await this.eventIndexerService.catchUpMissedBlocks(chainId);
      
      this.logger.log(`Force reindex completed for chain ${chainId}`);
    } finally {
      this.isIndexing.delete(chainId);
    }
  }
}