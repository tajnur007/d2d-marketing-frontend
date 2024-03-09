'use client';

import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import profileImage from '@/assets/images/profile.png';
import { EmployeestatusColor } from '@/models/global-types';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import EmployeeOptions from './EmployeeOptions';
import UpdateEmployeeModal from '../update-employee-modal';
import { Fragment, useState } from 'react';
import ConfirmationModal from '../confirmation-modal';
import { UserService } from '@/services/user-services';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { DeleteIcon, EditIcon } from '@/assets/icons';

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
  userRole,
}: {
  item: any;
  uniqueCharCount: { [key: string]: number };
  isFirstChar?: boolean;
  employeeActionRef: any;
  isRefreshData: boolean;
  setISRefreshData: any;
  userRole: string;
}) {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [isExecutive, setIsExecutive] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);

  const firstChar = item.name.charAt(0).toUpperCase();

  const handleDeleteButton = async () => {
    setDeleteModalIsOpen(true);
    if (employeeActionRef.current) {
      employeeActionRef.current.close();
    }
  };
  const { data: session } = useSession();

  const handleEditButton = () => {
    // After clicking the edit button, the modal will open
    setEditModalIsOpen(true);
    if (employeeActionRef.current) {
      employeeActionRef.current.close();
    }
  };

  const deleteEmployer = async () => {
    setDeleteModalIsOpen(true);
    setIsLoading(true);
    try {
      //@ts-ignore
      const token = session?.user?.access_token;
      const UserServices = new UserService();
      const resp = await UserServices.deleteUser(item.id, token);
      if (resp?.status === 202) {
        setISRefreshData(!isRefreshData);
        toast.success('Employee deleted successfully!');
      } else {
        toast.error('Something went wrong.');
      }
    } catch (err) {
      toast.error('Failed to delete employee!');
    }
    setIsLoading(false);
    setDeleteModalIsOpen(false);
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
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-5 w-[25%]'>
            <div className='flex items-center mt-[8px] '>
              <Image
                src={profileImage}
                alt='Profile Picture'
                className='rounded-full w-12 h-12 flex-shrink-0'
              />
            </div>
            <div className='ml-1'>
              <p className='leading-[28px] font-bold text-[16px]  text-[#2B3674] mt-2 whitespace-nowrap'>
                {item.name}
              </p>
              <div className='flex items-center mt-[4px]'>
                <div className='text-[#444444] font-medium text-[12px] leading-[20px] tracking-[-0.24] whitespace-nowrap text-capitalize inline-block'>
                  {item.user_type}
                </div>
              </div>
            </div>
          </div>

          <div className='w-[20%] flex justify-center items-center'>
            <div className='flex flex-row leading-[20px] font-medium text-[12px] tracking-[-0.24px] whitespace-nowrap'>
              <div className='text-[#828DAD]'>
                {item.phone ? item.phone : 'Not found'}
              </div>
            </div>
          </div>

          <div className='w-[30%] flex justify-center items-center'>
            <div className='flex flex-row leading-[20px] font-medium text-[12px] text-transparent tracking-[-0.24px] whitespace-nowrap'>
              <div className='text-[#828DAD]'>{item.email}</div>
            </div>
          </div>

          <div className='w-[15%] flex justify-center items-center'>
            <span
              className={`text-[10px] w-fit font-medium tracking-[0] leading-[normal] text-[#00156A] h-[19px] mt-[-1px] bg-[#D2FBE7] px-[10px] py-[6px] rounded-[12px]`}>
              {item?.employeeStatus || 'Active'}
            </span>
          </div>
        </div>
        <div className='w-[10%] flex justify-center items-center'>
          {userRole === 'admin' && userRole !== item.user_type && (
            <Fragment>
              <div onClick={handleEditButton} className='cursor-pointer'>
                <EditIcon />
              </div>
              <div onClick={handleDeleteButton} className='cursor-pointer ml-[10px]'>
                <DeleteIcon />
              </div>
            </Fragment>
          )}
        </div>
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

      <ConfirmationModal
        modalIsOpen={deleteModalIsOpen}
        setModalIsOpen={setDeleteModalIsOpen}
        deleteItem={deleteEmployer}
        isLoading={isLoading}
      />
    </div>
  );
}

export default EmployeeListRow;
