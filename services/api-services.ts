import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient } from './axios-base-query';

export class ApiService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  public createUser = async (data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.CreateUser,
      method: API_METHODS.POST,
      ...config,
      data,
    });

    return resp;
  };

  // public showDashboardInfo = async (data: any, token: string): Promise<any> => {
  //   const config: AxiosRequestConfig = {};
  //   if (token) {
  //     config.headers = { Authorization: `Bearer ${token}` };
  //   }
  //   const resp = await this.client.request({
  //     url: API_PATHS.DashboardInfo,
  //     method: API_METHODS.GET,
  //     ...config,
  //     data,
  //   });
  //   return resp;
  // };

}
