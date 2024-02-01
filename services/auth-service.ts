import { AxiosRequestConfig } from 'axios';
import { HttpClient, Response } from './axios-base-query';
import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';

/**
 * AuthService is used to call login and logout endpoints from the NextAuth API routes.
 */
export class AuthService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  public signup = async (data: any) => {
    const resp: Response<any> = await this.client.request({
      url: API_PATHS.Signup,
      method: API_METHODS.POST,
      data,
    });

    return resp.data;
  };

  public login = async (data: any) => {
    const resp: Response<any> = await this.client.request({
      url: 'auth/login',
      method: 'post',
      data: data,
    });

    return resp.data;
  };

  public logout = async (token: string): Promise<any> => {
    console.log(token);
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: 'users/log_out',
      method: 'get',
      ...config,
      data: {},
    });

    return resp;
  };

  public forgetPassword = async (data: any) => {
    const resp: Response<any> = await this.client.request({
      url: '/user/forget-password',
      method: 'post',
      data: data,
    });

    return resp;
  };

  public resetPassword = async (token: string, company_id: number, data: any) => {
    const resp: Response<any> = await this.client.request({
      url: `/user/reset-password?token=${token}&company_id=${company_id}`,
      method: API_METHODS.POST,
      data: data,
    });

    return resp;
  };
}
