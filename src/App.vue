<template>
  <div id="app">
    <CountUp v-if="isShowWelcome"
             :end="count" />
    <div class="nav-warpper"
         v-show="navShow">
      <van-button type="default"
                  plain
                  @click='CHANGE_MENU'
                  :style="blk"
                  @dragover="drop"
                  v-show="isShowBtn">
        <van-icon name="wap-nav" />
      </van-button>
    </div>
    <van-popup v-model="isShow"
               position="right"
               @click-overlay="CHANGE_MENU">
      <Menu />
    </van-popup>
    <transition name="slide-fade">
      <keep-alive>
        <router-view @func="fatherFunc"
                     :key="$route.fullpath" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import Menu from "@/views/Menu";
import Top from "@/components/top";
import CountUp from "@/components/count-up";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    Menu,
    CountUp,
    Top
  },
  async created() {
    this.$loading.show();
    this.isShowWelcome && this.saveLastTime();
    await this.getIp();
    this.$loading.hide();
  },
  data() {
    return {
      isShow: false,
      blk: {
        background: "white",
        color: "black"
      },
      isShowBtn: false
    };
  },
  watch: {
    menuShow: {
      handler(cur) {
        this.blk.color = cur ? "white" : "black";
        this.blk.background = cur ? "#969696" : "white";
        this.isShow = cur;
      }
    },
    $route() {
      const { path } = this.$route;
      this.isShowBtn = !(path === "/");
    }
  },
  methods: {
    ...mapActions(["getIp"]),
    ...mapMutations(["CHANGE_MENU"]),
    saveLastTime() {
      window.localStorage.lastTime = new Date().getTime();
    }
  },
  computed: {
    ...mapState({
      menuShow: state => state.menuShow,
      isNew: state => state.isNew,
      count: state => state.count,
      navShow: state => state.navShow
    }),
    isShowWelcome() {
      const lastTime = window.localStorage.lastTime;
      if (!lastTime) return true;
      const nowTime = new Date().getTime();
      const diff = nowTime - lastTime;
      return diff > 24 * 60 * 60 * 60 ? true : false;
    }
  }
};
</script>

<style lang="scss" scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  background-color: black;
  height: 100%;
  user-select: none;
  .nav-warpper {
    position: fixed;
    top: 2%;
    left: 85%;
    z-index: 99999;
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, 
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
