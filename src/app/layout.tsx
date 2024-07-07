import './globals.css';

import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trident',
  description: 'Trade Crypto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-primary ${urbanist.className}`}>{children}</body>
    </html>
  );
}
