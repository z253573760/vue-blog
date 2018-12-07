<template>
  <div>
    <div class="warpper-date">
      <span class="box left"> </span>
      <span class="box right"> </span>
      <div class="weekday">
        {{weekday}}
      </div>
      <div class="date">{{date}}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.warpper-date {
  position: relative;
  color: black;
  display: inline-block;
  width: px2rem(150px);
  height: px2rem(150px);
  background: white;
  border-radius: px2rem(30px);
  .box {
    display: inline-block;
    position: absolute;
    width: px2rem(10px);
    height: px2rem(20px);
    background: #e8e8e8;
    border-radius: px2rem(5px);
    top: px2rem(-10px);
  }
  .left {
    left: px2rem(40px);
  }
  .right {
    right: px2rem(40px);
  }
  .weekday {
    font-size: px2rem(24px);
    color: white;
    background: skyblue;
    height: px2rem(45px);
    line-height: px2rem(45px);
    border-top-left-radius: px2rem(30px);
    border-top-right-radius: px2rem(30px);
  }
  .date {
    font-size: px2rem(80px);
    line-height: px2rem(105px);
    border-radius: px2rem(30px);
  }
}
</style>
<script>
export default {
  data() {
    return {
      today: new Date()
    };
  },
  computed: {
    month() {
      const dist = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
      };
      const month = "0" + (this.today.getMonth() + 1);
      const result = month.substring(month.length - 2, month.length);
      return dist[result];
    },
    date() {
      const d = "0" + this.today.getDate();
      return d.substring(d.length - 2, d.length);
    },
    weekday() {
      const dict = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        0: "Sunday"
      };
      const d = this.today.getDay();
      return dict[d];
    }
  }
};
</script>

