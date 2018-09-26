import Load from "../template/loading";
export default function(Vue) {
  const Loading = Vue.extend(Load);
  const $vm = new Loading({
    el: document.createElement("div")
  });
  document.body.appendChild($vm.$el);
  const loading = {
    show() {
      $vm.show = true;
    },
    hide() {
      $vm.show = false;
    }
  };
  Vue.prototype.$loading = loading;
}
