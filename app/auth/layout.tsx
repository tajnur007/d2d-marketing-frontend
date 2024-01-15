'use client';

import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { redirect } from 'next/navigation';
import { Fragment } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  let isAuthenticated = false;

  if (isAuthenticated) {
    redirect(PAGE_ROUTES.Dashboard);
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
