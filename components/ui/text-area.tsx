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
    <label htmlFor={htmlFor} className='text-[#00156A] text-xs mb-1 font-medium'>
      {label}{' '}
      {errorMessage && <span className='text-red-500 text-xs ml-1'>{errorMessage}</span>}
    </label>
    <textarea
      {...props}
      className={twMerge(
        'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] resize-none text-[14px] font-medium',
        className
      )}
    />
  </div>
);
