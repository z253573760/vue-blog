<template>
  <div class="menu" >
    <Me/>
    <Nav/>
  </div>
</template>

<script>
import Me from "./Me";
import Nav from "./Nav";
export default {
  name: "Menu",
  components: {
    Me,
    Nav
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.menu {
  width: 100%;
  text-align: center;
  padding-top: px2rem(20px);
  background-color: rgba(255, 255, 255, 0.993);
  color: black;
}
</style>
