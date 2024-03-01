'use client';

import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import NoAccount from '@/components/auth/common/no-account';
import NewPassword from '@/components/auth/new-password';
import PasswordChanged from '@/components/auth/password-changed';
import AuthLayout from '@/components/layouts/auth-layout';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState<boolean>();
  const [resetData, setResetData] = useState({ token: '', company_id: '' });
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return; // Ensure searchParams is initialized

    const token = searchParams.get('token');
    const company_id = searchParams.get('company_id');

    if (token && company_id) {
      setNewPassword(true);
      setResetData({ token, company_id });
    } else {
      setNewPassword(false);
    }
  }, [searchParams]);

  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      <div className='w-full h-screen flex items-center justify-center'>
        {newPassword === undefined ? (
          <span>Loading...</span>
        ) : newPassword ? (
          <NewPassword
            resetData={resetData}
            handleNewPassword={() => setNewPassword(false)}
          />
        ) : (
          <PasswordChanged resetData={resetData} />
        )}
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
