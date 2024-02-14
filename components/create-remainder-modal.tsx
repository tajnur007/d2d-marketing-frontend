'use client';

import Select from 'react-select';
import { FormEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Input } from './input';
import { CreateReminderModalProps } from '@/models/global-types';
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
    disabled: isLoading,
    placeholder: 'DD:MM:YY TT:TT',
    className: `w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none font-medium text-[14px] uppercase text-[#B9C1D9] date-picker-placeholder ${
      formErrors.Date && 'border-red-500'
    }`,
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev: any) => {
      return { ...prev, [name]: '' };
    });
  };

  const submitData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            setIsCreated(true);
            toast.success('Remainder created successfully.');
            closeModal();
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
    setSelected(selectedOption?.value);
    setFormData((prev: any) => {
      return { ...prev, Status: selectedOption?.value };
    });

    if (selectedOption?.value) {
      setFormErrors((prev: any) => {
        return { ...prev, Status: '' };
      });
    }
  };

  const closeModal = () => {
    setFormData(CREATE_REMINDER_ITEMS);
    setFormErrors(CREATE_REMINDER_ITEMS);
    setModalIsOpen(false);
  };

  const getDate = (e: any) => {
    setFormData((prev: any) => {
      return { ...prev, Date: e._d };
    });
    if (e._d) {
      setFormErrors((prev: any) => {
        return { ...prev, Date: '' };
      });
    }
  };

  return (
    <Modal
      className={
        'absolute w-[546px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto] outline-none'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}>
      <div>
        <form onSubmit={submitData}>
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
            <label
              htmlFor={'dateTime'}
              className='text-[#00156A] text-xs mb-1 font-medium'>
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
              <span className='text-red-500 ml-1'>{`${
                formErrors?.Status ? '(status is required)' : ''
              }`}</span>
            </div>

            <Select
              isDisabled={isLoading}
              options={CREATE_REMINDER_STATUS}
              className='h-[48px] 2xl:h-14 create-reminder-select font-medium text-black text-sm 2xl:text-[16px]'
              styles={{
                control: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  border:
                    formErrors?.Status && !isFocused
                      ? '1px solid red'
                      : isFocused
                      ? '1px solid #a855f7'
                      : '1px solid #F3F3F3',
                  '&:hover': {
                    border:
                      formErrors?.Status && !isFocused
                        ? '1px solid red'
                        : isFocused
                        ? '1px solid #a855f7'
                        : '1px solid #F3F3F3',
                  },
                  borderRadius: '10px',
                  width: '100%',
                  height: '100%',
                  boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
                  transition: 'all 500ms',
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

          <Button
            type='submit'
            className='h-[60px] text-white transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200 mt-[10px]'>
            {isLoading ? <MiniLoader /> : ' Create'}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateRemainderModal;
