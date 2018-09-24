<template>
  <div class="dialogImg" v-if="show">
    <img  :src="imgSrc"/>   
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.imgSrc);
  },
  props: {
    imgSrc: String,
    show: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.dialogImg {
}
</style>
