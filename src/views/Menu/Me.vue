<template>
	<div class="me">
     <transition enter-active-class="rubberBand animated">
			<img v-if="menuShow" class="headimgurl" src="@/assets/image/touxiang.jpg" alt="这是头像">
    </transition>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "me",
  computed: {
    ...mapState(["menuShow"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.me {
  width: 100%;
  height: px2rem(220px);
  text-align: center;
  .headimgurl {
    width: px2rem(220px);
    height: px2rem(220px);
    overflow: hidden;
    border-radius: 50%;
    border: px2rem(1px) solid black;
  }
}
</style>
