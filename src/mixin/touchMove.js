import handler from "@/assets/js/touchMove";

const touchMove = {
  created() {
    document.body.addEventListener("touchmove", handler, false);
  }
};
export default touchMove;
