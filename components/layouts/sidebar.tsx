'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const sidebarItem = [
  {
    id: 1,
    iconName: 'Home',
    path: '/dashboard',
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.4'
          d='M21.7101 7.38835L15.4701 3.02251C13.7692 1.83085 11.1584 1.89585 9.52255 3.16335L4.09505 7.39918C3.01172 8.24418 2.15588 9.97751 2.15588 11.3425V18.8175C2.15588 21.58 4.39838 23.8333 7.16088 23.8333H18.8392C21.6017 23.8333 23.8442 21.5908 23.8442 18.8283V11.4833C23.8442 10.0208 22.9017 8.22251 21.7101 7.38835Z'
          fill='currentColor'
        />
        <path
          d='M13 20.3125C12.5558 20.3125 12.1875 19.9442 12.1875 19.5V16.25C12.1875 15.8058 12.5558 15.4375 13 15.4375C13.4442 15.4375 13.8125 15.8058 13.8125 16.25V19.5C13.8125 19.9442 13.4442 20.3125 13 20.3125Z'
          fill='currentColor'
        />
      </svg>
    ),
    position: -15,
  },
  {
    id: 2,
    iconName: 'Book',
    path: '/leads',
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.4'
          d='M22.2083 7.58335V16.25H6.87917C5.17834 16.25 3.79167 17.6367 3.79167 19.3375V7.58335C3.79167 3.25002 4.87501 2.16669 9.20834 2.16669H16.7917C21.125 2.16669 22.2083 3.25002 22.2083 7.58335Z'
          fill='currentColor'
        />
        <path
          d='M22.2083 16.25V20.0417C22.2083 22.1325 20.5075 23.8333 18.4167 23.8333H7.58334C5.49251 23.8333 3.79167 22.1325 3.79167 20.0417V19.3375C3.79167 17.6367 5.17834 16.25 6.87917 16.25H22.2083Z'
          fill='currentColor'
        />
        <path
          d='M17.3333 8.39581H8.66667C8.22251 8.39581 7.85417 8.02748 7.85417 7.58331C7.85417 7.13915 8.22251 6.77081 8.66667 6.77081H17.3333C17.7775 6.77081 18.1458 7.13915 18.1458 7.58331C18.1458 8.02748 17.7775 8.39581 17.3333 8.39581Z'
          fill='currentColor'
        />
        <path
          d='M14.0833 12.1875H8.66667C8.22251 12.1875 7.85417 11.8192 7.85417 11.375C7.85417 10.9308 8.22251 10.5625 8.66667 10.5625H14.0833C14.5275 10.5625 14.8958 10.9308 14.8958 11.375C14.8958 11.8192 14.5275 12.1875 14.0833 12.1875Z'
          fill='currentColor'
        />
      </svg>
    ),
    position: 50,
  },
  {
    id: 3,
    iconName: 'Setting',
    path: '/settings',
    icon: (
      <svg
        width='20'
        height='19'
        viewBox='0 0 20 19'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.091 6.65558C16.2819 6.65558 15.5422 5.37622 16.4418 3.807C16.9615 2.89745 16.6517 1.73803 15.7421 1.21829L14.013 0.228787C13.2234 -0.240978 12.2039 0.038882 11.7341 0.828488L11.6242 1.01839C10.7246 2.58761 9.24538 2.58761 8.33584 1.01839L8.22589 0.828488C7.77611 0.038882 6.75662 -0.240978 5.96702 0.228787L4.23788 1.21829C3.32834 1.73803 3.01849 2.90745 3.53823 3.81699C4.44778 5.37622 3.70815 6.65558 1.89905 6.65558C0.859571 6.65558 0 7.50515 0 8.55463V10.3137C0 11.3532 0.849576 12.2128 1.89905 12.2128C3.70815 12.2128 4.44778 13.4922 3.53823 15.0614C3.01849 15.9709 3.32834 17.1303 4.23788 17.6501L5.96702 18.6396C6.75662 19.1094 7.77612 18.8295 8.24588 18.0399L8.35583 17.85C9.25538 16.2808 10.7346 16.2808 11.6442 17.85L11.7541 18.0399C12.2239 18.8295 13.2434 19.1094 14.033 18.6396L15.7621 17.6501C16.6717 17.1303 16.9815 15.9609 16.4618 15.0614C15.5522 13.4922 16.2919 12.2128 18.101 12.2128C19.1404 12.2128 20 11.3632 20 10.3137V8.55463C19.99 7.51515 19.1404 6.65558 18.091 6.65558ZM9.99501 12.6826C8.2059 12.6826 6.74663 11.2233 6.74663 9.43419C6.74663 7.64508 8.2059 6.18581 9.99501 6.18581C11.7841 6.18581 13.2434 7.64508 13.2434 9.43419C13.2434 11.2233 11.7841 12.6826 9.99501 12.6826Z'
          fill='currentColor'
        />
      </svg>
    ),
    position: 110,
  },
];
const Sidebar = () => {
  const [selected, setSelected] = useState(-15);
  const router = useRouter();

  const handleClick = (position: number, path: string) => {
    setSelected(position);
    router.push(path);
  };

  return (
    <div className='w-[88px] bg-white relative'>
      <div className='absolute w-full flex justify-center top-5'>
        <Image src='/navbar/logo.png' alt='' height={20} width={37} />
      </div>

      <div className='relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {sidebarItem.map((item) => {
          return (
            <p
              key={item?.id}
              onClick={() => handleClick(item?.position, item?.path)}
              className={`cursor-pointer transition-all duration-500 ${
                selected === item?.position ? 'text-[#5630FF]' : 'text-[#69708C]'
              }`}>
              {item?.icon}
            </p>
          );
        })}
        <div
          className={`absolute left-0 transition-all duration-500 ${
            selected === 110
              ? 'top-[110px]'
              : selected === 50
              ? 'top-[50px]'
              : 'top-[-15px]'
          }  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <div className='absolute w-full flex justify-center bottom-5'>
        <Image src='/navbar/Avatar.png' alt='' height={46} width={46} />
      </div>
    </div>
  );
};

export default Sidebar;
