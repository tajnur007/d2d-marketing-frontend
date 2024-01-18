import NoAccount from '@/components/auth/common/no-account';
import SignupForm from '@/components/auth/form/signup-form';
import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignUp from '@/assets/images/Marketing-signup.png';
import { AUTH_LEFT_TEXT, PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingSignUp}>
      <div className=' mb-16 pt-12 pr-10 flex items-center justify-end w-full text-[14px] text-black font-normal gap-2'>
        Have an account?
        <Link href={PAGE_ROUTES.Signin}>
          <span className='text-[#5630FF] font-medium'>Sign In!</span>
        </Link>
      </div>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUpPage;
