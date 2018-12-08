<template>
  <div class="hobby" ref="hobby">
    <router-view class="view animated pulse" />
    <Tabar :show="show"/>
  </div>
</template>
<script>
import delTouch from "@/mixin/delTouch";
import Tabar from "./Tabar";
export default {
  components: {
    Tabar
  },
  mixins: [delTouch],
  data() {
    return {
      isShow: true,
      isScroll: false
    };
  },
  activated() {
    this.isShow = true;
    this.isScroll = false;
  },
  computed: {
    show() {
      return this.isScroll ? this.isShow : true;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScroll = true;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log("scrollTop", scrollTop);
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // console.log(windowHeight);
      // console.log(scrollHeight);
      if (scrollTop + windowHeight >= scrollHeight) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.hobby {
  background: white;
  height: 100%;
  width: 100%;
  color: black;
}
</style>
