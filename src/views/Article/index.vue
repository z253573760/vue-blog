<template>
  <div class="article" >
    <div class="header">
         <Particles />
    </div>
    <transition>
        <router-view :key = "$route.fullpath"/>
    </transition>
  </div>
</template>

<script>
import Particles from "@/components/particles";
export default {
  name: "Article",
  components: {
    Particles
  },
  methods: {
    goBack() {}
  }
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
