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
      <div className='md:max-w-[400px] lg:max-w-[500px] mx-auto md:px-3 lg:px-6 xl:py-3 overflow-x-hidden'>
        <div>
          <div className='lg:mt-10 md:mt-5 lg:my-6 md:my-3 lg:text-[16px] md:text-[12px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='md:mt-2 lg:mt-10 md:text-[18px] lg:text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            Email sent 📨
          </div>
          <div className='md:my-2 lg:my-5 md:text-[12px] lg:text-[16px]'>
            An email has been sent to the provided address
            <br />
            with instructions on how to reset your password.
          </div>
        </div>
        <div className='lg:my-4 md:my-2 flex items-center justify-center '>
          <Image src={emailSentImage} alt='page-logo' className='md:w-[130px] lg:w-[300px]' />
        </div>
        <ForgetPasswordCommon
          buttonInfo={{
            className:
              'w-full bg-[#F3F0FF] rounded-[12px] text-[#4318FF] md:p-2 lg:p-4 font-normal md:my-2 lg:my-4 md:text-[12px] lg:text-[16px]',
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
