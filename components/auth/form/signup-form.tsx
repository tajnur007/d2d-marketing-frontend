'use client';

import React, { useState, ChangeEvent } from 'react';
import { PasswordRevealIcon } from '@/assets/icons';

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
    <div className='container'>
      <div className='w-full  h-full flex-col flex justify-center'>
        <div className='max-w-[600px] w-full h-min m-auto flex flex-col gap-2'>
          <div className='left-[60%] -translate-x-1/2 top-[133px] absolute text-black text-2xl font-semibold '>
            Get Started With D2D
          </div>
          <div className='left-[60%] -translate-x-1/2 top-[175px] absolute text-zinc-500 text-[15.04px] font-normal  leading-[10.90px]'>
            Getting started is easy
          </div>
          <div className='w-[395px] absolute border-b-2 border-b-[#DBDBDB] border-solid md:left-[44%] xl:left-[46%] 2xl:left-[49.5%] top-[215px]'></div>
        </div>

        <div className='left-[60%] -translate-x-1/2 top-[730px] absolute text-[#5A5A5A] text-sm font-normal leading-[14.50px]'>
          By continuing you indicate that you read and agreed to the Terms of Use
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[248px] absolute flex-col justify-start items-start gap-2 inline-flex'>
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
                className='w-[70%] px-2 py- focus:outline-none '
              />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[338px] absolute flex-col justify-start items-start gap-2 inline-flex'>
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
                className='w-[70%] px-2 py- focus:outline-none '
              />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[428px] absolute flex-col justify-start items-start gap-2 inline-flex'>
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
                className='w-[80%] px-2 py-  focus:outline-none'
              />
            </div>
            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[518px] absolute flex-col justify-start items-start gap-2 inline-flex'>
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
                className='w-[80%] px-2  focus:outline-none'
              />
            </div>
            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handleConfirmPasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div>

        <div className='w-[400px] h-[57.75px] left-[60%] -translate-x-1/2 top-[616px] absolute'>
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
