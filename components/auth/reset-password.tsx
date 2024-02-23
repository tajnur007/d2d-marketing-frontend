'use client';

import { ArrowLeftCircleIcon } from '@/assets/icons';
import { AuthService } from '@/services/auth-service';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import EmailSent from './email-sent';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.log(email);
      const payload = {
        email,
      };

      const UserServices = new AuthService();
      const resp = await UserServices.forgetPassword(payload);

      console.log(resp);
      if (resp?.status === 201) {
        setEmail('');
        setEmailSubmitted(true);
      }
    } catch (err) {
      toast.error('Please use a valid email.');
      console.log('Error in forget password page: ', err);
    }
  };

  // We should not navigate user to another page after submitting an email, keep the user into same route
  if (emailSubmitted) {
    return <EmailSent />;
  }

  return (
    <section>
      <div className='md:max-w-[400px] lg:max-w-[600px] mx-auto lg:px-6 lg:py-9 md:py-2 md:px-3'>
        <div>
          <div className='my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10 md:text-[12px] lg:text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='md:text-[18px] lg:text-[25px] xl:text-[30px]  2xl:text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
            Reset password 👋
          </div>
          <div className='md:my-2 lg:my-5 md:text-[12px] lg:text-[16px]'>
            Enter your email and we&apos;ll send you instruction on
            <br />
            how to reset your password
          </div>
        </div>

        <div className='mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10'>
          <form onSubmit={onFormSubmit}>
            <div>
              <label className='font-semibold text-[#0B1420] md:text-[12px] lg:text-[16px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>
                Email
              </label>
              <div className='my-2 2xl:mt-4 lg:mb-4'>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  className='w-full rounded-[10px] border border-[#F3F3F3] outline-none border-solid lg:py-4 md:py-2 md:px-2 lg:px-3 placeholder-[#B9C1D9] md:text-[12px] lg:text-[14px] font-medium focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'
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
                  'w-full bg-[#4318FF] rounded-lg text-white p-2 lg:p-3 2xl:p-4 font-normal my-2 2xl:my-4 md:text-[12px] lg:text-[16px]',
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
