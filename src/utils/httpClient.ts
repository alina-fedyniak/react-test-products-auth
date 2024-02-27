import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {
  API_URL,
} from '../constants/common';

const defaultConfigs: AxiosRequestConfig = {
  baseURL: API_URL,
};

class HttpClient<TClient extends AxiosInstance> {
  private readonly client;

  get;
  post;
  put;
  patch;
  delete;

  constructor(client: TClient) {
    this.client = client;

    this.get = this.client.get.bind(this);
    this.post = this.client.post.bind(this);
    this.put = this.client.put.bind(this);
    this.patch = this.client.patch.bind(this);
    this.delete = this.client.delete.bind(this);
  }
}

const defaultClient = axios.create(defaultConfigs);

export default new HttpClient(defaultClient);

export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;
