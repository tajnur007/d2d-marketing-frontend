import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import emailSentImage from '@/assets/images/email-sent.png';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const EmailSent = () => {
  return (
    <section>
      <div className='max-w-[600px] mx-auto px-6 py-12'>
        <div>
          <div className='mt-10 my-6 text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='mt-10 text-[36px] font-bold leading-[36px] text-[#0B1420] tracking-[0.36px] whitespace-nowrap'>
            Email sent 📨
          </div>
          <div className='w-[600px] font-extralight my-5 text-[16px] tracking-[0.16px] leading-[25.6px] text-[#313957] '>
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
              'w-full bg-[#F3F0FF] rounded-[12px] font-extralight text-[16px] tracking-[0] leading-[16px] text-[#4318FF] p-4 font-normal my-4 whitespace-nowrap',
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
