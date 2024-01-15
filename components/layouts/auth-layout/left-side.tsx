import React from 'react';
import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png';
import d2dIcon from '@/assets/images/D2DIcon.png';
import { AuthCommonProps } from '@/models/global-types';

const LeftSide = ({ pageImage, text }: AuthCommonProps) => {
  return (
    <div className='w-2/5 h-screen overflow-hidden relative bg-primary-bg  text-white p-20 lg:p-0 m-0 container block'>
      <div className='absolute w-full top-0 left-0  flex z-1 justify-between items-start'>
        <Image style={{ width: '100%' }} src={layoutTop} alt='top' />
      </div>
      <div className='h-full flex flex-col justify-between items-start relative'>
        <div className='lg:p-10 lg:pt-20'>
          <Image src={d2dIcon} alt='icon' />
        </div>
        <div className='w-full lg:p-10'>
          <div className='text-base'>
            <h5 className='2xl:text-3xl'>Door 2 door marketing 🙂</h5>
          </div>
          <div className='pt-6 lg:pt-2 2xl:text-xl text-[14px] text-[#FFFFFF80] tracking-[0] leading-[20px]'>
            {text}
          </div>
        </div>
        <div className='container flex w-full p-20 xl:p-20'>
          <Image className='object-contain w-full' src={pageImage} alt='marketing' />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
