import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import LeadRow from '../LeadRow/LeadRow';
import CreateLeadsButton from '../CreateLeadsButton/CreateLeadsButton';

function LeadsList() {
  

  return (
    <>
      <div className=' w-full bg-white rounded-lg shadow'>
        <div className='border rounded-lg border-gray-100'>
          <div className='py-4 md:py-6 pl-8 h-[96px]'>
            <div className='flex justify-between items-center content-center'>
              <div className='flex items-center'>
                <div>
                  <p className="[font-family:'Metropolis-Bold',Helvetica] font-bold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]">
                    Leads
                  </p>
                </div>

                <div className='flex items-center justify-center h-6 bg-green-200 rounded-full ms-2 p-2'>
                  <p className="leading-3 text-black [font-family:'Metropolis-Bold',Helvetica] font-bold text-[16px] tracking-[-0.32px] whitespace-nowrap text-capitalize">
                    {LEADS_DATA.length}
                  </p>
                </div>
              </div>
              <div>
                <CreateLeadsButton />
              </div>
            </div>
          </div>
          <div className='overflow-x-auto overflow-y-scroll h-[715px]'>
            <table className="w-full  whitespace-nowrap [font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal]">
              <tbody className='w-full'>
                {LEADS_DATA.map((item, index) => (
                  <LeadRow key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadsList;
