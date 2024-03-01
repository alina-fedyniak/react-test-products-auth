import {
  createSlice,
  isFulfilled
} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, AuthState, initialState} from './models';
import {loginUser} from "./actionCreators";
import {AUTHORIZATION_ACCESS_TOKEN_EXPIRES, AUTHORIZATION_ACCESS_TOKEN} from "../../../constants/common";
import { appCookiesStorage } from '../../../utils';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addMatcher(
            isFulfilled(loginUser),
            (state: AuthState, action) => {
              const { payload } = action;

              if (!payload.access_token) {
                return;
              }
              state.authData =payload;

              appCookiesStorage.setItem(
                  AUTHORIZATION_ACCESS_TOKEN,
                  payload.access_token,
                  { expires: AUTHORIZATION_ACCESS_TOKEN_EXPIRES },
              );
                state.isAuthorised = true;
            },
        )
  }
});

export default authSlice.reducer;
