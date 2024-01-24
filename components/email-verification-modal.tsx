import { useEffect } from 'react';
import Modal from 'react-modal';
// import { ArrowLeftIcon, FeaturedIcon } from '@/assets/icons';

const EmailVerificationModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          className='flex justify-center items-center absolute w-[455px] -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
          isOpen={showModal}
          onRequestClose={closeModal}
          ariaHideApp={false}>
          <div className='p-[42px]'>
            <div className='pb-[24px]'>{/* <FeaturedIcon /> */}</div>

            <div className='text-center'>
              <div className='text-[30px] font-semibold'>Check your email</div>
              <p className='text-[20px] font-medium'>
                <span>We’ve sent a verification link to </span>
                <span className='font-semibold'>RIP</span>
              </p>
            </div>

            <div className='relative w-[360px] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[20px] py-8'>
              <span className='text-[#131212]'>
                If you can’t find the email, check your spam folder or{' '}
              </span>
              <span className='font-semibold text-[#5630ff] '>Click to resend</span>
            </div>

            <button onClick={closeModal} className='mx-auto space-x-2'>
              {/* <ArrowLeftIcon /> */}
              <span className='text-[14px] font-semibold'>Back to Sign Up</span>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EmailVerificationModal;
