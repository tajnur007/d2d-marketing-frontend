import Link from 'next/link';
import SignupForm from './form/signup-form';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import SignupLeft from './signup-left';

const SignUp = () => {
  return (
    <div className='flex w-full h-screen'>
      <SignupLeft />
      <div className='w-3/5 h-screen flex flex-col items-center'>
        <div className='ml-auto pt-[48px] pr-[45px]'>
          Have an account?{' '}
          <Link href={PAGE_ROUTES.Signin}>
            <span className='text-primary-bg hover:underline'>Sign In!</span>
          </Link>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
