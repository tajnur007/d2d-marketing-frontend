{
  /* <div className='flex flex-col items-start justify-center '>
      <p className='text-[#00156A] font-medium text-xs mb-2'>
        Image
        {formErrors.Image && (
          <span className='text-red-500 text-xs ml-1'>{formErrors.Image}</span>
        )}
      </p>

      <ImageUpload
        placeholder='Upload image'
        name='Image'
        onChange={handleImageUpload}
        className={`h-[92px] ${formErrors.Image && 'border-red-500 shadow'}`}
      />
    </div> */
}

import { GalleryIcon } from '@/assets/icons';
import { InputProps } from '@/models/global-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ImageUpload = ({
  label,
  placeholder,
  htmlFor,
  className,
  type,
  onChange,
  ...props
}: InputProps) => {
  const [imageName, setImageName] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
    }
    onChange && onChange(e);
  };

  return (
    <div className='w-full'>
      <label htmlFor={htmlFor} className='text-[#00156A] font-medium w-full'>
        <div
          className={twMerge(
            'w-full rounded-[10px] border-[#F3F3F3] border-2 bg-[#F3F3F3] flex flex-col items-center justify-center gap-2 cursor-pointer',
            className
          )}>
          <GalleryIcon />
          <p className='text-[#B9C1D9] font-medium'>{imageName || placeholder}</p>
          <input
            {...props}
            type='file'
            className='hidden'
            accept='image/*'
            onChange={handleImageChange}
          />
        </div>
      </label>
    </div>
  );
};
