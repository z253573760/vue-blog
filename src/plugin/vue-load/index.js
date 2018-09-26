import load from "./lib/load";
const loadingPlugin = {
  install(Vue) {
    load(Vue);
  }
};
export default loadingPlugin;
