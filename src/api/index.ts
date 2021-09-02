import axios, {AxiosRequestConfig} from 'axios';
import {baseUrl} from '../constains/api';
import {store} from '../store/store';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};
export const httpClient = axios.create(config);

httpClient.interceptors.request.use(config => {
  const token = store.getState().user.token;
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
