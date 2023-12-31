import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@/services/axios-base-query';

export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['users', 'auth'],
  endpoints: (builder) => ({}),
});
