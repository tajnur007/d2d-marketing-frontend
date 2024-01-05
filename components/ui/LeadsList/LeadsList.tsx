import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import Image from 'next/image';
import plusImage from '/assets/images/leadslist-icons/add-circle.png';
import LeadRow from '../LeadRow/LeadRow';

function LeadsList() {
  return (
    <>
      <div className=' w-full bg-white rounded-lg shadow'>
        <div className='border rounded-lg border-gray-100'>
          <div className='py-4 md:py-6 pl-8'>
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
                <button
                  type='button'
                  className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-sm p-3 text-center mx-5'>
                  <div className='flex justify-between items-center'>
                    <div className='mr-2'>
                      <Image src={plusImage} alt='' />
                    </div>
                    <div className="[font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal] whitespace-nowrap text-capitalize">
                      Create leads
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='overflow-x-auto overflow-y-auto'>
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
