import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

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

  get port(): number {
    return this.nestConfigService.get<number>('PORT', 3000);
  }

  get databaseUrl(): string {
    return this.nestConfigService.get<string>('DATABASE_URL');
  }

  get redisUrl(): string {
    return this.nestConfigService.get<string>('REDIS_URL', 'redis://localhost');
  }

  get redisPort(): number {
    return this.nestConfigService.get<number>('REDIS_PORT', 6379);
  }

  get corsOrigins(): string[] {
    const origins = this.nestConfigService.get<string>('CORS_ORIGINS', 'http://localhost:3001');
    return origins.split(',').map(origin => origin.trim());
  }

  get rateLimitTtl(): number {
    return this.nestConfigService.get<number>('RATE_LIMIT_TTL', 60);
  }

  get rateLimitMax(): number {
    return this.nestConfigService.get<number>('RATE_LIMIT_MAX', 100);
  }

  get chainsConfig(): Record<number, ChainConfig> {
    const configPath = this.nestConfigService.get<string>('CHAINS_CONFIG_PATH', '../../config/chains.json');
    try {
      const fs = require('fs');
      const path = require('path');
      const projectRoot = path.resolve(__dirname, '../../../..');
      const absolutePath = path.join(projectRoot, 'config', 'chains.json');
      const chainsData = fs.readFileSync(absolutePath, 'utf8');
      return JSON.parse(chainsData);
    } catch (error) {
      throw new Error(`Failed to load chains configuration from ${configPath}: ${error.message}`);
    }
  }

  get contractAddresses(): Record<number, Record<string, string>> {
    const configPath = this.nestConfigService.get<string>('CONTRACTS_CONFIG_PATH', '../../config/contracts.json');
    try {
      const fs = require('fs');
      const path = require('path');
      const projectRoot = path.resolve(__dirname, '../../../..');
      const absolutePath = path.join(projectRoot, 'config', 'contracts.json');
      const contractsData = fs.readFileSync(absolutePath, 'utf8');
      return JSON.parse(contractsData);
    } catch (error) {
      throw new Error(`Failed to load contracts configuration from ${configPath}: ${error.message}`);
    }
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

  get routerAddress(): string {
    return this.nestConfigService.get<string>('ROUTER_ADDRESS', '0xdea7093551794756A36f85EacD0Bb24c24F0daDe');
  }
}