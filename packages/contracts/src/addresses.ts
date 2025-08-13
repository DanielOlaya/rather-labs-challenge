export interface ChainConfig {
  chainId: number;
  name: string;
  rpcUrls: string[];
  contracts: {
    controller: string;
    router: string;
  };
}

export const CHAIN_CONFIGS: Record<number, ChainConfig> = {
  // Ethereum Mainnet
  1: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrls: [
      'https://eth-mainnet.g.alchemy.com/v2/your-api-key',
      'https://mainnet.infura.io/v3/your-api-key'
    ],
    contracts: {
      controller: '0x1234567890123456789012345678901234567890', // TODO: Replace with actual address
      router: '0x2345678901234567890123456789012345678901' // TODO: Replace with actual address
    }
  },
  
  // Polygon
  137: {
    chainId: 137,
    name: 'Polygon',
    rpcUrls: [
      'https://polygon-mainnet.g.alchemy.com/v2/your-api-key',
      'https://polygon-rpc.com/'
    ],
    contracts: {
      controller: '0x3456789012345678901234567890123456789012', // TODO: Replace with actual address
      router: '0x4567890123456789012345678901234567890123' // TODO: Replace with actual address
    }
  },
  
  // Sepolia
  11155111: {
    chainId: 11155111,
    name: 'Sepolia',
    rpcUrls: [
      'https://sepolia.infura.io',
      "wss://sepolia.gateway.tenderly.co",
      "wss://ethereum-sepolia-rpc.publicnode.com",
      "https://ethereum-sepolia-rpc.publicnode.com"
    ],
    contracts: {
      controller: '0xBF69aDA28ed7598dF669DFc0962d0065464Cc311',
      router: '0xfF23C2C86820705b32245AD3a23BA37127978651'
    }
  }
};

export const SUPPORTED_CHAIN_IDS = Object.keys(CHAIN_CONFIGS).map(Number);

export const getChainConfig = (chainId: number): ChainConfig | undefined => {
  return CHAIN_CONFIGS[chainId];
};

export const getContractAddress = (chainId: number, contractType: 'controller' | 'router'): string | undefined => {
  const config = getChainConfig(chainId);
  return config?.contracts[contractType];
};

export const isChainSupported = (chainId: number): boolean => {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
};