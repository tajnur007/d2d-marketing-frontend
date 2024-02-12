import { API_METHODS, API_PATHS } from '@/utils/constants/common-constants';
import { AxiosRequestConfig } from 'axios';
import { HttpClient } from './axios-base-query';

export class LeadService {
  client;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  //* Service to get all lead data
  public getLeads = async (token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.GetLeads,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to get leads data
  public getLeadsData = async (
    setLeadsData: any,
    token: string,
    setIsLoading: (item: boolean) => void
  ) => {
    try {
      const response = await this.getLeads(token);
      // console.log(response);

      const data = response.data.Data;
      setLeadsData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  //* Service to upload lead images
  public UploadLeadImage = async (data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: API_PATHS.UploadLeadImage,
      method: API_METHODS.POST,
      ...config,
      data,
    });

    return resp;
  };

  //* Service to create lead
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

  //* Service to delete lead
  public deleteLead = async (lead_id: number, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.DeleteLead}?lead_id=${lead_id}`,
      method: API_METHODS.DELETE,
      ...config,
    });

    return resp;
  };

  //* Service to get data of whom who created the lead
  public getCreatedByData = async (setCreatedByOptions: any, token: string) => {
    try {
      const response = await this.getLeads(token);
      console.log(response);
      const data =  response?.data?.Data.Data;
      const uniqueCreatedByValues: any[] = [];
      const encounteredValues = new Set<string>();

      data?.map((item: any) => {
        const createdBy = item.created_by;
        if (createdBy && !encounteredValues.has(createdBy)) {
          encounteredValues.add(createdBy);
          const newItem = { ...item, value: item?.created_by, label: item?.created_by };
          uniqueCreatedByValues.push(newItem);
        }
      });
      setCreatedByOptions(uniqueCreatedByValues);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  //* Service to get single lead data
  public getUserLead = async (user_id: number, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.LeadView}?lead_id=${user_id}`,
      method: API_METHODS.GET,
      ...config,
    });

    return resp;
  };

  //* Service to update lead data
  public updateLead = async (lead_id: number, data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.UpdateLead}?lead_id=${lead_id}`,
      method: API_METHODS.PATCH,
      ...config,
      data,
    });

    return resp;
  };

  //* Service to filter leads data
  public FilteredLeadsData = async (data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    const resp = await this.client.request({
      url: API_PATHS.FilterLeads,
      method: API_METHODS.GET,
      ...config,
      data,
    });
    return resp;
  };

  //* Service to get filtered leads
  public getFilteredLeadsData = async (
    setLeadsData: any,
    setIsLoading: (item: boolean) => void,
    data: any,
    token: string
  ): Promise<any> => {
    try {
      setIsLoading(true);
      const response = await this.FilteredLeadsData(data, token);
      const filteredLeads = response?.data?.Data;
      console.log(filteredLeads);
      setLeadsData(filteredLeads);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  //* Service to get latest leads
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

  //* Service to transfer leads
  public transferLead = async (lead_id: number, data: any, token: string): Promise<any> => {
    const config: AxiosRequestConfig = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const resp = await this.client.request({
      url: `${API_PATHS.UpdateLead}?lead_id=${lead_id}`,
      method: API_METHODS.PATCH,
      ...config,
      data,
    });

    return resp;
  };
}
