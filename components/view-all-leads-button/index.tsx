'use client';

import Image from 'next/image';
import exportImage from '@/assets/images/leadslist-icons/export.png';
import { useRouter } from 'next/navigation';
import React from 'react';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

function ViewAllLeadsButton() {
  const router = useRouter();
  const handleCreateLeadButtonClick = () => {
    router.push(PAGE_ROUTES.Leads);
  };

  return (
    <button
      type='button'
      onClick={handleCreateLeadButtonClick}
      className='text-#5630FF font-medium text-[16px] p-3 text-center ml-5'>
      <div className='flex justify-between items-center'>
        <div className="[font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal] whitespace-nowrap text-capitalize text-[#5630FF]">
          View All
        </div>
        <div className='ml-2'>
          <Image src={exportImage} alt='' />
        </div>
      </div>
    </button>
  );
}

export default ViewAllLeadsButton;
