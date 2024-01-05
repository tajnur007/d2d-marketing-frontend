import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import emailSentImage from '@/assets/images/email-sent.png';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import Copyright from './copyright';
import ForgetPasswordCommon from './forget-password-common';

const EmailSent = () => {
  return (
    <section className='flex justify-center'>
      <div className='flex flex-col items-center w-1/5'>
        <div className='flex self-start'>
          <ArrowLeftCircleIcon />
          <p className='px-4'>Back to Login</p>
        </div>
        <div className='p-0 my-4'>
          <p className='text-4xl font-bold mb-4'>Email sent 📨</p>
          <p className='text-base font-normal'>
            An email has been sent to the provided address with instructions on how to
            reset your password.
          </p>
        </div>
        <Image className='my-4' src={emailSentImage} alt='page-logo' />
        <ForgetPasswordCommon
          buttonInfo={{
            className: 'w-full bg-white rounded-lg text-[#4318FF] p-4 font-normal my-4',
            text: 'Check your email',
            type: 'text'
          }}
        />
        <Copyright />
      </div>
    </section>
  );
};

export default EmailSent;
