import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { NextAuthProvider } from '@/components/providers/next-auth-provider';

export const metadata: Metadata = {
  title: 'D2D Marketing',
  description:
    'D2D Marketing build and maintained by the supervisation of Vivasoft Limited',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
        <ToastContainer limit={1} theme='dark' position='top-center' />
        <SpeedInsights />
      </body>
    </html>
  );
}
