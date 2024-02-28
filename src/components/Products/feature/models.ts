import {IProducts} from '../../../models/products.model';

export const PRODUCTS_SLICE_NAME = 'products';

export interface ProductsState {
  productsList: IProducts[] | null;
  productsById: IProducts | null;
  pagination: {
    total: number;
    to: number;
    per_page: number;
  };
}

export const initialState: ProductsState = {
  productsList: null,
  productsById: null,
  pagination: {
    total: 0,
    to: 6,
    per_page: 0
  }
};
