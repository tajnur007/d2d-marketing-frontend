import { apiBase } from '@/lib/redux/api-base';

export const authApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useRegisterMutation } = authApi;
