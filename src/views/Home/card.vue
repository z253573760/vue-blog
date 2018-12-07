<template>
  <div>
    <div class="warpper animated bounceIn">
      <van-row :gutter="16">
        <van-col span="16"
                 class="holiday-warpper ">
          <div class="item">{{ip.province}} {{ip.city}}</div>
          <div class="item">{{holiday.solarTerms}} {{holiday.lunarCalendar}}</div>
        </van-col>
        <van-col span="4"
                 class="calendar-warpper">
          <Calendar />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.warpper {
  padding-top: px2rem(40px);
  font-weight: bold;
  color: #e8e8e8;
  .holiday-warpper {
    padding-top: px2rem(20px);
    .item {
      padding: px2rem(20px);
      font-size: px2rem(24px);
      background: rgba(136, 134, 134, 0.3);
      border-radius: px2rem(20px);
      box-shadow: 2px 2px 5px #333333;
      margin-bottom: px2rem(20px);
    }
  }
  .calendar-warpper {
    padding-top: px2rem(30px);
  }
}
</style>
<script>
import { mapState } from "vuex";
import { getHoliday } from "@/api/common";
import Calendar from "./calendar";
export default {
  components: { Calendar },
  data() {
    return {
      holiday: {
        avoid: "",
        chineseZodiac: "",
        date: "",
        dayOfYear: "",
        solarTerms: "",
        suit: "",
        typeDes: "",
        weekOfYear: "",
        yearTips: ""
      },
      today: new Date()
    };
  },
  async created() {
    await this.getHoliday();
  },
  methods: {
    async getHoliday() {
      const { data } = await getHoliday();
      this.holiday = data;
    }
  },
  computed: {
    ...mapState(["ip"])
  }
};
</script>


