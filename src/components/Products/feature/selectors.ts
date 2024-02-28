import { createSelector } from '@reduxjs/toolkit';
import { ProductsState, PRODUCTS_SLICE_NAME } from './models';
import { RootState } from '../../../store/store';

const ProductsSelector = (state: RootState): ProductsState => state[PRODUCTS_SLICE_NAME];

export const selectProducts = createSelector(
    ProductsSelector,
  (productsList: ProductsState) => productsList.productsList,
);

export const selectProductById = createSelector(
    ProductsSelector,
  (productsById: ProductsState) => productsById.productsById,
);

export const selectProductsPagination = createSelector(
    ProductsSelector,
  (productsList: ProductsState) => productsList.pagination,
);
