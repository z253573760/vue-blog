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
    },
    async getSkillList() {
      const { data } = await getSkillList();
      this.showList = data;
    }
  },
  computed: {
    ...mapState(["subjectList"])
  },
  async created() {
    this.$loading.show();
    await this.getSkillList();
    this.$loading.hide();
  }
};
</script>

<style lang="scss" scoped>
// @import "@/assets/css/mixin.scss";

.skill {
  background: #eeeeee;
  color: black;
  height: 100%;
  padding: 0;
  &::before {
    width: 100%;
    text-align: center;
    content: "Skill";
    height: 200px;
    line-height: 200px;
    font-weight: bold;
    color: white;
    font-size: 80px;
    letter-spacing: 3px;
    position: absolute;
    z-index: 1;
  }
  .header {
    height: 200px;
    background-size: 100% 100%;
    font-size: 80px;
    filter: blur(2px);
    background-image: url("http://pji0d7zo8.bkt.clouddn.com/default-banner-dark%20%281%29.jpg");
  }
  p {
    padding-top: 50px;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
  .btn {
    text-align: center;
    width: 120px;
    height: 80px;
    padding: 1px;
    box-shadow: -1px 2px 5px rgba(67, 67, 68, 0.5);
  }
}
</style>
