'use client';
import { ClockIcon } from '@/assets/icons';
import { InputProps } from '@/models/global-types';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const DatePicker = ({ label, htmlFor, errorMessage, getDate }: InputProps) => {
  let inputProps = {
    placeholder: 'DD:MM:YY TT:TT',
    className:
      'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none font-medium text-[14px] uppercase text-[#B9C1D9] date-picker-placeholder',
  };

  return (
    <div className='w-full'>
      <label htmlFor={htmlFor} className='text-[#00156A] text-xs mb-1 font-medium'>
        {label}
        {errorMessage && <span className='text-red-500 ml-1'>{errorMessage}</span>}
      </label>
      <div className='relative'>
        <Datetime inputProps={inputProps} onChange={getDate} />
        <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
          <ClockIcon />
        </div>
      </div>
    </div>
  );
};
