<template>
  <div class="aj">
    <div :class="clsName"
         @click="goScrollTop">Top</div>
    <van-list v-model="loading"
              :finished="finished"
              @load="onLoad"
              :offset="400">
      <img v-for="(item, key) in imageList"
           :key="key"
           :src="item.img"
           @click="preview(item)">
    </van-list>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
import { getZoneList } from "@/api/zone";
import { mapMutations } from "vuex";
import { goScrollTop } from "@/utils";
export default {
  data() {
    return {
      imageList: [],
      loading: false,
      finished: false,
      total: 0,
      current: 0,
      pageSize: 20,
      imagePreview: null,
      scrollTop: -1,
      clsName: "top"
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.imagePreview != null) this.imagePreview.close();
    next();
  },
  methods: {
    ...mapMutations(["changeNavShow"]),
    goScrollTop() {
      goScrollTop();
    },
    preview(item) {
      this.changeNavShow(false);
      const images = this.imageList.map(_ => _.img);
      this.imagePreview = ImagePreview({
        images,
        startPosition: this.imageList.indexOf(item),
        onClose: () => this.changeNavShow(true)
      });
    },
    async onLoad() {
      const { data } = await getZoneList(this.pageSize, this.current + 1);
      this.loading = false;
      this.imageList.push(...data.rows);
      this.current = data.current;
      this.total = data.count;
      if (this.imageList.length >= this.total) this.finished = true;
    },
    scroll() {
      const scrollHander = () => {
        clearTimeout(scrollHander.timer);
        this.clsName = "top top-hide";
        scrollHander.timer = setTimeout(this.animate, 50);
      };
      window.addEventListener("scroll", scrollHander);
      // this.$on("animateStop", () => {
      //   window.removeEventListener("scroll", scrollHander);
      // });
      this.$on("beforeDestroy", () => {
        window.removeEventListener("scroll", scrollHander);
      });
    },
    animate() {
      this.clsName = "top";
    }
  },
  created() {
    this.scroll();
    // this.watchScroll();
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
  background: rgba($color: #000000, $alpha: 0.7);
  bottom: 10%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s linear;
  transform: translate(0, -50%);
  font-weight: bold;
}
.top-hide {
  right: -80px;
}

.aj {
  background: white;
  height: 80%;
  width: 100%;
  color: black;
  padding: px2rem(3px);
  img {
    margin: px2rem(3px);
    width: px2rem(190px);
    height: px2rem(190px);
    overflow: hidden;
    border-radius: px2rem(10px);
  }
}
</style>
