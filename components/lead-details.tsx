'use client';

import Image from 'next/image';
import leadImage from '@/assets/images/Marketing-signin.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import crossImage from '@/assets/images/leadslist-icons/close-circle.png';
import downImage from '@/assets/images/leadslist-icons/down-arrow.png';
import flagImage from '@/assets/images/leadslist-icons/triangle-flag.png';
import { Dispatch, SetStateAction } from 'react';
import { LEADS_DATA_TYPE } from '@/models/global-types';
import { DemoSelect } from './dropdown-select-modal';

const LeadDetails = ({
  setIsOpen,
  data,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: LEADS_DATA_TYPE;
}) => {
  return (
    <div className='p-8  h-full overflow-y-auto no-scrollbar '>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-[20px] font-semibold mb-4 text-[#25254C]'>Details</h2>
        </div>
        <div>
          <button onClick={() => setIsOpen(false)} type='button'>
            <Image src={crossImage} alt='close' />
          </button>
        </div>
      </div>
      <h4 className='text-[#00156A] font-medium text-[12px]'>Location</h4>
      <div className='flex items-center gap-4'>
        <div className='flex justify-between items-center gap-1'>
          <div>
            <Image src={flagImage} alt='location' />
          </div>
          <div>{data?.location}</div>
        </div>
        <button className='text-[#5630FF]'>Change</button>
      </div>
      <div className='desc'>
        <div className='flex items-center gap-4 mt-3'>
          <div className='flex-grow break-all'>{data?.title}</div>
          <div className='flex justify-between gap-2 px-2 py-1 rounded-xl items-center bg-[#FFD9D9] cursor-pointer'>
            <button className=''>{data?.status}</button>
            <Image src={downImage} alt='close' />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='mr-1'>
            <Image src={clockImage} alt='' />
          </div>
          <div className='text-gray-400 text-xs whitespace-nowrap text-capitalize inline-block'>
            {data?.date}
          </div>
        </div>
        <DemoSelect />
      </div>
      <div className='poc bg-[#EDEBF4] p-4 rounded-lg mt-4 whitespace-normal'>
        <h4 className='text-[#5630FF] mb-2 text-[12px]'>Points of Contact</h4>
        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px]'>Name</div>
          <div className='font-bold text-black text-[16px]'>{data?.assignedByName}</div>
        </div>
        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px]'>Phone</div>
          <div className='font-bold text-black text-[16px]'>{data?.assignedByNumber}</div>
        </div>
        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px]'>Email</div>
          <div className='font-bold text-black text-[16px]'>{data?.assignedByEmail}</div>
        </div>
        <div className='rounded-lg bg-white mb-4 p-4'>
          <div className='text-[#5630FF] mb-2 text-[12px]'>Reference</div>
          <div className='font-bold text-black text-[16px]'>{data?.assignedToName}</div>
        </div>
        <div className='rounded-lg bg-white p-4 '>
          <div className='text-[#5630FF] mb-2 text-[12px]'>Meeting notes</div>
          <p className='font-bold text-black text-[16px]'>{data?.meetingNote}</p>
        </div>
      </div>
      <div className=''>
        <h4 className='text-[#00156A] font-medium text-[12px] mt-5'>Image</h4>
        <Image src={leadImage} alt='image' className='w-[108px] h-[108px]' />
      </div>
      <div className='reminder bg-[#F8F6FF] p-4 rounded-lg mt-4 whitespace-normal'>
        <div className='text-[#5630FF] mb-2 text-[12px]'>Reminder</div>
        <div className='font-bold text-black'>{data?.reminder?.reminderTitle}</div>
        <div className='text-[#8A8A8A]'>{data?.reminder?.reminderDate}</div>
        <button className='bg-[#B8FFDD] py-1 px-2 rounded-full'>
          {data?.reminder?.reminderStatus}
        </button>
      </div>
      <div className='flex justify-center items-center'>
        <button className='text-[#5630FF] my-8'>Add Reminder</button>
      </div>
    </div>
  );
};

export default LeadDetails;
