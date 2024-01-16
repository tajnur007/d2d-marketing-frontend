import { Person } from '@/models/global-types';
import React from 'react';

const Profiles = ({ data }: { data: Person[] }) => {
  return (
    <div className='h-[calc(100%-40px)] overflow-y-auto tiny-scrollbar px-5'>
      {data?.map((person: Person) => (
        <div key={person?.id} className='flex items-center gap-5 mb-5'>
          <div className='bg-[#E5DFFF] p-[13px] rounded-2xl font-semibold text-[#b8a9ff] text-[16px]'>
            {person?.initials}
          </div>

          {/* width based on name length */}
          <div>
            <div className=' font-semibold text-[#00156a] text-[16px]'>
              {person?.name}
            </div>
            <p className='text-[13px]  text-[#9aa1b1]'>
              <span className='font-bold text-[#5630ff]  mr-1'>{person?.totalLeads}</span>
              of leads
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
