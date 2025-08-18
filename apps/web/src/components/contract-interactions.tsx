'use client';

import { useState } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { useContracts } from '../lib/hooks/useContracts';
import { ControllerContract } from '../lib/contracts/controller';
import { RouterContract } from '../lib/contracts/router';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function ContractInteractions() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { controller, router, isSupported } = useContracts();
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  
  // Form states
  const [collateralToken, setCollateralToken] = useState('');
  const [collateralAmount, setCollateralAmount] = useState('');
  const [borrowToken, setBorrowToken] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawToken, setWithdrawToken] = useState('');

  if (!isConnected) {
    return (
      <Alert className="border-blue-600 bg-blue-950 text-blue-100">
        <AlertCircle className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-blue-100">
          Please connect your wallet to interact with contracts
        </AlertDescription>
      </Alert>
    );
  }

  if (!isSupported) {
    return (
      <Alert className="border-red-600 bg-red-950 text-red-100">
        <AlertCircle className="h-4 w-4 text-red-400" />
        <AlertDescription className="text-red-100">
          Please switch to a supported network (Sepolia)
        </AlertDescription>
      </Alert>
    );
  }

  const handleAddCollateral = async () => {
    if (!controller.contract) return;
    
    setLoading(true);
    setResult(null);
    
    try {
      const controllerInstance = new ControllerContract(controller.contract);
      const tx = await controllerInstance.addCollateral({
        token: collateralToken,
        amount: collateralAmount,
        fromChain: chain?.id || 11155111,
        toChain: chain?.id || 11155111,
        status: 0, // init
      });
      
      setResult({
        success: true,
        message: `Collateral added! Transaction: ${tx.transactionHash}`,
      });
    } catch (error: any) {
      setResult({
        success: false,
        message: `Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBorrow = async () => {
    if (!controller.contract) return;
    
    setLoading(true);
    setResult(null);
    
    try {
      const controllerInstance = new ControllerContract(controller.contract);
      const tx = await controllerInstance.borrow({
        token: borrowToken,
        amount: borrowAmount,
        collateralAmount: '1000', // Example collateral amount
        fromChain: chain?.id || 11155111,
        toChain: chain?.id || 11155111,
        status: 0, // init
      });
      
      setResult({
        success: true,
        message: `Borrow initiated! Transaction: ${tx.transactionHash}`,
      });
    } catch (error: any) {
      setResult({
        success: false,
        message: `Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (!controller.contract) return;
    
    setLoading(true);
    setResult(null);
    
    try {
      const controllerInstance = new ControllerContract(controller.contract);
      const tx = await controllerInstance.withdraw({
        token: withdrawToken,
        amount: withdrawAmount,
        fromChain: chain?.id || 11155111,
        toChain: chain?.id || 11155111,
        status: 0, // init
      });
      
      setResult({
        success: true,
        message: `Withdrawal initiated! Transaction: ${tx.transactionHash}`,
      });
    } catch (error: any) {
      setResult({
        success: false,
        message: `Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-white">Contract Addresses</CardTitle>
          <CardDescription className="text-gray-300">
            Current network: {chain?.name} ({chain?.id})
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <Label className="text-gray-200">Controller:</Label>
            <code className="text-sm bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-600">
              {controller.address || 'Not deployed'}
            </code>
          </div>
          <div>
            <Label className="text-gray-200">Router:</Label>
            <code className="text-sm bg-gray-800 text-gray-100 px-2 py-1 rounded border border-gray-600">
              {router.address || 'Not deployed'}
            </code>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="collateral" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-gray-600">
          <TabsTrigger value="collateral" className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white">
            Add Collateral
          </TabsTrigger>
          <TabsTrigger value="borrow" className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white">
            Borrow
          </TabsTrigger>
          <TabsTrigger value="withdraw" className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white">
            Withdraw
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collateral">
          <Card className="bg-gray-900 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Add Collateral</CardTitle>
              <CardDescription className="text-gray-300">Add collateral to start borrowing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="collateral-token" className="text-gray-200">Token Address</Label>
                <Input
                  id="collateral-token"
                  placeholder="0x..."
                  value={collateralToken}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollateralToken(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="collateral-amount" className="text-gray-200">Amount</Label>
                <Input
                  id="collateral-amount"
                  placeholder="1000"
                  value={collateralAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollateralAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <Button onClick={handleAddCollateral} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Add Collateral
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="borrow">
          <Card className="bg-gray-900 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Borrow</CardTitle>
              <CardDescription className="text-gray-300">Borrow against your collateral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="borrow-token" className="text-gray-200">Token Address</Label>
                <Input
                  id="borrow-token"
                  placeholder="0x..."
                  value={borrowToken}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBorrowToken(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="borrow-amount" className="text-gray-200">Amount</Label>
                <Input
                  id="borrow-amount"
                  placeholder="500"
                  value={borrowAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBorrowAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <Button onClick={handleBorrow} disabled={loading} className="bg-green-600 hover:bg-green-700 text-white">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Borrow
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw">
          <Card className="bg-gray-900 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Withdraw</CardTitle>
              <CardDescription className="text-gray-300">Withdraw your collateral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="withdraw-token" className="text-gray-200">Token Address</Label>
                <Input
                  id="withdraw-token"
                  placeholder="0x..."
                  value={withdrawToken}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWithdrawToken(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="withdraw-amount" className="text-gray-200">Amount</Label>
                <Input
                  id="withdraw-amount"
                  placeholder="1000"
                  value={withdrawAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWithdrawAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              <Button onClick={handleWithdraw} disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Withdraw
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {result && (
        <Alert className={result.success ? 'border-green-600 bg-green-950 text-green-100' : 'border-red-600 bg-red-950 text-red-100'}>
          {result.success ? (
            <CheckCircle className="h-4 w-4 text-green-400" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-400" />
          )}
          <AlertDescription className={result.success ? 'text-green-100' : 'text-red-100'}>
            {result.message}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
