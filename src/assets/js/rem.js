// !(function(n, e) {
//   var t = n.documentElement,
//     i = "orientationchange" in window ? "orientationchange" : "resize",
//     d = function() {
//       var n = t.clientWidth;
//       //n && (t.style.fontSize = (n > 750 ? 750 : n) / 750 * 100 + "px")
//       n && (t.style.fontSize = (n / 750) * 100 + "px");
//     };
//   n.addEventListener &&
//     (e.addEventListener(i, d, !1),
//     d(),
//     n.addEventListener("DOMContentLoaded", d, !1));
// })(document, window);
!(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
