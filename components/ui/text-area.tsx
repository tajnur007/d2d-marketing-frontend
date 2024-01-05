'use client';
import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  htmlFor?: string;
}

export const TextArea = ({ label, htmlFor, className, ...props }: TextAreaProps) => (
  <div className='flex flex-col w-full'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-sm font-medium'>
      {label}
    </label>
    <textarea
      {...props}
      className={twMerge(
        'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] resize-none text-base font-medium',
        className
      )}
    />
  </div>
);
