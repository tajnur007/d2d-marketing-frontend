import React from 'react';
import Link from 'next/link';

interface ForgetPasswordCommonProps {
  buttonInfo: {
    className: string;
    text: string;
    type: string;
  };
}

const ForgetPasswordCommon = ({ buttonInfo }: ForgetPasswordCommonProps) => {
  return (
    <>
      <button className={buttonInfo.className}>{buttonInfo.text}</button>
      <p className='md:text-[12px] lg:text-[16px] 2xl:text-[18px] text-center lg:font-xl md:font-medium lg:my-8 md:my-4 text-black'>
        Don&apos;t have an account?{' '}
        <Link href='/auth/signup' className='text-[#4318FF]'>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default ForgetPasswordCommon;
