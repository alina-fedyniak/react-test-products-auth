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

}
export default ProductAPI;
