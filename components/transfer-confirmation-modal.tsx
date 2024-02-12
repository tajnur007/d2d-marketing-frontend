import { ExIcon } from '@/assets/icons';
import modalImage from '@/assets/images/assign-modal.png';
import Image from 'next/image';
import Modal from 'react-modal';
import { Button } from './button';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const TransferConfirmationModal = ({
  showConfirmationModal,
  setShowConfirmationModal,
  selected,
  handleTransfer,
}: {
  showConfirmationModal: boolean;
  setShowConfirmationModal: (show: boolean) => void;
  selected: string;
  handleTransfer: () => void;
}) => {
  const closeModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <Modal
      className={
        'absolute   -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={showConfirmationModal}
      onRequestClose={closeModal}>
      <div className='m-[30px] w-[404px] h-[377px] '>
        <button onClick={() => setShowConfirmationModal(false)} className='pl-[325px]'>
          <ExIcon />
        </button>

        <div className='flex justify-center items-center flex-col mt-[-12px]'>
          <Image src={modalImage} alt='error' className='mb-[20px]' />
          <p className='mb-[20px] font-semibold text-[#131212] text-[20px] text-center leading-[31.2px] text-wrap'>
            Are you sure you want to transfer the assignee to {selected}?
          </p>
        </div>

        <div className='flex gap-[25px] pl-[19px]'>
          <Button
            onClick={() => setShowConfirmationModal(false)}
            className='w-[152px] py-[18px] flex justify-center items-center rounded-[10px] bg-[white] border border-[#DFDFDF] mt-[-1.00px] ml-[-6.50px] mr-[-6.50px] font-medium text-[#858585] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap ease-in-out transform hover:-translate-y-0.5 hover:scale-200 hover:bg-[white]'>
            Cancel
          </Button>

          <Button
            onClick={handleTransfer}
            className='w-[152px] px-[50] py-[18px] flex justify-center items-center rounded-[10px] 
             mt-[-1.00px] ml-[-6.50px] mr-[-6.50px] font-medium text-[white] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap  ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Transfer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TransferConfirmationModal;
