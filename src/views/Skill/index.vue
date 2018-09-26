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
      <grid :draggable="true" :sortable="true" :items="showList" :center="true">
        <template slot="cell" scope="props">
          <van-button v-color="'black'" type="default" @click="linkto(props.item)" class="btn">
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
import loading from "@/mixin/loading";
export default {
  mixins: [touchMove, loading],
  data() {
    return {
      show: false,
      showList: [],
      list: [
        { text: "html" },
        { text: "css3" },
        { text: "javascript" },
        { text: "scss" },
        { text: "dva" },
        { text: "vue" },
        { text: "egg" },
        { text: "sequelize" },
        { text: "koa2" },
        { text: "mysql" },
        { text: "redis" },
        { text: "python" },
        { text: "golang" },
        { text: "gin" }
      ]
    };
  },
  methods: {
    ...mapActions(["getSubjects"]),
    linkto() {
      this.$emit("func");
      // href && window.open(href);
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
