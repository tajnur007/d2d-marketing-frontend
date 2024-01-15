import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import passwordChangedImage from '@/assets/images/password-changed.png';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const PasswordChanged = () => {
  return (
    <section>
      <div className='max-w-[600px] w-[388px] mx-auto py-12 items-center justify-center'>
        <div>
          <div className='mt-10 w-[388px] my-6 text-[16px] flex flex-row text-gray-500'></div>
          <div className='mt-10 w-[388px] text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            Password changed!
          </div>
          <div className='w-[388px] my-5 text-[16px] text-[#313957] font-extralight tracking-[0.16px] leading-[25.6px] whitespace-nowrap'>
            Your password has been updated successfully.
            <br />
          </div>
        </div>
        <div className='my-4 flex items-center justify-center'>
          <Image src={passwordChangedImage} alt='page-logo' />
        </div>
        <div className='flex items-center justify-center'>
          <Link href={PAGE_ROUTES.Signin}>
            <ForgetPasswordCommon
              buttonInfo={{
                className:
                  'w-[388px] bg-[#4318FF] rounded-[12px] text-[16px] tracking-[0] leading-[16px] text-white p-4 font-extralight mt-4 mb-[55px]',
                text: 'Login now',
                type: 'text',
              }}
            />
          </Link>
        </div>

        <Copyright />
      </div>
    </section>
  );
};

export default PasswordChanged;
