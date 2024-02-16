'use client';
import React from 'react';
import ErrorImage from '@/assets/images/notfound-error.png';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type TPageProps = {
  pageName: string;
  title: string;
  peragraph: string;
};

const ErrorAndNotFound = ({ pageName, title, peragraph }: TPageProps) => {
  const router = useRouter();
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <div className='max-w-[1280px] mx-auto w-full p-8 flex flex-col lg:flex-row items-center justify-between gap-10'>
        <div className='order-2 lg:order-1'>
          <p className='text-primary text-2xl font-bold mb-6'>{pageName}</p>
          <h1 className='text-7xl font-extrabold mb-8 text-[#2B3674]'>{title}</h1>
          <p className='text-[#475467] text-xl mb-14'>{peragraph}</p>

          <div className='flex gap-3'>
            <button
              onClick={() => router.back()}
              className='flex items-center gap-3 bg-[#F8F6FF] hover:bg-primary/10 text-primary rounded-[10px] font-semibold md:text-[14px] lg:text-lg py-3 px-5 w-fit duration-150'>
              <ArrowLeftIcon className='h-6 w-6' />
              Go Back
            </button>
            <Link
              href='/dashboard'
              className='flex items-center bg-primary hover:bg-primary/90 text-white rounded-[10px] md:text-[14px] lg:text-lg py-3 px-5 w-fit duration-150'>
              Take me home
            </Link>
          </div>
        </div>
        <div className='order-1 lg:order-2'>
          <Image src={ErrorImage} className='lg:w-[480px]' alt='Error Image' />
        </div>
      </div>
    </section>
  );
};

export default ErrorAndNotFound;
