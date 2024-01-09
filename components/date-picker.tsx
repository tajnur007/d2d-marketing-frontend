'use client';
import { ClockIcon } from '@/assets/icons';
import { InputProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const DatePicker = ({
  label,
  htmlFor,
  className,
  value,
  errorMessage,
  ...props
}: InputProps) => (
  <div className='flex flex-col w-full text-[#B9C1D9]'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-xs mb-1 font-medium'>
      {label} {errorMessage && <span className='text-red-500 ml-1'>{errorMessage}</span>}
    </label>
    <div className='relative'>
      <input
        {...props}
        className={twMerge(
          'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none font-medium text-[14px] uppercase',
          className
        )}
      />
      <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
        <ClockIcon />
      </div>
    </div>
  </div>
);
