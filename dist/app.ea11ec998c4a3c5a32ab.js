(function(e) {
  function t(t) {
    for (
      var r, a, c = t[0], i = t[1], s = t[2], l = 0, f = [];
      l < c.length;
      l++
    )
      (a = c[l]), o[a] && f.push(o[a][0]), (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    p && p(t);
    while (f.length) f.shift()();
    return u.push.apply(u, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    u = [];
  function c(e) {
    return (
      i.p +
      "js/" +
      ({}[e] || e) +
      "." +
      { "chunk-177f4349": "81385c85", "chunk-5c4107af": "46a4b520" }[e] +
      ".js"
    );
  }
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(e) {
    var t = [],
      n = { "chunk-177f4349": 1, "chunk-5c4107af": 1 };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function(t, n) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-177f4349": "6cf1c359",
                    "chunk-5c4107af": "9b5c012a"
                  }[e] +
                  ".css",
                a = i.p + r,
                o = document.getElementsByTagName("link"),
                u = 0;
              u < o.length;
              u++
            ) {
              var c = o[u],
                s = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (s === r || s === a)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (u = 0; u < l.length; u++) {
              (c = l[u]), (s = c.getAttribute("data-href"));
              if (s === r || s === a) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function(t) {
                var r = (t && t.target && t.target.src) || a,
                  o = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (o.request = r), n(o);
              }),
              (f.href = a);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function() {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var u = new Promise(function(t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = u));
        var s,
          l = document.getElementsByTagName("head")[0],
          f = document.createElement("script");
        (f.charset = "utf-8"),
          (f.timeout = 120),
          i.nc && f.setAttribute("nonce", i.nc),
          (f.src = c(e)),
          (s = function(t) {
            (f.onerror = f.onload = null), clearTimeout(p);
            var n = o[e];
            if (0 !== n) {
              if (n) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  a = t && t.target && t.target.src,
                  u = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"
                  );
                (u.type = r), (u.request = a), n[1](u);
              }
              o[e] = void 0;
            }
          });
        var p = setTimeout(function() {
          s({ type: "timeout", target: f });
        }, 12e4);
        (f.onerror = f.onload = s), l.appendChild(f);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var f = 0; f < s.length; f++) t(s[f]);
  var p = l;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    n("9f45"), (e.exports = n("56d7"));
  },
  "034f": function(e, t, n) {
    "use strict";
    var r = n("871f"),
      a = n.n(r);
    a.a;
  },
  1247: function(e, t, n) {},
  "1f07": function(e, t, n) {},
  "336c": function(e, t, n) {
    "use strict";
    var r = n("1f07"),
      a = n.n(r);
    a.a;
  },
  5562: function(e, t, n) {
    e.exports = n.p + "img/touxiang.3c539216.jpg";
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("3a0f"), n("a3a3"), n("4d0b");
    var r = n("f8d1"),
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              "div",
              { staticClass: "nav-warpper" },
              [
                n(
                  "van-button",
                  {
                    attrs: { type: "default", plain: "" },
                    on: { click: e.CHANGE_MENU }
                  },
                  [n("van-icon", { attrs: { name: "wap-nav" } })],
                  1
                )
              ],
              1
            ),
            e._v(" "),
            n(
              "van-popup",
              {
                attrs: { position: "top" },
                model: {
                  value: e.menuShow,
                  callback: function(t) {
                    e.menuShow = t;
                  },
                  expression: "menuShow"
                }
              },
              [n("Menu")],
              1
            ),
            e._v(" "),
            n(
              "transition",
              { attrs: { name: "slide-fade" } },
              [n("router-view")],
              1
            )
          ],
          1
        );
      },
      o = [],
      u = n("327b"),
      c = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "menu" },
          [n("Me"), e._v(" "), n("Nav")],
          1
        );
      },
      i = [],
      s = function() {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      l = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "me" }, [
            r("div", {}, [
              r("img", {
                staticClass: "headimgurl",
                attrs: { src: n("5562"), alt: "" }
              })
            ])
          ]);
        }
      ],
      f = { name: "me" },
      p = f,
      d = (n("da72"), n("048f")),
      v = Object(d["a"])(p, s, l, !1, null, "4168f13d", null);
    v.options.__file = "Me.vue";
    var m = v.exports,
      h = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "nav" },
          [
            n(
              "van-button",
              {
                attrs: { type: "default" },
                on: {
                  click: function(t) {
                    e.linkto("/");
                  }
                }
              },
              [e._v("Home")]
            ),
            e._v(" "),
            n(
              "van-button",
              {
                attrs: { type: "default" },
                on: {
                  click: function(t) {
                    e.linkto("/about");
                  }
                }
              },
              [e._v("About")]
            ),
            e._v(" "),
            n(
              "van-button",
              {
                attrs: { type: "default" },
                on: {
                  click: function(t) {
                    e.linkto("/");
                  }
                }
              },
              [e._v("Resume")]
            )
          ],
          1
        );
      },
      b = [],
      g = n("f2de"),
      _ = {
        name: "Nav",
        methods: Object(u["a"])({}, Object(g["b"])(["CHANGE_MENU"]), {
          linkto: function(e) {
            this.$router.push(e), this.CHANGE_MENU();
          }
        })
      },
      y = _,
      w = (n("336c"), Object(d["a"])(y, h, b, !1, null, "02765954", null));
    w.options.__file = "Nav.vue";
    var k = w.exports,
      E = { name: "Menu", components: { Me: m, Nav: k } },
      j = E,
      N = (n("ed66"), Object(d["a"])(j, c, i, !1, null, "873cc100", null));
    N.options.__file = "index.vue";
    var O = N.exports,
      S = {
        components: { Menu: O },
        data: function() {
          return {};
        },
        methods: Object(u["a"])({}, Object(g["b"])(["CHANGE_MENU"])),
        computed: {
          menuShow: {
            get: function() {
              return this.$store.state.menuShow;
            },
            set: function() {}
          }
        }
      },
      x = S,
      M = (n("034f"), Object(d["a"])(x, a, o, !1, null, null, null));
    M.options.__file = "App.vue";
    var C = M.exports,
      A = n("b8e5");
    r["a"].use(A["a"]);
    var P = new A["a"]({
        mode: "history",
        base: "",
        routes: [
          {
            path: "/",
            name: "home",
            component: function() {
              return n.e("chunk-5c4107af").then(n.bind(null, "16c0"));
            }
          },
          {
            path: "/about",
            name: "about",
            component: function() {
              return n.e("chunk-177f4349").then(n.bind(null, "f820"));
            }
          }
        ]
      }),
      T = { menuShow: !1 },
      $ = T,
      H = n("da47"),
      G = "CHANGE_MENU",
      U = Object(H["a"])({}, G, function(e) {
        e.menuShow = !e.menuShow;
      }),
      B = U;
    r["a"].use(g["a"]);
    var q = new g["a"].Store({ state: $, mutations: B }),
      J = n("a670"),
      L = (n("6f7c"), n("be52"));
    r["a"].use(J["a"]),
      r["a"].use(L["a"]),
      (r["a"].config.productionTip = !1),
      new r["a"]({
        router: P,
        store: q,
        render: function(e) {
          return e(C);
        }
      }).$mount("#app");
  },
  "871f": function(e, t, n) {},
  d2cc: function(e, t, n) {},
  da72: function(e, t, n) {
    "use strict";
    var r = n("1247"),
      a = n.n(r);
    a.a;
  },
  ed66: function(e, t, n) {
    "use strict";
    var r = n("d2cc"),
      a = n.n(r);
    a.a;
  }
});
