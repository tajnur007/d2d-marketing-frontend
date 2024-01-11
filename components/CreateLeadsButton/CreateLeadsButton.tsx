'use client';

import Image from 'next/image';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import { useRouter } from 'next/navigation';
import React from 'react';

function CreateLeadsButton() {
  const router = useRouter();
  const handleCreateLeadButtonClick = () => {
    router.push('/leads/create');
  };
  return (
    <button
      type='button'
      onClick={handleCreateLeadButtonClick}
      className='text-white bg-[#5630ff] shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center mx-5'>
      <div className='flex justify-between items-center'>
        <div className='mr-2'>
          <Image src={plusImage} alt='' />
        </div>
        <div className="[font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap">
          Create leads
        </div>
      </div>
    </button>
  );
}

export default CreateLeadsButton;
