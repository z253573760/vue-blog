import handler from "@/utils/touchMove";

const touchMove = {
  created() {
    document.body.addEventListener("touchmove", handler, false);
  }
};
export default touchMove;
