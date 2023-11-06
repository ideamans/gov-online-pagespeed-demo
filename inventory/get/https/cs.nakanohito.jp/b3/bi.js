(function () {
  function e(o, n) {
    function r(e) {
      if (r[e] !== p) return r[e];
      var t;
      if ("bug-string-char-index" == e) t = "a" != "a"[0];
      else if ("json" == e) t = r("json-stringify") && r("json-parse");
      else {
        var i,
          o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        if ("json-stringify" == e) {
          var c = n.stringify,
            d = "function" == typeof c && _;
          if (d) {
            (i = function () {
              return 1;
            }).toJSON = i;
            try {
              d =
                "0" === c(0) &&
                "0" === c(new s()) &&
                '""' == c(new a()) &&
                c(g) === p &&
                c(p) === p &&
                c() === p &&
                "1" === c(i) &&
                "[1]" == c([i]) &&
                "[null]" == c([p]) &&
                "null" == c(null) &&
                "[null,null,null]" == c([p, g, null]) &&
                c({ a: [i, !0, !1, null, "\x00\b\n\f\r	"] }) == o &&
                "1" === c(null, i) &&
                "[\n 1,\n 2\n]" == c([1, 2], null, 1) &&
                '"-271821-04-20T00:00:00.000Z"' == c(new u(-864e13)) &&
                '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) &&
                '"-000001-01-01T00:00:00.000Z"' == c(new u(-621987552e5)) &&
                '"1969-12-31T23:59:59.999Z"' == c(new u(-1));
            } catch (l) {
              d = !1;
            }
          }
          t = d;
        }
        if ("json-parse" == e) {
          var f = n.parse;
          if ("function" == typeof f)
            try {
              if (0 === f("0") && !f(!1)) {
                i = f(o);
                var m = 5 == i.a.length && 1 === i.a[0];
                if (m) {
                  try {
                    m = !f('"	"');
                  } catch (l) {}
                  if (m)
                    try {
                      m = 1 !== f("01");
                    } catch (l) {}
                  if (m)
                    try {
                      m = 1 !== f("1.");
                    } catch (l) {}
                }
              }
            } catch (l) {
              m = !1;
            }
          t = m;
        }
      }
      return (r[e] = !!t);
    }
    o || (o = i.Object()), n || (n = i.Object());
    var s = o.Number || i.Number,
      a = o.String || i.String,
      c = o.Object || i.Object,
      u = o.Date || i.Date,
      d = o.SyntaxError || i.SyntaxError,
      l = o.TypeError || i.TypeError,
      f = o.Math || i.Math,
      m = o.JSON || i.JSON;
    "object" == typeof m && m && ((n.stringify = m.stringify), (n.parse = m.parse));
    var h,
      v,
      p,
      y = c.prototype,
      g = y.toString,
      _ = new u(-0xc782b5b800cec);
    try {
      _ =
        -109252 == _.getUTCFullYear() &&
        0 === _.getUTCMonth() &&
        1 === _.getUTCDate() &&
        10 == _.getUTCHours() &&
        37 == _.getUTCMinutes() &&
        6 == _.getUTCSeconds() &&
        708 == _.getUTCMilliseconds();
    } catch (w) {}
    if (!r("json")) {
      var B = "[object Function]",
        b = "[object Date]",
        E = "[object Number]",
        O = "[object String]",
        V = "[object Array]",
        C = "[object Boolean]",
        k = r("bug-string-char-index");
      if (!_)
        var M = f.floor,
          L = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          S = function (e, t) {
            return (
              L[t] +
              365 * (e - 1970) +
              M((e - 1969 + (t = +(t > 1))) / 4) -
              M((e - 1901 + t) / 100) +
              M((e - 1601 + t) / 400)
            );
          };
      if (
        ((h = y.hasOwnProperty) ||
          (h = function (e) {
            var t,
              i = {};
            return (
              ((i.__proto__ = null), (i.__proto__ = { toString: 1 }), i).toString != g
                ? (h = function (e) {
                    var t = this.__proto__,
                      i = e in ((this.__proto__ = null), this);
                    return (this.__proto__ = t), i;
                  })
                : ((t = i.constructor),
                  (h = function (e) {
                    var i = (this.constructor || t).prototype;
                    return e in this && !(e in i && this[e] === i[e]);
                  })),
              (i = null),
              h.call(this, e)
            );
          }),
        (v = function (e, i) {
          var o,
            n,
            r,
            s = 0;
          ((o = function () {
            this.valueOf = 0;
          }).prototype.valueOf = 0),
            (n = new o());
          for (r in n) h.call(n, r) && s++;
          return (
            (o = n = null),
            s
              ? (v =
                  2 == s
                    ? function (e, t) {
                        var i,
                          o = {},
                          n = g.call(e) == B;
                        for (i in e) (n && "prototype" == i) || h.call(o, i) || !(o[i] = 1) || !h.call(e, i) || t(i);
                      }
                    : function (e, t) {
                        var i,
                          o,
                          n = g.call(e) == B;
                        for (i in e) (n && "prototype" == i) || !h.call(e, i) || (o = "constructor" === i) || t(i);
                        (o || h.call(e, (i = "constructor"))) && t(i);
                      })
              : ((n = [
                  "valueOf",
                  "toString",
                  "toLocaleString",
                  "propertyIsEnumerable",
                  "isPrototypeOf",
                  "hasOwnProperty",
                  "constructor",
                ]),
                (v = function (e, i) {
                  var o,
                    r,
                    s = g.call(e) == B,
                    a =
                      (!s && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty) || h;
                  for (o in e) (s && "prototype" == o) || !a.call(e, o) || i(o);
                  for (r = n.length; (o = n[--r]); a.call(e, o) && i(o));
                })),
            v(e, i)
          );
        }),
        !r("json-stringify"))
      ) {
        var P = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
          A = "000000",
          R = function (e, t) {
            return (A + (t || 0)).slice(-e);
          },
          D = "\\u00",
          T = function (e) {
            for (var t = '"', i = 0, o = e.length, n = !k || o > 10, r = n && (k ? e.split("") : e); o > i; i++) {
              var s = e.charCodeAt(i);
              switch (s) {
                case 8:
                case 9:
                case 10:
                case 12:
                case 13:
                case 34:
                case 92:
                  t += P[s];
                  break;
                default:
                  if (32 > s) {
                    t += D + R(2, s.toString(16));
                    break;
                  }
                  t += n ? r[i] : e.charAt(i);
              }
            }
            return t + '"';
          },
          x = function (e, t, i, o, n, r, s) {
            var a, c, u, d, f, m, y, _, w, B, k, L, P, A, D, F;
            try {
              a = t[e];
            } catch (I) {}
            if ("object" == typeof a && a)
              if (((c = g.call(a)), c != b || h.call(a, "toJSON")))
                "function" == typeof a.toJSON &&
                  ((c != E && c != O && c != V) || h.call(a, "toJSON")) &&
                  (a = a.toJSON(e));
              else if (a > -1 / 0 && 1 / 0 > a) {
                if (S) {
                  for (f = M(a / 864e5), u = M(f / 365.2425) + 1970 - 1; S(u + 1, 0) <= f; u++);
                  for (d = M((f - S(u, 0)) / 30.42); S(u, d + 1) <= f; d++);
                  (f = 1 + f - S(u, d)),
                    (m = ((a % 864e5) + 864e5) % 864e5),
                    (y = M(m / 36e5) % 24),
                    (_ = M(m / 6e4) % 60),
                    (w = M(m / 1e3) % 60),
                    (B = m % 1e3);
                } else
                  (u = a.getUTCFullYear()),
                    (d = a.getUTCMonth()),
                    (f = a.getUTCDate()),
                    (y = a.getUTCHours()),
                    (_ = a.getUTCMinutes()),
                    (w = a.getUTCSeconds()),
                    (B = a.getUTCMilliseconds());
                a =
                  (0 >= u || u >= 1e4 ? (0 > u ? "-" : "+") + R(6, 0 > u ? -u : u) : R(4, u)) +
                  "-" +
                  R(2, d + 1) +
                  "-" +
                  R(2, f) +
                  "T" +
                  R(2, y) +
                  ":" +
                  R(2, _) +
                  ":" +
                  R(2, w) +
                  "." +
                  R(3, B) +
                  "Z";
              } else a = null;
            if ((i && (a = i.call(t, e, a)), null === a)) return "null";
            if (((c = g.call(a)), c == C)) return "" + a;
            if (c == E) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
            if (c == O) return T("" + a);
            if ("object" == typeof a) {
              for (A = s.length; A--; ) if (s[A] === a) throw l();
              if ((s.push(a), (k = []), (D = r), (r += n), c == V)) {
                for (P = 0, A = a.length; A > P; P++) (L = x(P, a, i, o, n, r, s)), k.push(L === p ? "null" : L);
                F = k.length ? (n ? "[\n" + r + k.join(",\n" + r) + "\n" + D + "]" : "[" + k.join(",") + "]") : "[]";
              } else
                v(o || a, function (e) {
                  var t = x(e, a, i, o, n, r, s);
                  t !== p && k.push(T(e) + ":" + (n ? " " : "") + t);
                }),
                  (F = k.length
                    ? n
                      ? "{\n" + r + k.join(",\n" + r) + "\n" + D + "}"
                      : "{" + k.join(",") + "}"
                    : "{}");
              return s.pop(), F;
            }
          };
        n.stringify = function (e, i, o) {
          var n, r, s, a;
          if (t[typeof i] && i)
            if ((a = g.call(i)) == B) r = i;
            else if (a == V) {
              s = {};
              for (var c, u = 0, d = i.length; d > u; c = i[u++], a = g.call(c), (a == O || a == E) && (s[c] = 1));
            }
          if (o)
            if ((a = g.call(o)) == E) {
              if ((o -= o % 1) > 0) for (n = "", o > 10 && (o = 10); n.length < o; n += " ");
            } else a == O && (n = o.length <= 10 ? o : o.slice(0, 10));
          return x("", ((c = {}), (c[""] = e), c), r, s, n, "", []);
        };
      }
      if (!r("json-parse")) {
        var F,
          I,
          N = a.fromCharCode,
          j = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r" },
          U = function () {
            throw ((F = I = null), d());
          },
          H = function () {
            for (var e, t, i, o, n, r = I, s = r.length; s > F; )
              switch ((n = r.charCodeAt(F))) {
                case 9:
                case 10:
                case 13:
                case 32:
                  F++;
                  break;
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                  return (e = k ? r.charAt(F) : r[F]), F++, e;
                case 34:
                  for (e = "@", F++; s > F; )
                    if (((n = r.charCodeAt(F)), 32 > n)) U();
                    else if (92 == n)
                      switch ((n = r.charCodeAt(++F))) {
                        case 92:
                        case 34:
                        case 47:
                        case 98:
                        case 116:
                        case 110:
                        case 102:
                        case 114:
                          (e += j[n]), F++;
                          break;
                        case 117:
                          for (t = ++F, i = F + 4; i > F; F++)
                            (n = r.charCodeAt(F)),
                              (n >= 48 && 57 >= n) || (n >= 97 && 102 >= n) || (n >= 65 && 70 >= n) || U();
                          e += N("0x" + r.slice(t, F));
                          break;
                        default:
                          U();
                      }
                    else {
                      if (34 == n) break;
                      for (n = r.charCodeAt(F), t = F; n >= 32 && 92 != n && 34 != n; ) n = r.charCodeAt(++F);
                      e += r.slice(t, F);
                    }
                  if (34 == r.charCodeAt(F)) return F++, e;
                  U();
                default:
                  if (((t = F), 45 == n && ((o = !0), (n = r.charCodeAt(++F))), n >= 48 && 57 >= n)) {
                    for (
                      48 == n && ((n = r.charCodeAt(F + 1)), n >= 48 && 57 >= n) && U(), o = !1;
                      s > F && ((n = r.charCodeAt(F)), n >= 48 && 57 >= n);
                      F++
                    );
                    if (46 == r.charCodeAt(F)) {
                      for (i = ++F; s > i && ((n = r.charCodeAt(i)), n >= 48 && 57 >= n); i++);
                      i == F && U(), (F = i);
                    }
                    if (((n = r.charCodeAt(F)), 101 == n || 69 == n)) {
                      for (
                        n = r.charCodeAt(++F), (43 != n && 45 != n) || F++, i = F;
                        s > i && ((n = r.charCodeAt(i)), n >= 48 && 57 >= n);
                        i++
                      );
                      i == F && U(), (F = i);
                    }
                    return +r.slice(t, F);
                  }
                  if ((o && U(), "true" == r.slice(F, F + 4))) return (F += 4), !0;
                  if ("false" == r.slice(F, F + 5)) return (F += 5), !1;
                  if ("null" == r.slice(F, F + 4)) return (F += 4), null;
                  U();
              }
            return "$";
          },
          X = function (e) {
            var t, i;
            if (("$" == e && U(), "string" == typeof e)) {
              if ("@" == (k ? e.charAt(0) : e[0])) return e.slice(1);
              if ("[" == e) {
                for (t = []; (e = H()), "]" != e; i || (i = !0))
                  i && ("," == e ? ((e = H()), "]" == e && U()) : U()), "," == e && U(), t.push(X(e));
                return t;
              }
              if ("{" == e) {
                for (t = {}; (e = H()), "}" != e; i || (i = !0))
                  i && ("," == e ? ((e = H()), "}" == e && U()) : U()),
                    ("," != e && "string" == typeof e && "@" == (k ? e.charAt(0) : e[0]) && ":" == H()) || U(),
                    (t[e.slice(1)] = X(H()));
                return t;
              }
              U();
            }
            return e;
          },
          q = function (e, t, i) {
            var o = z(e, t, i);
            o === p ? delete e[t] : (e[t] = o);
          },
          z = function (e, t, i) {
            var o,
              n = e[t];
            if ("object" == typeof n && n)
              if (g.call(n) == V) for (o = n.length; o--; ) q(n, o, i);
              else
                v(n, function (e) {
                  q(n, e, i);
                });
            return i.call(e, t, n);
          };
        n.parse = function (e, t) {
          var i, o;
          return (
            (F = 0),
            (I = "" + e),
            (i = X(H())),
            "$" != H() && U(),
            (F = I = null),
            t && g.call(t) == B ? z(((o = {}), (o[""] = i), o), "", t) : i
          );
        };
      }
    }
    return (n.runInContext = e), n;
  }
  var t = { function: !0, object: !0 },
    i = window,
    o = e(
      i,
      (i._UI_JSON = {
        noConflict: function () {
          return o;
        },
      })
    );
  i._UI_JSON = { parse: o.parse, stringify: o.stringify };
}).call(this),
  (function (e) {
    function t(e) {
      throw RangeError(S[e]);
    }
    function i(e, t) {
      for (var i = e.length, o = []; i--; ) o[i] = t(e[i]);
      return o;
    }
    function o(e, t) {
      var o = e.split("@"),
        n = "";
      o.length > 1 && ((n = o[0] + "@"), (e = o[1]));
      var r = e.split(L),
        s = i(r, t).join(".");
      return n + s;
    }
    function n(e) {
      for (var t, i, o = [], n = 0, r = e.length; r > n; )
        (t = e.charCodeAt(n++)),
          t >= 55296 && 56319 >= t && r > n
            ? ((i = e.charCodeAt(n++)),
              56320 == (64512 & i) ? o.push(((1023 & t) << 10) + (1023 & i) + 65536) : (o.push(t), n--))
            : o.push(t);
      return o;
    }
    function r(e) {
      return i(e, function (e) {
        var t = "";
        return (
          e > 65535 && ((e -= 65536), (t += R(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += R(e))
        );
      }).join("");
    }
    function s(e) {
      return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : _;
    }
    function a(e, t) {
      return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
    }
    function c(e, t, i) {
      var o = 0;
      for (e = i ? A(e / E) : e >> 1, e += A(e / t); e > (P * B) >> 1; o += _) e = A(e / P);
      return A(o + ((P + 1) * e) / (e + b));
    }
    function u(e) {
      var i,
        o,
        n,
        a,
        u,
        d,
        l,
        f,
        m,
        h,
        v = [],
        p = e.length,
        y = 0,
        b = V,
        E = O;
      for (o = e.lastIndexOf(C), 0 > o && (o = 0), n = 0; o > n; ++n)
        e.charCodeAt(n) >= 128 && t("not-basic"), v.push(e.charCodeAt(n));
      for (a = o > 0 ? o + 1 : 0; p > a; ) {
        for (
          u = y, d = 1, l = _;
          a >= p && t("invalid-input"),
            (f = s(e.charCodeAt(a++))),
            (f >= _ || f > A((g - y) / d)) && t("overflow"),
            (y += f * d),
            (m = E >= l ? w : l >= E + B ? B : l - E),
            !(m > f);
          l += _
        )
          (h = _ - m), d > A(g / h) && t("overflow"), (d *= h);
        (i = v.length + 1),
          (E = c(y - u, i, 0 == u)),
          A(y / i) > g - b && t("overflow"),
          (b += A(y / i)),
          (y %= i),
          v.splice(y++, 0, b);
      }
      return r(v);
    }
    function d(e) {
      var i,
        o,
        r,
        s,
        u,
        d,
        l,
        f,
        m,
        h,
        v,
        p,
        y,
        b,
        E,
        k = [];
      for (e = n(e), p = e.length, i = V, o = 0, u = O, d = 0; p > d; ++d) (v = e[d]), 128 > v && k.push(R(v));
      for (r = s = k.length, s && k.push(C); p > r; ) {
        for (l = g, d = 0; p > d; ++d) (v = e[d]), v >= i && l > v && (l = v);
        for (y = r + 1, l - i > A((g - o) / y) && t("overflow"), o += (l - i) * y, i = l, d = 0; p > d; ++d)
          if (((v = e[d]), i > v && ++o > g && t("overflow"), v == i)) {
            for (f = o, m = _; (h = u >= m ? w : m >= u + B ? B : m - u), !(h > f); m += _)
              (E = f - h), (b = _ - h), k.push(R(a(h + (E % b), 0))), (f = A(E / b));
            k.push(R(a(f, 0))), (u = c(o, y, r == s)), (o = 0), ++r;
          }
        ++o, ++i;
      }
      return k.join("");
    }
    function l(e) {
      return o(e, function (e) {
        return k.test(e) ? u(e.slice(4).toLowerCase()) : e;
      });
    }
    function f(e) {
      return o(e, function (e) {
        return M.test(e) ? "xn--" + d(e) : e;
      });
    }
    var m = "object" == typeof exports && exports && !exports.nodeType && exports,
      h = "object" == typeof module && module && !module.nodeType && module,
      v = "object" == typeof global && global;
    (v.global !== v && v.window !== v && v.self !== v) || (e = v);
    var p,
      y,
      g = 2147483647,
      _ = 36,
      w = 1,
      B = 26,
      b = 38,
      E = 700,
      O = 72,
      V = 128,
      C = "-",
      k = /^xn--/,
      M = /[^\x20-\x7E]/,
      L = /[\x2E\u3002\uFF0E\uFF61]/g,
      S = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      P = _ - w,
      A = Math.floor,
      R = String.fromCharCode;
    if (
      ((p = { version: "1.3.1", ucs2: { decode: n, encode: r }, decode: u, encode: d, toASCII: f, toUnicode: l }),
      "function" == typeof __define && "object" == typeof __define.amd && __define.amd)
    )
      __define("punycode", function () {
        return p;
      });
    else if (m && h)
      if (module.exports == m) h.exports = p;
      else for (y in p) p.hasOwnProperty(y) && (m[y] = p[y]);
    else e.punycode = p;
  })(this),
  Object.keys ||
    (Object.keys = (function () {
      var e = Object.prototype.hasOwnProperty,
        t = !{ toString: null }.propertyIsEnumerable("toString"),
        i = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ],
        o = i.length;
      return function (n) {
        if (("object" != typeof n && "function" != typeof n) || null === n)
          throw new TypeError("Object.keys called on non-object");
        var r = [];
        for (var s in n) e.call(n, s) && r.push(s);
        if (t) for (var a = 0; o > a; a++) e.call(n, i[a]) && r.push(i[a]);
        return r;
      };
    })()),
  (function () {
    function e(e) {
      for (var t = "0123456789".split(""), i = "", o = 0; e > o; o++) i += t[Math.floor(Math.random() * t.length)];
      return i;
    }
    function t(t, i, o, n, r) {
      var s = [],
        a = new Date();
      if (1 == t || (2 == t && -1 == navigator.userAgent.toLowerCase().indexOf("safari"))) return "";
      if (document.cookie) {
        s = document.cookie.split(";");
        for (var c = 0; c < s.length; c++) {
          var u = s[c].replace(/^\s+|\s+$/g, ""),
            d = u.indexOf("=");
          if (u.substring(0, d) == i) return unescape(u.slice(d + 1));
        }
      }
      var l = new Date(),
        f = l.getTime();
      o ? l.setTime(f + 1e3 * o) : l.setTime(f + 63072e6);
      var m = e(4),
        h = a.getMonth() + 1,
        v = a.getDate(),
        p = a.getHours(),
        c = a.getMinutes(),
        y = a.getSeconds(),
        g =
          String(a.getFullYear()) +
          (1 == String(h).length ? "0" : "") +
          String(h) +
          (1 == String(v).length ? "0" : "") +
          String(v) +
          (1 == String(p).length ? "0" : "") +
          String(p) +
          (1 == String(c).length ? "0" : "") +
          String(c) +
          (1 == String(y).length ? "0" : "") +
          String(y) +
          String(m),
        _ = location.hostname;
      _.match(/^www\./) && (_ = _.replace(/^www\./, ""));
      for (var c = 0; c < n.length; c++)
        if (-1 !== (_ + " ").indexOf(n[c] + " ")) {
          _ = n[c];
          break;
        }
      if (B(navigator.userAgent) && r) {
        var w = localStorage.getItem(i);
        w && (g = w);
      }
      return (
        (_uih.new_visitor = "1"),
        (document.cookie = i + "=" + g + "; expires=" + new Date(l).toUTCString() + "; path=/; domain=" + _),
        g
      );
    }
    function i(e, t) {
      return o(e, f(t)), !0;
    }
    function o(e, t) {
      var i = new Date().getTime(),
        o = new Date();
      o.setTime(i - 2592e6),
        (document.cookie = e + "=; expires=" + new Date(o).toUTCString() + "; path=/; domain=" + t);
    }
    function n(e, t) {
      if ((o(e, t), "undefined" != typeof localStorage)) {
        var i = localStorage.getItem(S);
        i && localStorage.removeItem(e);
      }
    }
    function r(e, t, i, o) {
      var n = new Date(),
        r = n.getTime();
      n.setTime(r + 1e3 * i),
        (document.cookie = e + "=" + t + "; expires=" + new Date(n).toUTCString() + "; path=/; domain=" + o);
    }
    function s(e, t, i, o) {
      r(e, t, i, o), c() && localStorage.setItem(e, t);
    }
    function a(e, t, i) {
      if (e.hasOwnProperty("lg_id") && "" !== e.lg_id)
        t.hasOwnProperty("set_lg_id") && t.set_lg_id && s(i, e.lg_id, t.fp_period, f(t.fp_domains));
      else if (
        ((t.ui_lg_id_param_name = t.ui_lg_id_param_name || "ui_lg_id"),
        -1 !== location.search.indexOf(t.ui_lg_id_param_name))
      ) {
        var o = m();
        (e.lg_id = o[t.ui_lg_id_param_name]), s(i, e.lg_id, t.fp_period, f(t.fp_domains));
      } else if (l(i)) e.lg_id = d(i);
      else if (c()) {
        var n = localStorage.getItem(i);
        n && ((e.lg_id = n), r(i, e.lg_id, t.fp_period, f(t.fp_domains)));
      }
      return { hash: e, conf: t };
    }
    function c() {
      return B(navigator.userAgent) && _uic.uls;
    }
    function u() {
      var e = [],
        t = [];
      if (document.cookie) {
        t = document.cookie.split(";");
        for (var i = 0; i < t.length; i++) {
          var o = t[i].replace(/^\s+|\s+$/g, ""),
            n = o.split("=");
          e[n[0]] = n[1];
        }
      }
      return e;
    }
    function d(e) {
      var t = u();
      return t.hasOwnProperty(e) ? t[e] : !1;
    }
    function l(e) {
      return u().hasOwnProperty(e);
    }
    function f(e) {
      var t = location.hostname;
      t.match(/^www\./) && (t = t.replace(/^www\./, ""));
      for (var i = 0; i < e.length; i++)
        if (-1 !== (t + " ").indexOf(e[i] + " ")) {
          t = e[i];
          break;
        }
      return t;
    }
    function m() {
      for (var e = {}, t = location.search.substring(1).split("&"), i = 0; i < t.length; i++)
        if (t.hasOwnProperty(i)) {
          var o = t[i].search(/=/),
            n = "";
          -1 !== o && (n = t[i].slice(0, o));
          var r = t[i].slice(t[i].indexOf("=", 0) + 1);
          "" !== n && (e[n] = decodeURIComponent(r));
        }
      return e;
    }
    function h(t, i) {
      return t ? ((i = i ? i.slice(-4) : e(4)), i % 100 >= t) : !1;
    }
    function v(e, t) {
      if (O(e))
        try {
          return (e.s = "b"), void p(t, e);
        } catch (i) {
          return V() ? ((e.s = "x"), void y(t, e)) : void _(t, e);
        }
      return V() ? ((e.s = "x"), void y(t, e)) : void _(t, e);
    }
    function p(e, t) {
      return navigator.sendBeacon(e, g(t));
    }
    function y(e, t, i) {
      if (("undefined" == typeof i && (i = function () {}), !XMLHttpRequest)) return !1;
      var o = new XMLHttpRequest();
      return (
        o.open("POST", e, !0),
        (o.withCredentials = !0),
        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
        (o.onload = function () {
          o.readyState === o.DONE && 200 === o.status && i(o.responseText);
        }),
        (t = g(t)),
        o.send(t),
        !0
      );
    }
    function g(e) {
      var t = [];
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var o = e[i],
            n = encodeURIComponent(i).replace(/%20/g, "+") + "=" + encodeURIComponent(o).replace(/%20/g, "+");
          t.push(n);
        }
      return t.join("&");
    }
    function _(e, t) {
      var i = e + "?",
        o = [];
      for (var n in t) t.hasOwnProperty(n) && t[n] && (o[o.length] = n + "=" + encodeURIComponent(t[n]));
      for (var r = 0; r < o.length; r++) i += 0 != r ? "&" + o[r] : o[r];
      var s = new Image(1, 1);
      return (
        (s.async = !0),
        i.length > 7e3 ? !1 : ((s.width = 1), (s.height = 1), (s.style.display = "none"), void (s.src = i))
      );
    }
    function w() {
      return /iP(hone|(o|a)d)/.test(navigator.userAgent);
    }
    function B(e) {
      var t = e.toLowerCase();
      return -1 === t.indexOf("mac os")
        ? !1
        : -1 !== t.indexOf("firefox") ||
          -1 !== t.indexOf("chrome") ||
          -1 !== t.indexOf("edge") ||
          -1 !== t.indexOf("crios") ||
          -1 !== t.indexOf("edgios") ||
          -1 !== t.indexOf("fxios")
        ? !1
        : -1 !== t.indexOf("safari");
    }
    function b(e) {
      var t = e.match(/Version\/([0-9\.]+)/);
      return t
        ? parseFloat(t[1])
        : ((t = e.match(/iP(hone|(o|a)d) OS ([0-9_]+)/)),
          t ? ((t[3] = t[3].replaceAll("_", ".")), parseFloat(t[3])) : !1);
    }
    function E(e) {
      var t = e.toLowerCase();
      if (-1 !== t.indexOf("msie"));
      else if (-1 !== t.indexOf("trident/7"));
      else if (
        -1 !== t.indexOf("edge") ||
        -1 !== t.indexOf("edgios") ||
        -1 !== t.indexOf("edga") ||
        -1 !== t.indexOf("edg")
      );
      else if (-1 !== t.indexOf("safari") && (-1 !== t.indexOf("chrome") || -1 !== t.indexOf("crios"))) return !0;
      return !1;
    }
    function O(e) {
      return e.hasOwnProperty("mode") &&
        "conv" === e.mode &&
        navigator.sendBeacon &&
        window.FormData &&
        -1 != window.FormData.toString().indexOf("[native code]") &&
        B(window.navigator.userAgent) &&
        b(window.navigator.userAgent) !== !1 &&
        b(window.navigator.userAgent) >= 12
        ? !0
        : !(
            !navigator.sendBeacon ||
            !window.FormData ||
            -1 == window.FormData.toString().indexOf("[native code]") ||
            w() ||
            B(window.navigator.userAgent)
          );
    }
    function V() {
      if (window.XMLHttpRequest) {
        var e = new XMLHttpRequest();
        return "withCredentials" in e;
      }
      return !1;
    }
    function C(e, t) {
      if (t.sample_flag) return !1;
      var i = {};
      for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
      if (
        ((i.uisv = t.uisv),
        (i.no_cookie = t.no_cookie),
        (i.anonymize_ip = t.anonymize_ip),
        (i.security_type = t.security_type),
        (i.from = "ui3"),
        i.url)
      ) {
        var n = document.createElement("a");
        n.href = i.url;
        for (var r = new RegExp("^[\\dA-Za-z-]+$", "i"), s = n.hostname.split("."), a = !0, c = 0; c < s.length; c++)
          if (!r.test(s[c])) {
            var u = punycode.encode(s[c]);
            "-" != u.slice(-1) && ((s[c] = "xn--" + u), (a = !1));
          }
        if (!a) {
          var d = s.join(".");
          i.url = n.protocol + "//" + d;
          var l = n.pathname + n.search + n.hash;
          "" != l && "/" != l.substr(0, 1) && (i.url += "/"), (i.url += l);
        }
        i.url = i.url;
      }
      (i.eflg = 1), (i.ph = k());
      var f = {};
      for (var o in i) i.hasOwnProperty(o) && i[o] && (f[o] = i[o]);
      v(f, t.host);
    }
    function k() {
      function e(e, t) {
        return "undefined" == typeof e.hasOwnProperty
          ? Object.prototype.hasOwnProperty.call(e, t)
          : e.hasOwnProperty(t);
      }
      var t = e(document, "body") && e(document.body, "clientHeight") ? document.body.clientHeight : 0,
        i = e(document, "body") && e(document.body, "scrollHeight") ? document.body.scrollHeight : 0,
        o =
          e(document, "documentElement") && e(document.body, "scrollHeight")
            ? document.documentElement.scrollHeight
            : 0,
        n =
          e(document, "documentElement") && e(document.body, "clientHeight")
            ? document.documentElement.clientHeight
            : 0;
      return Math.max.apply(null, [t, i, o, n]);
    }
    function M() {
      var e = "__ulflgid";
      (this.isConversion = !0),
        (this.push = function (t) {
          for (var i = { mode: "conv" }, o = ["id", "rand", "fp", "url"], n = 0; n < o.length; n++) {
            var r = o[n];
            i[r] = _uih[r];
          }
          for (var r in t)
            if (t.hasOwnProperty(r) && t[r]) {
              "lg_id" === r && _uic.set_lg_id && s(e, t.lg_id, _uic.fp_period, f(_uic.fp_domains));
              var a = "conv_" + r;
              i[a] = t[r];
            }
          C(i, _uic);
        });
    }
    function L(e, t) {
      if (((e = -1 * e), (t = -1 * t), e > t)) {
        var i = t;
        (t = e), (e = i);
      }
      var o = new Date(),
        n = o.getTimezoneOffset();
      return n >= e && t >= n;
    }
    (window._uiconv = window._uiconv || []),
      "undefined" == typeof window.uiinit && (window.uiinit = e(7)),
      (_uih.mode = "default"),
      "undefined" != typeof uiinit && (_uih.rand = uiinit),
      (_uih.rand = _uih.rand || e(7)),
      (_uic.safari_mode = _uic.safari_mode || 2),
      (_uic.uisv = _uih.id % 10),
      50400 == _uih.id && (_uic.uisv = 1),
      (_uih.url = _uih.url || document.URL),
      (_uih.sb = _uih.sb || document.title),
      (_uih.ref = _uih.ref || document.referrer),
      document.documentElement.clientWidth
        ? ((_uih.bw = document.documentElement.clientWidth), (_uih.bh = document.documentElement.clientHeight))
        : document.body && ((_uih.bw = document.body.clientWidth), (_uih.bh = document.body.clientHeight)),
      (_uic.no_cookie = _uic.no_cookie || !1),
      (_uic.delete_cookie = _uic.delete_cookie || !1),
      (_uic.anonymize_ip = _uic.anonymize_ip || !1),
      (_uic.security_type = _uic.security_type || !1),
      _uic.security_type > 0 &&
        (3 != _uic.security_type && _uic.no_cookie === !1 && (_uic.no_cookie = !0),
        (2 != _uic.security_type && 5 != _uic.security_type) || _uic.delete_cookie !== !1 || (_uic.delete_cookie = !0),
        _uic.security_type >= 3 && _uic.anonymize_ip === !1 && (_uic.anonymize_ip = !0)),
      L(0, 180) && (_uic.no_cookie = !0),
      (_uih.sw = screen.width),
      (_uih.sh = screen.height),
      (_uih.dpr = "undefined" != typeof window.devicePixelRatio ? window.devicePixelRatio : 0),
      (_uic.fp_name = _uic.fp_name || "__ulfpc"),
      "50153" == _uih.id ? (_uic.fp_mode = 1) : (_uic.fp_mode = _uic.fp_mode || 3),
      (_uic.fp_period = _uic.fp_period || 63072e3),
      (_uic.fp_domains = _uic.fp_domains || []),
      _uic.no_cookie && (_uic.fp_mode = 1),
      _uic.delete_cookie && ((_uic.fp_mode = 1), i(_uic.fp_name, _uic.fp_domains));
    var S = "__ulflgid";
    _uic.hasOwnProperty("delete_lg_id") && _uic.delete_lg_id && n(S, f(_uic.fp_domains)),
      (_uic.uls = _uic.uls || !1),
      (_uic.ucd = _uic.ucd || !1),
      (_uih.fp = t(_uic.fp_mode, _uic.fp_name, _uic.fp_period, _uic.fp_domains, _uic.uls)),
      c() && localStorage.setItem(_uic.fp_name, _uih.fp);
    var P = "https:" == document.location.protocol || E(navigator.userAgent);
    (_uic.force_behv = _uic.force_behv || !1), (_uic.hostssl = _uic.host || "https://bs.nakanohito.jp/b3/");
    var A = "bs";
    51721 == _uih.id && (A = "bsh"),
      (_uic.host = _uic.host || (P ? "https://" + A : "http://c0" + _uic.uisv) + ".nakanohito.jp/b3/");
    var R = R || 0;
    (_uih.count = _uih.count || 0),
      (_uih.count = R + _uih.count),
      (_uih.count += 1),
      (_uic.sample_flag = h(_uic.sample_rate, _uih.fp));
    var D = a(_uih, _uic, S);
    if (
      ((_uih = D.hash),
      (_uic = D.conf),
      C(_uih, _uic),
      (restartBivalves = function () {
        _uic.lb.end(), (_uic.lb.flagEnd = !0), Vesicomyid.Bivalves.removeAllEventListeners();
        var e = new Vesicomyid.Bivalves(_uih.id, _uih.rand);
        (Vesicomyid.Bivalves.flagAlreadyInit = void 0),
          (e.uisv = _uic.uisv),
          (e.efoFlag = !0),
          (_uic.efo !== !1 && 0 !== _uic.efo) || (e.efoFlag = !1),
          (e.forceEfoFlag = !1),
          (_uic.force_efo !== !0 && 1 !== _uic.force_efo) || (e.forceEfoFlag = !0),
          1 == _uic.safari_mode && (e.safariSupport = !1),
          3 == _uic.safari_mode && (e.safariOutBound = !0),
          _uic.report_period && (e.dynMousePositionReportPeriod = _uic.report_period),
          e.init(),
          (_uic.lb = e),
          e.efoFlag ||
            (_uic.initEFO = function () {
              Vesicomyid.Bivalves.formEventInit(_uic.lb);
            }),
          (_uic.setSubmit = function (e) {
            _uic.lb.setSubmit(_uic.lb, e);
          }),
          (_uic.onSubmit = function (e) {
            _uic.lb.onSubmit(_uic.lb, e);
          });
      }),
      (_uic.send_pv = function () {
        _uih.rand = Math.floor(9e5 * Math.random()) + 1e6;
        var e = a(_uih, _uic, S);
        (_uih = e.hash), (_uic = e.conf), C(_uih, _uic), restartBivalves();
      }),
      _uic.restart_on_anchor_change)
    ) {
      var T = (function () {
          return document.addEventListener
            ? function (e, t, i) {
                e.addEventListener(t, i, !1);
              }
            : document.attachEvent
            ? function (e, t, i) {
                e.attachEvent("on" + t, function (t) {
                  i.call(e, t);
                });
              }
            : void 0;
        })(),
        x = (function () {
          var e = document.documentMode;
          return "onhashchange" in window && ("undefined" == typeof e || e > 7)
            ? function (e) {
                T(window, "hashchange", e);
              }
            : function (e) {
                T(document.body, "click", function () {
                  setTimeout(e, 10);
                });
              };
        })();
      x(function () {
        _uih.url != document.URL && ((_uih.url = document.URL), _uic.send_pv(_uih, _uic));
      });
    }
    if ("undefined" == typeof _uiconv.isConversion) {
      for (var F = [], I = 0, N = _uiconv.length; N > I; I++) F[I] = _uiconv[I];
      _uiconv = new M();
      for (var I = 0; I < F.length; I++) _uiconv.push(F[I]);
    }
    (_uih.hasOwnProperty("lg_id") && "" !== _uih.lg_id) ||
      (_uih.hasOwnProperty("to_lg_id") &&
        _uih.to_lg_id &&
        V() &&
        y(_uic.host + "ch/", { to_lg_id: _uih.to_lg_id }, function (e) {
          "" !== e && s(S, e, _uic.fp_period, f(_uic.fp_domains));
        }));
  })(),
  (_uic.non_track_firefox = _uic.non_track_firefox || 0),
  (_uic.non_track_behv = _uic.non_track_behv || 0),
  _uic.non_track_firefox >= 1 &&
    -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") &&
    (_uic.non_track_behv = 1),
  (("undefined" != typeof document.documentElement.style.maxHeight && 1 == _uih.count && !_uic.non_track_behv) ||
    _uic.force_behv) &&
    ("undefined" == typeof Vesicomyid && (Vesicomyid = function () {}),
    "undefined" == typeof Vesicomyid.BivalvesLoading &&
      ((Vesicomyid.BivalvesLoading = !0),
      (Vesicomyid.Bivalves = function (e, t, i) {
        var o = this;
        (this.id = e),
          (this.rand = t),
          (this.beacon_id = "Vesicomyid-BEACON" + e),
          (this.env = new Vesicomyid.Bivalves.Env()),
          (this["char"] = this.env["char"]),
          (this.dynMousePositionPeriod = this.env.dynMousePositionPeriod),
          (this.freeHash = Vesicomyid.bivalvesHash ? Vesicomyid.bivalvesHash : {}),
          (this.message = Vesicomyid.bivalvesMessage ? Vesicomyid.bivalvesMessage : { comment: "", style: "" }),
          (this.lvl = i ? i : 2),
          (this.ratio = 0),
          (this.safariSupport = !0),
          (this.safariOutBound = !1),
          (this.safariSupportDelayTime = 500),
          (this.safariControlOnClick = !1),
          (this.flagFirefoxSslAccess = !0),
          (this.flagDynMouseReport = !0),
          (this.flagEnd = !1),
          (this.flagSelectClick = !1),
          (this.dynMousePositionReportPeriod = this.env.dynMousePositionReportPeriod),
          (this.forceMobileFirefox = !0),
          (this.cookie_off = !0),
          (this.host = _uic.host),
          (this.hostssl = _uic.hostssl),
          (this.efoFlag = !0),
          (this.forceEfoFlag = !1),
          (this.uisv = 1),
          (this.addMouseTime = 0),
          (this.clickDom = []),
          (this.clickDomLimit = 200),
          (this.clickDomLimitSafe = 30),
          (this.clickDomLimitEFOSafe = 10),
          (this.flagClickDom = !0),
          (this.formSubmitAction = !1),
          (this.formRecord = {}),
          (this.domRecord = {}),
          (this.domInitOrder = []),
          (this.domAfterOrder = []),
          (this.maxAddFormCount = 50),
          (this.formCount = 0),
          (this.domIDRecord = {}),
          (this.domLabel = {}),
          (this.checkSetForm = !1),
          (this.tapEnable = !1),
          (this.endFlag = !1),
          (this.max_url_length = 2040),
          (this.focusFlag = !1),
          (this.focusForm = ""),
          (this.isRecordDom = !0),
          (this.UI_JSON = _UI_JSON),
          (this.uach = !1);
        var n = !1,
          r = [52156, 31166, 51069, 51156, 51361];
        for (var s in r)
          if (r.hasOwnProperty(s) && r[s] == this.id) {
            n = !0;
            break;
          }
        n &&
          navigator.userAgentData &&
          navigator.userAgentData.getHighEntropyValues(["platform", "platformVersion", "model"]).then(function (e) {
            o.uach = e;
          });
      }),
      (Vesicomyid.Bivalves.checkBrowser = function (e) {
        var t = window.navigator.userAgent.toLowerCase(),
          i = window.navigator.appVersion.toLowerCase();
        return -1 != t.indexOf("msie") ? -1 != i.indexOf(e) : -1 != i.indexOf(e);
      }),
      (Vesicomyid.Bivalves.Browser = {
        IE: !(!window.attachEvent || -1 !== navigator.userAgent.toLowerCase().indexOf("opera")),
        IE6: Vesicomyid.Bivalves.checkBrowser("msie 6."),
        IE7: Vesicomyid.Bivalves.checkBrowser("msie 7."),
        IE8: Vesicomyid.Bivalves.checkBrowser("msie 8."),
        IE9: Vesicomyid.Bivalves.checkBrowser("msie 9."),
        IE10: Vesicomyid.Bivalves.checkBrowser("msie 10."),
        IE11: Vesicomyid.Bivalves.checkBrowser("trident/7."),
        Chrome: Vesicomyid.Bivalves.checkBrowser("chrome"),
        Opera: -1 !== navigator.userAgent.toLowerCase().indexOf("opera"),
        Gecko: navigator.userAgent.indexOf("Gecko") > -1 && -1 == navigator.userAgent.indexOf("KHTML"),
        Safari: -1 != navigator.userAgent.toLowerCase().indexOf("safari"),
        ModeStd: document.compatMode && "BackCompat" != document.compatMode,
        MobileApple:
          navigator.userAgent.indexOf("iPhone") > -1 ||
          navigator.userAgent.indexOf("iPod") > -1 ||
          navigator.userAgent.indexOf("iPad") > -1,
        MobileAndroid: navigator.userAgent.indexOf("Android") > -1,
      }),
      (Vesicomyid.Bivalves.Env = function () {
        return this;
      }),
      (Vesicomyid.Bivalves.Env.type_prod = !0),
      (Vesicomyid.Bivalves.Env.prototype.domain1 = "nakanohito.jp"),
      (Vesicomyid.Bivalves.Env.prototype.domain2 = "userlocal.jp"),
      (Vesicomyid.Bivalves.Env.prototype["char"] = "null"),
      (Vesicomyid.Bivalves.Env.prototype.image_url2 = ""),
      (Vesicomyid.Bivalves.Env.prototype.ssl_image_url2 = ""),
      (Vesicomyid.Bivalves.Env.prototype.dynMousePositionPeriod = [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
      ]),
      (Vesicomyid.Bivalves.Env.prototype.dynMousePositionReportPeriod = [10, 15, 15, 15, 20, 20, 20]),
      (Vesicomyid.Bivalves.addEventListener = function (e, t, i) {
        if (
          (Vesicomyid.Bivalves.listeners || (Vesicomyid.Bivalves.listeners = new Array()),
          Vesicomyid.Bivalves.listeners.push({ elem: e, event: t, func: i }),
          e && e.addEventListener && !Vesicomyid.Bivalves.Browser.Opera)
        ) {
          var o = !0;
          ("submit" !== t && "focus" !== t && "blur" !== t) || (o = !1),
            this.checkPassiveEventListener() && (o = { passive: !0, capture: o }),
            e.addEventListener(t, i, o);
        } else window.attachEvent && ((t = this.convertEvent(t)), e.attachEvent("on" + t, i));
      }),
      (Vesicomyid.Bivalves.checkPassiveEventListener = function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          window.addEventListener("test", null, t);
        } catch (i) {}
        return e;
      }),
      (Vesicomyid.Bivalves.removeEventListeners = function (e) {
        if (Vesicomyid.Bivalves.listeners)
          for (var t = 0; t < Vesicomyid.Bivalves.listeners.length; t++) {
            var i = Vesicomyid.Bivalves.listeners[t],
              o = i.elem;
            if (e == o) {
              var n = i.event,
                r = i.func;
              window.addEventListener && !Vesicomyid.Bivalves.Browser.Opera
                ? e.removeEventListener(n, r, !1)
                : window.attachEvent && ((n = this.convertEvent(n)), e.detachEvent("on" + n, r));
            }
          }
      }),
      (Vesicomyid.Bivalves.removeAllEventListeners = function () {
        if (Vesicomyid.Bivalves.listeners)
          for (var e = 0; e < Vesicomyid.Bivalves.listeners.length; e++) {
            var t = Vesicomyid.Bivalves.listeners[e],
              i = t.elem,
              o = t.event,
              n = t.func;
            window.addEventListener && !Vesicomyid.Bivalves.Browser.Opera
              ? i && i.removeEventListener(o, n, !1)
              : window.attachEvent && ((o = this.convertEvent(o)), i.detachEvent("on" + o, n));
          }
      }),
      (Vesicomyid.Bivalves.getElementByClassName = function (e) {
        if ("undefined" != typeof document.getElementsByClassName) {
          var t = !0;
          if ("undefined" != typeof Prototype) {
            var i = window.navigator.appVersion.toLowerCase();
            (-1 == i.indexOf("msie 8.") && -1 == i.indexOf("msie 7.") && -1 == i.indexOf("msie 6.")) || (t = !1);
          }
          if (t) {
            var o = document.getElementsByClassName(e);
            return o.length && o.length >= 1 ? o[0] : null;
          }
        }
        var n = new Array();
        if (document.all) var r = document.all;
        else var r = document.getElementsByTagName("*");
        for (var s = 0, a = 0; s < r.length; s++) r[s].className == e && ((n[a] = r[s]), a++);
        return n.length && n.length >= 2 ? n[0] : null;
      }),
      (Vesicomyid.Bivalves.convertEvent = function (e) {
        return "DOMMouseScroll" == e && (e = "mousewheel"), e;
      }),
      (Vesicomyid.Bivalves.prototype.init = function () {
        if ("undefined" == typeof Vesicomyid.Bivalves.flagAlreadyInit) {
          Vesicomyid.Bivalves.flagAlreadyInit = !0;
          var e = this;
          if (!this.host.match(this.env.domain1) && !this.host.match(this.env.domain2)) return !1;
          (this.image_url = this.host),
            "31873" != _uih.id &&
              (Vesicomyid.Bivalves.Browser.Gecko &&
                this.flagFirefoxSslAccess &&
                (Vesicomyid.Bivalves.Browser.MobileAndroid || (this.image_url = this.hostssl)),
              Vesicomyid.Bivalves.Browser.IE && (this.image_url = this.hostssl));
          for (var t = [50929, 51042], i = 0; i < t.length; i++) _uih.id == t[i] && (this.efoFlag = !1);
          _uih.id || (this.efoFlag = !1);
          for (var o = ["mynavi"], i = 0; i < o.length; i++) -1 != _uih.url.indexOf(o[i]) && (this.efoFlag = !1);
          this.forceEfoFlag && (this.efoFlag = !0);
          for (
            var n = [
                50929, 51042, 52265, 51721, 54119, 52559, 50170, 31310, 52349, 31027, 31028, 52778, 55875, 31310, 31027,
                31333,
              ],
              i = 0;
            i < n.length;
            i++
          )
            _uih.id == n[i] && (this.flagClickDom = !1);
          for (var r = ["mynavi"], i = 0; i < r.length; i++) -1 != _uih.url.indexOf(r[i]) && (this.flagClickDom = !1);
          if (54621 == _uih.id) {
            var s = !0;
            if (Date.now() >= Date.parse("2021/11/01 00:00:00 GMT+0900"))
              for (
                var a = ["/cgi-zip/zipcode.php", "/zipcode/", "/"],
                  c = _uih.url.split("?")[0].split(/https?:\/\/[^\/]+/)[1],
                  i = 0;
                i < a.length;
                i++
              )
                c == a[i] && (s = 1 === Math.floor(200 * Math.random()));
            else s = 1 === Math.floor(200 * Math.random());
            this.flagClickDom = s;
          }
          if (55095 == _uih.id) {
            for (
              var s = !0,
                u = [
                  "-asia.com/",
                  ".co.in/",
                  ".co.uk/locale-selector",
                  ".vn/bravia/gallery",
                  ".co.in/electronics/tv/t/televisions",
                  ".com.my/collections/playstation",
                  ".com.vn/electronics/tv/t/tv",
                  ".ru/playstation/playstation_5/",
                  ".ru/locale-selector",
                  ".ru/electronics/mobile",
                  ".de/locale-selector",
                ],
                i = 0;
              i < u.length;
              i++
            ) {
              var d = new RegExp(u[i]);
              d.test(_uih.url.split("?")[0]) && (s = 1 === Math.floor(2 * Math.random()));
            }
            this.flagClickDom = s;
          }
          if (50441 == _uih.id) {
            for (
              var s = !0,
                a = [
                  "/",
                  "/ex/sun_moon/fight/161215_01.html",
                  "/goods/",
                  "/ex/bdsp/ja/",
                  "/ex/legends_arceus/ja/",
                  "/shop/",
                  "/ex/sword_shield/",
                ],
                c = _uih.url.split("?")[0].split(/https?:\/\/[^\/]+/)[1],
                i = 0;
              i < a.length;
              i++
            )
              c == a[i] && (s = 1 === Math.floor(2 * Math.random()));
            this.flagClickDom = s;
          }
          if (51217 == _uih.id) {
            for (
              var s = !0,
                a = [
                  "/sw/products/auth/SWFG040180.seam",
                  "/sw/mypage/auth/SWFG017010.seam",
                  "/sw/onlineshop/sp/",
                  "/sw/auth/SWFG014010.seam",
                  "/sp/wp/",
                  "/sp/brandList/",
                ],
                c = _uih.url.split("?")[0].split(/https?:\/\/[^\/]+/)[1],
                i = 0;
              i < a.length;
              i++
            )
              c == a[i] && (s = 1 === Math.floor(2 * Math.random()));
            this.flagClickDom = s;
          }
          54343 == _uih.id && (this.flagClickDom = 1 === Math.floor(30 * Math.random())),
            _uic.ucd && (this.flagClickDom = !0),
            Vesicomyid.Bivalves.Browser.IE && ((this.efoFlag = !1), (this.flagClickDom = !1)),
            this.flagClickDom && !this.canSendBeacon() && (this.clickDomLimit = this.clickDomLimitSafe);
          var l = Vesicomyid.Bivalves.getElementByClassName("class_bivalves");
          if (
            (l &&
              (l.innerHTML =
                '<img id="' +
                this.beacon_id +
                '" width="1" height="1" /><span style="' +
                this.message.style +
                '" >' +
                this.message.comment +
                "</span>"),
            Vesicomyid.Bivalves.Browser.Safari)
          ) {
            var f = function () {
              e.start(),
                2 == e.lvl &&
                  e.safariSupport &&
                  e.safariOutBound &&
                  e.setFilters("A", function (t, i, o) {
                    e.setMouseClick(t, i), e.end(o);
                  }),
                e.flagClickDom &&
                  Vesicomyid.Bivalves.addEventListener(document.body, "click", function (t) {
                    var i = e.getClickDomData(t);
                    e.clickDom.length < e.clickDomLimit && e.clickDom.push(i);
                  });
              var t = window.addEventListener ? window : document.body;
              2 == e.lvl &&
                e.safariSupport &&
                (document.body &&
                  ("onpagehide" in window
                    ? window.addEventListener("pagehide", function (t) {
                        e.end(), Vesicomyid.Bivalves.removeAllEventListeners();
                      })
                    : window.addEventListener("beforeunload", function (t) {
                        e.end(), Vesicomyid.Bivalves.removeAllEventListeners();
                      }),
                  Vesicomyid.Bivalves.addEventListener(t, "click", function (t) {
                    e.flagSelectClick ? (e.flagSelectClick = !1) : e.mouseClick(t);
                  }),
                  Vesicomyid.Bivalves.addEventListener(t, "mousemove", function (t) {
                    e.mouseMove(t);
                  })),
                "ontouchstart" in t &&
                  (Vesicomyid.Bivalves.addEventListener(t, "touchstart", function (t) {
                    t.touches && (t = t.touches[0]), e.mouseMove(t);
                  }),
                  Vesicomyid.Bivalves.addEventListener(t, "touchmove", function (t) {
                    t.touches && (t = t.touches[0]), (e.tapEnable = !1), e.mouseMove(t);
                  }),
                  Vesicomyid.Bivalves.addEventListener(t, "touchend", function (i) {
                    if ((i.touches && (i = i.touches[0]), e.tapEnable)) {
                      var o = !1;
                      "click" in t && (e.removeEventListener("click"), (o = !0)),
                        (e.tapEnable = !1),
                        e.mouseClick(i),
                        o &&
                          Vesicomyid.Bivalves.addEventListener(t, "click", function (t) {
                            e.mouseClick(t);
                          });
                    }
                  })),
                e.efoFlag &&
                  ("complete" == document.readyState
                    ? Vesicomyid.Bivalves.formEventInit(e)
                    : Vesicomyid.Bivalves.addEventListener(document, "readystatechange", function () {
                        "complete" == document.readyState && Vesicomyid.Bivalves.formEventInit(e);
                      })));
            };
            f();
          } else {
            var f = function () {
              e.start();
            };
            f(),
              e.flagClickDom &&
                Vesicomyid.Bivalves.addEventListener(document.body, "click", function (t) {
                  var i = e.getClickDomData(t);
                  e.clickDom.length < e.clickDomLimit && e.clickDom.push(i);
                }),
              "onpagehide" in window
                ? Vesicomyid.Bivalves.addEventListener(window, "pagehide", function (t) {
                    e.end(), Vesicomyid.Bivalves.removeAllEventListeners();
                  })
                : Vesicomyid.Bivalves.addEventListener(window, "beforeunload", function (t) {
                    e.end(), Vesicomyid.Bivalves.removeAllEventListeners();
                  });
            var m = window.addEventListener ? window : document.body;
            2 == e.lvl &&
              m &&
              (Vesicomyid.Bivalves.addEventListener(m, "click", function (t) {
                e.flagSelectClick ? (e.flagSelectClick = !1) : e.mouseClick(t);
              }),
              Vesicomyid.Bivalves.addEventListener(m, "DOMMouseScroll", function (t) {
                e.mouseScroll(t);
              }),
              Vesicomyid.Bivalves.addEventListener(m, "mousemove", function (t) {
                e.mouseMove(t);
              }),
              "ontouchstart" in m &&
                (Vesicomyid.Bivalves.addEventListener(m, "touchstart", function (t) {
                  t.touches && (t = t.touches[0]), e.mouseMove(t);
                }),
                Vesicomyid.Bivalves.addEventListener(m, "touchmove", function (t) {
                  t.touches && (t = t.touches[0]), (e.tapEnable = !1), e.mouseMove(t);
                }),
                Vesicomyid.Bivalves.addEventListener(m, "touchend", function (t) {
                  if ((t.touches && (t = t.touches[0]), e.tapEnable)) {
                    var i = !1;
                    "click" in m && (e.removeEventListener("click"), (i = !0)),
                      (e.tapEnable = !1),
                      e.mouseClick(t),
                      i &&
                        Vesicomyid.Bivalves.addEventListener(m, "click", function (t) {
                          e.mouseClick(t);
                        });
                  }
                })),
              e.efoFlag &&
                ("complete" == document.readyState
                  ? Vesicomyid.Bivalves.formEventInit(e)
                  : Vesicomyid.Bivalves.addEventListener(document, "readystatechange", function () {
                      "complete" == document.readyState && Vesicomyid.Bivalves.formEventInit(e);
                    })));
          }
        }
      }),
      (Vesicomyid.Bivalves.prototype.start = function () {
        if (
          ((this.startTime = new Date().getTime()),
          (this.mouseWheelUp = 0),
          (this.mouseWheelDown = 0),
          this.flagDynMouseReport)
        ) {
          (this.countDynMouseReport = 0), (this.timerDynMouseReport = !1), (this.sendDynMouseReport = 0);
          var e = !0;
          Vesicomyid.Bivalves.Browser.Gecko &&
            Vesicomyid.Bivalves.Browser.MobileAndroid &&
            (this.forceMobileFirefox || (e = !1)),
            e && this.setNextDynMouseReport();
        }
      }),
      (Vesicomyid.Bivalves.prototype.setNextDynMouseReport = function () {
        var e = this.countDynMouseReport;
        if (e >= 0 && e < this.dynMousePositionReportPeriod.length - 1) {
          var t = 1e3 * this.dynMousePositionReportPeriod[e],
            i = this;
          this.timerDynMouseReport = setTimeout(function () {
            i.dynReport();
          }, t);
        }
      }),
      (Vesicomyid.Bivalves.prototype.end = function (e) {
        this.commonReport(0, e);
      }),
      (Vesicomyid.Bivalves.prototype.dynReport = function () {
        this.commonReport(1);
      }),
      (Vesicomyid.Bivalves.prototype.commonReport = function (e, t) {
        if (this.flagEnd) return !1;
        var i = !1;
        if (
          (1 == e &&
            (this.dynMousePositionRecord
              ? this.sendDynMouseReport == this.dynMousePositionRecord.length && (i = !0)
              : (i = !0)),
          !i)
        ) {
          this.lastTime = new Date().getTime();
          var o = new Array();
          (o.uisv = this.uisv),
            (o.from = "ui3"),
            (o.mode = "behavior"),
            1 == e
              ? (o.dyn_report = this.countDynMouseReport)
              : this.timerDynMouseReport && (clearTimeout(this.timerDynMouseReport), (this.timerDynMouseReport = !1)),
            (o.id = this.id),
            (o.time = Math.floor(this.lastTime / 100)),
            0 == e && (o["char"] = this["char"]),
            (o.rand = this.rand),
            (o.period = Math.floor(this.getPeriod() / 100));
          var n = this.lastClickHref,
            r = encodeURIComponent(this.lastClickHref);
          r.length > 500 && (n = n.substr(0, 500)),
            (o.href = n),
            (o.lastClickTime = Math.floor((this.lastClickTime - this.startTime) / 100)),
            (0 == e || (1 == e && 0 == this.sendDynMouseReport)) &&
              (o.startMousePosition = this.getStartMousePosition()),
            (o.clickCount = this.clickCount),
            (o.mouseWheelUp = this.mouseWheelUp),
            (o.mouseWheelDown = this.mouseWheelDown),
            (o.mouse = this.getMousePositions()),
            0 == e
              ? (o.mousePositions = this.getDynMousePositions(0))
              : this.dynMousePositionRecord &&
                ((o.mousePositions = this.getDynMousePositions(this.sendDynMouseReport)),
                (this.sendDynMouseReport = this.dynMousePositionRecord.length));
          var s = this.makeFreeHash([
            "mode",
            "lvl",
            "id",
            "time",
            "char",
            "ref",
            "url",
            "cookie",
            "flash",
            "title",
            "width",
            "height",
            "sw",
            "sh",
          ]);
          if (
            (s &&
              (o = this.makeParamsFreeHash(
                [
                  "mode",
                  "lvl",
                  "id",
                  "time",
                  "char",
                  "ref",
                  "url",
                  "cookie",
                  "flash",
                  "title",
                  "width",
                  "height",
                  "sw",
                  "sh",
                ],
                o
              )),
            0 != this.ratio && (o.ratio = this.ratio),
            (o.lp = this.firstPartyCookieValue),
            0 == e && this.efoFlag)
          )
            if (this.endFlag) this.endFlag = !0;
            else {
              if (
                (this.focusFlag &&
                  (this.isRecordDom && this.domList(this.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]),
                  this.domInitOrder !== this.domAfterOrder && this.margeDomAndForm()),
                this.formRecord && !this.isEmptyObject(this.formRecord) && !this.isEmptyObject(this.getForm()))
              ) {
                var a = this.UI_JSON.stringify(this.getForm()),
                  c = encodeURIComponent(a);
                !this.canSendBeacon() && c.length <= 3e3 ? (o.form = a) : this.canSendBeacon() && (o.form = a);
              }
              if (this.domRecord && !this.isEmptyObject(this.domRecord) && !this.isEmptyObject(this.getDom())) {
                var u = this.UI_JSON.stringify(this.getDom()),
                  d = encodeURIComponent(u);
                !this.canSendBeacon() && d.length <= 4e3 ? (o.dom = u) : this.canSendBeacon() && (o.dom = u);
              }
            }
          0 === e &&
            this.flagClickDom &&
            ((this.clickDom = this.clickDom.slice(0, this.clickDomLimit)),
            (o.clickDom = this.UI_JSON.stringify(this.clickDom))),
            _uic.hasOwnProperty("no_cookie") && _uic.no_cookie && (o.no_cookie = _uic.no_cookie),
            _uic.hasOwnProperty("anonymize_ip") && _uic.anonymize_ip && (o.anonymize_ip = _uic.anonymize_ip),
            _uic.hasOwnProperty("security_type") && _uic.security_type && (o.security_type = _uic.security_type),
            (o.ph = this.pageHeight()),
            0 == e && this.uach && (o.uach = JSON.stringify(this.uach)),
            (o.paramend = 1),
            this.sendData(e, o, this.image_url, t);
        }
        1 == e && ((this.countDynMouseReport += 1), this.setNextDynMouseReport());
      }),
      (Vesicomyid.Bivalves.prototype.sendData = function (e, t, i, o) {
        return e
          ? this.canSendBeacon()
            ? ((t.s = "b"), void this.sendRequestUsingBeacon(i, t))
            : this.canXhr()
            ? ((t.s = "x"), void this.sendRequestUsingXhr(i, t))
            : void this.sendRequestUsingImage(i, t, o)
          : this.canSendBeacon()
          ? ((t.s = "b"), void this.sendRequestUsingBeacon(i, t))
          : void this.sendRequestUsingImage(i, t, o);
      }),
      (Vesicomyid.Bivalves.prototype.sendRequestUsingBeacon = function (e, t) {
        return navigator.sendBeacon(e, this.encodeHTMLForm(t));
      }),
      (Vesicomyid.Bivalves.prototype.sendRequestUsingXhr = function (e, t) {
        if (!XMLHttpRequest) return !1;
        var i = new XMLHttpRequest();
        return "withCredentials" in i && "timeout" in i
          ? (i.open("POST", e, !0),
            (i.withCredentials = !0),
            i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            (t = this.encodeHTMLForm(t)),
            i.send(t),
            !0)
          : !1;
      }),
      (Vesicomyid.Bivalves.prototype.encodeHTMLForm = function (e) {
        var t = [];
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i],
              n = encodeURIComponent(i).replace(/%20/g, "+") + "=" + encodeURIComponent(o).replace(/%20/g, "+");
            t.push(n);
          }
        return t.join("&");
      }),
      (Vesicomyid.Bivalves.prototype.sendRequestUsingImage = function (e, t, i) {
        var o = e + "?",
          n = [];
        for (var r in t) t.hasOwnProperty(r) && t[r] && (n[n.length] = r + "=" + encodeURIComponent(t[r]));
        var s = new Image(1, 1);
        i ? (s.onload = i) : (s.onload = function () {}), (o += n.join("&")), o.length <= 7e3 && (s.src = o);
      }),
      (Vesicomyid.Bivalves.prototype.isIOS = function () {
        return /iP(hone|(o|a)d)/.test(navigator.userAgent);
      }),
      (Vesicomyid.Bivalves.prototype.isSafari = function (e) {
        var t = e.toLowerCase();
        return -1 === t.indexOf("mac os")
          ? !1
          : -1 !== t.indexOf("firefox") ||
            -1 !== t.indexOf("chrome") ||
            -1 !== t.indexOf("edge") ||
            -1 !== t.indexOf("crios") ||
            -1 !== t.indexOf("edgios") ||
            -1 !== t.indexOf("fxios")
          ? !1
          : -1 !== t.indexOf("safari");
      }),
      (Vesicomyid.Bivalves.prototype.canSendBeacon = function () {
        return !(
          !navigator.sendBeacon ||
          !window.FormData ||
          -1 == window.FormData.toString().indexOf("[native code]") ||
          this.isIOS() ||
          this.isSafari(window.navigator.userAgent)
        );
      }),
      (Vesicomyid.Bivalves.prototype.canXhr = function () {
        if (window.XMLHttpRequest) {
          var e = new XMLHttpRequest();
          return "withCredentials" in e;
        }
        return !1;
      }),
      (Vesicomyid.Bivalves.prototype.pageHeight = function () {
        function e(e, t) {
          return "undefined" == typeof e.hasOwnProperty
            ? Object.prototype.hasOwnProperty.call(e, t)
            : e.hasOwnProperty(t);
        }
        var t = e(document, "body") && e(document.body, "clientHeight") ? document.body.clientHeight : 0,
          i = e(document, "body") && e(document.body, "scrollHeight") ? document.body.scrollHeight : 0,
          o =
            e(document, "documentElement") && e(document.body, "scrollHeight")
              ? document.documentElement.scrollHeight
              : 0,
          n =
            e(document, "documentElement") && e(document.body, "clientHeight")
              ? document.documentElement.clientHeight
              : 0;
        return Math.max.apply(null, [t, i, o, n]);
      }),
      (Vesicomyid.Bivalves.prototype.getWindowSize = function () {
        var e = null,
          t = null;
        return (
          Vesicomyid.Bivalves.Browser.ModeStd
            ? ((e = document.documentElement.clientWidth), (t = document.documentElement.clientHeight))
            : document.body && ((e = document.body.clientWidth), (t = document.body.clientHeight)),
          { width: e, height: t }
        );
      }),
      (Vesicomyid.Bivalves.prototype.getScreenSize = function () {
        var e = screen.width,
          t = screen.height;
        return { width: e, height: t };
      }),
      (Vesicomyid.Bivalves.prototype.makeFreeHash = function (e) {
        if (this.freeHash) {
          for (var t = new Array(), i = 0; i < e.length; i++) t[e[i]] = !0;
          var o = new Array();
          for (var n in this.freeHash)
            this.freeHash.hasOwnProperty(n) && 1 != t[n] && o.push(n + "=" + encodeURIComponent(this.freeHash[n]));
          return o.join("&");
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.makeParamsFreeHash = function (e, t) {
        if (this.freeHash) {
          for (var i = new Array(), o = 0; o < e.length; o++) i[e[o]] = !0;
          new Array();
          for (var n in this.freeHash) this.freeHash.hasOwnProperty(n) && 1 != i[n] && (t[n] = this.freeHash[n]);
        }
        return t;
      }),
      (Vesicomyid.Bivalves.prototype.getPeriod = function () {
        return this.startTime && this.lastTime ? this.lastTime - this.startTime : null;
      }),
      (Vesicomyid.Bivalves.prototype.mouseClick = function (e) {
        if (!e) var e = window.event;
        var t = e.srcElement ? e.srcElement : e.target;
        t && this.setMouseClick(t, e);
      }),
      (Vesicomyid.Bivalves.prototype.setMouseClick = function (e, t) {
        var i = e.nodeName;
        if (i)
          if ("A" == i.toUpperCase())
            (this.lastClickHref = e.href), (this.lastClickTime = new Date().getTime()), this.addMousePosition(t);
          else if ("SELECT" == i.toUpperCase()) (this.flagSelectClick = !0), this.addMousePosition(t);
          else if ("INPUT" == i.toUpperCase())
            (this.lastClickHref = e.form ? e.form.action : ""),
              (this.lastClickTime = new Date().getTime()),
              this.addMousePosition(t);
          else {
            var o = this.getParentElement("A", e, this, 3);
            o && ((this.lastClickHref = o.href), (this.lastClickTime = new Date().getTime())), this.addMousePosition(t);
          }
      }),
      (Vesicomyid.Bivalves.prototype.mouseScroll = function (e) {
        if (!e) var e = window.event;
        var t = 0;
        e.wheelDelta
          ? ((t = e.wheelDelta / 120), Vesicomyid.Bivalves.Browser.Opera && (t = -t))
          : e.detail && (t = -e.detail / 3),
          t > 0 ? (this.mouseWheelUp += t) : (this.mouseWheelDown += -t);
      }),
      (Vesicomyid.Bivalves.prototype.mouseMove = function (e) {
        this.startMousePosition || (this.startMousePosition = this.eventPosition(e)),
          this.dynMousePositionRecord ||
            ((this.dynMousePositionRecord = new Array()), (this.dynMousePositionTime = this.startTime));
        var t = this.dynMousePositionRecord.length;
        if (t < this.dynMousePositionPeriod.length) {
          var i = (new Date().getTime() - this.dynMousePositionTime) / 1e3;
          if (i > this.dynMousePositionPeriod[t]) {
            this.dynMousePositionTime = new Date().getTime();
            var o = this.eventPosition(e);
            this.dynMousePositionRecord.push(o);
          }
        }
      }),
      (Vesicomyid.Bivalves.prototype.addMousePosition = function (e) {
        this.clickCount || (this.clickCount = 0),
          this.clickCount++,
          this.mousePositionRecord || (this.mousePositionRecord = new Array());
        var t = this.eventPosition(e);
        return "undefined" != typeof window.pageYOffset &&
          "undefined" != typeof window.pageXOffset &&
          (t.x <= window.pageXOffset || t.y <= window.pageYOffset)
          ? !1
          : void (Vesicomyid.Bivalves.Browser.IE || Vesicomyid.Bivalves.Browser.IE11
              ? (0 == this.addMouseTime || t.t >= this.addMouseTime + 4) &&
                ((this.addMouseTime = t.t),
                this.mousePositionRecord.push(t),
                this.mousePositionRecord.length > 10 && this.mousePositionRecord.shift())
              : (this.mousePositionRecord.push(t),
                this.mousePositionRecord.length > 10 && this.mousePositionRecord.shift()));
      }),
      (Vesicomyid.Bivalves.prototype.eventPosition = function (e) {
        var t = 0,
          i = 0;
        e.pageX
          ? ((t = e.pageX), (i = e.pageY))
          : ((t = e.clientX + document.documentElement.scrollLeft),
            (i = e.clientY + document.documentElement.scrollTop)),
          Vesicomyid.Bivalves.Browser.IE && Vesicomyid.Bivalves.Browser.ModeStd && ((t -= 2), (i -= 2));
        var o = 0;
        return (
          Vesicomyid.Bivalves.Browser.ModeStd
            ? (o = window.pageYOffset || document.documentElement.scrollTop)
            : document.body && (o = window.pageYOffset || document.body.scrollTop),
          {
            x: parseInt(t),
            y: parseInt(i),
            t: Math.floor((new Date().getTime() - this.startTime) / 100),
            st: parseInt(o),
          }
        );
      }),
      (Vesicomyid.Bivalves.prototype.getStartMousePosition = function () {
        if (this.startMousePosition) {
          var e = this.startMousePosition;
          return e.x + "," + e.y + "," + e.t + "," + e.st;
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.getMousePositions = function () {
        if (this.mousePositionRecord) {
          for (var e = new Array(), t = 0; t < this.mousePositionRecord.length; t++) {
            var i = this.mousePositionRecord[t];
            e.push(i.x + "," + i.y + "," + i.t + "," + i.st);
          }
          var o = this.joinShort(e, 200),
            n = o.join("|");
          return o.length > 0 && (n += "|"), n;
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.getDynMousePositions = function (e) {
        if (this.dynMousePositionRecord) {
          for (var t = new Array(), i = e; i < this.dynMousePositionRecord.length; i++) {
            var o = this.dynMousePositionRecord[i];
            t.push(o.x + "," + o.y + "," + o.t + "," + o.st);
          }
          var n = this.joinShort(t, 200),
            r = n.join("|");
          return n.length > 0 && (r += "|"), r;
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.joinShort = function (e, t) {
        for (var i = new Array(), o = e.length + 1, n = 0; n < e.length && ((o = o + e[n].length + 1), !(o > t)); n++)
          i.push(e[n]);
        return i;
      }),
      (Vesicomyid.Bivalves.prototype.searchNodes = function (e, t, i) {
        var o = t.childNodes;
        if (o && o.length)
          for (var n = 0; n < o.length; n++) {
            var r = o[n];
            1 == r.nodeType &&
              (r.nodeName.toUpperCase() == e ? (i[i.length] = r) : r.hasChildNodes() && this.searchNodes(e, r, i));
          }
      }),
      (Vesicomyid.Bivalves.prototype.setFilters = function (tag, func) {
        var self = this,
          lFunc = func,
          arr = new Array();
        if (document.body) {
          this.searchNodes(tag, document.body, arr);
          for (var i = 0; i < arr.length; i++) {
            var elem = arr[i],
              prev_onclick = elem.getAttribute("onclick");
            prev_onclick
              ? self.safariControlOnClick &&
                !(function (act, lFunc2) {
                  elem.onclick = function (ev) {
                    var res = eval(
                      " var vesicomyid_dummy_function = function() { " +
                        act +
                        "}; vesicomyid_dummy_function.apply(this);"
                    );
                    if (res) {
                      var myself = this;
                      (myself.flagAlreadyMove = !1),
                        lFunc2(this, ev, function () {
                          myself.flagAlreadyMove || (location.href = myself.href);
                        }),
                        setTimeout(function () {
                          (location.href = myself.href), (myself.flagAlreadyMove = !0);
                        }, self.safariSupportDelayTime);
                    }
                    return !1;
                  };
                })(prev_onclick, lFunc)
              : !(function (e) {
                  elem.onclick = function (t) {
                    var i = this;
                    return (
                      (i.flagAlreadMove = !1),
                      e(this, t, function () {
                        i.flagAlreadyMove || ((location.href = i.href), (i.flagAlreadMove = !0));
                      }),
                      setTimeout(function () {
                        (location.href = i.href), (i.flagAlreadyMove = !0);
                      }, self.safariSupportDelayTime),
                      !1
                    );
                  };
                })(lFunc);
          }
        }
      }),
      (Vesicomyid.Bivalves.formEventInit = function (e) {
        for (var t = ["input", "textarea", "button", "select", "form"], i = 0; i < t.length; i++)
          for (var o = document.getElementsByTagName(t[i]), n = 0; n < o.length; n++)
            "form" == t[i]
              ? ((e.checkSetForm = !0),
                Vesicomyid.Bivalves.addEventListener(o[n], "submit", function (t) {
                  e.formSubmit(t),
                    (e.isRecordDom = !1),
                    e.domList(e.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]);
                }))
              : (("submit" !== o[n].type.toLowerCase() && ("input" != t[i] || "image" !== o[n].type.toLowerCase())) ||
                  Vesicomyid.Bivalves.Browser.IE ||
                  Vesicomyid.Bivalves.addEventListener(o[n], "click", function (t) {
                    var i = e.getParentElement("FORM", this, e);
                    i && e.domList(e.formErrorLog, "form", ["INPUT", "SELECT", "TEXTAREA"], i.getAttribute("action"));
                  }),
                "button" != t[i] &&
                  ("radio" === o[n].type.toLowerCase() || "checkbox" === o[n].type.toLocaleLowerCase()
                    ? Vesicomyid.Bivalves.addEventListener(o[n], "change", function (t) {
                        e.formChange(t);
                      })
                    : (Vesicomyid.Bivalves.addEventListener(o[n], "focus", function (t) {
                        e.formFocus(t);
                      }),
                      Vesicomyid.Bivalves.addEventListener(o[n], "blur", function (t) {
                        e.formBlur(t);
                      }))));
      }),
      (Vesicomyid.Bivalves.prototype.formFocus = function (e) {
        e || (e = window.event);
        var t = e.srcElement ? e.srcElement : e.target;
        t && this.addFormFocus(t, e);
      }),
      (Vesicomyid.Bivalves.prototype.addFormFocus = function (e, t) {
        this.addForm(e, "focus");
      }),
      (Vesicomyid.Bivalves.prototype.formBlur = function (e) {
        e || (e = window.event);
        var t = e.srcElement ? e.srcElement : e.target;
        t && this.addFormBlur(t, e);
      }),
      (Vesicomyid.Bivalves.prototype.addFormBlur = function (e, t) {
        this.addForm(e, "blur");
      }),
      (Vesicomyid.Bivalves.prototype.formChange = function (e) {
        e || (e = window.event);
        var t = e.srcElement ? e.srcElement : e.target;
        t && this.addFormChange(t, e);
      }),
      (Vesicomyid.Bivalves.prototype.addFormChange = function (e, t) {
        this.addForm(e, "change");
      }),
      (Vesicomyid.Bivalves.prototype.formSubmit = function (e) {
        e || (e = window.event);
        var t = e.srcElement ? e.srcElement : e.target;
        t && this.addFormSubmit(t, e);
      }),
      (Vesicomyid.Bivalves.prototype.addFormSubmit = function (e, t) {
        (this.formSubmitAction = !0), (this.lastClickTime = new Date().getTime()), this.addForm(e, "submit");
      }),
      (Vesicomyid.Bivalves.prototype.addForm = function (e, t) {
        (this.focusFlag = !0),
          this.isEmptyObject(this.domRecord) &&
            (this.domList(this.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]),
            this.flagClickDom && !this.canSendBeacon() && (this.clickDomLimit = this.clickDomLimitEFOSafe));
        var i = document.getElementsByTagName("form");
        if (((this.domAfterOrder = []), i))
          for (var o = 0; o < i.length; o = (o + 1) | 0)
            this.domAfterOrder[this.domAfterOrder.length] = i[o].getAttribute("action");
        if (this.formCount < this.maxAddFormCount) {
          this.formCount = this.formCount + 1;
          var n = !1,
            r = !1,
            s = "",
            a = "";
          if (e.form && e.form.tagName && "FORM" === e.form.tagName) {
            if ("undefined" == typeof e.form.getAttribute("action")) return null;
            this.formRecord[e.form.getAttribute("action")] || (this.formRecord[e.form.getAttribute("action")] = []),
              (n = e.form.getAttribute("action")),
              (r = e.getAttribute("name")),
              (s = e);
          } else {
            if ("submit" == t) {
              (n = e.getAttribute("action")), (r = e.getAttribute("name"));
              for (
                var c = e.getElementsByTagName("input"), u = e.getElementsByTagName("button"), o = 0;
                o < c.length;
                o = (o + 1) | 0
              )
                if (
                  ((a = c[o].getAttribute("type")), a && ("submit" == a.toLowerCase() || "image" == a.toLowerCase()))
                ) {
                  s = c[o];
                  break;
                }
              if ("" == s)
                for (var o = 0; o < u.length; o = (o + 1) | 0)
                  if ("type" in u[o] && ((a = u[o].type), a && "submit" == a.toLowerCase())) {
                    s = u[o];
                    break;
                  }
            } else
              "undefined" != typeof e.getAttribute("action") &&
                ((n = e.getAttribute("action")), (r = e.getAttribute("name")), (s = e));
            this.formRecord[n] || (this.formRecord[n] = []);
          }
          (n === !1 && r === !1) || "" == s || this.setForm(n, t, r, s);
        }
      }),
      (Vesicomyid.Bivalves.prototype.setForm = function (e, t, i, o) {
        var n = this.getElementPosition(o);
        (this.focusForm = e),
          (this.formRecord[e][this.formRecord[e].length] = [
            t,
            i,
            Math.floor((new Date().getTime() - this.startTime) / 100),
            n.x,
            n.y,
          ]);
      }),
      (Vesicomyid.Bivalves.prototype.formErrorLog = function (e, t, i) {
        var o = i.amongErrorLog(t);
        o && i.addFormErrorLog(e, t, o, i);
      }),
      (Vesicomyid.Bivalves.prototype.amongErrorLog = function (e) {
        switch (!1) {
          case !e.validity.valueMissing:
            return "valMis";
          case !e.validity.typeMismatch:
            return "typeMis";
          case !e.validity.patternMismatch:
            return "patMis";
          case !e.validity.tooLong:
            return "tooLong";
          case !e.validity.rangeUnderflow:
            return "ranUnder";
          case !e.validity.rangeOverflow:
            return "rangeOver";
          case !e.validity.stepMismatch:
            return "stepMis";
          case !e.validity.customError:
            return "cusErr";
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.addFormErrorLog = function (e, t, i, o) {
        var n = e ? e : "",
          r = t.getAttribute("name") ? t.getAttribute("name") : "";
        o.setFormErrorLog(n, r, i, o);
      }),
      (Vesicomyid.Bivalves.prototype.setFormErrorLog = function (e, t, i, o) {
        return "undefined" == typeof e
          ? null
          : (o.formRecord[e] || (o.formRecord[e] = []),
            void (o.formRecord[e][o.formRecord[e].length] = ["error", t, i]));
      }),
      (Vesicomyid.Bivalves.prototype.domList = function (e, t, i, o) {
        if (document.querySelectorAll) {
          var n = document.getElementsByTagName(t);
          if (n && this.isEmptyArray(this.domInitOrder)) {
            for (var r = 0; r < n.length; r++)
              this.domInitOrder[this.domInitOrder.length] = n[r].getAttribute("action");
            this.domAfterOrder = this.domInitOrder;
          }
          if (o) for (var r = 0; r < n.length; r++) n[r].getAttribute("action") == o && this.childDomList(n[r], e, i);
          else for (var r = 0; r < n.length; r++) this.childDomList(n[r], e, i);
        }
      }),
      (Vesicomyid.Bivalves.prototype.childDomList = function (e, t, i) {
        if (e.querySelectorAll)
          for (
            var o = i.join(), n = e.querySelectorAll(o), r = e.getAttribute("action"), s = 0;
            s < n.length;
            s = (s + 1) | 0
          ) {
            var a = n[s];
            ("INPUT" == a.tagName && "hidden" == a.type.toLowerCase()) || t(r, a, this);
          }
      }),
      (Vesicomyid.Bivalves.prototype.formDomList = function (e, t, i) {
        var o = t.required,
          n = "";
        "INPUT" == t.tagName ? (n = t.type.toLowerCase()) : "LABEL" != t.tagName && (n = t.tagName.toLowerCase());
        var r = t.tagName;
        if ("hidden" != n && t) {
          var s = i.getElementPosition(t);
          i.addFormDomList(e, t.getAttribute("name"), s.x, s.y, o, i, "", t, n, r);
        }
      }),
      (Vesicomyid.Bivalves.prototype.getElementPosition = function (e) {
        var t,
          i,
          o = e.getBoundingClientRect();
        Vesicomyid.Bivalves.Browser.ModeStd
          ? ((t = window.pageYOffset || document.documentElement.scrollTop),
            (i = window.pageXOffset || document.documentElement.scrollLeft))
          : document.body &&
            ((t = window.pageYOffset || document.body.scrollTop), (i = window.pageXOffset || document.body.scrollLeft));
        var n = parseInt(o.left + i),
          r = parseInt(o.top + t);
        return { x: n, y: r };
      }),
      (Vesicomyid.Bivalves.prototype.addFormDomList = function (e, t, i, o, n, r, s, a, c, u) {
        if ("undefined" == typeof e) return null;
        r.domRecord[e] || ((r.domRecord[e] = []), (r.domIDRecord[e] = [])), n || (n = 0);
        var d = 0,
          l = a.value;
        if ("SELECT" == u && "" != l) d = 1;
        else if ("INPUT" == u) {
          var f = c;
          if ("radio" == f || "checkbox" == f)
            for (var m = document.getElementsByName(t), h = 0; h < m.length; h = (h + 1) | 0) m[h].checked && (d = 1);
          else "submit" != f && l && (d = 1);
        } else l && (d = 1);
        var v = r.getDomNameNumber(t, e);
        v === !1 && (v = r.domRecord[e].length),
          (r.domRecord[e][v] = [t, i, o, n, s, d, c]),
          (r.domIDRecord[e][v] = a.id);
      }),
      (Vesicomyid.Bivalves.prototype.addLabel = function (e, t, i) {
        return "undefined" == typeof e
          ? null
          : (i.domLabel[e] || (i.domLabel[e] = []),
            void (i.domLabel[e][i.domLabel[e].length] = [t.getAttribute("for"), t.textContent]));
      }),
      (Vesicomyid.Bivalves.prototype.getForm = function () {
        if (this.formRecord) {
          var e = {};
          return (e[this.focusForm] = this.formRecord[this.focusForm]), e;
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.getDom = function () {
        if (this.domRecord) {
          var e = {};
          return this.domRecord[this.focusForm] && (e[this.focusForm] = this.domRecord[this.focusForm]), e;
        }
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.setLabel = function () {
        return null;
      }),
      (Vesicomyid.Bivalves.prototype.margeDomAndForm = function () {
        for (var e = this.domInitOrder, t = this.domAfterOrder, i = 0; i < e.length; i++)
          e[i] &&
            t[i] &&
            e[i] != t[i] &&
            ((this.domRecord[e[i]] = this.domRecord[t[i]]),
            (this.formRecord[t[i]] = this.formRecord[e[i]] =
              this.pushArray(this.formRecord[e[i]], this.formRecord[t[i]]))),
            e[i] && t[i] && t[i] == this.focusForm && (this.focusForm = e[i]);
      }),
      (Vesicomyid.Bivalves.prototype.pushArray = function (e, t) {
        for (var i = [], o = 0; o < e.length; o++) i[i.length] = e[o];
        for (var o = 0; o < t.length; o++) i[i.length] = t[o];
        return i;
      }),
      (Vesicomyid.Bivalves.prototype.isEmptyObject = function (e) {
        return 0 == Object.keys(e).length;
      }),
      (Vesicomyid.Bivalves.prototype.isEmptyArray = function (e) {
        return 0 == e.length;
      }),
      (Vesicomyid.Bivalves.prototype.getDomNameNumber = function (e, t) {
        for (var i = 0; i < this.domRecord[t].length; i = (i + 1) | 0) if (this.domRecord[t][i][0] == e) return i;
        return !1;
      }),
      (Vesicomyid.Bivalves.prototype.getParentElement = function (e, t, i, o) {
        if (((i = i ? i : this), (o = "undefined" == typeof o ? -1 : o), 0 === o || -100 > o)) return !1;
        o -= 1;
        var n = t.parentNode;
        return n
          ? n.tagName === e
            ? n
            : "HTML" === n.tagName || "BODY" === n.tagName || "HEAD" === n.tagName || "undefined" == typeof n.tagName
            ? !1
            : i.getParentElement(e, n, i, o)
          : !1;
      }),
      (Vesicomyid.Bivalves.prototype.setSubmit = function (e, t) {
        return "undefined" == typeof t
          ? null
          : (e.formRecord[t] || (e.formRecord[t] = []),
            this.isEmptyObject(this.domRecord) &&
              (this.domList(this.formDomList, "form", ["INPUT", "SELECT", "TEXTAREA"]),
              this.flagClickDom && !this.canSendBeacon() && (this.clickDomLimit = this.clickDomLimitEFOSafe)),
            (e.focusForm = t),
            void (e.formRecord[t][e.formRecord[t].length] = [
              "submit",
              "u_submit",
              Math.floor((new Date().getTime() - e.startTime) / 100),
              0,
              0,
            ]));
      }),
      (Vesicomyid.Bivalves.prototype.onSubmit = function (e, t) {
        return "undefined" == typeof t ? null : void this.setSubmit(e, t.getAttribute("action"));
      }),
      (Vesicomyid.Bivalves.prototype.getClickDomData = function (e) {
        var t = this.getDomPath(e.target).join(">"),
          i = this.getDomPosition(e.target),
          o = this.getInnerClickDomPosition(e);
        return [t, i.x, i.y, o.x, o.y];
      }),
      (Vesicomyid.Bivalves.prototype.getDomPath = function (e) {
        for (var t = []; null != e.parentNode; ) {
          for (var i = 0, o = 0, n = 0; n < e.parentNode.childNodes.length; n++) {
            var r = e.parentNode.childNodes[n];
            r.nodeName == e.nodeName && (r === e && (o = i), i++);
          }
          e.hasAttribute("id") && "" != e.id
            ? t.unshift(e.nodeName.toLowerCase() + "#" + e.id)
            : i > 1
            ? t.unshift(e.nodeName.toLowerCase() + ":eq(" + o + ")")
            : t.unshift(e.nodeName.toLowerCase()),
            (e = e.parentNode);
        }
        return t.slice(1);
      }),
      (Vesicomyid.Bivalves.prototype.getDomPosition = function (e) {
        var t = this.getRect(e),
          i = window.pageXOffset + t.x,
          o = window.pageYOffset + t.y;
        return { x: parseInt(i), y: parseInt(o) };
      }),
      (Vesicomyid.Bivalves.prototype.getRect = function (e) {
        return e.getBoundingClientRect();
      }),
      (Vesicomyid.Bivalves.prototype.getInnerClickDomPosition = function (e) {
        var t = e.pageX,
          i = e.pageY,
          o = this.getRect(e.target),
          n = o.left + window.pageXOffset,
          r = o.top + window.pageYOffset,
          s = t - n,
          a = i - r;
        return { x: parseInt(s), y: parseInt(a) };
      }),
      (Vesicomyid.Bivalves.Loaded = function () {})),
    (function () {
      var e = new Vesicomyid.Bivalves(_uih.id, _uih.rand);
      (e.uisv = _uic.uisv),
        (e.efoFlag = !0),
        (_uic.efo !== !1 && 0 !== _uic.efo) || (e.efoFlag = !1),
        (e.forceEfoFlag = !1),
        (_uic.force_efo !== !0 && 1 !== _uic.force_efo) || (e.forceEfoFlag = !0),
        1 == _uic.safari_mode && (e.safariSupport = !1),
        3 == _uic.safari_mode && (e.safariOutBound = !0),
        _uic.report_period && (e.dynMousePositionReportPeriod = _uic.report_period),
        _uic.disable_heatmap ||
          _uic.sample_flag ||
          (e.init(),
          (_uic.lb = e),
          e.efoFlag ||
            (_uic.initEFO = function () {
              (_uic.lb.efoFlag = !0), Vesicomyid.Bivalves.formEventInit(_uic.lb);
            }),
          (_uic.setSubmit = function (e) {
            _uic.lb.setSubmit(_uic.lb, e);
          }),
          (_uic.onSubmit = function (e) {
            _uic.lb.onSubmit(_uic.lb, e);
          }));
    })());
