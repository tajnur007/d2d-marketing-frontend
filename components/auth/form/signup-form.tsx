'use client';

import React, { useState, ChangeEvent } from 'react';
import { PasswordRevealIcon } from '@/assets/icons';
import { GoogleIcon } from '@/assets/icons';
import { FacebookIcon } from '@/assets/icons';
import { Vectorline } from '@/assets/icons';

const SignupForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibilityToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, password, confirmPassword });
  };

  return (
    <div>
      <div className='w-full h-full flex-col flex justify-center'>
        <div className='max-w-[600px] w-full h-min m-auto flex flex-col gap-2'>
          <div className='left-[1086px] top-[133px] absolute text-black text-2xl font-semibold '>
            Get Started With D2D
          </div>
          <div className='left-[1131px] top-[167px] absolute text-zinc-500 text-[15.04px] font-normal  leading-[10.90px]'>
            Getting started is easy
          </div>
          <div>
            <div className="left-[1010px] top-[284px] absolute text-black text-[13px] font-normal font-['Poppins'] leading-[14.50px]">
              <Vectorline />
            </div>
            <div className="left-[1157px] top-[277px] absolute text-black text-[13px] font-normal font-['Poppins'] leading-[14.50px]">
              Or continue with
            </div>
            <div className="left-[1280px] top-[284px] absolute text-black text-[13px] font-normal font-['Poppins'] leading-[14.50px]">
              <Vectorline />
            </div>
          </div>
        </div>

        <div className='w-[126px] h-11 left-[1078px] top-[220px] absolute'>
          <div className='w-[126px] h-[43px] left-0 top-[1px] absolute bg-white rounded-[5px] border border-green-500'>
            <div className='left-[56px] top-[px] absolute text-black text-xs font-medium  leading-[44px]'>
              Google
            </div>
            <div className='w-[22px] h-[22px] left-[26px] top-[11px] absolute'>
              <GoogleIcon />
            </div>
          </div>
        </div>

        <div className='w-[126px] h-11 left-[1218px] top-[221px] absolute'>
          <div className='w-[126px] h-[43px] left-0 top-0 absolute bg-white rounded-[5px] border border-neutral-200'></div>
          <div className='w-[26px] h-[26px] left-[17px] top-[8px] absolute'>
            <div className='w-[26px] h-[26px] left-0 top-0 absolute'>
              <FacebookIcon />
            </div>
          </div>
          <div className='left-[51px] top-0 absolute text-black text-xs font-medium  leading-[44px]'>
            Facebook
          </div>
        </div>

        <div className='left-[980px] top-[799px] absolute text-zinc-600 text-sm font-normal leading-[14.50px]'>
          By continuing you indicate that you read and agreed to the Terms of Use
        </div>

        <div className='h-[77px] left-[1016px] top-[317px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium  leading-[14px]'>Name</div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Name'
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleNameChange}
                className='w-[70%] px-2 py- focus:outline-none focus:ring focus:border-blue-300'
              />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[1016px] top-[407px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium leading-[14px]'>Email</div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Email here'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
                className='w-[70%] px-2 py- focus:outline-none focus:ring focus:border-blue-300'
              />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[1016px] top-[497px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium  leading-[14px]'>
            Password
          </div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
                className='w-[80%] px-2 py-  focus:outline-none focus:ring focus:border-blue-300'
              />
            </div>
            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[1016px] top-[587px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-sm font-medium  leading-[14px]'>
            Confirm password
          </div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Confirm password'
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className='w-[80%] px-2  focus:outline-none focus:ring'
              />
            </div>
            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handleConfirmPasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div>

        <div className='w-[400px] h-[57.75px] left-[1016px] top-[685px] absolute'>
          <button
            style={{ backgroundColor: '#FBBD1D' }}
            className='w-full h-full rounded-md'
            onClick={handleSubmit}>
            <div className='left-[144px] top-[23px] absolute text-black text-[14.85px] font-semibold  leading-3'>
              Create Account
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
