import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import EmailSent from '@/components/auth/email-sent';
import AuthLayout from '@/components/layouts/auth-layout';
import NoAccount from '@/components/auth/common/no-account';
import { AUTH_LEFT_TEXT } from '@/utils/constants/common-constants';

const EmailSentPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingForgetPassword}>
      <NoAccount signupPage={false} />
      <EmailSent />
    </AuthLayout>
  );
};

export default EmailSentPage;
