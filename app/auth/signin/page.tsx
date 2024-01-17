import AuthLayout from '@/components/layouts/auth-layout';
import marketingSignIn from '@/assets/images/Marketing-signin.png';
import NoAccount from '@/components/auth/common/no-account';
import SigninForm from '@/components/auth/form/signin-form';
import { AUTH_LEFT_TEXT, PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <AuthLayout text={AUTH_LEFT_TEXT} image={marketingSignIn}>
      <div className=' pt-12 pr-10 flex items-center justify-end w-full text-[14px] text-black font-normal gap-2'>
        Don&apos;t Have an account?
        <Link href={PAGE_ROUTES.Signup}>
          <span className='text-[#5630FF] font-medium'>Sign Up!</span>
        </Link>
      </div>
      <SigninForm />
    </AuthLayout>
  );
};

export default SignInPage;
