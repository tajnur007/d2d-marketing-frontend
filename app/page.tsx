'use client';

import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(PAGE_ROUTES.Signin);
  });

  return <> </>;
};

export default HomePage;
