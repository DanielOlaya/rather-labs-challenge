'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api';
import { formatAddress, formatAmount, getChainName, getBlockExplorerUrl } from '@/lib/utils';
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  RefreshCw,
  Copy,
  Calendar,
  Hash,
  Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Transaction {
  id: string;
  hash: string;
  blockNumber: string;
  blockHash: string;
  timestamp: string;
  confirmations: number;
  status: string;
  chainId: number;
  chain?: {
    id: number;
    name: string;
    status: string;
  };
}

interface Event {
  id: string;
  name: string;
  contractAddress: string;
  logIndex: number;
  params: string;
  bufferStatus: string;
  correlationWindowId?: string;
  chainId: number;
  txHash: string;
}

interface ChainInfo {
  id: number;
  name: string;
  status: string;
  lastBlockProcessed?: string;
}

interface Message {
  id: string;
  nonce: string;
  status: string;
  fromChain: number;
  toChain: number;
  sentAt: string;
  receivedAt: string;
  sentTransaction: Transaction;
  receivedTransaction: Transaction;
}

interface OperationEvent {
  timestamp: string;
  status: string;
  description: string;
  txHash?: string;
  chainId: number;
}

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
  lastEventAt?: string;
  timeline: OperationEvent[];
  messageNonce?: string;
  messageId?: string;
  retryCount?: number;
  nextRetryAt?: string | null;
  errorContext?: any;
  message?: Message;
  transactions?: {
    start?: Transaction;
    end?: Transaction;
  };
  chains?: {
    from: ChainInfo;
    to: ChainInfo;
  };
  events?: {
    startTransaction?: Event[];
    endTransaction?: Event[];
  };
  timestamps?: {
    created: string;
    updated: string;
    lastEvent: string;
    nextRetry: string | null;
  };
}

export default function OperationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [operation, setOperation] = useState<Operation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const operationId = params.id as string;

  useEffect(() => {
    const fetchOperation = async () => {
      if (!operationId) return;

      setLoading(true);
      setError(null);

      try {
        const result = await apiClient.getOperation(operationId);
        
        if (result.error) {
          setError(result.error);
        } else {
          setOperation(result.data);
        }
      } catch (err) {
        setError('Failed to fetch operation details');
      } finally {
        setLoading(false);
      }
    };

    fetchOperation();
  }, [operationId]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'rejected':
      case 'timeout':
        return <XCircle className="w-6 h-6 text-red-400" />;
      case 'stuck':
      case 'orphaned':
        return <AlertCircle className="w-6 h-6 text-yellow-400" />;
      case 'ongoing':
      default:
        return <Clock className="w-6 h-6 text-blue-400" />;
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const parseEventParams = (params: string) => {
    try {
      return JSON.parse(params);
    } catch {
      return null;
    }
  };

  const formatEventParams = (params: string) => {
    const parsed = parseEventParams(params);
    if (!parsed) return params;
    
    return Object.entries(parsed)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-400" />
        <span className="ml-3 text-gray-300">Loading operation details...</span>
      </div>
    );
  }

  if (error || !operation) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 mb-4">Error: {error || 'Operation not found'}</p>
        <Button onClick={() => router.back()} className="bg-red-600 hover:bg-red-700 text-white">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => router.back()}
          variant="outline"
          size="sm"
          className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-white">Operation Details</h1>
      </div>

      {/* Operation Overview */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getStatusIcon(operation.status)}
              <div>
                <CardTitle className="text-white">{operation.type}</CardTitle>
                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(operation.status)}`}>
                  {operation.status}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Created</p>
              <p className="text-white">{new Date(operation.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Operation ID */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Hash className="w-4 h-4" />
                <span>Operation ID</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
                  {formatAddress(operation.id)}
                </code>
                <Button
                  onClick={() => copyToClipboard(operation.id)}
                  variant="ghost"
                  size="sm"
                  className="bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* User Address */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Hash className="w-4 h-4" />
                <span>User Address</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
                  {formatAddress(operation.user)}
                </code>
                <Button
                  onClick={() => copyToClipboard(operation.user)}
                  variant="ghost"
                  size="sm"
                  className="bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Message Information */}
            {operation.messageId && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Hash className="w-4 h-4" />
                  <span>Message ID</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
                    {formatAddress(operation.messageId)}
                  </code>
                  <Button
                    onClick={() => copyToClipboard(operation.messageId!)}
                    variant="ghost"
                    size="sm"
                    className="bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {operation.messageNonce && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Hash className="w-4 h-4" />
                  <span>Message Nonce</span>
                </div>
                <p className="text-white">{operation.messageNonce}</p>
              </div>
            )}

            {/* Chain Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Network className="w-4 h-4" />
                <span>From Chain</span>
              </div>
              <p className="text-white">{getChainName(operation.fromChain.id)}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Network className="w-4 h-4" />
                <span>To Chain</span>
              </div>
              <p className="text-white">{getChainName(operation.toChain.id)}</p>
            </div>

            {/* Timestamps */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Created</span>
              </div>
              <p className="text-white">{new Date(operation.createdAt).toLocaleString()}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Last Updated</span>
              </div>
              <p className="text-white">{new Date(operation.updatedAt).toLocaleString()}</p>
            </div>

            {/* Additional Info */}
            {operation.lastEventAt && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Last Event</span>
                </div>
                <p className="text-white">{new Date(operation.lastEventAt).toLocaleString()}</p>
              </div>
            )}

            {operation.retryCount !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <RefreshCw className="w-4 h-4" />
                  <span>Retry Count</span>
                </div>
                <p className="text-white">{operation.retryCount}</p>
              </div>
            )}
          </div>

          {operation.substatus && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-300">
                <span className="text-gray-400">Substatus:</span> {operation.substatus}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Operation Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          {operation.timeline.length > 0 ? (
            <div className="space-y-4">
              {operation.timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{event.description}</p>
                      <span className="text-sm text-gray-400">
                        {new Date(event.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-gray-400">
                        Chain: {getChainName(event.chainId)}
                      </span>
                      {event.txHash && (
                        <a
                          href={getBlockExplorerUrl(event.chainId, event.txHash)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                        >
                          <span>View Transaction</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    {event.metadata && Object.keys(event.metadata).length > 0 && (
                      <div className="mt-2 p-2 bg-gray-600 rounded text-xs">
                        <pre className="text-gray-300 overflow-x-auto">
                          {JSON.stringify(event.metadata, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">No timeline events available</p>
          )}
        </CardContent>
      </Card>

      {/* Transactions */}
      {operation.transactions && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {operation.transactions.start && (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Start Transaction</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Hash</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="bg-gray-600 px-2 py-1 rounded text-xs text-white">
                          {formatAddress(operation.transactions.start.hash)}
                        </code>
                        <Button
                          onClick={() => copyToClipboard(operation.transactions.start!.hash)}
                          variant="ghost"
                          size="sm"
                          className="bg-gray-600 text-gray-400 hover:bg-gray-500 hover:text-white"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Block</p>
                      <p className="text-white text-sm">{operation.transactions.start.blockNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        operation.transactions.start.status === 'confirmed' 
                          ? 'bg-green-900 text-green-200' 
                          : 'bg-yellow-900 text-yellow-200'
                      }`}>
                        {operation.transactions.start.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Confirmations</p>
                      <p className="text-white text-sm">{operation.transactions.start.confirmations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Chain</p>
                      <p className="text-white text-sm">{getChainName(operation.transactions.start.chainId)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Timestamp</p>
                      <p className="text-white text-sm">{new Date(operation.transactions.start.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href={getBlockExplorerUrl(operation.transactions.start.chainId, operation.transactions.start.hash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                    >
                      <span>View on Explorer</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {operation.transactions.end && (
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-medium mb-3">End Transaction</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Hash</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="bg-gray-600 px-2 py-1 rounded text-xs text-white">
                          {formatAddress(operation.transactions.end.hash)}
                        </code>
                        <Button
                          onClick={() => copyToClipboard(operation.transactions.end!.hash)}
                          variant="ghost"
                          size="sm"
                          className="bg-gray-600 text-gray-400 hover:bg-gray-500 hover:text-white"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Block</p>
                      <p className="text-white text-sm">{operation.transactions.end.blockNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        operation.transactions.end.status === 'confirmed' 
                          ? 'bg-green-900 text-green-200' 
                          : 'bg-yellow-900 text-yellow-200'
                      }`}>
                        {operation.transactions.end.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Confirmations</p>
                      <p className="text-white text-sm">{operation.transactions.end.confirmations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Chain</p>
                      <p className="text-white text-sm">{getChainName(operation.transactions.end.chainId)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Timestamp</p>
                      <p className="text-white text-sm">{new Date(operation.transactions.end.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href={getBlockExplorerUrl(operation.transactions.end.chainId, operation.transactions.end.hash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                    >
                      <span>View on Explorer</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chain Status */}
      {operation.chains && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Chain Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="text-white font-medium mb-3">From Chain ({getChainName(operation.chains.from.id)})</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Status</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      operation.chains.from.status === 'active' 
                        ? 'bg-green-900 text-green-200' 
                        : 'bg-red-900 text-red-200'
                    }`}>
                      {operation.chains.from.status}
                    </span>
                  </div>
                  {operation.chains.from.lastBlockProcessed && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Last Block</span>
                      <span className="text-white text-sm">{operation.chains.from.lastBlockProcessed}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 bg-gray-700 rounded-lg">
                <h4 className="text-white font-medium mb-3">To Chain ({getChainName(operation.chains.to.id)})</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Status</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      operation.chains.to.status === 'active' 
                        ? 'bg-green-900 text-green-200' 
                        : 'bg-red-900 text-red-200'
                    }`}>
                      {operation.chains.to.status}
                    </span>
                  </div>
                  {operation.chains.to.lastBlockProcessed && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Last Block</span>
                      <span className="text-white text-sm">{operation.chains.to.lastBlockProcessed}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Events */}
      {operation.events && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Operation Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {operation.events.startTransaction && operation.events.startTransaction.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">Start Transaction Events</h4>
                  <div className="space-y-3">
                    {operation.events.startTransaction.map((event, index) => (
                      <div key={event.id} className="p-4 bg-gray-700 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{event.name}</span>
                            <span className="text-xs text-gray-400">#{event.logIndex}</span>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            event.bufferStatus === 'processed' 
                              ? 'bg-green-900 text-green-200' 
                              : 'bg-yellow-900 text-yellow-200'
                          }`}>
                            {event.bufferStatus}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Contract</p>
                            <code className="text-white">{formatAddress(event.contractAddress)}</code>
                          </div>
                          <div>
                            <p className="text-gray-400">Chain</p>
                            <p className="text-white">{getChainName(event.chainId)}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Transaction</p>
                            <div className="flex items-center space-x-2">
                              <code className="text-white">{formatAddress(event.txHash)}</code>
                              <Button
                                onClick={() => copyToClipboard(event.txHash)}
                                variant="ghost"
                                size="sm"
                                className="bg-gray-600 text-gray-400 hover:bg-gray-500 hover:text-white"
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-400">Timestamp</p>
                            <p className="text-white">{new Date(event.timestamp || Date.now()).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-400 mb-2">Event Parameters</p>
                          <div className="bg-gray-600 p-3 rounded text-xs">
                            <pre className="text-gray-300 overflow-x-auto">
                              {formatEventParams(event.params)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {operation.events.endTransaction && operation.events.endTransaction.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">End Transaction Events</h4>
                  <div className="space-y-3">
                    {operation.events.endTransaction.map((event, index) => (
                      <div key={event.id} className="p-4 bg-gray-700 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{event.name}</span>
                            <span className="text-xs text-gray-400">#{event.logIndex}</span>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            event.bufferStatus === 'processed' 
                              ? 'bg-green-900 text-green-200' 
                              : 'bg-yellow-900 text-yellow-200'
                          }`}>
                            {event.bufferStatus}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Contract</p>
                            <code className="text-white">{formatAddress(event.contractAddress)}</code>
                          </div>
                          <div>
                            <p className="text-gray-400">Chain</p>
                            <p className="text-white">{getChainName(event.chainId)}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Transaction</p>
                            <div className="flex items-center space-x-2">
                              <code className="text-white">{formatAddress(event.txHash)}</code>
                              <Button
                                onClick={() => copyToClipboard(event.txHash)}
                                variant="ghost"
                                size="sm"
                                className="bg-gray-600 text-gray-400 hover:bg-gray-500 hover:text-white"
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-400">Timestamp</p>
                            <p className="text-white">{new Date(event.timestamp || Date.now()).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-400 mb-2">Event Parameters</p>
                          <div className="bg-gray-600 p-3 rounded text-xs">
                            <pre className="text-gray-300 overflow-x-auto">
                              {formatEventParams(event.params)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Message Details */}
      {operation.message && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Cross-Chain Message</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Message Status</p>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    operation.message.status === 'delivered' 
                      ? 'bg-green-900 text-green-200' 
                      : 'bg-yellow-900 text-yellow-200'
                  }`}>
                    {operation.message.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Nonce</p>
                  <p className="text-white">{operation.message.nonce}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Sent At</p>
                  <p className="text-white">{new Date(operation.message.sentAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Received At</p>
                  <p className="text-white">{operation.message.receivedAt ? new Date(operation.message.receivedAt).toLocaleString() : 'Pending'}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error Context */}
      {operation.errorContext && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-red-400">Error Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg">
              <pre className="text-red-300 overflow-x-auto text-sm">
                {JSON.stringify(operation.errorContext, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
