import * as types from "./mutation-types";
const mutations = {
  [types.CHANGE_MENU](state) {
    state.menuShow = !state.menuShow;
  },
  saveSubjects(state, data) {
    state.subjectList = data;
  },
  saveIp(state, data) {
    state.count = data.count;
    state.isNew = data.is_new;
  }
};

export default mutations;
