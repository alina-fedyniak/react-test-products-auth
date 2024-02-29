import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {
    API_URL, AUTHORIZATION_ACCESS_TOKEN,
} from '../constants/common';
import {appCookiesStorage} from "./index";

const defaultConfigs: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
      'Authorization': `bearer ${appCookiesStorage.getItem(AUTHORIZATION_ACCESS_TOKEN)}`
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

defaultClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const accessToken = appCookiesStorage.getItem(AUTHORIZATION_ACCESS_TOKEN);
                if (!accessToken) return;
                const response = await axios.post('/api/auth/refresh', undefined, {headers:  {'Authorization': 'bearer ' + accessToken}});
                const { access_token } = response.data;

                appCookiesStorage.setItem(AUTHORIZATION_ACCESS_TOKEN, access_token);

                originalRequest.headers.Authorization = `Bearer ${access_token}`;
                return axios(originalRequest);
            } catch (error) {
            }
        }

        return Promise.reject(error);
    }
);

defaultClient.interceptors.request.use(
    (request) => {
        request.headers.Authorization = `Bearer ${appCookiesStorage.getItem(AUTHORIZATION_ACCESS_TOKEN)}` ;
        return request;
},

);

export default new HttpClient(defaultClient);

export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;
