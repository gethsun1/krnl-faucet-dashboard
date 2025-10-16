import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({ totalTxs: 0, balance: '—' });

  useEffect(() => {
    // Replace with KRNL RPC or API call
    setStats({ totalTxs: 42, balance: '1000 TEST' });
  }, []);

  return (
    <div className="p-6 border rounded-2xl bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-3">KRNL Dashboard</h2>
      <p>Faucet Balance: {stats.balance}</p>
      <p>Total Distributions: {stats.totalTxs}</p>
    </div>
  );
}


