import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import passwordChangedImage from '@/assets/images/password-changed.png';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';

const PasswordChanged = () => {
  return (
    <section>
      <div className='max-w-[600px] mx-auto px-6 py-12 '>
        <div>
          <div className='mt-10 my-6 text-[16px] flex flex-row text-gray-500'></div>
          <div className='mt-10 text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            Password changed!
          </div>
          <div className='w-[600px] my-5 text-[23px] text-[#313957] '>
            Your password has been updated successfully.
            <br />
          </div>
        </div>
        <div className='my-4  flex items-center justify-center '>
          <Image src={passwordChangedImage} alt='page-logo' />
        </div>
        <ForgetPasswordCommon
          buttonInfo={{
            className: 'w-full bg-[#4318FF] rounded-lg text-white p-4 font-normal my-4',
            text: 'Login now',
            type: 'text',
          }}
        />
        <Copyright />
      </div>
    </section>
  );
};

export default PasswordChanged;
