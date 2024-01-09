import { Providers } from '@/components/providers/redux-providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import React from 'react';

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
