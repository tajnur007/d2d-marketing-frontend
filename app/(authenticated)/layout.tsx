'use client';

import { redirect, usePathname } from 'next/navigation';
import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Loader from '@/components/loader';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [loading, setloading] = useState(true);
  const path = usePathname();
  const session = useSession();
  const userRole = session?.data?.user?.user_type;

  useEffect(() => {
    if (session?.status !== 'loading') {
      setloading(false);
    }
    if (!session?.data && session?.status === 'unauthenticated') {
      redirect(PAGE_ROUTES.Signin);
    }
    if (path.includes('/employee-list') && userRole === 'executive') {
      redirect(PAGE_ROUTES.Dashboard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, session, userRole]);

  if (!session?.data && loading) {
    return (
      <div className='flex items-center justify-center h-screen bg-[#F7F7FB] '>
        <Loader />
      </div>
    );
  }

  return (
    <div className='flex h-screen bg-[#F7F7FB] overflow-hidden'>
      <Sidebar userRole={userRole} />
      <div className='flex-1 overflow-y-auto'>
        <Navbar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
