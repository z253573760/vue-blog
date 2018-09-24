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
      list: [{ id: 1, title: "学习vertualDom" }]
    };
  },
  methods: {
    onLoad() {},
    linkTo(id) {
      this.$router.push(`/article/${id}`);
    }
  }
};
</script>
