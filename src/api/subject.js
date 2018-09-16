import axios from "../utils/request";
// function getList() {
//   return axios.get(`/subject`);
// }
export default {
  getList() {
    return axios.get(`/mobile/subjects`);
  }
};
