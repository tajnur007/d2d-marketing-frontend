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
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };
  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs mb-1 font-medium'>{label}</label>
      <div className='relative font-medium '>
        <Select
          className='customselect font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
          defaultValue={options[0]}
          options={options}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
