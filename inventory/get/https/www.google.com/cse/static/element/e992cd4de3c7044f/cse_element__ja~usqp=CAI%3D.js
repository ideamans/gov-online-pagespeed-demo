(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var g,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ha =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ia = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    ka = ia(this),
    ma = function (a, b) {
      if (b)
        a: {
          var c = ka;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && ha(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  ma(
    "Symbol",
    function (a) {
      if (a) return a;
      var b = function (f, h) {
        this.Yr = f;
        ha(this, "description", { configurable: !0, writable: !0, value: h });
      };
      b.prototype.toString = function () {
        return this.Yr;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e) throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    },
    "es6",
    "es3"
  );
  ma(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = ka[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          ha(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return na(ba(this));
            },
          });
      }
      return a;
    },
    "es6",
    "es3"
  );
  var na = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    q = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    oa = function (a) {
      if (!(a instanceof Array)) {
        a = q(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    ta =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ua;
  if ("function" == typeof Object.setPrototypeOf) ua = Object.setPrototypeOf;
  else {
    var za;
    a: {
      var Aa = { a: !0 },
        Ba = {};
      try {
        Ba.__proto__ = Aa;
        za = Ba.a;
        break a;
      } catch (a) {}
      za = !1;
    }
    ua = za
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Ga = ua,
    Ha = function (a, b) {
      a.prototype = ta(b.prototype);
      a.prototype.constructor = a;
      if (Ga) Ga(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.yd = b.prototype;
    },
    Ia = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    },
    Ka = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    La =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) Ka(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ma(
    "Object.assign",
    function (a) {
      return a || La;
    },
    "es6",
    "es3"
  );
  ma(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var h = d[f];
                if (b.call(c, h, f, d)) {
                  b = h;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6",
    "es3"
  );
  ma(
    "WeakMap",
    function (a) {
      function b() {}
      function c(l) {
        var m = typeof l;
        return ("object" === m && null !== l) || "function" === m;
      }
      function d(l) {
        if (!Ka(l, f)) {
          var m = new b();
          ha(l, f, { value: m });
        }
      }
      function e(l) {
        var m = Object[l];
        m &&
          (Object[l] = function (r) {
            if (r instanceof b) return r;
            Object.isExtensible(r) && d(r);
            return m(r);
          });
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var l = Object.seal({}),
              m = Object.seal({}),
              r = new a([
                [l, 2],
                [m, 3],
              ]);
            if (2 != r.get(l) || 3 != r.get(m)) return !1;
            r.delete(l);
            r.set(m, 4);
            return !r.has(l) && 4 == r.get(m);
          } catch (t) {
            return !1;
          }
        })()
      )
        return a;
      var f = "$jscomp_hidden_" + Math.random();
      e("freeze");
      e("preventExtensions");
      e("seal");
      var h = 0,
        k = function (l) {
          this.Bb = (h += Math.random() + 1).toString();
          if (l) {
            l = q(l);
            for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
          }
        };
      k.prototype.set = function (l, m) {
        if (!c(l)) throw Error("Invalid WeakMap key");
        d(l);
        if (!Ka(l, f)) throw Error("WeakMap key fail: " + l);
        l[f][this.Bb] = m;
        return this;
      };
      k.prototype.get = function (l) {
        return c(l) && Ka(l, f) ? l[f][this.Bb] : void 0;
      };
      k.prototype.has = function (l) {
        return c(l) && Ka(l, f) && Ka(l[f], this.Bb);
      };
      k.prototype.delete = function (l) {
        return c(l) && Ka(l, f) && Ka(l[f], this.Bb) ? delete l[f][this.Bb] : !1;
      };
      return k;
    },
    "es6",
    "es3"
  );
  ma(
    "Map",
    function (a) {
      if (
        (function () {
          if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
          try {
            var k = Object.seal({ x: 4 }),
              l = new a(q([[k, "s"]]));
            if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size)
              return !1;
            var m = l.entries(),
              r = m.next();
            if (r.done || r.value[0] != k || "s" != r.value[1]) return !1;
            r = m.next();
            return r.done || 4 != r.value[0].x || "t" != r.value[1] || !m.next().done ? !1 : !0;
          } catch (t) {
            return !1;
          }
        })()
      )
        return a;
      var b = new WeakMap(),
        c = function (k) {
          this[0] = {};
          this[1] = f();
          this.size = 0;
          if (k) {
            k = q(k);
            for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
          }
        };
      c.prototype.set = function (k, l) {
        k = 0 === k ? 0 : k;
        var m = d(this, k);
        m.list || (m.list = this[0][m.id] = []);
        m.Ea
          ? (m.Ea.value = l)
          : ((m.Ea = { next: this[1], Yb: this[1].Yb, head: this[1], key: k, value: l }),
            m.list.push(m.Ea),
            (this[1].Yb.next = m.Ea),
            (this[1].Yb = m.Ea),
            this.size++);
        return this;
      };
      c.prototype.delete = function (k) {
        k = d(this, k);
        return k.Ea && k.list
          ? (k.list.splice(k.index, 1),
            k.list.length || delete this[0][k.id],
            (k.Ea.Yb.next = k.Ea.next),
            (k.Ea.next.Yb = k.Ea.Yb),
            (k.Ea.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this[0] = {};
        this[1] = this[1].Yb = f();
        this.size = 0;
      };
      c.prototype.has = function (k) {
        return !!d(this, k).Ea;
      };
      c.prototype.get = function (k) {
        return (k = d(this, k).Ea) && k.value;
      };
      c.prototype.entries = function () {
        return e(this, function (k) {
          return [k.key, k.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (k) {
          return k.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (k) {
          return k.value;
        });
      };
      c.prototype.forEach = function (k, l) {
        for (var m = this.entries(), r; !(r = m.next()).done; ) (r = r.value), k.call(l, r[1], r[0], this);
      };
      c.prototype[Symbol.iterator] = c.prototype.entries;
      var d = function (k, l) {
          var m = l && typeof l;
          "object" == m || "function" == m
            ? b.has(l)
              ? (m = b.get(l))
              : ((m = "" + ++h), b.set(l, m))
            : (m = "p_" + l);
          var r = k[0][m];
          if (r && Ka(k[0], m))
            for (k = 0; k < r.length; k++) {
              var t = r[k];
              if ((l !== l && t.key !== t.key) || l === t.key) return { id: m, list: r, index: k, Ea: t };
            }
          return { id: m, list: r, index: -1, Ea: void 0 };
        },
        e = function (k, l) {
          var m = k[1];
          return na(function () {
            if (m) {
              for (; m.head != k[1]; ) m = m.Yb;
              for (; m.next != m.head; ) return (m = m.next), { done: !1, value: l(m) };
              m = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var k = {};
          return (k.Yb = k.next = k.head = k);
        },
        h = 0;
      return c;
    },
    "es6",
    "es3"
  );
  ma(
    "Object.values",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Ka(b, d) && c.push(b[d]);
            return c;
          };
    },
    "es8",
    "es3"
  );
  var Oa = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
      throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  ma(
    "Number.isFinite",
    function (a) {
      return a
        ? a
        : function (b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
          };
    },
    "es6",
    "es3"
  );
  ma(
    "Number.isInteger",
    function (a) {
      return a
        ? a
        : function (b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1;
          };
    },
    "es6",
    "es3"
  );
  var Pa = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  ma(
    "Array.prototype.entries",
    function (a) {
      return a
        ? a
        : function () {
            return Pa(this, function (b, c) {
              return [b, c];
            });
          };
    },
    "es6",
    "es3"
  );
  ma(
    "Array.from",
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              null != c
                ? c
                : function (k) {
                    return k;
                  };
            var e = [],
              f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
              b = f.call(b);
              for (var h = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, h++));
            } else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e;
          };
    },
    "es6",
    "es3"
  );
  ma(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return Pa(this, function (b) {
              return b;
            });
          };
    },
    "es6",
    "es3"
  );
  ma(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return Pa(this, function (b, c) {
              return c;
            });
          };
    },
    "es8",
    "es3"
  );
  ma(
    "Set",
    function (a) {
      if (
        (function () {
          if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(q([c]));
            if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size)
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
          } catch (h) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.Hb = new Map();
        if (c) {
          c = q(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.Hb.size;
      };
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.Hb.set(c, c);
        this.size = this.Hb.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.Hb.delete(c);
        this.size = this.Hb.size;
        return c;
      };
      b.prototype.clear = function () {
        this.Hb.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.Hb.has(c);
      };
      b.prototype.entries = function () {
        return this.Hb.entries();
      };
      b.prototype.values = function () {
        return this.Hb.values();
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.Hb.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6",
    "es3"
  );
  ma(
    "Object.entries",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Ka(b, d) && c.push([d, b[d]]);
            return c;
          };
    },
    "es8",
    "es3"
  );
  ma(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Oa(this, b, "startsWith");
            b += "";
            var e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e; ) if (d[c++] != b[h++]) return !1;
            return h >= f;
          };
    },
    "es6",
    "es3"
  );
  ma(
    "String.prototype.endsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Oa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
            return 0 >= e;
          };
    },
    "es6",
    "es3"
  );
  ma(
    "Object.fromEntries",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = {};
            if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
              d = d.value;
              if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
              c[d[0]] = d[1];
            }
            return c;
          };
    },
    "es_2019",
    "es3"
  );
  var Ua = Ua || {},
    y = this || self,
    Va = function (a) {
      a = a || "";
      throw Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
    },
    Wa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    Ya = function (a) {
      var b = Wa(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    Za = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    $a = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ab = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    db = function (a, b, c) {
      db = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $a : ab;
      return db.apply(null, arguments);
    },
    eb = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    z = function (a, b, c) {
      a = a.split(".");
      c = c || y;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
    },
    fb = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.yd = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.SD = function (d, e, f) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
        return b.prototype[e].apply(d, h);
      };
    },
    gb = function (a) {
      return a;
    };
  function hb(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, hb);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  fb(hb, Error);
  hb.prototype.name = "CustomError";
  function ib(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    hb.call(this, c + a[d]);
  }
  fb(ib, hb);
  ib.prototype.name = "AssertionError";
  function jb(a) {
    y.setTimeout(function () {
      throw a;
    }, 0);
  }
  var ob = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    wb = function (a, b) {
      if (b)
        a = a
          .replace(pb, "&amp;")
          .replace(qb, "&lt;")
          .replace(rb, "&gt;")
          .replace(sb, "&quot;")
          .replace(tb, "&#39;")
          .replace(ub, "&#0;");
      else {
        if (!vb.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(pb, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(qb, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(rb, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(sb, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(tb, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(ub, "&#0;"));
      }
      return a;
    },
    pb = /&/g,
    qb = /</g,
    rb = />/g,
    sb = /"/g,
    tb = /'/g,
    ub = /\x00/g,
    vb = /[\x00&<>"']/,
    yb = function (a, b) {
      var c = 0;
      a = ob(String(a)).split(".");
      b = ob(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          h = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == f[0].length && 0 == h[0].length) break;
          c =
            xb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) ||
            xb(0 == f[2].length, 0 == h[2].length) ||
            xb(f[2], h[2]);
          f = f[3];
          h = h[3];
        } while (0 == c);
      }
      return c;
    },
    xb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var zb, Ab;
  a: {
    for (var Bb = ["CLOSURE_FLAGS"], Db = y, Eb = 0; Eb < Bb.length; Eb++)
      if (((Db = Db[Bb[Eb]]), null == Db)) {
        Ab = null;
        break a;
      }
    Ab = Db;
  }
  var Fb = Ab && Ab[610401301];
  zb = null != Fb ? Fb : !1;
  function Gb() {
    var a = y.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Hb,
    Ib = y.navigator;
  Hb = Ib ? Ib.userAgentData || null : null;
  function Jb(a) {
    return zb
      ? Hb
        ? Hb.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function A(a) {
    return -1 != Gb().indexOf(a);
  }
  function Kb(a) {
    return (void 0 !== a && a) || zb ? !!Hb && 0 < Hb.brands.length : !1;
  }
  function Lb() {
    return Kb() ? !1 : A("Opera");
  }
  function Nb() {
    return Kb() ? !1 : A("Trident") || A("MSIE");
  }
  function Ob() {
    return Kb() ? !1 : A("Edge");
  }
  function Pb() {
    return Kb() ? Jb("Microsoft Edge") : A("Edg/");
  }
  function Qb() {
    return (
      A("Safari") &&
      !(
        Rb() ||
        (Kb() ? 0 : A("Coast")) ||
        Lb() ||
        Ob() ||
        Pb() ||
        (Kb() ? Jb("Opera") : A("OPR")) ||
        A("Firefox") ||
        A("FxiOS") ||
        A("Silk") ||
        A("Android")
      )
    );
  }
  function Rb() {
    return Kb() ? Jb("Chromium") : ((A("Chrome") || A("CriOS")) && !Ob()) || A("Silk");
  }
  function Sb(a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          c.find(function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  }
  function Tb() {
    var a = Gb();
    if (Nb()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Sb(b);
    return Lb()
      ? a(["Version", "Opera"])
      : Ob()
      ? a(["Edge"])
      : Pb()
      ? a(["Edg"])
      : A("Silk")
      ? a(["Silk"])
      : Rb()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  var Vb = Array.prototype.indexOf
      ? function (a, b, c) {
          return Array.prototype.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Wb = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Xb = Array.prototype.map
      ? function (a, b, c) {
          return Array.prototype.map.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
            h in f && (e[h] = b.call(c, f[h], h, a));
          return e;
        },
    Yb = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        };
  function Zb(a, b) {
    b = Vb(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function $b(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function ac(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function bc(a, b, c) {
    return $b.apply([], Xb(a, b, c));
  }
  function cc() {
    return -1 != Gb().toLowerCase().indexOf("webkit") && !A("Edge");
  }
  function dc() {
    return A("Gecko") && !cc() && !(A("Trident") || A("MSIE")) && !A("Edge");
  }
  var ec = function (a) {
    ec[" "](a);
    return a;
  };
  ec[" "] = function () {};
  var fc = Lb(),
    gc = Nb(),
    hc = A("Edge"),
    ic = dc(),
    jc = cc(),
    kc = function () {
      var a = y.document;
      return a ? a.documentMode : void 0;
    },
    lc;
  a: {
    var mc = "",
      nc = (function () {
        var a = Gb();
        if (ic) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (hc) return /Edge\/([\d\.]+)/.exec(a);
        if (gc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (jc) return /WebKit\/(\S+)/.exec(a);
        if (fc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    nc && (mc = nc ? nc[1] : "");
    if (gc) {
      var oc = kc();
      if (null != oc && oc > parseFloat(mc)) {
        lc = String(oc);
        break a;
      }
    }
    lc = mc;
  }
  var pc = lc,
    qc;
  if (y.document && gc) {
    var rc = kc();
    qc = rc ? rc : parseInt(pc, 10) || void 0;
  } else qc = void 0;
  var sc = qc;
  !A("Android") || Rb();
  Rb();
  var tc = Qb() && !((A("iPhone") && !A("iPod") && !A("iPad")) || A("iPad") || A("iPod"));
  var uc = {},
    vc = null,
    wc = function (a, b) {
      void 0 === b && (b = 0);
      if (!vc) {
        vc = {};
        for (
          var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
            d = ["+/=", "+/", "-_=", "-_.", "-_"],
            e = 0;
          5 > e;
          e++
        ) {
          var f = c.concat(d[e].split(""));
          uc[e] = f;
          for (var h = 0; h < f.length; h++) {
            var k = f[h];
            void 0 === vc[k] && (vc[k] = h);
          }
        }
      }
      b = uc[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var l = a[f],
          m = a[f + 1];
        k = a[f + 2];
        h = b[l >> 2];
        l = b[((l & 3) << 4) | (m >> 4)];
        m = b[((m & 15) << 2) | (k >> 6)];
        k = b[k & 63];
        c[e++] = "" + h + l + m + k;
      }
      h = 0;
      k = d;
      switch (a.length - f) {
        case 2:
          (h = a[f + 1]), (k = b[(h & 15) << 2] || d);
        case 1:
          (a = a[f]), (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (h >> 4)] + k + d);
      }
      return c.join("");
    };
  var xc = "undefined" !== typeof Uint8Array,
    yc = !gc && "function" === typeof btoa;
  function zc(a) {
    return Array.prototype.slice.call(a);
  }
  var Ac = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
  Math.max.apply(
    Math,
    oa(Object.values({ JC: 1, HC: 2, GC: 4, SC: 8, RC: 16, NC: 32, aC: 64, kD: 128, oC: 256, nC: 512 }))
  );
  var Bc = Ac
    ? function (a, b) {
        return (a[Ac] |= b);
      }
    : function (a, b) {
        if (void 0 !== a.nb) return (a.nb |= b);
        Object.defineProperties(a, { nb: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        return b;
      };
  function Cc(a, b) {
    var c = Dc(a);
    (c & b) !== b && (Object.isFrozen(a) && (a = zc(a)), Ec(a, c | b));
    return a;
  }
  var Fc = Ac
      ? function (a, b) {
          return (a[Ac] &= ~b);
        }
      : function (a, b) {
          return void 0 !== a.nb ? (a.nb &= ~b) : 0;
        },
    Dc = Ac
      ? function (a) {
          return a[Ac] | 0;
        }
      : function (a) {
          return a.nb | 0;
        },
    Gc = Ac
      ? function (a) {
          return a[Ac];
        }
      : function (a) {
          return a.nb;
        },
    Ec = Ac
      ? function (a, b) {
          a[Ac] = b;
        }
      : function (a, b) {
          void 0 !== a.nb
            ? (a.nb = b)
            : Object.defineProperties(a, { nb: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  function Hc(a, b) {
    Object.isFrozen(a) && (a = zc(a));
    Ec(a, b);
    return a;
  }
  function Ic(a) {
    Bc(a, 1);
    return a;
  }
  function Jc(a) {
    Bc(a, 34);
    return a;
  }
  function Kc(a, b) {
    Ec(b, (a | 0) & -99);
  }
  function Lc(a, b) {
    Ec(b, (a | 34) & -73);
    a & 4 && Object.freeze(b);
  }
  function Mc(a) {
    a = (a >> 10) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var Nc = {};
  function Oc(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var Pc,
    Qc,
    Rc = [];
  Ec(Rc, 39);
  Qc = Object.freeze(Rc);
  function Sc(a) {
    if (a & 2) throw Error();
  }
  function Tc(a) {
    return a.displayName || a.name || "unknown type name";
  }
  function Uc(a) {
    if ("number" !== typeof a) throw Error();
    return a;
  }
  function Vc(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    return "number" === typeof a ? a : void 0;
  }
  function Wc(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function Xc(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function Yc(a, b) {
    if (!(a instanceof b)) throw Error("Expected instanceof " + Tc(b) + " but got " + (a && Tc(a.constructor)));
    return a;
  }
  function Zc(a, b, c, d) {
    var e = !1;
    if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.hk === Nc) return a;
    if (!e)
      return (
        c
          ? d & 2
            ? (a = b[$c])
              ? (b = a)
              : ((a = new b()), Jc(a.G), (b = b[$c] = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    e = c = Dc(a);
    0 === e && (e |= d & 32);
    e |= d & 2;
    e !== c && Ec(a, e);
    return new b(a);
  }
  var $c = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : "di";
  var ad;
  function bd(a, b) {
    ad = b;
    a = new a(b);
    ad = void 0;
    return a;
  }
  function cd(a, b, c) {
    null == a && (a = ad);
    ad = void 0;
    if (null == a) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -1047553) | ((b & 1023) << 10));
    } else {
      if (!Array.isArray(a)) throw Error();
      d = Dc(a);
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error();
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1,
            h = c[f];
          if (Oc(h)) {
            d |= 256;
            b = ((d >> 9) & 1) - 1;
            e = f - b;
            1024 <= e && (dd(c, b, h), (e = 1023));
            d = (d & -1047553) | ((e & 1023) << 10);
            break a;
          }
        }
        b &&
          ((h = ((d >> 9) & 1) - 1),
          (b = Math.max(b, e - h)),
          1024 < b && (dd(c, h, {}), (d |= 256), (b = 1023)),
          (d = (d & -1047553) | ((b & 1023) << 10)));
      }
    }
    Ec(a, d);
    return a;
  }
  function dd(a, b, c) {
    for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
      var h = a[f];
      null != h && h !== c && (c[f - b] = h);
    }
    a.length = d + 1;
    a[d] = c;
  }
  function ed(a, b) {
    return fd(b);
  }
  function fd(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a && !Array.isArray(a) && xc && null != a && a instanceof Uint8Array) {
          if (yc) {
            for (var b = "", c = 0, d = a.length - 10240; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            a = btoa(b);
          } else a = wc(a);
          return a;
        }
    }
    return a;
  }
  function gd(a, b, c) {
    a = zc(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function hd(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a = e && 0 == a.length && Dc(a) & 1 ? void 0 : f && Dc(a) & 2 ? a : id(a, b, c, void 0 !== d, e, f);
      else if (Oc(a)) {
        var h = {},
          k;
        for (k in a) h[k] = hd(a[k], b, c, d, e, f);
        a = h;
      } else a = b(a, d);
      return a;
    }
  }
  function id(a, b, c, d, e, f) {
    var h = d || c ? Dc(a) : 0;
    d = d ? !!(h & 32) : void 0;
    a = zc(a);
    for (var k = 0; k < a.length; k++) a[k] = hd(a[k], b, c, d, e, f);
    c && c(h, a);
    return a;
  }
  function jd(a) {
    return a.hk === Nc ? a.oB() : fd(a);
  }
  function kd(a, b, c) {
    c = void 0 === c ? Lc : c;
    if (null != a) {
      if (xc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = Dc(a);
        return d & 2
          ? a
          : !b || d & 68 || !(d & 32 || 0 === d)
          ? id(a, kd, d & 4 ? Lc : c, !0, !1, !0)
          : (Ec(a, d | 34), a);
      }
      a.hk === Nc && ((b = a.G), (c = Gc(b)), (a = c & 2 ? a : bd(a.constructor, ld(b, c, !0))));
      return a;
    }
  }
  function ld(a, b, c) {
    var d = c || b & 2 ? Lc : Kc,
      e = !!(b & 32);
    a = gd(a, b, function (f) {
      return kd(f, e, d);
    });
    Bc(a, 32 | (c ? 2 : 0));
    return a;
  }
  function md(a) {
    var b = a.G,
      c = Gc(b);
    return c & 2 ? bd(a.constructor, ld(b, c, !1)) : a;
  }
  var od = function (a, b, c) {
      a = a.G;
      return nd(a, Gc(a), b, c);
    },
    nd = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= Mc(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
        b = c + (((b >> 9) & 1) - 1);
        if (b < e) return a[b];
      }
    },
    qd = function (a, b, c, d) {
      var e = a.G,
        f = Gc(e);
      Sc(f);
      pd(e, f, b, c, d);
      return a;
    };
  function pd(a, b, c, d, e) {
    var f = Mc(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];
      else {
        if (null == d) return;
        f = a[f + (((b >> 9) & 1) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && Ec(a, e);
    } else (a[c + (((b >> 9) & 1) - 1)] = d), b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  }
  function rd(a, b, c, d, e) {
    var f = b & 2,
      h = nd(a, b, c, e);
    Array.isArray(h) || (h = Qc);
    var k = Dc(h);
    k & 1 || Ic(h);
    if (f) k & 2 || Jc(h), d & 1 || Object.freeze(h);
    else {
      f = !(d & 2);
      var l = k & 2;
      d & 1 || !l ? f && k & 32 && !l && Fc(h, 32) : ((h = Ic(zc(h))), pd(a, b, c, h, e));
    }
    return h;
  }
  var sd = function (a, b, c, d) {
      a = a.G;
      var e = Gc(a);
      Sc(e);
      var f = nd(a, e, c, d);
      b = md(Zc(f, b, !0, e));
      f !== b && pd(a, e, c, b, d);
      return b;
    },
    td = function (a, b, c, d) {
      a = a.G;
      var e = Gc(a),
        f = nd(a, e, c, d);
      b = Zc(f, b, !1, e);
      b !== f && null != b && pd(a, e, c, b, d);
      return b;
    },
    ud = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      b = td(a, b, c, d);
      if (null == b) return b;
      a = a.G;
      var e = Gc(a);
      if (!(e & 2)) {
        var f = md(b);
        f !== b && ((b = f), pd(a, e, c, b, d));
      }
      return b;
    },
    vd = function (a, b, c, d, e) {
      null != d ? Yc(d, b) : (d = void 0);
      return qd(a, c, d, e);
    };
  function wd(a, b) {
    return null != a ? a : b;
  }
  var xd = function (a, b, c, d) {
    c = void 0 === c ? 0 : c;
    return wd(Vc(od(a, b, d)), c);
  };
  var yd = function (a, b, c) {
    this.G = cd(a, b, c);
  };
  g = yd.prototype;
  g.oB = function () {
    return this.toJSON();
  };
  g.toJSON = function () {
    return Pc ? zd(this, this.G, !1) : zd(this, id(this.G, jd, void 0, void 0, !1, !1), !0);
  };
  g.Fe = function () {
    Pc = !0;
    try {
      return JSON.stringify(this.toJSON(), ed);
    } finally {
      Pc = !1;
    }
  };
  g.getExtension = function (a) {
    var b = a.Id ? a.mf(this, a.Id, a.Rd, !0) : a.xx ? a.mf(this, a.Rd, !0) : a.mf(this, a.Rd, a.defaultValue, !0);
    return a.ix && null == b ? a.defaultValue : b;
  };
  g.Rn = function (a) {
    a = a.Id ? a.mf(this, a.Id, a.Rd, !0) : a.mf(this, a.Rd, null, !0);
    return null === a ? void 0 : a;
  };
  g.hasExtension = function (a) {
    return a.Id ? void 0 !== td(this, a.Id, a.Rd, !0) : void 0 !== this.Rn(a);
  };
  g.clone = function () {
    var a = this.G;
    return bd(this.constructor, ld(a, Gc(a), !1));
  };
  g.hk = Nc;
  g.toString = function () {
    return zd(this, this.G, !1).toString();
  };
  function zd(a, b, c) {
    var d = a.constructor.vd,
      e = Mc(Gc(c ? a.G : b)),
      f = !1;
    if (d) {
      if (!c) {
        b = zc(b);
        var h;
        if (b.length && Oc((h = b[b.length - 1])))
          for (f = 0; f < d.length; f++)
            if (d[f] >= e) {
              Object.assign((b[b.length - 1] = {}), h);
              break;
            }
        f = !0;
      }
      e = b;
      c = !c;
      h = Gc(a.G);
      a = Mc(h);
      h = ((h >> 9) & 1) - 1;
      for (var k, l, m = 0; m < d.length; m++)
        if (((l = d[m]), l < a)) {
          l += h;
          var r = e[l];
          null == r ? (e[l] = c ? Qc : Ic([])) : c && r !== Qc && Cc(r, 1);
        } else
          k || ((r = void 0), e.length && Oc((r = e[e.length - 1])) ? (k = r) : e.push((k = {}))),
            (r = k[l]),
            null == k[l] ? (k[l] = c ? Qc : Ic([])) : c && r !== Qc && Cc(r, 1);
    }
    d = b.length;
    if (!d) return b;
    var t;
    if (Oc((k = b[d - 1]))) {
      a: {
        var v = k;
        e = {};
        c = !1;
        for (var x in v) (a = v[x]), Array.isArray(a) && a != a && (c = !0), null != a ? (e[x] = a) : (c = !0);
        if (c) {
          for (var Q in e) {
            v = e;
            break a;
          }
          v = null;
        }
      }
      v != k && (t = !0);
      d--;
    }
    for (; 0 < d; d--) {
      k = b[d - 1];
      if (null != k) break;
      var X = !0;
    }
    if (!t && !X) return b;
    b = f ? b : Array.prototype.slice.call(b, 0, d);
    f && (b.length = d);
    v && b.push(v);
    return b;
  }
  var Ad = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Ad, yd);
  Ad.prototype.Oz = function (a) {
    return qd(this, 4, Wc(a), void 0);
  };
  Ad.prototype.ht = function () {
    return qd(this, 4, void 0, !1);
  };
  Ad.prototype.Wz = function (a) {
    var b = this.G,
      c = Gc(b);
    Sc(c);
    a = null == a ? Qc : Cc(a, 1);
    pd(b, c, 2, a, void 0);
    return this;
  };
  Ad.vd = [2];
  var Bd = function (a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (
      "http" !== c &&
      "https" !== c &&
      "chrome-extension" !== c &&
      "moz-extension" !== c &&
      "file" !== c &&
      "android-app" !== c &&
      "chrome-search" !== c &&
      "chrome-untrusted" !== c &&
      "chrome" !== c &&
      "app" !== c &&
      "devtools" !== c
    )
      throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (("http" === c && "80" !== e) || ("https" === c && "443" !== e)) a = ":" + e;
    }
    return c + "://" + b + a;
  };
  function Dd() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      r = m = 0;
    }
    function b(t) {
      for (var v = h, x = 0; 64 > x; x += 4) v[x / 4] = (t[x] << 24) | (t[x + 1] << 16) | (t[x + 2] << 8) | t[x + 3];
      for (x = 16; 80 > x; x++)
        (t = v[x - 3] ^ v[x - 8] ^ v[x - 14] ^ v[x - 16]), (v[x] = ((t << 1) | (t >>> 31)) & 4294967295);
      t = e[0];
      var Q = e[1],
        X = e[2],
        S = e[3],
        sa = e[4];
      for (x = 0; 80 > x; x++) {
        if (40 > x)
          if (20 > x) {
            var M = S ^ (Q & (X ^ S));
            var H = 1518500249;
          } else (M = Q ^ X ^ S), (H = 1859775393);
        else 60 > x ? ((M = (Q & X) | (S & (Q | X))), (H = 2400959708)) : ((M = Q ^ X ^ S), (H = 3395469782));
        M = ((((t << 5) | (t >>> 27)) & 4294967295) + M + sa + H + v[x]) & 4294967295;
        sa = S;
        S = X;
        X = ((Q << 30) | (Q >>> 2)) & 4294967295;
        Q = t;
        t = M;
      }
      e[0] = (e[0] + t) & 4294967295;
      e[1] = (e[1] + Q) & 4294967295;
      e[2] = (e[2] + X) & 4294967295;
      e[3] = (e[3] + S) & 4294967295;
      e[4] = (e[4] + sa) & 4294967295;
    }
    function c(t, v) {
      if ("string" === typeof t) {
        t = unescape(encodeURIComponent(t));
        for (var x = [], Q = 0, X = t.length; Q < X; ++Q) x.push(t.charCodeAt(Q));
        t = x;
      }
      v || (v = t.length);
      x = 0;
      if (0 == m) for (; x + 64 < v; ) b(t.slice(x, x + 64)), (x += 64), (r += 64);
      for (; x < v; )
        if (((f[m++] = t[x++]), r++, 64 == m))
          for (m = 0, b(f); x + 64 < v; ) b(t.slice(x, x + 64)), (x += 64), (r += 64);
    }
    function d() {
      var t = [],
        v = 8 * r;
      56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
      for (var x = 63; 56 <= x; x--) (f[x] = v & 255), (v >>>= 8);
      b(f);
      for (x = v = 0; 5 > x; x++) for (var Q = 24; 0 <= Q; Q -= 8) t[v++] = (e[x] >> Q) & 255;
      return t;
    }
    for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
    var m, r;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      Ut: function () {
        for (var t = d(), v = "", x = 0; x < t.length; x++)
          v += "0123456789ABCDEF".charAt(Math.floor(t[x] / 16)) + "0123456789ABCDEF".charAt(t[x] % 16);
        return v;
      },
    };
  }
  var Fd = function (a, b, c, d, e) {
      return a && b && c ? [c, Ed(Bd(a), b, d || null, e || [])].join(" ") : null;
    },
    Ed = function (a, b, c, d) {
      var e = [];
      if (1 == (Array.isArray(c) ? 2 : 1))
        return (
          (e = [b, a]),
          Wb(d, function (k) {
            e.push(k);
          }),
          Gd(e.join(" "))
        );
      var f = [],
        h = [];
      Wb(c, function (k) {
        h.push(k.key);
        f.push(k.value);
      });
      c = Math.floor(new Date().getTime() / 1e3);
      e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
      Wb(d, function (k) {
        e.push(k);
      });
      a = Gd(e.join(" "));
      a = [c, a];
      0 == h.length || a.push(h.join(""));
      return a.join("_");
    },
    Gd = function (a) {
      var b = Dd();
      b.update(a);
      return b.Ut().toLowerCase();
    };
  var Hd = {};
  var Id = function () {
      return null;
    },
    Jd = function () {},
    Kd = function (a) {
      return a;
    };
  function Ld(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Md(a, b, c) {
    for (var d in a) if (b.call(c, a[d], d, a)) return !0;
    return !1;
  }
  function Nd(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function Od(a, b) {
    var c;
    (c = b in a) && delete a[b];
    return c;
  }
  function Pd(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  function Qd(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    var b = Array.isArray(a)
        ? []
        : "function" !== typeof ArrayBuffer ||
          "function" !== typeof ArrayBuffer.isView ||
          !ArrayBuffer.isView(a) ||
          a instanceof DataView
        ? {}
        : new a.constructor(a.length),
      c;
    for (c in a) b[c] = Qd(a[c]);
    return b;
  }
  var Rd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Sd(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Rd.length; f++) (c = Rd[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Td = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  var Ud,
    Vd = function () {
      if (void 0 === Ud) {
        var a = null,
          b = y.trustedTypes;
        if (b && b.createPolicy)
          try {
            a = b.createPolicy("goog#html", { createHTML: gb, createScript: gb, createScriptURL: gb });
          } catch (c) {
            y.console && y.console.error(c.message);
          }
        Ud = a;
      }
      return Ud;
    };
  var Yd = function (a, b) {
    this.vr = (a === Wd && b) || "";
    this.ls = Xd;
  };
  Yd.prototype.Cb = !0;
  Yd.prototype.bb = function () {
    return this.vr;
  };
  var Zd = function (a) {
      return a instanceof Yd && a.constructor === Yd && a.ls === Xd ? a.vr : "type_error:Const";
    },
    $d = function (a) {
      return new Yd(Wd, a);
    },
    Xd = {},
    Wd = {};
  var ae = function (a) {
    this.tk = a;
  };
  ae.prototype.toString = function () {
    return this.tk + "";
  };
  ae.prototype.Cb = !0;
  ae.prototype.bb = function () {
    return this.tk.toString();
  };
  var be = function (a) {
      return a instanceof ae && a.constructor === ae ? a.tk : "type_error:TrustedResourceUrl";
    },
    fe = function (a, b) {
      var c = Zd(a);
      if (!ce.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(de, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' +
              e +
              '", in format string, "' +
              c +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(b)
          );
        d = b[e];
        return d instanceof Yd ? Zd(d) : encodeURIComponent(String(d));
      });
      return ee(a);
    },
    de = /%{(\w+)}/g,
    ce = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    ge = {},
    ee = function (a) {
      var b = Vd();
      a = b ? b.createScriptURL(a) : a;
      return new ae(a, ge);
    };
  var he = function (a) {
    this.sk = a;
  };
  he.prototype.toString = function () {
    return this.sk.toString();
  };
  he.prototype.Cb = !0;
  he.prototype.bb = function () {
    return this.sk.toString();
  };
  var ie = function (a) {
      return a instanceof he && a.constructor === he ? a.sk : "type_error:SafeUrl";
    },
    je = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    ke = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    ne = function (a) {
      a instanceof he ||
        ((a = "object" == typeof a && a.Cb ? a.bb() : String(a)),
        ke.test(a) ? (a = le(a)) : ((a = String(a).replace(/(%0A|%0D)/g, "")), (a = a.match(je) ? le(a) : null)));
      return a || me;
    },
    oe;
  try {
    new URL("s://g"), (oe = !0);
  } catch (a) {
    oe = !1;
  }
  var pe = oe,
    qe = {},
    le = function (a) {
      return new he(a, qe);
    },
    me = le("about:invalid#zClosurez");
  var re = {},
    se = function (a) {
      this.rk = a;
      this.Cb = !0;
    };
  se.prototype.bb = function () {
    return this.rk;
  };
  se.prototype.toString = function () {
    return this.rk.toString();
  };
  var te = function (a) {
      return a instanceof se && a.constructor === se ? a.rk : "type_error:SafeStyle";
    },
    we = function (a) {
      var b = "",
        c;
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
          var d = a[c];
          null != d && ((d = Array.isArray(d) ? d.map(ue).join(" ") : ue(d)), (b += c + ":" + d + ";"));
        }
      return b ? new se(b, re) : ve;
    },
    ve = new se("", re);
  function ue(a) {
    if (a instanceof he) return 'url("' + ie(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    if (a instanceof Yd) a = Zd(a);
    else {
      a = String(a);
      var b = a.replace(xe, "$1").replace(xe, "$1").replace(ye, "url");
      if (ze.test(b)) {
        if ((b = !Ae.test(a))) {
          for (var c = (b = !0), d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
          }
          b = b && c && Be(a);
        }
        a = b ? Ce(a) : "zClosurez";
      } else a = "zClosurez";
    }
    if (/[{;}]/.test(a)) throw new ib("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function Be(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  var ze = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    ye = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    xe = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    Ae = /\/\*/;
  function Ce(a) {
    return a.replace(ye, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
        f = k;
        return l;
      });
      b = ne(d).bb();
      return c + f + b + f + e;
    });
  }
  var De = {},
    Ee = function (a) {
      this.qk = a;
      this.Cb = !0;
    };
  Ee.prototype.toString = function () {
    return this.qk.toString();
  };
  var Ge = function (a) {
    var b = "",
      c = function (d) {
        Array.isArray(d) ? d.forEach(c) : (b += Fe(d));
      };
    Array.prototype.forEach.call(arguments, c);
    return new Ee(b, De);
  };
  Ee.prototype.bb = function () {
    return this.qk;
  };
  var Fe = function (a) {
      return a instanceof Ee && a.constructor === Ee ? a.qk : "type_error:SafeStyleSheet";
    },
    He = new Ee("", De);
  var Ie = {},
    Je = function (a) {
      this.pk = a;
      this.Cb = !0;
    };
  Je.prototype.bb = function () {
    return this.pk.toString();
  };
  Je.prototype.toString = function () {
    return this.pk.toString();
  };
  var Ke = function (a) {
      return a instanceof Je && a.constructor === Je ? a.pk : "type_error:SafeHtml";
    },
    Me = function (a) {
      return a instanceof Je ? a : Le(wb("object" == typeof a && a.Cb ? a.bb() : String(a)));
    },
    Ne = function (a, b) {
      a = Me(a);
      var c = [],
        d = function (e) {
          Array.isArray(e) ? e.forEach(d) : ((e = Me(e)), c.push(Ke(e).toString()));
        };
      b.forEach(d);
      return Le(c.join(Ke(a).toString()));
    },
    Pe = function (a) {
      return Ne(Oe, Array.prototype.slice.call(arguments));
    },
    Le = function (a) {
      var b = Vd();
      a = b ? b.createHTML(a) : a;
      return new Je(a, Ie);
    },
    Qe = /^[a-zA-Z0-9-]+$/,
    Re = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
    Se = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    },
    Oe = new Je((y.trustedTypes && y.trustedTypes.emptyHTML) || "", Ie);
  var Te = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = Ke(Oe);
      return !b.parentElement;
    }),
    Ue = function (a, b) {
      if (Te()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Ke(b);
    },
    Ve = function (a, b) {
      if (!(b instanceof he || b instanceof he)) {
        b = "object" == typeof b && b.Cb ? b.bb() : String(b);
        b: {
          var c = b;
          if (pe) {
            try {
              var d = new URL(c);
            } catch (e) {
              c = "https:";
              break b;
            }
            c = d.protocol;
          } else
            c: {
              d = document.createElement("a");
              try {
                d.href = c;
              } catch (e) {
                c = void 0;
                break c;
              }
              c = d.protocol;
              c = ":" === c || "" === c ? "https:" : c;
            }
        }
        "javascript:" !== c || (b = "about:invalid#zClosurez");
        b = le(b);
      }
      a.href = ie(b);
    },
    Xe = function (a, b) {
      var c = We("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView);
      c && a.setAttribute("nonce", c);
      a.src = be(b);
    },
    Ye = /^[\w+/_-]+[=]{0,2}$/,
    We = function (a, b) {
      b = (b || y).document;
      return b.querySelector
        ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Ye.test(a)
          ? a
          : ""
        : "";
    };
  var Ze = function (a, b) {
    return (a = wb(a, b));
  };
  var $e = function (a) {
    this.sc = a || { cookie: "" };
  };
  g = $e.prototype;
  g.isEnabled = function () {
    if (!y.navigator.cookieEnabled) return !1;
    if (!this.jx()) return !0;
    this.set("TESTCOOKIESENABLED", "1", { tp: 60 });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  g.Cx = function (a) {
    return !/[;=\s]/.test(a);
  };
  g.Ex = function (a) {
    return !/[;\r\n]/.test(a);
  };
  g.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.WF;
      d = c.aG || !1;
      var f = c.domain || void 0;
      var h = c.path || void 0;
      var k = c.tp;
    }
    if (!this.Cx(a)) throw Error('Invalid cookie name "' + a + '"');
    if (!this.Ex(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === k && (k = -1);
    this.Sz(
      a +
        "=" +
        b +
        (f ? ";domain=" + f : "") +
        (h ? ";path=" + h : "") +
        (0 > k
          ? ""
          : 0 == k
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + 1e3 * k).toUTCString()) +
        (d ? ";secure" : "") +
        (null != e ? ";samesite=" + e : "")
    );
  };
  g.get = function (a, b) {
    for (var c = a + "=", d = this.io(), e = 0, f; e < d.length; e++) {
      f = ob(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  g.remove = function (a, b, c) {
    var d = this.vt(a);
    this.set(a, "", { tp: 0, path: b, domain: c });
    return d;
  };
  g.jx = function () {
    return !this.sc.cookie;
  };
  g.vt = function (a) {
    return void 0 !== this.get(a);
  };
  g.clear = function () {
    for (var a = this.ov().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
  };
  g.Sz = function (a) {
    this.sc.cookie = a;
  };
  g.io = function () {
    return (this.sc.cookie || "").split(";");
  };
  g.ov = function () {
    for (var a = this.io(), b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = ob(a[f])),
        (d = e.indexOf("=")),
        -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  var af = function (a) {
      return !!Hd.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
    },
    bf = function (a, b, c, d) {
      (a = y[a]) || "undefined" === typeof document || (a = new $e(document).get(b));
      return a ? Fd(String(y.location.href), a, c, d) : null;
    },
    cf = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = Bd(String(y.location.href)),
        d = [];
      var e = b;
      e = void 0 === e ? !1 : e;
      var f = y.__SAPISID || y.__APISID || y.__3PSAPISID || y.__OVERRIDE_SID;
      af(e) && (f = f || y.__1PSAPISID);
      if (f) e = !0;
      else {
        if ("undefined" !== typeof document) {
          var h = new $e(document);
          f = h.get("SAPISID") || h.get("APISID") || h.get("__Secure-3PAPISID") || h.get("SID") || h.get("OSID");
          af(e) && (f = f || h.get("__Secure-1PAPISID"));
        }
        e = !!f;
      }
      e &&
        ((e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"))
          ? y.__SAPISID
          : y.__APISID),
        e ||
          "undefined" === typeof document ||
          ((e = new $e(document)), (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
        (e = e ? Fd(String(y.location.href), e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e),
        c &&
          af(b) &&
          ((b = bf("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
          (a = bf("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
      return 0 == d.length ? null : d.join(" ");
    };
  function df(a) {
    a && "function" == typeof a.Ei && a.Ei();
  }
  var ef = function () {
    this.Md = this.Md;
    this.pd = this.pd;
  };
  g = ef.prototype;
  g.Md = !1;
  g.Ei = function () {
    this.Md || ((this.Md = !0), this.Pb());
  };
  g.xk = function (a) {
    this.ys(eb(df, a));
  };
  g.ys = function (a, b) {
    this.Md ? (void 0 !== b ? a.call(b) : a()) : (this.pd || (this.pd = []), this.pd.push(void 0 !== b ? db(a, b) : a));
  };
  g.Pb = function () {
    if (this.pd) for (; this.pd.length; ) this.pd.shift()();
  };
  var ff = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(ff, yd);
  ff.prototype.vA = function (a) {
    return qd(this, 13, null == a ? a : Uc(a), void 0);
  };
  var gf = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(gf, yd);
  gf.prototype.xA = function (a) {
    return vd(this, ff, 2, a);
  };
  var hf = function (a, b) {
    return a + Math.random() * (b - a);
  };
  var kf = function (a, b) {
      Ld(b, function (c, d) {
        c && "object" == typeof c && c.Cb && (c = c.bb());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : jf.hasOwnProperty(d)
          ? a.setAttribute(jf[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    jf = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    lf = function (a, b, c, d) {
      function e(k) {
        k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Ya(f) || (Za(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (Za(f)) {
                var h = "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                h = "function" == typeof f.item;
                break a;
              }
            }
            h = !1;
          }
          Wb(h ? ac(f) : f, e);
        }
      }
    },
    mf = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    nf = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    of = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    pf = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else nf(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)));
    },
    qf = function (a) {
      this.sc = a || y.document || document;
    };
  g = qf.prototype;
  g.qj = function (a) {
    return "string" === typeof a ? this.sc.getElementById(a) : a;
  };
  g.getElementsByTagName = function (a, b) {
    return (b || this.sc).getElementsByTagName(String(a));
  };
  g.createElement = function (a) {
    return mf(this.sc, a);
  };
  g.createTextNode = function (a) {
    return this.sc.createTextNode(String(a));
  };
  g.appendChild = function (a, b) {
    a.appendChild(b);
  };
  g.append = function (a, b) {
    lf(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1);
  };
  g.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  g.removeNode = of;
  g.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  var rf = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Ef = !1;
  };
  rf.prototype.stopPropagation = function () {
    this.Ef = !0;
  };
  rf.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var sf = (function () {
    if (!y.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      y.addEventListener("test", c, b);
      y.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  var tf = function (a, b) {
    rf.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.hf = null;
    a && this.Pw(a, b);
  };
  fb(tf, rf);
  var uf = { 2: "touch", 3: "pen", 4: "mouse" };
  tf.prototype.Pw = function (a, b) {
    var c = (this.type = a.type),
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if ((b = a.relatedTarget)) {
      if (ic) {
        a: {
          try {
            ec(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = jc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = jc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : uf[a.pointerType] || "";
    this.state = a.state;
    this.hf = a;
    a.defaultPrevented && tf.yd.preventDefault.call(this);
  };
  tf.prototype.stopPropagation = function () {
    tf.yd.stopPropagation.call(this);
    this.hf.stopPropagation ? this.hf.stopPropagation() : (this.hf.cancelBubble = !0);
  };
  tf.prototype.preventDefault = function () {
    tf.yd.preventDefault.call(this);
    var a = this.hf;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var vf = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var wf = 0;
  var xf = function (a, b, c, d, e, f) {
    this.listener = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.Vg = f;
    this.key = ++wf;
    this.Gf = this.lg = !1;
  };
  xf.prototype.kh = function () {
    this.Gf = !0;
    this.Vg = this.src = this.proxy = this.listener = null;
  };
  var yf = function (a) {
    this.src = a;
    this.Fa = {};
    this.Yf = 0;
  };
  g = yf.prototype;
  g.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.Fa[f];
    a || ((a = this.Fa[f] = []), this.Yf++);
    var h = zf(a, b, d, e);
    -1 < h ? ((b = a[h]), c || (b.lg = !1)) : ((b = new xf(b, null, this.src, f, !!d, e)), (b.lg = c), a.push(b));
    return b;
  };
  g.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.Fa)) return !1;
    var e = this.Fa[a];
    b = zf(e, b, c, d);
    return -1 < b
      ? (e[b].kh(), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.Fa[a], this.Yf--), !0)
      : !1;
  };
  g.eq = function (a) {
    var b = a.type;
    if (!(b in this.Fa)) return !1;
    var c = Zb(this.Fa[b], a);
    c && (a.kh(), 0 == this.Fa[b].length && (delete this.Fa[b], this.Yf--));
    return c;
  };
  g.Ny = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.Fa)
      if (!a || c == a) {
        for (var d = this.Fa[c], e = 0; e < d.length; e++) ++b, d[e].kh();
        delete this.Fa[c];
        this.Yf--;
      }
    return b;
  };
  g.vj = function (a, b, c, d) {
    a = this.Fa[a.toString()];
    var e = -1;
    a && (e = zf(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  g.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return Md(this.Fa, function (f) {
      for (var h = 0; h < f.length; ++h) if (!((c && f[h].type != d) || (e && f[h].capture != b))) return !0;
      return !1;
    });
  };
  var zf = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Gf && f.listener == b && f.capture == !!c && f.Vg == d) return e;
    }
    return -1;
  };
  var Af = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Bf = {},
    Cf = 0,
    Ef = function (a, b, c, d, e) {
      if (d && d.once) return Df(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Ef(a, b[f], c, d, e);
        return null;
      }
      c = Ff(c);
      return a && a[vf] ? a.xc(b, c, Za(d) ? !!d.capture : !!d, e) : Gf(a, b, c, !1, d, e);
    },
    Gf = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = Za(e) ? !!e.capture : !!e,
        k = Hf(a);
      k || (a[Af] = k = new yf(a));
      c = k.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = If();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) sf || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Jf(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Cf++;
      return c;
    },
    If = function () {
      var a = Kf,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    Df = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Df(a, b[f], c, d, e);
        return null;
      }
      c = Ff(c);
      return a && a[vf] ? a.np(b, c, Za(d) ? !!d.capture : !!d, e) : Gf(a, b, c, !0, d, e);
    },
    Lf = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Lf(a, b[f], c, d, e);
        return null;
      }
      d = Za(d) ? !!d.capture : !!d;
      c = Ff(c);
      if (a && a[vf]) return a.Jr(b, c, d, e);
      if (!a) return !1;
      if ((a = Hf(a))) if ((b = a.vj(b, c, d, e))) return Mf(b);
      return !1;
    },
    Mf = function (a) {
      if ("number" === typeof a || !a || a.Gf) return !1;
      var b = a.src;
      if (b && b[vf]) return b.Kr(a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Jf(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      Cf--;
      (c = Hf(b)) ? (c.eq(a), 0 == c.Yf && ((c.src = null), (b[Af] = null))) : a.kh();
      return !0;
    },
    Jf = function (a) {
      return a in Bf ? Bf[a] : (Bf[a] = "on" + a);
    },
    Kf = function (a, b) {
      if (a.Gf) a = !0;
      else {
        b = new tf(b, this);
        var c = a.listener,
          d = a.Vg || a.src;
        a.lg && Mf(a);
        a = c.call(d, b);
      }
      return a;
    },
    Hf = function (a) {
      a = a[Af];
      return a instanceof yf ? a : null;
    },
    Nf = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Ff = function (a) {
      if ("function" === typeof a) return a;
      a[Nf] ||
        (a[Nf] = function (b) {
          return a.handleEvent(b);
        });
      return a[Nf];
    };
  var Of = function (a, b, c, d) {
    this.Qo = a;
    this.up = b;
    this.df = this.Sc = a;
    this.Zp = c || 0;
    this.Ss = d || 2;
  };
  Of.prototype.reset = function () {
    this.df = this.Sc = this.Qo;
  };
  Of.prototype.Rs = function () {
    this.df = Math.min(this.up, this.df * this.Ss);
    this.Sc = Math.min(this.up, this.df + (this.Zp ? Math.round(this.Zp * (Math.random() - 0.5) * 2 * this.df) : 0));
  };
  var Pf = function () {
    ef.call(this);
    this.Sb = new yf(this);
    this.ms = this;
    this.mk = null;
  };
  fb(Pf, ef);
  Pf.prototype[vf] = !0;
  g = Pf.prototype;
  g.addEventListener = function (a, b, c, d) {
    Ef(this, a, b, c, d);
  };
  g.removeEventListener = function (a, b, c, d) {
    Lf(this, a, b, c, d);
  };
  g.dispatchEvent = function (a) {
    var b = this.mk;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.mk) c.push(b), ++d;
    }
    b = this.ms;
    d = a.type || a;
    if ("string" === typeof a) a = new rf(a, b);
    else if (a instanceof rf) a.target = a.target || b;
    else {
      var e = a;
      a = new rf(d, b);
      Sd(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.Ef && 0 <= f; f--) {
        var h = (a.currentTarget = c[f]);
        e = h.Gg(d, !0, a) && e;
      }
    a.Ef || ((h = a.currentTarget = b), (e = h.Gg(d, !0, a) && e), a.Ef || (e = h.Gg(d, !1, a) && e));
    if (c) for (f = 0; !a.Ef && f < c.length; f++) (h = a.currentTarget = c[f]), (e = h.Gg(d, !1, a) && e);
    return e;
  };
  g.Pb = function () {
    Pf.yd.Pb.call(this);
    this.Oy();
    this.mk = null;
  };
  g.xc = function (a, b, c, d) {
    return this.Sb.add(String(a), b, !1, c, d);
  };
  g.np = function (a, b, c, d) {
    return this.Sb.add(String(a), b, !0, c, d);
  };
  g.Jr = function (a, b, c, d) {
    return this.Sb.remove(String(a), b, c, d);
  };
  g.Kr = function (a) {
    return this.Sb.eq(a);
  };
  g.Oy = function (a) {
    return this.Sb ? this.Sb.Ny(a) : 0;
  };
  g.Gg = function (a, b, c) {
    a = this.Sb.Fa[String(a)];
    if (!a) return !0;
    a = a.concat();
    for (var d = !0, e = 0; e < a.length; ++e) {
      var f = a[e];
      if (f && !f.Gf && f.capture == b) {
        var h = f.listener,
          k = f.Vg || f.src;
        f.lg && this.Kr(f);
        d = !1 !== h.call(k, c) && d;
      }
    }
    return d && !c.defaultPrevented;
  };
  g.vj = function (a, b, c, d) {
    return this.Sb.vj(String(a), b, c, d);
  };
  g.hasListener = function (a, b) {
    return this.Sb.hasListener(void 0 !== a ? String(a) : void 0, b);
  };
  var Qf = function () {};
  Qf.prototype.em = null;
  Qf.prototype.fo = function () {
    return this.em || (this.em = this.ax());
  };
  var Rf,
    Sf = function () {};
  fb(Sf, Qf);
  Sf.prototype.Fm = function () {
    var a = this.ko();
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  Sf.prototype.ax = function () {
    var a = {};
    this.ko() && ((a[0] = !0), (a[1] = !0));
    return a;
  };
  Sf.prototype.ko = function () {
    if (!this.Lo && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (
        var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b];
        try {
          return new ActiveXObject(c), (this.Lo = c);
        } catch (d) {}
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return this.Lo;
  };
  Rf = new Sf();
  var Tf = function (a, b, c) {
    this.Ix = c;
    this.Ot = a;
    this.fz = b;
    this.mh = 0;
    this.Xg = null;
  };
  Tf.prototype.get = function () {
    if (0 < this.mh) {
      this.mh--;
      var a = this.Xg;
      this.Xg = a.next;
      a.next = null;
    } else a = this.Ot();
    return a;
  };
  Tf.prototype.put = function (a) {
    this.fz(a);
    this.mh < this.Ix && (this.mh++, (a.next = this.Xg), (this.Xg = a));
  };
  var Uf,
    Vf = function () {
      var a = y.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !A("Presto") &&
        (a = function () {
          var e = mf(document, "IFRAME");
          e.style.display = "none";
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var h = "callImmediate" + Math.random(),
            k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
          e = db(function (l) {
            if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(h, k);
            },
          };
        });
      if ("undefined" !== typeof a && !Nb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.gm;
            c.gm = null;
            e();
          }
        };
        return function (e) {
          d.next = { gm: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        y.setTimeout(e, 0);
      };
    };
  var Wf = function () {
    this.Ph = this.Se = null;
  };
  Wf.prototype.add = function (a, b) {
    var c = this.Tv();
    c.set(a, b);
    this.Ph ? (this.Ph.next = c) : (this.Se = c);
    this.Ph = c;
  };
  Wf.prototype.remove = function () {
    var a = null;
    this.Se && ((a = this.Se), (this.Se = this.Se.next), this.Se || (this.Ph = null), (a.next = null));
    return a;
  };
  Wf.prototype.iz = function (a) {
    Xf.put(a);
  };
  Wf.prototype.Tv = function () {
    return Xf.get();
  };
  var Xf = new Tf(
      function () {
        return new Yf();
      },
      function (a) {
        return a.reset();
      },
      100
    ),
    Yf = function () {
      this.next = this.scope = this.kj = null;
    };
  Yf.prototype.set = function (a, b) {
    this.kj = a;
    this.scope = b;
    this.next = null;
  };
  Yf.prototype.reset = function () {
    this.next = this.scope = this.kj = null;
  };
  var Zf,
    $f = !1,
    ag = new Wf(),
    cg = function (a, b) {
      Zf || bg();
      $f || (Zf(), ($f = !0));
      ag.add(a, b);
    },
    bg = function () {
      if (y.Promise && y.Promise.resolve) {
        var a = y.Promise.resolve(void 0);
        Zf = function () {
          a.then(dg);
        };
      } else
        Zf = function () {
          var b = dg;
          "function" !== typeof y.setImmediate ||
          (y.Window && y.Window.prototype && !Ob() && y.Window.prototype.setImmediate == y.setImmediate)
            ? (Uf || (Uf = Vf()), Uf(b))
            : y.setImmediate(b);
        };
    },
    dg = function () {
      for (var a; (a = ag.remove()); ) {
        try {
          a.kj.call(a.scope);
        } catch (b) {
          jb(b);
        }
        ag.iz(a);
      }
      $f = !1;
    };
  var eg = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var fg = function (a, b) {
      this.sb = 0;
      this.bc = void 0;
      this.Fd = this.lc = this.Na = null;
      this.Sg = this.fj = !1;
      if (a != Jd)
        try {
          var c = this;
          a.call(
            b,
            function (d) {
              c.te(2, d);
            },
            function (d) {
              c.te(3, d);
            }
          );
        } catch (d) {
          this.te(3, d);
        }
    },
    gg = function () {
      this.next = this.context = this.pe = this.Af = this.Qc = null;
      this.fg = !1;
    };
  gg.prototype.reset = function () {
    this.context = this.pe = this.Af = this.Qc = null;
    this.fg = !1;
  };
  var hg = new Tf(
      function () {
        return new gg();
      },
      function (a) {
        a.reset();
      },
      100
    ),
    ig = function (a, b, c) {
      var d = hg.get();
      d.Af = a;
      d.pe = b;
      d.context = c;
      return d;
    };
  fg.prototype.then = function (a, b, c) {
    return this.Ql("function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  fg.prototype.$goog_Thenable = !0;
  g = fg.prototype;
  g.lB = function (a, b, c) {
    this.Pl(ig(a || Jd, b || null, c));
  };
  g.kB = function (a, b) {
    return this.Ql(null, a, b);
  };
  g.catch = fg.prototype.kB;
  g.cancel = function (a) {
    if (0 == this.sb) {
      var b = new jg(a);
      cg(function () {
        this.fm(b);
      }, this);
    }
  };
  g.fm = function (a) {
    0 == this.sb && (this.Na ? (this.Na.dt(this, a), (this.Na = null)) : this.te(3, a));
  };
  g.dt = function (a, b) {
    if (this.lc) {
      for (
        var c = 0, d = null, e = null, f = this.lc;
        f && (f.fg || (c++, f.Qc == a && (d = f), !(d && 1 < c)));
        f = f.next
      )
        d || (e = f);
      d && (0 == this.sb && 1 == c ? this.fm(b) : (e ? this.Py(e) : this.Qp(), this.kn(d, 3, b)));
    }
  };
  g.Pl = function (a) {
    this.ww() || (2 != this.sb && 3 != this.sb) || this.xq();
    this.Fy(a);
  };
  g.Ql = function (a, b, c) {
    var d = ig(null, null, null);
    d.Qc = new fg(function (e, f) {
      d.Af = a
        ? function (h) {
            try {
              var k = a.call(c, h);
              e(k);
            } catch (l) {
              f(l);
            }
          }
        : e;
      d.pe = b
        ? function (h) {
            try {
              var k = b.call(c, h);
              void 0 === k && h instanceof jg ? f(h) : e(k);
            } catch (l) {
              f(l);
            }
          }
        : f;
    });
    d.Qc.Na = this;
    this.Pl(d);
    return d.Qc;
  };
  g.uB = function (a) {
    this.sb = 0;
    this.te(2, a);
  };
  g.vB = function (a) {
    this.sb = 0;
    this.te(3, a);
  };
  g.te = function (a, b) {
    if (0 == this.sb) {
      this === b && ((a = 3), (b = new TypeError("Promise cannot resolve to itself")));
      this.sb = 1;
      a: {
        var c = b,
          d = this.uB,
          e = this.vB;
        if (c instanceof fg) {
          c.lB(d, e, this);
          var f = !0;
        } else if (eg(c)) c.then(d, e, this), (f = !0);
        else {
          if (Za(c))
            try {
              var h = c.then;
              if ("function" === typeof h) {
                kg(c, h, d, e, this);
                f = !0;
                break a;
              }
            } catch (k) {
              e.call(this, k);
              f = !0;
              break a;
            }
          f = !1;
        }
      }
      f || ((this.bc = b), (this.sb = a), (this.Na = null), this.xq(), 3 != a || b instanceof jg || lg(this, b));
    }
  };
  var kg = function (a, b, c, d, e) {
    var f = !1,
      h = function (l) {
        f || ((f = !0), c.call(e, l));
      },
      k = function (l) {
        f || ((f = !0), d.call(e, l));
      };
    try {
      b.call(a, h, k);
    } catch (l) {
      k(l);
    }
  };
  g = fg.prototype;
  g.xq = function () {
    this.fj || ((this.fj = !0), cg(this.tu, this));
  };
  g.ww = function () {
    return !!this.lc;
  };
  g.Fy = function (a) {
    this.Fd ? (this.Fd.next = a) : (this.lc = a);
    this.Fd = a;
  };
  g.Qp = function () {
    var a = null;
    this.lc && ((a = this.lc), (this.lc = a.next), (a.next = null));
    this.lc || (this.Fd = null);
    return a;
  };
  g.Py = function (a) {
    a.next == this.Fd && (this.Fd = a);
    a.next = a.next.next;
  };
  g.tu = function () {
    for (var a; (a = this.Qp()); ) this.kn(a, this.sb, this.bc);
    this.fj = !1;
  };
  g.kn = function (a, b, c) {
    3 == b && a.pe && !a.fg && this.Ry();
    if (a.Qc) (a.Qc.Na = null), mg(a, b, c);
    else
      try {
        a.fg ? a.Af.call(a.context) : mg(a, b, c);
      } catch (d) {
        ng.call(null, d);
      }
    hg.put(a);
  };
  var mg = function (a, b, c) {
    2 == b ? a.Af.call(a.context, c) : a.pe && a.pe.call(a.context, c);
  };
  fg.prototype.Ry = function () {
    var a;
    for (a = this; a && a.Sg; a = a.Na) a.Sg = !1;
  };
  var lg = function (a, b) {
      a.Sg = !0;
      cg(function () {
        a.Sg && ng.call(null, b);
      });
    },
    ng = jb,
    jg = function (a) {
      hb.call(this, a);
    };
  fb(jg, hb);
  jg.prototype.name = "cancel";
  var og = function (a, b) {
    Pf.call(this);
    this.dh = a || 1;
    this.Wf = b || y;
    this.am = db(this.nB, this);
    this.lp = Date.now();
  };
  fb(og, Pf);
  g = og.prototype;
  g.enabled = !1;
  g.za = null;
  g.setInterval = function (a) {
    this.dh = a;
    this.za && this.enabled ? (this.stop(), this.start()) : this.za && this.stop();
  };
  g.nB = function () {
    if (this.enabled) {
      var a = Date.now() - this.lp;
      0 < a && a < 0.8 * this.dh
        ? (this.za = this.Wf.setTimeout(this.am, this.dh - a))
        : (this.za && (this.Wf.clearTimeout(this.za), (this.za = null)),
          this.Yt(),
          this.enabled && (this.stop(), this.start()));
    }
  };
  g.Yt = function () {
    this.dispatchEvent("tick");
  };
  g.start = function () {
    this.enabled = !0;
    this.za || ((this.za = this.Wf.setTimeout(this.am, this.dh)), (this.lp = Date.now()));
  };
  g.stop = function () {
    this.enabled = !1;
    this.za && (this.Wf.clearTimeout(this.za), (this.za = null));
  };
  g.Pb = function () {
    og.yd.Pb.call(this);
    this.stop();
    delete this.Wf;
  };
  var pg = function (a, b, c) {
    if ("function" === typeof a) c && (a = db(a, c));
    else if (a && "function" == typeof a.handleEvent) a = db(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : y.setTimeout(a, b || 0);
  };
  var qg = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    rg = function (a, b) {
      if (!b) return a;
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = "";
      } else e = a.substring(d + 1, c);
      a = [a.slice(0, d), e, a.slice(c)];
      c = a[1];
      a[1] = b ? (c ? c + "&" + b : b) : c;
      return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    },
    sg = function (a, b, c) {
      if (Array.isArray(b)) for (var d = 0; d < b.length; d++) sg(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    tg = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) sg(a[b], a[b + 1], c);
      return c.join("&");
    },
    ug = function (a, b) {
      var c = 2 == arguments.length ? tg(arguments[1], 0) : tg(arguments, 1);
      return rg(a, c);
    },
    vg = function (a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return rg(a, b + c);
    },
    wg = function (a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f)) return b;
        b += e + 1;
      }
      return -1;
    },
    xg = /#|$/,
    yg = /[?&]($|#)/;
  var zg = function (a) {
    Pf.call(this);
    this.headers = new Map();
    this.Rh = a || null;
    this.ec = !1;
    this.Qh = this.D = null;
    this.Xj = "";
    this.ed = this.Nj = this.ah = this.aj = !1;
    this.dc = 0;
    this.Ih = null;
    this.Ik = "";
    this.El = this.Dy = this.Fl = !1;
    this.wl = null;
  };
  fb(zg, Pf);
  var Ag = /^https?$/i,
    Bg = ["POST", "PUT"],
    Cg = [],
    Dg = function (a, b, c, d, e, f, h) {
      var k = new zg();
      Cg.push(k);
      b && k.xc("complete", b);
      k.np("ready", k.gt);
      f && k.cl(f);
      h && k.RA(h);
      k.send(a, c, d, e);
      return k;
    };
  g = zg.prototype;
  g.gt = function () {
    this.Ei();
    Zb(Cg, this);
  };
  g.cl = function (a) {
    this.dc = Math.max(0, a);
  };
  g.RA = function (a) {
    this.Fl = a;
  };
  g.setTrustToken = function (a) {
    this.wl = a;
  };
  g.send = function (a, b, c, d) {
    if (this.D) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Xj + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Xj = a;
    this.aj = !1;
    this.ec = !0;
    this.D = this.Nt();
    this.Qh = this.Rh ? this.Rh.fo() : Rf.fo();
    this.D.onreadystatechange = db(this.Dp, this);
    this.Dy &&
      "onprogress" in this.D &&
      ((this.D.onprogress = db(function (h) {
        this.Bp(h, !0);
      }, this)),
      this.D.upload && (this.D.upload.onprogress = db(this.Bp, this)));
    try {
      (this.Nj = !0), this.D.open(b, String(a), !0), (this.Nj = !1);
    } catch (h) {
      this.Dg(5, h);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
      else if ("function" === typeof d.keys && "function" === typeof d.get) {
        e = q(d.keys());
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), c.set(f, d.get(f));
      } else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function (h) {
      return "content-type" == h.toLowerCase();
    });
    e = y.FormData && a instanceof y.FormData;
    !(0 <= Vb(Bg, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = q(c);
    for (d = b.next(); !d.done; d = b.next())
      (c = q(d.value)), (d = c.next().value), (c = c.next().value), this.D.setRequestHeader(d, c);
    this.Ik && (this.D.responseType = this.Ik);
    "withCredentials" in this.D && this.D.withCredentials !== this.Fl && (this.D.withCredentials = this.Fl);
    if ("setTrustToken" in this.D && this.wl)
      try {
        this.D.setTrustToken(this.wl);
      } catch (h) {}
    try {
      this.im(),
        0 < this.dc &&
          ((this.El = Eg(this.D))
            ? ((this.D.timeout = this.dc), (this.D.ontimeout = db(this.Vf, this)))
            : (this.Ih = pg(this.Vf, this.dc, this))),
        (this.ah = !0),
        this.D.send(a),
        (this.ah = !1);
    } catch (h) {
      this.Dg(5, h);
    }
  };
  var Eg = function (a) {
    return gc && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  };
  g = zg.prototype;
  g.Nt = function () {
    return this.Rh ? this.Rh.Fm() : Rf.Fm();
  };
  g.Vf = function () {
    "undefined" != typeof Ua && this.D && (this.dispatchEvent("timeout"), this.abort(8));
  };
  g.Dg = function () {
    this.ec = !1;
    this.D && ((this.ed = !0), this.D.abort(), (this.ed = !1));
    this.Um();
    this.og();
  };
  g.Um = function () {
    this.aj || ((this.aj = !0), this.dispatchEvent("complete"), this.dispatchEvent("error"));
  };
  g.abort = function () {
    this.D &&
      this.ec &&
      ((this.ec = !1),
      (this.ed = !0),
      this.D.abort(),
      (this.ed = !1),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      this.og());
  };
  g.Pb = function () {
    this.D && (this.ec && ((this.ec = !1), (this.ed = !0), this.D.abort(), (this.ed = !1)), this.og(!0));
    zg.yd.Pb.call(this);
  };
  g.Dp = function () {
    this.Md || (this.Nj || this.ah || this.ed ? this.Cp() : this.by());
  };
  g.by = function () {
    this.Cp();
  };
  g.Cp = function () {
    if (this.ec && "undefined" != typeof Ua && (!this.Qh[1] || 4 != this.rf() || 2 != this.Bj()))
      if (this.ah && 4 == this.rf()) pg(this.Dp, 0, this);
      else if ((this.dispatchEvent("readystatechange"), this.Uo())) {
        this.ec = !1;
        try {
          this.fp() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : this.Um();
        } finally {
          this.og();
        }
      }
  };
  g.Bp = function (a, b) {
    this.dispatchEvent(Fg(a, "progress"));
    this.dispatchEvent(Fg(a, b ? "downloadprogress" : "uploadprogress"));
  };
  var Fg = function (a, b) {
    return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
  };
  g = zg.prototype;
  g.og = function (a) {
    if (this.D) {
      this.im();
      var b = this.D,
        c = this.Qh[0] ? function () {} : null;
      this.Qh = this.D = null;
      a || this.dispatchEvent("ready");
      try {
        b.onreadystatechange = c;
      } catch (d) {}
    }
  };
  g.im = function () {
    this.D && this.El && (this.D.ontimeout = null);
    this.Ih && (y.clearTimeout(this.Ih), (this.Ih = null));
  };
  g.isActive = function () {
    return !!this.D;
  };
  g.Uo = function () {
    return 4 == this.rf();
  };
  g.fp = function () {
    var a = this.Bj();
    a: switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var b = !0;
        break a;
      default:
        b = !1;
    }
    return b || (0 === a && !this.wx());
  };
  g.wx = function () {
    var a = String(this.Xj).match(qg)[1] || null;
    !a && y.self && y.self.location && (a = y.self.location.protocol.slice(0, -1));
    return Ag.test(a ? a.toLowerCase() : "");
  };
  g.rf = function () {
    return this.D ? this.D.readyState : 0;
  };
  g.Bj = function () {
    try {
      return 2 < this.rf() ? this.D.status : -1;
    } catch (a) {
      return -1;
    }
  };
  g.Gv = function () {
    try {
      return this.D ? this.D.responseText : "";
    } catch (a) {
      return "";
    }
  };
  g.getResponse = function () {
    try {
      if (!this.D) return null;
      if ("response" in this.D) return this.D.response;
      switch (this.Ik) {
        case "":
        case "text":
          return this.D.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.D) return this.D.mozResponseArrayBuffer;
      }
      return null;
    } catch (a) {
      return null;
    }
  };
  g.getResponseHeader = function (a) {
    if (this.D && this.Uo()) return (a = this.D.getResponseHeader(a)), null === a ? void 0 : a;
  };
  g.getAllResponseHeaders = function () {
    return this.D && 2 <= this.rf() ? this.D.getAllResponseHeaders() || "" : "";
  };
  var Gg = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Gg, yd);
  Gg.prototype.Ke = function (a) {
    return qd(this, 1, a, void 0);
  };
  Gg.prototype.Wq = function (a) {
    if (null != a) {
      if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Wa(a) + ": " + a);
      a = !!a;
    }
    return qd(this, 2, a, void 0);
  };
  Gg.prototype.Yk = function (a) {
    return qd(this, 3, null == a ? a : Uc(a), void 0);
  };
  var Hg = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Hg, yd);
  Hg.vd = [1];
  var Ig = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Ig, yd);
  g = Ig.prototype;
  g.qv = function () {
    return Xc(od(this, 5, void 0));
  };
  g.pA = function (a) {
    return qd(this, 5, Wc(a), void 0);
  };
  g.Ge = function (a) {
    return qd(this, 7, Wc(a), void 0);
  };
  g.Qu = function () {
    return ud(this, Hg, 9);
  };
  g.Iq = function (a) {
    return vd(this, Hg, 9, a);
  };
  g.hv = function () {
    return ud(this, Gg, 10);
  };
  g.Jg = function () {
    return sd(this, Gg, 10);
  };
  g.bA = function (a) {
    return vd(this, Gg, 10, a);
  };
  var Jg = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
  new Hg();
  var Kg = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Kg, yd);
  g = Kg.prototype;
  g.Su = function () {
    return od(this, 1, void 0);
  };
  g.Jq = function (a) {
    return qd(this, 1, a, void 0);
  };
  g.nv = function () {
    return ud(this, Ig, 11);
  };
  g.ae = function () {
    return sd(this, Ig, 11);
  };
  g.nA = function (a) {
    return vd(this, Ig, 11, a);
  };
  g.Hj = function () {
    return void 0 !== td(this, Ig, 11, !1);
  };
  var Lg = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Lg, yd);
  Lg.prototype.yA = function (a) {
    return vd(this, gf, 1, a);
  };
  var Mg = function (a) {
    this.G = cd(a, 34, void 0);
  };
  Ha(Mg, yd);
  g = Mg.prototype;
  g.cv = function () {
    return od(this, 1, void 0);
  };
  g.Xz = function (a) {
    return qd(this, 1, a, void 0);
  };
  g.EA = function (a) {
    return qd(this, 21, a, void 0);
  };
  g.yh = function (a) {
    return qd(this, 26, Wc(a), void 0);
  };
  g.FA = function (a) {
    return qd(this, 8, Wc(a), void 0);
  };
  g.HA = function (a) {
    return qd(this, 15, a, void 0);
  };
  g.Fw = function () {
    return null != od(this, 15, void 0);
  };
  g.Yz = function (a) {
    return vd(this, Ad, 16, a);
  };
  g.ni = function () {
    return qd(this, 16, void 0, !1);
  };
  g.nj = function () {
    return ud(this, Lg, 33);
  };
  g.Kq = function (a) {
    return vd(this, Lg, 33, a);
  };
  Mg.vd = [3, 20, 27];
  var Ng = function (a) {
    this.G = cd(a, 19, void 0);
  };
  Ha(Ng, yd);
  g = Ng.prototype;
  g.AA = function (a) {
    return qd(this, 4, a, void 0);
  };
  g.Ru = function () {
    return ud(this, Kg, 1);
  };
  g.pf = function () {
    return sd(this, Kg, 1);
  };
  g.Lf = function (a) {
    return vd(this, Kg, 1, a);
  };
  g.Tk = function (a) {
    return qd(this, 2, a, void 0);
  };
  g.sv = function () {
    var a = this.G,
      b = Gc(a),
      c = !!(b & 2);
    var d = c ? 1 : 2,
      e = !!(b & 2),
      f = rd(a, b, 3, 1, void 0);
    if (f !== Qc && Dc(f) & 4) {
      if (3 !== d)
        if (e) 2 === d && ((d = Dc(f)), (f = zc(f)), Ec(f, d), pd(a, b, 3, f, void 0));
        else if (((e = Object.isFrozen(f)), 1 === d)) e || Object.freeze(f);
        else {
          d = Dc(f);
          var h = d & -35;
          e && ((f = zc(f)), (d = 0), pd(a, b, 3, f, void 0));
          d !== h && Ec(f, h);
        }
      a = f;
    } else {
      var k = f;
      f = !!(b & 2);
      h = !!(Dc(k) & 2);
      e = k;
      !f && h && (k = zc(k));
      var l = b | (h ? 2 : 0);
      h = h || void 0;
      for (var m = 0, r = 0; m < k.length; m++) {
        var t = Zc(k[m], Mg, !1, l);
        void 0 !== t && ((h = h || Gc(t.G) & 2), (k[r++] = t));
      }
      r < m && (k.length = r);
      l = Dc(k);
      m = l | 5;
      h = h ? m & -9 : m | 8;
      l != h && (k = Hc(k, h));
      e !== k && pd(a, b, 3, k, void 0);
      ((f && 2 !== d) || 1 === d) && Object.freeze(k);
      a = k;
    }
    if (!(c || Dc(a) & 8)) {
      for (c = 0; c < a.length; c++) (b = a[c]), (d = md(b)), b !== d && (a[c] = d);
      Bc(a, 8);
    }
    return a;
  };
  g.rA = function (a) {
    var b = this.G,
      c = Gc(b);
    Sc(c);
    if (null != a) {
      for (var d = !!a.length, e = 0; e < a.length; e++) {
        var f = a[e];
        Yc(f, Mg);
        d = d && !(Dc(f.G) & 2);
      }
      e = Dc(a);
      f = e | 1;
      f = (d ? f | 8 : f & -9) | 4;
      f != e && (a = Hc(a, f));
    }
    null == a && (a = void 0);
    pd(b, c, 3, a, void 0);
    return this;
  };
  g.rv = function () {
    return od(this, 14, void 0);
  };
  g.qA = function (a) {
    return qd(this, 14, a, void 0);
  };
  g.nj = function () {
    return ud(this, Lg, 18);
  };
  g.Kq = function (a) {
    return vd(this, Lg, 18, a);
  };
  Ng.vd = [3, 5];
  var Og = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Og, yd);
  Og.prototype.ua = function (a) {
    var b = this.G,
      c = Gc(b),
      d = c & 2,
      e = rd(b, c, 1, 2, void 0),
      f = Dc(e);
    if (!(f & 4)) {
      Object.isFrozen(e) && ((f = 0), (e = zc(e)), pd(b, c, 1, e, void 0));
      for (c = b = 0; b < e.length; b++) {
        var h = Xc(e[b]);
        null != h && (e[c++] = h);
      }
      c < b && (e.length = c);
      f |= 5;
      d && (f |= 34);
      Ec(e, f);
      f & 2 && Object.freeze(e);
    }
    d = e;
    if ("number" !== typeof a || 0 > a || a >= d.length) throw Error();
    return d[a];
  };
  Og.vd = [1];
  var Pg = function (a) {
    this.G = cd(a, 6, void 0);
  };
  Ha(Pg, yd);
  Pg.prototype.zv = function () {
    return wd(od(this, 1, void 0), "-1");
  };
  Pg.prototype.Ie = function (a) {
    return vd(this, Og, 2, a);
  };
  var Qg = (function (a) {
    return function (b) {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        Bc(b, 32);
        b = bd(a, b);
      }
      return b;
    };
  })(Pg);
  Pg.vd = [5];
  var Rg = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(Rg, yd);
  Rg.prototype.Qv = function () {
    return xd(this, 1, -1);
  };
  var Sg;
  Sg = new (function (a, b, c, d, e, f, h, k, l, m, r, t, v, x) {
    this.Rd = a;
    this.Id = d;
    this.xx = f;
    this.mf = h;
    this.defaultValue = v;
    this.ix = void 0 === x ? !1 : x;
  })(
    175237375,
    { jF: 0 },
    Pg,
    Rg,
    function (a) {
      if (null != a) {
        if (Dc(a.G) & 2) throw Error("message must be mutable");
        return { jG: xd(a, 1, -1) };
      }
    },
    0,
    ud,
    void 0,
    void 0,
    vd,
    void 0,
    void 0,
    void 0
  );
  var Ug = function (a) {
    ef.call(this);
    var b = this;
    this.Rc = "";
    this.Va = [];
    this.jp = "";
    this.Al = this.Dl = this.pi = !1;
    this.zp = this.ml = -1;
    this.ag = this.pm = !1;
    this.bd = this.zb = null;
    this.ne = this.yc = 0;
    this.Gz = 1;
    this.ql = 0;
    this.Ee = !1;
    this.xf = a.xf;
    this.Wd = a.Wd || function () {};
    this.eb = new Tg(a.xf, a.gd);
    this.md = a.md;
    this.rd = a.rd || null;
    this.bufferSize = 1e3;
    this.wB = eb(hf, 0, 1);
    this.oi = a.DB || null;
    this.Fc = a.Fc || null;
    this.vg = a.vg || !1;
    this.Bf = a.Bf || null;
    this.withCredentials = !a.Tm;
    this.gd = a.gd || !1;
    this.cp = !this.gd && !!window && !!window.navigator && void 0 !== window.navigator.sendBeacon;
    var c = new Kg().Jq(1);
    this.eb.Lf(c);
    this.Uc = new Of(1e4, 3e5, 0.1);
    this.Tb = new og(this.Uc.Sc);
    this.xk(this.Tb);
    a = this.gv(a.Qs);
    Ef(this.Tb, "tick", a, !1, this);
    this.ei = new og(6e5);
    this.xk(this.ei);
    Ef(this.ei, "tick", a, !1, this);
    this.vg || this.ei.start();
    this.gd ||
      (Ef(document, "visibilitychange", function () {
        "hidden" === document.visibilityState && b.ij();
      }),
      Ef(document, "pagehide", this.ij, !1, this));
  };
  Ha(Ug, ef);
  g = Ug.prototype;
  g.gv = function (a) {
    var b = this;
    return a
      ? function () {
          a().then(function () {
            b.flush();
          });
        }
      : function () {
          b.flush();
        };
  };
  g.Pb = function () {
    this.ij();
    ef.prototype.Pb.call(this);
  };
  g.pr = function (a) {
    this.ag = a;
  };
  g.Nn = function () {
    this.oi || (this.oi = this.St());
    return this.oi;
  };
  g.Xt = function (a) {
    a instanceof Mg ? this.log(a) : ((a = new Mg().FA(a.Fe())), this.log(a));
  };
  g.Hq = function (a) {
    this.eb.Lf(a);
  };
  g.yh = function (a) {
    this.Rc = a;
  };
  g.ar = function (a) {
    this.rd = a;
  };
  g.Yq = function (a) {
    this.zb || (this.zb = new Ad());
    this.zb.Wz(a);
  };
  g.Gq = function (a) {
    a ? (this.zb || (this.zb = new Ad()), this.zb.Oz(a.Fe())) : this.zb && this.zb.ht();
  };
  g.Pz = function (a) {
    this.pi = a;
  };
  g.Tq = function (a) {
    this.bd = a;
  };
  g.LA = function (a) {
    this.Dl = a && this.cp;
  };
  g.EB = function (a) {
    this.Ee = a && this.cp;
  };
  g.Ge = function (a) {
    this.eb.Ge(a);
  };
  g.KA = function (a) {
    this.Al = a;
  };
  g.Sq = function (a) {
    this.pm = !0;
    this.Xm(a);
  };
  g.cA = function (a) {
    this.pm || this.Xm(a);
  };
  g.Xm = function (a) {
    this.Uc = new Of(1 > a ? 1 : a, 3e5, 0.1);
    this.Tb.setInterval(this.Uc.Sc);
  };
  g.Ts = function () {
    this.Uc.Rs();
    this.Tb.setInterval(this.Uc.Sc);
  };
  g.bz = function () {
    this.Uc.reset();
    this.Tb.setInterval(this.Uc.Sc);
  };
  g.log = function (a) {
    a = a.clone().EA(this.Gz++);
    this.Rc && a.yh(this.Rc);
    a.cv() || a.Xz(Date.now().toString());
    a.Fw() || a.HA(new Date().getTimezoneOffset() * (this.ag ? -60 : 60));
    this.zb && a.Yz(this.zb.clone());
    this.rs(a);
  };
  g.rs = function (a) {
    var b = this.Va.length - this.bufferSize + 1;
    0 < b && (this.Va.splice(0, b), (this.yc += b));
    this.Va.push(a);
    this.wp();
  };
  g.wp = function () {
    this.vg || this.Tb.enabled || this.Tb.start();
  };
  g.lm = function () {
    this.Tb.enabled && this.Tb.stop();
  };
  g.flush = function (a, b) {
    var c = this;
    if (0 === this.Va.length) a && a();
    else if (this.Ee) this.eb.Ke(3), this.Bn();
    else {
      var d = Date.now();
      if (this.zp > d && this.ml < d) b && b("throttled");
      else {
        this.eb.Ke(1);
        var e = this.eb.Oc(this.Va, this.yc, this.ne, this.rd);
        d = {};
        var f = this.Wd();
        f && (d.Authorization = f);
        var h = this.Nn();
        this.Fc && ((d["X-Goog-AuthUser"] = this.Fc), (h = vg(h, "authuser", this.Fc)));
        this.Bf && ((d["X-Goog-PageId"] = this.Bf), (h = vg(h, "pageId", this.Bf)));
        if (f && this.jp === f) b && b("stale-auth-token");
        else if ((this.kt(), this.pi)) e.Fe(), d && JSON.stringify(d), a && a();
        else {
          var k = e.Fe(),
            l;
          this.bd && this.bd.fF(k.length) && (l = this.bd.eE(k));
          var m = { url: h, body: k, Ws: 1, Fk: d, az: "POST", withCredentials: this.withCredentials, ql: this.ql },
            r = function (x) {
              c.mw(x);
              a && a();
              c.ne = 0;
            },
            t = function (x, Q) {
              c.gw(e.sv(), x, f, e.rv(), Q);
              b && b("net-send-failed", x);
              ++c.ne;
            },
            v = function () {
              c.md && c.md.send(m, r, t);
            };
          l
            ? l.then(
                function (x) {
                  m.Fk["Content-Encoding"] = "gzip";
                  m.Fk["Content-Type"] = "application/binary";
                  m.body = x;
                  m.Ws = 2;
                  v();
                },
                function () {
                  v();
                }
              )
            : v();
        }
      }
    }
  };
  g.kt = function () {
    this.Va = [];
    this.lm();
    this.yc = 0;
  };
  g.ij = function () {
    this.pi ||
      (this.eb.Rq(!0),
      this.Dl && (this.eb.Ke(3), this.Bn()),
      this.Al && (this.eb.Ke(2), this.yu()),
      this.flush(),
      this.eb.Rq(!1));
  };
  g.Bn = function () {
    var a = this;
    this.Cq(32, 10, function (b, c) {
      b = vg(b, "format", "json");
      var d = !1;
      try {
        d = window.navigator.sendBeacon(b, c.Fe());
      } catch (e) {}
      a.Ee && !d && (a.Ee = !1);
      return d;
    });
  };
  g.Ez = function (a) {
    new Image().src = a;
  };
  g.yu = function () {
    var a = this;
    this.Cq(6, 5, function (b, c) {
      c = c.Fe();
      for (var d = [], e = 0, f = 0; f < c.length; f++) {
        var h = c.charCodeAt(f);
        255 < h && ((d[e++] = h & 255), (h >>= 8));
        d[e++] = h;
      }
      c = wc(d, 3);
      b = ug(b, "format", "base64json", "p", c);
      if (15360 < b.length) return !1;
      a.Ez(b);
      return !0;
    });
  };
  g.Cq = function (a, b, c) {
    if (0 !== this.Va.length) {
      var d = this.Nn();
      for (var e = d.search(xg), f = 0, h, k = []; 0 <= (h = wg(d, f, "format", e)); )
        k.push(d.substring(f, h)), (f = Math.min(d.indexOf("&", h) + 1 || e, e));
      k.push(d.slice(f));
      d = k.join("").replace(yg, "$1");
      d = ug(d, "auth", this.Wd(), "authuser", this.Fc || "0");
      for (e = 0; e < b && this.Va.length; ++e) {
        f = this.Va.slice(0, a);
        h = this.eb.Oc(f, this.yc, this.ne, this.rd);
        if (!c(d, h)) {
          ++this.ne;
          break;
        }
        this.ne = this.yc = 0;
        this.Va = this.Va.slice(f.length);
      }
      this.lm();
    }
  };
  g.zx = function (a) {
    return (500 <= a && 600 > a) || 401 === a || 0 === a;
  };
  g.sy = function (a) {
    this.Va = a.concat(this.Va);
    this.wp();
  };
  g.gw = function (a, b, c, d, e) {
    this.Ts();
    401 === b && c && (this.jp = c);
    d && (this.yc += d);
    void 0 === e && (e = this.zx(b));
    e && this.sy(a);
  };
  g.mw = function (a) {
    this.bz();
    if (a) {
      var b = null;
      try {
        var c = JSON.stringify(JSON.parse(a.replace(")]}'\n", "")));
        b = Qg(c);
      } catch (d) {}
      b &&
        ((a = Number(b.zv())), 0 < a && ((this.ml = Date.now()), (this.zp = this.ml + a)), (b = b.Rn(Sg))) &&
        ((b = b.Qv()), -1 !== b && this.cA(b));
    }
  };
  g.St = function () {
    return 0.01 > this.wB()
      ? "https://www.google.com/log?format=json&hasfast=true"
      : "https://play.google.com/log?format=json&hasfast=true";
  };
  var Tg = function (a, b) {
    this.gd = b = void 0 === b ? !1 : b;
    this.Kh = this.locale = null;
    this.wf = new Ng();
    Number.isInteger(a) && this.wf.Tk(a);
    b || (this.locale = document.documentElement.getAttribute("lang"));
    this.Lf(new Kg());
  };
  g = Tg.prototype;
  g.Tk = function (a) {
    this.wf.Tk(a);
    return this;
  };
  g.Lf = function (a) {
    this.wf.Lf(a);
    a.Su() || a.Jq(1);
    this.gd || ((a = this.ae()), a.qv() || a.pA(this.locale));
    this.Kh && ((a = this.ae()), a.Qu() || a.Iq(this.Kh));
    return this;
  };
  g.Ge = function (a) {
    this.ae().Ge(a);
    return this;
  };
  g.Ke = function (a) {
    this.pf().Hj() && this.Jg().Ke(a);
    return this;
  };
  g.Rq = function (a) {
    this.pf().Hj() && this.Jg().Wq(a);
    return this;
  };
  g.Yk = function (a) {
    this.pf().Hj() && this.Jg().Yk(a);
    return this;
  };
  g.pf = function () {
    return this.wf.Ru();
  };
  g.JA = function (a, b) {
    var c = this;
    b = void 0 === b ? Jg : b;
    return a(window, b)
      .then(function (d) {
        c.Kh = d;
        c.ae().Iq(c.Kh);
        return !0;
      })
      .catch(function () {
        return !1;
      });
  };
  g.ae = function () {
    var a = this.pf(),
      b = a.nv();
    b || ((b = new Ig()), a.nA(b));
    return b;
  };
  g.Jg = function () {
    var a = this.ae(),
      b = a.hv();
    b || ((b = new Gg()), b.Wq(!1), a.bA(b));
    return b;
  };
  g.nj = function (a) {
    a = new ff().vA(a);
    a = new gf().xA(a);
    return new Lg().yA(a);
  };
  g.Oc = function (a, b, c, d) {
    b = void 0 === b ? 0 : b;
    this.Yk(void 0 === c ? 0 : c);
    a = this.wf.clone().AA(Date.now().toString()).rA(a);
    d && a.Kq(this.nj(d));
    b && a.qA(b);
    return a;
  };
  var Vg = function () {};
  Vg.prototype.send = function (a, b, c) {
    b = void 0 === b ? function () {} : b;
    c = void 0 === c ? function () {} : c;
    Dg(
      a.url,
      function (d) {
        d = d.target;
        d.fp() ? b(d.Gv()) : c(d.Bj());
      },
      a.az,
      a.body,
      a.Fk,
      a.ql,
      a.withCredentials
    );
  };
  var Wg = function (a, b) {
    ef.call(this);
    this.xf = a;
    this.Fc = b;
    this.Tt = "https://play.google.com/log?format=json&hasfast=true";
    this.Os = !1;
    this.OB = !0;
    this.Iz = !1;
    this.Rc = "";
    this.Ee = this.Aj = this.Ok = !1;
    this.ag = void 0;
    this.md = new Vg();
  };
  Ha(Wg, ef);
  g = Wg.prototype;
  g.Ge = function (a) {
    this.bm = a;
    return this;
  };
  g.Tq = function (a) {
    this.bd = a;
    return this;
  };
  g.yh = function (a) {
    this.Rc = a;
    return this;
  };
  g.ar = function (a) {
    this.rd = a;
    return this;
  };
  g.Gq = function (a) {
    this.ni = a;
    return this;
  };
  g.Yq = function (a) {
    this.Gp = a;
    return this;
  };
  g.Hq = function (a) {
    this.om = a;
    return this;
  };
  g.Dl = function () {
    this.Ok = !0;
    return this;
  };
  g.Al = function () {
    this.Aj = !0;
    return this;
  };
  g.Sq = function (a) {
    this.zn = Math.max(a, 1e3);
    return this;
  };
  g.Tm = function () {
    this.IB = !0;
    return this;
  };
  g.pr = function (a) {
    this.ag = a;
    return this;
  };
  g.Oc = function () {
    var a = new Ug({
      xf: this.xf,
      Wd: this.Wd ? this.Wd : cf,
      Fc: this.Fc,
      DB: this.Tt,
      gd: this.Iz,
      vg: this.Os,
      Tm: this.IB,
      Bf: void 0,
      Qs: void 0,
      md: this.md ? this.md : void 0,
    });
    this.xk(a);
    this.OB || a.Pz(!0);
    this.om && a.Hq(this.om);
    this.bm && a.Ge(this.bm);
    this.bd && a.Tq(this.bd);
    this.Rc && a.yh(this.Rc);
    this.rd && a.ar(this.rd);
    this.ni && a.Gq(this.ni);
    this.Gp && a.Yq(this.Gp);
    this.Ok && a.LA(this.Ok);
    this.Aj && a.KA(this.Aj);
    this.zn && a.Sq(this.zn);
    this.Ee && a.EB(!0);
    this.GB && a.eb.JA(this.GB);
    this.ag && a.pr(!0);
    return a;
  };
  var Xg = function (a) {
      return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    Yg = function (a, b) {
      "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    Zg = function (a, b) {
      a.classList
        ? (b = a.classList.contains(b))
        : ((a = a.classList ? a.classList : Xg(a).match(/\S+/g) || []), (b = 0 <= Vb(a, b)));
      return b;
    },
    B = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!Zg(a, b)) {
        var c = Xg(a);
        Yg(a, c + (0 < c.length ? " " + b : b));
      }
    },
    $g = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : Zg(a, b) &&
          Yg(
            a,
            Array.prototype.filter
              .call(a.classList ? a.classList : Xg(a).match(/\S+/g) || [], function (c) {
                return c != b;
              })
              .join(" ")
          );
    };
  var ah = {};
  function bh(a) {
    var b = ah.hasOwnProperty(a) ? ah[a] : null;
    if (b) return b;
    65536 < Object.keys(ah).length && (ah = {});
    var c = [0, 0, 0, 0],
      d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    b = ch(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
    b = ch(b, d);
    b = ch(b, /\\./g);
    b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
    b = b.replace(RegExp("{[^]*", "gm"), "");
    b = dh(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
    b = dh(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
    b = dh(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
    b = dh(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = dh(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = dh(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    dh(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return (ah[a] = b);
  }
  function dh(a, b, c, d) {
    return a.replace(c, function (e) {
      b[d] += 1;
      return Array(e.length + 1).join(" ");
    });
  }
  function ch(a, b) {
    return a.replace(b, function (c) {
      return Array(c.length + 1).join("A");
    });
  }
  var eh = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    fh = /[\n\f\r"'()*<>]/g,
    gh = {
      "\n": "%0a",
      "\f": "%0c",
      "\r": "%0d",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "*": "%2a",
      "<": "%3c",
      ">": "%3e",
    };
  function hh(a) {
    return gh[a];
  }
  var ih = function (a, b, c) {
    b = ob(b);
    if ("" == b) return null;
    var d = String(b.slice(0, 4)).toLowerCase();
    if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
      if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c)
        a = null;
      else {
        a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
          var e = "\"'".charAt(d);
          if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
            b = b.substring(1, b.length - 1);
            break a;
          }
        }
        a = c
          ? (a = c(b, a)) && "about:invalid#zClosurez" != ie(a)
            ? 'url("' + ie(a).replace(fh, hh) + '")'
            : null
          : null;
      }
      return a;
    }
    if (0 < b.indexOf("(")) {
      if (/"|'/.test(b)) return null;
      for (a = /([\-\w]+)\(/g; (c = a.exec(b)); ) if (!(c[1].toLowerCase() in eh)) return null;
    }
    return b;
  };
  function jh(a, b) {
    a = y[a];
    return a && a.prototype ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null : null;
  }
  function kh(a, b) {
    return ((a = y[a]) && a.prototype && a.prototype[b]) || null;
  }
  var lh = jh("Element", "attributes") || jh("Node", "attributes"),
    mh = kh("Element", "hasAttribute"),
    nh = kh("Element", "getAttribute"),
    oh = kh("Element", "setAttribute"),
    ph = kh("Element", "removeAttribute");
  jh("Element", "innerHTML") || jh("HTMLElement", "innerHTML");
  var qh = kh("Element", "getElementsByTagName"),
    rh = kh("Element", "matches") || kh("Element", "msMatchesSelector"),
    sh = jh("Node", "nodeName"),
    uh = jh("Node", "nodeType"),
    vh = jh("Node", "parentNode");
  jh("Node", "childNodes");
  var wh = jh("HTMLElement", "style") || jh("Element", "style"),
    xh = jh("HTMLStyleElement", "sheet"),
    yh = kh("CSSStyleDeclaration", "getPropertyValue"),
    zh = kh("CSSStyleDeclaration", "setProperty"),
    Ah = jh("Element", "namespaceURI") || jh("Node", "namespaceURI");
  function Bh(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a;
  }
  function Ch(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (gc && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  function Dh(a) {
    return Bh(lh, a, "attributes", function (b) {
      return b instanceof NamedNodeMap;
    });
  }
  function Eh(a, b, c) {
    try {
      Ch(oh, a, "setAttribute", [b, c]);
    } catch (d) {
      if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
  }
  function Fh(a) {
    return Bh(wh, a, "style", function (b) {
      return b instanceof CSSStyleDeclaration;
    });
  }
  function Gh(a) {
    return Bh(xh, a, "sheet", function (b) {
      return b instanceof CSSStyleSheet;
    });
  }
  function Hh(a) {
    return Bh(sh, a, "nodeName", function (b) {
      return "string" == typeof b;
    });
  }
  function Ih(a) {
    return Bh(uh, a, "nodeType", function (b) {
      return "number" == typeof b;
    });
  }
  function Jh(a) {
    return Bh(vh, a, "parentNode", function (b) {
      return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase());
    });
  }
  function Kh(a, b) {
    return Ch(yh, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || "";
  }
  function Lh(a, b, c) {
    Ch(zh, a, a.setProperty ? "setProperty" : "setAttribute", [b, c]);
  }
  function Mh(a) {
    return Bh(Ah, a, "namespaceURI", function (b) {
      return "string" == typeof b;
    });
  }
  var Nh =
      gc && 10 > document.documentMode
        ? null
        : RegExp(
            "\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)",
            "g"
          ),
    Oh = { "-webkit-border-horizontal-spacing": !0, "-webkit-border-vertical-spacing": !0 },
    Rh = function (a, b, c) {
      var d = [];
      Ph(ac(a.cssRules)).forEach(function (e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
        if (!(b && gc && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
          var f = b ? e.selectorText.replace(Nh, "#" + b + " $1") : e.selectorText,
            h = d.push;
          e = Qh(e.style, c);
          if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
          var k = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
          if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(k))
            throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + f);
          a: {
            for (var l = { "(": ")", "[": "]" }, m = [], r = 0; r < k.length; r++) {
              var t = k[r];
              if (l[t]) m.push(l[t]);
              else {
                b: {
                  var v = void 0;
                  for (v in l)
                    if (l[v] == t) {
                      v = !0;
                      break b;
                    }
                  v = !1;
                }
                if (v && m.pop() != t) {
                  k = !1;
                  break a;
                }
              }
            }
            k = 0 == m.length;
          }
          if (!k) throw Error("() and [] in selector must be balanced, got: " + f);
          e instanceof se || (e = we(e));
          f = f + "{" + te(e).replace(/</g, "\\3C ") + "}";
          h.call(d, new Ee(f, De));
        }
      });
      return Ge(d);
    },
    Ph = function (a) {
      return a.filter(function (b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE;
      });
    },
    Th = function (a, b, c) {
      a = Sh("<style>" + a + "</style>");
      return null == a || null == a.sheet ? He : Rh(a.sheet, void 0 != b ? b : null, c);
    },
    Sh = function (a) {
      a = Le("<html><head></head><body>" + a + "</body></html>");
      return new DOMParser().parseFromString(Ke(a), "text/html").body.children[0];
    },
    Qh = function (a, b) {
      if (!a) return ve;
      var c = document.createElement("div").style;
      Uh(a).forEach(function (d) {
        var e = jc && d in Oh ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        0 != e.lastIndexOf("--", 0) &&
          0 != e.lastIndexOf("var", 0) &&
          ((d = Kh(a, d)), (d = ih(e, d, b)), null != d && Lh(c, e, d));
      });
      return new se(c.cssText || "", re);
    },
    Wh = function (a) {
      var b = Array.from(Ch(qh, a, "getElementsByTagName", ["STYLE"])),
        c = bc(b, function (h) {
          return ac(Gh(h).cssRules);
        });
      c = Ph(c);
      for (var d = [], e = 0; e < c.length; e++) d[e] = { index: e, Nk: c[e] };
      d.sort(function (h, k) {
        var l = bh(h.Nk.selectorText),
          m = bh(k.Nk.selectorText);
        a: {
          for (var r = Math.min(l.length, m.length), t = 0; t < r; t++) {
            var v = l[t],
              x = m[t];
            v = v > x ? 1 : v < x ? -1 : 0;
            if (0 != v) {
              m = v;
              break a;
            }
          }
          l = l.length;
          m = m.length;
          m = l > m ? 1 : l < m ? -1 : 0;
        }
        return m || h.index - k.index;
      });
      for (e = 0; e < d.length; e++) c[e] = d[e].Nk;
      c.reverse();
      a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
      for (var f; (f = a.nextNode()); )
        c.forEach(function (h) {
          Ch(rh, f, f.matches ? "matches" : "msMatchesSelector", [h.selectorText]) && h.style && Vh(f, h.style);
        });
      b.forEach(of);
    },
    Vh = function (a, b) {
      var c = Uh(a.style);
      Uh(b).forEach(function (d) {
        if (!(0 <= c.indexOf(d))) {
          var e = Kh(b, d);
          Lh(a.style, d, e);
        }
      });
    },
    Uh = function (a) {
      Ya(a) ? (a = ac(a)) : ((a = Nd(a)), Zb(a, "cssText"));
      return a;
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Xh(a) {
    return { valueOf: a }.valueOf();
  }
  var Yh = Xh(function () {
    try {
      return new URL("s://g"), !0;
    } catch (a) {
      return !1;
    }
  });
  function Zh(a) {
    if (!Yh) {
      a: {
        var b = document.createElement("a");
        try {
          b.href = a;
        } catch (c) {
          a = void 0;
          break a;
        }
        a = b.protocol;
        a = ":" === a || "" === a ? "https:" : a;
      }
      return a;
    }
    try {
      b = new URL(a);
    } catch (c) {
      return "https:";
    }
    return b.protocol;
  }
  var $h = ["data:", "http:", "https:", "mailto:", "ftp:"];
  function ai(a) {
    a = a instanceof he ? ie(a) : "javascript:" !== Zh(a) ? a : void 0;
    return a;
  }
  var bi = {};
  function ci(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = Ke(b);
  }
  function di(a, b, c) {
    a.src = be(b);
    if (null == c || !c.yF) {
      var d, e;
      (d = (b =
        null == (e = (d = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
          ? void 0
          : e.call(d, "script[nonce]"))
        ? b.nonce || b.getAttribute("nonce") || ""
        : "") && a.setAttribute("nonce", d);
    }
  }
  function ei(a, b) {
    b = ai(b);
    void 0 !== b && (a.href = b);
  }
  var fi = function (a) {
    this.Bx = a;
  };
  function gi(a) {
    return new fi(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var hi = [
    gi("data"),
    gi("http"),
    gi("https"),
    gi("mailto"),
    gi("ftp"),
    new fi(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function ii(a, b) {
    b = void 0 === b ? hi : b;
    a: {
      b = void 0 === b ? hi : b;
      for (var c = 0; c < b.length; ++c) {
        var d = b[c];
        if (d instanceof fi && d.Bx(a)) {
          a = le(a);
          break a;
        }
      }
      a = void 0;
    }
    return a || me;
  }
  var ji = {
      "* ARIA-CHECKED": !0,
      "* ARIA-COLCOUNT": !0,
      "* ARIA-COLINDEX": !0,
      "* ARIA-CONTROLS": !0,
      "* ARIA-DESCRIBEDBY": !0,
      "* ARIA-DISABLED": !0,
      "* ARIA-EXPANDED": !0,
      "* ARIA-GOOG-EDITABLE": !0,
      "* ARIA-HASPOPUP": !0,
      "* ARIA-HIDDEN": !0,
      "* ARIA-LABEL": !0,
      "* ARIA-LABELLEDBY": !0,
      "* ARIA-MULTILINE": !0,
      "* ARIA-MULTISELECTABLE": !0,
      "* ARIA-ORIENTATION": !0,
      "* ARIA-PLACEHOLDER": !0,
      "* ARIA-READONLY": !0,
      "* ARIA-REQUIRED": !0,
      "* ARIA-ROLEDESCRIPTION": !0,
      "* ARIA-ROWCOUNT": !0,
      "* ARIA-ROWINDEX": !0,
      "* ARIA-SELECTED": !0,
      "* ABBR": !0,
      "* ACCEPT": !0,
      "* ACCESSKEY": !0,
      "* ALIGN": !0,
      "* ALT": !0,
      "* AUTOCOMPLETE": !0,
      "* AXIS": !0,
      "* BGCOLOR": !0,
      "* BORDER": !0,
      "* CELLPADDING": !0,
      "* CELLSPACING": !0,
      "* CHAROFF": !0,
      "* CHAR": !0,
      "* CHECKED": !0,
      "* CLEAR": !0,
      "* COLOR": !0,
      "* COLSPAN": !0,
      "* COLS": !0,
      "* COMPACT": !0,
      "* COORDS": !0,
      "* DATETIME": !0,
      "* DIR": !0,
      "* DISABLED": !0,
      "* ENCTYPE": !0,
      "* FACE": !0,
      "* FRAME": !0,
      "* HEIGHT": !0,
      "* HREFLANG": !0,
      "* HSPACE": !0,
      "* ISMAP": !0,
      "* LABEL": !0,
      "* LANG": !0,
      "* MAX": !0,
      "* MAXLENGTH": !0,
      "* METHOD": !0,
      "* MULTIPLE": !0,
      "* NOHREF": !0,
      "* NOSHADE": !0,
      "* NOWRAP": !0,
      "* OPEN": !0,
      "* READONLY": !0,
      "* REQUIRED": !0,
      "* REL": !0,
      "* REV": !0,
      "* ROLE": !0,
      "* ROWSPAN": !0,
      "* ROWS": !0,
      "* RULES": !0,
      "* SCOPE": !0,
      "* SELECTED": !0,
      "* SHAPE": !0,
      "* SIZE": !0,
      "* SPAN": !0,
      "* START": !0,
      "* SUMMARY": !0,
      "* TABINDEX": !0,
      "* TITLE": !0,
      "* TYPE": !0,
      "* VALIGN": !0,
      "* VALUE": !0,
      "* VSPACE": !0,
      "* WIDTH": !0,
    },
    ki = {
      "* USEMAP": !0,
      "* ACTION": !0,
      "* CITE": !0,
      "* HREF": !0,
      "* LONGDESC": !0,
      "* SRC": !0,
      "LINK HREF": !0,
      "* FOR": !0,
      "* HEADERS": !0,
      "* NAME": !0,
      "A TARGET": !0,
      "* CLASS": !0,
      "* ID": !0,
      "* STYLE": !0,
    };
  var li = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
    mi = 0,
    ni = function () {
      this.Wj = [];
      this.Oh = [];
      this.Jd = "data-elementweakmap-index-" + mi++;
    };
  ni.prototype.set = function (a, b) {
    if (Ch(mh, a, "hasAttribute", [this.Jd])) {
      var c = parseInt(Ch(nh, a, "getAttribute", [this.Jd]) || null, 10);
      this.Oh[c] = b;
    } else (c = this.Oh.push(b) - 1), Eh(a, this.Jd, c.toString()), this.Wj.push(a);
    return this;
  };
  ni.prototype.get = function (a) {
    if (Ch(mh, a, "hasAttribute", [this.Jd]))
      return (a = parseInt(Ch(nh, a, "getAttribute", [this.Jd]) || null, 10)), this.Oh[a];
  };
  ni.prototype.clear = function () {
    this.Wj.forEach(function (a) {
      Ch(ph, a, "removeAttribute", [this.Jd]);
    }, this);
    this.Wj = [];
    this.Oh = [];
  };
  var oi = !gc || 10 <= Number(sc),
    pi = !gc || null == document.documentMode,
    qi = function () {};
  g = qi.prototype;
  g.By = function (a) {
    if (!oi) return "";
    a = this.Cy(a);
    if (0 < Dh(a).length) {
      var b = mf(document, "SPAN");
      b.appendChild(a);
      a = b;
    }
    a = new XMLSerializer().serializeToString(a);
    return a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
  };
  g.Cy = function (a) {
    if (!oi) return mf(document, "SPAN");
    var b = mf(document, "SPAN");
    this.zy(b);
    a = this.qy(a);
    a = Le(a);
    var c = document.createElement("template");
    if (pi && "content" in c) Ue(c, a), (c = c.content);
    else {
      var d = document.implementation.createHTMLDocument("x");
      c = d.body;
      Ue(d.body, a);
    }
    a = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
    c = li ? new WeakMap() : new ni();
    for (var e; (e = a.nextNode()); )
      if ((d = this.It(e))) {
        1 == Ih(d) && c.set(e, d);
        e = Jh(e);
        var f = !1;
        if (e) {
          var h = Ih(e),
            k = Hh(e).toLowerCase(),
            l = Jh(e);
          11 != h || l ? "body" == k && l && (h = Jh(l)) && !Jh(h) && (f = !0) : (f = !0);
          h = null;
          f || !e ? (h = b) : 1 == Ih(e) && (h = c.get(e));
          h.content && (h = h.content);
          h.appendChild(d);
        }
      } else nf(e);
    c.clear && c.clear();
    return b;
  };
  g.It = function (a) {
    switch (Ih(a)) {
      case 3:
        return this.createTextNode(a);
      case 1:
        return this.Gt(a);
      default:
        return null;
    }
  };
  g.Gt = function (a) {
    if ("TEMPLATE" == Hh(a).toUpperCase()) return null;
    var b = this.Ft(a);
    if (!b) return null;
    this.vy(a, b);
    return b;
  };
  g.vy = function (a, b) {
    var c = Dh(a);
    if (null != c)
      for (var d = 0, e; (e = c[d]); d++)
        if (e.specified) {
          var f = this.uy(a, e);
          null !== f && Eh(b, e.name, f);
        }
  };
  var ri = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0,
  };
  var si = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0,
  };
  var ti = {
      "ANNOTATION-XML": !0,
      "COLOR-PROFILE": !0,
      "FONT-FACE": !0,
      "FONT-FACE-SRC": !0,
      "FONT-FACE-URI": !0,
      "FONT-FACE-FORMAT": !0,
      "FONT-FACE-NAME": !0,
      "MISSING-GLYPH": !0,
    },
    wi = function (a) {
      a = a || new ui();
      a.Xw();
      this.Xe = Pd(a.vb);
      this.Tf = Pd(a.Tf);
      this.Me = Pd(a.Me);
      this.il = a.il;
      a.Rt.forEach(function (b) {
        if (0 != b.lastIndexOf("data-", 0)) throw new ib('Only "data-" attributes allowed, got: %s.', [b]);
        if (0 == b.lastIndexOf("data-sanitizer-", 0))
          throw new ib('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
        this.Xe["* " + b.toUpperCase()] = vi;
      }, this);
      a.Qt.forEach(function (b) {
        b = b.toUpperCase();
        if (-1 == b.indexOf("-") || ti[b]) throw new ib("Only valid custom element tag names allowed, got: %s.", [b]);
        this.Me[b] = !0;
      }, this);
      this.yf = a.yf;
      this.Rf = a.Rf;
      this.tg = null;
      this.Pj = a.Pj;
    };
  fb(wi, qi);
  var xi = function (a) {
      return function (b, c) {
        return (b = a(ob(b), c)) && "about:invalid#zClosurez" != ie(b) ? ie(b) : null;
      };
    },
    ui = function () {
      this.vb = {};
      Wb(
        [ji, ki],
        function (a) {
          Nd(a).forEach(function (b) {
            this.vb[b] = vi;
          }, this);
        },
        this
      );
      this.jc = {};
      this.Rt = [];
      this.Qt = [];
      this.Tf = Pd(ri);
      this.Me = Pd(si);
      this.il = !1;
      this.Or = ne;
      this.vq = this.rl = this.yp = this.yf = Id;
      this.Rf = null;
      this.Pp = this.Pj = !1;
    };
  g = ui.prototype;
  g.Hs = function () {
    this.vq = yi;
    return this;
  };
  g.KB = function (a) {
    this.yf = a;
    return this;
  };
  g.MB = function (a) {
    this.Or = a;
    return this;
  };
  g.JB = function (a) {
    this.yp = a;
    return this;
  };
  g.LB = function (a) {
    this.rl = a;
    return this;
  };
  var zi = function (a, b) {
      return function (c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f);
      };
    },
    Ai = function (a, b, c, d) {
      a[c] && !b[c] && (a[c] = zi(a[c], d));
    };
  ui.prototype.Oc = function () {
    return new wi(this);
  };
  ui.prototype.Xw = function () {
    if (this.Pp) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    Ai(this.vb, this.jc, "* USEMAP", Bi);
    var a = xi(this.Or);
    ["* ACTION", "* CITE", "* HREF"].forEach(function (c) {
      Ai(this.vb, this.jc, c, a);
    }, this);
    var b = xi(this.yf);
    ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function (c) {
      Ai(this.vb, this.jc, c, b);
    }, this);
    ["* FOR", "* HEADERS", "* NAME"].forEach(function (c) {
      Ai(this.vb, this.jc, c, eb(Ci, this.yp));
    }, this);
    Ai(this.vb, this.jc, "A TARGET", eb(Di, ["_blank", "_self"]));
    Ai(this.vb, this.jc, "* CLASS", eb(Ei, this.rl));
    Ai(this.vb, this.jc, "* ID", eb(Fi, this.rl));
    Ai(this.vb, this.jc, "* STYLE", eb(this.vq, b));
    this.Pp = !0;
  };
  var Gi = function (a, b) {
      a || (a = "*");
      return (a + " " + b).toUpperCase();
    },
    yi = function (a, b, c, d) {
      if (!d.zi) return null;
      b = te(
        Qh(d.zi, function (e, f) {
          c.Pt = f;
          e = a(e, c);
          return null == e ? null : le(e);
        })
      );
      return "" == b ? null : b;
    },
    vi = function (a) {
      return ob(a);
    },
    Di = function (a, b) {
      b = ob(b);
      return 0 <= Vb(a, b.toLowerCase()) ? b : null;
    },
    Bi = function (a) {
      return (a = ob(a)) && "#" == a.charAt(0) ? a : null;
    },
    Ci = function (a, b, c) {
      return a(ob(b), c);
    },
    Ei = function (a, b, c) {
      b = b.split(/(?:\s+)/);
      for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f);
      }
      return 0 == d.length ? null : d.join(" ");
    },
    Fi = function (a, b, c) {
      return a(ob(b), c);
    };
  g = wi.prototype;
  g.Ia = function (a) {
    this.tg = this.Nv();
    a = this.By(a);
    return Le(a);
  };
  g.zy = function (a) {
    this.tg && "*" == this.Rf && (a.id = this.tg);
  };
  g.qy = function (a) {
    if (!this.Pj) return a;
    a = Sh("<div>" + a + "</div>");
    Wh(a);
    return a.innerHTML;
  };
  g.Nv = function () {
    var a = !("STYLE" in this.Tf) && "STYLE" in this.Me;
    return "*" == this.Rf && a
      ? "sanitizer-" +
          (Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36))
      : this.Rf;
  };
  g.createTextNode = function (a) {
    var b = a.data;
    (a = Jh(a)) &&
      "style" == Hh(a).toLowerCase() &&
      !("STYLE" in this.Tf) &&
      "STYLE" in this.Me &&
      (b = Fe(
        Th(
          b,
          this.tg,
          db(function (c, d) {
            return this.yf(c, { Pt: d });
          }, this)
        )
      ));
    return document.createTextNode(b);
  };
  g.Ft = function (a) {
    var b = Hh(a).toUpperCase();
    if (b in this.Tf || "http://www.w3.org/1999/xhtml" != Mh(a)) return null;
    if (this.Me[b]) return document.createElement(b);
    a = mf(document, "SPAN");
    this.il && Eh(a, "data-sanitizer-original-tag", b.toLowerCase());
    return a;
  };
  g.uy = function (a, b) {
    var c = b.name;
    if (0 == c.lastIndexOf("data-sanitizer-", 0)) return null;
    var d = Hh(a);
    b = b.value;
    var e = { tagName: ob(d).toLowerCase(), attributeName: ob(c).toLowerCase() },
      f = { zi: void 0 };
    "style" == e.attributeName && (f.zi = Fh(a));
    a = Gi(d, c);
    if (a in this.Xe) return (c = this.Xe[a]), c(b, e, f);
    c = Gi(null, c);
    return c in this.Xe ? ((c = this.Xe[c]), c(b, e, f)) : null;
  };
  function Hi(a, b) {
    b = void 0 === b ? {} : b;
    if (a instanceof Je) return a;
    a = a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
    b.JF && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
    b.IF && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
    b.KF && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
    return Le(a);
  }
  function Ii(a) {
    var b = document.implementation.createHTMLDocument("").createRange();
    a = Le(a);
    return b.createContextualFragment(Ke(a));
  }
  function Ji(a) {
    a = a.nodeName;
    return "string" === typeof a ? a : "FORM";
  }
  function Ki(a) {
    a = a.nodeType;
    return 1 === a || "number" !== typeof a;
  }
  var Li = function (a, b, c, d, e) {
    this.Is = a;
    this.Zm = b;
    this.Js = c;
    this.Xv = d;
    this.so = e;
  };
  Li.prototype.ex = function (a) {
    return "FORM" !== a && (this.Is.has(a) || this.Zm.has(a));
  };
  Li.prototype.Lu = function (a, b) {
    b = this.Zm.get(b);
    return (null == b ? 0 : b.has(a))
      ? b.get(a)
      : this.Js.has(a)
      ? { ka: 1 }
      : (b = this.Xv.get(a))
      ? b
      : this.so &&
        [].concat(oa(this.so)).some(function (c) {
          return 0 === a.indexOf(c);
        })
      ? { ka: 1 }
      : { ka: 0 };
  };
  var Mi =
      "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(
        " "
      ),
    Ni = [
      ["A", new Map([["href", { ka: 2 }]])],
      ["AREA", new Map([["href", { ka: 2 }]])],
      [
        "LINK",
        new Map([
          [
            "href",
            {
              ka: 2,
              conditions: new Map([
                [
                  "rel",
                  new Set(
                    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                      " "
                    )
                  ),
                ],
              ]),
            },
          ],
        ]),
      ],
      ["SOURCE", new Map([["src", { ka: 1 }]])],
      ["IMG", new Map([["src", { ka: 1 }]])],
      ["VIDEO", new Map([["src", { ka: 1 }]])],
      ["AUDIO", new Map([["src", { ka: 1 }]])],
    ],
    Oi =
      "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
        " "
      ),
    Pi = [
      [
        "dir",
        {
          ka: 3,
          conditions: Xh(function () {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
          }),
        },
      ],
      [
        "async",
        {
          ka: 3,
          conditions: Xh(function () {
            return new Map([["async", new Set(["async"])]]);
          }),
        },
      ],
      ["cite", { ka: 2 }],
      [
        "loading",
        {
          ka: 3,
          conditions: Xh(function () {
            return new Map([["loading", new Set(["eager", "lazy"])]]);
          }),
        },
      ],
      ["poster", { ka: 2 }],
      [
        "target",
        {
          ka: 3,
          conditions: Xh(function () {
            return new Map([["target", new Set(["_self", "_blank"])]]);
          }),
        },
      ],
    ],
    Qi = new Li(new Set(Mi), new Map(Ni), new Set(Oi), new Map(Pi)),
    Ri = new Li(
      new Set(Mi),
      new Map(Ni),
      new Set(
        Xh(function () {
          return Oi.concat(["class", "id"]);
        })
      ),
      new Map(
        Xh(function () {
          return Pi.concat([["style", { ka: 4 }]]);
        })
      )
    ),
    Si = new Li(
      new Set(
        Xh(function () {
          return Mi.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
        })
      ),
      new Map(Ni),
      new Set(
        Xh(function () {
          return Oi.concat(["class", "id", "tabindex", "contenteditable", "name"]);
        })
      ),
      new Map(
        Xh(function () {
          return Pi.concat([["style", { ka: 4 }]]);
        })
      ),
      new Set(["data-", "aria-"])
    );
  var Ti = function (a) {
    this.wq = a;
    this.ng = [];
  };
  g = Ti.prototype;
  g.Ec = function (a) {
    this.ng = [];
    a = this.Ia(a);
    if (0 !== this.ng.length) throw Error("");
    return a;
  };
  g.Ia = function (a) {
    var b = document.createElement("span");
    b.appendChild(this.mz(a));
    a = new XMLSerializer().serializeToString(b);
    a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
    return Le(a);
  };
  g.mz = function (a) {
    var b = this;
    a = Ii(a);
    a = document.createTreeWalker(
      a,
      5,
      function (h) {
        return b.Wx(h);
      },
      !1
    );
    for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
      var f = void 0;
      if (3 === c.nodeType) f = this.lz(c);
      else if (Ki(c)) f = this.kz(c);
      else throw Error("");
      e.appendChild(f);
      if ((c = a.firstChild())) e = f;
      else for (; !(c = a.nextSibling()) && (c = a.parentNode()); ) e = e.parentNode;
    }
    return d;
  };
  g.lz = function (a) {
    return document.createTextNode(a.data);
  };
  g.kz = function (a) {
    var b = Ji(a),
      c = document.createElement(b);
    a = a.attributes;
    for (var d = q(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      e = f.name;
      f = f.value;
      var h = this.wq.Lu(e, b);
      if (this.nz(h.conditions, a))
        switch (h.ka) {
          case 1:
            Ui(c, e, f);
            break;
          case 2:
            h = Zh(f);
            h = void 0 !== h && -1 !== $h.indexOf(h.toLowerCase()) ? f : "about:invalid#zClosurez";
            h !== f &&
              this.Ff(
                "Url in attribute " +
                  e +
                  ' was modified during sanitization. Original url:"' +
                  f +
                  '" was sanitized to: "' +
                  h +
                  '"'
              );
            Ui(c, e, h);
            break;
          case 3:
            Ui(c, e, f.toLowerCase());
            break;
          case 4:
            Ui(c, e, f);
            break;
          case 0:
            this.Ff("Attribute: " + e + " was dropped");
        }
      else this.Ff("Not all conditions satisfied for attribute: " + e + ".");
    }
    return c;
  };
  g.Wx = function (a) {
    if (3 === a.nodeType) return 1;
    if (!Ki(a)) return 2;
    var b = Ji(a);
    if (null === b) return this.Ff("Node name was null for node: " + a), 2;
    if (this.wq.ex(b)) return 1;
    this.Ff("Element: " + b + " was dropped");
    return 2;
  };
  g.Ff = function () {
    0 === this.ng.length && this.ng.push("");
  };
  g.nz = function (a, b) {
    if (!a) return !0;
    a = q(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = q(c.value);
      c = d.next().value;
      d = d.next().value;
      var e = void 0;
      if ((c = null == (e = b.getNamedItem(c)) ? void 0 : e.value) && !d.has(c)) return !1;
    }
    return !0;
  };
  function Ui(a, b, c) {
    a.setAttribute(b, c);
  }
  var Vi = Xh(function () {
      return new Ti(Qi, bi);
    }),
    Wi = Xh(function () {
      return new Ti(Ri, bi);
    }),
    Xi = Xh(function () {
      return new Ti(Si, bi);
    });
  var Yi = { 0: 1, 1: 1 },
    Zi = { 0: 0.1, 1: 0.1 };
  function $i(a, b) {
    try {
      Xi.Ec(a);
    } catch (c) {
      return aj(b, "H_SLSANITIZE"), !0;
    }
    try {
      Wi.Ec(a);
    } catch (c) {
      return aj(b, "H_RSANITIZE"), !0;
    }
    try {
      Vi.Ec(a);
    } catch (c) {
      return aj(b, "H_SANITIZE"), !0;
    }
    return !1;
  }
  function aj(a, b, c) {
    (bj
      ? bj
      : "undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon
      ? navigator.sendBeacon.bind(navigator)
      : cj)(
      "https://csp.withgoogle.com/csp/lcreport/" + a.jq,
      JSON.stringify({ host: window.location.hostname, type: b, additionalData: c })
    );
  }
  function cj(a, b) {
    var c = new XMLHttpRequest();
    c.open("POST", a);
    c.setRequestHeader("Content-Type", "application/json");
    c.send(b);
  }
  var bj;
  var dj = function (a) {
    return new ui()
      .Hs()
      .JB(Kd)
      .LB(Kd)
      .KB(function (b) {
        return ii(b);
      })
      .MB(function (b) {
        return ii(b);
      })
      .Oc()
      .Ia(a);
  };
  var ej = function (a) {
    this.G = cd(a, void 0, void 0);
  };
  Ha(ej, yd);
  g = ej.prototype;
  g.wA = function (a) {
    return qd(this, 1, a, void 0);
  };
  g.Uz = function (a) {
    return qd(this, 2, Wc(a), void 0);
  };
  g.oA = function (a) {
    return qd(this, 3, Wc(a), void 0);
  };
  g.Nf = function (a) {
    return qd(this, 4, Wc(a), void 0);
  };
  g.Qg = function () {
    return wd(od(this, 5, void 0), 0);
  };
  g.GA = function (a) {
    return qd(this, 5, a, void 0);
  };
  g.oj = function () {
    return wd(Xc(od(this, 6, void 0)), "");
  };
  g.Tz = function (a) {
    return qd(this, 6, Wc(a), void 0);
  };
  g.zA = function (a) {
    return qd(this, 7, Wc(a), void 0);
  };
  g.Zz = function (a) {
    var b = this.G,
      c = Gc(b);
    Sc(c);
    if (null == a) pd(b, c, 8, void 0, void 0);
    else {
      if (!(Dc(a) & 4)) {
        Object.isFrozen(a) && (a = zc(a));
        for (var d = 0; d < a.length; d++) {
          var e = a,
            f = d,
            h = a[d];
          if ("string" !== typeof h) throw Error();
          e[f] = h;
        }
        Ec(a, 5);
      }
      pd(b, c, 8, a, void 0);
    }
    return this;
  };
  g.CA = function (a) {
    return qd(this, 9, a, void 0);
  };
  ej.vd = [8];
  var fj = /<[^>]*>|&[^;]+;/g,
    gj = function (a, b) {
      return b ? a.replace(fj, "") : a;
    },
    hj = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"
    ),
    ij = RegExp(
      "^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"
    ),
    jj = /^http:\/\/.*/,
    kj = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*$"
    ),
    lj = RegExp(
      "[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"
    ),
    mj = /\s+/,
    nj = /[\d\u06f0-\u06f9]/;
  var oj = function (a, b) {
    this.nc = "number" == typeof a ? (0 < a ? 1 : 0 > a ? -1 : null) : null == a ? null : a ? -1 : 1;
    this.Ks = !!b;
  };
  g = oj.prototype;
  g.cj = function (a, b) {
    var c = 0,
      d = 0,
      e = !1;
    a = gj(a, b).split(mj);
    for (b = 0; b < a.length; b++) {
      var f = a[b];
      ij.test(gj(f, void 0))
        ? (c++, d++)
        : jj.test(f)
        ? (e = !0)
        : hj.test(gj(f, void 0))
        ? d++
        : nj.test(f) && (e = !0);
    }
    return 0 == d ? (e ? 1 : 0) : 0.4 < c / d ? -1 : 1;
  };
  g.Ms = function (a, b) {
    return 0 > Number(a) * Number(b);
  };
  g.Sm = function (a, b, c, d) {
    return d && (this.Ms(b, this.nc) || (1 == this.nc && lj.test(gj(a, c))) || (-1 == this.nc && kj.test(gj(a, c))))
      ? 1 == this.nc
        ? "\u200e"
        : "\u200f"
      : "";
  };
  g.Rm = function (a, b) {
    return this.gp(this.cj(a, b));
  };
  g.gp = function (a) {
    return -1 == (0 == a ? this.nc : a) ? "rtl" : "ltr";
  };
  g.tr = function (a, b) {
    return this.VA(null, a, b);
  };
  g.VA = function (a, b, c) {
    null == a && (a = this.cj(Ke(b).toString(), !0));
    return this.WA(a, b, c);
  };
  g.WA = function (a, b, c) {
    c = c || void 0 == c;
    var d = 0 != a && a != this.nc;
    if (this.Ks || d) {
      var e;
      d && (e = -1 == a ? "rtl" : "ltr");
      e = { dir: e };
      if (!Qe.test("span")) throw Error("");
      if ("SPAN" in Se) throw Error("");
      d = b;
      var f = "";
      if (e)
        for (l in e)
          if (Object.prototype.hasOwnProperty.call(e, l)) {
            if (!Qe.test(l)) throw Error("");
            var h = e[l];
            if (null != h) {
              var k = l;
              if (h instanceof Yd) h = Zd(h);
              else if ("style" == k.toLowerCase()) {
                if (!Za(h)) throw Error("");
                h instanceof se || (h = we(h));
                h = te(h);
              } else {
                if (/^on/i.test(k)) throw Error("");
                if (k.toLowerCase() in Re)
                  if (h instanceof ae) h = be(h).toString();
                  else if (h instanceof he) h = ie(h);
                  else if ("string" === typeof h) h = ne(h).bb();
                  else throw Error("");
              }
              h.Cb && (h = h.bb());
              k = k + '="' + wb(String(h)) + '"';
              f += " " + k;
            }
          }
      var l = "<span" + f;
      null == d ? (d = []) : Array.isArray(d) || (d = [d]);
      !0 === Td.span ? (l += ">") : ((d = Pe(d)), (l += ">" + Ke(d).toString() + "</span>"));
      l = Le(l);
    } else l = b;
    return (l = Pe(l, this.Sm(Ke(b).toString(), a, !0, c)));
  };
  g.sp = function (a, b) {
    return this.Nx(null, a, b);
  };
  g.Nx = function (a, b, c) {
    null == a && (a = this.cj(b, c));
    return this.Sm(b, a, c, !0);
  };
  g.mark = function () {
    switch (this.nc) {
      case 1:
        return "\u200e";
      case -1:
        return "\u200f";
      default:
        return "";
    }
  };
  g.XA = function () {
    return -1 == this.nc ? "right" : "left";
  };
  var pj = new oj(1),
    qj = pj.gp(1),
    rj = pj.XA(),
    sj = function (a, b) {
      return Ke(pj.tr(Hi(a), b)).toString();
    },
    tj = function (a, b) {
      return pj.tr(Vi.Ia(a), b);
    },
    uj = function (a) {
      return a ? pj.Rm(a, !1) : qj;
    },
    vj = function (a) {
      return a ? pj.Rm(a, !0) : qj;
    },
    wj = function (a) {
      return a ? pj.sp(a, !1) : "";
    },
    xj = function (a) {
      return a ? pj.sp(a, !0) : "";
    };
  var yj = {
      "result-info": function (a, b) {
        return "\u7d04 " + a + " \u4ef6\uff08" + b + " \u79d2\uff09";
      },
      page: function (a) {
        return "\u30da\u30fc\u30b8 " + a;
      },
    },
    zj = {
      "search-on-google": function () {
        var a = q(["Google \u3067\u300c", "\u300d\u3092\u691c\u7d22\u3059\u308b"]),
          b = a.next().value;
        a = a.next().value;
        return { prefix: b, Sf: a };
      },
      "google-custom-search": function () {
        var a = q(["", " \u30ab\u30b9\u30bf\u30e0\u691c\u7d22"]),
          b = a.next().value;
        a = a.next().value;
        return { prefix: b, Sf: a };
      },
      "sorry-message": function () {
        var a = q([
            "\u30ed\u30dc\u30c3\u30c8\u3067\u306f\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002$$DIVIDER1$$\u8a73\u7d30",
            "",
          ]),
          b = a.next().value;
        a = a.next().value;
        var c = q(b.split("$$DIVIDER1$$"));
        b = c.next().value;
        c = c.next().value;
        return { jB: b, Jx: c, iB: a };
      },
      "backfill-none": function () {
        var a = q([
            "",
            " \u3067\u306e\u691c\u7d22\u306b\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u691c\u7d22\u7bc4\u56f2\u3092\u30a6\u30a7\u30d6\u5168\u4f53\u306b\u5e83\u3052\u307e\u3057\u305f\u3002",
          ]),
          b = a.next().value;
        a = a.next().value;
        return { prefix: b, Sf: a };
      },
      "backfill-few": function () {
        var a = q([
            "",
            " \u3067\u306e\u691c\u7d22\u306b\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u5c11\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u691c\u7d22\u7bc4\u56f2\u3092\u30a6\u30a7\u30d6\u5168\u4f53\u306b\u5e83\u3052\u307e\u3057\u305f\u3002",
          ]),
          b = a.next().value;
        a = a.next().value;
        return { prefix: b, Sf: a };
      },
    };
  var Aj = {
    blank: "&nbsp;",
    image: "\u753b\u50cf",
    web: "\u30a6\u30a7\u30d6",
    "ads-by-google": "Ads by Google",
    watermark: "Google \u304b\u3089\u30af\u30ea\u30c3\u30d7",
    "clear-results": "\u7d50\u679c\u3092\u30af\u30ea\u30a2",
    search: "\u691c\u7d22",
    "search-uc": "\u691c\u7d22",
    "powered-by": "powered by",
    previous: "\u524d\u3078",
    next: "\u6b21\u3078",
    "clear-tool-title": "\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u3092\u30af\u30ea\u30a2",
    "no-results": "\u4e00\u81f4\u3059\u308b\u7d50\u679c\u306f\u3042\u308a\u307e\u305b\u3093",
    "linked-cse-error-results":
      "\u30ea\u30f3\u30af\u578b\u30ab\u30b9\u30bf\u30e0\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u306e\u30b5\u30dd\u30fc\u30c8\u306f\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002https://goo.gl/Gs1KIc \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",
    dym: "\u3082\u3057\u304b\u3057\u3066:",
    "showing-results-for": "\u6b21\u306e\u691c\u7d22\u7d50\u679c\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059:",
    "search-instead-for": "\u5143\u306e\u691c\u7d22\u30ad\u30fc\u30ef\u30fc\u30c9:",
    "custom-search": "\u30ab\u30b9\u30bf\u30e0\u691c\u7d22",
    labeled: "\u30e9\u30d9\u30eb\u4ed8\u304d",
    "all-results-short": "\u3059\u3079\u3066",
    "all-results-long": "\u3059\u3079\u3066\u306e\u691c\u7d22\u7d50\u679c",
    "refine-results": "\u7d50\u679c\u3092\u7d5e\u308a\u8fbc\u3080:",
    "file-format": "\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f:",
    "order-results-by": "\u8868\u793a\u9806:",
    "order-by-relevance": "\u95a2\u9023\u6027",
    "order-by-date": "\u65e5\u4ed8",
    "structured-data": "\u69cb\u9020\u5316\u30c7\u30fc\u30bf",
    "cse-branding": "Google \u30ab\u30b9\u30bf\u30e0\u691c\u7d22\u306e\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0",
    "enhanced-by-google": "Google \u63d0\u4f9b",
    "next-page": "\u6b21\u306e\u30da\u30fc\u30b8",
    "prev-page": "\u524d\u306e\u30da\u30fc\u30b8",
    "close-button": "\u9589\u3058\u308b",
    "visit-website": "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9",
    "learn-more": "\u8a73\u7d30",
    "backfill-none":
      "\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306e\u691c\u7d22\u306b\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u691c\u7d22\u7bc4\u56f2\u3092\u30a6\u30a7\u30d6\u5168\u4f53\u306b\u5e83\u3052\u307e\u3057\u305f\u3002",
    "backfill-few":
      "\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306e\u691c\u7d22\u306b\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u5c11\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u691c\u7d22\u7bc4\u56f2\u3092\u30a6\u30a7\u30d6\u5168\u4f53\u306b\u5e83\u3052\u307e\u3057\u305f\u3002",
    "thumbnail-image": "\u30b5\u30e0\u30cd\u30a4\u30eb\u753b\u50cf",
  };
  function Bj(a, b) {
    a = Cj(a);
    var c;
    if ((c = b)) {
      var d, e;
      c = Math.random() < (null != (e = null != (d = b.XF) ? d : Yi[b.jq[0]]) ? e : 0);
    }
    if (c && !1 !== window.SAFEVALUES_REPORTING && "DocumentFragment" in window) {
      var f, h;
      Math.random() < (null != (h = null != (f = b.PE) ? f : Zi[b.jq[0]]) ? h : 0) && aj(b, "HEARTBEAT");
      $i(a, b) || (Hi(a).toString() !== a && aj(b, "H_ESCAPE"));
    }
    return Le(a);
  }
  function Dj(a) {
    a = Cj(a);
    return ee(a);
  }
  function Cj(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  function Ej(a, b) {
    var c = function () {};
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.GD = function (d, e, f, h) {
      var k = Array.prototype.splice.apply(arguments, [1, arguments.length]);
      return d.apply(a, k);
    };
  }
  var Fj = new Date().getTime(),
    Gj = !0;
  function Hj(a, b) {
    Ij(a, void 0 === b ? "1" : b);
  }
  function Jj(a) {
    Gj = !1;
    Hj(a);
    Gj = !0;
  }
  function Ij(a, b) {
    b = void 0 === b ? "1" : b;
    var c = document.getElementsByTagName("head")[0];
    c || (c = document.body.parentNode.appendChild(document.createElement("head")));
    var d = document.createElement("script");
    d.type = "text/javascript";
    d.charset = "utf-8";
    a = Gj ? a + "&key=notsupplied&v=" + (void 0 === b ? "1" : b) : a;
    if (gc || tc || Kj("konqueror")) a = a + "&nocache=" + Fj++;
    di(d, Dj(a));
    var e = function () {
      d.onload = null;
      d.parentNode.removeChild(d);
    };
    a = function (f) {
      f = f ? f : window.event;
      f = f.target ? f.target : f.srcElement;
      if ("loaded" == f.readyState || "complete" == f.readyState)
        f.onreadystatechange && (f.onreadystatechange = null), e();
    };
    "Gecko" == navigator.product ? (d.onload = e) : (d.onreadystatechange = a);
    c.appendChild(d);
  }
  function Lj(a, b) {
    return function () {
      return b.apply(a, arguments);
    };
  }
  function Mj(a, b, c) {
    c = void 0 === c ? [] : c;
    return function () {
      return b.apply(a, c);
    };
  }
  function Nj(a) {
    for (; a.firstChild; ) a.removeChild(a.firstChild);
  }
  function Oj(a, b) {
    if (a)
      try {
        Nj(a), a.appendChild(b);
      } catch (c) {}
    return b;
  }
  function E(a, b) {
    try {
      a.appendChild(b);
    } catch (c) {}
    return b;
  }
  function Pj(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = void 0 === c.hb ? !1 : c.hb;
    (void 0 === c.je ? 0 : c.je) || d ? ci(a, dj(b)) : ((b = new ui().Oc().Ia(b)), ci(a, b));
  }
  function Qj(a, b) {
    void 0 != a.textContent ? (a.textContent = b) : (a.innerText = b);
  }
  function Rj(a) {
    return document.createTextNode(void 0 === a ? "" : a);
  }
  function Sj(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.text ? void 0 : a.text,
      c = void 0 === a.className ? void 0 : a.className,
      d = void 0 === a.je ? !1 : a.je,
      e = void 0 === a.hb ? !1 : a.hb,
      f = document.createElement("div");
    (void 0 === a.Jc ? 0 : a.Jc) ? E(f, Rj(b)) : b && (b instanceof Je ? ci(f, b) : Pj(f, b, { je: d, hb: e }));
    c && (f.className = c);
    return f;
  }
  function L(a) {
    return Sj({ className: a });
  }
  function Tj(a, b) {
    var c = document.createElement("span");
    a && E(c, Rj(a));
    b && (c.className = b);
    return c;
  }
  function Uj(a, b, c) {
    var d = document.createElement("table");
    d.setAttribute("cellSpacing", a ? a : 0);
    d.setAttribute("cellPadding", b ? b : 0);
    d.setAttribute("role", "presentation");
    c && (d.className = c);
    return d;
  }
  function Vj(a, b, c) {
    (a = a.insertRow(-1)) || alert(a);
    for (var d = 0; d < b; d++) Wj(a, c);
    return a;
  }
  function Wj(a, b) {
    a = a.insertCell(-1);
    b && (a.className = b);
    return a;
  }
  function Xj(a, b, c, d) {
    var e = mf(document, "IMG");
    e.src = a;
    b && (e.width = b);
    c && (e.height = c);
    d && (e.className = d);
    return e;
  }
  function Yj(a, b, c, d, e) {
    var f = document.createElement("a");
    a && Ve(f, a);
    b && (d ? E(f, Tj(b, d)) : E(f, Rj(b)));
    c && (f.target = c);
    e && (f.title = e);
    return f;
  }
  function Zj(a, b, c, d, e, f) {
    f = void 0 === f ? {} : f;
    var h = L(d),
      k = document.createElement("a");
    k.href = a;
    Pj(k, b, { je: !0 });
    d && (k.className = d);
    c && (k.target = c);
    e && (k.title = e);
    for (var l in f) k.setAttribute(l, f[l]);
    h.appendChild(k);
    return h;
  }
  function ak(a, b) {
    b = void 0 === b ? {} : b;
    b = void 0 === b.hb ? !1 : b.hb;
    var c = document.createDocumentFragment(),
      d = document.createElement("div");
    for (a instanceof Je ? ci(d, a) : b ? ci(d, Bj(a)) : Pj(d, a, { je: !1 }); d.firstChild; )
      c.appendChild(d.firstChild);
    return c;
  }
  function bk(a, b, c, d, e, f, h) {
    e = void 0 === e ? "" : e;
    var k = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    k.setAttribute("width", f || c);
    k.setAttribute("height", h || d);
    k.setAttribute("viewBox", "0 0 " + c + " " + d);
    e && k.setAttribute("class", e);
    c = document.createElementNS("http://www.w3.org/2000/svg", "title");
    c.textContent = b;
    k.appendChild(c);
    b = document.createElementNS("http://www.w3.org/2000/svg", "path");
    b.setAttribute("d", a);
    k.appendChild(b);
    return k;
  }
  function ck(a, b) {
    b
      ? ((a.tabIndex = 0),
        (a.onclick = b),
        (a.onkeypress = function (c) {
          c = c || window.event;
          c.keyCode && 13 == c.keyCode && b.call(a, c);
        }))
      : ((a.tabIndex = -1), a.removeAttribute("tabIndex"), (a.onclick = null), (a.onkeypress = null));
  }
  var dk = "",
    ek = {
      rt: {
        YD: 1,
        fE: 1,
        TE: 1,
        id: 1,
        UE: 1,
        in: 1,
        gF: 1,
        iF: 1,
        kF: 1,
        lF: 1,
        nF: 1,
        wF: 1,
        pG: 1,
        uG: 1,
        vG: 1,
        zG: 1,
        AG: 1,
        CG: 1,
      },
      dE: {
        KD: 1,
        PD: 1,
        RD: 1,
        UD: 1,
        VD: 1,
        WD: 1,
        rt: 1,
        gE: 1,
        do: 1,
        kE: 1,
        sE: 1,
        HE: 1,
        IE: 1,
        JE: 1,
        SE: 1,
        hF: 1,
        oF: 1,
        pF: 1,
        qF: 1,
        rF: 1,
        sF: 1,
        tF: 1,
        uF: 1,
        vF: 1,
        DF: 1,
        EF: 1,
        FF: 1,
        GF: 1,
        HF: 1,
        LF: 1,
        VF: 1,
        dG: 1,
        lG: 1,
        rG: 1,
        sG: 1,
        tG: 1,
        xG: 1,
        yG: 1,
        BG: 1,
      },
      xF: { LD: 1 },
    };
  function Kj(a) {
    return a in fk ? fk[a] : (fk[a] = -1 != navigator.userAgent.toLowerCase().indexOf(a));
  }
  var fk = {},
    gk = function (a) {
      this.Zs = a + "branding";
      this.vertical = a + "branding-vertical";
      this.Ow = a + "branding-img-noclear";
      this.nt = a + "branding-clickable";
      this.text = a + "branding-text";
    },
    hk = function (a, b, c) {
      if (!a) return { length: 0 };
      b = b && "*" != b ? b.toUpperCase() : "";
      if (c && a.getElementsByClassName) {
        c = a.getElementsByClassName(c);
        if (b) {
          a = {};
          for (var d = 0, e = 0, f; (f = c[e]); e++) b == f.nodeName && (a[d++] = f);
          a.length = d;
          return a;
        }
        return c;
      }
      b = a.getElementsByTagName(b || "*");
      if (c) {
        a = {};
        for (e = d = 0; (f = b[e]); e++) Zg(f, c) && (a[d++] = f);
        a.length = d;
        return a;
      }
      return b;
    };
  function ik(a) {
    var b = [];
    if (a) for (var c in a) null != a[c] && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
    return b.join("&");
  }
  function jk(a, b) {
    b || (b = document.body);
    for (var c = 0; a != b; ) (c += a.offsetTop), (a = a.offsetParent);
    return c;
  }
  function kk(a) {
    try {
      return a instanceof HTMLFormElement;
    } catch (b) {
      return (
        !!a &&
        "object" === typeof a &&
        1 === a.nodeType &&
        "object" === typeof a.style &&
        "object" === typeof a.ownerDocument &&
        "form" === a.tagName.toLowerCase()
      );
    }
  }
  function lk(a) {
    return "string" == typeof a ? document.getElementById(a) : a;
  }
  function mk(a) {
    var b = a.parentElement;
    return b ? b.firstElementChild : a;
  }
  function nk(a) {
    if (a) {
      var b = mf(document, "A");
      Ve(b, le(a));
      a = b.href;
    } else a = null;
    return a;
  }
  function ok(a) {
    return !!a && /https?:\/\/([^/.:]+\.)*google(\.[^/.:]+)*(:[0-9]+)?\/cse/.test(a);
  }
  function pk(a) {
    window.console && window.console.warn(a);
  }
  function qk(a) {
    return "9d449ff4a772956c6" === a || a.startsWith("r-");
  }
  var rk = this,
    sk = ee(Zd($d("https://support.google.com/programmable-search/answer/6001359#captcha"))),
    tk = ee(Zd($d("https://www.google.com/recaptcha/api.js?render=explicit"))),
    uk,
    vk = Zd($d("display:none;"));
  uk = 0 === vk.length ? ve : new se(vk, re);
  var wk = function (a) {
      a = L(a);
      B(a, "gs-result");
      B(a, "gs-error-result");
      B(a, "gs-captcha-outer-wrapper");
      a.setAttribute("id", "recaptcha-wrapper");
      var b = zj["sorry-message"](),
        c = b.jB,
        d = b.Jx,
        e = b.iB;
      b = L();
      c = c ? Tj(c, "gs-captcha-msg") : null;
      e = e ? Tj(e, "gs-captcha-msg") : null;
      d = Yj(sk.toString(), d, "_blank", "gs-captcha-info-link");
      c && E(b, c);
      E(b, d);
      e && E(b, e);
      d = L("gs-captcha-wrapper");
      d.setAttribute("id", "recaptcha-element");
      E(a, b);
      E(a, d);
      return { uq: a, Gy: d };
    },
    xk = function () {
      var a;
      (null == (a = y.console) ? 0 : a.log) && y.console.log("Unable to load recaptcha widget");
    },
    yk = function () {
      var a = lk("recaptcha-wrapper");
      a && a.remove();
    },
    zk = function (a, b, c, d) {
      var e = b.uq;
      y.grecaptcha.render(b.Gy, {
        sitekey: a ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" : "6LdE6qgbAAAAANq2Tal4NuP8YdGwtfdTpCLArNE-",
        callback: function (f) {
          e.style.cssText = te(uk);
          c(f);
          d && d();
        },
        "expired-callback": function () {},
      });
    },
    Ak = function (a, b, c, d, e, f) {
      yk();
      var h = "762379dc6347d760b" === a,
        k = wk(b);
      d(tk, { async: !0, defer: !0 })
        .os(function () {
          y.grecaptcha.ready(function () {
            if (c.pp) {
              var l = c.pp;
              l(c.query, "reCaptcha.render", c.yz, function () {
                return zk(h, k, f, e);
              }).apply(rk);
            } else zk(h, k, f, e);
          });
        })
        .qs(xk);
      return k.uq;
    },
    Bk = function (a, b, c) {
      var d = ["gsc-adBlock", "gsc-adBlockNoHeight", "gsc-adBlockInvisible"],
        e = function (t) {
          t &&
            (B(t, "gsc-adBlockInvisible"),
            b(function () {
              Yg(t, "gsc-adBlock");
            }));
        },
        f = function (t) {
          t && "gsc-wrapper" === t.className
            ? ((t = t.firstElementChild), (t = null != t && 0 <= d.indexOf(t.className)))
            : (t = !1);
          return t;
        },
        h = function (t) {
          c(function () {
            e(t);
          });
        };
      a = hk(a, "div", "gsc-wrapper");
      for (var k = 0; k < a.length; ++k)
        if (f(a[k]))
          for (var l = 0; l < a[k].childElementCount; ++l) {
            var m = void 0,
              r = null == (m = a[k]) ? void 0 : m.children[l];
            if ("gsc-adBlock" === r.className) {
              e(r);
              return;
            }
            if (null != r && 0 <= d.indexOf(r.className)) {
              h(r);
              return;
            }
          }
    };
  var Ck = function (a) {
      return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a;
    },
    Dk = function (a) {
      a = parseInt(a, 10);
      return isNaN(a) ? void 0 : a;
    },
    O = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++) if (typeof b == a[c]) return b;
      };
    },
    Ek = (function () {
      var a = 0;
      return function () {
        return "___gcse_" + a++;
      };
    })(),
    Fk = function (a) {
      var b = 0;
      return function (c) {
        return "two-column" == a ? c || String(a) : c || String(a + b++);
      };
    },
    Gk = {};
  Gk.standard = { af: ["searchbox+results"], Kg: Fk("standard") };
  Gk["two-column"] = { af: ["searchbox", "results"], Kg: Fk("two-column") };
  Gk["searchbox-only"] = { af: ["searchbox"], Kg: Fk("searchbox-only") };
  Gk["searchresults-only"] = { af: ["results"], Kg: Fk("searchresults-only") };
  var Hk = {
      search: { tc: "standard", Ze: "searchbox+results" },
      searchbox: { tc: "two-column", Ze: "searchbox" },
      searchresults: { tc: "two-column", Ze: "results" },
      "searchbox-only": { tc: "searchbox-only", Ze: "searchbox" },
      "searchresults-only": { tc: "searchresults-only", Ze: "results" },
    },
    Ik,
    Jk = [],
    Kk;
  for (Kk in Hk) Jk.push("gcse\\:" + Kk), Jk.push("div.gcse-" + Kk);
  Ik = Jk.join(", ");
  var Lk = function (a, b, c) {
      b = b && "*" != b ? b.toUpperCase() : "";
      if (c && a.getElementsByClassName) {
        c = a.getElementsByClassName(c);
        if (b) {
          a = {};
          for (var d = 0, e, f = 0; (e = c[f]); f++) b == e.nodeName && (a[d++] = e);
          a.length = d;
          return a;
        }
        return c;
      }
      b = a.getElementsByTagName(b || "*");
      if (c) {
        a = {};
        for (f = d = 0; (e = b[f]); f++) {
          a: {
            if (null != e && null != e.className) {
              var h = e.className.split(" ");
              for (var k = 0; k < h.length; k++)
                if (h[k] == c) {
                  h = !0;
                  break a;
                }
            }
            h = !1;
          }
          h && (a[d++] = e);
        }
        a.length = d;
        return a;
      }
      return b;
    },
    Mk = function (a) {
      var b = [],
        c;
      for (c in Hk) {
        for (var d = a.getElementsByTagName("gcse:" + c), e = 0; e < d.length; e++) b.push(d[e]);
        d = Lk(a, "div", "gcse-" + c);
        for (e = 0; e < d.length; e++) b.push(d[e]);
      }
      return b;
    },
    Nk = {
      ZC: {
        name: "resultsUrl",
        l: function (a) {
          if ("string" == typeof a && (a = nk(a)) && (0 == a.indexOf("http://") || 0 == a.indexOf("https://")))
            return a;
        },
        defaultValue: void 0,
        s: !0,
        g: void 0,
        i: void 0,
        m: "searchbox",
      },
      OC: { name: "newWindow", l: Ck, defaultValue: !1, s: !0, g: void 0, i: void 0, m: "searchbox" },
      WC: { name: "queryParameterName", l: O(["string"]), defaultValue: "q", s: !0, g: void 0, i: void 0, m: void 0 },
      YB: { name: "autoSearchOnLoad", l: Ck, defaultValue: !0, s: !0, g: void 0, i: void 0, m: void 0 },
      dC: {
        name: "defaultToRefinement",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "defaultToRefinement",
        i: void 0,
        m: void 0,
      },
      iC: { name: "enableOrderBy", l: Ck, defaultValue: void 0, s: !0, g: "enableOrderBy", i: void 0, m: void 0 },
      TC: {
        name: "orderByOptions",
        l: O(["object"]),
        defaultValue: void 0,
        s: !1,
        g: "keys",
        i: "orderByOptions",
        m: void 0,
      },
      aD: {
        name: "resultSetSize",
        l: O(["string", "number"]),
        defaultValue: void 0,
        s: !0,
        g: "resultSetSize",
        i: void 0,
        m: void 0,
      },
      XC: {
        name: "extendedRestricts",
        l: O(["object"]),
        defaultValue: void 0,
        s: !1,
        g: "restrict-extended",
        i: void 0,
        m: void 0,
      },
      bD: {
        name: "safeSearch",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "restrict-safesearch",
        i: void 0,
        m: void 0,
      },
      gC: { name: "enableHistory", l: Ck, defaultValue: !1, s: !0, g: void 0, i: void 0, m: void 0 },
      LC: { name: "linkTarget", l: O(["string"]), defaultValue: void 0, s: !0, g: void 0, i: void 0, m: "results" },
      kC: { name: "enableSpeech", l: Ck, defaultValue: !1, s: !0, g: void 0, i: void 0, m: "searchbox" },
      fC: { name: "enableAutoComplete", l: Ck, defaultValue: void 0, s: !0, g: void 0, i: void 0, m: "searchbox" },
      XB: {
        name: "autoCompleteValidLanguages",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "validLanguages",
        i: "autoCompleteOptions",
        m: "searchbox",
      },
      UB: {
        name: "autoCompleteMaxCompletions",
        l: Dk,
        defaultValue: void 0,
        s: !0,
        g: "maxCompletions",
        i: "autoCompleteOptions",
        m: "searchbox",
      },
      VB: {
        name: "autoCompleteMaxPromotions",
        l: Dk,
        defaultValue: void 0,
        s: !0,
        g: "maxPromotions",
        i: "autoCompleteOptions",
        m: "searchbox",
      },
      WB: {
        name: "autoCompleteSource",
        l: O(["string"]),
        defaultValue: void 0,
        s: !1,
        g: "autoCompleteSource",
        i: void 0,
        m: void 0,
      },
      PC: {
        name: "noResultsString",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: void 0,
        i: void 0,
        m: "results",
      },
      RB: { name: "addOverride", l: O(["string"]), defaultValue: void 0, s: !0, g: void 0, i: void 0, m: void 0 },
      QC: { name: "numTopRefinements", l: Dk, defaultValue: void 0, s: !1, g: void 0, i: void 0, m: void 0 },
      CD: {
        name: "webSearchResultSetSize",
        l: O(["number", "string"]),
        defaultValue: void 0,
        s: !0,
        g: "resultSetSize",
        i: "webSearchOptions",
        m: void 0,
      },
      BD: {
        name: "webSearchExtendedRestricts",
        l: O(["object"]),
        defaultValue: void 0,
        s: !1,
        g: "restrict-extended",
        i: "webSearchOptions",
        m: void 0,
      },
      zD: {
        name: "lr",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "lr",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      vD: {
        name: "cr",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "cr",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      xD: {
        name: "gl",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "gl",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      wD: {
        name: "filter",
        l: O(["number"]),
        defaultValue: void 0,
        s: !0,
        g: "filter",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      uD: {
        name: "as_sitesearch",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_sitesearch",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      sD: {
        name: "as_oq",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_oq",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      FD: {
        name: "sort_by",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "sort",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      tD: {
        name: "as_rights",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_rights",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      rD: {
        name: "as_filetype",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_filetype",
        i: "webSearchExtendedRestricts",
        m: void 0,
      },
      ED: {
        name: "webSearchSafesearch",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "restrict-safesearch",
        i: "webSearchOptions",
        m: void 0,
      },
      yD: {
        name: "webSearchLinkTarget",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "linkTarget",
        i: "webSearchOptions",
        m: "results",
      },
      AD: {
        name: "webSearchQueryAddition",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "queryAddition",
        i: "webSearchOptions",
        m: void 0,
      },
      hC: {
        name: "enableImageSearch",
        l: Ck,
        defaultValue: void 0,
        s: !0,
        g: "enableImageSearch",
        i: void 0,
        m: "results",
      },
      eC: { name: "disableWebSearch", l: Ck, defaultValue: void 0, s: !0, g: "disableWebSearch", i: void 0, m: void 0 },
      cC: {
        name: "defaultToImageSearch",
        l: Ck,
        defaultValue: void 0,
        s: !0,
        g: "defaultToImageSearch",
        i: void 0,
        m: void 0,
      },
      BC: {
        name: "imageSearchLayout",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "layout",
        i: "imageSearchOptions",
        m: "results",
      },
      DC: {
        name: "imageSearchExtendedRestricts",
        l: O(["object"]),
        defaultValue: void 0,
        s: !1,
        g: "restrict-extended",
        i: "imageSearchOptions",
        m: void 0,
      },
      CC: {
        name: "image_lr",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "lr",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      uC: {
        name: "image_cr",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "cr",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      wC: {
        name: "image_gl",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "gl",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      vC: {
        name: "image_filter",
        l: O(["number"]),
        defaultValue: void 0,
        s: !0,
        g: "filter",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      tC: {
        name: "image_as_sitesearch",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_sitesearch",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      rC: {
        name: "image_as_oq",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_oq",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      FC: {
        name: "image_sort_by",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "sort",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      sC: {
        name: "image_as_rights",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_rights",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      qC: {
        name: "image_as_filetype",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "as_filetype",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      zC: {
        name: "image_size",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "imgsz",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      xC: {
        name: "image_colortype",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "imgc",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      yC: {
        name: "image_dominantcolor",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "imgcolor",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      AC: {
        name: "image_type",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "imgtype",
        i: "imageSearchExtendedRestricts",
        m: void 0,
      },
      EC: {
        name: "imageSearchResultSetSize",
        l: O(["number", "string"]),
        defaultValue: void 0,
        s: !0,
        g: "resultSetSize",
        i: "imageSearchOptions",
        m: void 0,
      },
      mC: {
        name: "gaQueryParameter",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "queryParameter",
        i: "googleAnalyticsOptions",
        m: "searchbox",
      },
      lC: {
        name: "gaCategoryParameter",
        l: O(["string"]),
        defaultValue: void 0,
        s: !0,
        g: "categoryParameter",
        i: "googleAnalyticsOptions",
        m: "searchbox",
      },
      PB: { name: "adchannel", l: O(["string"]), defaultValue: void 0, s: !0, g: "adchannel", i: void 0, m: void 0 },
      QB: { name: "adclient", l: O(["string"]), defaultValue: void 0, s: !0, g: "adclient", i: void 0, m: void 0 },
      TB: { name: "adtest", l: O(["string"]), defaultValue: void 0, s: !0, g: "adtest", i: void 0, m: void 0 },
      SB: { name: "adoptions", l: O(["object"]), defaultValue: void 0, s: !1, g: "adoptions", i: void 0, m: void 0 },
      gD: { name: "overlayResults", l: Ck, defaultValue: !1, s: !0, g: "overlayResults", i: void 0, m: void 0 },
      jC: { name: "enableRichSnippets", l: Ck, defaultValue: !1, s: !1, g: void 0, i: void 0, m: "results" },
      pC: { name: "hideElementBranding", l: Ck, defaultValue: !1, s: !1, g: void 0, i: void 0, m: void 0 },
      VC: { name: "personalizedAds", l: Ck, defaultValue: !0, s: !0, g: "personalizedAds", i: void 0, m: void 0 },
      bC: { name: "cssThemeVersion", l: O(["number"]), defaultValue: void 0, s: !1, g: void 0, i: void 0, m: void 0 },
      MC: {
        name: "mobileLayout",
        l: O(["string"]),
        defaultValue: "enabled",
        s: !0,
        g: "mobileLayout",
        i: void 0,
        m: void 0,
      },
      IC: { name: "isMobileDevice", l: Ck, defaultValue: !1, s: !1, g: void 0, i: void 0, m: void 0 },
      KC: {
        name: "isSafeSearchActive",
        l: function (a) {
          if ("string" == typeof a) {
            if ("off" == a || "moderate" == a) return "off";
            if ("active" == a) return "active";
          } else if ("boolean" == typeof a) return a ? "active" : "off";
        },
        defaultValue: void 0,
        s: !0,
        g: "isSafeSearchActive",
        i: void 0,
        m: void 0,
      },
      jD: { name: "adStyleId", l: O(["string"]), defaultValue: void 0, s: !0, g: void 0, i: void 0, m: void 0 },
    },
    Ok = function (a, b) {
      for (var c in Nk) Nk.hasOwnProperty(c) && a.call(b, Nk[c]);
    },
    Pk = ["oq", "gs_204"];
  var Qk = function (a, b) {
      var c = {};
      Ok(function (d) {
        var e = a.getAttribute(b + d.name);
        null != e && (c[d.name] = e);
      }, null);
      return c;
    },
    Rk = function (a, b) {
      this.node = a;
      this.gq = b ? 1 : 0;
      if (b) {
        var c = b.tag || "search";
        var d = b.attributes || {};
      } else {
        c = "";
        c = a.nodeName.toLowerCase();
        var e = "";
        "div" == c ? ((e = "data-"), (c = (a.className || a.getAttribute("class")).substr(5))) : (c = c.substr(5));
        d = Qk(a, e);
      }
      this.attributes = d;
      this.tc = Hk[c].tc;
      this.type = Hk[c].Ze;
      a = b ? b.gname : a.getAttribute(e + "gname");
      this.va = Gk[this.tc].Kg(a);
      this.Et = function () {
        var f = this.node;
        if (0 == this.gq) {
          var h = document.createElement("div");
          var k = f.parentNode;
          k.insertBefore(h, f);
          k.removeChild(f);
          h.id = f.id;
          this.node = h;
        } else 1 == this.gq && ((h = document.createElement("div")), f.appendChild(h), (this.node = h));
        (this.node.id && 0 !== this.node.id.length) || (this.node.id = Ek());
      };
    };
  var Sk =
      ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-breadcrumb"> <span data-body="(Vars.richSnippet && Vars.richSnippet.metatags && Vars.richSnippet.metatags.ogSiteName) || (Vars.breadcrumbUrl && Vars.breadcrumbUrl.host) || visibleUrl"></span> <span data-if="Vars.breadcrumbUrl.crumbs" data-foreach="Vars.breadcrumbUrl.crumbs" data-body="\' \u203a \' + Cur"></span> </div> </div> <div class="gsc-table-result"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gsc-table-cell-snippet-close"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </div> </div> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'class\':imageClass }" ><img data-attr="{ \'src\':Vars.tbLargeUrl || Vars.tbMedUrl || Vars.tbUrl, \'title\':titleNoFormatting, \'alt\': titleNoFormatting, \'class\':imageClass }" ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \'&times;\' + height + \' &sdot; \'" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box gs-ellipsis" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ><div class="gs-imagePreviewArea-invisible" ><a class="gs-previewLink" data-attr="{href:Vars.originalContextUrl, target:target}" ></a ><div class="gs-previewSnippet" ><div class="gs-previewTitle" ><a class="gs-previewLink"data-attr="{href:Vars.originalContextUrl, target:target}" data-body="titleNoFormatting" ></a ></div ><div class="gs-previewUrl" data-body="visibleUrl" ></div ><div class="gs-previewSize" data-body="width + \'&times;\' + height" ></div ><div class="gs-previewDescription" data-body="contentNoFormatting" ></div ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div class="gsc-table-cell-thumbnail gsc-thumbnail" data-if="tn.src"> <div data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image-box gs-web-image-box gs-web-image-box-landscape"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> <div data-elif="true" class="gs-image-box gs-web-image-box gs-web-image-box-portrait"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ',
    Tk =
      ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-breadcrumb"> <span data-body="(Vars.richSnippet && Vars.richSnippet.metatags && Vars.richSnippet.metatags.ogSiteName) || (Vars.breadcrumbUrl && Vars.breadcrumbUrl.host) || visibleUrl"></span> <span data-if="Vars.breadcrumbUrl.crumbs" data-foreach="Vars.breadcrumbUrl.crumbs" data-body="\' \u203a \' + Cur"></span> </div> </div> <div class="gsc-thumbnail-inside"> <h1 class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </h1> </div> <div class="gsc-table-result" role="main"> <div class="gsc-table-cell-snippet-close"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </div> </div> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'class\':imageClass }" ><img data-attr="{ \'src\':Vars.tbLargeUrl || Vars.tbMedUrl || Vars.tbUrl, \'title\':titleNoFormatting, \'alt\': titleNoFormatting, \'class\':imageClass }" ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \'&times;\' + height + \' &sdot; \'" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box gs-ellipsis" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ><div class="gs-imagePreviewArea-invisible" ><a class="gs-previewLink" data-attr="{href:Vars.originalContextUrl, target:target}" ></a ><div class="gs-previewSnippet" ><div class="gs-previewTitle" ><a class="gs-previewLink"data-attr="{href:Vars.originalContextUrl, target:target}" data-body="titleNoFormatting" ></a ></div ><div class="gs-previewUrl" data-body="visibleUrl" ></div ><div class="gs-previewSize" data-body="width + \'&times;\' + height" ></div ><div class="gs-previewDescription" data-body="contentNoFormatting" ></div ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div class="gsc-table-cell-thumbnail gsc-thumbnail" data-if="tn.src"> <div data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image-box gs-web-image-box gs-web-image-box-landscape"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> <div data-elif="true" class="gs-image-box gs-web-image-box gs-web-image-box-portrait"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
  var Vk = {
      qr: function (a) {
        Uk = a;
      },
    },
    Wk = Hi(""),
    Uk;
  Vk.Rl = function (a) {
    Xk.unshift(a);
    return Xk;
  };
  var Xk = ["base_", ""],
    Zk = function (a, b) {
      Yk[a] ||
        (Yk[a] = eval(
          "[function(Vars,render,html,bidiTextDir,bidiHtmlDir,bidiTextMarkAfter,bidiHtmlMarkAfter, localizedMessages){with(Vars)return(" +
            a +
            ")}][0]"
        ));
      return Yk[a](b, Vk.render, ak, uj, vj, wj, xj, Aj);
    };
  Vk.gy = function (a) {
    Va();
    Zk = a;
  };
  var Yk = {},
    $k = function () {
      var a = 5 === Uk ? Tk : Sk;
      a && (E(document.body, ak(a, { hb: !0 })), (Tk = Sk = ""));
    };
  Vk.render = function (a, b) {
    var c = 0;
    for ($k(); !a.appendChild; ) {
      if (c >= Xk.length) return ak(a + " not found");
      a = lk(Xk[c++] + a) || a;
    }
    for (var d = {}, e = 1; e < arguments.length; e++) for (var f in arguments[e]) d[f] = arguments[e][f];
    var h;
    try {
      var k = ak(Wk, { hb: !0 });
      f = e = !1;
      var l,
        m,
        r = function (S) {
          S = "data-" + S;
          l = (h = m.getAttribute(S)) ? Zk(h, d) : "";
          t.removeAttribute && t.removeAttribute(S);
          return h;
        };
      for (m = a.firstChild; m; m = e ? m : m.nextSibling) {
        var t = m.cloneNode(!1);
        if (1 != m.nodeType) (3 != m.nodeType || m.nodeValue.match(/\S/)) && E(k, t);
        else {
          r("foreach");
          !e && h && ((d.Foreach = l && "function" == typeof l.join ? l : [l]), (c = 0), (e = !0));
          if (e)
            if (c < d.Foreach.length) d.Cur = d.Foreach[(d.Index = c++)];
            else {
              e = !1;
              continue;
            }
          r("if") && (f = !1);
          if (h || r("elif"))
            if (f || !l) continue;
            else f = !0;
          if (!r("attr") || l) {
            var v = t;
            E(k, v);
            if (h) for (var x in l) void 0 != l[x] && ("class" == x ? (v.className = l[x]) : v.setAttribute(x, l[x]));
          } else t = k;
          if (r("facetgroup"))
            for (v = 0; v < d.display_facets.length; v++) {
              var Q = { index: "" };
              1 == d.display_facets.length
                ? (Q = { index: "sizeone" })
                : 0 == v
                ? (Q = { index: "first" })
                : v == d.display_facets.length - 1 && (Q = { index: "last" });
              E(t, (0, Vk.render)("facetGroupEntry", d.display_facets[v], Q));
            }
          var X = r("body") ? (l && l instanceof Node ? l : Rj("" + l)) : (0, Vk.render)(m, d, r("vars") ? l : {});
          try {
            X && E(t, X);
          } catch (S) {}
        }
      }
      return k;
    } catch (S) {
      return ak(S.toString() + ": " + h, { hb: !0 });
    }
  };
  var al = function (a, b, c, d, e) {
    e = void 0 === e ? null : e;
    this.Fx = a;
    this.Ba = b;
    this.qc = c;
    this.uu = d;
    this.Hr = e ? e : new Wg(1151, "0").Oc();
  };
  al.prototype.Dz = function (a, b, c, d) {
    a = new ej()
      .wA(1)
      .Uz(c + ": " + a)
      .oA(this.Fx)
      .Nf(this.Ba)
      .GA(Date.now())
      .Tz(this.qc)
      .zA(b)
      .Zz(this.uu);
    d && a.CA(d);
    this.Hr.Xt(a);
    this.Hr.flush();
  };
  al.prototype.Bd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Array.prototype.slice.call(arguments, 0) || [];
      try {
        return d.apply(this, f);
      } catch (h) {
        throw ("string" === typeof h && (h = { message: h }), e.Dz(h.message, a, b, c), h.message);
      }
    };
  };
  function bl() {} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  var cl = function (a, b) {
    this.vh = [];
    this.Ap = a;
    this.Pm = b || null;
    this.tf = this.Sd = !1;
    this.bc = void 0;
    this.kl = this.Vs = this.fi = !1;
    this.Lh = 0;
    this.Na = null;
    this.hi = 0;
  };
  fb(cl, bl);
  g = cl.prototype;
  g.cancel = function (a) {
    if (this.Sd) this.bc instanceof cl && this.bc.cancel();
    else {
      if (this.Na) {
        var b = this.Na;
        delete this.Na;
        a ? b.cancel(a) : b.Ys();
      }
      this.Ap ? this.Ap.call(this.Pm, this) : (this.kl = !0);
      this.Sd || this.Zi(new dl(this));
    }
  };
  g.Ys = function () {
    this.hi--;
    0 >= this.hi && this.cancel();
  };
  g.Am = function (a, b) {
    this.fi = !1;
    this.yl(a, b);
  };
  g.yl = function (a, b) {
    this.Sd = !0;
    this.bc = b;
    this.tf = !a;
    this.xn();
  };
  g.hm = function () {
    if (this.Sd) {
      if (!this.kl) throw new el(this);
      this.kl = !1;
    }
  };
  g.ct = function (a) {
    this.hm();
    this.yl(!0, a);
  };
  g.Zi = function (a) {
    this.hm();
    this.yl(!1, a);
  };
  g.os = function (a, b) {
    return this.cg(a, null, b);
  };
  g.qs = function (a, b) {
    return this.cg(null, a, b);
  };
  g.cg = function (a, b, c) {
    this.vh.push([a, b, c]);
    this.Sd && this.xn();
    return this;
  };
  g.then = function (a, b, c) {
    var d,
      e,
      f = new fg(function (h, k) {
        e = h;
        d = k;
      });
    this.cg(
      e,
      function (h) {
        h instanceof dl ? f.cancel() : d(h);
        return fl;
      },
      this
    );
    return f.then(a, b, c);
  };
  cl.prototype.$goog_Thenable = !0;
  cl.prototype.nx = function (a) {
    return a instanceof Error;
  };
  cl.prototype.Bo = function () {
    return Yb(this.vh, function (a) {
      return "function" === typeof a[1];
    });
  };
  var fl = {};
  cl.prototype.xn = function () {
    if (this.Lh && this.Sd && this.Bo()) {
      var a = this.Lh,
        b = gl[a];
      b && (b.ez(), delete gl[a]);
      this.Lh = 0;
    }
    this.Na && (this.Na.hi--, delete this.Na);
    a = this.bc;
    for (var c = (b = !1); this.vh.length && !this.fi; ) {
      var d = this.vh.shift(),
        e = d[0],
        f = d[1];
      d = d[2];
      if ((e = this.tf ? f : e))
        try {
          var h = e.call(d || this.Pm, a);
          h === fl && (h = void 0);
          void 0 !== h && ((this.tf = this.tf && (h == a || this.nx(h))), (this.bc = a = h));
          if (eg(a) || ("function" === typeof y.Promise && a instanceof y.Promise)) this.fi = c = !0;
        } catch (k) {
          (a = k), (this.tf = !0), this.Bo() || (b = !0);
        }
    }
    this.bc = a;
    c &&
      ((h = db(this.Am, this, !0)),
      (c = db(this.Am, this, !1)),
      a instanceof cl ? (a.cg(h, c), (a.Vs = !0)) : a.then(h, c));
    b && ((a = new hl(a)), (gl[a.Bb] = a), (this.Lh = a.Bb));
  };
  var el = function () {
    hb.call(this);
  };
  fb(el, hb);
  el.prototype.message = "Deferred has already fired";
  el.prototype.name = "AlreadyCalledError";
  var dl = function () {
    hb.call(this);
  };
  fb(dl, hb);
  dl.prototype.message = "Deferred was canceled";
  dl.prototype.name = "CanceledError";
  var hl = function (a) {
    this.Bb = y.setTimeout(db(this.mB, this), 0);
    this.Dg = a;
  };
  hl.prototype.mB = function () {
    delete gl[this.Bb];
    throw this.Dg;
  };
  hl.prototype.ez = function () {
    y.clearTimeout(this.Bb);
  };
  var gl = {};
  var ml = function (a, b) {
      var c = b || {};
      b = c.document || document;
      var d = be(a).toString(),
        e = new qf(b).createElement("SCRIPT"),
        f = { yq: e, Vf: void 0 },
        h = new cl(il, f),
        k = null,
        l = null != c.timeout ? c.timeout : 5e3;
      0 < l &&
        ((k = window.setTimeout(function () {
          jl(e, !0);
          h.Zi(new kl(1, "Timeout reached for loading script " + d));
        }, l)),
        (f.Vf = k));
      e.onload = e.onreadystatechange = function () {
        (e.readyState && "loaded" != e.readyState && "complete" != e.readyState) || (jl(e, c.ZD || !1, k), h.ct(null));
      };
      e.onerror = function () {
        jl(e, !0, k);
        h.Zi(new kl(0, "Error while loading script " + d));
      };
      f = c.attributes || {};
      Sd(f, { type: "text/javascript", charset: "UTF-8" });
      kf(e, f);
      Xe(e, a);
      ll(b).appendChild(e);
      return h;
    },
    ll = function (a) {
      var b = (a || document).getElementsByTagName("HEAD");
      return b && 0 !== b.length ? b[0] : a.documentElement;
    },
    il = function () {
      if (this && this.yq) {
        var a = this.yq;
        a && "SCRIPT" == a.tagName && jl(a, !0, this.Vf);
      }
    },
    jl = function (a, b, c) {
      null != c && y.clearTimeout(c);
      a.onload = function () {};
      a.onerror = function () {};
      a.onreadystatechange = function () {};
      b &&
        window.setTimeout(function () {
          of(a);
        }, 0);
    },
    kl = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      hb.call(this, c);
      this.code = a;
    };
  fb(kl, hb);
  var R = function () {
      this.zz = nl;
      nl += 1;
      this.cb = { width: 100, height: 75 };
      this.Gb = "_blank";
      this.La("small");
      this.nm();
      this.jd = this.sd = this.Oa = this.bg = this.Ad = this.Gh = this.yi = this.bf = null;
      this.results = [];
      this.Hh = {};
      this.wc = this.ob = "";
      if ("object" === typeof window && window.location && window.location.hostname && "" != window.location.hostname) {
        if ("" == dk) {
          var a = window.location.hostname.toLowerCase().split(".");
          2 > a.length && (dk = ".com");
          var b = a.pop();
          a = a.pop();
          dk = 2 == b.length ? (ek[a] && 1 == ek[a][b] ? "." + a + "." + b : "." + b) : ".com";
        }
        b = dk;
      } else b = ".com";
      this.to = b;
      this.jn = this.bj = this.nd = this.Pd = null;
      this.M = !1;
      this.Ba = "none";
      this.ph = this.pb = null;
    },
    nl = 0;
  z("module$exports$cse$search.Search.BASE", "https://www.google.com/cse/static");
  var ol = /style=([^&]*)/;
  z("module$exports$cse$search.Search.LARGE_RESULTSET", "large");
  z("module$exports$cse$search.Search.SMALL_RESULTSET", "small");
  z("module$exports$cse$search.Search.FILTERED_CSE_RESULTSET", "filtered_cse");
  z("module$exports$cse$search.Search.LARGE_RESULTS", 8);
  z("module$exports$cse$search.Search.SMALL_RESULTS", 4);
  z("module$exports$cse$search.Search.FILTERED_CSE_RESULTS", 10);
  z("module$exports$cse$search.Search.LINK_TARGET_TOP", "_top");
  z("module$exports$cse$search.Search.LINK_TARGET_SELF", "_self");
  z("module$exports$cse$search.Search.LINK_TARGET_PARENT", "_parent");
  z("module$exports$cse$search.Search.LINK_TARGET_BLANK", "_blank");
  z("module$exports$cse$search.Search.ORDER_BY_RELEVANCE", "order-by-relevance");
  z("module$exports$cse$search.Search.ORDER_BY_DATE", "order-by-date");
  z("module$exports$cse$search.Search.ORDER_BY_ASCENDING_DATE", "order-by-ascending-date");
  z("module$exports$cse$search.Search.RESTRICT_TYPE", "restrict-type");
  z("module$exports$cse$search.Search.RESTRICT_SAFESEARCH", "restrict-safesearch");
  z("module$exports$cse$search.Search.SAFESEARCH_STRICT", "active");
  z("module$exports$cse$search.Search.SAFESEARCH_OFF", "off");
  z("module$exports$cse$search.Search.SAFESEARCH_MODERATE", "moderate");
  z("module$exports$cse$search.Search.RESTRICT_EXTENDED_ARGS", "restrict-extended");
  z("module$exports$cse$search.Search.MOBILE_LAYOUT_ENABLED", "enabled");
  z("module$exports$cse$search.Search.MOBILE_LAYOUT_DISABLED", "disabled");
  z("module$exports$cse$search.Search.MOBILE_LAYOUT_FORCED", "forced");
  g = R.prototype;
  g.Jm = function (a) {
    a.html && delete a.html;
    if (a.type && "SPELL_CORRECTED_RESULTS" == a.type) {
      var b = L("gs-result");
      var c = Sj({ text: Aj["showing-results-for"] + " ", className: "gs-spelling", Jc: !0 }),
        d = document.createElement("a");
      ci(d, tj(this.Zb(a.correctedAnchor)));
      c.appendChild(d);
      b.appendChild(c);
      c = Sj({ text: Aj["search-instead-for"] + " ", className: "gs-spelling", Jc: !0 });
      B(c, "gs-spelling-original");
      d = document.createElement("a");
      ci(d, tj(this.Zb(a.originalAnchor)));
      c.appendChild(d);
      b.appendChild(c);
    } else
      (b = Sj({ text: Aj.dym + " ", className: "gs-spelling", Jc: !0 })),
        B(b, "gs-result"),
        (c = document.createElement("a")),
        ci(c, tj(this.Zb(a.anchor))),
        b.appendChild(c);
    a.html = b;
  };
  g.pc = function () {
    return null;
  };
  g.Zb = function (a) {
    return a;
  };
  g.ee = function () {
    return !1;
  };
  g.me = function (a) {
    return a;
  };
  g.ri = function () {
    return new R();
  };
  g.Qk = function () {};
  g.ef = function () {
    return null;
  };
  g.ug = function () {
    return null;
  };
  g.Ak = function () {};
  g.wi = function () {};
  g.ui = function () {};
  var pl = function () {
    if (google.search && google.search.hs) {
      var a = decodeURIComponent(google.search.hs).match(ol);
      if (a && a[1]) return a[1];
    }
    return null;
  };
  R.prototype.oj = function () {
    return "cx" === this.ug() ? this.ef() : null;
  };
  R.prototype.Bm = function (a) {
    a.sd = this.sd;
    a.Ce = this.Ce;
    a.Gb = this.Gb;
    a.xa = this.xa;
    a.Ad = this.Ad;
    this.cb && (a.cb = { width: this.cb.width, height: this.cb.height });
    a.ii = this.ii;
    a.Qb = this.Qb;
    a.Rb = this.Rb;
    a.Tc = this.Tc;
    a.Ba = this.Ba;
    a.pb = this.pb;
  };
  R.prototype.cc = function (a) {
    this.sd = null == a || "" == a ? null : a;
  };
  R.prototype.setQueryAddition = R.prototype.cc;
  R.prototype.Wp = function (a, b) {
    a = "";
    this.Rb && this.M
      ? ((a = this.Tc
          ? "https://csqr-autopush.corp.google.com/cse/element/v1"
          : "https://cse.google.com/cse/element/v1"),
        (a += "?rsz=" + this.xa + "&num=" + this.Wc() + "&hl=ja"))
      : this.Qb &&
        this.M &&
        (a =
          "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=" +
          this.xa +
          "&num=" +
          this.Wc() +
          "&hl=ja&prettyPrint=false");
    this.Ce && (a += "&source=" + encodeURIComponent(this.Ce));
    this.to && (a += "&gss=" + this.to);
    b && (a += "&start=" + b);
    this.Ba && (a += "&cselibv=" + this.Ba);
    return a;
  };
  R.prototype.DA = function (a) {
    this.Ce = a;
  };
  R.prototype.setSearcherSrc = R.prototype.DA;
  R.prototype.Ka = function (a) {
    this.Gb = a;
  };
  R.prototype.setLinkTarget = R.prototype.Ka;
  g = R.prototype;
  g.Un = function () {
    return this.Wb;
  };
  g.nf = function () {
    return this.Gb && "" != this.Gb ? this.Gb : null;
  };
  g.Vc = function () {
    null == this.bf && (this.bf = "gsc-" + this.Oa + "Result");
    return this.bf;
  };
  g.Hg = function () {
    null == this.yi && (this.yi = "gs-" + this.Oa + "Result");
    return this.yi;
  };
  g.Cj = function () {
    null == this.Gh && (this.Gh = Aj[this.Oa]);
    return this.Ad ? this.Ad : this.Gh;
  };
  R.prototype.getTabLabel = R.prototype.Cj;
  R.prototype.Hv = function () {
    return this.xa;
  };
  R.prototype.getResultSetSize = R.prototype.Hv;
  R.prototype.La = function (a) {
    this.er(a);
  };
  R.prototype.setResultSetSize = R.prototype.La;
  R.prototype.Nf = function (a) {
    a && (this.Ba = a);
  };
  R.prototype.setCselibVersion = R.prototype.Nf;
  R.prototype.vi = function (a, b, c) {
    this.pb = new al(a, this.Ba, b, c);
  };
  R.prototype.createLogUploader = R.prototype.vi;
  R.prototype.er = function (a) {
    var b = -1;
    "number" === typeof a ? (b = a) : isNaN(parseInt(a, 10)) || (b = parseInt(a, 10));
    if (0 < b && 8 >= b) this.xa = b;
    else
      switch (a) {
        case "large":
          this.xa = "large";
          break;
        default:
        case "small":
          this.xa = "small";
      }
  };
  R.prototype.dr = function (a, b) {
    var c = void 0 === b ? {} : b;
    b = void 0 === c.ik ? 1 : c.ik;
    c = void 0 === c.dk ? 10 : c.dk;
    var d = -1;
    "number" === typeof a ? (d = a) : isNaN(parseInt(a, 10)) || (d = parseInt(a, 10));
    d >= b && d <= c ? (this.xa = d) : "filtered_cse" == a ? (this.xa = a) : this.er(a);
  };
  R.prototype.execute = function (a, b, c) {
    var d = void 0;
    this.ph = null;
    if (c && 0 < c)
      if (this.cursor && this.cursor.pages && this.cursor.pages[c - 1] && this.cursor.pages[c - 1].start)
        d = this.cursor.pages[c - 1].start;
      else {
        var e = this.Wc();
        e && (d = e * (c - 1));
      }
    c = this.jf(a, void 0, d, !1);
    (b = ik(b)) && (c += "&" + b);
    d = this.Hh.hasOwnProperty(c);
    if (c == this.wc && !d) return this.ln(), !1;
    e = new Date().getTime();
    if (d && 5e3 > e - this.Hh[c]) return !1;
    d && (e = -1);
    this.Hh[c] = e;
    this.cursor = null;
    this.ob = a;
    this.wc = c;
    this.ip = b;
    this.Wb = this.Ig ? this.Ig() : null;
    this.ej(c, this.ak.bind(this));
    return !0;
  };
  R.prototype.execute = R.prototype.execute;
  R.prototype.ak = function (a) {
    this.M && (this.Rb || this.Qb) ? Jj(ql(this, a)) : Hj(this.eo(this.ob, a));
  };
  var rl = function (a, b) {
    for (var c in b) a = a + "&" + c + "=" + b[c];
    return a;
  };
  R.prototype.ej = function (a, b, c) {
    c = void 0 === c ? {} : c;
    b(rl(a, c));
  };
  var ql = function (a, b) {
    var c = y.google.search.cse,
      d = "api" + Math.floor(2e4 * Math.random());
    c[d] = function (e) {
      var f,
        h,
        k = null != (h = null == (f = e.error) ? void 0 : f.code) ? h : 200,
        l,
        m;
      f = null != (m = null == (l = e.error) ? void 0 : l.message) ? m : null;
      var r, t;
      l = null != (t = null == (r = e.error) ? void 0 : r.submessage) ? t : null;
      var v, x;
      r = null != (x = null == (v = e.error) ? void 0 : v.url) ? x : null;
      a.qd(e, k, f, k, b, l, r);
      delete c[d];
    };
    return b + "&callback=google.search.cse." + d;
  };
  R.prototype.eo = function (a, b) {
    var c = b + (this.Wb ? "&" + this.Wb : "");
    a = this.ci(a, b);
    return c + ("&context=" + a);
  };
  R.prototype.uo = function (a, b) {
    b = void 0 === b ? new Map() : b;
    this.cursor &&
      a < this.cursor.pages.length &&
      ((a = this.jf(this.ob, void 0, this.cursor.pages[a].start, !1)),
      (a = rl(a, Object.fromEntries(b.entries()))),
      (this.cursor = null),
      (this.wc = a),
      this.M && (this.Rb || this.Qb) ? Jj(ql(this, a)) : Hj(this.eo(this.ob, a)));
  };
  R.prototype.gotoPage = R.prototype.uo;
  R.prototype.lf = function () {
    return this.cursor && null != this.cursor.currentPageIndex ? this.cursor.currentPageIndex + 1 : null;
  };
  R.prototype.Wc = function () {
    return isNaN(parseInt(this.xa, 10))
      ? "small" == this.xa
        ? 4
        : "large" == this.xa
        ? 8
        : "filtered_cse" == this.xa
        ? 10
        : 4
      : parseInt(this.xa, 10);
  };
  R.prototype.getNumResultsPerPage = R.prototype.Wc;
  R.prototype.dv = function (a, b, c) {
    b = this.jf(a, b, 0, !1);
    if (null == c || void 0 == c) c = this.ci(a, b);
    return b + ("&context=" + c) + "&key=notsupplied&v=1";
  };
  R.prototype.getExecuteUrl = R.prototype.dv;
  R.prototype.Sl = function (a) {
    var b = Zj(
      "http://code.google.com/apis/ajaxsearch/faq.html",
      Aj.watermark + " - " + this.st(),
      "_blank",
      "gs-watermark"
    );
    E(a, b);
  };
  R.prototype.st = function () {
    var a = new Date();
    return a.getMonth() + 1 + "/" + a.getFullYear();
  };
  R.prototype.nm = function () {
    this.results = [];
  };
  R.prototype.clearResults = R.prototype.nm;
  R.prototype.ln = function () {
    this.rm && this.rm();
  };
  R.prototype.mo = function () {
    return { web: 1, image: 2 }[this.Oa] || 0;
  };
  R.prototype.qd = function (a, b, c, d, e, f, h) {
    var k = this;
    this.pb
      ? this.pb
          .Bd(this.ob, "onSearchComplete", this.mo(), function () {
            return k.Fp(a, b, c, d, e, f, h);
          })
          .apply(this)
      : this.Fp(a, b, c, d, e, f, h);
  };
  R.prototype.onSearchComplete = R.prototype.qd;
  g = R.prototype;
  g.Qw = function (a) {
    var b = this,
      c,
      d = { pp: null == (c = this.pb) ? void 0 : c.Bd, query: this.ob, yz: this.mo() };
    return Ak(this.oj(), this.Hg(), d, ml, a, function (e) {
      b.ph = e;
      b.Wb = b.Ig ? b.Ig() : null;
      var f = {};
      b.ej(b.wc, b.ak.bind(b), ((f["g-recaptcha-response"] = "" + e), f));
    });
  };
  g.Bw = function () {
    return !!this.ph;
  };
  g.Fp = function (a, b, c, d, e, f, h) {
    e && delete this.Hh[e];
    var k,
      l = 0 < (null == a ? void 0 : null == (k = a.results) ? void 0 : k.length);
    k = this.Yl;
    this.Yl = !1;
    if (k) l && (this.backfills = a.results);
    else {
      if (e && this.wc && e !== this.wc && e !== this.wc + "&g-recaptcha-response=" + (this.ph || "")) return;
      if (this.results && 0 < this.results.length)
        for (e = 0; e < this.results.length; e++) this.results[e].html && sl(this.results[e].html);
      this.results = l ? a.results : [];
      "backfills" in this && delete this.backfills;
    }
    document.dispatchEvent(new Event("searchComplete"));
    this.completionStatus = b;
    this.hashStatus = d;
    c && (this.Pd = c);
    f && (this.bj = f);
    h && (this.jn = h);
    a && a.cursor && a.cursor.pages && 0 < a.cursor.pages.length
      ? (this.cursor = a.cursor)
      : "cursor" in this && delete this.cursor;
    if (a && a.context) {
      this.context = a.context;
      b = [];
      if (a.context.facets && 0 < parseInt(a.context.total_results, 10)) {
        for (c = 0; c < a.context.facets.length; c++)
          a.context.facets[c].facet_search_label &&
            ((d = a.context.facets[c]),
            (f = parseInt(d.count, 10)),
            0 < f &&
              ((d.count = f), (d.width = Math.ceil((100 * f) / parseInt(a.context.total_results, 10))), b.push(d)));
        0 < b.length &&
          b.sort(function (m, r) {
            return r.count - m.count;
          });
      }
      this.context.display_facets = b;
    } else "context" in this && delete this.context;
    a && a.promotions ? (this.promotions = a.promotions) : "promotions" in this && delete this.promotions;
    a && a.omittedResults
      ? (this.omittedResults = a.omittedResults)
      : "omittedResults" in this && delete this.omittedResults;
    a && a.spelling ? (this.spelling = a.spelling) : "spelling" in this && delete this.spelling;
    a && a.findMoreOnGoogle
      ? (this.findMoreOnGoogle = a.findMoreOnGoogle)
      : "findMoreOnGoogle" in this && delete this.findMoreOnGoogle;
    this.Es();
    this.ln();
    k || this.Qx();
  };
  g.Qx = function () {
    var a = this.oj(),
      b,
      c = 1 === (null != (b = this.lf()) ? b : 1);
    a &&
      (qk(a) || a.startsWith("s-")) &&
      c &&
      3 >= this.results.length &&
      ((this.Yl = !0),
      (a = this.jf(this.ob, void 0, 0, !0)),
      this.ip && (a += "&" + this.ip),
      this.ej(a + "&backfill=true", this.ak.bind(this)));
  };
  g.fr = function (a) {
    this.ii = a;
  };
  g.Es = function () {
    for (var a = 0; a < this.results.length; a++) this.cf(this.results[a]);
    (a = this.context) && this.ui(a);
  };
  g.gr = function (a, b, c) {
    c = void 0 === c ? [] : c;
    this.rm = Mj(a, b, c);
  };
  R.prototype.setSearchCompleteCallback = R.prototype.gr;
  R.prototype.dA = function (a, b) {
    this.Ig = Mj(a, b);
  };
  var ul = function (a, b, c) {
      return 3 == a[b].length
        ? new tl(a[b][1] || (c && c.prefetchQuery), a[b][2], a[b][0], c)
        : new tl("", "", a[b], c);
    },
    vl = function (a, b) {
      if (a.length)
        for (var c = 0; c < a.length; c++)
          if (null == a[c]) {
            a[c] = b;
            var d = c;
            break;
          }
      d || ((d = a.length), a.push(b));
      return d;
    };
  z("module$exports$cse$search.Search.AllocateCompletionMapContext", vl);
  R.prototype.rb = function (a) {
    this.Ad = a;
  };
  R.prototype.setUserDefinedLabel = R.prototype.rb;
  R.prototype.MA = function (a) {
    this.bg = a;
  };
  R.prototype.setUserDefinedClassSuffix = R.prototype.MA;
  z("module$exports$cse$search.Search.scaleImage", function (a, b, c, d, e) {
    var f = Math.min(Math.min(c.width / a, c.height / b), 1);
    a = { width: Math.round(a * f), height: Math.round(b * f) };
    d && ((d.width = a.width), (d.height = a.height), e && (d.style.left = (c.width - a.width) / 2 + "px"));
    return a;
  });
  var wl;
  function sl(a) {
    wl || (wl = Sj());
    wl.appendChild(a);
    wl.textContent = "";
  }
  g = R.prototype;
  g.Cu = function (a) {
    var b = a || this.Pd;
    a = L(this.Hg());
    B(a, "gs-result");
    B(a, "gs-error-result");
    b = Sj({ text: b, className: "gs-snippet" });
    E(a, b);
    return { html: a };
  };
  g.Eu = function (a) {
    var b = void 0 === a ? {} : a;
    a = void 0 === b.message ? this.Pd : b.message;
    var c = void 0 === b.cB ? this.bj : b.cB,
      d = void 0 === b.link ? this.jn : b.link;
    b = L(this.Hg());
    B(b, "gs-result");
    B(b, "gs-stylized-error-result");
    E(b, Sj({ text: a, className: "gs-stylized-error-message" }));
    E(b, Sj({ text: c, className: "gs-stylized-error-submessage" }));
    d && ((a = Yj(d, Aj["learn-more"])), B(a, "gs-stylized-error-link"), E(b, a));
    return { html: b };
  };
  g.Du = function (a) {
    var b = a || this.nd;
    a = L(this.Hg());
    B(a, "gs-result");
    B(a, "gs-no-results-result");
    b = Sj({ text: b, className: "gs-snippet" });
    E(a, b);
    return { html: a };
  };
  g.Uq = function (a) {
    this.cb = a;
  };
  g.pv = function () {
    return this.wc;
  };
  R.prototype.getLastQueryUrl = R.prototype.pv;
  var tl = function (a, b, c) {
    this.query = a;
    this.Yp = b;
    this.ra = c;
  };
  R.prototype.Qq = function (a) {
    this.Rb = a;
  };
  R.prototype.mx = function () {
    return this.Rb;
  };
  R.prototype.isEnableCsqrResults = R.prototype.mx;
  R.prototype.Pq = function (a) {
    this.Tc = a;
  };
  R.prototype.lx = function () {
    return this.Tc;
  };
  R.prototype.isEnableCsqrDevStack = R.prototype.lx;
  R.prototype.Oq = function (a) {
    this.Qb = a;
  };
  R.prototype.kx = function () {
    return this.Qb;
  };
  R.prototype.isEnableApiary = R.prototype.kx;
  var xl = function () {};
  g = xl.prototype;
  g.Zh = function () {
    return [];
  };
  g.Yh = function () {
    return {};
  };
  g.Jk = function () {
    return "";
  };
  g.td = function () {
    return null;
  };
  g.Xk = function () {};
  g.type = function () {
    return null;
  };
  g.clone = function () {
    return new xl();
  };
  var yl = function (a, b) {
    this.Ir = "cx";
    this.Kk = a;
    this.Bc = (void 0 === b ? null : b) || null;
  };
  g = yl.prototype;
  g.type = function () {
    return this.Ir;
  };
  g.Jk = function () {
    return this.Kk;
  };
  g.td = function () {
    return this.Bc;
  };
  g.Xk = function (a) {
    this.Bc = a;
  };
  g.Zh = function () {
    var a = [];
    this.Bc &&
      (0 == this.Bc.indexOf("more:") || 0 == this.Bc.indexOf("less:") ? a.push(this.Bc) : a.push("more:" + this.Bc));
    return a;
  };
  g.Yh = function () {
    var a = {};
    return (a[this.Ir] = this.Kk), a;
  };
  g.clone = function () {
    return new yl(this.Kk, this.Bc);
  };
  function zl(a, b) {
    if (null == a) throw Error("Missing CX value: " + a);
    if (/^[\s\xa0]*$/.test(a)) throw Error("Invalid or missing CX value: '" + a + "'");
    return new yl(a, b);
  }
  var Al = Vk,
    Bl = function () {
      R.call(this);
      this.Oa = "image";
      this.lb = this.Ta = this.qb = null;
      this.Ra = {};
      this.X = new xl();
      this.kb = null;
    };
  Ej(Bl, R);
  z("module$exports$cse$CustomImageSearch.CSE_LARGE_RESULTSET", 20);
  var Cl = [],
    Dl = {
      as_dt: !0,
      as_epq: !0,
      as_eq: !0,
      as_filetype: !0,
      as_lq: !0,
      as_nlo: !0,
      as_nhi: !0,
      as_oq: !0,
      as_q: !0,
      as_qdr: !0,
      as_rights: !0,
      as_rq: !0,
      as_sitesearch: !0,
      cr: !0,
      c2coff: !0,
      filter: !0,
      gl: !0,
      hq: !0,
      imgsz: !0,
      imgc: !0,
      imgcolor: !0,
      imgtype: !0,
      lr: !0,
      query: !0,
      sort: !0,
    };
  g = Bl.prototype;
  g.ri = function () {
    var a = new Bl();
    this.Bm(a);
    a.qb = this.qb;
    a.Ta = this.Ta;
    a.lb = this.lb;
    a.Ra = this.Ra;
    a.X = this.X.clone();
    a.M = this.M;
    a.kb = this.kb;
    return a;
  };
  g.me = function (a) {
    a = a.replace(/\s+$/, "").replace(/^\s+/, "");
    return a.replace(/\s+/g, "_").toLowerCase();
  };
  g.ee = function (a) {
    return this.M ? this.X.td() == this.me(a) : !1;
  };
  g.Zb = function (a) {
    var b = this.X.td();
    return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a;
  };
  g.Vc = function () {
    return (this.bf = ["gsc-" + this.Oa + "Result", "gsc-" + this.Oa + "Result-popup"].join(" "));
  };
  z("module$exports$cse$CustomImageSearch.RawCompletion", function (a, b, c, d, e) {
    var f = 0;
    a && (f = parseInt(a, 10));
    a = ul(Cl, f, b);
    Cl[f] = null;
    a.ra.qd(b, c, d, e, a.Yp);
  });
  Bl.prototype.ci = function (a, b) {
    return vl(Cl, [this, a, b]);
  };
  Bl.prototype.jf = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    null == b && (b = "CustomImageSearch.RawCompletion");
    b = this.Wp(b, c);
    this.Qb && this.M && (b += "&searchtype=image");
    a = [a];
    this.sd && a.push(this.sd);
    a = a.concat(this.X.Zh()).join(" ");
    var e = this.X.Yh(),
      f = [];
    for (h in e) f.push(h + "=" + e[h]);
    var h = "&" + f.join("&");
    h = h + "&q=" + encodeURIComponent(a);
    d
      ? (h += "&safe=active")
      : "off" === this.Ta || "active" === this.Ta
      ? (h += "&safe=" + this.Ta)
      : this.qb && (h += "&safe=" + this.qb);
    this.kb && (h += "&cse_tok=" + this.kb);
    this.Ra && ((a = Pd(this.Ra)), d && Od(a, "as_sitesearch"), (d = ik(a)) && (h += "&" + d));
    this.lb && (h += "&exp=" + this.lb.join());
    b += h;
    this.jd = h;
    c && 0 != c && (this.jd = this.jd + "&start=" + c);
    window.google.loader.GoogleLocale &&
      this.Qb &&
      this.M &&
      (b += "&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale));
    return b;
  };
  Bl.prototype.cf = function (a) {
    a.html && delete a.html;
    a.target = this.nf() || void 0;
    a.html = Al.render("imageResult_popup", a);
    this.Sl(a.html);
  };
  Bl.prototype.createResultHtml = Bl.prototype.cf;
  Bl.prototype.Pf = function (a, b) {
    this.X = zl(a, b);
    this.X instanceof yl && (this.M = !0);
  };
  Bl.prototype.setSiteRestriction = Bl.prototype.Pf;
  g = Bl.prototype;
  g.ug = function () {
    return this.M ? this.X.type() : null;
  };
  g.ef = function () {
    return this.M ? this.X.Jk() : null;
  };
  g.pc = function () {
    return this.M ? this.X.td() : null;
  };
  g.Qk = function (a) {
    this.M && a && this.X.Xk(a);
  };
  g.Mf = function (a) {
    a && (this.kb = a);
  };
  g.La = function (a) {
    this.dr(a, { ik: 1, dk: 20 });
  };
  Bl.prototype.setResultSetSize = Bl.prototype.La;
  Bl.prototype.Wc = function () {
    var a = R.prototype.Wc.call(this);
    return this.M && a && "number" != typeof this.xa ? 2 * a : a;
  };
  Bl.prototype.getNumResultsPerPage = Bl.prototype.Wc;
  Bl.prototype.Of = function (a) {
    this.Ta = a;
  };
  Bl.prototype.setIsSafeSearchActive = Bl.prototype.Of;
  Bl.prototype.Gc = function (a, b) {
    if ("restrict-safesearch" == a) this.qb = b ? ("active" == b || "off" == b ? b : null) : null;
    else if ("restrict-extended" == a)
      if (b) for (var c in b) (a = b[c]), Dl[c] && (this.Ra[c] = a);
      else this.Ra = {};
  };
  Bl.prototype.setRestriction = Bl.prototype.Gc;
  var El = function (a) {
    var b = a.getElementsByClassName("gs-image-popup-box")[0];
    b && "block" != b.style.display && ((b.style.display = "block"), (a.style.zIndex = 4e3));
  };
  z("module$exports$cse$CustomImageSearch.showPopup", El);
  var Fl = function (a) {
    (a = a.getElementsByClassName("gs-image-popup-box")[0]) &&
      "none" != a.style.display &&
      ((a.style.display = "none"), (a.parentElement.style.zIndex = 0));
  };
  z("module$exports$cse$CustomImageSearch.hidePopup", Fl);
  Bl.prototype.Ka = function (a) {
    R.prototype.Ka.call(this, a);
  };
  Bl.prototype.setLinkTarget = Bl.prototype.Ka;
  Bl.prototype.cc = function (a) {
    R.prototype.cc.call(this, a);
  };
  Bl.prototype.setQueryAddition = Bl.prototype.cc;
  Bl.prototype.Ie = function (a) {
    this.lb = Array.isArray(a) && 0 != a.length ? a : null;
  };
  Bl.prototype.setExperiments = Bl.prototype.Ie;
  Bl.prototype.iy = function (a) {
    Va();
    Al = { Rl: function () {}, render: a, qr: function () {}, gy: function () {} };
  };
  Bl.prototype.overrideRenderForTesting = Bl.prototype.iy;
  var U = function () {
    R.call(this);
    this.Oa = "web";
    this.lb = this.Ta = this.qb = null;
    this.Ra = {};
    this.X = new xl();
    this.kb = null;
    this.Xb = new wi();
  };
  Ej(U, R);
  var Gl = [],
    Hl = {
      as_dt: !0,
      as_epq: !0,
      as_eq: !0,
      as_filetype: !0,
      as_lq: !0,
      as_nlo: !0,
      as_nhi: !0,
      as_oq: !0,
      as_q: !0,
      as_qdr: !0,
      as_rights: !0,
      as_rq: !0,
      as_sitesearch: !0,
      cr: !0,
      c2coff: !0,
      filter: !0,
      gl: !0,
      hq: !0,
      lr: !0,
      query: !0,
      richsnippet: !0,
      sort: !0,
      usg: !0,
    },
    Il = function (a, b, c, d, e) {
      var f = 0;
      a && (f = parseInt(a, 10));
      a = ul(Gl, f, b);
      Gl[f] = null;
      a.ra.qd(b, c, d, e, a.Yp);
    };
  z("module$exports$cse$CustomWebSearch.RawCompletion", Il);
  U.prototype.ri = function () {
    var a = new U();
    this.Bm(a);
    a.qb = this.qb;
    a.Ta = this.Ta;
    a.lb = this.lb;
    a.Ra = this.Ra;
    a.X = this.X.clone();
    a.M = this.M;
    a.kb = this.kb;
    return a;
  };
  U.prototype.Ak = function (a) {
    var b = vl(Gl, [this, null, null]);
    Il(b, a, 200, void 0, 200);
  };
  U.prototype.renderJson = U.prototype.Ak;
  g = U.prototype;
  g.me = function (a) {
    a = a.replace(/\s+$/, "").replace(/^\s+/, "");
    return a.replace(/\s+/g, "_").toLowerCase();
  };
  g.ee = function (a) {
    return this.M ? this.X.td() == this.me(a) : !1;
  };
  g.Zb = function (a) {
    var b = this.X.td();
    return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a;
  };
  g.ci = function (a, b) {
    return vl(Gl, [this, a, b]);
  };
  g.jf = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    null == b && (b = "CustomWebSearch.RawCompletion");
    a = [a];
    this.sd && a.push(this.sd);
    a = a.concat(this.X.Zh()).join(" ");
    var e = this.X.Yh(),
      f = [];
    for (h in e) f.push(h + "=" + e[h]);
    var h = "&" + f.join("&");
    h += "&q=" + encodeURIComponent(a);
    d
      ? (h += "&safe=active")
      : "off" === this.Ta || "active" === this.Ta
      ? (h += "&safe=" + this.Ta)
      : this.qb && (h += "&safe=" + this.qb);
    this.kb && (h += "&cse_tok=" + this.kb);
    this.Ra && ((a = Pd(this.Ra)), d && Od(a, "as_sitesearch"), (d = ik(a)) && (h += "&" + d));
    this.lb && (h += "&exp=" + this.lb.join());
    b = this.Wp(b, c);
    b += h;
    this.jd = h;
    c && 0 != c && (this.jd = this.jd + "&start=" + c);
    window.google.loader.GoogleLocale &&
      (b =
        this.Qb && this.M
          ? b + ("&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale))
          : b + ("&gl=" + encodeURIComponent(window.google.loader.GoogleLocale)));
    return b;
  };
  g.Kt = function (a, b) {
    var c = Sj({ text: sj(a.visibleUrl), className: "gs-visibleUrl" });
    E(b, c);
    B(c, "gs-visibleUrl-short");
    a = Sj({ text: sj(a.url), className: "gs-visibleUrl" });
    E(b, a);
    B(a, "gs-visibleUrl-long");
  };
  g.wi = function (a) {
    a.html && delete a.html;
    var b = L("gs-promotion");
    B(b, "gs-result");
    var c = L("gs-promotion-table");
    E(b, c);
    if (a.image) {
      var d = a.image.url.replace("resize_w=40", "resize_w=60").replace("resize_h=40", "resize_h=60");
      d = Xj(d, null, null, "gs-promotion-image");
      if (a.url) {
        var e = Yj(a.url, "", this.nf());
        a.clicktrackUrl && Jl(e, a.clicktrackUrl, a.url);
        E(e, d);
        d = e;
      }
      e = d;
    }
    d = null;
    a.clicktrackUrl && ((d = {}), (d["data-cturl"] = a.clicktrackUrl), (d["data-ctorig"] = a.url));
    d = Zj(a.url, a.title, this.nf(), "gs-title", void 0, d);
    if (a.titleRight) {
      var f = Tj("", "gs-promotion-title-right");
      ci(f, this.Xb.Ia(" " + a.titleRight));
      E(d, f);
    }
    d.dir = vj(d.innerHTML);
    B(d, "gs-bidi-start-align");
    var h = L(a.image ? "" : "gs-promotion-text-cell");
    E(c, h);
    E(h, d);
    U.prototype.Kt(a, h);
    c = L();
    if (e) {
      f = L("gs-promotion-table-snippet-with-image");
      E(h, f);
      h = L("gs-promotion-image-cell");
      var k = L("gs-promotion-image-box");
      E(k, e);
      E(h, k);
      E(f, h);
      B(c, "gs-promotion-text-cell-with-image");
      E(f, c);
    } else a.bodyLines && E(h, c);
    if (a.bodyLines)
      for (e = a.bodyLines, f = "right" == a.bodyLinkAlignment, h = 0; h < e.length; h++) {
        var l = e[h],
          m = l.title,
          r = l.url,
          t = l.visibleUrl;
        k = void 0;
        m && ((k = Tj("")), ci(k, this.Xb.Ia(m)));
        m = void 0;
        r &&
          t &&
          ((m = Yj(r, "", this.nf())),
          l.clicktrackUrl && Jl(m, l.clicktrackUrl, r),
          (l = Tj("", "gs-title")),
          ci(l, this.Xb.Ia(t)),
          E(m, l));
        t = L("gs-snippet");
        k && f && (E(t, k), m && E(t, Rj(" ")));
        m && E(t, m);
        k && !f && (m && E(t, Rj(" ")), E(t, k));
        t.dir = vj(d.innerHTML);
        B(t, "gs-bidi-start-align");
        E(c, t);
      }
    a.html = b;
  };
  U.prototype.createPromotionHtml = U.prototype.wi;
  U.prototype.ui = function (a) {
    delete a.html;
    0 < a.display_facets.length && (a.html = (0, Vk.render)("facets", a));
  };
  U.prototype.createFacetResultHtml = U.prototype.ui;
  U.prototype.cf = function (a) {
    a.html && delete a.html;
    a.target = this.nf() || void 0;
    a.title = a.title || a.visibleUrl;
    a.html = (0, Vk.render)("webResult", a);
    if (a.clicktrackUrl)
      for (var b = a.html.firstChild; b; b = b.nextSibling)
        if (1 == b.nodeType) {
          "a" == b.tagName.toLowerCase() && b.href == a.unescapedUrl && Jl(b, a.clicktrackUrl, a.unescapedUrl);
          for (var c = b.getElementsByTagName("a"), d = 0, e; (e = c[d]); d++)
            e.href == a.unescapedUrl && Jl(e, a.clicktrackUrl, a.unescapedUrl);
        }
    this.Sl(a.html);
  };
  U.prototype.createResultHtml = U.prototype.cf;
  var Jl = function (a, b, c) {
    a.setAttribute("data-cturl", b);
    a.setAttribute("data-ctorig", c);
  };
  U.prototype.Pf = function (a, b) {
    this.Pd = null;
    this.X = zl(a, b);
    this.X instanceof yl && (this.M = !0);
  };
  U.prototype.setSiteRestriction = U.prototype.Pf;
  g = U.prototype;
  g.ug = function () {
    return this.M ? this.X.type() : null;
  };
  g.ef = function () {
    return this.M ? this.X.Jk() : null;
  };
  g.pc = function () {
    return this.M ? this.X.td() : null;
  };
  g.Qk = function (a) {
    this.M && a && this.X.Xk(a);
  };
  g.Mf = function (a) {
    a && (this.kb = a);
  };
  g.Of = function (a) {
    this.Ta = a;
  };
  U.prototype.setIsSafeSearchActive = U.prototype.Of;
  U.prototype.Gc = function (a, b) {
    "restrict-safesearch" == a && (this.qb = b ? ("active" == b || "off" == b || "moderate" == b ? b : null) : null);
    if ("restrict-extended" == a)
      if (b) for (var c in b) (a = b[c]), Hl[c] && (this.Ra[c] = a);
      else this.Ra = {};
  };
  U.prototype.setRestriction = U.prototype.Gc;
  U.prototype.La = function (a) {
    this.dr(a, { ik: 1, dk: 20 });
  };
  U.prototype.setResultSetSize = U.prototype.La;
  U.prototype.Ka = function (a) {
    R.prototype.Ka.call(this, a);
  };
  U.prototype.setLinkTarget = U.prototype.Ka;
  U.prototype.cc = function (a) {
    R.prototype.cc.call(this, a);
  };
  U.prototype.setQueryAddition = U.prototype.cc;
  U.prototype.Ie = function (a) {
    this.lb = Array.isArray(a) && 0 != a.length ? a : null;
  };
  U.prototype.setExperiments = U.prototype.Ie;
  var Nl = function (a, b) {
      this.Bl = !(!window.history || !window.history.pushState);
      this.Cl = Kl();
      this.Yi = this.Bl || this.Cl;
      var c = window.location.href;
      this.Us = 0 <= c.indexOf("#") ? c.substring(0, c.indexOf("#")) : c;
      this.Ej = !1;
      this.Ux = b;
      b = Ll(Ml());
      this.Yj = b.mp;
      this.kd = b.state;
      if (this.Yi) {
        b = Lj(this, Nl.prototype.Yx);
        this.Bl && window.addEventListener
          ? (window.addEventListener("popstate", b, !1), window.addEventListener("hashchange", b, !1))
          : this.Cl &&
            (window.addEventListener
              ? window.addEventListener("hashchange", b, !1)
              : window.attachEvent && window.attachEvent("onhashchange", b));
        b = !1;
        for (var d in this.kd) {
          b = !0;
          break;
        }
        b ? this.wn() : this.jr(a, !0);
      }
    },
    Kl = function () {
      return "onhashchange" in window && (!gc || 8 <= document.documentMode);
    };
  g = Nl.prototype;
  g.isEnabled = function () {
    return this.Yi;
  };
  g.pushState = function (a) {
    this.Yi && !this.Ej && this.jr(a, !1);
  };
  g.jr = function (a, b) {
    var c = {};
    for (d in a) Ol[d] && (c[d] = a[d]);
    a = c;
    if (!Pl(this.kd, a)) {
      var d = (this.kd = a);
      a = [];
      for (var e in d) null != d[e] && Ol[e] && a.push(encodeURIComponent(e) + "=" + encodeURIComponent(d[e]));
      d = a.join("&");
      this.Yj && (d = this.Yj + "&" + d);
      this.Bl
        ? ((e = document.title || ""),
          (d = "#" + d),
          b ? window.history.replaceState(null, e, d) : window.history.pushState(null, e, d))
        : this.Cl && ((e = this.Us + "#" + d), b ? window.location.replace(e) : ei(window.location, ii(e)));
    }
  };
  g.getState = function () {
    var a = {},
      b;
    for (b in this.kd) a[b] = this.kd[b];
    return a;
  };
  g.Yx = function () {
    var a = Ll(Ml());
    this.Yj = a.mp;
    Pl(this.kd, a.state) || ((this.kd = a.state), this.wn());
  };
  g.wn = function () {
    this.Ej = !0;
    this.Ux(this.getState());
    this.Ej = !1;
  };
  var Ml = function () {
      var a = window.location.href,
        b = a.indexOf("#");
      return 0 > b ? "" : a.substring(b + 1);
    },
    Pl = function (a, b) {
      for (var c in a) if (a[c] !== b[c]) return !1;
      for (var d in b) if (!a.hasOwnProperty(d)) return !1;
      return !0;
    },
    Ll = function (a) {
      var b = {};
      a = a.split("&");
      for (var c = [], d = 0; d < a.length; d++) {
        var e = a[d],
          f = e.indexOf("="),
          h = !1;
        if (-1 != f) {
          var k = decodeURIComponent(e.substr(0, f));
          Ol[k] &&
            ((f = decodeURIComponent(e.substr(f + 1))),
            Ql[k] ? ((f = parseInt(f, 10)), isNaN(f) || (b[k] = f)) : (b[k] = f),
            (h = !0));
        }
        h || c.push(e);
      }
      return { state: b, mp: c.join("&") };
    },
    Ol = { "gsc.q": !0, "gsc.tab": !0, "gsc.page": !0, "gsc.ref": !0, "gsc.sort": !0 },
    Ql = { "gsc.tab": !0, "gsc.page": !0 };
  var Rl = function (a) {
    if (!a) return a;
    var b = [
        ["url", "url"],
        [
          "clicktrackUrl",
          function (t) {
            return ["url", "https://www.google.com" + t];
          },
        ],
        ["title", "title"],
        ["visibleUrl", "visibleUrl"],
      ],
      c = [["title", "content"]],
      d = [
        ["url", "url"],
        ["width", "width"],
        ["height", "height"],
      ],
      e = [];
    a = q(a);
    for (var f = a.next(); !f.done; f = a.next()) {
      var h = f.value;
      f = {};
      for (var k = q(b), l = k.next(); !l.done; l = k.next()) {
        var m = q(l.value);
        l = m.next().value;
        m = m.next().value;
        h[l] &&
          ("function" === typeof m
            ? ((m = q(m(h[l]))), (l = m.next().value), (m = m.next().value), (f[l] = m))
            : (f[m] = h[l]));
      }
      if (h.bodyLines && 0 < h.bodyLines.length)
        for (k = h.bodyLines[0], l = q(c), m = l.next(); !m.done; m = l.next()) {
          var r = q(m.value);
          m = r.next().value;
          r = r.next().value;
          k[m] && (f[r] = k[m]);
        }
      if (h.image)
        for (h = h.image, k = {}, f.image = k, l = q(d), m = l.next(); !m.done; m = l.next())
          (r = q(m.value)), (m = r.next().value), (r = r.next().value), h[m] && (k[r] = h[m]);
      e.push(f);
    }
    return e;
  };
  for (
    var Sl = {
        BUBBLEGUM: "//www.google.com/cse/static/style/look/bubblegum.css",
        V2_BUBBLEGUM: "//www.google.com/cse/static/style/look/v2/bubblegum.css",
        GREENSKY: "//www.google.com/cse/static/style/look/greensky.css",
        V2_GREENSKY: "//www.google.com/cse/static/style/look/v2/greensky.css",
        ESPRESSO: "//www.google.com/cse/static/style/look/espresso.css",
        V2_ESPRESSO: "//www.google.com/cse/static/style/look/v2/espresso.css",
        SHINY: "//www.google.com/cse/static/style/look/shiny.css",
        V2_SHINY: "//www.google.com/cse/static/style/look/v2/shiny.css",
        MINIMALIST: "//www.google.com/cse/static/style/look/minimalist.css",
        V2_MINIMALIST: "//www.google.com/cse/static/style/look/v2/minimalist.css",
        V2_DEFAULT: "//www.google.com/cse/static/style/look/v2/default.css",
      },
      Tl = q(Object.entries(Sl)),
      Ul = Tl.next();
    !Ul.done;
    Ul = Tl.next()
  ) {
    var Vl = q(Ul.value),
      Wl = Vl.next().value,
      Xl = Vl.next().value;
    z("google.loader.themes." + Wl, Xl);
  }
  var Yl = /^[6-9]$/,
    Zl = /<\/?(?:b|em)>/gi,
    $l = { es: 8, Hl: 9, Gl: 13, Th: 27, hD: 32, bs: 37, ds: 38, cs: 39, Zr: 40, fs: 46, UC: 190 };
  var am = function (a) {
      return {
        contains: function (b) {
          return b in a;
        },
        tE: function (b) {
          return !!a[b];
        },
        Av: function (b) {
          return a[b] || 0;
        },
        Xc: function (b) {
          return a[b] || "";
        },
        Bv: function (b) {
          return a[b] || null;
        },
      };
    },
    bm = am({});
  var cm = function (a, b, c, d, e, f) {
    function h(m) {
      if (e) for (var r = 0, t; (t = m[r++]); ) for (var v = 0; v < e.length; ++v) if (t == e[v]) return !0;
      return !1;
    }
    var k = !1,
      l = {
        jv: function () {
          return a;
        },
        Zc: function () {
          return b;
        },
        sj: function () {
          return c;
        },
        getType: function () {
          return d;
        },
        po: function () {
          return f.Xc("za");
        },
        GE: function () {
          return f.Xc("zb");
        },
        Ov: function () {
          return e || [];
        },
        OE: function (m) {
          return !!e && h([m]);
        },
        KE: h,
        getParameters: function () {
          return f;
        },
        Wn: function () {
          return k;
        },
      };
    switch (d) {
      case 0:
      case 32:
      case 38:
      case 400:
      case 407:
      case 35:
      case 33:
      case 41:
      case 34:
      case 44:
      case 45:
      case 40:
      case 46:
      case 56:
      case 30:
      case 411:
      case 410:
      case 71:
        k = !0;
    }
    f || (f = bm);
    return l;
  };
  var dm = /\s/g,
    em = /\u3000/g,
    fm = /^\s/,
    gm = /\s+/,
    hm = /\s+/g,
    im = /^\s+|\s+$/g,
    jm = /^\s+$/,
    km = /<[^>]*>/g,
    lm = /&nbsp;/g,
    mm = /&#x3000;/g,
    nm = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
    om = document.getElementsByTagName("head")[0],
    pm = 0,
    qm = 1,
    rm = function (a) {
      var b = {};
      if (a) for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
      return b;
    },
    sm = function () {
      return new Date().getTime();
    },
    tm = function (a, b) {
      void 0 === b && (b = a);
      var c = function () {
        return b;
      };
      return {
        Mg: c,
        oo: function () {
          return a;
        },
        Jv: c,
        NE: function () {
          return a < b;
        },
        pE: function (d) {
          return d && a == d.oo() && b == d.Jv();
        },
      };
    },
    um = function (a, b, c, d) {
      if (null == b || "" === b) {
        if (!d) return;
        b = "";
      }
      c.push(a + "=" + encodeURIComponent(String(b)));
    },
    vm = function (a, b) {
      var c = [],
        d;
      for (d in a) um(d, a[d], c, b);
      return c.join("&");
    },
    wm = function (a) {
      for (var b = nm.length, c = 0; c < b; c += 2) a = a.replace(nm[c], nm[c + 1].source);
      return a;
    },
    xm = function (a) {
      for (var b = nm.length, c = 0; c < b; c += 2) a = a.replace(nm[c + 1], nm[c].source);
      a = a.replace(lm, " ");
      return a.replace(mm, "\u3000");
    },
    ym = function (a, b) {
      return a && (-1 < a.indexOf(" ") || gm.test(a)) ? ((a = a.replace(hm, " ")), a.replace(b ? im : fm, "")) : a;
    },
    zm = function (a, b, c) {
      c && ((a = a.toLowerCase()), (b = b.toLowerCase()));
      return b.length <= a.length && a.substring(0, b.length) == b;
    },
    Am = function () {},
    Bm = function (a, b) {
      if (b.indexOf) return b.indexOf(a);
      for (var c = 0, d = b.length; c < d; ++c) if (b[c] === a) return c;
      return -1;
    },
    Cm = function (a, b) {
      return b.mb() - a.mb();
    },
    Dm = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    };
  var Em = Nb(),
    Fm = Em && !(0 <= yb(Tb(), 9)),
    Gm = Em && !(0 <= yb(Tb(), 8)),
    Hm = Em && 0 <= yb(Tb(), 10),
    Im = dc();
  Im && Tb();
  var Jm = Lb(),
    Km = cc(),
    Lm = Qb(),
    Mm = Rb();
  (zb && Hb
    ? Hb.mobile
    : !(zb && Hb
        ? !Hb.mobile && (A("iPad") || A("Android") || A("Silk"))
        : A("iPad") || (A("Android") && !A("Mobile")) || A("Silk")) &&
      (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))) && Qb();
  var Nm = zb && Hb && Hb.platform ? "Android" === Hb.platform : A("Android"),
    Om = zb && Hb && Hb.platform ? "macOS" === Hb.platform : A("Macintosh");
  var Pm = void 0 != document.documentElement.style.opacity,
    Qm = { rtl: "right", ltr: "left" };
  function Rm(a, b) {
    try {
      if (a.setSelectionRange) a.setSelectionRange(b, b);
      else if (a.createTextRange) {
        var c = a.createTextRange();
        c.collapse(!0);
        c.moveStart("character", b);
        c.select();
      }
    } catch (d) {}
  }
  function Sm(a, b) {
    for (var c = 0, d = 0; a && (!b || a != b); ) {
      c += a.offsetTop;
      d += a.offsetLeft;
      try {
        a = a.offsetParent;
      } catch (e) {
        a = null;
      }
    }
    return { Re: c, Fb: d };
  }
  function Tm(a, b, c) {
    a = document.createElement(a);
    b && (a.className = b);
    c && (a.id = c);
    return a;
  }
  function Um() {
    var a = Tm("table");
    a.cellPadding = a.cellSpacing = 0;
    a.style.width = "100%";
    a.setAttribute("role", "presentation");
    return a;
  }
  function Vm(a) {
    return Tm("div", a);
  }
  function Wm(a, b) {
    a.innerHTML != b &&
      (b &&
        (Gm
          ? b && (-1 < b.indexOf(" ") || gm.test(b)) && ((b = b.replace(em, "&#x3000;")), (b = b.replace(dm, "&nbsp;")))
          : Fm && (b = '<pre style="font:inherit;margin:0">' + b + "</pre>")),
      ci(a, Bj(b)));
  }
  function Xm(a, b) {
    a.dir != b && ((a.dir = b), (a.style.textAlign = Qm[b]));
  }
  function Ym(a, b, c) {
    if (Zm(a, b)) return null;
    var d = Tm("input");
    d.type = "hidden";
    d.name = b;
    c && (d.value = c);
    a.appendChild(d);
    return d;
  }
  function Zm(a, b) {
    if ((a = a.getElementsByTagName("input")))
      for (var c, d = 0; (c = a[d++]); ) if (c.name == b && "submit" != c.type.toLowerCase()) return c;
    return null;
  }
  function $m(a) {
    a && (a.preventDefault && a.preventDefault(), (a.returnValue = !1));
    return !1;
  }
  function an(a) {
    if ((a = a || window.event)) a.stopPropagation && a.stopPropagation(), (a.cancelBubble = a.cancel = !0);
    return $m(a);
  }
  function bn(a) {
    a = a.insertCell(-1);
    var b = Tm("a"),
      c = ai("#ifl");
    void 0 !== c && (b.href = c);
    b.className = "gssb_j gss_ifl";
    a.appendChild(b);
    return b;
  }
  function cn(a) {
    var b = a || window;
    a = b.document;
    var c = b.innerWidth;
    b = b.innerHeight;
    if (!c) {
      var d = a.documentElement;
      d && ((c = d.clientWidth), (b = d.clientHeight));
      c || ((c = a.body.clientWidth), (b = a.body.clientHeight));
    }
    return { Vr: c, Eo: b };
  }
  function dn(a) {
    var b = {};
    if (a) for (var c, d = 0; (c = a[d++]); ) b[c.lo()] = c;
    return b;
  }
  function en(a) {
    return a ? a.ownerDocument || a.document : window.document;
  }
  function fn(a) {
    return a ? ((a = en(a)), a.defaultView || a.parentWindow) : window;
  }
  function gn() {
    return Pm ? "opacity" : "filter";
  }
  function hn(a) {
    return Pm
      ? a + ""
      : (Gm ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(") + "opacity=" + Math.floor(100 * a) + ")";
  }
  var jn = function () {
      var a = function () {
          return 5;
        },
        b = function (c, d, e) {
          e.push({
            getType: function () {
              return 505;
            },
            position: 1,
          });
        };
      return {
        getType: function () {
          return 153;
        },
        ab: function () {
          return { mb: a, wv: b };
        },
      };
    },
    ln = function (a, b, c) {
      var d,
        e = function () {
          return kn(a, b, c, d);
        },
        f = function (k, l) {
          l.render(k);
        },
        h = function () {
          return 505;
        };
      return {
        Ja: function (k) {
          d = k.Zd();
        },
        getType: function () {
          return 152;
        },
        ab: function () {
          return { Km: e, render: f, uf: Am, wo: Am, lo: h };
        },
      };
    },
    kn = function (a, b, c, d) {
      var e,
        f = {
          getType: function () {
            return 505;
          },
          qa: function () {
            return e;
          },
          render: Am,
        };
      (function () {
        e = Vm();
        e.style.textAlign = "ltr" == d ? "right" : "left";
        var h = Tm("img");
        h.src = a;
        h.srcset = b + " 2x";
        h.style.verticalAlign = "middle";
        "ltr" == d ? (h.style.paddingRight = "1px") : (h.style.paddingLeft = "1px");
        e.appendChild(h);
        h = Tm("span");
        h.style.color = "#b5b5b5";
        h.style.fontSize = "12px";
        h.style.verticalAlign = "middle";
        ci(h, Vi.Ec(""));
        h.appendChild(document.createTextNode(c));
        e.appendChild(h);
      })();
      return f;
    };
  var mn = function (a) {
    var b,
      c = function (e) {
        var f = 1;
        if (b) {
          var h = e.ro();
          "focus" == h || "blur" == h || "mousedown" == h ? (f = 3) : (e.xh("partnerid", a), e.Wk("types", "t"));
        }
        return f;
      },
      d = function () {
        return 10;
      };
    return {
      J: function () {
        b = !0;
      },
      getType: function () {
        return 156;
      },
      ab: function () {
        return { jo: c, mb: d };
      },
    };
  };
  var nn = function () {
      this.Gd = {};
    },
    on = rm([155, 149, 153, 154, 311, 152, 156, 122, 151, 158, 294, 160]);
  nn.prototype.set = function (a, b) {
    this.Gd[a] = b;
  };
  nn.prototype.fc = function (a, b) {
    a in this.Gd || (this.Gd[a] = []);
    this.Gd[a].push(b);
  };
  var pn = function (a, b, c, d, e, f) {
      this.L = a;
      this.iu = b;
      this.Da = c;
      this.Ai = d;
      this.uh = e;
      this.C = f;
      this.Nb = {};
      this.si = {};
      this.Ii = new nn();
      this.Ml = [];
      this.ic = [];
      this.Eb = !1;
      this.ge();
    },
    qn = [
      127, 149, 134, 494, 123, 121, 126, 553, 118, 115, 128, 160, 173, 119, 116, 152, 153, 129, 120, 374, 124, 158, 155,
      131, 130, 147, 570, 141, 142, 137, 143, 138, 144, 139, 140, 135, 136,
    ];
  g = pn.prototype;
  g.J = function (a) {
    this.Ca();
    for (var b = 0, c; (c = this.ic[b++]); ) c.J && c.J(a);
    this.Eb = !0;
  };
  g.Ca = function () {
    if (this.Eb) {
      for (var a = 0, b; (b = this.ic[a++]); ) b.Ca && b.Ca();
      this.Eb = !1;
    }
  };
  g.isActive = function () {
    return this.Eb;
  };
  g.get = function (a, b) {
    if ((a = this.Nb[a])) return this.Kn(a, this.Ln(b));
  };
  g.Sa = function (a, b) {
    if ((a = this.si[a])) {
      var c = [];
      b = this.Ln(b);
      for (var d = 0, e; (e = a[d++]); ) c.push(this.Kn(e, b));
      return c;
    }
    return [];
  };
  g.Tp = function (a) {
    a = a.Gd;
    for (var b in a) {
      var c = b,
        d = a[c];
      on[c] ? this.Rz(c, d) : this.Qz(c, d);
    }
  };
  g.Qz = function (a, b) {
    (b = this.bo(a, b)) && (this.Nb[a] = b);
  };
  g.Rz = function (a, b) {
    for (var c = this.si[a] || [], d = 0, e; d < b.length; ++d) (e = this.bo(a, b[d])) && c.push(e);
    this.si[a] = c;
  };
  g.bo = function (a, b) {
    if (!(b instanceof Object)) return null;
    if (b.Vd) {
      var c = b.Vd();
      c && this.Lz(c);
    }
    b.getType();
    this.Jz(b, a);
    this.ic.push(b);
    return b;
  };
  g.Kn = function (a, b) {
    return a.ab ? a.ab(b) : {};
  };
  g.Jz = function (a, b) {
    this.Ml.push([a, b]);
  };
  g.Ln = function (a) {
    for (var b = 0, c = 0, d; (d = this.Ml[c++]); ) d[0] == a && (b = d[1]);
    return b;
  };
  g.Lz = function (a) {
    for (var b = 0, c; (c = a[b++]); ) {
      var d = c.getType();
      on[d] ? this.Ii.fc(d, c) : this.Ii.set(d, c);
    }
  };
  var rn = function (a, b) {
    a = Bm(a.getType(), qn);
    b = Bm(b.getType(), qn);
    return 0 > a ? 1 : 0 > b ? -1 : a - b;
  };
  pn.prototype.ge = function () {
    this.Tp(this.iu);
    this.Tp(this.Ii);
    this.ic.sort(rn);
    for (var a = 0, b; (b = this.ic[a++]); ) b.Ja && b.Ja(this.Da, this.Ai);
    this.L.jk(this.Ai, this.Da.hg());
    this.Ai.Ls();
    for (a = 0; (b = this.ic[a++]); ) b.aa && b.aa(this);
    for (a = 0; (b = this.ic[a++]); ) b.ya && b.ya(this.C);
    for (a = 0; (b = this.ic[a++]); ) b.J && b.J(this.C);
    this.Eb = !0;
  };
  function sn(a) {
    var b;
    (function () {
      var c = function () {};
      a || (a = {});
      var d = function (e) {
        return a[e] || c;
      };
      b = {
        search: d("b"),
        lh: d("c"),
        redirect: d("d"),
        Ng: d("e"),
        zg: d("f"),
        Qi: d("g"),
        Ri: d("h"),
        Mi: d("i"),
        Si: d("j"),
        yg: d("k"),
        Ni: d("l"),
        Nr: d("n"),
        Ti: d("o"),
        Ui: d("p"),
        wg: d("q"),
        jk: d("r"),
        an: d("s"),
        bn: d("t"),
        Pi: d("u"),
        Vi: d("w"),
        Ji: d("x"),
        Oi: d("y"),
        Li: d("z"),
        Ki: d("aa"),
        Wi: d("ab"),
        dl: d("ac"),
      };
    })();
    return {
      search: function (c, d) {
        b.search(c, d);
      },
      lh: function (c) {
        b.lh(c);
      },
      redirect: function (c) {
        b.redirect(c);
      },
      Ng: function (c) {
        return b.Ng(c);
      },
      zg: function (c) {
        b.zg(c);
      },
      Qi: function (c) {
        b.Qi(c);
      },
      Ri: function (c) {
        b.Ri(c);
      },
      Mi: function (c) {
        b.Mi(c);
      },
      Si: function (c, d) {
        b.Si(c, d);
      },
      yg: function (c, d) {
        b.yg(c, d);
      },
      Ni: function () {
        b.Ni();
      },
      Nr: function (c) {
        b.Nr(c);
      },
      Ti: function () {
        b.Ti();
      },
      Ui: function () {
        b.Ui();
      },
      wg: function (c) {
        b.wg(c);
      },
      jk: function (c, d) {
        b.jk(c, d);
      },
      an: function (c) {
        b.an(c);
      },
      bn: function () {
        b.bn();
      },
      Pi: function () {
        b.Pi();
      },
      Oi: function () {
        b.Oi();
      },
      Vi: function (c) {
        b.Vi(c);
      },
      Ji: function () {
        b.Ji();
      },
      Li: function () {
        b.Li();
      },
      Ki: function () {
        b.Ki();
      },
      Wi: function () {
        b.Wi();
      },
      dl: function (c, d) {
        return b.dl(c, d);
      },
    };
  }
  function tn(a, b, c, d, e) {
    var f = Im ? "-moz-" : Em ? "-ms-" : Jm ? "-o-" : Km ? "-webkit-" : "",
      h = ".gstl_" + d,
      k = new RegExp("(\\.(" + e.join("|") + ")\\b)"),
      l = [];
    return {
      addRule: function (m, r) {
        if (b) {
          if (c) {
            m = m.split(",");
            for (var t = [], v = 0, x; (x = m[v++]); )
              (x = k.test(x) ? x.replace(k, h + "$1") : h + " " + x), t.push(x);
            m = t.join(",");
          }
          l.push(m, "{", r, "}");
        }
      },
      Ls: function () {
        if (b && l.length) {
          b = !1;
          var m = Tm("style");
          m.setAttribute("type", "text/css");
          (a || om).appendChild(m);
          var r = l.join("");
          l = null;
          m.styleSheet ? (m.styleSheet.cssText = r) : ((r = document.createTextNode(r)), m.appendChild(r));
        }
      },
      prefix: function (m, r) {
        var t = m + (r || "");
        f && (t += r ? m + f + r : f + m);
        return t;
      },
    };
  }
  var un = function (a, b, c, d, e) {
    function f() {
      M.Ca();
    }
    function h(n) {
      T.Lb(n || "");
    }
    function k() {
      return T.pa();
    }
    function l() {
      return Ca.sf();
    }
    function m() {
      aa.ta(8);
    }
    function r(n) {
      return P.getParameters(n);
    }
    function t() {
      return ca || (!!H && H.Nc());
    }
    function v() {
      return W.kp;
    }
    function x(n) {
      n = fn(n.wr || om);
      void 0 == n.nextSearchboxId && (n.nextSearchboxId = 50);
      return n.nextSearchboxId++;
    }
    function Q() {
      if (a)
        for (var n = a; (n = n.parentNode); ) {
          var p = n.dir;
          if (p) return p;
        }
      return "ltr";
    }
    function X(n) {
      n = Dm(n);
      n.ol[35] || (n.HB = "");
      var p = n.Ep;
      p ? (n.Ep = p.toLowerCase()) : (n.Aw = !1);
      n.hj && !n.on && (n.hj = !1);
      Mm || (n.ep = !1);
      return n;
    }
    function S() {
      var n = fn(a),
        p = cn(n);
      aa.xc(n, "resize", function () {
        var K = cn(n);
        if (K.Vr != p.Vr || K.Eo != p.Eo) (p = K), m();
      });
    }
    function sa(n) {
      var p = n.Bg,
        K = p[135],
        pa = p[138],
        N = p[139];
      p[136] || N || K || pa ? ((n.Bg[136] = !0), (n.Bg[141] = !0), (D = pa ? 3 : 1)) : (D = 0);
    }
    var M,
      H,
      da,
      aa,
      ja,
      T,
      F,
      W,
      P,
      ea,
      wa,
      Ea,
      kb,
      Ca,
      Ja,
      ya,
      u,
      D,
      C = !1,
      ca,
      I = {
        install: function (n) {
          if (!C) {
            n = X(n);
            u = null == e ? x(n) : e;
            var p = en(a),
              K = Q(),
              pa = !!p.getElementById("gs_id" + u),
              N = ["gssb_c", "gssb_k"];
            n.tl && N.push(n.tl);
            N = tn(n.wr, n.Ew, n.nu, u, N);
            sa(n);
            ca = n.Nc;
            M = new pn(
              xa,
              d,
              {
                hg: function () {
                  return pa;
                },
                get: function (qa) {
                  return p.getElementById(qa + u);
                },
                mj: function (qa) {
                  return p.getElementById(qa);
                },
                Sn: function () {
                  return b;
                },
                Zd: function () {
                  return K;
                },
                ua: function (qa) {
                  return qa + u;
                },
                Yn: function () {
                  return a;
                },
              },
              N,
              I,
              n
            );
            M.get(347, I);
            H = M.get(130, I);
            da = M.get(115, I);
            aa = M.get(117, I);
            ja = M.get(123, I);
            T = M.get(118, I);
            F = M.get(119, I);
            W = M.get(374, I);
            P = M.get(120, I);
            ea = M.get(189, I);
            wa = M.get(553, I);
            M.get(124, I);
            Ea = M.get(419, I);
            kb = M.get(126, I);
            Ca = M.get(128, I);
            Ja = M.get(139, I);
            ya = M.get(121, I);
            S();
            C = !0;
          }
        },
        J: function (n) {
          f();
          n = X(n);
          sa(n);
          ca = n.Nc;
          M.J(n);
        },
        Ca: f,
        xE: function () {
          return b;
        },
        ts: function (n, p) {
          return Ym(n, p);
        },
        Ab: function () {
          return T.Ab();
        },
        pa: k,
        cd: function () {
          return Ca.cd();
        },
        vf: function () {
          return Ca.vf();
        },
        tv: r,
        Dv: function (n, p) {
          n || (n = P.getParameters(p));
          return vm(n);
        },
        eF: function () {
          return Ca.isVisible();
        },
        Bs: function (n, p) {
          aa.xc(n, "click", function (K) {
            ya.search(k(), p);
            return $m(K);
          });
        },
        mi: function () {
          ja.mi();
        },
        jE: function () {
          Ca.Bi();
        },
        ll: function (n) {
          T.ll(n || "");
        },
        wE: function () {
          return da.Ub();
        },
        bE: function () {
          T.clear();
        },
        Dq: function () {
          T.Dq();
        },
        focus: function () {
          F.focus();
        },
        blur: function () {
          F.blur();
        },
        Zo: function () {
          return ja.Zo();
        },
        Yd: function () {
          var n = kb.Yd();
          return n ? n.kv() : null;
        },
        Lb: h,
        Hf: function () {
          P.reset();
        },
        search: function (n, p) {
          ya.search(n, p);
        },
        OF: function () {
          Ja && Ja.refresh();
        },
        cG: function (n) {
          Ca.mA(n);
        },
        xg: function () {
          Ca.xg();
        },
        sf: l,
        wG: m,
        Kl: function () {
          T.Kl();
        },
        isActive: function () {
          return !!M && M.isActive();
        },
        NF: function () {},
        Nc: t,
        Zu: function () {
          return t() && H ? H.Zu() : "";
        },
        AE: function (n, p) {
          return Zm(n, p);
        },
        Zn: function () {
          return D;
        },
        ua: function () {
          return u;
        },
        cE: function () {
          Ja && Ja.clear();
        },
        bl: function (n, p) {
          h(n);
          Ca.isEnabled() && Ca.bl(n, p, !1);
        },
        YF: function (n) {
          aa.ta(15, { query: n });
        },
        Vj: function () {
          return F.Vj();
        },
        Zq: function (n) {
          wa.Zq(n);
        },
        zh: function (n) {
          da.zh(n);
        },
        po: function () {
          var n,
            p = kb.Yd();
          if (p) {
            var K = p.rj();
            K && ((n = K.po()) || (n = p.getParameters().Xc("o")));
          }
          return n || "";
        },
        SF: function (n, p) {
          return ea ? (ea.TF(n, p), !0) : !1;
        },
        DE: function (n, p) {
          switch (n) {
            case "oq":
            case "gs_l":
              return r(p)[n] || null;
            case "gs_ssp":
              a: {
                if ((n = l()) && 46 == n.getType() && (n = n.getParameters().Xc("g"))) break a;
                n = null;
              }
              return n;
            default:
              return null;
          }
        },
        bG: function () {},
        BE: v,
        wt: function (n) {
          return 6 == v() && !!Ea && Ea.wt(n);
        },
      };
    var xa = sn(c);
    return I;
  };
  var vn = function () {
    var a = function (b) {
      var c = { ND: b },
        d;
      for (d in b) c[d] = b[d];
      return c;
    };
    return {
      uj: function (b, c, d, e, f) {
        try {
          var h = un(b, c, d, e, f);
          return a(h);
        } catch (k) {
          return null;
        }
      },
      translate: function (b) {
        return a(b.api || b);
      },
    };
  };
  function wn() {}
  g = wn.prototype;
  g.Ja = function () {};
  g.aa = function () {};
  g.ya = function () {};
  g.J = function () {};
  g.ab = function () {
    return this;
  };
  g.Vd = function () {
    return null;
  };
  g.Ca = function () {};
  var xn = qm++,
    yn = function (a) {
      var b = this;
      this.Zl = a;
      this.oa = Vm();
      this.qh = function () {
        b.K.ux() || b.K.pa() ? b.Kj() : b.Zl && b.UA();
      };
      this.UA = function () {
        b.wa || (b.K.Ah(b.Zl), (b.wa = !0));
      };
      this.Kj = function () {
        if (b.wa || void 0 == b.wa) b.K.Ah("#fff"), (b.wa = !1);
      };
    };
  Ha(yn, wn);
  g = yn.prototype;
  g.Ja = function (a) {
    this.So = a.Yn();
  };
  g.aa = function (a) {
    a && ((this.R = a.get(117, this)), (this.K = a.get(118, this)));
  };
  g.ya = function () {
    this.R.Ha(this.So, "focus", this.Kj);
    this.R.Ha(this.So, "blur", this.qh);
    this.R.Cc(4, this.qh);
    this.R.Cc(5, this.qh);
  };
  g.J = function () {
    this.qh();
  };
  g.getType = function () {
    return 160;
  };
  g.Ca = function () {
    this.Kj();
  };
  g.isEnabled = function () {
    return this.eh;
  };
  g.Rg = function () {
    return xn;
  };
  g.mb = function () {
    return 5;
  };
  g.qa = function () {
    return this.oa;
  };
  g.zj = function () {
    return { Yo: !this.wa };
  };
  var zn = function () {
    function a(H, da, aa, ja) {
      var T = H.ua(),
        F = H.Vb();
      X.dn || e();
      da = r + t + v + "?" + (x ? x + "&" : "") + (da ? da + "&" : "");
      H = [];
      um("q", F, H, !0);
      X.Pr || um("callback", "google.sbox.p" + m, H);
      if (Q) {
        F = "";
        for (var W = 4 + Math.floor(32 * Math.random()), P, ea = 0; ea < W; ++ea)
          (P =
            0.3 > Math.random()
              ? 48 + Math.floor(10 * Math.random())
              : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random())),
            (F += String.fromCharCode(P));
        um("gs_gbg", F, H);
      }
      F = Tm("script");
      di(F, Dj(da + H.join("&")));
      F.charset = "utf-8";
      S[T] = F;
      sa = X.dn ? ja : aa;
      k.appendChild(F);
      return !0;
    }
    function b() {
      return 0;
    }
    function c() {
      return 0;
    }
    function d(H) {
      var da = S[H];
      da && (k.removeChild(da), delete S[H]);
    }
    function e() {
      for (var H in S) k.removeChild(S[H]);
      S = {};
      sa = null;
    }
    function f(H) {
      sa && sa(H);
    }
    function h(H) {
      H || (H = Am);
      var da = window.google;
      X.Pr ? (da.ac.h = H) : (da.sbox["p" + m] = H);
    }
    var k = om,
      l,
      m,
      r,
      t,
      v,
      x,
      Q,
      X,
      S = {},
      sa,
      M = {
        aa: function (H) {
          l = H.get(127, M);
          m = H.uh.ua();
        },
        ya: function () {
          "google" in window || (window.google = {});
          "sbox" in window.google || (window.google.sbox = {});
        },
        J: function (H) {
          X = H;
          0 == H.ti &&
            ((H = l.ut),
            (r = H.protocol),
            (t = H.host),
            (v = H.Dk),
            (x = H.aB),
            (Q = "https:" == document.location.protocol),
            h(f),
            (new Image().src = r + t + "/generate_204"));
        },
        getType: function () {
          return 149;
        },
        ab: function () {
          return { Fz: a, fu: d, mi: Am, Pn: b, Qn: c };
        },
        Ca: function () {
          h(null);
          e();
        },
      };
    return M;
  };
  var An = function () {
    this.Gi = {};
  };
  Ha(An, wn);
  g = An.prototype;
  g.aa = function (a) {
    this.Z = a.get(116, this);
    if ((a = a.Sa(154, this))) for (var b, c = 0; (b = a[c++]); ) this.Gi[b.qf()] = b;
  };
  g.J = function () {
    this.wa = !1;
  };
  g.Ca = function () {
    this.dd();
  };
  g.getType = function () {
    return 115;
  };
  g.isVisible = function () {
    return this.wa;
  };
  g.Vk = function (a) {
    if (a in this.Gi) {
      if (this.Cd) {
        if (a == this.Cd.qf()) return;
        this.dd();
        this.Cd.Ug();
      }
      this.Cd = this.Gi[a];
      this.Z.Vk(this.Cd);
    }
  };
  g.Ub = function () {
    return this.wa ? this.Z.Ub() : 0;
  };
  g.show = function () {
    this.wa || (this.Z.show(this.Cv()), (this.wa = !0));
  };
  g.dd = function () {
    this.wa && (this.Z.dd(), (this.wa = !1));
  };
  g.zh = function (a) {
    this.Z.zh(a);
  };
  g.Cv = function () {
    var a = Dm(Bn);
    this.Cd && this.Cd.gg(a);
    return a;
  };
  var Bn = { tw: !1, Lj: "left", Wo: !0, Ld: null, marginWidth: 0 };
  var Cn = function () {};
  Ha(Cn, wn);
  g = Cn.prototype;
  g.aa = function (a) {
    this.Z = a.get(119, this);
    this.wb = a.get(130, this);
    this.Vt = a.get(145, this);
    this.R = a.get(117, this);
    this.ia = a.get(123, this);
    this.Db = a.get(374, this);
    this.Np = a.get(121, this);
    this.Yy = a.get(553, this);
    this.N = a.get(128, this);
    this.Uf = a.get(139, this);
    this.rB = a.get(173, this);
    this.Pe = a.Sa(160, this);
    this.L = a.L;
    this.Uw = a.uh.Zn();
  };
  g.ya = function (a) {
    this.C = a;
    this.fa = this.Kc = this.Z.lv() || "";
  };
  g.J = function (a) {
    this.C = a;
    this.ap = this.To = !1;
    this.He();
  };
  g.getType = function () {
    return 118;
  };
  g.vo = function () {
    var a = {};
    this.R.ta(13, a);
    !a.cancel && this.C.Go && this.R.defer(this.N.Bi);
    this.L.Oi();
  };
  g.hw = function () {
    this.R.ta(12);
    this.L.Pi();
  };
  g.kw = function () {
    this.xo("rtl");
  };
  g.lw = function () {
    this.xo("ltr");
  };
  g.ow = function () {
    this.N.uz();
  };
  g.dw = function (a) {
    this.N.cd() ? this.N.qz() : this.N.xg(a);
  };
  g.de = function () {
    if (0 == this.C.pl) return !1;
    if (4 == this.C.pl) return this.L.Wi(), !1;
    var a = this.Jn();
    if (a)
      switch (this.C.pl) {
        case 1:
          if (this.Ll(a, !0)) return this.Db.add(8), !0;
          break;
        case 3:
          return this.N.de(a);
      }
    return !1;
  };
  g.fw = function () {
    this.C.wz ? this.search(5) : (this.N.isVisible() ? this.N.Bi() : this.gi(), this.sq());
  };
  g.cw = function (a) {
    this.fa &&
      a.oo() == this.fa.length &&
      (this.Uf && this.Uf.clear(), this.C.vz && this.search(2), this.L.Mi(this.fa));
  };
  g.Zv = function (a) {
    this.wb && 0 == a.Mg() && this.wb.Bz();
  };
  g.yo = function (a, b, c, d) {
    this.C.au && !this.N.isVisible() && "mousedown" == c && this.N.xg(b);
    var e = !1,
      f = !1;
    if (a != this.fa || "onremovechip" == c)
      zm(c, "key") ? this.Db.add(1) : "paste" == c && this.Db.add(2),
        (e = !0),
        this.ew(a, c),
        a && !jm.test(a) && (d = !0),
        (f = !0);
    a = this.Yy.Gm(a, b, c);
    switch (a.fv()) {
      case 2:
        d = !0;
        break;
      case 3:
        d = !1;
    }
    d ? (e && this.N.YA(), this.vu(a)) : f && this.mt();
    this.R.ta(2, { Xf: c });
  };
  g.lA = function (a) {
    (this.To = a) && this.Db.add(4);
  };
  g.Vq = function (a) {
    this.ap != a && ((this.ap = a) ? this.L.Li() : this.L.Ki());
  };
  g.Sk = function (a) {
    this.Lp(a);
  };
  g.zu = function () {
    this.Z.focus();
  };
  g.gi = function () {
    this.Z.blur();
  };
  g.ux = function () {
    return this.Z.Vj();
  };
  g.ll = function (a, b, c) {
    zm(a, this.fa, !0) && (a = this.fa + a.substr(this.fa.length));
    this.yo(a, c || tm(a.length), "", b);
    this.Lp(a, !0);
  };
  g.Lb = function (a) {
    this.Ch(a);
    this.Z.refresh();
    this.R.ta(4, { Ld: this.Qa, input: a });
  };
  g.Dq = function () {
    this.Z.select();
  };
  g.sq = function () {
    this.fa != this.Kc && this.Ch(this.Kc);
    this.R.ta(5, { input: this.Kc, fB: this.N.Yc(), Ld: this.Qa });
    this.Z.refresh();
    this.L.Ri(this.Kc);
  };
  g.qm = function () {
    this.Kc = this.fa;
  };
  g.Mn = function () {
    return this.Z.Mn();
  };
  g.Ab = function () {
    return this.Kc;
  };
  g.pa = function () {
    return this.fa;
  };
  g.pj = function () {
    return this.Qa;
  };
  g.Xd = function () {
    return this.Z.Xd();
  };
  g.xj = function () {
    return this.Z.xj();
  };
  g.Ub = function () {
    return this.Z.Ub();
  };
  g.ce = function () {
    return this.Z.ce();
  };
  g.ao = function () {
    return this.Z.ao();
  };
  g.yw = function () {
    return 0 != this.Uw;
  };
  g.Ij = function () {
    if (this.rB) {
      if (this.C.Gj) return !0;
      for (var a = 0, b; (b = this.Pe[a++]); ) if (b.isEnabled()) return !0;
    }
    return !1;
  };
  g.nk = function () {
    this.Z.nk();
  };
  g.search = function (a) {
    this.Np.search(this.fa, a);
  };
  g.clear = function (a) {
    this.fa && (this.Ch(""), this.Z.clear(), this.R.ta(1), this.N.clear(), this.L.zg(this.fa));
    a && this.L.Ji();
  };
  g.Hf = function () {
    this.Gx = this.hp = this.jj = 0;
  };
  g.Ah = function (a) {
    this.Z.Ah(a);
  };
  g.Kl = function () {
    var a = this.Jn();
    a && this.Ll(a);
  };
  g.ew = function (a, b) {
    this.Ch(a);
    this.R.ta(1, { Xf: b, Ld: this.Qa });
    this.L.zg(a);
    a = sm();
    this.jj || (this.jj = a);
    this.hp = a;
  };
  g.xo = function (a) {
    var b = this.Xd().Mg();
    this.Qa == a
      ? this.N.cd() &&
        b == this.fa.length &&
        (this.N.vf() ? this.C.hj && ((a = this.N.sf()), this.Np.search(a.Zc(), 6)) : this.C.Rx && this.de())
      : this.wb && 0 == b && this.wb.Bz();
  };
  g.Jn = function () {
    if (this.N.cd()) {
      var a = this.N.vf() ? this.N.sf() : this.N.rj();
      if (a.Wn()) return a;
    }
    return null;
  };
  g.Ll = function (a, b) {
    a = a.Zc();
    var c = this.Kc;
    return (c || a ? c && a && c.toLowerCase() == a.toLowerCase() : 1)
      ? !1
      : (this.qm(), b ? this.ll(a, !0) : this.Lb(a), !0);
  };
  g.Lp = function (a, b) {
    this.fa = a || "";
    this.He();
    this.Z.refresh();
    b || (this.R.ta(4, { Ld: this.Qa, input: this.fa }), this.L.Qi(this.fa));
  };
  g.He = function () {
    var a = this.Vt.pj(this.fa);
    a != this.Qa && (this.Z.Rk(a), (this.Qa = a));
  };
  g.vu = function (a) {
    this.To && a.Wk("gs_is", 1);
    this.ia.qn(a);
  };
  g.mt = function () {
    this.N.clear();
    this.ia.Zg();
  };
  g.Ch = function (a) {
    this.fa = this.Kc = a || "";
    this.He();
  };
  function Dn() {
    function a(J) {
      J.Ld = Cb;
      J.marginWidth = lb;
      var la = Mb.Dr;
      la || (la = "rtl" == Cb ? "right" : "left");
      J.Lj = la;
    }
    function b(J, la, bb) {
      var va = !1;
      J = N && N.VE(la);
      aa();
      if ((Fa = la) && la.length) {
        va = la[0].Zc();
        ca.zw(va) && (va = n.Ab());
        Cb = ca.pj(va);
        if (bb) (Ub = !0), (va = C.Sy(la, Cb)), (la = la[0].getParameters().Xc("a")), (la = xm(la)), (lb = p.ce(la));
        else {
          Ub = !1;
          la = C;
          bb = la.render;
          if (S() && !Ub) {
            va = [];
            for (var Qa = [], mb = 0, nb; (nb = K[mb++]) && !nb.wv(n.Ab(), Fa, Qa); );
            (mb = Qa ? Qa.length : 0) && (mb -= Ja(Qa, va, 0));
            for (nb = 0; nb < Fa.length; ++nb) va.push(Fa[nb]);
            mb && (mb -= Ja(Qa, va, 1));
            Mb.Cw && va.push(1);
            mb && Ja(Qa, va, 2);
            Mb.Co && va.push(2);
            qa && qa.JD(va);
          } else va = null;
          va = bb.call(la, va, Cb);
          lb = 0;
        }
        J && ((Da = N.FE()), c(N.yE()));
        va ? H() : aa();
      }
      return va;
    }
    function c(J) {
      D();
      if (fa != J) {
        var la = fa;
        fa = J;
        u(la);
      }
    }
    function d() {
      if (S())
        if (cb) {
          var J = fa;
          fa == Fa.length - 1 ? (Da = fa = null) : null == fa ? (fa = 0) : ++fa;
          Da = fa;
          ya(J, d);
        } else H();
    }
    function e() {
      if (S())
        if (cb) {
          var J = fa;
          Fa && 0 != fa ? (null == fa ? (fa = Fa.length - 1) : --fa) : (Da = fa = null);
          Da = fa;
          ya(J, e);
        } else H();
    }
    function f(J) {
      J = J ? 4 : 3;
      if (sa()) {
        var la = Q();
        C.Tg(la) || n.search(J);
        Ma.yg(n.Ab(), la);
      } else n.search(J);
    }
    function h(J) {
      return C.de(J);
    }
    function k(J) {
      Da = fa = J;
      Ma.yg(n.Ab(), Fa[J]);
    }
    function l() {
      return cb;
    }
    function m() {
      return Na;
    }
    function r(J) {
      Na && !J && aa();
      Na = J;
    }
    function t() {
      return Fa;
    }
    function v() {
      return S() ? Fa[0] : null;
    }
    function x() {
      return fa;
    }
    function Q() {
      return null != Da ? Fa[Da] : null;
    }
    function X() {
      return Da;
    }
    function S() {
      return !(!Fa || !Fa.length);
    }
    function sa() {
      return null != Da;
    }
    function M() {
      cb && !Ra && (Ra = window.setTimeout(aa, Mb.Iw));
    }
    function H() {
      cb || (I.Vk(En), I.show(), (cb = !0), Ma.Ti());
    }
    function da() {
      cb && (Ra && (window.clearTimeout(Ra), (Ra = null)), I.dd(), (cb = !1), Ma.Ui());
    }
    function aa() {
      da();
      Fa = null;
      Ub = !1;
      null != fa && C.Mh(fa);
      Da = fa = null;
      C.clear();
    }
    function ja() {
      xa.Zg();
      da();
    }
    function T() {
      null != fa && C.Mh(fa);
      Da = fa = null;
    }
    function F() {
      D();
      Sa = window.setTimeout(T, 0);
    }
    function W() {
      D();
    }
    function P(J) {
      if (S()) H();
      else {
        var la = n.Ab();
        la && ((J = J || n.Xd()), (la = pa.Gm(la, J)), xa.qn(la));
      }
    }
    function ea() {
      return C.qa();
    }
    function wa() {
      return C.be();
    }
    function Ea() {
      cb = !1;
    }
    function kb() {
      C.Dc();
    }
    function Ca() {
      return En;
    }
    function Ja(J, la, bb) {
      for (var va = 0, Qa = 0, mb; Qa < J.length; ++Qa) (mb = J[Qa]) && mb.position == bb && (la.push(mb), ++va);
      return va;
    }
    function ya(J, la) {
      null == fa || C.gh(fa) ? (u(J), null == fa ? n.sq() : ((J = C.gj(Fa[fa])), n.Sk(J), Ma.Vi(J))) : (C.Mh(J), la());
    }
    function u(J) {
      D();
      null != J && C.Mh(J);
      null != fa && C.Jw(fa);
    }
    function D() {
      Sa && (window.clearTimeout(Sa), (Sa = null));
    }
    var C,
      ca,
      I,
      xa,
      n,
      p,
      K,
      pa,
      N,
      qa,
      Ma,
      Fa,
      fa,
      Da,
      Ub,
      cb,
      Na,
      Ra,
      Sa,
      lb,
      Cb,
      Mb,
      Ta = {
        aa: function (J) {
          C = J.get(129, Ta);
          ca = J.get(145, Ta);
          I = J.get(115, Ta);
          xa = J.get(123, Ta);
          n = J.get(118, Ta);
          p = J.get(147, Ta);
          K = J.Sa(153, Ta);
          pa = J.get(553, Ta);
          J.get(126, Ta);
          N = J.get(184, Ta);
          qa = J.get(157, Ta);
          Ma = J.L;
        },
        ya: function () {
          K.sort(Cm);
        },
        J: function (J) {
          Mb = J;
          Da = fa = null;
          cb = Ub = !1;
          Na = !0;
          Cb = "";
          lb = 0;
        },
        getType: function () {
          return 128;
        },
        ab: function () {
          return {
            bl: b,
            fA: c,
            qz: d,
            uz: e,
            Tg: f,
            de: h,
            bw: k,
            isVisible: l,
            isEnabled: m,
            mA: r,
            Yc: t,
            rj: v,
            zE: x,
            sf: Q,
            Iv: X,
            cd: S,
            vf: sa,
            YA: M,
            show: H,
            dd: da,
            clear: aa,
            Bi: ja,
            cz: T,
            dz: F,
            HD: W,
            xg: P,
          };
        },
        Vd: function () {
          var J = { gg: a, qa: ea, be: wa, Ug: Ea, Dc: kb, qf: Ca };
          return [
            {
              Ja: Am,
              aa: Am,
              ya: Am,
              J: Am,
              getType: function () {
                return 154;
              },
              ab: function () {
                return J;
              },
              Vd: function () {
                return null;
              },
              Ca: Am,
            },
          ];
        },
        Ca: function () {
          Ra && (window.clearTimeout(Ra), (Ra = null));
          Fa = null;
          da();
        },
      };
    return Ta;
  }
  var En = qm++;
  var Gn = function () {
    this.Vo = Fn.test("x");
  };
  Ha(Gn, wn);
  Gn.prototype.Ja = function (a) {
    this.Ud = a.Zd();
  };
  Gn.prototype.getType = function () {
    return 145;
  };
  Gn.prototype.zw = function (a) {
    if (!this.Vo) return !0;
    for (var b = !1, c = !1, d = 0, e; d < a.length; ++d)
      if (((e = a.charAt(d)), !Hn.test(e) && (Fn.test(e) ? (c = !0) : (b = !0), c && b))) return !0;
    return !1;
  };
  Gn.prototype.pj = function (a) {
    var b = this.Ud;
    this.Vo && (Fn.test(a) ? (b = "ltr") : Hn.test(a) || (b = "rtl"));
    return b;
  };
  var Hn = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
    Fn = RegExp(
      "^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"
    );
  var In = function () {
    this.yk = [];
    this.Lm = { gs: 1 };
  };
  Ha(In, wn);
  g = In.prototype;
  g.getType = function () {
    return 117;
  };
  g.Ca = function () {
    this.rc = null;
  };
  g.Ha = function (a, b, c, d, e) {
    var f = this.Vn(a);
    f || ((f = {}), this.yk.push({ element: a, pw: f }));
    var h = f[b];
    h ||
      ((h = f[b] = []),
      (f = this.bv(b, a.gs ? window : fn(a), h)),
      "string" == typeof b ? (a.addEventListener ? a.addEventListener(b, f, !1) : (a["on" + b] = f)) : (a[b] = f));
    h.push(this.av(c, d || 0, !!e));
    h.sort(Jn);
    c.su = b;
  };
  g.xl = function (a, b) {
    if ((a = this.Vn(a)))
      if ((a = a[b.su]))
        for (var c = 0, d; (d = a[c++]); )
          if (d.process == b) {
            d.ck = !0;
            break;
          }
  };
  g.Cc = function (a, b, c, d) {
    this.Ha(this.Lm, a, b, c, d);
  };
  g.ta = function (a, b) {
    b = b || {};
    (a = this.Lm[a]) && a(b, b.Xf);
  };
  g.xc = function (a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c);
  };
  g.Jr = function (a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c);
  };
  g.Rp = function () {
    var a = window.location.href;
    if (/HTTPS?:\/\//i.test(a)) window.postMessage("sbox.df", a);
    else {
      var b, c;
      a = (null == (b = window.location) ? void 0 : null == (c = b.ancestorOrigins) ? void 0 : c[0]) || "";
      window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*");
    }
  };
  g.defer = function (a) {
    Kn
      ? (this.rc || ((this.rc = []), this.xc(window, "message", this.xv.bind(this))), this.rc.push(a), this.Rp())
      : window.setTimeout(a, 0);
  };
  g.xv = function (a) {
    this.rc &&
      a &&
      a.source === window &&
      "sbox.df" === a.data &&
      this.rc.length &&
      (this.rc.shift()(), this.rc && this.rc.length && this.Rp());
  };
  g.bv = function (a, b, c) {
    return db(function (d, e) {
      if (c.length && ((d = d || this.Iu(b)), (d.Xf = e || a), this.wy(d, c), d.fh))
        return delete d.fh, d.gx && (d = b.event || d), an(d), (d.returnValue = !1);
    }, this);
  };
  g.Iu = function (a) {
    var b = {};
    if ((a = a.event)) a.keyCode && (b.keyCode = a.keyCode), (b.gx = !0);
    return b;
  };
  g.av = function (a, b, c) {
    return { hx: c, ck: !1, priority: b, process: a };
  };
  g.Vn = function (a) {
    for (var b = 0, c; b < this.yk.length; ++b) if (((c = this.yk[b]), c.element == a)) return c.pw;
    return null;
  };
  g.wy = function (a, b) {
    for (var c, d, e = 0, f; (f = b[e++]); ) f.ck ? (d = !0) : c || (f.hx ? this.oz(f, a) : (c = f.process(a)));
    if (d) for (e = 0; (f = b[e]); ) f.ck ? b.splice(e, 1) : ++e;
  };
  g.oz = function (a, b) {
    this.defer(function () {
      a.process(b);
    });
  };
  var Jn = function (a, b) {
      return b.priority - a.priority;
    },
    Kn = window.postMessage && !(Em || Lm || Jm);
  var Ln = function () {
    this.Zf = {};
    this.Jh = this.Bk = 0;
  };
  Ha(Ln, wn);
  g = Ln.prototype;
  g.J = function () {
    this.reset();
  };
  g.getType = function () {
    return 494;
  };
  g.Cs = function (a) {
    this.Zf[a.ua()] = !0;
  };
  g.Ox = function (a) {
    var b = a.Og();
    a = b.ua();
    a in this.Zf && ((b = b.Qg()), (this.Jh += sm() - b), ++this.Bk, delete this.Zf[a]);
  };
  g.Fu = function () {
    var a = 0,
      b;
    for (b in this.Zf) a++;
    return a;
  };
  g.reset = function () {
    this.Zf = {};
    this.Jh = this.Bk = 0;
  };
  var Mn = function () {};
  Ha(Mn, wn);
  g = Mn.prototype;
  g.J = function () {
    this.reset();
  };
  g.getType = function () {
    return 374;
  };
  g.add = function (a) {
    this.Db[a] = !0;
    this.kp = a;
  };
  g.Uv = function () {
    var a = [],
      b;
    for (b in this.Db) a.push(parseInt(b, 10));
    return a;
  };
  g.reset = function () {
    this.Db = {};
    this.kp = null;
  };
  var Nn = function () {
    this.Eq = -1;
  };
  Ha(Nn, wn);
  g = Nn.prototype;
  g.aa = function (a) {
    this.Cg = a.get(191, this);
    this.ia = a.get(123, this);
    this.K = a.get(118, this);
    this.Db = a.get(374, this);
    this.ad = a.get(494, this);
    this.xd = a.get(126, this);
    this.N = a.get(128, this);
    this.Wr = a.Sa(311, this);
    dn(a.Sa(152, this));
  };
  g.ya = function (a) {
    this.sl = a.Kx;
  };
  g.J = function (a) {
    this.C = a;
    this.reset();
  };
  g.getType = function () {
    return 120;
  };
  g.getParameters = function (a) {
    var b = this.K.Ab();
    a = this.Kv(a);
    var c = this.Mv(b, a);
    b = { oq: b, gs_l: a + "." + c };
    this.C.tx && (b.q = this.K.pa());
    return b;
  };
  g.reset = function () {
    this.Fq = sm();
    ++this.Eq;
    this.K.Hf();
    this.Db.reset();
    this.ia.Hf();
    for (var a = 0, b; (b = this.Wr[a++]); ) b.reset();
  };
  g.IA = function (a) {
    this.sl = a;
  };
  g.ev = function () {
    var a = this.xd.Yd();
    return a ? a.getParameters().Xc("e") || "" : "";
  };
  g.mv = function () {
    return this.Db.Uv().join("j");
  };
  g.Ku = function () {
    var a = "";
    this.xd.Fj() ? (a = "o") : this.N.vf() && (a = this.N.Iv() + "");
    return a;
  };
  g.Kv = function (a) {
    var b = [];
    b[27] = 34;
    b[0] = On(this.C.Ye);
    b[28] = On(this.C.rh);
    b[1] = void 0 == a ? "" : a + "";
    b[26] = this.mv();
    b[2] = this.Ku();
    b[3] = this.Mu();
    b[4] = this.yj(this.K.jj);
    b[5] = this.yj(this.K.hp);
    b[6] = this.Eq;
    b[7] = sm() - this.Fq;
    b[18] = this.yj(this.K.Gx);
    b[8] = this.ia.mq;
    if ((a = this.ia.Ou())) (b[25] = this.Nu(a)), (b[10] = a.bx);
    b[11] = this.ia.Tn();
    b[12] = this.ia.In;
    if ((a = this.ia.Uu())) (b[9] = a.Xy), (b[22] = a.My), (b[17] = a.gz);
    b[13] = this.ia.Jp;
    b[14] = this.ia.ek;
    b[15] = this.ia.ul;
    b[16] = this.ia.Tu();
    b[30] = this.ad.Fu();
    b[31] = this.ad.Bk;
    b[32] = this.ad.Jh;
    b[19] = On(this.C.nl);
    b[20] = this.ev();
    a = 0;
    for (var c; (c = this.Wr[a++]); ) {
      var d = c.sj();
      Pn[d] && (b[d] = void 0 == b[d] ? On(c.Sc) : "");
    }
    return b.join(".").replace(Qn, "");
  };
  var On = function (a) {
    return a ? a.replace(Rn, "-") : "";
  };
  Nn.prototype.Mu = function () {
    var a = "",
      b = this.N.Yc();
    if (b) {
      for (var c, d = 0, e = 0, f; (f = b[e++]); ) {
        var h = f;
        f = h.getType() + "";
        h = h.Ov();
        h.length && (f += "i" + h.join("i"));
        f != c && (1 < d && (a += "l" + d), (a += (c ? "j" : "") + f), (d = 0), (c = f));
        ++d;
      }
      1 < d && (a += "l" + d);
    }
    return a;
  };
  Nn.prototype.Mv = function (a, b) {
    return this.Cg && this.sl
      ? ((a += b), (b = this.Cg.decode(this.sl)), (a = this.Cg.Lv(a, b)), (a = a.slice(0, 8)), this.Cg.encode(a))
      : "";
  };
  Nn.prototype.yj = function (a) {
    return Math.max(a - this.Fq, 0);
  };
  Nn.prototype.Nu = function (a) {
    return a.vx ? "1" + (this.C.ju ? "a" : "") + (this.C.mu ? "c" : "") : "";
  };
  var Qn = /\.+$/,
    Rn = /\./g,
    Pn = rm([23]);
  var Sn = function () {};
  Ha(Sn, wn);
  g = Sn.prototype;
  g.Ja = function (a) {
    this.lj = a.Sn();
  };
  g.aa = function (a) {
    a.get(347, this);
    this.wb = a.get(130, this);
    this.R = a.get(117, this);
    this.ia = a.get(123, this);
    this.K = a.get(118, this);
    this.Zj = a.get(120, this);
    this.N = a.get(128, this);
    this.Uf = a.get(139, this);
    this.L = a.L;
    this.Aq = a.Sa(294, this);
  };
  g.J = function (a) {
    this.C = a;
  };
  g.getType = function () {
    return 121;
  };
  g.search = function (a, b) {
    if (this.Aq) {
      for (var c = !1, d = 0, e; (e = this.Aq[d++]); ) 2 == e.jo(a, b) && (c = !0);
      if (c) return;
    }
    if ((a && !jm.test(a)) || this.C.Nc || (this.wb && this.wb.Nc()))
      Yl.test(b)
        ? this.lj && !this.Fg && (this.Fg = Ym(this.lj, "btnI", "1"))
        : this.Fg && (this.lj.removeChild(this.Fg), (this.Fg = null)),
        this.L.search(a, b),
        this.pg(),
        this.R.ta(14, { query: a });
  };
  g.lh = function (a) {
    this.L.lh(a);
    this.pg();
  };
  g.redirect = function (a) {
    this.L.redirect(a);
    this.pg();
  };
  g.wg = function (a) {
    this.L.wg(a);
    this.pg();
  };
  g.Ng = function (a) {
    return this.L.Ng(a);
  };
  g.pg = function () {
    this.ia.Zg();
    this.ia.qg();
    this.Zj.reset();
    this.N.clear();
    this.K.Ab() != this.K.pa() && this.K.qm();
    this.Uf && this.Uf.clear();
  };
  var Tn = function (a, b, c) {
    function d() {
      return a;
    }
    function e() {
      return F;
    }
    function f() {
      return W;
    }
    function h() {
      return b;
    }
    function k() {
      return c || "";
    }
    function l(P, ea) {
      v(P, ea);
    }
    function m(P, ea) {
      v(P, ea, !0);
    }
    function r() {
      M || (H = !0);
    }
    function t() {
      aa = !0;
    }
    function v(P, ea, wa) {
      M || ((Q[P] = ea), wa && (X[P] = ea));
    }
    var x = (pm++).toString(36),
      Q = {},
      X = {},
      S,
      sa,
      M = !1,
      H = !1,
      da = !1,
      aa = !1,
      ja = 1,
      T = {
        ua: function () {
          return x;
        },
        co: function () {
          var P = parseInt(x, 36);
          return isNaN(P) ? -1 : P;
        },
        Vb: d,
        uv: e,
        wj: f,
        Xd: h,
        fv: function () {
          return ja;
        },
        getParameters: function () {
          return Q;
        },
        vE: function () {
          return S;
        },
        ro: k,
        Qg: function () {
          return sa;
        },
        Ju: function () {
          return { Vb: d, uv: e, wj: f, Xd: h, ro: k, Wk: l, xh: m, Gn: r, bt: t };
        },
        aA: function (P) {
          ja = P;
        },
        Wk: l,
        xh: m,
        Gn: r,
        bt: t,
        ox: function () {
          return H;
        },
        Nw: function () {
          da = !0;
        },
        bp: function () {
          return da;
        },
        XE: function () {
          return aa;
        },
        xu: function () {
          M || ((sa = sm()), "cp" in X || m("cp", b.Mg()), v("gs_id", x), (S = vm(X) + ":" + a), (M = !0));
        },
      };
    var F = a.toLowerCase();
    var W = ym(F);
    return T;
  };
  var Un = function () {};
  Ha(Un, wn);
  g = Un.prototype;
  g.aa = function (a) {
    this.Ek = a.Sa(156, this);
    this.xd = a.get(126, this);
  };
  g.ya = function () {
    this.Ek.sort(Vn);
  };
  g.J = function (a) {
    this.C = a;
    this.Sp = a.ty;
  };
  g.getType = function () {
    return 553;
  };
  g.Gm = function (a, b, c) {
    return this.yv(a, b, c);
  };
  g.Zq = function (a) {
    this.Sp = a;
  };
  g.yv = function (a, b, c, d) {
    a = Tn(a, b || tm(a.length), c || "");
    this.wu(a);
    a.xh("ds", this.C.Mm);
    a.xh("pq", this.Sp);
    d && a.Gn();
    a.xu();
    return a;
  };
  g.wu = function (a) {
    var b = 1,
      c = a.Ju(),
      d = this.xd.Yd();
    if (this.Ek) for (var e = 0, f; (f = this.Ek[e++]); ) (f = f.jo(c, d)), f > b && (b = f);
    a.aA(b);
  };
  var Vn = function (a, b) {
    return a.mb() - b.mb();
  };
  var Wn = function () {
    this.Eb = !1;
    this.ih = -1;
  };
  Ha(Wn, wn);
  g = Wn.prototype;
  g.aa = function (a) {
    this.Pc = a.get(133, this);
    this.wb = a.get(130, this);
    this.K = a.get(118, this);
    this.Zj = a.get(120, this);
    this.ad = a.get(494, this);
    this.pq = a.get(124, this);
    this.qq = a.get(125, this);
    this.rq = a.get(230, this);
    this.Hz = a.get(127, this);
    this.L = a.L;
  };
  g.J = function (a) {
    this.mc = this.Hz.mc;
    this.C = a;
    this.Eb = !0;
    this.re = {};
    this.Uj = 0;
    this.px = a.Au;
    this.sx = a.Yg;
    this.Mj = -1;
    this.fd = this.C.lu && !!this.Pc;
  };
  g.getType = function () {
    return 123;
  };
  g.Ca = function () {
    this.Eb = !1;
    this.Jl();
    this.qg();
    this.re = null;
    this.Zg();
  };
  g.qn = function (a, b) {
    if (!(!this.Eb || this.sx || (this.wb && this.wb.QD()))) {
      var c = !0;
      this.yB(a);
      ++this.mq;
      this.ad.Cs(a);
      this.Qy();
      if (this.fd) {
        var d = this.Pc.get(a);
        d && ((c = this.px || a.ox()) && this.C.Mw && a.Nw(), this.qq.process(d), d.qx() && ++this.In, this.qg());
      }
      c && ((this.hd = a), (this.za && !b) || this.Up());
    }
  };
  g.Fj = function () {
    return 10 <= this.Df || 3 <= this.mc.Qn() ? !0 : !1;
  };
  g.Zg = function () {
    this.Mj = this.ih;
  };
  g.Zo = function () {
    return this.ih <= this.Mj;
  };
  g.qg = function () {
    this.hd = null;
  };
  g.Ou = function () {
    return { vx: this.fd, bx: this.fd ? this.Pc.uE() : 0 };
  };
  g.Tn = function () {
    return this.fd ? this.Pc.Tn() : 0;
  };
  g.Uu = function () {
    return { Xy: this.vm, My: this.um, gz: this.wm };
  };
  g.Tu = function () {
    for (var a = [], b = 0, c, d = 0; d <= Xn; ++d)
      (c = this.Mk[d]), 0 == c ? b++ : ((b = 1 == b ? "0j" : 1 < b ? d + "-" : ""), a.push(b + c), (b = 0));
    return a.join("j");
  };
  g.mi = function () {
    this.fd && this.Pc.aE();
  };
  g.Hf = function () {
    this.fd && this.Pc.Hf();
    this.ul = this.ek = this.Jp = this.wm = this.um = this.vm = this.In = this.Df = this.mq = 0;
    this.Mk = [];
    for (var a = 0; a <= Xn; ++a) this.Mk[a] = 0;
  };
  g.Pu = function (a) {
    return db(function (b) {
      this.Vp(b, a);
    }, this);
  };
  g.Up = function () {
    this.Jl();
    if (!(2 < this.mc.Qn()) && this.hd) {
      var a = [],
        b = this.hd.getParameters();
      if (b) for (var c in b) um(c, b[c], a);
      this.L.Ni();
      a = this.mc.Fz(this.hd, a.join("&"), this.Pu(this.hd), db(this.Vp, this));
      this.hd.bp() || (++this.vm, a ? this.zs(this.hd) : ++this.um);
      this.qg();
      this.pz();
    }
  };
  g.pz = function () {
    for (var a = 100, b = (this.Df - 2) / 2, c = 1; c++ <= b; ) a *= 2;
    a < this.Uj && (a = this.Uj);
    this.za = window.setTimeout(db(this.Up, this), a);
  };
  g.Jl = function () {
    null != this.za && (window.clearTimeout(this.za), (this.za = null));
  };
  g.zs = function (a) {
    this.re[a.ua()] = a;
    ++this.Df;
  };
  g.fq = function (a) {
    this.mc.fu(a);
    delete this.re[a];
    this.Df && --this.Df;
  };
  g.Qy = function () {
    var a = sm(),
      b;
    for (b in this.re) {
      var c = this.re[b].Qg();
      2500 < a - c && this.fq(b);
    }
  };
  g.Vp = function (a, b) {
    if (this.Eb) {
      if (!b && ((b = this.re[this.pq.my(a)]), !b)) return;
      if (!b.bp()) {
        a = this.pq.ny(a, b);
        if (this.rq) {
          var c = this.K.pa();
          a = this.rq.Ia(a, c);
        }
        this.fd && this.Pc.put(a);
        this.yx(b) || (++this.wm, this.qq.process(a) || ++this.Jp, this.BB(b, a));
        this.zB(a);
      }
    }
  };
  g.BB = function (a, b) {
    this.Uj = b.getParameters().Av("d");
    a && (this.fq(a.ua()), (a = a.Qg()), (a = sm() - a), (this.ul += a), (this.ek = Math.max(a, this.ek)), this.AB(a));
  };
  g.AB = function (a) {
    ++this.Mk[a > Yn ? Xn : Zn[Math.floor(a / 100)]];
  };
  g.zB = function (a) {
    a && (a = a.getParameters().Xc("q")) && this.Zj.IA(a);
  };
  g.yB = function (a) {
    a = a.co();
    a > this.ih && (this.ih = a);
  };
  g.yx = function (a) {
    return a.co() <= this.Mj;
  };
  var Zn = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
    Xn = Zn[Zn.length - 1] + 1,
    Yn = 100 * Zn.length - 1;
  function $n(a) {
    return {
      On: function () {
        return a.On();
      },
      Vb: function () {
        return a.Vb();
      },
      Yc: function () {
        return a.Yc();
      },
    };
  }
  var ao = function (a, b, c, d, e, f) {
    function h() {
      return !!b && !!b[0];
    }
    var k,
      l = !0,
      m,
      r = {
        Og: function () {
          return a;
        },
        Vb: function () {
          return a.Vb();
        },
        rj: function () {
          return h() ? b[0] : null;
        },
        Yc: function () {
          return b;
        },
        cd: h,
        getParameters: function () {
          return c;
        },
        qx: function () {
          return d;
        },
        YE: function () {
          return e;
        },
        ZE: function () {
          return f;
        },
        getType: function () {
          return l;
        },
        kv: function () {
          m || (m = $n(r));
          return m;
        },
        On: function () {
          return k;
        },
      };
    b ? b.length && 33 == b[0].getType() && (e = l = !1) : (b = []);
    c ? (k = c.Bv("t")) : (c = bm);
    return r;
  };
  var bo = function () {
    this.lk = {};
  };
  Ha(bo, wn);
  g = bo.prototype;
  g.aa = function (a) {
    this.Xs = a.get(150, this);
    if ((a = a.Sa(158, this))) for (var b, c = 0; (b = a[c++]); ) this.lk[b.CE()] = b;
  };
  g.J = function (a) {
    this.gB = a.ol;
    this.sw = a.zo;
  };
  g.getType = function () {
    return 124;
  };
  g.my = function (a) {
    return (a[2] || {}).j;
  };
  g.ny = function (a, b) {
    var c = a[0],
      d = a[1],
      e = {};
    if ((a = a[2]))
      for (var f in a) {
        var h = a[f];
        f in this.lk && (h = this.lk[f].parse(h));
        e[f] = h;
      }
    return ao(b, this.oy(c, d), am(e), !1, !0, !1);
  };
  g.oy = function (a, b) {
    for (var c = !1, d = !1, e = !1, f, h = 0; (f = b[h++]); )
      if ((33 == this.qo(f) ? (d = !0) : (c = !0), d && c)) {
        e = !0;
        break;
      }
    c = 0;
    d = [];
    for (h = 0; (f = b[h++]); ) {
      var k = this.qo(f);
      if (this.gB[k] && (!e || 33 != k)) {
        var l = this.Rv(f, a);
        d.push(cm(l, this.Nm(l), c++, k, this.Pv(f), this.Ev(f)));
      }
    }
    return d;
  };
  g.qo = function (a) {
    return a[1] || 0;
  };
  g.Pv = function (a) {
    return a[2] || [];
  };
  g.Rv = function (a, b) {
    a = a[0];
    this.sw && (a = this.Xs.bold(b.toLowerCase(), this.Nm(a)));
    return a;
  };
  g.Ev = function (a) {
    return (a = a[3]) ? am(a) : bm;
  };
  g.Nm = function (a) {
    return xm(a).replace(km, "");
  };
  var co = function () {};
  Ha(co, wn);
  co.prototype.aa = function (a) {
    this.R = a.get(117, this);
    this.K = a.get(118, this);
    this.ad = a.get(494, this);
    this.Hk = a.Sa(122, this);
    this.xd = a.get(126, this);
    this.N = a.get(128, this);
    this.L = a.L;
    this.Hk.sort(eo);
  };
  co.prototype.getType = function () {
    return 125;
  };
  co.prototype.process = function (a) {
    var b = this.Dx(a);
    if (b) {
      if (this.Hk) for (var c = 0, d; (d = this.Hk[c++]); ) a = d.lE(a);
      this.xd.Vz(a);
      this.Ay(a);
    }
    this.L.Si(a, b);
    return b;
  };
  co.prototype.Dx = function (a) {
    var b = this.K.pa(),
      c = this.xd.Yd();
    b = b.toLowerCase();
    var d = a.Vb().toLowerCase();
    b == d
      ? (c = !0)
      : ((b = ym(b)),
        (a = (d = a.Og()) ? d.wj() : ym(a.Vb().toLowerCase())),
        (c = c ? c.Og().wj() : ""),
        (c = 0 == b.indexOf(a) ? (0 == b.indexOf(c) ? a.length >= c.length : !0) : !1));
    return c;
  };
  var eo = function (a, b) {
    return a.mb() - b.mb();
  };
  co.prototype.Ay = function (a) {
    var b = a.Og().Vb(),
      c = a.Yc();
    if (this.N.isEnabled())
      if (c.length) {
        var d = 0 == a.getType();
        this.N.bl(b, c, d) && this.ad.Ox(a);
      } else this.N.clear();
    this.R.ta(3, { input: b, fB: c });
  };
  var fo = function () {};
  Ha(fo, wn);
  g = fo.prototype;
  g.aa = function (a) {
    this.ia = a.get(123, this);
  };
  g.J = function () {
    this.it();
  };
  g.getType = function () {
    return 126;
  };
  g.Fj = function () {
    return this.ia.Fj();
  };
  g.Vz = function (a) {
    this.Vm = a;
  };
  g.Yd = function () {
    return this.Vm;
  };
  g.it = function () {
    this.Vm = null;
  };
  var go = function () {
    this.xm = {};
  };
  Ha(go, wn);
  go.prototype.aa = function (a) {
    a = a.Sa(149, this);
    for (var b = 0, c; (c = a[b++]); ) this.xm[c.Pn()] = c;
  };
  go.prototype.J = function (a) {
    var b,
      c,
      d = (null == (b = document.location.href) ? 0 : b.startsWith("http"))
        ? "https:" === document.location.protocol
        : null == (c = document.location.ancestorOrigins)
        ? void 0
        : c[0].startsWith("https:");
    b = [];
    um("client", a.Ye, b);
    um("hl", a.Tj, b);
    um("gl", a.bB, b);
    um("sugexp", a.nl, b);
    um("gs_rn", 34, b);
    um("gs_ri", a.rh, b);
    a.Xl && um("authuser", a.Xl, b);
    this.ut = {
      protocol: "http" + (d ? "s" : "") + "://",
      host: a.Zy || "clients1." + a.yt,
      Dk: a.Dk || "/complete/search",
      aB: b.length ? b.join("&") : "",
    };
    (this.mc && this.mc.Pn() == a.ti) || (this.mc = this.xm[a.ti]);
  };
  go.prototype.getType = function () {
    return 127;
  };
  var ho = function () {};
  Ha(ho, wn);
  ho.prototype.getType = function () {
    return 191;
  };
  ho.prototype.encode = function (a) {
    "string" == typeof a && (a = io(a));
    var b = "";
    if (a) {
      for (var c = a.length, d = 0, e = 0, f = 0; c--; )
        for (e <<= 8, e |= a[f++], d += 8; 6 <= d; )
          (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt((e >> (d - 6)) & 63)),
            (d -= 6);
      d &&
        (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          ((e << 8) >> (d + 8 - 6)) & 63
        ));
    }
    return b;
  };
  ho.prototype.decode = function (a) {
    var b = [];
    if (a)
      for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
        var f = a.charCodeAt(e);
        if (32 > f || 127 < f || !jo[f - 32]) return [];
        c <<= 6;
        c |= jo[f - 32] - 1;
        d += 6;
        8 <= d && (b.push((c >> (d - 8)) & 255), (d -= 8));
      }
    return b;
  };
  ho.prototype.Lv = function (a, b) {
    var c = {};
    c.na = Array(4);
    c.buffer = Array(4);
    c.NB = Array(4);
    c.padding = Array(64);
    c.padding[0] = 128;
    for (var d = 1; 64 > d; ++d) c.padding[d] = 0;
    ko(c);
    d = Array(64);
    64 < b.length && (ko(c), lo(c, b), (b = mo(c)));
    for (var e = 0; e < b.length; ++e) d[e] = b[e] ^ 92;
    for (e = b.length; 64 > e; ++e) d[e] = 92;
    ko(c);
    for (e = 0; 64 > e; ++e) c.buffer[e] = d[e] ^ 106;
    no(c, c.buffer);
    c.total = 64;
    lo(c, io(a));
    a = mo(c);
    ko(c);
    no(c, d);
    c.total = 64;
    lo(c, a);
    return mo(c);
  };
  var io = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; ++d) {
        var e = a.charCodeAt(d);
        128 > e
          ? (b[c++] = e)
          : (2048 > e ? (b[c++] = (e >> 6) | 192) : ((b[c++] = (e >> 12) | 224), (b[c++] = ((e >> 6) & 63) | 128)),
            (b[c++] = (e & 63) | 128));
      }
      return b;
    },
    ko = function (a) {
      a.na[0] = 1732584193;
      a.na[1] = 4023233417;
      a.na[2] = 2562383102;
      a.na[3] = 271733878;
      a.kg = a.total = 0;
    },
    no = function (a, b) {
      for (var c = a.NB, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | (b[d + 1] << 8) | (b[d + 2] << 16) | (b[d + 3] << 24);
      var e = a.na[0];
      b = a.na[1];
      d = a.na[2];
      for (var f = a.na[3], h, k, l, m = 0; 64 > m; ++m)
        16 > m
          ? ((h = f ^ (b & (d ^ f))), (k = m))
          : 32 > m
          ? ((h = d ^ (f & (b ^ d))), (k = (5 * m + 1) & 15))
          : 48 > m
          ? ((h = b ^ d ^ f), (k = (3 * m + 5) & 15))
          : ((h = d ^ (b | ~f)), (k = (7 * m) & 15)),
          (l = f),
          (f = d),
          (d = b),
          (e = (e + h + oo[m] + c[k]) & 4294967295),
          (h = po[m]),
          (b = (b + (((e << h) | (e >>> (32 - h))) & 4294967295)) & 4294967295),
          (e = l);
      a.na[0] = (a.na[0] + e) & 4294967295;
      a.na[1] = (a.na[1] + b) & 4294967295;
      a.na[2] = (a.na[2] + d) & 4294967295;
      a.na[3] = (a.na[3] + f) & 4294967295;
    },
    lo = function (a, b, c) {
      c || (c = b.length);
      a.total += c;
      for (var d = 0; d < c; ++d) (a.buffer[a.kg++] = b[d]), 64 == a.kg && (no(a, a.buffer), (a.kg = 0));
    },
    mo = function (a) {
      var b = Array(16),
        c = 8 * a.total,
        d = a.kg;
      lo(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
      for (var e = 56; 64 > e; ++e) (a.buffer[e] = c & 255), (c >>>= 8);
      no(a, a.buffer);
      for (e = d = 0; 4 > e; ++e) for (c = 0; 32 > c; c += 8) b[d++] = (a.na[e] >> c) & 255;
      return b;
    },
    jo = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1,
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0,
    ],
    po = [
      7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14,
      20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
      10, 15, 21,
    ],
    oo = [
      3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416,
      2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664,
      643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335,
      1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740,
      2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809,
      3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690,
      4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259,
      3951481745,
    ];
  var qo = function () {};
  Ha(qo, wn);
  qo.prototype.getType = function () {
    return 150;
  };
  qo.prototype.bold = function (a, b) {
    b = wm(b.replace(Zl, ""));
    a = wm(ym(a, !0));
    if (zm(b, a)) return a + "<b>" + b.substr(a.length) + "</b>";
    for (var c = "", d = [], e = b.length - 1, f = 0, h = -1, k; (k = b.charAt(f)); ++f)
      " " == k || "\t" == k
        ? c.length && (d.push({ t: c, If: h, e: f + 1 }), (c = ""), (h = -1))
        : ((c += k), -1 == h ? (h = f) : f == e && d.push({ t: c, If: h, e: f + 1 }));
    a = this.vv(a, d);
    if (!a.length) return "<b>" + b + "</b>";
    c = "";
    for (f = e = 0; (h = a[f]); ++f)
      (k = d[h.If].If) && (c += "<b>" + b.substring(e, k - 1) + "</b> "), (e = d[h.e].e), (c += b.substring(k, e));
    e < b.length && (c += "<b>" + b.substring(e) + "</b> ");
    return c;
  };
  qo.prototype.vv = function (a, b) {
    var c = a.split(/\s+/);
    a = {};
    for (var d = 0, e; (e = c[d++]); ) a[e] = 1;
    c = -1;
    var f = [],
      h = b.length - 1;
    for (d = 0; (e = b[d]); ++d)
      a[e.t]
        ? ((e = -1 == c), d == h ? f.push({ If: e ? d : c, e: d }) : e && (c = d))
        : -1 < c && (f.push({ If: c, e: d - 1 }), (c = -1));
    return f;
  };
  var ro = function () {};
  Ha(ro, wn);
  var so = function (a) {
    return a
      .split(",")
      .map(function (b) {
        return String.fromCharCode(12288 + parseInt(b, 16)) + b.substring(2);
      })
      .join("");
  };
  ro.prototype.getType = function () {
    return 146;
  };
  so(
    "02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"
  );
  so("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");
  so("D1,D4,D7,DA,DD");
  so("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");
  so("D1__,D4__,D7__,DA__,DD");
  so("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");
  so("CF,D2,D5,D8,DB");
  var to = function () {
    this.Xo = !0;
  };
  Ha(to, wn);
  g = to.prototype;
  g.Ja = function (a, b) {
    this.Ud = a.Zd();
    b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
    b.addRule(
      ".gssb_e",
      "border:1px solid #ccc;border-top-color:#d9d9d9;" +
        b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") +
        "cursor:default"
    );
    b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
    b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
    b.addRule(".gsdd_a", "border:none!important");
  };
  g.aa = function (a) {
    this.xt = a.get(115, this);
    this.K = a.get(118, this);
    this.R = a.get(117, this);
    this.Bq = a.uh.ua();
  };
  g.ya = function (a) {
    this.C = a;
    this.Mt();
    (a.ff || document.body).appendChild(this.Aa);
    this.R.Cc(8, db(this.Dc, this));
  };
  g.J = function (a) {
    this.C = a;
    this.Aa.style.position = a.gf;
  };
  g.getType = function () {
    return 116;
  };
  g.Vk = function (a) {
    a != this.Cf &&
      ((this.Cf = a),
      (a = a.qa()),
      this.kk ? a != this.kk && this.fb.replaceChild(a, this.kk) : this.fb.appendChild(a),
      (this.kk = a));
  };
  g.Ub = function () {
    this.nh || (this.nh = this.fb ? Math.max(this.fb.offsetHeight, 0) : 0);
    return this.nh;
  };
  g.show = function (a) {
    this.yy(a);
    this.Hc(this.Di, !0);
    this.Hc(this.kc, !0);
    this.R.ta(16);
    this.Dc();
  };
  g.dd = function () {
    this.nh = 0;
    this.Hc(this.Di, !1);
    this.Hc(this.kc, !1);
    this.He(this.Ud);
    this.R.ta(11);
  };
  g.Dc = function () {
    this.nh = 0;
    this.kq();
    this.Wy();
    this.Cf && this.Cf.Dc();
  };
  g.zh = function (a) {
    this.Oj ? this.Po != a && this.Oj.replaceChild(a, this.Po) : (this.Ht(), this.Oj.appendChild(a));
    this.Po = a;
  };
  g.Ht = function () {
    var a = this.Aa.insertRow(-1);
    a.style.height = "0";
    a.insertCell(-1);
    this.Oj = a.insertCell(-1);
    this.xt.isVisible() || (this.Hc(this.fb, !1), this.Hc(this.Aa, !0), this.Dc());
    this.Di = this.fb;
  };
  g.Mt = function () {
    this.Aa = Um();
    this.Aa.className = "gstl_" + this.Bq + " gssb_c";
    this.Hc(this.Aa, !1);
    this.Di = this.Aa;
    var a = this.Aa.insertRow(-1);
    this.ke = a.insertCell(-1);
    this.ke.className = "gssb_f";
    this.bk = Vm();
    this.fb = a.insertCell(-1);
    this.fb.className = "gssb_e";
    this.fb.style.width = "100%";
    this.C.rw &&
      ((this.kc = Tm("iframe", "gstl_" + this.Bq + " gssb_k")),
      this.Hc(this.kc, !1),
      (this.C.ff || document.body).appendChild(this.kc));
    if ((this.Td = this.C.Ym)) "number" == typeof this.Td && (this.Td += this.C.Od[2]), this.fl(this.Aa, this.Td);
    this.kq();
  };
  g.kq = function () {
    var a = this.Cf && this.Cf.be(),
      b = a ? a.offsetWidth : this.K.ce(),
      c = this.Td;
    c
      ? "string" == typeof c && (c = null)
      : this.rp || !this.Xo
      ? ((this.fb.style.width = ""), (this.Aa.style.width = ""))
      : ((this.fb.style.width = "100%"), (c = b + this.C.Od[2]), this.fl(this.Aa, c));
    if ("relative" != this.C.gf) {
      var d = this.K.xj();
      a && (d.Fb = Sm(a).Fb);
      a = this.Sv(d, b, c);
      b = { Fb: 0, Re: 0 };
      "absolute" == this.C.gf && this.C.ff && this.C.ff != document.body && (b = Sm(this.C.ff));
      d = this.Aa.style;
      d.top = a.Re - b.Re + "px";
      d.left = d.right = "";
      void 0 != a.Fb ? (d.left = a.Fb - b.Fb + "px") : (d.right = a.jz + b.Fb + "px");
    }
    Gm && ((d.zoom = "normal"), (d.zoom = 1));
  };
  g.Sv = function (a, b, c) {
    var d = this.C.Od,
      e = d[1];
    d = d[0];
    d = a.Re + this.K.Ub() + d;
    if ("right" == this.Jo)
      return { jz: (fn(this.Aa) || window).document.documentElement.clientWidth - (a.Fb - e + b), Re: d };
    a = a.Fb + e;
    "center" == this.Jo && c && (a += (b - c) / 2);
    return { Fb: a, Re: d };
  };
  g.eA = function (a, b) {
    a.style.height = Math.max(b, 0) + "px";
  };
  g.fl = function (a, b) {
    "number" == typeof b ? 0 < b && (a.style.width = b + "px") : (a.style.width = b);
  };
  g.Wy = function () {
    if (this.kc) {
      var a = this.C.Ps[0],
        b = this.kc.style;
      "relative" != this.C.gf &&
        ((b.top = this.Aa.style.top), (b.left = this.Aa.offsetLeft + this.ke.offsetWidth + "px"));
      this.eA(this.kc, this.Ub() + a);
      this.fl(this.kc, this.fb.offsetWidth);
    }
  };
  g.Hc = function (a, b) {
    a && (a.style.display = b ? "" : "none");
  };
  g.He = function (a) {
    this.Qa != a && ((this.Qa = a), Xm(this.Aa, a));
  };
  g.sA = function (a) {
    if (this.rp != a) {
      var b = this.bk.style;
      a
        ? (this.ke.hasChildNodes() || this.ke.appendChild(this.bk), (b.width = a + "px"), Im && (b.paddingLeft = "1px"))
        : (this.ke.hasChildNodes() && this.ke.removeChild(this.bk), (b.paddingLeft = ""));
      this.rp = a;
    }
  };
  g.yy = function (a) {
    this.fb.className = a.tw ? "gssb_e gsdd_a" : "gssb_e";
    this.He(a.Ld || this.Ud);
    this.sA(a.marginWidth);
    this.Xo = a.Wo;
    this.Jo = a.Lj;
  };
  var uo = function () {
    function a(w, G) {
      Ma && ((Ma = !1), I.xl(p, P), I.xl(p, ea));
      G || (G = w);
      p.parentNode.replaceChild(w, p);
      G.appendChild(p);
      qa &&
        N.Hy &&
        (Em || Im
          ? I.defer(function () {
              p.focus();
              Rm(p, Da.Mg());
            })
          : p.focus());
      wa();
    }
    function b() {
      return Sa;
    }
    function c(w) {
      var G = ("rtl" == w) == ("rtl" == la);
      p.dir = w;
      if (lb) {
        xa.Rk(w);
        var ra = Na.parentNode;
        ra.removeChild(lb);
        G ? Na.parentNode.insertBefore(lb, Na.nextSibling) : ra.insertBefore(lb, Na);
      }
      Sa &&
        ((Sa.dir = w),
        (ra = Sa.parentNode),
        ra.removeChild(Sa),
        G ? ra.insertBefore(Sa, Na) : Na.parentNode.insertBefore(Sa, Na.nextSibling));
      0 != K &&
        ((G = 0),
        (ra = p.style),
        "INPUT" != p.nodeName && (G += 1),
        (ra.left = ra.right = ""),
        (ra["rtl" == w ? "right" : "left"] = G + "px"));
    }
    function d() {
      return Da;
    }
    function e() {
      return Sm(Ra);
    }
    function f() {
      var w = Ra ? Ra.offsetHeight : 0;
      va > w && (w = va);
      return w;
    }
    function h() {
      return Qa ? Qa : Ra ? Ra.offsetWidth : 0;
    }
    function k() {
      var w = p.offsetWidth;
      N.ep && (w -= p.offsetHeight);
      return w;
    }
    function l() {
      return p.value;
    }
    function m(w) {
      var G = N.Fn ? p : Na || mb || p;
      G.style.background = w || "transparent";
      N.di && (G.style.textIndent = -1 == w.indexOf("url") ? "0" : N.di + "px");
    }
    function r() {
      cb = !0;
    }
    function t() {
      p.select();
      ya();
    }
    function v() {
      Nm && (p.value = "");
      p.value = C.pa();
      Nm && (p.value = p.value);
      M();
    }
    function x() {
      if (!qa)
        try {
          p.focus(), (qa = !0), M();
        } catch (w) {}
    }
    function Q() {
      qa && (p.blur(), (qa = !1));
    }
    function X() {
      return qa;
    }
    function S() {
      p.value = "";
    }
    function sa() {
      var w = bb.get("gs_id");
      if (w) (Sa = bb.get("gs_ttc")), (Na = bb.get("gs_tti")), C.Ij() && xa && ((Cb = xa.qa()), (lb = Cb.parentNode));
      else {
        w = Um();
        w.id = bb.ua("gs_id");
        w.className = "gstl_" + pa + " " + (N.tl || p.className);
        var G = w.insertRow(-1),
          ra = w.style,
          Xa = p.style;
        ra.width = Qa ? Qa + "px" : Xa.width;
        ra.height = va ? va + "px" : Xa.height;
        ra.padding = "0";
        ra = p.style;
        ra.border = "none";
        ra.padding = Jm || Em ? "0 1px" : "0";
        ra.margin = "0";
        ra.height = "auto";
        ra.width = "100%";
        p.className = N.Rj;
        J && ((Sa = G.insertCell(-1)), (Sa.id = bb.ua("gs_ttc")), (Sa.style.whiteSpace = "nowrap"));
        Na = G.insertCell(-1);
        Na.id = bb.ua("gs_tti");
        Na.className = "gsib_a";
        C.Ij() && xa && ((Cb = xa.qa()), (lb = G.insertCell(-1)), (lb.className = "gsib_b"), lb.appendChild(Cb));
        a(w, Na);
      }
      Om && Km && ((p.style.height = "1.25em"), (p.style.marginTop = "-0.0625em"));
      H(w);
      Ra = w;
    }
    function M() {
      if (qa) {
        var w = p.value.length;
        Da = tm(w);
        Rm(p, w);
      }
    }
    function H(w) {
      I.Ha(w, "mouseup", function () {
        p.focus();
      });
    }
    function da() {
      I.Ha(p, "keydown", ja);
      (Jm || N.et) && I.Ha(p, "keypress", F);
      I.Ha(p, "select", ya, 10);
      var w = !1,
        G = function (ra) {
          I.Ha(p, ra, W, 10, w);
        };
      G("mousedown");
      G("keyup");
      G("keypress");
      w = !0;
      G("mouseup");
      G("keydown");
      G("focus");
      G("blur");
      G("cut");
      G("paste");
      G("input");
      I.Ha(p, "compositionstart", aa);
      I.Ha(p, "compositionend", aa);
    }
    function aa(w) {
      w = w.type;
      "compositionstart" == w ? C.Vq(!0) : "compositionend" == w && C.Vq(!1);
    }
    function ja(w) {
      var G = w.keyCode;
      Ub = G;
      var ra = (Km || Im) && (38 == G || 40 == G) && ca.cd(),
        Xa = G == D.Gl,
        Cd = G == D.Th;
      Mb = !1;
      G == D.Hl && (Mb = C.de());
      Xa &&
        ((G = ca.sf()) && T(G)
          ? ca.Tg(w.shiftKey)
          : I.defer(function () {
              ca.Tg(w.shiftKey);
            }));
      if (ra || Xa || Cd || Mb) w.fh = !0;
    }
    function T(w) {
      return (w = n[w.getType()].aF) && w();
    }
    function F(w) {
      var G = w.keyCode,
        ra = G == D.Th,
        Xa = G == D.Hl && Mb;
      if (G == D.Gl || ra || Xa) w.fh = !0;
    }
    function W(w) {
      if (!Ta) {
        var G = w.Xf;
        if (!(G.indexOf("key") || w.ctrlKey || w.altKey || w.shiftKey || w.metaKey))
          a: if (((w = w.keyCode), "keypress" != G)) {
            var ra = 38 == w || 40 == w;
            if ("keydown" == G) {
              if ((C.lA(229 == w), ra)) break a;
            } else {
              var Xa = w != Ub;
              Ub = -1;
              if (!ra || Xa) break a;
            }
            switch (w) {
              case D.Th:
                C.fw();
                break;
              case D.bs:
                C.kw();
                break;
              case D.cs:
                C.lw();
                break;
              case D.ds:
                C.ow();
                break;
              case D.Zr:
                C.dw(Da);
                break;
              case D.fs:
                C.cw(Da);
                break;
              case D.es:
                C.Zv(Da);
            }
          }
        ya();
        C.yo(p.value, Da, G);
      }
    }
    function P() {
      qa = !0;
      C.hw();
    }
    function ea() {
      qa = !1;
      C.vo();
    }
    function wa() {
      Ma || ((Ma = !0), I.Ha(p, "focus", P, 99), I.Ha(p, "blur", ea, 99));
    }
    function Ea() {
      fa || (fa = window.setInterval(Ca, N.py || 50));
    }
    function kb() {
      fa && (window.clearTimeout(fa), (fa = null));
    }
    function Ca() {
      W({ Xf: "polling" });
    }
    function Ja() {
      if (Im) {
        var w = p,
          G = document.createEvent("KeyboardEvent");
        G.initKeyEvent && (G.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0), w.dispatchEvent(G));
      }
    }
    function ya() {
      if (qa) {
        a: {
          var w = p;
          try {
            if ("selectionStart" in w) {
              var G = w.selectionStart;
              var ra = w.selectionEnd;
            } else {
              var Xa = w.createTextRange(),
                Cd = en(w).selection.createRange();
              Xa.inRange(Cd) &&
                (Xa.setEndPoint("EndToStart", Cd),
                (G = Xa.text.length),
                Xa.setEndPoint("EndToEnd", Cd),
                (ra = Xa.text.length));
            }
            if (void 0 !== G) {
              var th = tm(G, ra);
              break a;
            }
          } catch (tp) {}
          th = null;
        }
        th && (Da = th);
      }
    }
    function u() {
      var w;
      I.xc(window, "pagehide", function () {
        Ta = !0;
        w = p.value;
      });
      I.xc(window, "pageshow", function (G) {
        Ta = !1;
        (G.persisted || void 0 !== w) && C.Lb(w);
      });
    }
    var D = $l,
      C,
      ca,
      I,
      xa,
      n,
      p,
      K,
      pa,
      N,
      qa,
      Ma = !1,
      Fa,
      fa,
      Da = tm(0),
      Ub = -1,
      cb = !1,
      Na,
      Ra,
      Sa,
      lb,
      Cb,
      Mb,
      Ta,
      J,
      la,
      bb,
      va,
      Qa,
      mb,
      nb = {
        Ja: function (w, G) {
          bb = w;
          p = w.Yn();
          la = w.Zd();
          w.hg() ||
            (G.addRule(".gsib_a", "width:100%;padding:4px 6px 0"),
            Hm && G.addRule(".gsib_a input::-ms-clear", "display: none"),
            G.addRule(".gsib_a,.gsib_b", "vertical-align:top"));
        },
        aa: function (w) {
          C = w.get(118, nb);
          I = w.get(117, nb);
          ca = w.get(128, nb);
          xa = w.get(173, nb);
          n = dn(w.Sa(152, nb));
          w = w.uh;
          K = w.Zn();
          pa = w.ua();
        },
        ya: function (w) {
          N = w;
          va = w.Ro;
          Qa = w.Sw;
          a: {
            try {
              qa = en(p).activeElement == p;
              break a;
            } catch (G) {}
            qa = !1;
          }
          ya();
          Em &&
            I.Ha(
              p,
              "beforedeactivate",
              function (G) {
                cb && ((cb = !1), (G.fh = !0));
              },
              10
            );
          Im && u();
          Ra = p;
          J = !!w.Bg[130];
          (C.yw() || C.Ij() || J || w.Bu) && sa();
          w.pu && (I.Ha(p, "blur", kb, 10), I.Ha(p, "focus", Ea, 10), (Fa = !0));
          I.Cc(8, Ja);
          da();
          wa();
        },
        J: function (w) {
          N = w;
          var G = w.Rw;
          G && (mb = bb.mj(G));
          p.setAttribute("autocomplete", "off");
          p.setAttribute("spellcheck", !1);
          p.style.outline = w.Tx ? "" : "none";
          Fa && Ea();
        },
        getType: function () {
          return 119;
        },
        ab: function () {
          return {
            mG: a,
            Mn: b,
            Rk: c,
            Xd: d,
            xj: e,
            Ub: f,
            ce: h,
            ao: k,
            lv: l,
            Ah: m,
            nk: r,
            select: t,
            refresh: v,
            focus: x,
            blur: Q,
            Vj: X,
            clear: S,
          };
        },
        Ca: function () {
          Fa && kb();
          N.Go && I.xl(p, C.vo);
        },
      };
    return nb;
  };
  var vo = function () {
    function a(n, p) {
      if (!ya) return !1;
      Ca = p;
      sa();
      p = !1;
      for (var K, pa = 0; (K = n[pa++]); ) v(K) && (p = !0);
      return p;
    }
    function b(n) {
      var p = aa[n.getType()];
      return p && p.nw ? p.nw(n) : !1;
    }
    function c(n) {
      return aa[n.getType()].wo(null, n, ja);
    }
    function d(n) {
      var p = aa[n.getType()];
      return p && p.gj ? p.gj(n, da.Ab()) : n.Zc();
    }
    function e(n, p) {
      if (!ya) return !1;
      Ca = p;
      sa();
      p = !1;
      for (var K, pa = 0; (K = n[pa++]); )
        if (1 == K)
          if (D) u.appendChild(D);
          else {
            K = Q();
            var N = K.style;
            N.textAlign = "center";
            N.whiteSpace = "nowrap";
            K.dir = Ja;
            N = Vm();
            N.style.position = "relative";
            C = Vm();
            C.className = "gssb_g";
            F.Co && (C.style.paddingBottom = "1px");
            x(F.xz, C, 13);
            F.xw ? x(F.pn, C, 8) : F.Dw && x(F.Az, C, 14);
            N.appendChild(C);
            K.appendChild(N);
            D = K.parentNode;
          }
        else if (2 == K)
          if (ca) u.appendChild(ca);
          else {
            K = Q();
            N = K.style;
            N.padding = "1px 4px 2px 0";
            N.fontSize = "11px";
            N.textAlign = "right";
            N = Tm("a");
            N.id = "gssb_b";
            var qa = N,
              Ma = ai("http://www.google.com/support/websearch/bin/answer.py?hl=" + F.Tj + "&answer=106230");
            void 0 !== Ma && (qa.href = Ma);
            ci(N, Vi.Ec(F.Hx));
            K.appendChild(N);
            ca = K.parentNode;
          }
        else
          3 == K
            ? (K = wa.pop())
              ? u.appendChild(K)
              : ((K = ya.insertRow(-1)),
                (K.Ax = !0),
                (K = K.insertCell(-1)),
                (N = Tm("div", "gssb_l")),
                K.appendChild(N))
            : v(K) && (p = !0);
      return p;
    }
    function f(n) {
      X(n, I);
      var p = M.Yc();
      p && H.ta(9, { index: n, kG: p[n], nG: Ea[n] });
    }
    function h(n) {
      X(n, "");
      H.ta(10);
    }
    function k() {
      for (var n, p, K; (K = P.pop()); )
        (n = K.getType()), (p = W[n]) || (p = W[n] = []), p.push(K), (n = K.qa()), n.parentNode.removeChild(n);
      for (; (n = u.firstChild); ) (n = u.removeChild(n)), n.Ax ? wa.push(n) : n != D && n != ca && ea.push(n);
      Ea = [];
    }
    function l(n) {
      return (n = Ea[n]) ? n.gh() : !1;
    }
    function m() {
      sa();
    }
    function r() {
      return ya;
    }
    function t() {
      return F.Ao || Ja == Ca ? kb : null;
    }
    function v(n) {
      var p = n.getType(),
        K = aa[p];
      if (!K) return !1;
      var pa = (p = W[p]) && p.pop();
      pa || (pa = K.Km(ja));
      K.render(n, pa);
      P.push(pa);
      var N = pa.qa();
      p = Q();
      p.className = "gssb_a " + F.zr;
      p.appendChild(N);
      if (void 0 !== n.sj) {
        Ea.push(pa);
        pa = Ca;
        var qa = n.sj();
        F.Kw &&
          ((N.onmouseover = function () {
            M.fA(qa);
          }),
          (N.onmouseout = function () {
            M.dz();
          }));
        N.onclick = function (Ma) {
          da.gi();
          n.Wn() && da.Sk(n.Zc());
          M.cz();
          M.bw(qa);
          Ma = Ma || fn(N).event;
          K.uf(Ma, n, ja);
        };
      } else pa = Ja;
      Xm(p, pa);
      return !0;
    }
    function x(n, p, K) {
      var pa = Tm("input");
      pa.type = "button";
      pa.value = xm(n);
      pa.onclick = function () {
        ja.search(da.pa(), K);
      };
      if (F.uw) {
        n = "lsb";
        var N = Tm("span");
        var qa = Tm("span");
        N.className = "ds";
        qa.className = "lsbb";
        N.appendChild(qa);
        qa.appendChild(pa);
      } else (n = "gssb_h"), (N = pa);
      pa.className = n;
      p.appendChild(N);
    }
    function Q() {
      var n = ea.pop();
      if (n) return u.appendChild(n), n.firstChild;
      n = ya.insertRow(-1);
      n = n.insertCell(-1);
      n.className = F.zr;
      n.onmousedown = S;
      return n;
    }
    function X(n, p) {
      (n = Ea[n]) && n.gh() && (n.qa().parentNode.parentNode.className = p);
    }
    function S(n) {
      n = n || fn(ya).event;
      n.stopPropagation ? n.stopPropagation() : Jm || (Em && da.nk());
      return !1;
    }
    function sa() {
      if (C) {
        var n = da.ce() - 3;
        0 < n && (C.style.width = n + "px");
      }
    }
    var M,
      H,
      da,
      aa,
      ja,
      T,
      F,
      W = {},
      P = [],
      ea = [],
      wa = [],
      Ea = [],
      kb,
      Ca,
      Ja,
      ya,
      u,
      D,
      C,
      ca,
      I,
      xa = {
        Ja: function (n, p) {
          T = n;
          Ja = n.Zd();
          p.addRule(".gssb_a", "padding:0 7px");
          p.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
          p.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
          p.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
          p.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
          p.addRule(".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (Km ? ";-webkit-appearance:button" : ""));
          p.addRule(".gssb_i", "background:#eee");
          p.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
          p.addRule(".gssb_i .gss_ifl", "visibility:visible");
          p.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
          p.addRule("a.gssb_j:hover", "text-decoration:underline");
          p.addRule(".gssb_l", "height:1px;background-color:#e5e5e5");
          p.addRule(".gssb_m", "color:#000;background:#fff");
        },
        aa: function (n) {
          M = n.get(128, xa);
          H = n.get(117, xa);
          da = n.get(118, xa);
          ja = n.get(121, xa);
          aa = dn(n.Sa(152, xa));
        },
        ya: function (n) {
          F = n;
          ya = Um();
          n = Tm("tbody");
          ya.appendChild(n);
          u = ya.getElementsByTagName("tbody")[0];
        },
        J: function (n) {
          F = n;
          var p = n.aq;
          p && (kb = T.mj(p));
          ya.className = n.Er || "gssb_m";
          I = n.Ar || "gssb_i";
        },
        getType: function () {
          return 129;
        },
        ab: function () {
          return { Sy: a, gj: d, Tg: c, de: b, render: e, Jw: f, Mh: h, clear: k, gh: l, Dc: m, qa: r, be: t };
        },
      };
    return xa;
  };
  var wo = function () {};
  Ha(wo, wn);
  g = wo.prototype;
  g.Ja = function (a) {
    this.ly = a.Sn() || document.body;
  };
  g.ya = function (a) {
    this.C = a;
  };
  g.getType = function () {
    return 147;
  };
  g.ce = function (a) {
    var b = 0;
    a &&
      (this.Ib || this.ym(),
      this.mm(),
      a in this.ki ? (b = this.ki[a]) : (Wm(this.Ib, wm(a)), (this.ki[a] = b = this.Ib.offsetWidth), Wm(this.Ib, "")));
    return b;
  };
  g.Ub = function () {
    this.Ib || this.ym();
    this.mm();
    this.ji || (Wm(this.Ib, "|"), (this.ji = this.Ib.offsetHeight));
    return this.ji;
  };
  g.ym = function () {
    var a = Vm(this.C.Rj),
      b = a.style;
    b.background = "transparent";
    b.color = "#000";
    b.padding = 0;
    b.position = "absolute";
    b.whiteSpace = "pre";
    this.Ib = a;
    this.Ib.style.visibility = "hidden";
    this.ly.appendChild(this.Ib);
  };
  g.mm = function () {
    var a = sm();
    if (!this.cm || this.cm + 3e3 < a) {
      this.cm = a;
      a = this.Ib;
      var b = fn(a);
      a = (a = b.getComputedStyle ? b.getComputedStyle(a, "") : a.currentStyle) ? a.fontSize : null;
      (this.dm && a == this.dm) || ((this.ki = {}), (this.ji = null), (this.dm = a));
    }
  };
  var xo = function () {
    this.Gd = {};
    this.set(191, new ho());
    this.set(150, new qo());
    this.set(146, new ro());
    this.set(147, new wo());
    this.fc(149, zn());
    this.set(145, new Gn());
    this.set(117, new In());
    this.set(494, new Ln());
    this.set(374, new Mn());
    this.set(120, new Nn());
    this.set(121, new Sn());
    this.set(553, new Un());
    this.set(124, new bo());
    this.set(125, new co());
    this.set(123, new Wn());
    this.set(126, new fo());
    this.set(127, new go());
    this.set(115, new An());
    this.set(118, new Cn());
    this.set(128, Dn());
    this.set(116, new to());
    this.set(119, uo());
    this.set(129, vo());
  };
  fb(xo, nn);
  function yo() {
    return {
      uj: function () {
        return {
          Ye: "hp",
          rh: "hp",
          yt: "google.com",
          bB: "",
          Tj: "en",
          Mm: "",
          ty: "",
          HB: "",
          Xl: 0,
          Kx: "",
          nl: "",
          dn: !1,
          Zy: "",
          Dk: "",
          ti: 0,
          transport: null,
          Pr: !1,
          UF: !1,
          Yg: !1,
          ol: rm([19, 5, 0]),
          lu: !0,
          qE: 10,
          ju: !0,
          mu: !0,
          iE: !1,
          Au: !1,
          tx: !1,
          ep: !1,
          dF: !1,
          QE: !1,
          MD: !0,
          hG: "en",
          di: 0,
          Go: !0,
          au: !1,
          Iw: 500,
          Gj: !1,
          Wg: !0,
          Fo: !0,
          Aw: !1,
          Ep: "",
          zF: "//www.google.com/textinputassistant",
          AF: "",
          CF: 7,
          LE: !1,
          ME: !1,
          Cw: !1,
          xw: !0,
          Dw: !1,
          Co: !1,
          wz: !1,
          vz: !1,
          pl: 1,
          Rx: !0,
          hj: !1,
          on: !1,
          pu: !1,
          py: 10,
          zo: !1,
          Hy: !0,
          ff: document.body,
          Ew: !0,
          wr: null,
          Bg: {},
          oE: {},
          MF: 0,
          Bu: !1,
          Mw: !0,
          Nc: !1,
          rE: !1,
          WE: !1,
          eG: null,
          nu: !1,
          mF: null,
          ZA: null,
          nE: !1,
          Kw: !0,
          et: !1,
          oG: 1,
          Tx: !1,
          xz: "Search",
          pn: "I'm  Feeling Lucky",
          Az: "",
          Hx: "Learn more",
          RF: "Remove",
          PF: "This search was removed from your Web History",
          RE: "",
          hE: "Did you mean:",
          BF: "",
          ZF: "",
          iG: "Search by voice",
          gG: 'Listening for "Ok Google"',
          fG: 'Say "Ok Google"',
          Fn: !1,
          Rw: null,
          Ro: 0,
          Sw: 0,
          Rj: "",
          zr: "",
          cF: !1,
          gf: "absolute",
          uw: !1,
          rw: !1,
          aq: null,
          Ao: !0,
          Od: [0, 0, 0],
          Ym: null,
          Dr: null,
          Ps: [0],
          QF: 1,
          tl: "",
          Er: "",
          Ar: "",
          Cn: null,
          En: "",
          Dn: "",
          XD: 1,
        };
      },
    };
  }
  var zo = function () {};
  Ha(zo, wn);
  g = zo.prototype;
  g.Ja = function (a, b) {
    this.Da = a;
    a.hg() ||
      (b.addRule(".gscb_a", "display:inline-block;font:27px/13px arial,sans-serif"),
      b.addRule(".gsst_a .gscb_a", "color:#a1b9ed;cursor:pointer"),
      b.addRule(".gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a", "color:#36c"));
  };
  g.aa = function (a) {
    this.K = a.get(118, this);
    this.R = a.get(117, this);
    this.zm = a.get(173, this);
  };
  g.ya = function (a) {
    this.eh = !!a.Wg;
    this.Lr(a);
    this.Qf = this.Da.get("gs_cb");
    this.Qf || ((this.Qf = Tm("span", "gscb_a")), (this.Qf.id = this.Da.ua("gs_cb")), ci(this.Qf, Vi.Ec("&times;")));
    a = db(this.jw, this);
    this.R.Cc(4, a);
    this.R.Cc(5, a);
    this.R.Cc(1, a);
  };
  g.J = function (a) {
    a.Gj && (this.eh = !!a.Wg);
    this.Lr(a);
  };
  g.getType = function () {
    return 160;
  };
  g.isEnabled = function () {
    return this.eh;
  };
  g.Rg = function () {
    return Ao;
  };
  g.mb = function () {
    return 5;
  };
  g.qa = function () {
    return this.Qf;
  };
  g.zj = function () {
    return { Yo: !this.wa };
  };
  g.uf = function () {
    this.K.clear(!0);
  };
  g.Lr = function (a) {
    this.Io = a.Fo;
    this.wa = !this.Io || !!this.K.pa();
  };
  g.CB = function () {
    var a = this.Rg();
    this.wa && this.eh ? this.zm.TA(a) : this.zm.Ho(a);
  };
  g.jw = function () {
    this.Io && ((this.wa = !!this.K.pa()), this.CB());
  };
  var Ao = qm++;
  var Bo = function () {
    this.Oe = {};
  };
  Ha(Bo, wn);
  g = Bo.prototype;
  g.Ja = function (a, b) {
    this.Da = a;
    this.Ud = a.Zd();
    a.hg() ||
      (b.addRule(".gsst_a", "display:inline-block"),
      b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"),
      b.addRule(".gsst_a:hover", "text-decoration:none!important"),
      b.addRule(
        ".gsst_b",
        "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") + "white-space:nowrap"
      ),
      b.addRule(".gsst_e", "vertical-align:middle;" + (gn() + ":" + hn(0.55) + ";")),
      b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", gn() + ":" + hn(0.72) + ";"),
      b.addRule(".gsst_a:active .gsst_e", gn() + ":" + hn(1) + ";"),
      b.addRule(".gsst_f", "background:white;text-align:left"),
      b.addRule(
        ".gsst_g",
        "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" +
          b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") +
          "margin:-1px -3px;padding:0 6px"
      ),
      b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"));
  };
  g.Vd = function () {
    var a = {
      gg: db(this.gg, this),
      qa: db(this.Xu, this),
      be: db(this.be, this),
      Ug: db(this.Ug, this),
      Dc: Am,
      qf: db(this.qf, this),
    };
    return [
      {
        Ja: Am,
        aa: Am,
        ya: Am,
        J: Am,
        getType: function () {
          return 154;
        },
        ab: function () {
          return a;
        },
        Vd: function () {
          return null;
        },
        Ca: Am,
      },
    ];
  };
  g.aa = function (a) {
    this.hu = a.get(115, this);
    this.R = a.get(117, this);
    this.K = a.get(118, this);
    this.Pe = a.Sa(160, this);
    this.L = a.L;
  };
  g.getType = function () {
    return 173;
  };
  g.ya = function (a) {
    this.vw = a.Gj;
    this.Pe.sort(Co);
    this.oa = this.Da.get("gs_st");
    if (!this.oa) {
      this.oa = Vm("gsst_b");
      this.oa.id = this.Da.ua("gs_st");
      if ((a = a.Ro)) this.oa.style.lineHeight = a + "px";
      this.tn();
    }
    this.tm();
  };
  g.J = function (a) {
    this.C = a;
    if ((a = a.aq)) this.Iy = this.Da.mj(a);
    if (this.vw) {
      a = 0;
      for (var b; (b = this.Pe[a++]); ) {
        var c = !!this.Oe[b.Rg()];
        if (b.isEnabled() != c) {
          for (; this.oa.hasChildNodes(); ) this.oa.removeChild(this.oa.lastChild);
          this.tn();
          this.tm();
          break;
        }
      }
    }
    this.gu = Vm("gsst_h");
    this.Fi = Vm("gsst_f");
    this.Fi.dir = "ltr";
    this.Fi.appendChild(this.gu);
    this.R.Cc(13, db(this.aw, this));
  };
  g.Rk = function (a) {
    this.Qa != a && ((this.oa.dir = this.Qa = a), this.Jj());
  };
  g.qa = function () {
    return this.oa;
  };
  g.TA = function (a) {
    (a = this.Oe[a]) && a.style && (a.style.display = "");
  };
  g.Ho = function (a) {
    (a = this.Oe[a]) && a.style && (a.style.display = "none");
  };
  g.Jj = function () {
    this.Hi && ((this.Oe[this.Hi].className = "gsst_a"), this.hu.dd(), (this.Hi = null));
  };
  g.gg = function (a) {
    a.Lj = "rtl" == this.Qa ? "left" : "right";
    a.Wo = !1;
  };
  g.Xu = function () {
    return this.Fi;
  };
  g.be = function () {
    return this.C.Ao || this.Ud == this.Qa ? this.Iy : null;
  };
  g.Ug = function () {
    this.Jj();
  };
  g.qf = function () {
    return Do;
  };
  var Co = function (a, b) {
    return b.mb() - a.mb();
  };
  g = Bo.prototype;
  g.aw = function () {
    this.Ko != this.Hi && this.Jj();
  };
  g.tn = function () {
    for (var a, b = 0, c; (c = this.Pe[b++]); )
      if (c.isEnabled()) {
        a = !0;
        var d = Tm("a", "gsst_a");
        this.qu(d, c);
        d.appendChild(c.qa());
        this.oa.appendChild(d);
      }
    this.oa.style.display = a ? "" : "none";
  };
  g.jt = function () {
    this.Ko = null;
  };
  g.tm = function () {
    this.Oe = {};
    for (var a = 0, b; (b = this.Pe[a++]); )
      if (b.isEnabled()) {
        var c = b.Rg(),
          d = b.qa().parentNode;
        d.onclick = db(b.uf, b);
        d.onmouseover = function () {
          this.Ko = c;
        };
        d.onmouseout = this.jt;
        this.Oe[c] = d;
        b.zj && ((b = b.zj()), b.Yo && this.Ho(c), (b = b.qG) && !this.L.dl(d, b) && (d.title = b));
      }
  };
  g.qu = function (a, b) {
    a.href = "javascript:void(0)";
    Jm && (a.tabIndex = 0);
    a.onkeydown = function (c) {
      c = c || window.event;
      var d = c.keyCode;
      if (13 == d || 32 == d) b.uf(c), this.K.zu(), an(c);
    };
  };
  var Do = qm++;
  function Eo() {}
  Eo.prototype.gh = function () {
    return !0;
  };
  var Fo = function (a, b) {
    this.K = a;
    this.sB = b;
    this.ge();
  };
  Ha(Fo, Eo);
  Fo.prototype.qa = function () {
    return this.oa;
  };
  Fo.prototype.getType = function () {
    return 0;
  };
  Fo.prototype.render = function (a, b, c) {
    ci(this.Cr, Vi.Ec(a));
    this.Qr = b;
    c &&
      !this.Qd &&
      ((this.Qd = bn(this.Br)),
      (this.Qd.onclick = db(function (d) {
        this.K.gi();
        this.K.Sk(this.Qr);
        this.sB.search(this.Qr, 9);
        return an(d);
      }, this)));
    c
      ? (ci(this.Qd, Vi.Ec(c + " &raquo;")), (this.Qd.style.display = ""))
      : this.Qd && (this.Qd.style.display = "none");
  };
  Fo.prototype.ge = function () {
    this.oa = Vm();
    this.oa.className = "gsq_a";
    var a = Um();
    this.oa.appendChild(a);
    this.Br = a.insertRow(-1);
    a = this.Br.insertCell(-1);
    a.style.width = "100%";
    this.Cr = Tm("span");
    a.appendChild(this.Cr);
  };
  var Go = function () {
    function a(k) {
      return new Fo(e, k);
    }
    function b(k, l) {
      l.render(k.jv(), k.Zc(), f);
    }
    function c(k, l, m) {
      m.search(l.Zc(), 1);
    }
    function d() {
      return 0;
    }
    var e,
      f,
      h = {
        Ja: function (k, l) {
          l.addRule(".gsq_a", "padding:0");
        },
        aa: function (k) {
          e = k.get(118, h);
        },
        J: function (k) {
          f = k.on ? k.pn : "";
        },
        getType: function () {
          return 152;
        },
        ab: function () {
          return { Km: a, render: b, uf: c, wo: Am, lo: d };
        },
      };
    return h;
  };
  var Ho = function () {
    var a = { js: "oq", ks: "gs_l" },
      b,
      c,
      d,
      e,
      f,
      h,
      k,
      l,
      m,
      r,
      t,
      v,
      x,
      Q = !1,
      X,
      S,
      sa,
      M,
      H = !1,
      da = function (u) {
        var D = !0;
        void 0 != u && ((D = u == c.Yg), (c.Yg = u));
        b ? D || b.J(c) : ((b = vn().uj(f, d, Ja, c.tt)), b.install(c));
      },
      aa = function (u) {
        b.Lb(u);
      },
      ja = function (u) {
        return u + (0 <= u.indexOf("?") ? "&" : "?") + b.Dv();
      },
      T = function (u) {
        ei(window.location, u);
      },
      F = function () {
        S && S();
      },
      W = function () {
        return c.rh;
      },
      P = function (u, D, C, ca, I) {
        d = u;
        f = D;
        sa = ca;
        M = C || "partner-web";
        (m = I.brandingPlaceholder) && D.setAttribute("placeholder", m);
        B(f, "gsc-input");
        var xa = I.onRenderCallback;
        xa &&
          (S = function () {
            try {
              xa();
            } catch (n) {}
          });
        c = wa();
        kb(c, I);
        u = new zo();
        Ea(sa, c, u);
        da();
        ea(u, I.clearToolTitle);
        I.searchButton && b.Bs(I.searchButton, 12);
      },
      ea = function (u, D) {
        u = u.qa();
        var C = u.parentElement;
        C &&
          (C.setAttribute("title", D),
          "button" != (C.getAttribute("role") || null) && C.setAttribute("role", "button"),
          u.setAttribute("aria-hidden", !0));
      },
      wa = function () {
        var u = ya.uj(),
          D = M;
        u.Ye = D;
        u.rh = D;
        u.Mm = "partner-generic-exp" === u.Ye || "partner-web-exp" === u.Ye ? "cse_exp" : "cse";
        u.bF = !0;
        u.ZA = { partnerid: sa };
        u.Fn = !0;
        u.Rj = "gsc-input";
        u.Er = "gsc-completion-container";
        u.Ar = "gsc-completion-selected";
        v && ((u.Cn = f.id), (u.En = "gsc-input-hover"), (u.Dn = "gsc-input-focus"));
        u.Od = [-1, 0, 0];
        u.zo = !0;
        u.Nc = !0;
        u.Wg = !0;
        u.Fo = !0;
        u.spellcheck = !1;
        u.ol = rm([0, 34]);
        return u;
      },
      Ea = function (u, D, C) {
        var ca = new xo();
        ca.fc(152, Go());
        ca.fc(153, jn());
        ca.fc(160, C);
        ca.set(173, new Bo());
        k && ca.fc(152, ln(k, l, m));
        ca.fc(156, mn(u));
        r && ca.fc(160, new yn(r));
        D.tt = ca;
      },
      kb = function (u, D) {
        if ((x = !!D.useKennedyLookAndFeel))
          v && ((u.Cn = f.parentNode.id), (u.En = "gsc-input-box-hover"), (u.Dn = "gsc-input-box-focus")),
            (u.Od = [3, -1, 2]),
            (u.Wg = !0);
        D.interfaceLanguage && (u.Tj = D.interfaceLanguage);
        D.disableAutoCompletions && (u.Yg = !0);
        t = parseInt(D.maxSuggestions, 10);
        0 <= t || (t = 10);
        u.nl = "csems,nrl=" + t;
        k = D.brandingImageUrl;
        l = D.brandingImage2xUrl;
        k && ((r = D.brandingImageStyle + " url(" + k + ")"), (u.di = D.backgroundTextIndent));
        if ((D = D.styleOptions)) {
          var C = D.xOffset || 0,
            ca = D.yOffset || 0,
            I = D.widthOffset || 0,
            xa = D.fixedWidth;
          Q = !!D.allowWordWrapping;
          var n = u.Od;
          n[0] += ca;
          n[1] += C;
          n[2] += I;
          u.Ym = xa;
          u.Dr = D.xAlign;
          D.positionFixed && (u.gf = "fixed");
        }
      },
      Ca = function () {},
      Ja = {
        J: da,
        install: function (u, D, C, ca, I) {
          P(u, D, void 0 === I ? null : I, C, ca);
          if (ca.isLoggingWithHiddenFormFields) {
            h = {};
            for (var xa in a) (u = a[xa]), (h[u] = b.ts(d, u));
          } else
            (H = !0),
              d &&
                (d.addEventListener
                  ? d.addEventListener("submit", Ca, !1)
                  : d.attachEvent && d.attachEvent("onsubmit", Ca));
        },
        Yw: function (u, D, C, ca) {
          v = C;
          P(u, D, v.Pg(), v.Lg() || "", ca);
          ca.enableAsynchronousLogging && (H = !0);
        },
        Zw: function (u, D, C, ca, I) {
          P(null, D, void 0 === I ? null : I, C, ca);
          H = !0;
          e = u;
        },
        Lb: aa,
        pa: function () {
          return b.pa();
        },
        EE: W,
        b: function (u, D) {
          u != f.value &&
            (v &&
              window.console &&
              window.console.log &&
              window.console.log(
                "Programmatically setting input.value? Please consider using prefillQuery() or execute() from google.search.SearchControl instead."
              ),
            (u = f.value),
            aa(u));
          if (u && !jm.test(u)) {
            X = D;
            D = b.tv(X);
            if (h) {
              var C = a.js;
              h[C] && (h[C].value = D[C]);
              C = a.ks;
              h[C] && (h[C].value = D[C]);
            }
            v
              ? (u != b.pa() && b.Lb(u), H ? v.submit() : v.eB(D))
              : e
              ? e(D)
              : d &&
                (d.fireEvent && document.createEventObject
                  ? ((u = document.createEventObject()), d.fireEvent("onsubmit", u) && d.submit())
                  : d.dispatchEvent && document.createEvent
                  ? ((u = document.createEvent("HTMLEvents")),
                    u.initEvent("submit", !0, !0),
                    d.dispatchEvent(u) && d.submit())
                  : (d.onsubmit && 0 == d.onsubmit()) || d.submit());
            X = null;
          }
        },
        c: T,
        d: function (u) {
          T(ja(u));
        },
        e: ja,
        f: W,
        o: F,
        p: F,
        r: function (u) {
          v
            ? x
              ? (u.addRule(".gssb_a", "padding:0 9px"),
                u.addRule(".gsib_a", "padding:5px 9px 4px 9px"),
                u.addRule(".gscb_a", "line-height:27px"))
              : u.addRule(".gssb_a", "padding:0 7px")
            : u.addRule(".gssb_a", "padding:0 2px");
          u.addRule(".gssb_e", "border:0");
          u.addRule(".gssb_l", "margin:5px 0");
          u.addRule("input.gsc-input::-webkit-input-placeholder", "font-size:14px");
          u.addRule("input.gsc-input:-moz-placeholder", "font-size:14px");
          u.addRule("input.gsc-input::-moz-placeholder", "font-size:14px");
          u.addRule("input.gsc-input:-ms-input-placeholder", "font-size:14px");
          u.addRule("input.gsc-input:focus::-webkit-input-placeholder", "color:transparent");
          u.addRule("input.gsc-input:focus:-moz-placeholder", "color:transparent");
          u.addRule("input.gsc-input:focus::-moz-placeholder", "color:transparent");
          u.addRule("input.gsc-input:focus:-ms-input-placeholder", "color:transparent");
          u.addRule(".gssb_c .gsc-completion-container", "position:static");
          u.addRule(".gssb_c", "z-index:5000");
          u.addRule(".gsc-completion-container table", "background:transparent;font-size:inherit;font-family:inherit");
          u.addRule(
            ".gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td",
            "padding:0;margin:0;border:0"
          );
          u.addRule(".gssb_a table,.gssb_a table tr,.gssb_a table tr td", "padding:0;margin:0;border:0");
          Q && u.addRule(".gssb_a,.gssb_a td", "white-space:normal");
        },
        x: function () {
          v && v.Mb();
        },
      };
    var ya = yo();
    return Ja;
  };
  var Io = Vi.Ia(Aj.blank),
    Jo = Hi(Aj.next),
    Ko = function (a) {
      var b = a.u.Cj();
      this.level = a.ld;
      this.V = Sj({ text: sj(b) });
      this.xb = null;
      this.ra = a.u;
      this.context = a;
    },
    Lo = function () {
      this.root = null;
      this.cb = { width: 112, height: 84 };
      this.Rr = { width: 100, height: 75 };
      this.nd = null;
    };
  Lo.prototype.BA = function (a) {
    Nj(a);
    this.root = a;
  };
  Lo.prototype.setRoot = Lo.prototype.BA;
  Lo.prototype.Je = function (a) {
    this.nd = a;
  };
  Lo.prototype.setNoResultsString = Lo.prototype.Je;
  Lo.prototype.iA = function (a) {
    100 < a && (a = 100);
    this.cb.height = a;
    this.cb.width = Math.round(1.33 * a);
  };
  Lo.prototype.setImageResultsTbHeight = Lo.prototype.iA;
  Lo.prototype.NA = function (a) {
    100 < a && (a = 100);
    this.Rr.height = a;
    this.Rr.width = Math.round(1.33 * a);
  };
  Lo.prototype.setVideoResultsTbHeight = Lo.prototype.NA;
  var Mo = function () {
    this.rr = this.input = null;
    this.ha = 1;
    this.jg = !1;
    this.la = null;
    this.yb = "standard";
    this.Ag = !1;
    this.Qe = -1;
    this.hc = !0;
    this.jb = "en";
    this.setAutoComplete = this.Pk;
    this.setSearchFormRoot = this.Zk;
  };
  Mo.prototype.kA = function (a) {
    this.input = a;
  };
  Mo.prototype.setInput = Mo.prototype.kA;
  Mo.prototype.Zk = function (a) {
    this.rr = lk(a);
  };
  Mo.prototype.setSearchFormRoot = Mo.prototype.Zk;
  Mo.prototype.Nq = function (a) {
    this.ha = 1 == a || 2 == a ? a : 1;
  };
  Mo.prototype.setDrawMode = Mo.prototype.Nq;
  Mo.prototype.Pk = function (a) {
    this.jg = a;
  };
  Mo.prototype.setAutoComplete = Mo.prototype.Pk;
  Mo.prototype.ir = function (a) {
    this.Ag = a;
  };
  Mo.prototype.setSpeech = Mo.prototype.ir;
  Mo.prototype.Lq = function (a) {
    this.hc = a;
  };
  Mo.prototype.setCseBranding = Mo.prototype.Lq;
  Mo.prototype.Mq = function (a) {
    this.jb = a;
  };
  Mo.prototype.setCseLanguage = Mo.prototype.Mq;
  Mo.prototype.mr = function (a) {
    this.Qe = a;
  };
  Mo.prototype.setTopRefinementsWanted = Mo.prototype.mr;
  Mo.prototype.hn = function (a, b, c, d) {
    b = void 0 === b ? "q" : b;
    this.yb = "searchbox-only";
    this.la = { Lk: a, Ey: "" == b ? "q" : b, Vx: void 0 === c ? !1 : c, ky: void 0 === d ? "?" : d };
  };
  Mo.prototype.enableSearchboxOnly = Mo.prototype.hn;
  Mo.prototype.gn = function () {
    this.yb = "searchresults-only";
  };
  Mo.prototype.enableSearchResultsOnly = Mo.prototype.gn;
  var No = function (a, b, c) {
      this.Kb = c;
      this.u = a;
      this.Y = null;
      this.u.gr(b, b.qd, [this]);
      this.u.dA(b, V.prototype.Un);
      this.u.La(b.ve);
      this.u.Ka(b.Gb);
      this.ma = this.root = null;
      this.Qj = !0;
      this.ea = [];
      this.qe = this.We = this.Za = this.da = null;
      this.ld = 0;
      this.se = !1;
    },
    V = function (a) {
      var b = this;
      this.ai = this.ve = "small";
      this.ha = 1;
      this.Ae = this.input = this.root = null;
      this.dc = 500;
      this.Vw = Mj(this, V.prototype.Zx, [null]);
      this.Ww = Mj(this, V.prototype.ay, [null]);
      this.Sr = this.Tr = this.Mo = this.No = this.Ur = this.Oo = this.vl = null;
      this.he = 0;
      this.mg = !1;
      this.Gb = "_blank";
      this.yb = "standard";
      this.Ga = this.Ac = this.Kf = this.Ua = this.Lc = this.tb = this.wd = this.ja = null;
      this.Ip = !1;
      this.zc = null;
      this.Kd = this.De = 0;
      this.Jy = "gsc-refinementHeader";
      this.wk = "gsc-refinementhInactive";
      this.bq = "gsc-refinementhActive";
      this.cq = "gsc-refinementsAreaInvisible";
      this.Ky = "gsc-refinementsArea";
      this.ba = {};
      this.ba[Y.Wa] = { enabled: !0, className: "gsc-adBlock", Ya: "", Eh: { lines: 2 } };
      this.ba[Y.Pa] = { enabled: !1, className: "gsc-adBlockVertical", Ya: "gsc-thinWrapper", Eh: {} };
      this.ba[Y.sa] = { enabled: !1, className: "gsc-adBlockBottom", Ya: "", Eh: {} };
      this.Dh = this.zf = null;
      this.H = [];
      if (a)
        for (var c = 0; c < a.length; c++) {
          var d = new No(a[c], this, new Lo());
          this.H.push(d);
        }
      this.Tl = {};
      this.hc = !1;
      this.zd = !0;
      this.Xb = new wi();
      this.jh = null;
      document.addEventListener("searchComplete", function () {
        return b.Lx();
      });
    };
  V.prototype.zk = !1;
  var Y = { Wa: "top", Pa: "right", sa: "bottom" },
    Oo = Aj["no-results"];
  z("module$exports$cse$searchcontrol.SearchControl.NO_RESULTS_DEFAULT_STRING", Oo);
  z("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_SHORT", 350);
  z("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_MEDIUM", 500);
  z("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_LONG", 700);
  z("module$exports$cse$searchcontrol.SearchControl.DRAW_MODE_LINEAR", 1);
  z("module$exports$cse$searchcontrol.SearchControl.DRAW_MODE_TABBED", 2);
  z("module$exports$cse$searchcontrol.SearchControl.REFINEMENT_AS_TAB", "tab");
  z("module$exports$cse$searchcontrol.SearchControl.REFINEMENT_AS_LINK", "link");
  z("module$exports$cse$searchcontrol.SearchControl.MODE_STANDARD", "standard");
  z("module$exports$cse$searchcontrol.SearchControl.MODE_SEARCHBOX_ONLY", "searchbox-only");
  z("module$exports$cse$searchcontrol.SearchControl.MODE_RESULTS_ONLY", "searchresults-only");
  var Po = {},
    Qo =
      ((Po[Sl.Sh] = {
        colorBackground: "#FDE5FF",
        colorTitleLink: "#0568CD",
        colorText: "#000",
        colorDomainLink: "#CC7A9F",
        fontFamily: "Arial",
      }),
      (Po[Sl.Vh] = {
        colorBackground: "#EEFFE5",
        colorBorder: "#A9DA92",
        colorTitleLink: "#06C",
        colorText: "#454545",
        colorDomainLink: "#8D5FA7",
        fontFamily: "Trebuchet MS",
      }),
      (Po[Sl.Uh] = {
        colorBackground: "#F2F0E6",
        colorTitleLink: "#950000",
        colorText: "#333",
        colorDomainLink: "#A25B08",
        fontFamily: "Georgia",
      }),
      (Po[Sl.Xh] = {
        colorBackground: "#F0F0F6",
        colorBorder: "#CCC",
        colorTitleLink: "#06C",
        colorDomainLink: "#008000",
        fontFamily: "Verdana",
      }),
      (Po[Sl.Wh] = {
        colorBackground: "#EEE",
        colorBorder: "#CCC",
        colorTitleLink: "#000",
        colorText: "#444",
        colorDomainLink: "#333",
        fontFamily: "Arial",
      }),
      (Po[Sl.Il] = {
        colorBackground: "#fff",
        colorBorder: "#ddd",
        colorTitleLink: "#1155CC",
        colorText: "#222",
        colorDomainLink: "#093",
        fontFamily: "Arial, sans-serif",
      }),
      Po),
    Ro = {},
    So =
      ((Ro[Sl.Sh] = Qo[Sl.Sh]),
      (Ro[Sl.mD] = Qo[Sl.Sh]),
      (Ro[Sl.Vh] = Qo[Sl.Vh]),
      (Ro[Sl.oD] = Qo[Sl.Vh]),
      (Ro[Sl.Uh] = Qo[Sl.Uh]),
      (Ro[Sl.nD] = Qo[Sl.Uh]),
      (Ro[Sl.Xh] = Qo[Sl.Xh]),
      (Ro[Sl.qD] = Qo[Sl.Xh]),
      (Ro[Sl.Wh] = Qo[Sl.Wh]),
      (Ro[Sl.pD] = Qo[Sl.Wh]),
      (Ro[Sl.Il] = Qo[Sl.Il]),
      Ro);
  V.prototype.Fs = function () {
    var a = this;
    return function () {
      a.zk && (a.lq(), (a.zk = !1));
    };
  };
  V.prototype.Xi = function (a, b) {
    this.Ve = !0;
    this.Dd = a;
    if (b) {
      a = this.ba[Y.Wa];
      var c = this.ba[Y.Pa],
        d = this.ba[Y.sa];
      void 0 != b.includeVerticalAds && (c.enabled = b.includeVerticalAds);
      void 0 != b.includeSideAds && (c.enabled = b.includeSideAds);
      void 0 != b._includeBottomAds_ && (d.enabled = b._includeBottomAds_);
      void 0 != b.iframes && (this.Hn = b.iframes);
      b.channel && (this.dg = b.channel);
      b.clientIP && (this.Ul = b.clientIP);
      "off" == b.isSafeSearchActive
        ? (this.Ue = "low")
        : "active" == b.isSafeSearchActive
        ? (this.Ue = "high")
        : b.safe && (this.Ue = b.safe);
      b.userAgent && (this.Vl = b.userAgent);
      b.adStyle && (this.Ol = b.adStyle);
      b.cseGoogleHosting && (this.eg = b.cseGoogleHosting);
      if ((d = b.adtest || b.debug)) this.bi = d;
      void 0 != b.numTopAds && ((a.Jb = Math.max(0, Math.min(4, b.numTopAds))), (a.enabled = a.Jb ? !0 : !1));
      void 0 != b.numSideAds && ((c.Jb = Math.max(0, Math.min(8, b.numSideAds))), (c.enabled = c.Jb ? !0 : !1));
      "noTop" == b.layout && ((a.enabled = !1), (c.enabled = !0));
      "personalizedAds" in b && (this.Op = b.personalizedAds);
      "adStyleId" in b && (this.Nl = b.adStyleId);
      "fexp" in b && (this.rn = b.fexp);
    }
    (function (e, f, h, k) {
      e[k] =
        e[k] ||
        function () {
          (e[k].q = e[k].q || []).push(arguments);
        };
      e[k].t = Number(new Date());
      var l = f.createElement(h);
      f = f.getElementsByTagName(h)[0];
      l.async = !0;
      h = ee(Zd($d("//cse.google.com/adsense/search/async-ads.js")));
      b.experimentNames &&
        -1 < b.experimentNames.indexOf("72284809") &&
        (h = ee(Zd($d("//afs.googlesyndication.com/adsense/search/async-ads.js"))));
      di(l, h);
      f.parentNode.insertBefore(l, f);
    })(window, document, "script", "_googCsa");
    window._googCsa("jsLoadedCallback", this.Fs());
  };
  V.prototype.enableAds = V.prototype.Xi;
  V.prototype.Mc = function (a, b, c) {
    b || (b = new Lo());
    b.cb && a.Uq(b.cb);
    b = new No(a, this, b);
    c ? (c.ea.push(b), (b.qe = c), (b.ld = c.ld + 1)) : (this.H.push(b), (b.ld = 0));
    this.Jf(a) && (this.qw = !0);
    a.Ce = "gsc";
  };
  V.prototype.addSearcher = V.prototype.Mc;
  V.prototype.Hm = function (a) {
    a.Kb.root &&
      ((a.Qj = !1),
      B(a.Kb.root, "gsc-resultsRoot"),
      $g(a.Kb.root, "gsc-resultsbox-visible"),
      B(a.Kb.root, "gsc-resultsbox-invisible"));
    var b = a.Kb.root ? a.Kb.root : L("gsc-resultsRoot");
    a.root = b;
    a.u.bg && B(b, "gsc-resultsRoot-" + a.u.bg);
    2 == this.ha && (a.da.xb = b);
    a.ma = L();
    a.ma.onmousedown = Lj(this, V.prototype.pt);
    a.ma.onclick = Lj(this, V.prototype.ot);
    a.Y = L("gsc-expansionArea");
    E(a.ma, a.Y);
    a.Qj && E(this.we, b);
    E(b, a.ma);
  };
  var To = /^https?:\/\/www\.google\.com\/url\?/;
  g = V.prototype;
  g.pt = function (a) {
    this.hc && this.tq(this.un(a));
    return !0;
  };
  g.ot = function (a) {
    var b = this.un(a);
    this.hc || this.tq(b);
    b &&
      window.setTimeout(function () {
        var c = b.getAttribute("data-ctorig");
        c && Ve(b, c);
      }, 0);
    return !0;
  };
  g.un = function (a) {
    a = a || window.event;
    for (
      a = a.target || a.srcElement;
      a && !(a.href && a.getAttribute("data-cturl") && a.getAttribute("data-ctorig"));

    )
      a = a.parentNode;
    return a;
  };
  g.tq = function (a) {
    if (a) {
      var b = a.getAttribute("data-cturl");
      b && To.test(b) && Ve(a, b);
    }
  };
  g.Dm = function (a) {
    var b = Sj({ Jc: !0 });
    B(b, "gsc-refinementBlockInvisible");
    this.gb && E(this.gb, b);
    a.Za = b;
    this.At(a);
  };
  g.zt = function (a) {
    return Tj(a);
  };
  g.Im = function (a) {
    var b = Tj();
    ci(b, this.Xb.Ia(a));
    a = document.createDocumentFragment();
    a.appendChild(b);
    return a;
  };
  g.At = function (a) {
    var b = a.da,
      c = this.xi(a, a);
    c.level += 1;
    Oj(c.V, this.zt(Aj["all-results-long"]));
    a.da = b;
    a.We = c;
    a.We.xb = a.da.xb;
  };
  g.xi = function (a, b) {
    var c = new Ko(a);
    a.da = c;
    ck(c.V, Mj(this, this.Le, [c]));
    kf(c.V, { "aria-label": "refinement", role: "tab", tabindex: 0, tabIndex: 0 });
    a = "gs-spacer";
    fc && (a += " gs-spacer-opera");
    b
      ? ((b = b.Za), B(c.V, this.Jy), B(c.V, this.wk))
      : ((b = this.tb), B(c.V, "gsc-tabHeader"), B(c.V, "gsc-tabhInactive"));
    B(c.V, "gsc-inline-block");
    b && (E(b, c.V), (a = Tj(" ", a)), E(b, a));
    return c;
  };
  g.xp = function (a) {
    if (1 != a.ea.length) {
      var b = a.ea.shift();
      if (b) {
        a.ea.push(b);
        a = b.da.V;
        var c = a.nextSibling;
        a.parentNode &&
          (E(a.parentNode, a), c && E(a.parentNode, c), (b = b.da.xb), b.parentNode && E(b.parentNode, b));
      }
    }
  };
  g.ho = function (a) {
    for (var b = 0; b < this.zc.length; ++b) if (this.zc[b].key == a) return b;
    return null;
  };
  g.ey = function (a) {
    this.Ga && Yg(this.Ga, "gsc-option-menu-invisible");
    this.De != a && (this.Uk(a), this.Bh(a, this.F.ra), this.execute());
  };
  g.Cz = function (a) {
    a = a || window.event;
    Yg(this.Ga, "gsc-option-menu");
    var b = hk(this.Ga, "div", "gsc-option-menu-item-highlighted")[0];
    this.Ga.style.top = jk(this.Ga, this.Ac) + jk(this.Kf, this.Ac) - jk(b, this.Ac) + "px";
    a.cancelBubble = !0;
    a.stopPropagation && a.stopPropagation();
  };
  g.cu = function (a) {
    a = a || window.event;
    var b;
    if ((b = this.Ga)) {
      b = this.Ga;
      for (a = a.target || a.srcElement; a && a != b; ) a = a.parentNode;
      b = a != b;
    }
    b && Yg(this.Ga, "gsc-option-menu-invisible");
  };
  var Uo = function (a) {
    a = a || window.event;
    a.cancelBubble = !0;
    a.stopPropagation && a.stopPropagation();
  };
  g = V.prototype;
  g.Jt = function () {
    var a = L("gsc-orderby-invisible"),
      b = Sj({ text: Aj["order-results-by"], className: "gsc-orderby-label", Jc: !0 });
    B(b, "gsc-inline-block");
    E(a, b);
    this.Ac = L("gsc-option-menu-container");
    B(this.Ac, "gsc-inline-block");
    E(a, this.Ac);
    b = L("gsc-selected-option-container");
    B(b, "gsc-inline-block");
    this.Kf = L("gsc-selected-option");
    var c = L("gsc-option-selector");
    E(b, this.Kf);
    E(b, c);
    b.onclick = Lj(this, this.Cz);
    E(this.Ac, b);
    this.Ga = L("gsc-option-menu-invisible");
    for (b = 0; b < this.zc.length; ++b) {
      var d = this.zc[b].label;
      c = L("gsc-option-menu-item");
      d = Sj({ text: d, className: "gsc-option", Jc: !0 });
      E(c, d);
      E(this.Ga, c);
      d.onclick = Mj(this, V.prototype.ey, [b]);
    }
    E(this.Ac, this.Ga);
    this.Ga.onclick = Uo;
    b = Lj(this, this.cu);
    this.root.attachEvent
      ? (this.root.attachEvent("onmousedown", b), document.attachEvent("onmousedown", b))
      : document.addEventListener && document.addEventListener("mousedown", b, !0);
    return a;
  };
  g.Lt = function () {
    var a = L("gsc-richsnippet-popup-box");
    B(a, "gsc-richsnippet-popup-box-invisible");
    return a;
  };
  g.Ma = function (a, b, c) {
    c = void 0 === c ? [] : c;
    ck(a, Mj(this, b, c));
  };
  g.us = function (a, b, c) {
    a.addEventListener("mouseover", function () {
      return b(a);
    });
    a.addEventListener("mouseout", function () {
      return c(a);
    });
  };
  g.Sx = function (a) {
    a = q(a.getElementsByClassName("gsc-thumbnail"));
    for (var b = a.next(); !b.done; b = a.next())
      if (((b = b.value), Zg(b.parentElement, "gs-result"))) {
        var c = b.parentElement.lastElementChild;
        c.insertBefore(b, c.firstChild);
      }
  };
  g.Nd = function (a, b) {
    var c = null,
      d = null;
    b
      ? b.ha
        ? ((this.ha = b.ha),
          (c = b.input),
          (d = b.rr),
          (this.yb = b.yb),
          (this.jg = b.jg),
          (this.Ag = b.Ag),
          (this.Qe = b.Qe),
          "searchbox-only" == this.yb && (this.la = b.la))
        : (this.ha = 1)
      : (this.ha = 1);
    this.root = L(this.la ? "gsc-control-searchbox-only" : "gsc-control");
    this.root.dir = qj;
    var e = lk(a);
    e && Oj(e, this.root);
    b && b.hc && ((this.hc = !0), this.T && this.T.fr(this.qp(b.jb)), this.W && this.W.fr(this.qp(b.jb)));
    null != c
      ? ((this.input = c), (this.input.onkeyup = this.Vw), (this.input.onpaste = this.Ww), (this.zd = !1))
      : ((this.zd = !0),
        null == d ? (d = this.root) : (d.dir = qj),
        (this.Ae = new Vo(!0, d, { Nh: !0, ID: this.hc, Wl: !0 })),
        this.Ae.Xq(this, this.Mb),
        (this.input = this.Ae.input),
        (d = this.Ae.sh),
        (e = {
          clearToolTitle: Aj["clear-tool-title"],
          interfaceLanguage: "ja",
          searchButton: this.Ae.ze,
          useKennedyLookAndFeel: !0,
        }),
        this.hc &&
          ((e.brandingImageUrl = "https://www.google.com/cse/static/images/1x/" + b.jb + "/branding.png"),
          (e.brandingImage2xUrl = "https://www.google.com/cse/static/images/2x/" + b.jb + "/branding.png"),
          (e.brandingImageStyle = "#FFFFFF " + rj + " no-repeat"),
          (e.brandingPlaceholder = "")),
        this.jg
          ? this.ig && ((e.maxSuggestions = this.ig.maxCompletions), (e.maxPromotions = this.ig.maxPromotions))
          : (e.disableAutoCompletions = !0),
        this.la && (e.enableAsynchronousLogging = !ok(nk(this.la.Lk))),
        (e.enableSpeech = b ? b.Ag : !1),
        (this.wd = Ho()),
        this.wd.Yw(d, this.input, this, e),
        e.useKennedyLookAndFeel && B(d, "gsc-search-box-tools"));
    c ||
      "searchresults-only" != this.yb ||
      ((this.Ae.sh.style.display = "none"), (this.root.style.visibility = "hidden"));
    if (!this.la) {
      this.we = L("gsc-resultsbox-invisible");
      this.en && ((this.ye = this.Lt()), E(this.we, this.ye));
      this.zq = lk("gcse-search-scrollpos");
      this.ca = this.Kp ? L("gsc-results-wrapper-overlay") : L("gsc-results-wrapper-nooverlay");
      E(this.root, this.ca);
      this.Kp &&
        ((this.le = L("gsc-modal-background-image")),
        E(this.root, this.le),
        this.Ma(this.le, V.prototype.Mb),
        (this.xe = L("gsc-results-close-btn")),
        E(this.ca, this.xe),
        this.Ma(this.xe, V.prototype.Mb));
      if (2 == this.ha)
        for (
          this.tb = L("gsc-tabsAreaInvisible"),
            b = L("gsc-positioningWrapper"),
            E(b, this.tb),
            E(this.ca, b),
            this.gb = L(this.cq),
            b = L("gsc-positioningWrapper"),
            E(b, this.gb),
            E(this.ca, b),
            this.ub && ((b = L("gsc-refinementsGradient")), E(this.gb, b)),
            b = 0;
          b < this.H.length;
          b++
        )
          this.xi(this.H[b]);
      this.Lc = L("gsc-above-wrapper-area-invisible");
      E(this.ca, this.Lc);
      this.Te = L("gsc-above-wrapper-area-backfill-container");
      E(this.Lc, this.Te);
      b = Uj(0, 0, "gsc-above-wrapper-area-container");
      E(this.Lc, b);
      b = Vj(b, 0);
      c = Wj(b, "gsc-result-info-container");
      this.ue = L("gsc-result-info-invisible");
      E(c, this.ue);
      this.Ip &&
        2 == this.ha &&
        ((b = Wj(b, "gsc-orderby-container")),
        (this.Ua = this.Jt()),
        E(b, this.Ua),
        Yg(this.Ua, "gsc-orderby-invisible"));
      this.ib = this.ca;
      if (this.Ve) {
        var f = this.ca;
        this.ib = L("gsc-wrapper");
        this.uc(function (h, k) {
          k.O = L("gsc-adBlockInvisible");
          h == Y.Wa ? E(this.ib, k.O) : h == Y.Pa && E(f, k.O);
        });
        E(f, this.ib);
      }
      E(this.ib, this.we);
      for (b = 0; b < this.H.length; b++)
        this.Hm(this.H[b]), (c = this.H[b].da.xb), 2 == this.ha && c && (B(c, "gsc-tabData"), B(c, "gsc-tabdInactive"));
      if (2 == this.ha && 0 < this.H.length) {
        this.F = this.H[0].da;
        this.Ne(this.F);
        if ((b = this.H[0].da.xb)) $g(b, "gsc-tabdInactive"), B(b, "gsc-tabdActive");
        this.Ua && (this.Uk(this.Kd), this.Bh(this.Kd, this.F.ra));
      }
    }
    a && (a = this.Vu()) && 300 > a && B(this.root, "gsc-narrow");
  };
  V.prototype.draw = V.prototype.Nd;
  V.prototype.Uk = function (a) {
    if (this.Ua) {
      var b = hk(this.Ga, "div", "gsc-option-menu-item-highlighted")[0];
      b && $g(b, "gsc-option-menu-item-highlighted");
      this.De = a;
      a = hk(this.Ga, "div", "gsc-option")[this.De];
      B(a.parentNode, "gsc-option-menu-item-highlighted");
      this.Kf && Qj(this.Kf, this.zc[this.De].label);
    }
  };
  V.prototype.Bh = function (a, b) {
    b instanceof U && b.Gc("restrict-extended", { sort: this.zc[a].key });
  };
  V.prototype.cl = function (a) {
    switch (a) {
      case 350:
      case 500:
      case 700:
        this.dc = a;
        break;
      default:
        this.dc = 500;
    }
  };
  V.prototype.setTimeoutInterval = V.prototype.cl;
  g = V.prototype;
  g.Jf = function (a) {
    return "web" == a.Oa && a.M ? !1 : !0;
  };
  g.Ne = function (a) {
    1 == a.level
      ? a.V.onclick
        ? (ck(a.V, null), $g(a.V, this.wk), B(a.V, this.bq))
        : (this.Ma(a.V, this.Le, [a]), $g(a.V, this.bq), B(a.V, this.wk))
      : a.V.onclick
      ? (ck(a.V, null), $g(a.V, "gsc-tabhInactive"), B(a.V, "gsc-tabhActive"))
      : (this.Ma(a.V, this.Le, [a]), $g(a.V, "gsc-tabhActive"), B(a.V, "gsc-tabhInactive"));
  };
  g.Le = function (a, b) {
    if (this.F != a) {
      this.el(!0);
      var c = this.F.xb;
      c && ($g(c, "gsc-tabdActive"), B(c, "gsc-tabdInactive"));
      this.Ne(this.F);
      c = this.vc(this.F.context);
      var d = this.vc(a.context);
      1 == this.F.level && c != d && (B(c.Za, "gsc-refinementBlockInvisible"), this.Ne(c.da));
      this.F = a;
      c = this.F.ra;
      this.Ne(this.F);
      this.Ua && this.Bh(this.De, this.F.ra);
      1 == this.F.level && d.da.V.onclick && this.Ne(d.da);
      this.fk();
      d = null;
      !b && this.ja && this.ja.isEnabled() && ((d = this.ja.getState()), this.kr(a, d));
      if ((a = this.F.xb)) B(a, "gsc-tabdActive"), $g(a, "gsc-tabdInactive");
      var e = (a = b ? b.query : this.ie) && a == c.ob;
      b && (e = e && b.page == c.lf());
      if (e) {
        d && ((d["gsc.page"] = c.lf()), this.ja.pushState(d));
        if (!this.zl(c.ob, c.lf()) || (fc && b)) (this.Wb = c.Wb), this.Eg(c.ob, c.lf());
        this.F.context.op || (this.sr(this.F.context), this.sn(c), this.Ua && this.Mr());
      } else a && this.mn(a, b && b.page, null, d);
    }
  };
  g.zl = function (a, b) {
    (b = void 0 === b ? null : b) || (b = 1);
    var c = this.ba[Y.sa];
    return (
      !!this.Xa &&
      this.Xa.query == a &&
      (this.Xa.adPage || 1) == b &&
      !(c.enabled && this.F && this.F.context.Y != c.O.parentNode)
    );
  };
  g.sn = function (a) {
    var b = a.results,
      c = a.cursor;
    1 != this.ha && (this.ue.id = "resInfo-" + a.zz);
    1 != this.ha && 0 < b.length && c && c.resultCount && c.searchResultTime
      ? ((a = Rj(yj["result-info"](c.resultCount, c.searchResultTime))), Oj(this.ue, a), Yg(this.ue, "gsc-result-info"))
      : (Yg(this.ue, "gsc-result-info-invisible"), Nj(this.ue));
  };
  g.Nz = function (a) {
    var b = this.Cm(a.results.length);
    this.jm(a);
    this.Te && E(this.Te, b);
  };
  g.jm = function () {
    if (this.Te) for (var a = this.Te; a.lastChild; ) a.removeChild(a.lastChild);
  };
  g.vn = function (a, b) {
    if (a.u.M)
      for (var c = 0; c < a.ea.length; c++) {
        var d = a.ea[c];
        if (d.u.ee(b)) return d.da;
      }
    return null;
  };
  g.Fr = function (a, b) {
    b = this.vn(a, b);
    var c = !0;
    b || ((b = a.da), (c = !1));
    this.Le(b);
    return c;
  };
  g.SA = function (a, b) {
    pf(this.ye, "");
    var c = L("gsc-richsnippet-popup-close-button");
    this.Ma(c, function () {
      B(this.ye, "gsc-richsnippet-popup-box-invisible");
    });
    var d = Rj(Aj["structured-data"] + " : "),
      e = L("gsc-richsnippet-popup-box-title-text");
    E(e, d);
    d = Rj(decodeURIComponent(a));
    a = L("gsc-richsnippet-popup-box-title-url");
    E(a, d);
    d = L("gsc-richsnippet-popup-box-title");
    E(d, e);
    E(d, a);
    E(d, c);
    E(this.ye, d);
    c = L("gsc-richsnippet-popup-box-contents");
    for (var f in b) this.Ty(f, b[f], c);
    E(this.ye, c);
    $g(this.ye, "gsc-richsnippet-popup-box-invisible");
  };
  g.Ty = function (a, b, c) {
    var d = L("gsc-richsnippet-individual-snippet-box"),
      e = L("gsc-richsnippet-individual-snippet-key");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    a = Rj(a);
    E(e, a);
    a = L("gsc-richsnippet-individual-snippet-data");
    for (var f in b) this.iq(f, b[f], a);
    E(d, e);
    E(d, a);
    E(c, d);
  };
  g.iq = function (a, b, c) {
    var d = Rj(a + "  :  ");
    a = L("gsc-richsnippet-individual-snippet-valueelem");
    if ("string" == typeof b) {
      var e = L("gsc-richsnippet-individual-snippet-keyelem");
      E(e, d);
      d = Rj(b);
      E(a, d);
    }
    if ("object" == typeof b) for (var f in b) this.iq(f, b[f], a);
    b = L("gsc-richsnippet-individual-snippet-keyvalue");
    e && E(b, e);
    E(b, a);
    E(c, b);
  };
  g.jl = function (a, b) {
    var c = this.root,
      d = a.ma;
    b
      ? (B(c, "gsc-loading-fade"),
        (a.op = !0),
        B(d, "gsc-loading-resultsRoot"),
        0 == a.ld && this.gb && B(this.gb, "gsc-loading-refinementsArea"))
      : ($g(c, "gsc-loading-fade"),
        (a.op = !1),
        $g(d, "gsc-loading-resultsRoot"),
        this.gb && $g(this.gb, "gsc-loading-refinementsArea"));
  };
  g.fk = function () {
    this.Ve && (this.Jf(this.F.ra) ? this.fe() : this.Ci());
  };
  g.xB = function (a) {
    var b = this.ba[Y.sa];
    if (b.O.parentNode != a.Y) {
      var c = hk(a.Y, "div", "gsc-cursor-box")[0];
      c && c.parentNode == a.Y ? a.Y.insertBefore(b.O, c) : a.Y && E(a.Y, b.O);
    }
  };
  g.fe = function () {
    var a = this;
    this.Ve &&
      this.uc(function (b, c) {
        Yg(c.O, "gsc-adBlockInvisible");
        c.enabled && c.Ya && $g(a.ib, c.Ya);
      });
  };
  g.sz = function () {
    this.ca && this.ca.scrollIntoView(!0);
  };
  g.rz = function () {
    this.zq.scrollIntoView(!0);
  };
  g.vp = function () {
    this.zq ? this.rz() : this.fn && this.sz();
  };
  g.Ci = function () {
    this.Ve &&
      (null != this.zf
        ? this.zf()
        : (this.uc(function (a, b) {
            0 < b.od
              ? (Yg(b.O, b.className), b.Ya && B(this.ib, b.Ya))
              : (Yg(b.O, "gsc-adBlockInvisible"), b.Ya && $g(this.ib, b.Ya));
          }),
          this.vp()));
  };
  g.submit = function () {
    return this.yr();
  };
  V.prototype.submit = V.prototype.submit;
  g = V.prototype;
  g.yr = function (a) {
    this.fn = !1;
    this.input.value.length ? (this.la ? this.Hp(a) : this.execute(void 0, void 0, a)) : this.Mb();
    return !1;
  };
  g.eB = function (a) {
    return this.yr(a);
  };
  g.Hp = function (a) {
    var b = this.la.ky;
    b =
      this.la.Lk +
      (0 <= this.la.Lk.indexOf(b) ? "&" : b) +
      encodeURIComponent(this.la.Ey) +
      "=" +
      encodeURIComponent(this.input.value);
    (a = ik(a)) && (b += "&" + a);
    this.la.Vx ? window.open(b) : ei(window.location, ii(b));
  };
  g.Wm = function () {
    this.tb && !this.hB && 1 < this.H.length && Yg(this.tb, "gsc-tabsArea");
    !this.gb || (this.H[0] && 0 == this.H[0].ea.length) || Yg(this.gb, this.Ky);
  };
  g.Gs = function (a) {
    var b = this;
    return function (c, d) {
      if (d) {
        b.ba[a].od = 1;
        var e = 0,
          f = 0;
        b.uc(function (h, k) {
          k.enabled && k.nq && (e++, k.od && f++);
        });
        e == f
          ? (window.clearTimeout(b.Zt), b.Ci())
          : 1 == f &&
            (b.Zt = window.setTimeout(function () {
              b.Ci();
            }, 200));
      }
    };
  };
  g.Lg = function () {
    return null;
  };
  V.prototype.getPartnerId = V.prototype.Lg;
  V.prototype.Pg = function () {
    return null;
  };
  V.prototype.getSearchboxClientName = V.prototype.Pg;
  V.prototype.oh = function (a) {
    if (this.zd) this.wd.Lb(a);
    else if (((this.input.value = a), this.input.onfocus)) this.input.onfocus(null);
  };
  V.prototype.prefillQuery = V.prototype.oh;
  V.prototype.qp = function (a) {
    var b = new gk("gcsc-"),
      c = L(b.Zs);
    kf(c, { role: "contentinfo", "aria-label": Aj["cse-branding"] });
    var d = "https://www.google.com/cse/static/images/2x/" + a + "/branding.png";
    a = Xj("https://www.google.com/cse/static/images/1x/" + a + "/branding.png", null, null, b.Ow);
    d && !gc && (a.srcset = d + " 2x");
    kf(a, { alt: Aj["enhanced-by-google"] });
    d = Yj("https://cse.google.com/?ref=b&hl=ja", null, "_BLANK");
    d.className = b.nt;
    E(d, a);
    E(c, d);
    return c;
  };
  V.prototype.Ly = function (a) {
    a ? this.oh(a) : (a = this.zd ? this.wd.pa() : this.input.value);
    return a;
  };
  V.prototype.Hw = function () {
    var a;
    null == (a = document.querySelector("input.gsc-input")) || a.blur();
  };
  V.prototype.tj = function () {
    return this.zd ? this.wd.pa() : this.input.value;
  };
  V.prototype.getInputQuery = V.prototype.tj;
  V.prototype.execute = function (a, b, c) {
    if (!this.la) {
      var d = this.no(this.Qm, this.Om);
      d && this.Le(d);
    }
    this.mn(a, b, c);
  };
  V.prototype.execute = V.prototype.execute;
  g = V.prototype;
  g.mn = function (a, b, c, d, e) {
    a = this.Ly(a);
    this.ub && this.Hw();
    this.dj(a, b, c, d, e);
  };
  g.dj = function (a, b, c, d, e) {
    if (a.length) {
      this.query = a;
      this.Mp = b;
      this.mg = !1;
      this.ie = a;
      this.hh = b || 1;
      if (null == c ? 0 : c.rsToken) this.oc = c.rsToken;
      if (null == c ? 0 : c.afsExperimentId) this.Ed = c.afsExperimentId;
      if (null == c ? 0 : c.useStandardProseAdLoad) this.FB = "1" === (null == c ? void 0 : c.useStandardProseAdLoad);
      if (null == c ? 0 : c.hostName) this.Lw = c.hostName;
      this.ja &&
        this.ja.isEnabled() &&
        ((d = d || this.ja.getState()),
        (d["gsc.q"] = a),
        null == b ? delete d["gsc.page"] : (d["gsc.page"] = b),
        this.Ua && this.F.ra instanceof U && (d["gsc.sort"] = this.zc[this.De].key),
        this.ja.pushState(d));
      d = Math.floor(1e7 * Math.random());
      this.Wb = "qid=" + new Date().getTime().toString(16) + d.toString(16);
      this.Be = !1;
      if (2 == this.ha) this.Be = this.nn(this.F.context, this.F.xb, a, e, b, c) || this.Be;
      else for (d = 0; d < this.H.length; d++) this.Be = this.nn(this.H[d], this.H[d].root, a, e, b, c) || this.Be;
      !1 === this.wh && ((c = this.zl(a, b)), this.Be || !c ? this.Eg(a, b) : this.fk());
    }
  };
  g.Lx = function () {
    if (!1 !== this.wh)
      if (this.Xr && this.F && 1 > this.F.context.u.results.length) this.fe();
      else {
        var a = this.zl(this.query, this.Mp);
        this.Be || !a ? this.Eg(this.query, this.Mp) : this.fk();
      }
  };
  g.Un = function () {
    return this.Wb;
  };
  g.Eg = function (a, b) {
    b = void 0 === b ? null : b;
    this.Dh = this.zf = null;
    var c = this.Ve;
    c && ((this.qw && 1 == this.ha) || (2 == this.ha && this.Jf(this.F.ra))) && (c = !1);
    var d = this.Wu();
    void 0 != d || this.Dd || this.Hn || (c = !1);
    2 != this.ha && (this.ba[Y.sa].enabled = !1);
    if (c)
      if ((this.Kz(), this.Hn)) {
        this.fe();
        this.uc(function (h, k) {
          pf(k.O, "");
        });
        this.Xa = {
          pubId: this.Dd || "google-coop",
          gcsc: !0,
          hl: encodeURIComponent("ja"),
          adtest: this.bi ? "on" : null,
          channel: this.dg ? this.dg : null,
          adsafe: this.Ue || null,
          query: a,
          adstyle: this.Ol ? this.Ol : null,
        };
        d && (this.Xa.cx = d);
        b && (this.Xa.adPage = b);
        void 0 !== this.Op && (this.Xa.personalizedAds = this.Op);
        this.Nl && (this.Xa.styleId = this.Nl);
        this.oc && ((this.Xa.afdToken = this.oc), this.FB || (this.ba[Y.Wa].Jb = this.ub ? 2 : 3));
        b = this.rn ? [].concat(oa(this.rn)) : [];
        this.Ed && b.push(this.Ed.toString());
        b && (this.Xa.fexp = b.join(","));
        this.Xa.cseGoogleHosting =
          "full" == this.eg || "iframe" == this.eg || "partner" == this.eg ? this.eg : "partner";
        if ((b = pl()) && b in So) {
          b = So[b];
          for (var e in b) this.Xa[e] = b[e];
        }
        google.ads && google.ads.search && google.ads && google.ads.search.Ads ? this.lq() : (this.zk = !0);
      } else {
        e = "";
        this.ba[Y.Wa].enabled && (e = e + "w" + this.ba[Y.Wa].Jb);
        this.ba[Y.Pa].enabled && (e = e + "n" + this.ba[Y.Pa].Jb);
        e =
          "http://www.google.com/" +
          (d ? "cse" : "search") +
          "?output=js&num=0&ie=utf8&oe=utf8&q=" +
          encodeURIComponent(a) +
          "&hl=" +
          encodeURIComponent("ja") +
          "&ad=" +
          encodeURIComponent(e) +
          "&js=uds&" +
          this.Wb;
        d && (e += "&cx=" + d);
        this.Dd && (e += "&client=" + encodeURIComponent(this.Dd));
        this.dg && (e += "&channel=" + encodeURIComponent(this.dg));
        this.bi && (e += "&adtest=on");
        this.Ul && (e += "&ip=" + encodeURIComponent(this.Ul));
        this.Ue && (e += "&adsafe=" + encodeURIComponent(this.Ue));
        this.Vl && (e += "&useragent=" + encodeURIComponent(this.Vl));
        b && (e += "&adpage=" + encodeURIComponent(b + ""));
        this.oc && (e += "&afdt=" + encodeURIComponent(this.oc));
        this.Ed && (e += "&fexp=" + encodeURIComponent(this.Ed + ""));
        var f = this;
        window.google_afs_request_done = function (h) {
          f.Xx(h);
        };
        Jj(e);
      }
  };
  g.uc = function (a) {
    for (var b in Y)
      if (Y.hasOwnProperty(b)) {
        var c = Y[b];
        a.call(this, c, this.ba[c]);
      }
  };
  g.lq = function () {
    var a = [];
    this.uc(function (b, c) {
      c.od = 0;
      if (c.enabled && 0 < c.Jb) {
        c.nq = !0;
        c.Gk = { container: c.O, number: c.Jb, adLoadedCallback: this.Gs(b), position: b };
        for (var d in c.Eh) null != c.Gk[d] && (c.Gk[d] = c.Eh);
        a.push(c.Gk);
      } else c.nq = !1;
      b == Y.sa && this.xB(this.F.context);
      Yg(c.O, "gsc-adBlockNoHeight");
      c.O.style.height = "0px";
    });
    0 < a.length && new google.ads.search.Ads(this.Xa, a);
  };
  g.nn = function (a, b, c, d, e, f) {
    b = a.u;
    this.vl && this.vl(this, b, c);
    var h = !1;
    if (d) b.Ak(d);
    else {
      d = {};
      if (f) for (var k in f) "useStandardProseAdLoad" !== k && (d[k] = f[k]);
      this.oc && (d.rsToken = this.oc);
      for (var l in this.Tl) d[l] || (d[l] = this.Tl[l]);
      this.Dd && (d.cseclient = this.Dd);
      (f = "web" === b.Oa ? this.Ur : this.Oo) && (c = f(this.va || "", c) || c);
      h = b.execute(c, d, e);
    }
    this.jl(a, h);
    return h;
  };
  g.Wu = function () {
    for (var a = 0; a < this.H.length; a++) {
      var b = this.H[a].u;
      if (b.M && b.ef() && "cx" === b.ug() && ("web" === b.Oa || "image" === b.Oa)) return b.ef();
    }
    return null;
  };
  g.Xx = function (a) {
    window.google_afs_request_done = null;
    var b = this.ba[Y.Wa],
      c = this.ba[Y.Pa];
    if (b.O)
      if ((pf(b.O, ""), pf(c.O, ""), (b.od = c.od = 0), !a || 1 > a.length)) this.fe();
      else {
        if (!this.tb)
          for (var d = 0; d < this.H.length; d++)
            if (this.Jf(this.H[d].u)) {
              this.fe();
              return;
            }
        Yg(b.O, b.className);
        d = !1;
        var e = document.createElement("h2"),
          f = "";
        this.bi && (f = "*DEBUG* ");
        f += Aj["ads-by-google"];
        Qj(e, f);
        E(b.O, e);
        f = a.length;
        for (var h = 0; h < f; h++) {
          var k = a[h];
          if ("text/wide" == k.type) {
            b.od++;
            var l = L("gsc-ad"),
              m = Zj(k.url, k.line1, "_blank");
            E(l, m);
            m = document.createElement("cite");
            ci(m, this.Xb.Ia(k.visible_url));
            E(l, m);
            m = Tj();
            ci(m, this.Xb.Ia(k.line2));
            E(l, m);
            E(b.O, l);
          } else
            c.enabled &&
              (c.od++,
              d || ((d = !0), B(this.ib, c.Ya), c.O && (E(c.O, e.cloneNode(!0)), Yg(c.O, c.className))),
              (l = L("gsc-ad")),
              (m = Zj(k.url, k.line1, "_blank")),
              E(l, m),
              (m = Tj()),
              ci(m, this.Xb.Ia(k.line2 + "<br/>" + k.line3)),
              E(l, m),
              (m = document.createElement("cite")),
              ci(m, this.Xb.Ia(k.visible_url)),
              E(l, m),
              c.O && E(c.O, l));
        }
        c.enabled && !d && $g(this.ib, c.Ya);
        this.tb && this.Jf(this.F.ra) && this.fe();
      }
  };
  g.Zx = function () {
    var a = this.input.value;
    a &&
      "" != a &&
      (this.he && window.clearTimeout(this.he),
      (this.he = window.setTimeout(Mj(this, V.prototype.execute, [null]), this.dc)));
  };
  g.ay = function () {
    this.he && window.clearTimeout(this.he);
    this.he = window.setTimeout(Mj(this, V.prototype.execute, [null]), this.dc);
  };
  g.Kz = function () {
    var a = {};
    if (this.ba[Y.Wa].enabled)
      switch (this.ai) {
        case "filtered_cse":
          a[Y.Wa] = 3;
          a[Y.Pa] = 5;
          a[Y.sa] = 3;
          break;
        case "large":
          a[Y.Wa] = 2;
          a[Y.Pa] = 4;
          a[Y.sa] = 2;
          break;
        default:
          (a[Y.Wa] = 1), (a[Y.Pa] = 2), (a[Y.sa] = 1);
      }
    else
      switch (((a[Y.Wa] = 0), this.ai)) {
        case "filtered_cse":
          a[Y.Pa] = 8;
          a[Y.sa] = 3;
          break;
        case "large":
          a[Y.Pa] = 6;
          a[Y.sa] = 2;
          break;
        case "small":
          a[Y.Pa] = 3;
          a[Y.sa] = 1;
          break;
        default:
          (a[Y.Pa] = 6), (a[Y.sa] = 2);
      }
    this.uc(function (b, c) {
      void 0 == c.Jb && (c.Jb = a[b]);
    });
  };
  g.La = function (a) {
    var b = parseInt(a, 10);
    if (!isNaN(b) && 0 < b && 8 >= b) this.ve = a;
    else
      switch (a) {
        case "large":
          this.ve = "large";
          break;
        case "filtered_cse":
          this.ve = "filtered_cse";
          break;
        default:
        case "small":
          this.ve = "small";
      }
    for (b = 0; b < this.H.length; b++) this.H[b].u.La(a);
    this.ai = a;
  };
  V.prototype.setResultSetSize = V.prototype.La;
  V.prototype.Ka = function (a) {
    this.Gb = a;
    for (var b = 0; b < this.H.length; b++) this.H[b].u.Ka(a);
  };
  V.prototype.setLinkTarget = V.prototype.Ka;
  V.prototype.Je = function (a) {
    for (var b = 0; b < this.H.length; b++) this.H[b].Kb.Je(a);
  };
  V.prototype.setNoResultsString = V.prototype.Je;
  V.prototype.ft = function () {
    this.mg = !0;
  };
  V.prototype.cancelSearch = V.prototype.ft;
  V.prototype.el = function (a) {
    a
      ? (Yg(this.we, "gsc-resultsbox-visible"),
        this.ca && B(this.ca, "gsc-results-wrapper-visible"),
        this.xe && B(this.xe, "gsc-results-close-btn-visible"),
        this.le &&
          (B(this.le, "gsc-modal-background-image-visible"),
          B(document.getElementsByTagName("body")[0], "gsc-overflow-hidden")))
      : (Yg(this.we, "gsc-resultsbox-invisible"),
        this.ca && $g(this.ca, "gsc-results-wrapper-visible"),
        this.xe && $g(this.xe, "gsc-results-close-btn-visible"),
        this.le &&
          ($g(this.le, "gsc-modal-background-image-visible"),
          $g(document.getElementsByTagName("body")[0], "gsc-overflow-hidden")));
    for (var b = 0; b < this.H.length; b++)
      if (!this.H[b].Qj) {
        var c = this.H[b].root;
        a
          ? ($g(c, "gsc-resultsbox-invisible"), B(c, "gsc-resultsbox-visible"))
          : ($g(c, "gsc-resultsbox-visible"), B(c, "gsc-resultsbox-invisible"));
      }
  };
  V.prototype.Mb = function () {
    this.zd ? this.wd.Lb("") : (this.input.value = "");
    this.hh = this.ie = null;
    if (
      "searchbox-only" != this.yb &&
      ("searchresults-only" == this.yb && (this.root.style.visibility = "hidden"),
      this.el(!1),
      this.tb && Yg(this.tb, "gsc-tabsAreaInvisible"),
      this.gb && Yg(this.gb, this.cq),
      this.uc(function (b, c) {
        c.O && (Yg(c.O, "gsc-adBlockInvisible"), c.Ya && $g(this.ib, c.Ya));
      }),
      this.Lc && Yg(this.Lc, "gsc-above-wrapper-area-invisible"),
      this.ja && this.ja.isEnabled())
    ) {
      var a = this.ja.getState();
      delete a["gsc.page"];
      delete a["gsc.q"];
      this.ja.pushState(a);
    }
  };
  V.prototype.clearAllResults = V.prototype.Mb;
  g = V.prototype;
  g.al = function (a, b, c, d, e) {
    a = a.Zb ? a.Zb(b) : b;
    d ? ((b = {}), (b[d] = e), (d = Mj(this, this.execute, [a, void 0, b]))) : (d = Mj(this, this.execute, [a]));
    ck(c, d);
  };
  g.Mr = function () {
    this.Ua && (this.F.context.u instanceof U ? Yg(this.Ua, "gsc-orderby") : Yg(this.Ua, "gsc-orderby-invisible"));
  };
  g.km = function (a) {
    var b = function (c, d) {
      for (var e = c.firstChild; e; ) {
        var f = e.nextSibling;
        e != d && c.removeChild(e);
        e = f;
      }
    };
    b(a.Y, this.ba[Y.sa].O);
    b(a.ma, a.Y);
  };
  g.bu = function (a, b) {
    var c = this,
      d = [
        { bh: "gsc-tabsArea", Ck: "gsc-tabsAreaInvisible", element: null },
        { bh: "gsc-above-wrapper-area", Ck: "gsc-above-wrapper-area-invisible", element: null },
        { bh: "gsc-refinementsArea", Ck: "gsc-refinementsAreaInvisible", element: null },
      ];
    (function () {
      for (var e = q(d), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var h = c.ca.getElementsByClassName(f.bh)[0];
        (f.element = h) && Yg(h, f.Ck);
      }
    })();
    a = b(function () {
      c.zf = null;
      c.Dh && c.Dh();
      for (var e = q(d), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var h = f.element;
        h && Yg(h, f.bh);
      }
    });
    Bk(
      this.ca,
      function (e) {
        return (c.Dh = e);
      },
      function (e) {
        return (c.zf = e);
      }
    );
    (b = this.ib) && E(b, a);
  };
  g.qd = function (a) {
    "searchresults-only" == this.yb && (this.root.style.visibility = "visible");
    this.jl(a, !1);
    this.el(!0);
    if (!this.mg) {
      this.km(a);
      var b = a.u;
      "please trigger recaptcha" !== this.tj() || b.Bw() || (b.completionStatus = 429);
      if (429 === b.completionStatus) this.bu(a, b.Qw.bind(b));
      else {
        var c = ["gsc-results", b.Vc()].join(" ");
        Yg(a.ma, c);
        this.hz(a);
        c = b.context || {};
        var d = !(!this.tb || !c);
        !this.Ds && d && (this.Px(c.title, a), (this.Ds = !0));
        var e = b.promotions,
          f = a.u.results;
        var h =
          a.u.Pd && 400 <= a.u.completionStatus
            ? a.u.bj
              ? a.u.Eu()
              : a.u.Cu()
            : 0 === a.u.results.length && a.Kb.nd && 200 === a.u.completionStatus
            ? a.u.Du(a.Kb.nd)
            : null;
        var k = b.backfills;
        d = "web" === b.Oa;
        var l = 0 < (null == k ? void 0 : k.length),
          m = !0,
          r = d ? this.Sr : this.Mo;
        if (r) {
          var t = L(b.Vc());
          B(t, "gsc-result");
          m = this.va;
          var v = this.input.value,
            x = Rl(e);
          if (f) {
            var Q = [
              ["content", "content"],
              ["contentNoFormatting", "contentNoFormatting"],
              ["originalContextUrl", "contextUrl"],
              ["fileFormat", "fileFormat"],
              ["perResultLabels", "perResultLabels"],
              ["title", "title"],
              ["titleNoFormatting", "titleNoFormatting"],
              ["clicktrackUrl", "url"],
              ["visibleUrl", "visibleUrl"],
            ];
            for (
              var X = [
                  ["tbHeight", "height"],
                  ["tbUrl", "url"],
                  ["tbWidth", "width"],
                ],
                S = [
                  ["height", "height"],
                  ["unescapedUrl", "url"],
                  ["width", "width"],
                ],
                sa = [
                  ["anchor", "anchor"],
                  ["label", "label"],
                  ["label_with_op", "labelWithOp"],
                ],
                M = [
                  ["height", "height"],
                  ["src", "url"],
                  ["url", "url"],
                  ["width", "width"],
                ],
                H = [],
                da = q(f),
                aa = da.next();
              !aa.done;
              aa = da.next()
            ) {
              var ja = aa.value;
              aa = {};
              for (var T = q(Q), F = T.next(); !F.done; F = T.next()) {
                var W = q(F.value);
                F = W.next().value;
                W = W.next().value;
                ja[F] && (aa[W] = ja[F]);
              }
              T = !1;
              F = {};
              W = q(X);
              for (var P = W.next(); !P.done; P = W.next()) {
                var ea = q(P.value);
                P = ea.next().value;
                ea = ea.next().value;
                ja[P] && ((T = !0), (F[ea] = ja[P]));
              }
              T && (aa.thumbnailImage = F);
              if (ja.height) {
                T = {};
                F = q(S);
                for (W = F.next(); !W.done; W = F.next())
                  (P = q(W.value)), (W = P.next().value), (P = P.next().value), ja[W] && (T[P] = ja[W]);
                aa.image = T;
              }
              if (ja.richSnippet) {
                T = void 0;
                F = ja.richSnippet;
                if (F.cseThumbnail) {
                  W = F.cseThumbnail;
                  P = {};
                  aa.thumbnailImage = P;
                  ea = q(M);
                  for (var wa = ea.next(); !wa.done; wa = ea.next()) {
                    var Ea = q(wa.value);
                    wa = Ea.next().value;
                    Ea = Ea.next().value;
                    W[wa] && (P[Ea] = W[wa]);
                  }
                }
                W = !1;
                P = {};
                for (T in F)
                  F.hasOwnProperty(T) && "cseThumbnail" !== T && "cseImage" !== T && ((P[T] = Qd(F[T])), (W = !0));
                W && (aa.richSnippet = P);
              }
              if (ja.perResultLabels)
                for (
                  T = ja.perResultLabels, ja = [], aa.perResultLabels = ja, T = q(T), F = T.next();
                  !F.done;
                  F = T.next()
                ) {
                  F = F.value;
                  W = {};
                  P = q(sa);
                  for (ea = P.next(); !ea.done; ea = P.next())
                    (wa = q(ea.value)), (ea = wa.next().value), (wa = wa.next().value), F[ea] && (W[wa] = F[ea]);
                  ja.push(W);
                }
              H.push(aa);
            }
            Q = H;
          } else Q = f;
          (m = !r(m, v, x, Q, t)) || a.ma.insertBefore(t, a.Y);
        }
        if (m && e && 0 < e.length) {
          r = [];
          e = q(e);
          for (t = e.next(); !t.done; t = e.next())
            (t = t.value),
              t.html || a.u.wi(t),
              t.html &&
                ((v = L(a.u.Vc())),
                B(v, "gsc-result"),
                B(v, "gsc-promotion"),
                E(v, t.html.cloneNode(!0)),
                a.ma.insertBefore(v, a.Y),
                r.push(v));
          e = r;
        } else e = [];
        (r = this.Lc) && Yg(r, "gsc-above-wrapper-area");
        l || this.sn(b);
        v = !h && 0 < f.length;
        l && !v ? this.Nz(b) : this.jm(b);
        this.Ua && this.Mr();
        this.ss(a, c.html);
        t = !m;
        r = [];
        if (m) {
          if (h) l || (this.gk(a, b, r, h) && (t = !0));
          else for (f = q(f), h = f.next(); !h.done; h = f.next()) this.gk(a, b, r, h.value) && (t = !0);
          if (l)
            for (v && this.ns(a, b.results.length), k = q(k), f = k.next(); !f.done; f = k.next())
              this.gk(a, b, r, f.value) && (t = !0);
        }
        d && this.ub && this.Sx(a.ma);
        if (!d && !a.u.Pd) {
          b = q(r);
          for (k = b.next(); !k.done; k = b.next())
            (k = k.value), this.Ma(k.firstElementChild, this.qB, [k]), this.us(k.firstElementChild, El, Fl);
          this.ub && this.vs(a.ma);
        }
        l || this.xs(a);
        this.As(t, a);
        this.Mx(a, c);
        this.Wm();
        (a = d ? this.Tr : this.No) && a(this.va, this.input.value, e, r);
        this.vp();
      }
    }
  };
  V.prototype.onSearchComplete = V.prototype.qd;
  g = V.prototype;
  g.gk = function (a, b, c, d) {
    d.html || b.cf(d);
    return d.html ? (c.push(this.xy(a, d)), !0) : !1;
  };
  g.vs = function (a) {
    var b = L("gs-mobilePreview"),
      c = bk(
        "m100 50c0-28-22-50-50-50s-50 22-50 50 22 50 50 50 50-22 50-50zm-66 14c-0.1-0.7 0.4-1 6-7 6-6 6-6 6-7 0-0.9-0.5-1-6-7-6-6-6-6-6-7 0.2-1 1-2 2-2 0.8-0.2 1 0.3 7 6 6 6 6 6 7 6 0.9 0 1-0.5 7-6 6-6 6-6 7-6 1 0.2 2 1 2 2 0.2 0.7-0.3 1-6 7-6 6-6 6-6 7 0 0.8 0.7 2 6 7 6 6 6 6 6 7-0.2 1-1 2-2 2-0.7 0.2-1-0.4-7-6-6-6-6-6-7-6-0.9 0-1 0.5-7 6-6 6-6 6-7 6s-2-1-2-2z",
        Aj["close-button"],
        100,
        100,
        "gs-closeButton",
        30,
        30
      ),
      d = Yj();
    B(d, "gs-previewLink");
    var e = L("gs-previewSnippet"),
      f = L("gs-previewTitle"),
      h = Yj();
    B(h, "gs-previewLink");
    var k = L("gs-previewUrl"),
      l = L("gs-previewSize"),
      m = Yj();
    B(m, "gs-previewVisit");
    Qj(m, Aj["visit-website"]);
    E(f, h);
    E(e, f);
    E(e, k);
    E(e, l);
    E(e, m);
    E(b, c);
    E(b, d);
    E(b, e);
    b.style.setProperty("display", "none");
    this.Ma(c, this.Gr);
    E(a, b);
  };
  g.qB = function (a) {
    var b = this,
      c = function () {
        return b.ub ? void b.Gr(a) : void b.pB(a);
      };
    this.jh ? this.jh.Bd(this.ie, "toggleImagePreviewVisibility_", 2, c)() : c();
  };
  g.Gr = function (a) {
    for (var b = q(this.F.context.ma.children), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      if ("none" !== d.style.display) d.style.setProperty("display", "none");
      else if ((d.style.removeProperty("display"), Zg(d, "gs-mobilePreview"))) {
        c = this.F.ra.results[Wo(a)];
        Xo(d, c);
        var e = d.getElementsByClassName("gs-previewUrl")[0],
          f = d.getElementsByClassName("gs-previewSize")[0],
          h = d.getElementsByClassName("gs-previewVisit")[0],
          k = d.getElementsByClassName("gs-previewLink");
        Qj(d.getElementsByClassName("gs-previewTitle")[0], c.titleNoFormatting);
        Qj(e, c.visibleUrl);
        Qj(f, c.width + "\u00d7" + c.height);
        h.setAttribute("href", c.originalContextUrl);
        h.setAttribute("target", c.target);
        d = q(k);
        for (e = d.next(); !e.done; e = d.next())
          (e = e.value), e.setAttribute("href", c.originalContextUrl), e.setAttribute("target", c.target);
      }
    }
  };
  g.pB = function (a) {
    for (var b = Wo(a), c = mk(a); c; c = c.nextElementSibling)
      if (c !== a && Zg(c, "gs-selectedImageResult")) {
        $g(c, "gs-selectedImageResult");
        var d = c.getElementsByClassName("gs-imagePreviewArea")[0];
        d && ($g(d, "gs-imagePreviewArea"), B(d, "gs-imagePreviewArea-invisible"));
      }
    Zg(a, "gs-selectedImageResult") ? $g(a, "gs-selectedImageResult") : B(a, "gs-selectedImageResult");
    c = a.getElementsByClassName("gs-imagePreviewArea")[0];
    d = a.getElementsByClassName("gs-imagePreviewArea-invisible")[0];
    if (c) $g(c, "gs-imagePreviewArea"), B(c, "gs-imagePreviewArea-invisible");
    else if (d) Xo(d, this.F.ra.results[b]), $g(d, "gs-imagePreviewArea-invisible"), B(d, "gs-imagePreviewArea");
    else
      throw Error(
        "Could not find elements with class gs-imagePreviewArea or gs-imagePreviewArea-invisible in results: " +
          a.innerHTML
      );
  };
  var Wo = function (a) {
      for (var b = 0, c = mk(a); c && c !== a; c = c.nextElementSibling, ++b);
      return b;
    },
    Xo = function (a, b) {
      a = a.getElementsByClassName("gs-previewLink")[0];
      if (a.firstElementChild)
        (a = a.firstElementChild),
          a.setAttribute("src", b.unescapedUrl),
          a.setAttribute("width", b.width),
          a.setAttribute("height", b.height),
          a.setAttribute("alt", b.titleNoFormatting);
      else {
        var c = Xj(b.unescapedUrl, b.width, b.height, "gs-imagePreview");
        c.setAttribute("alt", b.titleNoFormatting);
        a.appendChild(c);
      }
    };
  g = V.prototype;
  g.hz = function (a) {
    var b = a.u.spelling;
    if (b && (!b.html && a.u.Jm && a.u.Jm(b), b.html)) {
      var c = b.html.cloneNode(!0),
        d = c.getElementsByTagName("a");
      b.type && "SPELL_CORRECTED_RESULTS" == b.type
        ? d &&
          1 < d.length &&
          (this.al(a.u, b.correctedQuery, d[0], b.correctedParamName, b.correctedParamValue),
          this.al(a.u, b.originalQuery, d[1], b.originalParamName, b.originalParamValue))
        : d && 0 < d.length && this.al(a.u, b.correctedQuery, d[0]);
      b = L(a.u.Vc());
      B(b, "gsc-result");
      E(b, c);
      a.ma.insertBefore(b, a.Y);
    }
  };
  g.Px = function (a, b) {
    b = this.vc(b);
    a && !b.u.Ad && Oj(b.da.V, this.Im(sj(a)));
  };
  g.ss = function (a, b) {
    var c = this.F && this.F.ra && "Web" == this.F.ra.Ad && 0 < a.u.results.length && 0 === a.u.cursor.currentPageIndex;
    if (b && c) {
      c = L(a.u.Vc());
      B(c, "gsc-result");
      E(c, b.cloneNode(!0));
      b = hk(c, "div", "gsc-facet-label");
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (e) {
          var f = this.vc(a);
          e = q(e.getElementsByTagName("a"));
          for (var h = e.next(); !h.done; h = e.next()) {
            h = h.value;
            var k = h.getAttribute("data-refinementLabel");
            if (k != a.u.pc()) {
              var l = h.getAttribute("label-with-op");
              l || (l = k);
              this.Ma(h, this.Fr, [f, l]);
            } else B(h, "gs-labelActive");
          }
        }
      }
      a.ma.insertBefore(c, a.Y);
    }
  };
  g.xy = function (a, b) {
    var c = L(a.u.Vc());
    B(c, "gsc-result");
    a.u.bg && B(c, "gsc-result-" + a.u.bg);
    E(c, b.html.cloneNode(!0));
    if (this.en) {
      var d = hk(c, "div", "gs-richsnippet-box")[0];
      if (d) {
        d.style.display = "block";
        var e = Tj(Aj["structured-data"], "gsc-richsnippet-showsnippet-label");
        E(d, e);
        this.Ma(e, this.SA, [b.url, b.richSnippet]);
      }
    }
    if (b.perResultLabels && (b = hk(c, "div", "gs-per-result-labels")[0])) {
      b = b.getElementsByTagName("a");
      d = this.vc(a);
      for (var f = 0; (e = b[f]); f++) {
        var h = e.getAttribute("data-refinementLabel");
        if (h != a.u.pc()) {
          var k = e.getAttribute("label-with-op");
          k || (k = h);
          this.Ma(e, this.Fr, [d, k]);
        } else B(e, "gs-labelActive");
      }
    }
    (b = this.ba[Y.sa].O) && b.parentNode == a.Y ? a.Y.insertBefore(c, b) : a.Y && E(a.Y, c);
    return c;
  };
  g.Cm = function (a) {
    var b;
    if ((b = this.Lw)) {
      a = zj[0 < a ? "backfill-few" : "backfill-none"]();
      var c = a.prefix,
        d = a.Sf;
      a = L("gs-snippet");
      c && ((c = Tj(c, "gs-backfill-text")), E(a, c));
      b = Tj(b, "gs-backfill-host-name");
      E(a, b);
      d && ((b = Tj(d, "gs-backfill-text")), E(a, b));
      b = a;
    } else b = Sj({ text: Aj[0 < a ? "backfill-few" : "backfill-none"], className: "gs-snippet", hb: !0 });
    a = b;
    b = L("gs-webResult");
    B(b, "gs-result");
    B(b, "gs-backfill-message");
    E(b, a);
    a = L("gsc-webResult");
    B(a, "gsc-result");
    E(a, b);
    return a;
  };
  g.ns = function (a, b) {
    if (a.Y) {
      b = this.Cm(b);
      var c = this.ba[Y.sa].O;
      c && c.parentNode == a.Y ? a.Y.insertBefore(b, c) : E(a.Y, b);
    }
  };
  g.As = function (a, b) {
    a || this.km(b);
    var c = this.Gb,
      d = this.ub;
    a = void 0 === b.ma ? null : b.ma;
    var e = b.u;
    d = void 0 === d ? !1 : d;
    if (a)
      if (((b = e.ii), e.findMoreOnGoogle && e.findMoreOnGoogle.url)) {
        var f = e.findMoreOnGoogle.url;
        f = e.Zb ? e.Zb(f) : f;
        var h = e.ob;
        e = zj["search-on-google"]();
        var k = e.prefix,
          l = e.Sf;
        e = L("gcsc-find-more-on-google");
        var m = bk(
          "m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
          Aj.search,
          13,
          13,
          "gcsc-find-more-on-google-magnifier",
          12,
          12
        );
        E(e, m);
        k && ((k = Tj(k, "gcsc-find-more-on-google-text")), E(e, k));
        0 === h.length
          ? (h = { query: "", Do: !1 })
          : ((k = h.endsWith('"')), (h = { Do: k, query: h.slice(0, k ? -1 : h.length) }));
        k = Tj(h.query, "gcsc-find-more-on-google-query");
        E(e, k);
        h.Do && E(e, Tj('"', "gcsc-find-more-on-google-query"));
        l && ((l = Tj(l, "gcsc-find-more-on-google-text")), E(e, l));
        c = Yj(f, null, c);
        E(c, e);
        d
          ? ((d = b),
            (d = void 0 === d ? null : d),
            (b = Sj({ className: "gcsc-more-maybe-branding-box" })),
            E(b, c),
            (c = L("gcsc-find-more-on-google-root")),
            E(c, b),
            E(a, c.cloneNode(!0)),
            d && E(a, d.cloneNode(!0)))
          : ((d = b),
            (d = void 0 === d ? null : d),
            (b = Sj({ className: "gcsc-more-maybe-branding-root" })),
            E(b, c),
            d && ((c = Sj({ className: "gcsc-find-more-on-google-branding" })), E(c, d), E(b, c)),
            E(a, b.cloneNode(!0)));
      } else b && E(a, b.cloneNode(!0));
  };
  g.Mx = function (a, b) {
    if (0 == a.ld || a.se) {
      var c = this.vc(a),
        d = 0 == a.ld && this.Gw(a),
        e = a.se && 1 == c.ea.length;
      if (d || e) {
        if ((d && this.lt(a), b.facets && 0 < b.facets.length)) {
          d && this.Dm(a);
          var f = !1,
            h = b.facets;
          if (h.length > this.Qe && 0 < b.display_facets.length && -1 !== this.Qe)
            for (
              h.sort(function (m, r) {
                return r.count - m.count;
              }),
                b = h.length;
              b > this.Qe;
              b--
            )
              h.pop();
          for (b = 0; b < h.length; b++) {
            var k = h[b],
              l = k.label_with_op;
            if (!l || this.Om) l = k.label;
            d || (e && !a.u.ee(l)) ? this.Em(c, l, k.anchor) : (a.u.rb(k.anchor), this.xp(c), (f = !0));
          }
          e && !f && this.xp(c);
        }
      } else if (a.se && b.facets && 0 < b.facets.length)
        for (c = b.facets, d = 0; d < c.length; d++) (e = c[d]), a.u.ee(e.label) && a.u.rb(e.anchor);
      a.se && (a.se = !1);
    }
    this.tb && this.F && a == this.F.context && this.sr(a);
    this.Vy(a);
  };
  g.Em = function (a, b, c) {
    var d = a.u,
      e = d.ri();
    e.Qk(b);
    e.rb(c);
    b = new Lo();
    b.nd = a.Kb.nd;
    this.Mc(e, b, a);
    e.La(d.xa);
    d.cb && e.Uq(d.cb);
    d = a.ea[a.ea.length - 1];
    this.xi(d, a);
    this.Hm(d);
    if ((a = d.da.xb)) B(a, "gsc-tabData"), B(a, "gsc-tabdInactive");
    return d;
  };
  g.xs = function (a) {
    if (a.u.jd && a.Y && a.u.cursor && a.u.cursor.pages && 1 < a.u.cursor.pages.length) {
      var b = L("gsc-cursor-box gs-bidi-start-align");
      this.ub || (b.dir = "ltr");
      var c = this.Bt(a);
      b.appendChild(c);
      E(a.ma, b);
    }
  };
  g.Vy = function (a) {
    var b = this.input.value;
    a = this.vc(a);
    if (a.ea)
      for (var c = 0; c < a.ea.length; c++) {
        var d = a.ea[c];
        Oj(d.da.V, this.Im(sj(d.u.Cj().replace(/\$q/g, b))));
      }
  };
  g.vc = function (a) {
    return a.qe || a;
  };
  g.sr = function (a) {
    a.Za
      ? ($g(a.Za, "gsc-refinementBlockInvisible"),
        B(a.Za, "gsc-refinementBlock"),
        this.F != a.We && ((this.F = a.We), this.Ne(this.F)))
      : a.qe && a.qe.Za && ($g(a.qe.Za, "gsc-refinementBlockInvisible"), B(a.qe.Za, "gsc-refinementBlock"));
  };
  g.Gw = function (a) {
    var b = a.u.context ? a.u.context.facets : null;
    if (!b) return 0 < a.ea.length;
    if (b.length != a.ea.length) return !0;
    for (var c = 0; c < b.length; c++) {
      var d = b[c].label_with_op;
      d || (d = b[c].label);
      if (!a.ea[c].u.ee(d)) return !0;
    }
    return !1;
  };
  g.lt = function (a) {
    if (0 != a.ea.length) {
      var b = a.Za;
      b && (Nj(b), b.parentNode && b.parentNode.removeChild(b));
      for (a.Za = null; 0 < a.ea.length; ) (b = a.ea.pop()), b.root && (Nj(b.root), this.we.removeChild(b.root));
    }
  };
  g.Bt = function (a) {
    return this.ub ? this.Dt(a) : this.Ct(a);
  };
  g.Ct = function (a) {
    for (var b = L("gsc-cursor"), c = a.u.cursor, d = 0; d < c.pages.length; d++) {
      var e = d + 1,
        f = d == c.currentPageIndex,
        h = "gsc-cursor-page" + (f ? " gsc-cursor-current-page" : "");
      e = Yo(f ? { text: c.pages[d].label } : { text: c.pages[d].label, title: yj.page(e), role: "link" }, h);
      f ? kf(e, { tabindex: 0, tabIndex: 0 }) : this.Ma(e, V.prototype.th, [a, d]);
      b.appendChild(e);
    }
    return b;
  };
  g.Dt = function (a) {
    var b = L("gsc-cursor"),
      c = a.u.cursor,
      d = c.currentPageIndex,
      e = 0 <= ["ar", "iw"].indexOf("ja");
    if (0 == c.pages.length) return b;
    var f = function (k) {
        return bk(
          k != e
            ? "M10.2 11.5L5.2 6.5 10.2 1.56 8.65 0l-6.5 6.5 6.5 6.5z"
            : "M2.8 11.5L7.8 6.5 2.8 1.56 4.36 0l6.5 6.5-6.5 6.5z",
          k ? Aj.previous : Aj.next,
          13,
          13,
          "gsc-cursor-chevron"
        );
      },
      h = Yo(0 === d ? {} : { title: Aj["prev-page"], role: "link" }, "gsc-cursor-container-previous");
    b.appendChild(h);
    0 < d && (h.appendChild(f(!0)), this.Ma(h, V.prototype.th, [a, d - 1]), b.appendChild(h));
    0 == d && 1 < c.pages.length
      ? ((h = Yo({ text: Jo, title: Aj["next-page"], role: "link" }, "gsc-cursor-next-page")),
        this.Ma(h, V.prototype.th, [a, 1]),
        kf(h, { tabindex: -1, tabIndex: -1 }),
        b.appendChild(h))
      : ((h = Yo(
          { text: yj.page(d + 1) },
          d < c.pages.length - 1 ? "gsc-cursor-numbered-page" : "gsc-cursor-final-page"
        )),
        b.appendChild(h));
    h = Yo({ text: void 0, title: Aj["next-page"], role: "link" }, "gsc-cursor-container-next");
    b.appendChild(h);
    d < c.pages.length - 1 && (h.appendChild(f(!1)), this.Ma(h, V.prototype.th, [a, d + 1]), b.appendChild(h));
    return b;
  };
  var Yo = function (a, b) {
    b = Sj({ text: a.text, className: b, hb: !0 });
    var c = {};
    a.title && (c["aria-label"] = a.title);
    a.role && (c.role = a.role);
    (a.title || a.role) && kf(b, c);
    return b;
  };
  g = V.prototype;
  g.Vu = function (a) {
    a = a ? a : this.root;
    var b = null;
    window.getComputedStyle
      ? (b = window.getComputedStyle(a, null))
      : a.currentStyle
      ? (b = a.currentStyle)
      : document.defaultView.getComputedStyle && (b = document.defaultView.getComputedStyle(a, null));
    return b ? parseInt(b.width, 10) : 300;
  };
  g.hA = function (a, b) {
    this.No = Lj(a, b);
  };
  g.gA = function (a, b) {
    this.Mo = Lj(a, b);
  };
  g.PA = function (a, b) {
    this.Tr = Lj(a, b);
  };
  g.OA = function (a, b) {
    this.Sr = Lj(a, b);
  };
  g.QA = function (a, b) {
    this.Ur = Lj(a, b);
  };
  g.jA = function (a, b) {
    this.Oo = Lj(a, b);
  };
  g.nr = function (a, b) {
    this.vl = b && Lj(a, b);
  };
  V.prototype.setTrackingCallback = V.prototype.nr;
  V.prototype.th = function (a, b) {
    this.mg = !1;
    this.ub && (this.fn = !0);
    this.Wm();
    this.jl(a, !0);
    this.hh = b + 1;
    if (this.ja && this.ja.isEnabled()) {
      var c = this.ja.getState();
      c["gsc.page"] = b + 1;
      this.ja.pushState(c);
    }
    this.Eg(this.ie, b + 1);
    c = new Map();
    this.oc && c.set("rsToken", this.oc);
    this.Ed && c.set("afsExperimentId", "" + this.Ed);
    a.u.uo(b, c);
    this.ub || this.ca.scrollIntoView();
  };
  V.prototype.ur = function (a) {
    var b;
    if (!(b = !a) && (b = !(!window.history || !window.history.pushState) || Kl()))
      a: {
        b = Ll(Ml()).state;
        for (var c in b) {
          b = !0;
          break a;
        }
        b = !1;
      }
    b || a(this);
    a = {};
    this.la || this.kr(this.F, a);
    this.ie && (a["gsc.q"] = this.ie);
    this.hh && (a["gsc.page"] = this.hh);
    this.ja = new Nl(a, Lj(this, V.prototype.iw));
    return this.ja.isEnabled();
  };
  V.prototype.startHistoryManagement = V.prototype.ur;
  V.prototype.no = function (a, b) {
    if (null == a || 0 > a || a >= this.H.length) a = this.F;
    else {
      var c = this.H[a];
      if (c.u.M && b) {
        var d = b;
        c.u.me && (d = c.u.me(b));
        a = this.vn(c, d);
        a || (c.Za || this.Dm(c), (b = this.Em(c, d, b)), (b.se = !0), (a = b.da));
      } else a = c.We || c.da;
    }
    return a;
  };
  V.prototype.iw = function (a) {
    var b = this.no(a["gsc.tab"], a["gsc.ref"]);
    if (b) {
      if (this.Ua) {
        var c;
        null != a["gsc.sort"] && (c = this.ho(a["gsc.sort"]));
        null == c && (c = this.Kd);
        this.Uk(c);
        this.Bh(c, b.ra);
      }
      c = a["gsc.q"] || "";
      a = a["gsc.page"];
      if (null == a || 0 >= a) a = 1;
      this.F == b ? (c ? this.execute(c, a) : this.Mb()) : (this.Le(b, { query: c, page: a }), c || this.Mb());
    }
  };
  V.prototype.kr = function (a, b) {
    for (var c = this.vc(a.context), d = 0; d < this.H.length; d++)
      if (this.H[d] == c) {
        b["gsc.tab"] = d;
        break;
      }
    a = a.ra;
    a.pc && null != a.pc() ? (b["gsc.ref"] = a.pc()) : delete b["gsc.ref"];
  };
  var Vo = function (a, b, c) {
      Zo++;
      var d = document.createElement("form");
      d.className = "gsc-search-box";
      d.acceptCharset = "utf-8";
      var e = Aj["search-uc"],
        f = Aj.search;
      c && c.Nh && c.Wl && (e = "");
      if (c && (c.buttonText && (f = e = c.buttonText), c.clickableBrandingUrl)) {
        var h = "http://www.google.com";
        "string" == typeof c.clickableBrandingUrl &&
          c.clickableBrandingUrl.match(/^http:\/\/[a-z]*\.google\.com/) &&
          (h = c.clickableBrandingUrl);
        h = Yj(h, null, "_BLANK");
        h.className = "gsc-branding-clickable";
      }
      c && c.Nh
        ? "" == e
          ? ((e = document.createElement("button")),
            (e.className = "gsc-search-button gsc-search-button-v2"),
            (this.ze = e),
            this.ze.appendChild(
              bk(
                "m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                f,
                13,
                13
              )
            ))
          : ((h = mf(document, "INPUT")),
            (h.type = "button"),
            (h.value = e),
            (h.className = "gsc-search-button"),
            (this.ze = h))
        : ((h = mf(document, "INPUT")),
          (h.type = "submit"),
          (h.value = e),
          (h.className = "gsc-search-button"),
          (this.ze = h));
      e = mf(document, "INPUT");
      e.setAttribute("autoComplete", "off");
      e.type = "text";
      e.size = 10;
      B(e, "gsc-input");
      this.input = e;
      this.input.name = "search";
      this.input.title = f;
      this.input.ariaLabel = f;
      f = this.input;
      c &&
        c.Nh &&
        c.Wl &&
        ((this.input.className = ""),
        (this.input.style.width = "100%"),
        (this.input.style.padding = "0 2px 0 0"),
        (this.Sj = L("gsc-input-box")),
        (this.Sj.id = "gsc-iw-id" + Zo),
        E(this.Sj, this.input),
        (f = this.Sj));
      c && c.Nh && (this.input.id = "gsc-i-id" + Zo);
      c = Uj(null, null, "gsc-search-box");
      E(d, c);
      c = Vj(c, 0);
      this.Tw = Wj(c, "gsc-input");
      e = Wj(c, "gsc-search-button");
      E(this.Tw, f);
      E(e, this.ze);
      this.sh = d;
      Nj(b);
      E(b, this.sh);
      a &&
        ((this.li = Sj({ text: Io, className: "gsc-clear-button", hb: !0 })),
        (this.li.title = Aj["clear-results"]),
        (a = Wj(c, "gsc-clear-button")),
        E(a, this.li));
    },
    Zo = 0;
  Vo.prototype.uA = function (a, b) {
    this.xr = Mj(this, this.dB, [this]);
    this.Fh = Mj(a, b, [this]);
    this.sh.onsubmit = this.xr;
    this.ze.onclick = this.xr;
  };
  Vo.prototype.setOnSubmitCallback = Vo.prototype.uA;
  Vo.prototype.Xq = function (a, b) {
    this.li.onclick = Mj(a, b, [this]);
  };
  Vo.prototype.setOnClearCallback = Vo.prototype.Xq;
  Vo.prototype.dB = function () {
    this.Fh && this.Fh();
    return !1;
  };
  Vo.prototype.execute = function (a) {
    a && (this.input.value = a);
    this.Fh && this.Fh();
  };
  Vo.prototype.execute = Vo.prototype.execute;
  var Z = function (a, b, c) {
    b = void 0 === b ? {} : b;
    this.va = void 0 === c ? null : c;
    V.call(this);
    this.ub = b.useMobileLayout;
    this.cn = null != b.enableApiary_ ? !!b.enableApiary_ : !0;
    c = function (k) {
      var l;
      return -1 < (null == (l = b.experimentNames) ? void 0 : l.indexOf(k));
    };
    this.Rb = c("csqr");
    this.Tc = c("dev");
    this.La(b.resultSetSize || "large");
    c = c("4861326") ? 3 : 4;
    c = { iframes: !0, adtest: b.adtest || null, channel: b.adchannel || null, includeVerticalAds: !1, numTopAds: c };
    (qk(a) || a.startsWith("p-") || a.startsWith("s-")) && (c.fexp = ["4976782"]);
    if (b.adoptions) for (var d in b.adoptions) b.adoptions.hasOwnProperty(d) && (c[d] = b.adoptions[d]);
    "noTop" == c.layout && (c.layout = null);
    "personalizedAds" in b && (c.personalizedAds = b.personalizedAds);
    "adStyleId" in b && (c.adStyleId = b.adStyleId);
    "isSafeSearchActive" in b && (c.isSafeSearchActive = b.isSafeSearchActive);
    this.Xi(b.adclient || "", c);
    this.ig = b.autoCompleteOptions;
    this.sm = "" + a;
    this.qc = a;
    this.Qm = 0;
    this.Om = b.defaultToRefinement;
    this.T = null;
    if (!b.disableWebSearch || !b.enableImageSearch) {
      var e = {};
      b["restrict-extended"] && (e["restrict-extended"] = b["restrict-extended"]);
      b["restrict-safesearch"] && (e["restrict-safesearch"] = b["restrict-safesearch"]);
      b.isSafeSearchActive && (e.isSafeSearchActive = b.isSafeSearchActive);
      if (b.webSearchOptions) for (var f in b.webSearchOptions) e[f] = b.webSearchOptions[f];
      b.cse_token && (e.cse_token = b.cse_token);
      b.cselibVersion && (e.cselibVersion = b.cselibVersion);
      b.experimentNames && (e.experimentNames = b.experimentNames);
      this.ru(e);
    }
    this.W = null;
    if (b.enableImageSearch) {
      a = {};
      b["restrict-safesearch"] && (a["restrict-safesearch"] = b["restrict-safesearch"]);
      b.isSafeSearchActive && (a.isSafeSearchActive = b.isSafeSearchActive);
      if (b.imageSearchOptions) for (var h in b.imageSearchOptions) a[h] = b.imageSearchOptions[h];
      b.cse_token && (a.cse_token = b.cse_token);
      b.cselibVersion && (a.cselibVersion = b.cselibVersion);
      b.experimentNames && (a.experimentNames = b.experimentNames);
      this.ou(a);
      b.defaultToImageSearch && this.T && (this.Qm = 1);
    }
    this.T && this.W && this.rb({ web: Aj.web, image: Aj.image });
    b.googleAnalyticsOptions &&
      b.googleAnalyticsOptions.queryParameter &&
      ((this.Dj = b.googleAnalyticsOptions), this.nr(null, $o));
    b.enableOrderBy &&
      ((this.Ip = !0),
      (this.zc =
        b.orderByOptions && b.orderByOptions.keys && 0 < b.orderByOptions.keys.length
          ? b.orderByOptions.keys
          : [
              { key: "", label: Aj["order-by-relevance"] },
              { key: "date", label: Aj["order-by-date"] },
            ]),
      void 0 !== e &&
        b.orderByOptions &&
        e["restrict-extended"] &&
        void 0 !== e["restrict-extended"].sort &&
        (this.Kd = this.ho(e["restrict-extended"].sort) || 0),
      void 0 == this.Kd && (this.Kd = 0));
    this.Kp = b.overlayResults ? !0 : !1;
    this.en = !!b.enableRichSnippets;
    this.yn = !0;
    this.Xr = this.wh = !1;
    b.experimentNames &&
      (-1 < b.experimentNames.indexOf("4835162") && (this.wh = !0),
      -1 < b.experimentNames.indexOf("4835163") && (this.Xr = this.wh = !0));
    this.draw = this.Nd;
    this.execute = this.execute;
    this.getImageSearcher = this.Xn;
    this.setResultSetSize = this.La;
  };
  Ej(Z, V);
  Z.prototype.ru = function (a) {
    this.T ||
      ((this.T = new U()),
      this.T.Pf(this.qc),
      (this.T.Gh = Aj["custom-search"]),
      this.T.Oq(this.cn),
      this.T.Qq(this.Rb),
      this.T.Pq(this.Tc),
      this.Mc(this.T),
      a &&
        (a.cse_token ? this.T.Mf(a.cse_token) : this.T.Mf("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313"),
        a.resultSetSize && this.T.La(a.resultSetSize),
        a["restrict-extended"] && this.T.Gc("restrict-extended", a["restrict-extended"]),
        a["restrict-safesearch"] && this.T.Gc("restrict-safesearch", a["restrict-safesearch"]),
        a.isSafeSearchActive && this.T.Of(a.isSafeSearchActive),
        a.linkTarget && this.T.Ka(a.linkTarget),
        a.queryAddition && this.T.cc(a.queryAddition),
        a.experimentNames && this.T.Ie(a.experimentNames),
        a.cselibVersion &&
          (this.T.Nf(a.cselibVersion),
          this.T.vi("cse.customWebSearch", this.qc, a.experimentNames),
          (this.jh = new al("cse.searchControl", a.cselibVersion, this.qc, a.experimentNames || [])))));
  };
  Z.prototype.ou = function (a) {
    if (
      !this.W &&
      ((this.W = new Bl()),
      this.W.Pf(this.qc),
      this.W.Oq(this.cn),
      this.W.Qq(this.Rb),
      this.W.Pq(this.Tc),
      this.Mc(this.W),
      a)
    ) {
      a.cse_token ? this.W.Mf(a.cse_token) : this.W.Mf("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313");
      a.resultSetSize && this.W.La(a.resultSetSize);
      a["restrict-safesearch"] && this.W.Gc("restrict-safesearch", a["restrict-safesearch"]);
      a.isSafeSearchActive && this.W.Of(a.isSafeSearchActive);
      a["restrict-extended"] && this.W.Gc("restrict-extended", a["restrict-extended"]);
      a.linkTarget && this.W.Ka(a.linkTarget);
      a.queryAddition && this.W.cc(a.queryAddition);
      var b = [];
      a.experimentNames && (this.W.Ie(a.experimentNames), (b = a.experimentNames.slice()));
      a.cselibVersion &&
        (this.W.Nf(a.cselibVersion),
        this.W.vi("cse.customImageSearch", this.qc, b),
        (this.jh = new al("cse.searchControl", a.cselibVersion, this.qc, b)));
    }
  };
  function ap(a) {
    for (var b = a, c = ["+qptype:", "+lang:"], d = 0; d < c.length; ++d) {
      var e = a.indexOf(c[d]);
      0 <= e && (b = b.slice(0, e));
    }
    return b;
  }
  Z.prototype.Mz = function (a) {
    this.sm = "string" == typeof a ? ap(a) : "";
  };
  Z.prototype.setAutoCompletionId = Z.prototype.Mz;
  Z.prototype.Lg = function () {
    return this.sm;
  };
  Z.prototype.getPartnerId = Z.prototype.Lg;
  Z.prototype.Pg = function () {
    var a;
    return null == (a = this.ig) ? void 0 : a.clientName;
  };
  Z.prototype.getSearchboxClientName = Z.prototype.Pg;
  z(
    "module$exports$cse$customsearchcontrol.CustomSearchControl.attachAutoCompletion",
    function (a, b, c, d, e, f, h, k) {
      return bp(a, b, c, { callback: e, maxCompletions: f, styleOptions: k });
    }
  );
  var bp = function (a, b, c, d) {
    if (c instanceof V && window.console)
      return window.console.log("We no longer support attachAutoCompletionWithOptions for SearchControl object"), {};
    a = ap(a);
    d = d || {};
    var e = "string" == typeof c ? lk(c) : c;
    b = lk(b);
    if (!e) for (var f = b; f; ) (f = f.parentNode), kk(f) && (e = f);
    f = Ho();
    var h = {
      clearToolTitle: Aj["clear-tool-title"],
      interfaceLanguage: "ja",
      isLoggingWithHiddenFormFields: d.isLoggingWithHiddenFormFields,
      maxSuggestions: d.maxCompletions,
      maxPromotions: d.maxPromotions,
      styleOptions: d.styleOptions,
    };
    (d = d.searchButton ? lk(d.searchButton) : null) &&
      ("submit" != d.type
        ? (h.searchButton = d)
        : window.console && window.console.warn("Cannot associate searchButton with a button of type submit."));
    if (h.isLoggingWithHiddenFormFields && !h.searchButton)
      return (
        window.console &&
          window.console.warn('The "searchButton" option is required when "isLoggingWithHiddenFormFields" is true.'),
        {}
      );
    d = c && (c.execute || c.submit);
    kk(e)
      ? ((h.isLoggingWithHiddenFormFields = h.isLoggingWithHiddenFormFields || ok(nk(e.action))), f.install(e, b, a, h))
      : f.Zw(d ? Lj(c, d) : function () {}, b, a, h);
    return { getInputQuery: f.pa, prefillQuery: f.Lb };
  };
  z("module$exports$cse$customsearchcontrol.CustomSearchControl.attachAutoCompletionWithOptions", bp);
  Z.prototype.ku = function (a) {
    if (this.zd) {
      if (a) throw "Please use constructor of CustomSearchControl to pass in additional options.";
      this.wd.J(!1);
    }
  };
  Z.prototype.enableAutoCompletion = Z.prototype.ku;
  Z.prototype.Nd = function (a, b) {
    b || (b = new Mo());
    b.Nq(2);
    this.DG && 1 == this.H.length && (this.hB = !0);
    this.Je(Oo);
    V.prototype.Nd.call(this, a, b);
    lk("cse-hosted") ||
      window.__gcse ||
      (window.console &&
        window.console.warn(
          "This page is calling an unsupported version of the Custom Search Element API. Please switch to the current version of the Custom Search Element API https://developers.google.com/custom-search/docs/element."
        ));
    a = this.la ? "gsc-control-searchbox-only" : "gsc-control-cse";
    b = this.root;
    this.la ||
      ((b = L()),
      this.root.parentNode && this.root.parentNode.insertBefore(b, this.root),
      E(b, this.root),
      Yg(this.root, "gsc-control-wrapper-cse"));
    Yg(b, a);
    B(b, a + "-ja");
  };
  Z.prototype.draw = Z.prototype.Nd;
  Z.prototype.dj = function (a, b, c, d, e) {
    this.la
      ? this.Hp()
      : ($g(this.ib, "gsc-thinWrapper"),
        this.yn && (this.Fv(), (this.yn = !1)),
        V.prototype.dj.call(this, a, b, c, d, e));
  };
  Z.prototype.Fv = function () {
    var a = "a a a a a ";
    for (var b = 5; 80 > b; b *= 2) a += a;
    a = Sj({ text: a, Jc: !0 });
    a.style.fontFamily = "arial";
    a.style.fontSize = "16px";
    a.style.visibility = "hidden";
    return this.ca ? (E(this.ca, a), (b = this.ca.offsetWidth), this.ca.removeChild(a), b) : 0;
  };
  Z.prototype.rb = function (a) {
    "string" == typeof a
      ? this.T
        ? this.T.rb(a)
        : this.W && this.W.rb(a)
      : (a.web && this.T && this.T.rb(a.web), a.image && this.W && this.W.rb(a.image));
  };
  Z.prototype.setUserDefinedLabel = Z.prototype.rb;
  Z.prototype.Mc = function (a, b, c) {
    V.prototype.Mc.call(this, a, b, c);
    a.Ce = "gcsc";
  };
  Z.prototype.addSearcher = Z.prototype.Mc;
  Z.prototype.Wt = function () {
    this.Xi("", { numTopAds: 0, numSideAds: 0, _includeBottomAds_: !1 });
  };
  Z.prototype.disableAds = Z.prototype.Wt;
  Z.prototype.tA = function () {};
  Z.prototype.setMoreAds = Z.prototype.tA;
  Z.prototype.Xn = function () {
    return this.W;
  };
  Z.prototype.getImageSearcher = Z.prototype.Xn;
  Z.prototype.Wv = function () {
    return this.T;
  };
  Z.prototype.getWebSearcher = Z.prototype.Wv;
  var cp = function (a, b, c) {
    "web" == a && (a = "");
    b && c && (a = a ? a + (":" + c) : c);
    return null == a ? "unknown" : a;
  };
  z("module$exports$cse$customsearchcontrol.CustomSearchControl.getTrackingCategory", cp);
  var $o = function (a, b, c) {
    var d = document.location;
    c = [
      d.pathname,
      d.search,
      d.search ? "&" : "?",
      encodeURIComponent(a.Dj.queryParameter),
      "=",
      encodeURIComponent(c),
    ];
    a.Dj.categoryParameter &&
      (b = cp(b.Oa, b.M, b.pc())) &&
      c.push("&", encodeURIComponent(a.Dj.categoryParameter), "=", encodeURIComponent(b));
    window.gtag && "function" == typeof window.gtag
      ? window.gtag("event", "page_view", { page_path: c.join("") })
      : window.ga && "function" == typeof window.ga
      ? window.ga("send", "pageview", c.join(""))
      : window._gaq && "function" == typeof window._gaq.push
      ? window._gaq.push(["_trackPageview", c.join("")])
      : window.console && window.console.log("Google Analytics tracking was not correctly setup.");
  };
  z("module$exports$cse$customsearchcontrol.CustomSearchControl.AUTO_PUBID", "");
  var dp = function (a, b, c, d, e, f, h, k, l) {
    this.Hd = a;
    this.va = b;
    this.type = c;
    this.Nb = {};
    this.v = this.qt(d);
    this.Ic = e;
    this.sg = f;
    this.kf = h;
    this.jb = k;
    this.Ba = l;
  };
  g = dp.prototype;
  g.ps = function (a) {
    if (a.va != this.va)
      return pk("Name of the component, " + a.va + ", should match name of the element, " + this.va + "."), this.oe;
    if (!a.type) return pk("Component has null type."), this.oe;
    var b = !1;
    this.Nb[a.type] &&
      (pk(
        "Multiple components of the same type " +
          a.type +
          " for Element named " +
          this.va +
          " are detected. Only the last is used."
      ),
      (b = !0));
    for (var c = Gk[this.type].af, d = 0; d < c.length; d++)
      if (c[d] == a.type) return (this.Nb[a.type] = a), b || this.oe++, this.oe;
    pk("Component of type " + a.type + " is not allowed for Element named " + this.va + " of type " + this.type + ".");
    return this.oe;
  };
  g.render = function () {
    var a = Gk[this.type].af;
    if (a.length != this.oe)
      for (var b = 0; b < a.length; b++)
        if (!this.Nb[a[b]])
          return pk("Component of type " + a[b] + " is missing for Element named " + this.va + "."), !1;
    a = {};
    for (var c in this.Nb)
      this.Nb.hasOwnProperty(c) && ((b = this.Nb[c]), b.Et(), (a[c] = b.node), this.hy(), this.jy(b.attributes, c));
    this.Ob = this.eu(a);
    return !0;
  };
  g.qt = function (a) {
    var b = {},
      c;
    for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b;
  };
  g.jy = function (a, b) {
    a.hasOwnProperty("webSearchSafesearch") && (a.isSafeSearchActive = a.webSearchSafesearch);
    a.hasOwnProperty("safeSearch") && (a.isSafeSearchActive = a.safeSearch);
    Ok(function (c) {
      if (a.hasOwnProperty(c.name) && c.s && ("searchbox+results" == b || void 0 == c.m || c.m == b)) {
        var d = c.l(a[c.name]);
        null != d &&
          ("webSearchExtendedRestricts" === c.i
            ? (this.v.webSearchExtendedRestricts || (this.v.webSearchExtendedRestricts = {}),
              c.g && (this.v.webSearchExtendedRestricts[c.g] = d))
            : "imageSearchExtendedRestricts" === c.i
            ? (this.v.imageSearchExtendedRestricts || (this.v.imageSearchExtendedRestricts = {}),
              c.g && (this.v.imageSearchExtendedRestricts[c.g] = d))
            : (this.v[c.name] = d));
      }
    }, this);
  };
  g.hy = function () {
    var a = y.__gcse;
    if (a && a.searchCallbacks) {
      a = void 0 === y.__gcse ? {} : y.__gcse;
      var b = void 0 === a.searchCallbacks ? {} : a.searchCallbacks;
      a = void 0 === b.image ? {} : b.image;
      b = void 0 === b.web ? {} : b.web;
      a = q([
        [a.starting, "onImageSearchStarting"],
        [a.ready, "onImageResultsReady"],
        [a.rendered, "onImageResultsRendered"],
        [b.starting, "onWebSearchStarting"],
        [b.ready, "onWebResultsReady"],
        [b.rendered, "onWebResultsRendered"],
      ]);
      for (b = a.next(); !b.done; b = a.next()) {
        var c = q(b.value);
        b = c.next().value;
        c = c.next().value;
        b &&
          (this.v[c] = "function" == typeof b ? b : "string" == typeof b && "function" === typeof y[b] ? y[b] : null);
      }
    }
  };
  g.ws = function (a, b, c) {
    b = fe($d("https://www.google.com/cse/static/element/%{versionDir}/mobile%{suffix}+%{lang}.css"), {
      versionDir: a,
      suffix: b,
      lang: c,
    });
    a = document.createElement("link");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.href = be(b).toString();
    (b = We('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) &&
      a.setAttribute("nonce", b);
    document.getElementsByTagName("head")[0].appendChild(a);
  };
  g.eu = function (a) {
    var b = {
      imageSearchOptions: {},
      webSearchOptions: {},
      autoCompleteOptions: {},
      googleAnalyticsOptions: {},
      orderByOptions: {},
    };
    Ok(function (h) {
      h.g && void 0 != this.v[h.name] && ((h.i ? b[h.i] : b)[h.g] = this.v[h.name]);
    }, this);
    this.Ba && (b.cselibVersion = this.Ba);
    this.sg && (b.cse_token = this.sg);
    this.kf && (b.experimentNames = this.kf);
    this.v.enableRichSnippets && (b.enableRichSnippets = !0);
    if ("forced" == this.v.mobileLayout || ("enabled" == this.v.mobileLayout && this.v.isMobileDevice))
      document.querySelector("head>meta[name=viewport]") ||
        console.warn("Mobile layout requested, but viewport meta tag is missing. Page layout may not be optimal."),
        this.ws(
          this.Ba,
          this.v.cssThemeVersion && 4 !== this.v.cssThemeVersion ? "_v" + this.v.cssThemeVersion : "",
          this.jb
        ),
        (b.useMobileLayout = !0);
    this.v.adStyleId && (b.adStyleId = this.v.adStyleId);
    void 0 != this.v.cssThemeVersion &&
      ((b.cssThemeVersion = this.v.cssThemeVersion), (0, Vk.qr)(this.v.cssThemeVersion));
    void 0 != this.v.autoCompleteSource && (b.autoCompleteOptions.clientName = this.v.autoCompleteSource);
    var c = new Z(this.Hd, b, this.va);
    void 0 != this.v.addOverride && (0, Vk.Rl)(this.v.addOverride);
    void 0 != this.v.linkTarget && c.Ka(this.v.linkTarget);
    var d = [
      [this.v.onImageSearchStarting, db(c.jA, c)],
      [this.v.onImageResultsReady, db(c.gA, c)],
      [this.v.onImageResultsRendered, db(c.hA, c)],
      [this.v.onWebSearchStarting, db(c.QA, c)],
      [this.v.onWebResultsReady, db(c.OA, c)],
      [this.v.onWebResultsRendered, db(c.PA, c)],
    ];
    d = q(d);
    for (var e = d.next(); !e.done; e = d.next()) {
      var f = q(e.value);
      e = f.next().value;
      f = f.next().value;
      null != e && f(null, e);
    }
    d = new Mo();
    void 0 != this.v.enableAutoComplete && d.Pk(this.v.enableAutoComplete);
    void 0 != this.v.enableSpeech && d.ir(this.v.enableSpeech);
    void 0 != this.v.numTopRefinements && d.mr(this.v.numTopRefinements);
    void 0 != this.v.hideElementBranding && d.Lq(!this.v.hideElementBranding);
    this.jb && d.Mq(this.jb);
    e = null;
    "searchbox-only" == this.type
      ? ((e = this.v.resultsUrl),
        !e && this.Hd
          ? (e = "https://cse.google.com/cse?cx=" + encodeURIComponent(this.Hd))
          : void 0 == e && (e = window.location.href),
        this.v.personalizedAds || (e += "&personalized_ads=0"),
        d.hn(e, this.v.queryParameterName, this.v.newWindow),
        (e = a.searchbox))
      : "searchresults-only" == this.type
      ? (d.gn(), (e = a.results))
      : "two-column" == this.type
      ? (d.Zk(a.searchbox), (e = a.results))
      : (e = a["searchbox+results"]);
    c.Nd(e, d);
    this.v.noResultsString && ((a = Ze(this.v.noResultsString)), c.Je(a));
    this.v.enableHistory ? c.ur(Lj(this, this.ge)) && void 0 == this.v.linkTarget && c.Ka("_self") : this.ge(c);
    return c;
  };
  g.ge = function (a) {
    var b = this.Ic[this.v.queryParameterName];
    if (b && this.v.autoSearchOnLoad)
      if ("searchbox-only" == this.type) a.oh(b);
      else {
        for (var c = this.Ic, d = {}, e = 0; e < Pk.length; e++) c.hasOwnProperty(Pk[e]) && (d[Pk[e]] = c[Pk[e]]);
        a.execute(b, void 0, d);
      }
  };
  g.oe = 0;
  g.Ob = null;
  var ep = function (a) {
    a = void 0 === a ? {} : a;
    this.Hd = a.cx || "";
    this.tB = this.Vv(a.uiOptions);
    this.ud = {};
    this.Da = {};
    var b = window.location.search,
      c = {};
    if (1 < b.length) {
      b = b.substr(1).split("&");
      for (var d = 0; d < b.length; d++) {
        var e = b[d].split("="),
          f = void 0;
        try {
          f = decodeURIComponent(e[0]);
        } catch (k) {
          continue;
        }
        if (f) {
          var h = void 0;
          try {
            h = e[1] ? decodeURIComponent(e[1].replace(/\+/g, " ")) : e[1];
          } catch (k) {}
          c[f] = h;
        }
      }
    }
    this.Ic = c;
    this.vk = a.rawCss;
    this.Ns();
    this.sg = a.cse_token;
    this.kf = a.exp;
    this.jb = a.language;
    this.Ba = a.cselibVersion;
    this.pb = new al("cse.manager", this.Ba, this.Hd, this.kf);
  };
  g = ep.prototype;
  g.Vv = function (a) {
    a = a || {};
    var b = {};
    Ok(function (c) {
      var d = c.name,
        e = null;
      a.hasOwnProperty(d) && (e = c.l(a[d]));
      null != e ? (b[d] = e) : void 0 != c.defaultValue && (b[d] = c.defaultValue);
    }, this);
    return b;
  };
  g.du = function () {
    if ("boolean" == typeof this.uk) return this.uk;
    var a = document.createElement("div");
    a.appendChild(document.createElement("G:TEST"));
    return (this.uk = !!(a.querySelectorAll && 0 < a.querySelectorAll("G\\:TEST").length));
  };
  g.go = function (a) {
    var b = this;
    this.pb
      .Bd(this.Ic.q, "go", null, function () {
        return b.Yv(a);
      })
      .apply(this);
  };
  g.Yv = function (a) {
    a = (a ? lk(a) : null) || document.body;
    a = this.du() ? a.querySelectorAll(Ik) : Mk(a);
    window || (window = {});
    for (var b = 0; b < a.length; ++b) this.Xp(new Rk(a[b]));
    this.An();
  };
  g.render = function (a, b) {
    var c = this;
    return this.pb
      .Bd(this.Ic.q, "render", null, function () {
        return c.Uy(a, b);
      })
      .apply(this);
  };
  g.Uy = function (a, b) {
    if (b && "searchbox" != a.tag && "searchresults" != b.tag)
      return pk('First and second components must be of tag "searchbox"  and "searchresults" separately.'), null;
    if (b && a.gname != b.gname) return pk("First and second components must be of the same gname."), null;
    a = [a];
    b && a.push(b);
    b = [];
    for (var c = 0; c < a.length; c++) {
      if (!a[c].div) return pk("div required for component."), null;
      a[c].tag || (a[c].tag = "search");
      if (!Hk[a[c].tag]) return pk("tag named " + a[c].tag + " is not recognized"), null;
      var d = lk(a[c].div);
      if (d && 1 === d.nodeType) {
        d = new Rk(d, a[c]);
        var e = d.va;
        b.push(d);
      }
    }
    for (a = 0; a < b.length; a++) this.Xp(b[a]);
    this.An();
    return e ? this.qj(e) : null;
  };
  g.qj = function (a) {
    var b = this;
    return this.pb
      .Bd(this.Ic.q, "getElement", null, function () {
        return b.Yu(a);
      })
      .apply(this);
  };
  g.Yu = function (a) {
    return this.Da[a] ? new fp(this.Da[a]) : null;
  };
  g.Gu = function () {
    var a = this;
    return this.pb
      .Bd(this.Ic.q, "getAllElements", null, function () {
        return a.Hu();
      })
      .apply();
  };
  g.Hu = function () {
    var a = {},
      b;
    for (b in this.Da) a[b] = new fp(this.Da[b]);
    return a;
  };
  g.Xp = function (a) {
    var b = a.va;
    this.ud[b] || (this.ud[b] = new dp(this.Hd, b, a.tc, this.tB, this.Ic, this.sg, this.kf, this.jb, this.Ba));
    this.ud[b].ps(a);
  };
  g.Ns = function () {
    if (this.vk) {
      var a = document.getElementsByTagName("head")[0];
      a || (a = document.body.parentNode.appendChild(document.createElement("head")));
      var b = document.createElement("style");
      b.type = "text/css";
      b.styleSheet ? (b.styleSheet.cssText = this.vk) : b.appendChild(document.createTextNode(this.vk));
      a.appendChild(b);
    }
  };
  g.An = function () {
    for (var a in this.ud)
      if (this.ud.hasOwnProperty(a)) {
        var b = this.ud[a];
        b.render() && (this.Da[a] = b);
        delete this.ud[a];
      }
  };
  var fp = function (a) {
    this.gname = a.va;
    this.type = a.type;
    this.uiOptions = a.v;
    this.execute = Lj(a.Ob, a.Ob.execute);
    this.prefillQuery = Lj(a.Ob, a.Ob.oh);
    this.getInputQuery = Lj(a.Ob, a.Ob.tj);
    this.clearAllResults = Lj(a.Ob, a.Ob.Mb);
  };
  var gp = Z,
    hp,
    ip = { cx: null, rg: null, exp: null },
    jp = function (a) {
      if (!hp) {
        hp = new ep(a);
        if (a) {
          if (!ip.rg) {
            var b = a.cse_token;
            b && (ip.rg = b);
          }
          ip.exp || ((b = a.exp) && (ip.exp = b));
          ip.cx || ((a = a.cx) && (ip.cx = a));
        }
        return !0;
      }
      return !1;
    };
  var kp = y.window.setTimeout,
    lp = y.window,
    mp = y.document,
    np = function () {
      return { loaded: !0, complete: !0 }[mp.readyState];
    },
    op = function (a) {
      if ("loading" === mp.readyState)
        if (lp.addEventListener)
          lp.addEventListener(
            "DOMContentLoaded",
            function c() {
              lp.removeEventListener("DOMContentLoaded", c, !1);
              a();
            },
            !1
          );
        else if (lp.attachEvent)
          lp.attachEvent("onreadystatechange", function c() {
            np() && (lp.detachEvent("onreadystatechange", c), a());
          });
        else return !1;
      else a();
      return !0;
    },
    pp = function (a) {
      if (lp.addEventListener)
        lp.addEventListener(
          "load",
          function c() {
            lp.removeEventListener("load", c, !1);
            a();
          },
          !1
        );
      else if (lp.attachEvent)
        lp.attachEvent("onload", function c() {
          lp.detachEvent("onload", c);
          a();
        });
      else return !1;
      return !0;
    },
    qp = function (a, b) {
      var c = function () {
        a() ? b() : kp(c, 10);
      };
      c();
    };
  var rp = function (a, b) {
      for (var c = q(Ia.apply(2, arguments)), d = c.next(); !d.done; d = c.next()) (d = d.value), z(b + "." + d, a[d]);
    },
    sp = function (a, b) {
      for (var c in b) z(a + "." + c, b[c]);
    };
  rp(
    {
      init: jp,
      go: function (a) {
        jp();
        hp.go(a);
      },
      render: function (a, b) {
        jp();
        return hp.render(a, b);
      },
      createControl: function (a) {
        a.cse_token = ip.rg;
        a.experimentNames = ip.exp;
        return new gp(ip.cx || "unknown cx", a);
      },
      getElement: function (a) {
        jp();
        return hp.qj(a);
      },
      getAllElements: function () {
        jp();
        return hp.Gu();
      },
      testAccess: function () {
        Va("cse.element.api.testAccess");
        return { mE: hp, OD: ip };
      },
      installMocks: function (a, b, c) {
        Va("cse.element.api.installMocks");
        a && ((hp = null), (ip.cx = null), (ip.rg = null), (ip.exp = null));
        b && (hp = b);
        c && (gp = c);
      },
    },
    "google.search.cse.element",
    "getAllElements",
    "getElement",
    "go",
    "init",
    "render",
    "createControl"
  );
  sp("google.search.cse.element", {
    ComponentType: { dD: "searchbox+results", cD: "searchbox", YC: "results" },
    ElementType: { iD: "standard", lD: "two-column", eD: "searchbox-only", fD: "searchresults-only" },
  });
  sp("google.search.cse.element.settings", {
    CLASS_PREFIX: "gcse-",
    CSE_PREFIX: "gcse",
    DATA_PREFIX: "data-",
    ElementConfiguration: {},
    forEachOption: Ok,
    getAllComponentElements: Mk,
    getNextDivId: Ek,
    GNAME: "gname",
    HTML_TAG: "div",
    LOGGING_PARAMETERS: Pk,
    OptionConfig: {},
    Option: Nk,
    QUERY_SELECTOR_ALL_SELECTOR: Ik,
    RenderMode: { REPLACE: 0, ZB: 1 },
    TagConfiguration: {},
    TAG_PREFIX: "gcse:",
    WIDGET_TYPE_CONFIGURATIONS: Gk,
  });
  rp(Vk, "google.search.Csedr", "addOverride", "render");
  z("google.search.CustomSearchControl", Z);
  z("google.search.DrawOptions", Mo);
  sp("google.search.ImageSearch", { showPopup: El, hidePopup: Fl });
  sp("google.search.richsnippets", {
    merge: function (a) {
      if (!(a && a instanceof Array)) return a;
      for (var b = {}, c = 0; c < a.length; c++) for (var d in a[c]) b[d] = a[c][d];
      return b;
    },
    hreviewNonEmpty: function (a) {
      if (!(a instanceof Array)) return !(!a.description && !a.summary);
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.description || c.summary) return !0;
      }
      return !1;
    },
  });
  sp("google.search.Search", {
    FILTERED_CSE_RESULTSET: "filtered_cse",
    LARGE_CSE_RESULTSET: "large",
    SMALL_RESULTSET: "small",
  });
  z("google.search.CurrentLocale", "ja");
  z("google.search.cse.element.Element", dp);
  z("google.setOnLoadCallback", function (a, b) {
    np() ? a() : b ? op(a) || qp(np, a) : pp(a) || qp(np, a);
  });
}).call(this);
