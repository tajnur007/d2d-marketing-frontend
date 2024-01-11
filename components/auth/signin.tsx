import Link from 'next/link';

import SigninForm from './form/signin-form';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import SigninLeft from './signin-left';

const SignIn = () => {
  return (
    <div className='flex w-full h-full'>
      <SigninLeft />
      <div className='w-3/5 h-screen flex flex-col items-center'>
        <div className='ml-auto pt-[48px] pr-[45px]'>
          Don&apos;t Have an account?{' '}
          <Link href={PAGE_ROUTES.Signup}>
            <span className='text-primary-bg hover:underline'>Sign Up!</span>
          </Link>
        </div>

        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;
