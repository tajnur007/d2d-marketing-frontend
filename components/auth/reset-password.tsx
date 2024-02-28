'use client';

import { ArrowLeftCircleIcon } from '@/assets/icons';
import { AuthService } from '@/services/auth-service';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { Input } from '@/components/input';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Copyright from './common/copyright';
import ForgetPasswordCommon from './common/forget-password-common';
import EmailSent from './email-sent';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const checkError = (): boolean => {
    if (
      !email.length ||
      !email.includes('@') ||
      email[0] === '@' ||
      email[email.length - 1] === '@'
    ) {
      setIsError(true);
      return true;
    }

    setIsError(false);
    return false;
  }

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkError()) {
      try {
        event.preventDefault();
        const payload = { email };

        const UserServices = new AuthService();
        const resp = await UserServices.forgetPassword(payload);

        if (resp?.status === 201) {
          setEmail('');
          setEmailSubmitted(true);
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
    }
  };

  // We should not navigate user to another page after submitting an email, keep the user into same route
  if (emailSubmitted) {
    return <EmailSent />;
  }

  return (
    <section>
      <div className='md:max-w-[400px] lg:max-w-[600px] mx-auto p-2'>
        <div>
          <div className='my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10 md:text-[12px] lg:text-[16px] flex items-center text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <div className='mr-2'>
              <Link href={PAGE_ROUTES.Signin}>
                <ArrowLeftCircleIcon />
              </Link>
            </div>
            <div>Back to Login</div>
          </div>
          <div className='mt-6 lg:mt-8 2xl:mt-10 text-[24px] lg:text-[30px] 2xl:text-[36px] font-bold leading-9 tracking-tight text-gray-900'>
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
            <div className='my-2 2xl:mt-4 lg:mb-4'>
              <Input
                label={(
                <span className='font-semibold text-[#0B1420] text-[12px] 2xl:text-[16px]'>Email</span>
                )}
                id='email'
                name='email'
                autoComplete='off'
                placeholder='Example@email.com'
                value={email}
                onChange={(event) => setEmail(event.target.value.trim())}
                isError={isError}
              />
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
