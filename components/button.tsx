'use client';
import { ButtonProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={twMerge(
      'text-white bg-[#5630FF] font-semibold md:text-[14px] lg:text-lg py-2 px-10 w-full hover:bg-[#564FFF]',
      className
    )}>
    {children}
  </button>
);
