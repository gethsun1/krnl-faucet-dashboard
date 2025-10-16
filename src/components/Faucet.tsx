import { useState } from 'react';
import { useKRNL } from '../lib/krnl-sdk';

const faucetAddress = import.meta.env.VITE_FAUCET_ADDRESS as string;

export default function Faucet() {
  const { executeWorkflow, statusCode, steps, currentStep } = useKRNL();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    if (!recipient || !amount) return alert('Fill in all fields.');
    const workflow = {
      action: 'transfer_tokens',
      params: { from: faucetAddress, to: recipient, amount },
    } as const;
    try {
      await executeWorkflow(workflow as unknown as { action: string; params: Record<string, unknown> });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 border rounded-2xl bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-3">KRNL Faucet</h2>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
        className="border p-2 w-full rounded mb-2"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 w-full rounded mb-3"
      />
      <button
        onClick={handleSend}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Send
      </button>
      <div className="mt-4 text-sm text-gray-600">
        <p>Current Step: {currentStep || '—'}</p>
        <p>Status: {statusCode || 'Idle'}</p>
        <ul className="mt-2 list-disc ml-4">
          {steps?.map((s, i) => (
            <li key={i}>{s.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


