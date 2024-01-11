'use client';

import Link from 'next/link';
import ResetPassword from './reset-password';
import NewPassword from './new-password';
import PasswordChanged from './password-changed';
import { useState } from 'react';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import ForgetPasswordLeft from './forget-password-left';

const ForgetPassword = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [passwordChanged, setPasswordC] = useState(true);

  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <ForgetPasswordLeft />

      <div className='w-3/5 max-h-full flex flex-col items-center '>
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
