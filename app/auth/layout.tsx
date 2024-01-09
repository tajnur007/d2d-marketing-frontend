import React from 'react';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/components/providers/redux-providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'D2D Marketing',
  description:
    'D2D Marketing build and maintained by the supervisation of Vivasoft Limited',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang='en'>
        <body>
          {children}.
          <SpeedInsights />
        </body>
      </html>
    </Providers>
  );
}
