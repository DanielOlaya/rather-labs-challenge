'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api';
import { formatAddress, formatAmount, getChainName, getBlockExplorerUrl } from '@/lib/utils';
import { ExternalLink, Clock, CheckCircle, XCircle, AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
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
  const [filters, setFilters] = useState({
    status: '',
    opType: '',
    fromChain: '',
    toChain: '',
    limit: 20
  });
  const [showFilters, setShowFilters] = useState(false);
  const [streamStatus, setStreamStatus] = useState<'connecting' | 'connected' | 'reconnecting' | 'disconnected'>('disconnected');
  const { address } = useAccount();
  const router = useRouter();

  const fetchOperations = async () => {
    if (!address) return;

    setLoading(true);
    setError(null);

    const result = await apiClient.getOperations({ 
      user: address, 
      status: filters.status || undefined,
      opType: filters.opType || undefined,
      fromChain: filters.fromChain ? Number(filters.fromChain) : undefined,
      toChain: filters.toChain ? Number(filters.toChain) : undefined,
      limit: filters.limit || 20
    });
    
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

    let eventSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout | null = null;
    let reconnectAttempts = 0;
    const maxReconnectAttempts = 5;
    const reconnectDelay = 3000; // 3 seconds

    const connectToStream = () => {
      try {
        setStreamStatus('connecting');
        eventSource = apiClient.createEventStream(address);
        
        eventSource.onmessage = (event) => {
          try {
            // Parse the SSE data according to the backend format
            const parsedData = JSON.parse(event.data);
            
            if (parsedData.type === 'operations_update') {
              // Update operations with the new data
              setOperations(parsedData.operations || []);
              // Reset reconnect attempts on successful message
              reconnectAttempts = 0;
            }
          } catch (error) {
            console.error('Failed to parse SSE data:', error);
            console.log('Raw event data:', event.data);
          }
        };

        eventSource.onerror = (error) => {
          console.error('SSE connection error:', error);
          eventSource?.close();
          setStreamStatus('disconnected');
          
          // Attempt to reconnect
          if (reconnectAttempts < maxReconnectAttempts) {
            reconnectAttempts++;
            setStreamStatus('reconnecting');
            console.log(`Attempting to reconnect (${reconnectAttempts}/${maxReconnectAttempts})...`);
            
            reconnectTimeout = setTimeout(() => {
              connectToStream();
            }, reconnectDelay);
          } else {
            console.error('Max reconnection attempts reached');
            setStreamStatus('disconnected');
          }
        };

        eventSource.onopen = () => {
          console.log('SSE connection established');
          setStreamStatus('connected');
          reconnectAttempts = 0; // Reset on successful connection
        };

      } catch (error) {
        console.error('Failed to create SSE connection:', error);
        setStreamStatus('disconnected');
      }
    };

    // Initial connection
    connectToStream();

    // Cleanup function
    return () => {
      if (eventSource) {
        eventSource.close();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
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
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-white">Your Operations</h2>
            {/* Stream Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                streamStatus === 'connected' ? 'bg-green-400' :
                streamStatus === 'connecting' ? 'bg-yellow-400' :
                streamStatus === 'reconnecting' ? 'bg-orange-400' :
                'bg-red-400'
              }`} />
              <span className={`text-xs ${
                streamStatus === 'connected' ? 'text-green-400' :
                streamStatus === 'connecting' ? 'text-yellow-400' :
                streamStatus === 'reconnecting' ? 'text-orange-400' :
                'text-red-400'
              }`}>
                {streamStatus === 'connected' ? 'Live' :
                 streamStatus === 'connecting' ? 'Connecting...' :
                 streamStatus === 'reconnecting' ? 'Reconnecting...' :
                 'Disconnected'}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              onClick={() => setShowFilters(!showFilters)} 
              variant="outline" 
              size="sm" 
              className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <Button onClick={fetchOperations} variant="outline" size="sm" className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Status Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Statuses</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                  <option value="stuck">Stuck</option>
                  <option value="orphaned">Orphaned</option>
                  <option value="timeout">Timeout</option>
                </select>
              </div>

              {/* Operation Type Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Operation Type</label>
                <select
                  value={filters.opType}
                  onChange={(e) => setFilters(prev => ({ ...prev, opType: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="AddCollateral">Add Collateral</option>
                  <option value="Borrow">Borrow</option>
                  <option value="Withdraw">Withdraw</option>
                </select>
              </div>

              {/* From Chain Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">From Chain</label>
                <input
                  type="number"
                  placeholder="Chain ID (e.g., 11155111)"
                  value={filters.fromChain}
                  onChange={(e) => setFilters(prev => ({ ...prev, fromChain: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* To Chain Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">To Chain</label>
                <input
                  type="number"
                  placeholder="Chain ID (e.g., 1)"
                  value={filters.toChain}
                  onChange={(e) => setFilters(prev => ({ ...prev, toChain: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Limit Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Results per page</label>
                <select
                  value={filters.limit}
                  onChange={(e) => setFilters(prev => ({ ...prev, limit: Number(e.target.value) }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">&nbsp;</label>
                <Button
                  onClick={fetchOperations}
                  variant="outline"
                  size="sm"
                  className="w-full bg-blue-600 border-blue-500 text-white hover:bg-blue-700 hover:text-white"
                >
                  Apply Filters
                </Button>
              </div>

              {/* Clear Filters Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">&nbsp;</label>
                <Button
                  onClick={() => {
                    setFilters({
                      status: '',
                      opType: '',
                      fromChain: '',
                      toChain: '',
                      limit: 20
                    });
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* No Operations Message */}
        <div className="text-center py-12">
          <p className="text-gray-400">No operations found</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or check back later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-white">Your Operations</h2>
          {/* Stream Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              streamStatus === 'connected' ? 'bg-green-400' :
              streamStatus === 'connecting' ? 'bg-yellow-400' :
              streamStatus === 'reconnecting' ? 'bg-orange-400' :
              'bg-red-400'
            }`} />
            <span className={`text-xs ${
              streamStatus === 'connected' ? 'text-green-400' :
              streamStatus === 'connecting' ? 'text-yellow-400' :
              streamStatus === 'reconnecting' ? 'text-orange-400' :
              'text-red-400'
            }`}>
              {streamStatus === 'connected' ? 'Live' :
               streamStatus === 'connecting' ? 'Connecting...' :
               streamStatus === 'reconnecting' ? 'Reconnecting...' :
               'Disconnected'}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            variant="outline" 
            size="sm" 
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
          <Button onClick={fetchOperations} variant="outline" size="sm" className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                <option value="stuck">Stuck</option>
                <option value="orphaned">Orphaned</option>
                <option value="timeout">Timeout</option>
              </select>
            </div>

            {/* Operation Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Operation Type</label>
              <select
                value={filters.opType}
                onChange={(e) => setFilters(prev => ({ ...prev, opType: e.target.value }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="AddCollateral">Add Collateral</option>
                <option value="Borrow">Borrow</option>
                <option value="Withdraw">Withdraw</option>
              </select>
            </div>

            {/* From Chain Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">From Chain</label>
              <input
                type="number"
                placeholder="Chain ID (e.g., 11155111)"
                value={filters.fromChain}
                onChange={(e) => setFilters(prev => ({ ...prev, fromChain: e.target.value }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* To Chain Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">To Chain</label>
              <input
                type="number"
                placeholder="Chain ID (e.g., 1)"
                value={filters.toChain}
                onChange={(e) => setFilters(prev => ({ ...prev, toChain: e.target.value }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Limit Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Results per page</label>
              <select
                value={filters.limit}
                onChange={(e) => setFilters(prev => ({ ...prev, limit: Number(e.target.value) }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* Apply Filters Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">&nbsp;</label>
              <Button
                onClick={fetchOperations}
                variant="outline"
                size="sm"
                className="w-full bg-blue-600 border-blue-500 text-white hover:bg-blue-700 hover:text-white"
              >
                Apply Filters
              </Button>
            </div>

            {/* Clear Filters Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">&nbsp;</label>
              <Button
                onClick={() => {
                  setFilters({
                    status: '',
                    opType: '',
                    fromChain: '',
                    toChain: '',
                    limit: 20
                  });
                }}
                variant="outline"
                size="sm"
                className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {operations.map((operation) => (
          <div 
            key={operation.id} 
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow hover:bg-gray-750 cursor-pointer"
            onClick={() => router.push(`/activity/${operation.id}`)}
          >
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
                <div className="flex items-center space-x-1 mt-2 text-blue-400">
                  <span className="text-xs">View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
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