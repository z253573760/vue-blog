<template>
  <div class="skill">
    <div class="header">
    </div>
    <!-- <p>
      <van-button 
      type="default" 
      v-for="(item,index) in list" 
      :key="index"
      @click="linkto(item.href)"
      v-color="'black'"
      class="btn"
      >
      {{item.text}}
      </van-button>
    </p> -->
    <p>
    <grid
    :draggable="true"
    :sortable="true"
    :items="showList"
    :center="true"
    >
        <template slot="cell" scope="props">
         <van-button
            v-color="'black'"
            type="default" 
            @click="linkto(props.item.href)"
            class="btn"
         >
            {{props.item.text}}
         </van-button>
     </template>
    </grid>
    </p>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import touchMove from "@/mixin/touchMove";
export default {
  mixins: [touchMove],
  data() {
    return {
      items: ["a", "b", "c"],
      show: false,
      showList: [],
      list: [
        { text: "javascript" },
        { text: "html" },
        { text: "css3" },
        { text: "scss" },
        {
          text: "dva",
          href: "https://dvajs.com/"
        },
        {
          text: "vue",
          href: "https://cn.vuejs.org/"
        },
        {
          text: "egg",
          href: "https://eggjs.org/zh-cn/index.html"
        },
        {
          text: "sequelize",
          href: "http://docs.sequelizejs.com/"
        },
        { text: "koa2" },
        { text: "mysql" },
        { text: "redis" },
        { text: "python" },
        { text: "golang" },
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
      href && window.open(href);
    }
  },
  computed: {
    ...mapState(["subjectList"])
  },
  created() {
    let index = 0;
    const tiemr = setInterval(() => {
      if (index == 4) {
        clearInterval(tiemr);
        setTimeout(() => {
          this.showList = this.list;
        }, 0);
      }
      this.showList.push(this.list[index]);
      index += 1;
    }, 800);
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
    padding-top: px2rem(50px);
    text-align: center;
    height: px2rem(100px);
    line-height: px2rem(100px);
  }
  .btn {
    text-align: center;
    width: px2rem(120px);
    padding: px2rem(1px);
    box-shadow: -1px 2px 5px rgba(67, 67, 68, 0.5);
  }
}
</style>
