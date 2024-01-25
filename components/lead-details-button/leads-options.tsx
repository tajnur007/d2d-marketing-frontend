'use client';
import { useState, useEffect, useRef } from 'react';
import { EyeIcon, EditIcon, DeleteIcon } from '@/assets/icons';
import { LeadOptionsProps } from '@/models/global-types';

const LeadsOptions = ({
  isOpen,
  setIsOpen = () => {},
  options,
  setOptions = () => {},
}: LeadOptionsProps) => {
  const newRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, options]);

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setOptions(false);
    }
  };

  const handleViewButton = () => {
    setOptions(false);
    setIsOpen(true);
    console.log('button');
  };

  return (
    <div className='relative' ref={newRef}>
      <div className='absolute right-6 -bottom-10 z-100 mt-2 w-48 origin-top-right rounded-xl bg-stone-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer'>
        <div className='py-1'>
          <button
            type='button'
            className='flex justify-start items-center pl-4'
            onClick={handleViewButton}>
            <div>
              <EyeIcon />
            </div>
            <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
              View Details
            </div>
          </button>
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
