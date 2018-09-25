<template>
    <div class="body">
        <h5 class="title">{{title}}</h5>
        <p>1.JavaScript 里有哪些数据类型，解释清楚 null 和 undefined，解释清楚原始数据类型和引用数据类型。比如讲一下 1 和 Number(1)的区别</p>
        <img src="@/assets/image/q-js1.png" alt="">
        <p>2. prototype是什么东西，原型链的理解，什么时候用prototype</p>
        <img src="@/assets/image/q-js2.png" alt="">
        <img src="@/assets/image/q-js3.png" alt="">
        <!-- <img src="@/assets/image/q-css2.png" alt="">
        <p>3.如何保持浮层水平垂直居中 </p>
        <img src="@/assets/image/q-css3.png" alt="">
        <p>4.样式的层级关系，选择器优先级，样式冲突，以及抽离样式模块</p>
        <img src="@/assets/image/q-css4.png" alt="">
        <p>5.px和em和rem的区别，CSS中link 和@import的区别是?</p>
        <img src="@/assets/image/q-css5.png" alt=""> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "2018前端面试题(JS)"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.body {
  @extend .bg;
  padding: px2rem(15px);
  font-weight: bold;
  font-weight: normal;
  text-align: left;
  .title {
    text-align: center;
    font-size: px2rem(28px);
    margin-bottom: px2rem(20px);
    font-weight: normal;
  }

  img {
    width: 100%;
    margin-bottom: px2rem(10px);
  }
}
</style>
