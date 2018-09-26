import Load from "./loading";
// import { isString } from "./lib/helper";
export default {
  install(Vue) {
    Vue.prototype.$myName = "我的插件";
    const Loading = Vue.extend(Load);
    const $vm = new Loading({
      el: document.createElement("div")
    });
    console.log($vm);
    document.body.appendChild($vm.$el);

    const loading = {
      show() {
        $vm.show = true;
      },
      hide() {
        $vm.show = false;
      }
    };

    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    });
    // document.body.appendChild($vm.el);
    // Vue.myGlobalMethod = function() {
    //   // 1. 添加全局方法或属性，如:  vue-custom-element
    //   // 逻辑...
    // };

    // Vue.directive("my-directive", {
    //   // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
    //   bind(el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //   }
    // });

    // Vue.mixin({
    //   created: function() {
    //     // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
    //     // 逻辑...
    //   }
    // });

    // Vue.prototype.$myMethod = function(options) {
    //   // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
    //   // 逻辑...
    // };
  }
};
