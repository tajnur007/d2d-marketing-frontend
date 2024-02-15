'use client';

import { DeleteLeadModalImage, ExIcon } from '@/assets/icons';
import { DeleteModalProps } from '@/models/global-types';
import { LeadService } from '@/services/lead-services';
import { useSession } from 'next-auth/react';
import 'react-datetime/css/react-datetime.css';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Button } from './button';
import './dropdown-select.css';
import { customStyles } from '@/utils/constants/common-constants';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const DeleteConfirmationModal = ({
  data,
  modalIsOpen,
  setModalIsOpen = () => {},
  isRefreshData,
  setIsRefreshData = () => {},
}: DeleteModalProps) => {
  const { data: session } = useSession();

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmButton = async () => {
    //@ts-ignore
    const token = session?.user?.access_token;
    const LeadServices = new LeadService();
    if (token) {
      await LeadServices.deleteLead(data.id, token);
      toast.success('Lead Delete successfully.');
    } else {
      toast.error('Something went wrong.');
    }
    setModalIsOpen(false);
    setIsRefreshData(!isRefreshData);
  };

  return (
    <Modal
      style={customStyles}
      className={
        'absolute w-[404px] lg:h-auto -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}>
      <div className='m-[30px]'>
        <button onClick={closeModal} className='pl-[250px] mb-[10px]'>
          <ExIcon />
        </button>

        <div className='flex justify-center items-center flex-col'>
          <DeleteLeadModalImage />
          <p className='md:mt-[5px] lg:mt-[10px] font-semibold text-[#131212] md:text-[16px] lg:text-[20px] text-center lg:leading-[31.2px]'>
            Are you sure you want to Delete?
          </p>
        </div>

        <div className='md:mt-[8px] lg:mt-[16px] flex gap-[12px] justify-center'>
          <Button
            onClick={closeModal}
            className='md:w-[70px] lg:w-[135px] md:py-[12px] lg:py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-[#858585] md:text-[14px] lg:text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200 bg-white border border-[#DFDFDF] hover:bg-[white]'>
            Cancel
          </Button>

          <Button
            onClick={handleConfirmButton}
            className='md:w-[70px] lg:w-[135px] md:py-[12px] lg:py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-white md:text-[14px] lg:text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
