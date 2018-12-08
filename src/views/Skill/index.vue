<template>
  <div class="skill"
       @touchmove.prevent="()=>{}">
    <div class="animated pulse">
      <div class="header">
    </div>
    <p>
      <grid :draggable="true"
            :sortable="true"
            :items="showList"
            :center="true">
        <template slot="cell"
                  scope="props">
          <van-button v-color="'black'"
                      type="default"
                      @click="linkto(props.item)"
                      class="btn">
            {{props.item.title}}
          </van-button>
        </template>
      </grid>
    </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { getSkillList } from "@/api/skill";
// import loading from "@/mixin/loading";
export default {
  data() {
    return {
      show: false,
      showList: []
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
  async created() {
    this.$loading.show();
    const { data } = await getSkillList();
    this.$loading.hide();
    this.showList = data;
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
    background-image: url("../../assets/image/Skill-header.jpg");
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
    height: px2rem(80px);
    padding: px2rem(1px);
    box-shadow: -1px 2px 5px rgba(67, 67, 68, 0.5);
  }
}
</style>
