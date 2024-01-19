import Image from 'next/image';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import profileImage from '@/assets/images/profile.png';
import { EMPLOYEE_LIST_DATA_TYPE, EmployeestatusColor } from '@/models/global-types';

const getStatusColor: EmployeestatusColor = {
  Active: 'bg-[#D2FBE7]',
  Inactive: 'bg-red-200',
};

function EmployeelistRow({ item }: { item: EMPLOYEE_LIST_DATA_TYPE }) {
  return (
    <div>
      <div
        key={item.id}
        className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 border-b mb-1'>
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
          <p className='leading-trim font-bold text-[16px] tracking-tight mt-2'>
            {item.employeeName}
          </p>
          <div className='flex items-center mt-[4px]'>
            <div className='text-[#9d9d9d] text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.employeeDesignation}
            </div>
          </div>
        </div>

        <div className='w-[25%]'>
          <div className='flex flex-row leading-trim font-medium text-[12px] tracking-tight'>
            <p>Phone:</p>
            <div className='text-[#9d9d9d]'>{item.employeePhone}</div>
          </div>
        </div>
        <div className='w-[25%]'>
          <div className='flex flex-row leading-trim font-medium text-[12px] tracking-tight'>
            <p>Email:</p>
            <div className='text-[#9d9d9d]'>{item.employeeEmail}</div>
          </div>
        </div>
        <div className='w-[10%]'>
          <span
            className={`text-sm text-black h-[19px] w-[50px] ${
              getStatusColor[item.employeeStatus as keyof EmployeestatusColor]
            } p-2 rounded-full`}>
            {item.employeeStatus}
          </span>
        </div>

        <div className='w-[2%]'>
          <Image
            className='cursor-pointer h-6 w-6'
            src={moreImage}
            alt=''
            onClick={() => {
              console.log('More button is clicked');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeelistRow;
