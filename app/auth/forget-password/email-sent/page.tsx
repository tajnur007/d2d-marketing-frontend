import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import EmailSent from '@/components/auth/email-sent';
import AuthCommonLayout from '@/components/auth/common/auth-common-layout';
import NoAccount from '@/components/auth/common/no-account';

const ForgetPassword = () => (
  <div className='flex w-full h-screen'>
    <AuthCommonLayout pageImage={marketingForgetPassword} />

    <div className='w-3/5 max-h-full flex flex-col relative'>
      <NoAccount signupPage={false} />
      <EmailSent />
    </div>
  </div>
);

export default ForgetPassword;
