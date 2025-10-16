import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type KRNLConfig = {
  chain: unknown;
  delegatedContractAddress?: string;
  privyAppId?: string;
  krnlNodeUrl?: string;
};

export function createConfig(config: KRNLConfig): KRNLConfig {
  return config;
}

type WorkflowStep = { description: string };

type KRNLContextValue = {
  enableSmartAccount: () => Promise<void>;
  isAuthorized: boolean;
  executeWorkflow: (workflow: { action: string; params: Record<string, unknown> }) => Promise<void>;
  statusCode: string | null;
  steps: WorkflowStep[];
  currentStep: string | null;
};

const KRNLContext = createContext<KRNLContextValue | null>(null);

export const KRNLProvider: React.FC<{ config: KRNLConfig; children: React.ReactNode }> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [statusCode, setStatusCode] = useState<string | null>(null);
  const [steps, setSteps] = useState<WorkflowStep[]>([]);
  const [currentStep, setCurrentStep] = useState<string | null>(null);

  const enableSmartAccount = useCallback(async () => {
    // Simulate an authorization flow
    setStatusCode('AUTHORIZING');
    await new Promise((r) => setTimeout(r, 500));
    setIsAuthorized(true);
    setStatusCode('AUTHORIZED');
  }, []);

  const executeWorkflow = useCallback(async (workflow: { action: string; params: Record<string, unknown> }) => {
    // Simulate a simple workflow lifecycle
    setSteps([{ description: `Starting ${workflow.action}` }]);
    setCurrentStep('PENDING');
    setStatusCode('PENDING');
    await new Promise((r) => setTimeout(r, 600));
    setSteps((s) => [...s, { description: 'Processing' }]);
    setCurrentStep('PROCESSING');
    setStatusCode('PROCESSING');
    await new Promise((r) => setTimeout(r, 800));
    setSteps((s) => [...s, { description: 'Settled on-chain' }]);
    setCurrentStep('SUCCESS');
    setStatusCode('SUCCESS');
  }, []);

  const value = useMemo<KRNLContextValue>(
    () => ({ enableSmartAccount, isAuthorized, executeWorkflow, statusCode, steps, currentStep }),
    [enableSmartAccount, isAuthorized, executeWorkflow, statusCode, steps, currentStep]
  );

  return <KRNLContext.Provider value={value}>{children}</KRNLContext.Provider>;
};

export function useKRNL(): KRNLContextValue {
  const ctx = useContext(KRNLContext);
  if (!ctx) throw new Error('useKRNL must be used within KRNLProvider');
  return ctx;
}


