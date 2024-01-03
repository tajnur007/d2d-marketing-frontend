'use client';

import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import { useState, FormEvent } from 'react';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setReTypePassword] = useState('');

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(newPassword);
    setNewPassword('');
    console.log(retypePassword);
    setReTypePassword('');
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
            New password 👋
          </h2>
          <p className='my-5 text-md text-gray-500'>
            Type your new password
          </p>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label>New password</label>
            <div className='my-2'>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={newPassword}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='New password'
                autoComplete='off'
                required
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            <label>Re-type password</label>
            <div className='my-2'>
              <input
                id='retypePassword'
                type='password'
                name='retypePassword'
                value={retypePassword}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='Re-type password'
                autoComplete='off'
                required
                onChange={(event) => setReTypePassword(event.target.value)}
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

export default NewPassword;
