'use client';

import React from 'react';
import { EMPLOYEE_LIST_DATA } from '@/utils/constants/employee-list-constant';
import Image from 'next/image';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import profileImage from '@/assets/images/profilePic.png';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import EmployeelistRow from '@/components/row/employee-list-row';
import { CREATE_EMPLOYEE_FORM_ITEMS } from '@/utils/constants/common-constants';
import { useState } from 'react';
import { EMPLOYEE_LIST_DATA_TYPE, CreateEmployeeItems } from '@/models/global-types';
import CreateEmployeeModal from '@/components/create-employee-modal';

const EmployeeListPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );
  const [formErrors, setFormErrors] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handleNewEmployeeButtonClick = () => {
    console.log('Button Clicked.');
    setModalIsOpen(true);
  };
  const filteredEmployeeList = EMPLOYEE_LIST_DATA.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
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
            <div className='flex justify-between items-center content-center'>
              <div className='flex items-center'>
                <div className='font-semibold text-[12px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
                  Total:
                </div>

                <div className='flex items-center justify-center h-6 bg-[#E5DFFF] rounded-[17px] ms-2 p-2'>
                  <p className='leading-[normal] text-black font-bold text-[12px] tracking-[-0.32px] whitespace-nowrap text-capitalize'>
                    {filteredEmployeeList.length}
                  </p>
                </div>
              </div>
            </div>
            {filteredEmployeeList.map((item, index) => (
              <EmployeelistRow key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <CreateEmployeeModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
      />
    </>
  );
};

export default EmployeeListPage;
