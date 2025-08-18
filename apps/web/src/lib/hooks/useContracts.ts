import { useAccount, useNetwork, useWalletClient } from 'wagmi';
import { useState, useEffect } from 'react';
import { CONTRACT_ADDRESSES } from '../contracts';
import { ControllerABI, RouterABI, ethers } from 'contracts';

// Extend Window interface for ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Hook to get the Controller contract instance
export function useControllerContract() {
  const { chain } = useNetwork();
  const { data: walletClient } = useWalletClient();
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  
  const chainId = chain?.id;
  const controllerAddress = chainId ? CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES]?.controller : undefined;
  
  useEffect(() => {
    async function createContract() {
      if (controllerAddress && walletClient && typeof window !== 'undefined' && window.ethereum) {
        try {
          // Use window.ethereum directly for now
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contractInstance = new ethers.Contract(controllerAddress, ControllerABI, signer);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error creating controller contract:', error);
          setContract(null);
        }
      } else {
        setContract(null);
      }
    }
    
    createContract();
  }, [controllerAddress, walletClient]);
  
  return {
    contract,
    address: controllerAddress,
    chainId,
    isSupported: !!controllerAddress && !!walletClient && !!window.ethereum,
  };
}

// Hook to get the Router contract instance
export function useRouterContract() {
  const { chain } = useNetwork();
  const { data: walletClient } = useWalletClient();
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  
  const chainId = chain?.id;
  const routerAddress = chainId ? CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES]?.router : undefined;
  
  useEffect(() => {
    async function createContract() {
      if (routerAddress && walletClient && typeof window !== 'undefined' && window.ethereum) {
        try {
          // Use window.ethereum directly for now
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contractInstance = new ethers.Contract(routerAddress, RouterABI, signer);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error creating router contract:', error);
          setContract(null);
        }
      } else {
        setContract(null);
      }
    }
    
    createContract();
  }, [routerAddress, walletClient]);
  
  return {
    contract,
    address: routerAddress,
    chainId,
    isSupported: !!routerAddress && !!walletClient && !!window.ethereum,
  };
}

// Hook to get both contracts
export function useContracts() {
  const controller = useControllerContract();
  const router = useRouterContract();
  
  return {
    controller,
    router,
    isSupported: controller.isSupported && router.isSupported,
    chainId: controller.chainId,
  };
}

// Hook to check if current network is supported
export function useSupportedNetwork() {
  const { chain } = useNetwork();
  const chainId = chain?.id;
  
  return {
    chainId,
    isSupported: chainId ? !!CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES] : false,
    supportedChains: Object.keys(CONTRACT_ADDRESSES).map(Number),
  };
}
