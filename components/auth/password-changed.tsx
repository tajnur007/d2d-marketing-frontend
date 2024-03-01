import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import passwordChangedImage from '@/assets/images/password-changed.png';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const PasswordChanged = ({ resetData }: any) => {
  const hasTokenAndCompanyId = !!(resetData.token && resetData.company_id);

  return (
    <section className='w-full flex items-center justify-center my-5'>
      <div className='w-[50%] mx-auto lg:py-0'>
        <div>
          <div className='mt-5 lg:mt-10 text-2xl lg:text-3xl xl:text-4xl xl:mb-2 font-bold flex items-center justify-center leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            {hasTokenAndCompanyId ? 'Password changed!' : 'Not a valid URL!'}
          </div>
          <div className='text-center text-sm lg:text-lg xl:mb-4 flex items-center justify-center text-wrap text-[#313957] font-extralight tracking-[0.16px] leading-[20px] whitespace-nowrap'>
            {hasTokenAndCompanyId
              ? 'Your password has been updated successfully.'
              : 'Please check your email inbox for valid link'}
            <br />
          </div>
          <div className='my-4 flex items-center justify-center'>
            <Image src={passwordChangedImage} alt='page-logo' />
          </div>

          <Link href={PAGE_ROUTES.Signin}>
            <ForgetPasswordCommon
              buttonInfo={{
                className:
                  'w-full bg-[#4318FF] rounded-[12px] text-base lg:text-lg tracking-[0] leading-[16px] text-white p-4 lg:p-2 font-extralight mt-4',
                text: 'Login now',
                type: 'text',
              }}
            />
          </Link>

          <Copyright />
        </div>
      </div>
    </section>
  );
};

export default PasswordChanged;
