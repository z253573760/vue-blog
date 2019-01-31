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
    state.isNew = data.isNew;
    state.ip = data;
  },
  saveUser(state, data) {
    state.user = data;
  },
  changeNavShow(state, data) {
    state.navShow = data;
  }
};

export default mutations;
