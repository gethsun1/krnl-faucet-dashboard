import { useState } from 'react';
import { useKRNL } from '../lib/krnl-sdk';

export default function WalletAuth() {
  const { enableSmartAccount, isAuthorized } = useKRNL();
  const [loading, setLoading] = useState(false);

  const handleAuthorize = async () => {
    setLoading(true);
    try {
      await enableSmartAccount();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-center border rounded-2xl shadow-md bg-white">
      {isAuthorized ? (
        <p className="text-green-600 font-semibold">✅ Smart account authorized!</p>
      ) : (
        <button
          onClick={handleAuthorize}
          disabled={loading}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          {loading ? 'Authorizing...' : 'Authorize KRNL Account'}
        </button>
      )}
    </div>
  );
}


