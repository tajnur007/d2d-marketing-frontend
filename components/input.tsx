'use client';
import { InputProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const Input = ({
  label,
  id,
  className,
  isError,
  readOnly,
  disabled,
  required,
  requiredText = 'Required',
  ...props
}: InputProps) => (
  <div className='flex flex-col w-full'>
    <label
      htmlFor={id}
      className='text-[#00156A] text-xs 2xl:text-sm mb-2 font-medium flex'>
      {label}{' '}
      {required && <span className='text-red-400 ml-1'>&#40;{requiredText}&#41;</span>}
    </label>
    <input
      {...props}
      id={id}
      readOnly={readOnly}
      disabled={disabled}
      className={twMerge(
        'w-full md:h-[35px] lg:h-[48px] 2xl:h-14 rounded-[10px] border border-[#F3F3F3] outline-none border-solid p-3 2xl:p-4 placeholder-[#B9C1D9] text-sm md:text-[12px] 2xl:text-[16px] font-medium transition-all duration-500 mb-3',
        `${isError && 'border-red-500 shadow'}`,
        `${
          !readOnly &&
          !disabled &&
          'focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200'
        }`,
        `${(readOnly || disabled) && 'bg-[#F8F8F8]'}`,
        className
      )}
    />
  </div>
);
