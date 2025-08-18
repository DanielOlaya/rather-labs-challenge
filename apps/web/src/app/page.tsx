'use client';

import { TradingPanel } from '@/components/trading-panel';
import { NetworkSwitcher } from '@/components/network-switcher';
import { useAccount } from 'wagmi';

type TransactionType = 'addCollateral' | 'borrow' | 'withdraw';

export default function Home() {
  const { isConnected } = useAccount();

  const handleTransaction = (type: TransactionType, amount: string, asset: string) => {
    // This would integrate with the smart contracts
    console.log(`${type} ${amount} ${asset}`);
    // For demo purposes, we'll just log it
    alert(`Transaction submitted: ${type} ${amount} ${asset}`);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Cross-Chain Lending Protocol
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Add collateral, borrow, and withdraw assets across multiple blockchains with seamless cross-chain operations.
          Track your transactions in real-time.
        </p>
      </div>

      {/* Network Status */}
      <div className="max-w-4xl mx-auto">
        <NetworkSwitcher />
      </div>

      {/* Main Trading Interface */}
      <div className="flex justify-center">
        <TradingPanel onTransaction={handleTransaction} />
      </div>

      {/* Connection Prompt */}
      {!isConnected && (
        <div className="text-center py-8 bg-blue-950 rounded-lg border border-blue-800 max-w-2xl mx-auto">
          <p className="text-blue-200 mb-4">
            Connect your MetaMask wallet to start lending and borrowing across chains
          </p>
          <div className="text-sm text-blue-300 space-y-2">
            <p>📱 Make sure MetaMask extension is installed</p>
            <p>🔗 Connect to Sepolia testnet for testing</p>
            <p>💰 Get test ETH from Sepolia faucet</p>
          </div>
        </div>
      )}

      {/* MetaMask Setup Guide */}
      {!isConnected && (
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Getting Started with MetaMask</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-medium text-white mb-2">1. Install MetaMask</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Visit metamask.io and install the extension</li>
                <li>• Create a new wallet or import existing one</li>
                <li>• Secure your seed phrase safely</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">2. Get Test ETH</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Switch to Sepolia testnet in MetaMask</li>
                <li>• Visit sepoliafaucet.com</li>
                <li>• Request test ETH for free</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">3. Connect & Trade</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Click "Connect MetaMask" button</li>
                <li>• Approve the connection in MetaMask</li>
                <li>• Start trading with smart contracts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">4. Supported Networks</h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Sepolia Testnet (Chain ID: 11155111)</li>
                <li>• Ethereum Mainnet (Chain ID: 1)</li>
                <li>• More networks coming soon</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
