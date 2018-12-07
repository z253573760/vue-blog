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
import Card from "./card";
export default {
  components: { Card }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.home {
  @extend .bg;

  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538683921366&di=3e64bfc89e58633d8ce3c37ed8c14295&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201501%2F22%2F20150122175012_LkLN8.jpeg");
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
