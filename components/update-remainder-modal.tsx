'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import moment from 'moment';
import { Input } from './input';
import { TextArea } from './text-area';
import { Button } from './button';
import { UpdateRemainderModalProps } from '@/models/global-types';
import { CREATE_REMINDER_STATUS } from '@/utils/constants/common-constants';
import './dropdown-select.css';
import 'react-datetime/css/react-datetime.css';
import { ClockIcon, ExIcon } from '@/assets/icons';
import { ReminderService } from '@/services/reminder-services';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const UpdateRemainderModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
  selected,
  setSelected = () => {},
  setIsUpdated = () => {},
  remainder,
}: UpdateRemainderModalProps) => {
  const { data } = useSession();
  //@ts-ignore
  const token = data?.user?.access_token;
  const [change, setChange] = useState(true);

  const inputProps = {
    placeholder: moment(formData?.reminder_time).format('ddd DD MMM, YYYY hh:mm A'),
    className: `w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none font-medium text-[14px] uppercase text-[#B9C1D9] date-picker-placeholder ${
      formErrors.notes && 'border-red-500'
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
    setChange(false);
  };

  const submitData = async () => {
    try {
      const newFormErrors: any = {};

      for (let field in formData) {
        if (formData[field as keyof typeof formData] === '') {
          newFormErrors[field] = `(${field} is required)`;
        }
      }

      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length === 0) {
        const payloadObj = {
          title: formData?.title,
          lead_id: formData?.lead_id,
          user_id: formData?.user_id,
          company_id: formData?.company_id,
          reminder_time: formData?.reminder_time,
          notes: formData?.notes,
          status: selected == '' ? formData?.status : selected,
        };
        console.log(remainder, payloadObj);

        if (token) {
          const ReminderServices = new ReminderService();
          const response = await ReminderServices.updateRemainder(
            formData?.id,
            payloadObj,
            token
          );
          if (response.status === 202) {
            setModalIsOpen(false);
            setIsUpdated(true);
            toast.success('Remainder updated successfully.');
          }
        } else {
          toast.error('failed to update remainder.');
        }
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.log('Error in update-remainder-modal: ', error);
    }
  };

  const handleSelectChange = (selectedOption: any) => {
    setChange(false);
    CREATE_REMINDER_STATUS?.map((option) => {
      if (option?.value === selectedOption?.value) {
        setSelected(option.value);
      }
    });
  };

  const closeModal = () => {
    setChange(false);
    setModalIsOpen(false);
  };

  const getDate = (e: any) => {
    setFormData((prev: any) => {
      return { ...prev, Date: e._d };
    });
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

        <Input
          label='Title'
          placeholder='Title here'
          type='text'
          id='title'
          name='title'
          htmlFor='title'
          errorMessage={formErrors?.title}
          defaultValue={formData?.title}
          className={`${formErrors?.title && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />

        <div className='w-full mt-[4px] date-picker'>
          <label htmlFor={'dateTime'} className='text-[#00156A] text-xs mb-1 font-medium'>
            {'Date & Time'}
            {formErrors.reminder_time && (
              <span className='text-red-500 relative ml-1'>
                {formErrors?.reminder_time}
              </span>
            )}
          </label>

          <div className='relative'>
            <Datetime
              onChange={getDate}
              initialValue={moment(formData?.reminder_time).format(
                'ddd DD MMM, YYYY hh:mm A'
              )}
              inputProps={inputProps}
            />
            <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
              <ClockIcon />
            </div>
          </div>
        </div>

        <div className='mt-[8px]'>
          <div className='mt-[-1.00px] font-medium text-[#00156a] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap mb-1'>
            Status
          </div>

          <Select
            options={CREATE_REMINDER_STATUS}
            className='create-reminder-select font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
            defaultValue={CREATE_REMINDER_STATUS?.filter(
              (item) => item?.value === formData?.status
            )}
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
          <TextArea
            label='Notes'
            placeholder='Notes Here'
            name='notes'
            defaultValue={formData?.notes}
            onChange={handleInputChange}
            errorMessage={formErrors?.notes}
            className={`h-[84px] ${formErrors?.notes && 'border-red-500 shadow'}`}
          />
        </div>

        <div className='mt-[8px]'>
          <Button
            onClick={submitData}
            disabled={change}
            className='h-[60px] rounded-[10px] !font-semibold text-white text-[18px] tracking-[0] leading-[14.5px] ease-in-out transform hover:-translate-y-0.5 hover:scale-200'>
            Update
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateRemainderModal;
