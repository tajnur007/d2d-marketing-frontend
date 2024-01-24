import { authOptions } from '@/lib/next-auth/auth';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Fragment } from 'react';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(PAGE_ROUTES.Dashboard);
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
