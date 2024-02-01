'use client';
import { InputProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const Input = ({
  label,
  htmlFor,
  className,
  errorMessage,
  defaultValue,
  ...props
}: InputProps) => (
  <div className='flex flex-col w-full'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-xs mb-1 font-medium'>
      {label}
      {errorMessage && <span className='text-red-500 ml-1'>{errorMessage}</span>}
    </label>
    <input
      {...props}
      className={twMerge(
        'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] text-[14px] font-medium',
        className
      )}
      defaultValue={defaultValue}
    />
  </div>
);
