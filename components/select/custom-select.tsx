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
  errorMessage,
  isLoading,
  selected,
}: SelectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
        {label}
        {errorMessage && (
          <span className='text-red-500 ml-1'>{`(${label} is required)`}</span>
        )}
      </label>
      <div className='relative font-medium '>
        <Select
          className='h-[48px] 2xl:h-14 font-medium text-black text-sm 2xl:text-[16px] tracking-[-0.28px] leading-[normal]'
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              border:
                errorMessage && !isFocused
                  ? '1px solid red'
                  : isFocused
                  ? '1px solid #a855f7'
                  : '1px solid #F3F3F3',
              '&:hover': {
                border:
                  errorMessage && !isFocused
                    ? '1px solid red'
                    : isFocused
                    ? '1px solid #a855f7'
                    : '1px solid #F3F3F3',
              },
              borderRadius: '10px',
              width: '100%',
              height: '100%',
              boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
              transition: 'all 500ms',
            }),
          }}
          options={options}
          value={
            selected === ''
              ? null
              : options.find((option: any) => option.value === selected)
          }
          onChange={handleChange}
          isDisabled={isLoading}
        />
      </div>
    </div>
  );
};
