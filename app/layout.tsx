import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from '../components/providers/redux-providers';
import './globals.css';

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'D2D Marketing',
  description:
    'D2D Marketing build and maintained by the supervisation of Vivasoft Limited',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang='en'>
        <body className={roboto.className}>{children}</body>
      </html>
    </Providers>
  );
}
