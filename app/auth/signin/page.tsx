import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import NoAccount from '@/components/auth/common/no-account';
import SigninForm from '@/components/auth/form/signin-form';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';

const SignInPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingSignIn}>
      <NoAccount signupPage={true} />
      <SigninForm />
    </AuthLayout>
  );
};

export default SignInPage;
