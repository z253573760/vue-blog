<template>
  <div class="about">
    <transition 
    clsss="animated"
    enter-active-class="bounceIn" 
    leave-active-class="bounceOut"
    >
      <p>一个91年的菜鸟码农</p>
    </transition>
    <p>
      <span>前端:</span>
      <van-button 
      type="default" 
      v-for="(item,index) in webList" 
      :key="index"
      @click="linkto(item.href)"
      v-color="'red'"
      class="btn"
      >
      {{item.text}}
      </van-button>
    </p>
    <p>
      <span>后端:</span>
      <van-button 
      type="default"
      v-for="(item,index) in serverList" 
      :key="index"
      @click="linkto(item.href)"
      class="btn"
      >
      {{item.text}}
      </van-button>
    </p>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      webList: [
        {
          text: "dva.js",
          href: "https://dvajs.com/"
        },
        {
          text: "vue.js",
          href: "https://cn.vuejs.org/"
        }
      ],
      serverList: [
        {
          text: "egg.js",
          href: "https://eggjs.org/zh-cn/index.html"
        },
        {
          text: "sequelize.js",
          href: "http://docs.sequelizejs.com/"
        },
        {
          text: "gin",
          href: "https://godoc.org/github.com/gin-gonic/gin"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getSubjects"]),
    linkto(href) {
      this.$emit("func", href);
      window.open(href);
    }
  },
  computed: {
    ...mapState(["subjectList"])
  },
  created() {
    // console.log(this.$listeners);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";

.about {
  padding: px2rem(80px);
  height: 100%;
  background: #eeeeee;
  color: black;
  p {
    height: px2rem(100px);
    line-height: px2rem(100px);
  }
  .btn {
    text-align: center;
    width: px2rem(127px);
    padding: px2rem(1px);
  }
}
</style>
