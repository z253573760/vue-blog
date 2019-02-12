<template>
  <div class="content">
    <h1 class="title">{{title}}</h1>
    <div class="skill">
      <div v-for="item in skills"
           :key="item.id">
        {{item.title}}
      </div>
    </div>
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
      skills: [],
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
          update_time: updateTime,
          skills
        }
      } = await getArticle(this.id);
      this.title = title;
      this.content = content;
      this.createTime = createTime;
      this.updateTime = updateTime;
      this.skills = skills;
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
    font-size: 32px;
    text-align: center;
    margin-bottom: 15px;
  }
  .skill {
    display: flex;
    font-size: 24px;
    div {
      padding: 5px 10px;
      margin-right: 10px;
      background: rgb(129, 138, 145);
      color: #fff;
      border-radius: 5px;
    }
  }
  .time {
    text-align: right;
    font-size: 20px;
  }
  .article {
    overflow-x: hidden;
  }
}
</style>
