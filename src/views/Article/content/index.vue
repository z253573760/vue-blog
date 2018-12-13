<template>
  <div class="content">
    <h1 class="title">{{title}}</h1>
    <p class="time">
      <span>{{updateTime|fmtDate}}</span>
    </p>
    <mavon-editor v-model="content"
                  ref="md"
                  :subfield="false"
                  defaultOpen="preview"
                  :editable="false"
                  :imageClick="()=>{}" />
  </div>
</template>
<script>
import { getArticle } from "@/api/article";

export default {
  async created() {
    await this.getArticle();
  },
  data() {
    return {
      title: "",
      content: "",
      updateTime: new Date(),
      createTime: new Date()
      // toolbars
    };
  },
  methods: {
    async getArticle() {
      const {
        data: {
          title,
          content,
          create_time: createTime,
          update_time: updateTime
        }
      } = await getArticle(this.id);
      this.title = title;
      this.content = content;
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
.content {
  background: white;
  padding: 15px;
  .title {
    font-size: 26px;
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
