import Image from 'next/image';
import LeadDetailsButton from '@/components/LeadDetailsButton/LeadDetailsButton';
import phoneImage from '@/assets/images/leadslist-icons/call.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
// import { getStatusColor } from '@/utils/constants/common-constants';
import { LEADS_DATA_TYPE, statusColor } from '@/models/global-types';

const getStatusColor: statusColor = {
  Cool: 'bg-blue-200',
  Hot: 'bg-[#FFD9D9]',
  Warm: 'bg-[#FFEFB8]',
};

const LeadRow = ({ item }: { item: LEADS_DATA_TYPE }) => {
  return (
    <>
      <tr
        key={item.id}
        className='h-20 text-sm leading-none text-gray-800 border-b border-white'>
        <td className=' pl-8'>
          <p className='leading-[14.5px] font-semibold text-[18px] tracking-[0] whitespace-nowrap text-capitaliz'>
            {item.title}
          </p>
          <div className='flex items-center mt-[14px]'>
            <div className='mr-1'>
              <Image src={clockImage} alt='' />
            </div>
            <div className='text-[#9d9d9d] text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.date}
            </div>
          </div>
        </td>
        <td className='pl-16'>
          <p className='leading-[14px] font-semibold text-black text-[16px] tracking-[0] whitespace-nowrap'>
            {item.assignedByName}
          </p>
          <div className='flex items-center mt-[10px]'>
            <div className='mr-1'>
              <Image src={phoneImage} alt='' />
            </div>
            <div className='text-[#5630FF] text-[12px] leading-[14px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.assignedByNumber}
            </div>
          </div>
        </td>
        <td className='w-1 text-center pl-28'>
          <div
            className={`flex items-center font-medium text-black text-[12px] tracking-[-0.24px] leading-[normal] whitespace-nowrap justify-center h-6 ${
              getStatusColor[item.status as keyof statusColor]
            } p-2 rounded-full`}>
            <p className='text-sm text-black'>{item.status}</p>
          </div>
        </td>
        <td className='pl-56'>
          <p className='text-[#5630FF] text-[12px] tracking-[0] leading-[14px] whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-[14px] text-black font-semibold text-[16px] tracking-[0] mt-[10px] whitespace-nowrap'>
            {item.assignedToName}
          </p>
        </td>
        <td className=''>
          <LeadDetailsButton />
        </td>
      </tr>
    </>
  );
};

export default LeadRow;
