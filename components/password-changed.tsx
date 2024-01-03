import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'

import passwordChangedImage from '@/assets/images/password-changed.png';

const myFont = localFont({ src: '../assets/fonts/Metropolis-Black.otf' })

const PasswordChanged = () => {
  return (
    <section className='flex flex-col items-center w-1/5'>
      <div className='p-0 my-4'>
        <p className='text-4xl font-bold mb-4'>Password changed!</p>
        <p className='text-base font-normal'>Your password has been updated successfully.</p>
      </div>
      <Image className='my-4' src={passwordChangedImage} alt="page-logo"/>
      <button className='w-full bg-[#4318FF] rounded-lg text-white p-4 font-normal my-4'>Login now</button>
      <p className='text-lg font-normal my-20'>Don't have an account? <span className='text-[#4318FF]'>Sign up</span></p>
      <p className='text-xs font-light'>© 2023 ALL RIGHTS RESERVED</p>;
    </section>
  )
}

export default PasswordChanged;