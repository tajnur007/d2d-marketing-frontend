import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient } from './axios-base-query';

export class DashboardService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  //* Service to get dashboard info
  public dashboardInfo = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.DashboardInfo,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to get leaderboard data
  public leaderboard = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.Leaderboard,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };
}
