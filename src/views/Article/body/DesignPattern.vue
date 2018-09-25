<template>
    <div class="body">
       <h5 class="title">{{title}}</h5>
       <p>一、构造器模式</p>
       <img src="@/assets/image/prototype1.png" alt="">
       <p>二、原型模式</p>
       <img src="@/assets/image/prototype2.png" alt="">
       <p>三、建造者模式</p>
       <img src="@/assets/image/builder1.png" alt="">
       <p>四、工厂模式</p>
       <img src="@/assets/image/factory.png" alt="">
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "设计模式"
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
