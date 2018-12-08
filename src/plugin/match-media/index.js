import Mask from "./template/mask";
const loadingPlugin = {
  install(Vue) {
    const MaskVue = Vue.extend(Mask);
    const $vm = new MaskVue({
      el: document.createElement("div")
    });

    document.body.appendChild($vm.$el);
  }
};
export default loadingPlugin;
