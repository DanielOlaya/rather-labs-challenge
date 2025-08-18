import { Contract } from 'ethers';
import { RouterABI } from 'contracts';

export interface SendMessageParams {
  toChain: number;
  recipient: string;
  data: string;
  operationType: number; // 0: AddCollateral, 1: Borrow, 2: Withdraw
}

// Router contract interaction functions
export class RouterContract {
  private contract: Contract;

  constructor(contract: Contract) {
    this.contract = contract;
  }

  // Send cross-chain message
  async sendMessage(params: SendMessageParams) {
    try {
      const tx = await this.contract.sendMessage(
        params.toChain,
        params.recipient,
        params.data,
        params.operationType
      );
      return await tx.wait();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  // Get message nonce
  async getMessageNonce(): Promise<number> {
    try {
      const nonce = await this.contract.getMessageNonce();
      return nonce.toNumber();
    } catch (error) {
      console.error('Error getting message nonce:', error);
      throw error;
    }
  }

  // Check if message is processed
  async isMessageProcessed(nonce: number): Promise<boolean> {
    try {
      return await this.contract.isMessageProcessed(nonce);
    } catch (error) {
      console.error('Error checking message status:', error);
      throw error;
    }
  }
}
