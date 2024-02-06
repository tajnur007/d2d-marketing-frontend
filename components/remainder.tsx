'use client';

import { useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { toast } from 'react-toastify';
import UpdateRemainderModal from './update-remainder-modal';
import {
  RemainderProps,
  RemainderType,
  UpdateRemainderType,
} from '@/models/global-types';
import { UPDATE_REMINDER_ITEMS } from '@/utils/constants/common-constants';
import { EditIcon } from '@/assets/icons';
import crossImage from '@/assets/images/leadslist-icons/close-circle.png';
import { ReminderService } from '@/services/reminder-services';

const Remainder = ({
  remainder,
  token,
  setRemainders,
  isUpdated,
  setIsUpdated,
}: RemainderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState<RemainderType>(remainder);
  const [formErrors, setFormErrors] =
    useState<UpdateRemainderType>(UPDATE_REMINDER_ITEMS);

  const deleteRemainder = async (id: number) => {
    const Service = new ReminderService();
    const res = await Service.deleteReminder(id, token);

    if (res?.status === 202) {
      toast.success('Successfully deleted!');
      Service.getAllRemindersData(token, setRemainders);
    } else {
      toast.error('Failed to delete!');
    }
  };

  return (
    <div className='rounded-lg p-4 bg-white'>
      <p className='font-semibold text-base mb-[10px] text-black leading-[14px] flex justify-between items-center'>
        <span>{remainder?.title}</span>
        <div onClick={() => deleteRemainder(remainder?.id)} className='cursor-pointer'>
          <Image src={crossImage} alt='close' />
        </div>
      </p>
      <p className='text-[#8A8A8A] mb-[10px] flex justify-between items-center'>
        {moment(remainder?.reminder_time).format('YYYY/MM/DD h:mma')}
        <div onClick={() => setModalIsOpen(true)}>
          <EditIcon />
        </div>
      </p>
      <button className='bg-[#B8FFDD] font-medium  text-black text-[10px] py-[5px] px-2 rounded-full'>
        {remainder?.status}
      </button>
      <UpdateRemainderModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        selected={selected}
        setSelected={setSelected}
        setIsUpdated={setIsUpdated}
      />
    </div>
  );
};

export default Remainder;
