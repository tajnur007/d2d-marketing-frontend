'use client';

import ResetPassword from './reset-password';
import NewPassword from './new-password';
import PasswordChanged from './password-changed';
import { useState } from 'react';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import AuthCommonLayout from './common/auth-common-layout';
import NoAccount from './common/no-account';

const ForgetPassword = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [passwordChanged, setPasswordC] = useState(true);

  return (
    <div className='flex w-full h-screen overflow-hidden p-0 m-0'>
      <AuthCommonLayout pageImage={marketingForgetPassword} />

      <div className='w-3/5 flex flex-col items-center overflow-y-auto'>
        <NoAccount signupPage={false} />

        {resetPassword && <ResetPassword />}
        {newPassword && <NewPassword />}
        {passwordChanged && <PasswordChanged />}
      </div>
    </div>
  );
};

export default ForgetPassword;
