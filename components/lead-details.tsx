/* eslint-disable @next/next/no-img-element */
'use client';

import clockImage from '@/assets/images/leadslist-icons/clock.png';
import crossImage from '@/assets/images/leadslist-icons/close-circle.png';
import flagImage from '@/assets/images/leadslist-icons/triangle-flag.png';
import { CreateReminderItems, RemainderType, statusColor } from '@/models/global-types';
import { LeadService } from '@/services/lead-services';
import { CREATE_REMINDER_ITEMS } from '@/utils/constants/common-constants';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AssignDropdownSelect } from './assign-dropdown-select';
import { Button } from './button';
import CreateReminderModal from './create-reminder-modal';

const getStatusColor: statusColor = {
  cold: 'bg-blue-200',
  hot: 'bg-[#FFD9D9]',
  warm: 'bg-[#FFEFB8]',
};

const LeadDetails = ({
  setIsOpen,
  data,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: any;
  isOpen: boolean;
}) => {
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState<CreateReminderItems>(CREATE_REMINDER_ITEMS);
  const [formErrors, setFormErrors] =
    useState<CreateReminderItems>(CREATE_REMINDER_ITEMS);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [closeDrawer, setCloseDrawer] = React.useState(false);
  const [reminders, setReminders] = React.useState<RemainderType[]>([]);
  const [selectReminder, setSelectReminder] = React.useState();
  const [isCreated, setIsCreated] = React.useState(false);
  const { data: reminderData } = useSession();
  //@ts-ignore den
  const token: string = reminderData?.user?.access_token;

  const src = data?.image_info_json[0]?.image_name;

  const handleAddReminderButtonClick = () => {
    setModalIsOpen(true);
  };

  // const handleChange = (selectedOption: any) => {
  //   setSelectReminder(selectedOption.value);
  // };

  const deleteReminder = async (id: number) => {
    const Service = new LeadService();
    const res = await Service.deleteReminder(id, token);

    if (res?.status === 202) {
      toast.success('Successfully deleted!');
      getAllReminders();
    } else {
      toast.error('Failed to delete!');
    }
  };

  const getAllReminders = async () => {
    const Service = new LeadService();
    const res = await Service.getAllReminder(token);
    setReminders(res?.data?.Data?.Data);
  };

  // To get data initially
  useEffect(() => {
    isOpen && getAllReminders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, token]);

  // To get the latest reminder after creating new reminder
  useEffect(() => {
    isCreated && getAllReminders();
    setIsCreated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  useEffect(() => {
    setIsOpen(false);
  }, [closeDrawer, setIsOpen]);

  return (
    <div className='p-8 h-full overflow-y-auto no-scrollbar '>
      <div className='flex justify-between '>
        <h2 className='text-[20px] font-semibold mb-4 text-[#25254C]'>Details</h2>
        <div onClick={() => setCloseDrawer(!closeDrawer)} className='cursor-pointer'>
          <Image src={crossImage} alt='close' />
        </div>
      </div>

      <h4 className='text-[#00156A] font-medium text-[12px] mb-[19px]'>Location</h4>

      <div className='flex items-center justify-between gap-4'>
        <div className='flex justify-between items-center gap-1'>
          <div>
            <Image src={flagImage} alt='location' />
          </div>
          <div>{data?.latitude}</div>
        </div>
        <button className='text-[#5630FF]'>Change</button>
      </div>

      <div className='desc'>
        <div className='flex items-center gap-4 mt-3'>
          <div className='flex-grow break-all'>{data?.title}</div>
          <div
            className={`flex justify-between gap-2 px-2 py-[10px] rounded-xl items-center
                ${
                  getStatusColor[data?.meeting_status as keyof statusColor]
                } cursor-pointer`}>
            <button className='text-black text-sm font-medium'>
              {data?.meeting_status}
            </button>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='mr-1'>
            <Image src={clockImage} alt='' />
          </div>
          <div className='text-gray-400 text-xs whitespace-nowrap text-capitalize inline-block'>
            {moment(data?.created_at).format('ddd DD MMM, YYYY hh:mm A')}
          </div>
        </div>
        <AssignDropdownSelect />
      </div>

      <div className='poc border-[#EDEBF4] bg-[#F8F8F8] p-4 rounded-lg mt-4 whitespace-normal'>
        <h4 className='text-[#5630FF] font-medium mb-2 text-[12px] leading-[14px]'>
          Points of Contact
        </h4>

        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px] font-medium leading-[14px]'>
            Name
          </div>
          <div className='font-semibold leading-[14px] text-black text-[16px]'>
            {data?.point_of_contact?.name}
          </div>
        </div>

        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px] font-medium leading-[14px]'>
            Phone
          </div>
          <div className='font-semibold leading-[14px] text-black text-[16px]'>
            {data?.point_of_contact?.phone}
          </div>
        </div>

        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px] font-medium leading-[14px]'>
            Email
          </div>
          <div className='font-semibold leading-[14px] text-black text-[16px]'>
            {data?.point_of_contact?.email}
          </div>
        </div>

        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px] font-medium leading-[14px]'>
            Reference
          </div>
          <div className='font-semibold leading-[14px] text-black text-[16px]'>
            {data?.point_of_contact?.reference}
          </div>
        </div>

        <div className='rounded-lg bg-white p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px] font-medium leading-[14px]'>
            Meeting notes
          </div>
          <p className='font-semibold leading-[14px] text-black text-[16px]'>
            {data?.point_of_contact?.meeting_notes}
          </p>
        </div>
      </div>

      <div className=''>
        <h4 className='text-[#00156A] font-medium text-[12px] leading-[14px] mt-5'>
          Image
        </h4>

        <div className='flex flex-wrap gap-2 mx-auto my-5'>
          {data?.image_info_json?.length > 0 ? (
            data?.image_info_json.map((image: any) => (
              <img
                key={image?.image_name}
                src={image?.image_path}
                alt='image'
                className='w-[108px] h-[108px]'
              />
            ))
          ) : (
            <img src={src} alt='image' className='w-[108px] h-[108px] hidden' />
          )}
        </div>
      </div>

      <div className=' bg-[#F8F6FF] p-4 rounded-lg whitespace-normal'>
        <h1 className='text-[#5630FF] font-medium leading-[14px] mb-[10px] text-[12px]'>
          Reminder
        </h1>
        {reminders?.length === 0 ? (
          <div className='text-center'>No reminder found</div>
        ) : (
          <div className='max-h-[236px] overflow-y-auto tiny-scrollbar flex flex-col gap-4'>
            {reminders?.map((reminder: RemainderType) => {
              return (
                <div className='rounded-lg p-4 bg-white' key={reminder?.id}>
                  <p className='font-semibold text-base mb-[10px] text-black leading-[14px] flex justify-between items-center'>
                    <span>{reminder?.title}</span>
                    <div
                      onClick={() => deleteReminder(reminder?.id)}
                      className='cursor-pointer'>
                      <Image src={crossImage} alt='close' />
                    </div>
                  </p>
                  <p className='text-[#8A8A8A] mb-[10px]'>
                    {moment(reminder?.reminder_time).format('YYYY/MM/DD h:mma')}
                  </p>
                  <button className='bg-[#B8FFDD] font-medium  text-black text-[10px] py-[5px] px-2 rounded-full'>
                    {reminder?.status}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className='flex justify-center items-center'>
        <Button
          onClick={handleAddReminderButtonClick}
          className='text-white text-[14px] rounded-[10px] font-semibold leading-[14px] w-[183px] h-[50px] my-8 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
          Add Reminder
        </Button>
      </div>
      <CreateReminderModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        selected={selected}
        setSelected={setSelected}
        leadsData={data}
        setIsCreated={setIsCreated}
      />
    </div>
  );
};

export default LeadDetails;
