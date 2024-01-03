import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import passwordChangedImage from '@/assets/images/password-changed.png';
import Copyright from './copyright';

const PasswordChanged = () => {
  return (
    <section className='flex justify-center'>
      <div className='flex flex-col justify-center items-center w-1/5'>
        <div className='p-0 my-4'>
          <p className='text-4xl font-bold mb-4'>Password changed!</p>
          <p className='text-base font-normal'>
            Your password has been updated successfully.
          </p>
        </div>
        <Image className='my-4' src={passwordChangedImage} alt='page-logo' />
        <button className='w-full bg-[#4318FF] rounded-lg text-white p-4 font-normal my-4'>
          Login now
        </button>
        <p className='text-lg font-normal my-20'>
          Don&apos;t have an account?{' '}
          <Link href='/auth/signup' className='text-[#4318FF]'>
            Sign up
          </Link>
        </p>
        <Copyright />
      </div>
    </section>
  );
};

export default PasswordChanged;
