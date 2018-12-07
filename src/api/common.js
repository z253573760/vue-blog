import axios from "../utils/request";

export const getIp = function () {
  return axios.get(`/ip`);
};

export const getHoliday = function () {

  return axios.get(`/holiday`);
};