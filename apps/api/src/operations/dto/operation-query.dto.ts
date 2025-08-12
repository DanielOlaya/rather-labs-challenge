import { IsOptional, IsString, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { OperationType, OperationStatus } from 'shared-types';

export class OperationQueryDto {
  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsEnum(OperationStatus)
  status?: OperationStatus;

  @IsOptional()
  @IsEnum(OperationType)
  opType?: OperationType;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  fromChain?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  toChain?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @IsOptional()
  @IsString()
  cursor?: string;
}

export class StreamQueryDto {
  @IsString()
  user: string;
}