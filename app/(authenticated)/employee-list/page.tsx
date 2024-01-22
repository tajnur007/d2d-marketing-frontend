'use client';

import React, { useEffect } from 'react';
import { EMPLOYEE_LIST_DATA } from '@/utils/constants/employee-list-constant';
import Image from 'next/image';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import EmployeelistRow from '@/components/row/employee-list-row';
import { useState } from 'react';

const EmployeeListPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [uniqueCharCount, setUniqueCharCount] = useState<{ [key: string]: number }>({});

  let displayedChars: string[] = [];

  useEffect(() => {
    EMPLOYEE_LIST_DATA.sort((a, b) => a.employeeName.localeCompare(b.employeeName));

    const updatedUniqueCharCount: { [key: string]: number } = {};

    for (let i = 0; i < EMPLOYEE_LIST_DATA.length; i++) {
      const firstChar = EMPLOYEE_LIST_DATA[i].employeeName.charAt(0).toUpperCase();

      if (updatedUniqueCharCount[firstChar]) {
        updatedUniqueCharCount[firstChar]++;
      } else {
        updatedUniqueCharCount[firstChar] = 1;
      }
    }

    setUniqueCharCount(updatedUniqueCharCount);
  }, [EMPLOYEE_LIST_DATA]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleNewEmployeeButtonClick = () => {
    console.log('Button Clicked.');
  };

  const filteredEmployeeList = EMPLOYEE_LIST_DATA.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='border border-gray-100 bg-white rounded-xl h-[88vh] w-full'>
      <div className='py-4 md:py-6 pl-8 h-[96px]'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <p className='font-semibold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
                Employee List
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
            <form>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                  <svg
                    className='w-4 h-4 text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'>
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='mx-1 p-3 ps-10 text-md border border-gray-300 rounded-lg lg:w-[800px]'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
            <div onClick={handleNewEmployeeButtonClick}>
              <button
                type='button'
                className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
                <div className='flex justify-between items-center'>
                  <div className='mr-2'>
                    <Image src={plusImage} alt='' />
                  </div>
                  <div className='font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
                    New Employee
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='overflow-y-auto overflow-x-hidden tiny-scrollbar h-[71vh]'>
        <div className='w-full px-8 whitespace-nowrap font-medium text-[14px] leading-[normal]'>
          {filteredEmployeeList.map((item, index) => {
            const firstChar = item.employeeName.charAt(0).toUpperCase();
            let isFirstChar = false;

            // If the character has not been displayed, add it to the array and set isFirstChar to true
            if (!displayedChars.includes(firstChar)) {
              displayedChars.push(firstChar);
              isFirstChar = true;
            }

            // Pass isFirstChar prop only when it's true
            return isFirstChar ? (
              <EmployeelistRow
                key={index}
                item={item}
                uniqueCharCount={uniqueCharCount}
                isFirstChar={isFirstChar}
              />
            ) : (
              <EmployeelistRow
                key={index}
                item={item}
                uniqueCharCount={uniqueCharCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeListPage;
