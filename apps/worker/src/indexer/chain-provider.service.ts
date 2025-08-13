import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { createPublicClient, http, webSocket, PublicClient } from 'viem';
import { mainnet, polygon, sepolia } from 'viem/chains';
import { ConfigService } from '../config/config.service';
// import { ChainConfig } from 'shared-types';

interface ChainConfig {
  chainId: number;
  name: string;
  rpcUrls: string[];
  contracts: {
    controller: string;
    router: string;
  };
}

const CHAIN_CONFIGS = {
  // 1: mainnet,
  // 137: polygon,
  11155111: sepolia
};

interface ChainProvider {
  chainId: number;
  config: ChainConfig;
  wsClient?: PublicClient;
  httpClient: PublicClient;
  currentProviderIndex: number;
  isHealthy: boolean;
  lastHealthCheck: Date;
  consecutiveFailures: number;
}

@Injectable()
export class ChainProviderService implements OnModuleDestroy {
  private readonly logger = new Logger(ChainProviderService.name);
  private readonly providers = new Map<number, ChainProvider>();
  private readonly healthCheckInterval = 30000; // 30 secs
  private readonly maxFailures = 3;
  private healthCheckTimers = new Map<number, NodeJS.Timeout>();

  constructor(private configService: ConfigService) {
    this.initializeProviders();
  }

  private initializeProviders() {
    const chainsConfig = this.configService.chainsConfig;
    
    for (const [chainId, config] of Object.entries(chainsConfig)) {
      const chainIdNum = parseInt(chainId);
      const viemChain = CHAIN_CONFIGS[chainIdNum];
      
      if (!viemChain) {
        this.logger.warn(`No viem chain configuration for chain ${chainIdNum}`);
        continue;
      }

      this.setupChainProvider(chainIdNum, config, viemChain);
    }
  }

  private setupChainProvider(chainId: number, config: ChainConfig, viemChain: any) {
    try {
      console.log(config)
      const httpClient = createPublicClient({
        chain: viemChain,
        transport: http(config.rpcUrls[0], {
          timeout: 30000,
          retryCount: 2,
          retryDelay: 1000,
        }),
      });

      const provider: ChainProvider = {
        chainId,
        config,
        httpClient,
        currentProviderIndex: 0,
        isHealthy: true,
        lastHealthCheck: new Date(),
        consecutiveFailures: 0,
      };

      // Setup WebSocket if available
      const wsUrl = config.rpcUrls.find(url => url.startsWith('ws'));
      if (wsUrl) {
        try {
          provider.wsClient = createPublicClient({
            chain: viemChain,
            transport: webSocket(wsUrl, {
              timeout: this.configService.indexerConfig.websocketTimeout,
            }),
          });
          this.logger.log(`WebSocket client initialized for chain ${chainId}`);
        } catch (error) {
          this.logger.warn(`Failed to initialize WebSocket for chain ${chainId}: ${error.message}`);
        }
      }

      this.providers.set(chainId, provider);
      this.startHealthCheck(chainId);
      
      this.logger.log(`Chain provider initialized for ${config.name} (${chainId})`);
    } catch (error) {
      this.logger.error(`Failed to setup provider for chain ${chainId}: ${error.message}`);
    }
  }

  private startHealthCheck(chainId: number) {
    const timer = setInterval(() => {
      this.performHealthCheck(chainId);
    }, this.healthCheckInterval);

    this.healthCheckTimers.set(chainId, timer);
  }

  private async performHealthCheck(chainId: number) {
    const provider = this.providers.get(chainId);
    if (!provider) return;

    try {
      const blockNumber = await provider.httpClient.getBlockNumber();
      provider.isHealthy = true;
      provider.consecutiveFailures = 0;
      provider.lastHealthCheck = new Date();
      
      this.logger.debug(`Health check passed for chain ${chainId}, block: ${blockNumber}`);
    } catch (error) {
      provider.consecutiveFailures++;
      provider.lastHealthCheck = new Date();
      
      this.logger.warn(`Health check failed for chain ${chainId}: ${error.message}`);
      
      if (provider.consecutiveFailures >= this.maxFailures) {
        provider.isHealthy = false;
        await this.switchToNextProvider(chainId);
      }
    }
  }

  private async switchToNextProvider(chainId: number) {
    const provider = this.providers.get(chainId);
    if (!provider || provider.config.rpcUrls.length <= 1) return;

    const nextIndex = (provider.currentProviderIndex + 1) % provider.config.rpcUrls.length;
    const nextUrl = provider.config.rpcUrls[nextIndex];
    
    try {
      const viemChain = CHAIN_CONFIGS[chainId];
      const newClient = createPublicClient({
        chain: viemChain,
        transport: http(nextUrl, {
          timeout: 30000,
          retryCount: 2,
          retryDelay: 1000,
        }),
      });

      provider.httpClient = newClient;
      provider.currentProviderIndex = nextIndex;
      provider.consecutiveFailures = 0;
      provider.isHealthy = true;
      
      this.logger.log(`Switched to provider ${nextIndex} for chain ${chainId}: ${nextUrl}`);
    } catch (error) {
      this.logger.error(`Failed to switch provider for chain ${chainId}: ${error.message}`);
    }
  }

  getHttpClient(chainId: number): PublicClient | null {
    const provider = this.providers.get(chainId);
    return provider?.isHealthy ? provider.httpClient : null;
  }

  getWebSocketClient(chainId: number): PublicClient | null {
    const provider = this.providers.get(chainId);
    return provider?.isHealthy ? provider.wsClient : null;
  }

  isChainHealthy(chainId: number): boolean {
    return this.providers.get(chainId)?.isHealthy ?? false;
  }

  getChainConfig(chainId: number): ChainConfig | null {
    return this.providers.get(chainId)?.config ?? null;
  }

  getAllChainIds(): number[] {
    return Array.from(this.providers.keys());
  }

  getProviderHealth() {
    const health = {};
    
    for (const [chainId, provider] of this.providers) {
      health[chainId] = {
        name: provider.config.name,
        isHealthy: provider.isHealthy,
        currentProviderIndex: provider.currentProviderIndex,
        consecutiveFailures: provider.consecutiveFailures,
        lastHealthCheck: provider.lastHealthCheck,
        hasWebSocket: !!provider.wsClient,
      };
    }
    
    return health;
  }

  async onModuleDestroy() {
    // Clear health check timers
    for (const timer of this.healthCheckTimers.values()) {
      clearInterval(timer);
    }
    this.healthCheckTimers.clear();

    // Close WebSocket connections
    // for (const provider of this.providers.values()) {
    //   if (provider.wsClient) {
    //     try {
    //       await provider.wsClient.disconnect();
    //     } catch (error) {
    //       this.logger.warn(`Error disconnecting WebSocket for chain ${provider.chainId}: ${error.message}`);
    //     }
    //   }
    // }

    this.logger.log('Chain provider service destroyed');
  }
}