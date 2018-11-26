<template>
  <div>
    <div v-if="menu">
      <tree-menu />
    </div>
  </div>
</template>
<script>
export default {
  name: "treeMenu",
  props: ["menu"],
  computed: {
    isMenu() {
      const is = Array.isArray(this.menu);
      return is;
    }
  },
  created() {
    console.log(this.menu);
  }
};
</script>

