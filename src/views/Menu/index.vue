<template>
  <div class="menu">
    <Me />
    <Nav />
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
.menu {
  width: 80vw;
  height: 100vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.993);
  color: black;
}
</style>
