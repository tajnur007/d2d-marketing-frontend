import React from 'react';
import { EyeIcon, EditIcon, DeleteIcon } from '@/assets/icons';

const LeadsOptions = () => {
  return (
    <div className='relative'>
      <div className='absolute right-6 -bottom-10 z-10 mt-2 w-48 origin-top-right rounded-xl bg-stone-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <div className='py-1'>
          <div className='flex justify-start items-center pl-4'>
            <div>
              <EyeIcon />
            </div>
            <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
              View Details
            </div>
          </div>
          <div className='flex justify-start items-center pl-4'>
            <div>
              <EditIcon />
            </div>
            <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
              Edit
            </div>
          </div>
          <div className='flex justify-start items-center pl-4'>
            <div>
              <DeleteIcon />
            </div>
            <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsOptions;
