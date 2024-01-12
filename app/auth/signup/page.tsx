import NoAccount from '@/components/auth/common/no-account';
import SignupForm from '@/components/auth/form/signup-form';
import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignUp from '@/assets/images/Marketing-signup.png';

const SignUpPage = () => {
  return (
    <AuthLayout text='forget password' image={marketingSignUp}>
      <NoAccount signupPage={true} />
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUpPage;
