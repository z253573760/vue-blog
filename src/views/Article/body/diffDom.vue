<template>
    <div class="body">
        <h5>{{body.title}}</h5>
        <!-- <p class="title">一、虚拟Dom</p> -->
        <p class="content">
          写网页时，我们会经常使用JS来操作一些DOM元素来完成我们的业务需求,
          但是其实dom是很慢的，而且操作DOM的性能损耗非常的巨大，所以我们使用JS构造
          一个对象(虚拟DOM)让我们要把DOM的操作全部反应在这个JS对象身上，最终再把这
          个JS对象映射到真是DOM中交给浏览器渲染。
        </p>
        <!-- <p>1. js对象 模拟 vertualDom</p>
        <p>2. 把vertualDom 转成 真是DOM</p>
        <p>3. 如果有时间发生修改了 vertualDom 比较2个vertualDom 的差异 得到 差异对象</p>
        <p>4. 把差异对象应用到真是DOM树上</p> -->
        <img src="@/assets/image/diffDom1.png" alt="">
        <img src="@/assets/image/diffDom2.png" alt="">
        <img src="@/assets/image/diffDom3.png" alt="">
    </div>
</template>
<script>
export default {
  data() {
    return {
      body: {
        title: "学习vertualDom以及Dom diff"
      }
    };
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/css/mixin.scss";
.body {
  @extend .bg;
  padding: px2rem(15px);
  font-weight: bold;
  font-weight: normal;
  text-align: left;
  h5 {
    text-align: center;
    font-size: px2rem(28px);
    margin-bottom: px2rem(20px);
  }
  .title {
    font-weight: bold;
    margin: px2rem(10px);
  }
  .content {
    letter-spacing: px2rem(3px);
    text-align: left;
    font-size: px2rem(21px);
    text-indent: px2rem(32px);
    margin: px2rem(10px);
  }
  img {
    width: 100%;
    overflow: hidden;
  }
}
</style>
