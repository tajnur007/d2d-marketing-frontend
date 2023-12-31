import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { HYDRATE } from 'next-redux-wrapper';

export interface AuthState {
  session: Session | null,
}

export const initState = (): AuthState => {
  return {
    session: null
  };
};

const authSlice = createSlice({
  name:'authenticate',
  initialState: initState(),
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload['authenticate'],
      };
    })
  },
  reducers: {
    resetAuth(state) {
      Object.assign(state, initState());
    },
    setSession(state, action: PayloadAction<Session | null>) {
      state.session = action.payload;
    },
  }
});

export const { resetAuth, setSession } = authSlice.actions;

export type AuthSliceReducer = typeof authSlice.reducer;

export default authSlice.reducer;

export const getAndSetSession:any = (context:any) => async (dispatch:any) => {
  dispatch(setSession(await getSession(context)));
};
