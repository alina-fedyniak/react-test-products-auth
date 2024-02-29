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
    getProductById,
} from './actionCreators';

export const productsSlice = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  reducers: {
      filterPosts: (state, action: PayloadAction<string>) => {
          let filterResult = [] as any;
          state.productsList?.forEach((item) => {
              if (item.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1) {
                  filterResult.push(item);
                  return;
              }
          });

          state.productsList = filterResult;
      }
  },
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

export const {filterPosts} = productsSlice.actions;
export default productsSlice.reducer;
