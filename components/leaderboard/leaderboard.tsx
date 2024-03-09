'use client';
import { leaderBoard } from './database';
import Profiles from '@/components/leaderboard/profiles';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { DashboardService } from '@/services/dashboard-services';
import { LEADERBOARD_ITEMS } from '@/utils/constants/common-constants';
import Loader from '../loader';
import Image from 'next/image';
import noDataImage from '@/assets/images/no-data-image.png';

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
      } catch (error) {}
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='bg-white rounded-xl w-full h-[calc(100vh-90px)] lg:w-[27%]'>
      <h2 className='font-bold text-[#2b3674] xl:text-[16px] text-[14px] leading-[normal] whitespace-nowrap p-5'>
        Leaderboard
      </h2>
      {isLoading ? (
        <Loader size='100' />
      ) : !!leaderboard?.Data?.length ? (
        <Profiles data={leaderboard.Data} />
      ) : (
        <div className='h-[calc(100vh-160px)] flex justify-center items-center'>
          <Image
            src={noDataImage}
            alt='no-data-image'
            className='w-[200px] 2xl:w-[250px]'
          />
        </div>
      )}
    </div>
  );
};
export default Leaderboard;
