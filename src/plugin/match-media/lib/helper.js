export function orientate(vm) {
  window.addEventListener(
    "onorientationchange" in window ? "orientationchange" : "resize",
    () => {
      if (window.orientation === 180 || window.orientation === 0) {
        // "竖屏状态！
        vm.show = false;
      }
      if (window.orientation === 90 || window.orientation === -90) {
        // "横屏屏状态！
        vm.show = true;
      }
    },
    false
  );
}
