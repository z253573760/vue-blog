<template>
  <div class="about">
    <p>一个91年的菜鸟码农</p>
    <p>
      <span>前端:</span>
      <van-button 
      type="default" 
      v-for="(item,index) in webList" 
      :key="index"
      @click="linkto(item.href)"
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
      this.$toast.loading("加载中...");
      window.location.href = href;
    }
  },
  computed: {
    ...mapState(["subjectList"])
  },
  created() {}
};
</script>

<style scoped>
.about {
  padding: 1rem;
  height: 100%;
  background: #eeeeee;
  color: black;
  /* text-align: center; */
}
.about p {
  height: 1rem;
  line-height: 1rem;
}
.about img {
  width: 0.4rem;
}
.about .item {
  text-align: center;
  width: 0.3rem;
  padding: 0.3rem;
  height: 0.8rem;
  line-height: 2rem;
  font-size: 0.3rem;
}
</style>
