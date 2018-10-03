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
import touchMove from "@/mixin/touchMove";
// import loading from "@/mixin/loading";
export default {
  name: "Home",
  mixins: [touchMove],
  created() {
    console.log("home");
  }
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
