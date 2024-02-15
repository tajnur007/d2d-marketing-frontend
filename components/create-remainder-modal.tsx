'use client';

import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Input } from './input';
import { CreateReminderModalProps } from '@/models/global-types';
import {
  CREATE_REMINDER_STATUS,
  CREATE_REMINDER_ITEMS,
  customStyles,
} from '@/utils/constants/common-constants';
import { TextArea } from './text-area';
import { Button } from './button';
import './dropdown-select.css';
import React from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ClockIcon, ExIcon } from '@/assets/icons';
import { ReminderService } from '@/services/reminder-services';
import MiniLoader from './mini-loader';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const CreateRemainderModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  setIsCreated = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
  selected,
  setSelected = () => {},
  leadsData,
}: CreateReminderModalProps) => {
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  //@ts-ignore
  const token = data?.user?.access_token;

  const inputProps = {
    placeholder: 'DD:MM:YY TT:TT',
    className: `w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none font-medium text-[14px] uppercase text-[#B9C1D9] date-picker-placeholder ${
      formErrors.Note && 'border-red-500'
    }`,
  };

  useEffect(() => {
    setFormData((prev: any) => {
      return { ...prev, Status: selected };
    });
  }, [selected, formErrors, setFormData]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev: any) => {
      return { ...prev, [name]: '' };
    });
  };

  const submitData = async () => {
    try {
      setIsLoading(true);
      const newFormErrors: any = {};

      for (let field in formData) {
        if (field === 'AssociatedLead') {
          continue;
        }
        if (formData[field as keyof typeof formData] === '') {
          newFormErrors[field] = `(${field} is required)`;
        }
      }

      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length === 0) {
        const payloadObj = {
          title: formData?.Title,
          lead_id: leadsData?.id,
          reminder_time: formData?.Date,
          notes: formData?.Note,
          status: formData?.Status,
        };

        if (token) {
          const ReminderServices = new ReminderService();
          const response = await ReminderServices.createReminder(payloadObj, token);
          if (response.status === 201) {
            setFormData(CREATE_REMINDER_ITEMS);
            setModalIsOpen(false);
            setIsCreated(true);
            toast.success('Remainder created successfully.');
          }
        } else {
          toast.error('failed to create remainder.');
        }
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.log('Error in create-remainder-modal: ', error);
    }
    setIsLoading(false);
  };

  const handleSelectChange = (selectedOption: any) => {
    CREATE_REMINDER_STATUS.map((option) => {
      if (option?.value === selectedOption?.value) {
        setSelected(option?.value);
      }
    });
  };

  const closeModal = () => {
    setFormData(CREATE_REMINDER_ITEMS);
    setModalIsOpen(false);
  };

  const getDate = (e: any) => {
    setFormData((prev: any) => {
      return { ...prev, Date: e._d };
    });
  };

  return (
    <Modal
      style={customStyles}
      className={
        'absolute w-[546px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}>
      <div>
        <div className='flex mb-[16px] justify-between'>
          <div className='left-0 font-bold text-[#25254c] text-[24px] tracking-[0] leading-[14px] whitespace-nowrap'>
            <span>Create reminder</span>
          </div>

          <span onClick={closeModal} className='cursor-pointer'>
            <ExIcon />
          </span>
        </div>

        <Input
          label='Title'
          placeholder='Title here'
          type='text'
          id='title'
          name='Title'
          htmlFor='title'
          disabled={isLoading}
          errorMessage={formErrors?.Title}
          className={`${formErrors?.Title && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />

        <div className='mt-[8px]'>
          <Input
            label='Associated Lead'
            placeholder='Optional'
            type='text'
            id='associatedLead'
            name='AssociatedLead'
            htmlFor='associatedLead'
            disabled={isLoading}
            onChange={handleInputChange}
          />
        </div>

        <div className='w-full mt-[4px] date-picker'>
          <label htmlFor={'dateTime'} className='text-[#00156A] text-xs mb-1 font-medium'>
            {'Date & Time'}
            {formErrors.Date && (
              <span className='text-red-500 relative ml-1'>{formErrors?.Date}</span>
            )}
          </label>

          <div className='relative h-[48px] 2xl:h-14'>
            <Datetime onChange={getDate} inputProps={inputProps} />
            <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none '>
              <ClockIcon />
            </div>
          </div>
        </div>

        <div className='mt-[8px]'>
          <div className='font-medium text-[#00156a] text-xs 2xl:text-sm mb-1'>
            Status
          </div>

          <Select
            options={CREATE_REMINDER_STATUS}
            className='h-[48px] 2xl:h-14 create-reminder-select font-medium text-black text-sm 2xl:text-[16px]'
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                borderColor: '2px #F3F3F3 solid',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
                transition: 'all 500ms',
                border: isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
                '&:hover': isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
              }),
            }}
            onChange={handleSelectChange}
          />
        </div>

        <div className='mt-[8px]'>
          <TextArea
            label='Notes'
            placeholder='Notes'
            name='Note'
            disabled={isLoading}
            onChange={handleInputChange}
            errorMessage={formErrors?.Note}
            className={`h-[84px] ${formErrors?.Note && 'border-red-500 shadow'}`}
          />
        </div>

        <div className='mt-[8px]'>
          <Button
            onClick={submitData}
            className='h-[60px] rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            {isLoading ? <MiniLoader /> : ' Create'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateRemainderModal;
