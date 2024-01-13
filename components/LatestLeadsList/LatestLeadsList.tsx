import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import { getLatestLeads } from '@/utils/helpers/common-helpers';
import LatestLeadRow from '@/components/LatestLeadRow/LatestLeadRow';
import ViewAllLeadsButton from '@/components/ViewAllLeadsButton/ViewAllLeadsButton';

function LatestLeadsList() {
  return (
    <div className='w-full bg-white p-5 rounded-xl'>
      <div className='flex justify-between items-center '>
        <div className='flex items-center'>
          <p className="[font-family:'Metropolis-Bold',Helvetica] font-bold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]">
            Latest Leads
          </p>

          <p className='flex items-center justify-center text-black  font-bold text-capitalize text-[16px] h-6 bg-[#D2FBE7] rounded-full ms-2 p-2 leading-3 tracking-[-0.32px] whitespace-nowrap  '>
            {getLatestLeads(LEADS_DATA).length}
          </p>
        </div>
        <div>
          <ViewAllLeadsButton />
        </div>
      </div>

      <div className="w-full max-h-[calc(100vh-250px)] overflow-y-auto whitespace-nowrap [font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal]">
        {LEADS_DATA.map((item, index) => (
          <LatestLeadRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestLeadsList;
