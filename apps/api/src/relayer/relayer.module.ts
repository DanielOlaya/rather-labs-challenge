import { Module } from '@nestjs/common';
import { RelayerService } from './relayer.service';
import { RelayerController } from './relayer.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [RelayerController],
  providers: [RelayerService],
  exports: [RelayerService],
})
export class RelayerModule {}
