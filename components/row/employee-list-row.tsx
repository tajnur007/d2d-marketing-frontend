import Image from 'next/image';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import profileImage from '@/assets/images/profile.png';
import { EMPLOYEE_LIST_DATA_TYPE, EmployeestatusColor } from '@/models/global-types';

const getStatusColor: EmployeestatusColor = {
  Active: 'bg-[#D2FBE7]',
  Inactive: 'bg-red-200',
};

function EmployeelistRow({
  item,
  uniqueCharCount,
  isFirstChar,
}: {
  item: EMPLOYEE_LIST_DATA_TYPE;
  uniqueCharCount: { [key: string]: number };
  isFirstChar?: boolean;
}) {
  const firstChar = item.employeeName.charAt(0).toUpperCase();

  return (
    <div>
      {isFirstChar ? (
        <div className='inline-flex items-center gap-[7px] text-[12px] mt-[20px]'>
          <div className='font-medium text-[#5630FF]'>{firstChar}</div>

          <div className='font-bold text-black px-[8px] py-[8px] bg-[#e5dfff] rounded-[12px]'>
            {uniqueCharCount[firstChar]}
          </div>
        </div>
      ) : <div className='border-t-[1px] border-[#E9F0FF]'></div>}

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
            {item.employeeName}
          </p>
          <div className='flex items-center mt-[4px]'>
            <div className='text-[#444444] font-medium text-[12px] leading-[20px] tracking-[-0.24] whitespace-nowrap text-capitalize inline-block'>
              {item.employeeDesignation}
            </div>
          </div>
        </div>

        <div className='w-[25%]'>
          <div className='flex flex-row leading-[20px] font-medium text-[12px] tracking-[-0.24px] whitespace-nowrap'>
            <p className='text-[#444444] mr-1'>Phone:</p>
            <div className='text-[#828DAD]'>{item.employeePhone}</div>
          </div>
        </div>

        <div className='w-[25%]'>
          <div className='flex flex-row leading-[20px] font-medium text-[12px] text-transparent tracking-[-0.24px] whitespace-nowrap'>
            <p className='text-[#444444] mr-1'>Email:</p>
            <div className='text-[#828DAD]'>{item.employeeEmail}</div>
          </div>
        </div>

        <div className='w-[10%]'>
          <span
            className={`text-[10px] w-fit font-medium tracking-[0] leading-[normal] text-[#00156A] h-[19px] mt-[-1px] ${
              getStatusColor[item.employeeStatus as keyof EmployeestatusColor]
            } px-[10px] py-[6px] rounded-[12px]`}>
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
