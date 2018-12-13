<template>
  <div class="me">
    <transition enter-active-class="rubberBand animated">
      <img @click="linkTo"
           v-if="menuShow"
           class="headimgurl"
           src="@/assets/image/touxiang.jpg"
           alt="这是头像">
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "me",
  computed: {
    ...mapMutations(["CHANGE_MENU"]),
    ...mapState(["menuShow"])
  },
  methods: {
    linkTo() {
      this.$router.push("/");
      this.CHANGE_MENU();
    }
  }
};
</script>

<style lang="scss" scoped>
.me {
  width: 100%;
  height: 220px;
  text-align: center;
  .headimgurl {
    width: 220px;
    height: 220px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid black;
  }
}
</style>
