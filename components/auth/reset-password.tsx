'use client';

import { ArrowLeftCircleIcon } from '@/assets/icons';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';

const ResetPassword = ({ onFormData }:any) => {
  const [email, setEmail] = useState('');
  
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormData({ email });
    setEmail('');
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
            Reset password 👋
          </div>
          <div className='my-5 text-[16px]'>
            Enter your email and we&apos;ll send you instruction on
            <br />
            how to reset your password
          </div>
        </div>

        <div className='mt-10'>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Email</label>
              <div className='mt-4 mb-4'>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  className='block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                  placeholder='Example@email.com'
                  autoComplete='off'
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <ForgetPasswordCommon
              buttonInfo={{
                className:
                  'w-full bg-[#4318FF] rounded-lg text-white p-4 font-normal my-4',
                text: 'Submit',
                type: 'submit',
              }}
            />
          </form>
        </div>
        <Copyright />
      </div>
    </section>
  );
};

export default ResetPassword;
