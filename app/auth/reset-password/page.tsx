'use client';

import NoAccount from '@/components/auth/common/no-account';
import NewPassword from '@/components/auth/new-password';
import PasswordChanged from '@/components/auth/password-changed';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import { useState } from 'react';
// import ResetPassword from '@/components/auth/reset-password';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import AuthLayout from '@/components/layouts/auth-layout';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState<boolean>(true);

  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      {newPassword ? (
        <NewPassword handleNewPassword={() => setNewPassword(false)} />
      ) : (
        <PasswordChanged />
      )}
    </AuthLayout>
  );
};

export default ResetPasswordPage;
