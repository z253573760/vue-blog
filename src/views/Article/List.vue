<template>
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
    >
    <van-cell
        v-for="(item,key) in list"
        :key="key"
        :title="item.title"
        :value="item.date"
        @click="linkTo(item.id)"
     />
     </van-list>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: true,
      list: [
        { id: 1, title: "学习vertualDom", date: "2018-09-23" },
        { id: 1, title: "学习vertualDom", date: "2018-09-24" }
      ]
    };
  },
  created() {
    this.list = this.list.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    console.log(this.list);
  },
  methods: {
    onLoad() {},
    linkTo(id) {
      this.$router.push(`/article/${id}`);
    }
  }
};
</script>
