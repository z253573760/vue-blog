import subject from "../api/subject";
const actions = {
  getSubjects: async ({ commit }) => {
    const {
      data: { data }
    } = await subject.getList();
    commit("saveSubjects", data);
  }
};
export default actions;
