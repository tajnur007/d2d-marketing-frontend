import { getStatusColor } from '@/utils/helpers/common-helpers';
import Image from 'next/image';
import LeadDetailsButton from '@/components/LeadDetailsButton/LeadDetailsButton';
import phoneImage from '@/assets/images/leadslist-icons/call.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import { LEADS_DATA_TYPE } from '@/utils/constants/leadslist-constant';

function LeadRow({ item }: { item: LEADS_DATA_TYPE }) {
  return (
    <div>
      <div
        key={item.id}
        className='h-20 flex gap-5 justify-between items-center text-sm leading-none text-gray-800 border-b border-white'>
        <div className='w-[30%]'>
          <p className='leading-trim font-semibold text-[18px] tracking-tight'>
            {item.title}
          </p>
          <div className='flex items-center mt-[14px]'>
            <div className='mr-1'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-gray-400 text-xs whitespace-nowrap text-capitalize inline-block'>
              {item.date}
            </div>
          </div>
        </div>
        <div className='w-[25%]'>
          <p className='leading-trim font-semibold text-[16px] tracking-tight'>
            {item.assignedByName}
          </p>
          <div className='flex items-center mt-[10px]'>
            <div className='mr-1'>
              <Image src={phoneImage} alt='' />
            </div>
            <div className='text-[#5630FF] text-xs whitespace-nowrap text-capitalize inline-block'>
              {item.assignedByNumber}
            </div>
          </div>
        </div>
        <div className='w-[20%]'>
          <span
            className={`text-sm text-black h-6 ${getStatusColor(
              item.status
            )} p-2 rounded-full`}>
            {item.status}
          </span>
        </div>
        <div className='w-[25%]'>
          <p className='text-[#5630FF] text-xs whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-trim font-semibold text-[16px] tracking-tight mt-[10px]'>
            {item.assignedToName}
          </p>
        </div>
        <div className='w-[2%]'>
          {' '}
          <LeadDetailsButton data={item} />
        </div>
      </div>
    </div>
  );
}

export default LeadRow;
