import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png';
import marketingForgetPassword from '@/assets/images/Marketing-forget-password.png';
import d2dIcon from '@/assets/images/D2DIcon.png';
import Link from 'next/link';
import EmailSent from '@/components/auth/email-sent';
import AuthCommonLayout from '@/components/auth/common/auth-common-layout';

const ForgetPassword = () => (
  <div className='flex w-full h-screen'>
    <AuthCommonLayout pageImage={marketingForgetPassword} />

    <div className='w-3/5 max-h-full flex flex-col relative'>
      <div className='ml-auto pt-[48px] pr-[45px]'>
        Have an account?{' '}
        <Link href='/auth/signin'>
          <span className='text-primary-bg hover:underline'>Sign In!</span>
        </Link>
      </div>

      <EmailSent />
    </div>
  </div>
);

export default ForgetPassword;
