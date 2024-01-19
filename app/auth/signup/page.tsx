import NoAccount from '@/components/auth/common/no-account';
import SignupForm from '@/components/auth/form/signup-form';
import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignUp from '@/assets/images/Marketing-signup.png';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';

const SignUpPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingSignUp}>
      <NoAccount signupPage={false} />
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUpPage;
