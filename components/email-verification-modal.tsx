import Modal from 'react-modal';
import { ArrowLeftIcon, CheckCircleIcon, CrossCircleIcon } from '@/assets/icons';
import { Button } from './button';

// if (Modal.defaultStyles.overlay) {
//   Modal.defaultStyles.overlay.backgroundColor = '#00000054';
// }

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

  let verified = true;

  return (
    <>
      {showModal && (
        <Modal
          className='flex justify-center items-center absolute w-[455px] -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
          isOpen={showModal}
          onRequestClose={closeModal}
          ariaHideApp={false}>
          <div className='container px-[48px] py-[32px]'>
            {verified && (
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
            )}

            {!verified && (
              <>
                <div className='flex justify-center items-center pb-[24px]'>
                  <CrossCircleIcon />
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
