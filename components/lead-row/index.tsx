'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import moment from 'moment';
import phoneImage from '@/assets/images/leadslist-icons/call.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import { LeadListType, statusColor } from '@/models/global-types';
import LeadDetailsButton from '../lead-details-button';

const getStatusColor: statusColor = {
  cold: 'bg-blue-200',
  hot: 'bg-[#FFD9D9]',
  warm: 'bg-[#FFEFB8]',
};

function LeadRow({
  item,
  leadRefresh,
  setLeadRefresh = () => {},
}: {
  item: LeadListType;
  leadRefresh: boolean;
  setLeadRefresh: () => void;
}) {
  const handleScroll = () => {
    // Your scroll event handling logic goes here
    console.log('Page is scrolling!');
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        key={item?.id}
        className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 border-b border-white'>
        <div className='w-[30%]'>
          <p className='leading-trim font-semibold text-[18px] tracking-tight'>
            {item?.title}
          </p>
          <div className='flex items-center mt-[14px]'>
            <div className='mr-1'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-[#9d9d9d] text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {moment(item?.created_at).format('ddd DD MMM, YYYY hh:mm A')}
            </div>
          </div>
        </div>
        <div className='w-[25%]'>
          <p className='leading-trim font-semibold text-[16px] tracking-tight'>
            {item?.point_of_contact?.name}
          </p>
          {item?.point_of_contact?.phone != '' && (
            <div className='flex items-center mt-[10px]'>
              <div className='mr-1'>
                <Image src={phoneImage} alt='' />
              </div>
              <div className='text-[#5630FF] text-[12px] leading-[14px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
                {item?.point_of_contact?.phone}
              </div>
            </div>
          )}
        </div>
        <div className='w-[20%]'>
          <span
            className={`text-sm text-black h-6 ${
              getStatusColor[item?.meeting_status as keyof statusColor]
            } p-2 rounded-full`}>
            {item?.meeting_status}
          </span>
        </div>
        <div className='w-[25%]'>
          <p className='text-[#5630FF] text-xs whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-[14px] text-black font-semibold text-[16px] tracking-[0] mt-[10px] whitespace-nowrap'>
            {item?.executive_name}
          </p>
        </div>
        <div className='w-[2%]'>
          <LeadDetailsButton
            data={item}
            leadRefresh={leadRefresh}
            setLeadRefresh={setLeadRefresh}
          />
        </div>
      </div>
    </div>
  );
}

export default LeadRow;
