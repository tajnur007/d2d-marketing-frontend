'use client';

import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import NoAccount from '@/components/auth/common/no-account';
import NewPassword from '@/components/auth/new-password';
import PasswordChanged from '@/components/auth/password-changed';
import AuthLayout from '@/components/layouts/auth-layout';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState<boolean>(true);
  const [resetData, setResetData] = useState({ token: '', company_id: '' });
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return; // Ensure searchParams is initialized

    const token = searchParams.get('token');
    const company_id = searchParams.get('company_id');

    if (token && company_id) {
      // Make reset password request using token and company_id
      setResetData({
        token: token,
        company_id: company_id,
      });
    }
  }, [searchParams]);

  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      {newPassword ? (
        <NewPassword
          resetData={resetData}
          handleNewPassword={() => setNewPassword(false)}
        />
      ) : (
        <PasswordChanged />
      )}
    </AuthLayout>
  );
};

export default ResetPasswordPage;
