if (!window["googleNDT_"]) {
  window["googleNDT_"] = new Date().getTime();
}
(function () {
  window.googleAltLoader = 4;
  var sffeData_ = {
    service_host: "cse.google.com",
    hash: "11116544062751522408",
    packages: "search",
    module: "ads",
    version: "3",
    m: {
      ah: true,
      uatm: 500,
      ecfc2: true,
      llrm: 1000,
      lldl: "bS5zZWFycy5jb20=",
      abf: {
        _fixCtcLinksOnIos: true,
        _googEnableQup: true,
        _useServerProvidedDomain: true,
        _waitOnConsentForFirstPartyCookie: true,
        enableEnhancedTargetingRsonc: true,
        enableNonblockingSasCookie: true,
      },
      mdp: 1800000,
      ssdl: "YXBwc3BvdC5jb20sYmxvZ3Nwb3QuY29tLGJyLmNvbSxjby5jb20sY2xvdWRmcm9udC5uZXQsZXUuY29tLGhvcHRvLm9yZyxpbi5uZXQsdHJhbnNsYXRlLmdvb2csdWsuY29tLHVzLmNvbSx3ZWIuYXBw",
      rsm: 0,
      cdh: "",
    },
  };
  var m;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
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
  }
  var ea = ca(this);
  function fa(a, b) {
    if (b)
      a: {
        var c = ea;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  fa("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.Pd = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.Pd;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  fa("Symbol.iterator", function (a) {
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
      var d = ea[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ha(aa(this));
          },
        });
    }
    return a;
  });
  function ha(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function ia(a) {
    return (a.raw = a);
  }
  function n(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function ka(a) {
    if (!(a instanceof Array)) {
      a = n(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  var la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma;
  function ra(a, b) {
    a.prototype = la(b.prototype);
    a.prototype.constructor = a;
    if (qa) qa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Ff = b.prototype;
  }
  function sa() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  }
  fa("Promise", function (a) {
    function b(g) {
      this.B = 0;
      this.Pa = void 0;
      this.ya = [];
      this.td = !1;
      var h = this.cc();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    function c() {
      this.W = null;
    }
    function d(g) {
      return g instanceof b
        ? g
        : new b(function (h) {
            h(g);
          });
    }
    if (a) return a;
    c.prototype.dd = function (g) {
      if (null == this.W) {
        this.W = [];
        var h = this;
        this.ed(function () {
          h.He();
        });
      }
      this.W.push(g);
    };
    var e = ea.setTimeout;
    c.prototype.ed = function (g) {
      e(g, 0);
    };
    c.prototype.He = function () {
      for (; this.W && this.W.length; ) {
        var g = this.W;
        this.W = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.Zd(l);
          }
        }
      }
      this.W = null;
    };
    c.prototype.Zd = function (g) {
      this.ed(function () {
        throw g;
      });
    };
    b.prototype.cc = function () {
      function g(l) {
        return function (q) {
          k || ((k = !0), l.call(h, q));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.qf), reject: g(this.Jc) };
    };
    b.prototype.qf = function (g) {
      if (g === this) this.Jc(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.zf(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.pf(g) : this.rd(g);
      }
    };
    b.prototype.pf = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.Jc(k);
        return;
      }
      "function" == typeof h ? this.Af(h, g) : this.rd(g);
    };
    b.prototype.Jc = function (g) {
      this.Hd(2, g);
    };
    b.prototype.rd = function (g) {
      this.Hd(1, g);
    };
    b.prototype.Hd = function (g, h) {
      if (0 != this.B) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.B);
      this.B = g;
      this.Pa = h;
      2 === this.B && this.yf();
      this.Ie();
    };
    b.prototype.yf = function () {
      var g = this;
      e(function () {
        if (g.gf()) {
          var h = ea.console;
          "undefined" !== typeof h && h.error(g.Pa);
        }
      }, 1);
    };
    b.prototype.gf = function () {
      if (this.td) return !1;
      var g = ea.CustomEvent,
        h = ea.Event,
        k = ea.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = ea.document.createEvent("CustomEvent")), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.Pa;
      return k(g);
    };
    b.prototype.Ie = function () {
      if (null != this.ya) {
        for (var g = 0; g < this.ya.length; ++g) f.dd(this.ya[g]);
        this.ya = null;
      }
    };
    var f = new c();
    b.prototype.zf = function (g) {
      var h = this.cc();
      g.cb(h.resolve, h.reject);
    };
    b.prototype.Af = function (g, h) {
      var k = this.cc();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    b.prototype.then = function (g, h) {
      function k(p, r) {
        return "function" == typeof p
          ? function (x) {
              try {
                l(p(x));
              } catch (u) {
                q(u);
              }
            }
          : r;
      }
      var l,
        q,
        t = new b(function (p, r) {
          l = p;
          q = r;
        });
      this.cb(k(g, l), k(h, q));
      return t;
    };
    b.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    b.prototype.cb = function (g, h) {
      function k() {
        switch (l.B) {
          case 1:
            g(l.Pa);
            break;
          case 2:
            h(l.Pa);
            break;
          default:
            throw Error("Unexpected state: " + l.B);
        }
      }
      var l = this;
      null == this.ya ? f.dd(k) : this.ya.push(k);
      this.td = !0;
    };
    b.resolve = d;
    b.reject = function (g) {
      return new b(function (h, k) {
        k(g);
      });
    };
    b.race = function (g) {
      return new b(function (h, k) {
        for (var l = n(g), q = l.next(); !q.done; q = l.next()) d(q.value).cb(h, k);
      });
    };
    b.all = function (g) {
      var h = n(g),
        k = h.next();
      return k.done
        ? d([])
        : new b(function (l, q) {
            function t(x) {
              return function (u) {
                p[x] = u;
                r--;
                0 == r && l(p);
              };
            }
            var p = [],
              r = 0;
            do p.push(void 0), r++, d(k.value).cb(t(p.length - 1), q), (k = h.next());
            while (!k.done);
          });
    };
    return b;
  });
  var ta =
    "function" == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  fa("Object.assign", function (a) {
    return a || ta;
  });
  function ua(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
      throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  }
  fa("String.prototype.endsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = ua(this, b, "endsWith");
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  });
  fa("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  fa("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = ua(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  function va(a, b) {
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
  }
  fa("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return va(this, function (b) {
            return b;
          });
        };
  });
  fa("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
          return c;
        };
  });
  fa("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  fa("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  fa("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== ua(this, b, "includes").indexOf(b, c || 0);
        };
  });
  fa("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return va(this, function (b, c) {
            return c;
          });
        };
  });
  fa("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return "number" === typeof b && isNaN(b);
        };
  });
  fa("Math.imul", function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (d * e + (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>> 0)) | 0;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var v = this || self;
  function wa(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function xa(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ya(a, b) {
    a = a.split(".");
    var c = v;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
  }
  function za(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ff = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.fg = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function Aa(a) {
    return a;
  }
  var Ba = null,
    Ca = null,
    Da = null,
    Ea = null,
    Fa = null;
  function Ga() {
    var a = {};
    return window.ad_json ? window.ad_json : "undefined" != typeof ad_json && ad_json ? ad_json : a;
  }
  function Ha(a) {
    Ba || (Ba = Ga().gd || null);
    return (Ba && Ba[a]) || {};
  }
  function Ia() {
    this.data = Ha("ff");
  }
  function w() {
    var a = Ca;
    a || ((a = new Ia()), Ga().gd && (Ca = a));
    return a;
  }
  Ia.prototype.P = function () {
    return !!this.data.dlrcp;
  };
  function Ja() {
    this.data = Ha("cd");
  }
  function Ka() {
    var a = Da;
    a || ((a = new Ja()), Ga().gd && (Da = a));
    return a;
  }
  function Ma(a) {
    return a.data.pid || "";
  }
  Ja.prototype.xa = function () {
    return !!this.data.r;
  };
  function Na() {
    this.data = Ha("pc");
  }
  function Oa() {
    var a = Ea;
    a || ((a = new Na()), Ga().gd && (Ea = a));
    return a;
  }
  function Pa(a) {
    return !!a.data.cgna;
  }
  function Qa() {
    this.data = Ha("dc");
  }
  function Ra() {
    var a = Fa;
    a || ((a = new Qa()), Ga().gd && (Fa = a));
    return a;
  }
  var Sa;
  function Va(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = null;
        c();
      }
    };
  }
  var Wa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Xa = Array.prototype.forEach
      ? function (a, b) {
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a);
        },
    Ya = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        };
  function Za(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function $a(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  var ab;
  function bb() {
    if (void 0 === ab) {
      var a = null,
        b = v.trustedTypes;
      if (b && b.createPolicy)
        try {
          a = b.createPolicy("goog#html", { createHTML: Aa, createScript: Aa, createScriptURL: Aa });
        } catch (c) {
          v.console && v.console.error(c.message);
        }
      ab = a;
    }
    return ab;
  }
  function cb(a) {
    this.Hc = a;
  }
  cb.prototype.toString = function () {
    return this.Hc + "";
  };
  cb.prototype.Ia = !0;
  cb.prototype.Ha = function () {
    return this.Hc.toString();
  };
  function db(a, b) {
    a = eb.exec(hb(a).toString());
    var c = a[3] || "";
    return ib(a[1] + jb("?", a[2] || "", b) + jb("#", c));
  }
  function hb(a) {
    return a instanceof cb && a.constructor === cb ? a.Hc : "type_error:TrustedResourceUrl";
  }
  var eb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    kb = {};
  function ib(a) {
    var b = bb();
    a = b ? b.createScriptURL(a) : a;
    return new cb(a, kb);
  }
  function jb(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  var lb = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    mb = /&/g,
    nb = /</g,
    ob = />/g,
    pb = /"/g,
    qb = /'/g,
    rb = /\x00/g,
    sb = /[\x00&<>"']/;
  function tb(a) {
    this.Gc = a;
  }
  tb.prototype.toString = function () {
    return this.Gc.toString();
  };
  tb.prototype.Ia = !0;
  tb.prototype.Ha = function () {
    return this.Gc.toString();
  };
  function ub(a) {
    return a instanceof tb && a.constructor === tb ? a.Gc : "type_error:SafeUrl";
  }
  var xb = {};
  function yb(a) {
    this.Fc = a;
    this.Ia = !0;
  }
  yb.prototype.Ha = function () {
    return this.Fc;
  };
  yb.prototype.toString = function () {
    return this.Fc.toString();
  };
  function zb(a) {
    return a instanceof yb && a.constructor === yb ? a.Fc : "type_error:SafeStyle";
  }
  function Ab(a) {
    this.Ec = a;
    this.Ia = !0;
  }
  Ab.prototype.toString = function () {
    return this.Ec.toString();
  };
  Ab.prototype.Ha = function () {
    return this.Ec;
  };
  function Bb(a) {
    return a instanceof Ab && a.constructor === Ab ? a.Ec : "type_error:SafeStyleSheet";
  }
  var Cb, Db;
  a: {
    for (var Eb = ["CLOSURE_FLAGS"], Fb = v, Gb = 0; Gb < Eb.length; Gb++)
      if (((Fb = Fb[Eb[Gb]]), null == Fb)) {
        Db = null;
        break a;
      }
    Db = Fb;
  }
  var Hb = Db && Db[610401301];
  Cb = null != Hb ? Hb : !1;
  function Ib() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Jb,
    Kb = v.navigator;
  Jb = Kb ? Kb.userAgentData || null : null;
  function Lb(a) {
    return Cb
      ? Jb
        ? Jb.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function y(a) {
    return -1 != Ib().indexOf(a);
  }
  function Mb() {
    return Cb ? !!Jb && 0 < Jb.brands.length : !1;
  }
  function Nb() {
    return Mb() ? Lb("Chromium") : ((y("Chrome") || y("CriOS")) && !(Mb() ? 0 : y("Edge"))) || y("Silk");
  }
  var Ob = {};
  function Pb(a) {
    this.Dc = a;
    this.Ia = !0;
  }
  Pb.prototype.Ha = function () {
    return this.Dc.toString();
  };
  Pb.prototype.toString = function () {
    return this.Dc.toString();
  };
  function Qb(a) {
    return a instanceof Pb && a.constructor === Pb ? a.Dc : "type_error:SafeHtml";
  }
  function Rb(a) {
    a instanceof Pb ||
      ((a = "object" == typeof a && a.Ia ? a.Ha() : String(a)),
      sb.test(a) &&
        (-1 != a.indexOf("&") && (a = a.replace(mb, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(nb, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(ob, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(pb, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(qb, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(rb, "&#0;"))),
      (a = Sb(a)));
    return a;
  }
  function Sb(a) {
    var b = bb();
    a = b ? b.createHTML(a) : a;
    return new Pb(a, Ob);
  }
  var Tb = new Pb((v.trustedTypes && v.trustedTypes.emptyHTML) || "", Ob);
  var Ub = (function (a) {
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
    a.innerHTML = Qb(Tb);
    return !b.parentElement;
  });
  function Vb(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  }
  function Wb(a) {
    return function () {
      a.onload = a.onerror = null;
    };
  }
  function Xb(a) {
    var b = new Image();
    b.onload = b.onerror = Wb(b);
    b.src = a;
  }
  function Yb() {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    );
  }
  function Zb(a) {
    if (null != a) return a;
  }
  function bc() {
    return "object" === typeof sffeData_ ? sffeData_ : {};
  }
  function cc(a, b) {
    b = b || bc();
    return Zb(b[a]);
  }
  function dc(a) {
    var b = ec();
    b = b || bc();
    a = b[a];
    return null != a ? a : void 0;
  }
  function fc(a, b) {
    b = b || bc();
    return !!b[a];
  }
  function ec() {
    return bc().m || {};
  }
  function z(a) {
    return fc(a, ec().abf);
  }
  var gc = window.navigator ? window.navigator.userAgent : "";
  function hc() {
    var a = ic(jc);
    return -1 !== a ? 67 < a : !(0 != gc.indexOf("Opera") && (-1 != gc.indexOf("MSIE") || -1 != gc.indexOf("Trident")));
  }
  var jc = /Firefox\/(\d+)\./,
    kc = /Version\/(\d+)\..*Safari/,
    lc = /Chrome\/(\d+)\./,
    mc = /(?:iPhone|iPod|iPad).*AppleWebKit\/(\d+)(?!.*Version)/;
  function ic(a) {
    a = (a = a.exec(gc)) ? a[1] : "";
    return 0 < a.length && (a = parseInt(a, 10)) ? a : -1;
  }
  function nc() {
    return /Chrome|CriOS/i.test(gc);
  }
  function oc() {
    var a = gc.toLowerCase();
    return -1 != a.indexOf("series60") || -1 != a.indexOf("series 60");
  }
  var pc = null;
  function qc() {
    pc || (pc = rc());
    return pc;
  }
  function rc() {
    function a(c, d, e, f, g) {
      f = fc("ah", ec()) ? f : g;
      if ("" !== (cc("cdh", ec()) || "")) return f + (cc("cdh", ec()) || "");
      if (z("_switchGwsRequestToUseAdsenseDomain")) return f + e;
      e = z("_switchGwsRequestToUseCookielessDomain");
      g = nc() && z("_switchGwsRequestToUseCookielessDomainChrome");
      return z("_enableMcmExperiment") || e || g ? f + d : f + c;
    }
    var b = Zb(v.gwsBase_);
    return b || (b = cc("gws_host"))
      ? b
      : (b = cc("service_host"))
      ? a(b, "afs.googlesyndication.com", "www.adsensecustomsearchads.com", "https://", "//")
      : a("//www.google.com", "//afs.googlesyndication.com", "www.adsensecustomsearchads.com", "https:", "");
  }
  function sc(a) {
    this.M = [];
    this.jc = [];
    a = a.split("#");
    this.od = a[0];
    this.ic = a[1] || "";
    this.xb = 7950;
  }
  function A(a, b, c, d) {
    (c || 0 === c || !1 === c) && (d ? a.M : a.jc).push([encodeURIComponent(b), encodeURIComponent("" + c)]);
  }
  function tc(a) {
    for (var b = a.od, c = -1 !== a.od.indexOf("?"), d = 0; d < a.jc.length; d++) {
      var e = (c ? "&" : "?") + a.jc[d].join("=");
      e.length + b.length <= a.xb && ((b += e), (c = !0));
    }
    for (e = d = 0; e < a.M.length; e++) d += a.M[e][0].length;
    d = a.xb - b.length - d - 2 * a.M.length;
    var f = Math.floor(d / a.M.length);
    if (1 <= f)
      for (e = 0; e < a.M.length; e++) {
        var g = a.M[e][1];
        f = g.length > f ? g.substring(0, f) : g;
        b += (c ? "&" : "?") + a.M[e][0] + "=" + f;
        d -= f.length;
        f = Math.floor(d / (a.M.length - e - 1));
        c = !0;
      }
    else
      for (d = 0; d < a.M.length; d++)
        a.M[d][0].length + 3 + b.length <= a.xb && ((b += (c ? "&" : "?") + a.M[d].join("=")), (c = !0));
    b = b.substring(0, a.xb);
    b = b.replace(/%\w?$/, "");
    0 < a.ic.length && (b += "#" + a.ic);
    return b;
  }
  var uc = 0.01 > Math.random(),
    vc = null;
  function wc(a) {
    this.Ne = Yb;
    this.ia = Xb;
    this.Ic = Ka().data.qi || "";
    this.Gb = "";
    this.client = a || "unknown";
  }
  function xc() {
    vc || (vc = new wc(null));
    return vc;
  }
  function yc(a) {
    var b = z("useCookielessHostForPingback");
    b = ((void 0 === b ? 0 : b) ? "https://afs.googlesyndication.com" : qc()) + "/afs/gen_204";
    b = new sc(b);
    var c = a.client;
    "unknown" === c && Ma(Ka()) && (c = Ma(Ka()));
    A(b, "client", c);
    A(b, "output", "uds_ads_only");
    A(b, "zx", a.Ne());
    a.Ic && A(b, "aqid", a.Ic);
    a.Gb && A(b, "psid", a.Gb);
    return b;
  }
  function zc(a, b, c) {
    var d = yc(a);
    A(d, "pbt", b);
    A(d, "adbx", c.left);
    A(d, "adby", c.top);
    A(d, "adbh", c.height);
    A(d, "adbw", c.width);
    A(d, "adbah", c.Wa);
    A(d, "adbn", c.he);
    A(d, "eawp", c.Ee);
    A(d, "errv", c.re);
    A(d, "csala", c.bf);
    A(d, "lle", c.Mf ? 1 : 0);
    A(d, "ifv", c.Ve ? 1 : 0);
    A(d, "usr", c.Kf ? 1 : 0);
    A(d, "hpt", c.Oe ? 1 : 0);
    a.ia(tc(d));
  }
  function Ac(a, b, c) {
    var d = yc(a);
    A(d, "pbt", "tp");
    A(d, "errm", b);
    A(d, "emsg", c, !0);
    a.ia(tc(d));
  }
  function Bc(a, b) {
    var c = yc(a);
    A(c, "pbt", b);
    a.ia(tc(c));
  }
  var Cc = {};
  function Dc() {
    var a = (578165713).toString();
    this.af = "ads." + Ec;
    this.se = a;
    this.vd = "google.ads.search.Ads: ";
    this.Me = xc();
  }
  Dc.prototype.log = function (a, b) {
    if (!0 === window.IS_GOOGLE_AFS_IFRAME_ && window.parent == window) return !1;
    a = xa(a) ? a.message : a;
    var c = a + b;
    if (!Cc[c]) {
      Cc[c] = !0;
      c = this.Me;
      var d = this.af,
        e = this.se,
        f = yc(c);
      A(f, "pbt", "er");
      A(f, "errt", d);
      A(f, "errv", e);
      A(f, "errm", b);
      A(f, "emsg", a, !0);
      c.ia(tc(f));
      return !0;
    }
    return !1;
  };
  function B(a, b) {
    return function () {
      var c = Array.prototype.slice.call(arguments, 0) || [];
      try {
        return a.apply(this, c);
      } catch (e) {
        "string" === typeof e && (e = { message: e });
        c = e.message;
        var d = -1 == c.indexOf(C.vd);
        d && C.log(e, b);
        throw d ? C.vd + c : c;
      }
    };
  }
  function E(a) {
    return "google.ads.search.Ads: " + a;
  }
  function F(a, b) {
    return B(a, b);
  }
  var Fc = cc("packages"),
    Ec = "unknown";
  null != Fc && (Ec = Fc);
  var C = new Dc();
  var Gc;
  a: {
    var Hc = window.parent;
    try {
      Gc = Hc.postMessage ? Hc : Hc.document.postMessage ? Hc.document : null;
      break a;
    } catch (a) {}
    Gc = null;
  }
  var Ic = Gc,
    Jc = {},
    Kc = F(function () {
      for (var a = n($a(Jc)), b = a.next(); !b.done; b = a.next())
        (b = b.value), Jc.hasOwnProperty(b) && (Jc[b].jb() || delete Jc[b]);
    }, "fsCDI"),
    Lc = !1,
    Nc = F(function () {
      Lc || ((Lc = !0), window.setInterval(Kc, 500), window.addEventListener("message", Mc));
    }, "fsIL");
  function Oc(a, b) {
    this.Nc = a;
    this.B = {};
    this.Va = b;
    Jc[this.Nc] = this;
    Nc();
  }
  function Pc(a, b) {
    return a.B.hasOwnProperty(b) ? a.B[b].value : null;
  }
  function Qc(a, b) {
    return a.B.hasOwnProperty(b) ? a.B[b].value : null;
  }
  function Rc(a, b, c, d) {
    a.B.hasOwnProperty(b) || (a.B[b] = c());
    c = a.B[b];
    c.Rb = d || function () {};
    null != c.value && c.Rb(a, a.Nc, b, c.value);
  }
  Oc.prototype.jb = function () {
    return !!(this.Va && this.Va.parentNode && this.Va.contentWindow);
  };
  var Yc = {};
  function Zc() {
    this.value = null;
    this.Rb = function () {};
    this.qa = !1;
  }
  m = Zc.prototype;
  m.sa = function () {};
  m.Sa = function () {};
  m.Na = function () {};
  m.Ga = function () {};
  m.kc = function (a) {
    return this.value == a;
  };
  function $c() {
    Zc.call(this);
  }
  ra($c, Zc);
  $c.prototype.sa = function (a, b) {
    return !!b;
  };
  $c.prototype.Sa = function () {
    return this.value ? "t" : "f";
  };
  $c.prototype.Na = function (a) {
    return "t" == a;
  };
  $c.prototype.Ga = function () {
    return 0;
  };
  $c.j = function () {
    return new $c();
  };
  function ad() {
    Zc.call(this);
  }
  ra(ad, Zc);
  ad.prototype.sa = function (a, b) {
    var c = parseInt(b, 10);
    a = a + " = " + b;
    if (isNaN(c)) return C.log(a, "sIGVVnn"), null;
    9007199254740991 < c && (C.log(a, "sIGVVtl"), (c = 9007199254740991));
    0 > c && (C.log(a, "sIGVVts"), (c = 0));
    return c;
  };
  ad.prototype.Sa = function () {
    return this.value + "";
  };
  ad.prototype.Na = function (a) {
    return parseInt(a, 10);
  };
  ad.prototype.Ga = function () {
    return 1;
  };
  ad.j = function () {
    return new ad();
  };
  function bd() {
    Zc.call(this);
  }
  ra(bd, Zc);
  bd.prototype.sa = function (a, b) {
    return b ? b.toString() : "";
  };
  bd.prototype.Sa = function () {
    return this.value ? encodeURIComponent(this.value) : "";
  };
  bd.prototype.Na = function (a) {
    return Vb(a);
  };
  bd.prototype.Ga = function () {
    return 2;
  };
  bd.j = function () {
    return new bd();
  };
  function cd() {
    Zc.call(this);
  }
  ra(cd, Zc);
  m = cd.prototype;
  m.sa = function (a, b) {
    return b ? b : null;
  };
  m.Sa = function () {
    return this.value ? encodeURIComponent(JSON.stringify(this.value)) : "";
  };
  m.Na = function (a) {
    return a ? JSON.parse(Vb(a)) : null;
  };
  m.Ga = function () {
    return 3;
  };
  m.kc = function (a) {
    var b = JSON.stringify(this.value);
    a = JSON.stringify(a);
    return b === a;
  };
  cd.j = function () {
    return new cd();
  };
  var dd = {},
    ed = ((dd[0] = $c.j), (dd[1] = ad.j), (dd[2] = bd.j), (dd[3] = cd.j), dd);
  function fd(a, b, c) {
    Yc.hasOwnProperty(a) || (Yc[a] = c());
    c = Yc[a];
    a = c.sa(a, b);
    null == a || c.kc(a) || ((c.value = a), (c.qa = !0));
  }
  function Mc(a) {
    if ((a = a || window.event))
      for (var b = n($a(Jc)), c = b.next(); !c.done; c = b.next())
        if (((c = Jc[c.value]), c.jb() && a.source == c.Va.contentWindow)) {
          if ((a = a.data) && a.split && ((a = a.split(",")), "FSXDC" == a[0])) {
            for (b = 1; b < a.length; b++) {
              var d = a[b].split(":"),
                e = Vb(d[0]),
                f = ed[parseInt(d[1], 10)];
              c.B.hasOwnProperty(e) || (c.B[e] = f());
              d = c.B[e].Na(d[2]);
              c.B.hasOwnProperty(e) || (c.B[e] = f());
              f = c.B[e];
              d = f.sa(e, d);
              null != d && f.value != d && ((f.value = d), (f.qa = !0));
            }
            a = n($a(c.B));
            for (b = a.next(); !b.done; b = a.next())
              (b = b.value), (f = c.B[b]), f.qa && ((f.qa = !1), f.Rb(c, c.Nc, b, f.value));
          }
          break;
        }
  }
  Oc.prototype.jb = B(Oc.prototype.jb, "fsiHVI");
  var gd = F(function () {
    if (Ic) {
      for (var a = [], b = n($a(Yc)), c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = Yc[c];
        if (d.qa) {
          var e = d.Sa();
          a.push([encodeURIComponent(c), d.Ga(), e].join(":"));
          d.qa = !1;
        }
      }
      0 != a.length && Ic.postMessage(["FSXDC"].concat(a).join(","), "*");
    }
  }, "fsSC");
  function hd(a, b) {
    fd(a, b, ad.j);
  }
  function id(a, b) {
    fd(a, b, $c.j);
  }
  function jd(a, b) {
    for (var c = n(Object.keys(b)), d = c.next(); !d.done; d = c.next())
      (d = d.value), (a[d] = {}), Object.assign(a[d], b[d]);
  }
  function kd(a, b) {
    b = n(b);
    for (var c = b.next(); !c.done; c = b.next()) (c = c.value), a.hasOwnProperty(c), (a[c].xc = !0);
  }
  function ld() {
    var a = md;
    this.Ma = 8;
    this.La = Math.floor(a);
  }
  ld.prototype.H = function () {
    return this.Ma + "px - " + this.La + "px";
  };
  ld.prototype.D = function (a) {
    a = parseInt(a, 10);
    return isNaN(a) ? null : Math.max(this.Ma, Math.min(this.La, a));
  };
  ld.prototype.G = function (a) {
    return this.D(a);
  };
  function nd(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  m = nd.prototype;
  m.clone = function () {
    return new nd(this.x, this.y);
  };
  m.kc = function (a) {
    return a instanceof nd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  m.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  m.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  m.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof nd
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
    return this;
  };
  m.scale = function (a, b) {
    this.x *= a;
    this.y *= "number" === typeof b ? b : a;
    return this;
  };
  function od(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  m = od.prototype;
  m.clone = function () {
    return new od(this.top, this.right, this.bottom, this.left);
  };
  m.contains = function (a) {
    return this && a
      ? a instanceof od
        ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
        : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
      : !1;
  };
  m.expand = function (a, b, c, d) {
    xa(a)
      ? ((this.top -= a.top), (this.right += a.right), (this.bottom += a.bottom), (this.left -= a.left))
      : ((this.top -= a), (this.right += Number(b)), (this.bottom += Number(c)), (this.left -= Number(d)));
    return this;
  };
  m.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  m.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  m.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof nd
      ? ((this.left += a.x), (this.right += a.x), (this.top += a.y), (this.bottom += a.y))
      : ((this.left += a), (this.right += a), "number" === typeof b && ((this.top += b), (this.bottom += b)));
    return this;
  };
  m.scale = function (a, b) {
    b = "number" === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  function pd(a) {
    pd[" "](a);
    return a;
  }
  pd[" "] = function () {};
  var qd = Mb() ? !1 : y("Opera"),
    rd = Mb() ? !1 : y("Trident") || y("MSIE"),
    sd = y("Edge"),
    td =
      y("Gecko") &&
      !(-1 != Ib().toLowerCase().indexOf("webkit") && !y("Edge")) &&
      !(y("Trident") || y("MSIE")) &&
      !y("Edge"),
    ud = -1 != Ib().toLowerCase().indexOf("webkit") && !y("Edge");
  function vd() {
    var a = v.document;
    return a ? a.documentMode : void 0;
  }
  var wd;
  a: {
    var xd = "",
      yd = (function () {
        var a = Ib();
        if (td) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (sd) return /Edge\/([\d\.]+)/.exec(a);
        if (rd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (ud) return /WebKit\/(\S+)/.exec(a);
        if (qd) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    yd && (xd = yd ? yd[1] : "");
    if (rd) {
      var zd = vd();
      if (null != zd && zd > parseFloat(xd)) {
        wd = String(zd);
        break a;
      }
    }
    wd = xd;
  }
  var Ad = wd,
    Bd;
  if (v.document && rd) {
    var Cd = vd();
    Bd = Cd ? Cd : parseInt(Ad, 10) || void 0;
  } else Bd = void 0;
  var Dd = Bd;
  function Ed(a, b) {
    this.width = a;
    this.height = b;
  }
  m = Ed.prototype;
  m.clone = function () {
    return new Ed(this.width, this.height);
  };
  m.aspectRatio = function () {
    return this.width / this.height;
  };
  m.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  m.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  m.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  m.scale = function (a, b) {
    this.width *= a;
    this.height *= "number" === typeof b ? b : a;
    return this;
  };
  function Fd(a) {
    return a ? new Gd(Hd(a)) : Sa || (Sa = new Gd());
  }
  function Id(a, b, c) {
    var d = document;
    c = c || d;
    var e = a && "*" != a ? String(a).toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (e || b)) return c.querySelectorAll(e + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
      a = c.getElementsByClassName(b);
      if (e) {
        c = {};
        for (var f = (d = 0), g; (g = a[f]); f++) e == g.nodeName && (c[d++] = g);
        c.length = d;
        return c;
      }
      return a;
    }
    a = c.getElementsByTagName(e || "*");
    if (b) {
      c = {};
      for (f = d = 0; (g = a[f]); f++) {
        e = g.className;
        var h;
        if ((h = "function" == typeof e.split)) h = 0 <= Wa(e.split(/\s+/), b);
        h && (c[d++] = g);
      }
      c.length = d;
      return c;
    }
    return a;
  }
  function Jd(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Ed(a.clientWidth, a.clientHeight);
  }
  function Kd(a) {
    return a.scrollingElement
      ? a.scrollingElement
      : ud || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
  }
  function Ld(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!wa(f) || (xa(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (xa(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Xa(g ? Za(f) : f, d);
      }
    }
  }
  function Md(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function Hd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Gd(a) {
    this.S = a || v.document || document;
  }
  m = Gd.prototype;
  m.getElementsByTagName = function (a, b) {
    return (b || this.S).getElementsByTagName(String(a));
  };
  m.createElement = function (a) {
    return Md(this.S, a);
  };
  m.createTextNode = function (a) {
    return this.S.createTextNode(String(a));
  };
  m.appendChild = function (a, b) {
    a.appendChild(b);
  };
  m.append = function (a, b) {
    Ld(Hd(a), a, arguments);
  };
  m.canHaveChildren = function (a) {
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
  m.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  m.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function Nd(a, b) {
    a: {
      var c = Hd(a);
      if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
        c = c[b] || c.getPropertyValue(b) || "";
        break a;
      }
      c = "";
    }
    return c || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
  }
  function Od(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  }
  function Pd(a) {
    if (rd && !(8 <= Number(Dd))) return a.offsetParent;
    var b = Hd(a),
      c = Nd(a, "position"),
      d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (11 == a.nodeType && a.host && (a = a.host),
        (c = Nd(a, "position")),
        (d = d && "static" == c && a != b.documentElement && a != b.body),
        !d &&
          (a.scrollWidth > a.clientWidth ||
            a.scrollHeight > a.clientHeight ||
            "fixed" == c ||
            "absolute" == c ||
            "relative" == c))
      )
        return a;
    return null;
  }
  function Qd(a) {
    var b = Hd(a),
      c = new nd(0, 0);
    var d = b ? Hd(b) : document;
    d = !rd || 9 <= Number(Dd) || "CSS1Compat" == Fd(d).S.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = Od(a);
    d = Fd(b).S;
    b = Kd(d);
    d = d.parentWindow || d.defaultView;
    b =
      rd && d.pageYOffset != b.scrollTop
        ? new nd(b.scrollLeft, b.scrollTop)
        : new nd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }
  function Rd(a) {
    if (1 == a.nodeType) return (a = Od(a)), new nd(a.left, a.top);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new nd(a.clientX, a.clientY);
  }
  function Sd(a) {
    var b = Td;
    if ("none" != Nd(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }
  function Td(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = ud && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Od(a)), new Ed(a.right - a.left, a.bottom - a.top))
      : new Ed(b, c);
  }
  function Ud(a) {
    var b = a.indexOf("#");
    return 0 > b ? a : a.slice(0, b);
  }
  var Vd = /#|$/;
  function Wd(a, b) {
    var c = a.search(Vd);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f) if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)) break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return Vb(a.slice(d, -1 !== e ? e : 0));
  }
  var Xd = {},
    Yd = ((Xd.ads = 0), (Xd.plas = 1), (Xd.relatedsearch = 3), Xd),
    Zd = !window.IS_GOOGLE_AFS_IFRAME_ || Oa().data.cglfa ? 8 : 6,
    md = !window.IS_GOOGLE_AFS_IFRAME_ || Oa().data.cglfa ? 24 : 16,
    $d = new ld(),
    ae = { content: "c", query: "q", domain: "d" };
  function be(a, b, c) {
    if (!b.g) return c;
    c = b.g.D(c);
    if (null == c && !b.C) throw E(a + " has an invalid value. Valid input values: [" + b.g.H() + "].");
    return c;
  }
  function ce(a) {
    return /^(?:(?:slave-\d+(?:-(?:a|b))?)|(?:master-(?:a|b)))-\d+$/.test(a);
  }
  function de(a) {
    return (a = a.match(/slave-(\d+)-/)) ? parseInt(a[1], 10) + 1 : 1;
  }
  function ee(a, b, c) {
    for (var d = [], e, f = 0; (e = c[f]); f++) (e = new sc(e)), A(e, a, b), d.push(tc(e));
    return d;
  }
  function fe(a, b) {
    a = Ud(a);
    if ((a = a.match(new RegExp("[?&]" + b + "=([^&]*)"))) && a[1])
      try {
        return Vb(a[1]);
      } catch (c) {}
    return null;
  }
  function ge(a) {
    a = Ud(a);
    var b = {};
    a.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function (c, d, e) {
      try {
        b[Vb(d)] = Vb(e);
      } catch (f) {}
    });
    return b;
  }
  function he() {
    var a = void 0 === a ? window.location.href : a;
    var b = z("_enableLazyLoading"),
      c = cc("lldl", ec());
    return b && c && ((c = new RegExp("(" + atob(c).replace(/,/g, ")|(") + ")")), a.match(c))
      ? !1
      : !!("IntersectionObserver" in window && b);
  }
  function ie(a, b, c) {
    b = void 0 === b ? 0 : b;
    c = void 0 === c ? null : c;
    var d = new od(0, Infinity, Infinity, 0);
    for (var e = Fd(a), f = e.S.body, g = e.S.documentElement, h = Kd(e.S), k = a; (k = Pd(k)); )
      if (
        !((rd && 0 == k.clientWidth) || (ud && 0 == k.clientHeight && k == f)) &&
        k != f &&
        k != g &&
        "visible" != Nd(k, "overflow")
      ) {
        var l = Qd(k),
          q = new nd(k.clientLeft, k.clientTop);
        l.x += q.x;
        l.y += q.y;
        d.top = Math.max(d.top, l.y);
        d.right = Math.min(d.right, l.x + k.clientWidth);
        d.bottom = Math.min(d.bottom, l.y + k.clientHeight);
        d.left = Math.max(d.left, l.x);
      }
    f = h.scrollLeft;
    h = h.scrollTop;
    d.left = Math.max(d.left, f);
    d.top = Math.max(d.top, h);
    e = e.S;
    e = Jd(e.parentWindow || e.defaultView || window);
    d.right = Math.min(d.right, f + e.width);
    d.bottom = Math.min(d.bottom, h + e.height);
    d = 0 <= d.top && 0 <= d.left && d.bottom > d.top && d.right > d.left ? d : null;
    e = new nd(a.offsetLeft, a.offsetTop);
    a = Sd(a);
    e = new od(e.y, e.x + a.width, e.y + a.height, e.x);
    null != c && (b = -Math.abs(a.height * c));
    return !!(d && d.left <= e.right + b && e.left <= d.right + b && d.top <= e.bottom + b && e.top <= d.bottom + b);
  }
  function je() {
    return null !== document.getElementById("ssrab");
  }
  var ke = {};
  function le(a) {
    var b = { names: [], frames: [] },
      c;
    for (c in ke) {
      var d = me(c, a);
      null == d ? delete ke[c] : (b.names.push(c), b.frames.push(d));
    }
    return b;
  }
  le = B(le, "cFr");
  function me(a, b) {
    if (ne) return ne(a, b);
    if (a == b.name) return window;
    try {
      var c = window.parent.frames[a + "|" + window.name];
      if (c) return c;
    } catch (d) {}
    try {
      return window.parent.frames[a] || null;
    } catch (d) {}
    return null;
  }
  me = B(me, "gFBN");
  var ne = null,
    oe = le,
    pe = me;
  function qe(a, b, c) {
    c = void 0 === c ? [] : c;
    this.frameWidth = a;
    this.frameHeight = b;
    this.Wa = c;
  }
  function re(a, b, c) {
    var d = !1;
    a.addEventListener(b, c);
    a.addEventListener(b, function () {
      d || (a.removeEventListener(b, c), (d = !0));
    });
  }
  function se() {
    var a, b;
    return {
      promise: new Promise(function (c, d) {
        a = c;
        b = d;
      }),
      resolve: a,
      reject: b,
    };
  }
  function te(a, b) {
    var c = se();
    a.setTimeout(function () {
      c.resolve(b);
    }, 0);
    return c.promise;
  }
  function ue(a, b) {
    var c = se();
    window.setTimeout(function () {
      c.resolve(b);
    }, a);
    return c.promise;
  }
  function ve(a) {
    var b = [],
      c = 0,
      d = a.length;
    return new Promise(function (e, f) {
      if (d)
        for (var g = { ua: 0 }; g.ua < d; g = { ua: g.ua }, g.ua++)
          Promise.resolve(a[g.ua])
            .then(
              (function (h) {
                return function (k) {
                  b[h.ua] = k;
                  c += 1;
                  c === d && e(b);
                };
              })(g)
            )
            .catch(function (h) {
              f(h);
            });
      else e(b);
    });
  }
  var we = null;
  function xe() {
    if (null != we) return we;
    var a = document.createElement("div");
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.border = "1px solid black";
    a.style.padding = "1px";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    var b = a.offsetWidth;
    document.body.removeChild(a);
    return (we = 5 == b);
  }
  function ye(a) {
    return parseFloat(a.replace("px", "")) || 0;
  }
  function ze(a, b) {
    var c = b ? a.offsetHeight : a.offsetWidth;
    b = b ? ["Top", "Bottom"] : ["Right", "Left"];
    var d = !1;
    var e = xe() ? ["margin"] : ["border", "margin", "padding"];
    var f = e.length,
      g = b.length,
      h = document.defaultView;
    if (h && h.getComputedStyle && (h = h.getComputedStyle(a))) {
      d = !0;
      for (var k = 0; k < f; k++)
        for (var l = 0; l < g; l++) c += ye(h.getPropertyValue([e[k], b[l].toLowerCase()].join("-")));
    }
    if (!d && (a = a.currentStyle)) {
      if (!xe()) for (d = 0; d < g; d++) c += ye(a[["border", b[d], "Width"].join("")]);
      for (d = 0; d < f; d++) if ("border" != e[d]) for (h = 0; h < g; h++) c += ye(a[[e[d], b[h]].join("")]);
    }
    return c;
  }
  function Ae(a) {
    if (Be) return Be(a);
    var b = oe(a);
    if (w().data.eiell) Ee(b);
    else
      return Fe(b.frames).then(function () {
        Ee(b);
      });
  }
  Ae = B(Ae, "sPH");
  var Be = null;
  function Ge(a) {
    try {
      return ze(a.document.documentElement, !0);
    } catch (b) {
      return null;
    }
  }
  Ge = B(Ge, "gBH");
  function He(a) {
    try {
      var b = a.document.getElementById("adBlock");
      return ze(b, !1);
    } catch (c) {
      return null;
    }
  }
  He = B(He, "gBW");
  function Ie(a) {
    var b = [];
    a = n(a.document.getElementsByTagName("img"));
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = b,
        e = d.push;
      c = c.value;
      var f = se();
      c.complete ? f.resolve() : (re(c, "load", f.resolve), re(c, "error", f.resolve));
      e.call(d, f.promise);
    }
    return ve(b);
  }
  Ie = B(Ie, "gFH_wfip");
  function Ee(a) {
    for (var b = 0; b < a.frames.length; b++) {
      var c = a.frames[b];
      if (z("_optimizeFrameMeasurement")) {
        var d = c.document.documentElement;
        d = new Ed(d.offsetWidth, d.offsetHeight);
        c = Je(c);
        c = new qe(d.width, d.height, c);
      } else {
        d = Ge(c);
        var e = He(c);
        Ke(c, d, e) ? (c = new qe(1, 1)) : ((c = Je(c)), (c = new qe(e, d, c)));
      }
      d = {};
      c = ((d.fw = c.frameWidth), (d.fh = c.frameHeight), (d.ah = c.Wa), d);
      fd(a.names[b] + ".fs", c, cd.j);
    }
    gd();
  }
  function Fe(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(Ie(a[c]));
    return Promise.race([Promise.all(b), ue(500, "timedOutWaitingForImages")]);
  }
  Fe = B(Fe, "gFH");
  var Je = F(function (a) {
    var b = [];
    a = n(
      z("_enableUnifiedMudskipperIframe")
        ? a.document.querySelectorAll(".clicktrackedAd_js")
        : a.document.querySelectorAll(".si101")
    );
    for (var c = a.next(); !c.done; c = a.next())
      (c = c.value),
        (c = z("_optimizeFrameMeasurement") ? new Ed(c.offsetWidth, c.offsetHeight).height : ze(c, !0)),
        b.push(c);
    return b;
  }, "gAHIF");
  function Ke(a, b, c) {
    return (("number" == typeof b && 16 > b) || ("number" == typeof c && 16 > c)) &&
      (a = a.document.getElementById("adBlock")) &&
      "" != a.innerHTML
      ? !0
      : !1;
  }
  Ke = B(Ke, "iCSI");
  var Le = Ae; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Me = "function" === typeof URL;
  function Ne(a) {
    if (a instanceof tb) a = ub(a);
    else {
      b: if (Me) {
        try {
          var b = new URL(a);
        } catch (c) {
          b = "https:";
          break b;
        }
        b = b.protocol;
      } else
        c: {
          b = document.createElement("a");
          try {
            b.href = a;
          } catch (c) {
            b = void 0;
            break c;
          }
          b = b.protocol;
          b = ":" === b || "" === b ? "https:" : b;
        }
      a = "javascript:" !== b ? a : void 0;
    }
    return a;
  }
  function Oe(a) {
    var b = sa.apply(1, arguments);
    if (0 === b.length) return ib(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return ib(c);
  }
  function Pe(a, b) {
    b = b[a];
    b || (C.log("frameOptions is undefined for " + a, "fAU"), (b = {}));
    return b;
  }
  Pe = B(Pe, "gFO");
  function Qe(a) {
    return function (b, c) {
      return "undefined" == typeof a[b] ? c || null : a[b];
    };
  }
  function Re(a) {
    return function (b, c) {
      if (a.hasOwnProperty(b)) {
        b = a[b].split(",");
        for (var d = 0; d < b.length; d++) if (b[d] == c) return !0;
        return !1;
      }
      return !0;
    };
  }
  function Se(a) {
    return (a = a.width) && "auto" != a ? a : "100%";
  }
  function Te(a) {
    var b = { ta: !1, Yc: null, hd: null };
    a.verticalSpacing && ((a = a.verticalSpacing / 2), (b.ta = !0), (b.Yc = Math.floor(a)), (b.hd = Math.ceil(a)));
    return b;
  }
  function Ue(a) {
    if (a.fontSizeTitle) return a.fontSizeTitle;
    a = Ra();
    return a.data.hm || a.data.t ? 18 : null;
  }
  var Ve = Pe;
  !y("Android") || Nb();
  Nb();
  y("Safari") &&
    (Nb() ||
      (Mb() ? 0 : y("Coast")) ||
      (Mb() ? 0 : y("Opera")) ||
      (Mb() ? 0 : y("Edge")) ||
      (Mb() ? Lb("Microsoft Edge") : y("Edg/")) ||
      (Mb() && Lb("Opera")));
  Math.max.apply(
    Math,
    ka(
      Object.values({
        Vf: 1,
        Tf: 2,
        Sf: 4,
        Yf: 8,
        Xf: 16,
        Wf: 32,
        Nf: 64,
        ag: 128,
        Rf: 256,
        Qf: 512,
        Uf: 1024,
        Of: 2048,
        Zf: 4096,
        Pf: 8192,
      })
    )
  );
  Object.freeze({});
  var We = /<[^>]*>|&[^;]+;/g;
  function Xe(a, b) {
    return b ? a.replace(We, "") : a;
  }
  var Ye = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"
    ),
    Ze = RegExp(
      "^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"
    ),
    $e = /^http:\/\/.*/,
    af = /\s+/,
    bf = /[\d\u06f0-\u06f9]/;
  var cf = {},
    df = {},
    ef = {},
    ff = {},
    gf = {};
  function hf() {
    throw Error("Do not instantiate directly");
  }
  hf.prototype.R = null;
  hf.prototype.toString = function () {
    return this.content;
  };
  hf.prototype.Jd = function () {
    if (this.N !== cf) throw Error("Sanitized content was not of kind HTML.");
    return Sb(this.toString());
  };
  function jf() {
    hf.call(this);
  }
  za(jf, hf);
  jf.prototype.N = cf;
  function kf() {
    hf.call(this);
  }
  za(kf, hf);
  kf.prototype.N = df;
  kf.prototype.R = 1;
  function lf() {
    hf.call(this);
  }
  za(lf, hf);
  lf.prototype.N = ef;
  lf.prototype.R = 1;
  function mf() {
    hf.call(this);
  }
  za(mf, hf);
  mf.prototype.N = ff;
  mf.prototype.R = 1;
  function nf() {
    hf.call(this);
  }
  za(nf, hf);
  nf.prototype.N = gf;
  nf.prototype.R = 1;
  function of(a, b) {
    return null != a && a.N === b;
  }
  function pf(a) {
    if (null != a)
      switch (a.R) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  }
  function qf(a) {
    return of(a, cf)
      ? a
      : a instanceof Pb
      ? G(Qb(a).toString())
      : a instanceof Pb
      ? G(Qb(a).toString())
      : G(String(String(a)).replace(rf, sf), pf(a));
  }
  function tf(a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c) {
      return new b(String(c));
    };
  }
  var G = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.R = d);
        return c;
      };
    })(jf),
    uf = tf(mf),
    vf = tf(nf);
  function wf(a) {
    var b = [],
      c;
    for (c in a) b.push(c);
    return b;
  }
  function xf(a) {
    if (null == a) throw Error("unexpected null value");
    return a;
  }
  function H(a, b) {
    return a && b && a.We && b.We
      ? a.N !== b.N
        ? !1
        : a.toString() === b.toString()
      : a instanceof hf && b instanceof hf
      ? a.N != b.N
        ? !1
        : a.toString() == b.toString()
      : a == b;
  }
  function I(a) {
    return a instanceof hf ? !!a.content : !!a;
  }
  function yf(a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c) {
      return (c = String(c)) ? new b(c) : "";
    };
  }
  var zf = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = String(c);
        if (!c) return "";
        c = new b(c);
        void 0 !== d && (c.R = d);
        return c;
      };
    })(jf),
    Af = yf(lf),
    Bf = yf(kf),
    Cf = yf(mf),
    Df = yf(nf);
  function Ef(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  }
  function J(a) {
    if (of(a, cf)) {
      var b = String;
      a = String(a.content).replace(Ff, "").replace(Gf, "&lt;");
      b = b(a).replace(Hf, sf);
    } else b = String(a).replace(rf, sf);
    return b;
  }
  function If(a) {
    of(a, ff) ? (a = a.content) : ((a = String(a)), (a = Jf.test(a) ? a : "zSoyz"));
    return a;
  }
  function Kf(a) {
    of(a, ff) && (a = a.content);
    return (a && !a.startsWith(" ") ? " " : "") + a;
  }
  function Lf(a) {
    of(a, df) || of(a, ef)
      ? (a = Mf(a))
      : a instanceof tb
      ? (a = Mf(ub(a)))
      : a instanceof tb
      ? (a = Mf(ub(a)))
      : a instanceof cb
      ? (a = Mf(hb(a).toString()))
      : a instanceof cb
      ? (a = Mf(hb(a).toString()))
      : ((a = String(a)), (a = Nf.test(a) ? a.replace(Of, Pf) : "about:invalid#zSoyz"));
    return a;
  }
  function Qf(a) {
    of(a, df) || of(a, ef)
      ? (a = Mf(a))
      : a instanceof tb
      ? (a = Mf(ub(a)))
      : a instanceof tb
      ? (a = Mf(ub(a)))
      : a instanceof cb
      ? (a = Mf(hb(a).toString()))
      : a instanceof cb
      ? (a = Mf(hb(a).toString()))
      : ((a = String(a)), (a = Rf.test(a) ? a.replace(Of, Pf) : "about:invalid#zSoyz"));
    return a;
  }
  function K(a) {
    of(a, gf)
      ? (a = Ef(a.content))
      : null == a
      ? (a = "")
      : a instanceof yb
      ? (a = Ef(zb(a)))
      : a instanceof yb
      ? (a = Ef(zb(a)))
      : a instanceof Ab
      ? (a = Ef(Bb(a)))
      : a instanceof Ab
      ? (a = Ef(Bb(a)))
      : ((a = String(a)), (a = Sf.test(a) ? a : "zSoyz"));
    return a;
  }
  var Tf = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
  function sf(a) {
    return Tf[a];
  }
  var Uf = {
    "\x00": "\\0 ",
    "\b": "\\8 ",
    "\t": "\\9 ",
    "\n": "\\a ",
    "\v": "\\b ",
    "\f": "\\c ",
    "\r": "\\d ",
    '"': "\\22 ",
    "&": "\\26 ",
    "'": "\\27 ",
    "(": "\\28 ",
    ")": "\\29 ",
    "*": "\\2a ",
    "/": "\\2f ",
    ":": "\\3a ",
    ";": "\\3b ",
    "<": "\\3c ",
    "=": "\\3d ",
    ">": "\\3e ",
    "@": "\\40 ",
    "\\": "\\5c ",
    "{": "\\7b ",
    "}": "\\7d ",
    "\u0085": "\\85 ",
    "\u00a0": "\\a0 ",
    "\u2028": "\\2028 ",
    "\u2029": "\\2029 ",
  };
  function Vf(a) {
    return Uf[a];
  }
  var Wf = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\v": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD",
  };
  function Pf(a) {
    return Wf[a];
  }
  var rf = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Hf = /[\x00\x22\x27\x3c\x3e]/g,
    Xf = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
    Of =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Sf =
      /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
    Nf = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    Rf = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    Jf =
      /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;
  function Mf(a) {
    return String(a).replace(Of, Pf);
  }
  var Ff = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Gf = /</g; /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  function Yf(a, b) {
    b = b || Fd();
    if (a && a.Kc) b = a.Kc();
    else {
      b = b.createElement("DIV");
      a: if (xa(a)) {
        if (a.Jd && ((a = a.Jd()), a instanceof Pb)) {
          var c = a;
          break a;
        }
        c = Rb("zSoyz");
      } else c = Rb(String(a));
      a = b;
      if (Ub()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Qb(c);
    }
    return 1 == b.childNodes.length && ((a = b.firstChild), 1 == a.nodeType) ? a : b;
  }
  var Zf = {};
  function $f(a) {
    var b = a.xa,
      c = a.Ue,
      d = a.Ye,
      e = a.je,
      f = a.Lf,
      g = a.Xd,
      h = a.we,
      k = a.xe,
      l = a.ue,
      q = a.ve,
      t = a.te,
      p = a.fontFamily,
      r = a.Je,
      x = a.Le,
      u = a.Ke,
      D = a.Gf,
      L = a.Hf,
      da = a.uf,
      Z = a.vf,
      La = a.tf,
      fb = a.wf,
      Ta = a.sf,
      W = a.ef,
      X = a.Qd,
      Sc = a.de,
      $b = a.ee,
      ac = a.ge,
      Tc = a.ce,
      M = a.Wd,
      vb = a.Rd,
      T = a.Sd,
      U = a.Ud,
      ja = a.Td,
      Uc = a.Vd,
      Vc = a.df,
      Wc = a.og,
      Ce = a.pg,
      Qg = a.be,
      wb = a.type,
      Ua = a.ye,
      Xc = a.Qe,
      gb = a.Pe,
      De = a.Te,
      Rg = a.qe,
      zj = a.pe;
    a = a.P;
    var Aj = f.ta ? "padding-top:" + K(f.Yc) + "px; padding-bottom:" + K(f.hd) + "px;" : c || d ? "padding:7px 0;" : "";
    var Bj = u ? K(u) : d ? "15" : "13";
    e =
      "<style>#response_debug_output{max-height:500px; overflow:auto;}body{" +
      (c ? "-webkit-text-size-adjust:100%;" : "") +
      "color:" +
      (h ? K(h) : "#000") +
      "; font-family:" +
      (Wc ? "'" + String(Wc).replace(Xf, Vf) + "'," : "") +
      (p ? K(p) : "arial") +
      ", sans-serif; font-size:" +
      (c || d ? "14" : "12") +
      "px; width:" +
      K(e) +
      "; padding:0px; margin:0px;" +
      (I(q) && (I($b) || I(X)) ? "padding-right:2px;" : "") +
      (De && b ? "direction:rtl;" : "") +
      "}body{-webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color:transparent;}a{-webkit-tap-highlight-color:initial;}.ad{padding:2px 0; margin:0px; word-wrap:break-word;" +
      Aj +
      (g ? "border-bottom:1px solid " + K(g) + ";" : "") +
      "}" +
      (I(Ta) && (!De || (I(wb) && "relatedsearch" == wb))
        ? "." + K("a_") + ":hover{background-color:" + K(Ta) + ";}"
        : "") +
      ".ad.f{" +
      (f.ta ? "padding-top:2px;" : "") +
      "}.ad.fr{" +
      (f.ta ? "padding-top:2px;" : "") +
      "}.ad.l{" +
      (f.ta ? "padding-bottom:2px;" : "") +
      (g ? "border-bottom:0px;" : "") +
      "}.ad.lr{" +
      (f.ta ? "padding-bottom:2px;" : "") +
      "}#adBlock b{" +
      (zj || De ? "" : "font-weight:normal;") +
      "}.ad span{_width:99%;}#adBlock{background:#FFF none repeat scroll 0 0; margin:0; padding:0;" +
      (l ? "background-color:" + K(l) + ";" : "") +
      (I(q) && I(Sc) ? "border-left:1px solid " + K(q) + ";" : "") +
      (I(q) && I($b) ? "border-right:1px solid " + K(q) + ";" : "") +
      (I(q) && I(ac) ? "border-top:1px solid " + K(q) + ";" : "") +
      (I(q) && I(Tc) ? "border-bottom:1px solid " + K(q) + ";" : "") +
      "}#adBlock h2{font-size:" +
      Bj +
      "px; font-weight:normal;" +
      (Qg ? "padding-bottom:" + K(Qg) + "px;" : "padding:0;") +
      "margin:0;" +
      (I(r) || I(Ce)
        ? "font-family:" + (Ce ? "'" + String(Ce).replace(Xf, Vf) + "'," : "") + (r ? K(r) + "," : "") + " sans-serif;"
        : "") +
      "}#adBlock span.lhHeader{margin:3px 4px 0;}#adBlock h2 a, #adBlock h2{color:" +
      (t ? K(t) : "#676767") +
      "; text-decoration:none;}." +
      K("c_") +
      "{color:" +
      K(k) +
      ";}." +
      K("c_") +
      "{" +
      (x ? "font-size:" + K(x) + "px;" : "") +
      "font-weight:" +
      (D ? "bold" : "normal") +
      ";}." +
      K("c_") +
      "{" +
      (L ? "display:inline-block;" : "") +
      "line-height:" +
      (Vc ? K(Vc) + "px" : "1.4em") +
      ";" +
      (W ? "text-decoration:none;" : "") +
      "margin:0; padding:0;}" +
      (fb ? "." + K("c_") + ":hover {text-decoration:underline;}a{text-decoration:none;}" : "") +
      "h2 a:hover{color:" +
      (t ? K(t) : "#676767") +
      "; text-decoration:none; font-weight:normal; background-color:transparent;}a:hover{" +
      (da ? "font-weight:bold;" : "") +
      (Z ? "color:" + K(Z) + ";" : "") +
      (La ? "background-color:" + K(La) + ";" : "") +
      "}";
    f = b ? "right" : "left";
    b = b ? "left" : "right";
    I(wb) && "relatedsearch" == wb && !a
      ? ((wb = gb
          ? "text-align:" +
            ("right" == f && "left" == gb ? "right" : "right" == f && "right" == gb ? "left" : K(gb)) +
            ";"
          : ""),
        (Ua = Ua
          ? I(Xc) && I(gb)
            ? "center" == gb
              ? "padding-right:" + K(Math.floor(Ua / 2)) + "px; padding-left:" + K(Math.floor(Ua / 2)) + "px;"
              : "right" == gb
              ? "padding-" + K(f) + ":" + K(Ua) + "px;"
              : "padding-" + K(b) + ":" + K(Ua) + "px;"
            : "padding-right:" + K(Ua) + "px;"
          : ""),
        (g =
          ".radlinkC{" +
          (I(Xc) && x < u ? "padding:" + K(1 + (u - x)) + "px 4px;" : "padding:1px 4px;") +
          "word-break:break-word;}.col{" +
          wb +
          (Xc ? "border-" + K(b) + ":1px solid " + K(g) + ";" : "") +
          "vertical-align:top;" +
          Ua +
          "}" +
          (Xc
            ? "#adBlock h2{float:" +
              K(f) +
              "; line-height:1.4em; vertical-align:top;" +
              (x >= u ? "padding:" + K(3 + (x - u)) + "px 4px;" : "padding:3px 4px;") +
              "}.ad{border-bottom:none;}.col.l{border-" +
              K(b) +
              ":none;}"
            : "#adBlock h2{text-align:" + K(f) + ";}")))
      : (g = "");
    U =
      (I(M) && I(vb) && Rg
        ? ".adIcon{visibility:visible; width:" +
          K(M) +
          "px; height:" +
          K(vb) +
          "px; border:none; float:" +
          K(f) +
          "; margin-" +
          K(f) +
          ":" +
          K(null != U ? U : 0) +
          "px; margin-" +
          K(b) +
          ":" +
          K(null != ja ? ja : 4) +
          "px; margin-top:" +
          K(null != T ? T : 4) +
          "px; margin-bottom:" +
          K(null != Uc ? Uc : 0) +
          "px;}.adD, ." +
          K("a_") +
          "{display:block; overflow:hidden;}"
        : "") +
      (c ? ".adD{clear:" + K(b) + ";}" : "") +
      g;
    c =
      c || d
        ? vf(
            "body{font-family:" +
              (Wc ? "'" + String(Wc).replace(Xf, Vf) + "'," : "") +
              (p ? K(p) + "," : "") +
              '"Roboto","Helvetica Neue",arial,sans-serif;}.ad{margin:0; padding:0;}.' +
              K("c_") +
              "{line-height:" +
              (Vc ? K(Vc) : "20") +
              "px; margin:0;}td{padding:0px;}.adStd{clear:none;}" +
              (I(M) && I(vb) && I(Rg)
                ? ".adIcon{margin-top:" +
                  K(null != T ? T : 0) +
                  "px; margin-bottom:" +
                  K(null != Uc ? Uc : 0) +
                  "px; margin-" +
                  K(f) +
                  ":0px;}"
                : "") +
              ".adStd{clear:none;}"
          )
        : "";
    return G(e + (U + c + "</style>"));
  }
  function ag(a) {
    return a ? a : Ra().data.hm || Ra().data.t ? "#bdbdbd" : null;
  }
  function bg(a, b) {
    function c(l) {
      return (l = d(l)) ? vf(l) : void 0;
    }
    var d = Qe(b),
      e = Re(b),
      f = d("type") || "ads",
      g = Oa(),
      h = Ra(),
      k = "#0000CC";
    if (h.data.hm || h.data.t) k = "#1a0dab";
    k = d("colorTitleLink", k);
    b = {
      xa: Ka().xa(),
      je: Se(b),
      Lf: Te(b),
      Xd: ag(d("colorAdSeparator")),
      hg: 20,
      we: d("colorText"),
      xe: k,
      ue: d("colorBackground"),
      ve: d("colorBorder"),
      te: d("colorAttribution"),
      fontFamily: c("fontFamily"),
      Je: c("fontFamilyAttribution"),
      Le: Ue(b) || d("fontSizeTitle"),
      Ke: d("fontSizeAttribution"),
      Gf: d("titleBold"),
      Hf: !h.data.hm,
      uf: d("rolloverLinkBold"),
      vf: d("rolloverLinkColor"),
      tf: d("rolloverLinkBackgroundColor"),
      wf: d("rolloverLinkUnderline"),
      sf: d("rolloverAdBackgroundColor"),
      ef: d("noTitleUnderline"),
      dg: e("adBorderSelections", "left"),
      Qd: e("adBorderSelections", "right"),
      eg: e("adBorderSelections", "top"),
      cg: e("adBorderSelections", "bottom"),
      de: e("borderSelections", "left"),
      ee: e("borderSelections", "right"),
      ge: e("borderSelections", "top"),
      ce: e("borderSelections", "bottom"),
      df: d("lineHeightTitle"),
      be: d("attributionSpacingBelow"),
      Te: !1,
      Ue: !!h.data.hm,
      Ye: !!h.data.t,
      qe: !!g.data.cucai,
      pe: !!g.data.cgab,
      P: w().P(),
    };
    d("adIconUrl") &&
      !w().P() &&
      ((b.Wd = d("adIconWidth")),
      (b.Rd = d("adIconHeight")),
      (b.Sd = d("adIconSpacingAbove")),
      (b.Ud = d("adIconSpacingBefore")),
      (b.Td = d("adIconSpacingAfter")),
      (b.Vd = d("adIconSpacingBelow")));
    "relatedsearch" !== f ||
      w().P() ||
      ((b.type = "relatedsearch"),
      (b.ye = d("columnSpacing")),
      (b.Qe = d("horizontalFlow")),
      (b.Pe = d("horizontalAlignment")));
    f = $f(b);
    cg(f, a);
  }
  function cg(a, b) {
    b.appendChild(Yf(a));
  }
  var dg = /^((https?):)?\/\/afs.googleusercontent.com\//;
  function eg(a, b, c) {
    if (dg.test(b))
      for (
        b.startsWith("http:") && c
          ? (b = "https:" + b.substring(5))
          : b.startsWith("//") && (b = (c ? "https:" : "") + b),
          c = 0;
        c < a.length;
        c++
      )
        a[c].adIconUrl = b;
  }
  var fg = (eg = B(eg, "aiIID"));
  function gg() {}
  function hg(a, b) {
    a.addEventListener("click", function (c) {
      2 !== c.button && b(c);
    });
  }
  function ig(a) {
    var b = "https" == window.location.protocol;
    a = a.clicktrackUrl;
    return Oa().data.ct && wa(a)
      ? Ya(a, function (c) {
          return !(0 == c.indexOf("http:") && b);
        })
      : [];
  }
  function jg(a, b) {
    a = a.getElementsByTagName("a");
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      (d.hasAttribute ? d.hasAttribute("data-notrack") : d.getAttribute("data-notrack")) ||
        hg(d, function () {
          for (var e = [], f = n(b), g = f.next(); !g.done; g = f.next())
            (g = new sc(g.value)),
              A(g, "nc", [Math.round(9e6 * Math.random()), new Date().getTime()].join("")),
              e.push(tc(g));
          if (window.navigator.sendBeacon)
            for (e = n(e), g = e.next(); !g.done; g = e.next()) window.navigator.sendBeacon(g.value);
          else for (e = n(e), f = e.next(); !f.done; f = e.next()) Xb(f.value);
        });
    }
  }
  function kg(a, b, c) {
    if (Oa().data.ct && ((a = ig(a)), 0 < a.length))
      if (Oa().data.alct) {
        c = ee("block", "" + c, a);
        var d = je() ? "clicktrackedAd_js" : "b_";
        a = Za(Id("div", d, b));
        a = a.concat(Za(Id("tr", d, b)));
        a = a.concat(Za(Id("li", d, b)));
        var e;
        for (b = 0; (e = a[b]); b++) (d = c), (d = ee("ad", "" + (b + 1), d)), jg(e, d);
      } else jg(b, a);
  }
  var lg = F(function (a, b) {
    var c = a.resultsPageBaseUrl,
      d = a.resultsPageQueryParam,
      e = b[0] && b[0].adtype;
    b = n(b);
    for (var f = b.next(); !f.done; f = b.next()) {
      f = f.value;
      e && (f = f[e]);
      var g = f.st,
        h = f.afdt;
      if (null != g && null != h) {
        if (!c) throw E("resultsPageBaseUrl needs to be set.");
        var k = new sc(c);
        A(k, d, g);
        A(k, "rsToken", h);
        null != a.personalizedAds && A(k, "pcsa", "" + a.personalizedAds);
        f.l = tc(k);
        f.u = tc(k);
      }
    }
  }, "fRSCL");
  function mg() {
    var a = { Jf: !!w().data.esrs };
    a = a || {};
    var b = a.Jf;
    return G(
      "<style" +
        (a.kg ? ' data-permanent="true"' : "") +
        ">body{-webkit-text-size-adjust:100%; font-family:arial,sans-serif; margin:0;}div{" +
        ng(0) +
        "max-width:100%;}span:last-child, div:last-child{" +
        ng(1) +
        "}." +
        K("x_") +
        "{" +
        ng(1) +
        "}." +
        K("j_") +
        ">span:last-child, ." +
        K("j_") +
        ">div:last-child, ." +
        K("y_") +
        ", ." +
        K("y_") +
        ":last-child{" +
        ng(0) +
        "}." +
        K("l_") +
        "{-ms-overflow-style:none; scrollbar-width:none;}." +
        K("l_") +
        "::-webkit-scrollbar{display:none;}a{text-decoration:none; text-transform:none; color:inherit; display:inline-block;}span{" +
        ng(0) +
        "display:inline-block; overflow:hidden; text-transform:none;}img{border:none; max-width:100%; max-height:100%;}." +
        K("i_") +
        "{display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" +
        og("flex-start") +
        "box-sizing:border-box; overflow:hidden;}." +
        K("u_") +
        "{position:relative; display:inline-block;" +
        (b ? "width:100%; height:100%;" : "") +
        "}." +
        K("w_") +
        "{position:absolute; top:0; left:0; height:100%;" +
        (b ? "background-repeat:repeat-x;" : "background-repeat:no-repeat; background-size:auto 100%;") +
        "}." +
        K("v_") +
        "{display:block;" +
        (b ? "height:100%; background-size:20% 100%; background-repeat:repeat-x;" : "") +
        "}." +
        K("t_") +
        "{" +
        pg() +
        "}." +
        K("q_") +
        "{box-sizing:border-box; max-width:100%; max-height:100%; overflow:hidden;" +
        pg() +
        "}." +
        K("n_") +
        "{-ms-flex-negative:1; text-overflow:ellipsis; white-space:nowrap;}." +
        K("p_") +
        "{-ms-flex-negative:1; max-width: 100%;}." +
        K("m_") +
        "{overflow:hidden;}." +
        K("o_") +
        "{white-space:nowrap;}." +
        K("z_") +
        "{cursor:pointer;}." +
        K("aa_") +
        "{display:none; position:absolute; z-index:1;}." +
        K("k_") +
        ">div:not(." +
        K("aa_") +
        ") {display:-webkit-inline-box; display:-moz-inline-box; display:-ms-inline-flexbox; display:-webkit-inline-flex; display:inline-flex; vertical-align:middle;}." +
        K("k_") +
        ".topAlign>div{vertical-align:top;}." +
        K("k_") +
        ".centerAlign>div{vertical-align:middle;}." +
        K("k_") +
        ".bottomAlign>div{vertical-align:bottom;}." +
        K("k_") +
        ">span, ." +
        K("k_") +
        ">a, ." +
        K("k_") +
        ">img, ." +
        K("k_") +
        "{display:inline; vertical-align:middle;}.si101:nth-of-type(5n+1) > .si141{border-left: #1f8a70 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+2) > .si141{border-left: #1f8a70 7px solid;}.si101:nth-of-type(5n+3) > .si141{border-left: #bedb39 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+4) > .si141{border-left: #bedb39 7px solid;}.si101:nth-of-type(5n+5) > .si141{border-left: #ffe11a 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+6) > .si141{border-left: #ffe11a 7px solid}.si101:nth-of-type(5n+2) > .si141{border-left: #fd7400 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+3) > .si141{border-left: #fd7400 7px solid;}.si101:nth-of-type(5n+4) > .si141{border-left: #004358 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+5) > .si141{border-left: #004358 7px solid;}." +
        K("ba_") +
        "{cursor:pointer;}.si130{display:inline; text-transform:inherit;}." +
        K("r_") +
        "{position: relative;}</style>"
    );
  }
  function pg() {
    return vf(
      "display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + og("center") + qg("center")
    );
  }
  function rg(a, b) {
    var c = "",
      d = b ? "right" : "left";
    b = b ? "left" : "right";
    for (var e = wf(a), f = e.length, g = 0; g < f; g++) {
      var h = e[g];
      switch (xa(h) ? h.toString() : h) {
        case "fw":
          c += "font-weight:";
          h = a.fw;
          switch (xa(h) ? h.toString() : h) {
            case 1:
              c += "100";
              break;
            case 2:
              c += "400";
              break;
            case 4:
              c += "500";
              break;
            case 3:
              c += "700";
              break;
            case 0:
              c += "400";
          }
          break;
        case "bac":
          c += "background-color:" + K(a.bac);
          break;
        case "br":
          c += "border-radius:" + K(a.br) + "px";
          break;
        case "bw":
          c += "border:" + K(a.bw) + "px solid " + K(a.boc);
          break;
        case "ff":
          c += "font-family:" + K(a.ff) + ",arial,sans-serif;";
          break;
        case "fs":
          c += "font-size:" + K(a.fs) + "px";
          break;
        case "h":
          c += "height:" + K(a.h) + (-1 != ("" + xf(a.h)).indexOf("%") ? "" : "px");
          break;
        case "i":
          c += "font-style:" + K(H(a.i, !0) ? "italic" : "normal");
          break;
        case "lh":
          c += "line-height:" + K(a.lh) + "px";
          break;
        case "maxh":
          c += "max-height:" + K(a.maxh) + "px";
          break;
        case "maxw":
          c += "max-width:" + K(a.maxw) + "px";
          break;
        case "mb":
          c += "margin-bottom:" + K(a.mb) + "px";
          break;
        case "minh":
          c += "min-height:" + K(a.minh) + "px";
          break;
        case "minw":
          c += "min-width:" + K(a.minw) + "px";
          break;
        case "ml":
          c += "margin-" + K(d) + ":" + K(a.ml) + "px";
          break;
        case "mr":
          c += "margin-" + K(b) + ":" + K(a.mr) + "px";
          break;
        case "mt":
          c += "margin-top:" + K(a.mt) + "px";
          break;
        case "op":
          c += "opacity:" + K(a.op);
          break;
        case "pb":
          c += "padding-bottom:" + K(a.pb) + "px";
          break;
        case "pl":
          c += "padding-" + K(d) + ": " + K(a.pl) + "px";
          break;
        case "pr":
          c += "padding-" + K(b) + ": " + K(a.pr) + "px";
          break;
        case "pt":
          c += "padding-top:" + K(a.pt) + "px";
          break;
        case "tc":
          c += "color:" + K(a.tc);
          break;
        case "u":
          c += "text-decoration:" + K(a.u ? "underline" : "none");
          break;
        case "st":
          c += "text-decoration:" + K(a.st ? "line-through" : "none");
          break;
        case "po":
          h = a.po;
          var k = d,
            l = b;
          h = vf(
            (h.t ? K() + "top:" + K(h.t) + "px;" : "") +
              (h.r ? K() + K(l) + ":" + K(h.r) + "px;" : "") +
              (h.b ? K() + "bottom:" + K(h.b) + "px;" : "") +
              (h.l ? K() + K(k) + ":" + K(h.l) + "px;" : "")
          );
          c += h + "position:absolute";
          break;
        case "bos":
          h = a.bos;
          k = "";
          l = h;
          for (var q = l.length, t = 0; t < q; t++) {
            var p = l[t];
            k +=
              K(p.xo) +
              "px " +
              K(p.yo) +
              "px " +
              (p.br ? K(p.br) + "px " + (p.sr ? K(p.sr) + "px " : "") : "") +
              K(p.sc) +
              (t != h.length - 1 ? "," : "");
          }
          h = vf(k);
          h = Df("" + h);
          h = vf(
            "-webkit-box-shadow:" +
              K(h) +
              "; -moz-box-shadow:" +
              K(h) +
              "; -ms-box-shadow:" +
              K(h) +
              "; box-shadow:" +
              K(h) +
              ";"
          );
          c += h;
          break;
        case "w":
          c += "width:" + K(a.w) + (-1 != ("" + xf("" + a.w)).indexOf("%") ? "; -ms-flex-negative:1;" + ng(1) : "px");
          break;
        case "tt":
          switch (((c += "text-transform:"), (h = a.tt), xa(h) ? h.toString() : h)) {
            case 1:
              c += "uppercase";
              break;
            default:
              c += "initial";
          }
      }
      c += ";";
    }
    return vf(c);
  }
  function ng(a) {
    return vf("-webkit-box-flex:" + K(a) + " 0; -webkit-flex-shrink:" + K(a) + "; flex-shrink:" + K(a) + ";");
  }
  function og(a) {
    var b = "-ms-flex-align:",
      c = "" + (0 == ("" + xf(a)).indexOf("flex-") ? K(("" + xf(a)).substring(5)) : K(a));
    c = Df(c);
    b += K(c) + "; -webkit-box-align:" + K(c) + "; -webkit-align-items:" + K(a) + "; align-items:" + K(a) + ";";
    return vf(b);
  }
  function qg(a) {
    var b = "-ms-flex-pack:",
      c = "" + (0 == ("" + xf(a)).indexOf("flex-") ? K(("" + xf(a)).substring(5)) : K(a));
    c = Df(c);
    b += K(c) + "; -webkit-box-pack:" + K(c) + "; -webkit-justify-content:" + K(a) + "; justify-content:" + K(a) + ";";
    return vf(b);
  }
  function sg(a) {
    var b = [];
    a = n(a.s || []);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = c.r;
      d && d.hasOwnProperty("ff") && (d.ff = vf(d.ff));
      (d = c.hr) && d.hasOwnProperty("ff") && (d.ff = vf(d.ff));
      b.push({ className: c.sk, rules: c.r || {}, kb: c.hr || {} });
    }
    a = Ka().xa();
    var e = "<style>";
    c = b.length;
    for (d = 0; d < c; d++) {
      var f = b[d];
      if (I(f.rules) && 0 < wf(f.rules).length) {
        var g = "." + K(f.className) + "{" + rg(f.rules, a) + "}";
        var h = f.rules;
        h = vf(
          I(h.iss) && I(h.iss.bc) && I(h.iss.o)
            ? "." +
                K(f.className) +
                " > ." +
                K("s_") +
                "{background-color:" +
                K(h.iss.bc) +
                "; opacity:" +
                K(h.iss.o) +
                "; bottom:0; top:0; right:0; left:0; position:absolute;}"
            : ""
        );
        g += h;
      } else g = "";
      e += g + (I(f.kb) && 0 < wf(f.kb).length ? "." + K(f.className) + ":hover{" + rg(f.kb, a) + "}" : "");
    }
    return G(e + "</style>");
  }
  function tg(a, b) {
    if (!a) return !1;
    if (3 == a.nodeType && a.nodeValue && (b && (a.nodeValue += " ..."), 4 < a.nodeValue.length)) {
      b = a.nodeValue;
      var c = a.nodeValue.length - 1;
      b.length > c && (b = b.substring(0, c - 3) + "...");
      a.nodeValue = b;
      return !1;
    }
    c = a.textContent || a.innerText;
    if (!c || c.length <= (b ? 0 : 4)) return a.parentNode.removeChild(a), !0;
    for (b = tg(a.lastChild, b); b; ) b = tg(a.lastChild, b);
    return !1;
  }
  function ug(a, b) {
    if (!(0 >= b)) {
      for (var c = a.innerHTML.length; 0 < c && a.offsetHeight > b; c--)
        for (var d = a, e = tg(d.lastChild, !1); e; ) e = tg(d.lastChild, e);
      a.offsetHeight > b && (a.textContent = "");
    }
  }
  var vg = 1;
  function wg(a, b, c) {
    if (!c) return null;
    if ("." == c[0]) return b[c.substring(1)];
    c = n(c.split("."));
    for (b = c.next(); !b.done; b = c.next()) {
      b = b.value;
      if (null == a) return null;
      if (Array.isArray(a)) {
        b = parseInt(b, 10);
        if (isNaN(b)) return null;
        a = a[b];
      } else if (xa(a) && a.hasOwnProperty(b)) a = a[b];
      else return null;
    }
    return a;
  }
  var xg = null;
  function yg(a, b, c) {
    var d = "A" === c.tagName ? c : c.querySelector("a");
    b.addEventListener("click", function (e) {
      zg(a, b, c);
      Ag(e);
    });
    b.addEventListener("keydown", function (e) {
      if (32 == e.keyCode || 13 == e.keyCode) zg(a, b, c), Ag(e), d && d.focus();
    });
    a.addEventListener("click", Bg);
    a.addEventListener("scroll", Bg);
    b.setAttribute("role", "button");
    b.setAttribute("tabindex", 0);
    d && b.setAttribute("aria-label", c.textContent);
  }
  function Ag(a) {
    a.stopPropagation ? a.stopPropagation() : ((a.cancelBubble = !0), (a.returnValue = !1));
  }
  function zg(a, b, c) {
    xg && xg != c && ((xg.style.display = "none"), (xg = null));
    if (c.style.display && "none" != c.style.display) (c.style.display = "none"), (xg = null);
    else {
      a.appendChild(c);
      var d = Rd(b),
        e = Sd(b),
        f = Sd(c),
        g = Sd(a),
        h = Rd(a),
        k = d.x + a.scrollLeft - h.x;
      d = d.y + a.scrollTop - h.y;
      switch (b.getAttribute("data-position")) {
        case "over":
          b = e.width / 2 - f.width / 2;
          e = e.height / 2 - f.height / 2;
          break;
        default:
          (b = e.width / 2 - f.width / 2), (e = e.height);
      }
      h = a.scrollTop;
      var l = a.scrollTop + g.height - f.height - 10;
      c.style.left = Math.min(Math.max(Math.round(k + b), a.scrollLeft), a.scrollLeft + g.width - f.width - 10) + "px";
      c.style.top = Math.min(Math.max(Math.round(d + e), h), l) + "px";
      c.style.display = "block";
      xg = c;
    }
  }
  function Bg() {
    xg && ((xg.style.display = "none"), (xg = null));
  }
  function Cg(a) {
    var b = a.orientation,
      c = a.id,
      d = a.O,
      e = a.Yd,
      f = a.overflow,
      g = a.ze,
      h = a.ne,
      k = a.Xe,
      l = a.href,
      q = "",
      t = H(e, 0) || H(e, 1) || H(e, 2),
      p = H(e, 6) || H(e, 7) || H(e, 8),
      r = H(e, 3) || H(e, 4) || H(e, 5);
    c = (c ? 'id="' + J(c) + '"' : "") + ' class="' + J("i_") + (d ? " " + J(d) : "") + (H(f, 3) ? " " + J("j_") : "");
    H(g, 4) && ((c += " " + J("k_") + " "), (c += J(t ? "topAlign" : p ? "centerAlign" : r ? "bottomAlign" : "")));
    c += (H(f, 4) ? " " + J("j_") + " " + J("l_") : "") + '"' + (h ? ' data-drop="true"' : "");
    g = "-ms-flex-direction:";
    h = "" + K(0 == b ? "row" : "column");
    h = Df(h);
    g +=
      K(h) +
      "; -webkit-box-orient:" +
      K(0 == b ? "horizontal" : "vertical") +
      "; -webkit-flex-direction:" +
      K(h) +
      "; flex-direction:" +
      K(h) +
      ";";
    g = Df(g);
    h =
      null != e
        ? qg(
            H(e, 0) || H(e, 3) || H(e, 9) || H(e, 6)
              ? "flex-start"
              : H(e, 1) || H(e, 4) || H(e, 10) || H(e, 7)
              ? "center"
              : H(e, 2) || H(e, 5) || H(e, 11) || H(e, 8)
              ? "flex-end"
              : ""
          )
        : "";
    h = Df("" + h);
    e =
      null != e
        ? og(t ? "flex-start" : r ? "flex-end" : p ? "center" : H(e, 9) || H(e, 10) || H(e, 11) ? "stretch" : "")
        : "";
    e = Df("" + e);
    t = "";
    switch (f) {
      case 2:
        t += "-ms-flex-wrap:wrap; -webkit-flex-wrap:wrap; flex-wrap:wrap;";
        break;
      case 3:
      case 4:
        t += "overflow-" + K(0 == b ? "x" : "y") + ":auto; -webkit-overflow-scrolling: touch; scroll-behavior: smooth;";
    }
    b = Df(t);
    c += ' style="' + J(K(g)) + J(K(h)) + J(K(e)) + J(K(b)) + (k ? "position:relative;" : "") + '"';
    k = Cf(c);
    q += l ? "<a" + Kf(Dg(a)) + Kf(If(k)) + "></a>" : "<div" + Kf(If(k)) + "></div>";
    return G(q);
  }
  function Eg(a) {
    a = a || {};
    var b = a.id,
      c = a.text,
      d = a.O,
      e = a.hf,
      f = a.If,
      g = a.href,
      h = a.Bd,
      k = "",
      l =
        null != e
          ? 'data-lines="' + J(e) + '"' + (null != f ? ' data-truncate="' + J(f) + '"' : ' data-truncate="0"')
          : "";
    l = Cf(l);
    f = H(e, 1) ? "m_ " + (H(f, 0) ? "n_" : "o_") : "p_";
    c =
      (I(e) && 1 < e
        ? "<span" +
          Kf(If(l)) +
          ' style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: ' +
          J(K(e)) +
          '; ">'
        : "") +
      qf(null != c ? c : "") +
      (I(e) && 1 < e ? "</span>" : "");
    c = zf(c);
    k += g
      ? "<a" +
        (b ? ' id="' + J(b) + '"' : "") +
        ' class="' +
        J(f) +
        " " +
        J(null != d ? d : "") +
        '"' +
        (I(e) && 1 < e ? "" : Kf(If(l))) +
        (h ? ' data-pingback-type="' + J(h) + '"' : "") +
        Kf(Dg(a)) +
        ">" +
        c +
        "</a>"
      : "<span" +
        (b ? ' id="' + J(b) + '"' : "") +
        (I(e) && 1 < e ? "" : Kf(If(l))) +
        (h ? ' data-pingback-type="' + J(h) + '"' : "") +
        ' class="' +
        J(f) +
        " " +
        J(null != d ? d : "") +
        '">' +
        c +
        "</span>";
    return G(k);
  }
  function Fg(a) {
    var b = a.src,
      c = a.id,
      d = a.Se,
      e = a.ariaHidden,
      f = a.O,
      g = a.href,
      h = a.Bd,
      k = a.Fe,
      l = "";
    c =
      (c ? 'id="' + J(c) + '"' : "") +
      (e ? ' aria-hidden="true" tabindex="-1"' : "") +
      ' class="' +
      J("q_") +
      (f ? " " + J(f) : "") +
      (k ? " " + J("r_") : "") +
      '"';
    c = Cf(c);
    b =
      '<img src="' +
      J(Qf(b)) +
      '"' +
      (h ? ' data-pingback-type="' + J(h) + '"' : "") +
      (d ? ' aria-label="' + J(d) + '"' : "") +
      ">";
    b = zf(b);
    d = '<div class="' + J("s_") + '"></div>';
    d = zf(d);
    l += g
      ? "<a" + Kf(Dg(a)) + Kf(If(c)) + ">" + (k ? d : "") + b + "</a>"
      : "<div" + Kf(If(c)) + ">" + (k ? d : "") + b + "</div>";
    return G(l);
  }
  function Gg(a) {
    var b = a.lf,
      c = a.mf,
      d = a.id,
      e = a.Bf,
      f = a.Cf,
      g = a.lg,
      h = a.mg,
      k = a.ng,
      l = a.O,
      q = a.href,
      t = a.ha,
      p = a.Qc,
      r = a.fc,
      x = a.width,
      u = a.height,
      D = null != k ? k : "";
    k = Math.max(Math.min(b, 5), 0);
    a = I(a.Ge) && !e && !f;
    d =
      "<div" +
      (d ? ' id="' + J(d) + '"' : "") +
      ' class="' +
      J("t_") +
      (l ? " " + J(l) : "") +
      '"' +
      (a ? ' style="width:' + J(K(null != x ? x : "")) + ";height:" + J(K(null != u ? u : "")) + ';"' : "") +
      '><div class="' +
      J("u_") +
      '">';
    e = "" + Lf((g ? "" : D) + (null != e ? e : "/images/afs/sr-star-off.png"));
    e = Bf(e);
    g = Af(
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 19'><polygon fill='%23dadce0' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>"
    );
    d += a
      ? '<div style="background-image: url(' + J(Qf(g)) + ')" class="' + J("v_") + '" role="none"></div>'
      : '<img src="' + J(Qf(e)) + '" class="' + J("v_") + '" role="none"/>';
    f = "" + Lf((h ? "" : D) + (null != f ? f : "/images/afs/sr-star-on.png"));
    f = Bf(f);
    h = Af(
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 19'><polygon fill='%23fbbc04' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>"
    );
    d += '<div class="' + J("w_") + '" style="background-image: url(' + J(Qf(a ? h : f)) + ");";
    a
      ? ((b = (20 / 105) * k * 100 + (1 / 105) * Math.max(Math.floor(k), 0) * 100),
        (d = d + "background-size: " + (J(K(2e3 / b)) + "% 100%; width: " + J(K(b)) + "%")))
      : (d += "width: " + J(K(20 * Math.max(Math.min(b, 5), 0))) + "%");
    d += '" role="img"' + (c ? ' aria-label="' + J(c) + '"' : ' aria-hidden="true"') + "></div></div></div>";
    c = c = { href: q, ha: t, Qc: p, fc: r, Ae: zf(d) };
    q = c.Ae;
    c = G(c.href ? "<a" + Kf(Dg(c)) + ">" + qf(q) + "</a>" : qf(q));
    return G("" + c);
  }
  function Dg(a) {
    a = a || {};
    var b = a.ha,
      c = a.Qc,
      d = a.fc,
      e = a.Be;
    a =
      'href="' +
      J(Lf(a.href)) +
      '"' +
      (d ? ' data-notrack="true"' : "") +
      (null != c ? ' data-nb="' + J(c) + '"' : "") +
      (b ? ' target="' + J(b) + '"' : "");
    null != e
      ? ((e = uf(
          H(null == e ? null : e.as, "true")
            ? 'attributionsrc=""'
            : 'attributionsrc="' + J(null == e ? null : e.as) + '"'
        )),
        (e = Kf(e)))
      : (e = "");
    return uf(a + e);
  }
  function Hg() {
    this.Ce = Fd();
    this.Hb = null;
  }
  Hg.prototype.Kc = function (a, b) {
    var c = this.Hb ? this.Hb.getData() : {},
      d = this.Ce;
    return Yf(a(b || Zf, c), d);
  };
  Hg.prototype.Ed = function (a) {
    a = a({}, this.Hb ? this.Hb.getData() : {});
    return String(a);
  };
  function Ig(a) {
    if (!a) return {};
    var b = {};
    a = n(a);
    for (var c = a.next(); !c.done; c = a.next()) (c = c.value), (b[c.sk] = { rules: c.r, kb: c.hr });
    return b;
  }
  var Jg = new Hg(),
    Kg = {},
    Lg = ((Kg[2] = "x_"), (Kg[3] = "y_"), Kg);
  function Mg(a, b, c, d, e, f) {
    function g(x, u, D) {
      var L = "adBlock" == x.dbk,
        da = d ? "_blank" : "_top";
      u = { id: L ? "adBlock" : u, O: (x.sk || "") + " " + (void 0 === D ? "" : D), ha: da };
      x.pb && (u.Bd = x.pb.pbt);
      D = "ctc" === x.dbk;
      var Z = "ctc.bt" === x.dbk;
      if (q || D || Z)
        "" === (w().data.ctclt || "")
          ? ((u.ha = "_self"), !/i(Phone|Pad);/i.test(gc) || (nc() && 98 < ic(lc)) || (u.ha = da))
          : (u.ha = w().data.ctclt || "");
      t && (u.ha = "_top");
      D = x.dbk ? wg(c, b, x.dbk) : void 0;
      Z = x.acc && x.acc.alt ? wg(c, b, x.acc.alt) : void 0;
      var La = x.acc && x.acc.ah,
        fb = wg(c, b, "bcala");
      if ((x.dbk && !D && !L) || (x.hnk && null != wg(c, b, x.hnk))) return null;
      da = null;
      var Ta = 0;
      if (x.ac) {
        var W = x.ac[0],
          X = W.act,
          Sc = W.dbk ? wg(c, b, W.dbk) : void 0,
          $b = W.en,
          ac = void 0,
          Tc = void 0;
        switch (X) {
          case 0:
            u.href = Sc;
            u.fc = !!W.nm;
            u.Qc = W.nb;
            u.Be = fb;
            break;
          case 3:
            u.O += " z_";
            Tc = "aa_";
            ac = "e" + vg++;
            u.id || (u.id = "e" + vg++);
            l.push({ Re: u.id, ke: ac });
            break;
          case 5:
            if ((Ta = parseInt(Sc, 10))) u.O += " ba_";
        }
        $b && (da = g($b, ac, Tc));
      }
      X = null;
      fb = x.nt;
      W = x.lr || {};
      X = (h[x.sk] || {}).rules || {};
      switch (fb) {
        case 0:
          D = W.o;
          null == D && (D = 0);
          u.orientation = D;
          u.Yd = W.a;
          u.ne = 1 == W.t;
          u.overflow = W.ov;
          u.ze = W.cf;
          u.Xe = W.ap && !X.po;
          X = Cg;
          break;
        case 1:
          u.text = G(D);
          u.hf = W.nl;
          u.If = W.t;
          X = Eg;
          break;
        case 2:
          u.src = X.sfc && "svg" == D.substr(-3) ? D + "?c=" + encodeURIComponent(X.sfc) : D;
          u.Fe = "iss" in X && "bc" in X.iss && "o" in X.iss;
          u.Se = Z;
          u.ariaHidden = La;
          X = Fg;
          break;
        case 4:
          "string" == typeof D && (D = parseFloat(D));
          if ("number" != typeof D || isNaN(D)) return null;
          u.Bf = X.bu;
          u.Cf = X.fu;
          u.lf = D;
          u.mf = Z;
          u.Ge = !!w().data.esrs;
          Ka().data.insr && 2 == k
            ? ((u.width = "177px"), (u.height = "32px"))
            : ((u.width = "61px"), (u.height = "11px"));
          X = Gg;
          break;
        default:
          return null;
      }
      if ((D = Lg[W.sb])) u.O += " " + D;
      var M = Jg.Kc(X, u);
      x.hasOwnProperty("hne") && r[x.hne].push(M);
      if (L) {
        var vb = F(function () {
          for (var T = n(r[1]), U = T.next(); !U.done; U = T.next()) {
            U = U.value;
            var ja = !1;
            "auto" === M.style.overflowX
              ? (ja = 0 !== M.scrollLeft)
              : "auto" === M.style.overflowY && (ja = 0 !== M.scrollTop);
            U.style.visibility = ja ? "visible" : "hidden";
          }
          T = n(r[2]);
          for (U = T.next(); !U.done; U = T.next())
            (U = U.value),
              (ja = !0),
              "auto" === M.style.overflowX
                ? (ja = Math.abs(M.scrollLeft) !== M.scrollWidth - M.clientWidth)
                : "auto" === M.style.overflowY && (ja = M.scrollTop !== M.scrollHeight - M.clientHeight),
              (U.style.visibility = ja ? "visible" : "hidden");
        }, "hneSc");
        F(function () {
          e && (M.addEventListener("scroll", vb), e.addEventListener("resize", vb));
        }, "hneAsc")();
      }
      Ta &&
        M.addEventListener("click", function () {
          var T = M.ownerDocument.getElementById("adBlock");
          "auto" === T.style.overflowX ? (T.scrollLeft += Ta) : "auto" === T.style.overflowY && (T.scrollTop += Ta);
          T = 0 > Ta ? "cblc" : "cbrc";
          var U = xc();
          if (uc) {
            var ja = yc(U);
            A(ja, "pbt", "ui");
            A(ja, "emsg", T);
            U.ia(tc(ja));
          }
        });
      x = x.ch;
      if (0 == fb && x && 0 < x.length) {
        L = !1;
        for (u = 0; u < x.length; u++) (D = g(x[u])), null != D && ((L = !0), M.appendChild(D));
        if (!L) return null;
      }
      return da ? ((x = document.createDocumentFragment()), x.appendChild(M), x.appendChild(da), x) : M;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? [] : f;
    var h = Ig(a.s),
      k = a.at,
      l = [],
      q = !!wg(c, b, "ctc.cott"),
      t = !!wg(c, b, "ctd"),
      p = {},
      r = ((p[1] = []), (p[2] = []), p);
    p = "e" + vg++;
    a = g(a.l || {}, p, f.join(" "));
    a || ((a = document.createElement("span")), (a.id = p));
    return { rootElement: a, Od: l, xf: p };
  }
  function Ng(a, b) {
    function c(t) {
      var p = t.style.wordWrap,
        r = t.style.whiteSpace;
      t.style.whiteSpace = "nowrap";
      t.style.wordWrap = "normal";
      var x = t.offsetHeight;
      t.style.whiteSpace = r;
      t.style.wordWrap = p;
      return x;
    }
    function d(t, p) {
      var r = 0 == t.childElementCount;
      p = p && "true" == t.getAttribute("data-drop");
      if (r || p) (r = t.parentNode), r.removeChild(t), t.id != b && d(r, p);
    }
    a = a.querySelectorAll("[data-lines]");
    for (var e = a.length - 1; 0 <= e; e--) {
      var f = a[e],
        g = f.parentNode,
        h = parseInt(f.getAttribute("data-lines"), 10),
        k = parseInt(f.getAttribute("data-truncate"), 10);
      if (1 != h || 0 != k) {
        var l = f.getBoundingClientRect(),
          q = g.getBoundingClientRect();
        l = q.left > l.left || q.right < l.right;
        0 !== k || hc()
          ? 1 === k &&
            ((k = 1 < h ? c(f) : void 0),
            (1 == h ? f.offsetWidth < f.scrollWidth : 1 < h && f.offsetHeight / k > h) || l) &&
            (g.removeChild(f), d(g, !0))
          : ((g = c(f)), ((1 < h && f.offsetHeight / g > h) || l) && ug(f, (g + 1) * h));
      }
    }
  }
  function Og(a, b) {
    b = n(b);
    for (var c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      c = a.document.getElementById(d.ke);
      d = a.document.getElementById(d.Re);
      c && d && yg(a.document.getElementById("adBlock"), d, c);
    }
  }
  function Pg(a) {
    a = a || {};
    return G(Sg(a.Oa, "googNoAds"));
  }
  function Sg(a, b) {
    return G(
      '<div style="display:none;"' +
        (b ? ' id="_' + J(b) + "_" + J(null != a ? a : "unknown_pubId") + '"' : "") +
        "></div>"
    );
  }
  function Tg(a) {
    var b = a.url;
    a = a.Uc;
    this.Ib = b;
    this.Ta = a;
    a = /[?&]dsh=1(&|$)/.test(b);
    this.rb = !a && /[?&]ae=1(&|$)/.test(b);
    this.ud = !a && /[?&]ae=2(&|$)/.test(b);
    if ((this.ma = /[?&]adurl=([^&]*)/.exec(b)) && this.ma[1]) {
      try {
        var c = decodeURIComponent(this.ma[1]);
      } catch (d) {
        c = null;
      }
      this.Mb = c;
    }
  }
  function Ug(a, b) {
    return (a.rb && a.Mb) || a.ud
      ? 1 == b
        ? a.rb
          ? a.Mb
          : Vg(a, "&dct=1")
        : 2 == b
        ? Vg(a, "&ri=2")
        : Vg(a, "&ri=16")
      : a.Ib;
  }
  function Vg(a, b) {
    return a.ma ? a.Ib.slice(0, a.ma.index) + b + a.Ib.slice(a.ma.index) : a.Ib + b;
  }
  function Wg(a) {
    a = a.Ta;
    var b = encodeURIComponent,
      c = "";
    a.platform && (c += "&uap=" + b(a.platform));
    a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
    a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
    a.architecture && (c += "&uaa=" + b(a.architecture));
    a.model && (c += "&uam=" + b(a.model));
    a.bitness && (c += "&uab=" + b(a.bitness));
    a.fullVersionList &&
      (c +=
        "&uafvl=" +
        b(
          a.fullVersionList
            .map(function (d) {
              return b(d.brand) + ";" + b(d.version);
            })
            .join("|")
        ));
    "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
    return c;
  }
  var Xg = /^((market|itms|intent|itms-appss):\/\/)/i;
  var Yg =
    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );
  function Zg(a, b) {
    a.src = hb(b);
    var c, d;
    (c = (b =
      null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function $g(a) {
    var b = Sb("<!doctype html><html><head></head><body></body></html>");
    a.write(Qb(b));
  }
  function ah() {
    var a = this,
      b = {}.jg;
    this.Ta = null;
    b &&
      navigator.userAgentData &&
      navigator.userAgentData.getHighEntropyValues &&
      (b = navigator.userAgentData.getHighEntropyValues(
        "platform platformVersion uaFullVersion architecture model bitness fullVersionList wow64".split(" ")
      )) &&
      b.then(function (c) {
        a.Ta = c;
      });
  }
  ah.prototype.handle = function (a) {
    if (a.hasAttribute("data-ohref")) var b = a.getAttribute("data-ohref");
    else (b = a.href), a.setAttribute("data-ohref", b);
    var c = b;
    var d = { Uc: this.Ta };
    d = new Tg({ url: c, Uc: (void 0 === d ? {} : d).Uc });
    if ((d.rb && d.Mb) || d.ud)
      if (navigator.sendBeacon) {
        c = navigator;
        var e = c.sendBeacon,
          f = "&act=1&ri=1";
        d.rb && d.Ta && (f += Wg(d));
        d = e.call(c, Vg(d, f), "") ? Ug(d, 1) : Ug(d, 2);
      } else d = Ug(d, 0);
    else d = c;
    d = d instanceof tb || !Xg.test(d) ? d : new tb(d, xb);
    b != d && ((b = Ne(d)), void 0 !== b && (a.href = b));
  };
  var bh = F(function (a) {
    new ah().handle(a);
  }, "mDS");
  var ch = /([?|&]{1}nm=)([\d]{1,})/,
    dh = /(\?|&)clkt=-?[\d]*/g,
    eh = /(\?|&)bg=[^&]*/g,
    fh = /(\?|&)nx=-?[\d]+/g,
    gh = /(\?|&)ny=-?[\d]+/g;
  function hh(a) {
    return function () {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.Ba) {
          var d = c.element.href,
            e = d.match(ch);
          e
            ? 3 == e.length && (d = d.replace(ch, e[1] + (parseInt(e[2], 10) + 1)))
            : (d += (-1 == d.indexOf("?") ? "?" : "&") + "nm=1");
          ih(c, d);
        }
      }
    };
  }
  function jh(a) {
    return function () {
      if (a.yc) {
        var b = "&clkt=" + (new Date().getTime() - a.yc),
          c = a.element.href;
        c = c.replace(dh, "");
        ih(a, c + b);
      }
    };
  }
  function kh(a) {
    return function (b) {
      a.yc = new Date().getTime();
      var c = Qd(a.element),
        d = Math.round(b.clientX - c.x);
      b = Math.round(b.clientY - c.y);
      c = a.element.href;
      c = c.replace(fh, "");
      c = c.replace(gh, "");
      ih(a, c + ("&nx=" + d) + ("&ny=" + b));
    };
  }
  function lh(a) {
    return function () {
      var b = a.element.ownerDocument;
      if ((b = (b.defaultView || b.parentWindow).csabg)) {
        b = "&bg=" + b.pc();
        var c = a.element.href;
        c = c.replace(eh, "");
        ih(a, c + b);
      }
    };
  }
  function mh(a) {
    a.Ba && (a.element.addEventListener("mouseover", hh([a])), a.element.addEventListener("mousedown", kh(a)));
    var b = jh(a),
      c = lh(a);
    hg(a.element, function (d) {
      hd(".aCS", Date.now());
      gd();
      a.Ba && (b(d), c(d));
      try {
        bh(a.element);
      } catch (e) {}
    });
  }
  function nh(a, b, c) {
    return -1 == a.indexOf(b) && 16334 > a.length + b.length && ((a += b + encodeURIComponent(c)), 16334 < a.length)
      ? a.substring(0, 16334)
      : a;
  }
  function oh(a, b) {
    re(a.element, "mousedown", function () {
      try {
        var c = ze(b, !0);
        var d = ze(b, !1);
      } catch (f) {}
      if (c && d) {
        var e = a.element.href;
        e = nh(e, "&is=", [d, c].join("x"));
        ih(a, e);
      }
    });
  }
  function ph(a, b, c) {
    for (var d = 0; d < a.length; d++) {
      var e = a[d];
      mh(e);
      if (e.Ba && void 0 !== e.nd) {
        var f = "&nb=" + (e.nd || ""),
          g = e.element.href;
        g = g.replace(qh, "");
        g = -1 == g.indexOf("?") ? g + f.replace(/^&/, "?") : g + f;
        ih(e, g);
      }
      e.Ba && (oh(e, c), (f = Ka().data.ru || null)) && ((g = e.element.href), (g = nh(g, "&rurl=", f)), ih(e, g));
    }
    0 < a.length && b.addEventListener("mouseover", hh(a));
  }
  function rh(a, b) {
    this.nd = b;
    this.Ba = !0;
    this.element = a;
    this.yc = null;
  }
  function ih(a, b) {
    16384 < b.length || ((a = a.element), (b = Ne(b)), void 0 !== b && (a.href = b));
  }
  var qh = /[&\?]nb=\d/;
  var sh = { nt: 0, sk: "si128" },
    th = { nt: 0, sk: "si177" };
  function uh(a) {
    var b = [];
    a = n(a.s || []);
    for (var c = a.next(); !c.done; c = a.next())
      (c = c.value),
        ("si128" != c.sk && "si177" != c.sk) ||
          !c.r ||
          (c.r.bac && b.push(c), c.r.h && !c.r.h.includes("%") && 1 < parseInt(c.r.h, 10) && b.push(c));
    return 1 === b.length
      ? b[0]
      : b.find(function (d) {
          return "si128" === d.sk;
        }) || null;
  }
  function vh(a, b, c, d, e, f, g) {
    f = void 0 === f ? [] : f;
    g = void 0 === g ? null : g;
    this.ae = ph;
    this.la = [];
    this.Nb = [];
    this.Ya = null;
    this.L = e;
    this.Ef = Yf(sg(b));
    var h = uh(b);
    null != h &&
      ((this.Ya = Mg({ s: [h], l: "si128" === h.sk ? sh : th }, {}, {}).rootElement), this.Ya.removeAttribute("id"));
    a = n(a);
    for (var k = a.next(); !k.done; k = a.next()) (k = k.value), this.la.push(Mg(b, c, k[k.adtype], d, e, ["b_"]));
    this.bd = b.at;
    this.rf = c;
    this.jf = d;
    this.Tb = g;
    a: if (((d = f), this.Ya))
      if ((h = ((h || {}).r || {}).rsi)) b = h;
      else {
        c = h = !1;
        if (4 == this.bd)
          for (b = n(b.s || []), d = b.next(); !d.done; d = b.next())
            if (((d = d.value), "si101" === d.sk)) {
              if ("100%" !== d.r.w) {
                b = [];
                break a;
              }
            } else {
              if ("si144" === d.sk) {
                c = h = !0;
                break;
              }
            }
        else (h = d.includes(2)), (c = d.includes(3));
        b = [];
        for (d = 0; d < this.la.length - 1; d++) b.push(d);
        h && b.unshift(-1);
        c && b.push(this.la.length - 1);
      }
    else b = [];
    this.Gd = b;
  }
  function wh(a, b) {
    var c = a.L.document.head,
      d = b.parentNode;
    c.appendChild(a.Ef);
    var e = b;
    a.Tb &&
      (c.appendChild(Yf(sg(a.Tb))),
      (e = Mg(a.Tb, a.rf, {}, a.jf, a.L)),
      (c = e.rootElement),
      (a.Nb = e.Od),
      d.replaceChild(c, b),
      (e = d.querySelector("#adBlock")),
      e.setAttribute("aria-label", document.title),
      e.setAttribute("role", "region"));
    b = 0;
    for (d = -1; d < a.la.length; d++)
      0 <= d && e.appendChild(a.la[d].rootElement),
        b < a.Gd.length && a.Gd[b] === d && (e.appendChild(a.Ya.cloneNode(!0)), b++);
    a = a = { Oa: Ma(Ka()), Za: a.bd };
    b = a.Oa;
    d = "";
    switch (a.Za) {
      case 1:
        d += Sg(b, "googAFS");
        break;
      case 2:
        d += Sg(b, "googAFShPLAs");
        break;
      default:
        d += Sg();
    }
    a = G(d);
    a = Yf(a);
    e.appendChild(a);
    a.setAttribute("data-render-complete", !0);
    return e;
  }
  vh.prototype.Ed = function (a) {
    var b = this,
      c = null,
      d = se();
    if ("MutationObserver" in window)
      return (
        new MutationObserver(function (e, f) {
          e = n(e);
          for (var g = e.next(); !g.done; g = e.next())
            "data-render-complete" == g.value.attributeName && (d.resolve(c), f.disconnect());
        }).observe(a.parentElement, { subtree: !0, attributes: !0, attributeFilter: ["data-render-complete"] }),
        (c = wh(this, a)),
        d.promise
          .then(function (e) {
            return te(b.L, e);
          })
          .then(function (e) {
            xh(b, e, b.L);
            return e;
          })
      );
    c = wh(this, a);
    this.L.setTimeout(function () {
      xh(b, c, b.L);
      Ka().data.icv2 && "requestAnimationFrame" in b.L
        ? b.L.requestAnimationFrame(function () {
            d.resolve(c);
          })
        : d.resolve(c);
    }, 0);
    return d.promise;
  };
  function xh(a, b, c) {
    for (var d = [], e = n(b.querySelectorAll("a[href]")), f = e.next(); !f.done; f = e.next())
      if (((f = f.value), "true" != f.getAttribute("data-notrack"))) {
        var g = f.getAttribute("data-nb") || void 0;
        d.push(new rh(f, g));
      }
    e = n(b.querySelectorAll("[data-pingback-type]"));
    f = e.next();
    for (g = {}; !f.done; g = { hb: g.hb }, f = e.next())
      (g.hb = f.value),
        g.hb.addEventListener(
          "click",
          (function (h) {
            return function () {
              Bc(xc(), h.hb.getAttribute("data-pingback-type"));
            };
          })(g)
        );
    e = n(b.querySelectorAll(".b_"));
    for (f = e.next(); !f.done; f = e.next()) f.value.setAttribute("data-bg", "true");
    a.ae(d, b, c.document.body);
    d = n(a.la);
    for (e = d.next(); !e.done; e = d.next()) (e = e.value), Og(c, e.Od || []), Ng(b, e.xf);
    0 < a.Nb.length && Og(c, a.Nb);
  }
  var zh = F(function (a, b, c, d, e, f) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? ph : d;
      e = void 0 === e ? yg : e;
      f = void 0 === f ? Ng : f;
      for (var g = n(b.querySelectorAll("[data-wta-bubble]")), h = g.next(); !h.done; h = g.next()) {
        h = h.value;
        var k = h.getAttribute("data-wta-bubble");
        if (k) {
          var l = a.document.getElementById(k);
          if (!l) throw Error("Could not find element with id: " + k);
          e(b, h, l);
        }
      }
      e = n(b.querySelectorAll("[data-pingback-type]"));
      g = e.next();
      for (h = {}; !g.done; h = { ib: h.ib }, g = e.next())
        (h.ib = g.value),
          h.ib.addEventListener(
            "click",
            (function (q) {
              return function () {
                Bc(xc(), q.ib.getAttribute("data-pingback-type"));
              };
            })(h)
          );
      e = n(b.querySelectorAll("[data-set-target]"));
      for (g = e.next(); !g.done; g = e.next())
        (g = g.value), c && (g.target = "_blank"), g.removeAttribute("data-set-target");
      c = n(b.querySelectorAll(".clicktrackedAd_js"));
      for (e = c.next(); !e.done; e = c.next()) (e = e.value), e.setAttribute("data-bg", "true"), f(b, e.id);
      f = [];
      c = n(b.querySelectorAll("a[href]"));
      for (e = c.next(); !e.done; e = c.next())
        (e = e.value),
          "true" !== e.getAttribute("data-notrack") &&
            ((g = e.getAttribute("data-nb") || void 0), f.push(new rh(e, g)));
      d(f, b, b);
      yh(a, b);
    }, "aPRS"),
    yh = F(function (a, b) {
      var c = b.querySelectorAll("[data-ad-container]");
      if (!(1 > c.length)) {
        var d = c[0],
          e = b.querySelectorAll('[data-hide-node-event="SCROLL_BEGIN"]'),
          f = b.querySelectorAll('[data-hide-node-event="SCROLL_END"]');
        c = 0 < e.length || 0 < f.length;
        var g = function () {
          for (
            var l = Math.abs(Math.round(d.scrollLeft)), q = Math.round(d.scrollTop), t = n(e), p = t.next();
            !p.done;
            p = t.next()
          ) {
            p = p.value;
            var r = !1;
            "auto" === d.style.overflowX ? (r = 0 !== l) : "auto" === d.style.overflowY && (r = 0 !== q);
            p.style.visibility = r ? "visible" : "hidden";
          }
          t = n(f);
          for (p = t.next(); !p.done; p = t.next())
            (p = p.value),
              (r = !0),
              "auto" === d.style.overflowX
                ? (r = l !== d.scrollWidth - d.clientWidth)
                : "auto" === d.style.overflowY && (r = q !== d.scrollHeight - d.clientHeight),
              (p.style.visibility = r ? "visible" : "hidden");
        };
        c &&
          (d.addEventListener("scroll", g),
          "function" === typeof ResizeObserver ? new ResizeObserver(g).observe(d) : a.addEventListener("resize", g));
        a = n(b.querySelectorAll("[data-scroll-displacement]"));
        var h = a.next();
        for (b = {}; !h.done; b = { Qa: b.Qa }, h = a.next()) {
          h = h.value;
          var k = h.getAttribute("data-scroll-displacement");
          if (k) {
            b.Qa = Number(k);
            if (isNaN(b.Qa)) throw Error("Scroll Displacement is not a number: " + k);
            h.addEventListener(
              "click",
              (function (l) {
                return function () {
                  "auto" === d.style.overflowX
                    ? (d.scrollLeft += l.Qa)
                    : "auto" === d.style.overflowY && (d.scrollTop += l.Qa);
                };
              })(b)
            );
          }
        }
        c && g();
      }
    }, "aSH");
  function Ah(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function Bh(a, b) {
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Ch(a, b) {
    for (var c = 0; 50 > c; ++c) {
      try {
        var d = !(!a.frames || !a.frames[b]);
      } catch (g) {
        d = !1;
      }
      if (d) return a;
      a: {
        try {
          var e = a.parent;
          if (e && e != a) {
            var f = e;
            break a;
          }
        } catch (g) {}
        f = null;
      }
      if (!(a = f)) break;
    }
    return null;
  }
  function Dh(a) {
    a = void 0 === a ? document : a;
    return a.createElement("img");
  }
  function Eh(a, b, c) {
    c = void 0 === c ? document : c;
    var d = Fd(c).createElement("SCRIPT");
    d.type = "text/javascript";
    b &&
      (void 0 !== d.onreadystatechange
        ? (d.onreadystatechange = function () {
            if ("complete" == d.readyState || "loaded" == d.readyState)
              try {
                b && b();
              } catch (f) {}
          })
        : (d.onload = b));
    Zg(d, ib(null === a ? "null" : void 0 === a ? "undefined" : a));
    var e = c.getElementsByTagName("head")[0];
    if (e)
      try {
        v.setTimeout(function () {
          e.appendChild(d);
        }, 0);
      } catch (f) {}
  }
  function Fh(a, b, c) {
    var d = this;
    this.Df = b;
    this.De = c;
    this.fa = "0";
    this.ld = null;
    this.L = a;
    this.ra = null;
    a && a.document && "complete" === a.document.readyState
      ? this.fb()
      : re(a, "load", function () {
          return d.fb();
        });
  }
  m = Fh.prototype;
  m.fb = function () {
    var a = this;
    if (!this.ra) {
      var b = new Gd(this.L.document).createElement("IFRAME");
      b.frameBorder = "0";
      b.style.height = 0;
      b.style.width = 0;
      b.style.position = "absolute";
      this.ra = b;
      this.L.document.body &&
        (this.L.document.body.appendChild(b),
        this.ra.contentDocument
          ? this.Bb()
          : re(this.ra, "load", function () {
              return a.Bb();
            }));
    }
  };
  m.Bb = function () {
    var a = this,
      b = this.ra;
    b &&
      (b = b.contentDocument ? b.contentDocument : b.contentWindow ? b.contentWindow.document : null) &&
      ((this.fa = "1"),
      b.open(),
      $g(b),
      b.close(),
      Eh(
        this.Df,
        function () {
          return a.Xb();
        },
        b
      ));
  };
  m.Xb = function () {
    var a = this.ra;
    if (a)
      if (((a = a.contentWindow), (this.fa = ""), a.botguard))
        if ((a = a.botguard.bg))
          try {
            this.ld = new a(this.De);
          } catch (b) {
            this.fa = "5";
          }
        else this.fa = "3";
      else this.fa = "2";
  };
  m.pc = function () {
    if (this.fa) return this.fa;
    var a = this.ld;
    if (!a) return "5";
    if (!a.invoke) return "4";
    var b = "";
    try {
      a.invoke(function (c) {
        b = c;
      });
    } catch (c) {
      return "6";
    }
    return "string" !== typeof b || 0 == b.length ? "6" : 3 > b.length ? "7" : 2550 < b.length ? "8" : b;
  };
  m.fb = B(Fh.prototype.fb, "BGcI");
  m.Bb = B(Fh.prototype.Bb, "BGpI");
  m.Xb = B(Fh.prototype.Xb, "BGcBV");
  m.pc = B(Fh.prototype.pc, "BGgBR");
  function Gh(a) {
    var b = {};
    a = n(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = c.at;
      b[d] = b[d] || {};
      if (c.c) {
        b[d].containerMap = b[d].containerMap || {};
        for (var e = n(c.c), f = e.next(); !f.done; f = e.next()) b[d].containerMap[f.value] = c;
      } else b[d]["default"] = c;
    }
    this.Sc = b;
  }
  function Hh(a, b, c) {
    var d = Ih[b];
    if (!a.Sc[d]) return null;
    b = a.Sc[d]["default"];
    return (a = a.Sc[d].containerMap) ? a[c] || b : b;
  }
  var Jh = {},
    Ih = ((Jh[0] = 1), (Jh[3] = 2), (Jh[2] = 4), Jh);
  var Kh = F(function (a) {
    if (!a) return {};
    var b = {};
    a = n(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = c.value;
      c = d.n;
      d = d.v;
      "t" === d ? (b[c] = !0) : "f" !== d && (b[c] = d);
    }
    return b;
  }, "cJCTM");
  var Lh = ia(["https://fonts.googleapis.com/css?family=", ""]),
    Mh = document;
  function Nh(a) {
    var b = !!w().data.arbwf,
      c = a;
    b &&
      (c = a.map(function (d) {
        return d + ":400,700";
      }));
    a = Oe(Lh, c.join("|"));
    (b = w().data.fd || null) && (a = db(a, { display: b }));
    return a;
  }
  function Oh() {
    this.nc = Ka().data.wftl || [];
    this.Ld = 0 < this.nc.length ? Nh(this.nc) : null;
    this.Ka = null;
    this.pd = !1;
  }
  function Ph(a, b) {
    if (a.Ld)
      try {
        var c = b.document,
          d = c.createElement("link");
        a: {
          var e = a.Ld;
          if (e instanceof cb) d.href = hb(e).toString();
          else {
            if (-1 === Yg.indexOf("stylesheet"))
              throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
            var f = Ne(e);
            if (void 0 === f) break a;
            d.href = f;
          }
          d.rel = "stylesheet";
        }
        c.head.appendChild(d);
      } catch (g) {
        a.Ka = g;
      }
  }
  function Qh(a) {
    if (!a.pd && Mh.fonts && "function" == typeof Mh.fonts.load) {
      a.pd = !0;
      a = n(a.nc);
      for (var b = a.next(), c = {}; !b.done; c = { vb: c.vb }, b = a.next()) {
        b = b.value;
        var d = "",
          e = b.split(":");
        2 === e.length && ((b = e[0]), "700" === e[1] && (d = "bold "));
        !(0 <= b.indexOf(" ")) || (b.startsWith("'") && b.endsWith("'")) || (b = "'" + b + "'");
        c.vb = d + "12px " + b;
        Mh.fonts.load(c.vb).catch(
          (function (f) {
            return function (g) {
              C.log((g instanceof Error ? g.message : String(g)) + " - " + f.vb, "mffl");
            };
          })(c)
        );
      }
    }
  }
  var Rh = null,
    Sh = { ads: 0, rss: 2, pbs: 3, ad_data: 8, sbs: 5 },
    Th = { text_ads: 0, pla_npack: 3, related_search: 2 },
    Uh = { statusAdult: "s.aDULT", statusFaillisted: "s.fL", statusTrademark: "s.tM", statusNeedsReview: "s.nR" },
    Vh = {},
    Wh = !1;
  function Xh(a) {
    !Rh && a.name && (Rh = (a = a.name.match(/master-(\d+)/)) && a[1] ? a[1] : null);
    Rh || (Rh = -1);
    return Rh;
  }
  Xh = B(Xh, "gMN");
  function Yh(a) {
    var b = "master-" + Xh(a);
    return pe(b, a);
  }
  Yh = B(Yh, "gMI");
  function Zh(a, b, c) {
    try {
      if (a.document.getElementsByTagName("html")) {
        var d = a.document.getElementsByTagName("html")[0];
        d && (!d.lang && b && (d.lang = b), !d.dir && c && (d.dir = c));
      }
    } catch (e) {}
  }
  Zh = B(Zh, "sSILD");
  function $h(a, b) {
    try {
      if (void 0 !== b) {
        var c = a.document.createElement("meta");
        c.httpEquiv = "origin-trial";
        c.content = b;
        a.document.head.appendChild(c);
      }
    } catch (d) {}
  }
  $h = B($h, "sOTOF");
  function ai(a, b) {
    var c = {};
    a = n(a);
    for (var d = a.next(); !d.done; d = a.next()) (d = d.value), (c[d.k] = d.v);
    b = n(b);
    for (d = b.next(); !d.done; d = b.next()) (a = d.value), (c[a.k] = a.v);
    return c;
  }
  function bi(a, b, c, d, e, f, g, h, k, l, q) {
    function t(u) {
      var D = de(b);
      kg(h, u, D);
      a.requestAnimationFrame &&
        a.requestAnimationFrame(function () {
          u.style.transform = "rotateZ(0deg)";
        });
    }
    var p = ai(g.r || [], k.r || []),
      r = (f = 2 === d[0].type) ? !1 : "_blank" == h.linkTarget,
      x = mg();
    cg(x, a.document.head);
    d = new vh(d, k, p, r, a, q, l);
    "iev" in k && id(b + ".eV", k.iev);
    ci(g, b);
    c = d.Ed(c).then(function (u) {
      t(u);
      id("wrs", !0);
      return u;
    });
    f &&
      h.relatedSearchUseResultCallback &&
      (c = c.then(function (u) {
        di(u, e);
        return u;
      }));
    return c;
  }
  bi = B(bi, "fSA");
  function ei(a, b, c, d, e, f, g, h) {
    Ka().xa() && (a.document.dir = "rtl");
    a = d[0].type;
    2 !== a ||
      w().P() ||
      ((e = g.rs_attr.t),
      h.horizontalFlow && (e += ":"),
      e &&
        ((e = G(
          '<h2 id=\'attrHeader\'><span class="lhHeader" id="attribution"><a target="_blank">' +
            qf(e) +
            "</a></span></h2>"
        )),
        cg(e, c)));
    bg(c, h);
    w().P() || ci(g, b);
    fi(d, c, h, f, a);
    b = de(b);
    kg(h, c, b);
  }
  ei = B(ei, "fA");
  function gi(a, b, c, d, e, f) {
    Zh(a, e, f);
    hi(a);
    Ph(c, a);
    Qh(c);
    a = a.document.head;
    null !== b && a.appendChild(b.cloneNode(!0));
    a.appendChild(d);
  }
  gi = B(gi, "pSRS");
  function ii(a, b, c, d, e, f, g, h) {
    if (b in Vh) {
      var k = null;
      try {
        (k = a.document.getElementById("adBlock")), (ke[b] = !0);
      } catch (t) {}
      if (null != k) {
        k.setAttribute("aria-label", document.title);
        k.setAttribute("role", "region");
        if (c) {
          for (var l = document.createDocumentFragment(); c.firstElementChild; ) l.appendChild(c.firstElementChild);
          k.appendChild(l);
        }
        var q = k;
        "requestAnimationFrame" in a
          ? a.requestAnimationFrame(function () {
              d(a, q, f);
            })
          : d(a, q, f);
        c = de(b);
        l = Ve(b, e);
        kg(l, k, c);
        g && l.relatedSearchUseResultCallback && di(k, e);
        h.bg && ((e = new Fh(a, h.bg.i, h.bg.p)), (a.csabg = e));
        delete Vh[b];
      }
    }
  }
  ii = B(ii, "pSRAH");
  function ji(a, b) {
    a = pe(a, b);
    if (null == a) return null;
    b = null;
    try {
      b = a.document.getElementById("adBlock");
    } catch (c) {}
    return null == b ? null : a;
  }
  ji = B(ji, "gFIAB");
  function ki(a, b, c, d, e, f) {
    var g = document.getElementById("ssrab"),
      h = Xh(a),
      k = Oa(),
      l = new Oh(),
      q = [],
      t = document.getElementById("ssr-boilerplate");
    if (0 < li().length) {
      null !== document.getElementById("ssrf") || Ph(l, window);
      Qh(l);
      var p = "master-" + h,
        r = Ve(p, a);
      ii(window, p, null, zh, a, "_blank" == r.linkTarget, "relatedsearch" === r.type, c);
    }
    for (p = 0; p < g.childElementCount; ) {
      r = g.children[p];
      var x = r.id.split("-");
      p += 1;
      if (!(2 > x.length)) {
        var u = x.shift();
        if ("ssrad" === u || "ssrs" === u || "ssrsb" == u) {
          x.push(h.toString());
          x = x.join("-");
          var D = Ve(x, a),
            L = "_blank" == D.linkTarget,
            da = "relatedsearch" === D.type,
            Z = ji(x, a);
          if (null == Z) q.push(x);
          else if ((g.removeChild(r), --p, "ssrs" === u)) gi(Z, t, l, r, d, e, f);
          else if ("ssrad" === u) ii(Z, x, r, zh, a, L, da, c);
          else if ("ssrsb" === u) {
            r = null;
            try {
              r = Z.document.getElementById("adBlock");
            } catch (fb) {}
            null != r && (ei(Z, x, r, c.sbs, a, b, c, D), (ke[x] = !0), delete Vh[x]);
          }
        }
      }
    }
    for (var La in Vh) 0 > q.indexOf(La) && (id(La + ".hA", !1), Pa(k) && hd(La + ".aC", 0), delete Vh[La]);
    0 == q.length && document.body.removeChild(g);
    gd();
    l.Ka && C.log(l.Ka, "lwf2");
  }
  ki = B(ki, "pSRA");
  function mi(a, b, c) {
    var d = Yh(a);
    if (d) {
      var e = d.document.documentElement.lang;
      var f = d.document.documentElement.dir;
      d.document.querySelector("head") && hi(d);
    }
    var g = (d = c.at) && 0 < d.length ? new Gh(d) : void 0,
      h = (d = c.act) ? new Gh(d) : void 0,
      k = Object.keys(Vh).slice(),
      l = new Oh();
    d = [];
    if (je())
      ki(
        a,
        b,
        c,
        e,
        f,
        "A4TVD0oDoRUnBZgYDdNVARYIPSmJgySEsYdPANRrrgQ7QitPsOty0eZIBsjlHFFJwDFU/8QmnRF2kL5xb4RP9Q4AAACEeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
        d.push(Promise.resolve());
    else
      for (var q in Vh) {
        var t = Vh[q],
          p = t[0].type,
          r = pe(q, a);
        if (null != r) {
          Zh(r, e, f);
          $h(r, void 0);
          var x = null;
          try {
            x = r.document.getElementById("adBlock");
          } catch (Z) {}
          if (null != x) {
            x.setAttribute("aria-label", document.title);
            x.setAttribute("role", "region");
            w().data.icelae && hi(r);
            Ph(l, r);
            Qh(l);
            var u = 2 == p,
              D = 5 == p,
              L = Ve(q, a),
              da = null;
            g && Hh(g, p, L.container)
              ? ((da = Hh(g, p, L.container)),
                (p = h ? Hh(h, p, L.container) : null),
                u && lg(L, t),
                (u = ni(q, k)),
                (da = bi(r, q, x, t, a, b, c, L, da, p, u)))
              : (D || C.log(p, "unxLRB"), (da = Promise.resolve()), ei(r, q, x, t, a, b, c, L));
            c.bg && ((t = new Fh(r, c.bg.i, c.bg.p)), (r.csabg = t));
            d.push(da);
            ke[q] = !0;
            delete Vh[q];
          }
        }
      }
    l.Ka && C.log(l.Ka, "lwf2");
    if (w().data.epte) for (b = n(k), c = b.next(); !c.done; c = b.next()) (c = pe(c.value, a)), null != c && oi(c);
    return ve(d).then(function () {
      var Z = z("_optimizeFrameMeasurement");
      pi(a, !!g || Z, Z);
    });
  }
  mi = B(mi, "mPAASH");
  var qi = "function" === typeof ResizeObserver,
    ri = null;
  function pi(a, b, c) {
    function d() {
      var e = oe(a).frames;
      if (qi) {
        ri && ri.disconnect();
        var f = c;
        ri = new ResizeObserver(function () {
          f ? (f = !1) : Le(a);
        });
        var g = n(e);
        for (e = g.next(); !e.done; e = g.next()) ri.observe(e.value.document.body);
      } else
        for (g = n(e), e = g.next(); !e.done; e = g.next())
          e.value.onresize = function () {
            Le(a);
          };
    }
    c || d();
    b
      ? Le(a)
      : setTimeout(function () {
          Le(a);
        }, 0);
    c && setTimeout(d, 0);
  }
  function ni(a, b) {
    var c = a.split("-");
    a = a.split("-");
    c.splice(c.length - 1, 0, "a");
    c = c.join("-");
    a.splice(a.length - 1, 0, "b");
    a = a.join("-");
    var d = [];
    b.includes(c) && d.push(2);
    b.hasOwnProperty(a) && d.push(3);
    return d;
  }
  function si(a, b, c) {
    var d = Math.max.apply(Math, a);
    a = Math.min.apply(Math, a);
    if (d - a > Zd) for (d = 0; d < b.length; d++) c[b[d]] = null;
    return c;
  }
  si = B(si, "pBDF");
  function ti(a, b) {
    for (var c = {}, d = !1, e = [], f = [], g = n(Object.keys(a)), h = g.next(); !h.done; h = g.next())
      if (((h = h.value), h in b)) {
        var k = b[h],
          l = a[h];
        "undefined" != typeof l &&
          ((l = be(h, k, l)), null != l && ((c[h] = l), k.g == $d && (e.push(l), f.push(h)), (d = !0)));
      }
    0 < e.length && (c = si(e, f, c));
    return d ? c : null;
  }
  ti = B(ti, "vO");
  function ui(a, b) {
    return (ce(a) || /^master-\d+$/.test(a)) && "object" == typeof b;
  }
  ui = B(ui, "iPABO");
  function vi(a) {
    try {
      if (!a) throw Error("Null, undefined or empty window.name.");
      var b = JSON.parse(a);
    } catch (d) {
      var c = d.message;
      a && (c = "Invalid window.name: " + a.split(",")[0]);
      C.log(c, "pNAO");
    }
    return b || {};
  }
  vi = B(vi, "pNAO");
  function wi(a, b) {
    var c = {},
      d;
    for (d in a) {
      var e = a[d];
      "name" == d
        ? (c[d] = ce(e) || /^master-\d+$/.test(e) ? e : null)
        : ui(d, e) && ((e = ti(e, b)), (c[d] = e), (Vh[d] = []));
    }
    return c;
  }
  wi = B(wi, "vNAO");
  function xi(a, b, c, d) {
    var e = b.horizontalFlow ? -1 : b.columns;
    if (2 <= e && !(0 >= e)) {
      for (var f = [], g = 0, h = 0; h < e; h++)
        for (var k = Math.ceil((a.length - g) / (e - h)), l = 0; l < k; l++) f[l * e + h] = a[g++];
      a = f;
    }
    f = void 0 === d ? !1 : d;
    d = !b.horizontalFlow;
    b = void 0 === f ? !1 : f;
    f = n(a);
    for (g = f.next(); !g.done; g = f.next()) (g = g.value), (g.t = G(g.t));
    if (c.Cd && 1 == e) {
      b = a.length;
      d = c.Cd.split(",");
      e = [];
      for (f = 0; f < b; f++) e.push(d[f % d.length]);
      b = c.Ze;
      h = '<div class="' + J("d_") + '">';
      c = a.length;
      for (d = 0; d < c; d++) {
        f = a[d];
        g = void 0;
        k =
          '<div class="' +
          J("e_") +
          '" style="border-' +
          (b ? "right" : "left") +
          "-color: " +
          J(K(e[d])) +
          '"><a href="' +
          J(Lf(f.l)) +
          '" class="' +
          J("c_") +
          ' popstripeRs" data-notrack="true" target="_top">' +
          (f.furl
            ? '<div class="' + J("f_") + '"><img src="' + J(Qf(f.furl)) + '" class="' + J("g_") + '"></div>'
            : "");
        var q = f.t;
        l = G;
        if (0 < ("" + xf("" + q)).length) {
          var t = void 0;
          var p = q;
          var r = pf(p);
          if (null != r) p = r;
          else {
            t = t || (null != p && p.N === cf);
            var x = (r = 0),
              u = !1;
            t = Xe(p + "", t).split(af);
            for (var D = 0; D < t.length; D++) {
              var L = t[D];
              Ze.test(Xe(L)) ? (r++, x++) : $e.test(L) ? (u = !0) : Ye.test(Xe(L)) ? x++ : bf.test(L) && (u = !0);
            }
            r = 0 == x ? (u ? 1 : 0) : 0.4 < r / x ? -1 : 1;
            null != p && void 0 !== p.R && (p.R = r);
            p = r;
          }
          q = '<span dir="' + (0 > p ? "rtl" : "ltr") + '">' + qf(q) + "</span>";
        } else q = "";
        l = l(q);
        h +=
          k +
          l +
          '<div class="' +
          J("h_") +
          '" style="background-image: url(' +
          J(Qf(null != (g = f.adIconUrl) ? g : "//www.gstatic.com/domainads/images/chevron-white.png")) +
          ')"></div></a></div>';
      }
      a = G(h + "</div>");
    } else {
      f = '<table cellspacing="0" cellpadding="0"' + (2 <= e || d ? ' width="100%"' : "") + "><tbody><tr>";
      c = a.length;
      for (d = 0; d < c; d++)
        (g = a[d]),
          (f +=
            (0 != d && 0 < e && 0 == d % e ? "</tr><tr>" : "") +
            '<td class="col' +
            (d == a.length - 1 ? " l" : "") +
            '"' +
            (2 <= e ? ' width="' + J(100 / e) + '%"' : "") +
            ">"),
          (h = 0 > e || (2 <= e && d < e)),
          (h =
            '<div class="ad' +
            (0 == d ? " f" : "") +
            (h ? " fr" : "") +
            (d == a.length - 1 ? " l" : "") +
            (!h && 2 <= e && d >= a.length - (a.length % e ? a.length % e : e) ? " lr" : "") +
            '"><div class="' +
            J("a_") +
            " " +
            J("b_") +
            ' radlinkC">'),
          (k = g),
          (k = G(k.adIconUrl ? '<img class="adIcon" src="' + J(Qf(k.adIconUrl)) + '"/>' : "")),
          (h = h + k + '<div class="adD">'),
          b
            ? ((k = Bf("" + Lf(g.l))),
              (g = zf("" + qf(g.t))),
              (g = G(
                '<div class="adStd"><a href="' +
                  J(Lf(k)) +
                  '" class="radlinkButtonLink" data-notrack="true" target="_top">' +
                  G(
                    '<span style="height:20px;line-height:20px;width:20px;margin-right:5px"><svg class="radlinkSvg" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>'
                  ) +
                  g +
                  "</a></div>"
              )))
            : ((k = Bf("" + Lf(g.l))),
              (g = zf("" + qf(g.t))),
              (g = G(
                '<div class="adStd"><a href="' +
                  J(Lf(k)) +
                  '" class="' +
                  J("c_") +
                  '" data-notrack="true" target="_top">' +
                  g +
                  "</a></div>"
              ))),
          (f += h + g + "</div></div></div></td>");
      a = G(f + "</tr></tbody></table>");
    }
    return a;
  }
  xi = B(xi, "cRSN");
  function fi(a, b, c, d, e) {
    if (!(0 >= a.length)) {
      var f = null;
      if (Oa().data.cucai && !w().P()) {
        var g = "https:" === window.location.protocol;
        null != c.adIconUrl && 0 < c.adIconHeight && 0 < c.adIconWidth && fg(a, c.adIconUrl, g);
      }
      w().P() || lg(c, a);
      d = { Ze: Ka().xa(), Cd: d.popstripeRs };
      if (2 === e && !w().P()) f = xi(a, c, d);
      else if (5 === e) {
        d = c.resultsPageBaseUrl;
        if (!d) throw E("resultsPageBaseUrl needs to be set for searchbox blocks.");
        f = a[0].afdt;
        a = a[0].label;
        e = ge(d);
        null != c.personalizedAds && (e.pcsa = "" + c.personalizedAds);
        c = '<div class="adStd"><form action="' + J(Lf(d)) + '" target="_top" method="get" accept-charset="UTF-8">';
        d = wf(e);
        g = d.length;
        for (var h = 0; h < g; h++) {
          var k = d[h];
          c += '<input type="hidden" name="' + J(k) + '" value="' + J(e[k]) + '"/>';
        }
        c +=
          '<table class="sb-table" cellspacing="0" cellpadding="0"><tbody><tr><td class="sbi-td"><input class="sbi" type="text" name="query" maxlength="63" title="Enter a search" autocomplete="off"/></td><td><input class="sbb" type="submit" value="' +
          (a ? J(a) : "Search") +
          '"/></td></tr></tbody></table><input type="hidden" name="afdToken" value="' +
          J(f) +
          '"/><input type="hidden" name="search" value="1"/></form></div>';
        f = G(c);
      }
      c = c = { Oa: Ma(Ka()) };
      c = G(Sg(c.Oa, "googAFS"));
      cg(c, b);
      f && cg(f, b);
    }
  }
  fi = B(fi, "cAN");
  function yi(a, b, c) {
    var d = zi(a),
      e = Xh(b),
      f = Oa(),
      g = Ka(),
      h = w();
    g.data.qi && fd("qi", g.data.qi || null, bd.j);
    var k = g.data.eawp || null;
    k && fd("eawp", k, bd.j);
    (h = !!h.data.sbn) && id("sbn", h);
    h = !1;
    if (!je())
      for (k = 0; k < d.length; k++) {
        var l = d[k].adtype,
          q = void 0 != l,
          t = d[k],
          p = t.fn;
        p.startsWith("slave-0") && (Wh = !0);
        p = p + "-" + e;
        Vh[p] || (C.log(p, "pAJ2"), (Vh[p] = []));
        Vh[p].push(t);
        q && ((t = t[l]), (h = !0));
      }
    if (je()) {
      b = document.getElementById("ssrab");
      b = n(b.children);
      for (g = b.next(); !g.done; g = b.next()) {
        g = g.value;
        var r = g.id.split("-");
        if (!(2 > r.length) && "ssrad" === r.shift()) {
          r.push(e.toString());
          r = r.join("-");
          var x = parseInt(g.getAttribute("data-num-ads"), 10) || 0;
          id(r + ".hA", 0 < x);
          Pa(f) && hd(r + ".aC", x);
          Ai([g], r);
          ci(a, r);
        }
      }
      b = li();
      0 < b.length &&
        ((g = "master-" + e),
        (r = b.reduce(function (D, L) {
          return D + parseInt(L.getAttribute("data-num-ads"), 10);
        }, 0)),
        id(g + ".hA", 0 < r),
        Pa(f) && hd(g + ".aC", r),
        Ai(b, g),
        ci(a, g));
    } else
      for (r in Vh)
        if (
          ((a = Vh[r]),
          (d = a.length),
          0 < d && !h && ((k = a[0]), 3 == k.type && (d = k.plas ? k.plas.length : 0)),
          Wh && /^master-\d+$/.test(r))
        )
          0 < d && C.log(a.length, "pAJ3"), delete Vh[r];
        else if ((id(r + ".hA", 0 < d), Pa(f) && hd(r + ".aC", d), 1 > d)) {
          if ((a = pe(r, b)))
            try {
              (x = a.document.getElementById("adBlock")) && cg(Pg({ Oa: Ma(g) }), x);
            } catch (D) {}
          delete Vh[r];
        }
    for (var u in Uh) c[u] && id(Uh[u], !0);
    (u = c.statusErrorCode) && hd("s.eC", parseInt(u, 10));
    id("s.b", !!c.statusBlocked);
    Ka().data.isi && id("s.iSI", !0);
    Pa(f) && id("aD." + e, !0);
    gd();
  }
  yi = B(yi, "pAJ");
  function zi(a) {
    var b = [],
      c;
    for (c in Sh) {
      var d = a[c];
      if (d) {
        for (var e = Sh[c], f = 0; f < d.length; f++) d[f].type = "ad_data" == c ? Th[d[f].adtype] : e;
        b = b.concat(d);
      }
    }
    return b;
  }
  zi = B(zi, "cAA");
  function Bi(a) {
    return Kh(a);
  }
  Bi = B(Bi, "cPATO");
  function Ci(a, b, c) {
    (qi && z("_optimizeFrameMeasurement")) ||
      (window.sPH = function () {
        Le(a);
      });
    window.mPAASH = function () {
      mi(a, b, c);
    };
    return mi(a, b, c);
  }
  Ci = B(Ci, "sCFC");
  function Di(a, b) {
    var c = Ga(),
      d = Bi(c.caps),
      e = wi(b, a);
    yi(c, e, d);
    a = Ci(e, d, c);
    Ra().data.hm &&
      window.addEventListener("message", function (f) {
        f = f.data.split(":");
        2 == f.length && "orientation" == f[0] && Le(e);
      });
    return a;
  }
  Di = B(Di, "raa");
  function Ei(a, b) {
    Fi();
    return Di(a.yb, b);
  }
  Ei = B(Ei, "init");
  function li() {
    var a = document.getElementById("adBlock"),
      b = a.querySelector("#ssrad-master"),
      c = a.querySelectorAll('[id^="ssrad-master-"]');
    a = [];
    b && a.push(b);
    b = n(c);
    for (c = b.next(); !c.done; c = b.next()) (c = c.value) && a.push(c);
    return a;
  }
  function di(a, b) {
    a = n(a.getElementsByTagName("a"));
    for (var c = a.next(), d = {}; !c.done; d = { Cb: d.Cb, Db: d.Db }, c = a.next())
      (c = c.value),
        (d.Cb = Wd(c.href, encodeURIComponent(b[b.name].resultsPageQueryParam))),
        (d.Db = Wd(c.href, encodeURIComponent("rsToken"))),
        d.Cb && d.Db
          ? (c.setAttribute("target", "_self"),
            (c.href = "#"),
            c.addEventListener("click", function (e) {
              return e.preventDefault();
            }),
            hg(
              c,
              (function (e) {
                return function () {
                  fd("rsrc", { q: e.Cb, rsToken: e.Db, uid: Date.now() }, cd.j);
                  gd();
                };
              })(d)
            ))
          : C.log("Could not parse query or rsToken from url: " + c.href, "rRHWC");
  }
  di = B(di, "rRHWC");
  function Fi() {
    fd("it", document.title, bd.j);
    gd();
  }
  Fi = B(Fi, "setTitle");
  function oi(a) {
    function b(d, e) {
      return { type: d, touches: e };
    }
    function c(d) {
      var e = {},
        f;
      for (f in d) "target" !== f && (e[f] = d[f]);
      return e;
    }
    a.document.addEventListener("touchstart", function (d) {
      var e = [].concat(ka(d.touches)).map(function (f) {
        return c(f);
      });
      window.parent.postMessage(b(d.type, e), "*");
    });
    a.document.addEventListener("touchmove", function (d) {
      var e = [].concat(ka(d.touches)).map(function (f) {
        return c(f);
      });
      window.parent.postMessage(b(d.type, e), "*");
    });
    a.document.addEventListener("touchend", function (d) {
      var e = [].concat(ka(d.touches)).map(function (f) {
        return c(f);
      });
      window.parent.postMessage(b(d.type, e), "*");
    });
    a.document.addEventListener("touchcancel", function (d) {
      var e = [].concat(ka(d.touches)).map(function (f) {
        return c(f);
      });
      window.parent.postMessage(b(d.type, e), "*");
    });
  }
  oi = B(oi, "pTETPP");
  function hi(a) {
    var b = document.createElement("meta");
    b.httpEquiv = "origin-trial";
    b.content =
      "A4TVD0oDoRUnBZgYDdNVARYIPSmJgySEsYdPANRrrgQ7QitPsOty0eZIBsjlHFFJwDFU/8QmnRF2kL5xb4RP9Q4AAACEeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9";
    a.document.head.appendChild(b);
  }
  hi = B(hi, "aNCOT");
  function Ai(a, b) {
    var c = null;
    a = n(a);
    for (var d = a.next(); !d.done; d = a.next())
      if (
        ((d = d.value),
        d.hasAttribute("data-is-ev") && ((d = parseInt(d.getAttribute("data-is-ev"), 10)), null === c || d > c))
      )
        c = d;
    null !== c && id(b + ".eV", 1 === c);
  }
  Ai = B(Ai, "sIEVFS");
  function ci(a, b) {
    "tp" in a && fd(b + ".ptp", a.tp, cd.j);
  }
  ci = B(ci, "sPTP");
  function Gi(a, b) {
    this.ea = a;
    this.ub = b;
  }
  Gi.prototype.H = function () {
    var a = this.ea.H() + " (one by itself, or multiple in an Array";
    this.ub && (a += " with fewer than " + (this.ub + 1) + " elements");
    return a + ")";
  };
  Gi.prototype.D = function (a) {
    a = Array.isArray(a) ? a : [a];
    if (this.ub && a.length > this.ub) return null;
    for (var b = [], c = 0; c < a.length; c++) {
      var d = this.ea.D(a[c]);
      if (null == d) return null;
      b.push(d);
    }
    return 0 == b.length ? null : b;
  };
  Gi.prototype.G = function (a) {
    a = this.D(a);
    return null == a || 1 > a.length ? null : this.ea.G(a[0]);
  };
  function Hi() {}
  Hi.prototype.H = function () {
    return "true, false";
  };
  Hi.prototype.D = function (a) {
    return 0 === a || 1 === a
      ? 1 === a
      : "true" == a || "on" == a || 1 == a
      ? !0
      : "false" == a || "off" == a || !1 === a
      ? !1
      : null;
  };
  Hi.prototype.G = function (a) {
    a = this.D(a);
    return null == a ? null : a ? 1 : 0;
  };
  var N = new Hi();
  function O(a, b) {
    this.Ma = Math.ceil(a);
    this.La = Math.floor(b);
  }
  O.prototype.H = function () {
    return this.Ma + " - " + this.La;
  };
  O.prototype.D = function (a) {
    a = parseInt(a, 10);
    return a >= this.Ma && a <= this.La ? a : null;
  };
  O.prototype.G = function (a) {
    return this.D(a);
  };
  function Ii() {}
  Ii.prototype.H = function () {
    return "A function";
  };
  Ii.prototype.D = function (a) {
    return "function" === typeof a ? !0 : !1;
  };
  Ii.prototype.G = function () {
    return null;
  };
  var Ji = new Ii();
  var Ki = /#(.)(.)(.)/;
  function Li(a) {
    if (!Mi.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Ki, "#$1$1$2$2$3$3"));
    return a.toLowerCase();
  }
  var Mi = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Ni = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
  var Oi = {
    black: "#000000",
    blue: "#0000ff",
    darkorange: "#ff8c00",
    darkred: "#8b0000",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    grey: "#808080",
    orange: "#ffa500",
    red: "#ff0000",
    royalblue: "#4169e1",
    skyblue: "#87ceeb",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
  };
  function Pi(a) {
    this.cd = a;
  }
  Pi.prototype.H = function () {
    var a = "A hexadecimal color string";
    this.cd && (a += " or 'transparent'");
    return a;
  };
  Pi.prototype.D = function (a) {
    var b = lb("" + a).toLowerCase();
    if (this.cd && "transparent" == b) return "transparent";
    if (Oi[b]) return Oi[b];
    a = null;
    try {
      a = Li("#" == b.charAt(0) ? b : "#" + b);
    } catch (q) {}
    if (!a)
      try {
        a: {
          var c = b.match(Ni);
          if (c) {
            var d = Number(c[1]),
              e = Number(c[2]),
              f = Number(c[3]);
            if (0 <= d && 255 >= d && 0 <= e && 255 >= e && 0 <= f && 255 >= f) {
              var g = [d, e, f];
              break a;
            }
          }
          g = [];
        }
        if (!g.length) throw Error(b + " is not a valid RGB color");
        var h = g[0],
          k = g[1],
          l = g[2];
        h = Number(h);
        k = Number(k);
        l = Number(l);
        if (h != (h & 255) || k != (k & 255) || l != (l & 255))
          throw Error('"(' + h + "," + k + "," + l + '") is not a valid RGB color');
        k = (h << 16) | (k << 8) | l;
        a = 16 > h ? "#" + (16777216 | k).toString(16).slice(1) : "#" + k.toString(16);
      } catch (q) {}
    return a;
  };
  Pi.prototype.G = function () {
    return null;
  };
  var Qi = new Pi(!1),
    Ri = new Pi(!0);
  function Si(a) {
    this.ea = a;
  }
  Si.prototype.H = function () {
    return this.ea.H() + " (one or more, comma separated)";
  };
  Si.prototype.D = function (a) {
    a = Ti(a);
    for (var b = [], c = 0; c < a.length; c++) {
      var d = this.ea.D(a[c]);
      null != d && b.push(d);
    }
    return 0 == b.length ? null : b.join(",");
  };
  Si.prototype.G = function (a) {
    a = Ti(a);
    for (var b = 0; b < a.length; b++) {
      var c = this.ea.G(a[b]);
      if (null != c) return c;
    }
    return null;
  };
  function Ti(a) {
    if ("string" !== typeof a) return [];
    a = a.split(",");
    for (var b = [], c = 0; c < a.length; c++) b.push(lb(a[c]));
    return b;
  }
  function Ui(a, b) {
    b = void 0 === b ? 0 : b;
    this.Vc = a;
    this.Wc = {};
    for (a = 0; a < this.Vc.length; a++) {
      var c = this.Vc[a];
      this.Wc[c.toLowerCase()] = new Vi(c, b + a);
    }
  }
  Ui.prototype.H = function () {
    return this.Vc.join(", ") + " (case insensitive)";
  };
  function Wi(a, b) {
    if (!b || "string" !== typeof b) return Xi;
    b = b.toLowerCase();
    return a.Wc.hasOwnProperty(b) ? a.Wc[b] : Xi;
  }
  Ui.prototype.D = function (a) {
    return Wi(this, a).kf;
  };
  Ui.prototype.G = function (a) {
    return Wi(this, a).id;
  };
  function Vi(a, b) {
    this.kf = a;
    this.id = b;
  }
  var Xi = new Vi(null, null);
  var Yi = /^\d+px$/i,
    Zi = /^\d+%$/,
    $i = /^[0-9]+\.[0-9]{1,}$/;
  function aj() {}
  aj.prototype.H = function () {
    return "Width in px (e.g. '500px') or 'auto'";
  };
  aj.prototype.D = function (a) {
    var b = bj(a);
    return null != b ? b + "px" : "string" !== typeof a || ("auto" != a && !Zi.test(a)) ? null : a;
  };
  aj.prototype.G = function (a) {
    return bj(a);
  };
  function bj(a) {
    var b;
    (b = "number" === typeof a) || (b = "string" === typeof a && (!/[^0-9]/.test(a) || $i.test(a) || Yi.test(a)));
    return b ? ((a = parseInt(a, 10)), isNaN(a) ? null : a) : null;
  }
  var cj = new aj();
  function dj() {}
  dj.prototype.H = function () {
    return "A string";
  };
  dj.prototype.D = function (a) {
    return "string" === typeof a ? a : null;
  };
  dj.prototype.G = function () {
    return null;
  };
  var ej = new dj();
  var fj = /^[0-9a-zA-Z]*$/;
  function gj() {}
  gj.prototype.G = function () {
    return null;
  };
  gj.prototype.H = function () {
    return "A style id";
  };
  gj.prototype.D = function (a) {
    return ("string" === typeof a || ("number" === typeof a && !Number.isNaN(a))) && fj.test(a) ? "" + a : null;
  };
  function hj() {}
  hj.prototype.H = function () {
    return "An http(s) url";
  };
  hj.prototype.D = function (a) {
    return "string" === typeof a && ij.test(a) ? a : null;
  };
  hj.prototype.G = function () {
    return null;
  };
  var ij = /^((https?):)?\/\/([a-zA-Z0-9~!@#\$&\*\(\)_\+\-=:;',\.\?\/%]*)$/,
    jj = new hj();
  var kj = new O(2, 400),
    lj = new O(0, 400),
    mj = new O(8, 50),
    nj = new Si(
      new Ui(
        "verdana;arial;tahoma;times new roman;georgia;trebuchet ms;meiryo;ms gothic;roboto;helvetica neue".split(";"),
        1
      )
    ),
    oj = new Si(new Ui(["right", "left", "top", "bottom"])),
    P = {},
    pj =
      ((P.adsafe = { g: new Ui(["off", "low", "med", "high"]), zc: !0 }),
      (P.adtest = { g: N, zc: !0 }),
      (P.adTest = { g: N, zc: !0 }),
      (P.clicktrackUrl = { g: new Gi(jj) }),
      (P.container = { g: ej }),
      (P.styleId = { g: new gj() }),
      (P.personalizedAds = { g: N }),
      (P.personalisedAds = { g: N }),
      (P.adpage = {}),
      (P.adPage = {}),
      (P.adsResponseCallback = {}),
      (P.bgresponse = {}),
      (P.channel = {}),
      (P.cmpSdkId = {}),
      (P.container = {}),
      (P.cref = {}),
      (P.cx = {}),
      (P.deb = {}),
      (P.debug = {}),
      (P.domainName = {}),
      (P.e = {}),
      (P.expflags = {}),
      (P.fakeads = {}),
      (P.fcap = {}),
      (P.fexp = {}),
      (P.forceEx = {}),
      (P.gcsc = {}),
      (P.gdprApplies = {}),
      (P.iframeHeightCallback = {}),
      (P.jsSrc = {}),
      (P.masterNumber = {}),
      (P.ms = {}),
      (P.noAdLoadedCallback = {}),
      (P.number = {}),
      (P.propertyCode = {}),
      (P.pubId = {}),
      (P.query = {}),
      (P.role = {}),
      (P.rowkeyV2 = {}),
      (P.sbsignals = {}),
      (P.settingsId = {}),
      (P.slaveNumber = {}),
      (P.source = {}),
      (P.source_ip = {}),
      (P.tcString = {}),
      (P.uideb = {}),
      (P.userAgent = {}),
      (P.usPrivacy = {}),
      (P.uuld = {}),
      (P.sct = {}),
      (P.sc_status = {}),
      (P.adLoadedCallback = { g: Ji }),
      (P.adRequestUrlParams = { g: ej }),
      (P.hl = { g: ej }),
      (P.cpp = {}),
      (P.adfiliateWp = { g: ej }),
      (P.hotswaps = {}),
      P),
    Q = {},
    qj =
      ((Q.colorText = { g: Qi, C: !0, A: !0 }),
      (Q.colorTitleLink = { g: Qi, C: !0, A: !0 }),
      (Q.colorBorder = { g: Qi, C: !0, A: !0 }),
      (Q.colorAttribution = { g: Qi, A: !0 }),
      (Q.fontFamily = { g: nj, C: !0, A: !0 }),
      (Q.fontFamilyAttribution = { g: nj, A: !0 }),
      (Q.titleBold = { g: N, C: !0, A: !0 }),
      (Q.rolloverLinkBold = { g: N, C: !0, A: !0 }),
      (Q.rolloverLinkColor = { g: Qi, C: !0, A: !0 }),
      (Q.rolloverLinkBackgroundColor = { g: Qi, C: !0, A: !0 }),
      (Q.rolloverLinkUnderline = { g: N, C: !0, A: !0 }),
      (Q.noTitleUnderline = { g: N, A: !0 }),
      (Q.adBorderSelections = { g: oj, A: !0 }),
      (Q.borderSelections = { g: oj, A: !0 }),
      (Q.position = { g: new Ui(["top", "right", "bottom"]) }),
      (Q.cseGoogleHosting = { g: new Ui(["full", "iframe", "partner"]) }),
      (Q.adIconUrl = { g: jj, A: !0 }),
      (Q.adIconWidth = { g: kj, A: !0 }),
      (Q.adIconHeight = { g: kj, A: !0 }),
      (Q.adIconSpacingAbove = { g: lj, C: !0, A: !0 }),
      (Q.adIconSpacingBefore = { g: lj, A: !0 }),
      (Q.adIconSpacingAfter = { g: lj, A: !0 }),
      (Q.adIconSpacingBelow = { g: lj, A: !0 }),
      (Q.lineHeightTitle = { g: mj, A: !0 }),
      (Q.waitForAds = { g: N }),
      (Q.heightConstrained = { g: N, ca: "hc" }),
      (Q.width = { g: cj, ca: "wi", C: !0 }),
      (Q.attributionSpacingBelow = { g: new O(0, 40), A: !0 }),
      (Q.resultsPageBaseUrl = { g: jj }),
      (Q.columns = { g: new O(1, 20), Y: 1 }),
      (Q.columnSpacing = { g: new O(2, 100) }),
      (Q.horizontalFlow = { g: N }),
      (Q.horizontalAlignment = { g: new Ui(["center", "left", "right"]), Y: "left" }),
      (Q.resultsPageQueryParam = { g: ej, Y: "query" }),
      (Q.rurlOverride = { g: ej }),
      (Q.terms = { g: ej }),
      (Q.kw = { g: ej }),
      (Q.referrerAdCreative = { g: ej }),
      (Q.relatedSearchResultClickedCallback = { g: Ji }),
      (Q.relatedSearchUseResultCallback = { g: N }),
      (Q.adstyle = {}),
      (Q.afdToken = {}),
      (Q.attmas = {}),
      (Q.gcs = {}),
      (Q.gcse_nc = {}),
      (Q.gl = {}),
      (Q.glp = {}),
      (Q.gm = {}),
      (Q.gr = {}),
      (Q.ie = {}),
      (Q.maxTermLength = {}),
      (Q.maxTop = {}),
      (Q.minTop = {}),
      (Q.numRepeated = {}),
      (Q.oe = {}),
      (Q.queryContext = {}),
      (Q.queryLink = {}),
      (Q.referrer = {}),
      (Q.relatedSearches = {}),
      (Q.visibleUrlsCallback = {}),
      Q);
  function rj() {}
  rj.prototype.H = function () {
    return "A web font";
  };
  rj.prototype.D = function (a) {
    return "string" !== typeof a || /[^a-zA-Z0-9 ]/.test(a) ? null : a;
  };
  rj.prototype.G = function () {
    return null;
  };
  var sj = new rj();
  var tj = new O(8, md),
    uj = {},
    vj =
      ((uj.type = { g: new Ui(["ads", "textads", "relatedsearch", "searchbox", "dynamic"]) }),
      (uj.linkTarget = { g: new Ui(["_top", "_blank"]), Y: "_blank", C: !0 }),
      (uj.verticalSpacing = { g: new O(2, 24) }),
      (uj.fontSizeTitle = { g: $d, C: !0, Y: 18 }),
      (uj.fontSizeAttribution = { g: $d, C: !0, Y: 13 }),
      uj),
    R = {},
    wj =
      ((R.colorAdSeparator = { g: Qi, A: !0 }),
      (R.rolloverAdBackgroundColor = { g: Ri, C: !0 }),
      (R.colorBackground = { g: Ri, C: !0 }),
      (R.hideSearchInputBorder = { g: N }),
      (R.hideSearchButtonBorder = { g: N }),
      (R.colorSearchBox = { g: Ri }),
      (R.colorSearchButton = { g: Ri }),
      (R.colorSearchButtonText = { g: Ri }),
      (R.widthSearchInput = { g: new O(1, 1e3), C: !0 }),
      (R.widthSearchButton = { g: new O(100, 1e3), C: !0 }),
      (R.fontSizeSearchInput = { g: tj }),
      (R.fontSizeSearchButton = { g: tj }),
      (R.heightSearchInput = { g: new O(1, 50) }),
      (R.heightSearchButton = { g: new O(1, 50) }),
      (R.colorSearchButtonBorder = { g: Ri }),
      (R.widthSearchButtonBorder = { g: new O(0, 5) }),
      (R.radiusSearchInputBorder = { g: new O(0, 20) }),
      (R.attributionBold = { g: N }),
      (R.attributionUppercase = { g: N }),
      (R.titleUppercase = { g: N }),
      (R.webFontFamily = { g: sj }),
      (R.webFontFamilyAttribution = { g: sj }),
      (R.uiOptimize = { g: N }),
      (R.ui_optimize = { g: N }),
      (R.adBorderWidth = { g: new O(0, 20) }),
      (R.relatedSearchTargeting = { g: new Ui($a(ae || [])) }),
      (R.domainRegistrant = {}),
      (R.domainSessionToken = {}),
      (R.languageCode = {}),
      (R.pageLoadedCallback = {}),
      (R.size = {}),
      (R.hostChannel = {}),
      (R.hostPubId = {}),
      R),
    xj = {};
  jd(xj, pj);
  jd(xj, qj);
  jd(xj, vj);
  jd(xj, wj);
  kd(xj, [["container"], "role"]);
  var yj = { yb: xj };
  var Cj = {},
    Dj =
      ((Cj.rolloverAdBackgroundColor = { g: Qi, C: !0, A: !0 }),
      (Cj.colorBackground = { g: Qi, C: !0, A: !0 }),
      (Cj.verticalSpacing = { g: new O(2, 34) }),
      (Cj.type = { g: new Ui(["ads", "relatedsearch"]) }),
      (Cj.fontSizeTitle = { g: $d, C: !0, A: !0 }),
      (Cj.fontSizeAttribution = { g: $d, C: !0, A: !0 }),
      (Cj.linkTarget = { g: new Ui(["_top", "_blank"]), Y: "_top", C: !0 }),
      Cj),
    Ej = {};
  jd(Ej, pj);
  jd(Ej, qj);
  jd(Ej, Dj);
  kd(Ej, ["query", ["container"], "role"]);
  var Fj = { yb: Ej };
  var Gj = {},
    Hj =
      ((Gj.disableCarousel = { g: N, ca: "dc" }),
      (Gj.enableInteractive = { g: N, ca: "ei" }),
      (Gj.height = { g: new O(0, 1e4), ca: "he" }),
      (Gj.merchantFilter = {}),
      (Gj.priceCurrency = {}),
      (Gj.priceMax = {}),
      (Gj.priceMin = {}),
      (Gj.promoted = {}),
      (Gj.testgl = {}),
      (Gj.textColorPalette = {}),
      (Gj.theme = {}),
      Gj),
    Ij = {},
    Jj =
      ((Ij.width = { g: new O(0, 1e4), ca: "wi" }),
      (Ij.linkTarget = { g: new Ui(["_top", "_blank"]), Y: "_top", C: !0 }),
      (Ij.type = { g: new Ui(["plas"]) }),
      Ij),
    Kj = {};
  jd(Kj, Jj);
  jd(Kj, pj);
  jd(Kj, Hj);
  kd(Kj, [["container"], ["height"], ["width"], "query", "role"]);
  var Lj = { yb: Kj, Za: "plas" };
  function Mj() {
    var a = window.AFS_AD_REQUEST_RETURN_TIME_;
    a && fd("irt", a + "|" + Date.now(), bd.j);
    a = vi(window.name);
    switch ((a[a.name] || {}).type) {
      case "plas":
        Ei(Lj, a);
        break;
      default:
        Ei(Fj, a);
    }
    setTimeout(function () {
      try {
        var b = document.getElementById("response_debug_output");
        if (b) {
          var c = document.getElementById("adBlock");
          c &&
            (b.parentNode.removeChild(b),
            0 == c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[0]));
        }
      } catch (d) {}
    }, 0);
  }
  window.IS_GOOGLE_AFS_IFRAME_ && Mj();
  function Nj(a, b) {
    b = void 0 === b ? {} : b;
    this.Ea = a;
    this.oa = null;
    this.zd = {};
    this.le = 0;
    this.Ob = null;
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
  }
  ra(Nj, gg);
  function Oj(a) {
    var b;
    return "function" === typeof (null == (b = a.Ea) ? void 0 : b.__uspapi) || null != a.Ca();
  }
  function Pj(a, b) {
    var c = {};
    if (Oj(a)) {
      var d = Va(function () {
        b(c);
      });
      Qj(a, function (e, f) {
        f && (c = e);
        d();
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  }
  function Qj(a, b) {
    var c;
    "function" === typeof (null == (c = a.Ea) ? void 0 : c.__uspapi)
      ? ((a = a.Ea.__uspapi), a("getUSPData", 1, b))
      : a.Ca() &&
        (Rj(a),
        (c = ++a.le),
        (a.zd[c] = b),
        a.oa &&
          ((b = {}), a.oa.postMessage(((b.__uspapiCall = { command: "getUSPData", version: 1, callId: c }), b), "*")));
  }
  Nj.prototype.Ca = function () {
    return this.oa ? this.oa : (this.oa = Ch(this.Ea, "__uspapiLocator"));
  };
  function Rj(a) {
    a.Ob ||
      ((a.Ob = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__uspapiReturn;
          var d;
          null == (d = a.zd) || d[c.callId](c.returnValue, c.success);
        } catch (e) {}
      }),
      Ah(a.Ea, "message", a.Ob));
  }
  var Tj = F(function () {
    var a = dc("uatm"),
      b = null != a ? a : 5;
    a = new Nj(window);
    return Oj(a)
      ? ((a = Sj(a)),
        Promise.race([a, ue(b, 4)]).then(function (c) {
          return 2 === c
            ? { Ab: !1, da: c }
            : 4 === c
            ? (console.warn("Reached" + b + "ms timeout and before USP response was received."), { Ab: !1, da: c })
            : 6 === c
            ? { Ab: !1, da: c }
            : { Ab: !0, da: c };
        }))
      : null;
  }, "gCAD");
  function Sj(a) {
    function b(d) {
      d && "string" === typeof d.uspString ? c.resolve(Uj(d.uspString)) : c.resolve(3);
    }
    var c = se();
    try {
      Pj(a, b);
    } catch (d) {
      c.resolve(6), console.warn("USP returned error status: " + d);
    }
    return c.promise;
  }
  function Uj(a) {
    if (/^[1-9][nyNY\-][nyNY][nyNY\-]$/.test(a)) {
      var b = a.charAt(2);
      if (/^Y|y/.test(b)) return 2;
      if (/^N|n/.test(b)) return 1;
    }
    if ("1---" === a) return 5;
    b = "3:" + a;
    console.warn("CCPA US Privacy string " + a + " is malformed and personalization intent was unable to be fetched.");
    return b;
  }
  function Vj() {}
  Vj.prototype.Fa = function () {
    return qc();
  };
  Vj.prototype.sd = function (a) {
    return new sc(this.Fa(a) + "/afs/ads");
  };
  Vj.prototype.wd = function () {
    return !1;
  };
  function Wj(a, b, c, d) {
    this.Nd = a;
    this.Ub = b;
    this.Xa = c;
    this.xd = d;
    this.Kb = !1;
    this.lc = 0;
  }
  function Xj(a, b, c, d) {
    d = void 0 === d ? {} : d;
    a.Nd--;
    a.Kb = a.Kb || b;
    c > a.lc && (a.lc = c);
    if (0 == a.Nd)
      if (a.Kb) {
        if (a.Xa) {
          b = void 0;
          switch (a.lc) {
            case 2:
              b = !0;
              break;
            case 1:
              b = !1;
          }
          try {
            a.Xa(a.Ub, !0, b, d);
          } catch (e) {}
        }
      } else {
        if (a.xd)
          try {
            a.xd(a.Ub, !1, void 0, d);
          } catch (e) {}
        if (a.Xa)
          try {
            a.Xa(a.Ub, !1, void 0, d);
          } catch (e) {}
      }
  }
  function Yj() {
    if (
      z("_afsRsCookieless") ||
      z("_switchGwsRequestToUseCookielessDomain") ||
      z("_switchGwsRequestToUseCookielessDomainChrome") ||
      z("_enableMcmExperiment")
    )
      return 0;
    if ("number" === typeof v.experimentId_) return v.experimentId_;
    var a = "object" === typeof testingData_ ? testingData_.experimentMod : dc("rsm") || 0;
    v.experimentId_ = 0;
    if (0 === a) return v.experimentId_;
    var b = "object" === typeof testingData_ ? testingData_.timeId : new Date().getTime().toString(),
      c = "object" === typeof testingData_ ? testingData_.layerId : 17301273,
      d = 3735928559 ^ c;
    c ^= 1103547991;
    for (var e = 0, f; e < b.length; e++)
      (f = b.charCodeAt(e)), (d = Math.imul(d ^ f, 2654435761)), (c = Math.imul(c ^ f, 1597334677));
    d = Math.imul(d ^ (d >>> 16), 2246822507);
    d ^= Math.imul(c ^ (c >>> 13), 3266489909);
    c = Math.imul(c ^ (c >>> 16), 2246822507);
    c ^= Math.imul(d ^ (d >>> 13), 3266489909);
    b = (4294967296 * (2097151 & c) + (d >>> 0)) % 1e3;
    b < a
      ? (v.experimentId_ = "object" === typeof testingData_ ? testingData_.experimentId : 17301368)
      : b >= 1e3 - a && (v.experimentId_ = "object" === typeof testingData_ ? testingData_.controlId : 17301367);
    return v.experimentId_;
  }
  var Zj = window;
  function ak(a, b) {
    a && null !== b && b != b.top && (b = b.top);
    try {
      return Jd(b || window).round();
    } catch (c) {
      return new Ed(-12245933, -12245933);
    }
  }
  function S(a, b, c, d, e, f, g, h, k, l) {
    l = void 0 === l ? [] : l;
    this.J = a;
    this.ba = this.aa = this.Z = 0;
    this.options = {};
    this.container = null;
    this.ga = void 0 === k ? 1 : k;
    this.Ra = c;
    this.T = h || [];
    this.yd = e || null;
    this.Ja = this.jd = this.bb = !1;
    this.U = new wc(null);
    this.Rc = this.wa = this.Da = this.Kd = "";
    this.qb = this.I = !1;
    this.qd = "";
    this.ab = new sc("");
    this.ka = l;
    this.Lc = this.va = this.lb = 0;
    this.nf = d;
    this.Aa = null;
    this.Zc = [];
    this.na = {};
    this.ja = this.tb = null;
    this.vc(b, f, g, h);
  }
  m = S.prototype;
  m.Wb = function (a) {
    if (this.I) return "n0";
    var b = this.aa,
      c = this.Z,
      d = this.ba;
    null != a &&
      ((b += "minTop" in a ? a.minTop : 0), (c += "maxTop" in a ? a.maxTop : 0), (d += "rhs" in a ? a.rhs : 0));
    if (c && b > c) throw E("Cannot request more minTop ads than maxTop.");
    return (0 < d ? "n" + d : "") + (0 < c ? "p" + c : "") + (0 < b ? "a" + b : "");
  };
  m.Zb = function (a, b) {
    a = this.X(a);
    b && 0 < b.length && (b.splice(0, 0, a), (a = b.join("|")));
    return a;
  };
  m.X = function (a) {
    this.ba = a.number || 0;
    this.aa = a.minTop;
    this.Z = a.maxTop;
    this.ba || this.aa || this.Z || (this.ba = 2);
    if (this.ba && (this.Z || this.aa)) throw E("Cannot request standard and top ads in the same ad block.");
    if (this.I && 0 != a.slaveNumber && !a.firstTextAdBlock && (this.Z || this.aa))
      throw E("Only the first ad block can have top ads.");
    var b;
    this.Z || this.aa ? (b = "p") : this.ba && (b = "n");
    return "" + b + (this.Z || this.aa || this.ba || 0);
  };
  m.Md = function () {};
  function bk() {
    var a;
    return !(null == (a = document.featurePolicy) || !a.allowsFeature("attribution-reporting"));
  }
  m.Xc = function (a, b, c) {
    var d = {};
    a.settingsId && !a.styleId && (a.styleId = a.settingsId);
    delete a.settingsId;
    a.hasOwnProperty("personalisedAds") &&
      (a.hasOwnProperty("personalizedAds")
        ? (a.personalizedAds = a.personalisedAds && a.personalizedAds)
        : (a.personalizedAds = a.personalisedAds));
    a.hasOwnProperty("personalizedAds") && delete a.personalisedAds;
    a.referrerAdCreative &&
      (a.kw
        ? console.warn("Cannot set both referrerAdCreative and kw, ignoring referrerAdCreative")
        : (a.kw = a.referrerAdCreative),
      delete a.referrerAdCreative);
    a.cmpSdkId && !a.tcString && (a.tcString = "tcunavailable");
    1 == a.gdprApplies ? (a.gdprApplies = !0) : 0 == a.gdprApplies && (a.gdprApplies = !1);
    if (a.usPrivacy) {
      var e = Uj(a.usPrivacy);
      a.cpp = e;
      2 === e && (d.personalizedAds = !1);
    }
    !0 === a.plasInCarousel ? (d.plasInCarousel = 1) : !1 === a.plasInCarousel && (d.plasInCarousel = 0);
    "plas" == a.type && a.styleId && ((this.J.width.xc = !1), (this.J.height.xc = !1));
    e = n(Object.keys(this.J));
    for (var f = e.next(); !f.done; f = e.next()) {
      f = f.value;
      if (this.J[f].xc && (("query" == f && (null == a[f] || "" == a[f])) || ("query" != f && !a[f])))
        throw E("Missing option '" + f + "'.");
      "undefined" != typeof a[f] && null != a[f] && (d[f] = a[f]);
    }
    a.rurlOverride && (console.warn("adtest is enabled when an rurlOverride value is provided"), (d.adtest = "on"));
    if ((e = fe(v.location.href, "google_afsexp")))
      (d.afsexp = e), (d.adtest = "on"), console.warn("adtest is enabled when google_afsexp is used");
    this.I = "m" != a.role;
    this.Qb(d);
    this.I || ((e = fe(window.location.href, "rsToken")) && (d.afdToken = e));
    d.adLoadedCallback = a.adLoadedCallback || a.callback || null;
    d.oe = d.oe || "UTF-8";
    d.ie = d.ie || "UTF-8";
    d.number = ck(d.number);
    d.minTop = ck(d.minTop);
    d.maxTop = ck(d.maxTop);
    d.fexp = (d.fexp ? d.fexp + "," : "") + (d.gcsc ? "20606" : "21404");
    (e = cc("cei", ec()) || "") && (d.fexp += "," + e);
    cc("jbd1", ec()) && (d.fexp += ",17301217");
    -1 != this.Ra.Fa(d.pubId).indexOf("afs.googlesyndication") && (d.fexp += ",17301248");
    17301367 === Yj() && (d.fexp += ",17301367");
    17301368 === Yj() && (d.fexp += ",17301368");
    void 0 != d.forceEx &&
      ("MostLaunches" === d.forceEx
        ? ((d.e = "MostLaunches"), delete d.forceEx)
        : d.e || (d.e = "OnlyForcedExperiments"));
    d.gcsc && "top" == a.position && ((d.maxTop = a.number), (d.number = null));
    d.format = this.I ? this.X(d) : this.Zb(d, b);
    this.qd = d.format;
    d.ads = this.Wb(c);
    d.nocache = [Math.floor(1e3 * Math.random()), Date.now()].join("");
    d.num = "0";
    d.output = this.Ra.rc();
    if (this.Ra.wd())
      try {
        d.domainName || (d.domainName = window.document.domain), (d.domainName = d.domainName.substring(0, 80));
      } catch (g) {}
    else delete d.domainName;
    d.gcsc && (d.source = "gcsc");
    d.v = "3";
    "string" !== typeof d.pubId && (d.pubId = "" + d.pubId);
    0 == d.pubId.indexOf("partner-") && (d.pubId = d.pubId.substring(8));
    "undefined" !== typeof d.hostPubId && (d.hostPubId = String(d.hostPubId).replace(/^partner-/, ""));
    d = dk(d);
    !d.titleBold || (!0 !== d.titleBold && 1 != d.titleBold) ? d.titleBold && delete d.titleBold : (d.titleBold = 1);
    this.Md(d);
    return d;
  };
  m.Bc = function (a) {
    var b = [],
      c;
    for (c in a) a.hasOwnProperty(c) && c in this.J && this.J[c].ca && b.push(ek(a[c], this.J[c]));
    return b.join("");
  };
  m.za = function (a, b) {
    var c = [],
      d;
    for (d in a)
      !(a.hasOwnProperty(d) && d in this.J && this.J[d].ca) || (d in b && b[d] == a[d]) || c.push(ek(a[d], this.J[d]));
    return c.join("");
  };
  m.dc = function (a, b, c) {
    var d = b.filter(function (f) {
      return 1 === f.ga;
    });
    if (0 == d.length) return this.za(a, {}) + "-";
    c.pubId = a.pubId;
    c = dk(c);
    b = this.Bc(c);
    var e = [];
    e.push(this.za(a, c));
    a = n(d);
    for (d = a.next(); !d.done; d = a.next())
      (d = d.value), d.options.slaveNumber && 0 != d.options.slaveNumber && e.push(this.za(d.options, c));
    return [b, e.join("-")].join("-");
  };
  function fk(a) {
    return a.options && a.options.type ? "searchbox" === a.options.type : !1;
  }
  function gk(a) {
    var b;
    return null != (b = a.options) && b.type ? "relatedsearch" === a.options.type : !1;
  }
  m.Yb = function (a, b) {
    var c = /^[A-Za-z]+[\w\-:\.]*$/,
      d = [];
    this.qb || fk(this) || ((a = a.container), d.push(c.test(a) ? a : ""));
    b = n(b);
    for (a = b.next(); !a.done; a = b.next())
      (a = a.value), fk(a) || 1 !== a.ga || ((a = a.options.container), d.push(c.test(a) ? a : ""));
    return d.join("|");
  };
  m.ec = function (a) {
    var b = this.Ra.sd(a.pubId);
    this.Lb(a, b);
    3 == window.googleAltLoader ? A(b, "bsl", 8) : 4 == window.googleAltLoader && A(b, "bsl", 10);
    A(b, "pac", hk(a));
    if (!this.I) {
      var c = void 0 === c ? window : c;
      var d = void 0 === d ? document : d;
      var e = void 0 === e ? new Date() : e;
      var f = c;
      f = void 0 === f ? Zj : f;
      try {
        var g = f.history.length;
      } catch (l) {
        g = 0;
      }
      A(b, "u_his", g);
      A(b, "u_tz", -e.getTimezoneOffset());
      A(b, "dt", e.getTime());
      A(b, "u_w", c.screen.width);
      A(b, "u_h", c.screen.height);
      e = ak(!0, c);
      A(b, "biw", e.width);
      A(b, "bih", e.height);
      c.top != c && ((e = ak(!1, c)), A(b, "isw", e.width), A(b, "ish", e.height));
      d.body
        ? ((e = !c.scrollY && "CSS1Compat" != d.compatMode),
          (d = new Ed(e ? d.body.scrollWidth : d.body.offsetWidth, e ? d.body.scrollHeight : d.body.offsetHeight)))
        : (d = new Ed(-1, -1));
      A(b, "psw", d.width);
      A(b, "psh", d.height);
      if (c.top == c) var h = 0;
      else {
        c = c.top;
        try {
          var k;
          if ((k = !!c && null != c.location.href))
            b: {
              try {
                pd(c.foo);
                k = !0;
                break b;
              } catch (l) {}
              k = !1;
            }
          h = k;
        } catch (l) {
          h = !1;
        }
        h = h ? 1 : 2;
      }
      A(b, "frm", h);
    }
    A(b, "cl", 578165713);
    A(b, "uio", this.Kd);
    A(b, "cont", this.Yb(this.options, this.T));
    A(b, "jsv", (578165713).toString(), !0);
    a.rurlOverride
      ? A(b, "rurl", a.rurlOverride, !0)
      : ((h = window.location.href),
        0 == h.indexOf("about:") &&
          window.location.ancestorOrigins &&
          window.location.ancestorOrigins.length &&
          0 < window.location.ancestorOrigins.length &&
          (h = window.location.ancestorOrigins[0]),
        A(b, "rurl", h, !0));
    A(b, ik.referer, document.referrer, !0);
    a.referrer && A(b, "optref", a.referrer, !0);
    void 0 !== Object.getOwnPropertyDescriptor(document, "referrer") &&
      ((a = this.U), (h = yc(a)), A(h, "pbt", "ri"), A(h, "emsg", "rm"), a.ia(tc(h)));
    A(b, "jsid", "csa");
    nc() && bk() && A(b, "nfp", "1");
    return b;
  };
  m.Lb = function (a, b) {
    for (var c in a)
      if (a.hasOwnProperty(c) && ik.hasOwnProperty(c)) {
        var d = ik[c],
          e = a[c];
        "clkwd" == d && (e = "t");
        "type" == d && (e = Yd[a[c]]);
        ("domainSessionToken" == c && "afdToken" in a && d == ik.afdToken) || A(b, d, e);
      }
  };
  m.F = function () {
    var a = [];
    "m" == this.options.role || void 0 === this.options.slaveNumber
      ? a.push("master")
      : (a.push("slave"), a.push(this.options.slaveNumber));
    2 == this.ga ? a.push("a") : 3 == this.ga && a.push("b");
    a.push(this.options.masterNumber);
    return a.join("-");
  };
  m.qc = function (a, b, c, d) {
    var e = {};
    e.name = b;
    a = c.concat([a]);
    b = d.concat([b]);
    for (d = 0; d < a.length; d++) {
      c = b[d];
      var f = void 0,
        g = a[d],
        h = this.J,
        k = {};
      for (f in h)
        if (h.hasOwnProperty(f) && !h[f].zc) {
          var l = g[f],
            q = h[f].Y;
          "undefined" == typeof l || ("container" == f && "object" == typeof l)
            ? "undefined" != typeof q && (k[f] = q)
            : (k[f] = l);
        }
      e[c] = k;
    }
    return JSON.stringify(e);
  };
  m.oc = function (a, b, c, d) {
    this.lb = Date.now();
    document.getElementById(a) && C.log("iframe: " + a + ". pubId: " + d + ". ", "dI");
    d = Md(document, "IFRAME");
    d.frameBorder = "0";
    d.marginWidth = "0";
    d.marginHeight = "0";
    d.vspace = 0;
    d.hspace = 0;
    d.setAttribute("allowTransparency", "true");
    d.scrolling = "no";
    d.style.visibility = "hidden";
    d.width = "100%";
    d.style.height = "0px";
    d.style.display = "block";
    d.name = b;
    d.id = a;
    d.src = c;
    he()
      ? ((d.dataset.observe = this.options.masterNumber),
        this.I || (d.setAttribute("data-ad-src", c), (d.src = "about:blank")))
      : (this.va = this.lb);
    2 === this.ga && 1 <= this.container.childElementCount
      ? this.container.insertBefore(d, this.container.children[0])
      : 1 === this.ga && 2 === this.container.childElementCount
      ? this.container.insertBefore(d, this.container.children[1])
      : this.container.appendChild(d);
    try {
      d.contentWindow.name = b;
    } catch (e) {}
    w().data.icelae && bk() && d.setAttribute("allow", "attribution-reporting");
    return d;
  };
  m.Sb = function (a) {
    var b = window.innerWidth < window.innerHeight;
    if ((this.Ja && !b) || (!this.Ja && b)) {
      this.Ja = b;
      try {
        a.contentWindow.postMessage("orientation:" + (this.Ja ? "portrait" : "landscape"), "*");
      } catch (c) {}
    }
  };
  m.uc = function (a, b, c, d) {
    var e = this,
      f = this.oc(a, b, c, d);
    this.I ||
      (this.wc(f),
      (this.Ja = window.innerWidth < window.innerHeight),
      window.addEventListener("resize", function () {
        return e.Sb(f);
      }));
  };
  m.Cc = function () {
    var a = {},
      b;
    for (b in this.options) this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
    a.ads = "n0";
    a[""] = "";
    a.slaveNumber = "0";
    a.role = "s";
    a = jk(this.J, a, Date.now(), void 0, void 0, void 0, void 0, 1, this.ka);
    V[a.F()] = a;
    this.T.splice(0, 0, a);
    a = document.createElement("div");
    document.body.appendChild(a);
    a.style.height = "0px";
    a.style.visibility = "hidden";
    this.options.container = a;
    this.qb = this.options.preload = !0;
    this.ka = [];
  };
  m.vc = function (a, b, c, d) {
    this.options = this.Xc(a, b, c, d);
    this.U.client = this.options.pubId;
    this.U.Gb = this.options.styleId || "";
    (!z("_forceJsPreloadForDebugging") && this.gb()) || this.I || !document.body || this.Cc();
    this.Kd = null == this.yd ? "" : this.dc(this.options, this.T, this.yd);
    this.wa = this.Da = this.F();
    this.ab.ic = encodeURI(this.Da);
    if (1 === this.ga && !z("_enableUnifiedMudskipperIframe"))
      for (
        this.Aa = new Wj(
          this.ka.length + 1,
          this.options.container,
          this.options.adLoadedCallback,
          this.options.noAdLoadedCallback
        ),
          a = n(this.ka),
          b = a.next();
        !b.done;
        b = a.next()
      )
        b.value.Aa = this.Aa;
    if (!this.I) {
      xc().client = this.options.pubId;
      xc().Gb = this.options.styleId || "";
      a = [];
      b = [];
      for (c = 0; c < this.T.length; c++) a.push(this.T[c].F()), b.push(this.T[c].options);
      this.wa = this.qc(this.options, this.Da, b, a);
    }
  };
  m.eb = function () {
    var a = this,
      b = se(),
      c = F(function () {
        if (!a.gb()) return !1;
        a.Fb(a.options.container);
        if (a.options.width && !a.qb) {
          if ("plas" == a.options.type && void 0 != a.J.width && null == a.J.width.g.D(a.options.width))
            throw E("width " + a.options.width + " is invalid.");
          "auto" == a.options.width
            ? (a.container.style.width = "100%")
            : kk(a.options.width) && (a.container.style.width = a.options.width);
        }
        for (var f = n([].concat(a.ka, a)), g = f.next(); !g.done; g = f.next()) {
          g = g.value;
          g.Fb(a.options.container);
          var h = g.Ra.Fa(a.options.pubId);
          h = new sc(h + "/afs/ads/i/iframe.html");
          g.ab = (g.I ? h : null) || g.ec(g.options);
          g.Rc = tc(g.ab);
        }
        if (
          !a.I &&
          a.options.hasOwnProperty("tcString") &&
          0 < a.options.tcString.length &&
          !a.Rc.includes(ik.tcString + "=")
        )
          throw (
            (Ac(a.U, "tl", "TC string of length " + a.options.tcString.length + " does not fit in URL"),
            E(
              "A transparency consent string was collected but is too long to fit in the CSA ad request URL. No ads are being requested."
            ))
          );
        a.container.textContent = "";
        if (!z("_enableUnifiedMudskipperIframe")) for (f = n(a.ka), g = f.next(); !g.done; g = f.next()) g.value.wb();
        a.wb();
        b.resolve(a);
        return !0;
      }, "cI_mA");
    if (!c())
      var d = Date.now(),
        e = window.setInterval(function () {
          if (c()) clearInterval(e);
          else if (6e4 < Date.now() - d)
            throw (clearInterval(e), E('container "' + a.options.container + '" does not exist.'));
        }, 5);
    return b.promise;
  };
  m.wb = function () {
    this.ab && this.uc(this.Da, this.wa, this.Rc, this.options.pubId);
  };
  m.Tc = function (a) {
    var b = this;
    if (this.jd) {
      var c = this.F(),
        d = document.getElementById(c);
      setTimeout(function () {
        return b.Eb(d, c, a, !0);
      }, 1500);
    }
  };
  m.wc = function (a) {
    var b = this,
      c = "" + this.options.masterNumber,
      d = new Oc(c, a);
    Rc(d, "aD." + c, $c.j, lk);
    Rc(d, "qi", bd.j, function (g, h, k, l) {
      g = n([].concat(b.T, b));
      for (h = g.next(); !h.done; h = g.next()) h.value.U.Ic = l || "";
    });
    Rc(d, "eawp", bd.j);
    Rc(d, "it", bd.j, function (g, h, k, l) {
      a.title = l;
    });
    Rc(d, "wrs", $c.j, mk);
    Rc(d, ".aCS", ad.j, function (g, h, k, l) {
      nk(b, l);
    });
    var e = null;
    this.qb ||
      ((e = this.F()),
      Rc(d, e + ".hA", $c.j, ok),
      Rc(d, e + ".fs", cd.j, pk),
      Rc(d, e + ".w", ad.j, function (g, h, k, l) {
        qk(g, h, k, l);
      }),
      Rc(d, e + ".aC", ad.j));
    Rc(d, "v." + c, bd.j, rk);
    var f = this.options.relatedSearchResultClickedCallback;
    this.options.relatedSearchUseResultCallback &&
      f &&
      Rc(d, "rsrc", cd.j, function (g, h, k, l) {
        try {
          f(l.q, l.rsToken);
        } catch (q) {}
      });
    c = n(this.T);
    for (e = c.next(); !e.done; e = c.next())
      (e = e.value.F()), Rc(d, e + ".hA", $c.j, ok), Rc(d, e + ".fs", cd.j, pk), Rc(d, e + ".aC", ad.j);
  };
  function nk(a, b) {
    a.tb = b;
    if (!a.ja) {
      var c = ["mousemove", "mousedown", "scroll", "keydown", "touchstart"];
      a.ja = function () {
        if (a.tb) {
          var e = Date.now() - a.tb;
          if (e <= (dc("mdp") || 0)) {
            var f = a.U,
              g = yc(f);
            A(g, "pbt", "cd");
            A(g, "csacd", e);
            f.ia(tc(g));
            a.tb = null;
          }
        }
        if (a.ja) {
          e = n(c);
          for (f = e.next(); !f.done; f = e.next()) document.body.removeEventListener(f.value, a.ja);
          a.ja = null;
        }
      };
      b = n(c);
      for (var d = b.next(); !d.done; d = b.next()) document.body.addEventListener(d.value, a.ja);
    }
  }
  m.Ac = function (a) {
    if (!this.bb) {
      this.bb = !0;
      if (z("_enableUnifiedMudskipperIframe")) {
        var b = this.options.container,
          c = this.options.noAdLoadedCallback,
          d = this.options.adLoadedCallback;
        if (c)
          try {
            c(b, !1, void 0, this.na);
          } catch (e) {}
        if (d)
          try {
            d(b, !1, void 0, this.na);
          } catch (e) {}
      } else Xj(this.Aa, !1, 0, this.na);
      Qc(a, "sbn") && ((b = this.F()), (c = document.getElementById(b)), (this.Lc = Date.now()), this.Eb(c, b, a, !1));
    }
  };
  m.Pc = function (a, b) {
    var c = ic(kc),
      d = ic(mc);
    /Mobile/i.test(gc) && (0 < c || 0 < d)
      ? ((a.style.width = "1px"), (a.style.minWidth = "100%"), a.removeAttribute("width"))
      : (a.width = "100%");
    a.style.visibility = 0 < b ? "visible" : "hidden";
    a.style.height = b + "px";
    this.container.style.height = "auto";
  };
  m.Oc = function (a) {
    this.container.style.width = a + "px";
    var b = ic(kc),
      c = ic(mc);
    if (0 < b || 0 < c)
      if ((b = document.getElementById(this.F()))) (b.style.width = a + "px"), b.removeAttribute("width");
  };
  function sk(a) {
    if (he() && !a.I) {
      var b = '[data-observe="' + a.options.masterNumber + '"]',
        c = function () {
          var l = document.getElementById(a.F()),
            q = ib(l.getAttribute("data-ad-src"));
          l.src = hb(q).toString();
          a.va = Date.now();
          q = n(a.T);
          for (var t = q.next(); !t.done; t = q.next()) t.value.va = a.va;
          l.removeAttribute("data-ad-src");
        },
        d = dc("llrm") || 0,
        e = gk(a);
      e = z("_enableLLIDM") || (z("_enableLLIDMRSOnly") && e);
      for (var f = n(document.querySelectorAll("iframe" + b)), g = f.next(); !g.done; g = f.next())
        if (((g = g.value), null == g.offsetParent || ie(g, e ? d : 0))) {
          c();
          return;
        }
      var h = document.querySelectorAll("iframe" + b),
        k = new IntersectionObserver(
          function (l) {
            if (
              l.find(function (t) {
                return 0 < t.intersectionRatio;
              })
            ) {
              c();
              l = n(h);
              for (var q = l.next(); !q.done; q = l.next()) k.unobserve(q.value);
            }
          },
          { rootMargin: "0px 0px " + d + "px 0px", threshold: 0 }
        );
      b = n(h);
      for (g = b.next(); !g.done; g = b.next()) (d = g.value), k.observe(d), d.setAttribute("data-lle", "1");
    }
  }
  m.ob = function (a) {
    return ie(a, 0, 0.3);
  };
  m.Eb = function (a, b, c, d) {
    var e = this,
      f = Qd(a),
      g = {
        top: f.y,
        left: f.x,
        height: a.offsetHeight,
        width: a.offsetWidth,
        Wa: this.Zc.join(","),
        he: b,
        Ee: Pc(c, "eawp"),
        re: (578165713).toString(),
        Mf: a.hasAttribute("data-lle"),
        Ve: this.ob(a),
        Kf: Qc(c, "wrs") || !1,
        Oe: null != this.options.clicktrackUrl,
      };
    if ((b = tk(this, c))) g.bf = b;
    if (d) {
      zc(this.U, "bs", g);
      var h = null;
      h = setInterval(
        F(function () {
          e.ob(a) && (zc(e.U, "bv", g), clearInterval(h));
        }, "sPIV"),
        500
      );
    } else zc(this.U, "bn", g);
  };
  function tk(a, b) {
    if ((b = Pc(b, "irt"))) {
      var c = b.split("|");
      b = parseInt(c[0], 10);
      c = parseInt(c[1], 10);
      var d = a.lb - a.nf,
        e = a.va - a.lb;
      a.I && (e = Math.max(0, e));
      return [d, e, b - a.va, c - b, a.Lc - c].join("|");
    }
    return null;
  }
  m.Mc = function (a, b) {
    var c = this.F(),
      d = document.getElementById(c);
    if (d) {
      var e = a.frameHeight;
      this.Zc = a.Wa;
      this.Pc(d, e);
      if (!this.bb && 0 < e) {
        this.Lc = Date.now();
        this.jd = this.bb = !0;
        this.Tc(b);
        var f;
        a = null != (f = Qc(b, c + ".eV")) ? f : void 0;
        c += ".ptp";
        if ((b = b.B.hasOwnProperty(c) ? b.B[c].value : null)) this.na.termPositions = b;
        if (z("_enableUnifiedMudskipperIframe")) {
          if ((b = this.options.adLoadedCallback)) {
            c = this.options.container;
            try {
              b(c, !0, a, this.na);
            } catch (g) {}
          }
        } else (b = 0), !0 === a ? (b = 2) : !1 === a && (b = 1), Xj(this.Aa, !0, b, this.na);
      }
    }
  };
  m.gb = function () {
    var a = this.options.container;
    return "string" == typeof a ? ((a = document.getElementById(a)), !!a) : "string" == typeof a.innerHTML ? !0 : !1;
  };
  m.Fb = function (a) {
    this.container = "string" == typeof a ? document.getElementById(a) : a;
  };
  m.Qb = function (a) {
    a.hasOwnProperty("resultsPageBaseUrl") && (a.resultsPageBaseUrl = uk(a.resultsPageBaseUrl));
    var b = a.relatedSearchTargeting;
    b in ae && (a.rs_tt = ae[b]);
  };
  var ek = F(function (a, b) {
    var c = b.ca;
    a = b.g.G(a);
    return null != a && kk(a) ? (vk.hasOwnProperty(c) ? (a ? c.charAt(0) + c.charAt(1).toUpperCase() : c) : c + a) : "";
  }, "gPFO");
  function ck(a) {
    try {
      var b = parseInt(a, 10);
      return !isNaN(b) && 0 <= b ? b : 0;
    } catch (c) {
      return 0;
    }
  }
  function kk(a) {
    a = parseInt(a, 10);
    return !isNaN(a) && 0 <= a;
  }
  var dk = F(function (a) {
      for (var b = ["fontSizeTitle", "fontSizeAttribution"], c = 0; c < b.length; c++) {
        var d = b[c];
        if (a[d]) {
          var e = "string" == typeof a[d] ? parseInt(a[d].replace("px", ""), 10) : a[d];
          e = e > md ? md : e;
          e = 8 > e ? 8 : e;
          a[d] = e + "px";
        }
      }
      return a;
    }, "vFS"),
    wk = /^\/{3,}/,
    uk = F(function (a) {
      return a && a.startsWith("//") ? document.location.protocol + a.replace(wk, "//") : a;
    }, "rRP"),
    hk = F(function (a) {
      a = a.fexp || "";
      return a.includes("17300001") ? 1 : a.includes("17300002") ? 2 : 0;
    }, "gPPV"),
    Y = {},
    ik =
      ((Y.adPage = "adpage"),
      (Y.adpage = "adpage"),
      (Y.ads = "ad"),
      (Y.adsafe = "adsafe"),
      (Y.adstyle = "adstyle"),
      (Y.adtest = "adtest"),
      (Y.afdToken = "afdt"),
      (Y.afsexp = "afsexp"),
      (Y.allwcallad = "allwcallad"),
      (Y.bgresponse = "bgresponse"),
      (Y.channel = "channel"),
      (Y.cont = "cont"),
      (Y.cref = "cref"),
      (Y.cx = "cx"),
      (Y.deb = "deb"),
      (Y.debug = "debug"),
      (Y.domainName = "domain_name"),
      (Y.e = "e"),
      (Y.expflags = "expflags"),
      (Y.fakeads = "fakeads"),
      (Y.fcap = "fcap"),
      (Y.fexp = "fexp"),
      (Y.forceEx = "expid"),
      (Y.format = "format"),
      (Y.gcs = "gcs"),
      (Y.gcse_nc = "gcse_nc"),
      (Y.gl = "gl"),
      (Y.glp = "glp"),
      (Y.gm = "gm"),
      (Y.gr = "gr"),
      (Y.hl = "hl"),
      (Y.hostChannel = "hchannel"),
      (Y.hostPubId = "hclient"),
      (Y.ie = "ie"),
      (Y.jsSrc = "csa_js_src"),
      (Y.languageCode = "hl"),
      (Y.maxTermLength = "max_radlink_len"),
      (Y.ms = "ms"),
      (Y.nocache = "nocache"),
      (Y.num = "num"),
      (Y.numRepeated = "adrep"),
      (Y.oe = "oe"),
      (Y.output = "output"),
      (Y.plasInCarousel = "pla_carousel"),
      (Y.preload = "preload"),
      (Y.priceCurrency = "pfcrncy"),
      (Y.priceMax = "pfmax"),
      (Y.priceMin = "pfmin"),
      (Y.pubId = "client"),
      (Y.query = "q"),
      (Y.queryContext = "qry_ctxt"),
      (Y.queryLink = "qry_lnk"),
      (Y.referer = "referer"),
      (Y.role = "r"),
      (Y.rowkeyV2 = "rowkeyV2"),
      (Y.rs_tt = "rs_tt"),
      (Y.rurl = "rurl"),
      (Y.safe = "safe"),
      (Y.sbsignals = "sbsignals"),
      (Y.source = "source"),
      (Y.source_ip = "source_ip"),
      (Y.styleId = "psid"),
      (Y.textColorPalette = "tcpal"),
      (Y.theme = "theme"),
      (Y.type = "type"),
      (Y.uideb = "uideb"),
      (Y.userAgent = "useragent"),
      (Y.uuld = "uuld"),
      (Y.v = "v"),
      (Y.adfiliateWp = "adfwp"),
      (Y.cpp = "cpp"),
      (Y.hotswaps = "hotswaps"),
      (Y.resultsPageBaseUrl = "rpbu"),
      (Y.resultsPageQueryParam = "rpqp"),
      (Y.personalizedAds = "pcsa"),
      (Y.attmas = "attmas"),
      (Y.cmpSdkId = "iab_cmpSdkId"),
      (Y.gdprApplies = "iab_gdprApplies"),
      (Y.tcString = "iab_tcString"),
      (Y.sc_status = "sc_status"),
      (Y.sct = "sct"),
      (Y.uiOptimize = "uiopt"),
      (Y.ui_optimize = "uiopt"),
      (Y.domainRegistrant = "swp"),
      (Y.domainSessionToken = "afdt"),
      (Y.kw = "kw"),
      (Y.terms = "terms"),
      Y),
    vk = { hc: 1 };
  m = S.prototype;
  m.Wb = B(S.prototype.Wb, "cAA");
  m.Zb = B(S.prototype.Zb, "cFAM");
  m.X = B(S.prototype.X, "cFA");
  m.Xc = B(S.prototype.Xc, "vASDO");
  m.Bc = B(S.prototype.Bc, "oTPP");
  m.za = B(S.prototype.za, "oTBP");
  m.Yb = B(S.prototype.Yb, "cCP");
  m.dc = B(S.prototype.dc, "cUIP");
  m.ec = B(S.prototype.ec, "cU");
  m.Lb = B(S.prototype.Lb, "aOTU");
  m.F = B(S.prototype.F, "gFN");
  m.qc = B(S.prototype.qc, "gFNAOAJ");
  m.oc = B(S.prototype.oc, "gAI");
  m.Sb = B(S.prototype.Sb, "cO");
  m.uc = B(S.prototype.uc, "iAI");
  m.Cc = B(S.prototype.Cc, "pM");
  m.vc = B(S.prototype.vc, "i");
  m.eb = B(S.prototype.eb, "cI");
  m.wb = B(S.prototype.wb, "mA");
  m.Tc = B(S.prototype.Tc, "tSP");
  m.wc = B(S.prototype.wc, "iFS");
  m.Ac = B(S.prototype.Ac, "nNA");
  m.Pc = B(S.prototype.Pc, "sIH");
  m.Oc = B(S.prototype.Oc, "sCW");
  m.Eb = B(S.prototype.Eb, "sP");
  m.Mc = B(S.prototype.Mc, "rIS");
  m.gb = B(S.prototype.gb, "dCE");
  m.Fb = B(S.prototype.Fb, "sC");
  m.Qb = B(S.prototype.Qb, "cVASDO");
  m.ob = B(S.prototype.ob, "iIV");
  function xk() {}
  ra(xk, Vj);
  xk.prototype.sd = function (a) {
    a = this.Fa(a).replace("www.google", "cse.google");
    return new sc(a + "/cse_v2/ads");
  };
  xk.prototype.rc = function () {
    return "uds_ads_only";
  };
  function yk() {}
  ra(yk, Vj);
  yk.prototype.rc = function () {
    return "uds_ads_only";
  };
  var zk = { g: new Gi(Qi, 5) };
  function Ak(a, b, c, d, e, f, g, h, k, l) {
    l = void 0 === l ? [] : l;
    S.call(this, a, b, c, d, e, f, g, h, void 0 === k ? 1 : k, l);
  }
  ra(Ak, S);
  Ak.prototype.Md = function (a) {
    if (a.textColorPalette) {
      var b = a.textColorPalette;
      Array.isArray(b) || (b = [b]);
      b = be("textColorPalette", zk, b);
      for (var c = 0; c < b.length; c++)
        try {
          var d = b[c];
          b[c] = Li("#" == d.charAt(0) ? d : "#" + d).substr(1);
        } catch (e) {}
      a.textColorPalette = b.join(",");
    }
    "on" == a.adtest && a.testgl && ((a.gl = a.testgl), (a.glp = "1"));
  };
  Ak.prototype.X = function (a) {
    return a.number ? "n" + a.number : "";
  };
  function Bk(a, b, c, d, e, f, g, h, k, l) {
    l = void 0 === l ? [] : l;
    S.call(this, a, b, c, d, e, f, g, h, void 0 === k ? 1 : k, l);
  }
  ra(Bk, S);
  Bk.prototype.X = function (a) {
    var b = a.relatedSearches;
    b || 0 === b || (b = a.number) || 0 === b || (b = 10);
    return "r" + b;
  };
  Bk.prototype.X = B(Bk.prototype.X, "cFA_RS");
  function Ck() {}
  ra(Ck, Vj);
  Ck.prototype.Fa = function (a) {
    var b = 17301368 === Yj(),
      c = z("_afsRsCookieless");
    return (b || c) && null != a && -1 === a.indexOf("dp-") ? "https://syndicatedsearch.goog" : qc();
  };
  Ck.prototype.rc = function () {
    return "afd_ads";
  };
  Ck.prototype.wd = function () {
    return !0;
  };
  var jk = F(function (a, b, c, d, e, f, g, h, k) {
    function l() {}
    k = void 0 === k ? [] : k;
    b.relatedSearches ? (b.type = "relatedsearch") : b.type || (b.type = "ads");
    var q = new yk(),
      t = null;
    switch (b.type) {
      case "relatedsearch":
        l = Bk;
        t = new Ck();
        break;
      case "ads":
      case "textads":
        b.type = "ads";
        l = S;
        t = b.gcsc ? new xk() : q;
        break;
      case "plas":
        l = Ak;
        t = new yk();
        break;
      case "searchbox":
        break;
      default:
        throw E("invalid block type: " + b.type);
    }
    return new l(a, b, t, c, d, e, f, g, void 0 === h ? 1 : h, k);
  }, "nAB");
  function Dk(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Dh(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Wa(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Ah(e, "load", f);
      Ah(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  function Ek(a) {
    var b = void 0 === b ? !1 : b;
    var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
    Bh(a, function (d, e) {
      if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
    });
    Fk(c, b);
  }
  function Fk(a, b) {
    var c = window;
    b = void 0 === b ? !1 : b;
    var d = void 0 === d ? !1 : d;
    c.fetch
      ? ((b = { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" }),
        d &&
          ((b.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (b.attributionReporting = { eventSourceEligible: "true", triggerEligible: "false" })
            : (b.headers = { "Attribution-Reporting-Eligible": "event-source" })),
        c.fetch(a, b))
      : Dk(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
  }
  function Gk(a) {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  }
  function Hk(a, b) {
    b = void 0 === b ? {} : b;
    this.Ua = a;
    this.pa = null;
    this.Ad = {};
    this.me = 0;
    var c;
    this.Id = null != (c = b.timeoutMs) ? c : 500;
    var d;
    this.kd = null != (d = b.gg) ? d : !1;
    this.Pb = null;
  }
  ra(Hk, gg);
  Hk.prototype.addEventListener = function (a) {
    function b(g, h) {
      clearTimeout(f);
      g
        ? ((d = g),
          (d.internalErrorState = Gk(d)),
          (d.internalBlockOnErrors = c.kd),
          (h && 0 === d.internalErrorState) || ((d.tcString = "tcunavailable"), h || (d.internalErrorState = 3)))
        : ((d.tcString = "tcunavailable"), (d.internalErrorState = 3));
      a(d);
    }
    var c = this,
      d = { internalBlockOnErrors: this.kd },
      e = Va(function () {
        return a(d);
      }),
      f = 0;
    -1 !== this.Id &&
      (f = setTimeout(function () {
        d.tcString = "tcunavailable";
        d.internalErrorState = 1;
        e();
      }, this.Id));
    try {
      Ik(this, "addEventListener", b);
    } catch (g) {
      (d.tcString = "tcunavailable"), (d.internalErrorState = 3), f && (clearTimeout(f), (f = 0)), e();
    }
  };
  Hk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ik(this, "removeEventListener", null, a.listenerId);
  };
  function Ik(a, b, c, d) {
    c || (c = function () {});
    if ("function" === typeof a.Ua.__tcfapi) (a = a.Ua.__tcfapi), a(b, 2, c, d);
    else if (a.Ca()) {
      Jk(a);
      var e = ++a.me;
      a.Ad[e] = c;
      a.pa &&
        ((c = {}), a.pa.postMessage(((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }), c), "*"));
    } else c({}, !1);
  }
  Hk.prototype.Ca = function () {
    return this.pa ? this.pa : (this.pa = Ch(this.Ua, "__tcfapiLocator"));
  };
  function Jk(a) {
    a.Pb ||
      ((a.Pb = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.Ad[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      Ah(a.Ua, "message", a.Pb));
  }
  function Kk(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Gk(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (Ek({ e: String(a.internalErrorState) }), !1)
        : !0
      : "loaded" !== a.cmpStatus || ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function Lk(a) {
    if (!Kk(a)) return !1;
    if (!1 === a.gdprApplies || "tcunavailable" === a.tcString) return !0;
    var b = void 0 === b ? "755" : b;
    b: {
      if (a.publisher && a.publisher.restrictions) {
        var c = a.publisher.restrictions["1"];
        if (void 0 !== c) {
          c = c[void 0 === b ? "755" : b];
          break b;
        }
      }
      c = void 0;
    }
    0 === c
      ? (b = !1)
      : a.purpose && a.vendor
      ? ((c = a.vendor.consents),
        (b = !(!c || !c[void 0 === b ? "755" : b])) && a.purposeOneTreatment && "CH" === a.publisherCC
          ? (b = !0)
          : b && ((b = a.purpose.consents), (b = !(!b || !b["1"]))))
      : (b = !0);
    return b
      ? !0
      : (console.warn(
          E(
            "TC string lacks purpose 1 consent for Google (GVL ID: 755). CSA ads will not be requested until consent is given. TC string: " +
              a.tcString
          )
        ),
        !1);
  }
  var Mk = F(function (a) {
    var b = new Hk(window, { timeoutMs: -1 });
    if ("function" === typeof b.Ua.__tcfapi || null != b.Ca()) {
      var c = se(),
        d = 0;
      d = setTimeout(function () {
        d = 0;
        console.warn(E("No response received from CMP after 10 seconds. CSA ads have not been requested."));
      }, 1e4);
      b.addEventListener(function (e) {
        d && (clearTimeout(d), (d = 0));
        if (Lk(e)) {
          if (0 !== e.internalErrorState) {
            var f = new wc(a);
            switch (e.internalErrorState) {
              case 1:
                Ac(f, "to", JSON.stringify(e));
                console.warn(E("Reached timeout before a response was received from CMP."));
                break;
              case 2:
                Ac(f, "it", JSON.stringify(e));
                console.warn(E("Invalid types in received tcData."));
                break;
              case 3:
                Ac(f, "er", JSON.stringify(e)), console.warn(E("CMP returned error status."));
            }
          }
          b.removeEventListener(e);
          c.resolve({ tcString: e.tcString, gdprApplies: e.gdprApplies });
        }
      });
      return c.promise;
    }
    return null;
  }, "gTAD");
  var Nk = ia(["https://partner.googleadservices.com/gampad/cookie.js"]);
  function Ok(a, b) {
    var c = a.createElement("script");
    Zg(c, b);
    (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a);
  }
  function Pk(a, b, c, d, e) {
    this.name = a;
    this.value = b;
    this.mc = c;
    this.path = void 0 === d ? null : d;
    this.domain = void 0 === e ? null : e;
  }
  function Qk(a) {
    this.K = a;
    this.Vb = 0;
    this.Fd = null;
  }
  function Rk(a, b) {
    if (!b.name || !b.value || !b.mc) throw "Setting a cookie must include cookie name and value and expiration.";
    var c = b.name + "=" + b.value,
      d = "",
      e = "",
      f = "";
    b.path && (d = ";path=" + b.path);
    var g = b.domain;
    if (g) {
      a: if (z("_useServerProvidedDomain")) {
        if ((e = cc("ssdl", ec())))
          if (((e = new RegExp("(" + atob(e).replace(/,/g, ")|(") + ")")), g.match(e))) {
            e = !1;
            break a;
          }
        e = !0;
      } else e = !1;
      e = ";domain=" + (e ? g : a.K.location.hostname);
    }
    b.mc && (f = ";expires=" + b.mc);
    a.K.document.cookie = c + f + d + e;
  }
  function Sk(a, b) {
    if (!b) return Promise.resolve({ cookie: null, status: 4 });
    var c = b._cookies_[0];
    if (!c) return Promise.resolve({ cookie: null, status: 4 });
    b = c._value_;
    c = new Pk("__gsas", b, new Date(1e3 * c._expires_).toUTCString(), c._path_, c._domain_);
    try {
      Rk(a, c);
    } catch (d) {
      return Promise.resolve({ cookie: null, status: 7 });
    }
    return Promise.resolve({ cookie: b, status: 3 });
  }
  function Tk(a) {
    if (0 === a.Vb) {
      a: {
        try {
          var b = new Date();
          b.setTime(b.getTime() + 36e5);
          Rk(a, new Pk("GoogleAdServingTest", "Good", b.toUTCString()));
        } catch (d) {
          b = !1;
          break a;
        }
        if ((b = "Good" === Uk(a, "GoogleAdServingTest"))) {
          var c = new Pk("GoogleAdServingTest", "Good", new Date(0).toUTCString());
          try {
            Rk(a, c);
          } catch (d) {
            b = !1;
          }
        }
      }
      a.Vb = b ? 2 : 1;
    }
    return 2 === a.Vb;
  }
  function Uk(a, b) {
    if ("string" === typeof a.K.document.cookie) {
      var c = new RegExp("^\\s*" + b + "=(.*)");
      if (
        (a = a.K.document.cookie.split(";").find(function (d) {
          return null != d.match(c);
        }))
      )
        return a.match(c)[1];
    }
  }
  function Vk(a, b) {
    b = { domain: a.K.location.hostname, client: b || "undefined", product: "SAS", callback: "__sasCookie" };
    if (a.K != a.K.parent && !b.domain) {
      var c = a.K.parent && a.K.parent.location && a.K.parent.location.hostname;
      b.domain = (a.K.location.ancestorOrigins && a.K.location.ancestorOrigins[0]) || c;
    }
    var d = db(Oe(Nk), b);
    return new Promise(function (e) {
      a.K.__sasCookie = function (f) {
        Sk(a, a.Fd ? a.Fd : f).then(function (g) {
          e(g);
        });
      };
      Ok(a.K.document, d);
    });
  }
  var Wk = F(function (a) {
      return null == a ? null : Tk(a) ? ((a = Uk(a, "__gsas")) ? { V: 6, cookie: a } : null) : { V: 0, cookie: null };
    }, "sasCkeErr"),
    Xk = F(function (a) {
      var b = new Qk(window);
      return Tk(b)
        ? Vk(b, a).then(function (c) {
            return { V: c.status, cookie: c.cookie };
          })
        : Promise.resolve({ V: 0, cookie: null });
    }, "scErr");
  var Yk = null;
  function Zk(a, b, c) {
    a
      ? ((b.cookie = a.cookie), (b.V = a.V))
      : ((Yk = Xk(c)),
        Yk.then(function (d) {
          b.cookie = d.cookie;
          b.V = d.V;
        }));
  }
  var $k = F(function (a, b, c) {
    c = void 0 === c ? window : c;
    var d = [Tj(), Mk(a)],
      e,
      f,
      g = -1 !== (null == (e = c.location) ? void 0 : null == (f = e.host) ? void 0 : f.indexOf("startpage")),
      h = null;
    e = z("enableNonblockingSasCookie");
    var k = null != d[1] && b;
    g || !e || k || (h = Wk(new Qk(c)));
    var l = { da: void 0, md: void 0, tcString: void 0, gdprApplies: void 0, V: void 0, cookie: void 0 };
    g || !e || k || Zk(h, l, a);
    return d.every(function (q) {
      return null == q;
    })
      ? l
      : ve(d)
          .then(function (q) {
            for (var t = 0; t < q.length; t++) {
              var p = q[t];
              if (p)
                switch (t) {
                  case 0:
                    l.da = p.da;
                    l.md = p.Ab;
                    break;
                  case 1:
                    (l.tcString = p.tcString), (l.gdprApplies = p.gdprApplies);
                }
            }
            !k || (null == l.tcString && null == l.gdprApplies) || ((h = Wk(new Qk(c))), Zk(h, l, a));
            return l;
          })
          .catch(function (q) {
            C.log(q, "usdPrErr");
          });
  }, "usdErr");
  function al(a) {
    for (var b = new bl(), c = a[0], d = !1, e = 1; e < a.length; e++) {
      var f = new cl(),
        g = void 0,
        h = void 0,
        k = a[e];
      for (h in k) k.hasOwnProperty(h) && (f.options[h] = k[h]);
      for (g in c) c.hasOwnProperty(g) && (f.options[g] = c[g]);
      d ||
        ((f.options.type || f.options.relatedSearches) && "ads" !== f.options.type && "textads" !== f.options.type) ||
        (d = f.options.firstTextAdBlock = !0);
      f.options.relatedSearches ? b.Dd.push(f) : b.Jb.push(f);
    }
    for (var l in c) c.hasOwnProperty(l) && (b.zb[l] = c[l]);
    return b;
  }
  function cl() {
    this.options = {};
  }
  function bl() {
    this.zb = {};
    this.Jb = [];
    this.Dd = [];
  }
  var dl = "clicktrackUrl container iframeHeightCallback linkTarget pubId query settingsId styleId waitForAds".split(
      " "
    ),
    el = null,
    fl = !1;
  function gl(a) {
    if (2 > a.length) throw E("No options specified.");
    return a[1] instanceof Array ? [a[0]].concat(a[1]) : Array.prototype.slice.call(a, 0);
  }
  gl = B(gl, "ppata");
  function hl(a, b) {
    var c = b.da,
      d = b.md,
      e = b.tcString,
      f = b.gdprApplies,
      g = b.V;
    b = b.cookie;
    null != c && (a.cpp = c);
    !1 === d && (a.personalizedAds = !1);
    e && (a.tcString = e);
    null != f && (a.gdprApplies = f);
    null != g && (a.sc_status = g);
    b && (a.sct = b);
  }
  hl = B(hl, "aUDTA");
  function il(a, b, c, d) {
    c = void 0 === c ? null : c;
    var e = a.yb;
    d = d || Date.now();
    b = gl(b);
    if (b[0] && !oc()) {
      a.Za && (b[0].type = a.Za);
      c && hl(b[0], c);
      a = al(b);
      var f = {},
        g = {};
      c = function (k) {
        k = n($a(k));
        for (var l = k.next(); !l.done; l = k.next()) {
          l = l.value;
          var q = e[l];
          q && q.A && (f[l] = !0);
          q || "firstTextAdBlock" === l || (g[l] = !0);
        }
      };
      c(a.zb);
      b = n(a.Jb);
      for (var h = b.next(); !h.done; h = b.next()) c(h.value.options);
      c = $a(f);
      0 < c.length &&
        (el = "The following CSA option(s) were ignored due to being overridden by native style controls: " + c);
      c = $a(g);
      0 < c.length && console.warn("The following CSA option(s) are unsupported: " + c);
      b = jl(e, a.zb, a.Jb, d, {});
      c = kl;
      b &&
        b.then(function (k) {
          sk(k);
        });
      d = jl(e, a.zb, a.Dd, d);
      kl != c &&
        d &&
        d.then(function (k) {
          sk(k);
        });
    }
  }
  il = B(il, "aasi");
  function jl(a, b, c, d) {
    if (0 == c.length) return null;
    var e = [],
      f = [],
      g = { maxTop: 0, minTop: 0, rhs: 0 };
    kl++;
    for (var h = c.length - 1; 0 <= h; h--) {
      var k = c[h].options;
      k.adTest && !k.adtest && (k.adtest = k.adTest);
      delete k.adTest;
      var l = ll.location.href.includes("ampproject.net"),
        q = [];
      if (k.firstTextAdBlock && !l && !z("_enableUnifiedMudskipperIframe")) {
        l = {};
        for (var t = n(dl), p = t.next(); !p.done; p = t.next()) (p = p.value), (l[p] = k[p]);
        l.role = "s";
        l.masterNumber = kl;
        0 < h && (l.slaveNumber = h);
        t = jk(a, l, d, void 0, void 0, void 0, void 0, 2);
        l = jk(a, l, d, void 0, void 0, void 0, void 0, 3);
        f.unshift(l);
        f.unshift(t);
        q.push(t);
        q.push(l);
        V[t.F()] = t;
        V[l.F()] = l;
      }
      0 === h
        ? ((k.role = "m"), (k.masterNumber = kl), (k = jk(a, k, d, b, e, g, f, 1, q)), (V[k.F()] = k))
        : ((k.role = "s"),
          (k.slaveNumber = h),
          (k.masterNumber = kl),
          (k = jk(a, k, d, void 0, void 0, void 0, void 0, 1, q)),
          e.unshift(k.qd),
          f.unshift(k),
          (g.maxTop += k.Z),
          (g.minTop += k.aa),
          (g.rhs += k.ba),
          (V[k.F()] = k));
    }
    a = "master-" + kl;
    for (var r in V) ce(r) && (V[r].wa += "|" + V[a].wa);
    for (c = c.length - 1; 0 <= c; c--) (r = ["slave", c, kl].join("-")), V.hasOwnProperty(r) && V[r].eb();
    c = null;
    V.hasOwnProperty(a) ? (c = V[a].eb()) : C.log("Missing ad block for " + a, "cAFOMM");
    return c;
  }
  jl = B(jl, "cAFO");
  function ok(a, b, c, d) {
    d || V[c.split(".")[0]].Ac(a);
  }
  ok = B(ok, "hAC");
  var ml = {};
  function pk(a, b, c, d) {
    b = d.fw;
    var e = d.fh;
    d = d.ah;
    d = "number" === typeof b && "number" === typeof e && d instanceof Array ? new qe(b, e, d) : null;
    if (
      null != d &&
      ((c = c.split(".")[0]),
      (b = V[c]),
      b.Mc(d, a),
      b.options && b.options.iframeHeightCallback && ((a = b.container.offsetHeight), ml[c] != a))
    ) {
      ml[c] = a;
      try {
        b.options.iframeHeightCallback(a);
      } catch (f) {}
    }
  }
  pk = B(pk, "hC");
  function qk(a, b, c, d) {
    a = V[c.split(".")[0]];
    ll.getComputedStyle &&
      a instanceof Ak &&
      ((b = parseInt(ll.getComputedStyle(a.container || document.body).width, 10)),
      d == b && /Mobile/i.test(gc) && d--);
    a.Oc(d);
  }
  qk = B(qk, "wC");
  function mk(a, b, c, d) {
    d && el && !fl && (console.warn(el), (fl = !0));
  }
  function nl(a, b) {
    var c = {},
      d;
    for (d in V)
      if (V.hasOwnProperty(d)) {
        var e = V[d];
        e.options &&
          e.options.masterNumber == b &&
          "string" == typeof e.options.container &&
          ((e = e.options.container), (c[e] = (c[e] || 0) + a.B[d + ".aC"].value));
      }
    return c;
  }
  nl = B(nl, "gAC");
  function lk(a, b) {
    var c = V["master-" + b];
    if (c && c.options && c.options.adsResponseCallback) {
      a = nl(a, b);
      try {
        c.options.adsResponseCallback(a);
      } catch (d) {}
    }
  }
  lk = B(lk, "aCC");
  function rk(a, b, c, d) {
    if ((a = V["master-" + b]) && a.options && a.options.visibleUrlsCallback) {
      d = d ? d.split("|") : [];
      try {
        a.options.visibleUrlsCallback(d);
      } catch (e) {}
    }
  }
  rk = B(rk, "vUC");
  var kl = 0,
    V = {},
    ll = window;
  var ol = il;
  function pl(a) {
    ql(arguments);
  }
  var rl = {},
    sl = ((rl.ads = Fj), (rl.plas = Lj), (rl.relatedsearch = yj), rl),
    ul = F(function () {
      var a = window._googCsa ? window._googCsa.q || [] : [],
        b = (window._googCsa || {}).t;
      ya("_googCsa", function () {
        tl(arguments);
      });
      for (var c = 0; c < a.length; c++) tl(a[c], b);
    }, "cmps"),
    tl = F(function (a, b) {
      if (a && !(1 > a.length))
        if (sl.hasOwnProperty(a[0])) {
          var c = sl[a[0]],
            d;
          a = ((d = 3 == a.length ? [a[1], a[2]] : [a[1], Array.prototype.slice.call(a, 2)]), d[0]) || {};
          a = $k(a.pubId || "", !!a.gcsc || !1, window);
          a instanceof Promise
            ? a.then(function (e) {
                ol(c, d, e, b);
              })
            : ol(c, d, a, b);
        } else if ("jsLoadedCallback" == a[0])
          try {
            a[1]();
          } catch (e) {}
    }, "cmpe"),
    ql = F(function (a) {
      var b = (a && a[0]) || {};
      b = $k(b.pubId || "", !!b.gcsc || !1, window);
      b instanceof Promise
        ? b.then(function (c) {
            ol(Fj, a, c);
          })
        : ol(Fj, a, b);
    }, "iAAPR");
  window.IS_GOOGLE_AFS_IFRAME_ ||
    (window.google && window.google.ads && window.google.ads.search && window.google.ads.search.Ads) ||
    (ya("google.ads.search.Ads", pl), ul());
})();
