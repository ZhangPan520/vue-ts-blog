import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { HookAxiosRequestConfig } from './type';

class Service {
  public readonly instance: AxiosInstance;
  constructor(config: HookAxiosRequestConfig<InternalAxiosRequestConfig>) {
    this.instance = axios.create(config);
    this.setInterCepTors(config);
  }
  setInterCepTors(config: HookAxiosRequestConfig<InternalAxiosRequestConfig>) {
    // 做一些通用请求的拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //做一下通用的返回拦截
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 拦截器的执行顺序通过打印来看，是后定义的拦截器先执行，同时对于在拦截器中对config，相同值的修改，只有第一个拦截器会生效
    // 通过Service实例传参数做一些拦截
    this.instance.interceptors.request.use(config.interceptors?.requestSuccess);
    this.instance.interceptors.response.use(config.interceptors?.responseSuccess, config.interceptors?.responseError);
  }
  request<T = any>(config: HookAxiosRequestConfig<AxiosRequestConfig, T>) {
    if (config.interceptors?.requestSuccess) {
      // 对config的修改
      config = config.interceptors.requestSuccess(config);
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccess) {
            // 针对某个请求的数据处理
            res = config.interceptors.responseSuccess(res);
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T = any>(config: HookAxiosRequestConfig<AxiosRequestConfig, T>) {
    return this.request<T>({ ...config, method: 'get' });
  }
}

export default Service;
