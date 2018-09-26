const loadding = {
  created() {
    this.$loading.show();
    setTimeout(() => this.$loading.hide(), 1000);
  }
};
export default loadding;
