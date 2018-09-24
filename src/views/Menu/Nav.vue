<template>
	<div class="nav" >
    <van-button 
      type="default"
      @click ='linkto(item.path,key)' 
      class="btn animated" 
      v-for="(item,key) in navs" 
      :key="key"
      ref="btn"
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
        { title: "Article", path: "/article" }
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
  height: px2rem(360px);
  justify-content: space-around;
  font-weight: bold;
  user-select: none;
  .btn {
    cursor: point;
    font-size: px2rem(22px);
    &:active {
      transform: scale(1.3);
      font-weight: bold;
      transition: all 0.3s ease;
    }
  }
}
</style>
