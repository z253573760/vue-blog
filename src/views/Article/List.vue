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
    this.getList();
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
