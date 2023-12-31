import { apiBase } from '@/lib/redux/api-base';

export const authApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    postList: builder.query<any, any>({
      query: () => ({
        url: '/posts/test',
        method: 'GET',
        useAuth: true,
      }),
    }),
  }),
});

export const { usePostListQuery } = authApi;
