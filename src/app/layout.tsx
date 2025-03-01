import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '@/providers/wagmiProvider';
import ApolloClientProvider from "@/providers/ApolloClientProvider";


// import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   // 使用默认主题的扩展
// });

import Header from '@/components/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ChakraProvider theme={theme}>
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>KLK Genesis Pass Mint</title>
        <meta name="description" content="KLK Genesis NFTs are the first batch of unique rights-based NFTs within the KLK ecosystem. With a total supply of 100,000, they possess rarity, collectible value, and exclusive rights. As an important part of the KLK ecosystem's development, the Genesis NFTs not only represent the vision of the KLK brand but will also provide holders with tangible returns and long-term value.Exclusive Rights and Airdrop RewardsEach Genesis NFT will receive an airdrop reward of 10 KLK tokens, providing initial profits to holders.Unique Design and Collectible ValueEach Genesis NFT is independently designed, incorporating elements of Web3 finance, blockchain innovation, and future vision, showcasing the unique style of the KLK brand.Multiple Gameplay and Incentive MechanismHolders will participate in lottery and card collection activities based on on-chain transaction hashes, with the chance to share up to 10% of NFT revenues. The design of the incentive mechanisms not only increases the fun of the activities but also provides users with generous rewards. All proceeds from NFT sales will be used for incentive activities." />
        <meta name="keywords" content="KLK Genesis Pass,KLK Genesis NFT,Genesis Pass NFT,KLK token airdrop,Klickl ecosystem,Klickl Web3 finance,Klickl NFT integration,Klickl token,KLK token" />

      </head>
      <body>
        <main className='flex min-h-screen flex-col'>
          <Providers>
            <ApolloClientProvider>

              <Header />
              {children}

            </ApolloClientProvider>

          </Providers>
        </main>
      </body>
    </html>
    // </ChakraProvider>
  );
}

export default RootLayout;
