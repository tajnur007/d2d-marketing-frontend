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
    <section>
      <div className='max-w-[600px] mx-auto px-6 py-12'>
        <div>
          <div className='mt-10 my-6 text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='mt-10 text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            New password 👋
          </div>
          <div className='my-[19px] font-extralight text-[#313957] text-[16px] tracking-[0.16px] leading-[25.6px] whitespace-nowrap'>
            Type your new password
          </div>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label className='font-semibold text-[#0B1420] text-[16px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>
              New password
            </label>
            <div className='mt-[8px] mb-[20px]'>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={newPassword}
                className='block w-[388px] h-[48px] rounded-[10px] border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='New password'
                autoComplete='off'
                required
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            <label className='font-semibold text-[#0B1420] text-[16px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>
              Re-type password
            </label>
            <div className='mt-[8px] mb-[20px]'>
              <input
                id='retypePassword'
                type='password'
                name='retypePassword'
                value={retypePassword}
                className='block w-[388px] h-[48px] rounded-[10px] border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
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
