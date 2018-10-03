<template>
   <transition name="fade">
  <div id="count-to-warpper" v-show="show">
    <div class="content-outer" id="content-outer">
      <div class="content-box"> 
       <div class="title">欢迎第<span class="count" :id="counterId">{{ init }}</span>位访客</div>
       <!-- <div class="btn" @click="changeShow">确定</div> -->
       <van-button 
        size="small"
        type="danger" 
        @click="changeShow"
        >
        确定</van-button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import CountUp from "countup";
export default {
  name: "CountTo",
  props: {
    init: {
      type: Number,
      default: 0
    },
    /**
     * @description 起始值，即动画开始前显示的数值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值，即动画结束后显示的数值
     */
    end: {
      type: Number,
      required: true
    },
    /**
     * @description 保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 分隔整数和小数的符号，默认是小数点
     */
    decimal: {
      type: String,
      default: "."
    },
    /**
     * @description 动画持续的时间，单位是秒
     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description 动画延迟开始的时间，单位是秒
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 是否禁用easing动画效果
     */
    uneasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组，分组后每三位会用一个符号分隔
     */
    usegroup: {
      type: Boolean,
      default: false
    },
    /**
     * @description 用于分组(usegroup)的符号
     */
    separator: {
      type: String,
      default: ","
    },
    /**
     * @description 是否简化显示，设为true后会使用unit单位来做相关省略
     */
    simplify: {
      type: Boolean,
      default: false
    },
    /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
     */
    unit: {
      type: Array,
      default() {
        return [[3, "K+"], [6, "M+"], [9, "B+"]];
      }
    },
    countClass: {
      type: String,
      default: ""
    },
    unitClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      counter: null,
      unitText: "",
      show: true
    };
  },
  computed: {
    counterId() {
      return `count_to_${this._uid}`;
    }
  },
  methods: {
    changeShow() {
      this.show = false;
    },
    getHandleVal(val, len) {
      return {
        endVal: parseInt(val / Math.pow(10, this.unit[len - 1][0])),
        unitText: this.unit[len - 1][1]
      };
    },
    transformValue(val) {
      let len = this.unit.length;
      let res = {
        endVal: 0,
        unitText: ""
      };
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val;
      else {
        for (let i = 1; i < len; i++) {
          if (
            val >= Math.pow(10, this.unit[i - 1][0]) &&
            val < Math.pow(10, this.unit[i][0])
          )
            res = this.getHandleVal(val, i);
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0]))
        res = this.getHandleVal(val, len);
      return res;
    },
    getValue(val) {
      let res = 0;
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val);
        this.unitText = unitText;
        res = endVal;
      } else {
        res = val;
      }
      return res;
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      let endVal = this.getValue(this.end);
      this.counter = new CountUp(
        this.counterId,
        this.startVal,
        endVal,
        this.decimals,
        this.duration,
        {
          useEasing: !this.uneasing,
          useGrouping: this.useGroup,
          separator: this.separator,
          decimal: this.decimal
        }
      );
      setTimeout(() => {
        if (!this.counter.error) this.counter.start();
      }, this.delay);
    });
  },
  watch: {
    end(newVal) {
      const endVal = this.getValue(newVal);
      this.counter.update(endVal);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
#count-to-warpper {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  font-size: px2rem(20px);
  letter-spacing: px2rem(5px);
  justify-content: space-around;
  color: black;
  background: rgba(0, 0, 0, 0.4);
  .content-outer {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .content-box {
      width: px2rem(300px);
      height: px2rem(250px);
      line-height: px2rem(120px);
      border-radius: px2rem(30px);
      padding: px2rem(15px);
      // background: url("../../assets/image/xiaohuangren.jpeg");
      // background-size: 100% 100%;
      background: rgba(255, 255, 255, 0.7);
      .count {
        letter-spacing: px2rem(0px);
        font-size: px2rem(40px);
        color: red;
      }
      .btn {
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
