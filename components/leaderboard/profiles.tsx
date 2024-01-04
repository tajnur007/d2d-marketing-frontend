import React from 'react';

interface Person {
  id: number;
  initials: string;
  name: string;
  role: string;
  username: string;
  totalLeads: number;
}

const Profiles = ({ data }: any) => {
  return <div>{Item(data)}</div>;
};

const Item = (data: Person[]) => {
  return (
    <>
      {data?.map((person) => (
        <div
          key={person?.id}
          className={`relative w-[245px] h-[43px] mt-[16px] left-[25px]`}>
          <div className='flex flex-col w-[50px] h-[43px] items-center justify-center gap-[10px] px-[7px] py-[13px] absolute top-0 left-0 bg-[#e5dfff] rounded-[16px] overflow-hidden'>
            <div className="relative w-fit [font-family:'Metropolis-SemiBold',Helvetica] font-semibold text-[#b8a9ff] text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              {person?.initials}
            </div>
          </div>
          {/* width based on name length */}
          <div
            className={`w-[${
              person?.name.length * 8
            }px] absolute h-[31px] top-[6px] left-[70px]`}>
            <div className="absolute top-0 left-0 [font-family:'Metropolis-SemiBold',Helvetica] font-semibold text-[#00156a] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              {person?.name}
            </div>
            <p className="absolute top-[22px] left-0 [font-family:'Metropolis-Bold',Helvetica] font-normal text-transparent text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
              <span className='font-bold text-[#5630ff]'>{person?.totalLeads}</span>
              <span className="[font-family:'Metropolis-Medium',Helvetica] font-medium text-[#9aa1b1]">
                {' '}
                of leads
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Profiles;
