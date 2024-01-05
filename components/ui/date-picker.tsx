'use client';
import { ClockIcon } from '@/assets/icons';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}

export const DatePicker = ({
  label,
  htmlFor,
  className,
  value,
  ...props
}: InputProps) => (
  <div className='flex flex-col w-full text-[#B9C1D9]'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-sm font-medium'>
      {label}
    </label>
    <div className='relative'>
      <input
        {...props}
        className={twMerge(
          'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 appearence-none text-base font-medium',
          className
        )}
      />
      <div className='absolute z-10 inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
        <ClockIcon />
      </div>
    </div>
  </div>
);
