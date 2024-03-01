import { httpClient, ApiResponse } from '../utils';
import {
  getProductByIdEndpoints,
  IGetIProductByIdResponse,
  IGetProductByIdDTO,
  IGetProductsDTO, IGetProductsResponse, staticProductsEndpoints,
} from '../models/products.model';

class ProductAPI {
  static getProducts(
      data: IGetProductsDTO,
  ): ApiResponse<IGetProductsResponse> {
    const { GET_PRODUCTS } = staticProductsEndpoints;

    return httpClient.get<IGetProductsResponse>(GET_PRODUCTS, {params: data});
  }

  static getProductById({
      id,
      ...params
    }: IGetProductByIdDTO): ApiResponse<IGetIProductByIdResponse> {
    const { GET_BY_ID } = getProductByIdEndpoints({ id });

    return httpClient.get<IGetIProductByIdResponse>(GET_BY_ID, { params });
  }

  static filterProducts(
      filters: Record<any, any>,
  ): ApiResponse<IGetProductsResponse> {
    const { FILTER_PRODUCTS } = staticProductsEndpoints;
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      params.append(key, value);
    }

    return httpClient.get<IGetProductsResponse>(FILTER_PRODUCTS, {params});
  }

}
export default ProductAPI;
