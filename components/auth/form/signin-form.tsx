'use client';

import React, { useState, ChangeEvent } from 'react';
import { PasswordRevealIcon } from '@/assets/icons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.ok) {
        router.push(PAGE_ROUTES?.Dashboard);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[47%]'>
        <div className='mb-7 border-gray-[#DBDBDB] border-b text-center'>
          <h1 className='text-black text-4xl font-semibold'>Welcome Back</h1>
          <p className='mt-3 text-black text-lg font-normal mb-5'>
            Login into your account
          </p>
        </div>
        {/* <div className=' text-red-600 text-sm font-normal   cursor-pointer'>
          <Link href={PAGE_ROUTES.Forgetpassword} className='mr-2'>
            Recover Password
          </Link>
        </div> */}
        <div className=' '>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Email</p>}
            placeholder='Email'
            type='text'
            id='email'
            name='Email'
            htmlFor='email'
            onChange={handleEmailChange}
          />
          <div className='relative'>
            <Input
              label={
                <p className='text-[#00156A] font-medium text-xs mb-[2px] my-3'>
                  Password
                </p>
              }
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='Password'
              htmlFor='password'
              onChange={handleEmailChange}
            />
            <p
              className='absolute top-[52px] right-6 cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </p>
          </div>
          <div className='my-10 flex items-center justify-between'>
            <label className='relative items-center cursor-pointer flex '>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className='sr-only peer'
              />
              <div className="w-9 h-5 bg-[#ECECEC] rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
              <span className='ms-2 font-normal text-[#1A1A1A] text-sm'>Remember me</span>
            </label>

            <Link
              href={PAGE_ROUTES.Forgetpassword}
              className=' text-[#D93F21] text-sm font-normal '>
              Recover Password
            </Link>
          </div>
          <Button onClick={handleLogin} className='rounded-[10px] h-[55px]'>
            Log In
          </Button>

          {/* <label className=' items-center mb-5 cursor-pointer'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className='sr-only peer'
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
            <span className='ms-3 text-sm'>Remember me</span>
          </label> */}
        </div>
        {/* <div className=' flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium leading-[14px]'>Email</div>
          <div className=' px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Email here'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
                className=' px-2 focus:outline-none '
              />
            </div>
          </div>
        </div> */}
        {/* <div className=' flex-col justify-start items-start gap-2 '>
          <div className='text-blue-900 text-xs font-medium  '>Password</div>
          <div className=' bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
                className=' px-2 focus:outline-none '
              />
            </div>

            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div> */}
        {/* <div>
          <button
            style={{ backgroundColor: '#5630FF' }}
            className=' text-white text-lg font-semibold rounded-md px-4 py-2 cursor-pointer'
            onClick={handleLogin}>
            Log in
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SigninForm;
