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

<style scoped>
.menu {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 5%;
  background-color: rgba(255, 255, 255, 0.993);
  color: black;
}
</style>
