<template>
	<div class="nav">
		<van-button type="default" @click ='linkto("/")'>Home</van-button>
		<!-- <li @click ='linkto("/")'> Home</li> -->
		<van-button type="default" @click ='linkto("/about")'>About</van-button>
		<van-button type="default" @click ='linkto("/")'>Resume</van-button>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Nav",
  methods: {
    ...mapMutations(["CHANGE_MENU"]),
    linkto(path) {
      this.$router.push(path);
      this.CHANGE_MENU();
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-around;
  font-size: 0.3rem;
  font-weight: bold;
}
</style>
