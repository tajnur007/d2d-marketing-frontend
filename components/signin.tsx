import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png'
import marketingSignIn from '@/assets/images/Marketing-signin.png'
import d2dIcon from '@/assets/images/D2DIcon.png'
import Link from 'next/link';

const SignIn= () => {
  return (
    <div className='flex w-full h-full'>
      <div className="w-2/5 h-full  bg-primary-bg  text-white relative">
        <div className="absolute top-0 left-0  flex z-1 justify-between items-start">
          <Image src={layoutTop} alt='top'/>
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
            <Image src={marketingSignIn} alt='signinImage'/>
          </div>
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col ">
        <div className="ml-auto pt-[48px] pr-[45px]">
          Don&apos;t Have an account?{' '}
          <Link href="/auth/signup">
            <span className="text-primary-bg hover:underline">Sign Up!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
