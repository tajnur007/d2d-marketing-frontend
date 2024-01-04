import EmailSent from '@/components/email-sent';
import PasswordChanged from '@/components/password-changed';

const ForgetPasswordPage = () => (
  <div className=''>
    This is <strong>Forget Password</strong> page
    <PasswordChanged />
    <EmailSent />
  </div>
);

export default ForgetPasswordPage;
