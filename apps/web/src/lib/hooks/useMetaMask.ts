import { useState, useEffect } from 'react';

export function useMetaMask() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMask = () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        setIsMetaMaskInstalled(true);
        
        // Check if already connected
        if (window.ethereum.selectedAddress) {
          setIsMetaMaskConnected(true);
          setAccount(window.ethereum.selectedAddress);
        }
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          if (accounts.length > 0) {
            setIsMetaMaskConnected(true);
            setAccount(accounts[0]);
          } else {
            setIsMetaMaskConnected(false);
            setAccount(null);
          }
        });
        
        // Listen for chain changes
        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
      } else {
        setIsMetaMaskInstalled(false);
      }
    };

    checkMetaMask();
    
    // Cleanup listeners
    return () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        window.ethereum.removeAllListeners();
      }
    };
  }, []);

  const connectMetaMask = async () => {
    if (!isMetaMaskInstalled) {
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      if (accounts.length > 0) {
        setIsMetaMaskConnected(true);
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error('Failed to connect MetaMask:', error);
    }
  };

  const disconnectMetaMask = () => {
    setIsMetaMaskConnected(false);
    setAccount(null);
  };

  return {
    isMetaMaskInstalled,
    isMetaMaskConnected,
    account,
    connectMetaMask,
    disconnectMetaMask,
  };
}
