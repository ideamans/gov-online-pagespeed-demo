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




 THEOplayer is based on patented technology developed by
 THEO Technologies (https://www.theoplayer.com).

 Version: 2022.3.1 (3.7.0)
 Created: 2022-11-21T09:02:59.012Z
 */
!(function (t) {
  !(function () {
    "use strict";
    var n,
      i = t.window,
      r = t.document,
      e = (t.location, t.navigator),
      u = t.setTimeout,
      o = t.clearTimeout,
      f = t.setInterval,
      s = t.clearInterval,
      c = t.Error,
      h = t.TypeError,
      a = (t.SyntaxError, t.Object),
      v = t.Math,
      l = t.parseInt,
      _ = t.parseFloat,
      d = t.isNaN,
      w = t.Uint8Array;
    t.Worker, t.WorkerGlobalScope, t.XMLHttpRequest;
    function y(t, n) {
      for (var i = 0; i < n.length; i++) {
        var r = n[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          a.defineProperty(t, r.key, r);
      }
    }
    function p(t, n, i) {
      return n && y(t.prototype, n), i && y(t, i), a.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function g(t, n) {
      return (g =
        a.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function m(t, n) {
      (t.prototype = a.create(n.prototype)), (t.prototype.constructor = t), g(t, n);
    }
    !(function (t) {
      (t.l = "web"), (t.g = "android"), (t.I = "android-tv"), (t.R = "ios"), (t.N = "tvos"), (t.C = "chromecast");
    })(n || (n = {}));
    var I = e ? e.userAgent : "",
      k = I.match(/chrome\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/i),
      S = I.match(/Edg\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/i),
      b = I.match(/Android ([0-9\.]+)/i),
      E = I.match(/Windows NT ([0-9\.]+)/i),
      T = I.match(/(Version)\/((\d+)\.(\d+)(?:\.(\d+))?).*Safari/),
      R = I.match(/Firefox\/([0-9\.]+)/i),
      N = I.match(/OPR\/(\d+\.\d+)/i),
      A = I.match(/Tizen ([0-9\.]+)/i),
      D = (function () {
        function i() {
          (this.B = Boolean(
            "ontouchstart" in t || (t.DocumentTouch && r instanceof t.DocumentTouch) || (e && e.msMaxTouchPoints)
          )),
            (this.M = /(mac\sos\sx)\s?([\w\s\.]+\w)*/i.test(I) || /(macintosh|mac(?=_powerpc)\s)/i.test(I)),
            (this.F = /Windows NT/i.test(I)),
            (this.U = E ? _(E[1]) : 0),
            (this.j = /Android/i.test(I)),
            (this.V = b ? _(b[1]) : 0),
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
            (this.vt = S ? l(S[1], 10) : 0),
            (this.dt = Boolean(t.chrome || /Chrome/i.test(I) || /CriOS/i.test(I))),
            (this._t = k ? l(k[1], 10) : 0),
            (this.wt = /SMART-TV.*Tizen/i.test(I)),
            (this.yt = A ? _(A[1]) : 0),
            (this.kt = /webos|web0s/i.test(I)),
            (this.bt = /Edge\/\d+/i.test(I)),
            (this.At = /Trident/i.test(I)),
            (this.Tt = this.At && !t.ActiveXObject && "ActiveXObject" in t),
            (this.St = /Vivaldi/i.test(I)),
            (this.Et = /Firefox/i.test(I) && !/Seamonkey/i.test(I)),
            (this.It = R ? _(R[1]) : 0),
            (this.Rt = /Safari/i.test(I) && !/Chrome/i.test(I) && !this.H && !this.wt),
            (this.Nt = T ? _(T[2]) : 0),
            (this.Ct = Boolean(N)),
            (this.Dt = N ? _(N[1]) : 0),
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
          p(i, [
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
          i
        );
      })();
    D.Vn = new D();
    var O = D.Vn;
    var C = function () {},
      P = !(O.pn && !O.An),
      F = t.console;
    function B(t) {
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
    function M(t) {
      return t.map(B).join(" ");
    }
    function x(t) {
      var n = F && F[t];
      return n
        ? n.bind && P
          ? n.bind(F)
          : function () {
              for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
              F[t](M(i));
            }
        : void 0;
    }
    var L,
      W = x("log") || C,
      U = x("warn") || W.bind(void 0, "WARNING:"),
      V = x("error") || W.bind(void 0, "ERROR:"),
      H = (L = F && F.assert)
        ? L.bind && P
          ? L.bind(F)
          : function (t) {
              for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                i[r - 1] = arguments[r];
              F.assert(t, M(i));
            }
        : function (t) {
            if (!t) {
              for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                i[r - 1] = arguments[r];
              V.apply(void 0, ["Assertion failed:"].concat(i));
            }
          },
      G = null;
    try {
      G = new WebAssembly.Instance(
        new WebAssembly.Module(
          new w([
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
    function j(t, n, i) {
      (this.low = 0 | t), (this.high = 0 | n), (this.unsigned = !!i);
    }
    function z(t) {
      return !0 === (t && t.qn);
    }
    function K(t) {
      var n = v.clz32(t & -t);
      return t ? 31 - n : n;
    }
    j.prototype.qn, a.defineProperty(j.prototype, "qn", { value: !0 }), (j.isLong = z);
    var q = {},
      X = {};
    function Y(t, n) {
      var i, r, e;
      return n
        ? (e = 0 <= (t >>>= 0) && t < 256) && (r = X[t])
          ? r
          : ((i = Z(t, 0, !0)), e && (X[t] = i), i)
        : (e = -128 <= (t |= 0) && t < 128) && (r = q[t])
        ? r
        : ((i = Z(t, t < 0 ? -1 : 0, !1)), e && (q[t] = i), i);
    }
    function $(t, n) {
      if (d(t)) return n ? ot : ut;
      if (n) {
        if (t < 0) return ot;
        if (t >= it) return at;
      } else {
        if (t <= -rt) return vt;
        if (t + 1 >= rt) return ht;
      }
      return t < 0 ? $(-t, n).neg() : Z(t % nt | 0, (t / nt) | 0, n);
    }
    function Z(t, n, i) {
      return new j(t, n, i);
    }
    (j.fromInt = Y), (j.fromNumber = $), (j.fromBits = Z);
    var J = v.pow;
    function Q(t, n, i) {
      if (0 === t.length) throw c("empty string");
      if (
        ("number" == typeof n ? ((i = n), (n = !1)) : (n = !!n),
        "NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
      )
        return n ? ot : ut;
      if ((i = i || 10) < 2 || 36 < i) throw RangeError("radix");
      var r;
      if ((r = t.indexOf("-")) > 0) throw c("interior hyphen");
      if (0 === r) return Q(t.substring(1), n, i).neg();
      for (var e = $(J(i, 8)), u = ut, o = 0; o < t.length; o += 8) {
        var f = v.min(8, t.length - o),
          s = l(t.substring(o, o + f), i);
        if (f < 8) {
          var h = $(J(i, f));
          u = u.mul(h).add($(s));
        } else u = (u = u.mul(e)).add($(s));
      }
      return (u.unsigned = n), u;
    }
    function tt(t, n) {
      return "number" == typeof t
        ? $(t, n)
        : "string" == typeof t
        ? Q(t, n)
        : Z(t.low, t.high, "boolean" == typeof n ? n : t.unsigned);
    }
    (j.fromString = Q), (j.fromValue = tt);
    var nt = 4294967296,
      it = nt * nt,
      rt = it / 2,
      et = Y(1 << 24),
      ut = Y(0);
    j.ZERO = ut;
    var ot = Y(0, !0);
    j.UZERO = ot;
    var ft = Y(1);
    j.ONE = ft;
    var st = Y(1, !0);
    j.UONE = st;
    var ct = Y(-1);
    j.NEG_ONE = ct;
    var ht = Z(-1, 2147483647, !1);
    j.MAX_VALUE = ht;
    var at = Z(-1, -1, !0);
    j.MAX_UNSIGNED_VALUE = at;
    var vt = Z(0, -2147483648, !1);
    j.MIN_VALUE = vt;
    var lt = j.prototype;
    (lt.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (lt.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * nt + (this.low >>> 0) : this.high * nt + (this.low >>> 0);
      }),
      (lt.toString = function (t) {
        if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(vt)) {
            var n = $(t),
              i = this.div(n),
              r = i.mul(n).sub(this);
            return i.toString(t) + r.toInt().toString(t);
          }
          return "-" + this.neg().toString(t);
        }
        for (var e = $(J(t, 6), this.unsigned), u = this, o = ""; ; ) {
          var f = u.div(e),
            s = (u.sub(f.mul(e)).toInt() >>> 0).toString(t);
          if ((u = f).isZero()) return s + o;
          for (; s.length < 6; ) s = "0" + s;
          o = "" + s + o;
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
          z(t) || (t = tt(t)),
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
        if ((z(t) || (t = tt(t)), this.eq(t))) return 0;
        var n = this.isNegative(),
          i = t.isNegative();
        return n && !i
          ? -1
          : !n && i
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
        z(t) || (t = tt(t));
        var n = this.high >>> 16,
          i = 65535 & this.high,
          r = this.low >>> 16,
          e = 65535 & this.low,
          u = t.high >>> 16,
          o = 65535 & t.high,
          f = t.low >>> 16,
          s = 0,
          c = 0,
          h = 0,
          a = 0;
        return (
          (h += (a += e + (65535 & t.low)) >>> 16),
          (c += (h += r + f) >>> 16),
          (s += (c += i + o) >>> 16),
          (s += n + u),
          Z(((h &= 65535) << 16) | (a &= 65535), ((s &= 65535) << 16) | (c &= 65535), this.unsigned)
        );
      }),
      (lt.subtract = function (t) {
        return z(t) || (t = tt(t)), this.add(t.neg());
      }),
      (lt.sub = lt.subtract),
      (lt.multiply = function (t) {
        if (this.isZero()) return this;
        if ((z(t) || (t = tt(t)), G)) return Z(G.mul(this.low, this.high, t.low, t.high), G.get_high(), this.unsigned);
        if (t.isZero()) return this.unsigned ? ot : ut;
        if (this.eq(vt)) return t.isOdd() ? vt : ut;
        if (t.eq(vt)) return this.isOdd() ? vt : ut;
        if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
        if (t.isNegative()) return this.mul(t.neg()).neg();
        if (this.lt(et) && t.lt(et)) return $(this.toNumber() * t.toNumber(), this.unsigned);
        var n = this.high >>> 16,
          i = 65535 & this.high,
          r = this.low >>> 16,
          e = 65535 & this.low,
          u = t.high >>> 16,
          o = 65535 & t.high,
          f = t.low >>> 16,
          s = 65535 & t.low,
          c = 0,
          h = 0,
          a = 0,
          v = 0;
        return (
          (a += (v += e * s) >>> 16),
          (h += (a += r * s) >>> 16),
          (a &= 65535),
          (h += (a += e * f) >>> 16),
          (c += (h += i * s) >>> 16),
          (h &= 65535),
          (c += (h += r * f) >>> 16),
          (h &= 65535),
          (c += (h += e * o) >>> 16),
          (c += n * s + i * f + r * o + e * u),
          Z(((a &= 65535) << 16) | (v &= 65535), ((c &= 65535) << 16) | (h &= 65535), this.unsigned)
        );
      }),
      (lt.mul = lt.multiply),
      (lt.divide = function (t) {
        if ((z(t) || (t = tt(t)), t.isZero())) throw c("division by zero");
        var n, i, r;
        if (G)
          return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high
            ? Z((this.unsigned ? G.div_u : G.div_s)(this.low, this.high, t.low, t.high), G.get_high(), this.unsigned)
            : this;
        if (this.isZero()) return this.unsigned ? ot : ut;
        if (this.unsigned) {
          if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return ot;
          if (t.gt(this.shru(1))) return st;
          r = ot;
        } else {
          if (this.eq(vt))
            return t.eq(ft) || t.eq(ct)
              ? vt
              : t.eq(vt)
              ? ft
              : (n = this.shr(1).div(t).shl(1)).eq(ut)
              ? t.isNegative()
                ? ft
                : ct
              : ((i = this.sub(t.mul(n))), (r = n.add(i.div(t))));
          if (t.eq(vt)) return this.unsigned ? ot : ut;
          if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
          if (t.isNegative()) return this.div(t.neg()).neg();
          r = ut;
        }
        for (i = this; i.gte(t); ) {
          n = v.max(1, v.floor(i.toNumber() / t.toNumber()));
          for (
            var e = v.ceil(v.log(n) / v.LN2), u = e <= 48 ? 1 : J(2, e - 48), o = $(n), f = o.mul(t);
            f.isNegative() || f.gt(i);

          )
            f = (o = $((n -= u), this.unsigned)).mul(t);
          o.isZero() && (o = ft), (r = r.add(o)), (i = i.sub(f));
        }
        return r;
      }),
      (lt.div = lt.divide),
      (lt.modulo = function (t) {
        return (
          z(t) || (t = tt(t)),
          G
            ? Z((this.unsigned ? G.rem_u : G.rem_s)(this.low, this.high, t.low, t.high), G.get_high(), this.unsigned)
            : this.sub(this.div(t).mul(t))
        );
      }),
      (lt.mod = lt.modulo),
      (lt.rem = lt.modulo),
      (lt.not = function () {
        return Z(~this.low, ~this.high, this.unsigned);
      }),
      (lt.countLeadingZeros = function () {
        return this.high ? v.clz32(this.high) : v.clz32(this.low) + 32;
      }),
      (lt.clz = lt.countLeadingZeros),
      (lt.countTrailingZeros = function () {
        return this.low ? K(this.low) : K(this.high) + 32;
      }),
      (lt.ctz = lt.countTrailingZeros),
      (lt.and = function (t) {
        return z(t) || (t = tt(t)), Z(this.low & t.low, this.high & t.high, this.unsigned);
      }),
      (lt.or = function (t) {
        return z(t) || (t = tt(t)), Z(this.low | t.low, this.high | t.high, this.unsigned);
      }),
      (lt.xor = function (t) {
        return z(t) || (t = tt(t)), Z(this.low ^ t.low, this.high ^ t.high, this.unsigned);
      }),
      (lt.shiftLeft = function (t) {
        return (
          z(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? Z(this.low << t, (this.high << t) | (this.low >>> (32 - t)), this.unsigned)
            : Z(0, this.low << (t - 32), this.unsigned)
        );
      }),
      (lt.shl = lt.shiftLeft),
      (lt.shiftRight = function (t) {
        return (
          z(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? Z((this.low >>> t) | (this.high << (32 - t)), this.high >> t, this.unsigned)
            : Z(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (lt.shr = lt.shiftRight),
      (lt.shiftRightUnsigned = function (t) {
        return (
          z(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
            ? Z((this.low >>> t) | (this.high << (32 - t)), this.high >>> t, this.unsigned)
            : Z(32 === t ? this.high : this.high >>> (t - 32), 0, this.unsigned)
        );
      }),
      (lt.shru = lt.shiftRightUnsigned),
      (lt.shr_u = lt.shiftRightUnsigned),
      (lt.rotateLeft = function (t) {
        var n;
        return (
          z(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : 32 === t
            ? Z(this.high, this.low, this.unsigned)
            : t < 32
            ? ((n = 32 - t), Z((this.low << t) | (this.high >>> n), (this.high << t) | (this.low >>> n), this.unsigned))
            : ((n = 32 - (t -= 32)),
              Z((this.high << t) | (this.low >>> n), (this.low << t) | (this.high >>> n), this.unsigned))
        );
      }),
      (lt.rotl = lt.rotateLeft),
      (lt.rotateRight = function (t) {
        var n;
        return (
          z(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : 32 === t
            ? Z(this.high, this.low, this.unsigned)
            : t < 32
            ? ((n = 32 - t), Z((this.high << n) | (this.low >>> t), (this.low << n) | (this.high >>> t), this.unsigned))
            : ((n = 32 - (t -= 32)),
              Z((this.low << n) | (this.high >>> t), (this.high << n) | (this.low >>> t), this.unsigned))
        );
      }),
      (lt.rotr = lt.rotateRight),
      (lt.toSigned = function () {
        return this.unsigned ? Z(this.low, this.high, !1) : this;
      }),
      (lt.toUnsigned = function () {
        return this.unsigned ? this : Z(this.low, this.high, !0);
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
      (j.fromBytes = function (t, n, i) {
        return i ? j.fromBytesLE(t, n) : j.fromBytesBE(t, n);
      }),
      (j.fromBytesLE = function (t, n) {
        return new j(
          t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
          t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
          n
        );
      }),
      (j.fromBytesBE = function (t, n) {
        return new j(
          (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
          (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
          n
        );
      });
    var _t = v.pow(2, -52);
    function dt(t, n) {
      for (var i = t, r = n; 0 !== r; ) {
        var e = i % r;
        (i = r), (r = e);
      }
      return i < 0 ? -i : i;
    }
    function wt() {
      return Date.now() || new Date().getTime();
    }
    var yt;
    j.fromNumber(9007199254740991),
      (function (t) {
        (t[(t.Xn = 1)] = "Xn"),
          (t[(t.Qn = 2)] = "Qn"),
          (t[(t.$n = 3)] = "$n"),
          (t[(t.Yn = 4)] = "Yn"),
          (t[(t.Zn = 9)] = "Zn");
      })(yt || (yt = {}));
    var pt = function () {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      c.apply(this, n);
    };
    (pt.prototype = a.create(c.prototype)).constructor = pt;
    var gt = (function (t) {
        function n(n, i) {
          var r;
          return (
            ((r = t.call(this) || this).cause = void 0),
            (r.message = n || "Unknown error"),
            (r.cause = i),
            c.captureStackTrace &&
              c.captureStackTrace(
                (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(r),
                r.constructor
              ),
            r
          );
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "name",
              get: function () {
                return "BaseError";
              },
            },
          ]),
          n
        );
      })(pt),
      mt = (function (t) {
        function n(n) {
          return t.call(this, "Invalid XML", n) || this;
        }
        return m(n, t), n;
      })(gt),
      It = (function () {
        function t() {}
        return (
          (t.prototype.Kn = function (t) {
            var n,
              i = new DOMParser();
            try {
              n = i.parseFromString(t, "text/xml");
            } catch (t) {
              throw new mt(t);
            }
            if (!n || n.getElementsByTagName("parsererror").length > 0) throw new mt();
            return new Nt(n);
          }),
          t
        );
      })(),
      kt = (function () {
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
          p(t, [
            {
              key: "Gn",
              get: function () {
                return yt.Qn;
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
      St = (function () {
        function t(t) {
          (this._i = void 0), (this.gi = void 0), (this._i = t);
        }
        var n = t.prototype;
        return (
          (n.wi = function (t) {
            return this.Ai.filter(function (n) {
              return At(n) && n.Ti === t;
            });
          }),
          (n.Si = function (t, n) {
            return this.Ai.filter(function (i) {
              return At(i) && i.ri === n && i.ai === t;
            });
          }),
          (n.Ei = function (t) {
            this._i.appendChild(t.Ii), this.gi && this.gi.push(t);
          }),
          (n.ni = function (t) {
            return this._i.isEqualNode(t.Ii);
          }),
          p(t, [
            {
              key: "Ai",
              get: function () {
                return (
                  void 0 === this.gi &&
                    (this.gi = (function (t) {
                      for (var n = [], i = 0; i < t.length; i++) {
                        var r = Dt(t.item(i));
                        r && n.push(r);
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
                return this.Ai.filter(At);
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
      bt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        m(n, t);
        var i = n.prototype;
        return (
          (i.Ni = function (t) {
            if (this._i.hasAttribute(t)) return this._i.getAttribute(t);
          }),
          (i.Ci = function (t, n) {
            if (this._i.hasAttributeNS(t, n)) return this._i.getAttributeNS(t, n);
          }),
          (i.Di = function (t) {
            this._i.removeAttribute(t);
          }),
          (i.Pi = function (t, n) {
            this._i.removeAttributeNS(t, n);
          }),
          (i.Oi = function (t, n) {
            this._i.setAttribute(t, n);
          }),
          (i.xi = function (t, n, i) {
            this._i.setAttributeNS(t, n, i);
          }),
          (i.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          p(n, [
            {
              key: "Gn",
              get: function () {
                return yt.Xn;
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
                  for (var n = [], i = 0; i < t.length; i++) n.push(new kt(t.item(i)));
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
      })(St),
      Et = (function () {
        function t(t) {
          (this._i = void 0), (this._i = t);
        }
        return (
          (t.prototype.ni = function (t) {
            return this.Li === t.Li;
          }),
          p(t, [
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
      Tt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          m(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          p(n, [
            {
              key: "Gn",
              get: function () {
                return yt.$n;
              },
            },
          ]),
          n
        );
      })(Et),
      Rt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          m(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          p(n, [
            {
              key: "Gn",
              get: function () {
                return yt.Yn;
              },
            },
          ]),
          n
        );
      })(Et),
      Nt = (function (t) {
        function n(n) {
          return t.call(this, n) || this;
        }
        return (
          m(n, t),
          (n.prototype.ei = function (t) {
            return new n(this._i.cloneNode(t));
          }),
          p(n, [
            {
              key: "Gn",
              get: function () {
                return yt.Zn;
              },
            },
            {
              key: "Fi",
              get: function () {
                return new bt(this._i.documentElement);
              },
            },
          ]),
          n
        );
      })(St);
    function At(t) {
      return (function (t) {
        return t.Gn === yt.Xn;
      })(t);
    }
    function Dt(t) {
      switch (t.nodeType) {
        case yt.Xn:
          return new bt(t);
        case yt.$n:
          return new Tt(t);
        case yt.Yn:
          return new Rt(t);
      }
    }
    function Ot(t) {
      var n = t.indexOf(":");
      return n < 0 ? t : t.substr(n + 1);
    }
    function Ct(t, n) {
      for (var i = 0; i < n.length; i++) {
        var r = n[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          a.defineProperty(t, r.key, r);
      }
    }
    function Pt(t, n) {
      var i = (function (t, n) {
        var i = t.length;
        if (i <= 1) return t;
        for (var r = new Array(i), e = 1; e < i; e *= 2) {
          Ft(t, n, e, r);
          var u = t;
          (t = r), (r = u);
        }
        return t;
      })(t, n);
      return i !== t && Ft(i, null, t.length, t), t;
    }
    function Ft(t, n, i, r) {
      var e,
        u,
        o,
        f,
        s,
        c = t.length,
        h = 0,
        a = 2 * i;
      for (e = 0; e < c; e += a)
        for (o = (u = e + i) + i, u > c && (u = c), o > c && (o = c), f = e, s = u; ; )
          if (f < u && s < o) n(t[f], t[s]) <= 0 ? (r[h++] = t[f++]) : (r[h++] = t[s++]);
          else if (f < u) r[h++] = t[f++];
          else {
            if (!(s < o)) break;
            r[h++] = t[s++];
          }
    }
    var Bt = /[a-zA-Z]/,
      Mt = /[0-9]/,
      xt = /[0-9a-fA-F]/,
      Lt = /^0x/i,
      Wt = /^[0-9]+$/,
      Ut = /^[0-9a-fA-F]+$/,
      Vt = /^[0-7]+$/,
      Ht = a.prototype.toString,
      Gt =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Ht.call(t);
        },
      jt = "undefined" != typeof Symbol && "symbol" == typeof Symbol.iterator;
    function zt(t) {
      return Gt(t) ? t : Array.from(t);
    }
    function Kt(t) {
      return t >= 65 && t <= 90;
    }
    function qt(t) {
      return (
        Kt(t) ||
        (function (t) {
          return t >= 97 && t <= 122;
        })(t)
      );
    }
    function Xt(t) {
      return t >= 48 && t <= 57;
    }
    function Yt(t) {
      return Xt(t) || qt(t);
    }
    function $t(t) {
      return Xt(t) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
    }
    function Zt(t) {
      return Kt(t) ? t + 32 : t;
    }
    function Jt(t) {
      return Xt(t) ? t - 48 : t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : -1;
    }
    function Qt(t, n) {
      return void 0 === n && (n = !1), 0 <= t && t <= 9 ? t + 48 : 10 <= t && t <= 15 ? t + (n ? 87 : 55) : -1;
    }
    var tn = v.min,
      nn = String.fromCharCode,
      rn = 16384;
    function en(t) {
      for (var n = t.length, i = [], r = 0; r < n; r += rn) {
        var e = tn(r + rn, n);
        i.push(nn.apply(null, t.slice(r, e)));
      }
      return i.join("");
    }
    var un = /[^\0-\x7E]/,
      on = /[\x2E\u3002\uFF0E\uFF61]/g,
      fn = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      sn = v.floor,
      cn = String.fromCharCode;
    function hn(t) {
      throw new RangeError(fn[t]);
    }
    function an(t) {
      for (var n = [], i = 0, r = t.length; i < r; ) {
        var e = t.charCodeAt(i++);
        if (e >= 55296 && e <= 56319 && i < r) {
          var u = t.charCodeAt(i++);
          56320 == (64512 & u) ? n.push(((1023 & e) << 10) + (1023 & u) + 65536) : (n.push(e), i--);
        } else n.push(e);
      }
      return n;
    }
    var vn,
      ln,
      _n,
      dn = function (t, n) {
        return t + 22 + 75 * (t < 26) - ((0 != n) << 5);
      },
      wn = function (t, n, i) {
        var r = 0;
        for (t = i ? sn(t / 700) : t >> 1, t += sn(t / n); t > 455; r += 36) t = sn(t / 35);
        return sn(r + (36 * t) / (t + 38));
      },
      yn = function (t) {
        return (function (t, n) {
          var i = t.split("@"),
            r = "";
          i.length > 1 && ((r = i[0] + "@"), (t = i[1]));
          var e = (function (t, n) {
            for (var i = [], r = t.length; r--; ) i[r] = n(t[r]);
            return i;
          })((t = t.replace(on, ".")).split("."), n).join(".");
          return r + e;
        })(t, function (t) {
          return un.test(t)
            ? "xn--" +
                (function (t) {
                  for (var n = [], i = (t = an(t)).length, r = 128, e = 0, u = 72, o = 0, f = t; o < f.length; o++) {
                    var s = f[o];
                    s < 128 && n.push(cn(s));
                  }
                  var c = n.length,
                    h = c;
                  for (c && n.push("-"); h < i; ) {
                    for (var a = 2147483647, v = 0, l = t; v < l.length; v++) {
                      var _ = l[v];
                      _ >= r && _ < a && (a = _);
                    }
                    var d = h + 1;
                    a - r > sn((2147483647 - e) / d) && hn("overflow"), (e += (a - r) * d), (r = a);
                    for (var w = 0, y = t; w < y.length; w++) {
                      var p = y[w];
                      if ((p < r && ++e > 2147483647 && hn("overflow"), p == r)) {
                        for (var g = e, m = 36; ; m += 36) {
                          var I = m <= u ? 1 : m >= u + 26 ? 26 : m - u;
                          if (g < I) break;
                          var k = g - I,
                            S = 36 - I;
                          n.push(cn(dn(I + (k % S), 0))), (g = sn(k / S));
                        }
                        n.push(cn(dn(g, 0))), (u = wn(e, d, h == c)), (e = 0), ++h;
                      }
                    }
                    ++e, ++r;
                  }
                  return n.join("");
                })(t)
            : t;
        });
      };
    function pn(t) {
      for (var n = [], i = 0; i < t.length; i++) {
        var r = t[i];
        r > 65535 && ((r -= 65536), n.push(((r >>> 10) & 1023) | 55296), (r = 56320 | (1023 & r))), n.push(r);
      }
      return en(n);
    }
    function gn(t) {
      if (t >= 55296 && t <= 57343)
        throw new c("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
    }
    function mn(t, n) {
      return ((t >> n) & 63) | 128;
    }
    function In(t, n) {
      0 != (4294967168 & t)
        ? (0 == (4294965248 & t)
            ? n.push(((t >> 6) & 31) | 192)
            : 0 == (4294901760 & t)
            ? (gn(t), n.push(((t >> 12) & 15) | 224), n.push(mn(t, 6)))
            : 0 == (4292870144 & t) && (n.push(((t >> 18) & 7) | 240), n.push(mn(t, 12)), n.push(mn(t, 6))),
          n.push((63 & t) | 128))
        : n.push(t);
    }
    function kn(t) {
      for (var n = [], i = 0; i < t.length; i++) {
        In(t[i], n);
      }
      return n;
    }
    function Sn() {
      if (_n >= ln) throw new c("Invalid byte index");
      var t = 255 & vn[_n];
      if ((_n++, 128 == (192 & t))) return 63 & t;
      throw new c("Invalid continuation byte");
    }
    function bn() {
      var t, n;
      if (_n > ln) throw new c("Invalid byte index");
      if (_n === ln) return !1;
      if (((t = 255 & vn[_n]), _n++, 0 == (128 & t))) return t;
      if (192 == (224 & t)) {
        if ((n = ((31 & t) << 6) | Sn()) >= 128) return n;
        throw new c("Invalid continuation byte");
      }
      if (224 == (240 & t)) {
        if ((n = ((15 & t) << 12) | (Sn() << 6) | Sn()) >= 2048) return gn(n), n;
        throw new c("Invalid continuation byte");
      }
      if (240 == (248 & t) && (n = ((7 & t) << 18) | (Sn() << 12) | (Sn() << 6) | Sn()) >= 65536 && n <= 1114111)
        return n;
      throw new c("Invalid UTF-8 detected");
    }
    function En(t) {
      return [37, Qt(t >> 4), Qt(15 & t)];
    }
    function Tn(t) {
      return (
        (function (t) {
          return t >= 0 && t <= 31;
        })(t) || t > 126
      );
    }
    function Rn(t) {
      return Tn(t) || 32 === t || 34 === t || 60 === t || 62 === t || 96 === t;
    }
    function Nn(t) {
      return Rn(t) || 35 === t || 63 === t || 123 === t || 125 === t;
    }
    function An(t) {
      return Nn(t) || 47 === t || 58 === t || 59 === t || 61 === t || 64 === t || (t >= 91 && t <= 94) || 124 === t;
    }
    function Dn(t) {
      return t < 33 || t > 126 || 34 === t || 35 === t || 60 === t || 62 === t;
    }
    function On(t) {
      return Dn(t) || 39 === t;
    }
    function Cn(t, n) {
      if (!n(t)) return [t];
      for (var i = kn([t]), r = [], e = 0; e < i.length; e++) {
        var u = i[e];
        r.push.apply(r, En(u));
      }
      return r;
    }
    function Pn(t, n) {
      for (var i = [], r = 0, e = an(t); r < e.length; r++) {
        var u = e[r];
        i.push.apply(i, Cn(u, n));
      }
      return pn(i);
    }
    function Fn(t) {
      return (function (t) {
        for (var n = [], i = t.length, r = 0; r < i; r++) {
          var e = t[r];
          if (37 === e && r + 2 < i && $t(t[r + 1]) && $t(t[r + 2])) {
            var u = (Jt(t[r + 1]) << 4) | Jt(t[r + 2]);
            n.push(u), (r += 2);
          } else n.push(e);
        }
        return n;
      })(kn(t));
    }
    function Bn(t) {
      return pn(
        (function (t) {
          (vn = t.slice()), (ln = vn.length), (_n = 0);
          for (var n, i = []; !1 !== (n = bn()); ) i.push(n);
          return i;
        })(Fn(an(t)))
      );
    }
    function Mn(t) {
      var n,
        i,
        r,
        e,
        u = t.length,
        o = [0, 0, 0, 0, 0, 0, 0, 0],
        f = 0,
        s = null,
        c = 0;
      if (c < u && ":" === t[c]) {
        if (!(c + 1 < u && ":" === t[c + 1])) throw new h();
        (c += 2), (s = f += 1);
      }
      for (; c < u; ) {
        if (8 === f) throw new h("Too many groups");
        if (":" !== t[c]) {
          for (var a = 0, v = 0; v < 4 && c < u && xt.test(t[c]); ) (a = (a << 4) | l(t[c], 16)), (c += 1), (v += 1);
          if ("." === t[c]) {
            if (0 === v) throw new h();
            if (((c -= v), f > 6)) throw new h();
            for (var _ = 0; c < u; ) {
              var d = null;
              if (_ > 0) {
                if (!("." === t[c] && _ < 4)) throw new h();
                c += 1;
              }
              if (!Mt.test(t[c])) throw new h();
              for (; c < u && Mt.test(t[c]); ) {
                var w = l(t[c], 10);
                if (null === d) d = w;
                else {
                  if (0 === d) throw new h();
                  if ((d = 10 * d + w) > 255) throw new h();
                }
                c += 1;
              }
              (o[f] = (o[f] << 8) | d), (2 !== (_ += 1) && 4 !== _) || (f += 1);
            }
            if (4 !== _) throw new h();
            break;
          }
          if (":" === t[c]) {
            if ((c += 1) === u) throw new h();
          } else if (c < u) throw new h();
          (o[f] = a), (f += 1);
        } else {
          if (null !== s) throw new h("Too many :: groups");
          (c += 1), (s = f += 1);
        }
      }
      if (null !== s) {
        var y = f - s;
        for (f = 7; 0 !== f && y > 0; )
          (r = s + y - 1), (e = void 0), (e = (n = o)[(i = f)]), (n[i] = n[r]), (n[r] = e), (f -= 1), (y -= 1);
      } else if (8 !== f) throw new h();
      return o;
    }
    function xn(t) {
      var n = 10,
        i = Wt;
      return (
        Lt.test(t)
          ? ((t = t.slice(2)), (n = 16), (i = Ut))
          : t.length >= 2 && "0" === t[0] && ((t = t.slice(1)), (n = 8), (i = Vt)),
        "" === t ? 0 : i.test(t) ? l(t, n) : void 0
      );
    }
    var Ln = { Ui: 4 },
      Wn = /[\0\t\n\r #%/:?@\[\\\]]/,
      Un = /[\0\t\n\r #/:?@\[\\\]]/;
    function Vn(t, n) {
      if ("[" === t[0]) {
        if ("]" !== t[t.length - 1]) throw new h("Invalid IPv6 address");
        return { Ui: 2, ji: Mn(t.slice(1, -1)) };
      }
      if (!n)
        return (function (t) {
          if (Un.test(t)) throw new h("Invalid code point in opaque host");
          var n = Pn(t, Tn);
          return "" === n ? Ln : { Ui: 3, Vi: n };
        })(t);
      var i = (function (t) {
        return (function (t) {
          return yn(t.toLowerCase());
        })(t);
      })(Bn(t));
      if (Wn.test(i)) throw new h("Invalid code point in host");
      var r = (function (t) {
        var n = t.split(".");
        if (("" === n[n.length - 1] && n.pop(), !(n.length > 4))) {
          for (var i = [], r = 0; r < n.length; r++) {
            var e = n[r];
            if ("" === e) return;
            var u = xn(e);
            if (void 0 === u) return;
            i.push(u);
          }
          for (var o = 0; o < i.length - 1; o++) if (i[o] > 255) throw new h();
          if (i[i.length - 1] >= v.pow(256, 5 - i.length)) throw new h();
          for (var f = i.pop(), s = 0; s < i.length; s++) f += i[s] * v.pow(256, 3 - s);
          return f;
        }
      })(i);
      return void 0 !== r ? { Ui: 1, ji: r } : "" === i ? Ln : { Ui: 0, zi: i };
    }
    function Hn(t) {
      switch (t.Ui) {
        case 0:
          return t.zi;
        case 1:
          return (function (t) {
            for (var n = [], i = t, r = 1; r <= 4; r++) n.push("" + (255 & i)), 4 !== r && n.push("."), (i >>>= 8);
            return n.reverse().join("");
          })(t.ji);
        case 2:
          return (
            "[" +
            (function (t) {
              for (
                var n = "",
                  i = (function (t) {
                    for (var n = 0, i = 0, r = 0, e = 0, u = 0; u < 8; u++)
                      0 === t[u] ? (0 === e && (r = u), e++) : (e > i && ((n = r), (i = e)), (e = 0));
                    return e > i && ((n = r), (i = e)), i > 1 ? n : null;
                  })(t),
                  r = !1,
                  e = 0;
                e < 8;
                e++
              ) {
                if (r) {
                  if (0 === t[e]) continue;
                  r = !1;
                }
                i !== e ? ((n += t[e].toString(16)), 7 !== e && (n += ":")) : ((n += 0 === e ? "::" : ":"), (r = !0));
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
    var Gn = /\+/g;
    function jn(t) {
      for (var n = t.split("&"), i = [], r = 0; r < n.length; r++) {
        var e = n[r];
        if ("" !== e) {
          var u = e.indexOf("="),
            o = void 0,
            f = void 0;
          -1 !== u ? ((o = e.slice(0, u)), (f = e.slice(u + 1))) : ((o = e), (f = "")),
            (o = o.replace(Gn, " ")),
            (f = f.replace(Gn, " "));
          var s = Bn(o),
            c = Bn(f);
          i.push([s, c]);
        }
      }
      return i;
    }
    function zn(t) {
      for (var n = "", i = 0; i < t.length; i++) {
        var r = t[i];
        i > 0 && (n += "&"), (n += Kn(kn(an(r[0]))) + "=" + Kn(kn(an(r[1]))));
      }
      return n;
    }
    function Kn(t) {
      for (var n, i = [], r = 0; r < t.length; r++) {
        var e = t[r];
        32 === e
          ? i.push(43)
          : 42 === (n = e) || 45 === n || 46 === n || 95 === n || Yt(n)
          ? i.push(e)
          : i.push.apply(i, En(e));
      }
      return en(i);
    }
    var qn = /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/;
    function Xn(t) {
      var n = "" + t,
        i = qn.exec(n);
      return i
        ? (function (t, n) {
            for (var i = t.length, r = [], e = n; e < i; e++) {
              var u = t.charCodeAt(e);
              if ($n(u))
                if (Zn(u) || e === i - 1) r.push(Yn);
                else {
                  var o = t.charCodeAt(e + 1);
                  Zn(o) ? (r.push(u, o), e++) : r.push(Yn);
                }
              else r.push(u);
            }
            return t.slice(0, n) + en(r);
          })(n, i.index)
        : n;
    }
    var Yn = 65533,
      $n = function (t) {
        return 55296 == (63488 & t);
      },
      Zn = function (t) {
        return 0 != (1024 & t);
      };
    function Jn(t, n) {
      var i = t[0],
        r = n[0];
      return i === r ? 0 : i < r ? -1 : 1;
    }
    function Qn(t) {
      t.Hi.length = 0;
    }
    function ti(t, n) {
      !(function (t, n) {
        for (var i = 0; i < n.length; i++) t[i] = n[i];
        t.length = n.length;
      })(t.Hi, jn(n));
    }
    function ni(t) {
      if (t.Wi) {
        var n = zn(t.Hi);
        "" === n && (n = null), (t.Wi.Wi.qi = n);
      }
    }
    function ii(t) {
      return t instanceof ri && !!Gt(t.Hi) && (!jt || t[Symbol.iterator] === ei);
    }
    var ri = (function () {
        function t(t) {
          if ((void 0 === t && (t = void 0), (this.Wi = null), null == t)) this.Hi = [];
          else if ("object" == typeof t || "function" == typeof t)
            if (ii(t)) this.Hi = t.Hi.slice();
            else if (null != (u = t) && (Gt(u) || (jt && "function" == typeof u[Symbol.iterator]))) {
              this.Hi = [];
              for (var n = 0, i = zt(t); n < i.length; n++) {
                var r = zt(i[n]);
                if (2 !== r.length) throw new h("Invalid name-value pair");
                this.Hi.push([Xn(r[0]), Xn(r[1])]);
              }
            } else
              for (var e in ((this.Hi = []), t))
                a.prototype.hasOwnProperty.call(t, e) && this.Hi.push([Xn(e), Xn(t[e])]);
          else (t = Xn(t)).length > 0 && "?" === t[0] && (t = t.slice(1)), (this.Hi = jn(t));
          var u;
        }
        var n = t.prototype;
        return (
          (n.append = function (t, n) {
            (t = Xn(t)), (n = Xn(n)), this.Hi.push([t, n]), ni(this);
          }),
          (n.delete = function (t) {
            t = Xn(t);
            for (var n = this.Hi, i = 0; i < n.length; ) {
              n[i][0] === t ? n.splice(i, 1) : i++;
            }
            ni(this);
          }),
          (n.get = function (t) {
            t = Xn(t);
            for (var n = this.Hi, i = 0; i < n.length; i++) {
              var r = n[i];
              if (r[0] === t) return r[1];
            }
            return null;
          }),
          (n.getAll = function (t) {
            t = Xn(t);
            for (var n = this.Hi, i = [], r = 0; r < n.length; r++) {
              var e = n[r];
              e[0] === t && i.push(e[1]);
            }
            return i;
          }),
          (n.has = function (t) {
            t = Xn(t);
            for (var n = this.Hi, i = 0; i < n.length; i++) {
              if (n[i][0] === t) return !0;
            }
            return !1;
          }),
          (n.set = function (t, n) {
            (t = Xn(t)), (n = Xn(n));
            for (var i = this.Hi, r = !1, e = 0; e < i.length; ) {
              var u = i[e];
              u[0] === t ? (r ? i.splice(e, 1) : ((u[1] = n), (r = !0), e++)) : e++;
            }
            r || i.push([t, n]), ni(this);
          }),
          (n.sort = function () {
            Pt(this.Hi, Jn), ni(this);
          }),
          (n.toString = function () {
            return zn(this.Hi);
          }),
          (n.entries = function () {
            return new si(this.Hi, ui);
          }),
          (n.keys = function () {
            return new si(this.Hi, oi);
          }),
          (n.values = function () {
            return new si(this.Hi, fi);
          }),
          (n.forEach = function (t) {
            var n = this;
            this.Hi.forEach(function (i) {
              return t(i[1], i[0], n);
            });
          }),
          t
        );
      })(),
      ei = ri.prototype.entries;
    jt && (ri.prototype[Symbol.iterator] = ei);
    var ui = function (t) {
        return [t[0], t[1]];
      },
      oi = function (t) {
        return t[0];
      },
      fi = function (t) {
        return t[1];
      },
      si = (function () {
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
      ci = "null";
    var hi = a.create(null);
    (hi.ftp = 21), (hi.file = 0), (hi.gopher = 70), (hi.http = 80), (hi.https = 443), (hi.ws = 80), (hi.wss = 443);
    var ai = /^(?:\.|%2e)$/i,
      vi = /^(?:\.|%2e){2}$/i;
    function li(t) {
      return ai.test(t);
    }
    function _i(t) {
      return vi.test(t);
    }
    function di(t) {
      return void 0 !== hi[t];
    }
    function wi(t) {
      return di(t.$i);
    }
    function yi(t) {
      return "" !== t.Qi || "" !== t.Yi;
    }
    function pi(t) {
      var n = t.length;
      if (!(n >= 2)) return !1;
      if (!mi(t.slice(0, 2))) return !1;
      if (2 !== n) {
        var i = t[2];
        if (47 !== i && 92 !== i && 63 !== i && 35 !== i) return !1;
      }
      return !0;
    }
    function gi(t) {
      return 2 === t.length && Bt.test(t[0]) && (":" === t[1] || "|" === t[1]);
    }
    function mi(t) {
      return 2 === t.length && gi(en(t));
    }
    function Ii(t) {
      return gi(t) && ":" === t[1];
    }
    function ki(t) {
      var n = t.Zi;
      0 !== n.length && (("file" === t.$i && 1 === n.length && Ii(n[0])) || n.pop());
    }
    function Si(t) {
      return null === t.Ki || Ln === t.Ki || t.Ji || "file" === t.$i;
    }
    var bi = -1,
      Ei = /\t|\n|\r/g,
      Ti = /^[\x00-\x1f ]+|[\x00-\x1f ]+$/g;
    function Ri(t, n, i, r) {
      void 0 === i && (i = null), void 0 === r && (r = null), i || ((i = new Ai()), (t = t.replace(Ti, "")));
      var e = null !== r ? r : 0;
      n = n || null;
      for (var u = [], o = !1, f = !1, s = !1, c = an((t = t.replace(Ei, ""))), a = c.length, v = 0; v <= a; ) {
        var _ = v < a ? c[v] : bi;
        switch (e) {
          case 0:
            if (!qt(_)) {
              if (null === r) {
                (u.length = 0), (e = 2);
                continue;
              }
              throw new h("Invalid scheme");
            }
            u.push(Zt(_)), (e = 1);
            break;
          case 1:
            if (Yt(_) || 43 === _ || 45 === _ || 46 === _) u.push(Zt(_));
            else {
              if (58 !== _) {
                if (null === r) {
                  (u.length = 0), (e = 2), (v = 0);
                  continue;
                }
                throw new h("Invalid scheme");
              }
              var d = pn(u);
              if (null !== r) {
                if (di(i.$i) && !di(d)) return;
                if (!di(i.$i) && di(d)) return;
                if ((yi(i) || null !== i.re) && "file" === d) return;
                if ("file" === i.$i && (i.Ki === Ln || null === i.Ki)) return;
              }
              if (((i.$i = d), null !== r)) return void (wi(i) && i.re === hi[i.$i] && (i.re = null));
              (u.length = 0),
                "file" === i.$i
                  ? (e = 13)
                  : wi(i) && n && n.$i === i.$i
                  ? (e = 3)
                  : wi(i)
                  ? (e = 7)
                  : 47 === c[v + 1]
                  ? ((e = 4), (v += 1))
                  : ((i.Ji = !0), i.Zi.push(""), (e = 18));
            }
            break;
          case 2:
            if (!n || (n.Ji && 35 !== _)) throw new h("Invalid scheme");
            n.Ji && 35 === _
              ? ((i.$i = n.$i), (i.Zi = n.Zi.slice()), (i.qi = n.qi), (i.ue = ""), (i.Ji = !0), (e = 20))
              : "file" !== n.$i
              ? ((e = 5), (v -= 1))
              : ((e = 13), (v -= 1));
            break;
          case 3:
            47 === _ && 47 === c[v + 1] ? (e = 8) : ((e = 5), (v -= 1));
            break;
          case 4:
            47 === _ ? (e = 9) : ((e = 17), (v -= 1));
            break;
          case 5:
            (i.$i = n.$i),
              bi === _
                ? ((i.Qi = n.Qi), (i.Yi = n.Yi), (i.Ki = n.Ki), (i.re = n.re), (i.Zi = n.Zi.slice()), (i.qi = n.qi))
                : 47 === _
                ? (e = 6)
                : 63 === _
                ? ((i.Qi = n.Qi),
                  (i.Yi = n.Yi),
                  (i.Ki = n.Ki),
                  (i.re = n.re),
                  (i.Zi = n.Zi.slice()),
                  (i.qi = ""),
                  (e = 19))
                : 35 === _
                ? ((i.Qi = n.Qi),
                  (i.Yi = n.Yi),
                  (i.Ki = n.Ki),
                  (i.re = n.re),
                  (i.Zi = n.Zi.slice()),
                  (i.qi = n.qi),
                  (i.ue = ""),
                  (e = 20))
                : 92 === _ && wi(i)
                ? (e = 6)
                : ((i.Qi = n.Qi),
                  (i.Yi = n.Yi),
                  (i.Ki = n.Ki),
                  (i.re = n.re),
                  (i.Zi = n.Zi.slice()),
                  i.Zi.pop(),
                  (e = 17),
                  (v -= 1));
            break;
          case 6:
            !wi(i) || (47 !== _ && 92 !== _)
              ? 47 === _
                ? (e = 9)
                : ((i.Qi = n.Qi), (i.Yi = n.Yi), (i.Ki = n.Ki), (i.re = n.re), (e = 17), (v -= 1))
              : (e = 8);
            break;
          case 7:
            if (47 !== _ || 47 !== c[v + 1]) {
              e = 8;
              continue;
            }
            (e = 8), (v += 1);
            break;
          case 8:
            47 !== _ && 92 !== _ && ((e = 9), (v -= 1));
            break;
          case 9:
            if (64 === _) {
              o && u.unshift(37, 52, 48), (o = !0);
              for (var w = 0; w < u.length; w++) {
                var y = u[w];
                if (58 !== y || s) {
                  var p = pn(Cn(y, An));
                  s ? (i.Yi += p) : (i.Qi += p);
                } else s = !0;
              }
              u.length = 0;
            } else if (bi === _ || 47 === _ || 63 === _ || 35 === _ || (wi(i) && 92 === _)) {
              if (o && 0 === u.length) throw new h("Invalid host");
              (v -= u.length + 1), (u.length = 0), (e = 10);
            } else u.push(_);
            break;
          case 10:
          case 11:
            if (null !== r && "file" === i.$i) (v -= 1), (e = 15);
            else if (58 !== _ || f)
              if (bi === _ || 47 === _ || 63 === _ || 35 === _ || (wi(i) && 92 === _)) {
                if (((v -= 1), wi(i) && 0 === u.length)) throw new h("Invalid host");
                if (null !== r && 0 === u.length && (yi(i) || null !== i.re)) return;
                var g = Vn(pn(u), wi(i));
                if (((i.Ki = g), (u.length = 0), (e = 16), null !== r)) return;
              } else 91 === _ ? (f = !0) : 93 === _ && (f = !1), u.push(_);
            else {
              if (0 === u.length) throw new h("Invalid host");
              var m = Vn(pn(u), wi(i));
              if (((i.Ki = m), (u.length = 0), (e = 12), 11 === r)) return;
            }
            break;
          case 12:
            if (Xt(_)) u.push(_);
            else {
              if (!(bi === _ || 47 === _ || 63 === _ || 35 === _ || (wi(i) && 92 === _) || null !== r))
                throw new h("Invalid port");
              if (0 !== u.length) {
                var I = l(pn(u), 10);
                if (I > 65535) throw new h("Invalid port");
                (i.re = I === hi[i.$i] ? null : I), (u.length = 0);
              }
              if (null !== r) return;
              (e = 16), (v -= 1);
            }
            break;
          case 13:
            (i.$i = "file"),
              47 === _ || 92 === _
                ? (e = 14)
                : n && "file" === n.$i
                ? bi === _
                  ? ((i.Ki = n.Ki), (i.Zi = n.Zi.slice()), (i.qi = n.qi))
                  : 63 === _
                  ? ((i.Ki = n.Ki), (i.Zi = n.Zi.slice()), (i.qi = ""), (e = 19))
                  : 35 === _
                  ? ((i.Ki = n.Ki), (i.Zi = n.Zi.slice()), (i.qi = n.qi), (i.ue = ""), (e = 20))
                  : (pi(c.slice(v)) || ((i.Ki = n.Ki), (i.Zi = n.Zi.slice()), ki(i)), (e = 17), (v -= 1))
                : ((e = 17), (v -= 1));
            break;
          case 14:
            47 === _ || 92 === _
              ? (e = 15)
              : (n && "file" === n.$i && !pi(c.slice(v)) && (Ii(n.Zi[0]) ? i.Zi.push(n.Zi[0]) : (i.Ki = n.Ki)),
                (e = 17),
                (v -= 1));
            break;
          case 15:
            if (bi === _ || 47 === _ || 92 === _ || 63 === _ || 35 === _)
              if (((v -= 1), null === r && mi(u))) e = 17;
              else if (0 === u.length) {
                if (((i.Ki = Ln), null !== r)) return;
                e = 16;
              } else {
                var k = Vn(pn(u), wi(i));
                if ((0 === k.Ui && "localhost" === k.zi && (k = Ln), (i.Ki = k), null !== r)) return;
                (u.length = 0), (e = 16);
              }
            else u.push(_);
            break;
          case 16:
            wi(i)
              ? ((e = 17), 47 !== _ && 92 !== _ && (v -= 1))
              : null === r && 63 === _
              ? ((i.qi = ""), (e = 19))
              : null === r && 35 === _
              ? ((i.ue = ""), (e = 20))
              : bi !== _ && ((e = 17), 47 !== _ && (v -= 1));
            break;
          case 17:
            if (bi === _ || 47 === _ || (wi(i) && 92 === _) || (null === r && (63 === _ || 35 === _))) {
              var S = pn(u);
              if (
                (_i(S)
                  ? (ki(i), 47 === _ || (wi(i) && 92 === _) || i.Zi.push(""))
                  : !li(S) || 47 === _ || (wi(i) && 92 === _)
                  ? li(S) ||
                    ("file" === i.$i &&
                      0 === i.Zi.length &&
                      mi(u) &&
                      (Ln !== i.Ki && null !== i.Ki && (i.Ki = Ln), (u[1] = 58), (S = pn(u))),
                    i.Zi.push(S))
                  : i.Zi.push(""),
                (u.length = 0),
                "file" === i.$i && (bi === _ || 63 === _ || 35 === _))
              )
                for (; i.Zi.length > 1 && "" === i.Zi[0]; ) i.Zi.shift();
              63 === _ ? ((i.qi = ""), (e = 19)) : 35 === _ && ((i.ue = ""), (e = 20));
            } else u.push.apply(u, Cn(_, Nn));
            break;
          case 18:
            63 === _
              ? ((i.qi = ""), (e = 19))
              : 35 === _
              ? ((i.ue = ""), (e = 20))
              : bi !== _ && (i.Zi[0] += pn(Cn(_, Tn)));
            break;
          case 19:
            null === r && 35 === _ ? ((i.ue = ""), (e = 20)) : bi !== _ && (i.qi += pn(Cn(_, wi(i) ? On : Dn)));
            break;
          case 20:
            bi === _ || 0 === _ || (i.ue += pn(Cn(_, Rn)));
        }
        v++;
      }
      return i;
    }
    function Ni(t, n, i, r) {
      try {
        Ri(t, n, i, r);
      } catch (t) {}
    }
    var Ai = function () {
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
    function Di(t) {
      switch (t.$i) {
        case "blob":
          var n;
          try {
            n = Ri(t.Zi[0], null);
          } catch (t) {
            return ci;
          }
          return Di(n);
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return (i = t.$i), (r = t.Ki), (e = t.re), i + "://" + Hn(r) + (null === e ? "" : ":" + e);
        case "file":
        default:
          return ci;
      }
      var i, r, e;
    }
    function Oi(t) {
      return null != t && t instanceof Ci && "object" == typeof t.Wi;
    }
    var Ci = (function () {
      function t(t, n) {
        var i,
          r = null;
        if (null != n)
          if (Oi(n)) r = n.Wi;
          else
            try {
              r = Ri(String(n), null);
            } catch (t) {
              throw new h("Invalid base URL: " + t.message);
            }
        try {
          i = Ri(String(t), r);
        } catch (t) {
          throw new h("Invalid URL: " + t.message);
        }
        var e = i.qi;
        (this.Wi = i),
          (this.qi = (function (t) {
            var n = new ri();
            return null !== t && ti(n, t), n;
          })(e)),
          (this.qi.Wi = this);
      }
      var n,
        i,
        r,
        e = t.prototype;
      return (
        (e.toString = function () {
          return this.href;
        }),
        (e.toJSON = function () {
          return this.href;
        }),
        (n = t),
        (i = [
          {
            key: "href",
            get: function () {
              return (function (t, n) {
                void 0 === n && (n = !1);
                var i = t.$i + ":";
                if (
                  (null !== t.Ki
                    ? ((i += "//"),
                      yi(t) && ((i += t.Qi), "" !== t.Yi && (i += ":" + t.Yi), (i += "@")),
                      (i += Hn(t.Ki)),
                      null !== t.re && (i += ":" + t.re))
                    : null === t.Ki && "file" === t.$i && (i += "//"),
                  t.Ji)
                )
                  i += t.Zi[0];
                else for (var r = 0, e = t.Zi; r < e.length; r++) i += "/" + e[r];
                return null !== t.qi && (i += "?" + t.qi), n || null === t.ue || (i += "#" + t.ue), i;
              })(this.Wi);
            },
            set: function (t) {
              var n;
              try {
                n = Ri(String(t), null);
              } catch (t) {
                throw new h("Invalid URL: " + t.message);
              }
              (this.Wi = n), Qn(this.qi);
              var i = this.Wi.qi;
              null !== i && ti(this.qi, i);
            },
          },
          {
            key: "origin",
            get: function () {
              return Di(this.Wi);
            },
          },
          {
            key: "protocol",
            get: function () {
              return this.Wi.$i + ":";
            },
            set: function (t) {
              Ni(t + ":", null, this.Wi, 0);
            },
          },
          {
            key: "username",
            get: function () {
              return this.Wi.Qi;
            },
            set: function (t) {
              Si(this.Wi) || (this.Wi.Qi = Pn(t, An));
            },
          },
          {
            key: "password",
            get: function () {
              return this.Wi.Yi;
            },
            set: function (t) {
              Si(this.Wi) || (this.Wi.Yi = Pn(t, An));
            },
          },
          {
            key: "host",
            get: function () {
              var t = this.Wi,
                n = t.Ki;
              if (null === n) return "";
              var i = t.re,
                r = Hn(n);
              return null !== i && (r += ":" + i), r;
            },
            set: function (t) {
              this.Wi.Ji || Ni(t, null, this.Wi, 10);
            },
          },
          {
            key: "hostname",
            get: function () {
              var t = this.Wi.Ki;
              return null === t ? "" : Hn(t);
            },
            set: function (t) {
              this.Wi.Ji || Ni(t, null, this.Wi, 11);
            },
          },
          {
            key: "port",
            get: function () {
              var t = this.Wi.re;
              return null === t ? "" : "" + t;
            },
            set: function (t) {
              Si(this.Wi) || ("" === t ? (this.Wi.re = null) : Ni(t, null, this.Wi, 12));
            },
          },
          {
            key: "pathname",
            get: function () {
              var t = this.Wi.Zi;
              return this.Wi.Ji ? t[0] : 0 === t.length ? "" : "/" + t.join("/");
            },
            set: function (t) {
              this.Wi.Ji || ((this.Wi.Zi.length = 0), Ni(t, null, this.Wi, 16));
            },
          },
          {
            key: "search",
            get: function () {
              var t = this.Wi.qi;
              return null === t || "" === t ? "" : "?" + t;
            },
            set: function (t) {
              t = Xn(t);
              var n = this.Wi;
              if ("" === t) return (n.qi = null), void Qn(this.qi);
              "?" === t[0] && (t = t.slice(1)), (n.qi = ""), Ni(t, null, n, 19), ti(this.qi, t);
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
                ? ("#" === t[0] && (t = t.slice(1)), (this.Wi.ue = ""), Ni(t, null, this.Wi, 20))
                : (this.Wi.ue = null);
            },
          },
        ]) && Ct(n.prototype, i),
        r && Ct(n, r),
        t
      );
    })();
    function Pi(t) {
      return (t.document && t.document.baseURI) || t.location.href || "";
    }
    var Fi = u;
    function Bi(t) {
      return Boolean(t && void 0 !== t.length);
    }
    function Mi() {}
    function xi(t) {
      if (!(this instanceof xi)) throw new h("Promises must be constructed via new");
      if ("function" != typeof t) throw new h("not a function");
      (this.oe = 0), (this.fe = !1), (this._e = void 0), (this.we = []), Gi(t, this);
    }
    function Li(t, n) {
      for (; 3 === t.oe; ) t = t._e;
      0 !== t.oe
        ? ((t.fe = !0),
          xi.ye(function () {
            var i = 1 === t.oe ? n.onFulfilled : n.onRejected;
            if (null !== i) {
              var r;
              try {
                r = i(t._e);
              } catch (t) {
                return void Ui(n.promise, t);
              }
              Wi(n.promise, r);
            } else (1 === t.oe ? Wi : Ui)(n.promise, t._e);
          }))
        : t.we.push(n);
    }
    function Wi(t, n) {
      try {
        if (n === t) throw new h("A promise cannot be resolved with itself.");
        if (n && ("object" == typeof n || "function" == typeof n)) {
          var i = n.then;
          if (n instanceof xi) return (t.oe = 3), (t._e = n), void Vi(t);
          if ("function" == typeof i)
            return void Gi(
              ((r = i),
              (e = n),
              function () {
                r.apply(e, arguments);
              }),
              t
            );
        }
        (t.oe = 1), (t._e = n), Vi(t);
      } catch (n) {
        Ui(t, n);
      }
      var r, e;
    }
    function Ui(t, n) {
      (t.oe = 2), (t._e = n), Vi(t);
    }
    function Vi(t) {
      2 === t.oe &&
        0 === t.we.length &&
        xi.ye(function () {
          t.fe || xi.me(t._e);
        });
      for (var n = 0, i = t.we.length; n < i; n++) Li(t, t.we[n]);
      t.we = null;
    }
    function Hi(t, n, i) {
      (this.onFulfilled = "function" == typeof t ? t : null),
        (this.onRejected = "function" == typeof n ? n : null),
        (this.promise = i);
    }
    function Gi(t, n) {
      var i = !1;
      try {
        t(
          function (t) {
            i || ((i = !0), Wi(n, t));
          },
          function (t) {
            i || ((i = !0), Ui(n, t));
          }
        );
      } catch (t) {
        if (i) return;
        (i = !0), Ui(n, t);
      }
    }
    (xi.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (xi.prototype.then = function (t, n) {
        var i = new this.constructor(Mi);
        return Li(this, new Hi(t, n, i)), i;
      }),
      (xi.prototype.finally = function (t) {
        var n = this.constructor;
        return this.then(
          function (i) {
            return n.resolve(t()).then(function () {
              return i;
            });
          },
          function (i) {
            return n.resolve(t()).then(function () {
              return n.reject(i);
            });
          }
        );
      }),
      (xi.all = function (t) {
        return new xi(function (n, i) {
          if (!Bi(t)) return i(new h("Promise.all accepts an array"));
          var r = Array.prototype.slice.call(t);
          if (0 === r.length) return n([]);
          var e = r.length;
          function u(t, o) {
            try {
              if (o && ("object" == typeof o || "function" == typeof o)) {
                var f = o.then;
                if ("function" == typeof f)
                  return void f.call(
                    o,
                    function (n) {
                      u(t, n);
                    },
                    i
                  );
              }
              (r[t] = o), 0 == --e && n(r);
            } catch (t) {
              i(t);
            }
          }
          for (var o = 0; o < r.length; o++) u(o, r[o]);
        });
      }),
      (xi.allSettled = function (t) {
        return new this(function (n, i) {
          if (!t || void 0 === t.length)
            return i(new h(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var r = Array.prototype.slice.call(t);
          if (0 === r.length) return n([]);
          var e = r.length;
          function u(t, i) {
            if (i && ("object" == typeof i || "function" == typeof i)) {
              var o = i.then;
              if ("function" == typeof o)
                return void o.call(
                  i,
                  function (n) {
                    u(t, n);
                  },
                  function (i) {
                    (r[t] = { status: "rejected", reason: i }), 0 == --e && n(r);
                  }
                );
            }
            (r[t] = { status: "fulfilled", value: i }), 0 == --e && n(r);
          }
          for (var o = 0; o < r.length; o++) u(o, r[o]);
        });
      }),
      (xi.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === xi
          ? t
          : new xi(function (n) {
              n(t);
            });
      }),
      (xi.reject = function (t) {
        return new xi(function (n, i) {
          i(t);
        });
      }),
      (xi.race = function (t) {
        return new xi(function (n, i) {
          if (!Bi(t)) return i(new h("Promise.race accepts an array"));
          for (var r = 0, e = t.length; r < e; r++) xi.resolve(t[r]).then(n, i);
        });
      }),
      (xi.ye =
        ("function" == typeof setImmediate &&
          function (t) {
            setImmediate(t);
          }) ||
        function (t) {
          Fi(t, 0);
        }),
      (xi.me = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
      });
    var ji = (function () {
        var n = t.Promise;
        if (void 0 !== n)
          try {
            if (-1 !== n.toString().indexOf("[native code]")) return n;
          } catch (t) {}
      })(),
      zi = e ? e.userAgent : "",
      Ki = zi.match(/Firefox\/([0-9]+)/i),
      qi = null != Ki,
      Xi = Ki ? Number(Ki[1]) : 0,
      Yi = zi.match(/(Version)\/((\d+)\.(\d+)(?:\.(\d+))?).*Safari/),
      $i = null != Yi,
      Zi = Yi ? Number(Yi[3]) : 0,
      Ji = (function () {
        function t(t) {
          (this.pe = 0), (this.ke = 0), (this.Vi = []), (this.Ae = t);
        }
        return (
          (t.prototype.Te = function (t) {
            var n = this.length();
            this.Se(n + 1);
            var i = (this.ke + n) & (this.Ae - 1);
            (this.Vi[i] = t), (this.pe = n + 1);
          }),
          (t.prototype.push = function (t) {
            var n = this.length() + 1;
            if (this.Ae < n) this.Te(t);
            else {
              var i = this.ke + n - 1,
                r = this.Ae - 1;
              (this.Vi[i & r] = t), (this.pe = n);
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
            var i = (this.ke + this.pe) & (n - 1);
            !(function (t, n, i, r) {
              for (var e = 0; e < r; ++e) (t[e + i] = t[e + n]), (t[e + n] = void 0);
            })(this.Vi, 0, n, i);
          }),
          t
        );
      })();
    var Qi = "unhandledrejection",
      tr = t.PromiseRejectionEvent,
      nr = t.CustomEvent;
    function ir(t) {
      return new tr(Qi, { reason: t, promise: ji.reject(t).catch(function () {}), cancelable: !0 });
    }
    function rr(t) {
      var n = new nr(Qi, { detail: { reason: t }, cancelable: !0 });
      return a.defineProperty(n, "reason", { value: t }), n;
    }
    function er(t) {
      var n = r.createEvent("CustomEvent");
      return n.initCustomEvent(Qi, !1, !0, { reason: t }), n;
    }
    var ur,
      or,
      fr,
      sr,
      cr,
      hr,
      ar,
      vr = function (t) {
        return (vr = (function () {
          try {
            var t = ji.resolve(),
              n = new tr(Qi, { reason: "error", promise: t });
            return Qi === n.type && "error" === n.reason;
          } catch (t) {}
          return !1;
        })()
          ? ir
          : (function () {
              try {
                var t = new nr(Qi, { detail: { reason: "error" } });
                return Qi === t.type && "error" === t.detail.reason;
              } catch (t) {}
              return !1;
            })()
          ? rr
          : er)(t);
      };
    if (ji && !((qi && Xi < 60) || ($i && Zi < 15))) or = ji;
    else {
      or = xi;
      var lr =
          null !==
            (ur = (function () {
              var n = t.queueMicrotask;
              if ("function" == typeof n)
                return function (t) {
                  return n(t);
                };
              var i = ji;
              if (i && "function" == typeof i.resolve) {
                var r = i.resolve();
                return function (t) {
                  return r.then(t);
                };
              }
            })()) && void 0 !== ur
            ? ur
            : xi.ye,
        _r =
          ((fr = lr),
          (sr = new Ji(16)),
          (cr = !1),
          {
            Ie: function (t) {
              sr.push(t), cr || ((cr = !0), fr(hr));
            },
            Re: (hr = function () {
              for (; sr.length() > 0; ) sr.shift()();
              cr = !1;
            }),
          });
      (xi.ye = _r.Ie),
        (xi.me = function (n) {
          try {
            var i = vr(n);
            if (!t.dispatchEvent(i) || i.defaultPrevented) return;
          } catch (t) {}
          u(function () {
            throw new c("Unhandled promise rejection: ".concat(n));
          }, 0);
        });
    }
    function dr() {
      return void 0 !== r ? r.createElement("video") : void 0;
    }
    var wr =
        !!("ontouchstart" in t || (t.DocumentTouch && r instanceof t.DocumentTouch)) || !(!e || !e.msMaxTouchPoints),
      yr = (ar || (ar = dr()), ar),
      pr = !(!yr || !yr.webkitShowPlaybackTargetPicker),
      gr = (function () {
        function t() {
          (this.Ne = void 0), (this.Ce = !1), (this.jt = wr), (this.in = !1), (this.De = !0), (this.Pe = !0);
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
          p(t, [
            {
              key: "Me",
              get: function () {
                return void 0 === this.Ne && (this.Ne = this.Oe()), this.Ne;
              },
            },
            {
              key: "Le",
              get: function () {
                return i.devicePixelRatio || 1;
              },
            },
            {
              key: "Fe",
              get: function () {
                return pr;
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
                return O.In || O.Zt;
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
      mr = (function () {
        var t = dr();
        if (!t) return !1;
        var n = t.muted;
        return (t.muted = !n), t.muted !== n;
      })();
    !(function () {
      if (O.Qt) return !1;
      var t = dr();
      if (!t) return !1;
      var n = t.volume;
      (t.volume = n / 2 + 0.1), t.volume;
    })();
    var Ir = (function (t) {
        function n(n) {
          var i;
          return (
            ((i = t.call(this) || this).$e = void 0),
            (i.$e = n),
            i.$e && ((i.Ce = i.$e.Ce), (i.jt = i.$e.jt), (i.De = mr && i.$e.De)),
            i
          );
        }
        m(n, t);
        var i = n.prototype;
        return (
          (i.Oe = function () {
            return this.$e ? this.$e.Me : t.prototype.Oe.call(this);
          }),
          (i.xe = function (n, i) {
            return this.$e ? this.$e.xe(n, i) : t.prototype.xe.call(this, n, i);
          }),
          (i.Be = function (n) {
            return this.$e ? this.$e.Be(n) : t.prototype.Be.call(this, n);
          }),
          p(n, [
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
      })(gr),
      kr = (function (t) {
        function n(n) {
          var i;
          return ((i = t.call(this, n) || this).Ce = !0), (i.in = !0), i;
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "We",
              get: function () {
                return O.Zt;
              },
            },
          ]),
          n
        );
      })(Ir),
      Sr = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          (n.prototype.Oe = function () {
            if (!(void 0).MediaSource) return 1;
          }),
          p(n, [
            {
              key: "We",
              get: function () {
                return !0;
              },
            },
          ]),
          n
        );
      })(kr),
      br = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          (n.prototype.xe = function (n, i) {
            return t.prototype.xe.call(this, n, i);
          }),
          p(n, [
            {
              key: "Ue",
              get: function () {
                return O._n < 3;
              },
            },
            {
              key: "je",
              get: function () {
                return O._n >= 3;
              },
            },
            {
              key: "Xe",
              get: function () {
                return O._n < 3;
              },
            },
          ]),
          n
        );
      })(Ir),
      Er = (function (t) {
        function n() {
          return t.call(this) || this;
        }
        return m(n, t), n;
      })(gr),
      Tr = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          (n.prototype.xe = function (t, n) {
            if (t && t.Qe && n && n.Qe) {
              var i = Rr(t.Qe, "mp4a.40.2") && Rr(n.Qe, "mp4a.40.5"),
                r = Rr(t.Qe, "mp4a.40.5") && Rr(n.Qe, "mp4a.40.2"),
                e = Rr(t.Qe, "mp4a.40.2") && Rr(n.Qe, "mp4a.40.34"),
                u = Rr(t.Qe, "mp4a.40.34") && Rr(n.Qe, "mp4a.40.2"),
                o = Rr(t.Qe, "mp4a.40.5") && Rr(n.Qe, "mp4a.40.34"),
                f = Rr(t.Qe, "mp4a.40.34") && Rr(n.Qe, "mp4a.40.5");
              return !(i || r || e || u || o || f);
            }
            return !0;
          }),
          p(n, [
            {
              key: "qe",
              get: function () {
                if (O.Vt) return 4096;
              },
            },
          ]),
          n
        );
      })(Er);
    function Rr(t, n) {
      return t.indexOf(n) > -1;
    }
    var Nr = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          (n.prototype.Be = function (t) {
            return t >= 2;
          }),
          n
        );
      })(Er),
      Ar = (function (t) {
        function n() {
          var n;
          return ((n = t.call(this) || this).Ce = O.Rn >= 11), (n.De = O.In && !(O.Zt && O.Rn < 10)), n;
        }
        return m(n, t), n;
      })(Er),
      Dr = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "ze",
              get: function () {
                return !1;
              },
            },
          ]),
          n
        );
      })(Ir),
      Or = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "Ge",
              get: function () {
                return !O.zt || (O.fn ? 92 !== O.vn : O.cn >= 100);
              },
            },
          ]),
          n
        );
      })(Er),
      Cr = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "We",
              get: function () {
                return !0;
              },
            },
          ]),
          n
        );
      })(Ir),
      Pr = (function () {
        function n() {
          var n;
          (this.zn = void 0),
            (this.Ye = new It()),
            (this.Ze = new Fr()),
            (this.Ke =
              ((n = (function () {
                if (O.Sn) return new Tr();
                if (O.yn || O.pn) return new Nr();
                if (O.In) return new Ar();
                if (O.hn) return new Or();
                return new Er();
              })()),
              O.Zt
                ? new Sr(n)
                : O.in
                ? new kr(n)
                : O.dn
                ? new br(n)
                : O.wn
                ? new Dr(n)
                : O.Vt
                ? new Cr(n)
                : new Ir(n))),
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
        var i = n.prototype;
        return (
          (i.ir = function () {
            W.apply(void 0, arguments);
          }),
          (i.rr = function () {
            U.apply(void 0, arguments);
          }),
          (i.dr = function () {
            V.apply(void 0, arguments);
          }),
          (i._r = function (t) {
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            H.apply(void 0, [t].concat(i));
          }),
          (i.Wn = function (t, n) {
            return u(t, n);
          }),
          (i.gr = function (t, n) {
            return f(t, n);
          }),
          (i.Hn = function (t) {
            o(t);
          }),
          (i.wr = function (t) {
            s(t);
          }),
          (i.Kn = function (t) {
            return this.Ye.Kn(t);
          }),
          (i.yr = function () {
            return this.pr.yr();
          }),
          (i.Ar = function () {
            return this.pr.Ar();
          }),
          (i.Tr = function () {
            return this.pr.Tr();
          }),
          (i.Sr = function () {
            return this.pr.Sr();
          }),
          (i.Er = function () {
            return this.pr.Er();
          }),
          (i.Ir = function (t, n) {
            return this.pr.Ir(t, n);
          }),
          (i.Rr = function (t) {
            return this.pr.Rr(t);
          }),
          (i.Nr = function (t, n) {
            var i;
            return (
              void 0 === n && (n = Pi(void 0)), (i = "object" != typeof n || n instanceof Ci ? n : n.href), new Ci(t, i)
            );
          }),
          (i.Cr = function (n, i) {
            if ((void 0 === i && (i = Pi(void 0)), this.Je)) {
              var r = "string" == typeof i ? i : i.toString();
              return new t.URL(n, r).href;
            }
            return this.Nr(n, i).href;
          }),
          p(n, [
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
      Fr = (function () {
        function t() {}
        return (
          p(t, [
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
    var Br = { exports: {} };
    !(function (t) {
      var n,
        i = a.prototype,
        r = i.hasOwnProperty,
        e = "function" == typeof Symbol ? Symbol : {},
        u = e.iterator || "@@iterator",
        o = e.asyncIterator || "@@asyncIterator",
        f = e.toStringTag || "@@toStringTag";
      function s(t, n, i, r) {
        var e = n && n.prototype instanceof g ? n : g,
          u = a.create(e.prototype),
          o = new O(r || []);
        return (
          (u.Vr = (function (t, n, i) {
            var r = l;
            return function (e, u) {
              if (r === w) throw new c("Generator is already running");
              if (r === y) {
                if ("throw" === e) throw u;
                return P();
              }
              for (i.method = e, i.arg = u; ; ) {
                var o = i.delegate;
                if (o) {
                  var f = N(o, i);
                  if (f) {
                    if (f === p) continue;
                    return f;
                  }
                }
                if ("next" === i.method) i.sent = i.zr = i.arg;
                else if ("throw" === i.method) {
                  if (r === l) throw ((r = y), i.arg);
                  i.dispatchException(i.arg);
                } else "return" === i.method && i.abrupt("return", i.arg);
                r = w;
                var s = v(t, n, i);
                if ("normal" === s.type) {
                  if (((r = i.done ? y : _), s.arg === p)) continue;
                  return { value: s.arg, done: i.done };
                }
                "throw" === s.type && ((r = y), (i.method = "throw"), (i.arg = s.arg));
              }
            };
          })(t, i, o)),
          u
        );
      }
      function v(t, n, i) {
        try {
          return { type: "normal", arg: t.call(n, i) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = s;
      var l = "suspendedStart",
        _ = "suspendedYield",
        w = "executing",
        y = "completed",
        p = {};
      function g() {}
      function m() {}
      function I() {}
      var k = {};
      k[u] = function () {
        return this;
      };
      var S = a.getPrototypeOf,
        b = S && S(S(C([])));
      b && b !== i && r.call(b, u) && (k = b);
      var E = (I.prototype = g.prototype = a.create(k));
      function T(t) {
        ["next", "throw", "return"].forEach(function (n) {
          t[n] = function (t) {
            return this.Vr(n, t);
          };
        });
      }
      function R(t) {
        var n;
        this.Vr = function (i, e) {
          function u() {
            return new or(function (n, u) {
              !(function n(i, e, u, o) {
                var f = v(t[i], t, e);
                if ("throw" !== f.type) {
                  var s = f.arg,
                    c = s.value;
                  return c && "object" == typeof c && r.call(c, "Hr")
                    ? or.resolve(c.Hr).then(
                        function (t) {
                          n("next", t, u, o);
                        },
                        function (t) {
                          n("throw", t, u, o);
                        }
                      )
                    : or.resolve(c).then(
                        function (t) {
                          (s.value = t), u(s);
                        },
                        function (t) {
                          return n("throw", t, u, o);
                        }
                      );
                }
                o(f.arg);
              })(i, e, n, u);
            });
          }
          return (n = n ? n.then(u, u) : u());
        };
      }
      function N(t, i) {
        var r = t.iterator[i.method];
        if (r === n) {
          if (((i.delegate = null), "throw" === i.method)) {
            if (t.iterator.return && ((i.method = "return"), (i.arg = n), N(t, i), "throw" === i.method)) return p;
            (i.method = "throw"), (i.arg = new h("The iterator does not provide a 'throw' method"));
          }
          return p;
        }
        var e = v(r, t.iterator, i.arg);
        if ("throw" === e.type) return (i.method = "throw"), (i.arg = e.arg), (i.delegate = null), p;
        var u = e.arg;
        return u
          ? u.done
            ? ((i[t.resultName] = u.value),
              (i.next = t.nextLoc),
              "return" !== i.method && ((i.method = "next"), (i.arg = n)),
              (i.delegate = null),
              p)
            : u
          : ((i.method = "throw"), (i.arg = new h("iterator result is not an object")), (i.delegate = null), p);
      }
      function A(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]), 2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])), this.tryEntries.push(n);
      }
      function D(t) {
        var n = t.completion || {};
        (n.type = "normal"), delete n.arg, (t.completion = n);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(A, this), this.reset(!0);
      }
      function C(t) {
        if (t) {
          var i = t[u];
          if (i) return i.call(t);
          if ("function" == typeof t.next) return t;
          if (!d(t.length)) {
            var e = -1,
              o = function i() {
                for (; ++e < t.length; ) if (r.call(t, e)) return (i.value = t[e]), (i.done = !1), i;
                return (i.value = n), (i.done = !0), i;
              };
            return (o.next = o);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: n, done: !0 };
      }
      (m.prototype = E.constructor = I),
        (I.constructor = m),
        (I[f] = m.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var n = "function" == typeof t && t.constructor;
          return !!n && (n === m || "GeneratorFunction" === (n.displayName || n.name));
        }),
        (t.mark = function (t) {
          return (
            a.setPrototypeOf ? a.setPrototypeOf(t, I) : ((t.__proto__ = I), f in t || (t[f] = "GeneratorFunction")),
            (t.prototype = a.create(E)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { Hr: t };
        }),
        T(R.prototype),
        (R.prototype[o] = function () {
          return this;
        }),
        (t.AsyncIterator = R),
        (t.async = function (n, i, r, e) {
          var u = new R(s(n, i, r, e));
          return t.isGeneratorFunction(i)
            ? u
            : u.next().then(function (t) {
                return t.done ? t.value : u.next();
              });
        }),
        T(E),
        (E[f] = "Generator"),
        (E[u] = function () {
          return this;
        }),
        (E.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var n = [];
          for (var i in t) n.push(i);
          return (
            n.reverse(),
            function i() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (i.value = r), (i.done = !1), i;
              }
              return (i.done = !0), i;
            }
          );
        }),
        (t.values = C),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this.zr = n),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = n),
              this.tryEntries.forEach(D),
              !t)
            )
              for (var i in this) "t" === i.charAt(0) && r.call(this, i) && !d(+i.slice(1)) && (this[i] = n);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var i = this;
            function e(r, e) {
              return (f.type = "throw"), (f.arg = t), (i.next = r), e && ((i.method = "next"), (i.arg = n)), !!e;
            }
            for (var u = this.tryEntries.length - 1; u >= 0; --u) {
              var o = this.tryEntries[u],
                f = o.completion;
              if ("root" === o.tryLoc) return e("end");
              if (o.tryLoc <= this.prev) {
                var s = r.call(o, "catchLoc"),
                  h = r.call(o, "finallyLoc");
                if (s && h) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!h) throw new c("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var e = this.tryEntries[i];
              if (e.tryLoc <= this.prev && r.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                var u = e;
                break;
              }
            }
            u && ("break" === t || "continue" === t) && u.tryLoc <= n && n <= u.finallyLoc && (u = null);
            var o = u ? u.completion : {};
            return (
              (o.type = t), (o.arg = n), u ? ((this.method = "next"), (this.next = u.finallyLoc), p) : this.complete(o)
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
              p
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), D(i), p;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (i.tryLoc === t) {
                var r = i.completion;
                if ("throw" === r.type) {
                  var e = r.arg;
                  D(i);
                }
                return e;
              }
            }
            throw new c("illegal catch attempt");
          },
          delegateYield: function (t, i, r) {
            return (
              (this.delegate = { iterator: C(t), resultName: i, nextLoc: r }),
              "next" === this.method && (this.arg = n),
              p
            );
          },
        });
    })(Br.exports);
    var Mr = Br.exports;
    function xr() {
      return (xr =
        a.assign ||
        function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var r in i) a.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
          }
          return t;
        }).apply(this, arguments);
    }
    function Lr() {
      var t = a.create(null);
      return (t.__ = void 0), delete t.__, t;
    }
    var Wr,
      Ur,
      Vr =
        ("undefined" != typeof Map && "entries" in Map.prototype ? Map : void 0) ||
        ((Wr = (function () {
          function t(t, n) {
            (this.data = void 0),
              (this.keys = void 0),
              (this.index = 0),
              (this.selector = void 0),
              (this.data = t),
              (this.selector = n),
              (this.keys = a.keys(t));
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
            (this.data = Lr()), (this.size = 0);
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
              (this.data = Lr()), (this.size = 0);
            }),
            (n.keys = function () {
              return new Wr(this.data, function (t, n) {
                return n;
              });
            }),
            (n.values = function () {
              return new Wr(this.data, function (t, n) {
                return t[n];
              });
            }),
            (n.entries = function () {
              return new Wr(this.data, function (t, n) {
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
    })(Ur || (Ur = {}));
    var Hr,
      Gr = Ur.$r,
      jr = "urn:uuid:" + Gr,
      zr = Ur.Qr,
      Kr = "urn:uuid:" + zr,
      qr = Ur.Yr,
      Xr = "urn:uuid:" + qr,
      Yr = Ur.Zr,
      $r = "urn:uuid:" + Yr;
    !(function (t) {
      (t.$r = "playready"), (t.Qr = "widevine"), (t.Zr = "fairplay"), (t.Yr = "clearkey"), (t.Kr = "aes128");
    })(Hr || (Hr = {}));
    var Zr = { Jr: Hr.$r, ns: "com.microsoft.playready", rs: "cenc", us: Gr, hs: jr, fs: "PlayReady" },
      Jr = { Jr: Hr.Qr, ns: "com.widevine.alpha", rs: "cenc", us: zr, hs: Kr, fs: "Widevine" },
      Qr = { Jr: Hr.Zr, ns: "com.apple.fps.1_0", rs: "skd", us: Yr, hs: $r, fs: "FairPlay" };
    Hr.Zr;
    var te = { Jr: Hr.Yr, ns: "org.w3.clearkey", rs: "cenc", us: qr, hs: Xr, fs: "ClearKey" };
    var ne = (O.hn && O.cn >= 42) || (O.Sn && O.En >= 38) || O.yn || O.An || (O.Nn && O.Cn >= 29);
    function ie(t, n) {
      return (
        (r = "audio"),
        null != (i = t) && -1 !== i.indexOf(r)
          ? {
              initDataTypes: ["cenc"],
              audioCapabilities: [xr({ contentType: t }, n ? { robustness: "SW_SECURE_CRYPTO" } : {})],
            }
          : {
              initDataTypes: ["cenc"],
              videoCapabilities: [xr({ contentType: t }, n ? { robustness: "SW_SECURE_CRYPTO" } : {})],
            }
      );
      var i, r;
    }
    var re,
      ee = (function () {
        function t(t) {
          (this.vs = void 0), (this.ls = new Vr()), (this.ds = void 0), (this.vs = t);
        }
        var n = t.prototype;
        return (
          (n.Er = function () {
            return this.Rr(Jr);
          }),
          (n.Ar = function () {
            return this.Rr(te);
          }),
          (n.Sr = function () {
            return this.Rr(Zr);
          }),
          (n.Tr = function () {
            return this.Rr(Qr);
          }),
          (n.Rr = function (t) {
            var n = t.hs,
              i = this.ls.get(n);
            if (i) return i;
            var r = this.Ir(t, 'video/mp4; codecs="avc1.42000a"');
            return this.ls.set(n, r), r;
          }),
          (n.Ir = function (t, n) {
            return Mr.async(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (i.prev = 0), (i.next = 3), Mr.awrap(this.vs._s(t.ns, [ie(n, !0)]));
                    case 3:
                      return i.abrupt("return", !0);
                    case 6:
                      return (
                        (i.prev = 6),
                        (i.t0 = i.catch(0)),
                        (i.prev = 8),
                        (i.next = 11),
                        Mr.awrap(this.vs._s(t.ns, [ie(n, !1)]))
                      );
                    case 11:
                      return i.abrupt("return", !0);
                    case 14:
                      return (i.prev = 14), (i.t1 = i.catch(8)), i.abrupt("return", !1);
                    case 17:
                    case "end":
                      return i.stop();
                  }
              },
              null,
              this,
              [
                [0, 6],
                [8, 14],
              ],
              or
            );
          }),
          (n.yr = function () {
            return this.ds || (this.ds = this.gs()), this.ds;
          }),
          (n.gs = function () {
            return Mr.async(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("https:" !== (void 0).protocol) {
                        t.next = 2;
                        break;
                      }
                    case 2:
                      if (ne) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 4:
                      return (t.next = 6), Mr.awrap(this.Ar());
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
              or
            );
          }),
          t
        );
      })(),
      ue = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.Zc = function () {}), (n.Su = function (t) {}), (n.bu = function (t) {}), (n.Kc = function (t, n) {}), t
        );
      })(),
      oe = (function () {
        function t() {}
        return (
          (t.prototype._s = function (t, n) {
            return or.reject(new h("Unsupported key system configuration"));
          }),
          t
        );
      })();
    !(function (t) {
      (t.jf = "arraybuffer"), (t.Vf = "json"), (t.zf = "stream"), (t.$n = "text");
    })(re || (re = {}));
    var fe,
      se = (function () {
        function t(n) {
          var i = this;
          (this.Xr = void 0),
            (this.Xr = {}),
            n instanceof t
              ? n.asList().forEach(function (t) {
                  var n = t[0],
                    r = t[1];
                  i.append(n, r);
                })
              : Array.isArray(n)
              ? n.forEach(function (t) {
                  i.append(t[0], t[1]);
                })
              : n &&
                a.getOwnPropertyNames(n).forEach(function (t) {
                  i.append(t, n[t]);
                });
        }
        var n = t.prototype;
        return (
          (n.append = function (t, n) {
            var i = t,
              r = n;
            (i = ce(i)), (r = he(r));
            var e = i.toLowerCase();
            if (this.Xr.hasOwnProperty(e)) {
              var u = this.Xr[e],
                o = u[1];
              u[1] = o ? o + ", " + r : r;
            } else this.Xr[e] = [i, r];
          }),
          (n.delete = function (t) {
            var n = ce(t).toLowerCase();
            delete this.Xr[n];
          }),
          (n.get = function (t) {
            var n = ce(t).toLowerCase();
            return this.Xr.hasOwnProperty(n) ? this.Xr[n][1] : null;
          }),
          (n.has = function (t) {
            var n = ce(t).toLowerCase();
            return this.Xr.hasOwnProperty(n);
          }),
          (n.set = function (t, n) {
            var i = t,
              r = (i = ce(i)).toLowerCase();
            this.Xr[r] = [i, he(n)];
          }),
          (n.forEach = function (t, n) {
            for (var i in this.Xr) this.Xr.hasOwnProperty(i) && t.call(n, this.Xr[i][1], i, this);
          }),
          (n.asList = function () {
            var t = [];
            for (var n in this.Xr)
              if (this.Xr.hasOwnProperty(n)) {
                var i = this.Xr[n],
                  r = i[0],
                  e = i[1];
                t.push([r, e]);
              }
            return t;
          }),
          (n.Hf = function () {
            var t = {};
            return (
              this.forEach(function (n, i) {
                t[i] = n;
              }),
              t
            );
          }),
          (n.Wf = function (t) {
            var n = this;
            t.forEach(function (t, i) {
              n.append(i, t);
            });
          }),
          (n.qf = function (t) {
            var n = this;
            t.forEach(function (t, i) {
              n.set(i, t);
            });
          }),
          t
        );
      })();
    function ce(t) {
      var n = t;
      if (("string" != typeof n && (n = String(n)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(n)))
        throw new h("Invalid character in header field name");
      return n;
    }
    function he(t) {
      var n = t;
      return "string" != typeof n && (n = String(n)), n;
    }
    function ae(t, n) {
      return (function (t, n) {
        var i = t,
          r = i.length;
        if (r <= 1) return i;
        for (var e = new Array(r), u = 1; u < r; u *= 2) {
          ve(i, n, u, e);
          var o = i;
          (i = e), (e = o);
        }
        return i;
      })(t.slice(), n);
    }
    function ve(t, n, i, r) {
      var e,
        u,
        o,
        f,
        s,
        c = t.length,
        h = 0,
        a = 2 * i;
      for (u = 0; u < c; u += a)
        for (e = (o = u + i) + i, o > c && (o = c), e > c && (e = c), f = u, s = o; ; )
          if (f < o && s < e) n && n(t[f], t[s]) <= 0 ? (r[h++] = t[f++]) : (r[h++] = t[s++]);
          else if (f < o) r[h++] = t[f++];
          else {
            if (!(s < e)) break;
            r[h++] = t[s++];
          }
    }
    !(function (t) {
      (t[(t.ys = 0)] = "ys"), (t[(t.As = 1)] = "As"), (t[(t.Ts = -1)] = "Ts");
    })(fe || (fe = {}));
    var le = function (t, n) {
      return (function (t, n) {
        if (t === n) return !0;
        var i = v.abs(t - n);
        return i < _t || i < v.max(v.abs(t), v.abs(n)) * _t;
      })(t, n)
        ? fe.ys
        : (function (t, n) {
            return t === n ? fe.ys : t < n ? fe.Ts : t > n ? fe.As : d(t) ? (d(n) ? fe.ys : fe.As) : fe.Ts;
          })(t, n);
    };
    function _e(t, n) {
      var i = t.indexOf(n);
      return (
        -1 !== i &&
        ((function (t, n) {
          t.splice(n, 1);
        })(t, i),
        !0)
      );
    }
    function de(t) {
      t.length = 0;
    }
    var we,
      ye,
      pe,
      ge,
      me = (function () {
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
              de(this.Is), de(this.Rs);
            }
          }),
          (n.Ds = function (t) {
            this.Es || this.Is.push(t);
          }),
          (n.Ps = function (t) {
            this.Es || _e(this.Is, t);
          }),
          (n.Os = function (t) {
            this.Es || this.Rs.push(t);
          }),
          (n.xs = function (t) {
            this.Es || _e(this.Rs, t);
          }),
          t
        );
      })(),
      Ie = (function () {
        function t() {
          this.Bs = new me();
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
                var i = function () {
                    r(), n.Ns();
                  },
                  r = function r() {
                    t.Ps(i), t.xs(r), n.Ps(i), n.xs(r);
                  };
                t.Ds(i), t.Os(r), n.Ds(i), n.Os(r);
              }
          }),
          (n.Fs = function () {
            var n = new t(),
              i = new t(),
              r = n.Us,
              e = i.Us,
              u = this.Bs,
              o = function () {
                (r.Ss && e.Es) || (e.Ss && r.Es) ? u.Ns() : r.Es && e.Es && u.Cs();
              };
            r.Ds(o), e.Ds(o), r.Os(o), e.Os(o), n.Ls(u), i.Ls(u);
            return (
              u.Os(function () {
                r.Ps(o), e.Ps(o), r.xs(o), e.xs(o);
              }),
              [n, i]
            );
          }),
          p(t, [
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
    })(we || (we = {})),
      (function (t) {
        (t.ud = ""), (t.od = "manifest"), (t.hd = "segment"), (t.fd = "content-protection");
      })(ye || (ye = {})),
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
      })(pe || (pe = {})),
      (function (t) {
        (t.ud = ""), (t.kd = "audio"), (t.bd = "video"), (t.$n = "text"), (t.Td = "image");
      })(ge || (ge = {}));
    var ke,
      Se = function (t, n) {
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
        var i,
          r,
          e,
          u,
          o,
          f,
          s,
          c,
          h,
          a,
          v,
          l = t.ed;
        n
          ? ((i = n.Ll),
            (r = n.Ql),
            (e = n.Sd),
            (u = n.Yl),
            (o = n.Ed),
            (f = n.Us),
            (s = n.Jr),
            (c = n.Id),
            (h = n.Rd),
            (a = n.Nd),
            (v = n.Cd))
          : ((i = null), (r = {}), (e = we.GET), (u = re.$n), (o = 0), (s = ye.ud), (c = pe.ud), (h = ge.ud), (a = !1)),
          (this.ed = l),
          (this.Ll = t.Ll || i),
          (this.Ql = new se(t.Ql || r)),
          (this.Sd = t.Sd || e),
          (this.Yl = t.Yl || u),
          (this.Ed = void 0 !== t.Ed ? Number(t.Ed) || 0 : o),
          (this.Us = t.Us || f || new Ie().Us),
          (this.Jr = t.Jr || s),
          (this.Id = t.Id || c),
          (this.Rd = t.Rd || h),
          (this.Nd = void 0 !== t.Nd ? Boolean(t.Nd) : a),
          (this.Cd = t.Cd || v);
      };
    !(function (t) {
      (t.jd = "HttpOpenError"), (t.Vd = "HttpResponseError"), (t.zd = "HttpTimeoutError");
    })(ke || (ke = {}));
    var be,
      Ee,
      Te = (function (t) {
        function n(n, i) {
          return t.call(this, n, "Error while opening " + n.ed + ". Invalid URL.", i) || this;
        }
        return (
          m(n, t),
          p(n, [
            {
              key: "name",
              get: function () {
                return ke.jd;
              },
            },
          ]),
          n
        );
      })(
        (function (t) {
          function n(n, i, r) {
            var e;
            return ((e = t.call(this, i, r) || this).Hd = void 0), (e.Hd = n), e;
          }
          return (
            m(n, t),
            p(n, [
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
      Re = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.Jl = function (t) {
            return or.reject(new Te(new Se(t)));
          }),
          (n.Dd = function (t) {}),
          (n.Pd = function () {}),
          t
        );
      })();
    function Ne(t) {
      return [(t >>> 24) & 255, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t];
    }
    function Ae(t, n) {
      return t.push(n), t;
    }
    function De(t, n, i, r) {
      var e = i || 0,
        u = r || n.length,
        o = u - e,
        f = t.length,
        s = f + o;
      for (t.length = s; e < u; e += 1, f += 1) t[f] = n[e];
      return t;
    }
    function Oe(t, n) {
      return De(t, Ne(n));
    }
    (be = new ((function (t) {
      function n() {
        for (var n, i = arguments.length, r = new Array(i), e = 0; e < i; e++) r[e] = arguments[e];
        return (
          ((n = t.call.apply(t, [this].concat(r)) || this).N_ = new ee(new oe())),
          (n.mE = new Re()),
          (n.i = new ue()),
          n
        );
      }
      return (
        m(n, t),
        p(n, [
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
    })(Pr))()),
      (function (t) {
        (t.$wt = "h.264"), (t.Dwt = "mp3"), (t.Swt = "aac-lc"), (t.Ewt = "he-aac");
      })(Ee || (Ee = {}));
    var Ce = (function () {
        function t() {
          (this.yet = 0), (this.met = []), (this.nE = {});
        }
        var n = t.prototype;
        return (
          (n.pet = function (t) {
            (this.met = this.met.concat(t.met)), (this.yet += t.xg);
          }),
          (n.ket = function (t, n, i) {
            var r = this.yet,
              e = i - n;
            e > 0 && (this.met.push({ bet: n, Aet: i, Tet: e, Eet: r, Iet: t }), (this.yet += e));
          }),
          (n.bu = function (t) {
            for (var n = 0, i = this.met; n < i.length; n++) {
              var r = i[n];
              if (r.Eet <= t && t < r.Eet + r.Tet) return r.Iet[t + r.bet - r.Eet];
            }
          }),
          (n.Ret = function (t, n) {
            for (var i = n, r = 0, e = this.met; r < e.length; r++)
              for (var u = e[r], o = u.Aet, f = u.bet; f < o; f += 1, i += 1) t[i] = u.Iet[f];
            return i;
          }),
          (n.Net = function () {
            for (var t = new w(this.yet), n = 0, i = 0, r = this.met; i < r.length; i++)
              for (var e = r[i], u = e.Aet, o = e.bet; o < u; o += 1, n += 1) t[n] = e.Iet[o];
            return t;
          }),
          (n.Cu = function (n) {
            for (var i = new t(), r = 0, e = this.met; r < e.length; r++) {
              var u = e[r];
              i.ket(u.Iet, u.bet, u.Aet);
            }
            return (i.nE = n || xr({}, this.nE)), i;
          }),
          p(t, [
            {
              key: "xg",
              get: function () {
                return this.yet;
              },
              set: function (t) {
                var n = this.met,
                  i = this.yet - t;
                if (!(t >= this.yet))
                  if (((this.yet = t), 0 !== t))
                    for (var r = n.length - 1; r >= 0; r -= 1) {
                      var e = n[r];
                      if (i <= e.Tet)
                        return (e.Aet -= i), (e.Tet -= i), void (n.length !== r + 1 && (n.length = r + 1));
                      i -= e.Tet;
                    }
                  else n.length = 0;
              },
            },
            {
              key: "Li",
              get: function () {
                for (var t = new Array(this.yet), n = 0, i = 0, r = this.met; i < r.length; i++)
                  for (var e = r[i], u = e.Aet, o = e.bet; o < u; o += 1, n += 1) t[n] = e.Iet[o];
                return t;
              },
            },
          ]),
          t
        );
      })(),
      Pe = (function () {
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
    function Fe(t, n) {
      return t.Lp()
        ? n.Lp()
          ? fe.ys
          : fe.As
        : n.Lp()
        ? fe.Ts
        : t.Fp()
        ? n.Fp() && t.xp() === n.xp()
          ? fe.ys
          : t.xp()
          ? fe.Ts
          : fe.As
        : n.xp()
        ? fe.As
        : fe.Ts;
    }
    var Be = (function () {
      function t(t, n) {
        (this.Up = void 0), (this.jp = void 0), (this.Up = t), (this.jp = n);
      }
      (t.Vp = function (n, i, r) {
        return r ? new t(n.toUnsigned(), i.toUnsigned()) : new t(n.toSigned(), i.toSigned());
      }),
        (t.zp = function (n) {
          return n.unsigned ? new t(n, j.UZERO) : new t(n, n.isNegative() ? j.NEG_ONE : j.ZERO);
        }),
        (t.Hp = function (n, i) {
          if (d(n)) return i ? t.Wp : t.qp;
          if (i) {
            if (n < 0) return t.Wp;
            if (n >= 3.402823669209385e38) return t.Gp;
          } else {
            if (n <= -1.7014118346046923e38) return t.Xp;
            if (n + 1 >= 1.7014118346046923e38) return t.$p;
          }
          return n < 0
            ? t.Hp(-n, i).Bp()
            : t.Vp(j.fromNumber(n % 0x10000000000000000), j.fromNumber(n / 0x10000000000000000), i);
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
          if (this.dp(t)) return fe.ys;
          var n = this.xp(),
            i = t.xp();
          if (n && !i) return fe.Ts;
          if (!n && i) return fe.As;
          if (!this.Qp()) return this.Mp(t).xp() ? fe.Ts : fe.As;
          var r = this.Kp(),
            e = t.Kp(),
            u = e.jp.comp(r.jp);
          return u > 0 || (0 === u && e.Up.gt(r.Up)) ? fe.Ts : fe.As;
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
          var i = 127 & n;
          return 0 === i
            ? this
            : i < 64
            ? t.Vp(this.Up.shl(i), this.jp.shl(i).or(this.Up.shru(64 - i)), this.Qp())
            : t.Vp(j.ZERO, this.Up.shl(i - 64), this.Qp());
        }),
        (n.lk = function (n) {
          var i = 127 & n;
          return 0 === i
            ? this
            : i < 64
            ? t.Vp(this.Up.shru(i).or(this.jp.shl(64 - i)), this.jp.shr(i), this.Qp())
            : t.Vp(this.jp.shr(i - 64), this.jp.isNegative() ? j.NEG_ONE : j.ZERO, this.Qp());
        }),
        (n.dk = function (n) {
          var i = 127 & n;
          return 0 === i
            ? this
            : i < 64
            ? t.Vp(this.Up.shru(i).or(this.jp.shl(64 - i)), this.jp.shru(i), this.Qp())
            : 64 === i
            ? t.Vp(this.jp, j.ZERO, this.Qp())
            : t.Vp(this.jp.shru(i - 64), j.ZERO, this.Qp());
        }),
        (n.Dm = function (n) {
          var i = this.jp.high >>> 16,
            r = 65535 & this.jp.high,
            e = this.jp.low >>> 16,
            u = 65535 & this.jp.low,
            o = this.Up.high >>> 16,
            f = 65535 & this.Up.high,
            s = this.Up.low >>> 16,
            c = 65535 & this.Up.low,
            h = n.jp.high >>> 16,
            a = 65535 & n.jp.high,
            v = n.jp.low >>> 16,
            l = 65535 & n.jp.low,
            _ = n.Up.high >>> 16,
            d = 65535 & n.Up.high,
            w = n.Up.low >>> 16,
            y = 0,
            p = 0,
            g = 0,
            m = 0,
            I = 0,
            k = 0,
            S = 0,
            b = 0;
          (S += (b += c + (65535 & n.Up.low)) >>> 16),
            (b &= 65535),
            (k += (S += s + w) >>> 16),
            (S &= 65535),
            (I += (k += f + d) >>> 16),
            (k &= 65535),
            (m += (I += o + _) >>> 16),
            (I &= 65535),
            (g += (m += u + l) >>> 16),
            (m &= 65535),
            (p += (g += e + v) >>> 16),
            (g &= 65535),
            (y += (p += r + a) >>> 16),
            (p &= 65535),
            (y += i + h),
            (y &= 65535);
          var E = this.Qp(),
            T = j.fromBits((g << 16) | m, (y << 16) | p, E),
            R = j.fromBits((S << 16) | b, (I << 16) | k, E);
          return t.Vp(R, T, E);
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
          var i = j.fromBits(4294967295, 0, !0),
            r = this.Up.and(i),
            e = this.Up.shru(32),
            u = this.jp.and(i),
            o = this.jp.shru(32),
            f = n.Up.and(i),
            s = n.Up.shru(32),
            c = n.jp.and(i),
            h = n.jp.shru(32),
            a = j.UZERO,
            v = j.UZERO,
            l = j.UZERO,
            _ = j.UZERO;
          (a = a.add(r.mul(f))),
            (v = v.add(a.shru(32))),
            (a = a.and(i)),
            (v = v.add(e.mul(f))),
            (l = l.add(v.shru(32))),
            (v = (v = v.and(i)).add(r.mul(s))),
            (l = l.add(v.shru(32))),
            (v = v.and(i)),
            (l = l.add(u.mul(f))),
            (_ = _.add(l.shru(32))),
            (l = (l = l.and(i)).add(e.mul(s))),
            (_ = _.add(l.shru(32))),
            (l = (l = l.and(i)).add(r.mul(c))),
            (_ = _.add(l.shru(32))),
            (l = l.and(i)),
            (_ = _.add(o.mul(f)).add(u.mul(s)).add(e.mul(c)).add(r.mul(h)).and(i));
          var d = j.fromBits(a.getLowBitsUnsigned(), v.getLowBitsUnsigned(), !0),
            w = j.fromBits(l.getLowBitsUnsigned(), _.getLowBitsUnsigned(), !0);
          return t.Vp(d, w, this.Qp());
        }),
        (n.wk = function (n) {
          var i,
            r,
            e = n;
          if (e.Yp()) throw new RangeError("division by zero");
          if (this.Yp()) return this.Qp() ? [t.Wp, t.Wp] : [t.qp, t.qp];
          if (this.Qp()) {
            if ((e.Qp() || (e = e.Kp()), e.ek(this))) return [t.Wp, this];
            if (e.ek(this.dk(1))) return [(r = t.yk), (i = this.Mp(e))];
            r = t.Wp;
          } else {
            if (this.dp(t.Xp)) {
              if (e.dp(t._k) || e.dp(t.pk)) return [t.Xp, t.qp];
              if (e.dp(t.Xp)) return [t._k, t.qp];
              var u = this.lk(1).bk(e).vk(1);
              return (
                u.dp(t.qp) ? (r = e.xp() ? t._k : t.pk) : ((i = this.Mp(e.gk(u))), (r = u.Dm(i.bk(e)))),
                [r, (i = this.Mp(e.gk(r)))]
              );
            }
            if (e.dp(t.Xp)) return this.Qp() ? [t.Wp, this] : [t.qp, this];
            if (this.xp()) {
              if (e.xp()) return this.Bp().wk(e.Bp());
              var o = this.Bp().wk(e);
              return (r = o[0]), (i = o[1]), [r.Bp(), i.Bp()];
            }
            if (e.xp()) {
              var f = this.wk(e.Bp());
              return (r = f[0]), (i = f[1]), [r.Bp(), i.Bp()];
            }
            r = t.qp;
          }
          for (i = this; i.rk(e); ) {
            for (
              var s = v.max(1, v.floor(i.Sp() / e.Sp())),
                c = v.ceil(v.log(s) / v.LN2),
                h = c <= 48 ? 1 : v.pow(2, c - 48),
                a = t.Hp(s),
                l = a.gk(e);
              l.xp() || l.ek(i);

            )
              (s -= h), (l = (a = t.Hp(s, this.Qp())).gk(e));
            a.Yp() && (a = t._k), (r = r.Dm(a)), (i = i.Mp(l));
          }
          return [r, i];
        }),
        (n.bk = function (t) {
          return this.wk(t)[0];
        }),
        (n.Ak = function (t) {
          return this.wk(t)[1];
        }),
        (n.toString = function (n) {
          var i = n || 10;
          if (i < 2 || i > 36) throw new RangeError("radix");
          if (this.Yp()) return "0";
          if (this.xp()) {
            if (this.dp(t.Xp)) {
              var r = t.Hp(i),
                e = this.bk(r),
                u = e.gk(r).Mp(this);
              return e.toString(i) + u.nk().toString(i);
            }
            return "-" + this.Bp().toString(i);
          }
          for (var o = t.Hp(v.pow(i, 6), this.Qp()), f = this, s = ""; ; ) {
            var c = f.bk(o),
              h = (f.Mp(c.gk(o)).nk() >>> 0).toString(i);
            if ((f = c).Yp()) return h + s;
            for (; h.length < 6; ) h = "0" + h;
            s = String(h) + s;
          }
        }),
        t
      );
    })();
    (Be.qp = Be.zp(j.ZERO)),
      (Be.Wp = Be.zp(j.UZERO)),
      (Be._k = Be.zp(j.ONE)),
      (Be.yk = Be.zp(j.UONE)),
      (Be.pk = Be.zp(j.NEG_ONE)),
      (Be.$p = Be.Vp(j.NEG_ONE, j.MAX_VALUE, !1)),
      (Be.Gp = Be.Vp(j.MAX_UNSIGNED_VALUE, j.MAX_UNSIGNED_VALUE, !0)),
      (Be.Xp = Be.Vp(j.ZERO, j.MIN_VALUE, !1));
    var Me = (function () {
      function t(t, n) {
        void 0 === n && (n = 1), (this.Tk = void 0), (this.Sk = void 0), (this.Tk = t), (this.Sk = n);
      }
      (t.Ek = function (n) {
        return new t(v.ceil(n.Tk), n.Sk);
      }),
        (t.Ik = function (n) {
          return new t(v.floor(n.Tk), n.Sk);
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
          return this.Sk >= n.Sk ? new t(v.abs(this.Tk - n.Ck(this.Sk).Tk), this.Sk) : n.Dp(this);
        }),
        (n.Np = function (t, n) {
          return this.Dp(t).Cp(n);
        }),
        (n.Ip = function (t) {
          return (i = t), (n = this).Sk >= i.Sk ? le(n.Tk, i.Ck(n.Sk).Tk) : le(n.Ck(i.Sk).Tk, i.Tk);
          var n, i;
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
        p(t, [
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
    (Me.Ok = new Me(1 / 6, 1)), (Me.qp = new Me(0)), (Me.xk = new Me(1 / 0)), (Me.Bk = 1e6);
    var xe = (function (t) {
      function n(n, i) {
        var r;
        return ((r = t.call(this) || this).di = void 0), (r.Sk = void 0), (r.di = n.toSigned()), (r.Sk = i >>> 0), r;
      }
      m(n, t),
        (n.Mk = function (t, i) {
          return void 0 === i && (i = 1e6), n.Hp(t * i, i);
        }),
        (n.Hp = function (t, i) {
          return d(t) ? n.Lk : t === 1 / 0 ? n.Fk : t === -1 / 0 ? n.Uk : new n(j.fromNumber(t), i);
        }),
        (n.zp = function (t, i) {
          return new n(t, i);
        }),
        (n.jk = function (t) {
          return n.Mk(t.Pk, 1e6);
        }),
        (n.Vk = function (t) {
          return new n(j.fromNumber(t.getTime()), 1e3);
        }),
        (n.Rk = function (t, n) {
          return t.Rp(n) ? t : n;
        }),
        (n.Nk = function (t, n) {
          return t.Cp(n) ? t : n;
        }),
        (n.zk = function (t, i, r) {
          return n.Rk(i, n.Nk(r, t));
        });
      var i = n.prototype;
      return (
        (i.xp = function () {
          return this.di.isNegative();
        }),
        (i.Yp = function () {
          return 0 !== this.Sk && this.di.isZero();
        }),
        (i.Fp = function () {
          return 0 === this.Sk && !this.di.isZero();
        }),
        (i.Lp = function () {
          return 0 === this.Sk && this.di.isZero();
        }),
        (i.Sp = function () {
          if (0 === this.Sk) return this.di.isZero() ? NaN : this.di.isNegative() ? -1 / 0 : 1 / 0;
          var t = this.di.divide(this.Sk),
            n = this.di.subtract(t.multiply(this.Sk));
          return t.toNumber() + n.toNumber() / this.Sk;
        }),
        (i.Jp = function () {
          if (0 === this.Sk) throw new c("Failed to convert timestamp");
          return this.di;
        }),
        (i.Hk = function () {
          return new Date(0 === this.Sk ? NaN : this.Ck(1e3).di.toNumber());
        }),
        (i.Wk = function () {
          return new Me(0 === this.Sk ? this.Sp() : this.di.toNumber(), this.Sk);
        }),
        (i.Ck = function (t, i) {
          void 0 === i && (i = Ue.qk);
          var r = this.Sk;
          if (r === t) return this;
          if (0 === r) return this;
          var e = dt(r, t);
          return new n(
            (function (t, n, i) {
              var r = t.wk(n),
                e = r[0],
                u = r[1];
              if (u.Yp()) return e;
              if (i === Ue.qk) return u.xp() ? e.Mp(Be._k) : e;
              if (i === Ue.Gk) return u.xp() ? e : e.Dm(Be._k);
              var o = u.gk(Be.Hp(2));
              return o.xp() ? (o.Bp().Pp(n) ? e : e.Mp(Be._k)) : o.Pp(n) ? e : e.Dm(Be._k);
            })(Be.zp(this.di).gk(Be.Hp(t / e)), Be.Hp(r / e), i).Jp(),
            t
          );
        }),
        (i.Ip = function (t) {
          if (this === t) return fe.ys;
          if (0 === this.Sk || 0 === t.Sk) return Fe(this, t);
          if (this.Yp()) return t.Yp() ? fe.ys : t.xp() ? fe.As : fe.Ts;
          if (t.Yp()) return this.xp() ? fe.Ts : fe.As;
          var n = v.min(this.Sk, t.Sk),
            i = this.Ck(n, Ue.Xk).di,
            r = t.Ck(n, Ue.Xk).di;
          return i.compare(r);
        }),
        (i.Bp = function () {
          return 0 === this.Sk ? Le(this) : new n(this.di.negate(), this.Sk);
        }),
        (i.Dm = function (t) {
          if (0 === this.Sk || 0 === t.Sk) return We(this, t);
          if (this.Yp()) return t;
          if (t.Yp()) return this;
          var i = v.max(this.Sk, t.Sk),
            r = this.Ck(i, Ue.Xk),
            e = t.Ck(i, Ue.Xk);
          return new n(r.di.add(e.di), i);
        }),
        (i.gk = function (t) {
          if (this.Lp() || d(t)) return n.Lk;
          if (this.Fp() || !isFinite(t)) {
            if (this.Yp() || 0 === t) return n.Lk;
            var i = this.xp() ? n.Uk : n.Fk;
            return t < 0 ? i.Bp() : i;
          }
          return this.Yp() ? this : new n(0 === t ? j.ZERO : this.di.multiply(t), this.Sk);
        }),
        (i.bk = function (t) {
          if (this.Lp() || d(t)) return n.Lk;
          if (this.Fp())
            return isFinite(t) ? (0 === t ? (1 / t < 0 ? this.Bp() : this) : t < 0 ? this.Bp() : this) : n.Lk;
          if (!isFinite(t)) return new n(j.ZERO, this.Sk);
          if (this.Yp()) return 0 === t ? n.Lk : new n(j.ZERO, this.Sk);
          if (0 === t) {
            var i = this.xp() ? n.Uk : n.Fk;
            return 1 / t < 0 ? i.Bp() : i;
          }
          return new n(this.di.divide(t), this.Sk);
        }),
        (i.$k = function () {
          return [this.di.low, this.di.high, this.Sk];
        }),
        n
      );
    })(Pe);
    function Le(t) {
      return t.Lp() ? t : t.xp() ? xe.Fk : xe.Uk;
    }
    function We(t, n) {
      return t.Lp() || n.Lp() ? xe.Lk : t.Fp() && n.Fp() ? (t.xp() === n.xp() ? t : xe.Lk) : t.Fp() ? t : n;
    }
    (xe.qp = new xe(j.ZERO, 1e6)),
      (xe.Lk = new xe(j.ZERO, 0)),
      (xe.Fk = new xe(j.ONE, 0)),
      (xe.Uk = new xe(j.NEG_ONE, 0));
    var Ue,
      Ve = (function (t) {
        function n(n, i) {
          var r;
          return (
            ((r = t.call(this) || this).di = void 0),
            (r.Sk = void 0),
            (r.di = BigInt.asIntN(64, n)),
            (r.Sk = i >>> 0),
            r
          );
        }
        m(n, t),
          (n.Mk = function (t, i) {
            return void 0 === i && (i = 1e6), n.Hp(t * i, i);
          }),
          (n.Hp = function (t, i) {
            return d(t) ? n.Lk : t === 1 / 0 ? n.Fk : t === -1 / 0 ? n.Uk : new n(BigInt(v.floor(t)), i);
          }),
          (n.zp = function (t, i) {
            return new n((BigInt(t.high) << BigInt(32)) | BigInt(t.low >>> 0), i);
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
          (n.zk = function (t, i, r) {
            return n.Rk(i, n.Nk(r, t));
          });
        var i = n.prototype;
        return (
          (i.xp = function () {
            return this.di < BigInt(0);
          }),
          (i.Yp = function () {
            return 0 !== this.Sk && this.di === BigInt(0);
          }),
          (i.Fp = function () {
            return 0 === this.Sk && this.di !== BigInt(0);
          }),
          (i.Lp = function () {
            return 0 === this.Sk && this.di === BigInt(0);
          }),
          (i.Sp = function () {
            if (0 === this.Sk) return this.di === BigInt(0) ? NaN : this.di < BigInt(0) ? -1 / 0 : 1 / 0;
            var t = this.di / BigInt(this.Sk),
              n = this.di - t * BigInt(this.Sk);
            return Number(t) + Number(n) / this.Sk;
          }),
          (i.Jp = function () {
            if (0 === this.Sk) throw new c("Failed to convert timestamp");
            return this.Qk();
          }),
          (i.Qk = function () {
            var t = this.di & BigInt(4294967295),
              n = (this.di >> BigInt(32)) & BigInt(4294967295);
            return j.fromBits(Number(t), Number(n));
          }),
          (i.Hk = function () {
            return new Date(0 === this.Sk ? NaN : Number(this.Ck(1e3).di));
          }),
          (i.Wk = function () {
            return new Me(0 === this.Sk ? this.Sp() : Number(this.di), this.Sk);
          }),
          (i.Ck = function (t, i) {
            void 0 === i && (i = Ue.qk);
            var r = this.Sk;
            if (r === t) return this;
            if (0 === r) return this;
            var e = dt(r, t);
            return new n(
              (function (t, n, i) {
                var r = t / n,
                  e = t - r * n;
                if (e === BigInt(0)) return r;
                if (i === Ue.qk) return e < BigInt(0) ? r - BigInt(1) : r;
                if (i === Ue.Gk) return e < BigInt(0) ? r : r + BigInt(1);
                var u = e * BigInt(2);
                return u < BigInt(0) ? (-u < n ? r : r - BigInt(1)) : u < n ? r : r + BigInt(1);
              })(this.di * BigInt(t / e), BigInt(r / e), i),
              t
            );
          }),
          (i.Ip = function (t) {
            if (this === t) return fe.ys;
            if (0 === this.Sk || 0 === t.Sk) return Fe(this, t);
            if (this.Yp()) return t.Yp() ? fe.ys : t.xp() ? fe.As : fe.Ts;
            if (t.Yp()) return this.xp() ? fe.Ts : fe.As;
            var n = v.min(this.Sk, t.Sk),
              i = this.Ck(n, Ue.Xk).di,
              r = t.Ck(n, Ue.Xk).di;
            return i > r ? fe.As : i < r ? fe.Ts : fe.ys;
          }),
          (i.Bp = function () {
            return 0 === this.Sk ? He(this) : new n(-this.di, this.Sk);
          }),
          (i.Dm = function (t) {
            if (0 === this.Sk || 0 === t.Sk) return Ge(this, t);
            if (this.Yp()) return t;
            if (t.Yp()) return this;
            var i = v.max(this.Sk, t.Sk),
              r = this.Ck(i, Ue.Xk),
              e = t.Ck(i, Ue.Xk);
            return new n(r.di + e.di, i);
          }),
          (i.gk = function (t) {
            if (this.Lp() || d(t)) return n.Lk;
            if (this.Fp() || !isFinite(t)) {
              if (this.Yp() || 0 === t) return n.Lk;
              var i = this.xp() ? n.Uk : n.Fk;
              return t < 0 ? i.Bp() : i;
            }
            return this.Yp() ? this : new n(0 === t ? BigInt(0) : this.di * BigInt(t), this.Sk);
          }),
          (i.bk = function (t) {
            if (this.Lp() || d(t)) return n.Lk;
            if (this.Fp())
              return isFinite(t) ? (0 === t ? (1 / t < 0 ? this.Bp() : this) : t < 0 ? this.Bp() : this) : n.Lk;
            if (!isFinite(t)) return new n(BigInt(0), this.Sk);
            if (this.Yp()) return 0 === t ? n.Lk : new n(BigInt(0), this.Sk);
            if (0 === t) {
              var i = this.xp() ? n.Uk : n.Fk;
              return 1 / t < 0 ? i.Bp() : i;
            }
            return new n(this.di / BigInt(t), this.Sk);
          }),
          (i.$k = function () {
            var t = this.Qk();
            return [t.low, t.high, this.Sk];
          }),
          p(n, null, [
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
      })(Pe);
    function He(t) {
      return t.Lp() ? t : t.xp() ? Ve.Fk : Ve.Uk;
    }
    function Ge(t, n) {
      return t.Lp() || n.Lp() ? Ve.Lk : t.Fp() && n.Fp() ? (t.xp() === n.xp() ? t : Ve.Lk) : t.Fp() ? t : n;
    }
    (Ve.Yk = void 0),
      (Ve.Zk = void 0),
      (Ve.Kk = void 0),
      (Ve.Jk = void 0),
      (function (t) {
        (t[(t.qk = 0)] = "qk"), (t[(t.Gk = 1)] = "Gk"), (t[(t.Xk = 2)] = "Xk");
      })(Ue || (Ue = {}));
    var je = (function () {
      try {
        return "function" == typeof BigInt && "bigint" == typeof BigInt(0);
      } catch (t) {
        return !1;
      }
    })()
      ? Ve
      : xe;
    function ze(t) {
      return je.zp(j.fromBits(t[0], t[1], !1), t[2]);
    }
    var Ke,
      qe,
      Xe,
      Ye,
      $e,
      Ze,
      Je = v.pow(2, 33),
      Qe = je.Hp(Je, 9e4);
    Qe.bk(2);
    O.In,
      (function (t) {
        (t[(t.oet = 0)] = "oet"),
          (t[(t.het = 1)] = "het"),
          (t[(t.aet = 2)] = "aet"),
          (t[(t.cet = 3)] = "cet"),
          (t[(t.fet = 4)] = "fet"),
          (t[(t.vet = 5)] = "vet");
      })(Ke || (Ke = {})),
      (function (t) {
        (t[(t.let = 0)] = "let"), (t[(t.det = 1)] = "det"), (t[(t._et = 2)] = "_et"), (t[(t.wet = 3)] = "wet");
      })(qe || (qe = {})),
      (function (t) {
        (t.e$ = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace'),
          (t.r$ = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'),
          (t.s$ = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace'),
          (t.u$ = 'Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif');
      })(Xe || (Xe = {})),
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
      })(Ye || (Ye = {})),
      (function (t) {
        (t.FONT_REGULAR = "regular"),
          (t.FONT_UNDERLINE = "underline"),
          (t.FONT_ITALICS = "italics"),
          (t.FONT_UNDERLINE_ITALICS = "underline-italics");
      })($e || ($e = {})),
      Ye.WHITE,
      Xe.s$,
      Ye.BLACK,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.GREEN,
      $e.FONT_REGULAR,
      Ye.GREEN,
      $e.FONT_UNDERLINE,
      Ye.BLUE,
      $e.FONT_REGULAR,
      Ye.BLUE,
      $e.FONT_UNDERLINE,
      Ye.CYAN,
      $e.FONT_REGULAR,
      Ye.CYAN,
      $e.FONT_UNDERLINE,
      Ye.RED,
      $e.FONT_REGULAR,
      Ye.RED,
      $e.FONT_UNDERLINE,
      Ye.YELLOW,
      $e.FONT_REGULAR,
      Ye.YELLOW,
      $e.FONT_UNDERLINE,
      Ye.MAGENTA,
      $e.FONT_REGULAR,
      Ye.MAGENTA,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_ITALICS,
      Ye.WHITE,
      $e.FONT_UNDERLINE_ITALICS,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      Ye.WHITE,
      $e.FONT_REGULAR,
      Ye.WHITE,
      $e.FONT_UNDERLINE,
      (function (t) {
        (t[(t.Let = 47)] = "Let"), (t[(t.Fet = 49)] = "Fet");
      })(Ze || (Ze = {}));
    var tu,
      nu = [128, 64, 32, 16, 8, 4, 2, 1];
    function iu(t, n) {
      var i = v.floor(n.bit / 8),
        r = 0 == (("function" == typeof t.bu ? t.bu(i) : t[i]) & nu[n.bit % 8]) ? 0 : 1;
      return (n.bit += 1), r;
    }
    function ru(t, n, i) {
      for (var r = 0, e = i; e > 0; ) (e -= 1), (r = 2 * r + iu(t, n));
      return r;
    }
    function eu(t, n) {
      for (var i = 0; 0 === iu(t, n) && i < 32; ) i += 1;
      return ru(t, n, i) + v.pow(2, i) - 1;
    }
    function uu(t, n) {
      var i = eu(t, n);
      return 1 & i ? v.floor((i + 1) / 2) : -v.floor(i / 2);
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
    })(tu || (tu = {}));
    var ou = [
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
    function fu(t, n, i) {
      for (var r = 8, e = 8, u = 0; u < i; u += 1) {
        if (0 !== e) e = (r + uu(t, n) + 256) % 256;
        r = 0 === e ? r : e;
      }
    }
    var su = (function () {
      function t(t) {
        (this.urt = void 0), (this.ort = []), (this.hrt = 0), (this.urt = t);
      }
      var n = t.prototype;
      return (
        (n.art = function () {
          for (var t = this.ort, n = v.max(0, this.hrt + t.length - 2), i = this.urt, r = i.xg, e = 0; n < r; n += 1) {
            var u = i.bu(n);
            0 === u ? (e += 1) : (3 === u && e >= 2 && t.push(n), (e = 0));
          }
          this.hrt = n - t.length;
        }),
        (n.crt = function (t) {
          for (var n = this.ort, i = t, r = 0; r < n.length; r++) {
            if (!(n[r] <= i)) return i;
            i += 1;
          }
          return i;
        }),
        (n.bu = function (t) {
          if (!(t > this.urt.xg)) return t > this.hrt && this.art(), this.urt.bu(this.crt(t));
        }),
        t
      );
    })();
    function cu(t, n) {
      no(t.video ? t.video : void 0);
      var i = Bo(t, !0),
        r = ro(t) + 8,
        e = du.length + i + r,
        u = (function (t, n) {
          var i = { video: [], audio: [] },
            r = 8 + n,
            e = { video: (t.video && t.video.GH) || [], audio: (t.audio && t.audio.GH) || [] },
            u = { nE: { QZ: Number.POSITIVE_INFINITY } },
            o = 0,
            f = 0,
            s = e.video[0] || u,
            c = e.audio[0] || u;
          for (; o < e.video.length || f < e.audio.length; )
            s.nE.QZ < c.nE.QZ
              ? (Oe(i.video, r), (r += s.xg), (s = e.video[(o += 1)] || u))
              : (Oe(i.audio, r), (r += c.xg), (c = e.audio[(f += 1)] || u));
          return i;
        })(t, du.length + i);
      return (
        n.p(e),
        n.io(du),
        Mo(n, t, i, u),
        (function (t, n, i) {
          var r,
            e = { nE: { QZ: Number.POSITIVE_INFINITY } },
            u = 0,
            o = 0,
            f = (n.video && n.video.GH) || [],
            s = (n.audio && n.audio.GH) || [],
            c = f.length,
            h = s.length,
            a = f[u] || e,
            v = s[o] || e;
          t.ro(i), t.io(yu);
          for (; u < c || o < h; )
            a.nE.QZ < v.nE.QZ ? ((r = a), (a = f[(u += 1)] || e)) : ((r = v), (v = s[(o += 1)] || e)), t.eo(r);
        })(n, t, r),
        n
      );
    }
    function hu(t, n, i) {
      var r = void 0 !== n ? n : void 0;
      no(t.video ? t.video : void 0);
      var e = Bo(t, !1, r),
        u = wu.length + e;
      return i.p(u), i.io(wu), Mo(i, t, e, void 0, r || je.qp), i;
    }
    function au(t, n, i, r, e) {
      var u = i.Sp(),
        o = r.Sp(),
        f = (function (t, n) {
          return 1 === nf(t, n) ? 52 : 44;
        })(t, o),
        s = Qo(t, u),
        c = ro(t) + 8,
        h = xo.length + f + s + c;
      return (
        e.p(h),
        e.io(xo),
        (function (t, n, i, r, e) {
          var u = (n.video && n.video._wt.Dm(je.Mk(n.video.duration, n.video._wt.Sk))) || je.qp,
            o = (n.audio && n.audio._wt.Dm(je.Mk(n.audio.duration, n.audio._wt.Sk))) || je.qp,
            f = je.Rk(u, o),
            s = v.round(e * to);
          t.ro(i),
            t.io(Lo),
            1 === nf(n, e)
              ? (t.ro(16777216), t.ro(1), t.ro(to), t.fo(j.fromNumber(s)), t.fo(j.ZERO))
              : (t.ro(0), t.ro(1), t.ro(to), t.ro(s), t.ro(0));
          t.so(0), t.so(1);
          var c = tf(n.video ? n.video : void 0),
            h = tf(n.audio ? n.audio : void 0);
          t.ro(Qo(n, r) + c + h + 8), of(t, f), t.io([144, 0, 0, 0]);
        })(e, t, f, u, o),
        (function (t, n, i, r, e) {
          t.ro(i),
            t.io(Wo),
            (function (t, n) {
              t.ro(Vo), t.io(Uo), t.ro(0), t.ro(n);
            })(t, r),
            ef(t, n, n.video ? n.video : void 0, 1, e),
            ef(t, n, n.audio ? n.audio : void 0, 2, e);
        })(e, t, s, n, u),
        (function (t, n, i) {
          var r = (n.video && n.video.GH) || [],
            e = (n.audio && n.audio.GH) || [];
          t.ro(i), t.io(yu);
          for (var u = 0; u < r.length; u++) {
            var o = r[u];
            t.eo(o);
          }
          for (var f = 0; f < e.length; f++) {
            var s = e[f];
            t.eo(s);
          }
        })(e, t, c),
        e
      );
    }
    function vu(t) {
      return t.vwt === Ee.Dwt || t.vwt === Ee.Swt || t.vwt === Ee.Ewt;
    }
    function lu(t) {
      return t.vwt === Ee.$wt;
    }
    function _u(t) {
      var n = t.length;
      if (n)
        for (var i = t[0].nE.wrt, r = 0; r < n; r += 1) {
          var e = t[r].nE;
          (e.zwt = e.grt.Mp(i)), (i = i.Dm(e.yrt));
        }
    }
    var du = [
        0, 0, 0, 32, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 97, 118,
        99, 49, 109, 112, 52, 49,
      ],
      wu = [
        0, 0, 0, 28, 102, 116, 121, 112, 109, 112, 52, 50, 0, 0, 0, 0, 105, 115, 111, 109, 109, 112, 52, 50, 100, 97,
        115, 104,
      ],
      yu = [109, 100, 97, 116],
      pu = [109, 111, 111, 118],
      gu = [109, 118, 104, 100],
      mu = [116, 114, 97, 107],
      Iu = [116, 107, 104, 100],
      ku = [109, 118, 101, 120],
      Su = [116, 114, 101, 120],
      bu = 32,
      Eu = [101, 100, 116, 115],
      Tu = [101, 108, 115, 116],
      Ru = [109, 100, 105, 97],
      Nu = [109, 100, 104, 100],
      Au = [99, 116, 116, 115],
      Du = [
        0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
      ],
      Ou = [
        0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
      ],
      Cu = 45,
      Pu = [109, 105, 110, 102],
      Fu = [0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0],
      Bu = 16,
      Mu = [0, 0, 0, 20, 118, 109, 104, 100, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      xu = 20,
      Lu = [
        0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114,
        108, 32, 0, 0, 0, 1,
      ],
      Wu = 36,
      Uu = [115, 116, 98, 108],
      Vu = [115, 116, 115, 100],
      Hu = [97, 118, 99, 67],
      Gu = [101, 115, 100, 115],
      ju = [115, 116, 115, 115],
      zu = [115, 116, 116, 115],
      Ku = [115, 116, 115, 99],
      qu = [115, 116, 115, 122],
      Xu = [115, 116, 99, 111],
      Yu = [112, 97, 115, 112],
      $u = [97, 118, 99, 49],
      Zu = [109, 112, 52, 97],
      Ju = [1, 0],
      Qu = [
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0,
      ],
      to = 9e4;
    function no(t) {
      if (t && !t.QT) {
        var n = t.Wlt,
          i = t.qlt;
        t.QT = (function (t, n) {
          var i = t.length,
            r = n.length,
            e = [];
          return (
            Ae(e, 1),
            Ae(e, t[1]),
            Ae(e, t[2]),
            Ae(e, t[3]),
            Ae(e, 255),
            Ae(e, 225),
            Ae(e, (65280 & i) >> 8),
            Ae(e, 255 & i),
            De(e, t),
            Ae(e, 1),
            Ae(e, (65280 & r) >> 8),
            Ae(e, 255 & r),
            De(e, n),
            e
          );
        })(n, i);
        var r = new Ce();
        r.ket(n, 0, n.length);
        var e = (function (t) {
          var n,
            i,
            r,
            e,
            u,
            o,
            f = new su(t),
            s = 0,
            c = 0,
            h = 0,
            a = 0,
            l = f.bu(1),
            _ = { bit: 32 };
          if ((eu(f, _), 100 === l || 110 === l || 122 === l || 144 === l)) {
            var d = eu(f, _);
            if ((3 === d && (n = iu(f, _)), eu(f, _), eu(f, _), iu(f, _), 1 === iu(f, _)))
              for (var w = 0; w < (3 !== d ? 8 : 12); w += 1) 1 === iu(f, _) && fu(f, _, w < 6 ? 16 : 64);
          }
          var y = eu(f, _),
            p = eu(f, _);
          if (0 === p) eu(f, _);
          else if (1 === p) {
            iu(f, _), uu(f, _), uu(f, _);
            for (var g = eu(f, _), m = 0; m < g; m += 1) uu(f, _);
          }
          eu(f, _), iu(f, _);
          var I = eu(f, _),
            k = eu(f, _),
            S = iu(f, _);
          if (
            (0 === S && iu(f, _),
            iu(f, _),
            1 === iu(f, _) && ((s = eu(f, _)), (c = eu(f, _)), (h = eu(f, _)), (a = eu(f, _))),
            1 === iu(f, _))
          ) {
            if (1 === iu(f, _)) {
              var b = ru(f, _, 8);
              if (255 === b) (i = ru(f, _, 16)), (r = ru(f, _, 16));
              else {
                var E = ou[b];
                E && ((i = E[0]), (r = E[1]));
              }
            }
            1 === iu(f, _) && iu(f, _),
              1 === iu(f, _) && (ru(f, _, 3), iu(f, _), 1 === iu(f, _) && (ru(f, _, 8), ru(f, _, 8), ru(f, _, 8))),
              1 === iu(f, _) && (eu(f, _), eu(f, _)),
              1 === (e = iu(f, _)) && ((u = ru(f, _, 32)), (o = ru(f, _, 32)), iu(f, _));
          }
          return {
            width: v.floor(16 * (I + 1) - 2 * s - 2 * c),
            height: v.floor((2 - S) * (k + 1) * 16 - 2 * h - 2 * a),
            oS: i,
            hS: r,
            frt: !!e && o / (2 * u),
            vrt: n,
            lrt: y,
          };
        })(r);
        (t.width = e && e.width), (t.height = e && e.height), e && e.oS && e.hS && ((t.oS = e.oS), (t.hS = e.hS));
      }
    }
    function io(t, n) {
      var i = t.frt || 0;
      if (vu(t)) return t.Bwt;
      var r = v.max(to, i);
      return n ? v.round(r) : r;
    }
    function ro(t) {
      var n = 0,
        i = function (t) {
          for (var n = t.length, i = 0, r = 0; r < n; r += 1) i += t[r].xg;
          return i;
        };
      return t.video && (n += i(t.video.GH)), t.audio && (n += i(t.audio.GH)), n;
    }
    function eo(t, n, i, r) {
      var e = je.Mk(0, t.Sk);
      return n ? (r || e).Dm(t) : i || e;
    }
    function uo(t, n, i) {
      var r = (t.video && eo(je.Mk(t.video.duration, to), n, i, t.video._wt)) || je.qp,
        e = (t.audio && eo(je.Mk(t.audio.duration, to), n, i, t.audio._wt)) || je.qp;
      return 0 !== je.Rk(r, e).Ck(to).Jp().high ? 1 : 0;
    }
    function oo(t, n, i) {
      return 1 === uo(t, n, i) ? 120 : 108;
    }
    function fo(t, n, i) {
      return 0 !== eo(je.Mk(t.duration, to), n, i, t._wt).Ck(to).Jp().high ? 1 : 0;
    }
    function so(t, n, i) {
      return 1 === fo(t, n, i) ? 104 : 92;
    }
    function co(t, n, i) {
      var r = io(t, !1),
        e = eo(je.Mk(t.duration, r), n, i);
      return e.Ep(je.Mk(v.pow(2, 32) - 1, e.Sk)) ? 1 : 0;
    }
    function ho(t, n, i) {
      return 1 === co(t, n, i) ? 44 : 32;
    }
    function ao(t) {
      if (t.hasOwnProperty("co")) return t.co;
      for (var n = 0, i = 0, r = t.GH; i < r.length; i++) {
        r[i].nE.krt && (n += 1);
      }
      return (t.co = n), n;
    }
    function vo(t, n) {
      var i = t.video && 0 !== a.keys(t.video).length,
        r = t.audio && 0 !== a.keys(t.audio).length;
      return n ? 0 : 8 + (i ? bu : 0) + (r ? bu : 0);
    }
    function lo(t) {
      return !lu(t) && t.Fwt ? t.Fwt.length + 12 : 0;
    }
    function _o(t) {
      return lu(t) ? 110 + t.QT.length + lo(t) + (t.oS && t.hS ? 16 : 0) : 52 + lo(t);
    }
    function wo(t, n) {
      return lu(t) && n ? 16 + 4 * ao(t) : 0;
    }
    function yo(t, n) {
      return t.lwt && n && lu(t) ? 16 + 8 * t.GH.length : 0;
    }
    function po(t, n) {
      return 20 + (n ? 4 * t.GH.length : 0);
    }
    function go(t, n) {
      return 16 + (n ? 4 * t.GH.length : 0);
    }
    function mo(t, n) {
      return lu(t) ? 16 + (n ? 8 * t.GH.length : 0) : 16 + (n ? 8 : 0);
    }
    function Io(t) {
      return 16 + (t ? 12 : 0);
    }
    function ko(t, n) {
      return 8 + _o(t) + wo(t, n) + yo(t, n) + mo(t, n) + Io(n) + po(t, n) + go(t, n);
    }
    function So(t, n) {
      return 8 + (lu(t) ? xu : Bu) + Wu + ko(t, n);
    }
    function bo(t, n, i) {
      return 8 + ho(t, n, i) + Cu + So(t, n);
    }
    function Eo(t) {
      var n = v.floor(to * t.duration || 0),
        i = t._wt;
      return n > v.pow(2, 31) - 1 || i.Ep(je.Hp(v.pow(2, 31) - 1, to)) ? 1 : 0;
    }
    function To(t, n) {
      return n ? (1 === Eo(t) ? 24 + (t._wt.Yp() ? 20 : 40) : 24 + (t._wt.Yp() ? 12 : 24)) : 0;
    }
    function Ro(t, n, i) {
      return t && 0 !== a.keys(t).length ? 8 + so(t, n, i) + bo(t, n, i) + To(t, n) : 0;
    }
    function No(t, n, i) {
      var r = _o(n),
        e = (function (t) {
          if (t === Ee.$wt) return $u;
          if (t === Ee.Dwt) return Zu;
          if (t === Ee.Swt || t === Ee.Ewt) return Zu;
          throw new c("unknown codec " + t);
        })(n.vwt);
      t.ro(r),
        t.io(Vu),
        t.ro(0),
        t.ro(1),
        t.ro(r - 16),
        t.io(e),
        t.ro(0),
        t.so(0),
        t.so(1),
        e === $u && lu(n)
          ? (t.ro(0),
            t.ro(0),
            t.ro(0),
            t.ro(0),
            t.so(n.width || 0),
            t.so(n.height || 0),
            t.so(72),
            t.so(0),
            t.so(72),
            t.so(0),
            t.ro(0),
            t.so(1),
            t.io([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            t.so(24),
            t.io([255, 255]),
            t.ro(8 + n.QT.length),
            t.io(Hu),
            t.io(n.QT))
          : e === Zu && vu(n) && (t.ro(0), t.ro(0), t.so(n.Lwt), t.so(16), t.so(0), t.so(0), t.so(n.Bwt), t.so(0)),
        lu(n) && n.oS && n.hS && (t.ro(16), t.io(Yu), t.ro(n.oS), t.ro(n.hS)),
        !lu(n) && n.Fwt && (t.ro(lo(n)), t.io(Gu), t.ro(0), t.io(n.Fwt));
    }
    function Ao(t, n, i) {
      var r = io(n, !0),
        e = i ? n.GH.length : 0;
      !(function (t) {
        var n = t.length;
        if (n) {
          var i = (t = ae(t, function (t, n) {
            return (function (t, n) {
              return t.Ip(n);
            })(t.nE.wrt, n.nE.wrt);
          }))[0].nE;
          i.Hwt = je.qp;
          for (var r = 1; r < n; r += 1) {
            var e = t[r].nE,
              u = e.wrt.Mp(i.wrt);
            (e.Hwt = je.Rk(u, je.qp)), (i = e);
          }
        }
      })(n.GH),
        t.ro(e);
      for (var u = 0; u < e; u += 1) {
        var o = n.GH[u].nE.Hwt;
        t.ro(1), t.ro(o.Ck(r, Ue.Xk).Jp().toInt());
      }
    }
    function Do(t, n, i, r) {
      var e = ko(n, !!r);
      t.ro(e),
        t.io(Uu),
        No(t, n),
        (function (t, n, i) {
          t.ro(mo(n, i)),
            t.io(zu),
            t.ro(0),
            lu(n)
              ? Ao(t, n, i)
              : (function (t, n, i) {
                  t.ro(i ? 1 : 0), i && (t.ro(n.GH.length), t.ro(n.Mwt));
                })(t, n, i);
        })(t, n, !!r),
        (function (t, n, i) {
          if (lu(n) && i) {
            var r = wo(n, i);
            t.ro(r), t.io(ju), t.ro(0), t.ro(ao(n));
            for (var e = 0; e < n.GH.length; e += 1) n.GH[e].nE.krt && t.ro(e + 1);
          }
        })(t, n, !!r),
        (function (t, n, i) {
          var r = io(n, !1);
          if (n.lwt && i && lu(n)) {
            _u(n.GH);
            var e = yo(n, i);
            t.ro(e), t.io(Au), t.ro(0), t.ro(n.GH.length);
            for (var u = 0, o = n.GH; u < o.length; u++) {
              var f = o[u].nE.zwt;
              t.ro(1), t.ro(f.Ck(r, Ue.Xk).Jp().toInt());
            }
          }
        })(t, n, !!r),
        (function (t, n) {
          t.ro(Io(n)), t.io(Ku), t.ro(0), t.ro(n ? 1 : 0), n && (t.ro(1), t.ro(1), t.ro(1));
        })(t, !!r),
        (function (t, n, i) {
          var r = po(n, i);
          if ((t.ro(r), t.io(qu), t.ro(0), t.ro(0), t.ro(i ? n.GH.length : 0), i))
            for (var e = 0, u = n.GH; e < u.length; e++) {
              var o = u[e];
              t.ro(o.xg);
            }
        })(t, n, !!r),
        (function (t, n, i) {
          var r = go(n, !!i);
          t.ro(r), t.io(Xu), t.ro(0), t.ro(i ? n.GH.length : 0), i && t.io(i);
        })(t, n, r);
    }
    function Oo(t, n, i, r) {
      var e = So(n, !!r);
      t.ro(e),
        t.io(Pu),
        lu(n)
          ? (function (t) {
              t.io(Mu);
            })(t)
          : (function (t) {
              t.io(Fu);
            })(t),
        (function (t) {
          t.io(Lu);
        })(t),
        Do(t, n, 0, r);
    }
    function Co(t, n, i, r, e) {
      var u = bo(n, !!r, e);
      t.ro(u),
        t.io(Ru),
        (function (t, n, i, r) {
          var e = ho(n, i, r),
            u = io(n, !1),
            o = eo(je.Mk(n.duration, u), i, r);
          (u = v.round(u)),
            t.ro(e),
            t.io(Nu),
            1 === co(n, i, r)
              ? (t.ro(16777216), t.fo(j.ZERO), t.fo(j.ZERO), t.ro(u), uf(t, o))
              : (t.ro(0), t.ro(0), t.ro(0), t.ro(u), of(t, o)),
            t.io([85, 196]),
            t.io([0, 0]);
        })(t, n, !!r, e),
        (function (t, n) {
          n ? t.io(Du) : t.io(Ou);
        })(t, lu(n)),
        Oo(t, n, 0, r);
    }
    function Po(t, n) {
      t.ro(bu), t.io(Su), t.ro(0), t.ro(n), t.ro(1), t.ro(0), t.ro(0), t.ro(0);
    }
    function Fo(t, n, i, r, e) {
      var u = Ro(n, !!i, e);
      n &&
        0 !== u &&
        (t.ro(u),
        t.io(mu),
        (function (t, n, i, r, e) {
          var u = eo(je.Mk(n.duration, to), r, e, n._wt),
            o = so(n, r, e),
            f = lu(n);
          t.ro(o),
            t.io(Iu),
            1 === fo(n, r, e)
              ? (t.ro(16777231), t.fo(j.ZERO), t.fo(j.ZERO), t.ro(i), t.ro(0), uf(t, u))
              : (t.ro(15), t.ro(0), t.ro(0), t.ro(i), t.ro(0), of(t, u)),
            t.ro(0),
            t.ro(0),
            t.so(0),
            t.so(f ? 0 : 1),
            t.io(f ? [0, 0] : Ju),
            t.io([0, 0]),
            t.io(Qu),
            lu(n) ? (t.so(n.width || 0), t.so(0), t.so(n.height || 0), t.so(0)) : (t.ro(0), t.ro(0));
        })(t, n, r, !!i, e),
        i &&
          (function (t, n) {
            var i = To(n, !0),
              r = v.floor(to * n.duration || 0),
              e = Eo(n);
            t.ro(i),
              t.io(Eu),
              t.ro(i - 8),
              t.io(Tu),
              1 === e ? t.ro(16777216) : t.ro(0),
              t.ro(n._wt.Yp() ? 1 : 2),
              n._wt.Yp() ||
                (1 === e
                  ? (uf(t, n._wt), t.io([255, 255, 255, 255, 255, 255, 255, 255]))
                  : (of(t, n._wt), t.io([255, 255, 255, 255])),
                t.so(1),
                t.so(0)),
              1 === e ? (t.fo(j.fromNumber(r)), t.fo(j.ZERO)) : (t.ro(r), t.ro(0)),
              t.so(1),
              t.so(0);
          })(t, n),
        Co(t, n, 0, i, e));
    }
    function Bo(t, n, i) {
      var r = Ro(t.video ? t.video : void 0, n, i),
        e = Ro(t.audio ? t.audio : void 0, n, i);
      return 8 + oo(t, n, i) + vo(t, n) + r + e;
    }
    function Mo(t, n, i, r, e) {
      t.ro(i),
        t.io(pu),
        (function (t, n, i, r) {
          var e = oo(n, i, r),
            u = (n.video && eo(je.Mk(n.video.duration, to), i, r, n.video._wt)) || je.qp,
            o = (n.audio && eo(je.Mk(n.audio.duration, to), i, r, n.audio._wt)) || je.qp,
            f = je.Rk(u, o);
          t.ro(e),
            t.io(gu),
            1 === uo(n, i, r)
              ? (t.ro(16777216), t.fo(j.ZERO), t.fo(j.ZERO), t.ro(to), uf(t, f))
              : (t.ro(0), t.ro(0), t.ro(0), t.ro(to), of(t, f)),
            t.io([0, 1, 0, 0]),
            t.io(Ju),
            t.io([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            t.io(Qu),
            t.ro(0),
            t.ro(0),
            t.ro(0),
            t.ro(0),
            t.ro(0),
            t.ro(0),
            t.ro(3);
        })(t, n, !!r, e),
        r ||
          (function (t, n) {
            t.ro(vo(n, !1)),
              t.io(ku),
              n.video && 0 !== a.keys(n.video).length && Po(t, 1),
              n.audio && 0 !== a.keys(n.audio).length && Po(t, 2);
          })(t, n),
        Fo(t, n.video ? n.video : void 0, r && r.video, 1, e),
        Fo(t, n.audio ? n.audio : void 0, r && r.audio, 2, e);
    }
    var xo = [0, 0, 0, 24, 115, 116, 121, 112, 109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105, 120],
      Lo = [115, 105, 100, 120],
      Wo = [109, 111, 111, 102],
      Uo = [109, 102, 104, 100],
      Vo = 16,
      Ho = [116, 114, 97, 102],
      Go = [116, 102, 104, 100],
      jo = 24,
      zo = [116, 102, 100, 116],
      Ko = [116, 114, 117, 110],
      qo = [115, 100, 116, 112];
    function Xo(t) {
      return lu(t) ? 20 + 16 * t.GH.length : 20 + 4 * t.GH.length;
    }
    function Yo(t) {
      return lu(t) ? 12 + t.GH.length : 0;
    }
    function $o(t, n) {
      var i = io(t, !0);
      return v.round(n * i) > v.pow(2, 32) - 1 ? 1 : 0;
    }
    function Zo(t, n) {
      return 1 === $o(t, n) ? 20 : 16;
    }
    function Jo(t, n) {
      return t && t.GH ? 8 + jo + Zo(t, n) + Xo(t) + Yo(t) : 0;
    }
    function Qo(t, n) {
      var i = Jo(t.audio ? t.audio : void 0, n),
        r = Jo(t.video ? t.video : void 0, n);
      return 8 + Vo + i + r;
    }
    function tf(t) {
      if (!t || !t.GH) return 0;
      for (var n = 0, i = 0, r = t.GH; i < r.length; i++) {
        n += r[i].xg;
      }
      return n;
    }
    function nf(t, n) {
      return v.round(n * to) > v.pow(2, 32) - 1 ? 1 : 0;
    }
    function rf(t, n, i, r) {
      lu(i)
        ? (function (t, n, i, r) {
            var e = Qo(n, r) + 8,
              u = io(i, !1);
            _u(i.GH), t.ro(Xo(i)), t.io(Ko), t.io([1, 0, 15, 1]), t.ro(i.GH.length), t.ro(e);
            for (var o = 0, f = i.GH; o < f.length; o++) {
              var s = f[o];
              t.ro(v.round(s.nE.Gw * u));
              var c = s.nE.zwt;
              t.ro(s.xg), t.io(s.nE.krt ? [2, 0, 0, 0] : [0, 1, 0, 0]), t.ro(c.Ck(u).Jp().toInt());
            }
          })(t, n, i, r)
        : (function (t, n, i, r) {
            var e = tf(n.video ? n.video : void 0),
              u = Qo(n, r) + 8 + e;
            t.ro(Xo(i)), t.io(Ko), t.io([0, 0, 2, 1]), t.ro(i.GH.length), t.ro(u);
            for (var o = 0, f = i.GH; o < f.length; o++) {
              var s = f[o];
              t.ro(s.xg);
            }
          })(t, n, i, r);
    }
    function ef(t, n, i, r, e) {
      i &&
        (t.ro(Jo(i, e)),
        t.io(Ho),
        (function (t, n, i) {
          var r = io(n, !0),
            e = lu(n) ? v.round(r / (n.gwt.Sp() || 0)) : n.Mwt;
          t.ro(jo), t.io(Go), t.ro(40), t.ro(i), t.ro(e), t.io(lu(n) ? [0, 1, 0, 0] : [2, 0, 0, 0]);
        })(t, i, r),
        (function (t, n, i) {
          var r = io(n, !0),
            e = v.round(i * r);
          t.ro(Zo(n, i)), t.io(zo), 1 === $o(n, i) ? (t.ro(16777216), t.fo(j.fromNumber(e))) : (t.ro(0), t.ro(e));
        })(t, i, e),
        rf(t, n, i, e),
        (function (t, n, i) {
          if (lu(i)) {
            t.ro(Yo(i)), t.io(qo), t.io([0, 0, 0, 0]);
            for (var r = 0, e = i.GH; r < e.length; r++) e[r].nE.krt ? t.ho(32) : t.ho(16);
          }
        })(t, 0, i));
    }
    function uf(t, n) {
      t.fo(n.Ck(to).Jp());
    }
    function of(t, n) {
      t.ro(n.Ck(to).Jp().toNumber());
    }
    var ff,
      sf = {
        vo: function (t, n) {
          n.p(
            (function (t) {
              var n = 0;
              return (
                t.audio &&
                  (n += (function (t) {
                    var n,
                      i = t.length,
                      r = 0;
                    for (n = 0; n < i; n += 1) r += t[n].xg;
                    return r;
                  })(t.audio.GH)),
                n
              );
            })(t)
          );
          for (var i = 0, r = (t.audio && t.audio.GH) || [], e = r.length; i < e; ) n.eo(r[i]), (i += 1);
        },
      },
      cf = (function () {
        function t(t) {
          (this.Li = void 0), (this.Ml = void 0), (this.lo = 0), (this.Ml = t);
        }
        var n = t.prototype;
        return (
          (n.wo = function (t, n, i) {
            var r = this.lo,
              e = this.Li;
            for (n = n || 0, i = i || t.length; n < i; n += 1, r += 1) e[r] = t[n];
            this.lo = r;
          }),
          (n.p = function (t) {
            (this.Li = new w(t)), (this.lo = 0);
          }),
          (n.ho = function (t) {
            this.Li && ((this.Li[this.lo] = t), (this.lo += 1));
          }),
          (n.io = function (t, n, i) {
            this.Li && this.wo(t, n, i);
          }),
          (n.eo = function (t) {
            this.lo = t.Ret(this.Li, this.lo);
          }),
          (n.$k = function (t) {
            return t(this.Li, this.Ml);
          }),
          (n.so = function (t) {
            return this.io([((n = t) >>> 8) & 255, 255 & n]);
            var n;
          }),
          (n.ro = function (t) {
            return this.io(Ne(t));
          }),
          (n.fo = function (t) {
            var n = t.toUnsigned();
            this.ro(n.high), this.ro(n.low);
          }),
          t
        );
      })(),
      hf = t;
    function af(t, n) {
      return (
        void 0 === ff &&
          (ff = (function () {
            var t = new w(1);
            try {
              return hf.postMessage(t, [t.buffer]), 0 === t.byteLength;
            } catch (t) {
              return !1;
            }
          })()),
        n && ff ? hf.postMessage(t, n) : hf.postMessage(t)
      );
    }
    var vf,
      lf,
      _f,
      df = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
      wf = 16383;
    function yf(t, n, i) {
      for (var r, e, u, o = [], f = n; f < i; f += 3)
        o.push(
          ((r = t[f]),
          (e = t[f + 1]),
          (u = t[f + 2]),
          df[r >> 2] + df[((3 & r) << 4) | (e >> 4)] + df[((15 & e) << 2) | (u >> 6)] + df[63 & u])
        );
      return o.join("");
    }
    function pf(t) {
      for (var n = t.length, i = n % 3, r = [], e = n - i, u = 0; u < e; u += wf) r.push(yf(t, u, v.min(e, u + wf)));
      if (1 === i) {
        var o = t[n - 1];
        r.push(df[o >> 2] + df[(3 & o) << 4] + "==");
      } else if (2 === i) {
        var f = t[n - 2],
          s = t[n - 1];
        r.push(df[f >> 2] + df[((3 & f) << 4) | (s >> 4)] + df[(15 & s) << 2] + "=");
      }
      return r.join("");
    }
    function gf(t) {
      return { IA: t.IA, nE: { QZ: t.nE.QZ, V$: ze(t.nE._rt) }, GH: t.GH };
    }
    function mf(t) {
      return { V$: ze(t.V$), wS: t.wS, Cet: t.Cet, Det: t.Det, Jr: t.Jr, KX: t.KX, Pet: t.Pet, Oet: t.Oet };
    }
    function If(t) {
      return {
        uwt: t.uwt,
        GH: [],
        vwt: t.vwt,
        lwt: t.lwt,
        duration: t.duration,
        dwt: t.dwt,
        _wt: ze(t._wt),
        frt: t.frt,
        gwt: ze(t.gwt),
        wwt: t.wwt,
        ywt: ze(t.ywt),
        mwt: ze(t.mwt),
        pwt: ze(t.pwt),
        kwt: ze(t.kwt),
        bwt: ze(t.bwt),
        Awt: ze(t.Awt),
        Twt: ze(t.Twt),
      };
    }
    function kf(t) {
      switch (t.vwt) {
        case Ee.Swt:
        case Ee.Ewt:
          return (function (t) {
            return xr({}, Sf(t), {
              vwt: t.vwt,
              GH: t.GH.map(function (t) {
                return (function (t) {
                  var n = bf(t),
                    i = ((r = n.nE), xr({}, Tf(r), { Iwt: r.Iwt, Rwt: r.Rwt, Nwt: r.Nwt }));
                  var r;
                  return n.Cu(i);
                })(t);
              }),
              Ylt: t.Ylt,
              Cwt: t.Cwt,
            });
          })(t);
        case Ee.Dwt:
          return (function (t) {
            return xr({}, Sf(t), {
              vwt: t.vwt,
              GH: t.GH.map(function (t) {
                return (function (t) {
                  var n = bf(t),
                    i = ((r = n.nE), xr({}, Tf(r), { PA: r.PA, aT: r.aT, Pwt: r.Pwt, Owt: r.Owt, xwt: r.xwt }));
                  var r;
                  return n.Cu(i);
                })(t);
              }),
            });
          })(t);
      }
    }
    function Sf(t) {
      return xr({}, If(t), { GH: [], vwt: t.vwt, Bwt: t.Bwt, Mwt: t.Mwt, Lwt: t.Lwt, Fwt: t.Fwt });
    }
    function bf(t) {
      var n = new Ce();
      return n.ket(t.Uwt, 0, t.jwt), (n.nE = t.Vwt), n;
    }
    function Ef(t) {
      var n;
      return xr({}, { QZ: (n = t).QZ, _rt: ze(n._rt) }, { grt: ze(t.grt), wrt: ze(t.wrt) });
    }
    function Tf(t) {
      return xr({}, Ef(t));
    }
    !(function (t) {
      (t.Dwt = "bkt"), (t.Sw = "Akt"), (t.Tkt = "Skt"), (t.Ekt = "Ikt"), (t.Rkt = "Nkt");
    })(vf || (vf = {})),
      (function (t) {
        (t.Ckt = "Dkt"), (t.Pkt = "Okt");
      })(lf || (lf = {})),
      (function (t) {
        (t.xkt = "audio/mp4"), (t.Bkt = "audio/mpeg"), (t.Mkt = "video/mp4");
      })(_f || (_f = {}));
    var Rf = t;
    function Nf(t, n, i) {
      (n = {}),
        i || (i = "PIW0031"),
        Rf.postMessage({ Abt: "Nbt", Tbt: t, Ebt: n.message || i, yo: n.name, ko: n.stack, bo: JSON.stringify(n) });
    }
    function Af(t, n) {
      return { Li: pf(t), Ml: n };
    }
    Rf.addEventListener(
      "message",
      function (t) {
        var n,
          i,
          r,
          e,
          u = t.data,
          o = u.tbt,
          f = u.rbt,
          s = u.ibt,
          c = [],
          h =
            f === lf.Ckt
              ? function (t, n, i) {
                  return t.push(n.buffer), { Li: n, Ml: i };
                }.bind(void 0, c)
              : Af;
        if ("nbt" === o) {
          (r = (function (t) {
            return {
              audio: t.audio ? kf(t.audio) : void 0,
              video: t.video
                ? ((i = t.video),
                  (r = If(i)),
                  xr({}, r, {
                    vwt: i.vwt,
                    GH: i.GH.map(function (t) {
                      return (function (t) {
                        var n,
                          i = bf(t),
                          r = xr({}, Ef((n = i.nE)), {
                            Gw: n.Gw,
                            yrt: ze(n.yrt),
                            mrt: n.mrt,
                            prt: n.prt,
                            zwt: n.zwt && ze(n.zwt),
                            Hwt: n.Hwt && ze(n.Hwt),
                            krt: n.krt,
                            Trt: n.Trt,
                            brt: n.brt,
                            Art: n.Art,
                          });
                        return i.Cu(r);
                      })(t);
                    }),
                    Wwt: i.Wwt,
                    qwt: i.qwt,
                    QT: i.QT,
                    width: i.width,
                    height: i.height,
                    dht: i.dht,
                    Gwt: i.Gwt,
                    ght: i.ght,
                    Wlt: i.Wlt,
                    qlt: i.qlt,
                    oS: i.oS,
                    hS: i.hS,
                  }))
                : void 0,
              swt: t.swt
                ? ((n = t.swt),
                  { uwt: n.uwt, Ddt: n.Ddt, iw: n.iw, owt: n.owt, hwt: n.hwt, awt: n.awt, cwt: n.cwt.map(gf), aw: [] })
                : void 0,
              brt: t.brt ? t.brt.map(mf) : t.brt,
              fwt: ze(t.fwt),
            };
            var n, i, r;
          })(u.ubt)),
            (u.ubt = void 0);
          try {
            if ((e = u.ebt) === vf.Rkt || e === vf.Ekt || e === vf.Tkt)
              n = (function (t, n) {
                var i = t.sbt,
                  r = t.obt,
                  e = ze(t.abt),
                  u = ze(t.cbt),
                  o = t.hbt && ze(t.hbt);
                switch (t.ebt) {
                  case vf.Tkt:
                    var f = new cf(i);
                    return au(n, r, e, u, f), f;
                  case vf.Ekt:
                    var s = new cf(i);
                    return hu(n, o, s), s;
                  case vf.Rkt:
                    var c = {
                      Bbt: new cf(i),
                      Mbt: new cf(i),
                      $k: function (t) {
                        return { Bbt: c.Bbt.$k(t), Mbt: c.Mbt.$k(t) };
                      },
                    };
                    return hu(n, o, c.Bbt), au(n, r, e, u, c.Mbt), c;
                }
              })(u, r);
            else {
              if (
                !(function (t) {
                  var n = t.ebt;
                  return n === vf.Sw || n === vf.Dwt;
                })(u)
              )
                return Nf(s, {}, "PIW0072");
              n = (function (t, n) {
                var i = t.sbt;
                switch (t.ebt) {
                  case vf.Dwt:
                    var r = new cf(i);
                    return sf.vo(n, r), r;
                  case vf.Sw:
                    var e = new cf(i);
                    return cu(n, e), e;
                }
              })(u, r);
            }
          } catch (t) {
            return Nf(s, t, "PIW0082");
          }
          try {
            i = n.$k(h);
          } catch (t) {
            return Nf(s, t, "PIW0077");
          }
          try {
            return af({ Abt: "Ibt", Tbt: s, Sbt: i }, c);
          } catch (t) {
            return Nf(s, t, "PIW0078");
          }
        }
        return Nf(s, {}, "PIW0090");
      },
      !1
    ),
      Rf.postMessage({ Ayt: "3.7.0" });
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
