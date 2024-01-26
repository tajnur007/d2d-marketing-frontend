import { ArrowLeftIcon, CheckCircleIcon, CloseCircleIcon } from '@/assets/icons';
import { Button } from '@/components/button';

const VerifyEmailPage = () => {
  let verified = false;

  return (
    <div className='flex justify-center items-center absolute w-[455px] -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%] rounded border border-gray-200 bg-white shadow-sm'>
      <div className='container px-[48px] py-[32px]'>
        {verified ? (
          <>
            <div className='flex justify-center items-center pb-[24px]'>
              <CheckCircleIcon />
            </div>

            <div className='text-center'>
              <div className='text-[30px] font-semibold'>Email verified</div>
              <p className='text-[16px] font-normal'>
                Your email has been successfully verified.
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
                Your email verification has failed.
              </p>
            </div>
          </>
        )}
        <Button className='text-[16px] rounded my-[32px]'>Log In</Button>

        <button className='flex mx-auto items-center space-x-2'>
          <ArrowLeftIcon />
          <span className='text-[14px] font-semibold'>Back to Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
