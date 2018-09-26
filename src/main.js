import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Vant from "vant";
import "vant/lib/vant-css/index.css";
import VueParticles from "vue-particles";
import "animate.css/animate.min.css";
import "@/assets/css/reset.css";
import "@/assets/js/rem.js";
//import "@/utils/fastClick.js";
import "@/components/global.js";
import Grid from "vue-js-grid";
import Loading from "@/plugin/loading";
Vue.use(Loading);

Vue.use(Grid);
// import axios from "axios";
Vue.use(Vant);
Vue.use(VueParticles);
Vue.directive("color", {
  bind(el, bindding) {
    el.style.color = bindding.value;
  }
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
