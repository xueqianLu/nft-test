import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';
import {
  bsc
} from 'wagmi/chains';

const testnet = {
  id: 3151908,
  name: 'Testnet',
  iconBackground: '#ffc431',
  nativeCurrency: { name: 'Ether', symbol: 'KLK', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://18.168.16.120:32859'] },
  },
  blockExplorers: {
    default: { name: 'base', url: 'https://sepolia.basescan.org' },
  },
  
} as const satisfies Chain;


export const config = getDefaultConfig({
  appName: 'nft-gp',
  projectId: '332e2c7e370d564a788b928d45b787a5',
  chains: [
    // testnet,
    bsc,
  ],
  ssr: true,
});
