import { 
  Controller, 
  Post, 
  Body, 
  Param, 
  ValidationPipe, 
  UseGuards,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { RelayerService } from './relayer.service';
import { RelayerMessageDto, ChainIdParamDto } from './dto/relayer.dto';

@Controller('relayer')
// @UseGuards(ThrottlerGuard)
export class RelayerController {
  constructor(private readonly relayerService: RelayerService) {}

  @Post('relay/:chainId')
  async relayMessage(
    @Param(ValidationPipe) params: ChainIdParamDto,
    @Body(ValidationPipe) message: RelayerMessageDto
  ) {
    try {
      const chainIdNum = parseInt(params.chainId, 10);
      if (isNaN(chainIdNum)) {
        throw new HttpException('Invalid chain ID', HttpStatus.BAD_REQUEST);
      }

      const txHash = await this.relayerService.relayMessage(message, chainIdNum);
      
      return {
        success: true,
        transactionHash: txHash,
        messageId: message.messageId,
        targetChain: chainIdNum
      };
    } catch (error) {
      throw new HttpException(
        `Failed to relay message: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
