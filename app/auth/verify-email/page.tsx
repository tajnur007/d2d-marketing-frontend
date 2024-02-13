'use client';

import { ArrowLeftIcon, CheckCircleIcon, CloseCircleIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { AuthService } from '@/services/auth-service';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyEmailPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationMessageSuccess, setVerificationMessageSuccess] = useState('');
  const [verificationMessageFail, setVerificationMessageFail] = useState('');
  const [verifyData, setVerifyData] = useState({ token: '', company_id: '' });
  const searchParams = useSearchParams();
  const AuthServices = new AuthService();
  const router = useRouter();

  useEffect(() => {
    if (!searchParams) return;
    const token = searchParams.get('token');
    const company_id = searchParams.get('company_id');
    if (token && company_id) {
      console.log(
        'Verification request with token:',
        token,
        'and company_id:',
        company_id
      );
      setVerifyData({
        token: token,
        company_id: company_id,
      });
    }
  }, [searchParams]);

  const emailVerification = (token: string, company_id: string) => {
    AuthServices.verifyEmail(token, company_id)
      .then((response) => {
        const message = response.Message;
        console.log('message', message);
        if (message === 'User verified successfully') {
          setIsVerified(true);
          setVerificationMessageSuccess(message);
          setVerificationMessageFail('');
        } else {
          setIsVerified(false);
          setVerificationMessageSuccess('');
          setVerificationMessageFail('Email verification failed');
        }
      })
      .catch((err) => {
        console.error('Email verification failed:', err);
        const message = err.response.data.message;
        if (message === 'Verification has already been completed') {
          setIsVerified(true);
          setVerificationMessageSuccess(message);
          setVerificationMessageFail('');
        } else if (
          message === 'record not found' ||
          message === 'request params is not valid'
        ) {
          setIsVerified(false);
          setVerificationMessageSuccess('');
          setVerificationMessageFail(message);
        } else {
          setIsVerified(false);
          setVerificationMessageSuccess('');
          setVerificationMessageFail('Email verification failed');
        }
      });
  };

  useEffect(() => {
    if (verifyData.token && verifyData.company_id) {
      emailVerification(verifyData.token, verifyData.company_id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyData]);


  return (
    <div className='flex justify-center items-center absolute w-[455px] -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%] rounded border border-gray-200 bg-white shadow-sm'>
      <div className='container px-[48px] py-[32px]'>
        {isVerified ? (
          <>
            <div className='flex justify-center items-center pb-[24px]'>
              <CheckCircleIcon />
            </div>

            <div className='text-center'>
              <div className='text-[30px] font-semibold'>Email verified</div>
              <p className='text-[16px] font-normal'>
                {verificationMessageSuccess}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='flex justify-center items-center pb-[24px]'>
              <CloseCircleIcon />
            </div>

            <div className='text-center'>
              <div className='text-[30px] font-semibold'>Email not verified</div>
              <p className='text-[16px] font-normal'>
                {verificationMessageFail}
              </p>
            </div>
          </>
        )}
        <Button
          onClick={() => router.push(PAGE_ROUTES.Signin)}
          className='text-[16px] rounded my-[32px]'>
          Log In
        </Button>

        <button
          onClick={() => router.push(PAGE_ROUTES.Signup)}
          className='flex mx-auto items-center space-x-2'>
          <ArrowLeftIcon />
          <span className='text-[14px] font-semibold'>Back to Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
