'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { InfinitySpin } from 'react-loader-spinner';

import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { PasswordHideIcon, PasswordRevealIcon } from '@/assets/icons';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

const SigninForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0) {
      if (email == '') {
        toast.error('email cannot be empty.');
      } else if (password.length === 0) {
        toast.error('password cannot be empty.');
      }
    } else {
      try {
        setLoading(true);

        const res = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (res?.ok) {
          router.push(PAGE_ROUTES?.Dashboard);
        } else {
          toast.error('Please enter a valid email and password.');
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Login failed:', err);
        setLoading(false);
        router.push(PAGE_ROUTES?.Signin);
      }
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
    <div className='w-full flex items-center justify-center my-20'>
      <div className='w-[49%]'>
        <div className='mb-7 border-gray-[#DBDBDB] border-b text-center'>
          <h1 className='text-black text-4xl font-semibold'>Welcome Back</h1>
          <p className='mt-3 text-black text-lg font-normal mb-5'>
            Login into your account
          </p>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <Input
              label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Email</p>}
              placeholder='Email'
              type='email'
              id='email'
              name='Email'
              htmlFor='email'
              disabled={loading}
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
                disabled={loading}
                onChange={handlePasswordChange}
              />
              <p
                className='absolute top-[52px] right-6 cursor-pointer'
                onClick={handlePasswordVisibilityToggle}>
                {showPassword ? <PasswordRevealIcon /> : <PasswordHideIcon />}
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
                <span className='ms-2 font-normal text-[#1A1A1A] text-sm'>
                  Remember me
                </span>
              </label>

              <Link
                href={PAGE_ROUTES.Forgetpassword}
                className=' text-[#D93F21] text-sm font-normal '>
                Recover Password
              </Link>
            </div>
            <Button type='submit' className='rounded-[10px] h-[55px]'>
              {loading ? (
                <div className='h-full w-full flex items-center justify-center'>
                  <InfinitySpin width='150' color='#ffffff' />
                </div>
              ) : (
                'Log In'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
