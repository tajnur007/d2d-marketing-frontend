'use client';
import { TextAreaProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const TextArea = ({
  label,
  htmlFor,
  className,
  errorMessage,
  ...props
}: TextAreaProps) => (
  <div className='flex flex-col w-full'>
    <label
      htmlFor={htmlFor}
      className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
      {label} {errorMessage && <span className='text-red-500 ml-1'>{errorMessage}</span>}
    </label>
    <textarea
      {...props}
      className={twMerge(
        'w-full rounded-[10px] border border-[#F3F3F3] outline-none border-solid p-3 2xl:p-4 placeholder-[#B9C1D9] resize-none text-sm md:text-[12px] 2xl:text-[16px] font-medium focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500',
        className
      )}
    />
  </div>
);
