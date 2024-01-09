'use client';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';

const AtuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  let isAuthenticated = false;
  if (isAuthenticated) {
    router.push(PAGE_ROUTES.Dashboard);
  }
  return <div className=''>{children}</div>;
};

export default AtuthLayout;
