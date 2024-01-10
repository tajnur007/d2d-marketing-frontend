import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png'
import marketingSignUp from '@/assets/images/Marketing-signup.png'
import d2dIcon from '@/assets/images/D2DIcon.png'
import Link from 'next/link';
import SignupForm from './signup-form';

const SignUp= () => {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-2/5 h-full  bg-primary-bg  text-white relative">
        <div className="absolute top-0 left-0  flex z-1 justify-between items-start">
          <Image src={layoutTop} alt='top' />
        </div>
        <div className="flex flex-col gap-36 relative ">
          <div className="pl-[58px] pt-[63px]">
            <Image src={d2dIcon} alt='icon' />
          </div>
          <div className="pl-14">
            <div className="text-base">
              <h5>Door 2 door marketing 🙂</h5>
            </div>
            <div className="pt-6 w-[501px] h-[33px] text-white/[.5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            </div>
          </div>

          <div className="pl-[37px] pd-[86px] pr-[38px]">
            <Image src={marketingSignUp} alt='marketing' />
          </div>
        </div>
      </div>
      <div className="w-3/5 h-screen flex flex-col items-center">
        <div className="ml-auto pt-[48px] pr-[45px]">
          Have an account?{' '}
          <Link href="/auth/signin">
          <span className="text-primary-bg hover:underline">Sign In!</span>
          </Link>
        </div>


        <SignupForm/>
      </div>
    </div>
  );
};

export default SignUp;
