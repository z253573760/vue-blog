import axios from "../utils/request";
import qs from "qs";
export const getZoneList = function (pageSize, current) {
  const params = { pageSize, current };
  return axios.get(`/zone?${qs.stringify(params)}`);
};
