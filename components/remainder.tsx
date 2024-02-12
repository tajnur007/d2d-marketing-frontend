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
import ConfirmationModal from './confirmation-modal';

const Reminder = ({
  reminder,
  token,
  setReminders,
  isUpdated,
  setIsUpdated,
}: RemainderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState<RemainderType>(reminder);
  const [formErrors, setFormErrors] =
    useState<UpdateRemainderType>(UPDATE_REMINDER_ITEMS);

  const deleteRemainder = async () => {
    try {
      const Service = new ReminderService();
      const res = await Service.deleteReminder(reminder?.id, token);

      if (res?.status === 202) {
        toast.success(res.data.Message);
        Service.getAllRemindersData(token, setReminders);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    }
    setModalIsOpen(false);
  };

  return (
    <div className='rounded-lg p-4 bg-white'>
      <p className='font-semibold text-base mb-[10px] text-black leading-[14px] flex justify-between items-center'>
        <span>{reminder?.title}</span>
        <div onClick={() => setIsModalOpen(true)} className='cursor-pointer'>
          <Image src={crossImage} alt='close' />
        </div>
      </p>
      <p className='text-[#8A8A8A] mb-[10px] flex justify-between items-center'>
        {moment(reminder?.reminder_time).format('YYYY/MM/DD h:mma')}
        <div onClick={() => setModalIsOpen(true)}>
          <EditIcon />
        </div>
      </p>
      <button className='bg-[#B8FFDD] font-medium  text-black text-[10px] py-[5px] px-2 rounded-full'>
        {reminder?.status}
      </button>
      <ConfirmationModal
        modalIsOpen={isModalOpen}
        setModalIsOpen={setIsModalOpen}
        deleteItem={deleteRemainder}
      />

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
        remainder={remainder}
      />
    </div>
  );
};

export default Reminder;
