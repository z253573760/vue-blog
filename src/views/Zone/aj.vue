<template>
    <div class="aj">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
            <img v-for="(img, key) in imageList" :key="key" :src="img" @click = "preview(img)">
        </van-list>
    </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      imageList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538576934955&di=de13557400ebd2bb7ea6d1201f470c08&imgtype=0&src=http%3A%2F%2Fwww2.flightclub.cn%2Fimgshow%2Fnews__uploads__allimg__170329__6-1F3291S547.jpg%2F640%2F100.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2874864755,2198722302&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538576916411&di=6024ca11d44a6575b704d3e60199c45b&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F001Rk1s3zy7bE3oZZXy18",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538582225928&di=50cf4f321769ee64a595ae35762b92b8&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F19%2F38%2F16pic_1938772_b.jpg"
      ],
      loading: false,
      finished: false,
      list: []
    };
  },
  methods: {
    preview(img) {
      // console.log(img);
      ImagePreview([img]);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          this.imageList.push(this.imageList[0]);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.imageList.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.aj {
  background: white;
  height: 100%;
  width: 100%;
  color: black;
  padding: px2rem(3px);
  img {
    margin: px2rem(3px);
    width: px2rem(190px);
    height: px2rem(190px);
    overflow: hidden;
  }
}
</style>
