import * as types from "./mutation-types";
const mutations = {
  [types.CHANGE_MENU](state) {
    state.menuShow = !state.menuShow;
  },
  saveSubjects(state, data) {
    console.log(data);
    console.log(state);
    state.subjectList = data;
  }
};

export default mutations;
