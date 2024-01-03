'use client';

import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import { useState, FormEvent } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    setEmail('');
  };
  return (
    <section>
      <div className='min-h-full flex flex-col justify-center px-6 py-12'>
        <div>
          <p className='my-5 text-md flex flex-row text-gray-500'>
            <Link href='/auth/signin' className='mr-2'>
              <ArrowLeftCircleIcon />
            </Link>
            Back to Login
          </p>
          <h2 className='mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Reset password 👋
          </h2>
          <p className='my-5 text-md'>
            Enter your email and we&apos;ll send you instruction on
            <br />
            how to reset your password
          </p>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label>Email</label>
            <div className='mt-2'>
              <input
                id='email'
                type='email'
                name='email'
                value={email}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='Example@email.com'
                autoComplete='off'
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='flex w-full my-5 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm'>
              Submit
            </button>
          </div>
        </form>

        <p className='mt-20 text-center text-sm text-gray-500'>
          Don&apos;t have an account ?{' '}
          <Link href='/auth/signup' className='font-bold leading-6 text-purple-500'>
            Sign Up
          </Link>
        </p>

        <p className='mt-20 text-center text-sm text-gray-500'>
          © 2023 ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
