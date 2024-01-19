'use client';

import { SelectProps } from '@/models/global-types';
import { useRef, useState } from 'react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import './style.css' 

export const CustomMultiSelect = ({
  setSelected = () => {},
  options = [],
  onSelectChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOptions: any) => {
    setSelected(selectedOptions.map((option: any): any => option.value));
    if (onSelectChange) {
      onSelectChange(selectedOptions.map((option: any) => option.value));
    }
  };

  const controlStyles = {
    base: 'border-2 border-[#F3F3F3] outline-none border-solid text-indigo-950 text-sm font-medium text-[14px]',
    focus: 'border-primary-600 ring-1 ring-primary-500',
    nonFocus: 'border-gray-300 hover:border-gray-400',
  };

  const optionStyles = {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected: 'bg-[#4318FF] text-white',
  };

  return (
    <div className='flex flex-col' ref={ref}>
      <div className='relative font-medium test'>
        <Select
          classNames={{
            control: ({ isFocused }) =>
              twMerge(
                'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid text-[14px] font-medium bg-[] px-3',
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
          defaultValue={null}
          options={options}
          onChange={handleChange}
          isMulti
          isSearchable
        />
      </div>
    </div>
  );
};
