/* Instruments */
import authSliceReducer from './slices/auth-slices';
import { apiBase } from './api-base';
import AuthSliceReducer from './slices/auth-slice-reducer';

export const reducer = {
  [apiBase.reducerPath]: apiBase.reducer,
  auth: authSliceReducer,
  authenticate: AuthSliceReducer,
};
