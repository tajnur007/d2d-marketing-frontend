'use client';

import ResetPassword from './reset-password';
import NewPassword from './new-password';
import PasswordChanged from './password-changed';
import { useState } from 'react';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import AuthCommonLayout from './common/auth-common-layout';
import NoAccount from './common/no-account';
import EmailSent from './email-sent';

const ForgetPassword = () => {
  const [resetPassword, setResetPassword] = useState(true);
  const [emailSent, setEmailSent] = useState(true);
  const [newPassword, setNewPassword] = useState(false);
  const [passwordChanged, setPasswordC] = useState(false);

  const [formData, setFormData] = useState({});

  const handleFormData = (data:any) => {
    setFormData(data);
    // Assuming you want to proceed to the next step (e.g., show EmailSent) after receiving form data
    setResetPassword(false);
    setEmailSent(true);
  };

  return (
    <div className='flex w-full h-screen overflow-hidden p-0 m-0'>
      <AuthCommonLayout pageImage={marketingForgetPassword} />

      <div className='w-3/5 flex flex-col items-center overflow-y-auto'>
        <NoAccount signupPage={false} />
        {resetPassword && <ResetPassword onFormData={handleFormData} />}
        {emailSent && <EmailSent />}
        {newPassword && <NewPassword />}
        {passwordChanged && <PasswordChanged />}
      </div>
    </div>
  );
};

export default ForgetPassword;
