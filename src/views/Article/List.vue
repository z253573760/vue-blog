<template>
  <van-list v-model="loading"
            :finished="finished"
            @load="onLoad">
    <van-cell v-for="(item,key) in rows"
              :key="key"
              :title="item.title"
              :value="item.update_time"
              @click="linkTo(item.id)" />
  </van-list>
</template>
<script>
import { getArticleList } from "@/api/article";
import { fmtDate } from "@/utils";
export default {
  data() {
    return {
      loading: false,
      finished: true,
      pageOpts: {
        current: 1,
        pageSize: 10,
        status: 1
      },
      rows: []
    };
  },

  async created() {
    this.$loading.show();
    await this.getList();
    this.$loading.hide();
  },
  methods: {
    onLoad() {},
    async getList() {
      const {
        data: { rows, current, pageSize }
      } = await getArticleList(this.pageOpts);
      this.rows = rows.map(_ => ({
        ..._,
        update_time: fmtDate(_.update_time)
      }));
      this.pageOpts = { ...this.pageOpts, current, pageSize };
    },
    linkTo(id) {
      this.$router.push(`/article/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.list-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

