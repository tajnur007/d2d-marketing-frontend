import EmailSent from '@/components/email-sent';
import ForgetPassword from '@/components/foget-password';
import NewPassword from '@/components/new-password';
import PasswordChanged from '@/components/password-changed';
import ResetPassword from '@/components/reset-password';

const ForgetPasswordPage = () => (
  <div className=''>
    <ResetPassword/>
    <NewPassword/>
    <ForgetPassword/>
    <PasswordChanged />
    <EmailSent /> 
  </div>
);

export default ForgetPasswordPage;
