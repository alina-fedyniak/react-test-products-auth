import { combineReducers } from '@reduxjs/toolkit';
import {PRODUCTS_SLICE_NAME, productsSlice} from "../components/Products";
import {AUTH_SLICE_NAME, authSlice} from "../components/Auth";

export const rootReducer = combineReducers({
    [PRODUCTS_SLICE_NAME]: productsSlice,
    [AUTH_SLICE_NAME]: authSlice,
});
