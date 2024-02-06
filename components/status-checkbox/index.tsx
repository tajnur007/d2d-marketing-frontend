import { StatusCheckboxProps } from '@/models/global-types';
import React from 'react';

const StatusCheckbox: React.FC<StatusCheckboxProps> = ({
  id,
  onChange,
  children,
  checked,
}) => {
  return (
    <div className='flex items-center me-4'>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 custom-checkbox`}
      />

      <label htmlFor={id} className='ms-[8px] text-sm font-medium text-[#344054]'>
        {children}
      </label>
    </div>
  );
};

export default StatusCheckbox;
