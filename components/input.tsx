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
    <label
      htmlFor={htmlFor}
      className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
      {label}
      {errorMessage && <span className='text-red-500 ml-1'>{errorMessage}</span>}
    </label>
    <input
      {...props}
      className={twMerge(
        'w-full h-[48px] 2xl:h-14 rounded-[10px] border border-[#F3F3F3] outline-none border-solid p-3 2xl:p-4 placeholder-[#B9C1D9] text-sm 2xl:text-[16px] font-medium focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500',
        className
      )}
      defaultValue={defaultValue}
    />
  </div>
);
