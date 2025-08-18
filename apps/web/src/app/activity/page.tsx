import { OperationsList } from '@/components/operations-list';

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          Activity Dashboard
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto">
          Track your cross-chain lending and borrowing operations in real-time.
          View transaction details and monitor status updates.
        </p>
      </div>

      <OperationsList />
    </div>
  );
}