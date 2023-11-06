/*!
 THEOplayer

 Usage of this software is limited by the THEOplayer License.

 It is prohibited to reverse engineer, decompile, translate,
 disassemble, decipher, decrypt, or otherwise attempt to
 discover the source code of this software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

 For more information, visit https://www.theoplayer.com or contact
 contact @ theoplayer . com

 This product makes use of Open Source Software: cea608.js (BSD -
 Copyright (c) 2015-2016, DASH Industry Forum. All rights
 reserved.)
 The code of these projects has been heavily modified during
 integration.
 More information on the licenses can be found here: BSD
 (https://opensource.org/licenses/BSD-3-Clause)

 THEOplayer is based on patented technology developed by
 THEO Technologies (https://www.theoplayer.com).

 Version: 2022.3.1 (3.7.0)
 Created: 2022-11-21T09:02:59.012Z
 */
!(function (t) {
  !(function () {
    "use strict";
    var n,
      r = t.window,
      i = t.document,
      e = (t.location, t.navigator),
      u = t.setTimeout,
      o = t.clearTimeout,
      a = t.setInterval,
      f = t.clearInterval,
      s = t.Error,
      c = t.TypeError,
      h = (t.SyntaxError, t.Object),
      _ = t.Math,
      v = t.parseInt,
      l = t.parseFloat,
      d = t.isNaN,
      p = t.Uint8Array;
    t.Worker, t.WorkerGlobalScope, t.XMLHttpRequest;
    function w(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          h.defineProperty(t, i.key, i);
      }
    }
    function m(t, n, r) {
      return n && w(t.prototype, n), r && w(t, r), h.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function y(t, n) {
      return (y =
        h.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function g(t, n) {
      (t.prototype = h.create(n.prototype)), (t.prototype.constructor = t), y(t, n);
    }
    !(function (t) {
      (t.l = "web"), (t.g = "android"), (t.I = "android-tv"), (t.R = "ios"), (t.N = "tvos"), (t.C = "chromecast");
    })(n || (n = {}));
    var I = e ? e.userAgent : "",
      E = I.match(/chrome\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/i),
      S = I.match(/Edg\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/i),
      T = I.match(/Android ([0-9\.]+)/i),
      k = I.match(/Windows NT ([0-9\.]+)/i),
      b = I.match(/(Version)\/((\d+)\.(\d+)(?:\.(\d+))?).*Safari/),
      N = I.match(/Firefox\/([0-9\.]+)/i),
      A = I.match(/OPR\/(\d+\.\d+)/i),
      D = I.match(/Tizen ([0-9\.]+)/i),
      R = (function () {
        function r() {
          (this.B = Boolean(
            "ontouchstart" in t || (t.DocumentTouch && i instanceof t.DocumentTouch) || (e && e.msMaxTouchPoints)
          )),
            (this.M = /(mac\sos\sx)\s?([\w\s\.]+\w)*/i.test(I) || /(macintosh|mac(?=_powerpc)\s)/i.test(I)),
            (this.F = /Windows NT/i.test(I)),
            (this.U = k ? l(k[1]) : 0),
            (this.j = /Android/i.test(I)),
            (this.V = T ? l(T[1]) : 0),
            (this.H = /windows phone (8|8\.1)/i.test(I)),
            (this.q = /iPhone/i.test(I)),
            (this.G = /iPad/i.test(I)),
            (this.Y = this.M && this.B && !this.G),
            (this.Z = /iPod/i.test(I)),
            (this.K = /Mobile Safari/i.test(I)),
            (this.J = /EOSSTB/i.test(I)),
            (this.nt = (this.q || this.G || this.Y || this.Z) && !this.H),
            (this.ut = this.H || this.nt || this.j || this.K),
            (this.ot = /CriOS/i.test(I)),
            (this.ct = Boolean(t.chrome && /google/i.test(e.vendor)) || this.ot),
            (this.ft = this.ct && /Edg\//i.test(e.userAgent)),
            (this.vt = S ? v(S[1], 10) : 0),
            (this.dt = Boolean(t.chrome || /Chrome/i.test(I) || /CriOS/i.test(I))),
            (this._t = E ? v(E[1], 10) : 0),
            (this.wt = /SMART-TV.*Tizen/i.test(I)),
            (this.yt = D ? l(D[1]) : 0),
            (this.kt = /webos|web0s/i.test(I)),
            (this.bt = /Edge\/\d+/i.test(I)),
            (this.At = /Trident/i.test(I)),
            (this.Tt = this.At && !t.ActiveXObject && "ActiveXObject" in t),
            (this.St = /Vivaldi/i.test(I)),
            (this.Et = /Firefox/i.test(I) && !/Seamonkey/i.test(I)),
            (this.It = N ? l(N[1]) : 0),
            (this.Rt = /Safari/i.test(I) && !/Chrome/i.test(I) && !this.H && !this.wt),
            (this.Nt = b ? l(b[2]) : 0),
            (this.Ct = Boolean(A)),
            (this.Dt = A ? l(A[1]) : 0),
            (this.Pt = /CrKey/.test(I)),
            (this.Ot = /\b(tv|smart-tv|smarttv|appletv|crkey|googletv|hbbtv|pov_tv|roku|viera|nettv|philipstv)\b/i.test(
              I
            )),
            (this.xt = "web" === n.I),
            (this.Bt = "web" === n.g),
            (this.Mt = this.Bt || this.xt),
            (this.Lt = "web" === n.R),
            (this.Ft = "web" === n.N),
            (this.Ut = "web" === n.C);
        }
        return (
          m(r, [
            {
              key: "jt",
              get: function () {
                return this.B;
              },
            },
            {
              key: "Vt",
              get: function () {
                return this.M;
              },
            },
            {
              key: "zt",
              get: function () {
                return this.F;
              },
            },
            {
              key: "Ht",
              get: function () {
                return this.U;
              },
            },
            {
              key: "Wt",
              get: function () {
                return this.j;
              },
            },
            {
              key: "qt",
              get: function () {
                return this.V;
              },
            },
            {
              key: "Gt",
              get: function () {
                return this.H;
              },
            },
            {
              key: "Xt",
              get: function () {
                return this.q;
              },
            },
            {
              key: "$t",
              get: function () {
                return this.G;
              },
            },
            {
              key: "Qt",
              get: function () {
                return this.Y;
              },
            },
            {
              key: "Yt",
              get: function () {
                return this.Z;
              },
            },
            {
              key: "Zt",
              get: function () {
                return this.nt;
              },
            },
            {
              key: "Kt",
              get: function () {
                return this.J;
              },
            },
            {
              key: "Jt",
              get: function () {
                return this.K;
              },
            },
            {
              key: "in",
              get: function () {
                return this.ut;
              },
            },
            {
              key: "un",
              get: function () {
                return this.ot;
              },
            },
            {
              key: "hn",
              get: function () {
                return this.ct;
              },
            },
            {
              key: "cn",
              get: function () {
                return this._t;
              },
            },
            {
              key: "fn",
              get: function () {
                return this.ft;
              },
            },
            {
              key: "vn",
              get: function () {
                return this.vt;
              },
            },
            {
              key: "dn",
              get: function () {
                return this.wt;
              },
            },
            {
              key: "_n",
              get: function () {
                return this.yt;
              },
            },
            {
              key: "wn",
              get: function () {
                return this.kt;
              },
            },
            {
              key: "yn",
              get: function () {
                return this.bt;
              },
            },
            {
              key: "pn",
              get: function () {
                return this.At;
              },
            },
            {
              key: "An",
              get: function () {
                return this.Tt;
              },
            },
            {
              key: "Tn",
              get: function () {
                return this.St;
              },
            },
            {
              key: "Sn",
              get: function () {
                return this.Et;
              },
            },
            {
              key: "En",
              get: function () {
                return this.It;
              },
            },
            {
              key: "In",
              get: function () {
                return this.Rt;
              },
            },
            {
              key: "Rn",
              get: function () {
                return this.Nt;
              },
            },
            {
              key: "Nn",
              get: function () {
                return this.Ct;
              },
            },
            {
              key: "Cn",
              get: function () {
                return this.Dt;
              },
            },
            {
              key: "Dn",
              get: function () {
                return this.Pt;
              },
            },
            {
              key: "Pn",
              get: function () {
                return this.Ot;
              },
            },
            {
              key: "On",
              get: function () {
                if (!(this.wn || this.dn)) return !1;
                var t = this.cn;
                return void 0 === t || Number(t) < 56;
              },
            },
            {
              key: "xn",
              get: function () {
                return this.xt;
              },
            },
            {
              key: "Bn",
              get: function () {
                return this.Bt;
              },
            },
            {
              key: "Mn",
              get: function () {
                return this.Mt;
              },
            },
            {
              key: "Ln",
              get: function () {
                return this.Lt;
              },
            },
            {
              key: "Fn",
              get: function () {
                return this.Ft;
              },
            },
            {
              key: "Un",
              get: function () {
                return this.Ut;
              },
            },
            {
              key: "jn",
              get: function () {
                return this.dt;
              },
            },
          ]),
          r
        );
      })();
    R.Vn = new R();
    var P = R.Vn;
    function O(t) {
      return null != t;
    }
    var C = function () {},
      L = !(P.pn && !P.An),
      F = t.console;
    function M(t) {
      if (
        (function (t) {
          return "object" == typeof t && null !== t;
        })(t)
      )
        try {
          return JSON.stringify(t);
        } catch (t) {}
      return t;
    }
    function B(t) {
      return t.map(M).join(" ");
    }
    function x(t) {
      var n = F && F[t];
      return n
        ? n.bind && L
          ? n.bind(F)
          : function () {
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              F[t](B(r));
            }
        : void 0;
    }
    var U,
      H = x("log") || C,
      W = x("warn") || H.bind(void 0, "WARNING:"),
      G = x("error") || H.bind(void 0, "ERROR:"),
      V = (U = F && F.assert)
        ? U.bind && L
          ? U.bind(F)
          : function (t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i];
              F.assert(t, B(r));
            }
        : function (t) {
            if (!t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i];
              G.apply(void 0, ["Assertion failed:"].concat(r));
            }
          },
      z = null;
    try {
      z = new WebAssembly.Instance(
        new WebAssembly.Module(
          new p([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1,
            1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
            100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101,
            116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
            66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
            11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
            34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32,
            2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
            32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
            66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
          ])
        ),
        {}
      ).exports;
    } catch (t) {}
    function Y(t, n, r) {
      (this.low = 0 | t), (this.high = 0 | n), (this.unsigned = !!r);
    }
    function X(t) {
      return !0 === (t && t.qn);
    }
    function j(t) {
      var n = _.clz32(t & -t);
      return t ? 31 - n : n;
    }
    Y.prototype.qn, h.defineProperty(Y.prototype, "qn", { value: !0 }), (Y.isLong = X);
    var q = {},
      K = {};
    function Z(t, n) {
      var r, i, e;
      return n
        ? (e = 0 <= (t >>>= 0) && t < 256) && (i = K[t])
          ? i
          : ((r = J(t, 0, !0)), e && (K[t] = r), r)
        : (e = -128 <= (t |= 0) && t < 128) && (i = q[t])
        ? i
        : ((r = J(t, t < 0 ? -1 : 0, !1)), e && (q[t] = r), r);
    }
    function $(t, n) {
      if (d(t)) return n ? at : ot;
      if (n) {
        if (t < 0) return at;
        if (t >= it) return _t;
      } else {
        if (t <= -et) return vt;
        if (t + 1 >= et) return ht;
      }
      return t < 0 ? $(-t, n).neg() : J(t % rt | 0, (t / rt) | 0, n);
    }
    function J(t, n, r) {
      return new Y(t, n, r);
    }
    (Y.fromInt = Z), (Y.fromNumber = $), (Y.fromBits = J);
    var Q = _.pow;
    function tt(t, n, r) {
      if (0 === t.length) throw s("empty string");
      if (
        ("number" == typeof n ? ((r = n), (n = !1)) : (n = !!n),
        "NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
      )
        return n ? at : ot;
      if ((r = r || 10) < 2 || 36 < r) throw RangeError("radix");
      var i;
      if ((i = t.indexOf("-")) > 0) throw s("interior hyphen");
      if (0 === i) return tt(t.substring(1), n, r).neg();
      for (var e = $(Q(r, 8)), u = ot, o = 0; o < t.length; o += 8) {
        var a = _.min(8, t.length - o),
          f = v(t.substring(o, o + a), r);
        if (a < 8) {
          var c = $(Q(r, a));
          u = u.mul(c).add($(f));
        } else u = (u = u.mul(e)).add($(f));
      }
      return (u.unsigned = n), u;
    }
    function nt(t, n) {
      return "number" == typeof t
        ? $(t, n)
        : "string" == typeof t
        ? tt(t, n)
        : J(t.low, t.high, "boolean" == typeof n ? n : t.unsigned);
    }
    (Y.fromString = tt), (Y.fromValue = nt);
    var rt = 4294967296,
      it = rt * rt,
      et = it / 2,
      ut = Z(1 << 24),
      ot = Z(0);
    Y.ZERO = ot;
    var at = Z(0, !0);
    Y.UZERO = at;
    var ft = Z(1);
    Y.ONE = ft;
    var st = Z(1, !0);
    Y.UONE = st;
    var ct = Z(-1);
    Y.NEG_ONE = ct;
    var ht = J(-1, 2147483647, !1);
    Y.MAX_VALUE = ht;
    var _t = J(-1, -1, !0);
    Y.MAX_UNSIGNED_VALUE = _t;
    var vt = J(0, -2147483648, !1);
    Y.MIN_VALUE = vt;
    var lt = Y.prototype;
    (lt.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (lt.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * rt + (this.low >>> 0) : this.high * rt + (this.low >>> 0);
      }),
      (lt.toString = function (t) {
        if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(vt)) {
            var n = $(t),
              r = this.div(n),
              i = r.mul(n).sub(this);
            return r.toString(t) + i.toInt().toString(t);
          }
          return "-" + this.neg().toString(t);
        }
        for (var e = $(Q(t, 6), this.unsigned), u = this, o = ""; ; ) {
          var a = u.div(e),
            f = (u.sub(a.mul(e)).toInt() >>> 0).toString(t);
          if ((u = a).isZero()) return f + o;
          for (; f.length < 6; ) f = "0" + f;
          o = "" + f + o;
        }
      }),
      (lt.getHighBits = function () {
        return this.high;
      }),
      (lt.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (lt.getLowBits = function () {
        return this.low;
      }),
      (lt.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (lt.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(vt) ? 64 : this.neg().getNumBitsAbs();
        for (var t = 0 != this.high ? this.high : this.low, n = 31; n > 0 && 0 == (t & (1 << n)); n--);
        return 0 != this.high ? n + 33 : n + 1;
      }),
      (lt.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (lt.eqz = lt.isZero),
      (lt.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (lt.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (lt.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (lt.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (lt.equals = function (t) {
        return (
          X(t) || (t = nt(t)),
          (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) &&
            this.high === t.high &&
            this.low === t.low
        );
      }),
      (lt.eq = lt.equals),
      (lt.notEquals = function (t) {
        return !this.eq(t);
      }),
      (lt.neq = lt.notEquals),
      (lt.ne = lt.notEquals),
      (lt.lessThan = function (t) {
        return this.comp(t) < 0;
      }),
      (lt.lt = lt.lessThan),
      (lt.lessThanOrEqual = function (t) {
        return this.comp(t) <= 0;
      }),
      (lt.lte = lt.lessThanOrEqual),
      (lt.le = lt.lessThanOrEqual),
      (lt.greaterThan = function (t) {
        return this.comp(t) > 0;
      }),
      (lt.gt = lt.greaterThan),
      (lt.greaterThanOrEqual = function (t) {
        return this.comp(t) >= 0;
      }),
      (lt.gte = lt.greaterThanOrEqual),
      (lt.ge = lt.greaterThanOrEqual),
      (lt.compare = function (t) {
        if ((X(t) || (t = nt(t)), this.eq(t))) return 0;
        var n = this.isNegative(),
          r = t.isNegative();
        return n && !r
          ? -1
          : !n && r
          ? 1
          : this.unsigned
          ? t.high >>> 0 > this.high >>> 0 || (t.high === this.high && t.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(t).isNegative()
          ? -1
          : 1;
      }),
      (lt.comp = lt.compare),
      (lt.negate = function () {
        return !this.unsigned && this.eq(vt) ? vt : this.not().add(ft);
      }),
      (lt.neg = lt.negate),
      (lt.add = function (t) {
        X(t) || (t = nt(t));
        var n = this.high >>> 16,
          r = 65535 & this.high,
          i = this.low >>> 16,
          e = 65535 & this.low,
          u = t.high >>> 16,
          o = 65535 & t.high,
          a = t.low >>> 16,
          f = 0,
          s = 0,
          c = 0,
          h = 0;
        return (
          (c += (h += e + (65535 & t.low)) >>> 16),
          (s += (c += i + a) >>> 16),
          (f += (s += r + o) >>> 16),
          (f += n + u),
          J(((c &= 65535) << 16) | (h &= 65535), ((f &= 65535) << 16) | (s &= 65535), this.unsigned)
        );
      }),
      (lt.subtract = function (t) {
        return X(t) || (t = nt(t)), this.add(t.neg());
      }),
      (lt.sub = lt.subtract),
      (lt.multiply = function (t) {
        if (this.isZero()) return this;
        if ((X(t) || (t = nt(t)), z)) return J(z.mul(this.low, this.high, t.low, t.high), z.get_high(), this.unsigned);
        if (t.isZero()) return this.unsigned ? at : ot;
        if (this.eq(vt)) return t.isOdd() ? vt : ot;
        if (t.eq(vt)) return this.isOdd() ? vt : ot;
        if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
        if (t.isNegative()) return this.mul(t.neg()).neg();
        if (this.lt(ut) && t.lt(ut)) return $(this.toNumber() * t.toNumber(), this.unsigned);
        var n = this.high >>> 16,
          r = 65535 & this.high,
          i = this.low >>> 16,
          e = 65535 & this.low,
          u = t.high >>> 16,
          o = 65535 & t.high,
          a = t.low >>> 16,
          f = 65535 & t.low,
          s = 0,
          c = 0,
          h = 0,
          _ = 0;
        return (
          (h += (_ += e * f) >>> 16),
          (c += (h += i * f) >>> 16),
          (h &= 65535),
          (c += (h += e * a) >>> 16),
          (s += (c += r * f) >>> 16),
          (c &= 65535),
          (s += (c += i * a) >>> 16),
          (c &= 65535),
          (s += (c += e * o) >>> 16),
          (s += n * f + r * a + i * o + e * u),
          J(((h &= 65535) << 16) | (_ &= 65535), ((s &= 65535) << 16) | (c &= 65535), this.unsigned)
        );
      }),
      (lt.mul = lt.multiply),
      (lt.divide = function (t) {
        if ((X(t) || (t = nt(t)), t.isZero())) throw s("division by zero");
        var n, r, i;
        if (z)
          return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high
            ? J((this.unsigned ? z.div_u : z.div_s)(this.low, this.high, t.low, t.high), z.get_high(), this.unsigned)
            : this;
        if (this.isZero()) return this.unsigned ? at : ot;
        if (this.unsigned) {
          if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return at;
          if (t.gt(this.shru(1))) return st;
          i = at;
        } else {
          if (this.eq(vt))
            return t.eq(ft) || t.eq(ct)
              ? vt
              : t.eq(vt)
              ? ft
              : (n = this.shr(1).div(t).shl(1)).eq(ot)
              ? t.isNegative()
                ? ft
                : ct
              : ((r = this.sub(t.mul(n))), (i = n.add(r.div(t))));
          if (t.eq(vt)) return this.unsigned ? at : ot;
          if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
          if (t.isNegative()) return this.div(t.neg()).neg();
          i = ot;
        }
        for (r = this; r.gte(t); ) {
          n = _.max(1, _.floor(r.toNumber() / t.toNumber()));
          for (
            var e = _.ceil(_.log(n) / _.LN2), u = e <= 48 ? 1 : Q(2, e - 48), o = $(n), a = o.mul(t);
            a.isNegative() || a.gt(r);

          )
            a = (o = $((n -= u), this.unsigned)).mul(t);
          o.isZero() && (o = ft), (i = i.add(o)), (r = r.sub(a));
        }
        return i;
      }),
      (lt.div = lt.divide),
      (lt.modulo = function (t) {
        return (
          X(t) || (t = nt(t)),
          z
            ? J((this.unsigned ? z.rem_u : z.rem_s)(this.low, this.high, t.low, t.high), z.get_high(), this.unsigned)
            : this.sub(this.div(t).mul(t))
        );
      }),
      (lt.mod = lt.modulo),
      (lt.rem = lt.modulo),
      (lt.not = function () {
        return J(~this.low, ~this.high, this.unsigned);
      }),
      (lt.countLeadingZeros = function () {
        return this.high ? _.clz32(this.high) : _.clz32(this.low) + 32;
      }),
      (lt.clz = lt.countLeadingZeros),
      (lt.countTrailingZeros = function () {
        return this.low ? j(this.low) : j(this.high) + 32;
      }),
      (lt.ctz = lt.countTrailingZeros),
      (lt.and = function (t) {
        return X(t) || (t = nt(t)), J(this.low & t.low, this.high & t.high, this.unsigned);
      }),
      (lt.or = function (t) {
        return X(t) || (t = nt(t)), J(this.low | t.low, this.high | t.high, this.unsigned);
      }),
      (lt.xor = function (t) {
        return X(t) || (t = nt(t)), J(this.low ^ t.low, this.high ^ t.high, this.unsigned);
      }),
      (lt.shiftLeft = function (t) {
        return (
          X(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? J(this.low << t, (this.high << t) | (this.low >>> (32 - t)), this.unsigned)
            : J(0, this.low << (t - 32), this.unsigned)
        );
      }),
      (lt.shl = lt.shiftLeft),
      (lt.shiftRight = function (t) {
        return (
          X(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? J((this.low >>> t) | (this.high << (32 - t)), this.high >> t, this.unsigned)
            : J(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (lt.shr = lt.shiftRight),
      (lt.shiftRightUnsigned = function (t) {
        return (
          X(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? J((this.low >>> t) | (this.high << (32 - t)), this.high >>> t, this.unsigned)
            : J(32 === t ? this.high : this.high >>> (t - 32), 0, this.unsigned)
        );
      }),
      (lt.shru = lt.shiftRightUnsigned),
      (lt.shr_u = lt.shiftRightUnsigned),
      (lt.rotateLeft = function (t) {
        var n;
        return (
          X(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : 32 === t
            ? J(this.high, this.low, this.unsigned)
            : t < 32
            ? ((n = 32 - t), J((this.low << t) | (this.high >>> n), (this.high << t) | (this.low >>> n), this.unsigned))
            : ((n = 32 - (t -= 32)),
              J((this.high << t) | (this.low >>> n), (this.low << t) | (this.high >>> n), this.unsigned))
        );
      }),
      (lt.rotl = lt.rotateLeft),
      (lt.rotateRight = function (t) {
        var n;
        return (
          X(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : 32 === t
            ? J(this.high, this.low, this.unsigned)
            : t < 32
            ? ((n = 32 - t), J((this.high << n) | (this.low >>> t), (this.low << n) | (this.high >>> t), this.unsigned))
            : ((n = 32 - (t -= 32)),
              J((this.low << n) | (this.high >>> t), (this.high << n) | (this.low >>> t), this.unsigned))
        );
      }),
      (lt.rotr = lt.rotateRight),
      (lt.toSigned = function () {
        return this.unsigned ? J(this.low, this.high, !1) : this;
      }),
      (lt.toUnsigned = function () {
        return this.unsigned ? this : J(this.low, this.high, !0);
      }),
      (lt.toBytes = function (t) {
        return t ? this.toBytesLE() : this.toBytesBE();
      }),
      (lt.toBytesLE = function () {
        var t = this.high,
          n = this.low;
        return [
          255 & n,
          (n >>> 8) & 255,
          (n >>> 16) & 255,
          n >>> 24,
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
        ];
      }),
      (lt.toBytesBE = function () {
        var t = this.high,
          n = this.low;
        return [
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
          n >>> 24,
          (n >>> 16) & 255,
          (n >>> 8) & 255,
          255 & n,
        ];
      }),
      (Y.fromBytes = function (t, n, r) {
        return r ? Y.fromBytesLE(t, n) : Y.fromBytesBE(t, n);
      }),
      (Y.fromBytesLE = function (t, n) {
        return new Y(
          t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
          t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
          n
        );
      }),
      (Y.fromBytesBE = function (t, n) {
        return new Y(
          (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
          (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
          n
        );
      });
    var dt = _.pow(2, -52);
    function pt(t, n) {
      for (var r = t, i = n; 0 !== i; ) {
        var e = r % i;
        (r = i), (i = e);
      }
      return r < 0 ? -r : r;
    }
    function wt() {
      return Date.now() || new Date().getTime();
    }
    var mt;
    Y.fromNumber(9007199254740991),
      (function (t) {
        (t[(t.Xn = 1)] = "Xn"),
          (t[(t.Qn = 2)] = "Qn"),
          (t[(t.$n = 3)] = "$n"),
          (t[(t.Yn = 4)] = "Yn"),
          (t[(t.Zn = 9)] = "Zn");
      })(mt || (mt = {}));
    var yt = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      s.apply(this, n);
    };
    (yt.prototype = h.create(s.prototype)).constructor = yt;
    var gt = (function (t) {
        function n(n, r) {
          var i;
          return (
            ((i = t.call(this) || this).cause = void 0),
            (i.message = n || "Unknown error"),
            (i.cause = r),
            s.captureStackTrace &&
              s.captureStackTrace(
                (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(i),
                i.constructor
              ),
            i
          );
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "name",
              get: function () {
                return "BaseError";
              },
            },
          ]),
          n
        );
      })(yt),
      It = (function (t) {
        function n(n) {
          return t.call(this, "Invalid XML", n) || this;
        }
        return g(n, t), n;
      })(gt),
      Et = (function () {
        function t() {}
        return (
          (t.prototype.Kn = function (t) {
            var n,
              r = new DOMParser();
            try {
              n = r.parseFromString(t, "text/xml");
            } catch (t) {
              throw new It(t);
            }
            if (!n || n.getElementsByTagName("parsererror").length > 0) throw new It();
            return new Dt(n);
          }),
          t
        );
      })(),
      St = (function () {
        function t(t) {
          (this.Jn = void 0), (this.Jn = t);
        }
        var n = t.prototype;
        return (
          (n.ni = function (t) {
            return this.Jn.isEqualNode(t.Jn);
          }),
          (n.ei = function (n) {
            return new t(this.Jn.cloneNode(n));
          }),
          m(t, [
            {
              key: "Gn",
              get: function () {
                return mt.Qn;
              },
            },
            {
              key: "ri",
              get: function () {
                var t;
                return null != (t = this.Jn.localName) ? t : Ot(this.Jn.nodeName);
              },
            },
            {
              key: "oi",
              get: function () {
                return this.Jn.nodeName;
              },
            },
            {
              key: "ai",
              get: function () {
                var t;
                return null != (t = this.Jn.namespaceURI) ? t : void 0;
              },
            },
            {
              key: "ci",
              get: function () {
                var t;
                return null != (t = this.Jn.prefix) ? t : void 0;
              },
            },
            {
              key: "di",
              get: function () {
                return this.Jn.nodeValue;
              },
            },
          ]),
          t
        );
      })(),
      Tt = (function () {
        function t(t) {
          (this._i = void 0), (this.gi = void 0), (this._i = t);
        }
        var n = t.prototype;
        return (
          (n.wi = function (t) {
            return this.Ai.filter(function (n) {
              return Rt(n) && n.Ti === t;
            });
          }),
          (n.Si = function (t, n) {
            return this.Ai.filter(function (r) {
              return Rt(r) && r.ri === n && r.ai === t;
            });
          }),
          (n.Ei = function (t) {
            this._i.appendChild(t.Ii), this.gi && this.gi.push(t);
          }),
          (n.ni = function (t) {
            return this._i.isEqualNode(t.Ii);
          }),
          m(t, [
            {
              key: "Ai",
              get: function () {
                return (
                  void 0 === this.gi &&
                    (this.gi = (function (t) {
                      for (var n = [], r = 0; r < t.length; r++) {
                        var i = Pt(t.item(r));
                        i && n.push(i);
                      }
                      return n;
                    })(this._i.childNodes)),
                  this.gi
                );
              },
            },
            {
              key: "Ri",
              get: function () {
                return this.Ai.filter(Rt);
              },
            },
            {
              key: "Ii",
              get: function () {
                return this._i;
              },
            },
          ]),
          t
        );
      })(),
      kt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        g(n, t);
        var r = n.prototype;
        return (
          (r.Ni = function (t) {
            if (this._i.hasAttribute(t)) return this._i.getAttribute(t);
          }),
          (r.Ci = function (t, n) {
            if (this._i.hasAttributeNS(t, n)) return this._i.getAttributeNS(t, n);
          }),
          (r.Di = function (t) {
            this._i.removeAttribute(t);
          }),
          (r.Pi = function (t, n) {
            this._i.removeAttributeNS(t, n);
          }),
          (r.Oi = function (t, n) {
            this._i.setAttribute(t, n);
          }),
          (r.xi = function (t, n, r) {
            this._i.setAttributeNS(t, n, r);
          }),
          (r.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          m(n, [
            {
              key: "Gn",
              get: function () {
                return mt.Xn;
              },
            },
            {
              key: "ri",
              get: function () {
                var t;
                return null != (t = this._i.localName) ? t : Ot(this._i.nodeName);
              },
            },
            {
              key: "ai",
              get: function () {
                var t;
                return null != (t = this._i.namespaceURI) ? t : void 0;
              },
            },
            {
              key: "ci",
              get: function () {
                var t;
                return null != (t = this._i.prefix) ? t : void 0;
              },
            },
            {
              key: "Ti",
              get: function () {
                return this._i.nodeName;
              },
            },
            {
              key: "Bi",
              get: function () {
                return (function (t) {
                  for (var n = [], r = 0; r < t.length; r++) n.push(new St(t.item(r)));
                  return n;
                })(this._i.attributes);
              },
            },
            {
              key: "Mi",
              get: function () {
                return this._i.textContent;
              },
            },
          ]),
          n
        );
      })(Tt),
      bt = (function () {
        function t(t) {
          (this._i = void 0), (this._i = t);
        }
        return (
          (t.prototype.ni = function (t) {
            return this.Li === t.Li;
          }),
          m(t, [
            {
              key: "Li",
              get: function () {
                return this._i.nodeValue;
              },
            },
            {
              key: "Ii",
              get: function () {
                return this._i;
              },
            },
          ]),
          t
        );
      })(),
      Nt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          g(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          m(n, [
            {
              key: "Gn",
              get: function () {
                return mt.$n;
              },
            },
          ]),
          n
        );
      })(bt),
      At = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          g(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          m(n, [
            {
              key: "Gn",
              get: function () {
                return mt.Yn;
              },
            },
          ]),
          n
        );
      })(bt),
      Dt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          g(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          m(n, [
            {
              key: "Gn",
              get: function () {
                return mt.Zn;
              },
            },
            {
              key: "Fi",
              get: function () {
                return new kt(this._i.documentElement);
              },
            },
          ]),
          n
        );
      })(Tt);
    function Rt(t) {
      return (function (t) {
        return t.Gn === mt.Xn;
      })(t);
    }
    function Pt(t) {
      switch (t.nodeType) {
        case mt.Xn:
          return new kt(t);
        case mt.$n:
          return new Nt(t);
        case mt.Yn:
          return new At(t);
      }
    }
    function Ot(t) {
      var n = t.indexOf(":");
      return n < 0 ? t : t.substr(n + 1);
    }
    function Ct(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          h.defineProperty(t, i.key, i);
      }
    }
    function Lt(t, n) {
      var r = (function (t, n) {
        var r = t.length;
        if (r <= 1) return t;
        for (var i = new Array(r), e = 1; e < r; e *= 2) {
          Ft(t, n, e, i);
          var u = t;
          (t = i), (i = u);
        }
        return t;
      })(t, n);
      return r !== t && Ft(r, null, t.length, t), t;
    }
    function Ft(t, n, r, i) {
      var e,
        u,
        o,
        a,
        f,
        s = t.length,
        c = 0,
        h = 2 * r;
      for (e = 0; e < s; e += h)
        for (o = (u = e + r) + r, u > s && (u = s), o > s && (o = s), a = e, f = u; ; )
          if (a < u && f < o) n(t[a], t[f]) <= 0 ? (i[c++] = t[a++]) : (i[c++] = t[f++]);
          else if (a < u) i[c++] = t[a++];
          else {
            if (!(f < o)) break;
            i[c++] = t[f++];
          }
    }
    var Mt = /[a-zA-Z]/,
      Bt = /[0-9]/,
      xt = /[0-9a-fA-F]/,
      Ut = /^0x/i,
      Ht = /^[0-9]+$/,
      Wt = /^[0-9a-fA-F]+$/,
      Gt = /^[0-7]+$/,
      Vt = h.prototype.toString,
      zt =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Vt.call(t);
        },
      Yt = "undefined" != typeof Symbol && "symbol" == typeof Symbol.iterator;
    function Xt(t) {
      return zt(t) ? t : Array.from(t);
    }
    function jt(t) {
      return t >= 65 && t <= 90;
    }
    function qt(t) {
      return (
        jt(t) ||
        (function (t) {
          return t >= 97 && t <= 122;
        })(t)
      );
    }
    function Kt(t) {
      return t >= 48 && t <= 57;
    }
    function Zt(t) {
      return Kt(t) || qt(t);
    }
    function $t(t) {
      return Kt(t) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
    }
    function Jt(t) {
      return jt(t) ? t + 32 : t;
    }
    function Qt(t) {
      return Kt(t) ? t - 48 : t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : -1;
    }
    function tn(t, n) {
      return void 0 === n && (n = !1), 0 <= t && t <= 9 ? t + 48 : 10 <= t && t <= 15 ? t + (n ? 87 : 55) : -1;
    }
    var nn = _.min,
      rn = String.fromCharCode,
      en = 16384;
    function un(t) {
      for (var n = t.length, r = [], i = 0; i < n; i += en) {
        var e = nn(i + en, n);
        r.push(rn.apply(null, t.slice(i, e)));
      }
      return r.join("");
    }
    var on = /[^\0-\x7E]/,
      an = /[\x2E\u3002\uFF0E\uFF61]/g,
      fn = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      sn = _.floor,
      cn = String.fromCharCode;
    function hn(t) {
      throw new RangeError(fn[t]);
    }
    function _n(t) {
      for (var n = [], r = 0, i = t.length; r < i; ) {
        var e = t.charCodeAt(r++);
        if (e >= 55296 && e <= 56319 && r < i) {
          var u = t.charCodeAt(r++);
          56320 == (64512 & u) ? n.push(((1023 & e) << 10) + (1023 & u) + 65536) : (n.push(e), r--);
        } else n.push(e);
      }
      return n;
    }
    var vn,
      ln,
      dn,
      pn = function (t, n) {
        return t + 22 + 75 * (t < 26) - ((0 != n) << 5);
      },
      wn = function (t, n, r) {
        var i = 0;
        for (t = r ? sn(t / 700) : t >> 1, t += sn(t / n); t > 455; i += 36) t = sn(t / 35);
        return sn(i + (36 * t) / (t + 38));
      },
      mn = function (t) {
        return (function (t, n) {
          var r = t.split("@"),
            i = "";
          r.length > 1 && ((i = r[0] + "@"), (t = r[1]));
          var e = (function (t, n) {
            for (var r = [], i = t.length; i--; ) r[i] = n(t[i]);
            return r;
          })((t = t.replace(an, ".")).split("."), n).join(".");
          return i + e;
        })(t, function (t) {
          return on.test(t)
            ? "xn--" +
                (function (t) {
                  for (var n = [], r = (t = _n(t)).length, i = 128, e = 0, u = 72, o = 0, a = t; o < a.length; o++) {
                    var f = a[o];
                    f < 128 && n.push(cn(f));
                  }
                  var s = n.length,
                    c = s;
                  for (s && n.push("-"); c < r; ) {
                    for (var h = 2147483647, _ = 0, v = t; _ < v.length; _++) {
                      var l = v[_];
                      l >= i && l < h && (h = l);
                    }
                    var d = c + 1;
                    h - i > sn((2147483647 - e) / d) && hn("overflow"), (e += (h - i) * d), (i = h);
                    for (var p = 0, w = t; p < w.length; p++) {
                      var m = w[p];
                      if ((m < i && ++e > 2147483647 && hn("overflow"), m == i)) {
                        for (var y = e, g = 36; ; g += 36) {
                          var I = g <= u ? 1 : g >= u + 26 ? 26 : g - u;
                          if (y < I) break;
                          var E = y - I,
                            S = 36 - I;
                          n.push(cn(pn(I + (E % S), 0))), (y = sn(E / S));
                        }
                        n.push(cn(pn(y, 0))), (u = wn(e, d, c == s)), (e = 0), ++c;
                      }
                    }
                    ++e, ++i;
                  }
                  return n.join("");
                })(t)
            : t;
        });
      };
    function yn(t) {
      for (var n = [], r = 0; r < t.length; r++) {
        var i = t[r];
        i > 65535 && ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (1023 & i))), n.push(i);
      }
      return un(n);
    }
    function gn(t) {
      if (t >= 55296 && t <= 57343)
        throw new s("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
    }
    function In(t, n) {
      return ((t >> n) & 63) | 128;
    }
    function En(t, n) {
      0 != (4294967168 & t)
        ? (0 == (4294965248 & t)
            ? n.push(((t >> 6) & 31) | 192)
            : 0 == (4294901760 & t)
            ? (gn(t), n.push(((t >> 12) & 15) | 224), n.push(In(t, 6)))
            : 0 == (4292870144 & t) && (n.push(((t >> 18) & 7) | 240), n.push(In(t, 12)), n.push(In(t, 6))),
          n.push((63 & t) | 128))
        : n.push(t);
    }
    function Sn(t) {
      for (var n = [], r = 0; r < t.length; r++) {
        En(t[r], n);
      }
      return n;
    }
    function Tn() {
      if (dn >= ln) throw new s("Invalid byte index");
      var t = 255 & vn[dn];
      if ((dn++, 128 == (192 & t))) return 63 & t;
      throw new s("Invalid continuation byte");
    }
    function kn() {
      var t, n;
      if (dn > ln) throw new s("Invalid byte index");
      if (dn === ln) return !1;
      if (((t = 255 & vn[dn]), dn++, 0 == (128 & t))) return t;
      if (192 == (224 & t)) {
        if ((n = ((31 & t) << 6) | Tn()) >= 128) return n;
        throw new s("Invalid continuation byte");
      }
      if (224 == (240 & t)) {
        if ((n = ((15 & t) << 12) | (Tn() << 6) | Tn()) >= 2048) return gn(n), n;
        throw new s("Invalid continuation byte");
      }
      if (240 == (248 & t) && (n = ((7 & t) << 18) | (Tn() << 12) | (Tn() << 6) | Tn()) >= 65536 && n <= 1114111)
        return n;
      throw new s("Invalid UTF-8 detected");
    }
    function bn(t) {
      return [37, tn(t >> 4), tn(15 & t)];
    }
    function Nn(t) {
      return (
        (function (t) {
          return t >= 0 && t <= 31;
        })(t) || t > 126
      );
    }
    function An(t) {
      return Nn(t) || 32 === t || 34 === t || 60 === t || 62 === t || 96 === t;
    }
    function Dn(t) {
      return An(t) || 35 === t || 63 === t || 123 === t || 125 === t;
    }
    function Rn(t) {
      return Dn(t) || 47 === t || 58 === t || 59 === t || 61 === t || 64 === t || (t >= 91 && t <= 94) || 124 === t;
    }
    function Pn(t) {
      return t < 33 || t > 126 || 34 === t || 35 === t || 60 === t || 62 === t;
    }
    function On(t) {
      return Pn(t) || 39 === t;
    }
    function Cn(t, n) {
      if (!n(t)) return [t];
      for (var r = Sn([t]), i = [], e = 0; e < r.length; e++) {
        var u = r[e];
        i.push.apply(i, bn(u));
      }
      return i;
    }
    function Ln(t, n) {
      for (var r = [], i = 0, e = _n(t); i < e.length; i++) {
        var u = e[i];
        r.push.apply(r, Cn(u, n));
      }
      return yn(r);
    }
    function Fn(t) {
      return (function (t) {
        for (var n = [], r = t.length, i = 0; i < r; i++) {
          var e = t[i];
          if (37 === e && i + 2 < r && $t(t[i + 1]) && $t(t[i + 2])) {
            var u = (Qt(t[i + 1]) << 4) | Qt(t[i + 2]);
            n.push(u), (i += 2);
          } else n.push(e);
        }
        return n;
      })(Sn(t));
    }
    function Mn(t) {
      return yn(
        (function (t) {
          (vn = t.slice()), (ln = vn.length), (dn = 0);
          for (var n, r = []; !1 !== (n = kn()); ) r.push(n);
          return r;
        })(Fn(_n(t)))
      );
    }
    function Bn(t) {
      var n,
        r,
        i,
        e,
        u = t.length,
        o = [0, 0, 0, 0, 0, 0, 0, 0],
        a = 0,
        f = null,
        s = 0;
      if (s < u && ":" === t[s]) {
        if (!(s + 1 < u && ":" === t[s + 1])) throw new c();
        (s += 2), (f = a += 1);
      }
      for (; s < u; ) {
        if (8 === a) throw new c("Too many groups");
        if (":" !== t[s]) {
          for (var h = 0, _ = 0; _ < 4 && s < u && xt.test(t[s]); ) (h = (h << 4) | v(t[s], 16)), (s += 1), (_ += 1);
          if ("." === t[s]) {
            if (0 === _) throw new c();
            if (((s -= _), a > 6)) throw new c();
            for (var l = 0; s < u; ) {
              var d = null;
              if (l > 0) {
                if (!("." === t[s] && l < 4)) throw new c();
                s += 1;
              }
              if (!Bt.test(t[s])) throw new c();
              for (; s < u && Bt.test(t[s]); ) {
                var p = v(t[s], 10);
                if (null === d) d = p;
                else {
                  if (0 === d) throw new c();
                  if ((d = 10 * d + p) > 255) throw new c();
                }
                s += 1;
              }
              (o[a] = (o[a] << 8) | d), (2 !== (l += 1) && 4 !== l) || (a += 1);
            }
            if (4 !== l) throw new c();
            break;
          }
          if (":" === t[s]) {
            if ((s += 1) === u) throw new c();
          } else if (s < u) throw new c();
          (o[a] = h), (a += 1);
        } else {
          if (null !== f) throw new c("Too many :: groups");
          (s += 1), (f = a += 1);
        }
      }
      if (null !== f) {
        var w = a - f;
        for (a = 7; 0 !== a && w > 0; )
          (i = f + w - 1), (e = void 0), (e = (n = o)[(r = a)]), (n[r] = n[i]), (n[i] = e), (a -= 1), (w -= 1);
      } else if (8 !== a) throw new c();
      return o;
    }
    function xn(t) {
      var n = 10,
        r = Ht;
      return (
        Ut.test(t)
          ? ((t = t.slice(2)), (n = 16), (r = Wt))
          : t.length >= 2 && "0" === t[0] && ((t = t.slice(1)), (n = 8), (r = Gt)),
        "" === t ? 0 : r.test(t) ? v(t, n) : void 0
      );
    }
    var Un = { Ui: 4 },
      Hn = /[\0\t\n\r #%/:?@\[\\\]]/,
      Wn = /[\0\t\n\r #/:?@\[\\\]]/;
    function Gn(t, n) {
      if ("[" === t[0]) {
        if ("]" !== t[t.length - 1]) throw new c("Invalid IPv6 address");
        return { Ui: 2, ji: Bn(t.slice(1, -1)) };
      }
      if (!n)
        return (function (t) {
          if (Wn.test(t)) throw new c("Invalid code point in opaque host");
          var n = Ln(t, Nn);
          return "" === n ? Un : { Ui: 3, Vi: n };
        })(t);
      var r = (function (t) {
        return (function (t) {
          return mn(t.toLowerCase());
        })(t);
      })(Mn(t));
      if (Hn.test(r)) throw new c("Invalid code point in host");
      var i = (function (t) {
        var n = t.split(".");
        if (("" === n[n.length - 1] && n.pop(), !(n.length > 4))) {
          for (var r = [], i = 0; i < n.length; i++) {
            var e = n[i];
            if ("" === e) return;
            var u = xn(e);
            if (void 0 === u) return;
            r.push(u);
          }
          for (var o = 0; o < r.length - 1; o++) if (r[o] > 255) throw new c();
          if (r[r.length - 1] >= _.pow(256, 5 - r.length)) throw new c();
          for (var a = r.pop(), f = 0; f < r.length; f++) a += r[f] * _.pow(256, 3 - f);
          return a;
        }
      })(r);
      return void 0 !== i ? { Ui: 1, ji: i } : "" === r ? Un : { Ui: 0, zi: r };
    }
    function Vn(t) {
      switch (t.Ui) {
        case 0:
          return t.zi;
        case 1:
          return (function (t) {
            for (var n = [], r = t, i = 1; i <= 4; i++) n.push("" + (255 & r)), 4 !== i && n.push("."), (r >>>= 8);
            return n.reverse().join("");
          })(t.ji);
        case 2:
          return (
            "[" +
            (function (t) {
              for (
                var n = "",
                  r = (function (t) {
                    for (var n = 0, r = 0, i = 0, e = 0, u = 0; u < 8; u++)
                      0 === t[u] ? (0 === e && (i = u), e++) : (e > r && ((n = i), (r = e)), (e = 0));
                    return e > r && ((n = i), (r = e)), r > 1 ? n : null;
                  })(t),
                  i = !1,
                  e = 0;
                e < 8;
                e++
              ) {
                if (i) {
                  if (0 === t[e]) continue;
                  i = !1;
                }
                r !== e ? ((n += t[e].toString(16)), 7 !== e && (n += ":")) : ((n += 0 === e ? "::" : ":"), (i = !0));
              }
              return n;
            })(t.ji) +
            "]"
          );
        case 3:
          return t.Vi;
        case 4:
          return "";
      }
    }
    var zn = /\+/g;
    function Yn(t) {
      for (var n = t.split("&"), r = [], i = 0; i < n.length; i++) {
        var e = n[i];
        if ("" !== e) {
          var u = e.indexOf("="),
            o = void 0,
            a = void 0;
          -1 !== u ? ((o = e.slice(0, u)), (a = e.slice(u + 1))) : ((o = e), (a = "")),
            (o = o.replace(zn, " ")),
            (a = a.replace(zn, " "));
          var f = Mn(o),
            s = Mn(a);
          r.push([f, s]);
        }
      }
      return r;
    }
    function Xn(t) {
      for (var n = "", r = 0; r < t.length; r++) {
        var i = t[r];
        r > 0 && (n += "&"), (n += jn(Sn(_n(i[0]))) + "=" + jn(Sn(_n(i[1]))));
      }
      return n;
    }
    function jn(t) {
      for (var n, r = [], i = 0; i < t.length; i++) {
        var e = t[i];
        32 === e
          ? r.push(43)
          : 42 === (n = e) || 45 === n || 46 === n || 95 === n || Zt(n)
          ? r.push(e)
          : r.push.apply(r, bn(e));
      }
      return un(r);
    }
    var qn = /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/;
    function Kn(t) {
      var n = "" + t,
        r = qn.exec(n);
      return r
        ? (function (t, n) {
            for (var r = t.length, i = [], e = n; e < r; e++) {
              var u = t.charCodeAt(e);
              if ($n(u))
                if (Jn(u) || e === r - 1) i.push(Zn);
                else {
                  var o = t.charCodeAt(e + 1);
                  Jn(o) ? (i.push(u, o), e++) : i.push(Zn);
                }
              else i.push(u);
            }
            return t.slice(0, n) + un(i);
          })(n, r.index)
        : n;
    }
    var Zn = 65533,
      $n = function (t) {
        return 55296 == (63488 & t);
      },
      Jn = function (t) {
        return 0 != (1024 & t);
      };
    function Qn(t, n) {
      var r = t[0],
        i = n[0];
      return r === i ? 0 : r < i ? -1 : 1;
    }
    function tr(t) {
      t.Hi.length = 0;
    }
    function nr(t, n) {
      !(function (t, n) {
        for (var r = 0; r < n.length; r++) t[r] = n[r];
        t.length = n.length;
      })(t.Hi, Yn(n));
    }
    function rr(t) {
      if (t.Wi) {
        var n = Xn(t.Hi);
        "" === n && (n = null), (t.Wi.Wi.qi = n);
      }
    }
    function ir(t) {
      return t instanceof er && !!zt(t.Hi) && (!Yt || t[Symbol.iterator] === ur);
    }
    var er = (function () {
        function t(t) {
          if ((void 0 === t && (t = void 0), (this.Wi = null), null == t)) this.Hi = [];
          else if ("object" == typeof t || "function" == typeof t)
            if (ir(t)) this.Hi = t.Hi.slice();
            else if (null != (u = t) && (zt(u) || (Yt && "function" == typeof u[Symbol.iterator]))) {
              this.Hi = [];
              for (var n = 0, r = Xt(t); n < r.length; n++) {
                var i = Xt(r[n]);
                if (2 !== i.length) throw new c("Invalid name-value pair");
                this.Hi.push([Kn(i[0]), Kn(i[1])]);
              }
            } else
              for (var e in ((this.Hi = []), t))
                h.prototype.hasOwnProperty.call(t, e) && this.Hi.push([Kn(e), Kn(t[e])]);
          else (t = Kn(t)).length > 0 && "?" === t[0] && (t = t.slice(1)), (this.Hi = Yn(t));
          var u;
        }
        var n = t.prototype;
        return (
          (n.append = function (t, n) {
            (t = Kn(t)), (n = Kn(n)), this.Hi.push([t, n]), rr(this);
          }),
          (n.delete = function (t) {
            t = Kn(t);
            for (var n = this.Hi, r = 0; r < n.length; ) {
              n[r][0] === t ? n.splice(r, 1) : r++;
            }
            rr(this);
          }),
          (n.get = function (t) {
            t = Kn(t);
            for (var n = this.Hi, r = 0; r < n.length; r++) {
              var i = n[r];
              if (i[0] === t) return i[1];
            }
            return null;
          }),
          (n.getAll = function (t) {
            t = Kn(t);
            for (var n = this.Hi, r = [], i = 0; i < n.length; i++) {
              var e = n[i];
              e[0] === t && r.push(e[1]);
            }
            return r;
          }),
          (n.has = function (t) {
            t = Kn(t);
            for (var n = this.Hi, r = 0; r < n.length; r++) {
              if (n[r][0] === t) return !0;
            }
            return !1;
          }),
          (n.set = function (t, n) {
            (t = Kn(t)), (n = Kn(n));
            for (var r = this.Hi, i = !1, e = 0; e < r.length; ) {
              var u = r[e];
              u[0] === t ? (i ? r.splice(e, 1) : ((u[1] = n), (i = !0), e++)) : e++;
            }
            i || r.push([t, n]), rr(this);
          }),
          (n.sort = function () {
            Lt(this.Hi, Qn), rr(this);
          }),
          (n.toString = function () {
            return Xn(this.Hi);
          }),
          (n.entries = function () {
            return new sr(this.Hi, or);
          }),
          (n.keys = function () {
            return new sr(this.Hi, ar);
          }),
          (n.values = function () {
            return new sr(this.Hi, fr);
          }),
          (n.forEach = function (t) {
            var n = this;
            this.Hi.forEach(function (r) {
              return t(r[1], r[0], n);
            });
          }),
          t
        );
      })(),
      ur = er.prototype.entries;
    Yt && (er.prototype[Symbol.iterator] = ur);
    var or = function (t) {
        return [t[0], t[1]];
      },
      ar = function (t) {
        return t[0];
      },
      fr = function (t) {
        return t[1];
      },
      sr = (function () {
        function t(t, n) {
          (this.Gi = 0), (this.Hi = t), (this.Xi = n);
        }
        return (
          (t.prototype.next = function () {
            return this.Gi < this.Hi.length
              ? { done: !1, value: this.Xi(this.Hi[this.Gi++]) }
              : { done: !0, value: void 0 };
          }),
          t
        );
      })(),
      cr = "null";
    var hr = h.create(null);
    (hr.ftp = 21), (hr.file = 0), (hr.gopher = 70), (hr.http = 80), (hr.https = 443), (hr.ws = 80), (hr.wss = 443);
    var _r = /^(?:\.|%2e)$/i,
      vr = /^(?:\.|%2e){2}$/i;
    function lr(t) {
      return _r.test(t);
    }
    function dr(t) {
      return vr.test(t);
    }
    function pr(t) {
      return void 0 !== hr[t];
    }
    function wr(t) {
      return pr(t.$i);
    }
    function mr(t) {
      return "" !== t.Qi || "" !== t.Yi;
    }
    function yr(t) {
      var n = t.length;
      if (!(n >= 2)) return !1;
      if (!Ir(t.slice(0, 2))) return !1;
      if (2 !== n) {
        var r = t[2];
        if (47 !== r && 92 !== r && 63 !== r && 35 !== r) return !1;
      }
      return !0;
    }
    function gr(t) {
      return 2 === t.length && Mt.test(t[0]) && (":" === t[1] || "|" === t[1]);
    }
    function Ir(t) {
      return 2 === t.length && gr(un(t));
    }
    function Er(t) {
      return gr(t) && ":" === t[1];
    }
    function Sr(t) {
      var n = t.Zi;
      0 !== n.length && (("file" === t.$i && 1 === n.length && Er(n[0])) || n.pop());
    }
    function Tr(t) {
      return null === t.Ki || Un === t.Ki || t.Ji || "file" === t.$i;
    }
    var kr = -1,
      br = /\t|\n|\r/g,
      Nr = /^[\x00-\x1f ]+|[\x00-\x1f ]+$/g;
    function Ar(t, n, r, i) {
      void 0 === r && (r = null), void 0 === i && (i = null), r || ((r = new Rr()), (t = t.replace(Nr, "")));
      var e = null !== i ? i : 0;
      n = n || null;
      for (var u = [], o = !1, a = !1, f = !1, s = _n((t = t.replace(br, ""))), h = s.length, _ = 0; _ <= h; ) {
        var l = _ < h ? s[_] : kr;
        switch (e) {
          case 0:
            if (!qt(l)) {
              if (null === i) {
                (u.length = 0), (e = 2);
                continue;
              }
              throw new c("Invalid scheme");
            }
            u.push(Jt(l)), (e = 1);
            break;
          case 1:
            if (Zt(l) || 43 === l || 45 === l || 46 === l) u.push(Jt(l));
            else {
              if (58 !== l) {
                if (null === i) {
                  (u.length = 0), (e = 2), (_ = 0);
                  continue;
                }
                throw new c("Invalid scheme");
              }
              var d = yn(u);
              if (null !== i) {
                if (pr(r.$i) && !pr(d)) return;
                if (!pr(r.$i) && pr(d)) return;
                if ((mr(r) || null !== r.re) && "file" === d) return;
                if ("file" === r.$i && (r.Ki === Un || null === r.Ki)) return;
              }
              if (((r.$i = d), null !== i)) return void (wr(r) && r.re === hr[r.$i] && (r.re = null));
              (u.length = 0),
                "file" === r.$i
                  ? (e = 13)
                  : wr(r) && n && n.$i === r.$i
                  ? (e = 3)
                  : wr(r)
                  ? (e = 7)
                  : 47 === s[_ + 1]
                  ? ((e = 4), (_ += 1))
                  : ((r.Ji = !0), r.Zi.push(""), (e = 18));
            }
            break;
          case 2:
            if (!n || (n.Ji && 35 !== l)) throw new c("Invalid scheme");
            n.Ji && 35 === l
              ? ((r.$i = n.$i), (r.Zi = n.Zi.slice()), (r.qi = n.qi), (r.ue = ""), (r.Ji = !0), (e = 20))
              : "file" !== n.$i
              ? ((e = 5), (_ -= 1))
              : ((e = 13), (_ -= 1));
            break;
          case 3:
            47 === l && 47 === s[_ + 1] ? (e = 8) : ((e = 5), (_ -= 1));
            break;
          case 4:
            47 === l ? (e = 9) : ((e = 17), (_ -= 1));
            break;
          case 5:
            (r.$i = n.$i),
              kr === l
                ? ((r.Qi = n.Qi), (r.Yi = n.Yi), (r.Ki = n.Ki), (r.re = n.re), (r.Zi = n.Zi.slice()), (r.qi = n.qi))
                : 47 === l
                ? (e = 6)
                : 63 === l
                ? ((r.Qi = n.Qi),
                  (r.Yi = n.Yi),
                  (r.Ki = n.Ki),
                  (r.re = n.re),
                  (r.Zi = n.Zi.slice()),
                  (r.qi = ""),
                  (e = 19))
                : 35 === l
                ? ((r.Qi = n.Qi),
                  (r.Yi = n.Yi),
                  (r.Ki = n.Ki),
                  (r.re = n.re),
                  (r.Zi = n.Zi.slice()),
                  (r.qi = n.qi),
                  (r.ue = ""),
                  (e = 20))
                : 92 === l && wr(r)
                ? (e = 6)
                : ((r.Qi = n.Qi),
                  (r.Yi = n.Yi),
                  (r.Ki = n.Ki),
                  (r.re = n.re),
                  (r.Zi = n.Zi.slice()),
                  r.Zi.pop(),
                  (e = 17),
                  (_ -= 1));
            break;
          case 6:
            !wr(r) || (47 !== l && 92 !== l)
              ? 47 === l
                ? (e = 9)
                : ((r.Qi = n.Qi), (r.Yi = n.Yi), (r.Ki = n.Ki), (r.re = n.re), (e = 17), (_ -= 1))
              : (e = 8);
            break;
          case 7:
            if (47 !== l || 47 !== s[_ + 1]) {
              e = 8;
              continue;
            }
            (e = 8), (_ += 1);
            break;
          case 8:
            47 !== l && 92 !== l && ((e = 9), (_ -= 1));
            break;
          case 9:
            if (64 === l) {
              o && u.unshift(37, 52, 48), (o = !0);
              for (var p = 0; p < u.length; p++) {
                var w = u[p];
                if (58 !== w || f) {
                  var m = yn(Cn(w, Rn));
                  f ? (r.Yi += m) : (r.Qi += m);
                } else f = !0;
              }
              u.length = 0;
            } else if (kr === l || 47 === l || 63 === l || 35 === l || (wr(r) && 92 === l)) {
              if (o && 0 === u.length) throw new c("Invalid host");
              (_ -= u.length + 1), (u.length = 0), (e = 10);
            } else u.push(l);
            break;
          case 10:
          case 11:
            if (null !== i && "file" === r.$i) (_ -= 1), (e = 15);
            else if (58 !== l || a)
              if (kr === l || 47 === l || 63 === l || 35 === l || (wr(r) && 92 === l)) {
                if (((_ -= 1), wr(r) && 0 === u.length)) throw new c("Invalid host");
                if (null !== i && 0 === u.length && (mr(r) || null !== r.re)) return;
                var y = Gn(yn(u), wr(r));
                if (((r.Ki = y), (u.length = 0), (e = 16), null !== i)) return;
              } else 91 === l ? (a = !0) : 93 === l && (a = !1), u.push(l);
            else {
              if (0 === u.length) throw new c("Invalid host");
              var g = Gn(yn(u), wr(r));
              if (((r.Ki = g), (u.length = 0), (e = 12), 11 === i)) return;
            }
            break;
          case 12:
            if (Kt(l)) u.push(l);
            else {
              if (!(kr === l || 47 === l || 63 === l || 35 === l || (wr(r) && 92 === l) || null !== i))
                throw new c("Invalid port");
              if (0 !== u.length) {
                var I = v(yn(u), 10);
                if (I > 65535) throw new c("Invalid port");
                (r.re = I === hr[r.$i] ? null : I), (u.length = 0);
              }
              if (null !== i) return;
              (e = 16), (_ -= 1);
            }
            break;
          case 13:
            (r.$i = "file"),
              47 === l || 92 === l
                ? (e = 14)
                : n && "file" === n.$i
                ? kr === l
                  ? ((r.Ki = n.Ki), (r.Zi = n.Zi.slice()), (r.qi = n.qi))
                  : 63 === l
                  ? ((r.Ki = n.Ki), (r.Zi = n.Zi.slice()), (r.qi = ""), (e = 19))
                  : 35 === l
                  ? ((r.Ki = n.Ki), (r.Zi = n.Zi.slice()), (r.qi = n.qi), (r.ue = ""), (e = 20))
                  : (yr(s.slice(_)) || ((r.Ki = n.Ki), (r.Zi = n.Zi.slice()), Sr(r)), (e = 17), (_ -= 1))
                : ((e = 17), (_ -= 1));
            break;
          case 14:
            47 === l || 92 === l
              ? (e = 15)
              : (n && "file" === n.$i && !yr(s.slice(_)) && (Er(n.Zi[0]) ? r.Zi.push(n.Zi[0]) : (r.Ki = n.Ki)),
                (e = 17),
                (_ -= 1));
            break;
          case 15:
            if (kr === l || 47 === l || 92 === l || 63 === l || 35 === l)
              if (((_ -= 1), null === i && Ir(u))) e = 17;
              else if (0 === u.length) {
                if (((r.Ki = Un), null !== i)) return;
                e = 16;
              } else {
                var E = Gn(yn(u), wr(r));
                if ((0 === E.Ui && "localhost" === E.zi && (E = Un), (r.Ki = E), null !== i)) return;
                (u.length = 0), (e = 16);
              }
            else u.push(l);
            break;
          case 16:
            wr(r)
              ? ((e = 17), 47 !== l && 92 !== l && (_ -= 1))
              : null === i && 63 === l
              ? ((r.qi = ""), (e = 19))
              : null === i && 35 === l
              ? ((r.ue = ""), (e = 20))
              : kr !== l && ((e = 17), 47 !== l && (_ -= 1));
            break;
          case 17:
            if (kr === l || 47 === l || (wr(r) && 92 === l) || (null === i && (63 === l || 35 === l))) {
              var S = yn(u);
              if (
                (dr(S)
                  ? (Sr(r), 47 === l || (wr(r) && 92 === l) || r.Zi.push(""))
                  : !lr(S) || 47 === l || (wr(r) && 92 === l)
                  ? lr(S) ||
                    ("file" === r.$i &&
                      0 === r.Zi.length &&
                      Ir(u) &&
                      (Un !== r.Ki && null !== r.Ki && (r.Ki = Un), (u[1] = 58), (S = yn(u))),
                    r.Zi.push(S))
                  : r.Zi.push(""),
                (u.length = 0),
                "file" === r.$i && (kr === l || 63 === l || 35 === l))
              )
                for (; r.Zi.length > 1 && "" === r.Zi[0]; ) r.Zi.shift();
              63 === l ? ((r.qi = ""), (e = 19)) : 35 === l && ((r.ue = ""), (e = 20));
            } else u.push.apply(u, Cn(l, Dn));
            break;
          case 18:
            63 === l
              ? ((r.qi = ""), (e = 19))
              : 35 === l
              ? ((r.ue = ""), (e = 20))
              : kr !== l && (r.Zi[0] += yn(Cn(l, Nn)));
            break;
          case 19:
            null === i && 35 === l ? ((r.ue = ""), (e = 20)) : kr !== l && (r.qi += yn(Cn(l, wr(r) ? On : Pn)));
            break;
          case 20:
            kr === l || 0 === l || (r.ue += yn(Cn(l, An)));
        }
        _++;
      }
      return r;
    }
    function Dr(t, n, r, i) {
      try {
        Ar(t, n, r, i);
      } catch (t) {}
    }
    var Rr = function () {
      (this.$i = ""),
        (this.Qi = ""),
        (this.Yi = ""),
        (this.Ki = null),
        (this.re = null),
        (this.Zi = []),
        (this.qi = null),
        (this.ue = null),
        (this.Ji = !1);
    };
    function Pr(t) {
      switch (t.$i) {
        case "blob":
          var n;
          try {
            n = Ar(t.Zi[0], null);
          } catch (t) {
            return cr;
          }
          return Pr(n);
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return (r = t.$i), (i = t.Ki), (e = t.re), r + "://" + Vn(i) + (null === e ? "" : ":" + e);
        case "file":
        default:
          return cr;
      }
      var r, i, e;
    }
    function Or(t) {
      return null != t && t instanceof Cr && "object" == typeof t.Wi;
    }
    var Cr = (function () {
      function t(t, n) {
        var r,
          i = null;
        if (null != n)
          if (Or(n)) i = n.Wi;
          else
            try {
              i = Ar(String(n), null);
            } catch (t) {
              throw new c("Invalid base URL: " + t.message);
            }
        try {
          r = Ar(String(t), i);
        } catch (t) {
          throw new c("Invalid URL: " + t.message);
        }
        var e = r.qi;
        (this.Wi = r),
          (this.qi = (function (t) {
            var n = new er();
            return null !== t && nr(n, t), n;
          })(e)),
          (this.qi.Wi = this);
      }
      var n,
        r,
        i,
        e = t.prototype;
      return (
        (e.toString = function () {
          return this.href;
        }),
        (e.toJSON = function () {
          return this.href;
        }),
        (n = t),
        (r = [
          {
            key: "href",
            get: function () {
              return (function (t, n) {
                void 0 === n && (n = !1);
                var r = t.$i + ":";
                if (
                  (null !== t.Ki
                    ? ((r += "//"),
                      mr(t) && ((r += t.Qi), "" !== t.Yi && (r += ":" + t.Yi), (r += "@")),
                      (r += Vn(t.Ki)),
                      null !== t.re && (r += ":" + t.re))
                    : null === t.Ki && "file" === t.$i && (r += "//"),
                  t.Ji)
                )
                  r += t.Zi[0];
                else for (var i = 0, e = t.Zi; i < e.length; i++) r += "/" + e[i];
                return null !== t.qi && (r += "?" + t.qi), n || null === t.ue || (r += "#" + t.ue), r;
              })(this.Wi);
            },
            set: function (t) {
              var n;
              try {
                n = Ar(String(t), null);
              } catch (t) {
                throw new c("Invalid URL: " + t.message);
              }
              (this.Wi = n), tr(this.qi);
              var r = this.Wi.qi;
              null !== r && nr(this.qi, r);
            },
          },
          {
            key: "origin",
            get: function () {
              return Pr(this.Wi);
            },
          },
          {
            key: "protocol",
            get: function () {
              return this.Wi.$i + ":";
            },
            set: function (t) {
              Dr(t + ":", null, this.Wi, 0);
            },
          },
          {
            key: "username",
            get: function () {
              return this.Wi.Qi;
            },
            set: function (t) {
              Tr(this.Wi) || (this.Wi.Qi = Ln(t, Rn));
            },
          },
          {
            key: "password",
            get: function () {
              return this.Wi.Yi;
            },
            set: function (t) {
              Tr(this.Wi) || (this.Wi.Yi = Ln(t, Rn));
            },
          },
          {
            key: "host",
            get: function () {
              var t = this.Wi,
                n = t.Ki;
              if (null === n) return "";
              var r = t.re,
                i = Vn(n);
              return null !== r && (i += ":" + r), i;
            },
            set: function (t) {
              this.Wi.Ji || Dr(t, null, this.Wi, 10);
            },
          },
          {
            key: "hostname",
            get: function () {
              var t = this.Wi.Ki;
              return null === t ? "" : Vn(t);
            },
            set: function (t) {
              this.Wi.Ji || Dr(t, null, this.Wi, 11);
            },
          },
          {
            key: "port",
            get: function () {
              var t = this.Wi.re;
              return null === t ? "" : "" + t;
            },
            set: function (t) {
              Tr(this.Wi) || ("" === t ? (this.Wi.re = null) : Dr(t, null, this.Wi, 12));
            },
          },
          {
            key: "pathname",
            get: function () {
              var t = this.Wi.Zi;
              return this.Wi.Ji ? t[0] : 0 === t.length ? "" : "/" + t.join("/");
            },
            set: function (t) {
              this.Wi.Ji || ((this.Wi.Zi.length = 0), Dr(t, null, this.Wi, 16));
            },
          },
          {
            key: "search",
            get: function () {
              var t = this.Wi.qi;
              return null === t || "" === t ? "" : "?" + t;
            },
            set: function (t) {
              t = Kn(t);
              var n = this.Wi;
              if ("" === t) return (n.qi = null), void tr(this.qi);
              "?" === t[0] && (t = t.slice(1)), (n.qi = ""), Dr(t, null, n, 19), nr(this.qi, t);
            },
          },
          {
            key: "searchParams",
            get: function () {
              return this.qi;
            },
          },
          {
            key: "hash",
            get: function () {
              var t = this.Wi.ue;
              return null === t || "" === t ? "" : "#" + t;
            },
            set: function (t) {
              "" !== t
                ? ("#" === t[0] && (t = t.slice(1)), (this.Wi.ue = ""), Dr(t, null, this.Wi, 20))
                : (this.Wi.ue = null);
            },
          },
        ]) && Ct(n.prototype, r),
        i && Ct(n, i),
        t
      );
    })();
    function Lr(t) {
      return (t.document && t.document.baseURI) || t.location.href || "";
    }
    var Fr = u;
    function Mr(t) {
      return Boolean(t && void 0 !== t.length);
    }
    function Br() {}
    function xr(t) {
      if (!(this instanceof xr)) throw new c("Promises must be constructed via new");
      if ("function" != typeof t) throw new c("not a function");
      (this.oe = 0), (this.fe = !1), (this._e = void 0), (this.we = []), zr(t, this);
    }
    function Ur(t, n) {
      for (; 3 === t.oe; ) t = t._e;
      0 !== t.oe
        ? ((t.fe = !0),
          xr.ye(function () {
            var r = 1 === t.oe ? n.onFulfilled : n.onRejected;
            if (null !== r) {
              var i;
              try {
                i = r(t._e);
              } catch (t) {
                return void Wr(n.promise, t);
              }
              Hr(n.promise, i);
            } else (1 === t.oe ? Hr : Wr)(n.promise, t._e);
          }))
        : t.we.push(n);
    }
    function Hr(t, n) {
      try {
        if (n === t) throw new c("A promise cannot be resolved with itself.");
        if (n && ("object" == typeof n || "function" == typeof n)) {
          var r = n.then;
          if (n instanceof xr) return (t.oe = 3), (t._e = n), void Gr(t);
          if ("function" == typeof r)
            return void zr(
              ((i = r),
              (e = n),
              function () {
                i.apply(e, arguments);
              }),
              t
            );
        }
        (t.oe = 1), (t._e = n), Gr(t);
      } catch (n) {
        Wr(t, n);
      }
      var i, e;
    }
    function Wr(t, n) {
      (t.oe = 2), (t._e = n), Gr(t);
    }
    function Gr(t) {
      2 === t.oe &&
        0 === t.we.length &&
        xr.ye(function () {
          t.fe || xr.me(t._e);
        });
      for (var n = 0, r = t.we.length; n < r; n++) Ur(t, t.we[n]);
      t.we = null;
    }
    function Vr(t, n, r) {
      (this.onFulfilled = "function" == typeof t ? t : null),
        (this.onRejected = "function" == typeof n ? n : null),
        (this.promise = r);
    }
    function zr(t, n) {
      var r = !1;
      try {
        t(
          function (t) {
            r || ((r = !0), Hr(n, t));
          },
          function (t) {
            r || ((r = !0), Wr(n, t));
          }
        );
      } catch (t) {
        if (r) return;
        (r = !0), Wr(n, t);
      }
    }
    (xr.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (xr.prototype.then = function (t, n) {
        var r = new this.constructor(Br);
        return Ur(this, new Vr(t, n, r)), r;
      }),
      (xr.prototype.finally = function (t) {
        var n = this.constructor;
        return this.then(
          function (r) {
            return n.resolve(t()).then(function () {
              return r;
            });
          },
          function (r) {
            return n.resolve(t()).then(function () {
              return n.reject(r);
            });
          }
        );
      }),
      (xr.all = function (t) {
        return new xr(function (n, r) {
          if (!Mr(t)) return r(new c("Promise.all accepts an array"));
          var i = Array.prototype.slice.call(t);
          if (0 === i.length) return n([]);
          var e = i.length;
          function u(t, o) {
            try {
              if (o && ("object" == typeof o || "function" == typeof o)) {
                var a = o.then;
                if ("function" == typeof a)
                  return void a.call(
                    o,
                    function (n) {
                      u(t, n);
                    },
                    r
                  );
              }
              (i[t] = o), 0 == --e && n(i);
            } catch (t) {
              r(t);
            }
          }
          for (var o = 0; o < i.length; o++) u(o, i[o]);
        });
      }),
      (xr.allSettled = function (t) {
        return new this(function (n, r) {
          if (!t || void 0 === t.length)
            return r(new c(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var i = Array.prototype.slice.call(t);
          if (0 === i.length) return n([]);
          var e = i.length;
          function u(t, r) {
            if (r && ("object" == typeof r || "function" == typeof r)) {
              var o = r.then;
              if ("function" == typeof o)
                return void o.call(
                  r,
                  function (n) {
                    u(t, n);
                  },
                  function (r) {
                    (i[t] = { status: "rejected", reason: r }), 0 == --e && n(i);
                  }
                );
            }
            (i[t] = { status: "fulfilled", value: r }), 0 == --e && n(i);
          }
          for (var o = 0; o < i.length; o++) u(o, i[o]);
        });
      }),
      (xr.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === xr
          ? t
          : new xr(function (n) {
              n(t);
            });
      }),
      (xr.reject = function (t) {
        return new xr(function (n, r) {
          r(t);
        });
      }),
      (xr.race = function (t) {
        return new xr(function (n, r) {
          if (!Mr(t)) return r(new c("Promise.race accepts an array"));
          for (var i = 0, e = t.length; i < e; i++) xr.resolve(t[i]).then(n, r);
        });
      }),
      (xr.ye =
        ("function" == typeof setImmediate &&
          function (t) {
            setImmediate(t);
          }) ||
        function (t) {
          Fr(t, 0);
        }),
      (xr.me = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
      });
    var Yr = (function () {
        var n = t.Promise;
        if (void 0 !== n)
          try {
            if (-1 !== n.toString().indexOf("[native code]")) return n;
          } catch (t) {}
      })(),
      Xr = e ? e.userAgent : "",
      jr = Xr.match(/Firefox\/([0-9]+)/i),
      qr = null != jr,
      Kr = jr ? Number(jr[1]) : 0,
      Zr = Xr.match(/(Version)\/((\d+)\.(\d+)(?:\.(\d+))?).*Safari/),
      $r = null != Zr,
      Jr = Zr ? Number(Zr[3]) : 0,
      Qr = (function () {
        function t(t) {
          (this.pe = 0), (this.ke = 0), (this.Vi = []), (this.Ae = t);
        }
        return (
          (t.prototype.Te = function (t) {
            var n = this.length();
            this.Se(n + 1);
            var r = (this.ke + n) & (this.Ae - 1);
            (this.Vi[r] = t), (this.pe = n + 1);
          }),
          (t.prototype.push = function (t) {
            var n = this.length() + 1;
            if (this.Ae < n) this.Te(t);
            else {
              var r = this.ke + n - 1,
                i = this.Ae - 1;
              (this.Vi[r & i] = t), (this.pe = n);
            }
          }),
          (t.prototype.shift = function () {
            var t = this.ke,
              n = this.Vi[t];
            return (this.Vi[t] = void 0), (this.ke = (t + 1) & (this.Ae - 1)), this.pe--, n;
          }),
          (t.prototype.length = function () {
            return this.pe;
          }),
          (t.prototype.Se = function (t) {
            this.Ae < t && this.Ee(this.Ae << 1);
          }),
          (t.prototype.Ee = function (t) {
            var n = this.Ae;
            this.Ae = t;
            var r = (this.ke + this.pe) & (n - 1);
            !(function (t, n, r, i) {
              for (var e = 0; e < i; ++e) (t[e + r] = t[e + n]), (t[e + n] = void 0);
            })(this.Vi, 0, n, r);
          }),
          t
        );
      })();
    var ti = "unhandledrejection",
      ni = t.PromiseRejectionEvent,
      ri = t.CustomEvent;
    function ii(t) {
      return new ni(ti, { reason: t, promise: Yr.reject(t).catch(function () {}), cancelable: !0 });
    }
    function ei(t) {
      var n = new ri(ti, { detail: { reason: t }, cancelable: !0 });
      return h.defineProperty(n, "reason", { value: t }), n;
    }
    function ui(t) {
      var n = i.createEvent("CustomEvent");
      return n.initCustomEvent(ti, !1, !0, { reason: t }), n;
    }
    var oi,
      ai,
      fi,
      si,
      ci,
      hi,
      _i,
      vi = function (t) {
        return (vi = (function () {
          try {
            var t = Yr.resolve(),
              n = new ni(ti, { reason: "error", promise: t });
            return ti === n.type && "error" === n.reason;
          } catch (t) {}
          return !1;
        })()
          ? ii
          : (function () {
              try {
                var t = new ri(ti, { detail: { reason: "error" } });
                return ti === t.type && "error" === t.detail.reason;
              } catch (t) {}
              return !1;
            })()
          ? ei
          : ui)(t);
      };
    if (Yr && !((qr && Kr < 60) || ($r && Jr < 15))) ai = Yr;
    else {
      ai = xr;
      var li =
          null !==
            (oi = (function () {
              var n = t.queueMicrotask;
              if ("function" == typeof n)
                return function (t) {
                  return n(t);
                };
              var r = Yr;
              if (r && "function" == typeof r.resolve) {
                var i = r.resolve();
                return function (t) {
                  return i.then(t);
                };
              }
            })()) && void 0 !== oi
            ? oi
            : xr.ye,
        di =
          ((fi = li),
          (si = new Qr(16)),
          (ci = !1),
          {
            Ie: function (t) {
              si.push(t), ci || ((ci = !0), fi(hi));
            },
            Re: (hi = function () {
              for (; si.length() > 0; ) si.shift()();
              ci = !1;
            }),
          });
      (xr.ye = di.Ie),
        (xr.me = function (n) {
          try {
            var r = vi(n);
            if (!t.dispatchEvent(r) || r.defaultPrevented) return;
          } catch (t) {}
          u(function () {
            throw new s("Unhandled promise rejection: ".concat(n));
          }, 0);
        });
    }
    function pi() {
      return void 0 !== i ? i.createElement("video") : void 0;
    }
    var wi =
        !!("ontouchstart" in t || (t.DocumentTouch && i instanceof t.DocumentTouch)) || !(!e || !e.msMaxTouchPoints),
      mi = (_i || (_i = pi()), _i),
      yi = !(!mi || !mi.webkitShowPlaybackTargetPicker),
      gi = (function () {
        function t() {
          (this.Ne = void 0), (this.Ce = !1), (this.jt = wi), (this.in = !1), (this.De = !0), (this.Pe = !0);
        }
        var n = t.prototype;
        return (
          (n.Oe = function () {
            return 0;
          }),
          (n.xe = function (t, n) {
            return !0;
          }),
          (n.Be = function (t) {
            return t >= (1 / 6) * 2;
          }),
          m(t, [
            {
              key: "Me",
              get: function () {
                return void 0 === this.Ne && (this.Ne = this.Oe()), this.Ne;
              },
            },
            {
              key: "Le",
              get: function () {
                return r.devicePixelRatio || 1;
              },
            },
            {
              key: "Fe",
              get: function () {
                return yi;
              },
            },
            {
              key: "Ue",
              get: function () {
                return !1;
              },
            },
            {
              key: "je",
              get: function () {
                return !0;
              },
            },
            {
              key: "Ve",
              get: function () {
                return P.In || P.Zt;
              },
            },
            {
              key: "ze",
              get: function () {
                return !0;
              },
            },
            {
              key: "He",
              get: function () {
                return !0;
              },
            },
            {
              key: "We",
              get: function () {
                return !1;
              },
            },
            { key: "qe", get: function () {} },
            {
              key: "Ge",
              get: function () {
                return !0;
              },
            },
            {
              key: "Xe",
              get: function () {
                return !1;
              },
            },
          ]),
          t
        );
      })(),
      Ii = (function () {
        var t = pi();
        if (!t) return !1;
        var n = t.muted;
        return (t.muted = !n), t.muted !== n;
      })();
    !(function () {
      if (P.Qt) return !1;
      var t = pi();
      if (!t) return !1;
      var n = t.volume;
      (t.volume = n / 2 + 0.1), t.volume;
    })();
    var Ei = (function (t) {
        function n(n) {
          var r;
          return (
            ((r = t.call(this) || this).$e = void 0),
            (r.$e = n),
            r.$e && ((r.Ce = r.$e.Ce), (r.jt = r.$e.jt), (r.De = Ii && r.$e.De)),
            r
          );
        }
        g(n, t);
        var r = n.prototype;
        return (
          (r.Oe = function () {
            return this.$e ? this.$e.Me : t.prototype.Oe.call(this);
          }),
          (r.xe = function (n, r) {
            return this.$e ? this.$e.xe(n, r) : t.prototype.xe.call(this, n, r);
          }),
          (r.Be = function (n) {
            return this.$e ? this.$e.Be(n) : t.prototype.Be.call(this, n);
          }),
          m(n, [
            {
              key: "qe",
              get: function () {
                var t;
                return null == (t = this.$e) ? void 0 : t.qe;
              },
            },
            {
              key: "Ge",
              get: function () {
                var t, n;
                return null == (t = null == (n = this.$e) ? void 0 : n.Ge) || t;
              },
            },
          ]),
          n
        );
      })(gi),
      Si = (function (t) {
        function n(n) {
          var r;
          return ((r = t.call(this, n) || this).Ce = !0), (r.in = !0), r;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "We",
              get: function () {
                return P.Zt;
              },
            },
          ]),
          n
        );
      })(Ei),
      Ti = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          (n.prototype.Oe = function () {
            if (!(void 0).MediaSource) return 1;
          }),
          m(n, [
            {
              key: "We",
              get: function () {
                return !0;
              },
            },
          ]),
          n
        );
      })(Si),
      ki = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          (n.prototype.xe = function (n, r) {
            return t.prototype.xe.call(this, n, r);
          }),
          m(n, [
            {
              key: "Ue",
              get: function () {
                return P._n < 3;
              },
            },
            {
              key: "je",
              get: function () {
                return P._n >= 3;
              },
            },
            {
              key: "Xe",
              get: function () {
                return P._n < 3;
              },
            },
          ]),
          n
        );
      })(Ei),
      bi = (function (t) {
        function n() {
          return t.call(this) || this;
        }
        return g(n, t), n;
      })(gi),
      Ni = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          (n.prototype.xe = function (t, n) {
            if (t && t.Qe && n && n.Qe) {
              var r = Ai(t.Qe, "mp4a.40.2") && Ai(n.Qe, "mp4a.40.5"),
                i = Ai(t.Qe, "mp4a.40.5") && Ai(n.Qe, "mp4a.40.2"),
                e = Ai(t.Qe, "mp4a.40.2") && Ai(n.Qe, "mp4a.40.34"),
                u = Ai(t.Qe, "mp4a.40.34") && Ai(n.Qe, "mp4a.40.2"),
                o = Ai(t.Qe, "mp4a.40.5") && Ai(n.Qe, "mp4a.40.34"),
                a = Ai(t.Qe, "mp4a.40.34") && Ai(n.Qe, "mp4a.40.5");
              return !(r || i || e || u || o || a);
            }
            return !0;
          }),
          m(n, [
            {
              key: "qe",
              get: function () {
                if (P.Vt) return 4096;
              },
            },
          ]),
          n
        );
      })(bi);
    function Ai(t, n) {
      return t.indexOf(n) > -1;
    }
    var Di = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          (n.prototype.Be = function (t) {
            return t >= 2;
          }),
          n
        );
      })(bi),
      Ri = (function (t) {
        function n() {
          var n;
          return ((n = t.call(this) || this).Ce = P.Rn >= 11), (n.De = P.In && !(P.Zt && P.Rn < 10)), n;
        }
        return g(n, t), n;
      })(bi),
      Pi = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "ze",
              get: function () {
                return !1;
              },
            },
          ]),
          n
        );
      })(Ei),
      Oi = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "Ge",
              get: function () {
                return !P.zt || (P.fn ? 92 !== P.vn : P.cn >= 100);
              },
            },
          ]),
          n
        );
      })(bi),
      Ci = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "We",
              get: function () {
                return !0;
              },
            },
          ]),
          n
        );
      })(Ei),
      Li = (function () {
        function n() {
          var n;
          (this.zn = void 0),
            (this.Ye = new Et()),
            (this.Ze = new Fi()),
            (this.Ke =
              ((n = (function () {
                if (P.Sn) return new Ni();
                if (P.yn || P.pn) return new Di();
                if (P.In) return new Ri();
                if (P.hn) return new Oi();
                return new bi();
              })()),
              P.Zt
                ? new Ti(n)
                : P.in
                ? new Si(n)
                : P.dn
                ? new ki(n)
                : P.wn
                ? new Pi(n)
                : P.Vt
                ? new Ci(n)
                : new Ei(n))),
            (this.Je = (function () {
              if (t.URL)
                try {
                  var n = new t.URL("b", "http://a");
                  return (n.pathname = "c d"), "http://a/c%20d" === n.href;
                } catch (t) {}
              return !1;
            })()),
            t.performance && t.performance.now
              ? (this.zn = function () {
                  return t.performance.now();
                })
              : (this.zn = wt);
        }
        var r = n.prototype;
        return (
          (r.ir = function () {
            H.apply(void 0, arguments);
          }),
          (r.rr = function () {
            W.apply(void 0, arguments);
          }),
          (r.dr = function () {
            G.apply(void 0, arguments);
          }),
          (r._r = function (t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            V.apply(void 0, [t].concat(r));
          }),
          (r.Wn = function (t, n) {
            return u(t, n);
          }),
          (r.gr = function (t, n) {
            return a(t, n);
          }),
          (r.Hn = function (t) {
            o(t);
          }),
          (r.wr = function (t) {
            f(t);
          }),
          (r.Kn = function (t) {
            return this.Ye.Kn(t);
          }),
          (r.yr = function () {
            return this.pr.yr();
          }),
          (r.Ar = function () {
            return this.pr.Ar();
          }),
          (r.Tr = function () {
            return this.pr.Tr();
          }),
          (r.Sr = function () {
            return this.pr.Sr();
          }),
          (r.Er = function () {
            return this.pr.Er();
          }),
          (r.Ir = function (t, n) {
            return this.pr.Ir(t, n);
          }),
          (r.Rr = function (t) {
            return this.pr.Rr(t);
          }),
          (r.Nr = function (t, n) {
            var r;
            return (
              void 0 === n && (n = Lr(void 0)), (r = "object" != typeof n || n instanceof Cr ? n : n.href), new Cr(t, r)
            );
          }),
          (r.Cr = function (n, r) {
            if ((void 0 === r && (r = Lr(void 0)), this.Je)) {
              var i = "string" == typeof r ? r : r.toString();
              return new t.URL(n, i).href;
            }
            return this.Nr(n, r).href;
          }),
          m(n, [
            {
              key: "Dr",
              get: function () {
                return this.Ze;
              },
            },
            {
              key: "Pr",
              get: function () {
                return this.Ke;
              },
            },
            {
              key: "Or",
              get: function () {
                return {
                  xr: e && e.userAgent.match(/Android /i) ? "Android" : "other",
                  Br: Boolean(e && e.userAgent.match(/Android 8.0.0/i)),
                };
              },
            },
            {
              key: "Mr",
              get: function () {
                return t && t.location && "https:" === t.location.protocol;
              },
            },
            {
              key: "Lr",
              get: function () {
                return "languages" in e ? e.languages.slice() : [e.language];
              },
            },
          ]),
          n
        );
      })(),
      Fi = (function () {
        function t() {}
        return (
          m(t, [
            {
              key: "Fr",
              get: function () {
                return e.oscpu;
              },
            },
            {
              key: "Pr",
              get: function () {
                return e.platform;
              },
            },
            {
              key: "Ur",
              get: function () {
                return e.vendor;
              },
            },
            {
              key: "jr",
              get: function () {
                return e.vendorSub;
              },
            },
          ]),
          t
        );
      })();
    var Mi = { exports: {} };
    !(function (t) {
      var n,
        r = h.prototype,
        i = r.hasOwnProperty,
        e = "function" == typeof Symbol ? Symbol : {},
        u = e.iterator || "@@iterator",
        o = e.asyncIterator || "@@asyncIterator",
        a = e.toStringTag || "@@toStringTag";
      function f(t, n, r, i) {
        var e = n && n.prototype instanceof y ? n : y,
          u = h.create(e.prototype),
          o = new P(i || []);
        return (
          (u.Vr = (function (t, n, r) {
            var i = v;
            return function (e, u) {
              if (i === p) throw new s("Generator is already running");
              if (i === w) {
                if ("throw" === e) throw u;
                return C();
              }
              for (r.method = e, r.arg = u; ; ) {
                var o = r.delegate;
                if (o) {
                  var a = A(o, r);
                  if (a) {
                    if (a === m) continue;
                    return a;
                  }
                }
                if ("next" === r.method) r.sent = r.zr = r.arg;
                else if ("throw" === r.method) {
                  if (i === v) throw ((i = w), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = p;
                var f = _(t, n, r);
                if ("normal" === f.type) {
                  if (((i = r.done ? w : l), f.arg === m)) continue;
                  return { value: f.arg, done: r.done };
                }
                "throw" === f.type && ((i = w), (r.method = "throw"), (r.arg = f.arg));
              }
            };
          })(t, r, o)),
          u
        );
      }
      function _(t, n, r) {
        try {
          return { type: "normal", arg: t.call(n, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var v = "suspendedStart",
        l = "suspendedYield",
        p = "executing",
        w = "completed",
        m = {};
      function y() {}
      function g() {}
      function I() {}
      var E = {};
      E[u] = function () {
        return this;
      };
      var S = h.getPrototypeOf,
        T = S && S(S(O([])));
      T && T !== r && i.call(T, u) && (E = T);
      var k = (I.prototype = y.prototype = h.create(E));
      function b(t) {
        ["next", "throw", "return"].forEach(function (n) {
          t[n] = function (t) {
            return this.Vr(n, t);
          };
        });
      }
      function N(t) {
        var n;
        this.Vr = function (r, e) {
          function u() {
            return new ai(function (n, u) {
              !(function n(r, e, u, o) {
                var a = _(t[r], t, e);
                if ("throw" !== a.type) {
                  var f = a.arg,
                    s = f.value;
                  return s && "object" == typeof s && i.call(s, "Hr")
                    ? ai.resolve(s.Hr).then(
                        function (t) {
                          n("next", t, u, o);
                        },
                        function (t) {
                          n("throw", t, u, o);
                        }
                      )
                    : ai.resolve(s).then(
                        function (t) {
                          (f.value = t), u(f);
                        },
                        function (t) {
                          return n("throw", t, u, o);
                        }
                      );
                }
                o(a.arg);
              })(r, e, n, u);
            });
          }
          return (n = n ? n.then(u, u) : u());
        };
      }
      function A(t, r) {
        var i = t.iterator[r.method];
        if (i === n) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = n), A(t, r), "throw" === r.method)) return m;
            (r.method = "throw"), (r.arg = new c("The iterator does not provide a 'throw' method"));
          }
          return m;
        }
        var e = _(i, t.iterator, r.arg);
        if ("throw" === e.type) return (r.method = "throw"), (r.arg = e.arg), (r.delegate = null), m;
        var u = e.arg;
        return u
          ? u.done
            ? ((r[t.resultName] = u.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = n)),
              (r.delegate = null),
              m)
            : u
          : ((r.method = "throw"), (r.arg = new c("iterator result is not an object")), (r.delegate = null), m);
      }
      function D(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]), 2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])), this.tryEntries.push(n);
      }
      function R(t) {
        var n = t.completion || {};
        (n.type = "normal"), delete n.arg, (t.completion = n);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(D, this), this.reset(!0);
      }
      function O(t) {
        if (t) {
          var r = t[u];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!d(t.length)) {
            var e = -1,
              o = function r() {
                for (; ++e < t.length; ) if (i.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
                return (r.value = n), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: n, done: !0 };
      }
      (g.prototype = k.constructor = I),
        (I.constructor = g),
        (I[a] = g.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var n = "function" == typeof t && t.constructor;
          return !!n && (n === g || "GeneratorFunction" === (n.displayName || n.name));
        }),
        (t.mark = function (t) {
          return (
            h.setPrototypeOf ? h.setPrototypeOf(t, I) : ((t.__proto__ = I), a in t || (t[a] = "GeneratorFunction")),
            (t.prototype = h.create(k)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { Hr: t };
        }),
        b(N.prototype),
        (N.prototype[o] = function () {
          return this;
        }),
        (t.AsyncIterator = N),
        (t.async = function (n, r, i, e) {
          var u = new N(f(n, r, i, e));
          return t.isGeneratorFunction(r)
            ? u
            : u.next().then(function (t) {
                return t.done ? t.value : u.next();
              });
        }),
        b(k),
        (k[a] = "Generator"),
        (k[u] = function () {
          return this;
        }),
        (k.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var n = [];
          for (var r in t) n.push(r);
          return (
            n.reverse(),
            function r() {
              for (; n.length; ) {
                var i = n.pop();
                if (i in t) return (r.value = i), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = O),
        (P.prototype = {
          constructor: P,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this.zr = n),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = n),
              this.tryEntries.forEach(R),
              !t)
            )
              for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !d(+r.slice(1)) && (this[r] = n);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var r = this;
            function e(i, e) {
              return (a.type = "throw"), (a.arg = t), (r.next = i), e && ((r.method = "next"), (r.arg = n)), !!e;
            }
            for (var u = this.tryEntries.length - 1; u >= 0; --u) {
              var o = this.tryEntries[u],
                a = o.completion;
              if ("root" === o.tryLoc) return e("end");
              if (o.tryLoc <= this.prev) {
                var f = i.call(o, "catchLoc"),
                  c = i.call(o, "finallyLoc");
                if (f && c) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (f) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!c) throw new s("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc <= this.prev && i.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                var u = e;
                break;
              }
            }
            u && ("break" === t || "continue" === t) && u.tryLoc <= n && n <= u.finallyLoc && (u = null);
            var o = u ? u.completion : {};
            return (
              (o.type = t), (o.arg = n), u ? ((this.method = "next"), (this.next = u.finallyLoc), m) : this.complete(o)
            );
          },
          complete: function (t, n) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === t.type && n && (this.next = n),
              m
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), R(r), m;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (r.tryLoc === t) {
                var i = r.completion;
                if ("throw" === i.type) {
                  var e = i.arg;
                  R(r);
                }
                return e;
              }
            }
            throw new s("illegal catch attempt");
          },
          delegateYield: function (t, r, i) {
            return (
              (this.delegate = { iterator: O(t), resultName: r, nextLoc: i }),
              "next" === this.method && (this.arg = n),
              m
            );
          },
        });
    })(Mi.exports);
    var Bi = Mi.exports;
    function xi() {
      return (xi =
        h.assign ||
        function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r) h.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    function Ui() {
      var t = h.create(null);
      return (t.__ = void 0), delete t.__, t;
    }
    var Hi,
      Wi,
      Gi =
        ("undefined" != typeof Map && "entries" in Map.prototype ? Map : void 0) ||
        ((Hi = (function () {
          function t(t, n) {
            (this.data = void 0),
              (this.keys = void 0),
              (this.index = 0),
              (this.selector = void 0),
              (this.data = t),
              (this.selector = n),
              (this.keys = h.keys(t));
          }
          var n = t.prototype;
          return (
            (n.next = function () {
              var t = this.index;
              return t < this.keys.length
                ? (this.index++, { value: this.selector(this.data, this.keys[t]), done: !1 })
                : { value: void 0, done: !0 };
            }),
            t
          );
        })()),
        (function () {
          function t() {
            (this.data = Ui()), (this.size = 0);
          }
          var n = t.prototype;
          return (
            (n.get = function (t) {
              return this.data[t];
            }),
            (n.set = function (t, n) {
              return this.has(t) || this.size++, (this.data[t] = n), this;
            }),
            (n.has = function (t) {
              return t in this.data;
            }),
            (n.delete = function (t) {
              return !!this.has(t) && (this.size--, delete this.data[t], !0);
            }),
            (n.clear = function () {
              (this.data = Ui()), (this.size = 0);
            }),
            (n.keys = function () {
              return new Hi(this.data, function (t, n) {
                return n;
              });
            }),
            (n.values = function () {
              return new Hi(this.data, function (t, n) {
                return t[n];
              });
            }),
            (n.entries = function () {
              return new Hi(this.data, function (t, n) {
                return [n, t[n]];
              });
            }),
            (n.forEach = function (t) {
              for (var n in this.data) t(this.data[n], n);
            }),
            t
          );
        })());
    !(function (t) {
      (t.$r = "9a04f079-9840-4286-ab92-e65be0885f95"),
        (t.Qr = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"),
        (t.Yr = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b"),
        (t.Zr = "94ce86fb-07ff-4f43-adb8-93d2fa968ca2");
    })(Wi || (Wi = {}));
    var Vi,
      zi = Wi.$r,
      Yi = "urn:uuid:" + zi,
      Xi = Wi.Qr,
      ji = "urn:uuid:" + Xi,
      qi = Wi.Yr,
      Ki = "urn:uuid:" + qi,
      Zi = Wi.Zr,
      $i = "urn:uuid:" + Zi;
    !(function (t) {
      (t.$r = "playready"), (t.Qr = "widevine"), (t.Zr = "fairplay"), (t.Yr = "clearkey"), (t.Kr = "aes128");
    })(Vi || (Vi = {}));
    var Ji = { Jr: Vi.$r, ns: "com.microsoft.playready", rs: "cenc", us: zi, hs: Yi, fs: "PlayReady" },
      Qi = { Jr: Vi.Qr, ns: "com.widevine.alpha", rs: "cenc", us: Xi, hs: ji, fs: "Widevine" },
      te = { Jr: Vi.Zr, ns: "com.apple.fps.1_0", rs: "skd", us: Zi, hs: $i, fs: "FairPlay" };
    Vi.Zr;
    var ne = { Jr: Vi.Yr, ns: "org.w3.clearkey", rs: "cenc", us: qi, hs: Ki, fs: "ClearKey" };
    var re = 16384;
    function ie(t) {
      var n = t.length;
      if (n <= re) return String.fromCharCode.apply(String, t);
      for (var r = [], i = 0; i < n; i += re) r.push(String.fromCharCode.apply(String, t.slice(i, i + re)));
      return r.join("");
    }
    var ee = (P.hn && P.cn >= 42) || (P.Sn && P.En >= 38) || P.yn || P.An || (P.Nn && P.Cn >= 29);
    function ue(t, n) {
      return (
        (i = "audio"),
        null != (r = t) && -1 !== r.indexOf(i)
          ? {
              initDataTypes: ["cenc"],
              audioCapabilities: [xi({ contentType: t }, n ? { robustness: "SW_SECURE_CRYPTO" } : {})],
            }
          : {
              initDataTypes: ["cenc"],
              videoCapabilities: [xi({ contentType: t }, n ? { robustness: "SW_SECURE_CRYPTO" } : {})],
            }
      );
      var r, i;
    }
    var oe,
      ae = (function () {
        function t(t) {
          (this.vs = void 0), (this.ls = new Gi()), (this.ds = void 0), (this.vs = t);
        }
        var n = t.prototype;
        return (
          (n.Er = function () {
            return this.Rr(Qi);
          }),
          (n.Ar = function () {
            return this.Rr(ne);
          }),
          (n.Sr = function () {
            return this.Rr(Ji);
          }),
          (n.Tr = function () {
            return this.Rr(te);
          }),
          (n.Rr = function (t) {
            var n = t.hs,
              r = this.ls.get(n);
            if (r) return r;
            var i = this.Ir(t, 'video/mp4; codecs="avc1.42000a"');
            return this.ls.set(n, i), i;
          }),
          (n.Ir = function (t, n) {
            return Bi.async(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.prev = 0), (r.next = 3), Bi.awrap(this.vs._s(t.ns, [ue(n, !0)]));
                    case 3:
                      return r.abrupt("return", !0);
                    case 6:
                      return (
                        (r.prev = 6),
                        (r.t0 = r.catch(0)),
                        (r.prev = 8),
                        (r.next = 11),
                        Bi.awrap(this.vs._s(t.ns, [ue(n, !1)]))
                      );
                    case 11:
                      return r.abrupt("return", !0);
                    case 14:
                      return (r.prev = 14), (r.t1 = r.catch(8)), r.abrupt("return", !1);
                    case 17:
                    case "end":
                      return r.stop();
                  }
              },
              null,
              this,
              [
                [0, 6],
                [8, 14],
              ],
              ai
            );
          }),
          (n.yr = function () {
            return this.ds || (this.ds = this.gs()), this.ds;
          }),
          (n.gs = function () {
            return Bi.async(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("https:" !== (void 0).protocol) {
                        t.next = 2;
                        break;
                      }
                    case 2:
                      if (ee) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 4:
                      return (t.next = 6), Bi.awrap(this.Ar());
                    case 6:
                      if (!t.sent) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 8:
                      return t.abrupt("return", !0);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              null,
              this,
              null,
              ai
            );
          }),
          t
        );
      })(),
      fe = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.Zc = function () {}), (n.Su = function (t) {}), (n.bu = function (t) {}), (n.Kc = function (t, n) {}), t
        );
      })(),
      se = (function () {
        function t() {}
        return (
          (t.prototype._s = function (t, n) {
            return ai.reject(new c("Unsupported key system configuration"));
          }),
          t
        );
      })();
    !(function (t) {
      (t.jf = "arraybuffer"), (t.Vf = "json"), (t.zf = "stream"), (t.$n = "text");
    })(oe || (oe = {}));
    var ce,
      he = (function () {
        function t(n) {
          var r = this;
          (this.Xr = void 0),
            (this.Xr = {}),
            n instanceof t
              ? n.asList().forEach(function (t) {
                  var n = t[0],
                    i = t[1];
                  r.append(n, i);
                })
              : Array.isArray(n)
              ? n.forEach(function (t) {
                  r.append(t[0], t[1]);
                })
              : n &&
                h.getOwnPropertyNames(n).forEach(function (t) {
                  r.append(t, n[t]);
                });
        }
        var n = t.prototype;
        return (
          (n.append = function (t, n) {
            var r = t,
              i = n;
            (r = _e(r)), (i = ve(i));
            var e = r.toLowerCase();
            if (this.Xr.hasOwnProperty(e)) {
              var u = this.Xr[e],
                o = u[1];
              u[1] = o ? o + ", " + i : i;
            } else this.Xr[e] = [r, i];
          }),
          (n.delete = function (t) {
            var n = _e(t).toLowerCase();
            delete this.Xr[n];
          }),
          (n.get = function (t) {
            var n = _e(t).toLowerCase();
            return this.Xr.hasOwnProperty(n) ? this.Xr[n][1] : null;
          }),
          (n.has = function (t) {
            var n = _e(t).toLowerCase();
            return this.Xr.hasOwnProperty(n);
          }),
          (n.set = function (t, n) {
            var r = t,
              i = (r = _e(r)).toLowerCase();
            this.Xr[i] = [r, ve(n)];
          }),
          (n.forEach = function (t, n) {
            for (var r in this.Xr) this.Xr.hasOwnProperty(r) && t.call(n, this.Xr[r][1], r, this);
          }),
          (n.asList = function () {
            var t = [];
            for (var n in this.Xr)
              if (this.Xr.hasOwnProperty(n)) {
                var r = this.Xr[n],
                  i = r[0],
                  e = r[1];
                t.push([i, e]);
              }
            return t;
          }),
          (n.Hf = function () {
            var t = {};
            return (
              this.forEach(function (n, r) {
                t[r] = n;
              }),
              t
            );
          }),
          (n.Wf = function (t) {
            var n = this;
            t.forEach(function (t, r) {
              n.append(r, t);
            });
          }),
          (n.qf = function (t) {
            var n = this;
            t.forEach(function (t, r) {
              n.set(r, t);
            });
          }),
          t
        );
      })();
    function _e(t) {
      var n = t;
      if (("string" != typeof n && (n = String(n)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(n)))
        throw new c("Invalid character in header field name");
      return n;
    }
    function ve(t) {
      var n = t;
      return "string" != typeof n && (n = String(n)), n;
    }
    function le(t, n) {
      return (function (t, n) {
        var r = t,
          i = r.length;
        if (i <= 1) return r;
        for (var e = new Array(i), u = 1; u < i; u *= 2) {
          de(r, n, u, e);
          var o = r;
          (r = e), (e = o);
        }
        return r;
      })(t.slice(), n);
    }
    function de(t, n, r, i) {
      var e,
        u,
        o,
        a,
        f,
        s = t.length,
        c = 0,
        h = 2 * r;
      for (u = 0; u < s; u += h)
        for (e = (o = u + r) + r, o > s && (o = s), e > s && (e = s), a = u, f = o; ; )
          if (a < o && f < e) n && n(t[a], t[f]) <= 0 ? (i[c++] = t[a++]) : (i[c++] = t[f++]);
          else if (a < o) i[c++] = t[a++];
          else {
            if (!(f < e)) break;
            i[c++] = t[f++];
          }
    }
    !(function (t) {
      (t[(t.ys = 0)] = "ys"), (t[(t.As = 1)] = "As"), (t[(t.Ts = -1)] = "Ts");
    })(ce || (ce = {}));
    var pe = function (t, n) {
        return (0 | t) - (0 | n);
      },
      we = function (t, n) {
        return (function (t, n) {
          if (t === n) return !0;
          var r = _.abs(t - n);
          return r < dt || r < _.max(_.abs(t), _.abs(n)) * dt;
        })(t, n)
          ? ce.ys
          : (function (t, n) {
              return t === n ? ce.ys : t < n ? ce.Ts : t > n ? ce.As : d(t) ? (d(n) ? ce.ys : ce.As) : ce.Ts;
            })(t, n);
      };
    function me(t, n, r) {
      var i = ye(t, n, r);
      return -1 === i ? void 0 : t[i];
    }
    function ye(t, n, r) {
      for (var i = 0; i < t.length; i += 1) {
        var e = t[i];
        if (n.call(r, e, i, t)) return i;
      }
      return -1;
    }
    function ge(t, n) {
      var r = t.indexOf(n);
      return -1 !== r && (Ie(t, r), !0);
    }
    function Ie(t, n) {
      t.splice(n, 1);
    }
    function Ee(t) {
      t.length = 0;
    }
    var Se,
      Te,
      ke,
      be,
      Ne = (function () {
        function t() {
          (this.Ss = !1), (this.Es = !1), (this.Is = []), (this.Rs = []);
        }
        var n = t.prototype;
        return (
          (n.Ns = function () {
            if (!this.Ss && !this.Es) {
              this.Ss = !0;
              for (var t = 0, n = this.Is.slice(); t < n.length; t++) {
                (0, n[t])();
              }
              this.Cs();
            }
          }),
          (n.Cs = function () {
            if (!this.Es) {
              this.Es = !0;
              for (var t = 0, n = this.Rs.slice(); t < n.length; t++) {
                (0, n[t])();
              }
              Ee(this.Is), Ee(this.Rs);
            }
          }),
          (n.Ds = function (t) {
            this.Es || this.Is.push(t);
          }),
          (n.Ps = function (t) {
            this.Es || ge(this.Is, t);
          }),
          (n.Os = function (t) {
            this.Es || this.Rs.push(t);
          }),
          (n.xs = function (t) {
            this.Es || ge(this.Rs, t);
          }),
          t
        );
      })(),
      Ae = (function () {
        function t() {
          this.Bs = new Ne();
        }
        var n = t.prototype;
        return (
          (n.Ms = function () {
            this.Bs.Ns();
          }),
          (n.Cs = function () {
            this.Bs.Cs();
          }),
          (n.Ls = function (t) {
            var n = this.Bs;
            if (!n.Ss)
              if (t.Ss) n.Ns();
              else if (!n.Es && !t.Es) {
                var r = function () {
                    i(), n.Ns();
                  },
                  i = function i() {
                    t.Ps(r), t.xs(i), n.Ps(r), n.xs(i);
                  };
                t.Ds(r), t.Os(i), n.Ds(r), n.Os(i);
              }
          }),
          (n.Fs = function () {
            var n = new t(),
              r = new t(),
              i = n.Us,
              e = r.Us,
              u = this.Bs,
              o = function () {
                (i.Ss && e.Es) || (e.Ss && i.Es) ? u.Ns() : i.Es && e.Es && u.Cs();
              };
            i.Ds(o), e.Ds(o), i.Os(o), e.Os(o), n.Ls(u), r.Ls(u);
            return (
              u.Os(function () {
                i.Ps(o), e.Ps(o), i.xs(o), e.xs(o);
              }),
              [n, r]
            );
          }),
          m(t, [
            {
              key: "Us",
              get: function () {
                return this.Bs;
              },
            },
          ]),
          t
        );
      })();
    !(function (t) {
      (t.DELETE = "DELETE"),
        (t.GET = "GET"),
        (t.HEAD = "HEAD"),
        (t.OPTIONS = "OPTIONS"),
        (t.POST = "POST"),
        (t.PUT = "PUT");
    })(Se || (Se = {})),
      (function (t) {
        (t.ud = ""), (t.od = "manifest"), (t.hd = "segment"), (t.fd = "content-protection");
      })(Te || (Te = {})),
      (function (t) {
        (t.ud = ""),
          (t.vd = "initialization-segment"),
          (t.ld = "fairplay-license"),
          (t.dd = "fairplay-certificate"),
          (t._d = "widevine-license"),
          (t.wd = "widevine-certificate"),
          (t.yd = "playready-license"),
          (t.md = "clearkey-license"),
          (t.pd = "aes128-key");
      })(ke || (ke = {})),
      (function (t) {
        (t.ud = ""), (t.kd = "audio"), (t.bd = "video"), (t.$n = "text"), (t.Td = "image");
      })(be || (be = {}));
    var De,
      Re = function (t, n) {
        (this.Ll = void 0),
          (this.Ql = void 0),
          (this.Sd = void 0),
          (this.Yl = void 0),
          (this.Ed = void 0),
          (this.Us = void 0),
          (this.Jr = void 0),
          (this.Id = void 0),
          (this.Rd = void 0),
          (this.ed = void 0),
          (this.Nd = void 0),
          (this.Cd = void 0);
        var r,
          i,
          e,
          u,
          o,
          a,
          f,
          s,
          c,
          h,
          _,
          v = t.ed;
        n
          ? ((r = n.Ll),
            (i = n.Ql),
            (e = n.Sd),
            (u = n.Yl),
            (o = n.Ed),
            (a = n.Us),
            (f = n.Jr),
            (s = n.Id),
            (c = n.Rd),
            (h = n.Nd),
            (_ = n.Cd))
          : ((r = null), (i = {}), (e = Se.GET), (u = oe.$n), (o = 0), (f = Te.ud), (s = ke.ud), (c = be.ud), (h = !1)),
          (this.ed = v),
          (this.Ll = t.Ll || r),
          (this.Ql = new he(t.Ql || i)),
          (this.Sd = t.Sd || e),
          (this.Yl = t.Yl || u),
          (this.Ed = void 0 !== t.Ed ? Number(t.Ed) || 0 : o),
          (this.Us = t.Us || a || new Ae().Us),
          (this.Jr = t.Jr || f),
          (this.Id = t.Id || s),
          (this.Rd = t.Rd || c),
          (this.Nd = void 0 !== t.Nd ? Boolean(t.Nd) : h),
          (this.Cd = t.Cd || _);
      };
    !(function (t) {
      (t.jd = "HttpOpenError"), (t.Vd = "HttpResponseError"), (t.zd = "HttpTimeoutError");
    })(De || (De = {}));
    var Pe,
      Oe = (function (t) {
        function n(n, r) {
          return t.call(this, n, "Error while opening " + n.ed + ". Invalid URL.", r) || this;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "name",
              get: function () {
                return De.jd;
              },
            },
          ]),
          n
        );
      })(
        (function (t) {
          function n(n, r, i) {
            var e;
            return ((e = t.call(this, r, i) || this).Hd = void 0), (e.Hd = n), e;
          }
          return (
            g(n, t),
            m(n, [
              {
                key: "Jl",
                get: function () {
                  return this.Hd;
                },
              },
            ]),
            n
          );
        })(gt)
      ),
      Ce = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.Jl = function (t) {
            return ai.reject(new Oe(new Re(t)));
          }),
          (n.Dd = function (t) {}),
          (n.Pd = function () {}),
          t
        );
      })();
    function Le(t) {
      return "function" == typeof t.bu;
    }
    function Fe(t, n, r) {
      if (!(r && n.byte >= r)) {
        var i = Le(t) ? t.bu(n.byte) : t[n.byte];
        return (n.byte += 1), i;
      }
    }
    function Me(t, n) {
      return (function (t, n, r) {
        for (var i = 0, e = r; e > 0; ) (e -= 1), (i = 256 * i + Fe(t, n));
        return i;
      })(t, n, 2);
    }
    Pe = new ((function (t) {
      function n() {
        for (var n, r = arguments.length, i = new Array(r), e = 0; e < r; e++) i[e] = arguments[e];
        return (
          ((n = t.call.apply(t, [this].concat(i)) || this).N_ = new ae(new se())),
          (n.mE = new Ce()),
          (n.i = new fe()),
          n
        );
      }
      return (
        g(n, t),
        m(n, [
          {
            key: "pr",
            get: function () {
              return this.N_;
            },
          },
          {
            key: "O_",
            get: function () {
              return !1;
            },
          },
          {
            key: "x_",
            get: function () {
              return !1;
            },
          },
          {
            key: "B_",
            get: function () {
              return !1;
            },
          },
          {
            key: "M_",
            get: function () {
              return this.i;
            },
          },
          {
            key: "L_",
            get: function () {
              return { F_: C };
            },
          },
          {
            key: "U_",
            get: function () {
              return "default";
            },
          },
          {
            key: "j_",
            get: function () {
              return "unknown";
            },
          },
          {
            key: "V_",
            get: function () {
              return this.mE;
            },
          },
        ]),
        n
      );
    })(Li))();
    var Be = (function () {
      function t() {
        (this.yet = 0), (this.met = []), (this.nE = {});
      }
      var n = t.prototype;
      return (
        (n.pet = function (t) {
          (this.met = this.met.concat(t.met)), (this.yet += t.xg);
        }),
        (n.ket = function (t, n, r) {
          var i = this.yet,
            e = r - n;
          e > 0 && (this.met.push({ bet: n, Aet: r, Tet: e, Eet: i, Iet: t }), (this.yet += e));
        }),
        (n.bu = function (t) {
          for (var n = 0, r = this.met; n < r.length; n++) {
            var i = r[n];
            if (i.Eet <= t && t < i.Eet + i.Tet) return i.Iet[t + i.bet - i.Eet];
          }
        }),
        (n.Ret = function (t, n) {
          for (var r = n, i = 0, e = this.met; i < e.length; i++)
            for (var u = e[i], o = u.Aet, a = u.bet; a < o; a += 1, r += 1) t[r] = u.Iet[a];
          return r;
        }),
        (n.Net = function () {
          for (var t = new p(this.yet), n = 0, r = 0, i = this.met; r < i.length; r++)
            for (var e = i[r], u = e.Aet, o = e.bet; o < u; o += 1, n += 1) t[n] = e.Iet[o];
          return t;
        }),
        (n.Cu = function (n) {
          for (var r = new t(), i = 0, e = this.met; i < e.length; i++) {
            var u = e[i];
            r.ket(u.Iet, u.bet, u.Aet);
          }
          return (r.nE = n || xi({}, this.nE)), r;
        }),
        m(t, [
          {
            key: "xg",
            get: function () {
              return this.yet;
            },
            set: function (t) {
              var n = this.met,
                r = this.yet - t;
              if (!(t >= this.yet))
                if (((this.yet = t), 0 !== t))
                  for (var i = n.length - 1; i >= 0; i -= 1) {
                    var e = n[i];
                    if (r <= e.Tet) return (e.Aet -= r), (e.Tet -= r), void (n.length !== i + 1 && (n.length = i + 1));
                    r -= e.Tet;
                  }
                else n.length = 0;
            },
          },
          {
            key: "Li",
            get: function () {
              for (var t = new Array(this.yet), n = 0, r = 0, i = this.met; r < i.length; r++)
                for (var e = i[r], u = e.Aet, o = e.bet; o < u; o += 1, n += 1) t[n] = e.Iet[o];
              return t;
            },
          },
        ]),
        t
      );
    })();
    function xe(t) {
      return [(t >>> 24) & 255, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t];
    }
    var Ue = [128, 64, 32, 16, 8, 4, 2, 1];
    function He(t, n) {
      var r = _.floor(n.bit / 8),
        i = 0 == (("function" == typeof t.bu ? t.bu(r) : t[r]) & Ue[n.bit % 8]) ? 0 : 1;
      return (n.bit += 1), i;
    }
    function We(t, n, r) {
      for (var i = 0; r > 0; ) (r -= 1), (i = 2 * i + He(t, n));
      return i;
    }
    function Ge(t, n) {
      return t.push(n), t;
    }
    function Ve(t, n, r, i) {
      var e = r || 0,
        u = i || n.length,
        o = u - e,
        a = t.length,
        f = a + o;
      for (t.length = f; e < u; e += 1, a += 1) t[a] = n[e];
      return t;
    }
    function ze(t, n) {
      return Ve(t, xe(n));
    }
    function Ye(t, n) {
      return Ve(
        t,
        (function (t) {
          return [(t >>> 8) & 255, 255 & t];
        })(n)
      );
    }
    var Xe,
      je = (function (t) {
        function n(n, r) {
          var i,
            e = Ke[n];
          return (
            ((i = t.call(this, e ? e.uu : "") || this).code = void 0),
            (i.info = void 0),
            (i.helpLink = void 0),
            (i.helpLinkText = void 0),
            (i.code = n),
            (i.info = r),
            (i.helpLink = e && e.dft),
            (i.helpLinkText = e && e._ft),
            i
          );
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "name",
              get: function () {
                return "THEOplayerError";
              },
            },
          ]),
          n
        );
      })(gt);
    !(function (t) {
      (t.gft = "LICENSE_INVALID"),
        (t.wft = "MANIFEST_NOT_FOUND"),
        (t.yft = "MANIFEST_CORS_ERROR"),
        (t.mft = "INVALID_HLS_MANIFEST"),
        (t.pft = "PLAYBACK_ISSUE"),
        (t.kft = "AUDIO_ISSUE"),
        (t.bft = "BROWSER_SUPPORT_ISSUE"),
        (t.Aft = "INVALID_KEY"),
        (t.Tft = "DECRYPTION_ERROR"),
        (t.Sft = "AD_BLOCK_DETECTED"),
        (t.Eft = "THEOPLAYER_NOT_INITIALIZED"),
        (t.nw = "ERROR"),
        (t.Ift = "MANIFEST_SEQUENCE_RESET_ERROR"),
        (t.Rft = "PLAYER_INCORRECTLY_CONFIGURED"),
        (t.Nft = "UNSUPPORTED");
    })(Xe || (Xe = {}));
    for (
      var qe = [
          {
            ju: Xe.gft,
            uu: "The license for this player is invalid. Please contact your service provider for additional information.",
          },
          { ju: Xe.wft, uu: "Could not load the manifest file." },
          {
            ju: Xe.yft,
            uu: "Could not load the manifest file. Make sure the source is set correctly and that CORS support is enabled.",
            dft: "https://www.theoplayer.com/documentation/cors.html",
            Cft: !1,
          },
          {
            ju: Xe.mft,
            uu: "The source of the player is an invalid HLS manifest.",
            dft: "https://developer.apple.com/library/ios/technotes/tn2288/_index.html",
          },
          { ju: Xe.pft, uu: "There appears to be a playback issue." },
          {
            ju: Xe.kft,
            uu: "There is an audio issue. Please contact your service provider with the code below for additional information.",
          },
          {
            ju: Xe.bft,
            uu: "Your browser doesn't support a feature. Try upgrading your browser or please contact your service provider referring to the code below.",
          },
          {
            ju: Xe.Aft,
            uu: "There is an invalid key being decrypted. Please contact your service provider with the code below for additional information.",
          },
          {
            ju: Xe.Tft,
            uu: "There is a decryption error. Please contact your service provider with the code below for additional information.",
          },
          {
            ju: Xe.Sft,
            uu: "An ad blocker was detected. Please turn it off and refresh the page in order to watch this video.",
          },
          { ju: Xe.Eft, uu: "THEOplayer hasn't been initialized yet. Please check your configuration or wait." },
          {
            ju: Xe.nw,
            uu: "THEOplayer encountered an error. If this issue holds, please contact your service provider.",
          },
          { ju: Xe.Ift, uu: "The video stream has been reset. THEOplayer will attempt to reload the source." },
          {
            ju: Xe.Rft,
            uu: "The player is incorrectly configured.",
            dft: "https://support.theoplayer.com/hc/en-us/articles/214343065-Player-API",
          },
          {
            ju: Xe.Nft,
            uu: "This browser does not allow you to watch this video. Try to update your browser or use a different browser.",
          },
        ],
        Ke = {},
        Ze = 0;
      Ze < qe.length;
      Ze++
    ) {
      var $e = qe[Ze];
      Ke[$e.ju] = $e;
    }
    var Je = "SBR_DETECTED",
      Qe = [
        [
          [1, 0, 0, 0, 0, 0],
          [5, 16, 1, 0, 0, 0],
          [5, 17, -1, 0, 0, 0],
          [5, 18, 0, 0, 0, -1],
          [5, 19, 0, 1, 0, 0],
          [5, 20, 0, 0, 0, 1],
          [5, 21, 0, 0, -1, 0],
          [5, 22, 0, 0, 1, 0],
          [5, 23, 0, -1, 0, 0],
          [7, 96, 1, -1, 0, 0],
          [7, 97, -1, 1, 0, 0],
          [7, 98, 0, 0, -1, 1],
          [7, 99, 0, 1, -1, 0],
          [7, 100, 0, -1, 1, 0],
          [7, 101, 0, 0, 1, -1],
          [7, 102, 1, 1, 0, 0],
          [7, 103, 0, 0, -1, -1],
          [7, 104, -1, -1, 0, 0],
          [7, 105, 0, -1, -1, 0],
          [7, 106, 1, 0, -1, 0],
          [7, 107, 0, 1, 0, -1],
          [7, 108, -1, 0, 1, 0],
          [7, 109, 0, 0, 1, 1],
          [7, 110, 1, 0, 1, 0],
          [7, 111, 0, -1, 0, 1],
          [7, 112, 0, 1, 1, 0],
          [7, 113, 0, 1, 0, 1],
          [7, 114, -1, 0, -1, 0],
          [7, 115, 1, 0, 0, 1],
          [7, 116, -1, 0, 0, -1],
          [7, 117, 1, 0, 0, -1],
          [7, 118, -1, 0, 0, 1],
          [7, 119, 0, -1, 0, -1],
          [9, 480, 1, 1, -1, 0],
          [9, 481, -1, 1, -1, 0],
          [9, 482, 1, -1, 1, 0],
          [9, 483, 0, 1, 1, -1],
          [9, 484, 0, 1, -1, 1],
          [9, 485, 0, -1, 1, 1],
          [9, 486, 0, -1, 1, -1],
          [9, 487, 1, -1, -1, 0],
          [9, 488, 1, 0, -1, 1],
          [9, 489, 0, 1, -1, -1],
          [9, 490, -1, 1, 1, 0],
          [9, 491, -1, 0, 1, -1],
          [9, 492, -1, -1, 1, 0],
          [9, 493, 0, -1, -1, 1],
          [9, 494, 1, -1, 0, 1],
          [9, 495, 1, -1, 0, -1],
          [9, 496, -1, 1, 0, -1],
          [9, 497, -1, -1, -1, 0],
          [9, 498, 0, -1, -1, -1],
          [9, 499, 0, 1, 1, 1],
          [9, 500, 1, 0, 1, -1],
          [9, 501, 1, 1, 0, 1],
          [9, 502, -1, 1, 0, 1],
          [9, 503, 1, 1, 1, 0],
          [10, 1008, -1, -1, 0, 1],
          [10, 1009, -1, 0, -1, -1],
          [10, 1010, 1, 1, 0, -1],
          [10, 1011, 1, 0, -1, -1],
          [10, 1012, -1, 0, -1, 1],
          [10, 1013, -1, -1, 0, -1],
          [10, 1014, -1, 0, 1, 1],
          [10, 1015, 1, 0, 1, 1],
          [11, 2032, 1, -1, 1, -1],
          [11, 2033, -1, 1, -1, 1],
          [11, 2034, -1, 1, 1, -1],
          [11, 2035, 1, -1, -1, 1],
          [11, 2036, 1, 1, 1, 1],
          [11, 2037, -1, -1, 1, 1],
          [11, 2038, 1, 1, -1, -1],
          [11, 2039, -1, -1, 1, -1],
          [11, 2040, -1, -1, -1, -1],
          [11, 2041, 1, 1, -1, 1],
          [11, 2042, 1, -1, 1, 1],
          [11, 2043, -1, 1, 1, 1],
          [11, 2044, -1, 1, -1, -1],
          [11, 2045, -1, -1, -1, 1],
          [11, 2046, 1, -1, -1, -1],
          [11, 2047, 1, 1, 1, -1],
        ],
        [
          [3, 0, 0, 0, 0, 0],
          [4, 2, 1, 0, 0, 0],
          [5, 6, -1, 0, 0, 0],
          [5, 7, 0, 0, 0, 1],
          [5, 8, 0, 0, -1, 0],
          [5, 9, 0, 0, 0, -1],
          [5, 10, 0, -1, 0, 0],
          [5, 11, 0, 0, 1, 0],
          [5, 12, 0, 1, 0, 0],
          [6, 26, 0, -1, 1, 0],
          [6, 27, -1, 1, 0, 0],
          [6, 28, 0, 1, -1, 0],
          [6, 29, 0, 0, 1, -1],
          [6, 30, 0, 1, 0, -1],
          [6, 31, 0, 0, -1, 1],
          [6, 32, -1, 0, 0, -1],
          [6, 33, 1, -1, 0, 0],
          [6, 34, 1, 0, -1, 0],
          [6, 35, -1, -1, 0, 0],
          [6, 36, 0, 0, -1, -1],
          [6, 37, 1, 0, 1, 0],
          [6, 38, 1, 0, 0, 1],
          [6, 39, 0, -1, 0, 1],
          [6, 40, -1, 0, 1, 0],
          [6, 41, 0, 1, 0, 1],
          [6, 42, 0, -1, -1, 0],
          [6, 43, -1, 0, 0, 1],
          [6, 44, 0, -1, 0, -1],
          [6, 45, -1, 0, -1, 0],
          [6, 46, 1, 1, 0, 0],
          [6, 47, 0, 1, 1, 0],
          [6, 48, 0, 0, 1, 1],
          [6, 49, 1, 0, 0, -1],
          [7, 100, 0, 1, -1, 1],
          [7, 101, 1, 0, -1, 1],
          [7, 102, -1, 1, -1, 0],
          [7, 103, 0, -1, 1, -1],
          [7, 104, 1, -1, 1, 0],
          [7, 105, 1, 1, 0, -1],
          [7, 106, 1, 0, 1, 1],
          [7, 107, -1, 1, 1, 0],
          [7, 108, 0, -1, -1, 1],
          [7, 109, 1, 1, 1, 0],
          [7, 110, -1, 0, 1, -1],
          [7, 111, -1, -1, -1, 0],
          [7, 112, -1, 0, -1, 1],
          [7, 113, 1, -1, -1, 0],
          [7, 114, 1, 1, -1, 0],
          [8, 230, 1, -1, 0, 1],
          [8, 231, -1, 1, 0, -1],
          [8, 232, -1, -1, 1, 0],
          [8, 233, -1, 0, 1, 1],
          [8, 234, -1, -1, 0, 1],
          [8, 235, -1, -1, 0, -1],
          [8, 236, 0, -1, -1, -1],
          [8, 237, 1, 0, 1, -1],
          [8, 238, 1, 0, -1, -1],
          [8, 239, 0, 1, -1, -1],
          [8, 240, 0, 1, 1, 1],
          [8, 241, -1, 1, 0, 1],
          [8, 242, -1, 0, -1, -1],
          [8, 243, 0, 1, 1, -1],
          [8, 244, 1, -1, 0, -1],
          [8, 245, 0, -1, 1, 1],
          [8, 246, 1, 1, 0, 1],
          [8, 247, 1, -1, 1, -1],
          [8, 248, -1, 1, -1, 1],
          [9, 498, 1, -1, -1, 1],
          [9, 499, -1, -1, -1, -1],
          [9, 500, -1, 1, 1, -1],
          [9, 501, -1, 1, 1, 1],
          [9, 502, 1, 1, 1, 1],
          [9, 503, -1, -1, 1, -1],
          [9, 504, 1, -1, 1, 1],
          [9, 505, -1, 1, -1, -1],
          [9, 506, -1, -1, 1, 1],
          [9, 507, 1, 1, -1, -1],
          [9, 508, 1, -1, -1, -1],
          [9, 509, -1, -1, -1, 1],
          [9, 510, 1, 1, -1, 1],
          [9, 511, 1, 1, 1, -1],
        ],
        [
          [1, 0, 0, 0, 0, 0],
          [4, 8, 1, 0, 0, 0],
          [4, 9, 0, 0, 0, 1],
          [4, 10, 0, 1, 0, 0],
          [4, 11, 0, 0, 1, 0],
          [5, 24, 1, 1, 0, 0],
          [5, 25, 0, 0, 1, 1],
          [6, 52, 0, 1, 1, 0],
          [6, 53, 0, 1, 0, 1],
          [6, 54, 1, 0, 1, 0],
          [6, 55, 0, 1, 1, 1],
          [6, 56, 1, 0, 0, 1],
          [6, 57, 1, 1, 1, 0],
          [7, 116, 1, 1, 1, 1],
          [7, 117, 1, 0, 1, 1],
          [7, 118, 1, 1, 0, 1],
          [8, 238, 2, 0, 0, 0],
          [8, 239, 0, 0, 0, 2],
          [8, 240, 0, 0, 1, 2],
          [8, 241, 2, 1, 0, 0],
          [8, 242, 1, 2, 1, 0],
          [9, 486, 0, 0, 2, 1],
          [9, 487, 0, 1, 2, 1],
          [9, 488, 1, 2, 0, 0],
          [9, 489, 0, 1, 1, 2],
          [9, 490, 2, 1, 1, 0],
          [9, 491, 0, 0, 2, 0],
          [9, 492, 0, 2, 1, 0],
          [9, 493, 0, 1, 2, 0],
          [9, 494, 0, 2, 0, 0],
          [9, 495, 0, 1, 0, 2],
          [9, 496, 2, 0, 1, 0],
          [9, 497, 1, 2, 1, 1],
          [9, 498, 0, 2, 1, 1],
          [9, 499, 1, 1, 2, 0],
          [9, 500, 1, 1, 2, 1],
          [10, 1002, 1, 2, 0, 1],
          [10, 1003, 1, 0, 2, 0],
          [10, 1004, 1, 0, 2, 1],
          [10, 1005, 0, 2, 0, 1],
          [10, 1006, 2, 1, 1, 1],
          [10, 1007, 1, 1, 1, 2],
          [10, 1008, 2, 1, 0, 1],
          [10, 1009, 1, 0, 1, 2],
          [10, 1010, 0, 0, 2, 2],
          [10, 1011, 0, 1, 2, 2],
          [10, 1012, 2, 2, 1, 0],
          [10, 1013, 1, 2, 2, 0],
          [10, 1014, 1, 0, 0, 2],
          [10, 1015, 2, 0, 0, 1],
          [10, 1016, 0, 2, 2, 1],
          [11, 2034, 2, 2, 0, 0],
          [11, 2035, 1, 2, 2, 1],
          [11, 2036, 1, 1, 0, 2],
          [11, 2037, 2, 0, 1, 1],
          [11, 2038, 1, 1, 2, 2],
          [11, 2039, 2, 2, 1, 1],
          [11, 2040, 0, 2, 2, 0],
          [11, 2041, 0, 2, 1, 2],
          [12, 4084, 1, 0, 2, 2],
          [12, 4085, 2, 2, 0, 1],
          [12, 4086, 2, 1, 2, 0],
          [12, 4087, 2, 2, 2, 0],
          [12, 4088, 0, 2, 2, 2],
          [12, 4089, 2, 2, 2, 1],
          [12, 4090, 2, 1, 2, 1],
          [12, 4091, 1, 2, 1, 2],
          [12, 4092, 1, 2, 2, 2],
          [13, 8186, 0, 2, 0, 2],
          [13, 8187, 2, 0, 2, 0],
          [13, 8188, 1, 2, 0, 2],
          [14, 16378, 2, 0, 2, 1],
          [14, 16379, 2, 1, 1, 2],
          [14, 16380, 2, 1, 0, 2],
          [15, 32762, 2, 2, 2, 2],
          [15, 32763, 2, 2, 1, 2],
          [15, 32764, 2, 1, 2, 2],
          [15, 32765, 2, 0, 1, 2],
          [15, 32766, 2, 0, 0, 2],
          [16, 65534, 2, 2, 0, 2],
          [16, 65535, 2, 0, 2, 2],
        ],
        [
          [4, 0, 1, 1, 1, 1],
          [4, 1, 0, 1, 1, 1],
          [4, 2, 1, 1, 0, 1],
          [4, 3, 1, 1, 1, 0],
          [4, 4, 1, 0, 1, 1],
          [4, 5, 1, 0, 0, 0],
          [4, 6, 1, 1, 0, 0],
          [4, 7, 0, 0, 0, 0],
          [4, 8, 0, 0, 1, 1],
          [4, 9, 1, 0, 1, 0],
          [5, 20, 1, 0, 0, 1],
          [5, 21, 0, 1, 1, 0],
          [5, 22, 0, 0, 0, 1],
          [5, 23, 0, 1, 0, 1],
          [5, 24, 0, 0, 1, 0],
          [5, 25, 0, 1, 0, 0],
          [7, 104, 2, 1, 1, 1],
          [7, 105, 1, 1, 2, 1],
          [7, 106, 1, 2, 1, 1],
          [7, 107, 1, 1, 1, 2],
          [7, 108, 2, 1, 1, 0],
          [7, 109, 2, 1, 0, 1],
          [7, 110, 1, 2, 1, 0],
          [7, 111, 2, 0, 1, 1],
          [7, 112, 0, 1, 2, 1],
          [8, 226, 0, 1, 1, 2],
          [8, 227, 1, 1, 2, 0],
          [8, 228, 0, 2, 1, 1],
          [8, 229, 1, 0, 1, 2],
          [8, 230, 1, 2, 0, 1],
          [8, 231, 1, 1, 0, 2],
          [8, 232, 1, 0, 2, 1],
          [8, 233, 2, 1, 0, 0],
          [8, 234, 2, 0, 1, 0],
          [8, 235, 1, 2, 0, 0],
          [8, 236, 2, 0, 0, 1],
          [8, 237, 0, 1, 0, 2],
          [8, 238, 0, 2, 1, 0],
          [8, 239, 0, 0, 1, 2],
          [8, 240, 0, 1, 2, 0],
          [8, 241, 0, 2, 0, 1],
          [8, 242, 1, 0, 0, 2],
          [8, 243, 0, 0, 2, 1],
          [8, 244, 1, 0, 2, 0],
          [8, 245, 2, 0, 0, 0],
          [8, 246, 0, 0, 0, 2],
          [9, 494, 0, 2, 0, 0],
          [9, 495, 0, 0, 2, 0],
          [9, 496, 1, 2, 2, 1],
          [9, 497, 2, 2, 1, 1],
          [9, 498, 2, 1, 2, 1],
          [9, 499, 1, 1, 2, 2],
          [9, 500, 1, 2, 1, 2],
          [9, 501, 2, 1, 1, 2],
          [10, 1004, 1, 2, 2, 0],
          [10, 1005, 2, 2, 1, 0],
          [10, 1006, 2, 1, 2, 0],
          [10, 1007, 0, 2, 2, 1],
          [10, 1008, 0, 1, 2, 2],
          [10, 1009, 2, 2, 0, 1],
          [10, 1010, 0, 2, 1, 2],
          [10, 1011, 2, 0, 2, 1],
          [10, 1012, 1, 0, 2, 2],
          [10, 1013, 2, 2, 2, 1],
          [10, 1014, 1, 2, 0, 2],
          [10, 1015, 2, 0, 1, 2],
          [10, 1016, 2, 1, 0, 2],
          [10, 1017, 1, 2, 2, 2],
          [11, 2036, 2, 1, 2, 2],
          [11, 2037, 2, 2, 1, 2],
          [11, 2038, 0, 2, 2, 0],
          [11, 2039, 2, 2, 0, 0],
          [11, 2040, 0, 0, 2, 2],
          [11, 2041, 2, 0, 2, 0],
          [11, 2042, 0, 2, 0, 2],
          [11, 2043, 2, 0, 0, 2],
          [11, 2044, 2, 2, 2, 2],
          [11, 2045, 0, 2, 2, 2],
          [11, 2046, 2, 2, 2, 0],
          [12, 4094, 2, 2, 0, 2],
          [12, 4095, 2, 0, 2, 2],
        ],
        [
          [1, 0, 0, 0],
          [4, 8, -1, 0],
          [4, 9, 1, 0],
          [4, 10, 0, 1],
          [4, 11, 0, -1],
          [5, 24, 1, -1],
          [5, 25, -1, 1],
          [5, 26, -1, -1],
          [5, 27, 1, 1],
          [7, 112, -2, 0],
          [7, 113, 0, 2],
          [7, 114, 2, 0],
          [7, 115, 0, -2],
          [8, 232, -2, -1],
          [8, 233, 2, 1],
          [8, 234, -1, -2],
          [8, 235, 1, 2],
          [8, 236, -2, 1],
          [8, 237, 2, -1],
          [8, 238, -1, 2],
          [8, 239, 1, -2],
          [8, 240, -3, 0],
          [8, 241, 3, 0],
          [8, 242, 0, -3],
          [8, 243, 0, 3],
          [9, 488, -3, -1],
          [9, 489, 1, 3],
          [9, 490, 3, 1],
          [9, 491, -1, -3],
          [9, 492, -3, 1],
          [9, 493, 3, -1],
          [9, 494, 1, -3],
          [9, 495, -1, 3],
          [9, 496, -2, 2],
          [9, 497, 2, 2],
          [9, 498, -2, -2],
          [9, 499, 2, -2],
          [10, 1e3, -3, -2],
          [10, 1001, 3, -2],
          [10, 1002, -2, 3],
          [10, 1003, 2, -3],
          [10, 1004, 3, 2],
          [10, 1005, 2, 3],
          [10, 1006, -3, 2],
          [10, 1007, -2, -3],
          [10, 1008, 0, -4],
          [10, 1009, -4, 0],
          [10, 1010, 4, 1],
          [10, 1011, 4, 0],
          [11, 2024, -4, -1],
          [11, 2025, 0, 4],
          [11, 2026, 4, -1],
          [11, 2027, -1, -4],
          [11, 2028, 1, 4],
          [11, 2029, -1, 4],
          [11, 2030, -4, 1],
          [11, 2031, 1, -4],
          [11, 2032, 3, -3],
          [11, 2033, -3, -3],
          [11, 2034, -3, 3],
          [11, 2035, -2, 4],
          [11, 2036, -4, -2],
          [11, 2037, 4, 2],
          [11, 2038, 2, -4],
          [11, 2039, 2, 4],
          [11, 2040, 3, 3],
          [11, 2041, -4, 2],
          [12, 4084, -2, -4],
          [12, 4085, 4, -2],
          [12, 4086, 3, -4],
          [12, 4087, -4, -3],
          [12, 4088, -4, 3],
          [12, 4089, 3, 4],
          [12, 4090, -3, 4],
          [12, 4091, 4, 3],
          [12, 4092, 4, -3],
          [12, 4093, -3, -4],
          [13, 8188, 4, -4],
          [13, 8189, -4, 4],
          [13, 8190, 4, 4],
          [13, 8191, -4, -4],
        ],
        [
          [4, 0, 0, 0],
          [4, 1, 1, 0],
          [4, 2, 0, -1],
          [4, 3, 0, 1],
          [4, 4, -1, 0],
          [4, 5, 1, 1],
          [4, 6, -1, 1],
          [4, 7, 1, -1],
          [4, 8, -1, -1],
          [6, 36, 2, -1],
          [6, 37, 2, 1],
          [6, 38, -2, 1],
          [6, 39, -2, -1],
          [6, 40, -2, 0],
          [6, 41, -1, 2],
          [6, 42, 2, 0],
          [6, 43, 1, -2],
          [6, 44, 1, 2],
          [6, 45, 0, -2],
          [6, 46, -1, -2],
          [6, 47, 0, 2],
          [6, 48, 2, -2],
          [6, 49, -2, 2],
          [6, 50, -2, -2],
          [6, 51, 2, 2],
          [7, 104, -3, 1],
          [7, 105, 3, 1],
          [7, 106, 3, -1],
          [7, 107, -1, 3],
          [7, 108, -3, -1],
          [7, 109, 1, 3],
          [7, 110, 1, -3],
          [7, 111, -1, -3],
          [7, 112, 3, 0],
          [7, 113, -3, 0],
          [7, 114, 0, -3],
          [7, 115, 0, 3],
          [7, 116, 3, 2],
          [8, 234, -3, -2],
          [8, 235, -2, 3],
          [8, 236, 2, 3],
          [8, 237, 3, -2],
          [8, 238, 2, -3],
          [8, 239, -2, -3],
          [8, 240, -3, 2],
          [8, 241, 3, 3],
          [9, 484, 3, -3],
          [9, 485, -3, -3],
          [9, 486, -3, 3],
          [9, 487, 1, -4],
          [9, 488, -1, -4],
          [9, 489, 4, 1],
          [9, 490, -4, 1],
          [9, 491, -4, -1],
          [9, 492, 1, 4],
          [9, 493, 4, -1],
          [9, 494, -1, 4],
          [9, 495, 0, -4],
          [9, 496, -4, 2],
          [9, 497, -4, -2],
          [9, 498, 2, 4],
          [9, 499, -2, -4],
          [9, 500, -4, 0],
          [9, 501, 4, 2],
          [9, 502, 4, -2],
          [9, 503, -2, 4],
          [9, 504, 4, 0],
          [9, 505, 2, -4],
          [9, 506, 0, 4],
          [10, 1014, -3, -4],
          [10, 1015, -3, 4],
          [10, 1016, 3, -4],
          [10, 1017, 4, -3],
          [10, 1018, 3, 4],
          [10, 1019, 4, 3],
          [10, 1020, -4, 3],
          [10, 1021, -4, -3],
          [11, 2044, 4, 4],
          [11, 2045, -4, 4],
          [11, 2046, -4, -4],
          [11, 2047, 4, -4],
        ],
        [
          [1, 0, 0, 0],
          [3, 4, 1, 0],
          [3, 5, 0, 1],
          [4, 12, 1, 1],
          [6, 52, 2, 1],
          [6, 53, 1, 2],
          [6, 54, 2, 0],
          [6, 55, 0, 2],
          [7, 112, 3, 1],
          [7, 113, 1, 3],
          [7, 114, 2, 2],
          [7, 115, 3, 0],
          [7, 116, 0, 3],
          [8, 234, 2, 3],
          [8, 235, 3, 2],
          [8, 236, 1, 4],
          [8, 237, 4, 1],
          [8, 238, 1, 5],
          [8, 239, 5, 1],
          [8, 240, 3, 3],
          [8, 241, 2, 4],
          [8, 242, 0, 4],
          [8, 243, 4, 0],
          [9, 488, 4, 2],
          [9, 489, 2, 5],
          [9, 490, 5, 2],
          [9, 491, 0, 5],
          [9, 492, 6, 1],
          [9, 493, 5, 0],
          [9, 494, 1, 6],
          [9, 495, 4, 3],
          [9, 496, 3, 5],
          [9, 497, 3, 4],
          [9, 498, 5, 3],
          [9, 499, 2, 6],
          [9, 500, 6, 2],
          [9, 501, 1, 7],
          [10, 1004, 3, 6],
          [10, 1005, 0, 6],
          [10, 1006, 6, 0],
          [10, 1007, 4, 4],
          [10, 1008, 7, 1],
          [10, 1009, 4, 5],
          [10, 1010, 7, 2],
          [10, 1011, 5, 4],
          [10, 1012, 6, 3],
          [10, 1013, 2, 7],
          [10, 1014, 7, 3],
          [10, 1015, 6, 4],
          [10, 1016, 5, 5],
          [10, 1017, 4, 6],
          [10, 1018, 3, 7],
          [11, 2038, 7, 0],
          [11, 2039, 0, 7],
          [11, 2040, 6, 5],
          [11, 2041, 5, 6],
          [11, 2042, 7, 4],
          [11, 2043, 4, 7],
          [11, 2044, 5, 7],
          [11, 2045, 7, 5],
          [12, 4092, 7, 6],
          [12, 4093, 6, 6],
          [12, 4094, 6, 7],
          [12, 4095, 7, 7],
        ],
        [
          [3, 0, 1, 1],
          [4, 2, 2, 1],
          [4, 3, 1, 0],
          [4, 4, 1, 2],
          [4, 5, 0, 1],
          [4, 6, 2, 2],
          [5, 14, 0, 0],
          [5, 15, 2, 0],
          [5, 16, 0, 2],
          [5, 17, 3, 1],
          [5, 18, 1, 3],
          [5, 19, 3, 2],
          [5, 20, 2, 3],
          [6, 42, 3, 3],
          [6, 43, 4, 1],
          [6, 44, 1, 4],
          [6, 45, 4, 2],
          [6, 46, 2, 4],
          [6, 47, 3, 0],
          [6, 48, 0, 3],
          [6, 49, 4, 3],
          [6, 50, 3, 4],
          [6, 51, 5, 2],
          [7, 104, 5, 1],
          [7, 105, 2, 5],
          [7, 106, 1, 5],
          [7, 107, 5, 3],
          [7, 108, 3, 5],
          [7, 109, 4, 4],
          [7, 110, 5, 4],
          [7, 111, 0, 4],
          [7, 112, 4, 5],
          [7, 113, 4, 0],
          [7, 114, 2, 6],
          [7, 115, 6, 2],
          [7, 116, 6, 1],
          [7, 117, 1, 6],
          [8, 236, 3, 6],
          [8, 237, 6, 3],
          [8, 238, 5, 5],
          [8, 239, 5, 0],
          [8, 240, 6, 4],
          [8, 241, 0, 5],
          [8, 242, 4, 6],
          [8, 243, 7, 1],
          [8, 244, 7, 2],
          [8, 245, 2, 7],
          [8, 246, 6, 5],
          [8, 247, 7, 3],
          [8, 248, 1, 7],
          [8, 249, 5, 6],
          [8, 250, 3, 7],
          [9, 502, 6, 6],
          [9, 503, 7, 4],
          [9, 504, 6, 0],
          [9, 505, 4, 7],
          [9, 506, 0, 6],
          [9, 507, 7, 5],
          [9, 508, 7, 6],
          [9, 509, 6, 7],
          [10, 1020, 5, 7],
          [10, 1021, 7, 0],
          [10, 1022, 0, 7],
          [10, 1023, 7, 7],
        ],
        [
          [1, 0, 0, 0],
          [3, 4, 1, 0],
          [3, 5, 0, 1],
          [4, 12, 1, 1],
          [6, 52, 2, 1],
          [6, 53, 1, 2],
          [6, 54, 2, 0],
          [6, 55, 0, 2],
          [7, 112, 3, 1],
          [7, 113, 2, 2],
          [7, 114, 1, 3],
          [8, 230, 3, 0],
          [8, 231, 0, 3],
          [8, 232, 2, 3],
          [8, 233, 3, 2],
          [8, 234, 1, 4],
          [8, 235, 4, 1],
          [8, 236, 2, 4],
          [8, 237, 1, 5],
          [9, 476, 4, 2],
          [9, 477, 3, 3],
          [9, 478, 0, 4],
          [9, 479, 4, 0],
          [9, 480, 5, 1],
          [9, 481, 2, 5],
          [9, 482, 1, 6],
          [9, 483, 3, 4],
          [9, 484, 5, 2],
          [9, 485, 6, 1],
          [9, 486, 4, 3],
          [10, 974, 0, 5],
          [10, 975, 2, 6],
          [10, 976, 5, 0],
          [10, 977, 1, 7],
          [10, 978, 3, 5],
          [10, 979, 1, 8],
          [10, 980, 8, 1],
          [10, 981, 4, 4],
          [10, 982, 5, 3],
          [10, 983, 6, 2],
          [10, 984, 7, 1],
          [10, 985, 0, 6],
          [10, 986, 8, 2],
          [10, 987, 2, 8],
          [10, 988, 3, 6],
          [10, 989, 2, 7],
          [10, 990, 4, 5],
          [10, 991, 9, 1],
          [10, 992, 1, 9],
          [10, 993, 7, 2],
          [11, 1988, 6, 0],
          [11, 1989, 5, 4],
          [11, 1990, 6, 3],
          [11, 1991, 8, 3],
          [11, 1992, 0, 7],
          [11, 1993, 9, 2],
          [11, 1994, 3, 8],
          [11, 1995, 4, 6],
          [11, 1996, 3, 7],
          [11, 1997, 0, 8],
          [11, 1998, 10, 1],
          [11, 1999, 6, 4],
          [11, 2e3, 2, 9],
          [11, 2001, 5, 5],
          [11, 2002, 8, 0],
          [11, 2003, 7, 0],
          [11, 2004, 7, 3],
          [11, 2005, 10, 2],
          [11, 2006, 9, 3],
          [11, 2007, 8, 4],
          [11, 2008, 1, 10],
          [11, 2009, 7, 4],
          [11, 2010, 6, 5],
          [11, 2011, 5, 6],
          [11, 2012, 4, 8],
          [11, 2013, 4, 7],
          [11, 2014, 3, 9],
          [11, 2015, 11, 1],
          [11, 2016, 5, 8],
          [11, 2017, 9, 0],
          [11, 2018, 8, 5],
          [12, 4038, 10, 3],
          [12, 4039, 2, 10],
          [12, 4040, 0, 9],
          [12, 4041, 11, 2],
          [12, 4042, 9, 4],
          [12, 4043, 6, 6],
          [12, 4044, 12, 1],
          [12, 4045, 4, 9],
          [12, 4046, 8, 6],
          [12, 4047, 1, 11],
          [12, 4048, 9, 5],
          [12, 4049, 10, 4],
          [12, 4050, 5, 7],
          [12, 4051, 7, 5],
          [12, 4052, 2, 11],
          [12, 4053, 1, 12],
          [12, 4054, 12, 2],
          [12, 4055, 11, 3],
          [12, 4056, 3, 10],
          [12, 4057, 5, 9],
          [12, 4058, 6, 7],
          [12, 4059, 8, 7],
          [12, 4060, 11, 4],
          [12, 4061, 0, 10],
          [12, 4062, 7, 6],
          [12, 4063, 12, 3],
          [12, 4064, 10, 0],
          [12, 4065, 10, 5],
          [12, 4066, 4, 10],
          [12, 4067, 6, 8],
          [12, 4068, 2, 12],
          [12, 4069, 9, 6],
          [12, 4070, 9, 7],
          [12, 4071, 4, 11],
          [12, 4072, 11, 0],
          [12, 4073, 6, 9],
          [12, 4074, 3, 11],
          [12, 4075, 5, 10],
          [13, 8152, 8, 8],
          [13, 8153, 7, 8],
          [13, 8154, 12, 5],
          [13, 8155, 3, 12],
          [13, 8156, 11, 5],
          [13, 8157, 7, 7],
          [13, 8158, 12, 4],
          [13, 8159, 11, 6],
          [13, 8160, 10, 6],
          [13, 8161, 4, 12],
          [13, 8162, 7, 9],
          [13, 8163, 5, 11],
          [13, 8164, 0, 11],
          [13, 8165, 12, 6],
          [13, 8166, 6, 10],
          [13, 8167, 12, 0],
          [13, 8168, 10, 7],
          [13, 8169, 5, 12],
          [13, 8170, 7, 10],
          [13, 8171, 9, 8],
          [13, 8172, 0, 12],
          [13, 8173, 11, 7],
          [13, 8174, 8, 9],
          [13, 8175, 9, 9],
          [13, 8176, 10, 8],
          [13, 8177, 7, 11],
          [13, 8178, 12, 7],
          [13, 8179, 6, 11],
          [13, 8180, 8, 11],
          [13, 8181, 11, 8],
          [13, 8182, 7, 12],
          [13, 8183, 6, 12],
          [14, 16368, 8, 10],
          [14, 16369, 10, 9],
          [14, 16370, 8, 12],
          [14, 16371, 9, 10],
          [14, 16372, 9, 11],
          [14, 16373, 9, 12],
          [14, 16374, 10, 11],
          [14, 16375, 12, 9],
          [14, 16376, 10, 10],
          [14, 16377, 11, 9],
          [14, 16378, 12, 8],
          [14, 16379, 11, 10],
          [14, 16380, 12, 10],
          [14, 16381, 12, 11],
          [15, 32764, 10, 12],
          [15, 32765, 11, 11],
          [15, 32766, 11, 12],
          [15, 32767, 12, 12],
        ],
        [
          [4, 0, 1, 1],
          [4, 1, 1, 2],
          [4, 2, 2, 1],
          [5, 6, 2, 2],
          [5, 7, 1, 0],
          [5, 8, 0, 1],
          [5, 9, 1, 3],
          [5, 10, 3, 2],
          [5, 11, 3, 1],
          [5, 12, 2, 3],
          [5, 13, 3, 3],
          [6, 28, 2, 0],
          [6, 29, 0, 2],
          [6, 30, 2, 4],
          [6, 31, 4, 2],
          [6, 32, 1, 4],
          [6, 33, 4, 1],
          [6, 34, 0, 0],
          [6, 35, 4, 3],
          [6, 36, 3, 4],
          [6, 37, 3, 0],
          [6, 38, 0, 3],
          [6, 39, 4, 4],
          [6, 40, 2, 5],
          [6, 41, 5, 2],
          [7, 84, 1, 5],
          [7, 85, 5, 1],
          [7, 86, 5, 3],
          [7, 87, 3, 5],
          [7, 88, 5, 4],
          [7, 89, 4, 5],
          [7, 90, 6, 2],
          [7, 91, 2, 6],
          [7, 92, 6, 3],
          [7, 93, 4, 0],
          [7, 94, 6, 1],
          [7, 95, 0, 4],
          [7, 96, 1, 6],
          [7, 97, 3, 6],
          [7, 98, 5, 5],
          [7, 99, 6, 4],
          [7, 100, 4, 6],
          [8, 202, 6, 5],
          [8, 203, 7, 2],
          [8, 204, 3, 7],
          [8, 205, 2, 7],
          [8, 206, 5, 6],
          [8, 207, 8, 2],
          [8, 208, 7, 3],
          [8, 209, 5, 0],
          [8, 210, 7, 1],
          [8, 211, 0, 5],
          [8, 212, 8, 1],
          [8, 213, 1, 7],
          [8, 214, 8, 3],
          [8, 215, 7, 4],
          [8, 216, 4, 7],
          [8, 217, 2, 8],
          [8, 218, 6, 6],
          [8, 219, 7, 5],
          [8, 220, 1, 8],
          [8, 221, 3, 8],
          [8, 222, 8, 4],
          [8, 223, 4, 8],
          [8, 224, 5, 7],
          [8, 225, 8, 5],
          [8, 226, 5, 8],
          [9, 454, 7, 6],
          [9, 455, 6, 7],
          [9, 456, 9, 2],
          [9, 457, 6, 0],
          [9, 458, 6, 8],
          [9, 459, 9, 3],
          [9, 460, 3, 9],
          [9, 461, 9, 1],
          [9, 462, 2, 9],
          [9, 463, 0, 6],
          [9, 464, 8, 6],
          [9, 465, 9, 4],
          [9, 466, 4, 9],
          [9, 467, 10, 2],
          [9, 468, 1, 9],
          [9, 469, 7, 7],
          [9, 470, 8, 7],
          [9, 471, 9, 5],
          [9, 472, 7, 8],
          [9, 473, 10, 3],
          [9, 474, 5, 9],
          [9, 475, 10, 4],
          [9, 476, 2, 10],
          [9, 477, 10, 1],
          [9, 478, 3, 10],
          [9, 479, 9, 6],
          [9, 480, 6, 9],
          [9, 481, 8, 0],
          [9, 482, 4, 10],
          [9, 483, 7, 0],
          [9, 484, 11, 2],
          [10, 970, 7, 9],
          [10, 971, 11, 3],
          [10, 972, 10, 6],
          [10, 973, 1, 10],
          [10, 974, 11, 1],
          [10, 975, 9, 7],
          [10, 976, 0, 7],
          [10, 977, 8, 8],
          [10, 978, 10, 5],
          [10, 979, 3, 11],
          [10, 980, 5, 10],
          [10, 981, 8, 9],
          [10, 982, 11, 5],
          [10, 983, 0, 8],
          [10, 984, 11, 4],
          [10, 985, 2, 11],
          [10, 986, 7, 10],
          [10, 987, 6, 10],
          [10, 988, 10, 7],
          [10, 989, 4, 11],
          [10, 990, 1, 11],
          [10, 991, 12, 2],
          [10, 992, 9, 8],
          [10, 993, 12, 3],
          [10, 994, 11, 6],
          [10, 995, 5, 11],
          [10, 996, 12, 4],
          [10, 997, 11, 7],
          [10, 998, 12, 5],
          [10, 999, 3, 12],
          [10, 1e3, 6, 11],
          [10, 1001, 9, 0],
          [10, 1002, 10, 8],
          [10, 1003, 10, 0],
          [10, 1004, 12, 1],
          [10, 1005, 0, 9],
          [10, 1006, 4, 12],
          [10, 1007, 9, 9],
          [10, 1008, 12, 6],
          [10, 1009, 2, 12],
          [10, 1010, 8, 10],
          [11, 2022, 9, 10],
          [11, 2023, 1, 12],
          [11, 2024, 11, 8],
          [11, 2025, 12, 7],
          [11, 2026, 7, 11],
          [11, 2027, 5, 12],
          [11, 2028, 6, 12],
          [11, 2029, 10, 9],
          [11, 2030, 8, 11],
          [11, 2031, 12, 8],
          [11, 2032, 0, 10],
          [11, 2033, 7, 12],
          [11, 2034, 11, 0],
          [11, 2035, 10, 10],
          [11, 2036, 11, 9],
          [11, 2037, 11, 10],
          [11, 2038, 0, 11],
          [11, 2039, 11, 11],
          [11, 2040, 9, 11],
          [11, 2041, 10, 11],
          [11, 2042, 12, 0],
          [11, 2043, 8, 12],
          [12, 4088, 12, 9],
          [12, 4089, 10, 12],
          [12, 4090, 9, 12],
          [12, 4091, 11, 12],
          [12, 4092, 12, 11],
          [12, 4093, 0, 12],
          [12, 4094, 12, 10],
          [12, 4095, 12, 12],
        ],
        [
          [4, 0, 0, 0],
          [4, 1, 1, 1],
          [5, 4, 16, 16],
          [5, 5, 1, 0],
          [5, 6, 0, 1],
          [5, 7, 2, 1],
          [5, 8, 1, 2],
          [5, 9, 2, 2],
          [6, 20, 1, 3],
          [6, 21, 3, 1],
          [6, 22, 3, 2],
          [6, 23, 2, 0],
          [6, 24, 2, 3],
          [6, 25, 0, 2],
          [6, 26, 3, 3],
          [7, 54, 4, 1],
          [7, 55, 1, 4],
          [7, 56, 4, 2],
          [7, 57, 2, 4],
          [7, 58, 4, 3],
          [7, 59, 3, 4],
          [7, 60, 3, 0],
          [7, 61, 0, 3],
          [7, 62, 5, 1],
          [7, 63, 5, 2],
          [7, 64, 2, 5],
          [7, 65, 4, 4],
          [7, 66, 1, 5],
          [7, 67, 5, 3],
          [7, 68, 3, 5],
          [7, 69, 5, 4],
          [8, 140, 4, 5],
          [8, 141, 6, 2],
          [8, 142, 2, 6],
          [8, 143, 6, 1],
          [8, 144, 6, 3],
          [8, 145, 3, 6],
          [8, 146, 1, 6],
          [8, 147, 4, 16],
          [8, 148, 3, 16],
          [8, 149, 16, 5],
          [8, 150, 16, 3],
          [8, 151, 16, 4],
          [8, 152, 6, 4],
          [8, 153, 16, 6],
          [8, 154, 4, 0],
          [8, 155, 4, 6],
          [8, 156, 0, 4],
          [8, 157, 2, 16],
          [8, 158, 5, 5],
          [8, 159, 5, 16],
          [8, 160, 16, 7],
          [8, 161, 16, 2],
          [8, 162, 16, 8],
          [8, 163, 2, 7],
          [8, 164, 7, 2],
          [8, 165, 3, 7],
          [8, 166, 6, 5],
          [8, 167, 5, 6],
          [8, 168, 6, 16],
          [8, 169, 16, 10],
          [8, 170, 7, 3],
          [8, 171, 7, 1],
          [8, 172, 16, 9],
          [8, 173, 7, 16],
          [8, 174, 1, 16],
          [8, 175, 1, 7],
          [8, 176, 4, 7],
          [8, 177, 16, 11],
          [8, 178, 7, 4],
          [8, 179, 16, 12],
          [8, 180, 8, 16],
          [8, 181, 16, 1],
          [8, 182, 6, 6],
          [8, 183, 9, 16],
          [8, 184, 2, 8],
          [8, 185, 5, 7],
          [8, 186, 10, 16],
          [8, 187, 16, 13],
          [8, 188, 8, 3],
          [8, 189, 8, 2],
          [8, 190, 3, 8],
          [8, 191, 5, 0],
          [8, 192, 16, 14],
          [8, 193, 11, 16],
          [8, 194, 7, 5],
          [8, 195, 4, 8],
          [8, 196, 6, 7],
          [8, 197, 7, 6],
          [8, 198, 0, 5],
          [9, 398, 8, 4],
          [9, 399, 16, 15],
          [9, 400, 12, 16],
          [9, 401, 1, 8],
          [9, 402, 8, 1],
          [9, 403, 14, 16],
          [9, 404, 5, 8],
          [9, 405, 13, 16],
          [9, 406, 3, 9],
          [9, 407, 8, 5],
          [9, 408, 7, 7],
          [9, 409, 2, 9],
          [9, 410, 8, 6],
          [9, 411, 9, 2],
          [9, 412, 9, 3],
          [9, 413, 15, 16],
          [9, 414, 4, 9],
          [9, 415, 6, 8],
          [9, 416, 6, 0],
          [9, 417, 9, 4],
          [9, 418, 5, 9],
          [9, 419, 8, 7],
          [9, 420, 7, 8],
          [9, 421, 1, 9],
          [9, 422, 10, 3],
          [9, 423, 0, 6],
          [9, 424, 10, 2],
          [9, 425, 9, 1],
          [9, 426, 9, 5],
          [9, 427, 4, 10],
          [9, 428, 2, 10],
          [9, 429, 9, 6],
          [9, 430, 3, 10],
          [9, 431, 6, 9],
          [9, 432, 10, 4],
          [9, 433, 8, 8],
          [9, 434, 10, 5],
          [9, 435, 9, 7],
          [9, 436, 11, 3],
          [9, 437, 1, 10],
          [9, 438, 7, 0],
          [9, 439, 10, 6],
          [9, 440, 7, 9],
          [9, 441, 3, 11],
          [9, 442, 5, 10],
          [9, 443, 10, 1],
          [9, 444, 4, 11],
          [9, 445, 11, 2],
          [9, 446, 13, 2],
          [9, 447, 6, 10],
          [9, 448, 13, 3],
          [9, 449, 2, 11],
          [9, 450, 16, 0],
          [9, 451, 5, 11],
          [9, 452, 11, 5],
          [10, 906, 11, 4],
          [10, 907, 9, 8],
          [10, 908, 7, 10],
          [10, 909, 8, 9],
          [10, 910, 0, 16],
          [10, 911, 4, 13],
          [10, 912, 0, 7],
          [10, 913, 3, 13],
          [10, 914, 11, 6],
          [10, 915, 13, 1],
          [10, 916, 13, 4],
          [10, 917, 12, 3],
          [10, 918, 2, 13],
          [10, 919, 13, 5],
          [10, 920, 8, 10],
          [10, 921, 6, 11],
          [10, 922, 10, 8],
          [10, 923, 10, 7],
          [10, 924, 14, 2],
          [10, 925, 12, 4],
          [10, 926, 1, 11],
          [10, 927, 4, 12],
          [10, 928, 11, 1],
          [10, 929, 3, 12],
          [10, 930, 1, 13],
          [10, 931, 12, 2],
          [10, 932, 7, 11],
          [10, 933, 3, 14],
          [10, 934, 5, 12],
          [10, 935, 5, 13],
          [10, 936, 14, 4],
          [10, 937, 4, 14],
          [10, 938, 11, 7],
          [10, 939, 14, 3],
          [10, 940, 12, 5],
          [10, 941, 13, 6],
          [10, 942, 12, 6],
          [10, 943, 8, 0],
          [10, 944, 11, 8],
          [10, 945, 2, 12],
          [10, 946, 9, 9],
          [10, 947, 14, 5],
          [10, 948, 6, 13],
          [10, 949, 10, 10],
          [10, 950, 15, 2],
          [10, 951, 8, 11],
          [10, 952, 9, 10],
          [10, 953, 14, 6],
          [10, 954, 10, 9],
          [10, 955, 5, 14],
          [10, 956, 11, 9],
          [10, 957, 14, 1],
          [10, 958, 2, 14],
          [10, 959, 6, 12],
          [10, 960, 1, 12],
          [10, 961, 13, 8],
          [10, 962, 0, 8],
          [10, 963, 13, 7],
          [10, 964, 7, 12],
          [10, 965, 12, 7],
          [10, 966, 7, 13],
          [10, 967, 15, 3],
          [10, 968, 12, 1],
          [10, 969, 6, 14],
          [10, 970, 2, 15],
          [10, 971, 15, 5],
          [10, 972, 15, 4],
          [10, 973, 1, 14],
          [10, 974, 9, 11],
          [10, 975, 4, 15],
          [10, 976, 14, 7],
          [10, 977, 8, 13],
          [10, 978, 13, 9],
          [10, 979, 8, 12],
          [10, 980, 5, 15],
          [10, 981, 3, 15],
          [10, 982, 10, 11],
          [10, 983, 11, 10],
          [10, 984, 12, 8],
          [10, 985, 15, 6],
          [10, 986, 15, 7],
          [10, 987, 8, 14],
          [10, 988, 15, 1],
          [10, 989, 7, 14],
          [10, 990, 9, 0],
          [10, 991, 0, 9],
          [10, 992, 9, 13],
          [10, 993, 9, 12],
          [10, 994, 12, 9],
          [10, 995, 14, 8],
          [10, 996, 10, 13],
          [10, 997, 14, 9],
          [10, 998, 12, 10],
          [10, 999, 6, 15],
          [10, 1e3, 7, 15],
          [11, 2002, 9, 14],
          [11, 2003, 15, 8],
          [11, 2004, 11, 11],
          [11, 2005, 11, 14],
          [11, 2006, 1, 15],
          [11, 2007, 10, 12],
          [11, 2008, 10, 14],
          [11, 2009, 13, 11],
          [11, 2010, 13, 10],
          [11, 2011, 11, 13],
          [11, 2012, 11, 12],
          [11, 2013, 8, 15],
          [11, 2014, 14, 11],
          [11, 2015, 13, 12],
          [11, 2016, 12, 13],
          [11, 2017, 15, 9],
          [11, 2018, 14, 10],
          [11, 2019, 10, 0],
          [11, 2020, 12, 11],
          [11, 2021, 9, 15],
          [11, 2022, 0, 10],
          [11, 2023, 12, 12],
          [11, 2024, 11, 0],
          [11, 2025, 12, 14],
          [11, 2026, 10, 15],
          [11, 2027, 13, 13],
          [11, 2028, 0, 13],
          [11, 2029, 14, 12],
          [11, 2030, 15, 10],
          [11, 2031, 15, 11],
          [11, 2032, 11, 15],
          [11, 2033, 14, 13],
          [11, 2034, 13, 0],
          [11, 2035, 0, 11],
          [11, 2036, 13, 14],
          [11, 2037, 15, 12],
          [11, 2038, 15, 13],
          [11, 2039, 12, 15],
          [11, 2040, 14, 0],
          [11, 2041, 14, 14],
          [11, 2042, 13, 15],
          [11, 2043, 12, 0],
          [11, 2044, 14, 15],
          [12, 4090, 0, 14],
          [12, 4091, 0, 12],
          [12, 4092, 15, 14],
          [12, 4093, 15, 0],
          [12, 4094, 0, 15],
          [12, 4095, 15, 15],
        ],
      ],
      tu = [
        0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 64, 72, 80, 88, 96, 108, 120, 132, 144, 156, 172, 188,
        212, 240, 276, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024,
      ],
      nu = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 92, 128],
      ru = [
        0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 88, 96, 108, 120, 132, 144, 160, 176, 196, 216,
        240, 264, 292, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608, 640, 672, 704, 736, 768, 800, 832, 864, 896,
        928, 1024,
      ],
      iu = [0, 4, 8, 12, 16, 20, 28, 36, 44, 56, 68, 80, 96, 112, 128],
      eu = [
        0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 136, 148, 160, 172,
        188, 204, 220, 240, 260, 284, 308, 336, 364, 396, 432, 468, 508, 552, 600, 652, 704, 768, 832, 896, 960, 1024,
      ],
      uu = [0, 4, 8, 12, 16, 20, 24, 28, 36, 44, 52, 64, 76, 92, 108, 128],
      ou = [
        0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 100, 112, 124, 136, 148, 160, 172, 184, 196, 212, 228, 244, 260,
        280, 300, 320, 344, 368, 396, 424, 456, 492, 532, 572, 616, 664, 716, 772, 832, 896, 960, 1024,
      ],
      au = [0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 72, 88, 108, 128],
      fu = [
        tu,
        tu,
        [
          0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 64, 72, 80, 88, 100, 112, 124, 140, 156, 172, 192,
          216, 240, 268, 304, 344, 384, 424, 464, 504, 544, 584, 624, 664, 704, 744, 784, 824, 864, 904, 944, 984, 1024,
        ],
        ru,
        ru,
        [
          0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 88, 96, 108, 120, 132, 144, 160, 176, 196, 216,
          240, 264, 292, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608, 640, 672, 704, 736, 768, 800, 832, 864, 896,
          928, 960, 992, 1024,
        ],
        eu,
        eu,
        ou,
        ou,
        ou,
        [
          0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 172, 188, 204, 220, 236, 252, 268, 288, 308, 328,
          348, 372, 396, 420, 448, 476, 508, 544, 580, 620, 664, 712, 764, 820, 880, 944, 1024,
        ],
      ],
      su = [
        nu,
        nu,
        [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 92, 128],
        iu,
        iu,
        iu,
        uu,
        uu,
        au,
        au,
        au,
        [0, 4, 8, 12, 16, 20, 24, 28, 36, 44, 52, 60, 72, 88, 108, 128],
      ],
      cu = 2;
    function hu(t, n, r, i) {
      var e;
      if (((t.rn = [1, 0, 0, 0, 0, 0, 0, 0]), (r.bit += 1), (t.en = We(n, r, 2)), (r.bit += 1), t.en === cu)) {
        for (t.an = 0, t.sn = We(n, r, 4), e = 0; e < 7; e += 1)
          He(n, r) ? (t.rn[t.an] += 1) : ((t.an += 1), (t.rn[t.an] = 1));
        (t.an += 1), (t.ln = 8), (t.mn = su[t.gn]);
      } else if (((t.an = 1), (t.ln = 1), (t.mn = fu[t.gn]), (t.sn = We(n, r, 6)), He(n, r)))
        throw new je(Xe.kft, { info: "Prediction not implemented" });
    }
    var _u,
      vu,
      lu = [
        [1, 0],
        [3, 4],
        [4, 10],
        [4, 11],
        [4, 12],
        [5, 26],
        [5, 27],
        [6, 56],
        [6, 57],
        [6, 58],
        [6, 59],
        [7, 120],
        [7, 121],
        [7, 122],
        [8, 246],
        [8, 247],
        [8, 248],
        [8, 249],
        [8, 250],
        [9, 502],
        [9, 503],
        [9, 504],
        [9, 505],
        [10, 1012],
        [10, 1013],
        [10, 1014],
        [10, 1015],
        [10, 1016],
        [10, 1017],
        [11, 2036],
        [11, 2037],
        [11, 2038],
        [11, 2039],
        [11, 2040],
        [11, 2041],
        [12, 4084],
        [12, 4085],
        [12, 4086],
        [12, 4087],
        [12, 4088],
        [12, 4089],
        [13, 8180],
        [13, 8181],
        [13, 8182],
        [13, 8183],
        [13, 8184],
        [14, 16370],
        [14, 16371],
        [14, 16372],
        [14, 16373],
        [14, 16374],
        [14, 16375],
        [14, 16376],
        [14, 16377],
        [15, 32756],
        [15, 32757],
        [15, 32758],
        [15, 32759],
        [16, 65520],
        [16, 65521],
        [16, 65522],
        [16, 65523],
        [16, 65524],
        [16, 65525],
        [16, 65526],
        [17, 131054],
        [17, 131055],
        [17, 131056],
        [18, 262114],
        [18, 262115],
        [18, 262116],
        [18, 262117],
        [18, 262118],
        [18, 262119],
        [18, 262120],
        [19, 524242],
        [19, 524243],
        [19, 524244],
        [19, 524245],
        [19, 524246],
        [19, 524247],
        [19, 524248],
        [19, 524249],
        [19, 524250],
        [19, 524251],
        [19, 524252],
        [19, 524253],
        [19, 524254],
        [19, 524255],
        [19, 524256],
        [19, 524257],
        [19, 524258],
        [19, 524259],
        [19, 524260],
        [19, 524261],
        [19, 524262],
        [19, 524263],
        [19, 524264],
        [19, 524265],
        [19, 524266],
        [19, 524267],
        [19, 524268],
        [19, 524269],
        [19, 524270],
        [19, 524271],
        [19, 524272],
        [19, 524273],
        [19, 524274],
        [19, 524275],
        [19, 524276],
        [19, 524277],
        [19, 524278],
        [19, 524279],
        [19, 524280],
        [19, 524281],
        [19, 524282],
        [19, 524283],
        [19, 524284],
        [19, 524285],
        [19, 524286],
        [19, 524287],
      ];
    function du(t, n) {
      for (var r, i = 0, e = 1, u = e, o = He(t, n); o !== lu[i][1]; )
        (u = (r = lu[(i += 1)][0]) - e) && ((e = r), (o <<= u), (o |= We(t, n, u)));
    }
    function pu(t, n, r) {
      function i(t, n) {
        for (var r = 0, i = n.length; r < i; r += 1) n[r] && (t.bit += 1);
      }
      function e(t, n) {
        for (var r = 4; He(t, n); ) r += 1;
        n.bit += r;
      }
      var u = Qe[r - 1],
        o = (function (t, n, r) {
          for (var i, e = 0, u = r[0][0], o = u, a = We(t, n, o); a !== r[e][1]; )
            (o = (i = r[(e += 1)][0]) - u) && ((u = i), (a <<= o), (a |= We(t, n, o)));
          return e;
        })(t, n, u),
        a = [0, 0, 0, 0];
      if (((a[0] = u[o][2]), (a[1] = u[o][3]), r < 5 && ((a[2] = u[o][4]), (a[3] = u[o][5])), r < 11))
        (3 === r || 4 === r || r >= 7) && i(n, a);
      else {
        if (!(11 === r || r > 15)) throw new je(Xe.kft, { info: "Huffman: unknown spectral codebook: " + r });
        i(n, a), 16 === a[0] && e(t, n), 16 === a[1] && e(t, n);
      }
    }
    function wu(t, n, r, i, e) {
      if (
        ((r.bit += 8),
        i || e || hu(t, n, r),
        (function (t, n, r) {
          var i,
            e,
            u,
            o,
            a,
            f = t.en === cu ? 3 : 5,
            s = t.en === cu ? 7 : 31,
            c = 0,
            h = t.an,
            _ = t.sn,
            v = [],
            l = [];
          for (t.kn = v, t.bn = l, i = 0; i < h; i += 1)
            for (e = 0; e < _; ) {
              for (u = We(n, r, 4), a = e; (o = We(n, r, f)) === s; ) a += o;
              if ((a += o) > _) throw new je(Xe.kft, { info: "Number of bands is too high" });
              if (0 === a) throw new je(Xe.kft, { info: "sectionLength is 0" });
              for (; e < a; e += 1) (v[c] = u), (l[c] = a), (c += 1);
            }
        })(t, n, r),
        (function (t, n, r) {
          var i,
            e,
            u,
            o = 0,
            a = !0,
            f = t.an,
            s = t.sn,
            c = t.kn;
          for (i = 0; i < f; i += 1)
            for (e = 0; e < s; e += 1, o += 1)
              (u = c[o]) !== _u.wpt &&
                (u === _u.kpt || u === _u.ppt ? du(n, r) : u === _u.mpt && a ? ((r.bit += 9), (a = !1)) : du(n, r));
        })(t, n, r),
        !e)
      ) {
        if (He(n, r)) {
          if (2 === t.en) throw new je(Xe.kft, { info: "Pulse not allowed in eight short sequence." });
          !(function (t, n) {
            var r = We(t, n, 2);
            n.bit += 6 + 9 * r;
          })(n, r);
        }
        if (
          (He(n, r) &&
            (function (t, n, r) {
              for (var i, e, u, o, a, f = 0, s = t.ln, c = 2 === t.en ? [1, 4, 3] : [2, 6, 5]; f < s; f += 1)
                if ((e = We(n, r, c[0])))
                  for (u = He(n, r), i = 0; i < e; i += 1)
                    (r.bit += c[1]), (a = We(n, r, c[2])) && ((r.bit += 1), (o = u + 3 - He(n, r)), (r.bit += o * a));
            })(t, n, r),
          He(n, r))
        )
          throw new je(Xe.kft, { info: "Gain Control not implemented." });
      }
      !(function (t, n, r) {
        var i,
          e,
          u,
          o,
          a,
          f,
          s,
          c = t.an,
          h = 0,
          _ = t.mn,
          v = t.rn,
          l = t.sn,
          d = t.kn;
        for (i = 0; i < c; i += 1)
          for (f = v[i], e = 0; e < l; e += 1, h += 1)
            if (((a = d[h]), (s = _[e + 1] - _[e]), a !== _u.wpt && a !== _u.mpt && a !== _u.kpt && a !== _u.ppt))
              for (o = 0; o < f; o += 1)
                if (a < _u.ypt) for (u = 0; u < s; u += 4) pu(n, r, a);
                else for (u = 0; u < s; u += 2) pu(n, r, a);
      })(t, n, r);
    }
    function mu(t, n, r) {
      (r.bit += 4), wu(t, n, r, 0, 0);
    }
    function yu(t, n, r) {
      r.bit += 4;
      var i = He(n, r);
      i && (hu(t, n, r), 1 === We(n, r, 2) && (r.bit += t.an * t.sn));
      wu(t, n, r, i, 0), wu(t, n, r, i, 0);
    }
    function gu(t, n, r) {
      var i,
        e,
        u,
        o,
        a,
        f,
        s,
        c,
        h,
        _,
        v = 0;
      for (r.bit += 4, i = He(n, r), e = We(n, r, 3), u = 0; u <= e; u += 1)
        (v += 1), (o = He(n, r)), (r.bit += 4), o && 3 === We(n, r, 2) && (v += 1);
      for (r.bit += 4, wu(t, n, r, 0, 0), c = t.an, h = t.sn, _ = t.kn, u = 1; u < v; u += 1)
        if (((s = 0), i ? 1 : He(n, r))) du(n, r);
        else for (a = 0; a < c; a += 1) for (f = 0; f < h; f += 1, s += 1) _[s] !== _u.wpt && du(n, r);
    }
    function Iu(t, n) {
      var r, i;
      (n.bit += 4),
        (r = He(t, n)),
        255 === (i = We(t, n, 8)) && (i += We(t, n, 8)),
        r && 0 !== n.bit && (n.bit += 7 - ((n.bit - 1) % 8)),
        (n.bit += 8 * i);
    }
    function Eu(t, n) {
      var r, i, e, u, o, a, f, s;
      (n.bit += 10),
        (r = We(t, n, 4)),
        (i = We(t, n, 4)),
        (e = We(t, n, 4)),
        (u = We(t, n, 2)),
        (o = We(t, n, 3)),
        (a = We(t, n, 4)),
        He(t, n) && (n.bit += 4),
        He(t, n) && (n.bit += 4),
        He(t, n) && (n.bit += 3),
        (n.bit += 5 * r),
        (n.bit += 5 * i),
        (n.bit += 5 * e),
        (n.bit += 4 * u),
        (n.bit += 4 * o),
        (n.bit += 5 * a),
        0 !== (s = n.bit % 8) && (n.bit += 8 - s),
        (f = We(t, n, 8)),
        (n.bit += 8 * f);
    }
    function Su(t, n) {
      var r = 1,
        i = 1;
      return (
        He(t, n) && ((n.bit += 8), (r = 2)),
        He(t, n) &&
          (r += (function (t, n) {
            var r = 1;
            for (n.bit += 7; He(t, n); ) (n.bit += 7), (r += 1);
            return r;
          })(t, n)),
        He(t, n) && ((r += 1 + (i += We(t, n, 4))), (n.bit += 4 + 8 * i)),
        He(t, n) && ((n.bit += 8), (r += 1)),
        (n.bit += 8 * i),
        (r += i)
      );
    }
    !(function (t) {
      (t[(t.wpt = 0)] = "wpt"),
        (t[(t.ypt = 5)] = "ypt"),
        (t[(t.mpt = 13)] = "mpt"),
        (t[(t.ppt = 14)] = "ppt"),
        (t[(t.kpt = 15)] = "kpt");
    })(_u || (_u = {})),
      (function (t) {
        (t[(t.bpt = 0)] = "bpt"),
          (t[(t.Apt = 1)] = "Apt"),
          (t[(t.Tpt = 2)] = "Tpt"),
          (t[(t.Spt = 11)] = "Spt"),
          (t[(t.Ept = 13)] = "Ept"),
          (t[(t.Ipt = 14)] = "Ipt");
      })(vu || (vu = {}));
    var Tu,
      ku = 0;
    function bu(t, n, r) {
      var i,
        e = 0,
        u = 0;
      switch (We(t, n, 4)) {
        case vu.Spt:
          return Su(t, n);
        case vu.Ept:
        case vu.Ipt:
          return Je;
        case vu.Apt:
          return (n.bit += 4 + 8 * (r - 1)), r;
        case vu.Tpt:
          switch (We(t, n, 4)) {
            case ku:
              do {
                (e += i = We(t, n, 8)), (u += 1);
              } while (255 === i);
              return (n.bit += 8 * e), e + u + 1;
            default:
              return (n.bit += 8 * (r - 1)), r;
          }
        case vu.bpt:
        default:
          return (n.bit += 8 * r - 4), r;
      }
    }
    function Nu(t, n) {
      var r = We(t, n, 4);
      for (15 === r && (r += We(t, n, 8) - 1); r > 0; ) {
        var i = bu(t, n, r);
        if (i === Je) return !0;
        r -= i;
      }
      return !1;
    }
    function Au(t, n) {
      for (var r = { bit: 0 }, i = { gn: n }, e = We(t, r, 3); e !== Tu.Bpt; ) {
        if (t.length < r.bit / 8) return !1;
        switch (e) {
          case Tu.Rpt:
            mu(i, t, r);
            break;
          case Tu.Npt:
            yu(i, t, r);
            break;
          case Tu.Cpt:
            gu(i, t, r);
            break;
          case Tu.Dpt:
            mu(i, t, r);
            break;
          case Tu.Ppt:
            Iu(t, r);
            break;
          case Tu.Opt:
            Eu(t, r);
            break;
          case Tu.xpt:
            if (Nu(t, r)) return !0;
        }
        e = We(t, r, 3);
      }
      return !1;
    }
    !(function (t) {
      (t[(t.Rpt = 0)] = "Rpt"),
        (t[(t.Npt = 1)] = "Npt"),
        (t[(t.Cpt = 2)] = "Cpt"),
        (t[(t.Dpt = 3)] = "Dpt"),
        (t[(t.Ppt = 4)] = "Ppt"),
        (t[(t.Opt = 5)] = "Opt"),
        (t[(t.xpt = 6)] = "xpt"),
        (t[(t.Bpt = 7)] = "Bpt");
    })(Tu || (Tu = {}));
    var Du = (function () {
      function t() {}
      var n = t.prototype;
      return (
        (n.Tp = function (t) {
          return this.Sp() * t;
        }),
        (n.Ep = function (t) {
          return this.Ip(t) > 0;
        }),
        (n.Rp = function (t) {
          return this.Ip(t) >= 0;
        }),
        (n.Np = function (t, n) {
          return this.Dp(t).Cp(n);
        }),
        (n.dp = function (t) {
          return 0 === this.Ip(t);
        }),
        (n.Pp = function (t) {
          return this.Ip(t) < 0;
        }),
        (n.Cp = function (t) {
          return this.Ip(t) <= 0;
        }),
        (n.Op = function () {
          return this.xp() ? this.Bp() : this;
        }),
        (n.Mp = function (t) {
          return this.Dm(t.Bp());
        }),
        (n.Dp = function (t) {
          return this.Mp(t).Op();
        }),
        t
      );
    })();
    function Ru(t, n) {
      return t.Lp()
        ? n.Lp()
          ? ce.ys
          : ce.As
        : n.Lp()
        ? ce.Ts
        : t.Fp()
        ? n.Fp() && t.xp() === n.xp()
          ? ce.ys
          : t.xp()
          ? ce.Ts
          : ce.As
        : n.xp()
        ? ce.As
        : ce.Ts;
    }
    var Pu = (function () {
      function t(t, n) {
        (this.Up = void 0), (this.jp = void 0), (this.Up = t), (this.jp = n);
      }
      (t.Vp = function (n, r, i) {
        return i ? new t(n.toUnsigned(), r.toUnsigned()) : new t(n.toSigned(), r.toSigned());
      }),
        (t.zp = function (n) {
          return n.unsigned ? new t(n, Y.UZERO) : new t(n, n.isNegative() ? Y.NEG_ONE : Y.ZERO);
        }),
        (t.Hp = function (n, r) {
          if (d(n)) return r ? t.Wp : t.qp;
          if (r) {
            if (n < 0) return t.Wp;
            if (n >= 3.402823669209385e38) return t.Gp;
          } else {
            if (n <= -1.7014118346046923e38) return t.Xp;
            if (n + 1 >= 1.7014118346046923e38) return t.$p;
          }
          return n < 0
            ? t.Hp(-n, r).Bp()
            : t.Vp(Y.fromNumber(n % 0x10000000000000000), Y.fromNumber(n / 0x10000000000000000), r);
        });
      var n = t.prototype;
      return (
        (n.Qp = function () {
          return this.jp.unsigned;
        }),
        (n.Yp = function () {
          return this.Up.isZero() && this.jp.isZero();
        }),
        (n.xp = function () {
          return this.jp.isNegative();
        }),
        (n.Zp = function () {
          return this.Qp() ? t.Vp(this.Up, this.jp, !1) : this;
        }),
        (n.Kp = function () {
          return this.Qp() ? this : t.Vp(this.Up, this.jp, !0);
        }),
        (n.Jp = function () {
          return this.Up;
        }),
        (n.Sp = function () {
          return this.xp()
            ? -this.Bp().Sp()
            : 0x10000000000000000 * this.jp.toNumber() + this.Up.toUnsigned().toNumber();
        }),
        (n.nk = function () {
          return this.Up.toInt();
        }),
        (n.dp = function (t) {
          return (
            (this.Qp() === t.Qp() || this.jp.getHighBits() >>> 31 != 1 || t.jp.getHighBits() >>> 31 != 1) &&
            this.jp.toUnsigned().eq(t.jp.toUnsigned()) &&
            this.Up.toUnsigned().eq(t.Up.toUnsigned())
          );
        }),
        (n.Ip = function (t) {
          if (this.dp(t)) return ce.ys;
          var n = this.xp(),
            r = t.xp();
          if (n && !r) return ce.Ts;
          if (!n && r) return ce.As;
          if (!this.Qp()) return this.Mp(t).xp() ? ce.Ts : ce.As;
          var i = this.Kp(),
            e = t.Kp(),
            u = e.jp.comp(i.jp);
          return u > 0 || (0 === u && e.Up.gt(i.Up)) ? ce.Ts : ce.As;
        }),
        (n.Pp = function (t) {
          return this.Ip(t) < 0;
        }),
        (n.Cp = function (t) {
          return this.Ip(t) <= 0;
        }),
        (n.ek = function (t) {
          return this.Ip(t) > 0;
        }),
        (n.rk = function (t) {
          return this.Ip(t) >= 0;
        }),
        (n.hk = function () {
          return new t(this.Up.not(), this.jp.not());
        }),
        (n.ck = function (n) {
          return new t(this.Up.and(n.Up), this.jp.and(n.jp));
        }),
        (n.fk = function (n) {
          return new t(this.Up.or(n.Up), this.jp.or(n.jp));
        }),
        (n.vk = function (n) {
          var r = 127 & n;
          return 0 === r
            ? this
            : r < 64
            ? t.Vp(this.Up.shl(r), this.jp.shl(r).or(this.Up.shru(64 - r)), this.Qp())
            : t.Vp(Y.ZERO, this.Up.shl(r - 64), this.Qp());
        }),
        (n.lk = function (n) {
          var r = 127 & n;
          return 0 === r
            ? this
            : r < 64
            ? t.Vp(this.Up.shru(r).or(this.jp.shl(64 - r)), this.jp.shr(r), this.Qp())
            : t.Vp(this.jp.shr(r - 64), this.jp.isNegative() ? Y.NEG_ONE : Y.ZERO, this.Qp());
        }),
        (n.dk = function (n) {
          var r = 127 & n;
          return 0 === r
            ? this
            : r < 64
            ? t.Vp(this.Up.shru(r).or(this.jp.shl(64 - r)), this.jp.shru(r), this.Qp())
            : 64 === r
            ? t.Vp(this.jp, Y.ZERO, this.Qp())
            : t.Vp(this.jp.shru(r - 64), Y.ZERO, this.Qp());
        }),
        (n.Dm = function (n) {
          var r = this.jp.high >>> 16,
            i = 65535 & this.jp.high,
            e = this.jp.low >>> 16,
            u = 65535 & this.jp.low,
            o = this.Up.high >>> 16,
            a = 65535 & this.Up.high,
            f = this.Up.low >>> 16,
            s = 65535 & this.Up.low,
            c = n.jp.high >>> 16,
            h = 65535 & n.jp.high,
            _ = n.jp.low >>> 16,
            v = 65535 & n.jp.low,
            l = n.Up.high >>> 16,
            d = 65535 & n.Up.high,
            p = n.Up.low >>> 16,
            w = 0,
            m = 0,
            y = 0,
            g = 0,
            I = 0,
            E = 0,
            S = 0,
            T = 0;
          (S += (T += s + (65535 & n.Up.low)) >>> 16),
            (T &= 65535),
            (E += (S += f + p) >>> 16),
            (S &= 65535),
            (I += (E += a + d) >>> 16),
            (E &= 65535),
            (g += (I += o + l) >>> 16),
            (I &= 65535),
            (y += (g += u + v) >>> 16),
            (g &= 65535),
            (m += (y += e + _) >>> 16),
            (y &= 65535),
            (w += (m += i + h) >>> 16),
            (m &= 65535),
            (w += r + c),
            (w &= 65535);
          var k = this.Qp(),
            b = Y.fromBits((y << 16) | g, (w << 16) | m, k),
            N = Y.fromBits((S << 16) | T, (I << 16) | E, k);
          return t.Vp(N, b, k);
        }),
        (n.Mp = function (t) {
          return this.Dm(t.Bp());
        }),
        (n.Bp = function () {
          return this.hk().Dm(t._k);
        }),
        (n.gk = function (n) {
          if (this.Yp() || n.Yp()) return this.Qp() ? t.Wp : t.qp;
          if (this.xp()) return n.xp() ? this.Bp().gk(n.Bp()) : this.Bp().gk(n).Bp();
          if (n.xp()) return this.gk(n.Bp()).Bp();
          if (this.jp.isZero() && 0 === this.Up.high && n.jp.isZero() && 0 === n.Up.high)
            return t.zp(this.Up.multiply(n.Up));
          var r = Y.fromBits(4294967295, 0, !0),
            i = this.Up.and(r),
            e = this.Up.shru(32),
            u = this.jp.and(r),
            o = this.jp.shru(32),
            a = n.Up.and(r),
            f = n.Up.shru(32),
            s = n.jp.and(r),
            c = n.jp.shru(32),
            h = Y.UZERO,
            _ = Y.UZERO,
            v = Y.UZERO,
            l = Y.UZERO;
          (h = h.add(i.mul(a))),
            (_ = _.add(h.shru(32))),
            (h = h.and(r)),
            (_ = _.add(e.mul(a))),
            (v = v.add(_.shru(32))),
            (_ = (_ = _.and(r)).add(i.mul(f))),
            (v = v.add(_.shru(32))),
            (_ = _.and(r)),
            (v = v.add(u.mul(a))),
            (l = l.add(v.shru(32))),
            (v = (v = v.and(r)).add(e.mul(f))),
            (l = l.add(v.shru(32))),
            (v = (v = v.and(r)).add(i.mul(s))),
            (l = l.add(v.shru(32))),
            (v = v.and(r)),
            (l = l.add(o.mul(a)).add(u.mul(f)).add(e.mul(s)).add(i.mul(c)).and(r));
          var d = Y.fromBits(h.getLowBitsUnsigned(), _.getLowBitsUnsigned(), !0),
            p = Y.fromBits(v.getLowBitsUnsigned(), l.getLowBitsUnsigned(), !0);
          return t.Vp(d, p, this.Qp());
        }),
        (n.wk = function (n) {
          var r,
            i,
            e = n;
          if (e.Yp()) throw new RangeError("division by zero");
          if (this.Yp()) return this.Qp() ? [t.Wp, t.Wp] : [t.qp, t.qp];
          if (this.Qp()) {
            if ((e.Qp() || (e = e.Kp()), e.ek(this))) return [t.Wp, this];
            if (e.ek(this.dk(1))) return [(i = t.yk), (r = this.Mp(e))];
            i = t.Wp;
          } else {
            if (this.dp(t.Xp)) {
              if (e.dp(t._k) || e.dp(t.pk)) return [t.Xp, t.qp];
              if (e.dp(t.Xp)) return [t._k, t.qp];
              var u = this.lk(1).bk(e).vk(1);
              return (
                u.dp(t.qp) ? (i = e.xp() ? t._k : t.pk) : ((r = this.Mp(e.gk(u))), (i = u.Dm(r.bk(e)))),
                [i, (r = this.Mp(e.gk(i)))]
              );
            }
            if (e.dp(t.Xp)) return this.Qp() ? [t.Wp, this] : [t.qp, this];
            if (this.xp()) {
              if (e.xp()) return this.Bp().wk(e.Bp());
              var o = this.Bp().wk(e);
              return (i = o[0]), (r = o[1]), [i.Bp(), r.Bp()];
            }
            if (e.xp()) {
              var a = this.wk(e.Bp());
              return (i = a[0]), (r = a[1]), [i.Bp(), r.Bp()];
            }
            i = t.qp;
          }
          for (r = this; r.rk(e); ) {
            for (
              var f = _.max(1, _.floor(r.Sp() / e.Sp())),
                s = _.ceil(_.log(f) / _.LN2),
                c = s <= 48 ? 1 : _.pow(2, s - 48),
                h = t.Hp(f),
                v = h.gk(e);
              v.xp() || v.ek(r);

            )
              (f -= c), (v = (h = t.Hp(f, this.Qp())).gk(e));
            h.Yp() && (h = t._k), (i = i.Dm(h)), (r = r.Mp(v));
          }
          return [i, r];
        }),
        (n.bk = function (t) {
          return this.wk(t)[0];
        }),
        (n.Ak = function (t) {
          return this.wk(t)[1];
        }),
        (n.toString = function (n) {
          var r = n || 10;
          if (r < 2 || r > 36) throw new RangeError("radix");
          if (this.Yp()) return "0";
          if (this.xp()) {
            if (this.dp(t.Xp)) {
              var i = t.Hp(r),
                e = this.bk(i),
                u = e.gk(i).Mp(this);
              return e.toString(r) + u.nk().toString(r);
            }
            return "-" + this.Bp().toString(r);
          }
          for (var o = t.Hp(_.pow(r, 6), this.Qp()), a = this, f = ""; ; ) {
            var s = a.bk(o),
              c = (a.Mp(s.gk(o)).nk() >>> 0).toString(r);
            if ((a = s).Yp()) return c + f;
            for (; c.length < 6; ) c = "0" + c;
            f = String(c) + f;
          }
        }),
        t
      );
    })();
    (Pu.qp = Pu.zp(Y.ZERO)),
      (Pu.Wp = Pu.zp(Y.UZERO)),
      (Pu._k = Pu.zp(Y.ONE)),
      (Pu.yk = Pu.zp(Y.UONE)),
      (Pu.pk = Pu.zp(Y.NEG_ONE)),
      (Pu.$p = Pu.Vp(Y.NEG_ONE, Y.MAX_VALUE, !1)),
      (Pu.Gp = Pu.Vp(Y.MAX_UNSIGNED_VALUE, Y.MAX_UNSIGNED_VALUE, !0)),
      (Pu.Xp = Pu.Vp(Y.ZERO, Y.MIN_VALUE, !1));
    var Ou = (function () {
      function t(t, n) {
        void 0 === n && (n = 1), (this.Tk = void 0), (this.Sk = void 0), (this.Tk = t), (this.Sk = n);
      }
      (t.Ek = function (n) {
        return new t(_.ceil(n.Tk), n.Sk);
      }),
        (t.Ik = function (n) {
          return new t(_.floor(n.Tk), n.Sk);
        }),
        (t.Rk = function (t, n) {
          return t.Rp(n) ? t : n;
        }),
        (t.Nk = function (t, n) {
          return t.Cp(n) ? t : n;
        });
      var n = t.prototype;
      return (
        (n.Dm = function (n) {
          return this.Sk >= n.Sk ? new t(this.Tk + n.Ck(this.Sk).Tk, this.Sk) : new t(this.Ck(n.Sk).Tk + n.Tk, n.Sk);
        }),
        (n.Ep = function (t) {
          return t.Pp(this);
        }),
        (n.Rp = function (t) {
          return t.Cp(this);
        }),
        (n.Dp = function (n) {
          return this.Sk >= n.Sk ? new t(_.abs(this.Tk - n.Ck(this.Sk).Tk), this.Sk) : n.Dp(this);
        }),
        (n.Np = function (t, n) {
          return this.Dp(t).Cp(n);
        }),
        (n.Ip = function (t) {
          return (r = t), (n = this).Sk >= r.Sk ? we(n.Tk, r.Ck(n.Sk).Tk) : we(n.Ck(r.Sk).Tk, r.Tk);
          var n, r;
        }),
        (n.dp = function (t) {
          return 0 === this.Ip(t);
        }),
        (n.Pp = function (t) {
          return this.Ip(t) < 0;
        }),
        (n.Cp = function (t) {
          return this.Ip(t) <= 0;
        }),
        (n.Ck = function (n) {
          return new t(this.Tk * (n / this.Sk), n);
        }),
        (n.Mp = function (n) {
          return this.Sk >= n.Sk ? new t(this.Tk - n.Ck(this.Sk).Tk, this.Sk) : new t(this.Ck(n.Sk).Tk - n.Tk, n.Sk);
        }),
        (n.Dk = function (n) {
          return new t(this.Tk * n, this.Sk);
        }),
        m(t, [
          {
            key: "Fp",
            get: function () {
              return !isFinite(this.Tk);
            },
          },
          {
            key: "Pk",
            get: function () {
              return this.Tk / this.Sk;
            },
          },
        ]),
        t
      );
    })();
    (Ou.Ok = new Ou(1 / 6, 1)), (Ou.qp = new Ou(0)), (Ou.xk = new Ou(1 / 0)), (Ou.Bk = 1e6);
    var Cu = (function (t) {
      function n(n, r) {
        var i;
        return ((i = t.call(this) || this).di = void 0), (i.Sk = void 0), (i.di = n.toSigned()), (i.Sk = r >>> 0), i;
      }
      g(n, t),
        (n.Mk = function (t, r) {
          return void 0 === r && (r = 1e6), n.Hp(t * r, r);
        }),
        (n.Hp = function (t, r) {
          return d(t) ? n.Lk : t === 1 / 0 ? n.Fk : t === -1 / 0 ? n.Uk : new n(Y.fromNumber(t), r);
        }),
        (n.zp = function (t, r) {
          return new n(t, r);
        }),
        (n.jk = function (t) {
          return n.Mk(t.Pk, 1e6);
        }),
        (n.Vk = function (t) {
          return new n(Y.fromNumber(t.getTime()), 1e3);
        }),
        (n.Rk = function (t, n) {
          return t.Rp(n) ? t : n;
        }),
        (n.Nk = function (t, n) {
          return t.Cp(n) ? t : n;
        }),
        (n.zk = function (t, r, i) {
          return n.Rk(r, n.Nk(i, t));
        });
      var r = n.prototype;
      return (
        (r.xp = function () {
          return this.di.isNegative();
        }),
        (r.Yp = function () {
          return 0 !== this.Sk && this.di.isZero();
        }),
        (r.Fp = function () {
          return 0 === this.Sk && !this.di.isZero();
        }),
        (r.Lp = function () {
          return 0 === this.Sk && this.di.isZero();
        }),
        (r.Sp = function () {
          if (0 === this.Sk) return this.di.isZero() ? NaN : this.di.isNegative() ? -1 / 0 : 1 / 0;
          var t = this.di.divide(this.Sk),
            n = this.di.subtract(t.multiply(this.Sk));
          return t.toNumber() + n.toNumber() / this.Sk;
        }),
        (r.Jp = function () {
          if (0 === this.Sk) throw new s("Failed to convert timestamp");
          return this.di;
        }),
        (r.Hk = function () {
          return new Date(0 === this.Sk ? NaN : this.Ck(1e3).di.toNumber());
        }),
        (r.Wk = function () {
          return new Ou(0 === this.Sk ? this.Sp() : this.di.toNumber(), this.Sk);
        }),
        (r.Ck = function (t, r) {
          void 0 === r && (r = Mu.qk);
          var i = this.Sk;
          if (i === t) return this;
          if (0 === i) return this;
          var e = pt(i, t);
          return new n(
            (function (t, n, r) {
              var i = t.wk(n),
                e = i[0],
                u = i[1];
              if (u.Yp()) return e;
              if (r === Mu.qk) return u.xp() ? e.Mp(Pu._k) : e;
              if (r === Mu.Gk) return u.xp() ? e : e.Dm(Pu._k);
              var o = u.gk(Pu.Hp(2));
              return o.xp() ? (o.Bp().Pp(n) ? e : e.Mp(Pu._k)) : o.Pp(n) ? e : e.Dm(Pu._k);
            })(Pu.zp(this.di).gk(Pu.Hp(t / e)), Pu.Hp(i / e), r).Jp(),
            t
          );
        }),
        (r.Ip = function (t) {
          if (this === t) return ce.ys;
          if (0 === this.Sk || 0 === t.Sk) return Ru(this, t);
          if (this.Yp()) return t.Yp() ? ce.ys : t.xp() ? ce.As : ce.Ts;
          if (t.Yp()) return this.xp() ? ce.Ts : ce.As;
          var n = _.min(this.Sk, t.Sk),
            r = this.Ck(n, Mu.Xk).di,
            i = t.Ck(n, Mu.Xk).di;
          return r.compare(i);
        }),
        (r.Bp = function () {
          return 0 === this.Sk ? Lu(this) : new n(this.di.negate(), this.Sk);
        }),
        (r.Dm = function (t) {
          if (0 === this.Sk || 0 === t.Sk) return Fu(this, t);
          if (this.Yp()) return t;
          if (t.Yp()) return this;
          var r = _.max(this.Sk, t.Sk),
            i = this.Ck(r, Mu.Xk),
            e = t.Ck(r, Mu.Xk);
          return new n(i.di.add(e.di), r);
        }),
        (r.gk = function (t) {
          if (this.Lp() || d(t)) return n.Lk;
          if (this.Fp() || !isFinite(t)) {
            if (this.Yp() || 0 === t) return n.Lk;
            var r = this.xp() ? n.Uk : n.Fk;
            return t < 0 ? r.Bp() : r;
          }
          return this.Yp() ? this : new n(0 === t ? Y.ZERO : this.di.multiply(t), this.Sk);
        }),
        (r.bk = function (t) {
          if (this.Lp() || d(t)) return n.Lk;
          if (this.Fp())
            return isFinite(t) ? (0 === t ? (1 / t < 0 ? this.Bp() : this) : t < 0 ? this.Bp() : this) : n.Lk;
          if (!isFinite(t)) return new n(Y.ZERO, this.Sk);
          if (this.Yp()) return 0 === t ? n.Lk : new n(Y.ZERO, this.Sk);
          if (0 === t) {
            var r = this.xp() ? n.Uk : n.Fk;
            return 1 / t < 0 ? r.Bp() : r;
          }
          return new n(this.di.divide(t), this.Sk);
        }),
        (r.$k = function () {
          return [this.di.low, this.di.high, this.Sk];
        }),
        n
      );
    })(Du);
    function Lu(t) {
      return t.Lp() ? t : t.xp() ? Cu.Fk : Cu.Uk;
    }
    function Fu(t, n) {
      return t.Lp() || n.Lp() ? Cu.Lk : t.Fp() && n.Fp() ? (t.xp() === n.xp() ? t : Cu.Lk) : t.Fp() ? t : n;
    }
    (Cu.qp = new Cu(Y.ZERO, 1e6)),
      (Cu.Lk = new Cu(Y.ZERO, 0)),
      (Cu.Fk = new Cu(Y.ONE, 0)),
      (Cu.Uk = new Cu(Y.NEG_ONE, 0));
    var Mu,
      Bu = (function (t) {
        function n(n, r) {
          var i;
          return (
            ((i = t.call(this) || this).di = void 0),
            (i.Sk = void 0),
            (i.di = BigInt.asIntN(64, n)),
            (i.Sk = r >>> 0),
            i
          );
        }
        g(n, t),
          (n.Mk = function (t, r) {
            return void 0 === r && (r = 1e6), n.Hp(t * r, r);
          }),
          (n.Hp = function (t, r) {
            return d(t) ? n.Lk : t === 1 / 0 ? n.Fk : t === -1 / 0 ? n.Uk : new n(BigInt(_.floor(t)), r);
          }),
          (n.zp = function (t, r) {
            return new n((BigInt(t.high) << BigInt(32)) | BigInt(t.low >>> 0), r);
          }),
          (n.jk = function (t) {
            return n.Mk(t.Pk, 1e6);
          }),
          (n.Vk = function (t) {
            return n.Hp(t.getTime(), 1e3);
          }),
          (n.Rk = function (t, n) {
            return t.Rp(n) ? t : n;
          }),
          (n.Nk = function (t, n) {
            return t.Cp(n) ? t : n;
          }),
          (n.zk = function (t, r, i) {
            return n.Rk(r, n.Nk(i, t));
          });
        var r = n.prototype;
        return (
          (r.xp = function () {
            return this.di < BigInt(0);
          }),
          (r.Yp = function () {
            return 0 !== this.Sk && this.di === BigInt(0);
          }),
          (r.Fp = function () {
            return 0 === this.Sk && this.di !== BigInt(0);
          }),
          (r.Lp = function () {
            return 0 === this.Sk && this.di === BigInt(0);
          }),
          (r.Sp = function () {
            if (0 === this.Sk) return this.di === BigInt(0) ? NaN : this.di < BigInt(0) ? -1 / 0 : 1 / 0;
            var t = this.di / BigInt(this.Sk),
              n = this.di - t * BigInt(this.Sk);
            return Number(t) + Number(n) / this.Sk;
          }),
          (r.Jp = function () {
            if (0 === this.Sk) throw new s("Failed to convert timestamp");
            return this.Qk();
          }),
          (r.Qk = function () {
            var t = this.di & BigInt(4294967295),
              n = (this.di >> BigInt(32)) & BigInt(4294967295);
            return Y.fromBits(Number(t), Number(n));
          }),
          (r.Hk = function () {
            return new Date(0 === this.Sk ? NaN : Number(this.Ck(1e3).di));
          }),
          (r.Wk = function () {
            return new Ou(0 === this.Sk ? this.Sp() : Number(this.di), this.Sk);
          }),
          (r.Ck = function (t, r) {
            void 0 === r && (r = Mu.qk);
            var i = this.Sk;
            if (i === t) return this;
            if (0 === i) return this;
            var e = pt(i, t);
            return new n(
              (function (t, n, r) {
                var i = t / n,
                  e = t - i * n;
                if (e === BigInt(0)) return i;
                if (r === Mu.qk) return e < BigInt(0) ? i - BigInt(1) : i;
                if (r === Mu.Gk) return e < BigInt(0) ? i : i + BigInt(1);
                var u = e * BigInt(2);
                return u < BigInt(0) ? (-u < n ? i : i - BigInt(1)) : u < n ? i : i + BigInt(1);
              })(this.di * BigInt(t / e), BigInt(i / e), r),
              t
            );
          }),
          (r.Ip = function (t) {
            if (this === t) return ce.ys;
            if (0 === this.Sk || 0 === t.Sk) return Ru(this, t);
            if (this.Yp()) return t.Yp() ? ce.ys : t.xp() ? ce.As : ce.Ts;
            if (t.Yp()) return this.xp() ? ce.Ts : ce.As;
            var n = _.min(this.Sk, t.Sk),
              r = this.Ck(n, Mu.Xk).di,
              i = t.Ck(n, Mu.Xk).di;
            return r > i ? ce.As : r < i ? ce.Ts : ce.ys;
          }),
          (r.Bp = function () {
            return 0 === this.Sk ? xu(this) : new n(-this.di, this.Sk);
          }),
          (r.Dm = function (t) {
            if (0 === this.Sk || 0 === t.Sk) return Uu(this, t);
            if (this.Yp()) return t;
            if (t.Yp()) return this;
            var r = _.max(this.Sk, t.Sk),
              i = this.Ck(r, Mu.Xk),
              e = t.Ck(r, Mu.Xk);
            return new n(i.di + e.di, r);
          }),
          (r.gk = function (t) {
            if (this.Lp() || d(t)) return n.Lk;
            if (this.Fp() || !isFinite(t)) {
              if (this.Yp() || 0 === t) return n.Lk;
              var r = this.xp() ? n.Uk : n.Fk;
              return t < 0 ? r.Bp() : r;
            }
            return this.Yp() ? this : new n(0 === t ? BigInt(0) : this.di * BigInt(t), this.Sk);
          }),
          (r.bk = function (t) {
            if (this.Lp() || d(t)) return n.Lk;
            if (this.Fp())
              return isFinite(t) ? (0 === t ? (1 / t < 0 ? this.Bp() : this) : t < 0 ? this.Bp() : this) : n.Lk;
            if (!isFinite(t)) return new n(BigInt(0), this.Sk);
            if (this.Yp()) return 0 === t ? n.Lk : new n(BigInt(0), this.Sk);
            if (0 === t) {
              var r = this.xp() ? n.Uk : n.Fk;
              return 1 / t < 0 ? r.Bp() : r;
            }
            return new n(this.di / BigInt(t), this.Sk);
          }),
          (r.$k = function () {
            var t = this.Qk();
            return [t.low, t.high, this.Sk];
          }),
          m(n, null, [
            {
              key: "qp",
              get: function () {
                return n.Yk || (n.Yk = new n(BigInt(0), 1e6)), n.Yk;
              },
            },
            {
              key: "Lk",
              get: function () {
                return n.Zk || (n.Zk = new n(BigInt(0), 0)), n.Zk;
              },
            },
            {
              key: "Fk",
              get: function () {
                return n.Kk || (n.Kk = new n(BigInt(1), 0)), n.Kk;
              },
            },
            {
              key: "Uk",
              get: function () {
                return n.Jk || (n.Jk = new n(BigInt(-1), 0)), n.Jk;
              },
            },
          ]),
          n
        );
      })(Du);
    function xu(t) {
      return t.Lp() ? t : t.xp() ? Bu.Fk : Bu.Uk;
    }
    function Uu(t, n) {
      return t.Lp() || n.Lp() ? Bu.Lk : t.Fp() && n.Fp() ? (t.xp() === n.xp() ? t : Bu.Lk) : t.Fp() ? t : n;
    }
    (Bu.Yk = void 0),
      (Bu.Zk = void 0),
      (Bu.Kk = void 0),
      (Bu.Jk = void 0),
      (function (t) {
        (t[(t.qk = 0)] = "qk"), (t[(t.Gk = 1)] = "Gk"), (t[(t.Xk = 2)] = "Xk");
      })(Mu || (Mu = {}));
    var Hu = (function () {
      try {
        return "function" == typeof BigInt && "bigint" == typeof BigInt(0);
      } catch (t) {
        return !1;
      }
    })()
      ? Bu
      : Cu;
    function Wu(t, n) {
      return t.Ip(n);
    }
    var Gu = 9e4,
      Vu = _.pow(2, 33),
      zu = Hu.Hp(Vu, Gu),
      Yu = zu.bk(2);
    function Xu(t, n) {
      var r = t.Mp(n);
      return t.Fp() || n.Fp() ? r : (r.Rp(Yu) ? (r = r.Mp(zu)) : r.Pp(Yu.Bp()) && (r = r.Dm(zu)), r);
    }
    function ju(t) {
      return Hu.Hp(t, Gu);
    }
    var qu = Gu,
      Ku = 2,
      Zu = 1024;
    function $u(t, n, r, i) {
      var e,
        u,
        o = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3];
      (e = u = n), (i.GH = i.GH || []), (i.tr = i.tr || new Be()), (i.nr = i.nr || 0);
      for (var a = i.tr; u < r; ) {
        var f = void 0;
        if ((i.nr < 9 && ((f = t[u]), (u += 1)), 0 === i.nr)) 255 === f && (i.nr = 1);
        else if (1 === i.nr)
          240 == (240 & f)
            ? ((i.nr = 2),
              (i.tr = a = new Be()),
              i.GH.push(a),
              (a.nE._rt = i._rt),
              (a.nE.grt = i._rt),
              (a.nE.wrt = i._rt),
              (i.er = 1 & f))
            : (i.nr = 0);
        else if (2 === i.nr) {
          (i.nr = 3), (i.dht = (f >> 6) & 3);
          var s = (a.nE.Iwt = (f >> 2) & 15),
            c = (a.nE.Rwt = o[s]);
          (a.nE.Nwt = (1 & f) << 2), (i._rt = i._rt.Dm(ju((qu * Zu) / c)));
        } else if (3 === i.nr) (i.nr = 4), (a.nE.Nwt += (f >> 6) & 3), (i.ur = (3 & f) << 11);
        else if (4 === i.nr) (i.nr = 5), (i.ur += f << 3);
        else if (5 === i.nr) (i.nr = 6), (i.ur += (224 & f) >> 5);
        else if (6 === i.nr)
          (i.nr = 7), (i.ar = 3 & f), (e = u), (i.sr = i.ur - 7), (0 === i.ar && 0 === i.er) || (i.nr = 9);
        else if (7 === i.nr) (e += 1), (i.sr -= 1), (i.nr = 8);
        else if (8 === i.nr) (e += 1), (i.sr -= 1), (i.nr = 9);
        else {
          var h = _.min(r - e, i.sr);
          0 !== h && ((u = e + h), (i.sr -= h), a.ket(t, e, e + h)), 0 === i.sr && (i.nr = 0);
        }
      }
      return i.GH;
    }
    function Ju(t) {
      var n, r;
      if (!t) return !1;
      for (n = 0, r = t.length; n < r; n += 1)
        try {
          if (Au(t[n].Net(), t[n].nE.Iwt)) return !0;
        } catch (t) {
          0;
        }
      return !1;
    }
    function Qu(t, n, r) {
      var i,
        e,
        u,
        o = t.GH || [];
      o[0] && o[0].nE.Rwt
        ? ((i = o[0].nE.Rwt / Zu), (e = ju(qu / i)), (u = o[0].nE.Rwt))
        : ((i = 0), (e = ju(0)), (u = 0)),
        null === r && (r = !n && Ju(o)),
        (n = n || r);
      var a = o[0] ? o[0].nE.Nwt : 0,
        f = (function (t, n) {
          if (t)
            switch (n) {
              case 1:
                return new p([
                  1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
              case 2:
              case 3:
                return new p([
                  1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
            }
          else
            switch (n) {
              case 1:
                return new p([0, 200, 0, 128, 35, 128]);
              case 2:
                return new p([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              case 3:
                return new p([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
              case 4:
                return new p([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
              case 5:
                return new p([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
              case 6:
                return new p([
                  0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224,
                ]);
            }
          return null;
        })(n, a);
      !(function (t, n, r) {
        if (0 !== r.sr) {
          var i = t.length - 1,
            e = t[i],
            u = (t[i] = new Be());
          u.ket(n, 0, n.length), (u.nE = e.nE), (r.sr = 0);
        }
      })(o, f, t),
        (function (t, n) {
          if (t.length)
            for (var r = 1, i = 1; i < t.length; i++) {
              var e = t[i - 1].nE.grt,
                u = t[i].nE.grt;
              if (u === e) r++;
              else {
                var o = u.Mp(e),
                  a = _.max(1, _.round(o.Sp() / n.Sp()));
                if (r > a) {
                  var f = r - a;
                  t.splice(i - f, f), (i -= f);
                }
                r = 1;
              }
            }
        })(o, e),
        (function (t, n) {
          if (t.length)
            for (var r = t[0], i = 1, e = t.length; i < e; i += 1) {
              var u = t[i],
                o = ju((qu * Zu) / r.nE.Rwt),
                a = r.nE._rt.Dm(o),
                f = u.nE._rt.Mp(a),
                s = f.Jp().divide(o.Ck(f.Sk).Jp()).toNumber();
              if (s > 0) {
                for (var c = [], h = 0; h < s; h++) {
                  var _ = new Be();
                  _.ket(n, 0, n.length), (_.nE = xi({}, r.nE, { _rt: a, grt: a, wrt: a })), c.push(_), (a = a.Dm(o));
                }
                t.splice.apply(t, [i, 0].concat(c)), (i += s);
              }
              r = u;
            }
        })(o, f);
      var s = (function (t) {
        var n = [],
          r = t[0] && t[0].nE,
          i = (r && r.Iwt) || 0,
          e = (r && r.Nwt) || 0,
          u = [];
        return (
          (u[0] = (Ku << 3) + (i >> 1)),
          (u[1] = ((1 & i) << 7) + (e << 3)),
          Ge(n, 3),
          Ge(n, 23 + u.length),
          Ye(n, 2),
          Ge(n, 0),
          Ge(n, 4),
          Ge(n, 15 + u.length),
          Ge(n, 64),
          Ge(n, 21),
          Ve(n, [0, 0, 0]),
          ze(n, 0),
          ze(n, 0),
          Ge(n, 5),
          Ge(n, u.length),
          Ve(n, u),
          Ge(n, 6),
          Ge(n, 1),
          Ge(n, 2),
          n
        );
      })(o);
      return {
        uwt: t.uwt,
        GH: o,
        vwt: t.vwt,
        lwt: t.lwt,
        Fwt: s,
        _wt: ju(t._wt),
        Bwt: u,
        Mwt: Zu,
        Lwt: a,
        frt: i,
        gwt: e,
        Ylt: r,
        Cwt: n,
        Awt: Hu.Lk,
        Twt: Hu.Lk,
        dwt: NaN,
        duration: NaN,
        wwt: t.wwt,
        ywt: t.ywt,
        mwt: t.mwt,
        pwt: t.pwt,
        kwt: t.kwt,
        bwt: t.bwt,
      };
    }
    function to(t) {
      var n = t.gwt.gk(t.GH.length);
      (t.duration = n.Sp()), t.dwt || (t.dwt = n.Sp());
    }
    var no = 2,
      ro = 3,
      io = 1,
      eo = [null, null, [22050, 24e3, 16e3, 0], [44100, 48e3, 32e3, 0]],
      uo = [
        null,
        null,
        [0, 8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 144e3, 16e4, 0],
        [0, 32e3, 4e4, 48e3, 56e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4, 0],
      ],
      oo = [576, 0, 576, 1152],
      ao = [2, 2, 2, 1];
    function fo(t, n) {
      if (255 !== t || 224 != (224 & n)) return !1;
      var r = (24 & n) >> 3;
      return (6 & n) >> 1 === io && (r === ro || r === no);
    }
    function so(t, n, r, i) {
      var e,
        u,
        o,
        a,
        f = n;
      for (i.GH = i.GH || [], i.tr = i.tr || new Be(), i.nr = i.nr || 0, u = i.tr; f < r; )
        switch (i.nr) {
          case 0:
            (e = t[f]), (f += 1), 255 === e ? (i.nr = 1) : u.ket(t, f - 1, f);
            break;
          case 1:
            (e = t[f]),
              (f += 1),
              fo(255, e)
                ? ((i.tr = u = new Be()),
                  (i.cr = e),
                  (u.nE.PA = (24 & e) >> 3),
                  (u.nE.aT = (6 & e) >> 1),
                  (u.nE._rt = i._rt),
                  (u.nE.grt = i._rt),
                  (u.nE.wrt = i._rt),
                  i.GH.push(u),
                  (i.nr = 2))
                : 255 !== e
                ? ((i.nr = 0), u.ket([255, e], 0, 2))
                : 255 === e && u.ket([255], 0, 1);
            break;
          case 2:
            if (
              ((e = t[f]),
              (f += 1),
              (i.hr = e),
              (u.nE.Pwt = uo[u.nE.PA][e >> 4]),
              (u.nE.Owt = eo[u.nE.PA][(12 & e) >> 2]),
              (i.T = 2 == (2 & e) ? 1 : 0),
              (i.xg = _.round(((oo[u.nE.PA] / 8) * u.nE.Pwt) / u.nE.Owt + i.T) - 1),
              !i.xg)
            )
              return;
            i.nr = 3;
            break;
          case 3:
            (e = t[f]),
              (f += 1),
              (i.vr = e),
              (u.nE.xwt = ao[e >> 6]),
              (i.nr = 4),
              u.ket([255, i.cr, i.hr, e], 0, 4),
              (i.sr = _.max(i.xg - 4, 0));
            break;
          default:
            if (i.xg !== 1 / 0)
              (a = i.sr) > r - f
                ? ((a = r - f), u.ket(t, f, r), (i.sr -= a), (f = r))
                : (u.ket(t, f, f + a), (i.sr = 0), (i.nr = 0), (f += a));
            else {
              (i.lr = i.lr || 0), (o = f);
              t: for (; f < r; )
                switch (((e = t[f]), (f += 1), i.lr)) {
                  case 1:
                    if (fo(255, e)) {
                      (i.nr = 1), (f -= 1);
                      break t;
                    }
                    i.lr = 0;
                    break;
                  default:
                    255 === e && (i.lr = 1);
                }
              f < r ? u.ket(t, o, f - 1) : u.ket(t, o, r);
            }
        }
    }
    function co(t) {
      var n,
        r,
        i,
        e,
        u = t.GH || [];
      u[0] && u[0].nE.Owt
        ? ((n = 9e4 / (r = u[0].nE.Owt / oo[u[0].nE.PA])), (i = u[0].nE.Owt), (e = oo[u[0].nE.PA]))
        : ((n = 0), (r = 0), (i = 0), (e = oo[ro]));
      var o = (function (t) {
          var n = [],
            r = t[0] && t[0].nE,
            i = r ? 32 * r.Owt : 0,
            e = r ? 32 * r.Owt : 0;
          return (
            Ge(n, 3),
            Ve(n, [128, 128, 128]),
            Ge(n, 27),
            Ye(n, 2),
            Ge(n, 0),
            Ge(n, 4),
            Ve(n, [128, 128, 128]),
            Ge(n, 13),
            Ge(n, 107),
            Ge(n, 21),
            Ve(n, [0, 0, 0]),
            ze(n, i),
            ze(n, e),
            Ge(n, 6),
            Ve(n, [128, 128, 128]),
            Ge(n, 1),
            Ge(n, 2),
            n
          );
        })(u),
        a = u[0] ? u[0].nE.xwt : 0;
      return {
        uwt: t.uwt,
        GH: u,
        vwt: t.vwt,
        lwt: t.lwt,
        Fwt: o,
        _wt: ju(t._wt),
        Bwt: i,
        Mwt: e,
        Lwt: a,
        frt: r,
        gwt: ju(n),
        Awt: Hu.Lk,
        Twt: Hu.Lk,
        dwt: NaN,
        duration: NaN,
        wwt: t.wwt,
        ywt: t.ywt,
        mwt: t.mwt,
        pwt: t.pwt,
        kwt: t.kwt,
        bwt: t.bwt,
      };
    }
    function ho(t) {
      var n = t.gwt.gk(t.GH.length);
      (t.duration = n.Sp()), (t.dwt = n.Sp());
    }
    function _o(t, n) {
      var r = n.Du,
        i = t.getUint8(r >> 3),
        e = 1 << (7 - (7 & r));
      return n.Ru(1), (i & e) === e ? 1 : 0;
    }
    function vo(t, n, r) {
      for (var i = 0, e = 0; e < r; e++) i = 2 * i + _o(t, n);
      return i;
    }
    var lo = (function () {
        function t(t) {
          void 0 === t && (t = 0), (this.Iu = t);
        }
        var n = t.prototype;
        return (
          (n.Ru = function (t) {
            this.Iu += t;
          }),
          (n.Nu = function (t) {
            this.Iu = t;
          }),
          (n.Cu = function () {
            return new t(this.Du);
          }),
          m(t, [
            {
              key: "Du",
              get: function () {
                return this.Iu;
              },
            },
          ]),
          t
        );
      })(),
      po = [128, 64, 32, 16, 8, 4, 2, 1],
      wo = (function () {
        function t(t) {
          this.Pu = t;
        }
        return (
          (t.prototype.Ou = function (t) {
            return mo(this.Pu, t);
          }),
          t
        );
      })();
    function mo(t, n) {
      return (t & n) === n;
    }
    function yo(t, n) {
      return mo(t, po[n]);
    }
    function go(t, n) {
      var r = t.getUint8(n.Du);
      return n.Ru(1), r;
    }
    function Io(t, n, r) {
      var i = Mo(Uo(t), n.Du, n.Du + r);
      return n.Ru(i.byteLength), i;
    }
    function Eo(t, n, r) {
      return n.Du + r <= t.byteLength;
    }
    function So(t, n, r, i) {
      return (
        void 0 === i && (i = !1),
        i
          ? (function (t, n, r) {
              for (var i = 0, e = 1, u = 0; u < r; u++) (i += go(t, n) * e), (e *= 256);
              return i;
            })(t, n, r)
          : (function (t, n, r) {
              for (var i = 0, e = 0; e < r; e++) i = 256 * i + go(t, n);
              return i;
            })(t, n, r)
      );
    }
    function To(t, n, r) {
      void 0 === r && (r = !1);
      var i = t.getUint16(n.Du, r);
      return n.Ru(2), i;
    }
    function ko(t, n, r) {
      void 0 === r && (r = !1);
      var i = t.getUint32(n.Du, r);
      return n.Ru(4), i;
    }
    function bo(t, n, r) {
      void 0 === r && (r = !1);
      var i = ko(t, n, r),
        e = ko(t, n, r),
        u = r ? e : i,
        o = r ? i : e;
      return Y.fromBits(o, u, !0);
    }
    function No(t, n) {
      var r = go(t, n);
      if (r) return String.fromCharCode(r);
    }
    function Ao(t, n) {
      return Po(t, n);
    }
    function Do(t, n, r) {
      for (var i = "", e = 0; e < r; e++) i += No(t, n);
      return i;
    }
    function Ro(t, n) {
      var r,
        i = go(t, n);
      return (
        0 == (128 & i)
          ? (r = i)
          : 192 == (224 & i)
          ? (r = 64 * (31 & i) + (63 & go(t, n)))
          : 224 == (240 & i)
          ? (r = 4096 * (15 & i) + 64 * (63 & go(t, n)) + (63 & go(t, n)))
          : 240 == (248 & i) &&
            (r = 262144 * (7 & i) + 4096 * (63 & go(t, n)) + 64 * (63 & go(t, n)) + (63 & go(t, n))),
        r
      );
    }
    function Po(t, n) {
      return (function (t, n, r) {
        var i = [];
        for (; n.Du < t.byteLength; ) {
          var e = go(t, n);
          if (r && !e) break;
          i.push(e);
        }
        return ie(i);
      })(t, n, !0);
    }
    function Oo(t, n) {
      if (n.Du + 2 <= t.byteLength) {
        var r = t.getUint8(n.Du),
          i = t.getUint8(n.Du + 1);
        return (254 !== r || 255 !== i) && ((255 === r && 254 === i) || void 0);
      }
    }
    function Co(t, n) {
      var r = Oo(t, n);
      return void 0 !== r && n.Ru(2), Lo(t, n, !0 === r);
    }
    function Lo(t, n, r) {
      return (
        void 0 === r && (r = !1),
        (function (t, n, r, i) {
          var e = [];
          for (; n.Du + 2 <= t.byteLength; ) {
            var u = To(t, n, r);
            if (i && !u) break;
            e.push(u);
          }
          return ie(e);
        })(t, n, r, !0)
      );
    }
    function Fo(t, n) {
      return (function (t, n, r) {
        var i = [];
        (function (t, n) {
          return (
            n.Du + 3 <= t.byteLength &&
            239 === t.getUint8(n.Du) &&
            187 === t.getUint8(n.Du + 1) &&
            191 === t.getUint8(n.Du + 2)
          );
        })(t, n) && n.Ru(3);
        for (; n.Du < t.byteLength; ) {
          var e = Ro(t, n);
          if (void 0 === e) break;
          if (r && 0 === e) break;
          i.push(e);
        }
        return (function (t) {
          for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r];
            i > 65535 && ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (1023 & i))), n.push(i);
          }
          return ie(n);
        })(i);
      })(t, n, !0);
    }
    function Mo(t, n, r) {
      return void 0 === n && (n = 0), void 0 === r && (r = t.byteLength), new p(t.buffer, t.byteOffset + n, r - n);
    }
    function Bo(t, n, r) {
      return (
        void 0 === n && (n = 0), void 0 === r && (r = t.byteLength), new DataView(t.buffer, t.byteOffset + n, r - n)
      );
    }
    function xo(t) {
      return new DataView(t.buffer, t.byteOffset, t.byteLength);
    }
    function Uo(t) {
      return new p(t.buffer, t.byteOffset, t.byteLength);
    }
    function Ho(t, n, r) {
      return void 0 === n && (n = 0), void 0 === r && (r = t.byteLength), t.slice ? t.slice(n, r) : Wo(Mo(t, n, r));
    }
    function Wo(t) {
      if (t.slice) return t.slice(0);
      var n = new p(t.byteLength);
      return n.set(t, 0), n;
    }
    function Go(t) {
      return [].slice.call(t);
    }
    var Vo,
      zo,
      Yo = (function () {
        function t(t) {
          void 0 === t && (t = 0), (this.Iu = t);
        }
        var n = t.prototype;
        return (
          (n.Ru = function (t) {
            this.Iu += t;
          }),
          (n.Nu = function (t) {
            this.Iu = t;
          }),
          (n.Cu = function () {
            return new t(this.Du);
          }),
          (n.xu = function () {
            return new lo(this.Du << 3);
          }),
          m(t, [
            {
              key: "Du",
              get: function () {
                return this.Iu;
              },
            },
          ]),
          t
        );
      })();
    function Xo(t) {
      switch (t) {
        case Vo.ISO_8859_1:
        case Vo.UTF16_BOM:
        case Vo.UTF16:
        case Vo.UTF8:
          return !0;
      }
      return !1;
    }
    function jo(t) {
      switch (t) {
        case Vo.ISO_8859_1:
          return Po;
        case Vo.UTF16_BOM:
          return Co;
        case Vo.UTF16:
          return Lo;
        case Vo.UTF8:
          return Fo;
      }
    }
    function qo(t, n) {
      var r = n.Du,
        i = t.byteLength,
        e = Uo(t);
      return n.Ru(i - r), Ho(e, r, i).buffer;
    }
    function Ko(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        var e = jo(i);
        return { id: r, language: Do(t, n, 3), description: e(t, n), text: e(t, n) };
      }
    }
    function Zo(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        var e = jo(i);
        return { id: r, mimeType: Po(t, n), fileName: e(t, n), description: e(t, n), data: qo(t, n) };
      }
    }
    function $o(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        for (var e = jo(i), u = []; n.Du < t.byteLength; ) u.push({ involvement: e(t, n), involvee: e(t, n) });
        return { id: r, entries: u };
      }
    }
    function Jo(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        for (
          var e = jo(i), u = Do(t, n, 3), o = go(t, n), a = go(t, n), f = e(t, n), s = !1, c = [];
          n.Du < t.byteLength;

        ) {
          var h = void 0;
          if (i === Vo.UTF16_BOM) {
            var _ = Oo(t, n);
            void 0 === _ ? (_ = s) : (s = _), (h = Lo(t, n, _));
          } else h = e(t, n);
          if (!h || n.Du + 4 > t.byteLength) break;
          c.push({ text: h, timestamp: ko(t, n) });
        }
        return { id: r, language: u, format: o, contentType: a, description: f, entries: c };
      }
    }
    function Qo(t, n, r) {
      return { id: r, ownerIdentifier: Po(t, n), identifier: qo(t, n) };
    }
    function ta(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        var e = jo(i);
        return { id: r, language: Do(t, n, 3), description: e(t, n), text: e(t, n) };
      }
    }
    function na(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) return { id: r, text: jo(i)(t, n) };
    }
    function ra(t, n, r) {
      return { id: r, url: Po(t, n) };
    }
    function ia(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) {
        var e = jo(i);
        return { id: r, description: e(t, n), text: e(t, n) };
      }
    }
    function ea(t, n, r) {
      var i = go(t, n);
      if (Xo(i)) return { id: r, description: jo(i)(t, n), url: Po(t, n) };
    }
    function ua(t, n, r) {
      switch (r) {
        case "COM":
          return Ko(t, n, r);
        case "GEO":
          return Zo(t, n, r);
        case "IPL":
          return $o(t, n, r);
        case "PIC":
          return (function (t, n, r) {
            var i = go(t, n);
            if (Xo(i)) {
              var e,
                u,
                o = jo(i),
                a = Do(t, n, 3),
                f = go(t, n),
                s = o(t, n);
              return (
                "--\x3e" === a ? ((e = a), (u = Po(t, n))) : ((e = "image/" + a.toLowerCase()), (u = qo(t, n))),
                { id: r, mimeType: e, pictureType: f, description: s, data: u }
              );
            }
          })(t, n, r);
        case "SLT":
          return Jo(t, n, r);
        case "TXX":
          return ia(t, n, r);
        case "UFI":
          return Qo(t, n, r);
        case "ULT":
          return ta(t, n, r);
        case "WXX":
          return ea(t, n, r);
        default:
          if ("T" === r.charAt(0)) return na(t, n, r);
          if ("W" === r.charAt(0)) return ra(t, n, r);
      }
    }
    function oa(t, n, r) {
      switch (r) {
        case "APIC":
          return (function (t, n, r) {
            var i = go(t, n);
            if (Xo(i)) {
              var e = jo(i),
                u = Po(t, n);
              return {
                id: r,
                mimeType: u,
                pictureType: go(t, n),
                description: e(t, n),
                data: "--\x3e" === u ? Po(t, n) : qo(t, n),
              };
            }
          })(t, n, r);
        case "COMM":
          return Ko(t, n, r);
        case "COMR":
          return (function (t, n, r) {
            var i = go(t, n);
            if (Xo(i)) {
              var e,
                u,
                o = jo(i),
                a = Po(t, n),
                f = Do(t, n, 8),
                s = Po(t, n),
                c = go(t, n),
                h = o(t, n),
                _ = o(t, n);
              return (
                n.Du < t.byteLength && ((e = Po(t, n) || "image/"), (u = qo(t, n))),
                {
                  id: r,
                  price: a,
                  validUntil: f,
                  contactURL: s,
                  receivedAs: c,
                  nameOfSeller: h,
                  description: _,
                  pictureMimeType: e,
                  sellerLogo: u,
                }
              );
            }
          })(t, n, r);
        case "GEOB":
          return Zo(t, n, r);
        case "IPLS":
          return $o(t, n, r);
        case "PRIV":
          return (function (t, n, r) {
            return { id: r, ownerIdentifier: Po(t, n), data: qo(t, n) };
          })(t, n, r);
        case "POSS":
          return (function (t, n, r) {
            return { id: r, format: go(t, n), position: ko(t, n) };
          })(t, n, r);
        case "SYLT":
          return Jo(t, n, r);
        case "TXXX":
          return ia(t, n, r);
        case "UFID":
          return Qo(t, n, r);
        case "USER":
          return (function (t, n, r) {
            var i = go(t, n);
            if (Xo(i)) {
              var e = jo(i);
              return { id: r, language: Do(t, n, 3), text: e(t, n) };
            }
          })(t, n, r);
        case "USLT":
          return ta(t, n, r);
        case "WXXX":
          return ea(t, n, r);
        case "YMID":
        case "YTYP":
        case "YSEQ":
        case "YDUR":
        case "YCSP":
          return na(t, n, r);
        default:
          var i = r.charAt(0);
          if ("T" === i) return na(t, n, r);
          if ("W" === i) return ra(t, n, r);
      }
    }
    !(function (t) {
      (t[(t.ISO_8859_1 = 0)] = "ISO_8859_1"),
        (t[(t.UTF16_BOM = 1)] = "UTF16_BOM"),
        (t[(t.UTF16 = 2)] = "UTF16"),
        (t[(t.UTF8 = 3)] = "UTF8");
    })(Vo || (Vo = {})),
      (function (t) {
        (t[(t.V22 = 2)] = "V22"), (t[(t.V23 = 3)] = "V23"), (t[(t.V24 = 4)] = "V24");
      })(zo || (zo = {}));
    var aa,
      fa = 10;
    function sa(t, n) {
      return ((127 & go(t, n)) << 21) | ((127 & go(t, n)) << 14) | ((127 & go(t, n)) << 7) | (127 & go(t, n));
    }
    function ca(t, n) {
      switch (t) {
        case zo.V24:
          return { LH: yo(n, 0), FH: yo(n, 1), UH: yo(n, 2), jH: yo(n, 3) };
        case zo.V23:
          return { LH: yo(n, 0), FH: yo(n, 1), UH: yo(n, 2) };
        case zo.V22:
          return { LH: yo(n, 0), VH: yo(n, 1) };
      }
    }
    function ha(t, n, r) {
      switch (r.PA) {
        case zo.V23:
          r.OA.FH &&
            (function (t, n) {
              var r = n.Du,
                i = ko(t, n) + 4,
                e = 32768 & To(t, n);
              n.Nu(r + i), e && ko(t, n);
            })(t, n);
          break;
        case zo.V24:
          r.OA.FH &&
            (function (t, n) {
              var r = n.Du,
                i = sa(t, n);
              n.Nu(r + i);
            })(t, n);
      }
    }
    function _a(t, n) {
      if (t.byteLength - n.Du < fa) return null;
      if (73 !== go(t, n) || 68 !== go(t, n) || 51 !== go(t, n)) return null;
      var r = go(t, n),
        i = go(t, n);
      if (
        !(function (t) {
          switch (t) {
            case zo.V22:
            case zo.V23:
            case zo.V24:
              return !0;
          }
          return !1;
        })(r)
      )
        return null;
      var e = go(t, n),
        u = sa(t, n);
      return { PA: r, zH: i, OA: ca(r, e), HH: u };
    }
    function va(t, n, r) {
      switch (r.PA) {
        case zo.V22:
          return (function (t, n, r) {
            return { Wg: Do(t, n, 3), Eu: So(t, n, 3) };
          })(t, n);
        case zo.V23:
          return (function (t, n, r) {
            var i = Do(t, n, 4),
              e = ko(t, n);
            go(t, n);
            var u = go(t, n);
            return { Wg: i, Eu: e, OA: { VH: yo(u, 0), WH: yo(u, 1), groupingIdentity: yo(u, 2) } };
          })(t, n);
        case zo.V24:
          return (function (t, n, r) {
            var i = Do(t, n, 4),
              e = sa(t, n);
            go(t, n);
            var u = go(t, n);
            return {
              Wg: i,
              Eu: e,
              OA: { groupingIdentity: yo(u, 1), VH: yo(u, 4), WH: yo(u, 5), LH: yo(u, 6), qH: yo(u, 7) },
            };
          })(t, n);
      }
    }
    function la(t) {
      for (var n = new p(t.byteLength), r = 0, i = 0; i < t.byteLength; i++) {
        var e = t.getUint8(i);
        255 === e && i++, (n[r] = e), r++;
      }
      return new DataView(n, 0, r);
    }
    function da(t, n, r) {
      var i = [],
        e = n.Du,
        u = Bo(t, e, e + r.HH),
        o = new Yo();
      switch ((n.Ru(r.HH), r.PA)) {
        case zo.V22:
        case zo.V23:
          r.OA.LH && (u = la(u));
      }
      for (ha(t, n, r); o.Du < u.byteLength; ) i.push(pa(u, o, r));
      return i;
    }
    function pa(t, n, r) {
      var i,
        e,
        u = va(t, n, r),
        o = n.Du,
        a = Bo(t, o, o + u.Eu);
      switch ((n.Ru(u.Eu), r.PA)) {
        case zo.V22:
          var f = u;
          i = ua((e = a), new Yo(), f.Wg);
          break;
        case zo.V23:
          var s = u,
            c = new Yo();
          !(function (t, n, r) {
            var i,
              e,
              u,
              o = r.OA;
            o.VH && (i = ko(t, n)), o.WH && (e = go(t, n)), o.groupingIdentity && (u = go(t, n));
          })(a, c, s),
            (i = oa((e = Bo(a, c.Du, a.byteLength)), new Yo(), s.Wg));
          break;
        case zo.V24:
          var h = u,
            _ = new Yo();
          h.OA.LH && (a = la(a)),
            (function (t, n, r) {
              var i,
                e,
                u,
                o,
                a = r.OA;
              a.groupingIdentity && (i = go(t, n)),
                a.VH && (e = ko(t, n)),
                a.WH && (u = go(t, n)),
                a.qH && (o = sa(t, n));
            })(a, _, h),
            (i = oa((e = Bo(a, _.Du, a.byteLength)), new Yo(), h.Wg));
      }
      if (!i) {
        var v = Wo(Uo(e));
        i = (function (t, n) {
          return { id: t || "", data: n instanceof ArrayBuffer ? n : void 0 };
        })(u.Wg, v.buffer);
      }
      return i;
    }
    function wa(t, n) {
      var r = new DataView(t.buffer, n),
        i = new Yo(),
        e = _a(r, i);
      return e ? i.Du + e.HH : 0;
    }
    function ma(t, n, r, i, e) {
      var u = (e.cwt = e.cwt || []),
        o = Bo(xo(t), n, r),
        a = new Yo(),
        f = _a(o, a);
      if (null !== f) {
        var s = xo(new p(f.HH)),
          c = new Yo(),
          h = { nE: { QZ: i.Sp(), _rt: i }, IA: f, Li: { rE: s, sA: c } };
        u.push(h), ya(h, Bo(o, a.Du));
      }
    }
    function ya(t, n) {
      var r = t.Li,
        i = r.rE.byteLength - r.sA.Du,
        e = Bo(n, 0, _.min(i, n.byteLength));
      !(function (t, n, r) {
        Uo(t).set(Uo(r), n.Du), n.Ru(r.byteLength);
      })(r.rE, r.sA, e);
    }
    function ga(t) {
      for (var n = [], r = 0, i = t.cwt; r < i.length; r++) {
        var e = i[r],
          u = e.IA,
          o = { IA: u, GH: da(e.Li.rE, new Yo(), u), nE: { QZ: e.nE.QZ, V$: e.nE._rt } };
        n.push(o);
      }
      return { uwt: t.uwt, owt: t.owt, hwt: t.hwt, awt: t.awt, cwt: n, Ddt: "", iw: "", aw: [] };
    }
    !(function (t) {
      (t.$wt = "h.264"), (t.Dwt = "mp3"), (t.Swt = "aac-lc"), (t.Ewt = "he-aac");
    })(aa || (aa = {}));
    var Ia,
      Ea,
      Sa,
      Ta,
      ka,
      ba,
      Na = P.In
        ? function (t, n) {
            return Xu(t.grt, n.grt);
          }
        : function (t, n) {
            return Xu(t.wrt, n.wrt);
          };
    function Aa(t, n) {
      return Wu(t.V$, n.V$) || pe(t.wS, n.wS);
    }
    function Da(t, n, r) {
      return r === Ia.oet
        ? r
        : (n !== Ea.let && n !== Ea.det) || (r !== Ia.het && r !== Ia.aet)
        ? t
          ? n === Ea._et
            ? Ia.fet
            : n === Ea.wet
            ? Ia.cet
            : Ia.oet
          : Ia.vet
        : Ia.aet;
    }
    function Ra(t, n, r, i) {
      var e = { byte: r },
        u = Ia.het,
        o = [],
        a = 31 & Fe(n, e, i);
      e.byte += 1;
      for (var f = 0; f < a; f += 1) {
        var s = Fe(n, e, i),
          c = 4 & s,
          h = 3 & s;
        u = Da(Boolean(c), h, u);
        var _ = Fe(n, e, i),
          v = Fe(n, e, i);
        o.push({ V$: t, wS: -1, Cet: !f, Det: Boolean(c), Jr: h, KX: u, Pet: _, Oet: v });
      }
      return o;
    }
    function Pa(t, n, r) {
      var i = Fe(t, n, r);
      if (!d(i)) return String.fromCharCode(i);
    }
    function Oa(t) {
      var n = t.xet,
        r = { byte: t.Bet },
        i = t.Met,
        e = Fe(n, r, i);
      if ((255 === e && (r.byte += 1), 181 === e)) {
        var u = Me(n, r);
        if (u === ba.Let || u === ba.Fet) {
          if (u === ba.Fet)
            if (
              "GA94" !==
              (function (t, n, r) {
                for (var i = "", e = r; e > 0; ) (e -= 1), (i += Pa(t, n));
                return i;
              })(n, r, 4)
            )
              return;
          if (3 === Fe(n, r, i)) {
            u === ba.Let && (r.byte += 1);
            var o = t;
            return (o.Uet = r.byte), o;
          }
        }
      }
    }
    function Ca(t) {
      return 4 === t.jet;
    }
    function La(t) {
      for (var n = t.filter(Ca).map(Oa).filter(O), r = [], i = 0; i < n.length; i++) {
        var e = n[i];
        r.push.apply(r, Ra(e.Vet, e.xet, e.Uet, e.Met));
      }
      return r;
    }
    function Fa(t) {
      for (var n = [], r = 0; r < t.length; r++) {
        var i = t[r];
        i.nE.brt && n.push.apply(n, i.nE.brt), delete i.nE.brt;
      }
      for (var e = 0; e < n.length; e += 1) n[e].wS = e;
      return n.sort(Aa);
    }
    !(function (t) {
      (t[(t.oet = 0)] = "oet"),
        (t[(t.het = 1)] = "het"),
        (t[(t.aet = 2)] = "aet"),
        (t[(t.cet = 3)] = "cet"),
        (t[(t.fet = 4)] = "fet"),
        (t[(t.vet = 5)] = "vet");
    })(Ia || (Ia = {})),
      (function (t) {
        (t[(t.let = 0)] = "let"), (t[(t.det = 1)] = "det"), (t[(t._et = 2)] = "_et"), (t[(t.wet = 3)] = "wet");
      })(Ea || (Ea = {})),
      (function (t) {
        (t.e$ = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace'),
          (t.r$ = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'),
          (t.s$ = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace'),
          (t.u$ = 'Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif');
      })(Sa || (Sa = {})),
      (function (t) {
        (t.BLACK = "#000000"),
          (t.WHITE = "#FFFFFF"),
          (t.GREEN = "#00ff00"),
          (t.BLUE = "#0000ff"),
          (t.CYAN = "#00ffff"),
          (t.RED = "#ff0000"),
          (t.YELLOW = "#ffff00"),
          (t.MAGENTA = "#ff00ff"),
          (t.TRANSPARENT = "transparent");
      })(Ta || (Ta = {})),
      (function (t) {
        (t.FONT_REGULAR = "regular"),
          (t.FONT_UNDERLINE = "underline"),
          (t.FONT_ITALICS = "italics"),
          (t.FONT_UNDERLINE_ITALICS = "underline-italics");
      })(ka || (ka = {})),
      Ta.WHITE,
      Sa.s$,
      Ta.BLACK,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.GREEN,
      ka.FONT_REGULAR,
      Ta.GREEN,
      ka.FONT_UNDERLINE,
      Ta.BLUE,
      ka.FONT_REGULAR,
      Ta.BLUE,
      ka.FONT_UNDERLINE,
      Ta.CYAN,
      ka.FONT_REGULAR,
      Ta.CYAN,
      ka.FONT_UNDERLINE,
      Ta.RED,
      ka.FONT_REGULAR,
      Ta.RED,
      ka.FONT_UNDERLINE,
      Ta.YELLOW,
      ka.FONT_REGULAR,
      Ta.YELLOW,
      ka.FONT_UNDERLINE,
      Ta.MAGENTA,
      ka.FONT_REGULAR,
      Ta.MAGENTA,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_ITALICS,
      Ta.WHITE,
      ka.FONT_UNDERLINE_ITALICS,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      Ta.WHITE,
      ka.FONT_REGULAR,
      Ta.WHITE,
      ka.FONT_UNDERLINE,
      (function (t) {
        (t[(t.Let = 47)] = "Let"), (t[(t.Fet = 49)] = "Fet");
      })(ba || (ba = {}));
    var Ma,
      Ba = [128, 64, 32, 16, 8, 4, 2, 1];
    function xa(t, n) {
      var r = _.floor(n.bit / 8),
        i = 0 == ((Le(t) ? t.bu(r) : t[r]) & Ba[n.bit % 8]) ? 0 : 1;
      return (n.bit += 1), i;
    }
    function Ua(t, n, r) {
      for (var i = 0, e = r; e > 0; ) (e -= 1), (i = 2 * i + xa(t, n));
      return i;
    }
    function Ha(t, n) {
      for (var r = 0; 0 === xa(t, n) && r < 32; ) r += 1;
      return Ua(t, n, r) + _.pow(2, r) - 1;
    }
    function Wa(t, n) {
      var r = Ha(t, n);
      return 1 & r ? _.floor((r + 1) / 2) : -_.floor(r / 2);
    }
    function Ga(t, n) {
      var r,
        i = [],
        e = { byte: 1 };
      do {
        i.push(za(t, n, e)), (r = n.bu(e.byte));
      } while (void 0 !== r && 128 !== r);
      return i;
    }
    function Va(t, n) {
      var r,
        i = 0;
      do {
        i += r = Fe(t, n);
      } while (255 === r);
      return i;
    }
    function za(t, n, r) {
      var i = Va(n, r),
        e = Va(n, r),
        u = r.byte,
        o = u + e;
      return (r.byte = o), { Vet: t, jet: i, Qet: e, Bet: u, Met: o, xet: n };
    }
    !(function (t) {
      (t[(t.Yet = 1)] = "Yet"),
        (t[(t.Zet = 2)] = "Zet"),
        (t[(t.Ket = 3)] = "Ket"),
        (t[(t.Jet = 4)] = "Jet"),
        (t[(t.trt = 5)] = "trt"),
        (t[(t.nrt = 6)] = "nrt"),
        (t[(t.irt = 7)] = "irt"),
        (t[(t.ert = 8)] = "ert"),
        (t[(t.rrt = 9)] = "rrt");
    })(Ma || (Ma = {}));
    var Ya = [
      void 0,
      [1, 1],
      [12, 11],
      [10, 11],
      [16, 11],
      [40, 33],
      [24, 11],
      [20, 11],
      [32, 11],
      [80, 33],
      [18, 11],
      [15, 11],
      [64, 33],
      [160, 99],
      [4, 3],
      [3, 2],
      [2, 1],
    ];
    function Xa(t, n, r) {
      for (var i = 8, e = 8, u = 0; u < r; u += 1) {
        if (0 !== e) e = (i + Wa(t, n) + 256) % 256;
        i = 0 === e ? i : e;
      }
    }
    var ja = (function () {
      function t(t) {
        (this.urt = void 0), (this.ort = []), (this.hrt = 0), (this.urt = t);
      }
      var n = t.prototype;
      return (
        (n.art = function () {
          for (var t = this.ort, n = _.max(0, this.hrt + t.length - 2), r = this.urt, i = r.xg, e = 0; n < i; n += 1) {
            var u = r.bu(n);
            0 === u ? (e += 1) : (3 === u && e >= 2 && t.push(n), (e = 0));
          }
          this.hrt = n - t.length;
        }),
        (n.crt = function (t) {
          for (var n = this.ort, r = t, i = 0; i < n.length; i++) {
            if (!(n[i] <= r)) return r;
            r += 1;
          }
          return r;
        }),
        (n.bu = function (t) {
          if (!(t > this.urt.xg)) return t > this.hrt && this.art(), this.urt.bu(this.crt(t));
        }),
        t
      );
    })();
    function qa(t) {
      var n,
        r,
        i,
        e,
        u,
        o,
        a = new ja(t),
        f = 0,
        s = 0,
        c = 0,
        h = 0,
        v = a.bu(1),
        l = { bit: 32 };
      if ((Ha(a, l), 100 === v || 110 === v || 122 === v || 144 === v)) {
        var d = Ha(a, l);
        if ((3 === d && (n = xa(a, l)), Ha(a, l), Ha(a, l), xa(a, l), 1 === xa(a, l)))
          for (var p = 0; p < (3 !== d ? 8 : 12); p += 1) {
            1 === xa(a, l) && Xa(a, l, p < 6 ? 16 : 64);
          }
      }
      var w = Ha(a, l),
        m = Ha(a, l);
      if (0 === m) Ha(a, l);
      else if (1 === m) {
        xa(a, l), Wa(a, l), Wa(a, l);
        for (var y = Ha(a, l), g = 0; g < y; g += 1) Wa(a, l);
      }
      Ha(a, l), xa(a, l);
      var I = Ha(a, l),
        E = Ha(a, l),
        S = xa(a, l);
      if (
        (0 === S && xa(a, l),
        xa(a, l),
        1 === xa(a, l) && ((f = Ha(a, l)), (s = Ha(a, l)), (c = Ha(a, l)), (h = Ha(a, l))),
        1 === xa(a, l))
      ) {
        if (1 === xa(a, l)) {
          var T = Ua(a, l, 8);
          if (255 === T) (r = Ua(a, l, 16)), (i = Ua(a, l, 16));
          else {
            var k = Ya[T];
            k && ((r = k[0]), (i = k[1]));
          }
        }
        if ((1 === xa(a, l) && xa(a, l), 1 === xa(a, l)))
          Ua(a, l, 3), xa(a, l), 1 === xa(a, l) && (Ua(a, l, 8), Ua(a, l, 8), Ua(a, l, 8));
        1 === xa(a, l) && (Ha(a, l), Ha(a, l)),
          1 === (e = xa(a, l)) && ((u = Ua(a, l, 32)), (o = Ua(a, l, 32)), xa(a, l));
      }
      return {
        width: _.floor(16 * (I + 1) - 2 * f - 2 * s),
        height: _.floor((2 - S) * (E + 1) * 16 - 2 * c - 2 * h),
        oS: r,
        hS: i,
        frt: !!e && o / (2 * u),
        vrt: n,
        lrt: w,
      };
    }
    var Ka,
      Za,
      $a,
      Ja,
      Qa = 9e4;
    function tf(t, n) {
      var r = new Be(),
        i = r.nE;
      return (
        (i._rt = t._rt), (i.mrt = t.mrt), (i.grt = t.grt), (i.prt = t.prt), (i.wrt = t.wrt), (t.urt = r), n.push(r), r
      );
    }
    function nf(t, n) {
      var r,
        i,
        e,
        u,
        o = t.mr;
      if (!o) return {};
      for (var a = 0; a < o.length && (!r || !e); a += 1)
        o[a].nE.Jr === Ma.irt ? (r = o[a]) : o[a].nE.Jr === Ma.ert && (e = o[a].Li);
      (i = (r && r.Li) || n.Wlt), (e = e || n.qlt), !r && i && (r = new Be()).ket(i, 0, i.length);
      var f,
        s,
        c,
        h,
        _ =
          i &&
          e &&
          (function (t, n) {
            var r = t.length,
              i = n.length,
              e = [];
            return (
              Ge(e, 1),
              Ge(e, t[1]),
              Ge(e, t[2]),
              Ge(e, t[3]),
              Ge(e, 255),
              Ge(e, 225),
              Ge(e, (65280 & r) >> 8),
              Ge(e, 255 & r),
              Ve(e, t),
              Ge(e, 1),
              Ge(e, (65280 & i) >> 8),
              Ge(e, 255 & i),
              Ve(e, n),
              e
            );
          })(i, e),
        v = (u = r && qa(r)) && u.width,
        l = u && u.height,
        d = r && r.bu(1),
        p = r && r.bu(2),
        w = r && r.bu(3);
      return (
        u && u.frt ? ((f = u.frt), (s = !1)) : ((f = void 0), (s = !0)),
        u && u.oS && u.hS && ((c = u.oS), (h = u.hS)),
        { QT: _, Ap: v, fT: l, dht: d, Gwt: p, ght: w, Wlt: i, qlt: e, frt: f, qwt: s, oS: c, hS: h }
      );
    }
    function rf(t) {
      for (var n = t.xg - 1; n >= 0; n -= 1) if (0 !== t.bu(n)) return t.xg !== n + 1 && (t.xg = n + 1), t;
      return t;
    }
    function ef(t, n) {
      n.nE.Trt = !0;
    }
    function uf(t, n) {
      (n.nE.krt = !0), ef(0, n);
    }
    function of(t) {
      var n = new Be(),
        r = n.nE,
        i = t.nE;
      return (r._rt = i._rt), (r.QZ = i.QZ), (r.mrt = i.mrt), (r.grt = i.grt), (r.prt = i.prt), (r.wrt = i.wrt), n;
    }
    function af(t, n) {
      var r = t.length && t[t.length - 1],
        i = n.nE;
      i.Trt && ((!i.Art && r) || t.push(n));
    }
    function ff(t, n, r) {
      return n.nE.Trt ? (af(t, n), of(r)) : null;
    }
    function sf(t) {
      for (
        var n = (function (t) {
            return t
              .map(function (t) {
                return t.nE.grt;
              })
              .sort(Wu);
          })(t),
          r = [],
          i = 1;
        i < n.length;
        i += 1
      ) {
        var e = n[i],
          u = n[i - 1];
        r.push(e.Mp(u));
      }
      return r.sort(Wu), r;
    }
    function cf(t) {
      var n = sf(t);
      return n.length ? n[_.floor(n.length / 2)] : ju(0.4 * Qa);
    }
    function hf(t, n) {
      !(function (t) {
        var n = t.mr;
        if (n)
          for (var r, i = n.length, e = 0; e < i; e += 1)
            switch ((r = n[e]).nE.Jr) {
              case Ma.rrt:
              case Ma.nrt:
              case Ma.irt:
              case Ma.ert:
                rf(r);
            }
      })(t);
      var r,
        i,
        e = nf(t, n),
        u = (function (t) {
          var n,
            r = [],
            i = new Be(),
            e = t.mr;
          if (!e) return r;
          for (var u = 0; u < e.length; u++) {
            var o = e[u];
            switch (o.nE.Jr) {
              case Ma.trt:
                uf(0, i);
                break;
              case Ma.Yet:
              case Ma.Zet:
              case Ma.Ket:
              case Ma.Jet:
                ef(0, i);
                break;
              case Ma.nrt:
                (n = ff(r, i, o)) && (i = n);
                var a,
                  f = La(Ga(o.nE.grt, new ja(o)));
                i.nE.brt ? (a = i.nE.brt).push.apply(a, f) : (i.nE.brt = f);
                break;
              case Ma.irt:
              case Ma.ert:
                (n = ff(r, i, o)) && (i = n);
                break;
              case Ma.rrt:
                af(r, i), ((i = of(o)).nE.Art = !0);
            }
            0 !== o.nE.Jr && (i.ket(xe(o.xg), 0, 4), i.pet(o));
          }
          return af(r, i), r;
        })(t),
        o = u.length > 1 ? t.kwt.Mp(t.mwt).bk(u.length - 1) : Hu.Lk,
        a = !1;
      return (
        o.Lp() || (e.frt && !(_.abs(e.frt - 1 / o.Sp()) > 10))
          ? e.frt
            ? ((i = e.frt), (r = ju(Qa / i)))
            : (r = ju(Qa / (i = 24)))
          : ((a = !0), (i = 1 / (r = cf(u)).Sp())),
        {
          uwt: t.uwt,
          GH: u,
          vwt: t.vwt,
          lwt: t.lwt,
          _wt: ju(t._wt),
          frt: i,
          gwt: r,
          Wwt: a,
          qwt: e.qwt,
          QT: e.QT,
          width: e.Ap,
          height: e.fT,
          dht: e.dht,
          Gwt: e.Gwt,
          ght: e.ght,
          Wlt: e.Wlt,
          qlt: e.qlt,
          oS: e.oS,
          hS: e.hS,
          Awt: Hu.Lk,
          Twt: Hu.Lk,
          dwt: NaN,
          duration: NaN,
          wwt: t.wwt,
          ywt: t.ywt,
          mwt: t.mwt,
          pwt: t.pwt,
          kwt: t.kwt,
          bwt: t.bwt,
        }
      );
    }
    function _f(t) {
      (t.duration = t.dwt),
        (function (t) {
          var n,
            r,
            i = t.GH,
            e = i.length,
            u = Hu.qp;
          if (e) {
            n = (i = le(i, function (t, n) {
              return Na(t.nE, n.nE).Ip(Hu.qp);
            }))[0];
            for (var o = 1; o < e; o += 1) {
              var a = i[o];
              (r = Na(a.nE, n.nE)).Cp(Hu.qp) && (r = t.gwt), (u = u.Dm(r)), (n.nE.yrt = r), (n.nE.Gw = r.Sp()), (n = a);
            }
            n && ((r = Hu.Rk(ju(_.round(t.duration * Qa)).Mp(u), t.gwt)), (n.nE.yrt = r), (n.nE.Gw = r.Sp()));
          }
        })(t);
    }
    !(function (t) {
      (t.vb = "moov"),
        (t._b = "mvhd"),
        (t.gb = "trak"),
        (t.wb = "tkhd"),
        (t.yb = "mdia"),
        (t.mb = "mdhd"),
        (t.pb = "hdlr"),
        (t.kb = "minf"),
        (t.bb = "stbl"),
        (t.Ab = "stsd"),
        (t.Tb = "stsc"),
        (t.Sb = "mvex"),
        (t.Eb = "trex"),
        (t.Ib = "avc1"),
        (t.Rb = "avcC"),
        (t.Nb = "hev1"),
        (t.Cb = "hvc1"),
        (t.Db = "hvcC"),
        (t.Pb = "pasp"),
        (t.Ob = "mp4a"),
        (t.xb = "esds"),
        (t.Bb = "wvtt"),
        (t.Mb = "vttC"),
        (t.Lb = "vlab"),
        (t.Fb = "enca"),
        (t.Ub = "encv"),
        (t.jb = "moof"),
        (t.Vb = "mfhd"),
        (t.zb = "traf"),
        (t.Hb = "tfhd"),
        (t.Wb = "trun"),
        (t.qb = "tfdt"),
        (t.Gb = "senc"),
        (t.Xb = "mdat"),
        (t.$b = "pssh"),
        (t.Qb = "emsg"),
        (t.Yb = "sidx"),
        (t.Zb = "styp"),
        (t.Kb = "ftyp"),
        (t.Jb = "sinf"),
        (t.tA = "frma");
    })(Ka || (Ka = {})),
      (function (t) {
        (t.bd = "vide"), (t.kd = "soun"), (t.nA = "subt"), (t.iA = "hint"), (t.eA = "meta"), (t.rA = "auxv");
      })(Za || (Za = {})),
      (function (t) {
        (t[(t.BASE_DATA_OFFSET_PRESENT = 1)] = "BASE_DATA_OFFSET_PRESENT"),
          (t[(t.SAMPLE_DESCRIPTION_INDEX_PRESENT = 2)] = "SAMPLE_DESCRIPTION_INDEX_PRESENT"),
          (t[(t.DEFAULT_SAMPLE_DURATION_PRESENT = 8)] = "DEFAULT_SAMPLE_DURATION_PRESENT"),
          (t[(t.DEFAULT_SAMPLE_SIZE_PRESENT = 16)] = "DEFAULT_SAMPLE_SIZE_PRESENT"),
          (t[(t.DEFAULT_SAMPLE_FLAGS_PRESENT = 32)] = "DEFAULT_SAMPLE_FLAGS_PRESENT"),
          (t[(t.DURATION_IS_EMPTY = 32)] = "DURATION_IS_EMPTY"),
          (t[(t.DEFAULT_BASE_IS_MOOF = 131072)] = "DEFAULT_BASE_IS_MOOF");
      })($a || ($a = {})),
      (function (t) {
        (t[(t.DATA_OFFSET_PRESENT = 1)] = "DATA_OFFSET_PRESENT"),
          (t[(t.FIRST_SAMPLE_FLAGS_PRESENT = 4)] = "FIRST_SAMPLE_FLAGS_PRESENT"),
          (t[(t.SAMPLE_DURATION_PRESENT = 256)] = "SAMPLE_DURATION_PRESENT"),
          (t[(t.SAMPLE_SIZE_PRESENT = 512)] = "SAMPLE_SIZE_PRESENT"),
          (t[(t.SAMPLE_FLAGS_PRESENT = 1024)] = "SAMPLE_FLAGS_PRESENT"),
          (t[(t.SAMPLE_COMPOSITION_TIME_OFFSET_PRESENT = 2048)] = "SAMPLE_COMPOSITION_TIME_OFFSET_PRESENT");
      })(Ja || (Ja = {}));
    var vf = (function () {
      function t(t, n) {
        (this.Li = void 0), (this.sA = void 0), (this.Li = t), (this.sA = n);
      }
      var n = t.prototype;
      return (
        (n.uA = function () {
          return go(this.Li, this.sA);
        }),
        (n.oA = function () {
          return To(this.Li, this.sA);
        }),
        (n.hA = function () {
          return (function (t, n, r) {
            void 0 === r && (r = !1);
            var i = t.getInt16(n.Du, r);
            return n.Ru(2), i;
          })(this.Li, this.sA);
        }),
        (n.aA = function () {
          return ko(this.Li, this.sA);
        }),
        (n.cA = function () {
          return (function (t, n, r) {
            void 0 === r && (r = !1);
            var i = t.getInt32(n.Du, r);
            return n.Ru(4), i;
          })(this.Li, this.sA);
        }),
        (n.fA = function () {
          return bo(this.Li, this.sA);
        }),
        (n.vA = function (t) {
          return Io(this.Li, this.sA, t);
        }),
        (n.lA = function (t) {
          return (function (t, n, r) {
            for (var i = [], e = 0; e < r; e++) i.push(ko(t, n));
            return i;
          })(this.Li, this.sA, t);
        }),
        (n.dA = function (t) {
          return Do(this.Li, this.sA, t);
        }),
        (n._A = function () {
          return Fo(this.Li, this.sA);
        }),
        (n.gA = function (t) {
          this.sA.Ru(t);
        }),
        (n.Cu = function () {
          return new t(this.Li, this.sA.Cu());
        }),
        t
      );
    })();
    function lf(t, n) {
      return t.Jr === n;
    }
    var df = (function (t) {
        function n(n, r) {
          var i;
          return ((i = t.call(this) || this).wA = n), (i.yA = r), i;
        }
        return (
          g(n, t),
          m(n, [
            {
              key: "name",
              get: function () {
                return "DataIncompleteError";
              },
            },
          ]),
          n
        );
      })(gt),
      pf = (function () {
        function t() {}
        return (
          (t.mA = function (n) {
            var r = n.Li,
              i = n.sA,
              e = t.pA(r, i, !1);
            if (!e.kA) throw new df(i.Du, e.Ri);
            return e.Ri;
          }),
          (t.pA = function (n, r, i) {
            for (var e = []; r.Du < n.byteLength; ) {
              var u = t.bA(n, r, i);
              if (!u.kA) return { kA: !1, Ri: e };
              e.push(u.AA);
            }
            return { kA: !0, Ri: e };
          }),
          (t.TA = function (n, r) {
            var i = t.bA(n, r, !1);
            if (!i.kA) throw new df(r.Du);
            return i.AA;
          }),
          (t.SA = function (n, r) {
            for (var i = n.Li, e = n.sA; e.Du < i.byteLength; ) {
              var u = t.bA(i, e, !1);
              if (!u.kA) return;
              if (u.AA.Jr === r) return u.AA;
            }
          }),
          (t.bA = function (n, r, i) {
            var e = r.Du,
              u = t.EA(n, r);
            if (!u.kA) return u;
            var o = u.IA,
              a = o.Eu;
            if (0 === a) {
              if (i) return r.Nu(e), { kA: !1, RA: 1 / 0 };
              a = n.byteLength - e;
            }
            var f = e + a;
            if (f > n.byteLength) {
              var s = f;
              return r.Nu(e), { kA: !1, RA: s };
            }
            var c = { Jr: o.Jr, Du: e, Li: new vf(Bo(n, e, f), new Yo(o.NA)) };
            return r.Nu(f), { kA: !0, AA: c };
          }),
          (t.EA = function (t, n) {
            var r = n.Du;
            if (!Eo(t, n, 8)) return { kA: !1, RA: n.Du + 8 };
            var i = ko(t, n),
              e = Do(t, n, 4);
            if (1 === i) {
              if (!Eo(t, n, 8)) {
                var u = n.Du + 8;
                return n.Nu(r), { kA: !1, RA: u };
              }
              i = bo(t, n).toNumber();
            }
            if ("uuid" === e) {
              if (!Eo(t, n, 16)) {
                var o = n.Du + 16;
                return n.Nu(r), { kA: !1, RA: o };
              }
              e = Do(t, n, 16);
            }
            return { kA: !0, IA: { Jr: e, Eu: i, NA: n.Du - r } };
          }),
          (t.CA = function (t, n, r) {
            var i = t.Li,
              e = t.sA,
              u = Mo(Uo(i), e.Du, i.byteLength);
            return r && (u = Wo(u)), e.Ru(u.byteLength), { Jr: n, Li: u };
          }),
          (t.DA = function (n, r, i) {
            var e = gf(n.aA());
            return { Jr: r, PA: e.version, OA: e.flags, Li: t.CA(n, r, i).Li };
          }),
          t
        );
      })();
    function wf(t, n) {
      var r = mf(t, n);
      if (!r) throw new s("Missing " + n + " atom");
      return r;
    }
    function mf(t, n) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (i.Jr === n) return i.Li;
      }
    }
    function yf(t, n) {
      for (var r = [], i = 0; i < t.length; i++) {
        var e = t[i];
        e.Jr === n && r.push(e.Li);
      }
      return r;
    }
    function gf(t) {
      return { version: t >> 24, flags: new wo(16777215 & t) };
    }
    var If,
      Ef = (function () {
        function t() {}
        return (
          (t.xA = function (n) {
            for (var r = [], i = pf.mA(new vf(n, new Yo())), e = 0; e < i.length; e++) {
              var u = i[e],
                o = t.BA(u);
              o && r.push(o);
            }
            return r;
          }),
          (t.MA = function (t) {
            return pf.pA(t, new Yo(), !1).Ri.some(this.LA);
          }),
          (t.FA = function (n) {
            return yf(pf.mA(new vf(n, new Yo())), Ka.$b).map(t.UA);
          }),
          (t.jA = function (n) {
            return yf(pf.mA(n.Li), Ka.$b).map(t.UA);
          }),
          (t.LA = function (t) {
            return (
              t.Jr === Ka.Kb ||
              t.Jr === Ka.Zb ||
              t.Jr === Ka.vb ||
              t.Jr === Ka.jb ||
              t.Jr === Ka.Xb ||
              t.Jr === Ka.Yb ||
              t.Jr === Ka.Qb
            );
          }),
          (t.BA = function (n) {
            switch (n.Jr) {
              case Ka.vb:
                return t.VA(n.Li);
              case Ka.jb:
                return t.zA(n.Li, n.Du);
              case Ka.Xb:
                return t.HA(n.Li);
              case Ka.Yb:
                return t.WA(n.Li);
              case Ka.Qb:
                return t.qA(n.Li);
            }
          }),
          (t.VA = function (n) {
            var r = pf.mA(n),
              i = wf(r, Ka._b),
              e = yf(r, Ka.gb),
              u = mf(r, Ka.Sb),
              o = t.GA(i),
              a = e.map(t.XA),
              f = u ? t.$A(u) : void 0;
            return { Jr: Ka.vb, IA: o, QA: a, YA: f };
          }),
          (t.GA = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = 1 === r ? t.fA() : t.aA(),
              u = 1 === r ? t.fA() : t.aA(),
              o = t.aA(),
              a = 1 === r ? t.fA() : t.aA(),
              f = t.aA(),
              s = t.oA() >> 8;
            t.gA(2), t.gA(8);
            var c = t.lA(9);
            t.gA(24);
            var h = t.aA();
            return { Jr: Ka._b, PA: r, OA: i, ZA: e, KA: u, Sk: o, Gw: a, JA: f, ey: s, tT: c, nT: h };
          }),
          (t.XA = function (n) {
            var r = pf.mA(n),
              i = wf(r, Ka.wb),
              e = wf(r, Ka.yb),
              u = t.iT(i),
              o = t.eT(e);
            return { Jr: Ka.gb, IA: u, rT: o };
          }),
          (t.iT = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = 1 === r ? t.fA() : t.aA(),
              u = 1 === r ? t.fA() : t.aA(),
              o = t.aA();
            t.gA(4);
            var a = 1 === r ? t.fA() : t.aA();
            t.gA(8);
            var f = t.hA(),
              s = t.hA(),
              c = t.hA() / _.pow(2, 8);
            t.gA(2);
            var h = t.lA(9),
              v = t.aA() / _.pow(2, 16),
              l = t.aA() / _.pow(2, 16);
            return {
              Jr: Ka.wb,
              sT: i.Ou(1),
              uT: i.Ou(2),
              oT: i.Ou(4),
              ZA: e,
              KA: u,
              hT: o,
              Gw: a,
              aT: f,
              cT: s,
              ey: c,
              tT: h,
              Ap: v,
              fT: l,
            };
          }),
          (t.eT = function (n) {
            var r = pf.mA(n),
              i = wf(r, Ka.mb),
              e = wf(r, Ka.pb),
              u = wf(r, Ka.kb),
              o = t.vT(i),
              a = t.lT(e),
              f = t.dT(u);
            return { Jr: Ka.yb, IA: o, _T: a, gT: f };
          }),
          (t.vT = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = 1 === r ? t.fA() : t.aA(),
              u = 1 === r ? t.fA() : t.aA(),
              o = t.aA(),
              a = 1 === r ? t.fA() : t.aA();
            return t.oA(), t.gA(2), { Jr: Ka.mb, PA: r, OA: i, ZA: e, KA: u, Sk: o, Gw: a };
          }),
          (t.lT = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags;
            t.gA(4);
            var e = t.dA(4);
            t.gA(12);
            var u = t._A();
            return { Jr: Ka.pb, PA: r, OA: i, wT: e, oi: u };
          }),
          (t.dT = function (n) {
            var r = wf(pf.mA(n), Ka.bb),
              i = t.yT(r);
            return { Jr: Ka.kb, mT: i };
          }),
          (t.yT = function (n) {
            var r = wf(pf.mA(n), Ka.Ab),
              i = t.pT(r);
            return { Jr: Ka.bb, kT: i };
          }),
          (t.pT = function (n) {
            var r = gf(n.aA()),
              i = r.version,
              e = r.flags;
            n.aA();
            for (var u = [], o = pf.mA(n), a = 0; a < o.length; a++) {
              var f = o[a],
                s = t.bT(f.Li, f.Jr);
              s && u.push(s);
            }
            return { Jr: Ka.Ab, PA: i, OA: e, AT: u };
          }),
          (t.bT = function (n, r) {
            var i = t.TT(n, r);
            return i || (i = t.ST(n, r)) || (r === Ka.Bb ? t.ET(n) : void 0);
          }),
          (t.TT = function (n, r) {
            return r === Ka.Ob ? t.IT(n) : r === Ka.Fb ? t.RT(n) : void 0;
          }),
          (t.ST = function (n, r) {
            return r === Ka.Ib ? t.NT(n) : r === Ka.Nb || r === Ka.Cb ? t.CT(n, r) : r === Ka.Ub ? t.DT(n) : void 0;
          }),
          (t.PT = function (t, n) {
            return t.gA(6), { Jr: n, OT: t.oA() };
          }),
          (t.xT = function (n, r) {
            var i = t.PT(n, r);
            n.gA(8);
            var e = n.oA(),
              u = n.oA();
            return n.gA(2), n.gA(2), xi({}, i, { BT: e, MT: u, LT: n.aA() >>> 16 });
          }),
          (t.FT = function (n, r) {
            var i = t.PT(n, r);
            n.gA(2), n.gA(2), n.gA(12);
            var e = n.oA(),
              u = n.oA(),
              o = n.aA(),
              a = n.aA();
            n.gA(4);
            var f = n.oA();
            n.gA(32);
            var s = n.oA();
            return n.gA(2), xi({}, i, { Ap: e, fT: u, UT: o, jT: a, VT: f, zT: s });
          }),
          (t.IT = function (n) {
            var r = t.xT(n, Ka.Ob),
              i = wf(pf.mA(n), Ka.xb);
            return xi({}, r, { HT: t.WT(i) });
          }),
          (t.ET = function (n) {
            var r = t.PT(n, Ka.Bb),
              i = pf.mA(n),
              e = wf(i, Ka.Mb),
              u = t.qT(e),
              o = mf(i, Ka.Lb);
            return xi({}, r, { GT: u, XT: o ? t.$T(o) : o });
          }),
          (t.qT = function (t) {
            return { Jr: Ka.Mb, Ja: t._A() };
          }),
          (t.$T = function (t) {
            return { Jr: Ka.Lb, Xg: t._A() };
          }),
          (t.WT = function (t) {
            return pf.DA(t, Ka.xb, !0);
          }),
          (t.NT = function (n) {
            var r = t.FT(n, Ka.Ib),
              i = pf.mA(n),
              e = wf(i, Ka.Rb),
              u = mf(i, Ka.Pb);
            return xi({}, r, { QT: t.YT(e), ZT: u ? t.KT(u) : void 0 });
          }),
          (t.CT = function (n, r) {
            var i = t.FT(n, r),
              e = wf(pf.mA(n), Ka.Db);
            return xi({}, i, { JT: t.tS(e) });
          }),
          (t.DT = function (n) {
            var r = n.Cu(),
              i = t.FT(n, Ka.Ub),
              e = wf(pf.mA(n), Ka.Jb),
              u = t.nS(e);
            return xi({}, i, { iS: t.ST(r, u.rS.eS), sS: u });
          }),
          (t.RT = function (n) {
            var r = n.Cu(),
              i = t.xT(n, Ka.Fb),
              e = wf(pf.mA(n), Ka.Jb),
              u = t.nS(e);
            return xi({}, i, { iS: t.TT(r, u.rS.eS), sS: u });
          }),
          (t.nS = function (n) {
            var r = wf(pf.mA(n), Ka.tA),
              i = t.uS(r);
            return { Jr: Ka.Jb, rS: i };
          }),
          (t.uS = function (t) {
            var n = t.dA(4);
            return { Jr: Ka.tA, eS: n };
          }),
          (t.YT = function (t) {
            return pf.CA(t, Ka.Rb, !0);
          }),
          (t.tS = function (t) {
            return pf.CA(t, Ka.Db, !0);
          }),
          (t.KT = function (t) {
            var n = t.aA(),
              r = t.aA();
            return { Jr: Ka.Pb, oS: n, hS: r };
          }),
          (t.$A = function (n) {
            var r = yf(pf.mA(n), Ka.Eb).map(t.aS);
            return { Jr: Ka.Sb, QA: r };
          }),
          (t.aS = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = t.aA(),
              u = t.aA(),
              o = t.aA(),
              a = t.aA(),
              f = t.aA();
            return { Jr: Ka.Eb, PA: r, OA: i, hT: e, cS: u, fS: o, vS: a, lS: f };
          }),
          (t.zA = function (n, r) {
            var i = pf.mA(n),
              e = wf(i, Ka.Vb),
              u = yf(i, Ka.zb),
              o = t.dS(e),
              a = u.map(t._S);
            return { Jr: Ka.jb, gS: r, IA: o, QA: a };
          }),
          (t.dS = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = t.aA();
            return { Jr: Ka.Vb, PA: r, OA: i, wS: e };
          }),
          (t._S = function (n) {
            var r = pf.mA(n),
              i = wf(r, Ka.Hb),
              e = yf(r, Ka.Wb),
              u = mf(r, Ka.qb),
              o = t.yS(i),
              a = e.map(function (n) {
                return t.mS(n, o);
              }),
              f = u ? t.pS(u) : void 0;
            return { Jr: Ka.zb, IA: o, kS: a, bS: f };
          }),
          (t.yS = function (t) {
            var n = gf(t.aA()),
              r = n.version,
              i = n.flags,
              e = t.aA(),
              u = i.Ou($a.BASE_DATA_OFFSET_PRESENT) ? t.fA() : void 0,
              o = i.Ou($a.SAMPLE_DESCRIPTION_INDEX_PRESENT) ? t.aA() : void 0,
              a = i.Ou($a.DEFAULT_SAMPLE_DURATION_PRESENT) ? t.aA() : void 0,
              f = i.Ou($a.DEFAULT_SAMPLE_SIZE_PRESENT) ? t.aA() : void 0,
              s = i.Ou($a.DEFAULT_SAMPLE_FLAGS_PRESENT) ? t.aA() : void 0;
            return { Jr: Ka.Hb, PA: r, OA: i, hT: e, AS: u, TS: o, fS: a, vS: f, lS: s };
          }),
          (t.mS = function (n, r) {
            for (
              var i = gf(n.aA()),
                e = i.version,
                u = i.flags,
                o = n.aA(),
                a = u.Ou(Ja.DATA_OFFSET_PRESENT) ? n.cA() : void 0,
                f = u.Ou(Ja.FIRST_SAMPLE_FLAGS_PRESENT) ? n.aA() : void 0,
                s = [],
                c = 0;
              c < o;
              c++
            ) {
              var h = t.SS(n, u, e, r);
              0 === c && void 0 !== f && (h.OA = f), s.push(h);
            }
            return { Jr: Ka.Wb, PA: e, OA: u, ES: o, gS: a, IS: f, RS: s };
          }),
          (t.SS = function (t, n, r, i) {
            return {
              Gw: n.Ou(Ja.SAMPLE_DURATION_PRESENT) ? t.aA() : i.fS,
              Eu: n.Ou(Ja.SAMPLE_SIZE_PRESENT) ? t.aA() : i.vS,
              OA: n.Ou(Ja.SAMPLE_FLAGS_PRESENT) ? t.aA() : i.lS,
              NS: n.Ou(Ja.SAMPLE_COMPOSITION_TIME_OFFSET_PRESENT) ? (0 === r ? t.aA() : t.cA()) : void 0,
            };
          }),
          (t.qA = function (t) {
            var n = t.Li,
              r = t.sA,
              i = gf(ko(n, r)),
              e = i.version,
              u = i.flags;
            if (1 === e) {
              var o = ko(n, r),
                a = bo(n, r),
                f = ko(n, r),
                s = ko(n, r),
                c = Ao(n, r),
                h = Ao(n, r),
                _ = Ho(Uo(n), r.Du, n.byteLength);
              return r.Ru(_.byteLength), { Jr: Ka.Qb, PA: e, OA: u, CS: c, di: h, Sk: o, DS: a, PS: f, Wg: s, OS: _ };
            }
            var v = Ao(n, r),
              l = Ao(n, r),
              d = ko(n, r),
              p = ko(n, r),
              w = ko(n, r),
              m = ko(n, r),
              y = Ho(Uo(n), r.Du, n.byteLength);
            return r.Ru(y.byteLength), { Jr: Ka.Qb, OA: u, PA: e, CS: v, di: l, Sk: d, xS: p, PS: w, Wg: m, OS: y };
          }),
          (t.HA = function (t) {
            return pf.CA(t, Ka.Xb, !1);
          }),
          (t.UA = function (n) {
            var r = n.Li,
              i = n.sA,
              e = Wo(Uo(r)).buffer,
              u = gf(ko(r, i)),
              o = u.version,
              a = u.flags,
              f = t.MS(r, i),
              s = [];
            if (o > 0)
              for (var c = ko(r, i), h = 0; h < c; h++) {
                var _ = Io(r, i, 16);
                s.push(_);
              }
            var v = ko(r, i),
              l = new p(e, i.Du, v);
            return i.Ru(r.byteLength), { Jr: Ka.$b, PA: o, OA: a, LS: f, FS: s, US: v, Li: l, jS: e };
          }),
          (t.MS = function (t, n) {
            for (var r = "", i = 0; i < 4; i++) {
              var e = go(t, n).toString(16);
              r += 1 === e.length ? "0" + e : e;
            }
            r += "-";
            for (var u = 0; u < 2; u++) {
              var o = go(t, n).toString(16);
              r += 1 === o.length ? "0" + o : o;
            }
            r += "-";
            for (var a = 0; a < 2; a++) {
              var f = go(t, n).toString(16);
              r += 1 === f.length ? "0" + f : f;
            }
            r += "-";
            for (var s = 0; s < 2; s++) {
              var c = go(t, n).toString(16);
              r += 1 === c.length ? "0" + c : c;
            }
            r += "-";
            for (var h = 0; h < 6; h++) {
              var _ = go(t, n).toString(16);
              r += 1 === _.length ? "0" + _ : _;
            }
            return r.toLowerCase();
          }),
          (t.WA = function (t) {
            var n,
              r,
              i = t.Li,
              e = t.sA,
              u = gf(ko(i, e)),
              o = u.version,
              a = u.flags,
              f = ko(i, e),
              s = ko(i, e);
            0 === o
              ? ((n = Y.fromBits(ko(i, e), 0, !0)), (r = Y.fromBits(ko(i, e), 0, !0)))
              : ((n = bo(i, e)), (r = bo(i, e))),
              e.Ru(2);
            for (var c = To(i, e), h = [], _ = 0; _ < c; _ += 1) {
              var v = ko(i, e),
                l = (v >> 31) & 1,
                d = 2147483647 & v,
                p = ko(i, e),
                w = ko(i, e),
                m = (w >> 31) & 1,
                y = (w >> 28) & 7,
                g = 268435455 & w;
              h.push({ VS: l, zS: d, Gw: p, HS: m, WS: y, qS: g });
            }
            return { Jr: Ka.Yb, PA: o, OA: a, GS: f, Sk: s, XS: n, $S: r, QS: c, YS: h };
          }),
          (t.pS = function (t) {
            var n,
              r = t.Li,
              i = t.sA,
              e = gf(ko(r, i)),
              u = e.version,
              o = e.flags;
            return (n = 0 === u ? Y.fromBits(ko(r, i), 0, !0) : bo(r, i)), { Jr: Ka.qb, PA: u, OA: o, bS: n };
          }),
          t
        );
      })(),
      Sf = 16384,
      Tf = 71,
      kf = 188;
    function bf(t) {
      return null !== _a(xo(t), new Yo())
        ? If.kr
        : (function (t) {
            return Nf(t) >= 0;
          })(t)
        ? If.br
        : (function (t) {
            var n = Mo(t, 0, _.min(t.length, Sf));
            return Ef.MA(xo(n));
          })(t)
        ? If.Sw
        : If.ud;
    }
    function Nf(t) {
      if (t.length < 3 * kf) return -1;
      for (var n = _.min(1e3, t.length - 3 * kf), r = 0; r <= n; r++)
        if (t[r] === Tf && t[r + kf] === Tf && t[r + 2 * kf] === Tf) return r;
      return -1;
    }
    !(function (t) {
      (t[(t.ud = 0)] = "ud"), (t[(t.Sw = 1)] = "Sw"), (t[(t.br = 2)] = "br"), (t[(t.kr = 3)] = "kr");
    })(If || (If = {}));
    var Af,
      Df = 71,
      Rf = 188,
      Pf = 0;
    function Of(t, n, r) {
      if (t && n && n.length) {
        for (var i = Hu.Fk, e = Hu.Fk, u = Hu.Uk, o = Hu.Uk, a = 0; a < n.length; a++) {
          var f = n[a].nE;
          (i = Hu.Nk(f.wrt, i)), (e = Hu.Nk(f.grt, e)), (u = Hu.Rk(f.wrt, u)), (o = Hu.Rk(f.grt, o));
        }
        (t.mwt = e), (t.pwt = i), (t.kwt = o), (t.bwt = u), (t._wt = Hu.Rk(Hu.qp, t.ywt.Mp(r)).Sp());
      }
    }
    function Cf(t) {
      (t.Awt = t.kwt.Dm(t.gwt)), (t.Twt = t.bwt.Dm(t.gwt)), (t.dwt = t.Awt.Mp(t.mwt).Sp());
    }
    function Lf(t, n, r) {
      if (0 != (48 & t[n + 6])) throw new s("MTE1540");
      var i = t[n + 7],
        e = 0 != (128 & i),
        u = 0 != (64 & i),
        o = t[n + 8],
        a = e
          ? ju(
              (14 & t[n + 9]) * _.pow(2, 29) +
                (t[n + 10] << 22) +
                ((254 & t[n + 11]) << 14) +
                (t[n + 12] << 7) +
                ((254 & t[n + 13]) >> 1)
            )
          : void 0,
        f = u
          ? ju(
              (14 & t[n + 14]) * _.pow(2, 29) +
                (t[n + 15] << 22) +
                ((254 & t[n + 16]) << 14) +
                (t[n + 17] << 7) +
                ((254 & t[n + 18]) >> 1)
            )
          : void 0,
        c = r.wrt || r.grt || f || a;
      if (e) {
        var h = Xu(a, c),
          v = c.Dm(h);
        (r.grt = v), (r.mrt = v.Sp());
      } else 0;
      if (((r.lwt = u), u)) {
        var l = Xu(f, c),
          d = c.Dm(l);
        (r.wrt = d), (r._rt = d), (r.prt = d.Sp());
      } else (r.prt = r.mrt), (r.wrt = r.grt), (r._rt = r.grt);
      return void 0 === r.ywt && (r.ywt = r._rt), (r.ti = !0), n + 8 + o + 1;
    }
    function Ff(t, n, r, i, e) {
      i.ii
        ? ma(t, (n = Lf(t, n, e)), r, e.grt, e)
        : e.ti &&
          (function (t, n, r, i) {
            var e = (i.cwt = i.cwt || []);
            if (e.length) {
              var u = e[e.length - 1];
              u && ya(u, Bo(xo(t), n, r));
            }
          })(t, n, r, e);
    }
    function Mf(t, n, r, i, e) {
      i.ii && (n = Lf(t, n, e)),
        e.ti &&
          (function (t, n, r, i) {
            var e, u, o, a, f;
            for (e = u = n, o = i.mr = i.mr || [], a = i.urt || tf(i, o), f = i.nr || 0; u < r; ) {
              var s = t[u];
              if (((u += 1), 0 === f)) 0 === s && (f = 1);
              else if (1 === f) f = 0 === s ? 2 : 0;
              else if (0 === s) f = 3;
              else if (1 === s) {
                var c = 1 + f;
                a.ket(t, e, u - c), a.nE.Jr || (a.nE.Jr = 31 & a.bu(0)), (e = u), 0 !== a.xg && (a = tf(i, o)), (f = 0);
              } else f = 0;
            }
            u - e > 0 && (a.ket(t, e, u), a.nE.Jr || (a.nE.Jr = 31 & a.bu(0))), (i.nr = f);
          })(t, n, r, e);
    }
    function Bf(t, n, r, i, e) {
      return e.video && i.uwt === e.video.uwt
        ? Mf(t, n, r, i, e.video)
        : e.audio && i.uwt === e.audio.uwt
        ? (function (t, n, r, i, e) {
            i.ii && (n = Lf(t, n, e)),
              e.ti && (e.vwt === aa.Swt || e.vwt === aa.Ewt ? $u(t, n, r, e) : e.vwt === aa.Dwt && so(t, n, r, e));
          })(t, n, r, i, e.audio)
        : e.swt && i.uwt === e.swt.uwt
        ? Ff(t, n, r, i, e.swt)
        : e;
    }
    function xf(t, n, r, i, e) {
      return i.uwt === Pf
        ? i.ii
          ? (function (t, n, r) {
              var i,
                e = ((15 & t[n + 2]) << 8) + t[n + 3];
              if (e < 13) return r;
              if (0 !== (t[n + 9] << 8) + t[n + 10]) i = n + 11;
              else {
                if (!(e >= 17)) return r;
                i = n + 15;
              }
              return (r.ui = ((31 & t[i]) << 8) + t[i + 1]), r;
            })(t, n, e)
          : e
        : i.uwt === e.ui && i.ii
        ? (function (t, n, r) {
            var i,
              e,
              u = ((15 & t[n + 2]) << 8) + t[n + 3],
              o = ((15 & t[n + 11]) << 8) + t[n + 12];
            (i = n + 13 + o), (e = u - 9 - 4 - o);
            for (var a = !1, f = !1, s = !1; e >= 5; ) {
              var c = null,
                h = t[i],
                _ = ((31 & t[i + 1]) << 8) + t[i + 2];
              a || h !== Af.$wt
                ? f || (h !== Af.fi && h !== Af.si)
                  ? f || h !== Af.Swt
                    ? f || h !== Af.Ewt
                      ? s || h !== Af.hi || ((r.swt.uwt = _), (c = r.swt), (s = !0))
                      : ((r.audio.vwt = aa.Ewt), (r.audio.uwt = _), (c = r.audio), (f = !0))
                    : ((r.audio.vwt = aa.Swt), (r.audio.uwt = _), (c = r.audio), (f = !0))
                  : ((r.audio.vwt = aa.Dwt), (r.audio.uwt = _), (c = r.audio), (f = !0))
                : ((r.video.vwt = aa.$wt), (r.video.uwt = _), (c = r.video), (a = !0));
              var v = ((15 & t[i + 3]) << 8) + t[i + 4];
              c && ((c.owt = h), (c.hwt = v), (c.awt = Go(Mo(t, i + 5, i + 5 + v)))), (e = e - 5 - v), (i = i + 5 + v);
            }
          })(t, n, e)
        : e;
    }
    function Uf(t, n) {
      return t === Pf || t === n.ui;
    }
    function Hf(t, n) {
      return !(!n.video || t !== n.video.uwt) || !(!n.audio || t !== n.audio.uwt) || !(!n.swt || t !== n.swt.uwt);
    }
    function Wf(t, n, r, i, e, u) {
      if (t[n] === Df) {
        var o,
          a = 128 & (o = t[n + 1]),
          f = 64 == (64 & o),
          s = ((31 & o) << 8) + t[n + 2],
          c = 192 & (o = t[n + 3]),
          h = 32 == (32 & o),
          _ = 16 == (16 & o);
        if (!e(s, i)) return i;
        if (0 !== a) return i;
        if (0 !== c) return i;
        if (!_) return i;
        var v = n + 4;
        return h && (v += t[v] + 1), v >= r ? i : u(t, v, r, { vi: a, ii: f, uwt: s, li: c, pi: h, mi: _ }, i);
      }
    }
    function Gf(t, n) {
      return n.Ep(t) && (t = t.Dm(zu)), t.Sp();
    }
    function Vf(t, n, r) {
      if (t && n) {
        t.wwt = Gf(t.ywt, r);
        for (var i = 0; i < n.length; i++) {
          var e = n[i];
          e.nE.QZ = Gf(e.nE._rt, r);
        }
      }
    }
    function zf(t) {
      return !!t && void 0 !== t.ywt;
    }
    function Yf(t, n) {
      return Wu(t.ywt, n.ywt);
    }
    function Xf(t, n) {
      var r = (function (t, n) {
        for (
          var r = { audio: {}, video: {}, swt: {} }, i = Nf(t), e = t.length - ((t.length - i) % Rf), u = i;
          u < e;
          u += Rf
        )
          Wf(t, u, u + Rf, r, Uf, xf);
        n.Glt && !r.audio.uwt && (r.audio.uwt = n.Glt),
          n.Xlt && !r.video.uwt && (r.video.uwt = n.Xlt),
          n.$lt && !r.audio.vwt && (r.audio.vwt = n.$lt),
          n.Qlt && !r.video.vwt && (r.video.vwt = n.Qlt),
          !r.audio || (n.IK && "mp4a.40.5" !== n.IK.Zvt) || (r.audio.yi = !0);
        for (var o = i; o < e; o += Rf) Wf(t, o, o + Rf, r, Hf, Bf);
        return r;
      })(t, n);
      if (
        ((t = null),
        (r.audio && r.audio.GH && 0 !== r.audio.GH.length) || (r.audio = null),
        (r.video && r.video.mr && 0 !== r.video.mr.length) || (r.video = null),
        (r.swt && r.swt.cwt && 0 !== r.swt.cwt.length) || (r.swt = null),
        null === r.audio && null === r.video && null === r.swt)
      )
        return r;
      var i,
        e,
        u = ((i = [r.audio, r.video, r.swt]), (e = i.filter(zf)).length ? (e.sort(Yf), e[0].ywt) : Hu.qp);
      Vf(r.audio, r.audio && r.audio.GH, u),
        Vf(r.video, r.video && r.video.mr, u),
        Vf(r.swt, r.swt && r.swt.cwt, u),
        Of(r.audio, r.audio && r.audio.GH, u),
        Of(r.video, r.video && r.video.mr, u);
      var o = null,
        a = null;
      r.video && ((a = Fa((o = hf(r.video, n)).GH)), Cf(o), _f(o));
      var f = null;
      if (r.audio)
        if (r.audio.vwt === aa.Swt || r.audio.vwt === aa.Ewt) {
          var s = r.audio.vwt === aa.Ewt || (n.IK && "mp4a.40.5" === n.IK.Zvt),
            c = !s && n.Ylt;
          Cf((f = Qu(r.audio, s, c))), to(f);
        } else r.audio.vwt === aa.Dwt && (Cf((f = co(r.audio))), ho(f));
      var h = null;
      return r.swt && (h = ga(r.swt)), { audio: f, video: o, swt: h, brt: a, fwt: u };
    }
    function jf(t, n, r, i, e) {
      !(function (t, n, r) {
        return fo(t[n], t[n + 1]);
      })(t, n)
        ? (i.IK && "mp4a.40.5" === i.IK.Zvt ? (e.vwt = aa.Ewt) : (e.vwt = aa.Swt), $u(t, n, r, e))
        : ((e.vwt = aa.Dwt), so(t, n, r, e));
    }
    function qf(t, n) {
      var r = 0,
        i = {};
      r += (function (t, n, r, i, e) {
        for (var u = wa(t, n); u > 0 && n + u < r; ) ma(t, n, n + u, i, e), (u = wa(t, (n += u)));
        return n;
      })(t, r, t.byteLength, Hu.qp, i);
      for (
        var e = ga(i),
          u = (function (t) {
            for (var n = Hu.Lk, r = 0; r < t.cwt.length; r += 1)
              for (var i = t.cwt[r], e = 0; e < i.GH.length; e += 1) {
                var u = i.GH[e];
                if ("PRIV" === u.id && "com.apple.streaming.transportStreamTimestamp" === u.ownerIdentifier) {
                  var o = new DataView(u.data);
                  return (n = Hu.zp(bo(o, new Yo()), Gu)), Kf(t, r, e), n;
                }
              }
            return n;
          })(e),
          o = 0,
          a = e.cwt;
        o < a.length;
        o++
      ) {
        a[o].nE = { V$: u, QZ: u.Sp() };
      }
      var f = {};
      return (
        (f.mwt = f.pwt = f._rt = f.ywt = u),
        (f.wwt = u.Sp()),
        (f._wt = 0),
        jf(t, r, t.byteLength, n, f),
        { audio: f, swt: e }
      );
    }
    function Kf(t, n, r) {
      var i = t.cwt,
        e = i[n].GH;
      e.length > 1 ? Ie(e, r) : i.length > 1 ? Ie(i, n) : (i.length = 0);
    }
    function Zf(t) {
      var n = t.gwt.gk(t.GH.length);
      (t.Twt = t.mwt.Dm(n)), (t.Awt = t.mwt.Dm(n));
    }
    !(function (t) {
      (t[(t.$wt = 27)] = "$wt"),
        (t[(t.fi = 3)] = "fi"),
        (t[(t.si = 4)] = "si"),
        (t[(t.Swt = 15)] = "Swt"),
        (t[(t.Ewt = 17)] = "Ewt"),
        (t[(t.hi = 21)] = "hi");
    })(Af || (Af = {}));
    var $f,
      Jf,
      Qf,
      ts,
      ns,
      rs,
      is = t;
    function es(t, n) {
      return (
        void 0 === $f &&
          ($f = (function () {
            var t = new p(1);
            try {
              return is.postMessage(t, [t.buffer]), 0 === t.byteLength;
            } catch (t) {
              return !1;
            }
          })()),
        n && $f ? is.postMessage(t, n) : is.postMessage(t)
      );
    }
    function us(t) {
      return { IA: t.IA, nE: { QZ: t.nE.QZ, _rt: t.nE.V$.$k() }, GH: t.GH };
    }
    function os(t) {
      return { V$: t.V$.$k(), wS: t.wS, Cet: t.Cet, Det: t.Det, Jr: t.Jr, KX: t.KX, Pet: t.Pet, Oet: t.Oet };
    }
    function as(t) {
      return {
        uwt: t.uwt,
        GH: [],
        vwt: t.vwt,
        lwt: t.lwt,
        duration: t.duration,
        dwt: t.dwt,
        _wt: t._wt.$k(),
        frt: t.frt,
        gwt: t.gwt.$k(),
        wwt: t.wwt,
        ywt: t.ywt.$k(),
        mwt: t.mwt.$k(),
        pwt: t.pwt.$k(),
        kwt: t.kwt.$k(),
        bwt: t.bwt.$k(),
        Awt: t.Awt.$k(),
        Twt: t.Twt.$k(),
      };
    }
    function fs(t, n) {
      switch (t.vwt) {
        case aa.Swt:
        case aa.Ewt:
          return (function (t, n) {
            return xi({}, ss(t), {
              vwt: t.vwt,
              GH: t.GH.map(function (t) {
                return (function (t, n) {
                  var r = ((i = t.nE), xi({}, vs(i), { Iwt: i.Iwt, Rwt: i.Rwt, Nwt: i.Nwt }));
                  var i;
                  return cs(t.Cu(r), n);
                })(t, n);
              }),
              Ylt: t.Ylt,
              Cwt: t.Cwt,
            });
          })(t, n);
        case aa.Dwt:
          return (function (t, n) {
            return xi({}, ss(t), {
              vwt: t.vwt,
              GH: t.GH.map(function (t) {
                return (function (t, n) {
                  var r = ((i = t.nE), xi({}, vs(i), { PA: i.PA, aT: i.aT, Pwt: i.Pwt, Owt: i.Owt, xwt: i.xwt }));
                  var i;
                  return cs(t.Cu(r), n);
                })(t, n);
              }),
            });
          })(t, n);
      }
    }
    function ss(t) {
      return xi({}, as(t), { GH: [], vwt: t.vwt, Bwt: t.Bwt, Mwt: t.Mwt, Lwt: t.Lwt, Fwt: t.Fwt });
    }
    function cs(t, n) {
      var r = t.Net();
      return n.push(r.buffer), { Uwt: r, jwt: t.xg, Vwt: t.nE };
    }
    function hs(t, n) {
      return xi({}, as(t), {
        vwt: t.vwt,
        GH: t.GH.map(function (t) {
          return (function (t, n) {
            var r =
              ((i = t.nE),
              xi({}, _s(i), {
                Gw: i.Gw,
                yrt: i.yrt.$k(),
                mrt: i.mrt,
                prt: i.prt,
                zwt: i.zwt && i.zwt.$k(),
                Hwt: i.Hwt && i.Hwt.$k(),
                krt: i.krt,
                Trt: i.Trt,
                brt: i.brt,
                Art: i.Art,
              }));
            var i;
            return cs(t.Cu(r), n);
          })(t, n);
        }),
        Wwt: t.Wwt,
        qwt: t.qwt,
        QT: t.QT,
        width: t.width,
        height: t.height,
        dht: t.dht,
        Gwt: t.Gwt,
        ght: t.ght,
        Wlt: t.Wlt,
        qlt: t.qlt,
        oS: t.oS,
        hS: t.hS,
      });
    }
    function _s(t) {
      var n;
      return xi({}, { QZ: (n = t).QZ, _rt: n._rt.$k() }, { grt: t.grt.$k(), wrt: t.wrt.$k() });
    }
    function vs(t) {
      return xi({}, _s(t));
    }
    function ls(t, n, r) {
      var i = go(t, n);
      if (i !== r) throw new c("Expected descriptor with tag " + r + ", but found " + i);
    }
    function ds(t, n) {
      ls(t, n, ts.ki);
      var r,
        i,
        e,
        u = ps(t, n),
        o = n.Du + u,
        a = To(t, n),
        f = go(t, n),
        s = 0 != (64 & f),
        c = 0 != (32 & f),
        h = 31 & f;
      (0 != (128 & f) && (r = To(t, n)), s) && (i = Do(t, n, go(t, n)));
      c && (e = Do(t, n, 2));
      var _ = (function (t, n) {
        ls(t, n, ts.bi);
        var r,
          i = ps(t, n),
          e = n.Du + i,
          u = go(t, n),
          o = go(t, n),
          a = o >> 2,
          f = 0 != (2 & o),
          s = So(t, n, 3),
          c = ko(t, n),
          h = ko(t, n);
        if (n.Du < e) {
          var _ = (function (t, n) {
            return t.getUint8(n.Du);
          })(t, n);
          _ === ts.te &&
            (r = (function (t, n) {
              ls(t, n, ts.te);
              var r = ps(t, n),
                i = Io(t, n, r);
              return { ie: ts.te, ee: i };
            })(t, n));
        }
        return n.Nu(e), { ie: ts.bi, ae: u, owt: a, se: f, ce: s, he: c, ve: h, de: r };
      })(t, n);
      return n.Nu(o), { ie: ts.ki, Wg: a, be: r, ed: i, ru: h, iu: e, eu: _ };
    }
    function ps(t, n) {
      for (var r = 0, i = 0; i < 4; i++) {
        var e = go(t, n);
        if (((r = (r << 7) | (127 & e)), !(128 & e))) break;
      }
      return r;
    }
    function ws(t, n) {
      for (
        var r = go(t, n), i = go(t, n), e = go(t, n), u = go(t, n), o = 3 & go(t, n), a = 31 & go(t, n), f = [], s = 0;
        s < a;
        s++
      ) {
        var c = To(t, n);
        f.push(Io(t, n, c));
      }
      for (var h = go(t, n), _ = [], v = 0; v < h; v++) {
        var l = To(t, n);
        _.push(Io(t, n, l));
      }
      return { zet: r, Het: i, Wet: e, qet: u, Get: o, Xet: f, $et: _ };
    }
    !(function (t) {
      (t.iyt = "Qot"), (t.Zwt = "Kwt");
    })(Jf || (Jf = {})),
      (function (t) {
        (t.eyt = "ryt"), (t.syt = "uyt");
      })(Qf || (Qf = {})),
      (function (t) {
        (t[(t.ki = 3)] = "ki"), (t[(t.bi = 4)] = "bi"), (t[(t.te = 5)] = "te");
      })(ts || (ts = {})),
      (function (t) {
        (t[(t.su = 64)] = "su"), (t[(t.Swt = 103)] = "Swt"), (t[(t.Dwt = 107)] = "Dwt");
      })(ns || (ns = {})),
      (function (t) {
        (t[(t.cu = 0)] = "cu"),
          (t[(t.hu = 1)] = "hu"),
          (t[(t.Swt = 2)] = "Swt"),
          (t[(t.lu = 5)] = "lu"),
          (t[(t.gu = 34)] = "gu");
      })(rs || (rs = {}));
    var ms = 24;
    function ys(t) {
      var n = t.Xet,
        r = new Be();
      return r.ket(Uo(n), 0, n.length), qa(r).frt;
    }
    function gs(t) {
      var n = ys(t) || ms;
      return t.drt / n;
    }
    function Is(t, n, r, i, e) {
      for (var u = [], o = n.filter(Es), a = i(r), f = 0; f < o.length; f++) {
        var s,
          c = o[f],
          h = me(c.QA, function (t) {
            return t.IA.hT === r.hT;
          });
        if (h)
          for (
            var _ = h.IA.fS || 0,
              v = h.IA.vS || 0,
              l = h.bS ? h.bS.bS : Y.ZERO,
              d = c.gS + (null != (s = h.IA.AS) ? s : Y.ZERO).toNumber(),
              p = 0,
              w = h.kS;
            p < w.length;
            p++
          )
            for (var m = w[p], y = d + (m.gS || 0), g = 0, I = m.RS; g < I.length; g++) {
              var E = I[g],
                S = E.Eu || v,
                T = new Be();
              T.ket(t, y, y + S);
              var k = Hu.zp(l, r.drt);
              (T.nE = e(E, c, r, k, Ho(t, y, y + S))), u.push(T), (y += S), (l = l.add(E.Gw || _ || a));
            }
      }
      return u;
    }
    function Es(t) {
      return t.Jr === Ka.jb;
    }
    var Ss,
      Ts = 65536;
    function ks(t, n, r, i) {
      var e = r.drt,
        u = Y.fromNumber(t.NS || 0),
        o = i.Dm(Hu.zp(u, e));
      return { QZ: i.Sp(), _rt: i, grt: o, wrt: i };
    }
    function bs(t, n, r, i, e) {
      for (
        var u,
          o = ks(t, 0, r, i),
          a = Hu.Hp(t.Gw || 0, r.drt),
          f = t.OA || 0,
          s = !(f & Ts) && ((f >> 24) & 3) !== Ss.SAMPLE_DEPENDS_ON_OTHERS,
          c = xo(e),
          h = new Yo();
        h.Du < c.byteLength;

      ) {
        var _ = ko(c, h);
        if ((31 & So(c, h, 1)) === Ma.nrt) {
          var v,
            l = new Be();
          l.ket(e, h.Du - 1, h.Du + _ - 1);
          var d = Ga(o.grt, l);
          (v = u = u || []).push.apply(v, La(d));
        }
        h.Ru(_ - 1);
      }
      return xi({}, o, { Gw: a.Sp(), yrt: a, mrt: o.grt.Sp(), prt: o.QZ, krt: s, brt: u, Art: !1, Trt: !1 });
    }
    function Ns(t) {
      return { hT: t.IA.hT, drt: t.rT.IA.Sk };
    }
    function As(t) {
      return t.Jr === Ka.vb;
    }
    !(function (t) {
      (t[(t.SAMPLE_DEPENDS_ON_UNKNOWN = 0)] = "SAMPLE_DEPENDS_ON_UNKNOWN"),
        (t[(t.SAMPLE_DEPENDS_ON_OTHERS = 1)] = "SAMPLE_DEPENDS_ON_OTHERS"),
        (t[(t.SAMPLE_DEPENDS_ON_NO_OTHER = 2)] = "SAMPLE_DEPENDS_ON_NO_OTHER"),
        (t[(t.SAMPLE_DEPENDS_ON_RESERVED = 3)] = "SAMPLE_DEPENDS_ON_RESERVED");
    })(Ss || (Ss = {}));
    var Ds = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3],
      Rs = 0.01;
    function Ps(t, n) {
      var r = Ef.xA(xo(n.u0)),
        i = Ef.xA(xo(t)),
        e = (function (t) {
          for (var n = 0; n < t.QA.length; n++) {
            var r = t.QA[n],
              i = Ns(t.QA[n]),
              e = r.rT.gT.mT.kT.AT,
              u = me(e, function (t) {
                return t.Jr === Ka.Ob;
              });
            if (u) {
              var o = ds(xo(u.HT.Li), new Yo()),
                a = Os(o),
                f = u.BT,
                s = r.IA.hT;
              return xi({}, i, { hT: s, ku: f, vwt: a, HT: Go(u.HT.Li) });
            }
          }
          return;
        })(r.filter(As)[0]),
        u = (function (t) {
          for (var n = 0; n < t.QA.length; n++) {
            var r = t.QA[n],
              i = Ns(t.QA[n]),
              e = r.rT.gT.mT.kT.AT,
              u = me(e, function (t) {
                return t.Jr === Ka.Ib;
              });
            if (!u) {
              var o = me(
                e.filter(function (t) {
                  return t.Jr === Ka.Ub;
                }),
                function (t) {
                  var n;
                  return (null == (n = t.iS) ? void 0 : n.Jr) === Ka.Ib;
                }
              );
              o && (u = o.iS);
            }
            if (u) {
              var a = ws(xo(u.QT.Li), new Yo()),
                f = u.ZT;
              return xi({}, i, {
                hT: r.IA.hT,
                QT: Go(u.QT.Li),
                Ap: u.Ap,
                fT: u.fT,
                hS: f && f.hS,
                oS: f && f.oS,
                dht: a.Het,
                _ht: a.Wet,
                ght: a.qet,
                Xet: a.Xet[0],
                $et: a.$et[0],
              });
            }
          }
        })(r.filter(As)[0]),
        o = e ? Is(t, i, e, Ls, Cs) : [],
        a = u ? Is(t, i, u, gs, bs) : [],
        f =
          e && o.length > 0
            ? (function (t, n, r, i, e) {
                switch (r.vwt) {
                  case aa.Swt:
                    return Ms(t, n, r, i, !1, e);
                  case aa.Ewt:
                    return Ms(t, n, r, i, !0, e);
                  case aa.Dwt:
                    return;
                }
              })(t, i, e, o, n.Ylt)
            : void 0,
        s =
          u && a.length > 0
            ? (function (t, n, r, i) {
                var e,
                  u = Fs(t, n, r, bs, i),
                  o = !1,
                  a = ys(r),
                  f = u.kwt.Mp(u.mwt).bk(u.GH.length - 1);
                f.Lp() || (a && !(_.abs(a - 1 / f.Sp()) > 10)) ? (e = a || ms) : ((o = !0), (e = 1 / cf(u.GH).Sp()));
                return xi({}, u, {
                  vwt: aa.$wt,
                  Wwt: o,
                  qwt: !1 === a,
                  frt: e,
                  gwt: Hu.Mk(1 / e, r.drt),
                  QT: r.QT,
                  width: r.Ap,
                  height: r.fT,
                  dht: r.dht,
                  Gwt: r._ht,
                  ght: r.ght,
                  Wlt: Go(r.Xet),
                  qlt: Go(r.$et),
                  oS: r.oS,
                  hS: r.hS,
                });
              })(t, i, u, a)
            : void 0,
        c = f ? f.mwt : Hu.Fk,
        h = s ? s.mwt : Hu.Fk,
        v = Hu.Nk(c, h);
      return { swt: void 0, brt: Fa(a), fwt: v, audio: f, video: s };
    }
    function Os(t) {
      var n = t.eu;
      switch (n.ae) {
        case ns.su:
          return (function (t) {
            var n = t.de;
            if (n) {
              var r = (function (t, n) {
                var r = vo(t, n, 5);
                31 === r && (r = 32 + vo(t, n, 6));
                var i,
                  e = vo(t, n, 4);
                return 15 === e && (i = vo(t, n, 24)), { zu: r, gn: e, Owt: i, qu: vo(t, n, 4) };
              })(xo(n.ee), new lo());
              switch (r.zu) {
                case rs.Swt:
                  return aa.Swt;
                case rs.lu:
                  return aa.Ewt;
                case rs.gu:
                  return aa.Dwt;
              }
            }
          })(n);
        case ns.Swt:
          return aa.Swt;
        case ns.Dwt:
          return aa.Dwt;
      }
    }
    function Cs(t, n, r, i, e) {
      return xi({}, ks(t, 0, r, i), {
        Iwt: ye(Ds, function (t) {
          return t === r.drt;
        }),
        Rwt: r.drt,
        Nwt: r.ku,
      });
    }
    function Ls(t) {
      return Zu;
    }
    function Fs(t, n, r, i, e) {
      var u = e[0],
        o = e[e.length - 1],
        a =
          void 0 !== o.nE.Gw
            ? o.nE.Gw
            : (function (t) {
                return void 0 !== t.Rwt;
              })(o.nE)
            ? Zu / o.nE.Rwt
            : _.max((o.nE.QZ - u.nE.QZ) / e.length, Rs),
        f = o.nE.QZ + a - u.nE.QZ,
        s = e.some(function (t) {
          return !t.nE.wrt.dp(t.nE.grt);
        }),
        c = Hu.Mk(a, r.drt);
      return {
        uwt: 0,
        GH: e,
        vwt: "",
        lwt: s,
        duration: f,
        dwt: f,
        _wt: Hu.qp,
        frt: NaN,
        gwt: Hu.Lk,
        wwt: u.nE.QZ,
        ywt: u.nE._rt,
        mwt: u.nE.grt,
        pwt: u.nE.wrt,
        kwt: o.nE.grt,
        bwt: o.nE.wrt,
        Awt: o.nE.grt.Dm(c),
        Twt: o.nE.wrt.Dm(c),
      };
    }
    function Ms(t, n, r, i, e, u) {
      var o = Fs(0, 0, r, 0, i),
        a = me(
          (function (t, n) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              if (lf(i, n)) return i;
            }
          })(n, Ka.jb).QA,
          function (t) {
            return t.IA.hT === r.hT;
          }
        );
      if (a) {
        var f,
          s,
          c,
          h,
          _ =
            null !=
            (f = null != (s = a.IA.fS) ? s : null == (c = a.kS[0]) ? void 0 : null == (h = c.RS[0]) ? void 0 : h.Gw)
              ? f
              : Zu;
        return (
          null === u && (u = !e && Ju(i)),
          (e = e || u),
          xi({}, o, {
            vwt: aa.Swt,
            Fwt: r.HT,
            frt: r.drt,
            gwt: ju(o.duration / o.GH.length),
            Bwt: r.drt,
            Mwt: _,
            Lwt: r.ku,
            Ylt: u,
            Cwt: e,
          })
        );
      }
    }
    var Bs = t;
    function xs(t, n, r) {
      (n = {}),
        r || (r = "EMW0032"),
        Bs.postMessage({ Gyt: Qf.syt, qyt: t, Qyt: n.message || r, pt: n.name, to: n.stack, no: JSON.stringify(n) });
    }
    var Us,
      Hs = [];
    function Ws(t) {
      for (var n = 0; n < Hs.length; n++) {
        if (Hs[n].cmt === t) return void Ie(Hs, n);
      }
    }
    function Gs() {
      Hs.length ? Us || (Us = u(Vs, 0)) : (o(Us), (Us = void 0));
    }
    function Vs() {
      Us && (o(Us), (Us = void 0)),
        Hs.length &&
          (function (t) {
            var n,
              r = t.nmt,
              i = t.fmt,
              e = t.cmt,
              u = t.vmt,
              o = [];
            if (r === Jf.iyt) {
              try {
                var a = bf(i);
                if (a === If.kr)
                  n = (function (t, n) {
                    var r = qf(t, n);
                    if (
                      ((t = null),
                      (r.audio && r.audio.GH && 0 !== r.audio.GH.length) || (r.audio = null),
                      r.swt && r.swt.cwt && 0 !== r.swt.cwt.length ? (r.swt.owt = Af.hi) : (r.swt = null),
                      null === r.audio && null === r.swt)
                    )
                      return { fwt: Hu.qp };
                    var i = null;
                    if (r.audio)
                      if ((Of(r.audio, r.audio.GH, r.audio.ywt), r.audio.vwt === aa.Swt || r.audio.vwt === aa.Ewt)) {
                        var e = r.audio.vwt === aa.Ewt,
                          u = !e && n.Ylt;
                        Zf((i = Qu(r.audio, e, u))), to(i), i.Cwt ? (i.vwt = aa.Ewt) : (i.vwt = aa.Swt);
                      } else r.audio.vwt === aa.Dwt && (Zf((i = co(r.audio))), ho(i));
                    return { audio: i, swt: r.swt, fwt: Hu.qp };
                  })(i, u);
                else if (a === If.br) n = Xf(i, u);
                else {
                  if (a !== If.Sw) throw new s("Unknown media format");
                  n = Ps(i, u);
                }
              } catch (t) {
                return xs(e, t, "EMW0064");
              }
              try {
                var f = (function (t, n) {
                  return {
                    audio: t.audio ? fs(t.audio, n) : void 0,
                    video: t.video ? hs(t.video, n) : void 0,
                    swt: t.swt
                      ? ((r = t.swt),
                        {
                          uwt: r.uwt,
                          Ddt: r.Ddt,
                          iw: r.iw,
                          owt: r.owt,
                          hwt: r.hwt,
                          awt: r.awt,
                          cwt: r.cwt.map(us),
                          aw: [],
                        })
                      : void 0,
                    brt: t.brt ? t.brt.map(os) : t.brt,
                    fwt: t.fwt.$k(),
                  };
                  var r;
                })(n, o);
                return es({ Gyt: Qf.eyt, qyt: e, Xyt: f }, o);
              } catch (t) {
                return xs(e, t, "EMW0060");
              }
            }
            xs(e, {}, "EMW0072");
          })(Hs.shift()),
        Gs();
    }
    Bs.addEventListener(
      "message",
      function (t) {
        var n = t.data;
        switch (n.nmt) {
          case Jf.Zwt:
            !(function (t) {
              for (var n = 0; n < t.length; n++) Ws(t[n]);
            })(n.imt);
            break;
          default:
            !(function (t) {
              Hs.push(t);
            })(n);
        }
        Gs();
      },
      !1
    ),
      Bs.postMessage({ Ayt: "3.7.0" });
  })();
})(
  "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : this
);
