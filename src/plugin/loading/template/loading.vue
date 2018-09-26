<template>
  <div v-show="show" class="loadBox">
    <div class="text">
      <div class="loader loader-1">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.loadBox {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  top: 0;
  overflow: hidden;
  text-align: center;
}
.loadBox .text {
  position: absolute;
  font-size: 13px;
  left: 50%;
  top: 50%;
  color: white;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  line-height: 90px;
  z-index: 999999;
  display: block;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15%;
}
.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #f50057;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}
.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #f50057;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}
@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/* @keyframes loader-1-outter {
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
}
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
} */
</style>
