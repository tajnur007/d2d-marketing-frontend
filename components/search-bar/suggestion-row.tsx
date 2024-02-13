'use client';
import ClockIcon from '@/assets/images/leadslist-icons/search-clock.png';
import { LeadListType, statusColor } from '@/models/global-types';
import moment from 'moment';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import 'react-modern-drawer/dist/index.css';

const getStatusColor: statusColor = {
  cold: 'bg-blue-200',
  hot: 'bg-[#FFD9D9]',
  warm: 'bg-[#FFEFB8]',
};

const SuggestionRow = ({
  item,
  setIsOpen,
  setItem,
}: {
  item: LeadListType;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setItem: Dispatch<SetStateAction<any>>;
}) => {
  const toggleDrawer = () => {
    setItem(item);
    setIsOpen(true);
  };

  return (
    <div className='relative bg-white rounded-[10px]' onClick={toggleDrawer}>
      <div className='flex justify-between items-center w-[100%] z-10 p-2 bg-white ring-1 ring-black ring-opacity-0 rounded-[10px]'>
        <div className='flex flex-col p-2 gap-1'>
          <div>
            <p className='leading-3 font-semibold text-indigo-950 text-sm'>
              {item.title}
            </p>
          </div>
          <div className='flex items-center gap-1 mt-1'>
            <div>
              <Image src={ClockIcon} alt='' width={16} height={16} />
            </div>

            <div className='text-[#9d9d9d] font-normal text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {moment(item.created_at).format('ddd DD MMM, YYYY hh:mm A')}
            </div>
          </div>
          <div className='w-[25%]'>
            <p className='text-neutral-700 text-xs whitespace-nowrap font-semibold inline-block'>
              Assigned to:{' '}
              <span className='text-slate-400 text-xs font-medium leading-tight'>
                {item?.executive_name}
              </span>
            </p>
          </div>
        </div>
        <div className='pr-4'>
          <span
            className={`text-[#00156A] text-[10px] font-medium ${
              getStatusColor[item?.meeting_status as keyof statusColor]
            } px-[6px] py-[5px] rounded-[12px]`}>
            {item?.meeting_status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionRow;
