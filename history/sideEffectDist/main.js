(() => {
  "use strict";
  var e,
    t,
    r,
    n,
    s,
    o,
    i,
    a,
    d,
    u,
    l,
    c,
    m,
    f,
    p = {
      "./node_modules/css-loader/dist/cjs.js!./src/index.css": (e, t, r) => {
        r.d(t, { Z: () => o });
        var n = r("./node_modules/css-loader/dist/runtime/api.js"),
          s = r.n(n)()(function (e) {
            return e[1];
          });
        s.push([e.id, "body {\n  background-color: skyblue;\n}\n", ""]);
        const o = s;
      },
      "./node_modules/css-loader/dist/runtime/api.js": (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
              }).join("");
            }),
            (t.i = function (e, r, n) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var s = {};
              if (n)
                for (var o = 0; o < this.length; o++) {
                  var i = this[o][0];
                  null != i && (s[i] = !0);
                }
              for (var a = 0; a < e.length; a++) {
                var d = [].concat(e[a]);
                (n && s[d[0]]) ||
                  (r &&
                    (d[2]
                      ? (d[2] = "".concat(r, " and ").concat(d[2]))
                      : (d[2] = r)),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
        e
      ) => {
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var o = {}, i = [], a = 0; a < e.length; a++) {
            var d = e[a],
              u = n.base ? d[0] + n.base : d[0],
              l = o[u] || 0,
              c = "".concat(u, " ").concat(l);
            o[u] = l + 1;
            var m = r(c),
              f = { css: d[1], media: d[2], sourceMap: d[3] };
            -1 !== m
              ? (t[m].references++, t[m].updater(f))
              : t.push({ identifier: c, updater: s(f, n), references: 1 }),
              i.push(c);
          }
          return i;
        }
        function s(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, s) {
          var o = n((e = e || []), (s = s || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var a = r(o[i]);
              t[a].references--;
            }
            for (var d = n(e, s), u = 0; u < o.length; u++) {
              var l = r(o[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = d;
          };
        };
      },
      "./node_modules/style-loader/dist/runtime/insertBySelector.js": (e) => {
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t), t;
        };
      },
      "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
        (e, t, r) => {
          e.exports = function (e) {
            var t = r.nc;
            t && e.setAttribute("nonce", t);
          };
        },
      "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = r.css,
                  s = r.media,
                  o = r.sourceMap;
                s ? e.setAttribute("media", s) : e.removeAttribute("media"),
                  o &&
                    "undefined" != typeof btoa &&
                    (n +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        " */"
                      )),
                  t.styleTagTransform(n, e);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    y = {};
  function v(e) {
    var t = y[e];
    if (void 0 !== t) return t.exports;
    var r = (y[e] = { id: e, exports: {} });
    return p[e](r, r.exports, v), r.exports;
  }
  (v.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return v.d(t, { a: t }), t;
  }),
    (v.d = (e, t) => {
      for (var r in t)
        v.o(t, r) &&
          !v.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = v(
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
    )),
    (t = v.n(e)),
    (r = v("./node_modules/style-loader/dist/runtime/styleDomAPI.js")),
    (n = v.n(r)),
    (s = v("./node_modules/style-loader/dist/runtime/insertBySelector.js")),
    (o = v.n(s)),
    (i = v(
      "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
    )),
    (a = v.n(i)),
    (d = v("./node_modules/style-loader/dist/runtime/insertStyleElement.js")),
    (u = v.n(d)),
    (l = v("./node_modules/style-loader/dist/runtime/styleTagTransform.js")),
    (c = v.n(l)),
    (m = v("./node_modules/css-loader/dist/cjs.js!./src/index.css")),
    ((f = {}).styleTagTransform = c()),
    (f.setAttributes = a()),
    (f.insert = o().bind(null, "head")),
    (f.domAPI = n()),
    (f.insertStyleElement = u()),
    t()(m.Z, f),
    m.Z && m.Z.locals && m.Z.locals;
})();
