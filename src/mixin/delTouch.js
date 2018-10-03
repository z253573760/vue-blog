import handler from "@/utils/touchMove";

const delTouch = {
  created() {
    document.body.removeEventListener("touchmove", handler, false);
  },
  activated() {
    document.body.removeEventListener("touchmove", handler, false);
  }
};
export default delTouch;
