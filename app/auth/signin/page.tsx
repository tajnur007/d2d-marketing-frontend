'use client';

import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import NoAccount from '@/components/auth/common/no-account';
import SigninForm from '@/components/auth/form/signin-form';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';
import { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className='h-screen w-full flex items-center justify-center'>
        <InfinitySpin width='200' color='#4f46e5' />
      </div>
    );
  }
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingSignIn}>
      <NoAccount signupPage={true} />
      <SigninForm loading={loading} setLoading={setLoading} />
    </AuthLayout>
  );
};

export default SignInPage;
