import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/components/notFound")
    }
  ]
});
