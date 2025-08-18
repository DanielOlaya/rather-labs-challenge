// Contract addresses for each supported chain
// TODO: get this contracts from the JSON file  
export const CONTRACT_ADDRESSES = {
  11155111: { // Sepolia
    controller: '0x3c56Ab0a27aaA7E6D11a8f439D79750F1098e15D',
    router: '0xdea7093551794756A36f85EacD0Bb24c24F0daDe'
  },
  // Add other chains as they get deployed
};

// Contract types
export type ContractType = 'controller' | 'router';

// Get contract address for a specific chain and contract type
export function getContractAddress(chainId: number, contractType: ContractType): string | undefined {
  return CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES]?.[contractType];
}

// Check if a chain has contracts deployed
export function hasContracts(chainId: number): boolean {
  const addresses = CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES];
  return !!(addresses?.controller && addresses?.router);
}

// Get all supported chains that have contracts deployed
export function getSupportedChainsWithContracts(): number[] {
  return Object.keys(CONTRACT_ADDRESSES).map(Number).filter(hasContracts);
}

// Contract configuration for the current setup
export const CONTRACT_CONFIG = {
  supportedChains: getSupportedChainsWithContracts(),
  defaultChain: 11155111, // Sepolia
  contracts: CONTRACT_ADDRESSES,
};
