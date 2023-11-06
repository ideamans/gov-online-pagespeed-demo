var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, a, b) {
  d instanceof String && (d = String(d));
  for (var c = d.length, e = 0; e < c; e++) {
    var f = d[e];
    if (a.call(b, f, e, d)) return { i: e, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (d, a, b) {
        d != Array.prototype && d != Object.prototype && (d[a] = b.value);
      };
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, a, b, c) {
  if (a) {
    b = $jscomp.global;
    d = d.split(".");
    for (c = 0; c < d.length - 1; c++) {
      var e = d[c];
      e in b || (b[e] = {});
      b = b[e];
    }
    d = d[d.length - 1];
    c = b[d];
    a = a(c);
    a != c && null != a && $jscomp.defineProperty(b, d, { configurable: !0, writable: !0, value: a });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (d) {
    return d
      ? d
      : function (a, b) {
          return $jscomp.findInternal(this, a, b).v;
        };
  },
  "es6",
  "es3"
);
var inettv = inettv || {};
inettv.$inettv = $.noConflict(!0);
void 0 === jQuery && (jQuery = inettv.$inettv);
void 0 === $ && ($ = inettv.$inettv);
$("body").find(".activityMovie").length &&
  $("div.activityMovie").removeClass("activityMovie").addClass("activityMovieRename");
(function (d) {
  void 0 === inettv.args &&
    ((inettv.forceOldPlayer = !1),
    (inettv.args = {}),
    (inettv.players = {}),
    (inettv.embedDivPrefix = "movi_"),
    (inettv.theoHost = "https://dwl.gov-online.go.jp/video/cao/dl/theoplayer/"),
    (inettv.baseUrl = function (a, b) {
      var c = "";
      d("script").each(function () {
        if (!d(this).attr("src")) return !0;
        if (
          d(this)
            .attr("src")
            .match(/inettv\.js/)
        ) {
          "0" == b
            ? ((c = d(this)
                .attr("src")
                .match(/(\/\/.*?)\//)) &&
                (c = d(this)
                  .attr("src")
                  .match(/(\/\/.*?)\//)[0]),
              (c =
                -1 != c.indexOf("nettv-apptest")
                  ? "https://nettv-apptest.gov-online.go.jp/"
                  : "https://nettv.gov-online.go.jp/"))
            : (c = location.protocol + "//" + location.host + "/");
          if ("1" === a || "en" === a) c += "eng/";
          return !1;
        }
      });
      "" == c && "0" == b && ((c = "https://nettv.gov-online.gp.jp/"), "1" === a || "en" === a) && (c += "eng/");
      return c;
    }),
    (inettv.isSupportHLSSubtitle = (function () {
      var a = navigator.userAgent ? navigator.userAgent : "",
        b = a.match(/Chrome\/(\d+)/);
      a = a.match(/CPU OS (\d+)_(\d+)/);
      return (b && 30 <= Number(b[1])) || (a && 7 <= Number(a[1])) ? !0 : !1;
    })()),
    (inettv.Message = {
      unsupportedPlatform: [
        "\u304a\u624b\u6301\u3061\u306e\u7aef\u672b\u3067\u306f\u518d\u751f\u3067\u304d\u307e\u305b\u3093\u3002",
        "We are sorry, there are not the movie files that support your device.",
      ],
      unsupportedHLS: [
        "\u52d5\u753b\u3092\u518d\u751f\u3059\u308b\u306b\u306f\u3001video\u30bf\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u304c\u5fc5\u8981\u3067\u3059\u3002",
        "We are sorry, this movie needs a browser that supports html5 video.",
      ],
      getAdobeFlashPlayer: ["Adobe Flash Player \u3092\u53d6\u5f97", "Get Adobe Flash Player"],
    }),
    (inettv.getParams = function (a) {
      var b = {};
      b.width = a.w || "640";
      b.height = a.h || "360";
      b.firstPlay = a.fp || "0";
      b.firstPlay = "0" == b.firstPlay ? "1" : "0";
      b.liveMode = a.lm || "0";
      b.ptype = a.pt || "0";
      b.languageId = parseInt(a.l);
      b.language = "0" === a.l ? "jpn" : "en";
      b.embed = a.e || "1";
      b.scale = "1" === a.s ? "1" : "0";
      "0" === a.a ? (b.aspectRatio = 0.5625) : "1" === a.a && (b.aspectRatio = 0.75);
      b.old = a.o || "0";
      "1" === b.old && ((b.width = 480), (b.height = 270));
      b.OldPlayer = a.f || "0";
      inettv.forceOldPlayer && (b.OldPlayer = "1");
      b.poster = a.t || "1";
      b.getDuration = a.gd || "0";
      b.if = a.if || "0";
      return b;
    }),
    (inettv.Resume = {
      set: function (a, b) {
        a = "resume_" + a;
        var c = b,
          d = new Date();
        "0" === b || "" === b ? (d.setTime(d.getTime() - 1e3), (c = "")) : d.setTime(d.getTime() + 864e5);
        a = encodeURIComponent(a);
        c = encodeURIComponent(c);
        document.cookie = a + "=" + c + "; expires=" + d.toGMTString();
      },
      get: function (a) {
        return (a = ("; " + document.cookie + ";").match(new RegExp("; resume_" + a + "=(.*?);")))
          ? decodeURIComponent(a[1])
          : "0";
      },
      clear: function (a) {
        inettv.Resume.set(a, "0");
      },
      play: function (a, b, c) {
        "0" != c && (b.currentTime = c);
      },
    }),
    (inettv.Logger = {
      checkPlatform: function () {
        var a = navigator.userAgent ? navigator.userAgent : 0,
          b = a.match(/(Android [0-9]+[.][0-9]+|Android [0-9]+)/);
        if (b) return b ? b[1] : "";
        if ((b = a.match(/(iPhone|iPad|iPod).+OS (\d+)_(\d+)_?(\d+)?/)))
          return b ? b[1] + " " + b[2] + (b[3] ? "." + b[3] : "") + (b[4] ? "." + b[4] : "") : "";
        a = navigator.platform ? navigator.platform : "0";
        return -1 != a.indexOf("Win") ? "1" : -1 != a.indexOf("Mac") ? "2" : "0";
      },
      checkBrowser: function () {
        var a = navigator.userAgent ? navigator.userAgent : 0;
        return -1 != a.indexOf("MSIE")
          ? 1
          : -1 != a.indexOf("Trident/")
          ? 1
          : -1 != a.indexOf("Edge/")
          ? 1
          : -1 != a.indexOf("Firefox/")
          ? 2
          : -1 != a.indexOf("Netscape/")
          ? 3
          : -1 != a.indexOf("Opera/")
          ? 4
          : -1 != a.indexOf("Chrome/")
          ? 7
          : -1 != a.indexOf("CriOS/")
          ? 7
          : -1 != a.indexOf("Safari/")
          ? 5
          : -1 != a.indexOf("Camino/")
          ? 6
          : 0;
      },
      getCurrentUrl: function () {
        return encodeURI(location.protocol + "//" + location.hostname + location.pathname);
      },
      mlog: function (a, b) {
        var c = inettv.getParams(inettv.args[a]),
          e = inettv.baseUrl(c.language, c.embed),
          f = "i=" + a + "&e=" + c.embed + "&p=" + c.ptype + "&b=";
        f = "0" == c.embed ? f + ("&d=" + inettv.Logger.getCurrentUrl()) : f + "&d=";
        b && (f += "&r=1");
        f += "&o=" + this.checkBrowser() + "&w=" + this.checkPlatform() + "&u=/prg/mplaylist.m3u8?pid=" + a;
        d.ajax({ type: "POST", url: e + "common/mlog.php", data: f, success: function () {} });
      },
    }),
    (inettv.getPinfo = function (a, b, c, e) {
      var f = { Sts: "0", pl: "", cid: "", enc: "", img: "", text: "", chapter: "" };
      if (
        (a = d.ajax({
          type: "GET",
          url: inettv.baseUrl(0, c) + "common/pinfo.php",
          data: "pid=" + a + "&e=" + b + "&pf=" + e + "&em=" + c,
          async: !1,
        }).responseText) &&
        -1 != a.indexOf("Sts=1")
      )
        for (b = new RegExp(/[\?&]([^&=]+)=?([^&]*)/g); (match = b.exec(a)); )
          f[match[1]] = match[2].replace(/\r?\n/g, "");
      return f;
    }),
    (inettv.showUnsupported = function (a) {
      d("div#" + inettv.embedDivPrefix + a).append(
        "<p>" + inettv.Message.unsupportedPlatform[inettv.args[a].l] + "</p>"
      );
    }),
    (inettv.FlashPlayer = function (a) {
      var b = 145,
        c = inettv.getParams(inettv.args[a]),
        e = inettv.baseUrl(c.language, c.embed);
      "1" === c.old
        ? ((b = 96), (e += "HDSMoviePlayer.swf"), (c.width = 480), (c.height = 270))
        : ((e += "HDSMoviePlayerNew.swf"), (c.width = 640), (c.height = 360));
      var f = !window.location.search.substring(1) || (window.location.search.substring(1).match("a=1") ? !0 : !1);
      f =
        "prgid=" +
        a +
        "&firstPlay=" +
        ("0" == c.embed ? "0" : 1 == f ? "1" : "0") +
        "&liveMode=" +
        c.liveMode +
        "&ptype=" +
        c.ptype +
        "&embed=" +
        c.embed +
        "&language=" +
        c.language +
        "&enlarge=" +
        c.scale +
        "&pf=" +
        inettv.Logger.checkPlatform() +
        "&brw=" +
        inettv.Logger.checkBrowser() +
        "&hpath=" +
        inettv.Logger.getCurrentUrl();
      var g = inettv.Message.getAdobeFlashPlayer[c.languageId],
        l = "sameDomain";
      "0" == c.embed && (l = "always");
      d("div#" + inettv.embedDivPrefix + a).append(
        '<div style="width:' +
          c.width +
          "px;height:" +
          (parseInt(c.height) + b) +
          'px"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%" id="HDSMoviePlayer" align="middle"><param name="movie" value="' +
          e +
          '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="transparent" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="lt" /><param name="allowScriptAccess" value="' +
          l +
          '" /><param name="FlashVars" value="' +
          f +
          '" /><param name="allowFullScreen" value="true" />\x3c!--[if !IE]>--\x3e<object type="application/x-shockwave-flash" data="' +
          e +
          '" width="100%" height="100%"><param name="movie" value="' +
          e +
          '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="play" value="true" /><param name="loop" value="true" /><param name="wmode" value="transparent" /><param name="menu" value="true" /><param name="devicefont" value="false" /><param name="salign" value="lt" /><param name="allowScriptAccess" value="' +
          l +
          '" /><param name="FlashVars" value="' +
          f +
          '" /><param name="allowFullScreen" value="true" />\x3c!--<![endif]--\x3e<a href="https://www.adobe.com/go/getflash"><img src="https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="' +
          g +
          '" /></a>\x3c!--[if !IE]>--\x3e</object>\x3c!--<![endif]--\x3e</object></div>'
      );
    }),
    (inettv.HLSPlayer = function (a) {
      var b = d("div#" + inettv.embedDivPrefix + a),
        c = inettv.getParams(inettv.args[a]),
        e = inettv.baseUrl(c.language, c.embed),
        f = inettv.Resume.get(a),
        g = 0,
        l = function (a) {
          if (void 0 === a) return !1;
          var b = a.toString().match(/(.*):(.*):(.*)\.(.*)/);
          return b
            ? ((a = 3600 * parseInt(b[1], 10) + 60 * parseInt(b[2], 10) + parseInt(b[3], 10)),
              4 < b.length && (a += parseInt(b[4], 10) / 1e3),
              a)
            : parseFloat(a) && isFinite(a)
            ? parseFloat(a)
            : !1;
        },
        m = function () {
          setTimeout(function () {
            b.find("video").css({ width: "100%", height: b.width() * c.aspectRatio + "px" });
            d("div.subtitle_container").css({
              position: "absolute",
              top: b.find("video").height() - 90 + "px",
              width: b.find("video").width() + "px",
            });
          }, 500);
        };
      d(window).bind("resize orientationchange", function () {
        m();
      });
      if (!b.find("video").length) {
        var p = "none";
        !0 === inettv.isSupportHLSSubtitle && (p = 0 === c.languageId ? "ja" : "en");
        b.append(
          d(
            '<video controls onclick="this.play();" id="my_movie_' +
              a +
              '" width="' +
              c.width +
              '" height="' +
              c.height +
              '"><source src="' +
              e +
              "prg/mplaylist.m3u8?pid=" +
              a +
              '" type="video/mp4"><track kind="subtitles" src="' +
              inettv.baseUrl(0, c.embed) +
              "common/subtitle.php?pid=" +
              a +
              "&e=" +
              c.languageId +
              '" srclang="' +
              p +
              '" default><p>' +
              inettv.Message.unsupportedHLS[c.languageId] +
              '</p></video><div class="subtitle_container"><span class="subtitle"></span></div>'
          )
        );
      }
      (function (c) {
        d(c).bind("play", function () {
          d("div.subtitle_container").each(function () {
            d(this).children("span.subtitle").css({ visibility: "hidden" });
          });
        });
        d(c).bind("stop", function () {
          d(c)
            .parentsUntil("div[id^=" + inettv.embedDivPrefix + "]")
            .siblings("div.subtitle_container")
            .children()
            .css({ visibility: "hidden" });
        });
        d(c).bind("pause", function () {
          inettv.Resume.set(a, this.currentTime);
        });
        d(c).bind("ended", function () {
          inettv.Resume.clear(a);
        });
        d(c).bind("timeupdate", function () {
          if ("0" != f)
            f > this.currentTime && 2 > g
              ? ((g += 1), inettv.Resume.play(a, this, f))
              : ((f = "0"), inettv.Resume.clear(a));
          else if (d(c).children("track").length && !0 !== inettv.isSupportHLSSubtitle)
            for (
              var e = d(c).children("track")[0].inettvTrack.cues,
                m = b.find("div.subtitle_container").children(),
                k = 0;
              k < e.length;
              k++
            ) {
              var h = e[k];
              if (this.currentTime.toFixed(3) > l(h.startTime) && this.currentTime.toFixed(3) < l(h.endTime)) {
                m.html(h.text);
                -1 === h.text.indexOf("br /") ? m.css({ "margin-top": "24px" }) : m.css({ "margin-top": "0" });
                m.css({ visibility: "visible" });
                break;
              } else m.css({ visibility: "hidden" });
            }
        });
      })(b.find("video"));
      b.css({ position: "relative", padding: "0", margin: "0" });
      b.find("div.subtitle_container").css({
        position: "absolute",
        left: "0",
        top: b.find("video").height() - 90 + "px",
        padding: "0",
        margin: "0",
        width: "100%",
        color: "#fff",
        "text-align": "center",
        "-webkit-user-select": "none",
        cursor: "default",
        "z-index": 9999,
      });
      b.find("div.subtitle_container")
        .find("span.subtitle")
        .css({
          padding: "4px",
          opacity: "0.8",
          display: "inline-block",
          "border-radius": "6px",
          width: "95%",
          background: "#333",
          "line-height": "24px",
          visibility: "hidden",
        });
      m();
      var n = b.find("video").children("track");
      if (void 0 === n[0]) n[0] = { inettvTrack: { cues: [] } };
      else {
        if (!0 === inettv.isSupportHLSSubtitle) return b;
        void 0 === n[0].track ? (n[0].track = { cues: [], mode: "hidden" }) : (n[0].track.mode = "hidden");
        n[0].inettvTrack = { cues: [] };
        d.ajax({
          method: "get",
          url: n.attr("src"),
          type: "html",
          success: function (a) {
            var b = -1 != a.indexOf("\r\n") ? "\r\n" : "\n";
            a = a.split(b + b);
            for (var c = 1; c < a.length; c++) {
              var d = a[c].split(b);
              d[0] && !d[0].match(/\d/) && d.splice(0, 0, "");
              n[0].inettvTrack.cues[c - 1] = {
                id: d[0],
                startTime: d[1].split(" --\x3e ")[0],
                endTime: d[1].split(" --\x3e ")[1],
                text: d.slice(2).join("<br />"),
              };
            }
          },
        });
      }
      return b;
    }),
    (inettv.iPhonePlayer = function (a) {
      var b = inettv.Resume.get(a),
        c = 0,
        e = inettv.getParams(inettv.args[a]),
        f = inettv.baseUrl(e.language, e.embed),
        g = d("div#" + inettv.embedDivPrefix + a),
        l = "none";
      !0 === inettv.isSupportHLSSubtitle && (l = 0 === e.languageId ? "ja" : "en");
      f =
        '<video onclick="this.play();" id="my_movie" controls width="280" height="160" style="padding:0px 0px;" autostart=0 autoplay=0>' +
        ('<source src="' + f + "prg/mplaylist.m3u8?pid=" + a + '" type="video/mp4"></source>') +
        ('<track kind="captions" src="' +
          inettv.baseUrl(0, e.embed) +
          "common/subtitle.php?pid=" +
          a +
          "&e=" +
          e.languageId +
          '" srclang="' +
          l +
          '" label="' +
          (0 === e.languageId ? "Japanese" : "English") +
          '" default></track>');
      f += "<p>" + inettv.Message.unsupportedPlatform[e.languageId] + "</p>";
      g.append(f + "</video>");
      (function (e) {
        d(e).bind("pause", function () {
          inettv.Resume.set(a, this.currentTime);
        });
        d(e).bind("ended", function () {
          inettv.Resume.clear(a);
        });
        d(e).bind("timeupdate", function () {
          "0" != b &&
            (b > this.currentTime && 2 > c
              ? ((c += 1), inettv.Resume.play(a, this, b))
              : ((b = "0"), inettv.Resume.clear(a)));
        });
      })(g.find("video"));
      g.find("video")[0].load();
      g.find("video")[0].play();
      g.css({ position: "relative", padding: "0", margin: "0" });
      return g;
    }),
    (inettv.InettvPlayer = function (a, b) {
      var c = d("div#" + inettv.embedDivPrefix + a),
        e = inettv.getParams(inettv.args[a]),
        f = inettv.baseUrl(0, e.embed);
      inettv.baseUrl(e.language, e.embed);
      var g = inettv.getPinfo(a, e.languageId, e.embed, b);
      if (!c.find(".theopayer-container").length) {
        var l = function (a) {
            a.preventDefault();
          },
          m = 0 === e.languageId ? "ja" : "en",
          p = "0" == b ? 280 : e.width,
          n = "0" == b ? 160 : e.height,
          q = "2" != b ? !0 : !1,
          r = !1,
          t = "1" === e.if ? !0 : !1;
        t && (r = !0);
        var k = "2" == b ? !0 : !1;
        "0" == e.embed ? -1 == location.host.indexOf("kantei.go.jp") && (k = !1) : ((k = !1), (q = !0));
        k
          ? ((k = c.get(0)),
            (k.className = "theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"))
          : ((k = document.createElement("div")),
            (k.className = "theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"),
            c.append(k));
        var h = new THEOplayer.Player(k, {
          isEmbeddable: t,
          libraryLocation: inettv.theoHost,
          ui: {
            width: p,
            height: n,
            language: m,
            fluid: q,
            languages: {
              ja: {
                "Play Video": "\u518d\u751f",
                Pause: "\u4e00\u6642\u505c\u6b62",
                Subtitles: "\u5b57\u5e55",
                Options: "\u8a2d\u5b9a",
                Settings: "\u8a2d\u5b9a",
                Fullscreen: "\u5168\u753b\u9762",
                "Non-Fullscreen": "\u5168\u753b\u9762\u89e3\u9664",
                Quality: "\u753b\u8cea",
                Automatic: "\u81ea\u52d5",
                Speed: "\u901f\u5ea6",
                Normal: "\u6a19\u6e96",
                Mute: "\u30df\u30e5\u30fc\u30c8(\u6d88\u97f3)",
                Unmute: "\u30df\u30e5\u30fc\u30c8\u89e3\u9664",
              },
            },
          },
        });
        p = {};
        a = [
          { src: g.pl + "?cid=" + g.cid + "&enc=" + g.enc + "&pf=" + b + "&pid=" + a, type: "application/x-mpegurl" },
        ];
        b = [];
        g.text &&
          b.push({
            default: !1,
            kind: "subtitles",
            label: 0 == e.languageId ? "\u65e5\u672c\u8a9e" : "English",
            src: f + "common/subtitle.php?f=" + g.text,
            srclang: m,
          });
        p = 0 === b.length ? { sources: a } : { sources: a, textTracks: b };
        h.source = p;
        h.textTrackStyle.fontFamily =
          "'\u30e1\u30a4\u30ea\u30aa', 'Meiryo','Hiragino Kaku Gothic Pro', '\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3', '\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af', Helvetica, Arial, Verdana, sans-serif;";
        h.textTrackStyle.fontColor = "white";
        h.textTrackStyle.fontSize = "75%";
        h.textTrackStyle.edgeStyle = "dropshadow";
        h.textTrackStyle.backgroundColor = "undefined";
        g.img && "1" === e.poster && (h.poster = g.img);
        h.autoplay = r;
        h.addEventListener("playing", function (a) {
          "1" === e.getDuration && "function" == typeof getDuration && getDuration(h.duration);
        });
        h.presentation.addEventListener("presentationmodechange", function (a) {
          "fullscreen" == h.presentation.currentMode
            ? document.addEventListener("touchmove", l, { passive: !1 })
            : document.removeEventListener("touchmove", l);
        });
      }
      d(".theo-context-menu").css("display", "none");
      c.css({ position: "relative", padding: "0", margin: "0" });
      return c;
    }),
    (jQuery.cachedScript = function (a, b) {
      b = d.extend(b || {}, { dataType: "script", cache: !0, url: a });
      return jQuery.ajax(b);
    }),
    d(document).ready(function () {
      var a = !1;
      d("script").each(function () {
        if (this.src && -1 != this.src.indexOf("inettv.js")) {
          for (var b = new RegExp(/[\?&]([^&=]+)=?([^&]*)/g), c, d = {}; (c = b.exec(this.src)); ) d[c[1]] = c[2];
          inettv.args[d.p] = d;
          "0" == d.e && (a = !0);
        }
      });
      var b = inettv.Logger.checkPlatform(),
        c = !1;
      if (
        (b.match(/(iPhone|iPad|iPod)/) && 3 <= b.match(/([0-9]+)\..*/)[1]) ||
        (b.match(/Android/) && 3 <= b.match(/Android ([0-9]+)/)[1]) ||
        ("0" == b && navigator.platform && -1 == navigator.platform.indexOf("Linux"))
      )
        c = !0;
      a &&
        0 == c &&
        -1 == location.host.indexOf("kantei.go.jp") &&
        d('<link rel="stylesheet" href="' + inettv.theoHost + 'ui_inettv.css">').appendTo("head");
      d('<link rel="stylesheet" href="' + inettv.theoHost + 'ui.css">').appendTo("head");
      var e = !0,
        f;
      for (f in inettv.args)
        if (0 != inettv.getParams(inettv.args[inettv.args[f].p]).languageId) {
          e = !1;
          break;
        }
      e && d('<link rel="stylesheet" href="' + inettv.theoHost + 'ui_inettv_custom.css">').appendTo("head");
      d.cachedScript(inettv.theoHost + "THEOplayer.js").done(function (a, d) {
        for (var e in inettv.args)
          (a = inettv.args[e].p),
            parseInt(a) in inettv.players ||
              ((d = inettv.getParams(inettv.args[a])),
              c
                ? ("0" == d.embed
                    ? -1 == inettv.Logger.getCurrentUrl().indexOf("/prg/") && inettv.Logger.mlog(inettv.args[a].p)
                    : inettv.Logger.mlog(inettv.args[a].p, !0),
                  window.location.href.match(/\/mobile/) ||
                  b.match(/(iPhone|iPod)/) ||
                  (b.match(/Android/) && -1 != navigator.userAgent.indexOf("Mobile")) ||
                  "0" == b
                    ? (inettv.players[a] =
                        "1" === d.OldPlayer ? new inettv.iPhonePlayer(a) : new inettv.InettvPlayer(a, "0"))
                    : (inettv.players[a] =
                        "1" === d.OldPlayer ? new inettv.HLSPlayer(a) : new inettv.InettvPlayer(a, "1")))
                : b.match(/(iPhone|iPad|iPod)/) && 3 > b.match(/([0-9]+)\..*/)[1]
                ? inettv.showUnsupported(a)
                : "1" === d.OldPlayer
                ? (inettv.players[a] = new inettv.FlashPlayer(a))
                : (("0" != d.embed && "0" !== d.firstPlay) || inettv.Logger.mlog(inettv.args[a].p),
                  (inettv.players[a] = new inettv.InettvPlayer(a, "2"))));
      });
    }));
})(inettv.$inettv || window.jQuery);
