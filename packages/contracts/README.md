# Contracts Package

This package contains smart contract ABIs, addresses, and utilities for the cross-chain lending protocol.

## Structure

```
src/
├── abis/           # Contract ABI files
├── types/          # Generated TypeChain types (auto-generated)
├── addresses.ts    # Contract addresses for different chains
├── utils.ts        # Contract interaction utilities
└── index.ts        # Main exports
```

## Usage

### Basic Contract Interaction

```typescript
import { ContractFactory, getContractAddress } from 'contracts';

const factory = new ContractFactory();

// Get a contract instance
const controller = factory.getControllerContract(1); // Ethereum mainnet
const router = factory.getRouterContract(137); // Polygon

// Use with a signer for transactions
const signer = new ethers.Wallet(privateKey, provider);
const controllerWithSigner = factory.getControllerContract(1, signer);
```

### Event Parsing

```typescript
import { EventParser } from 'contracts';

const parser = new EventParser();
const logs = await provider.getLogs({
  address: contractAddress,
  fromBlock: startBlock,
  toBlock: endBlock
});

const parsedEvents = parser.parseLogs(logs, 'controller');
```

### Chain Configuration

```typescript
import { getChainConfig, isChainSupported } from 'contracts';

const config = getChainConfig(1);
console.log(config.name); // "Ethereum Mainnet"
console.log(config.contracts.controller); // Controller address

if (isChainSupported(chainId)) {
  // Proceed with contract interaction
}
```

## Development

### Generating Types

After updating ABI files, regenerate TypeScript types:

```bash
pnpm generate-types
```

This uses TypeChain to generate type-safe contract interfaces.

### Adding New Contracts

1. Add the ABI file to `src/abis/`
2. Update `src/addresses.ts` with contract addresses
3. Add utilities to `src/utils.ts` if needed
4. Export from `src/index.ts`
5. Run `pnpm generate-types`

## TODO

- [ ] Replace placeholder addresses with actual deployed contract addresses
- [ ] Add more comprehensive error handling in utilities
- [ ] Add contract deployment scripts
- [ ] Add integration tests