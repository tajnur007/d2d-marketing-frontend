'use client';

import Select from 'react-select';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { UpdateRemainderModalProps } from '@/models/global-types';
import {
  CREATE_REMINDER_STATUS,
  CREATE_REMINDER_ITEMS,
} from '@/utils/constants/common-constants';
import { TextArea } from './text-area';
import { Button } from './button';
import './dropdown-select.css';
import React from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ClockIcon, ExIcon } from '@/assets/icons';
import { LeadService } from '@/services/lead-services';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const UpdateRemainderModal = ({
  modalIsOpen,
  setModalIsOpen,
  selectRemainder,
  setSelectRemainder,
  remainder,
}: UpdateRemainderModalProps) => {
  const { data } = useSession();
  //@ts-ignore
  const token = data?.user?.access_token;

  const submitData = async () => {
    try {
      const payloadObj = {
        status: selectRemainder,
      };

      if (token) {
        const Services = new LeadService();
        const response = await Services.updateRemainder(remainder.id, payloadObj, token);
        if (response.status === 201) {
          setModalIsOpen(false);
          toast.success('Remainder updated successfully.');
        }
      } else {
        toast.error('failed to create remainder.');
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.log('Error in update-remainder-modal: ', error);
    }
  };

  const handleSelectChange = (selectedOption: any) => {
    CREATE_REMINDER_STATUS.map((option) => {
      if (option.value === selectedOption.value) {
        setSelectRemainder(option.value);
      }
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      className={
        'absolute w-[546px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}>
      <div>
        <div className='flex mb-[16px] justify-between'>
          <div className='left-0 font-bold text-[#25254c] text-[24px] tracking-[0] leading-[14px] whitespace-nowrap'>
            <span>Update reminder</span>
          </div>

          <button onClick={closeModal} className='pr-[15px]'>
            <ExIcon />
          </button>
        </div>

        <div className='mt-[8px]'>
          <div className='mt-[-1.00px] font-medium text-[#00156a] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap mb-1'>
            Title
          </div>
          <div className='text-black text-[14px] tracking-[0] leading-[18px] whitespace-nowrap mb-1'>
            {remainder.title}
          </div>
        </div>
        <div className='mt-[8px]'>
          <div className='mt-[-1.00px] font-medium text-[#00156a] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap mb-1'>
            Date & Time
          </div>
        </div>
        <div className='mt-[8px]'>
          <div className='mt-[-1.00px] font-medium text-[#00156a] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap mb-1'>
            Notes
          </div>
        </div>

        <div className='mt-[8px]'>
          <div className='mt-[-1.00px] font-medium text-[#00156a] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap mb-1'>
            Status
          </div>

          <Select
            options={CREATE_REMINDER_STATUS}
            className='create-reminder-select font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: '2px #F3F3F3 solid',
                width: '100%',
                height: '56px',
                borderRadius: '10px',
              }),
            }}
            onChange={handleSelectChange}
          />
        </div>

        <div className='mt-[8px]'>
          <Button
            onClick={submitData}
            className='h-[60px] rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Update
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateRemainderModal;
