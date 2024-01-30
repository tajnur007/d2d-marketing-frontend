'use client';

import Select from 'react-select';
import { useEffect } from 'react';
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
import { LeadService } from '@/services/lead-services';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const CreateReminderModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
  selected,
  setSelected = () => {},
  leadsData,
}: CreateReminderModalProps) => {
  const { data } = useSession();
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
          title: formData.Title,
          lead_id: leadsData.id,
          reminder_time: formData.Date,
          notes: formData.Note,
          status: formData.Status,
        };

        if (token) {
          const LeadServices = new LeadService();
          const response = await LeadServices.createReminder(payloadObj, token);
          if (response.status === 201) {
            setFormData(CREATE_REMINDER_ITEMS);
            setModalIsOpen(false);
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
  };

  const handleSelectChange = (selectedOption: any) => {
    CREATE_REMINDER_STATUS.map((option) => {
      if (option.value === selectedOption.value) {
        setSelected(option.value);
      }
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getDate = (e: any) => {
    console.log(e._d);

    setFormData((prev: any) => {
      return { ...prev, Date: e._d };
    });
  };

  return (
    <Modal
      className={
        'absolute w-[646px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
      }
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}>
      <div className='m-[30px]'>
        <div className='flex mb-[26px] justify-between'>
          <div className='left-0 font-bold text-[#25254c] text-[24px] tracking-[0] leading-[14px] whitespace-nowrap'>
            <span>Create reminder</span>
          </div>

          <button onClick={closeModal} className='pr-[15px]'>
            <ExIcon />
          </button>
        </div>

        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Title</p>}
          placeholder='Title here'
          type='text'
          id='title'
          name='Title'
          htmlFor='title'
          errorMessage={formErrors.Title}
          className={`${formErrors.Title && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />

        <div className='mt-[16px]'>
          <Input
            label={
              <p className='text-[#00156A] font-medium text-xs mb-1'>Associated Lead</p>
            }
            placeholder='Optional'
            type='text'
            id='associatedLead'
            name='AssociatedLead'
            htmlFor='associatedLead'
            onChange={handleInputChange}
          />
        </div>

        <div className='w-full mt-[16px] date-picker'>
          <label htmlFor={'dateTime'} className='text-[#00156A] text-xs mb-1 font-medium'>
            {'Date & Time'}
            {formErrors.Date && (
              <span className='text-red-500 relative ml-1'>{formErrors.Date}</span>
            )}
          </label>

          <div className='relative'>
            <Datetime onChange={getDate} inputProps={inputProps} />
            <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
              <ClockIcon />
            </div>
          </div>
        </div>

        <div className='mt-[16px]'>
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

        <div className='mt-[16px]'>
          <TextArea
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Notes</p>}
            placeholder='Notes'
            name='Note'
            onChange={handleInputChange}
            errorMessage={formErrors.Note}
            className={`h-[124px] ${formErrors.Note && 'border-red-500 shadow'}`}
          />
        </div>

        <div className='mt-[16px]'>
          <Button
            onClick={submitData}
            className='h-[60px] rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateReminderModal;
