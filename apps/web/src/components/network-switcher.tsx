'use client';

import { useNetwork, useSwitchNetwork } from 'wagmi';
import { useSupportedNetwork } from '../lib/hooks/useContracts';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { isSupported, supportedChains } = useSupportedNetwork();
  const [switching, setSwitching] = useState(false);

  const handleSwitchNetwork = async (chainId: number) => {
    if (!switchNetwork) return;
    
    setSwitching(true);
    try {
      await switchNetwork(chainId);
    } catch (error) {
      console.error('Failed to switch network:', error);
    } finally {
      setSwitching(false);
    }
  };

  if (isSupported) {
    return (
      <Alert className="border-green-600 bg-green-950 text-green-100">
        <CheckCircle className="h-4 w-4 text-green-400" />
        <AlertDescription className="text-green-100">
          Connected to {chain?.name} - Smart contracts are available
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="border-orange-600 bg-orange-950 text-orange-100">
      <AlertTriangle className="h-4 w-4 text-orange-400" />
      <AlertDescription className="text-orange-100 mb-3">
        Please switch to a supported network to use the smart contracts
      </AlertDescription>
      <div className="space-y-2">
        {supportedChains.map((chainId) => (
          <Button
            key={chainId}
            size="sm"
            variant="outline"
            onClick={() => handleSwitchNetwork(chainId)}
            disabled={switching}
            className="w-full border-orange-600 text-orange-100 hover:bg-orange-800 hover:text-white disabled:opacity-50"
          >
            {switching ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <CheckCircle className="w-4 h-4 mr-2" />
            )}
            Switch to {chainId === 11155111 ? 'Sepolia Testnet' : chainId === 1 ? 'Ethereum Mainnet' : `Chain ${chainId}`}
          </Button>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-orange-700">
        <p className="text-xs text-orange-200">
          💡 Tip: Make sure MetaMask is connected and you have some test ETH on Sepolia
        </p>
      </div>
    </Alert>
  );
}
