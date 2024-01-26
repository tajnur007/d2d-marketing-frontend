'use client';

import EmailVerificationModal from '@/components/email-verification-modal';
import { useState } from 'react';


const VerifyEmailPage = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <EmailVerificationModal showModal={showModal} setShowModal={setShowModal} />
  );
};

export default VerifyEmailPage;
