import { configureChains, createConfig } from 'wagmi';
import { sepolia, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';

// Extend Window interface for ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia, mainnet],
  [
    publicProvider(),
  ]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'MetaMask',
        shimDisconnect: true,
        getProvider: () => {
          if (typeof window !== 'undefined') {
            return window.ethereum;
          }
          return undefined;
        },
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export { chains };