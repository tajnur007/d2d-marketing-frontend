'use client';

import { SelectProps } from '@/models/global-types';
import { useRef, useState } from 'react';
import Select from 'react-select';
import './style.css';

export const CustomSelect = ({
  label,
  className,
  setSelected = () => {},
  options = [],
  defaultValue,
  isBothSelectFieldNull,
  setIsBothSelectFieldNull = () => {},
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
    setIsBothSelectFieldNull(false);
  };
  
  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs mb-1 font-medium'>
        {label}
        {isBothSelectFieldNull && (
          <span className='text-red-500 ml-1'>{`(${label} is required)`}</span>
        )}
      </label>
      <div className='relative font-medium '>
        <Select
          className='custom-select font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              border: isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
              '&:hover': {
                border: isBothSelectFieldNull
                  ? '1px solid #F3F3F3'
                  : isFocused
                  ? '1px solid #a855f7'
                  : '1px solid #F3F3F3',
              },

              width: '100%',
              height: '56px',
              boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
              transition: 'all 500ms',
            }),
          }}
          options={options}
          // defaultValue={options.find((option) => option.value === defaultValue)?.label}
          placeholder={options.find((option) => option.value === defaultValue)?.label}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
