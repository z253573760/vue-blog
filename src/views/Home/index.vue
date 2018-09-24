<template>
	<div class="home">
	<vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
  <div class= "text">
    一个菜鸟码农
  </div>
	</div>
</template>

<script>
import getRouter from "@/mixin/getRouter";
import handler from "@/assets/js/touchMove";
document.body.addEventListener("touchmove", handler, false);
export default {
  name: "Home",
  mixins: [getRouter],
  created() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.home {
  @extend .bg;
  background-image: url("../../assets/image/bghome.jpg");
  .text {
    font-size: $fontSize;
  }
  .lizi {
    height: 70%;
    user-select: none;
  }
}
</style>
