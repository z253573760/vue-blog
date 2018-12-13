<template>
  <div class="aj">

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
    }
  }
};
</script>

<style lang="scss" scoped>
.aj {
  background: white;
  height: 80%;
  width: 100%;
  color: black;
  padding: px2rem(3px);
  img {
    margin: 3px;
    width: 190px;
    height: 190px;
    overflow: hidden;
    border-radius: 10px;
  }
}
</style>
