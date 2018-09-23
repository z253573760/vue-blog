require("../style/default.scss");
//获取屏幕宽度(viewport)
let htmlWidth =
  document.documentElement.clientWidth || document.body.clientWidth;

// 获取html dom
let htmlDom = document.getElementsByTagName("html")[0];

// 设置HTML 的 fontSize
htmlDom.style.fontSize = htmlWidth / 10 + "px";
