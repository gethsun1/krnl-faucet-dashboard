# KRNL Faucet + Dashboard

An open-source reference DApp demonstrating KRNL testnet smart account authorization and token distribution via workflows.

## Features
- Privy-based EIP-7702 delegated smart account
- Token faucet using `executeWorkflow`
- Real-time workflow state tracking
- Simple dashboard for balance and distribution stats

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Environment
```
VITE_PRIVY_APP_ID=
VITE_KRNL_NODE_URL=
VITE_DELEGATED_CONTRACT=
VITE_FAUCET_ADDRESS=
```

## Verification
1. Connect wallet via Privy.
2. Authorize KRNL smart account.
3. Use Faucet to send test tokens.
4. Observe PENDING → PROCESSING → SUCCESS states.
5. Confirm tx hash appears in logs.

## Deployment (Vercel)
```bash
npm run build
npm install -g vercel
vercel deploy
```
- In Vercel Project Settings → Environment Variables: set `VITE_*` keys.
- Framework: Vite, Build: `npm run build`, Output: `dist`.
