import { ethers } from 'ethers';
import { getChainConfig, getContractAddress } from './addresses';
import ControllerABI from './abis/Controller.json';
import RouterABI from './abis/Router.json';


export class ContractFactory {
  private providers: Map<number, ethers.Provider> = new Map();

  constructor(private rpcConfigs?: Record<number, string[]>) {}

  getProvider(chainId: number): ethers.Provider {
    if (!this.providers.has(chainId)) {
      const config = getChainConfig(chainId);
      if (!config) {
        throw new Error(`Unsupported chain ID: ${chainId}`);
      }

      const rpcUrls = this.rpcConfigs?.[chainId] || config.rpcUrls;
      
      let provider: ethers.Provider;
      for (const rpcUrl of rpcUrls) {
        try {
          provider = new ethers.JsonRpcProvider(rpcUrl);
          break;
        } catch (error) {
          console.warn(`Failed to connect to ${rpcUrl}:`, error);
          continue;
        }
      }

      if (!provider!) {
        throw new Error(`Failed to connect to any RPC URL for chain ${chainId}`);
      }
      this.providers.set(chainId, provider);
    }
    return this.providers.get(chainId)!;
  }

  getControllerContract(chainId: number, signerOrProvider?: ethers.Signer | ethers.Provider): ethers.Contract {
    const address = getContractAddress(chainId, 'controller');
    if (!address) {
      throw new Error(`Controller contract not deployed on chain ${chainId}`);
    }

    const provider = signerOrProvider || this.getProvider(chainId);
    return new ethers.Contract(address, ControllerABI, provider);
  }

  getRouterContract(chainId: number, signerOrProvider?: ethers.Signer | ethers.Provider): ethers.Contract {
    const address = getContractAddress(chainId, 'router');
    if (!address) {
      throw new Error(`Router contract not deployed on chain ${chainId}`);
    }

    const provider = signerOrProvider || this.getProvider(chainId);
    return new ethers.Contract(address, RouterABI, provider);
  }

  getContracts(chainId: number, signerOrProvider?: ethers.Signer | ethers.Provider) {
    return {
      controller: this.getControllerContract(chainId, signerOrProvider),
      router: this.getRouterContract(chainId, signerOrProvider)
    };
  }

  async disconnect(): Promise<void> {
    for (const provider of this.providers.values()) {
      if ('destroy' in provider && typeof provider.destroy === 'function') {
        await provider.destroy();
      }
    }
    this.providers.clear();
  }
}


export class EventParser {
  private controllerInterface: ethers.Interface;
  private routerInterface: ethers.Interface;

  constructor() {
    this.controllerInterface = new ethers.Interface(ControllerABI);
    this.routerInterface = new ethers.Interface(RouterABI);
  }

  parseLog(log: ethers.Log, contractType: 'controller' | 'router'): ethers.LogDescription | null {
    try {
      const iface = contractType === 'controller' ? this.controllerInterface : this.routerInterface;
      return iface.parseLog(log);
    } catch (error) {
      console.warn(`Failed to parse log for ${contractType}:`, error);
      return null;
    }
  }

  parseLogs(logs: ethers.Log[], contractType: 'controller' | 'router'): ethers.LogDescription[] {
    return logs
      .map(log => this.parseLog(log, contractType))
      .filter((parsed): parsed is ethers.LogDescription => parsed !== null);
  }
}


export class TransactionUtils {

  static async waitForConfirmation(
    provider: ethers.Provider,
    txHash: string,
    confirmations: number = 1,
    timeoutMs: number = 300000 // 5 minutes
  ): Promise<ethers.TransactionReceipt> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        provider.removeAllListeners(txHash);
        reject(new Error(`Transaction ${txHash} timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      provider.waitForTransaction(txHash, confirmations).then((receipt) => {
        clearTimeout(timeout);
        if (receipt) {
          resolve(receipt);
        } else {
          reject(new Error(`Transaction ${txHash} was not mined`));
        }
      }).catch((error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  static async estimateGasWithBuffer(
    contract: ethers.Contract,
    method: string,
    args: any[],
    bufferPercent: number = 20
  ): Promise<bigint> {
    const estimated = await contract[method].estimateGas(...args);
    const buffer = estimated * BigInt(bufferPercent) / BigInt(100);
    return estimated + buffer;
  }
}