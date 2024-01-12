import SignupForm from './form/signup-form';
import AuthCommonLayout from './common/auth-common-layout';
import marketingSignUp from '@/assets/images/Marketing-signup.png';
import NoAccount from '@/components/auth/common/no-account';

const SignUp = () => {
  return (
    <div className='flex w-full h-screen'>
      <AuthCommonLayout pageImage={marketingSignUp} />
      <div className='w-3/5 h-screen flex flex-col items-center'>
        <NoAccount signupPage={true} />
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
