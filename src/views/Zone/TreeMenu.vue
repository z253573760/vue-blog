<template>
  <div>

    <div class="warpper">
      <div v-for="(item,index) in list"
           :key="index">
        <p class="title"
           @click="toggle(index)">
          <span v-if="item.children">
            <span v-if="statusArr[index]">-</span>
            <span v-else>+</span>
          </span>
          <span v-else>&nbsp;</span>
          {{item.title}}
        </p>
        <div class="tree-warpper">
          <transition name="slide-fade">
            <tree-menu v-if="item.children&&statusArr[index]"
                       :list="item.children">
            </tree-menu>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  width: 150px;
  height: 80px;
  line-height: 80px;
  background: #3a3a3a;
  text-align: center;
  border: 1px solid #e8e8ee;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  font-size: 22px;
}
.tree-warpper {
  margin-left: 20px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-20px) translateY(-50px);
}
.slide-fade-move {
  transition: all 1s ease;
}
.slide-fade-leave-to {
  position: absolute;
}
</style>
<script>
export default {
  name: "treeMenu",
  props: {
    list: [Object, Array]
  },
  created() {
    const arr = Array(this.list.length).fill(false);
    this.statusArr = arr;
  },
  data() {
    return {
      statusArr: []
    };
  },
  methods: {
    toggle(index) {
      const arr = [...this.statusArr];
      arr[index] = !arr[index];
      this.statusArr = arr;
    }
  }
};
</script>
