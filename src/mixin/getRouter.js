const mixin = {
  created() {
    console.log("minxi");
    console.log(this.$route.path);
  }
};
export default mixin;
