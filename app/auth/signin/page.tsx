import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import NoAccount from '@/components/auth/common/no-account';
import SigninForm from '@/components/auth/form/signin-form';

const SignInPage = () => {
  return (
    <AuthLayout text='forget password' image={marketingSignIn}>
      <NoAccount signupPage={false} />
      <SigninForm />
    </AuthLayout>
  );
};

export default SignInPage;
