import Top from "./template/top";
const loadingPlugin = {
  install(Vue) {
    const TopVue = Vue.extend(Top);
    const $vm = new TopVue({
      el: document.createElement("div")
    });

    document.body.appendChild($vm.$el);
  }
};
export default loadingPlugin;