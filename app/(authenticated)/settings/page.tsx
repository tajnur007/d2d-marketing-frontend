'use client';

import AccountSettingsPage from "@/components/user-setting/account-setting";
import ResetPasswordPage from "@/components/user-setting/reset-password";
import { useState } from "react";

const SettingsPage = () => {

  const [changePasswordClicked, setChangePasswordClicked] = useState(true);

  return (
    <>
    {
      changePasswordClicked ? 
      <AccountSettingsPage setChangePasswordClicked={setChangePasswordClicked} /> 
      : <ResetPasswordPage setChangePasswordClicked={setChangePasswordClicked}/>
    }
    </>
  );
}

export default SettingsPage;