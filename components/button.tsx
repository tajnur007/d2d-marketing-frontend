'use client';
import { ButtonProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={twMerge(
      'text-white text-center bg-[#5630FF] rounded-[10px] font-semibold text-lg py-3 px-5 w-full hover:bg-[#564FFF]',
      className
    )}>
    {children}
  </button>
);
