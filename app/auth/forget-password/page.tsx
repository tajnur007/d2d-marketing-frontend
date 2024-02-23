'use client';

import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import NoAccount from '@/components/auth/common/no-account';
import ResetPassword from '@/components/auth/reset-password';
import AuthLayout from '@/components/layouts/auth-layout';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';

const ForgetPasswordPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      <div className='w-full h-screen flex items-center justify-center'>
        <ResetPassword />
      </div>
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
