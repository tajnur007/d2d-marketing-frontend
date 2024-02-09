'use client';

import { ArrowLeftCircleIcon } from '@/assets/icons';
import { AuthService } from '@/services/auth-service';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';

const NewPassword = ({ resetData, handleNewPassword }: any) => {
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setReTypePassword] = useState('');
  const AuthServices = new AuthService();

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== retypePassword) {
      alert('Password is not matching!');
    } else {
      try {
        await AuthServices.resetPassword(
          resetData.token,
          resetData.company_id,
          newPassword
        );
        handleNewPassword(false);
      } catch (err) {
        console.error('Password reset failed:', err);
      }
    }
    console.log('resetData', resetData);
    console.log('new password', newPassword);
  };

  return (
    <section className='w-full lg:w-[60%] flex items-center justify-center mb-10 lg:mb-5'>
      <div className=' mx-auto px-6 lg:px-2 py-6'>
        <div>
          <div className='mt-10 my-6 text-[16px] md:text-[14px] md:my-0 flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <Link href={PAGE_ROUTES.Signin}>
              <div className='mr-2'>
                <ArrowLeftCircleIcon />
              </div>
            </Link>
            <div>Back to Login</div>
          </div>
          <div className='mt-10 lg:mt-5 md:mt-5 lg:text-3xl text-4xl md:text-2xl font-bold leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            New password 👋
          </div>
          <div className='my-5 md:my-2 md:mb-2 lg:mb-6 font-normal text-[#313957] xl:text-[16px] lg:text-[16px] md:text-[12px] tracking-[0.16px] leading-[25.6px] whitespace-nowrap'>
            Type your new password
          </div>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label className='font-medium text-[#0B1420] xl:text-[16px] lg:text-[16px] md:text-[12px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>
              New password
            </label>
            <div className='mt-[4px] mb-[20px] md:mt-1'>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={newPassword}
                className='w-full rounded-[10px] border border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] text-[14px] md:text-[10px] font-medium focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'
                placeholder='New password'
                autoComplete='off'
                required
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            <label className='font-medium text-[#0B1420] xl:text-[16px] lg:text-[16px] md:text-[12px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>
              Re-type password
            </label>
            <div className='mt-[8px] mb-[20px] md:mt-1'>
              <input
                id='retypePassword'
                type='password'
                name='retypePassword'
                value={retypePassword}
                className='w-full rounded-[10px] border border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] text-[14px] md:text-[10px]  font-medium focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'
                placeholder='Re-type password'
                autoComplete='off'
                required
                onChange={(event) => setReTypePassword(event.target.value)}
              />
            </div>
          </div>
          <ForgetPasswordCommon
            buttonInfo={{
              className:
                'w-full bg-[#4318FF] text-[16px] tracking-[0] leading-[16px] rounded-[12px] text-white p-4 font-normal ',
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
