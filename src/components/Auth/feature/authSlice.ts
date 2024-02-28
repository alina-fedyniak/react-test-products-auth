import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, AuthState, initialState} from './models';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<{status: boolean}>) => {
      state.isAuthorised = action.payload.status;
    },
    logOut: () => {
      localStorage.removeItem('isAuthorised');
    }
  }
});

export  const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;
