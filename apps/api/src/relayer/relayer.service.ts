import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { ethers, AbiCoder } from 'ethers';
import { RouterABI } from 'contracts';

export interface RelayerMessage {
  nonce: number;
  fromChain: number;
  sender: string;
  recipient: string;
  data: string;
  messageId: string;
}

@Injectable()
export class RelayerService {
  private readonly logger = new Logger(RelayerService.name);
  private readonly routerAbi = RouterABI;

  constructor(private readonly configService: ConfigService) {}

  async relayMessage(message: RelayerMessage, targetChainId: number): Promise<string> {
    try {
      this.logger.log(`Relaying message ${message.messageId} to chain ${targetChainId}`);
      
      // TODO: remove this for real crosschain relaying lol
      targetChainId = 11155111;

      const coder = AbiCoder.defaultAbiCoder();
      const [opType, user, token, amount, operationId] = coder.decode(
        ["uint8","address","address","uint256","uint256"],
        message.data
      );
      console.log({ opType, user, token, amount: amount.toString(), operationId: operationId.toString() });
      
      const chainsConfig = this.configService.chainsConfig;
      const targetChain = chainsConfig[targetChainId];
      
      if (!targetChain) {
        throw new Error(`Chain ${targetChainId} not configured`);
      }

      const privateKey = process.env.RELAYER_PRIVATE_KEY;
      if (!privateKey) {
        throw new Error('RELAYER_PRIVATE_KEY environment variable not set');
      }

      const provider = new ethers.JsonRpcProvider(targetChain.rpcUrls[0]);
      const wallet = new ethers.Wallet(privateKey, provider);

      const routerContract = new ethers.Contract(
        this.configService.routerAddress,
        this.routerAbi,
        wallet
      );

      const txParams = {
        nonce: message.nonce,
        fromChain: message.fromChain,
        sender: message.sender,
        recipient: message.recipient,
        data: message.data,
        messageId: message.messageId
      };

      const gasEstimate = await routerContract.receiveMessage.estimateGas(
        txParams.nonce,
        txParams.fromChain,
        txParams.sender,
        txParams.recipient,
        txParams.data,
        txParams.messageId
      );

      const tx = await routerContract.receiveMessage(
        txParams.nonce,
        txParams.fromChain,
        txParams.sender,
        txParams.recipient,
        txParams.data,
        txParams.messageId,
        {
          gasLimit: (gasEstimate * 110n) / 100n // Add 10% buffer
        }
      );

      this.logger.log(`Transaction sent: ${tx.hash}`);
      
      // const receipt = await tx.wait();
      // this.logger.log(`Transaction confirmed in block ${receipt.blockNumber}`);
      
      return tx.hash;
    } catch (error) {
      this.logger.error(`Failed to relay message: ${error.message}`, error.stack);
      throw error;
    }
  }
}
