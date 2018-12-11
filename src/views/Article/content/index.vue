<template>
  <div class="content">
    <h1 class="title">{{title}}</h1>
    <p class="time">
      <span>{{updateTime|fmtDate}}</span>
    </p>
    <div class="article"
         v-html="html"></div>
  </div>
</template>
<script>
import { getArticle } from "@/api/article";
export default {
  async created() {
    this.getArticle();
  },
  data() {
    return {
      title: "",
      html: "",
      updateTime: new Date(),
      createTime: new Date()
    };
  },
  methods: {
    async getArticle() {
      const {
        data: {
          title,
          content,
          html,
          create_time: createTime,
          update_time: updateTime
        }
      } = await getArticle(this.id);
      this.title = title;
      this.html = html;
      console.log(content);
      // console.log(this.html);
      this.createTime = createTime;
      this.updateTime = updateTime;
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.content {
  background: white;
  padding: 15px;
  .title {
    font-size: px2rem(26px);
    text-align: center;
    margin-bottom: 15px;
  }
  .time {
    text-align: right;
  }
  .article {
    overflow-x: hidden;
  }
}
</style>

