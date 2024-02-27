import React from 'react';
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
      <div className='md:max-w-[400px] lg:max-w-[600px] mx-auto p-2'>
        <div>
          <div className='my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10 md:text-[12px] lg:text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='mt-6 lg:mt-8 2xl:mt-10 text-[24px] lg:text-[30px] 2xl:text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            Email sent 📨
          </div>
          <div className='md:my-2 lg:my-5 md:text-[12px] lg:text-[16px]'>
            An email has been sent to the provided address
            <br />
            with instructions on how to reset your password.
          </div>
        </div>
        <div className='2xl:my-4 my-2 flex items-center justify-center '>
          <Image src={emailSentImage} alt='page-logo' className='w-[110px] xl:w-[200px] 2xl:w-[300px]' />
        </div>
        <ForgetPasswordCommon
          buttonInfo={{
            className:
              'w-full bg-[#F3F0FF] rounded-[8px] 2xl:rounded-[12px] text-[#4318FF] p-2 2xl:p-4 font-normal my-2 2xl:my-4 text-[14px] 2xl:text-[16px]',
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
