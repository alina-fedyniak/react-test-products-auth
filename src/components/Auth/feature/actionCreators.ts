import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './models';
import AuthAPI from "../../../api/AuthAPI";
import {IAuthResponse, ILoginDTO} from "../../../models/auth.model";

export const loginUser = createAsyncThunk<
    IAuthResponse,
    ILoginDTO
    >(
    `${AUTH_SLICE_NAME}/login`,
    async (data: ILoginDTO) => {
        const response = await AuthAPI.login(data);
        return response.data;
    }
);