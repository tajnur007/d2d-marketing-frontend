'use client';

import { DeleteModalProps } from '@/models/global-types';
import { Button } from './button';
import './dropdown-select.css';
import React from 'react';
import Modal from 'react-modal';
import 'react-datetime/css/react-datetime.css';
import { DeleteLeadModalImage, ExIcon } from '@/assets/icons';
import MiniLoader from './mini-loader';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const ConfirmationModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  deleteItem,
  isLoading,
  text = 'Do you really want to delete?',
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
        <div className='flex justify-end '>
          <span onClick={closeModal} className='cursor-pointer'>
            <ExIcon />
          </span>
        </div>

        <div className='flex justify-center items-center flex-col mb-10'>
          <DeleteLeadModalImage />
          <p className=' font-semibold text-[#131212] text-[20px] text-center leading-[31.2px] '>
            Are you sure?
          </p>
          <p className='text-gray-500'>{text}</p>
        </div>
        {isLoading ? (
          <MiniLoader color='#4f46e5' />
        ) : (
          <div className='flex justify-between gap-[12px]'>
            <Button
              onClick={closeModal}
              className='w-[135px] bg-[#EBEBEB] text-[#69707C] hover:bg-gray-200'>
              Cancel
            </Button>

            <Button onClick={() => deleteItem()} className='w-[135px]'>
              Confirm
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
