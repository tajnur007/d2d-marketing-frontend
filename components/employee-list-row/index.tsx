'use client';

import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import profileImage from '@/assets/images/profile.png';
import { EmployeestatusColor } from '@/models/global-types';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import EmployeeOptions from './EmployeeOptions';
import UpdateEmployeeModal from '../update-employee-modal';
import { useState } from 'react';
import { UserService } from '@/services/user-services';
import DeleteConfirmationModal from '../delete-confirmation-modal';
import DeleteEmployeeConfirmationModal from '../delete-employee-confirmation-modal';

const getStatusColor: EmployeestatusColor = {
  Active: 'bg-[#D2FBE7]',
  Inactive: 'bg-red-200',
};

function EmployeeListRow({
  item,
  uniqueCharCount,
  isFirstChar,
  employeeActionRef,
  isRefreshData,
  setISRefreshData = () => {},
}: {
  item: any;
  uniqueCharCount: { [key: string]: number };
  isFirstChar?: boolean;
  employeeActionRef: any;
  isRefreshData: boolean;
  setISRefreshData: any;
}) {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [isExecutive, setIsExecutive] = useState<boolean>(false);

  const { data } = useSession();
  const firstChar = item.name.charAt(0).toUpperCase();

  const handleViewButton = () => {
    console.log('button');
  };

  const handleDeleteButton = async (userId: number) => {
    setDeleteModalIsOpen(true);
  };

  const handleEditButton = (userId: number) => {
    // After clicking the edit button, the modal will open
    setEditModalIsOpen(true);
  };

  return (
    <div>
      {isFirstChar ? (
        <div className='inline-flex items-center gap-[7px] text-[12px] mt-[20px]'>
          <div className='font-medium text-[#5630FF]'>{firstChar}</div>

          <div className='font-bold text-black h-6 min-w-6 px-2 flex items-center justify-center bg-[#e5dfff] rounded-full tracking-wide'>
            {uniqueCharCount[firstChar]}
          </div>
        </div>
      ) : (
        <div className='border-t-[1px] border-[#E9F0FF]'></div>
      )}

      <div
        key={item.id}
        className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 mb-1'>
        <div className='w-5%'>
          <div className='flex items-center w-15 mt-[8px] '>
            <Image
              src={profileImage}
              alt='Profile Picture'
              className='rounded-full w-12 h-12 flex-shrink-0'
            />
          </div>
        </div>

        <div className='w-[25%]'>
          <p className='leading-[28px] font-bold text-[16px] tracking-[-0.32] text-[#2B3674] mt-2 whitespace-nowrap'>
            {item.name}
          </p>
          <div className='flex items-center mt-[4px]'>
            <div className='text-[#444444] font-medium text-[12px] leading-[20px] tracking-[-0.24] whitespace-nowrap text-capitalize inline-block'>
              {item.user_type}
            </div>
          </div>
        </div>

        <div className='w-[25%]'>
          <div className='flex flex-row leading-[20px] font-medium text-[12px] tracking-[-0.24px] whitespace-nowrap'>
            <p className='text-[#444444] mr-1'>Phone:</p>
            <div className='text-[#828DAD]'>{item.phone}</div>
          </div>
        </div>

        <div className='w-[25%]'>
          <div className='flex flex-row leading-[20px] font-medium text-[12px] text-transparent tracking-[-0.24px] whitespace-nowrap'>
            <p className='text-[#444444] mr-1'>Email:</p>
            <div className='text-[#828DAD]'>{item.email}</div>
          </div>
        </div>

        <div className='w-[10%]'>
          <span
            className={`text-[10px] w-fit font-medium tracking-[0] leading-[normal] text-[#00156A] h-[19px] mt-[-1px] bg-[#D2FBE7] px-[10px] py-[6px] rounded-[12px]`}>
            {item?.employeeStatus || 'Active'}
          </span>
        </div>
        
        {!deleteModalIsOpen && !editModalIsOpen && (
          <Popup
            trigger={
              <div className='menu-item'>
                <Image className='cursor-pointer h-6 w-6' src={moreImage} alt='' />
              </div>
            }
            ref={employeeActionRef}
            position='left center'
            on='click'
            closeOnDocumentClick
            closeOnEscape
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{
              padding: '0px',
              border: 'none',
              background: '#F8F8F8',
              borderRadius: '4px',
              marginLeft: '20px',
            }}
            arrow={false}>
            <EmployeeOptions
              handleDeleteButton={() => handleDeleteButton(item.id)}
              handleEditButton={() => handleEditButton(item.id)}
            />
          </Popup>
        )}
      </div>

      <UpdateEmployeeModal // This is the modal for updating employee details
        modalIsOpen={editModalIsOpen}
        isExecutive={isExecutive} // This is the state for the executive
        setModalIsOpen={setEditModalIsOpen}
        setIsExecutive={setIsExecutive}
        employeeinfo={item} // This is the employee details
        isRefreshData={isRefreshData}
        setIsRefreshData={setISRefreshData}
      />

      <DeleteEmployeeConfirmationModal
        modalIsOpen={deleteModalIsOpen}
        setModalIsOpen={setDeleteModalIsOpen}
        data={item}
        isRefreshData={isRefreshData}
        setIsRefreshData={setISRefreshData}
      />
    </div>
  );
}

export default EmployeeListRow;
