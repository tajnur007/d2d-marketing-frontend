'use client';
import { leaderBoard } from './database';
import Profiles from '@/components/leaderboard/profiles';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { DashboardService } from '@/services/dashboard-services';
import { LEADERBOARD_ITEMS } from '@/utils/constants/common-constants';
import Loader from '../loader';

leaderBoard.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

const Leaderboard: React.FC = () => {
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  //@ts-ignore den
  const token: string = data?.user?.access_token;

  const [leaderboard, setLeaderboard] = useState(LEADERBOARD_ITEMS);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DashboardServices = new DashboardService();
        const response = await DashboardServices.leaderboard(token);
        setLeaderboard(response.data.Data);
        setIsLoading(false);
      } catch (error) {
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='bg-white rounded-xl w-full h-[calc(100vh-102px)] lg:w-[27%]'>
      <div className='sticky top-0 bg-white z-10 rounded-xl'>
        <h2 className='font-bold text-[#2b3674] xl:text-[16px] text-[14px] tracking-[-0.32px] leading-[normal] whitespace-nowrap p-5'>
          Leaderboard
        </h2>
      </div>
      {isLoading ? (
        <Loader size='100' />
      ) : leaderboard?.Data ? (
        <Profiles data={leaderboard.Data} />
      ) : (
        <p className='ml-5'>No Data Found</p>
      )}
    </div>
  );
};
export default Leaderboard;
