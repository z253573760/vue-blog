<template>
  <transition name="fade">
    <van-tabbar v-model="active" v-show="show">
      <van-tabbar-item to="/zone">
        <span>ACU</span>
        <img slot="icon" slot-scope="props" :src="props.active ? acuIcon.active : acuIcon.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/zone/me">
        <span>Me</span>
        <img slot="icon" slot-scope="props" :src="props.active ? meIcoin.active : meIcoin.normal">
      </van-tabbar-item>
    </van-tabbar>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data() {
    return {
      active: 0,
      acuIcon: {
        active: require("@/assets/image/active-acu.png"),
        normal: require("@/assets/image/normal-acu.png")
      },
      meIcoin: {
        active: require("@/assets/image/active-me.png"),
        normal: require("@/assets/image/normal-me.png")
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
