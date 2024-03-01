import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
    PayloadAction,
} from '@reduxjs/toolkit';
import { initialState, PRODUCTS_SLICE_NAME, ProductsState } from './models';
import {
    getProducts,
    getProductById, filterProducts,
} from './actionCreators';

export const productsSlice = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isFulfilled(getProducts), (state: ProductsState, action: any) => {
                const {payload} = action;
                state.productsList =
                     state.productsList
                        ? [...state.productsList, ...payload.data]
                        : payload.data;
                state.pagination.to += state.pagination.per_page;
                state.pagination.last_page = payload.last_page;
            })
            .addMatcher(
                isFulfilled(filterProducts),
                (state: ProductsState, action: PayloadAction<any>) => {
                    const { payload } = action;
                    state.productsList = payload.data;
                }
            )
            .addMatcher(isFulfilled(getProductById), (state: ProductsState, action) => {
                const {payload} = action;
                // @ts-ignore
                state.productsById = payload;
            })
            .addMatcher(
                isPending(
                    getProducts,
                    getProductById,
                ),
                (state: ProductsState) => {},
            )
            .addMatcher(
                isRejected(
                    getProducts,
                    getProductById,
                ),
                (state: ProductsState) => {},
            );
    },
});

export default productsSlice.reducer;
