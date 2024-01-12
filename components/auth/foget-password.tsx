'use client';

import Link from 'next/link';
import ResetPassword from './reset-password';
import NewPassword from './new-password';
import PasswordChanged from './password-changed';
import { useState } from 'react';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import AuthCommonLayout from './common/auth-common-layout';

const ForgetPassword = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [passwordChanged, setPasswordC] = useState(true);

  return (
    <div className='flex w-full h-screen overflow-hidden p-0 m-0'>
      <AuthCommonLayout pageImage={marketingForgetPassword} />

      <div className='w-3/5 flex flex-col items-center overflow-y-auto'>
        <div className='ml-auto pt-[48px] pr-[45px]'>
          Have an account?{' '}
          <Link href={PAGE_ROUTES.Signin}>
            <span className='text-primary-bg hover:underline'>Sign In!</span>
          </Link>
        </div>

        {resetPassword && <ResetPassword />}
        {newPassword && <NewPassword />}
        {passwordChanged && <PasswordChanged />}
      </div>
    </div>
  );
};

export default ForgetPassword;
