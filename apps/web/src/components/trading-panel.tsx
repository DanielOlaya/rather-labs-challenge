'use client';

import { useState } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { Button } from './ui/button';
import { getChainName } from '@/lib/utils';
import { ArrowDownUp, Plus, Minus, DollarSign } from 'lucide-react';
import { useContracts } from '../lib/hooks/useContracts';
import { ControllerContract } from '../lib/contracts/controller';

type TabType = 'addCollateral' | 'borrow' | 'withdraw';

interface TradingPanelProps {
  onTransaction?: (type: TabType, amount: string, asset: string) => void;
}

interface TokenInfo {
  symbol: string;
  address: string;
  decimals: number;
}

export function TradingPanel({ onTransaction }: TradingPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('addCollateral');
  const [amount, setAmount] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('USDC');
  const [fromChain, setFromChain] = useState(11155111); // Sepolia
  const [toChain, setToChain] = useState(1); // Ethereum
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { controller, isSupported } = useContracts();

  // Token configuration with contract addresses
  const tokens: Record<string, TokenInfo> = {
    USDC: {
      symbol: 'USDC',
      address: '0x2B0974b96511a728CA6342597471366D3444Aa2a',
      decimals: 6
    },
    USDT: {
      symbol: 'USDT',
      address: '0xA1d7f71cbBb361A77820279958BAC38fC3667c1a',
      decimals: 6
    }
  };

  const chains = [
    { id: 11155111, name: 'Sepolia' },
    { id: 1, name: 'Ethereum' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected || !amount || !controller.contract) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const controllerInstance = new ControllerContract(controller.contract);
      const selectedToken = tokens[selectedAsset];
      
      // Convert amount to proper decimal format (multiply by 10^decimals)
      const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals)).toString();
      
      console.log('Contract call details:', {
        contract: controller.contract,
        address: controller.address,
        token: selectedToken.address,
        amount: amountInWei,
        fromChain: fromChain,
        toChain: toChain,
        status: 0
      });

      // Debug: Check contract interface
      console.log('Contract interface:', controller.contract.interface);
      console.log('Contract functions:', controller.contract.interface.fragments.map(f => f.type + ' ' + (f as any).name));
      
      // Check if addCollateral function exists
      const hasAddCollateral = controller.contract.interface.hasFunction('addCollateral');
      console.log('Has addCollateral function:', hasAddCollateral);
      
      if (!hasAddCollateral) {
        setError('Contract does not have addCollateral function. ABI may be incorrect.');
        setLoading(false);
        return;
      }

      // Try to call a simple view function first to test the contract
      try {
        console.log('Testing contract with simple call...');
        // Try to get the next operation ID (should be a view function)
        const nextOpId = await controller.contract.nextOperationId();
        console.log('Next operation ID:', nextOpId.toString());
      } catch (error: any) {
        console.error('Simple contract call failed:', error);
        setError(`Contract test failed: ${error.message}. Contract may not be deployed or ABI is incorrect.`);
        setLoading(false);
        return;
      }

      // First, let's test if the contract exists and has the function
      try {
        const provider = controller.contract.runner?.provider;
        if (provider && controller.address) {
          const code = await provider.getCode(controller.address);
          console.log('Contract code exists:', code !== '0x');
          if (code === '0x') {
            throw new Error('Contract not deployed at this address');
          }
        }
      } catch (error: any) {
        console.error('Error checking contract code:', error);
        setError(`Contract verification failed: ${error.message}`);
        setLoading(false);
        return;
      }

      let tx;
      
      switch (activeTab) {
        case 'addCollateral':
          console.log('Calling addCollateral with params:', {
            token: selectedToken.address,
            amount: amountInWei,
            fromChain: fromChain,
            toChain: toChain,
            status: 0
          });
          tx = await controllerInstance.addCollateral({
            token: selectedToken.address,
            amount: amountInWei,
            fromChain: fromChain,
            toChain: toChain,
            status: 0, // init
          });
          break;
          
        case 'borrow':
          tx = await controllerInstance.borrow({
            token: selectedToken.address,
            amount: amountInWei,
            collateralAmount: amountInWei, // Using same amount as collateral for demo
            fromChain: fromChain,
            toChain: toChain,
            status: 0, // init
          });
          break;
          
        case 'withdraw':
          tx = await controllerInstance.withdraw({
            token: selectedToken.address,
            amount: amountInWei,
            fromChain: fromChain,
            toChain: toChain,
            status: 0, // init
          });
          break;
      }

      if (tx) {
        setSuccess(`${activeTab === 'addCollateral' ? 'Collateral added' : activeTab === 'borrow' ? 'Borrow initiated' : 'Withdrawal initiated'}! Transaction: ${tx.transactionHash}`);
        
        // Call the callback if provided
        if (onTransaction) {
          onTransaction(activeTab, amount, selectedAsset);
        }
      }
    } catch (error: any) {
      console.error('Transaction error details:', error);
      
      // Provide more detailed error information
      let errorMessage = `Transaction failed: ${error.message}`;
      
      if (error.code === 'CALL_EXCEPTION') {
        errorMessage = 'Contract call failed. This could mean: 1) Contract not deployed, 2) Function doesn\'t exist, 3) Parameters are invalid';
      } else if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
        errorMessage = 'Gas estimation failed. Contract function may not exist or parameters are invalid';
      } else if (error.message.includes('missing revert data')) {
        errorMessage = 'Contract execution reverted. Function may not exist or contract not deployed at this address';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const swapChains = () => {
    const temp = fromChain;
    setFromChain(toChain);
    setToChain(temp);
  };

  const getOperationName = (tab: TabType) => {
    switch (tab) {
      case 'addCollateral': return 'Add Collateral';
      case 'borrow': return 'Borrow';
      case 'withdraw': return 'Withdraw';
      default: return tab;
    }
  };

  const getButtonText = () => {
    if (!isConnected) return 'Connect Wallet';
    if (!amount) return 'Enter Amount';
    if (chain && chain.id !== fromChain) return `Switch to ${getChainName(fromChain)}`;
    if (!isSupported) return 'Unsupported Network';
    if (loading) return 'Processing...';
    
    return `${getOperationName(activeTab)} ${selectedAsset}`;
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      {/* Tab Switcher */}
      <div className="flex mb-6 bg-gray-700 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('addCollateral')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === 'addCollateral'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <Plus className="w-4 h-4 inline mr-2" />
          Add Collateral
        </button>
        <button
          onClick={() => setActiveTab('borrow')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === 'borrow'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <Minus className="w-4 h-4 inline mr-2" />
          Borrow
        </button>
        <button
          onClick={() => setActiveTab('withdraw')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === 'withdraw'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <DollarSign className="w-4 h-4 inline mr-2" />
          Withdraw
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Asset Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Asset
          </label>
          <select
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
          >
            {Object.keys(tokens).map((asset) => (
              <option key={asset} value={asset}>
                {asset}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-400 mt-1">
            Contract: {tokens[selectedAsset]?.address}
          </p>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder:text-gray-400"
            step="0.01"
            min="0"
          />
        </div>

        {/* Chain Selection for Cross-Chain Operations */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Cross-Chain Route
          </label>
          
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <select
                value={fromChain}
                onChange={(e) => setFromChain(Number(e.target.value))}
                className="w-full p-2 text-sm border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              >
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="button"
              onClick={swapChains}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-md transition-colors"
            >
              <ArrowDownUp className="w-4 h-4" />
            </button>
            
            <div className="flex-1">
              <select
                value={toChain}
                onChange={(e) => setToChain(Number(e.target.value))}
                className="w-full p-2 text-sm border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              >
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Transaction Summary */}
        <div className="bg-gray-700 rounded-lg p-4 space-y-2 text-sm border border-gray-600">
          <div className="flex justify-between">
            <span className="text-gray-300">Operation:</span>
            <span className="font-medium text-white">
              {getOperationName(activeTab)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Asset:</span>
            <span className="font-medium text-white">
              {selectedAsset} ({tokens[selectedAsset]?.address.slice(0, 6)}...{tokens[selectedAsset]?.address.slice(-4)})
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Route:</span>
            <span className="font-medium text-white">
              {getChainName(fromChain)} → {getChainName(toChain)}
            </span>
          </div>
          {chain && chain.id !== fromChain && (
            <div className="text-yellow-400 text-xs">
              ⚠️ Please switch to {getChainName(fromChain)} network
            </div>
          )}
          {!isSupported && (
            <div className="text-red-400 text-xs">
              ⚠️ Smart contracts not available on this network
            </div>
          )}
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="bg-red-950 border border-red-600 rounded-lg p-3">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="bg-green-950 border border-green-600 rounded-lg p-3">
            <p className="text-green-200 text-sm">{success}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-600 disabled:cursor-not-allowed"
          disabled={!isConnected || !amount || (chain && chain.id !== fromChain) || !isSupported || loading}
        >
          {getButtonText()}
        </Button>
      </form>
    </div>
  );
}