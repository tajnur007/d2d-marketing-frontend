import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import emailSentImage from '@/assets/images/email-sent.png';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import Copyright from './copyright';
import ForgetPasswordCommon from './forget-password-common';

const EmailSent = () => {
  return (
    <section>
      <div className='max-w-[600px] mx-auto px-6 py-12'>
        <div>
          <div className='mt-10 my-6 text-[16px] flex flex-row text-gray-500'>
            <Link href='/auth/signin' className='mr-2'>
              <ArrowLeftCircleIcon />
            </Link>
            Back to Login
          </div>
          <div className='mt-10 text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            Email sent 📨
          </div>
          <div className='w-[600px] my-5 text-[23px] text-[#313957] '>
            An email has been sent to the provided address
            <br />
            with instructions on how to reset your password.
          </div>
        </div>
        <div className='my-4  flex items-center justify-center '>
          <Image src={emailSentImage} alt='page-logo' />
        </div>
        <ForgetPasswordCommon
          buttonInfo={{
            className:
              'w-full bg-[#F3F0FF] rounded-lg text-[#4318FF] p-4 font-normal my-4',
            text: 'Check your email',
            type: 'text',
          }}
        />
        <Copyright />
      </div>
    </section>
  );
};

export default EmailSent;
