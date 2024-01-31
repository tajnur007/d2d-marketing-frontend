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
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };
  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs mb-2 font-medium'>{label}</label>
      <div className='relative font-medium '>
        <Select
          className='custom-select font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: '2px #F3F3F3 solid',
              width: '100%',
              height: '56px',
              borderRadius: '10px',
            }),
          }}
          options={options}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
