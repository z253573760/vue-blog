<template>
    <div class="mask" v-show="!isMobile||show"  @touchmove.prevent="()=>{}">
        <div class="title">{{txt}}</div>
    </div>
</template>
<script>
import { orientate } from "../lib/helper";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    //
  },
  beforeCreate() {
    orientate(this);
  },
  computed: {
    matches() {
      const mql = window.matchMedia("(orientation: portrait)");
      return !mql.matches;
    },
    isMobile() {
      return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    },
    txt() {
      if (!this.isMobile) {
        return "请在移动端打开页面";
      }
      if (!this.matches) {
        return "请竖屏显示";
      }
    }
  }
};
</script>
<style  scoped>
.mask {
  background: white;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  position: absolute;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 0.3s linear; */
}
.mask .title {
  font-size: 22px;
}
</style>
