import EmailSent from '@/components/email-sent';
import NewPassword from '@/components/new-password';
import PasswordChanged from '@/components/password-changed';
import ResetPassword from '@/components/reset-password';

const ForgetPasswordPage = () => (
  <div className=''>
    This is <strong>Forget Password</strong> page
    <ResetPassword/>
    <NewPassword/>
    <PasswordChanged />
    <EmailSent />
  </div>
);

export default ForgetPasswordPage;
