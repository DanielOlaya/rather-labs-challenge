import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient, Prisma } from 'prisma';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private _client: PrismaClient;

  constructor() {
    this._client = new PrismaClient({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      errorFormat: 'colorless',
    });
  }

  // Delegate all Prisma client methods
  get chain() { return this._client.chain; }
  get contract() { return this._client.contract; }
  get transaction() { return this._client.transaction; }
  get event() { return this._client.event; }
  get message() { return this._client.message; }
  get operation() { return this._client.operation; }

  get $transaction() { return this._client.$transaction.bind(this._client); }
  get $queryRaw() { return this._client.$queryRaw.bind(this._client); }
  get $executeRaw() { return this._client.$executeRaw.bind(this._client); }
  get $connect() { return this._client.$connect.bind(this._client); }
  get $disconnect() { return this._client.$disconnect.bind(this._client); }
  get $on() { return this._client.$on.bind(this._client); }

  async onModuleInit() {
    (this._client.$on as any)('query', (event: Prisma.QueryEvent) => {
      this.logger.debug(
        `Query: ${event.query} - Params: ${event.params} - Duration: ${event.duration}ms`,
      );
    });

    try {
      await this._client.$connect();
      this.logger.log('Successfully connected to database');
    } catch (error) {
      this.logger.error('Failed to connect to database', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this._client.$disconnect();
      this.logger.log('Successfully disconnected from database');
    } catch (error) {
      this.logger.error('Failed to disconnect from database', error);
    }
  }

  async isHealthy(): Promise<boolean> {
    try {
      await this._client.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }
}