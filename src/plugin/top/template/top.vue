<template>
  <div>
    <div :class="clsName"
         @click="goScrollTop">Top</div>
  </div>
</template>
<script>
import { smoothScroll } from "../lib/helper";
export default {
  data() {
    return {
      clsName: "top top-hide"
    };
  },
  methods: {
    scroll() {
      const scrollHander = () => {
        clearTimeout(scrollHander.timer);
        this.clsName = "top top-hide";
        scrollHander.timer = setTimeout(this.animate, 50);
      };
      window.addEventListener("scroll", scrollHander);
      this.$on("beforeDestroy", () => {
        window.removeEventListener("scroll", scrollHander);
      });
    },
    animate() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        this.clsName = "top";
      }
    },
    goScrollTop() {
      smoothScroll();
    }
  },
  created() {
    this.scroll();
  },
  beforeDestroy() {
    this.$emit("beforeDestroy");
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";

.top {
  position: fixed;
  right: 0;
  font-size: 26px;
  background: rgba($color: #000000, $alpha: 0.7);
  bottom: 10%;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s linear;
  transform: translate(0, -50%);
  font-weight: bold;
  z-index: 999;
}
.top-hide {
  right: -80px;
}
</style>
