import { getIp } from "../api/ip";
const actions = {
  getIp: async ({ commit }) => {
    const {
      data: { data }
    } = await getIp();
    commit("saveIp", data);
  }
};
export default actions;
