'use client';
import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import LeadRow from '@/components/LeadRow/LeadRow';
import Image from 'next/image';
import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import profileImage from '@/assets/images/profilePic.png';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const EmployeeListPage = () => {
  const router = useRouter();
  const handleCreateLeadButtonClick = () => {
    router.push(PAGE_ROUTES.LeadCreate);
  };
  return (
    <div className='border border-gray-100 bg-white rounded-xl h-[88vh] w-full'>
      <div className='py-4 md:py-6 pl-8 h-[96px]'>
        <div className='flex justify-between items-center content-center'>
          <div className='flex items-center'>
            <div>
              <p className="[font-family:'Metropolis-Bold',Helvetica] font-semibold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]">
                Employee List
              </p>
            </div>
          </div>
          <div onClick={handleCreateLeadButtonClick}>
            <button
              type='button'
              className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
              <div className='flex justify-between items-center'>
                <div className='mr-2'>
                  <Image src={plusImage} alt='' />
                </div>
                <div className='font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
                  New Employee
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className='overflow-y-auto overflow-x-hidden tiny-scrollbar h-[71vh]'>
        <div className='w-full px-8 whitespace-nowrap font-medium text-[14px] leading-[normal]'>
          {LEADS_DATA.map((item, index) => (
            <LeadRow key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default EmployeeListPage;
