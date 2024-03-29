import Image from 'next/image';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import { getStatusColor } from '@/utils/constants/common-constants';
import { LATEST_LEADS_LIST_DATA_TYPE, statusColor } from '@/models/global-types';

const LatestLeadRow = ({ item }: { item: LATEST_LEADS_LIST_DATA_TYPE }) => {
  return (
    <div
      key={item?.id}
      className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 '>
      <div className='w-[40%]'>
        <p className='leading-trim font-semibold xl:text-[18px] text-[16px] tracking-tight'>
          {item?.title}
        </p>
        <div className='flex items-center xl:mt-[14px] mt-[12px]'>
          <div className='mr-1'>
            <Image src={clockImage} alt='' />
          </div>
          <div className='text-gray-400 font-medium whitespace-nowrap text-capitalize inline-block'>
            {item?.created_at}
          </div>
        </div>
      </div>
      <div className='w-[30%]'>
        <span
          className={` xl:text-[12px] text-[10px] font-medium text-black ${
            getStatusColor[item?.meeting_status as keyof statusColor]
          } py-2 xl:px-[10px] px-[8px] rounded-full`}>
          {item?.meeting_status}
        </span>
      </div>

      <div className='w-[30%]'>
        <p className='text-[#5630FF] xl:text-[12px] text-[10px] font-medium whitespace-nowrap text-capitalize inline-block'>
          Assigned to
        </p>
        <p className='leading-trim font-semibold xl:text-[16px] text-[14px] tracking-tight xl:mt-[10px] mt-[8px]'>
          {item?.executive_name}
        </p>
      </div>
    </div>
  );
};

export default LatestLeadRow;
