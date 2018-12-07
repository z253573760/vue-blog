import {
  getIp
} from "@/api/common";
const actions = {
  async getIp({
    commit
  }) {
    const {
      data
    } = await getIp();
    commit("saveIp", data);
  }
};
export default actions;