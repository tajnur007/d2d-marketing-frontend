import EmailSent from '@/components/email-sent';
import ForgetPasswordPageLayout from '@/components/forget-password-layout';
import NewPassword from '@/components/new-password';
import PasswordChanged from '@/components/password-changed';
import ResetPassword from '@/components/reset-password';

const ForgetPasswordPage = () => (
  <div className=''>
    <ResetPassword/>
    <NewPassword/>
    <ForgetPasswordPageLayout/>
    <PasswordChanged />
    <EmailSent /> 
  </div>
);

export default ForgetPasswordPage;
