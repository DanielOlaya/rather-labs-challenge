'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { apiClient } from '@/lib/api';
import { formatAddress, formatAmount, getChainName, getBlockExplorerUrl } from '@/lib/utils';
import { ExternalLink, Clock, CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Operation {
  id: string;
  type: string;
  status: string;
  substatus?: string;
  user: string;
  fromChain: { id: number; name: string };
  toChain: { id: number; name: string };
  createdAt: string;
  updatedAt: string;
  timeline: Array<{
    timestamp: string;
    status: string;
    description: string;
    txHash?: string;
    chainId: number;
  }>;
}

export function OperationsList() {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { address } = useAccount();

  const fetchOperations = async () => {
    if (!address) return;

    setLoading(true);
    setError(null);

    const result = await apiClient.getOperations({ user: address, limit: 20 });
    
    if (result.error) {
      setError(result.error);
    } else {
      setOperations(result.data?.operations || []);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchOperations();
  }, [address]);

  // Set up real-time updates
  useEffect(() => {
    if (!address) return;

    const eventSource = apiClient.createEventStream(address);
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'operations_update') {
          setOperations(data.operations);
        }
      } catch (error) {
        console.error('Failed to parse SSE data:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('SSE connection error:', error);
    };

    return () => {
      eventSource.close();
    };
  }, [address]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rejected':
      case 'timeout':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'stuck':
      case 'orphaned':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'ongoing':
      default:
        return <Clock className="w-5 h-5 text-blue-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-900 text-green-200';
      case 'rejected':
      case 'timeout':
        return 'bg-red-900 text-red-200';
      case 'stuck':
      case 'orphaned':
        return 'bg-yellow-900 text-yellow-200';
      case 'ongoing':
      default:
        return 'bg-blue-900 text-blue-200';
    }
  };

  if (!address) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Connect your wallet to view operations</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-6 h-6 animate-spin text-blue-400" />
        <span className="ml-2 text-gray-300">Loading operations...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 mb-4">Error loading operations: {error}</p>
        <Button onClick={fetchOperations} className="bg-red-600 hover:bg-red-700 text-white">Retry</Button>
      </div>
    );
  }

  if (operations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No operations found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Your Operations</h2>
        <Button onClick={fetchOperations} variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="space-y-3">
        {operations.map((operation) => (
          <div key={operation.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow hover:bg-gray-750">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {getStatusIcon(operation.status)}
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-white">{operation.type}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(operation.status)}`}>
                      {operation.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    {getChainName(operation.fromChain.id)} → {getChainName(operation.toChain.id)}
                  </p>
                  {operation.substatus && (
                    <p className="text-xs text-gray-400 mt-1">{operation.substatus}</p>
                  )}
                </div>
              </div>
              
              <div className="text-right text-sm text-gray-400">
                <p>{new Date(operation.createdAt).toLocaleString()}</p>
                <p className="text-xs mt-1">ID: {formatAddress(operation.id)}</p>
              </div>
            </div>

            {/* Timeline */}
            {operation.timeline.length > 0 && (
              <div className="mt-4 pl-8">
                <div className="space-y-2">
                  {operation.timeline.map((event, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-300">{event.description}</span>
                      {event.txHash && (
                        <a
                          href={getBlockExplorerUrl(event.chainId, event.txHash)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <span className="text-xs text-gray-500 ml-auto">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}