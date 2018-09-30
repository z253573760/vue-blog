import axios from "../utils/request";
// function getList() {
//   return axios.get(`/subject`);
// }
// export default {
//   getList() {
//     return axios.get(`/rank/list?json=true`);
//   }
// };
export const getList = function() {
  return axios.get(`/movie/top250`);
};
