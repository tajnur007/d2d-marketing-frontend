import { authOptions } from '@/lib/next-auth/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};
const ServerAuthManager = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  const sessionData = JSON.stringify(session);
  const checkSessionData = JSON.parse(sessionData);
  if (checkSessionData?.user?.error?.status === 401) {
    redirect('/api/auth/signin');
  }
  return <>{children}</>;
};

export default ServerAuthManager;
