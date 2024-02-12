import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient } from './axios-base-query';

export class ReminderService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  //* Service to create reminder
  public createReminder = async (data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.CreateReminder,
      method: API_METHODS.POST,
      ...config,
      data,
    });

    return resp;
  };

  //* Service to get all reminders data
  public getAllRemindersData = async (token: string, setRemainders: any) => {
    const res = await this.getAllReminder(token);
    setRemainders(res?.data?.Data?.Data);
  };

  //* Service to get list of all reminder
  public getAllReminder = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.GetAllReminder,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to delete reminder
  public deleteReminder = async (reminder_id: number, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.DeleteReminder}?reminder_id=${reminder_id}`,
      method: API_METHODS.DELETE,
      ...config,
    });

    return resp;
  };

  //* Service to update reminder
  public updateRemainder = async (
    reminder_id: number,
    data: any,
    token: string
  ): Promise<any> => {
    const config: AxiosRequestConfig = {};
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    const resp = await this.client.request({
      url: `${API_PATHS.UpdateRemainder}?reminder_id=${reminder_id}`,
      method: API_METHODS.PATCH,
      ...config,
      data,
    });
    return resp;
  };
}
