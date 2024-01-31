'use client';
import LatestLeadRow from '@/components/latest-lead-row';
import ViewAllLeadsButton from '../view-all-leads-button';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ApiService } from '@/services/api-services';
import { LATEST_LEADS_ITEMS } from '@/utils/constants/common-constants';

const LatestLeadsList: React.FC = () => {
  const { data } = useSession();
  //@ts-ignore den
  const token: string = data?.user?.access_token;

  const [latestLeads, setLatestLeads] = useState(LATEST_LEADS_ITEMS);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DashboardServices = new ApiService();
        const response = await DashboardServices.latestLeads(token);
        setLatestLeads(response.data.Data);
      } catch (error) {
        console.error('Error fetching latest leads:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='w-full bg-white py-5 rounded-xl h-[calc(85vh-125px)] '>
      <div className='flex justify-between items-center'>
        <div className='flex items-center pl-6'>
          <p className='font-bold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]'>
            Latest Leads
          </p>

          <p className='flex items-center justify-center text-black  font-semibold text-capitalize text-[16px] h-6 bg-[#D2FBE7] rounded-full ms-2 p-2 leading-3 tracking-[-0.32px] whitespace-nowrap  '>
            {latestLeads?.Count}
          </p>
        </div>
        <div>
          <ViewAllLeadsButton />
        </div>
      </div>

      <div className='w-full h-[calc(100%-40px)] pl-6 overflow-y-auto tiny-scrollbar overflow-x-hidden whitespace-nowrap font-semibold text-[18px] leading-[normal]'>
        {latestLeads?.Data?.map((item, index) => (
          <LatestLeadRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestLeadsList;
