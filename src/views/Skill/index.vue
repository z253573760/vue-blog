<template>
  <div class="skill">
    <div class="header"></div>
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

.skill {
  background: #eeeeee;
  color: black;
  height: 100%;
  padding: 0;
  &::before {
    width: 100%;
    text-align: center;
    content: "Skill";
    height: px2rem(200px);
    line-height: px2rem(200px);
    font-weight: bold;
    color: white;
    font-size: px2rem(80px);
    letter-spacing: px2rem(3px);
    position: absolute;
    z-index: 1;
  }
  .header {
    height: px2rem(200px);
    background-size: 100% 100%;
    font-size: px2rem(80px);
    filter: blur(2px);
    background-image: url("../../assets/image/Skill-header.png");
  }
  p {
    padding: px2rem(30px);
    text-align: left;
    height: px2rem(100px);
    line-height: px2rem(100px);
  }
  .btn {
    text-align: center;
    width: px2rem(160px);
    padding: px2rem(1px);
  }
}
</style>
