<template>
  <div id="app">
    <div class="nav-warpper">
      <van-button type="default" plain @click='CHANGE_MENU'>
        <van-icon name="wap-nav" />
      </van-button>
    </div>
    <van-popup v-model="menuShow" position="top">
      <Menu/>
    </van-popup>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Menu from "@/views/Menu";
import { mapMutations } from "vuex";
export default {
  components: {
    Menu
  },
  data() {
    return {
      //isShow: this.$store.state["menuShow"]
    };
  },
  methods: {
    ...mapMutations(["CHANGE_MENU"])
  },
  computed: {
    menuShow: {
      get() {
        return this.$store.state.menuShow;
      },
      set() {}
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  background-color: black;
  height: 100%;
}
.nav-warpper {
  position: fixed;
  top: 2%;
  left: 85%;
  z-index: 99999;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
