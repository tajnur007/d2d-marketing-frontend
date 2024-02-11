'use client';

import { DeleteModalProps } from '@/models/global-types';
import { Button } from './button';
import './dropdown-select.css';
import React from 'react';
import Modal from 'react-modal';
import 'react-datetime/css/react-datetime.css';
import { DeleteLeadModalImage, ExIcon } from '@/assets/icons';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const ConfirmationModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  deleteItem,
}: any) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      className={
        'absolute w-[350px] h-auto outline-none -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}>
      <div className='max-w-[350px]'>
        <div className='flex justify-end'>
          <span onClick={closeModal} className='cursor-pointer'>
            <ExIcon />
          </span>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <DeleteLeadModalImage />
          <p className='my-5 font-semibold text-[#131212] text-[20px] text-center leading-[31.2px]'>
            Are you sure?
          </p>
        </div>

        <div className=' flex justify-between gap-[12px]'>
          <Button
            onClick={closeModal}
            className='w-[135px] px-[51] py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Cancel
          </Button>

          <Button
            onClick={() => deleteItem()}
            className='w-[135px] px-[51] py-[18px] flex justify-center items-center rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200 bg-red-600 hover:bg-red-500'>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
