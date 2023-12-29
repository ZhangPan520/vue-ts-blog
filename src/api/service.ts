import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const { baseURL, timeout } = process.env.axios;

class Service {
  public readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({ baseURL, timeout });
    this.setInterCepTors();
  }
  setInterCepTors() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        throw new Error(error);
      }
    );

    this.instance.interceptors.response.use((response) => {
      return response;
    });
  }
  request<T = any>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T = any>(config: AxiosRequestConfig) {
    this.request<T>({ ...config, method: 'get' });
  }
}

export default Service;
