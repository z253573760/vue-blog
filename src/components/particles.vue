<template>
   <div class="particles">
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
      >
        </vue-particles>
   </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.lizi {
  height: 80%;
}
</style>
