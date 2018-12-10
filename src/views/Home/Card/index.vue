<template>
  <div>
    <div class="warpper animated bounceIn">
      <van-row :gutter="16">
        <van-col span="16"
                 class="holiday-warpper ">
          <div class="item">{{city}} {{wether.tem1}} {{wether.wea}} </div>
          <div class="item"
               style="text-align:left">{{wether.air_tips}}</div>
        </van-col>
        <van-col span="4"
                 class="calendar-warpper">
          <Calendar />
        </van-col>
      </van-row>
      <MenuIcon />
    </div>

  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.warpper {
  padding: px2rem(20px);
  padding-top: px2rem(60px);
  font-weight: bold;
  color: #e8e8e8;
  height: 100vh;
  z-index: 99;
  .holiday-warpper {
    padding-top: px2rem(20px);
    .item {
      padding: px2rem(20px);
      font-size: px2rem(22px);
      background: rgba(136, 134, 134, 0.3);
      border-radius: px2rem(20px);
      box-shadow: 2px 2px 5px #333333;
      margin-bottom: px2rem(20px);
    }
  }
  .calendar-warpper {
    padding-top: px2rem(15px);
  }
}
</style>
<script>
import { mapState } from "vuex";
import { getWether } from "@/api/common";
import Calendar from "./Calendar";
import MenuIcon from "./MenuIcon";
export default {
  components: { Calendar, MenuIcon },
  data() {
    return {
      city: "厦门",
      wether: {
        wea: "",
        tem1: "",
        air_tips: ""
      }
    };
  },
  async created() {
    this.$loading.show();
    await this.getWether();
    this.$loading.hide();
  },
  methods: {
    async getWether() {
      const { data } = await getWether();
      const today = data.data[0];
      this.city = data.city;
      this.wether = today;
    }
  },
  computed: {
    ...mapState(["ip"])
  }
};
</script>
