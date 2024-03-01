import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAppState} from '../store/hooks';
import {selectIsAuthorised} from '../components/Auth';
import {appCookiesStorage} from "../utils";
import {AUTHORIZATION_ACCESS_TOKEN} from "../constants/common";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isLogin = useAppState(selectIsAuthorised);
    const isAuthorised = appCookiesStorage.getItem(AUTHORIZATION_ACCESS_TOKEN);

    if (!isAuthorised && !isLogin) {
        return  <Navigate to='/' />;
    }
    return children;
};
