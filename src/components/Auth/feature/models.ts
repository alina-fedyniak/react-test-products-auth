import {appCookiesStorage} from "../../../utils";
import {AUTHORIZATION_ACCESS_TOKEN} from "../../../constants/common";

export const AUTH_SLICE_NAME = 'auth';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthData {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: User;
}

export interface AuthState {
  isAuthorised: boolean;
  authData: AuthData | null;
}

export const initialState: AuthState = {
  isAuthorised: !!appCookiesStorage.getItem(AUTHORIZATION_ACCESS_TOKEN),
  authData: null,
};
