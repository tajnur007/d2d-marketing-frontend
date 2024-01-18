import Image from 'next/image';
import phoneImage from '@/assets/images/leadslist-icons/call.png';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
// import { getStatusColor } from '@/utils/constants/common-constants';
import { EMPLOYEE_LIST_DATA_TYPE, EmployeestatusColor } from '@/models/global-types';

const getStatusColor: EmployeestatusColor = {
  Active: 'bg-green-200',
  Inactive: 'bg-red-200',
};

function EmployeelistRow({ item }: { item: EMPLOYEE_LIST_DATA_TYPE }) {
  return (
    <div>
      <div
        key={item.id}
        className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 border-b border-white'>
        <div className='w-[30%]'>
          <p className='leading-trim font-semibold text-[18px] tracking-tight'>
            {item.employeeName}
          </p>
          <div className='flex items-center mt-[14px]'>
            <div className='mr-1'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-[#9d9d9d] text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.employeeDesignation}
            </div>
          </div>
        </div>
        <div className='w-[25%]'>
          <p className='leading-trim font-semibold text-[16px] tracking-tight'>
            {item.employeeEmail}
          </p>
          <div className='flex items-center mt-[10px]'>
            <div className='mr-1'>
              <Image src={phoneImage} alt='' />
            </div>
            <div className='text-[#5630FF] text-[12px] leading-[14px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.employeePhone}
            </div>
          </div>
        </div>
        <div className='w-[20%]'>
          <span
            className={`text-sm text-black h-6 ${
              getStatusColor[item.employeeStatus as keyof EmployeestatusColor]
            } p-2 rounded-full`}>
            {item.employeeStatus}
          </span>
        </div>
        {/* <div className='w-[25%]'>
          <p className='text-[#5630FF] text-xs whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-[14px] text-black font-semibold text-[16px] tracking-[0] mt-[10px] whitespace-nowrap'>
            {item.assignedToName}
          </p>
        </div> */}
        <div className='w-[2%]'>
          <Image
            className='cursor-pointer h-6 w-6'
            src={moreImage}
            alt=''
            onClick={()=>{console.log('More button is clicked');}}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeelistRow;
