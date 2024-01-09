'use client';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { redirect } from 'next/navigation';

const AtuthLayout = ({ children }: { children: React.ReactNode }) => {
  let isAuthenticated = false;
  if (isAuthenticated) {
    redirect(PAGE_ROUTES.Dashboard);
  }
  return <div className=''>{children}</div>;
};

export default AtuthLayout;
