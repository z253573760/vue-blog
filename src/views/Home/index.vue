<template>
  <div class="home" @touchmove.prevent="() => {}">
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
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544197806957&di=3162c3b5dea3517229b4e92be0f5ce81&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-74611be189aafe44800641030cecad58_b.jpg");
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
