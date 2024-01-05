import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}

export const Input = ({ label, htmlFor, className, ...props }: InputProps) => (
  <div className='flex flex-col w-full'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-sm font-medium'>
      {label}
    </label>
    <input
      {...props}
      className={twMerge(
        'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9]  text-base font-medium',
        className
      )}
    />
  </div>
);
