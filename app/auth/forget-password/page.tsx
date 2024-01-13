'use client';

import { useState } from 'react';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import NoAccount from '@/components/auth/common/no-account';
import NewPassword from '@/components/auth/new-password';
import PasswordChanged from '@/components/auth/password-changed';
import ResetPassword from '@/components/auth/reset-password';
import AuthLayout from '@/components/layouts/auth-layout';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';

const ForgetPassword = () => {
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<boolean>(false);
  const [passwordChanged, setPasswordC] = useState<boolean>(true);

  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      {resetPassword && <ResetPassword />}
      {newPassword && <NewPassword />}
      {passwordChanged && <PasswordChanged />}
    </AuthLayout>
  );
};

export default ForgetPassword;
