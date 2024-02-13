import { Person } from '@/models/global-types';
import React from 'react';
import { generateInitials } from '@/utils/helpers/common-helpers';

const Profiles = ({ data }: { data: Person[] | null }) => {
  return (
    <div className='h-[calc(100%-78px)] mb-6 px-5 overflow-y-auto tiny-scrollbar'>
      {data?.map((person: Person) => (
        <div key={person?.executive_id} className='flex items-center gap-5 mb-5'>
          <div className='bg-[#E5DFFF] p-[13px] rounded-2xl font-semibold text-[#b8a9ff] xl:text-[16px] text-[14px] xl:w-[50px] xl:h-full w-[40px] h-[35px] flex items-center justify-center'>
            {generateInitials(person?.executive_name)}
          </div>
          {/* width based on name length */}
          <div className='col-span-2'>
            <div className=' font-semibold text-[#00156a] xl:text-[16px] text-[14px]'>
              {person?.executive_name}
            </div>
            <p className='xl:text-[13px] text-[11.5px] text-[#9aa1b1]'>
              <span className='font-bold text-[#5630ff] mr-1'>
                {person?.count_of_leads}
              </span>
              of leads
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
