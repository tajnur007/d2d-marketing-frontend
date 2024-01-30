'use client';
import { GalleryIcon } from '@/assets/icons';
import { InputProps } from '@/models/global-types';
import { twMerge } from 'tailwind-merge';

export const ImageUpload = ({
  label,
  placeholder,
  htmlFor,
  className,
  type,
  ...props
}: InputProps) => (
  <div className='w-full'>
    <label htmlFor={htmlFor} className='text-[#00156A] font-medium w-full'>
      <div
        className={twMerge(
          'w-full rounded-[10px] border-[#F3F3F3] border-2 bg-[#F3F3F3] flex flex-col items-center justify-center gap-2 cursor-pointer',
          className
        )}>
        <GalleryIcon />
        <p className='text-[#B9C1D9] font-medium'>{placeholder}</p>
        <input {...props} type='file' className='hidden' accept='image/*'/>
      </div>
    </label>
  </div>
);
