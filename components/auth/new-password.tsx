'use client';

import { ArrowLeftCircleIcon } from '@/assets/icons';
import { AuthService } from '@/services/auth-service';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import { Input } from '@/components/input';
import { toast } from 'react-toastify';

const NewPassword = ({ resetData, handleNewPassword }: any) => {
  const [isSumittingData, setIsSumittingData] = useState(false);
  const [isPasswordsMatched, setIsPasswordsMatched] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setReTypePassword] = useState('');

  const AuthServices = new AuthService();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== retypePassword) {
      setIsPasswordsMatched(false);
    } else {
      setIsPasswordsMatched(true);
      setIsSumittingData(true);

      AuthServices.resetPassword(resetData.token, resetData.company_id, newPassword)
        .then((resp) => {
          handleNewPassword(false);
        })
        .catch((error: any) => {
          toast.error(error?.response?.data?.message || 'Password not changed!');
        })
        .finally(() => setIsSumittingData(false));
    }
  };

  return (
    <section className='w-full flex items-center justify-center mb-10 lg:mb-5'>
      <div className='w-[50%] my-10'>
        <div>
          <div className='mt-10 my-6 md:my-2 text-[14px] md:text-[14px] lg:text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <Link href={PAGE_ROUTES.Signin}>
              <div className='mr-2'>
                <ArrowLeftCircleIcon />
              </div>
            </Link>
            <div>Back to Login</div>
          </div>
          <div className='mt-10 lg:mt-5 md:mt-4 lg:text-3xl text-2xl xl:text-4xl font-bold leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            New password 👋
          </div>
          <div className='my-5 md:my-2 md:mb-2 lg:mb-6 font-normal text-[#313957] xl:text-[16px] lg:text-[16px] md:text-[12px] tracking-[0.16px] leading-[25.6px] whitespace-nowrap'>
            Type your new password
          </div>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <Input
              id='newPassword'
              type='password'
              label='New password'
              placeholder='New password'
              name='newPassword'
              disabled={isSumittingData}
              isError={!isPasswordsMatched}
              onChange={(event: any) => setNewPassword(event.target.value)}
            />
            <Input
              id='retypePassword'
              type='password'
              label='Re-type password'
              placeholder='Re-type password'
              name='retypePassword'
              disabled={isSumittingData}
              isError={!isPasswordsMatched}
              onChange={(event: any) => setReTypePassword(event.target.value)}
            />
          </div>

          {!isPasswordsMatched && (
            <p className='text-red-400 mb-3'>Password does not matched!</p>
          )}

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
