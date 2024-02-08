'use client';

import { redirect, usePathname } from 'next/navigation';
import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const path = usePathname();
  const [loading, setloading] = useState(true);
  const userRole = session?.data?.user?.user_type;

  useEffect(() => {
    if (session?.status === 'authenticated') {
      setloading(false);
    }
    if (!session?.data && !loading) {
      redirect(PAGE_ROUTES.Signin);
    }
    if (path === '/employee-list' && userRole === 'executive') {
      redirect(PAGE_ROUTES.Dashboard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, session?.data, session?.status, userRole]);

  if (session?.data && !loading) {
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
}
