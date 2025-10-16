import { createConfig, KRNLProvider } from '../lib/krnl-sdk';
import { PrivyProvider } from '@privy-io/react-auth';
import { sepolia } from 'viem/chains';
import React from 'react';

const krnlConfig = createConfig({
  chain: sepolia,
  delegatedContractAddress: import.meta.env.VITE_DELEGATED_CONTRACT,
  privyAppId: import.meta.env.VITE_PRIVY_APP_ID,
  krnlNodeUrl: import.meta.env.VITE_KRNL_NODE_URL,
});

export const KRNLProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <PrivyProvider appId={import.meta.env.VITE_PRIVY_APP_ID}>
    <KRNLProvider config={krnlConfig}>{children}</KRNLProvider>
  </PrivyProvider>
);


