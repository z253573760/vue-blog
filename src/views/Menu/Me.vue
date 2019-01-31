<template>
  <div class="me">
    <transition enter-active-class="rubberBand animated">
      <img @click="linkTo"
           v-if="menuShow"
           class="headimgurl"
           :src="user.avatar">
    </transition>

    <div>{{user.nick_name}}</div>
    <div>{{user.address}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapMutations(["CHANGE_MENU"]),
    ...mapState(["menuShow", "user"])
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
  height: 320px;
  background: url("http://qn.ztsky.cn/default-banner-dark%20%281%29.jpg");
  background-size: 100% 100%;
  text-align: left;
  padding: 20px;
  color: #fff;
  font-size: 22px;
  .headimgurl {
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid black;
    margin-bottom: 20px;
  }
}
</style>
