import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: Button) => (
  <div className='flex flex-col'>
    <button
      {...props}
      className={twMerge('text-white bg-[#5630FF] py-4 px-10', className)}>
      {children}
    </button>
  </div>
);
