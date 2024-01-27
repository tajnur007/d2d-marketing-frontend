import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient, Response } from './axios-base-query';

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

  public getManagerList = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.GetManagerList,
      method: API_METHODS.GET,
      ...config,
      data: {},
    });

    return resp;
  };
  public createLead = async (data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.CreateLead,
      method: API_METHODS.POST,
      ...config,
      data,
    });

    return resp;
  };
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
  

  public resetPassword = async (data: any) => {
    const resp: Response<any> = await this.client.request({
      url: '/user/forget-password',
      method: 'post',
      data: data,
    });

    return resp;
  };

  public latestLeads = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.LatestLeads,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

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
