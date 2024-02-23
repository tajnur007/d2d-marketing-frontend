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
        className='md:h-12 lg:h-20 flex md:gap-3 lg:gap-5 justify-between items-center text-sm leading-none text-gray-800 border-b border-white'>
        <div className='md:w-[35%] lg:w-[30%]'>
          <p className='leading-trim font-semibold md:text-[14px] lg:text-[18px] tracking-tight'>
            {item?.title}
          </p>
          <div className='flex items-center md:mt-[7px] lg:mt-[14px]'>
            <div className='mr-1 md:w-4'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-[#9d9d9d] md:text-[10px] lg:text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {moment(item?.created_at).format('ddd DD MMM, YYYY hh:mm A')}
            </div>
          </div>
        </div>
        <div className='md:w-[30%] lg:w-[25%]'>
          <p className='leading-trim font-semibold md:text-[14px] lg:text-[16px] tracking-tight'>
            {item?.point_of_contact?.name}
          </p>
          {item?.point_of_contact?.phone != '' && (
            <div className='flex items-center md:mt-[5px] lg:mt-[10px]'>
              <div className='mr-1'>
                <Image src={phoneImage} alt='' />
              </div>
              <div className='text-[#5630FF] md:text-[10px] lg:text-[12px] leading-[14px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
                {item?.point_of_contact?.phone}
              </div>
            </div>
          )}
        </div>
        <div className='md:w-[20%] lg:w-[15%]'>
          <span
            className={`text-sm text-black md:text-[12px] lg:text-[14px] md:h-3 lg:h-6 ${
              getStatusColor[item?.meeting_status as keyof statusColor]
            } p-2 rounded-full`}>
            {item?.meeting_status}
          </span>
        </div>
        <div className='md:w-[30%] lg:w-[25%]'>
          <p className='text-[#5630FF] text-[10px] text-xs whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-[14px] text-black font-semibold md:text-[14px] lg:text-[16px] tracking-[0] md:mt-[5px] lg:mt-[10px] whitespace-nowrap'>
            {item?.executive_name}
          </p>
        </div>
        <div className='md:w-[4%] lg:w-[2%]'>
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
