import { AUTHORIZATION_ACCESS_TOKEN } from '../constants/common';
import {User} from "../components/Auth/feature/models";

export enum AuthEndpoints {
  LOGIN = '/api/auth/login',
}

export interface IAuthorizedRequestDTO {
  [AUTHORIZATION_ACCESS_TOKEN]?: string;
}

export type IGetUserDataDTO = IAuthorizedRequestDTO;

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IAuthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
}

