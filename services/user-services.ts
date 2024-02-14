import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient } from './axios-base-query';

export class UserService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  //* Service to get executives
  public getExecutives = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    const resp = await this.client.request({
      url: API_PATHS.GetExecutives,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to create select data
  public createSelectData = (items: any): any => {
    const selectOptions: any = [];
    items.map((item: any) => {
      const newItem = { ...item, value: item.name, label: item.name };
      selectOptions.push(newItem);
    });
    return selectOptions;
  };

  //* Service to get executives data
  public getExecutivesData = async (setExecutivesOption: any, token: string) => {
    try {
      const response = await this.getExecutives(token);
      const executivesOption = this.createSelectData(response.data.Data.Data);
      setExecutivesOption(executivesOption);
    } catch (error) {
      console.error('Error fetching executives:', error);
    }
  };

  //* Service to create new user
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

  //* Service to get manager list
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

  //* Service to get user info
  public getUserInfo = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.GetUserInfo,
      method: API_METHODS.GET,
      ...config,
      data: {},
    });

    return resp;
  };

  //* Service to get employee list
  public EmployeeListInfo = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.EmployeeListInfo,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to delete a user
  public deleteUser = async (id: number, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `/user/delete?user_id=${id}`,
      method: API_METHODS.DELETE,
      ...config,
    });

    return resp;
  };

  //* Service to update employee info
  public updateEmployeeInfo = async (
    user_id: number,
    data: any,
    token: string
  ): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.UpdateEmployeeInfo}?user_id=${user_id}`,
      method: API_METHODS.PATCH,
      ...config,
      data,
    });

    return resp;
  };

  //* Service to change password
  public changePassword = async (
    oldPassword: any,
    newPassword: any,
    token: string
  ): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const payload = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    const resp = await this.client.request({
      url: API_PATHS.ChangePassword,
      method: API_METHODS.POST,
      ...config,
      data: payload,
    });

    return resp;
  };
}
