import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import EmailSent from '@/components/auth/email-sent';
import AuthLayout from '@/components/layouts/auth-layout';
import NoAccount from '@/components/auth/common/no-account';

const ForgetPassword = () => {
  return (
    <AuthLayout text='forget password' image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      <EmailSent />
    </AuthLayout>
  );
};

export default ForgetPassword;
