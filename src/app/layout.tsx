import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "./context/context";
import TawkChat from "./TawkChat";

export const metadata: Metadata = {
  title: 'FlareNetwork | The Future of Blockchain Interoperability',
  description:
    'Discover FlareNetwork: Next-gen blockchain bringing interoperability, smart contracts, and seamless DeFi solutions.',
  keywords: [
    'FlareNetwork',
    'Flare Network blockchain',
    'Flare crypto',
    'Flare token',
    'Flare DeFi',
    'Flare interoperability',
    'smart contracts',
  ],
  openGraph: {
    title: 'FlareNetwork - The Future of Blockchain Interoperability',
    description:
      'Revolutionize your blockchain experience with FlareNetwork. Interoperability, smart contracts, and DeFi in one ecosystem.',
    url: 'https://theflarenetwork.com',
    siteName: 'FlareNetwork',
    images: [
      {
        url: '/flarenetwork-banner.png',
        width: 1200,
        height: 630,
        alt: 'FlareNetwork Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlareNetwork - Blockchain Interoperability',
    description:
      'Smart contracts and interoperability powered by FlareNetwork.',
    images: ['/flarenetwork-banner.png'],
  },
  alternates: {
    canonical: 'https://theflarenetwork.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
                <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
