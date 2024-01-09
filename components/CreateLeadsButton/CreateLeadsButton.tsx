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
      className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-sm p-3 text-center mx-5'>
      <div className='flex justify-between items-center'>
        <div className='mr-2'>
          <Image src={plusImage} alt='' />
        </div>
        <div className="[font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal] whitespace-nowrap text-capitalize">
          Create leads
        </div>
      </div>
    </button>
  );
}

export default CreateLeadsButton;
