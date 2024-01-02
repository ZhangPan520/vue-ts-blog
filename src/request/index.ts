import Service from './service';
const { baseURL, timeout } = process.env.axios;
export const comsrequest = new Service({
  baseURL,
  timeout,
});
