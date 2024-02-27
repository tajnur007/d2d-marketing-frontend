import Modal from 'react-modal';
import { ArrowLeftIcon, FeaturedIcon } from '@/assets/icons';
import termsOfUseImage from '@/assets/images/terms-of-use.png';
import Image from 'next/image';
import { Button } from '@/components/button';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const TermsOfUseModal = ({
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
          className={
            'flex mx-auto items-center absolute -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
          }
          isOpen={showModal}
          onRequestClose={closeModal}
          ariaHideApp={false}>
          <div className='w-[700px]'>
            <div className='px-[24px] 2xl:px-[44px]'>
              <div className='flex justify-center'>
                <Image src={termsOfUseImage} alt='terms-image' />
              </div>

              <p className='text-[24px] text-[#0C1421] text-center font-bold my-5 2xl:my-[30px]'>
                Terms of Use
              </p>

              <div className='h-[180px] 2xl:h-[233px] overflow-y-scroll'>
                <p className='font-bold'>Welcome to Door 2 door marketing!</p> <br />
                <p>
                  These terms and conditions outline the rules and regulations for the use of Vivasoft Limited&apos;s Website, located at contacts.vivasoft.com.
                </p> <br />
                <p>
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use Visitase if you do not agree to take all of the terms and conditions stated on this page.
                </p> <br />
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot;
                </p>
              </div>

              <div className='mt-[20px] 2xl:mt-[35px]' onClick={closeModal}>
                <Button className='rounded-[10px] md:h-[35px] lg:h-[48px] 2xl:h-14 mt-5'>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TermsOfUseModal;
