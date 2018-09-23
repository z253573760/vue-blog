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
export default {
  name: "Home",
  mixins: [getRouter],
  created() {}
};
</script>
<style scoped>
.home {
  height: 100%;
  background-image: url("../../assets/first_screen.jpg");
  background-size: 100% 100%;
  text-align: center;
  line-height: 100%;
}
.home .text {
  /* height: 100%;
  line-height: 100%; */
  font-size: 0.3rem;
  /* letter-spacing: 0.05rem; */
}
.lizi {
  height: 60%;
}
</style>
