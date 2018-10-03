import axios from "../utils/request";

export const getIp = function() {
  return axios.get(`/ip`);
};
