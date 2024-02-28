import { createSelector } from '@reduxjs/toolkit';
import { AuthState, AUTH_SLICE_NAME } from './models';
import { RootState } from '../../../store/store';

const AuthSelector = (state: RootState): AuthState => state[AUTH_SLICE_NAME];

export const selectIsAuthorised = createSelector(
    AuthSelector,
    (login: AuthState) => login.isAuthorised,
);