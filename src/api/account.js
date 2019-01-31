import axios from "../utils/request";

export const getUserInfo = function() {
  return axios.get(`/account/info`);
};
