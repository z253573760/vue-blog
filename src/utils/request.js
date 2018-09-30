import axios from "axios";
import router from "../router";
import { ERROR } from "@/utils/code";
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "/v2";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      return response;
    }
    if (response.data.data === ERROR) {
      router.push({
        path: "/404"
      });
      return response;
    }

    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default axios;
