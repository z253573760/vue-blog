
<template>
  <div class="test">
    <h2>
      <!-- 敬请期待... -->

    </h2>
    <TreeMenu :list="menu" />
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu";

export default {
  components: {
    TreeMenu
  },
  data() {
    return {
      menu: [
        {
          title: "1级标题1",
          children: [
            { title: "2级标题1" },
            { title: "2级标题2", children: [{ title: "3级标题1" }] },
            { title: "2级标题3", children: [{ title: "3级标题2" }] }
          ]
        },
        {
          title: "1级标题2",
          children: [
            { title: "2级标题1" },
            { title: "2级标题2" },
            { title: "2级标题3", children: [{ title: "3级标题1" }] }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.test {
  h2 {
    // text-align: center;
    //padding-top: px2rem(400px);
  }
}
</style>
