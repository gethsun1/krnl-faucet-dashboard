import WalletAuth from './components/WalletAuth';
import Faucet from './components/Faucet';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">KRNL Faucet + Dashboard</h1>
      <WalletAuth />
      <Faucet />
      <Dashboard />
    </div>
  );
}
