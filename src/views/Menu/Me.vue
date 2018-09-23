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
.me {
  width: 100%;
  height: 150px;
  text-align: center;
  .headimgurl {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid black;
  }
}
</style>
