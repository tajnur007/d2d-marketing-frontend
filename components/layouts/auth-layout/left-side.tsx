import React from 'react';
import Image from 'next/image';
import layoutTop from '@/assets/images/LayoutTop.png';
import d2dIcon from '@/assets/images/D2DIcon.png';
import { AuthCommonProps } from '@/models/global-types';

const LeftSide = ({ pageImage, text }: AuthCommonProps) => {
  return (
    <div className='w-2/5 h-screen relative flex overflow-hidden bg-primary-bg  text-white p-0 m-0'>
      <div className='absolute w-full overflow-hidden top-0 left-0  flex z-1 justify-between items-start'>
        <Image style={{ width: '100%' }} src={layoutTop} alt='top' />
      </div>
      <div className='flex flex-col gap-36 relative '>
        <div className='pl-[58px] pt-[63px]'>
          <Image src={d2dIcon} alt='icon' />
        </div>
        <div className='pl-14'>
          <div className='text-base'>
            <h5>Door 2 door marketing 🙂</h5>
          </div>
          <div className='pt-6 w-[501px] h-[33px] text-[14px] text-[#FFFFFF80] tracking-[0] leading-[20px]'>{text}</div>
        </div>
        <div className='pl-[37px] pd-[86px] pr-[38px]'>
          <Image src={pageImage} alt='marketing' />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
