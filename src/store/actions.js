import { getIp } from "@/api/common";
import { getUserInfo } from "@/api/account";
const actions = {
  async getIp({ commit }) {
    const { data } = await getIp();
    commit("saveIp", data);
  },
  async getUser({ commit }) {
    const {
      data: { info }
    } = await getUserInfo();
    commit("saveUser", info);
  }
};
export default actions;
