'use client';
import LatestLeadRow from '@/components/latest-lead-row';
import ViewAllLeadsButton from '../view-all-leads-button';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { LeadService } from '@/services/lead-services';
import { LATEST_LEADS_ITEMS } from '@/utils/constants/common-constants';
import Loader from '../loader';

const LatestLeadsList: React.FC = () => {
  const { data } = useSession();
  //@ts-ignore den
  const token: string = data?.user?.access_token;

  const [latestLeads, setLatestLeads] = useState(LATEST_LEADS_ITEMS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const LeadServices = new LeadService();
        const response = await LeadServices.latestLeads(token);
        setLatestLeads(response?.data?.Data);
        setIsLoading(false);
      } catch (error) {
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='w-full bg-white rounded-xl h-[calc(85vh-125px)] pb-6'>
      <div className='sticky top-0 bg-white z-10 p-6 rounded-xl'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <p className='font-bold xl:text-[16px] text-[14px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
              Latest Leads
            </p>
            <p className='flex items-center justify-center text-black  font-semibold text-capitalize text-[16px] h-6 bg-[#D2FBE7] rounded-full ms-2 p-2 leading-3 tracking-[-0.32px] whitespace-nowrap'>
              {latestLeads?.Count}
            </p>
          </div>
          <div>{latestLeads?.Count === 0 ? '' : <ViewAllLeadsButton />}</div>
        </div>
      </div>
      {isLoading ? (
        <Loader size='100' />
      ) : (
        <div className='w-full h-[calc(100%-88px)] overflow-y-auto tiny-scrollbar pl-6 whitespace-nowrap font-semibold xl:text-[18px] text-[16px] leading-[normal]'>
          {latestLeads?.Data?.map((item, index) => (
            <LatestLeadRow key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestLeadsList;
