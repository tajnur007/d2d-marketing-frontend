'use client';

import { DownArrowIcon } from '@/assets/icons';
import { CreateLeadStatusItems, SelectProps } from '@/models/global-types';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Select from 'react-select';

export const StatusSelect = ({
  label,
  className,
  setSelected = () => {},
  options = [],
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  const controlStyles = {
    base: 'border rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid text-indigo-950 text-sm font-medium text-[14px]',
    focus: 'border-primary-600 ring-1 ring-primary-500',
    nonFocus: 'border-gray-300 hover:border-gray-400',
  };

  const optionStyles = {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected: 'bg-white',
  };

  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs mb-1 font-medium'>{label}</label>
      <div className='relative font-medium '>
        <Select
          classNames={{
            control: ({ isFocused }) =>
              twMerge(
                'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid text-[14px] font-medium  px-3',
                isFocused ? 'border-primary-500' : 'border-[#F3F3F3]',
                controlStyles.base
              ),
            option: ({ isFocused, isSelected }) =>
              twMerge(
                isFocused && optionStyles.focus,
                isSelected && optionStyles.selected,
                optionStyles.base
              ),
          }}
          defaultValue={options[0]}
          options={options}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
