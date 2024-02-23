import { setSession } from '@/lib/redux/slices/auth-slice-reducer';
import { ReduxState } from '@/lib/redux/store';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { resetStateAction } from '@/lib/redux/global-actions';
import { ensureTrailingSlash } from '@/utils/helpers/common-helpers';

const MAX_RETRIES = 3;

export type Response<T> = {
  status?: number;
  data: T;
  error?: {
    status: number;
    data: string;
  };
};

export class HttpClient {
  private client: AxiosInstance;
  //  @ts-ignore
  constructor(baseUrl: string = typeof window === 'undefined' ? '' : 'api/proxy') {
    this.client = axios.create({
      baseURL:
        ensureTrailingSlash(
          typeof window !== 'undefined'
            ? window.location.origin
            : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`
        ) + baseUrl,
    });

    // @ts-ignore
    this.client.interceptors.request.use(async (config: AxiosRequestConfig) => {
      // add auth header with jwt if account is logged in and request is to the api url
      // @ts-ignore
      const account = config?.session;
      if (account?.user) {
        config.headers = {
          Authorization: `Bearer ${account?.user?.accessToken}`,
        };
      }
      return config;
    });
  }

  public useResponseInterceptor = (
    success:
      | ((
          value: AxiosResponse<any, any>
        ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)
      | undefined,
    reject?: ((error: any) => any) | undefined
  ) => {
    return this.client.interceptors.response.use(success, reject);
  };

  async request(config: AxiosRequestConfig<any> = {}): Promise<Response<any>> {
    return new Promise((resolve, reject) => {
      this.client
        .request(config)
        .then((resp) => resolve(resp))
        .catch((resp: Response<any>) => {
          reject(resp);
        });
    });
  }
}

const axiosBaseQuery =
  (
    { baseUrl, useAuth: useGlobalAuth }: { baseUrl: string; useAuth?: boolean } = {
      baseUrl: '',
    }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      // headers: { 'x-org-domain': 'vikings' };
      data?: AxiosRequestConfig['data'];
      // @ts-ignore
      useAuth?: AxiosRequestConfig['useAuth'];
      onUploadProgress?: AxiosRequestConfig['onUploadProgress'];
    },
    Response<any>,
    unknown
  > =>
  async ({ url, method, data, useAuth, onUploadProgress }, { getState, dispatch }) => {
    const client = new HttpClient();
    let retries: number = 0;
    const fetch = async (session?: Session | null): Promise<Response<any>> => {
      try {
        const result = await client.request({
          url: baseUrl + url,
          method,
          data,
          // @ts-ignore
          session,
          onUploadProgress: onUploadProgress,
        });
        return { data: result.data };
      } catch (error) {
        let err = error as Response<any>;
        return err;
      }
    };

    client.useResponseInterceptor(
      (response) => response,
      async (err) => {
        if (err?.response?.status === 401) {
          if (retries >= MAX_RETRIES) {
            return Promise.reject('Maximum retries reached. ' + err.message);
          }
          const session = await getSession();
          if (session) {
            dispatch(setSession(session));
            retries++;
            const resp = await fetch(session);
            if (!resp.error) {
              return Promise.resolve(resp);
            }
            return Promise.reject(resp);
          } else {
            dispatch(resetStateAction());
            signOut({
              callbackUrl: `${baseUrl}/auth/login?reason=session_expired`,
            });
          }
        }

        return Promise.reject({
          error: { status: err.response?.status, data: err.response?.data },
        });
      }
    );

    const state: any = getState() as ReduxState;
    let session = state.auth.session;

    if ((useGlobalAuth || useAuth) && !session) {
      session = await getSession();
      if (session) {
        dispatch(setSession(session));
      }
    }
    return await fetch(session);
  };

export default axiosBaseQuery;
