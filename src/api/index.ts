import Service from './request/service';
const { baseURL, timeout } = process.env.axios;
export const cmsRequest = new Service({
  baseURL,
  timeout,
});
