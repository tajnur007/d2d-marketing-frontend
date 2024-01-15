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
      <p className='text-[18px] text-center font-xl my-10 text-black'>
        Don&apos;t have an account?{' '}
        <Link href='/auth/signup' className='text-[#4318FF]'>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default ForgetPasswordCommon;
