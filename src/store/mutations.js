import * as types from "./mutation-types";
const mutations = {
  [types.CHANGE_MENU](state) {
    state.menuShow = !state.menuShow;
  }
};

export default mutations;
