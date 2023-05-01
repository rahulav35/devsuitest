import AppContextProvider from "@/contexts/Appcontext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum ,polygonMumbai} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains([polygon,polygonMumbai], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: "Devs-UI",
  chains,

});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
        </RainbowKitProvider>
        </WagmiConfig>
  );
}
