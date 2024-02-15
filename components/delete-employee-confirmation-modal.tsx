'use client';

import { DeleteLeadModalImage, ExIcon } from '@/assets/icons';
import { DeleteModalProps } from '@/models/global-types';
import { UserService } from '@/services/user-services';
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

const DeleteEmployeeConfirmationModal = ({
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
    try {
      //@ts-ignore
      const token = session?.user?.access_token;
      const UserServices = new UserService();
      const resp = await UserServices.deleteUser(data.id, token);
      if (resp?.status === 202) {
        toast.success('Employee deleted successfully!');
        setIsRefreshData(!isRefreshData);
        setModalIsOpen(false);
      } else {
        toast.error('Something went wrong.');
      }
    } catch (err) {
      toast.error('Failed to delete employee!');
      console.log(err);
    }
  };

  return (
    <Modal
      style={customStyles}
      className={
        'absolute w-[404px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}>
      <div className='m-[30px]'>
        <button onClick={closeModal} className='pl-[250px] mb-[10px]'>
          <ExIcon />
        </button>

        <div className='flex justify-center items-center flex-col'>
          <DeleteLeadModalImage />
          <p className='mt-[10px] font-semibold text-[#131212] text-[20px] text-center leading-[31.2px]'>
            Are you sure, you want to delete the employee?
          </p>
        </div>

        <div className='mt-[16px] flex gap-[12px]'>
          <Button
            onClick={closeModal}
            className='w-[135px] px-[51] py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-[#858585] text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200 bg-white border border-[#DFDFDF] hover:bg-[white]'>
            Cancel
          </Button>

          <Button
            onClick={handleConfirmButton}
            className='w-[135px] px-[51] py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmployeeConfirmationModal;
