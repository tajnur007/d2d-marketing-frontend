import Image from 'next/image';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import { getStatusColor } from '@/utils/constants/common-constants';
import { LEADS_DATA_TYPE, statusColor } from '@/models/global-types';

const LatestLeadRow = ({ item }: { item: LEADS_DATA_TYPE }) => {
  return (
    <div
      key={item.id}
      className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 '>
      <div className='w-[40%]'>
        <p className='leading-trim font-semibold text-[18px] tracking-tight'>
          {item.title}
        </p>
        <div className='flex items-center mt-[14px]'>
          <div className='mr-1'>
            <Image src={clockImage} alt='' />
          </div>
          <div className='text-gray-400 font-medium whitespace-nowrap text-capitalize inline-block'>
            {item.date}
          </div>
        </div>
      </div>
      <div className='w-[30%]'>
        <span
          className={` text-[12px] font-medium text-black ${
            getStatusColor[item.status as keyof statusColor]
          } py-2 px-[10px] rounded-full`}>
          {item.status}
        </span>
      </div>

      <div className='w-[30%]'>
        <p className='text-[#5630FF] text-[12px] font-medium whitespace-nowrap text-capitalize inline-block'>
          Assigned to
        </p>
        <p className='leading-trim font-semibold text-[16px] tracking-tight mt-[10px]'>
          {item.assignedToName}
        </p>
      </div>
    </div>
  );
};

export default LatestLeadRow;
