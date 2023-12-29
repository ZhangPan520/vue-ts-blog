import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface InterCeptorsHook<T = AxiosRequestConfig> {
  requestSuccess?: (config: T) => T;
  requestError?: (error: any) => any;
  responseSuccess?: (response: AxiosResponse) => AxiosResponse;
  responseError?: (error: any) => any;
}

export interface HookAxiosRequestConfig<T = AxiosRequestConfig> extends AxiosRequestConfig {
  interceptors?: InterCeptorsHook<T>;
}
