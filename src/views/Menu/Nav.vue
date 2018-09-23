<template>
	<div class="nav" >
    <van-button 
      type="default"
      @click ='linkto(item.path)' 
      class="btn" 
      v-for="(item,key) in navs" 
      :key="key"
      >
      {{item.title}}
    </van-button>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      navs: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Resume", path: "/" }
      ]
    };
  },
  methods: {
    ...mapMutations(["CHANGE_MENU"]),
    linkto(path) {
      this.$router.push(path);
      this.CHANGE_MENU();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.nav {
  display: flex;
  flex-direction: column;
  height: px2rem(180px);
  justify-content: space-around;
  font-size: 0.3rem;
  font-weight: bold;
  user-select: none;
  .btn {
    font-size: px2rem(10px);
    &:active {
      transform: scale(1.3);
      font-weight: bold;
      transition: all 0.3s ease;
    }
  }
}
</style>
