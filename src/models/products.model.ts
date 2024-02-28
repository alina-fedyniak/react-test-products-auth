import {IPaginationDTO} from './pagination.model';

export enum ProductByIdEndpoints {
  ROOT = '/api/products',
}
export const getProductByIdEndpoints = ({ id }: { id: number }) => ({
  GET_BY_ID: `${ProductByIdEndpoints.ROOT}/${id}`,
});

export enum ProductsEndpoints {
  ROOT = '/api/products',
}

export const staticProductsEndpoints = {
  GET_PRODUCTS: `${ProductsEndpoints.ROOT}`,
};

export interface IProducts {
  id: number;
  title: string;
  body: string;
  price: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

export interface IGetProductsDTO extends IPaginationDTO{
  per_page?: number
  to?: number;
}

export interface IGetProductByIdDTO{
  id: number;
}

export interface IGetProductsResponse {
  products: IProducts[];
  total: number;
  to: number;
  per_page: number;
}

export interface IGetIProductByIdResponse {
  product: IProducts;
}
