import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCTS_SLICE_NAME } from './models';
import {
    IGetIProductByIdResponse,
    IGetProductByIdDTO,
    IGetProductsDTO,
    IGetProductsResponse
} from '../../../models/products.model';
import ProductAPI from "../../../api/ProductAPI";

export const getProducts = createAsyncThunk<IGetProductsResponse,
    IGetProductsDTO>(
    `${PRODUCTS_SLICE_NAME}/getProducts`,
    async (data: IGetProductsDTO) => {
        const response = await ProductAPI.getProducts(data);

        return response.data;
    }
);

export const getProductById = createAsyncThunk<IGetIProductByIdResponse,
    IGetProductByIdDTO>(
    `${PRODUCTS_SLICE_NAME}/getProductById`,
    async (data: IGetProductByIdDTO) => {
        const response = await ProductAPI.getProductById(data);

        return response.data;
    },
);

export const filterProducts = createAsyncThunk<IGetProductsResponse, Record<any, any>>(
    `${PRODUCTS_SLICE_NAME}/filterProducts`,
    async (filters: Record<any, any>) => {
        const response = await ProductAPI.filterProducts(filters);

        return response.data;
    }
);
