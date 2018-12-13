<template>
  <div class="nav">
    <van-button type="default"
                @click='linkto(item.path,key)'
                class="btn animated"
                v-for="(item,key) in menuList"
                :key="key"
                ref="btn">
      {{item.meta.title}}
    </van-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import routes from "@/router/routes";
export default {
  methods: {
    ...mapMutations(["CHANGE_MENU"]),
    linkto(path) {
      this.$router.push(path);
      this.CHANGE_MENU();
    }
  },
  computed: {
    menuList() {
      const { path } = this.$route;
      const menuList = routes.filter(item => item.meta && item.path !== path);
      return menuList;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 360px;
  justify-content: space-around;
  font-weight: bold;
  user-select: none;
  .btn {
    cursor: point;
    font-size: 22px;
    &:active {
      transform: scale(1.3);
      font-weight: bold;
      transition: all 0.3s ease;
    }
  }
}
</style>
