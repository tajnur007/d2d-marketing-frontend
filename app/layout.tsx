import { NextAuthProvider } from '@/providers/next-auth-provider';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

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
        <ToastContainer limit={5} theme='dark' position='top-right' />
      </body>
    </html>
  );
}
