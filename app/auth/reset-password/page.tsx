import EmailSent from '@/components/auth/email-sent';
import ForgetPassword from '@/components/auth/forget-password';
import NewPassword from '@/components/auth/new-password';
import PasswordChanged from '@/components/auth/password-changed';
import ResetPassword from '@/components/auth/reset-password';

const ForgetPasswordPage = () => (
  <div className=''>
    <ForgetPassword />
    <EmailSent />
  </div>
);

export default ForgetPasswordPage;
