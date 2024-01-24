import Modal from 'react-modal';
import { ArrowLeftIcon, FeaturedIcon } from '@/assets/icons';

const CheckYourEmailModal = ({
  showModal,
  setShowModal,
  selected,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  selected: string;
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          className={
            'flex mx-auto items-center absolute w-[455px]  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
          }
          isOpen={showModal}
          onRequestClose={closeModal}
          ariaHideApp={false}>
          <div className='p-[42px]'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center pb-[24px]'>
                <FeaturedIcon />
              </div>

              <div className='flex flex-col items-center relative self-stretch w-full'>
                <div className='flex flex-col items-center text-[30px] font-semibold'>Check your email</div>
                <p className='flex flex-col items-center text-[20px] font-medium'>
                  <span>We’ve sent a verification link to </span>
                  <span className='font-semibold'>{selected}</span>
                </p>
              </div>
            </div>

            <div className='relative w-[360px] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[20px] py-8'>
              <span className='text-[#131212]'>
                If you can’t find the email check your spam folder or{' '}
              </span>
              <span className='font-semibold text-[#5630ff] '>Click to resend</span>
            </div>
            <button onClick={closeModal} className='flex mx-auto items-center space-x-2'>
              <ArrowLeftIcon />
              <span className='text-[14px] font-semibold'>Back to Sign Up</span>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CheckYourEmailModal;
