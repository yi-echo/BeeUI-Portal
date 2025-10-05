import axios from "axios";

const httpService = axios.create({
  baseURL: "/api/v1",
  timeout: 60000,
});

// Add a request interceptor
httpService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpService.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default httpService;
