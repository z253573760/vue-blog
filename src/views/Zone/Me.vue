
<template>
    <div class="test">
        <h2>
            敬请期待...
            <!-- <div v-for="(item,index) in menu"
                 :key="index">
                <Menu :menu="item" />
            </div> -->
            <Menu :menu="menu" />
        </h2>
    </div>
</template>

<script>
import Menu from "./Menu";
const menu = [
  {
    title: "标题1",
    children: [{ title: "2级标题1" }, { title: "2级标题2" }]
  }
];
export default {
  components: {
    Menu
  },
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.test {
  h2 {
    text-align: center;
    padding-top: px2rem(400px);
  }
}
</style>
