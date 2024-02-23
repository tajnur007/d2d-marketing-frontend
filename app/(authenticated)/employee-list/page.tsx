'use client';

import { UserService } from '@/services/user-services';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '@/assets/icons';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import EmployeeListRow from '@/components/employee-list-row';
import { CREATE_EMPLOYEE_FORM_ITEMS } from '@/utils/constants/common-constants';
import { CreateEmployeeItems } from '@/models/global-types';
import Image from 'next/image';
import CreateEmployeeModal from '@/components/create-employee-modal';
import Loader from '@/components/loader';

const EmployeeListPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isExecutive, setIsExecutive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshData, setIsRefreshData] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );
  const [formErrors, setFormErrors] = useState<CreateEmployeeItems>(
    CREATE_EMPLOYEE_FORM_ITEMS
  );

  const employeeActionRef = useRef<any>(null);

  const [uniqueCharCount, setUniqueCharCount] = useState<{ [key: string]: number }>({});

  let displayedChars: string[] = [];

  const { data } = useSession();
  const userRole = data?.user?.user_type || '';

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
        const UserListServices = new UserService();
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
        setIsLoading(false);
        setEmployeeInfo(formattedData);
      } catch (error) {
      }
    };

    if (token) {
      fetchData();
    }
  }, [token, isRefreshData]); // Only trigger when token or isRefreshData changes

  // isRefreshData is used to refresh the data when a employee is updated

  useEffect(() => {
    // Update unique character count when employeeInfo changes
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
  }, [employeeInfo]); // Only trigger when employeeInfo changes

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleNewEmployeeButtonClick = () => {
    setIsRefreshData(false);
    setModalIsOpen(true);
  };

  const handleScroll = () => {
    employeeActionRef.current.close();
  };

  const filteredEmployeeList = employeeInfo?.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='border border-gray-100 bg-white rounded-xl w-full h-[calc(100vh-102px)]'>
        <div className='md:py-6 pl-8 h-[96px] sticky top-0 bg-white z-10 p-6 rounded-xl'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <p className='font-semibold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
                Employee List
              </p>
            </div>
            <div className='flex flex-row'>
              <form>
                <div className='relative ml-6'>
                  <div className='absolute inset-y-0 start-0 flex items-center px-3'>
                    <SearchIcon />
                  </div>
                  <div className='w-[72%] md:w-[350px] lg:w-[563px] h-[48px] m-0 pl-6 p-0 bg-white rounded-[14px] border-[#F3F3F3] border justify-start items-center gap-[5px] inline-flex focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'>
                    <input
                      type='search'
                      id='default-search'
                      className='w-full h-full rounded-[14px] outline-none p-[12px] placeholder-[#2B3674] text-[14px] md:text-[16px] font-medium'
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </form>
              {userRole === 'admin' && (
                <div onClick={handleNewEmployeeButtonClick}>
                  <button
                    type='button'
                    className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
                    <div className='flex justify-between items-center'>
                      <div className='mr-2'>
                        <Image src={plusImage} alt='' />
                      </div>
                      <div className='font-medium text-[14px] md:text-[16px] leading-[normal] tracking-[0] whitespace-nowrap'>
                        New Employee
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className='h-[calc(100%-125px)] mb-6 overflow-y-auto overflow-x-hidden tiny-scrollbar ml-4'
            onScroll={handleScroll}>
            <div className='w-full px-8 md:px-4 whitespace-nowrap font-medium text-[16px] md:text-[12px] leading-[normal]'>
              {filteredEmployeeList?.map((item, index) => {
                const firstChar = item?.name?.charAt(0).toUpperCase();
                let isFirstChar = false;

                // If the character has not been displayed, add it to the array and set isFirstChar to true
                if (!displayedChars.includes(firstChar)) {
                  displayedChars.push(firstChar);
                  isFirstChar = true;
                }

                // Pass isFirstChar prop only when it's true
                return (
                  <EmployeeListRow
                    key={index}
                    item={item}
                    uniqueCharCount={uniqueCharCount}
                    isFirstChar={isFirstChar}
                    employeeActionRef={employeeActionRef}
                    isRefreshData={isRefreshData}
                    setISRefreshData={setIsRefreshData}
                    userRole={userRole}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <CreateEmployeeModal
        modalIsOpen={modalIsOpen}
        isExecutive={isExecutive}
        setModalIsOpen={setModalIsOpen}
        setIsExecutive={setIsExecutive}
        formData={formData}
        setIsRefreshData={setIsRefreshData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
      />
    </>
  );
};

export default EmployeeListPage;
