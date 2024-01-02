import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface InterCeptorsHook<T = AxiosRequestConfig, R = AxiosResponse> {
  requestSuccess?: (config: T) => T;
  requestError?: (error: any) => any;
  responseSuccess?: (response: R) => R;
  responseError?: (error: any) => any;
}

export interface HookAxiosRequestConfig<T = AxiosRequestConfig, R = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: InterCeptorsHook<T, R>;
}
