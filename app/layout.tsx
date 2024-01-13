import React, { Fragment, Suspense } from 'react';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

export const metadata: Metadata = {
  title: 'D2D Marketing',
  description:
    'D2D Marketing build and maintained by the supervisation of Vivasoft Limited',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Suspense fallback={'loading...'}>
        {children}
        <SpeedInsights />
      </Suspense>
    </Fragment>
  );
}
