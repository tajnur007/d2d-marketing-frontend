'use client';
import { GRAPH_CONFIG } from '@/utils/constants/graph-constants';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { API_PATHS } from '@/utils/constants/common-constants';
import axios from 'axios';
import GraphCard from '../graph-card';

const GraphList: React.FC = () => {
  const { data } = useSession();
  //@ts-ignore den
  const token: string = data?.user?.access_token;
  const [dashboardInfo, setDashboardInfo] = useState({
    total_leads: 0,
    hot_leads: 0,
    warm_leads: 0,
    cold_leads: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://157.245.204.196:8021/v1${API_PATHS.DashboardInfo}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDashboardInfo(response.data.Data);
      } catch (error) {
        console.error('Error fetching dashboard info:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-between gap-[1.1rem] mb-6 lg:h-[15vh]'>
      <GraphCard graphConfig={GRAPH_CONFIG.TotalLeads} data={dashboardInfo.total_leads} />
      <GraphCard graphConfig={GRAPH_CONFIG.HotDeals} data={dashboardInfo.hot_leads} />
      <GraphCard graphConfig={GRAPH_CONFIG.WarmDeals} data={dashboardInfo.warm_leads} />
    </div>
  );
};

export default GraphList;
