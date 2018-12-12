import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Vant from "vant";
import VueParticles from "vue-particles";
import "@/assets/css/reset.css";
import "@/assets/css/mixin.scss";
import "@/assets/js/rem.js";
import "@/utils/fastClick.js";
import "@/components/global.js";
import Grid from "vue-js-grid";
import * as filters from "./filters";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

//自己封装的插件
import Loading from "@/plugin/vue-load";
import MatchMedia from "@/plugin/match-media";
import Top from "@/plugin/top";
Vue.use(mavonEditor);
Vue.use(Loading);
Vue.use(MatchMedia);
Vue.use(Top);
Vue.use(Grid);
Vue.use(Vant);
Vue.use(VueParticles);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.directive("color", {
  bind(el, bindding) {
    el.style.color = bindding.value;
  }
});

Vue.config.productionTip = false;
const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

window.vue = vue;