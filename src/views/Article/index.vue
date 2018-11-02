<template>
  <div class="article">
    <div class="header">
    </div>
    <transition>
      <router-view :key="$route.fullpath" />
    </transition>
  </div>
</template>

<script>
// import handler from "@/utils/touchMove";
import delTouch from "@/mixin/delTouch";
export default {
  mixins: [delTouch],
  name: "Article",
  data() {
    return {
      text: "111"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.article {
  background: #eeeeee;
  color: black;
  height: 100%;
  position: relative;
  .header {
    height: px2rem(200px);
    background-size: 100% 100%;
    font-size: px2rem(80px);
    filter: blur(3px);
    background-image: url("../../assets/image/Article-herader.jpg");
  }
  &::before {
    content: "Blog";
    width: 100%;
    height: px2rem(200px);
    text-align: center;
    line-height: px2rem(200px);
    font-weight: bold;
    color: white;
    font-size: px2rem(80px);
    letter-spacing: px2rem(3px);
    position: absolute;
    z-index: 99;
  }
}
</style>
