<template>
  <div class="hobby">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="chat">标签</van-tabbar-item>
      <van-tabbar-item icon="records">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import delTouch from "@/mixin/delTouch";
// import { ViewBox } from "vux";
export default {
  components: {},
  mixins: [delTouch],
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss" >
.hobby {
  background: white;
  height: 100%;
  width: 100%;
  color: black;
}
</style>
