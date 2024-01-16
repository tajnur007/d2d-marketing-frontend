import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import { getLatestLeads } from '@/utils/helpers/common-helpers';
import LatestLeadRow from '@/components/LatestLeadRow/LatestLeadRow';
import ViewAllLeadsButton from '@/components/ViewAllLeadsButton/ViewAllLeadsButton';

function LatestLeadsList() {
  return (
    <div className='w-full bg-white py-5 rounded-xl h-[66vh]'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center pl-6'>
          <p className='font-bold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
            Latest Leads
          </p>

          <p className='flex items-center justify-center text-black  font-semibold text-capitalize text-[16px] h-6 bg-[#D2FBE7] rounded-full ms-2 p-2 leading-3 tracking-[-0.32px] whitespace-nowrap  '>
            {getLatestLeads(LEADS_DATA).length}
          </p>
        </div>
        <div>
          <ViewAllLeadsButton />
        </div>
      </div>

      <div className='w-full h-[calc(100%-40px)] pl-6 overflow-y-auto tiny-scrollbar overflow-x-hidden whitespace-nowrap font-semibold text-[18px] leading-[normal]'>
        {LEADS_DATA.map((item, index) => (
          <LatestLeadRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestLeadsList;
