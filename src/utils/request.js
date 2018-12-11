import axios from "axios";

import {
  Notify
} from "vant";
import router from "../router";
import {
  ERROR,
  SUCCESS
} from "@/utils/code";
axios.defaults.timeout = 10000;
// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "/api"
//     : "http://www.zhoucanyu.cn/api";
axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    //config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    if (!(response.status >= 200 && response.status < 300)) {
      return response;
    }
    if (response.data.code !== SUCCESS) {
      window.vue.$loading.hide();
      Notify("服务器错误");
      throw "服务器错误";
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;