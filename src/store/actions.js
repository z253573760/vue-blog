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
    commit("saveIp", data);
  }
};
export default actions;