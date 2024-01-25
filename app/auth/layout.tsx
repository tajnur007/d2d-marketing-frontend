'use client';

import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Fragment, useEffect } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();

  useEffect(() => {
    if (session?.data) {
      redirect(PAGE_ROUTES?.Dashboard);
    }
  }, [session?.data]);

  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
