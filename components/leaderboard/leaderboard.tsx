'use client';
import { leaderBoard } from './database';
import Profiles from '@/components/leaderboard/profiles';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ApiService } from '@/services/api-services';
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
        const DashboardServices = new ApiService();
        const response = await DashboardServices.leaderboard(token);
        setLeaderboard(response.data.Data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='bg-white rounded-2xl w-full h-[calc(100vh-102px)] lg:w-[27%]'>
      <h2 className='font-bold text-[#2b3674] text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap p-5'>
        Leaderboard
      </h2>
      {isLoading ? (
        <Loader />
      ) : leaderboard?.Data ? (
        <Profiles data={leaderboard.Data} />
      ) : (
        <p className='ml-5'>No Data Found</p>
      )}
    </div>
  );
};
export default Leaderboard;
