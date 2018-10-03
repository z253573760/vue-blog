import axios from "../utils/request";

export const getSkillList = function() {
  return axios.get(`/skill`);
};
