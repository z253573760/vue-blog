import axios from "../utils/request";
import qs from "qs";
export const getArticleList = function (pageOpts) {
  return axios.get(`/article?${qs.stringify(pageOpts)}`);
};

export const getArticle = function (id) {
  return axios.get(`/article/${id}`);
};