<template>
  <div class="menu-icon-wapper">
    <grid :draggable="true"
          :sortable="true"
          :items="menuList"
          :center="true">
      <template slot="cell"
                scope="props">
        <div class="item"
             @click="linkTo(props.item)">
          <div class="icon-warpper">
            <img class="icon"
                 :src="props.item.meta.icon" />
          </div>
          <div class="title">{{props.item.meta.title}}</div>
        </div>
      </template>
    </grid>
  </div>
</template>
<script>
import routes from "@/router/routes";
export default {
  computed: {
    menuList() {
      const { path } = this.$route;
      const menuList = routes.filter(item => item.meta && item.path !== path);
      return menuList;
    }
  },
  methods: {
    linkTo(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.menu-icon-wapper {
  position: fixed;
  bottom: 10%;
  font-size: 20px;
  .item {
    position: relative;
    width: 100px;
    height: 100px;
    .icon-warpper {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 90px;
      height: 90px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      .icon {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
