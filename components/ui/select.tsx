'use client';

import { DownArrowIcon } from '@/assets/icons';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps {
  label?: string;
  className?: string;
}

export const Select = ({ label, className }: SelectProps) => {
  const [selected, setSelected] = useState('Pending');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (item: string) => {
    setSelected(item);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className='flex flex-col'>
      <label className='text-[#00156A] text-sm font-medium'>{label}</label>
      <div className='relative text-[#25254C] font-medium '>
        <div
          onClick={() => handleClick(selected)}
          className={twMerge(
            'w-full rounded-[10px] border-2 border-[#F3F3F3] border-solid py-[19px] px-3 text-base cursor-pointer flex justify-between items-center',
            className
          )}>
          <p>{selected}</p>
          <p className={`transition-all ${isOpen && 'rotate-180'}`}>
            <DownArrowIcon />
          </p>
        </div>
        <div
          ref={ref}
          className={`absolute rounded-[10px] shadow-md z-10 bg-white w-full ${
            !isOpen ? 'hidden' : 'visible'
          }`}>
          {['Pending', 'Accept', 'Reject', 'Active'].map((label) => (
            <p
              key={label}
              onClick={() => handleClick(label)}
              className='cursor-pointer hover:bg-[#F3F3F3] my-1 px-5 py-2'>
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
