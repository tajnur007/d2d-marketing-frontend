import { getStatusColor } from '@/utils/helpers/common-helpers';
import Image from 'next/image';
import LeadDetailsButton from '@/components/LeadDetailsButton/LeadDetailsButton';
import phoneImage from '@/assets/images/leadslist-icons/call.png';
import clockImage from '@/assets/images/leadslist-icons/clock.png';
import { LEADS_DATA_TYPE } from '@/utils/constants/leadslist-constant';

function LeadRow({ item }: { item: LEADS_DATA_TYPE }) {
  return (
    <>
      <tr
        key={item.id}
        className='h-20 text-sm leading-none text-gray-800 border-b border-white'>
        <td className=' pl-8'>
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
        </td>
        <td className='pl-16'>
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
        </td>
        <td className='w-1 text-center pl-28'>
          <div
            className={`flex items-center justify-center h-6 ${getStatusColor(
              item.status
            )} p-2 rounded-full`}>
            <p className='text-sm text-black'>{item.status}</p>
          </div>
        </td>
        <td className='pl-56'>
          <p className='text-[#5630FF] text-xs whitespace-nowrap text-capitalize inline-block'>
            Assigned to
          </p>
          <p className='leading-trim font-semibold text-[16px] tracking-tight mt-[10px]'>
            {item.assignedToName}
          </p>
        </td>
        <td className=''>
          <LeadDetailsButton data={item} />
        </td>
      </tr>
    </>
  );
}

export default LeadRow;
