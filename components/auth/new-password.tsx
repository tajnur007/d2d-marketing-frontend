'use client';

import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import { useState, FormEvent } from 'react';
import ForgetPasswordCommon from './common/forget-password-common';
import Copyright from './common/copyright';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

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
      <div className='max-w-[600px] mx-auto px-6 py-12'>
        <div>
          <div className='mt-10 my-6 text-[16px] flex flex-row text-gray-500'>
            <Link href={PAGE_ROUTES.Signin} className='mr-2'>
              <ArrowLeftCircleIcon />
            </Link>
            Back to Login
          </div>
          <div className='mt-10 text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            New password 👋
          </div>
          <div className='my-5 text-[16px]'>Type your new password</div>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label>New password</label>
            <div className='mt-4 mb-4'>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={newPassword}
                className='block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='New password'
                autoComplete='off'
                required
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            <label>Re-type password</label>
            <div className='mt-4 mb-4'>
              <input
                id='retypePassword'
                type='password'
                name='retypePassword'
                value={retypePassword}
                className='block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='Re-type password'
                autoComplete='off'
                required
                onChange={(event) => setReTypePassword(event.target.value)}
              />
            </div>
          </div>
          <ForgetPasswordCommon
            buttonInfo={{
              className: 'w-full bg-[#4318FF] rounded-lg text-white p-4 font-normal my-4',
              text: 'Submit',
              type: 'submit',
            }}
          />
        </form>

        <Copyright />
      </div>
    </section>
  );
};

export default NewPassword;
