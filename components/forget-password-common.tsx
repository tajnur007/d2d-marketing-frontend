import React from 'react';
import Link from 'next/link';

interface ForgetPasswordCommonProps {
  buttonInfo: {
    className: string;
    text: string;
  };
}

const ForgetPasswordCommon = ({ buttonInfo }: ForgetPasswordCommonProps) => {
  return (
    <>
      <button className={buttonInfo.className}>{buttonInfo.text}</button>
      <p className='text-lg font-normal my-10'>
        Don&apos;t have an account?{' '}
        <Link href='/auth/signup' className='text-[#4318FF]'>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default ForgetPasswordCommon;
