import {
  getIp
} from "../api/ip";
const actions = {
  getIp: async ({
    commit
  }) => {
    const {
      data
    } = await getIp();
    window.localStorage.lastTime = new Date().getTime()
    commit("saveIp", data);
  }
};
export default actions;