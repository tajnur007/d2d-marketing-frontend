import { AxiosRequestConfig } from 'axios';
import { HttpClient, Response } from './axios-base-query';
import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';

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

  public resetPassword = async (data: any) => {
      const resp: Response<any> = await this.client.request({
      url: '/user/forget-password',
      method: 'post',
      data: data,
    });

    return resp;
  };
}
