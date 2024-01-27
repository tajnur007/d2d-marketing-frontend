'use client';

import { ApiService } from '@/services/api-services';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { EmployeeSearchIcon } from '@/assets/icons';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import EmployeeListRow from '@/components/employee-list-row';
import { CREATE_EMPLOYEE_FORM_ITEMS } from '@/utils/constants/common-constants';
import { CreateEmployeeItems } from '@/models/global-types';
import Image from 'next/image';
import CreateEmployeeModal from '@/components/create-employee-modal';

const EmployeeListPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isExecutive, setIsExecutive] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );
  const [formErrors, setFormErrors] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );

  const [uniqueCharCount, setUniqueCharCount] = useState<{ [key: string]: number }>({});

  let displayedChars: string[] = [];

  const { data } = useSession();
  //@ts-ignore den
  const token: string = data?.user?.access_token;
  const [employeeInfo, setEmployeeInfo] = useState([
    {
      id: 0,
      name: '',
      user_type: '',
      phone: 0,
      email: '',
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const UserListServices = new ApiService();
        const response = await UserListServices.EmployeeListInfo(token);

        // Extract the Data array from the response
        const data = response.data?.Data?.Data || [];

        // Map each item in the Data array to a new object
        const formattedData = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          user_type: item.user_type,
          phone: item.phone,
          email: item.email,
        }));

        setEmployeeInfo(formattedData);
      } catch (error) {
        console.error('Error fetching Users info:', error);
      }
    };

    if (token) {
      fetchData();
    }
    employeeInfo.sort((a, b) => a.name.localeCompare(b.name));

    const updatedUniqueCharCount: { [key: string]: number } = {};

    for (let i = 0; i < employeeInfo.length; i++) {
      const firstChar = employeeInfo[i].name.charAt(0).toUpperCase();

      if (updatedUniqueCharCount[firstChar]) {
        updatedUniqueCharCount[firstChar]++;
      } else {
        updatedUniqueCharCount[firstChar] = 1;
      }
    }

    setUniqueCharCount(updatedUniqueCharCount);
  }, [token, employeeInfo]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleNewEmployeeButtonClick = () => {
    setModalIsOpen(true);
  };

  const filteredEmployeeList = employeeInfo.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='border border-gray-100 bg-white rounded-xl h-[84vh] w-full'>
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
                    <EmployeeSearchIcon />
                  </div>
                  <div className='w-[563px] h-[48px] m-0 pl-4 p-0 bg-white rounded-[14px] border-[#F3F3F3] border justify-start items-center gap-[5px] inline-flex focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'>
                    <input
                      type='search'
                      id='default-search'
                      className='w-full h-full rounded-[14px] outline-none p-[12px] placeholder-[#2B3674] text-[14px] font-medium ml-3'
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
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

        <div className='overflow-y-auto overflow-x-hidden tiny-scrollbar h-[68vh]'>
          <div className='w-full px-8 whitespace-nowrap font-medium text-[14px] leading-[normal]'>
            {filteredEmployeeList.map((item, index) => {
              const firstChar = item.name.charAt(0).toUpperCase();
              let isFirstChar = false;

              // If the character has not been displayed, add it to the array and set isFirstChar to true
              if (!displayedChars.includes(firstChar)) {
                displayedChars.push(firstChar);
                isFirstChar = true;
              }

              // Pass isFirstChar prop only when it's true
              return isFirstChar ? (
                <EmployeeListRow
                  key={index}
                  item={item}
                  uniqueCharCount={uniqueCharCount}
                  isFirstChar={isFirstChar}
                />
              ) : (
                <EmployeeListRow
                  key={index}
                  item={item}
                  uniqueCharCount={uniqueCharCount}
                />
              );
            })}
          </div>
        </div>
      </div>
      <CreateEmployeeModal
        modalIsOpen={modalIsOpen}
        isExecutive={isExecutive}
        setModalIsOpen={setModalIsOpen}
        setIsExecutive={setIsExecutive}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
      />
    </>
  );
};

export default EmployeeListPage;
