import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png'
import MarketingForget from '@/assets/images/Marketing-forget-password.png'
import D2DIcon from '@/assets/images/D2DIcon.png'

const ForgetPassword = () => (
  <div className='flex w-full h-full'>
    <div className="w-2/5 h-full  bg-primary-bg  text-white relative">
      <div className="absolute top-0 left-0  flex z-1 justify-between items-start">
        <Image src={layoutTop} alt='top'/>
      </div>
      <div className="flex flex-col gap-36 relative ">
        <div className="pl-[58px] pt-[63px]">
          <Image src={D2DIcon} alt='icon'/>
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
          <Image src={MarketingForget} alt='marketing' /> 
        </div>
      </div>
    </div>
    <div className="w-3/5 h-full flex flex-col ">
      <div className="ml-auto pt-[48px] pr-[45px]">
        Have an account?  <a href="/auth/signin" className="text-primary-bg hover:underline">Sign In!</a>
      </div>
    </div>
 </div>

);

export default ForgetPassword;