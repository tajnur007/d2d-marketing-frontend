import React from 'react';
import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png';
import d2dIcon from '@/assets/images/D2DIcon.png';
import { AuthCommonProps } from '@/models/global-types';

const LeftSide = ({ pageImage, text }: AuthCommonProps) => {
  return (
    <div className='w-2/5 h-screen h-max-screen overflow-hidden relative bg-primary-bg text-white block'>
      <div className='absolute w-full top-0 left-0 flex z-1 justify-between items-start'>
        <Image style={{ width: '100%' }} src={layoutTop} alt='top' />
      </div>
      <div className='h-full flex flex-col justify-between items-start relative pb-20'>
        <div className='p-10 lg:pt-10'>
          <Image src={d2dIcon} alt='icon' />
        </div>
        <div className='w-full md:p-5 lg:p-10 xl:p-15'>
          <div className='text-base'>
            <h5 className='md:text-lg lg:text-2xl 2xl:text-3xl'>
              Door 2 door marketing 🙂
            </h5>
          </div>
          <div className='md:pt-2 lg:pt-6 md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-xl text-[#FFFFFF80] tracking-[0] leading-[20px]'>
            {text}
          </div>
        </div>

        <Image
          className='object-contain h-[42%] self-center'
          // height={100}
          src={pageImage}
          alt='marketing'
        />
      </div>
    </div>
  );
};

export default LeftSide;
