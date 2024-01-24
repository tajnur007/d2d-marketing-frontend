import Image from 'next/image';
import Modal from 'react-modal';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';

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
        <div>
          <Modal
            className={
              'absolute w-[455px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
            }
            isOpen={showModal}
            onRequestClose={closeModal}
            ariaHideApp={false}>
            <div className='m-[30px]'>
              <div className='flex justify-between mb-7'>
                <p className='text-indigo-950 text-2xl font-bold leading-[14px]'>
                </p>
                <button onClick={closeModal}>
                  <ExIcon />
                </button>
              </div>

              <Button
                className='w-full rounded-[10px] h-[60px] mt-8'>
                Create
              </Button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CheckYourEmailModal;
