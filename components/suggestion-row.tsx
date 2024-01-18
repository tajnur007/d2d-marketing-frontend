'use client';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import { LEADS_DATA_TYPE, statusColor } from '@/models/global-types';
import Image from 'next/image';
import LeadDetails from '@/components/lead-details';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import 'react-modern-drawer/dist/index.css';

const getStatusColor: statusColor = {
  Cool: 'bg-blue-200',
  Hot: 'bg-[#FFD9D9]',
  Warm: 'bg-[#FFEFB8]',
};

const SuggestionRow = ({ item }: { item: LEADS_DATA_TYPE }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='relative bg-white shadow-md p-3' onClick={toggleDrawer}>
      <div className='flex justify-between items-center w-[100%] z-10 p-2 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
        <div className='p-2'>
          <p className='leading-trim font-semibold text-indigo-950 text-sm leading-[14px]'>
            {item.title}
          </p>
          <div className='flex items-center mt-[2px]'>
            <div className='mr-1'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-[#9d9d9d] text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.date}
            </div>
          </div>
          <div className='w-[25%]'>
            <p className='text-neutral-700 text-xs whitespace-nowrap text-capitalize inline-block'>
              Assigned to{' '}
              <span className='text-slate-400 text-xs font-medium leading-tight'>
                {item.assignedToName}
              </span>
            </p>
          </div>
        </div>
        <div className='pr-4'>
          <span
            className={`text-blue-950 text-[10px] font-medium ${
              getStatusColor[item.status as keyof statusColor]
            } p-2 rounded-full`}>
            {item.status}
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails setIsOpen={setIsOpen} data={item} />
      </Drawer>
    </div>
  );
};

export default SuggestionRow;
