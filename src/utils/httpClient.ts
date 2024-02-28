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
  headers: {
      'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kdW1teS1hcGkuZDAuYWNvbS5jbG91ZFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcwOTE0MzEwOSwiZXhwIjoxNzA5MTQ2NzA5LCJuYmYiOjE3MDkxNDMxMDksImp0aSI6ImNyQ0MzMDJtbnB6bVhjRnMiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.g7Xf7eykeNe-sy3oS8_onUq3UDRkrt8sDX5zvolIVhQ'
  }
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

let isRefreshing = false;
let refreshSubscribers: Function[] = [];

defaultClient.interceptors.request.use(
    (config) => {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push(() => {
            config.headers.Authorization = `bearer ${getNewToken()}`;
            resolve(config);
          });
        });
      }

      if (shouldRefreshToken()) {
        isRefreshing = true;
        return refreshToken().then((newToken) => {
          isRefreshing = false;
          onRefreshed(newToken);
          return config;
        });
      }

      return config;
    },
    (error) => Promise.reject(error)
);

const getNewToken = (): string => 'new_token';

const shouldRefreshToken = (): boolean => true;

const refreshToken = (): Promise<string> => Promise.resolve('new_token');

// const refreshToken = (): Promise<string> => {
//     return axios.post(API_URL+'api/auth/refresh')
//         .then(response => {
//             const newToken = response.data.access_token;
//             return newToken;
//         })
//         .catch(error => {
//             console.error('Failed to refresh token:', error);
//             throw error;
//         });
// };

const onRefreshed = (newToken: string) => {
  refreshSubscribers.forEach((callback) => callback());
  refreshSubscribers = [];
};

export default new HttpClient(defaultClient);

export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;
