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
      {isSignup ? (
        <div className='ml-auto pt-[48px] pr-[45px]'>
          Have an account?{' '}
          <Link href={PAGE_ROUTES.Signin}>
            <span className='text-primary-bg hover:underline'>Sign in!</span>
          </Link>
        </div>
      ) : (
        <div className='ml-auto pt-[48px] pr-[45px]'>
          Don&apos;t Have an account?{' '}
          <Link href={PAGE_ROUTES.Signup}>
            <span className='text-primary-bg hover:underline'>Sign Up!</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NoAccount;
