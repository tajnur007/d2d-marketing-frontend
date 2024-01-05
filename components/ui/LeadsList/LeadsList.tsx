import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import Image from 'next/image';
import plus from '/public/leadslist-icons/add-circle.png';
import phone from '/public/leadslist-icons/call.png';
import clock from '/public/leadslist-icons/clock.png';
import more from '/public/leadslist-icons/more_vert.png';

// Define a function to get the appropriate color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Hot':
      return 'bg-red-100';
    case 'Pending':
      return 'bg-orange-100';
    case 'Completed':
      return 'bg-green-100';
    default:
      return 'bg-gray-100';
  }
};

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
                      <Image src={plus} alt='' />
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
                  <tr
                    key={index}
                    className='h-20 text-sm leading-none text-gray-800 border-b border-white'>
                    <td className=' pl-8'>
                      <p className='leading-trim font-semibold text-[18px] tracking-tight'>
                        {item.title}
                      </p>
                      <div className='flex items-center mt-[14px]'>
                        <div className='mr-1'>
                          <Image src={clock} alt='' />
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
                          <Image src={phone} alt='' />
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
                      <Image className=' cursor-pointer' src={more} alt='' />
                    </td>
                  </tr>
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
