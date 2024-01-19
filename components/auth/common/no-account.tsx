'use client';
import React, { useEffect, useState } from 'react';
import { NoAccountProps } from '@/models/global-types';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const NoAccount = ({ signupPage }: NoAccountProps) => {
  const [isSignup, setIsSignup] = useState<boolean>(true);

  useEffect(() => {
    setIsSignup(!!signupPage);
  }, [signupPage]);

  return (
    <>
      {!isSignup ? (
        <div className='pt-12 pr-10 flex items-center justify-end w-full text-[14px] text-black font-normal gap-2'>
          Have an account?
          <Link href={PAGE_ROUTES.Signin}>
            <span className='text-[#5630FF] font-medium'>Sign In!</span>
          </Link>
        </div>
      ) : (
        <div className='pt-12 pr-10 flex items-center justify-end w-full text-[14px] text-black font-normal gap-2'>
          Don&apos;t Have an account?
          <Link href={PAGE_ROUTES.Signup}>
            <span className='text-[#5630FF] font-medium'>Sign Up!</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NoAccount;
