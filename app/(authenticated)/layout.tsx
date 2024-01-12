'use client';
import { redirect } from 'next/navigation';
import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  let isAuthenticated = false;
  if (isAuthenticated) {
    redirect(PAGE_ROUTES.Signin);
  }

  return (
    <div className='flex min-h-screen bg-[#F7F7FB]'>
      <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
