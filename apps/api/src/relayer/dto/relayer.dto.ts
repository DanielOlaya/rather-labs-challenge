import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class RelayerMessageDto {
  @IsNumber()
  @IsNotEmpty()
  nonce: number;

  @IsNumber()
  @IsNotEmpty()
  fromChain: number;

  @IsString()
  @IsNotEmpty()
  sender: string;

  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  data: string;

  @IsString()
  @IsNotEmpty()
  messageId: string;
}

export class ChainIdParamDto {
  @IsString()
  @IsNotEmpty()
  chainId: string;
}
