import SigninForm from './form/signin-form';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import AuthCommonLayout from './common/auth-common-layout';
import NoAccount from '@/components/auth/common/no-account';

const SignIn = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <AuthCommonLayout pageImage={marketingSignIn} />
      <div className='w-3/5 h-screen flex flex-col items-center'>
        <NoAccount signupPage={false} />
        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;
