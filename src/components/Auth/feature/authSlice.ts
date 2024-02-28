import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, AuthData, AuthState, initialState} from './models';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<AuthData>) => {
      state.isAuthorised = true;
      state.authData = action.payload;
    },
    logOut: (state) => {
      state.isAuthorised = false;
      state.authData = null;
    }
  }
});

export  const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;
