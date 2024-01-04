const SignInPage = () => {
  return (
    <div className='flex w-full h-full'>
      <div className="w-2/5 h-full  bg-primary-bg  text-white relative">
        <div className="absolute top-0 left-0  flex z-1 justify-between items-start">
          <img src="/assets-signup/banner01.svg" />
          <img src="/assets-signup/banner02.svg" />
          <img src="/assets-signup/banner03.svg" />
          <img src="/assets-signup/banner04.svg" />
          <img src="/assets-signup/banner05.svg" />
          <img src="/assets-signup/banner06.svg" />
        </div>
        <div className="flex flex-col gap-36 relative ">
          <div className="pl-[58px] pt-[63px]">
            <img src="/assets-signup/Group 474.png" />
          </div>
          <div className="pl-14">
            <div className="text-base">
              <h5>Door 2 door marketing </h5>
            </div>
            <div className="pt-6 w-[501px] h-[33px] text-white/[.5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </div>
          </div>

          <div className="pl-[37px] pd-[86px] pr-[38px]">
            <img src="/assets-signup/Marketing-signin.png" />
          </div>
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col ">
        <div className="ml-auto pt-[48px] pr-[45px]">
          Don't Have an account?  <a href="/auth/signup" className="text-primary-bg hover:underline">Sign Up!</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
