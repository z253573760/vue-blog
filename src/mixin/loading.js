const loadding = {
  created() {
    this.$loading.show();
    setTimeout(() => this.$loading.hide(), 2000);
  }
};
export default loadding;
