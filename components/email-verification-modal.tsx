import Modal from 'react-modal';
import { ArrowLeftIcon, CheckCircleIcon } from '@/assets/icons';
import { Button } from './button';

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
          <div className='px-[48px] py-[32px]'>
            <div className='flex justify-center items-center pb-[24px]'>
              <CheckCircleIcon />
            </div>

            <div className='text-center'>
              <div className='text-[30px] font-semibold'>Email verified</div>
              <p className='text-[16px] font-normal'>
                Your email has been successfully verified.
              </p>
            </div>
            <div className='py-[32px]'>
              <Button className='text-[16px] rounded'>Log In</Button>
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

export default EmailVerificationModal;
