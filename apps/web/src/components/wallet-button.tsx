'use client';

import { useConnect, useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { Button } from './ui/button';
import { formatAddress, getChainName } from '@/lib/utils';
import { ChevronDown, Wallet, LogOut, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [showConnectors, setShowConnectors] = useState(false);

  // Get MetaMask connector
  const metaMaskConnector = connectors.find(c => c.name === 'MetaMask');

  const handleConnect = async () => {
    if (metaMaskConnector) {
      try {
        await connect({ connector: metaMaskConnector });
        setShowConnectors(false);
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        {chain && (
          <div className="px-3 py-1 text-sm bg-blue-900 text-blue-200 rounded-full">
            {getChainName(chain.id)}
          </div>
        )}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600">
          <Wallet className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium text-gray-200">
            {formatAddress(address)}
          </span>
          <Button
            onClick={handleDisconnect}
            size="sm"
            variant="ghost"
            className="p-1 h-auto text-gray-300 hover:text-white hover:bg-gray-600"
            title="Disconnect"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setShowConnectors(!showConnectors)}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Wallet className="w-4 h-4" />
        Connect MetaMask
        <ChevronDown className="w-4 h-4" />
      </Button>

      {showConnectors && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-white mb-2">Connect Wallet</h3>
              <p className="text-xs text-gray-400">
                Connect your MetaMask wallet to use the DApp
              </p>
            </div>
            
            {metaMaskConnector ? (
              <Button
                onClick={handleConnect}
                className="w-full justify-start text-gray-200 hover:text-white hover:bg-gray-700 bg-gray-700 border border-gray-600"
              >
                <Wallet className="w-4 h-4 mr-2" />
                MetaMask
              </Button>
            ) : (
              <div className="text-center py-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-yellow-200">MetaMask not detected</p>
                <p className="text-xs text-gray-400 mt-1">
                  Please install MetaMask extension
                </p>
              </div>
            )}
            
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                Supported networks: Sepolia, Ethereum
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}