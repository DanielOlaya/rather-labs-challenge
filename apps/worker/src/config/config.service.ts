import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
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

@Injectable()
export class ConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get databaseUrl(): string {
    return this.nestConfigService.get<string>('DATABASE_URL');
  }

  get redisUrl(): string {
    return this.nestConfigService.get<string>('REDIS_URL', 'redis://localhost:6379');
  }

  get chainsConfig(): Record<number, ChainConfig> {
    const configPath = this.nestConfigService.get<string>('CHAINS_CONFIG_PATH', './config/chains.json');
    try {
      const fs = require('fs');
      const chainsData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(chainsData);
    } catch (error) {
      throw new Error(`Failed to load chains configuration from ${configPath}: ${error.message}`);
    }
  }

  get contractAddresses(): Record<number, Record<string, string>> {
    const configPath = this.nestConfigService.get<string>('CONTRACTS_CONFIG_PATH', './config/contracts.json');
    try {
      const fs = require('fs');
      const contractsData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(contractsData);
    } catch (error) {
      throw new Error(`Failed to load contracts configuration from ${configPath}: ${error.message}`);
    }
  }

  get indexerConfig() {
    return {
      blocksBehind: this.nestConfigService.get<number>('INDEXER_BLOCKS_BEHIND', 6),
      batchSize: this.nestConfigService.get<number>('INDEXER_BATCH_SIZE', 100),
      maxRetries: this.nestConfigService.get<number>('INDEXER_MAX_RETRIES', 3),
      retryDelay: this.nestConfigService.get<number>('INDEXER_RETRY_DELAY', 5000),
      websocketTimeout: this.nestConfigService.get<number>('WEBSOCKET_TIMEOUT', 30000),
    };
  }

  get correlationConfig() {
    return {
      bufferWindowMs: this.nestConfigService.get<number>('CORRELATION_BUFFER_WINDOW_MS', 30000),
      maxRetries: this.nestConfigService.get<number>('CORRELATION_MAX_RETRIES', 3),
      temporalWindowMinutes: this.nestConfigService.get<number>('CORRELATION_TEMPORAL_WINDOW_MINUTES', 10),
      blockProximityThreshold: this.nestConfigService.get<number>('CORRELATION_BLOCK_PROXIMITY_THRESHOLD', 100),
    };
  }

  get environment(): string {
    return this.nestConfigService.get<string>('NODE_ENV', 'development');
  }

  get isDevelopment(): boolean {
    return this.environment === 'development';
  }

  get isProduction(): boolean {
    return this.environment === 'production';
  }
}