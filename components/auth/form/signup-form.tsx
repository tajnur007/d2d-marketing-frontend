'use client';

import React, { useState, ChangeEvent } from 'react';
import { PasswordRevealIcon } from '@/assets/icons';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

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
    <div className='w-full h-full flex items-center justify-center flex-col mb-20'>
      <div className='w-[49%]'>
        <div className='mb-7 border-gray-[#DBDBDB] border-b text-center'>
          <h1 className='text-black text-2xl font-semibold'>Get Started With D2D</h1>
          <p className='mt-3 text-[#7E7E7E] text-[15px] font-normal mb-5'>
            Getting started is easy
          </p>
        </div>
        <div>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Name</p>}
            placeholder='Name'
            type='text'
            id='name'
            name='Name'
            htmlFor='name'
            onChange={handleEmailChange}
            className='mb-3'
          />
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Email</p>}
            placeholder='Email'
            type='text'
            id='email'
            name='Email'
            htmlFor='email'
            onChange={handleEmailChange}
            className='mb-3'
          />
          <Input
            label={
              <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                Organization Name
              </p>
            }
            placeholder='Organization Name'
            type='text'
            id='organization name'
            name='Organization  Name'
            htmlFor='organization name'
            onChange={handleEmailChange}
            className='mb-3'
          />
          <div className='relative mb-3'>
            <Input
              label={
                <p className='text-[#00156A] font-medium text-xs mb-[2px]'>Password</p>
              }
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='Password'
              htmlFor='password'
              onChange={handleEmailChange}
            />
            <p
              className='absolute top-[40px] right-6 cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </p>
          </div>
          <div className='relative'>
            <Input
              label={
                <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                  Confirm Password
                </p>
              }
              placeholder='Confirm Password'
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm password'
              name='Confirm Password'
              htmlFor='confirm password'
              onChange={handleEmailChange}
            />
            <p
              className='absolute top-[40px] right-6 cursor-pointer'
              onClick={handleConfirmPasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </p>
          </div>
          <Button className='rounded-[10px] h-[57px] mt-6 mb-[30px] text-black text-[14.85px] bg-[#FBBD1D]'>
            Create Account
          </Button>
        </div>
      </div>
      <p className='text-[14px] text-[#5A5A5A] font-normal text-center mx-20'>
        By continuing you indicate that you read and agreed to the Terms of Use
      </p>
    </div>
  );
};

export default SignupForm;
