import { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  htmlFor?: string;
}

export const Select = ({ label, htmlFor, className, ...props }: SelectProps) => (
  <div className='flex flex-col'>
    <label htmlFor={htmlFor} className='text-[#00156A] text-sm font-medium'>
      {label}
    </label>
    <div className='relative'>
      <select
        {...props}
        className={twMerge(
          'w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-[19px] px-3 text-[#25254C] text-base font-medium cursor-pointer appearance-none',
          className
        )}>
        <option value='pending' selected>
          Pending
        </option>
        <option value='accept'>Accept</option>
        <option value='reject'>Reject</option>
      </select>
      <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
        <svg
          className='w-4 h-4 fill-current text-[#25254C]'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          {/* Add your custom SVG path here */}
          <path d='M10 12L6 8h8l-4 4z' />
        </svg>
      </div>
    </div>
  </div>
);
