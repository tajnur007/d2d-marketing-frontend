import { AxiosRequestConfig } from 'axios';
import { HttpClient, Response } from './axios-base-query';

/**
 * AuthService is used to call login and logout endpoints from the NextAuth API routes.
 */
export class AuthService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  public login = async (data: any) => {
    const resp: Response<any> = await this.client.request({
      url: 'auth/login',
      method: 'post',
      data: data,
    });

    return resp.data;
  };

  public logout = async (token: string): Promise<any> => {
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
}
