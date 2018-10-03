import axios from "axios";
import router from "../router";
import { ERROR } from "@/utils/code";
axios.defaults.timeout = 10000;
const baseURL =
  process.env.NODE_ENV === "development"
    ? "/api"
    : "http://www.zhoucanyu.cn/api";
axios.defaults.baseURL = baseURL;
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
    if (response.data.code === ERROR) {
      router.push({
        path: "/404"
      });
      return response;
    }
    return response;
  },
  function(error) {
    router.push({
      path: "/404"
    });
    return Promise.reject(error);
  }
);

export default axios;
