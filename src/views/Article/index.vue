<template>
  <div class="article">
    <div class="animated pulse">
      <div class="header">
      </div>
      <transition>
        <router-view :key="$route.fullpath" />
      </transition>
    </div>
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
.article {
  background: #eeeeee;
  color: black;
  height: 100%;
  position: relative;
  .header {
    height: 200px;
    background-size: 100% 100%;
    font-size: 80px;
    filter: blur(3px);
    background-image: url("../../assets/image/Article-herader.jpg");
  }
  &::before {
    content: "Blog";
    width: 100%;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-weight: bold;
    color: white;
    font-size: 80px;
    letter-spacing: 3px;
    position: absolute;
    z-index: 99;
  }
}
</style>
