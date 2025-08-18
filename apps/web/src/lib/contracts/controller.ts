import { Contract } from 'ethers';
import { ControllerABI } from 'contracts';

export interface AddCollateralParams {
  token: string;
  amount: string;
  fromChain: number;
  toChain: number;
  status: 0 | 1; // 0 = init, 1 = finish
}

export interface BorrowParams {
  token: string;
  amount: string;
  collateralAmount: string;
  fromChain: number;
  toChain: number;
  status: 0 | 1; // 0 = init, 1 = finish
}

export interface WithdrawParams {
  token: string;
  amount: string;
  fromChain: number;
  toChain: number;
  status: 0 | 1; // 0 = init, 1 = finish
}

// Controller contract interaction functions
export class ControllerContract {
  private contract: Contract;

  constructor(contract: Contract) {
    this.contract = contract;
  }

  // Add collateral
  async addCollateral(params: AddCollateralParams) {
    try {
      const tx = await this.contract.addCollateral(
        params.token,
        params.amount,
        params.fromChain,
        params.toChain,
        params.status
      );
      return await tx.wait();
    } catch (error) {
      console.error('Error adding collateral:', error);
      throw error;
    }
  }

  // Borrow against collateral
  async borrow(params: BorrowParams) {
    try {
      const tx = await this.contract.borrow(
        params.token,
        params.amount,
        params.collateralAmount,
        params.fromChain,
        params.toChain,
        params.status
      );
      return await tx.wait();
    } catch (error) {
      console.error('Error borrowing:', error);
      throw error;
    }
  }

  // Withdraw collateral
  async withdraw(params: WithdrawParams) {
    try {
      const tx = await this.contract.withdraw(
        params.token,
        params.amount,
        params.fromChain,
        params.toChain,
        params.status
      );
      return await tx.wait();
    } catch (error) {
      console.error('Error withdrawing:', error);
      throw error;
    }
  }

  // Get user's collateral balance
  async getCollateralBalance(userAddress: string): Promise<string> {
    try {
      const balance = await this.contract.userCollateral(userAddress);
      return balance.toString();
    } catch (error) {
      console.error('Error getting collateral balance:', error);
      throw error;
    }
  }

  // Check if operation exists
  async operationExists(operationId: number): Promise<boolean> {
    try {
      return await this.contract.operations(operationId);
    } catch (error) {
      console.error('Error checking operation existence:', error);
      throw error;
    }
  }

  // Get next operation ID
  async getNextOperationId(): Promise<number> {
    try {
      const nextId = await this.contract.nextOperationId();
      return nextId.toString();
    } catch (error) {
      console.error('Error getting next operation ID:', error);
      throw error;
    }
  }
}
