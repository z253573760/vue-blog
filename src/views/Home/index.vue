<template>
  <div class="home"
       @touchmove.prevent="()=>{}">
    <vue-particles color="#fff"
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
                   class="lizi">
    </vue-particles>
    <Card />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: { Card }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.home {
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  background-image: url("http://pji0d7zo8.bkt.clouddn.com/bg.png");
  .text {
    font-size: $fontSize;
  }
  .lizi {
    height: 70%;
    user-select: none;
    position: absolute;
  }
}
</style>
