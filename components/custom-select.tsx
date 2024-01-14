'use client';

import { DownArrowIcon } from '@/assets/icons';
import { CreateLeadStatusItems, SelectProps } from '@/models/global-types';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Select from 'react-select';

export const CustomSelect = ({
  label,
  className,
  setSelected = () => {},
  selected = 'Pending',
  options = [],
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
    console.log('handleChange', selected);
  };

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs mb-1 font-medium'>{label}</label>
      <div className='relative text-[#25254C] font-medium '>
        <Select
          classNames={{
            control: () =>
              ' text-[#25254C] font-medium outline-none w-full rounded-[10px] border-2 border-[#F3F3F3] border-solid py-[19px] px-2 cursor-pointer flex justify-between items-center placeholder-[#B9C1D9] text-[14px] font-medium',
          }}
          defaultValue={options[2]}
          options={options}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
