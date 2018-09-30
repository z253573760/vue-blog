import { getList } from "../api/subject";

const actions = {
  getSubjects: async ({ commit }) => {
    const {
      data: { data }
    } = await getList();
    commit("saveSubjects", data);
  }
};
export default actions;
