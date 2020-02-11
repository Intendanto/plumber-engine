var THREE = require('three');


window.f = {
  nop: function () {
  }, identity: function (e) {
    return e
  }, nextprime: function (e) {
    if (!e) return [2, 3];
    e:for (var t = e[e.length - 1] + 2; ; t++) {
      for (var i = 0; i < e.length; i++) if (t % e[i] == 0) continue e;
      return e.push(t), e
    }
  }, factorize: function (e, t) {
    t || (t = f.nextprime());
    for (var i = [], n = e, o = 0; 1 < n;) {
      for (; o > t.length - 1;) f.nextprime(t);
      for (var s = 0, r = t[o]; n / r % 1 == 0;) n /= r, s++;
      i.push(s), o++
    }
    return i
  }, lcm: function (e) {
    for (var t = [], i = 0, n = f.nextprime(), o = 0; o < e.length; o++) for (var s = f.factorize(
      e[o],
      n
    ), r = (i = Math.max(s.length, t.length), 0); r < i; r++) t[r] = Math.max(s[r] || 0, t[r] || 0);
    var a = 1;
    for (o = 0; o < t.length; o++) a *= t[o] * n[o];
    return a
  }, sum: function (e, t) {
    return e + t
  }, sub: function (e, t) {
    return e - t
  }, nsort: function (i, e) {
    var n = e ? -1 : 1;
    return function (e, t) {
      return null == e || null == t ? -1 : n * (e[i] - t[i])
    }
  }, zerosort: function (e, t) {
    return e && t ? e[0] - t[0] : 0
  }, sort: function (e, t, i) {
    for (var n = e.length, o = [], s = 0; s < n; s++) {
      var r = e[s];
      o.push([t.call(i, r), r])
    }
    o.sort(f.zerosort);
    for (s = 0; s < n; s++) e[s] = o[s][1];
    return e
  }, max: function (e) {
    return Math.max.apply(0, e)
  }, min: function (e) {
    return Math.min.apply(0, e)
  }, amap: function (e, t, i, n, o, s) {
    if (e && e.length && "function" == typeof t) for (var r = 0, a = []; r < e.length; r++) a.push(t.call(
      i,
      e[r],
      n,
      o,
      s
    ));
    return a
  }, atog: function (e, t, i) {
    if (e) {
      for (var n = e.length - 1; 0 <= n; n--) if (e[n] === t) {
        if (i) return;
        e.splice(n, 1)
      }
      i && e.push(t)
    }
  }, apick: function (e, t, i, n) {
    if (e) for (var o, s = 0, r = e.length; s < r; s++) if (((o = e[s]) && o[t] === i) ^ n) return o
  }, apickf: function (e, t, i, n) {
    if (e) for (var o, s = 0, r = e.length; s < r; s++) if (o = e[s], t.call(i, o) ^ n) return o
  }, afind: function (e, t, i, n) {
    if (e) for (var o, s = 0, r = e.length, a = []; s < r; s++) ((o = e[s]) && o[t] === i) ^ n && a.push(o);
    return a
  }, afindf: function (e, t, i, n) {
    if (e) for (var o, s = 0, r = e.length, a = []; s < r; s++) o = e[s], t.call(i, o) ^ n && a.push(o);
    return a
  }, adiff: function (e, t) {
    for (var i = {
      prev: t || [],
      next: e || [],
      rem: [],
      remi: [],
      remc: 0,
      add: [],
      addi: [],
      addc: 0
    }, n = i.prev.length - 1; 0 <= n; n--) {
      var o = i.prev[n];
      -1 === (s = i.next.indexOf(o)) && (i.rem.push(o), i.remi.push(n), i.remc++)
    }
    for (var s = 0; s < i.next.length; s++) {
      o = i.next[s];
      -1 === (n = i.prev.indexOf(o)) && (i.add.push(o), i.addi.push(s), i.addc++)
    }
    return i
  }, adrop: function (e, t) {
    var i = e.indexOf(t);
    return ~i && e.splice(i, 1), e
  }, aflat: function (e) {
    return [].concat.apply([], e)
  }, jeq: function (e, t) {
    if (e === t) return !0;
    var i, n = typeof e;
    if (n !== typeof t) return !1;
    switch (n) {
      case"boolean":
      case"number":
      case"string":
        return !1
    }
    if (!e || !t) return !1;
    if (e.length !== t.length) return !1;
    for (i in e) if (i in t == !1) return !1;
    for (i in t) if (!f.jeq(e[i], t[i])) return !1;
    return !0
  }, seq: function (e, t) {
    return e.length === t.length && 0 === f.snot(e, t).length
  }, sor: function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      var i = arguments[t];
      if (i) for (var n = 0; n < i.length; n++) {
        var o = i[n];
        -1 === e.indexOf(o) && e.push(o)
      }
    }
    return e
  }, sand: function (e, t) {
    if (!e || !t) return [];
    for (var i = [], n = 0, o = e.length; n < o; n++) {
      var s = e[n];
      -1 !== t.indexOf(s) && -1 === i.indexOf(s) && i.push(s)
    }
    return i
  }, sxor: function (e, t) {
    if (!e || !t) return e || (t || []);
    for (var i = [].concat(e, t), n = i.length - 1; 0 <= n; n--) {
      var o = i.indexOf(i[n]);
      n !== o && (i.splice(n, 1), i.splice(o, 1), n--)
    }
    return i
  }, snot: function (e, t) {
    t = t || [];
    for (var i = [], n = 0, o = (e = e || []).length; n < o; n++) {
      var s = e[n];
      -1 === t.indexOf(s) && -1 === i.indexOf(s) && i.push(s)
    }
    return i
  }, uniqp: function (n, o) {
    return function (e, t, i) {
      return !n ^ i.indexOf(e) === (o ? i.lastIndexOf(e) : t)
    }
  }, uniq: function (e, t, i) {
    return i.indexOf(e) === t
  }, uniqi: function (e, t, i) {
    return i.indexOf(e) !== t
  }, uniqm: function (e, t, i) {
    return i.indexOf(e) === i.lastIndexOf(e)
  }, uniqim: function (e, t, i) {
    return i.indexOf(e) !== i.lastIndexOf(e)
  }, clamp: function (e, t, i) {
    return e < t ? t : i < e ? i : e
  }, rand: function (e) {
    return Math.floor(Math.random() * (+e || 1))
  }, any: function (e) {
    return e && e[f.rand(e.length)]
  }, exp: function (e) {
    var t = 0, i = Math.abs(e);
    if (0 === i || !isFinite(i)) return i;
    if (i < 1) for (; Math.pow(10, t) > i;) t--; else for (; Math.pow(10, t + 1) <= i;) t++;
    return t
  }, hround: function (e) {
    return Math.round(100 * e) / 100
  }, pround: function (e, t) {
    var i = +t || 0;
    if (i < 0) {
      var n = Math.pow(10, -i);
      return Math.round(e / n) * n
    }
    n = Math.pow(10, i);
    return Math.round(e * n) / n
  }, mround: function (e, t) {
    return f.pround(e, t - f.exp(e))
  }
}, f.xrad = Math.PI / 180, f.torad = function (e) {
  return e * f.xrad
}, f.xdeg = 180 / Math.PI, f.todeg = function (e) {
  return e * f.xdeg
}, f.radist = function (e) {
  return Math.abs(e) > Math.PI ? e - 2 * Math.PI * Math.ceil(Math.floor(Math.abs(e) / Math.PI) / 2) * (e < 0 ? -1 : 1) : e
}, f.prop = function (e) {
  var i = arguments;
  return function (e) {
    for (var t = 0; e && t < i.length; t++) e = e[i[t]];
    return e
  }
}, f.pset = function (t, i) {
  return function (e) {
    e[t] = i
  }
}, f.func = function (t) {
  for (var i = [], e = 1; e < arguments.length; e++) i.push(arguments[e]);
  return function (e) {
    return e[t] && "function" == typeof e[t].apply && e[t].apply(e, i)
  }
}, f.range = function (e) {
  e = +e || 0;
  for (var t = [], i = 0; i < e; i++) t.push(i);
  return t
}, f.rangep = function (e, t, i) {
  e = isNaN(e) ? 0 : +e, t = null == t ? 0 : t, i = null == i ? "number" == typeof t ? 1 : 0 : i;
  for (var n = [], o = 0; o < e; o++) n.push(i ? o * i + t : t);
  return n
}, f.qsenc = function (e, t) {
  t || (t = "&=");
  var i = [];
  for (var n in e) {
    var o = encodeURIComponent(n), s = e[n];
    if (null != s) if (s instanceof Array) for (var r = 0; r < s.length; r++) i.push(o + t[1] + encodeURIComponent(s[r])); else i.push(
      o + t[1] + encodeURIComponent(s))
  }
  return i.join(t[0])
}, f.qsdec = function (e, t) {
  t || (t = "&=");
  for (var i = {}, n = e.split(t[0]), o = 0; o < n.length; o++) {
    var s = n[o].split(t[1]), r = decodeURIComponent(s[0]), a = decodeURIComponent(s[1]);
    if (r in i) {
      var l = i[r];
      l instanceof Array ? l.push(a) : i[r] = [l, a]
    } else i[r] = a
  }
  return i
}, f.follow = function (e, t) {
  for (var i = []; e; e = e[t]) i.push(e);
  return i
}, f.copy = function (e, t) {
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
  return e
}, f.copylist = function (e, t, i) {
  for (var n in t) -1 !== i.indexOf(n) && Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e
}, f.merge = function () {
  for (var e = {}, t = 0; t < arguments.length; t++) f.copy(e, arguments[t]);
  return e
}, f.throttle = function (t, i) {
  var n = 0;
  return function () {
    var e = new Date;
    if (t < e - n) return n = e, i.apply(this, arguments)
  }
}, f.postpone = function (e, t) {
  var i = !1, n = !1;
  return function () {
    i ? n = !0 : (i = !0, setTimeout(o, e))
  };

  function o() {
    n ? (n = !1, setTimeout(o, e)) : (i = !1, t())
  }
}, f.charmap = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", f.randchar = function () {
  return f.any(f.charmap)
}, f.implode = function (e, i, t, n) {
  return t || (t = /#\{(\w+)\}/g), e.replace(t, function (e, t) {
    return t in i ? i[t] : n ? e : ""
  })
}, f.nzformat = function (e, t, i) {
  if (isNaN(e)) return e + "";
  var n = Math.abs(e), o = t - Math.max(0, f.exp(n));
  return (e < n ? "-" : "") + (1 < o ? Array(o).join(i || "0") : "") + n
}, f.nformat = function (e, t, i) {
  var n = Math.abs(e), o = e < n, s = isNaN(e) ? 2 : f.exp(n), r = i ? "0" : " ", a = t - Math.max(0, s) - o - 1;
  return (i && o ? "-" : r) + (1 < a ? Array(a).join(r) : "") + (!i && o ? e : n)
}, f.dformat = function (i, e) {
  var n = {Y: "getFullYear", M: "getMonth", D: "getDate", h: "getHours", i: "getMinutes", s: "getSeconds"}, o = {M: 1};
  return e.replace(/([YMDhis])(\1+)?/g, function (e, t) {
    return f.nzformat(i[n[t]]() + (o[t] || 0), e.length)
  })
}, f.tformat = function (e, t) {
  null == t && (t = {}), null == t.join && (t.join = " "), null == t.align && (t.align = !1);
  for (var i = e.length, n = e[0].length, o = f.rangep(n, 0, 0), s = [], r = 0; r < i; r++) {
    for (var a = e[r], l = [], h = 0; h < n; h++) {
      var c = null == a[h] ? "" : a[h] + "";
      !h && t.indent && t.indent.length && (c = t.indent[r % t.indent.length] + c), o[h] = Math.max(
        o[h],
        c.length
      ), l.push(c)
    }
    s.push(l)
  }
  for (r = 0; r < i; r++) for (l = s[r], h = 0; h < n; h++) {
    c = l[h];
    var d = o[h], u = Array(d + 1 - c.length).join(" ");
    l[h] = (t.align instanceof Array ? t.align[h] : t.align) ? c + u : u + c
  }
  var p = [];
  for (r = 0; r < i; r++) p.push(s[r].join(t.join));
  return p.join("\n")
}, f.tindsym = ["└", "├", " ", "│"], f.tind = function (e) {
  for (var t = ""; 1 < e; e >>= 1) t = f.tindsym[e % 2 + 2 * !!t.length] + t;
  return t
}, f.tmap = function (e, t, i, n, o, s, r, a) {
  if (n || (n = {}), !e || n.stop) return n;
  if (null == o && (o = 0, s = 1, n.print && (n.collect || (n.collect = []), n.indent || (n.indent = []))), null == o && (o = 0), null == s && (s = 1), null != n.maxdepth && o > n.maxdepth) return n;
  if (null == n.mindepth || o >= n.mindepth) {
    var l = t.call(i || e, e, n, o, r, a);
    if (n.stop) return n;
    n.collect && n.collect.push(l), n.print && n.indent.push(f.tind(s))
  }
  var h = n.property ? e[n.property] : e.children;
  if (!h) return n;
  for (var c = h.length, d = n.reverse, u = d ? c - 1 : 0; d ? 0 <= u : u < c; d ? u-- : u++) f.tmap(
    h[u],
    t,
    i,
    n,
    o + 1,
    +(u < c - 1) + (s << 1),
    e,
    u
  );
  return n.print && 0 === o && console.log(f.tformat(
    n.collect,
    {join: n.join || "", align: n.align || [1], indent: n.indent}
  ) + "\n"), n
}, f.rgb = function (e) {
  return "rgb(" + [255 * e[0] | 0, 255 * e[1] | 0, 255 * e[2] | 0] + ")"
}, f.rgba = function (e, t) {
  return "rgba(" + [255 * e[0] | 0, 255 * e[1] | 0, 255 * e[2] | 0].concat(isNaN(t) ? 1 : +t) + ")"
}, f.rcolor = function (e) {
  return "rgba(" + [255, 255, 255].map(f.rand).concat(+e || 1) + ")"
}, f.softcolor = function (e) {
  var t = 2 * Math.PI, i = t * e;
  return [Math.cos(i) / 2 + .5, Math.cos(i + 2 / 3 * t) / 2 + .5, Math.cos(i + 1 / 3 * t) / 2 + .5]
}, f.mitm = function (e, t, i, n) {
  var o = e[t], s = "function" == typeof o;
  e[t] = function () {
    var e = i.call(this, t, arguments, o);
    return n ? e : s ? o.apply(this, arguments) : o
  }
}, f.inspect = function (e, t) {
  for (var i in e) "function" == typeof e[i] && f.mitm(e, i, t)
}, f.binds = function (e, t) {
  if ("function" != typeof e) throw Error("object to bind is not a function");
  return function () {
    return e.apply(t, arguments)
  }
}, f.binda = function (e, t, i) {
  if ("function" != typeof e) throw Error("object to bind is not a function");
  return function () {
    return e.apply(t, i)
  }
}, f.bindr = function (n, o, s, r) {
  if ("function" != typeof n) throw Error("object to bind is not a function");
  return function () {
    for (var e = [], t = 0, i = 0; i < s.length; i++) e.push(s[i] === r ? arguments[t++] : s[i]);
    for (; t < arguments.length;) e.push(arguments[t++]);
    return n.apply(o, e)
  }
}, f.unit = function (parent, object) {
  arguments.length < 2 && "function" != typeof parent && (object = parent, parent = null);
  var proto = parent ? f.copy(Object.create(parent.prototype), object) : object,
    Unit = eval("(function " + (proto.unitName || "Unit") + '() {if(typeof this.init === "function") this.init.apply(this, arguments)})');
  return Unit.New = function () {
    var e = Object.create(Unit.prototype);
    return Unit.apply(e, arguments), e
  }, Unit.prototype = proto, proto.protochain = proto.protochain ? proto.protochain.concat(proto) : [proto], proto.constructor = Unit, Unit
}, function () {
  if (Date.now || (Date.now = function () {
    return (new Date).getTime()
  }), window.performance || (window.performance = {}), !window.performance.now) {
    var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
    window.performance.now = function () {
      return Date.now() - e
    }
  }
}(), function () {
  var r, t = {startPoint: null, startEvent: null, endPoint: null, endEvent: null, touch: !1, moves: 0},
    i = {startPoint: null, startEvent: null, endPoint: null, endEvent: null, touch: !0, moves: 0};
  try {
    new MouseEvent("tap")
  } catch (e) {
    window.MouseEvent = function (e, t) {
      var i = document.createEvent("MouseEvents");
      return i.initMouseEvent(
        e,
        t.bubbles,
        t.cancelable,
        t.view,
        t.detail,
        t.screenX,
        t.screenY,
        t.clientX,
        t.clientY,
        t.ctrlKey,
        t.altKey,
        t.shiftKey,
        t.metaKey,
        t.button,
        t.relatedTarget
      ), i
    }
  }

  function n(e) {
    t.startPoint.pageX === e.pageX && t.startPoint.pageY === e.pageY || t.moves++
  }

  function o(e) {
    if (e.startPoint && e.endPoint && !(2 < e.moves)) {
      var t = e.endPoint.pageX - e.startPoint.pageX, i = e.endPoint.pageY - e.startPoint.pageY;
      if (!((e.touch ? 64 : 25) < t * t + i * i)) {
        var n = window.performance.now();
        if (!(n - r < 50 && e.endEvent.isTrusted)) {
          r = n;
          var o = new MouseEvent(
            "tap",
            {
              bubbles: !0,
              cancelable: !0,
              pageX: e.endPoint.pageX,
              pageY: e.endPoint.pageY,
              screenX: e.endPoint.screenX,
              screenY: e.endPoint.screenY,
              clientX: e.endPoint.clientX,
              clientY: e.endPoint.clientY,
              altKey: e.endEvent.altKey,
              ctrlKey: e.endEvent.ctrlKey,
              shiftKey: e.endEvent.shiftKey,
              metaKey: e.endEvent.metaKey,
              view: e.endEvent.view
            }
          );
          o.touch = e.touch, o.timeDelta = e.endEvent.timeStamp - e.startEvent.timeStamp;
          var s = e.endEvent.target;
          e.startPoint = null, e.endPoint = null, e.startEvent = null, e.endEvent = null, s.dispatchEvent(o)
        }
      }
    }
  }

  document.addEventListener("touchstart", function (e) {
    i.startPoint = e.changedTouches[0], i.startEvent = e, i.moves = 0
  }, !0), document.addEventListener("touchmove", function (e) {
    i.startPoint.pageX === e.pageX && i.startPoint.pageY === e.pageY || i.moves++
  }, !0), document.addEventListener("touchend", function (e) {
    i.endPoint = e.changedTouches[0], i.endEvent = e, o(i)
  }, !0), document.addEventListener("mousedown", function (e) {
    1 === e.which && (t.moves = 0, t.startEvent = e, t.startPoint = e, document.addEventListener("mousemove", n, !0))
  }, !0), document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", n, !0), t.endPoint = e, t.endEvent = e, o(t)
  }, !0)
}(), Function.prototype.bind || (Function.prototype.bind = function (t) {
  var i = Array.prototype.slice.call(arguments, 1), n = this;
  return function () {
    var e = Array.prototype.slice.call(arguments);
    return n.apply(t, i.concat(e))
  }
}), window.requestAnimationFrame = window.requestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
  return setTimeout(e, 1e3 / 60)
}, window.cancelAnimationFrame = window.cancelAnimationFrame || window.OCancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout,
  window.dom = {
  one: function (e, t) {
    return (t || document).querySelector(e)
  }, all: function (e, t) {
    return [].slice.call((t || document).querySelectorAll(e))
  }, elem: function (e, t, i) {
    var n = document.createElement(e);
    return t && (n.className = t), i && i.appendChild(n), n
  }, span: function (e, t) {
    return dom.elem("span", e, t)
  }, div: function (e, t) {
    return dom.elem("div", e, t)
  }, input: function (e, t, i) {
    var n = dom.elem("input", t, i);
    return n.setAttribute("type", e), n
  }, option: function (e, t, i) {
    var n = dom.elem("option", null, i);
    return dom.text(n, t), n.value = e, n
  }, img: function (e, t, i) {
    var n = dom.elem("img", t, i);
    return e && (n.src = e), n
  }, a: function (e, t, i) {
    var n = dom.elem("a", t, i);
    return e && (n.href = e), n
  }, append: function (e, t) {
    if (e instanceof Node) for (var i = 1; i < arguments.length; i++) {
      (t = arguments[i]) instanceof Node && e.appendChild(t)
    }
    return e
  }, prepend: function (e, t) {
    e instanceof Node && t instanceof Node && e.insertBefore(t, e.firstChild)
  }, insert: function (e, t, i) {
    e instanceof Node && t instanceof Node && e.insertBefore(t, i instanceof Node ? i : null)
  }, remove: function () {
    for (var e = 0; e < arguments.length; e++) {
      var t = arguments[e];
      t && t.parentNode && t.parentNode.removeChild(t)
    }
  }, empty: function (e) {
    for (; e.firstChild;) e.removeChild(e.firstChild)
  }
}, dom.children = function () {
  var t = Array.prototype.slice;

  function i(e) {
    return e.nodeType === Node.ELEMENT_NODE
  }

  return function (e) {
    return t.call(e.childNodes).filter(i)
  }
}(), dom.ancestor = function (e, t) {
  for (; e;) {
    if (e === t) return !0;
    e = e.parentNode
  }
}, dom.onceover = function (e, t) {
  return !dom.ancestor(e.relatedTarget, t) && dom.ancestor(e.target, t)
}, dom.onceout = function (e, t) {
  return !dom.ancestor(e.relatedTarget, t)
}, dom.on = function (e, t, i, n) {
  t.addEventListener(e, i, !!n)
}, dom.off = function (e, t, i, n) {
  t.removeEventListener(e, i, !!n)
}, dom.pos = function (e, t, i) {
  e && (null != t && (e.style.left = "number" == typeof t ? Math.round(t) + "px" : t), null != i && (e.style.top = "number" == typeof i ? Math.round(
    i) + "px" : i))
}, dom.size = function (e, t, i) {
  e && (null != t && (e.style.width = "number" == typeof t ? Math.round(t) + "px" : t), null != t && (e.style.height = "number" == typeof i ? Math.round(
    i) + "px" : i))
}, dom.style = function (e, t) {
  f.copy(e.style, t)
}, dom.xstyle = function (e, t, i) {
  var n = e.style;
  n["-webkit-" + t] = i, n["-moz-" + t] = i, n["-ms-" + t] = i, n["-o-" + t] = i, n[t] = i
}, dom.attr = function (e, t, i) {
  e && (null == i ? e.removeAttribute(t) : e.setAttribute(t, i))
}, dom.html = function (e, t) {
  e.innerHTML = t instanceof Array ? t.join("\n") : t
}, dom.text = function (e, t) {
  e.textContent = t instanceof Array ? t.join("\n") : t
}, dom.display = function (e, t, i) {
  e.style.display = t ? null != i ? i : "block" : "none"
}, dom.visible = function (e, t) {
  e.style.visibility = t ? "visible" : "hidden"
}, dom.respace = /\s+/, dom.addclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = t.split(dom.respace).filter(Boolean), o = f.sor(i, n);
    f.snot(o, i).length && (e.className = o.join(" "))
  }
}, dom.remclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = t.split(dom.respace).filter(Boolean), o = f.snot(i, n);
    f.snot(i, o).length && (e.className = o.join(" "))
  }
}, dom.hasclass = function (e, t, i) {
  if (e && t) {
    var n = e.className.split(dom.respace).filter(Boolean), o = t.split(dom.respace).filter(Boolean),
      s = f.sand(n, o).length;
    return i ? s : s === o.length
  }
}, dom.togclass = function (e, t, i) {
  e && t && (arguments.length < 3 && (i = !dom.hasclass(e, t)), (i ? dom.addclass : dom.remclass)(e, t))
}, dom.setclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = i.slice();
    for (var o in t) f.atog(n, o, !!t[o]);
    f.sxor(i, n).length && (e.className = n.join(" "))
  }
}, dom.offset = function (e, t, i) {
  for (var n = 0, o = 0; e && e !== t; e = e.offsetParent) n += e.offsetLeft || 0, o += e.offsetTop || 0, i && (n -= e.scrollLeft || 0, o -= e.scrollTop || 0);
  return {x: n, y: o}
}, dom.out = function (e) {
  var t = dom.div(null, document.body), i = dom.elem("textarea", null, document.body);
  dom.style(t, {top: 0, left: 0, width: "100%", height: "100%", position: "absolute", zIndex: 9e3}), dom.style(
    i,
    {
      left: .1 * window.innerWidth + "px",
      top: .1 * window.innerHeight + "px",
      width: .8 * window.innerWidth + "px",
      height: .8 * window.innerHeight + "px",
      position: "absolute",
      zIndex: 9001,
      whiteSpace: "nowrap",
      font: "11px monospace"
    }
  ), dom.text(i, e), dom.on("click", t, function () {
    dom.remove(i, t)
  }), i.focus()
}, dom.ready = function (e) {
  function t() {
    document.removeEventListener("DOMContentLoaded", t), window.removeEventListener("load", t), e()
  }

  "complete" === document.readyState ? e() : (document.addEventListener("DOMContentLoaded", t), window.addEventListener(
    "load",
    t
  ))
},
  window.kbd = {
  name: {
    L_ARR: 37,
    U_ARR: 38,
    R_ARR: 39,
    D_ARR: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    CAPS: 20,
    ESC: 27,
    SPACE: 32,
    DEL: 46,
    ENTER: 13,
    TAB: 9,
    BKSP: 8,
    "`": 192,
    "-": 189,
    "=": 187,
    "[": 219,
    "]": 221,
    "\\": 220,
    ";": 186,
    "'": 222,
    ",": 188,
    ".": 190,
    "/": 191
  }, map: [], state: {}, init: function () {
    kbd.setmap(), kbd.reset(), window.addEventListener("keydown", kbd.onkeydown, !0), window.addEventListener(
      "keyup",
      kbd.onkeyup,
      !0
    )
  }, setmap: function () {
    for (var e = 48; e <= 57; e++) kbd.map[e] = String.fromCharCode(e);
    for (e = 65; e <= 90; e++) kbd.map[e] = String.fromCharCode(e).toLowerCase();
    for (var t in kbd.name) kbd.map[kbd.name[t]] = t
  }, reset: function () {
    for (var e = 0; e < 255; e++) kbd.state[kbd.map[e]] = 0
  }, onkeydown: function (e) {
    kbd.setkey(e, 1)
  }, onkeyup: function (e) {
    kbd.setkey(e, 0)
  }, setkey: function (e, t) {
    kbd.event = e, kbd.down = t, kbd.key = kbd.map[e.keyCode], kbd.changed = kbd.state[kbd.key] !== kbd.down, kbd.state[kbd.key] = kbd.down, kbd.state.SHIFT = +e.shiftKey, kbd.state.CTRL = +e.ctrlKey, kbd.state.ALT = +e.altKey;
    var i = [];
    kbd.state.CTRL && i.push("CTRL"), kbd.state.ALT && i.push("ALT"), kbd.state.SHIFT && i.push("SHIFT"), "CTRL" !== kbd.key && "ALT" !== kbd.key && "SHIFT" !== kbd.key && i.push(
      kbd.key), kbd.seq = i.join("+")
  }
}, kbd.init();
var perf = {
  precision: 4, values: {}, time: function () {
    return window.performance && window.performance.now ? window.performance.now() : Date.now ? Date.now() : (new Date).getTime()
  }, start: function (e) {
    var t = perf.values[e];
    t || (t = perf.values[e] = {
      totalTime: 0,
      totalCycles: 0,
      totalBest: 1 / 0,
      totalWorst: -1 / 0,
      localTime: 0,
      localCycles: 0,
      localBest: 1 / 0,
      localWorst: -1 / 0,
      lastTime: 0,
      startTime: 0
    }), t.startTime = perf.time()
  }, end: function (e, t) {
    var i = perf.values[e];
    i && (i.lastTime = perf.time() - i.startTime, i.startTime = 0, i.totalCycles++, i.localCycles++, i.totalBest = Math.min(
      i.totalBest,
      i.lastTime
    ), i.totalWorst = Math.max(i.totalWorst, i.lastTime), i.localBest = Math.min(
      i.localBest,
      i.lastTime
    ), i.localWorst = Math.max(
      i.localWorst,
      i.lastTime
    ), i.totalTime += i.lastTime, i.localTime += i.lastTime, i.localCycles >= t && perf.show(e))
  }, flushLocal: function (e) {
    var t = perf.values[e];
    t && (t.localTime = 0, t.localCycles = 0, t.localBest = 1 / 0, t.localWorst = -1 / 0)
  }, show: function (e, t) {
    var i = perf.values[e];
    if (!i) return console.log("perf: no", e);
    console.log(
      "perf",
      e + ":",
      f.mround(i.localTime / i.localCycles, perf.precision),
      "avg,",
      f.mround(i.localBest, perf.precision),
      "best,",
      f.mround(i.localWorst, perf.precision),
      "worst,",
      f.mround(i.localTime, perf.precision),
      "ms,",
      i.localCycles,
      "cycles,",
      i.totalCycles,
      "total cycles,",
      f.mround(i.totalTime / i.totalCycles, perf.precision),
      "total avg"
    ), t || perf.flushLocal(e)
  }, monitor: function (e, t) {
    setInterval(perf.show, t || 1e3, e)
  }
}, TWEEN = {
  time: 0, tweens: [], getAll: function () {
    return TWEEN.tweens
  }, removeAll: function () {
    for (var e = TWEEN.tweens.length - 1; 0 <= e; e--) TWEEN.tweens[e].updating = !1
  }, add: function (e) {
    e.updating = !0, -1 === TWEEN.tweens.indexOf(e) && TWEEN.tweens.push(e)
  }, remove: function (e) {
    e.updating = !1
  }, loop: function () {
    TWEEN.update(), TWEEN.timer = requestAnimationFrame(TWEEN.loop)
  }, loopEnd: function () {
    cancelAnimationFrame(TWEEN.timer)
  }, update: function (e) {
    TWEEN.time = isNaN(e) ? window.performance.now() : e;
    var t = TWEEN.tweens.length;
    if (!t) return !1;
    for (var i = t - 1; 0 <= i; i--) {
      var n = TWEEN.tweens[i];
      n.updating || n.ended ? n.update(TWEEN.time) : TWEEN.tweens.splice(i, 1)
    }
    return !0
  }
};
TWEEN.loop(), TWEEN.Tween = function (e) {
  this.source = {}, this.target = {}, this.delta = {}, this.durationTime = 1e3, this.delayTime = 0, this.startTime = null, this.repeatTimes = 0, this.enableYoyo = !1, this.reversed = !1, this.easingFunction = TWEEN.Easing.Linear.None, this.interpolationFunction = TWEEN.Interpolation.Linear, this.chainedTweens = [], this.synchedTweens = [], this.onStartCallbackFired = !1, this.onStartCallback = null, this.onStartScope = null, this.onStartData = null, this.onHalfwayCallbackFired = !1, this.onHalfwayCallback = null, this.onHalfwayScope = null, this.onHalfwayData = null, this.onUpdateCallback = null, this.onUpdateScope = null, this.onUpdateData = null, this.onCompleteCallback = null, this.onCompleteScope = null, this.onCompleteData = null, this.onStopCallback = null, this.onStopScope = null, this.onStopData = null, this.playing = !1, this.ended = !1, this.elapsed = 0, this.progress = 0, this.prodelta = 0, e && this.setSource(
    e)
}, TWEEN.Tween.prototype = {
  copy: function (e) {
    return this.durationTime = e.durationTime, this.delayTime = e.delayTime, this.startTime = e.startTime, this.repeatTimes = e.repeatTimes, this.enableYoyo = e.enableYoyo, this.reversed = e.reversed, this.easingFunction = e.easingFunction, this.interpolationFunction = e.interpolationFunction, this
  }, setSource: function (e) {
    return this.source = e, this
  }, setTarget: function (e) {
    return this.target = e, this
  }, duration: function (e) {
    return this.durationTime = e, this
  }, from: function (e) {
    for (var t in e) this.source[t] = e[t];
    return this
  }, to: function (e, t) {
    return null != e && this.setTarget(e), null != t && (this.durationTime = t), this
  }, delay: function (e) {
    return this.delayTime = e, this
  }, repeat: function (e) {
    return this.repeatTimes = e, this
  }, yoyo: function (e) {
    return this.enableYoyo = e, this
  }, easing: function (e) {
    return this.easingFunction = e, this
  }, interpolation: function (e) {
    return this.interpolationFunction = e, this
  }, chain: function () {
    return this.chainedTweens = arguments, this
  }, synch: function () {
  }, onStart: function (e, t, i) {
    return this.onStartCallback = e, this.onStartScope = t, this.onStartData = i, this
  }, onHalfway: function (e, t, i) {
    return this.onHalfwayCallback = e, this.onHalfwayScope = t, this.onHalfwayData = i, this
  }, onUpdate: function (e, t, i) {
    return this.onUpdateCallback = e, this.onUpdateScope = t, this.onUpdateData = i, this
  }, onComplete: function (e, t, i) {
    return this.onCompleteCallback = e, this.onCompleteScope = t, this.onCompleteData = i, this
  }, onStop: function (e, t, i) {
    return this.onStopCallback = e, this.onStopScope = t, this.onStopData = i, this
  }, stop: function () {
    for (var e in this.playing = !1, TWEEN.remove(this), this.debug && console.trace(
      this.debug,
      "stop"
    ), null !== this.onStopCallback && this.onStopCallback.call(this.onStopScope, this.onStopData), this.valuesTarget) {
      var t = this.valuesTarget[e];
      t instanceof TWEEN.Tween && t.stop()
    }
    return this.stopChainedTweens(), this
  }, stopChainedTweens: function () {
    for (var e = this.chainedTweens.length - 1; 0 <= e; e--) this.chainedTweens[e].stop()
  }, updateSource: function () {
    for (var e in this.valuesSource = {}, this.source) {
      var t = this.source[e], i = parseFloat(t, 10);
      isFinite(i) && (this.valuesSource[e] = i)
    }
    return this
  }, updateTarget: function () {
    for (var e in this.valuesRelative = {}, this.valuesTarget = {}, this.target) {
      var t = this.target[e], i = this.valuesSource[e];
      if (t instanceof TWEEN.Tween) this.valuesTarget[e] = t; else if (e in this.valuesSource != !1) if (t instanceof Array) t.length && (this.valuesTarget[e] = [i].concat(
        t)); else if ("string" == typeof t) {
        var n = parseFloat(t, 10);
        isFinite(n) && (this.valuesRelative[e] = n, this.valuesTarget[e] = i + n)
      } else "number" == typeof t && isFinite(t) && (this.valuesTarget[e] = t)
    }
    return this
  }, start: function (e) {
    for (var t in TWEEN.add(this), this.onStartCallbackFired = !1, this.onHalfwayCallbackFired = !1, this.ended = !1, this.elapsed = 0, this.progress = 0, this.prodelta = 0, this.startTime = isNaN(
      e) ? TWEEN.time : +e, this.startTime += this.delayTime, this.updateSource(), this.updateTarget(), this.delta = {}, this.valuesTarget) {
      this.valuesSource[t];
      var i = this.valuesTarget[t];
      i instanceof TWEEN.Tween ? (i.start(e), TWEEN.remove(i), this.delta[t] = i.delta) : this.delta[t] = 0
    }
    return this.debug && console.trace(
      this.debug,
      "start",
      "\n\tsource:",
      this.valuesSource,
      "\n\ttarget:",
      this.valuesTarget
    ), this
  }, update: function (e) {
    if (this.ended) return this.ended = !1, this.playing = !1, void (this.debug && console.log(this.debug, "ended"));
    if (e < this.startTime) this.updating = !0; else if (e - this.startTime > this.durationTime && 1 === this.elapsed) this.updating = !1; else if (!1 === this.onStartCallbackFired && (this.onStartCallbackFired = !0, this.playing = !0, null !== this.onStartCallback && this.onStartCallback.call(
      this.onStartScope,
      this.source,
      this.onStartData
    ), this.debug && console.log(
      this.debug,
      "playing"
    )), this.passedTime = e - this.startTime, this.remainTime = this.durationTime - this.passedTime, this.setProgress(
      this.passedTime / this.durationTime), this.updating = this.elapsed < 1 || 0 < this.repeatTimes, this.debug && console.log(
      this.debug,
      "update",
      "\n\tvalues:",
      this.source,
      "\n\tdetta:",
      this.delta
    ), !1 === this.onHalfwayCallbackFired && .5 < this.progress && (this.onHalfwayCallbackFired = !0, null !== this.onHalfwayCallback && this.onHalfwayCallback.call(
      this.onHalfwayScope,
      this.onHalfwayData
    )), null !== this.onUpdateCallback && this.onUpdateCallback.call(
      this.onUpdateScope,
      this.progress,
      this.source
    ), 1 === this.elapsed) if (0 < this.repeatTimes) {
      for (var t in this.repeatTimes--, this.valuesSource) {
        var i = this.valuesSource[t], n = this.valuesTarget[t];
        t in this.valuesRelative && (i += this.valuesRelative[t]), this.enableYoyo && (this.valuesTarget[t] = i, i = n), this.valuesSource[t] = i
      }
      this.enableYoyo && (this.reversed = !this.reversed), this.startTime = e + this.delayTime
    } else {
      this.ended = !0, null !== this.onCompleteCallback && this.onCompleteCallback.call(
        this.onCompleteScope,
        this.onCompleteData
      );
      for (var o = this.chainedTweens.length - 1; 0 <= o; o--) this.chainedTweens[o].start(this.startTime + this.durationTime)
    }
  }, setProgress: function (e) {
    var t = this.progress;
    for (var i in this.elapsed = 1 < e ? 1 : e < 0 ? 0 : e, this.progress = this.easingFunction(this.elapsed), this.prodelta = this.progress - t, this.valuesTarget) {
      var n, o = this.valuesTarget[i], s = this.valuesSource[i];
      o instanceof TWEEN.Tween ? o.setProgress(this.elapsed) : (n = o instanceof Array ? this.interpolationFunction(
        o,
        this.progress
      ) : s + (o - s) * this.progress, this.delta[i] = n - this.source[i], this.source[i] = n)
    }
  }
}, TWEEN.Easing = {
  Linear: {
    None: function (e) {
      return e
    }
  }, Quadratic: {
    In: function (e) {
      return e * e
    }, Out: function (e) {
      return e * (2 - e)
    }, InOut: function (e) {
      return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
    }
  }, Cubic: {
    In: function (e) {
      return e * e * e
    }, Out: function (e) {
      return --e * e * e + 1
    }, InOut: function (e) {
      return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
    }
  }, Quartic: {
    In: function (e) {
      return e * e * e * e
    }, Out: function (e) {
      return 1 - --e * e * e * e
    }, InOut: function (e) {
      return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
    }
  }, Quintic: {
    In: function (e) {
      return e * e * e * e * e
    }, Out: function (e) {
      return --e * e * e * e * e + 1
    }, InOut: function (e) {
      return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
    }
  }, Sinusoidal: {
    In: function (e) {
      return 1 - Math.cos(e * Math.PI / 2)
    }, Out: function (e) {
      return Math.sin(e * Math.PI / 2)
    }, InOut: function (e) {
      return .5 * (1 - Math.cos(Math.PI * e))
    }
  }, Exponential: {
    In: function (e) {
      return 0 === e ? 0 : Math.pow(1024, e - 1)
    }, Out: function (e) {
      return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
    }, InOut: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(
        2,
        -10 * (e - 1)
      ))
    }
  }, Circular: {
    In: function (e) {
      return 1 - Math.sqrt(1 - e * e)
    }, Out: function (e) {
      return Math.sqrt(1 - --e * e)
    }, InOut: function (e) {
      return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
  }, Elastic: {
    In: function (e) {
      var t, i = .1;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(
        2,
        10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / .4))
    }, Out: function (e) {
      var t, i = .1;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(
        2,
        -10 * e
      ) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
    }, InOut: function (e) {
      var t, i = .1;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? i * Math.pow(
        2,
        10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(
        2,
        -10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
    }
  }, Back: {
    In: function (e) {
      return e * e * (2.70158 * e - 1.70158)
    }, Out: function (e) {
      return --e * e * (2.70158 * e + 1.70158) + 1
    }, InOut: function (e) {
      var t = 2.5949095;
      return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
    }
  }, Bounce: {
    In: function (e) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - e)
    }, Out: function (e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }, InOut: function (e) {
      return e < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * e) : .5 * TWEEN.Easing.Bounce.Out(2 * e - 1) + .5
    }
  }
}, TWEEN.Interpolation = {
  Linear: function (e, t) {
    var i = e.length - 1, n = i * t, o = Math.floor(n), s = TWEEN.Interpolation.Utils.Linear;
    return t < 0 ? s(e[0], e[1], n) : 1 < t ? s(e[i], e[i - 1], i - n) : s(e[o], e[i < o + 1 ? i : o + 1], n - o)
  }, Bezier: function (e, t) {
    for (var i = 0, n = e.length - 1, o = Math.pow, s = TWEEN.Interpolation.Utils.Bernstein, r = 0; r <= n; r++) i += o(
      1 - t,
      n - r
    ) * o(t, r) * e[r] * s(n, r);
    return i
  }, CatmullRom: function (e, t) {
    var i = e.length - 1, n = i * t, o = Math.floor(n), s = TWEEN.Interpolation.Utils.CatmullRom;
    return e[0] === e[i] ? (t < 0 && (o = Math.floor(n = i * (1 + t))), s(
      e[(o - 1 + i) % i],
      e[o],
      e[(o + 1) % i],
      e[(o + 2) % i],
      n - o
    )) : t < 0 ? e[0] - (s(e[0], e[0], e[1], e[1], -n) - e[0]) : 1 < t ? e[i] - (s(
      e[i],
      e[i],
      e[i - 1],
      e[i - 1],
      n - i
    ) - e[i]) : s(e[o ? o - 1 : 0], e[o], e[i < o + 1 ? i : o + 1], e[i < o + 2 ? i : o + 2], n - o)
  }, Utils: {
    Linear: function (e, t, i) {
      return (t - e) * i + e
    }, Bernstein: function (e, t) {
      var i = TWEEN.Interpolation.Utils.Factorial;
      return i(e) / i(t) / i(e - t)
    }, Factorial: function () {
      var n = [1];
      return function (e) {
        var t = 1;
        if (n[e]) return n[e];
        for (var i = e; 1 < i; i--) t *= i;
        return n[e] = t
      }
    }(), CatmullRom: function (e, t, i, n, o) {
      var s = .5 * (i - e), r = .5 * (n - t), a = o * o;
      return (2 * t - 2 * i + s + r) * (o * a) + (-3 * t + 3 * i - 2 * s - r) * a + s * o + t
    }
  }
};
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = {
  load: function (e, t) {
    var i = (t = t || document).createElement("link");
    i.type = "text/css", i.rel = "stylesheet", i.href = e, t.getElementsByTagName("head")[0].appendChild(i)
  }, inject: function (e, t) {
    t = t || document;
    var i = document.createElement("style");
    i.type = "text/css", i.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(i)
  }
}, dat.utils.common = function () {
  var s = Array.prototype.forEach, n = Array.prototype.slice;
  return {
    BREAK: {}, extend: function (i) {
      return this.each(n.call(arguments, 1), function (e) {
        for (var t in e) this.isUndefined(e[t]) || (i[t] = e[t])
      }, this), i
    }, defaults: function (i) {
      return this.each(n.call(arguments, 1), function (e) {
        for (var t in e) this.isUndefined(i[t]) && (i[t] = e[t])
      }, this), i
    }, compose: function () {
      var i = n.call(arguments);
      return function () {
        for (var e = n.call(arguments), t = i.length - 1; 0 <= t; t--) e = [i[t].apply(this, e)];
        return e[0]
      }
    }, each: function (e, t, i) {
      if (e) if (s && e.forEach && e.forEach === s) e.forEach(
        t,
        i
      ); else if (e.length === e.length + 0) for (var n = 0, o = e.length; n < o && !(n in e && t.call(
        i,
        e[n],
        n
      ) === this.BREAK); n++) ; else for (n in e) if (t.call(i, e[n], n) === this.BREAK) break
    }, defer: function (e) {
      setTimeout(e, 0)
    }, toArray: function (e) {
      return e.toArray ? e.toArray() : n.call(e)
    }, isUndefined: function (e) {
      return void 0 === e
    }, isNull: function (e) {
      return null === e
    }, isNaN: function (e) {
      return e != e
    }, isArray: Array.isArray || function (e) {
      return e.constructor === Array
    }, isObject: function (e) {
      return e === Object(e)
    }, isNumber: function (e) {
      return e === e + 0
    }, isString: function (e) {
      return e === e + ""
    }, isBoolean: function (e) {
      return !1 === e || !0 === e
    }, isFunction: function (e) {
      return "[object Function]" === Object.prototype.toString.call(e)
    }
  }
}(), dat.controllers.Controller = function (e) {
  var t = function (e, t) {
    this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onFinishChange = this.__onChange = void 0
  };
  return dat.utils.common.extend(t.prototype, {
    onChange: function (e) {
      return this.__onChange = e, this
    }, onFinishChange: function (e) {
      return this.__onFinishChange = e, this
    }, setValue: function (e) {
      return this.object[this.property] = e, this.__onChange && this.__onChange.call(
        this,
        e
      ), this.updateDisplay(), this
    }, getValue: function () {
      return this.object[this.property]
    }, updateDisplay: function () {
      return this
    }, isModified: function () {
      return this.initialValue !== this.getValue()
    }
  }), t
}(), dat.dom.dom = function (r) {
  function t(e) {
    return "0" === e || r.isUndefined(e) ? 0 : (e = e.match(i), r.isNull(e) ? 0 : parseFloat(e[1]))
  }

  var a = {};
  r.each({
           HTMLEvents: ["change"],
           MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
           KeyboardEvents: ["keydown"]
         }, function (e, t) {
    r.each(e, function (e) {
      a[e] = t
    })
  });
  var i = /(\d+(\.\d+)?)px/, o = {
    makeSelectable: function (e, t) {
      void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
        return !1
      } : function () {
      }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
    }, makeFullscreen: function (e, t, i) {
      r.isUndefined(t) && (t = !0), r.isUndefined(i) && (i = !0), e.style.position = "absolute", t && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0)
    }, fakeEvent: function (e, t, i, n) {
      i = i || {};
      var o = a[t];
      if (!o) throw Error("Event type " + t + " not supported.");
      var s = document.createEvent(o);
      switch (o) {
        case"MouseEvents":
          s.initMouseEvent(
            t,
            i.bubbles || !1,
            i.cancelable || !0,
            window,
            i.clickCount || 1,
            0,
            0,
            i.x || i.clientX || 0,
            i.y || i.clientY || 0,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          );
          break;
        case"KeyboardEvents":
          o = s.initKeyboardEvent || s.initKeyEvent, r.defaults(
            i,
            {
              cancelable: !0,
              ctrlKey: !1,
              altKey: !1,
              shiftKey: !1,
              metaKey: !1,
              keyCode: void 0,
              charCode: void 0
            }
          ), o(
            t,
            i.bubbles || !1,
            i.cancelable,
            window,
            i.ctrlKey,
            i.altKey,
            i.shiftKey,
            i.metaKey,
            i.keyCode,
            i.charCode
          );
          break;
        default:
          s.initEvent(t, i.bubbles || !1, i.cancelable || !0)
      }
      r.defaults(s, n), e.dispatchEvent(s)
    }, bind: function (e, t, i, n) {
      return e.addEventListener ? e.addEventListener(t, i, n || !1) : e.attachEvent && e.attachEvent("on" + t, i), o
    }, unbind: function (e, t, i, n) {
      return e.removeEventListener ? e.removeEventListener(t, i, n || !1) : e.detachEvent && e.detachEvent(
        "on" + t,
        i
      ), o
    }, addClass: function (e, t) {
      if (void 0 === e.className) e.className = t; else if (e.className !== t) {
        var i = e.className.split(/ +/);
        -1 == i.indexOf(t) && (i.push(t), e.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
      }
      return o
    }, removeClass: function (e, t) {
      if (t) {
        if (void 0 !== e.className) if (e.className === t) e.removeAttribute("class"); else {
          var i = e.className.split(/ +/), n = i.indexOf(t);
          -1 != n && (i.splice(n, 1), e.className = i.join(" "))
        }
      } else e.className = void 0;
      return o
    }, hasClass: function (e, t) {
      return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
    }, getWidth: function (e) {
      return t((e = getComputedStyle(e))["border-left-width"]) + t(e["border-right-width"]) + t(e["padding-left"]) + t(e["padding-right"]) + t(
        e.width)
    }, getHeight: function (e) {
      return t((e = getComputedStyle(e))["border-top-width"]) + t(e["border-bottom-width"]) + t(e["padding-top"]) + t(e["padding-bottom"]) + t(
        e.height)
    }, getOffset: function (e) {
      var t = {left: 0, top: 0};
      if (e.offsetParent) for (; t.left += e.offsetLeft, t.top += e.offsetTop, e = e.offsetParent;) ;
      return t
    }, isActive: function (e) {
      return e === document.activeElement && (e.type || e.href)
    }
  };
  return o
}(dat.utils.common), dat.controllers.OptionController = function (e, s, r) {
  var a = function (e, t, i) {
    a.superclass.call(this, e, t);
    var n = this;
    if (this.__select = document.createElement("select"), r.isArray(i)) {
      var o = {};
      r.each(i, function (e) {
        o[e] = e
      }), i = o
    }
    r.each(i, function (e, t) {
      var i = document.createElement("option");
      i.innerHTML = t, i.setAttribute("value", e), n.__select.appendChild(i)
    }), this.updateDisplay(), s.bind(this.__select, "change", function () {
      n.setValue(this.options[this.selectedIndex].value)
    }), this.domElement.appendChild(this.__select)
  };
  return a.superclass = e, r.extend(a.prototype, e.prototype, {
    setValue: function (e) {
      return e = a.superclass.prototype.setValue.call(
        this,
        e
      ), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
    }, updateDisplay: function () {
      return this.__select.value = this.getValue(), a.superclass.prototype.updateDisplay.call(this)
    }
  }), a
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function (e, n) {
  function o(e) {
    return -1 < (e = e.toString()).indexOf(".") ? e.length - e.indexOf(".") - 1 : 0
  }

  var s = function (e, t, i) {
    s.superclass.call(
      this,
      e,
      t
    ), i = i || {}, this.__min = i.min, this.__max = i.max, this.__step = i.step, n.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(
      10,
      Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)
    ) / 10 : this.__impliedStep = this.__step, this.__precision = o(this.__impliedStep)
  };
  return s.superclass = e, n.extend(s.prototype, e.prototype, {
    setValue: function (e) {
      return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && 0 != e % this.__step && (e = Math.round(
        e / this.__step) * this.__step), s.superclass.prototype.setValue.call(this, e)
    }, min: function (e) {
      return this.__min = e, this
    }, max: function (e) {
      return this.__max = e, this
    }, step: function (e) {
      return this.__impliedStep = this.__step = e, this.__precision = o(e), this
    }
  }), s
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function (e, l, h) {
  var c = function (e, t, i) {
    function n() {
      var e = parseFloat(a.__input.value);
      h.isNaN(e) || a.setValue(e)
    }

    function o(e) {
      var t = r - e.clientY;
      a.setValue(a.getValue() + t * a.__impliedStep), r = e.clientY
    }

    function s() {
      l.unbind(window, "mousemove", o), l.unbind(window, "mouseup", s)
    }

    this.__truncationSuspended = !1, c.superclass.call(this, e, t, i);
    var r, a = this;
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), l.bind(
      this.__input,
      "change",
      n
    ), l.bind(this.__input, "blur", function () {
      n(), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
    }), l.bind(this.__input, "mousedown", function (e) {
      l.bind(window, "mousemove", o), l.bind(window, "mouseup", s), r = e.clientY
    }), l.bind(this.__input, "keydown", function (e) {
      13 === e.keyCode && (a.__truncationSuspended = !0, this.blur(), a.__truncationSuspended = !1)
    }), this.updateDisplay(), this.domElement.appendChild(this.__input)
  };
  return c.superclass = e, h.extend(c.prototype, e.prototype, {
    updateDisplay: function () {
      var e, t = this.__input;
      if (this.__truncationSuspended) e = this.getValue(); else {
        e = this.getValue();
        var i = Math.pow(10, this.__precision);
        e = Math.round(e * i) / i
      }
      return t.value = e, c.superclass.prototype.updateDisplay.call(this)
    }
  }), c
}(
  dat.controllers.NumberController,
  dat.dom.dom,
  dat.utils.common
), dat.controllers.NumberControllerSlider = function (e, h, t, i, n) {
  var a = function (e, t, i, n, o) {
    function s(e) {
      e.preventDefault();
      var t, i, n, o, s, r = h.getOffset(l.__background), a = h.getWidth(l.__background);
      return l.setValue((t = e.clientX, i = r.left, n = r.left + a, o = l.__min, s = l.__max, o + (t - i) / (n - i) * (s - o))), !1
    }

    function r() {
      h.unbind(window, "mousemove", s), h.unbind(window, "mouseup", r), l.__onFinishChange && l.__onFinishChange.call(
        l,
        l.getValue()
      )
    }

    a.superclass.call(this, e, t, {min: i, max: n, step: o});
    var l = this;
    this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), h.bind(
      this.__background,
      "mousedown",
      function (e) {
        h.bind(
          window,
          "mousemove",
          s
        ), h.bind(
          window,
          "mouseup",
          r
        ), s(e)
      }
    ), h.addClass(this.__background, "slider"), h.addClass(
      this.__foreground,
      "slider-fg"
    ), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
  };
  return a.superclass = e, a.useDefaultStyles = function () {
    t.inject(
      "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}")
  }, i.extend(a.prototype, e.prototype, {
    updateDisplay: function () {
      var e = (this.getValue() - this.__min) / (this.__max - this.__min);
      return this.__foreground.style.width = 100 * e + "%", a.superclass.prototype.updateDisplay.call(this)
    }
  }), a
}(
  dat.controllers.NumberController,
  dat.dom.dom,
  dat.utils.css,
  dat.utils.common
), dat.controllers.FunctionController = function (e, o, t) {
  var s = function (e, t, i) {
    s.superclass.call(this, e, t);
    var n = this;
    this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === i ? "Fire" : i, o.bind(
      this.__button,
      "click",
      function (e) {
        return e.preventDefault(), n.fire(), !1
      }
    ), o.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
  };
  return s.superclass = e, t.extend(s.prototype, e.prototype, {
    fire: function () {
      this.__onChange && this.__onChange.call(this), this.getValue()
        .call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
    }
  }), s
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function (e, n, t) {
  var o = function (e, t) {
    o.superclass.call(this, e, t);
    var i = this;
    this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute(
      "type",
      "checkbox"
    ), n.bind(this.__checkbox, "change", function () {
      i.setValue(!i.__prev)
    }, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
  };
  return o.superclass = e, t.extend(o.prototype, e.prototype, {
    setValue: function (e) {
      return e = o.superclass.prototype.setValue.call(
        this,
        e
      ), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
    }, updateDisplay: function () {
      return !0 === this.getValue() ? (this.__checkbox.setAttribute(
        "checked",
        "checked"
      ), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, o.superclass.prototype.updateDisplay.call(this)
    }
  }), o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function (t) {
  return function (e) {
    if (1 == e.a || t.isUndefined(e.a)) {
      for (e = e.hex.toString(16); e.length < 6;) e = "0" + e;
      return "#" + e
    }
    return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
  }
}(dat.utils.common), dat.color.interpret = function (e, n) {
  var o, s, t = [{
    litmus: n.isString, conversions: {
      THREE_CHAR_HEX: {
        read: function (e) {
          return null !== (e = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i)) && {
            space: "HEX",
            hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
          }
        }, write: e
      }, SIX_CHAR_HEX: {
        read: function (e) {
          return null !== (e = e.match(/^#([A-F0-9]{6})$/i)) && {space: "HEX", hex: parseInt("0x" + e[1].toString())}
        }, write: e
      }, CSS_RGB: {
        read: function (e) {
          return null !== (e = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/)) && {
            space: "RGB",
            r: parseFloat(e[1]),
            g: parseFloat(e[2]),
            b: parseFloat(e[3])
          }
        }, write: e
      }, CSS_RGBA: {
        read: function (e) {
          return null !== (e = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/)) && {
            space: "RGB",
            r: parseFloat(e[1]),
            g: parseFloat(e[2]),
            b: parseFloat(e[3]),
            a: parseFloat(e[4])
          }
        }, write: e
      }
    }
  }, {
    litmus: n.isNumber, conversions: {
      HEX: {
        read: function (e) {
          return {space: "HEX", hex: e, conversionName: "HEX"}
        }, write: function (e) {
          return e.hex
        }
      }
    }
  }, {
    litmus: n.isArray, conversions: {
      RGB_ARRAY: {
        read: function (e) {
          return 3 == e.length && {space: "RGB", r: e[0], g: e[1], b: e[2]}
        }, write: function (e) {
          return [e.r, e.g, e.b]
        }
      }, RGBA_ARRAY: {
        read: function (e) {
          return 4 == e.length && {space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3]}
        }, write: function (e) {
          return [e.r, e.g, e.b, e.a]
        }
      }
    }
  }, {
    litmus: n.isObject, conversions: {
      RGBA_OBJ: {
        read: function (e) {
          return !!(n.isNumber(e.r) && n.isNumber(e.g) && n.isNumber(e.b) && n.isNumber(e.a)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a
          }
        }, write: function (e) {
          return {r: e.r, g: e.g, b: e.b, a: e.a}
        }
      }, RGB_OBJ: {
        read: function (e) {
          return !!(n.isNumber(e.r) && n.isNumber(e.g) && n.isNumber(e.b)) && {space: "RGB", r: e.r, g: e.g, b: e.b}
        }, write: function (e) {
          return {r: e.r, g: e.g, b: e.b}
        }
      }, HSVA_OBJ: {
        read: function (e) {
          return !!(n.isNumber(e.h) && n.isNumber(e.s) && n.isNumber(e.v) && n.isNumber(e.a)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a
          }
        }, write: function (e) {
          return {h: e.h, s: e.s, v: e.v, a: e.a}
        }
      }, HSV_OBJ: {
        read: function (e) {
          return !!(n.isNumber(e.h) && n.isNumber(e.s) && n.isNumber(e.v)) && {space: "HSV", h: e.h, s: e.s, v: e.v}
        }, write: function (e) {
          return {h: e.h, s: e.s, v: e.v}
        }
      }
    }
  }];
  return function () {
    s = !1;
    var i = 1 < arguments.length ? n.toArray(arguments) : arguments[0];
    return n.each(t, function (e) {
      if (e.litmus(i)) return n.each(e.conversions, function (e, t) {
        if (o = e.read(i), !1 === s && !1 !== o) return (s = o).conversionName = t, o.conversion = e, n.BREAK
      }), n.BREAK
    }), s
  }
}(
  dat.color.toString,
  dat.utils.common
), dat.GUI = dat.gui.GUI = function (e, t, i, s, r, a, l, h, c, n, d, o, u, p, f) {
  function m(e, t, i, n) {
    if (void 0 === t[i]) throw Error("Object " + t + ' has no property "' + i + '"');
    n.color ? t = new d(t, i) : (t = [t, i].concat(n.factoryArgs), t = s.apply(
      e,
      t
    )), n.before instanceof r && (n.before = n.before.__li), g(e, t), p.addClass(
      t.domElement,
      "c"
    ), i = document.createElement("span"), p.addClass(i, "property-name"), i.innerHTML = t.property;
    var o = document.createElement("div");
    return o.appendChild(i), o.appendChild(t.domElement), n = v(e, o, n.before), p.addClass(
      n,
      A.CLASS_CONTROLLER_ROW
    ), p.addClass(n, typeof t.getValue()), function (t, i, n) {
      if (n.__li = i, n.__gui = t, f.extend(n, {
        options: function (e) {
          return 1 < arguments.length ? (n.remove(), m(
            t,
            n.object,
            n.property,
            {
              before: n.__li.nextElementSibling,
              factoryArgs: [f.toArray(arguments)]
            }
          )) : f.isArray(e) || f.isObject(e) ? (n.remove(), m(
            t,
            n.object,
            n.property,
            {before: n.__li.nextElementSibling, factoryArgs: [e]}
          )) : void 0
        }, name: function (e) {
          return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
        }, listen: function () {
          return n.__gui.listen(n), n
        }, remove: function () {
          return n.__gui.remove(n), n
        }
      }), n instanceof c) {
        var o = new h(n.object, n.property, {min: n.__min, max: n.__max, step: n.__step});
        f.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
          var t = n[e], i = o[e];
          n[e] = o[e] = function () {
            var e = Array.prototype.slice.call(arguments);
            return t.apply(n, e), i.apply(o, e)
          }
        }), p.addClass(i, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild)
      } else if (n instanceof h) {
        var e = function (e) {
          return f.isNumber(n.__min) && f.isNumber(n.__max) ? (n.remove(), m(
            t,
            n.object,
            n.property,
            {
              before: n.__li.nextElementSibling,
              factoryArgs: [n.__min, n.__max, n.__step]
            }
          )) : e
        };
        n.min = f.compose(e, n.min), n.max = f.compose(e, n.max)
      } else n instanceof a ? (p.bind(i, "click", function () {
        p.fakeEvent(n.__checkbox, "click")
      }), p.bind(n.__checkbox, "click", function (e) {
        e.stopPropagation()
      })) : n instanceof l ? (p.bind(i, "click", function () {
        p.fakeEvent(n.__button, "click")
      }), p.bind(i, "mouseover", function () {
        p.addClass(n.__button, "hover")
      }), p.bind(i, "mouseout", function () {
        p.removeClass(n.__button, "hover")
      })) : n instanceof d && (p.addClass(i, "color"), n.updateDisplay = f.compose(function (e) {
        return i.style.borderLeftColor = n.__color.toString(), e
      }, n.updateDisplay), n.updateDisplay());
      n.setValue = f.compose(function (e) {
        return t.getRoot().__preset_select && n.isModified() && E(t.getRoot(), !0), e
      }, n.setValue)
    }(e, n, t), e.__controllers.push(t), t
  }

  function v(e, t, i) {
    var n = document.createElement("li");
    return t && n.appendChild(t), i ? e.__ul.insertBefore(n, params.before) : e.__ul.appendChild(n), e.onResize(), n
  }

  function g(e, t) {
    var i = e.getRoot(), n = i.__rememberedObjects.indexOf(t.object);
    if (-1 != n) {
      var o = i.__rememberedObjectIndecesToControllers[n];
      if (void 0 === o && (o = {}, i.__rememberedObjectIndecesToControllers[n] = o), o[t.property] = t, i.load && i.load.remembered) {
        if ((i = i.load.remembered)[e.preset]) i = i[e.preset]; else {
          if (!i.Default) return;
          i = i.Default
        }
        i[n] && void 0 !== i[n][t.property] && (n = i[n][t.property], t.initialValue = n, t.setValue(n))
      }
    }
  }

  function b(e, t) {
    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
  }

  function w(n, o) {
    var s = {};
    return f.each(n.__rememberedObjects, function (e, t) {
      var i = {};
      f.each(n.__rememberedObjectIndecesToControllers[t], function (e, t) {
        i[t] = o ? e.initialValue : e.getValue()
      }), s[t] = i
    }), s
  }

  function y(e, t, i) {
    var n = document.createElement("option");
    n.innerHTML = t, n.value = t, e.__preset_select.appendChild(n), i && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
  }

  function E(e, t) {
    var i = e.__preset_select[e.__preset_select.selectedIndex];
    i.innerHTML = t ? i.value + "*" : i.value
  }

  var x;
  e.inject(
    ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n");
  try {
    x = "localStorage" in window && null !== window.localStorage
  } catch (e) {
    x = !1
  }
  var T, _, S = !0, k = !1, R = [], A = function (t) {
    var i = this;
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(
      this.__ul), p.addClass(
      this.domElement,
      "dg"
    ), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = f.defaults(
      t,
      {autoPlace: !0, width: A.DEFAULT_WIDTH}
    ), t = f.defaults(
      t,
      {resizable: t.autoPlace, hideable: t.autoPlace}
    ), f.isUndefined(t.load) ? t.load = {preset: "Default"} : t.preset && (t.load.preset = t.preset), f.isUndefined(t.parent) && t.hideable && R.push(
      this), t.resizable = f.isUndefined(t.parent) && t.resizable, t.autoPlace && f.isUndefined(t.scrollable) && (t.scrollable = !0);
    var n, e, o = x && "true" === localStorage.getItem(document.location.href + ".isLocal");
    if (Object.defineProperties(this, {
      parent: {
        get: function () {
          return t.parent
        }
      }, scrollable: {
        get: function () {
          return t.scrollable
        }
      }, autoPlace: {
        get: function () {
          return t.autoPlace
        }
      }, preset: {
        get: function () {
          return i.parent ? i.getRoot().preset : t.load.preset
        }, set: function (e) {
          for (i.parent ? i.getRoot().preset = e : t.load.preset = e, e = 0; e < this.__preset_select.length; e++) this.__preset_select[e].value == this.preset && (this.__preset_select.selectedIndex = e);
          i.revert()
        }
      }, width: {
        get: function () {
          return t.width
        }, set: function (e) {
          t.width = e, b(i, e)
        }
      }, name: {
        get: function () {
          return t.name
        }, set: function (e) {
          t.name = e, r && (r.innerHTML = t.name)
        }
      }, closed: {
        get: function () {
          return t.closed
        }, set: function (e) {
          t.closed = e, t.closed ? p.addClass(i.__ul, A.CLASS_CLOSED) : p.removeClass(
            i.__ul,
            A.CLASS_CLOSED
          ), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = e ? A.TEXT_OPEN : A.TEXT_CLOSED)
        }
      }, load: {
        get: function () {
          return t.load
        }
      }, useLocalStorage: {
        get: function () {
          return o
        }, set: function (e) {
          x && ((o = e) ? p.bind(window, "unload", n) : p.unbind(
            window,
            "unload",
            n
          ), localStorage.setItem(document.location.href + ".isLocal", e))
        }
      }
    }), f.isUndefined(t.parent)) {
      if (t.closed = !1, p.addClass(this.domElement, A.CLASS_MAIN), p.makeSelectable(this.domElement, !1), x && o) {
        i.useLocalStorage = !0;
        var s = localStorage.getItem(document.location.href + ".gui");
        s && (t.load = JSON.parse(s))
      }
      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = A.TEXT_CLOSED, p.addClass(
        this.__closeButton,
        A.CLASS_CLOSE_BUTTON
      ), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
        i.closed = !i.closed
      })
    } else {
      void 0 === t.closed && (t.closed = !0);
      var r = document.createTextNode(t.name);
      p.addClass(r, "controller-name"), s = v(i, r), p.addClass(this.__ul, A.CLASS_CLOSED), p.addClass(
        s,
        "title"
      ), p.bind(s, "click", function (e) {
        return e.preventDefault(), i.closed = !i.closed, !1
      }), t.closed || (this.closed = !1)
    }
    t.autoPlace && (f.isUndefined(t.parent) && (S && (_ = document.createElement("div"), p.addClass(
      _,
      "dg"
    ), p.addClass(
      _,
      A.CLASS_AUTO_PLACE_CONTAINER
    ), document.body.appendChild(_), S = !1), _.appendChild(this.domElement), p.addClass(
      this.domElement,
      A.CLASS_AUTO_PLACE
    )), this.parent || b(i, t.width)), p.bind(window, "resize", function () {
      i.onResize()
    }), p.bind(this.__ul, "webkitTransitionEnd", function () {
      i.onResize()
    }), p.bind(this.__ul, "transitionend", function () {
      i.onResize()
    }), p.bind(this.__ul, "oTransitionEnd", function () {
      i.onResize()
    }), this.onResize(), t.resizable && function (t) {
      function e(e) {
        return e.preventDefault(), o = e.clientX, p.addClass(t.__closeButton, A.CLASS_DRAG), p.bind(
          window,
          "mousemove",
          i
        ), p.bind(window, "mouseup", n), !1
      }

      function i(e) {
        return e.preventDefault(), t.width += o - e.clientX, t.onResize(), o = e.clientX, !1
      }

      function n() {
        p.removeClass(t.__closeButton, A.CLASS_DRAG), p.unbind(window, "mousemove", i), p.unbind(window, "mouseup", n)
      }

      var o;
      t.__resize_handle = document.createElement("div"), f.extend(
        t.__resize_handle.style,
        {
          width: "6px",
          marginLeft: "-3px",
          height: "200px",
          cursor: "ew-resize",
          position: "absolute"
        }
      ), p.bind(t.__resize_handle, "mousedown", e), p.bind(
        t.__closeButton,
        "mousedown",
        e
      ), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
    }(this), this.saveToLocalStorageIfPossible = n = function () {
      x && "true" === localStorage.getItem(document.location.href + ".isLocal") && localStorage.setItem(
        document.location.href + ".gui",
        JSON.stringify(i.getSaveObject())
      )
    }, i.getRoot(), t.parent || ((e = i.getRoot()).width += 1, f.defer(function () {
      --e.width
    }))
  };
  return A.toggleHide = function () {
    k = !k, f.each(R, function (e) {
      e.domElement.style.zIndex = k ? -999 : 999, e.domElement.style.opacity = k ? 0 : 1
    })
  }, A.CLASS_AUTO_PLACE = "a", A.CLASS_AUTO_PLACE_CONTAINER = "ac", A.CLASS_MAIN = "main", A.CLASS_CONTROLLER_ROW = "cr", A.CLASS_TOO_TALL = "taller-than-window", A.CLASS_CLOSED = "closed", A.CLASS_CLOSE_BUTTON = "close-button", A.CLASS_DRAG = "drag", A.DEFAULT_WIDTH = 245, A.TEXT_CLOSED = "Close Controls", A.TEXT_OPEN = "Open Controls", p.bind(
    window,
    "keydown",
    function (e) {
      "text" === document.activeElement.type || 72 !== e.which && 72 != e.keyCode || A.toggleHide()
    },
    !1
  ), f.extend(A.prototype, {
    add: function (e, t) {
      return m(this, e, t, {factoryArgs: Array.prototype.slice.call(arguments, 2)})
    }, addColor: function (e, t) {
      return m(this, e, t, {color: !0})
    }, remove: function (e) {
      this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
      var t = this;
      f.defer(function () {
        t.onResize()
      })
    }, destroy: function () {
      this.autoPlace && _.removeChild(this.domElement)
    }, addFolder: function (e) {
      if (void 0 !== this.__folders[e]) throw Error('You already have a folder in this GUI by the name "' + e + '"');
      var t = {name: e, parent: this};
      return t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]), t = new A(
        t), this.__folders[e] = t, e = v(this, t.domElement), p.addClass(e, "folder"), t
    }, open: function () {
      this.closed = !1
    }, close: function () {
      this.closed = !0
    }, onResize: function () {
      var t = this.getRoot();
      if (t.scrollable) {
        var e = p.getOffset(t.__ul).top, i = 0;
        f.each(t.__ul.childNodes, function (e) {
          t.autoPlace && e === t.__save_row || (i += p.getHeight(e))
        }), window.innerHeight - e - 20 < i ? (p.addClass(
          t.domElement,
          A.CLASS_TOO_TALL
        ), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (p.removeClass(
          t.domElement,
          A.CLASS_TOO_TALL
        ), t.__ul.style.height = "auto")
      }
      t.__resize_handle && f.defer(function () {
        t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
      }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
    }, remember: function () {
      if (f.isUndefined(T) && ((T = new u).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>'), this.parent) throw Error(
        "You can only call remember on a top level GUI.");
      var t = this;
      f.each(Array.prototype.slice.call(arguments), function (e) {
        0 == t.__rememberedObjects.length && function (i) {
          var e = i.__save_row = document.createElement("li");
          p.addClass(i.domElement, "has-save"), i.__ul.insertBefore(e, i.__ul.firstChild), p.addClass(e, "save-row");
          var t = document.createElement("span");
          t.innerHTML = "&nbsp;", p.addClass(t, "button gears");
          var n = document.createElement("span");
          n.innerHTML = "Save", p.addClass(n, "button"), p.addClass(n, "save");
          var o = document.createElement("span");
          o.innerHTML = "New", p.addClass(o, "button"), p.addClass(o, "save-as");
          var s = document.createElement("span");
          s.innerHTML = "Revert", p.addClass(s, "button"), p.addClass(s, "revert");
          var r = i.__preset_select = document.createElement("select");
          if (i.load && i.load.remembered ? f.each(i.load.remembered, function (e, t) {
            y(i, t, t == i.preset)
          }) : y(i, "Default", !1), p.bind(r, "change", function () {
            for (var e = 0; e < i.__preset_select.length; e++) i.__preset_select[e].innerHTML = i.__preset_select[e].value;
            i.preset = this.value
          }), e.appendChild(r), e.appendChild(t), e.appendChild(n), e.appendChild(o), e.appendChild(s), x) {
            var a = function () {
              l.style.display = i.useLocalStorage ? "block" : "none"
            }, l = (e = document.getElementById("dg-save-locally"), document.getElementById("dg-local-explain"));
            e.style.display = "block", e = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(
              document.location.href + ".isLocal") && e.setAttribute("checked", "checked"), a(), p.bind(
              e,
              "change",
              function () {
                i.useLocalStorage = !i.useLocalStorage, a()
              }
            )
          }
          var h = document.getElementById("dg-new-constructor");
          p.bind(h, "keydown", function (e) {
            !e.metaKey || 67 !== e.which && 67 != e.keyCode || T.hide()
          }), p.bind(t, "click", function () {
            h.innerHTML = JSON.stringify(i.getSaveObject(), void 0, 2), T.show(), h.focus(), h.select()
          }), p.bind(n, "click", function () {
            i.save()
          }), p.bind(o, "click", function () {
            var e = prompt("Enter a new preset name.");
            e && i.saveAs(e)
          }), p.bind(s, "click", function () {
            i.revert()
          })
        }(t), -1 == t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
      }), this.autoPlace && b(this, this.width)
    }, getRoot: function () {
      for (var e = this; e.parent;) e = e.parent;
      return e
    }, getSaveObject: function () {
      var i = this.load;
      return i.closed = this.closed, 0 < this.__rememberedObjects.length && (i.preset = this.preset, i.remembered || (i.remembered = {}), i.remembered[this.preset] = w(
        this)), i.folders = {}, f.each(this.__folders, function (e, t) {
        i.folders[t] = e.getSaveObject()
      }), i
    }, save: function () {
      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = w(this), E(
        this,
        !1
      ), this.saveToLocalStorageIfPossible()
    }, saveAs: function (e) {
      this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = w(
        this,
        !0
      )), this.load.remembered[e] = w(this), this.preset = e, y(this, e, !0), this.saveToLocalStorageIfPossible()
    }, revert: function (t) {
      f.each(this.__controllers, function (e) {
        this.getRoot().load.remembered ? g(t || this.getRoot(), e) : e.setValue(e.initialValue)
      }, this), f.each(this.__folders, function (e) {
        e.revert(e)
      }), t || E(this.getRoot(), !1)
    }, listen: function (e) {
      var t = 0 == this.__listening.length;
      this.__listening.push(e), t && function e(t) {
        0 != t.length && o(function () {
          e(t)
        }), f.each(t, function (e) {
          e.updateDisplay()
        })
      }(this.__listening)
    }
  }), A
}(
  dat.utils.css,
  0,
  0,
  dat.controllers.factory = function (s, r, a, l, h, c, d) {
    return function (e, t, i, n) {
      var o = e[t];
      return d.isArray(i) || d.isObject(i) ? new s(e, t, i) : d.isNumber(o) ? d.isNumber(i) && d.isNumber(n) ? new a(
        e,
        t,
        i,
        n
      ) : new r(e, t, {min: i, max: n}) : d.isString(o) ? new l(e, t) : d.isFunction(o) ? new h(
        e,
        t,
        ""
      ) : d.isBoolean(o) ? new c(e, t) : void 0
    }
  }(
    dat.controllers.OptionController,
    dat.controllers.NumberControllerBox,
    dat.controllers.NumberControllerSlider,
    dat.controllers.StringController = function (e, o, t) {
      var s = function (e, t) {
        function i() {
          n.setValue(n.__input.value)
        }

        s.superclass.call(this, e, t);
        var n = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), o.bind(
          this.__input,
          "keyup",
          i
        ), o.bind(this.__input, "change", i), o.bind(this.__input, "blur", function () {
          n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
        }), o.bind(this.__input, "keydown", function (e) {
          13 === e.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
      };
      return s.superclass = e, t.extend(s.prototype, e.prototype, {
        updateDisplay: function () {
          return o.isActive(this.__input) || (this.__input.value = this.getValue()), s.superclass.prototype.updateDisplay.call(
            this)
        }
      }), s
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common),
    dat.controllers.FunctionController,
    dat.controllers.BooleanController,
    dat.utils.common
  ),
  dat.controllers.Controller,
  dat.controllers.BooleanController,
  dat.controllers.FunctionController,
  dat.controllers.NumberControllerBox,
  dat.controllers.NumberControllerSlider,
  dat.controllers.OptionController,
  dat.controllers.ColorController = function (e, d, u, p, f) {
    function m(t, i, n, o) {
      t.style.background = "", f.each(s, function (e) {
        t.style.cssText += "background: " + e + "linear-gradient(" + i + ", " + n + " 0%, " + o + " 100%); "
      })
    }

    var v = function (e, t) {
      function i(e) {
        r(e), d.bind(window, "mousemove", r), d.bind(window, "mouseup", n)
      }

      function n() {
        d.unbind(window, "mousemove", r), d.unbind(window, "mouseup", n)
      }

      function o() {
        var e = p(this.value);
        !1 !== e ? (l.__color.__state = e, l.setValue(l.__color.toOriginal())) : this.value = l.__color.toString()
      }

      function s() {
        d.unbind(window, "mousemove", a), d.unbind(window, "mouseup", s)
      }

      function r(e) {
        e.preventDefault();
        var t = d.getWidth(l.__saturation_field), i = d.getOffset(l.__saturation_field),
          n = (e.clientX - i.left + document.body.scrollLeft) / t;
        return 1 < (e = 1 - (e.clientY - i.top + document.body.scrollTop) / t) ? e = 1 : e < 0 && (e = 0), 1 < n ? n = 1 : n < 0 && (n = 0), l.__color.v = e, l.__color.s = n, l.setValue(
          l.__color.toOriginal()), !1
      }

      function a(e) {
        e.preventDefault();
        var t = d.getHeight(l.__hue_field), i = d.getOffset(l.__hue_field);
        return 1 < (e = 1 - (e.clientY - i.top + document.body.scrollTop) / t) ? e = 1 : e < 0 && (e = 0), l.__color.h = 360 * e, l.setValue(
          l.__color.toOriginal()), !1
      }

      v.superclass.call(this, e, t), this.__color = new u(this.getValue()), this.__temp = new u(0);
      var l = this;
      this.domElement = document.createElement("div"), d.makeSelectable(
        this.domElement,
        !1
      ), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement(
        "div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement(
        "div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement(
        "input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", d.bind(
        this.__input,
        "keydown",
        function (e) {
          13 === e.keyCode && o.call(this)
        }
      ), d.bind(this.__input, "blur", o), d.bind(this.__selector, "mousedown", function (e) {
        d.addClass(this, "drag").bind(window, "mouseup", function (e) {
          d.removeClass(l.__selector, "drag")
        })
      });
      var h, c = document.createElement("div");
      f.extend(
        this.__selector.style,
        {
          width: "122px",
          height: "102px",
          padding: "3px",
          backgroundColor: "#222",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }
      ), f.extend(
        this.__field_knob.style,
        {
          position: "absolute",
          width: "12px",
          height: "12px",
          border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
          boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
          borderRadius: "12px",
          zIndex: 1
        }
      ), f.extend(
        this.__hue_knob.style,
        {position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1}
      ), f.extend(
        this.__saturation_field.style,
        {
          width: "100px",
          height: "100px",
          border: "1px solid #555",
          marginRight: "3px",
          display: "inline-block",
          cursor: "pointer"
        }
      ), f.extend(c.style, {width: "100%", height: "100%", background: "none"}), m(
        c,
        "top",
        "rgba(0,0,0,0)",
        "#000"
      ), f.extend(
        this.__hue_field.style,
        {
          width: "15px",
          height: "100px",
          display: "inline-block",
          border: "1px solid #555",
          cursor: "ns-resize"
        }
      ), (h = this.__hue_field).style.background = "", h.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", h.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", h.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", h.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", h.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", f.extend(
        this.__input.style,
        {
          outline: "none",
          textAlign: "center",
          color: "#fff",
          border: 0,
          fontWeight: "bold",
          textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }
      ), d.bind(this.__saturation_field, "mousedown", i), d.bind(
        this.__field_knob,
        "mousedown",
        i
      ), d.bind(this.__hue_field, "mousedown", function (e) {
        a(e), d.bind(window, "mousemove", a), d.bind(window, "mouseup", s)
      }), this.__saturation_field.appendChild(c), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(
        this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(
        this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    v.superclass = e, f.extend(v.prototype, e.prototype, {
      updateDisplay: function () {
        var t = p(this.getValue());
        if (!1 !== t) {
          var i = !1;
          f.each(u.COMPONENTS, function (e) {
            if (!f.isUndefined(t[e]) && !f.isUndefined(this.__color.__state[e]) && t[e] !== this.__color.__state[e]) return i = !0, {}
          }, this), i && f.extend(this.__color.__state, t)
        }
        f.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
        var e = this.__color.v < .5 || .5 < this.__color.s ? 255 : 0, n = 255 - e;
        f.extend(
          this.__field_knob.style,
          {
            marginLeft: 100 * this.__color.s - 7 + "px",
            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + "rgb(" + e + "," + e + "," + e + ")"
          }
        ), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, m(
          this.__saturation_field,
          "left",
          "#fff",
          this.__temp.toString()
        ), f.extend(
          this.__input.style,
          {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: "rgb(" + e + "," + e + "," + e + ")",
            textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
          }
        )
      }
    });
    var s = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return v
  }(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (e, n, t, o) {
    function i(e, t, i) {
      Object.defineProperty(e, t, {
        get: function () {
          return "RGB" === this.__state.space || r(this, t, i), this.__state[t]
        }, set: function (e) {
          "RGB" !== this.__state.space && (r(this, t, i), this.__state.space = "RGB"), this.__state[t] = e
        }
      })
    }

    function s(e, t) {
      Object.defineProperty(e, t, {
        get: function () {
          return "HSV" === this.__state.space || a(this), this.__state[t]
        }, set: function (e) {
          "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[t] = e
        }
      })
    }

    function r(e, t, i) {
      if ("HEX" === e.__state.space) e.__state[t] = n.component_from_hex(e.__state.hex, i); else {
        if ("HSV" !== e.__state.space) throw"Corrupted color state";
        o.extend(e.__state, n.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
      }
    }

    function a(e) {
      var t = n.rgb_to_hsv(e.r, e.g, e.b);
      o.extend(
        e.__state,
        {s: t.s, v: t.v}
      ), o.isNaN(t.h) ? o.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
    }

    var l = function () {
      if (this.__state = e.apply(this, arguments), !1 === this.__state) throw"Failed to interpret color arguments";
      this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = "r g b h s v hex a".split(" "), o.extend(l.prototype, {
      toString: function () {
        return t(this)
      }, toOriginal: function () {
        return this.__state.conversion.write(this)
      }
    }), i(l.prototype, "r", 2), i(l.prototype, "g", 1), i(l.prototype, "b", 0), s(l.prototype, "h"), s(
      l.prototype,
      "s"
    ), s(l.prototype, "v"), Object.defineProperty(l.prototype, "a", {
      get: function () {
        return this.__state.a
      }, set: function (e) {
        this.__state.a = e
      }
    }), Object.defineProperty(l.prototype, "hex", {
      get: function () {
        return "HEX" !== !this.__state.space && (this.__state.hex = n.rgb_to_hex(
          this.r,
          this.g,
          this.b
        )), this.__state.hex
      }, set: function (e) {
        this.__state.space = "HEX", this.__state.hex = e
      }
    }), l
  }(dat.color.interpret, dat.color.math = function () {
    var n;
    return {
      hsv_to_rgb: function (e, t, i) {
        var n = e / 60 - Math.floor(e / 60), o = i * (1 - t), s = i * (1 - n * t);
        return {
          r: 255 * (e = [[i, t = i * (1 - (1 - n) * t), o], [s, i, o], [o, i, t], [o, s, i], [t, o, i], [i, o, s]][Math.floor(
            e / 60) % 6])[0], g: 255 * e[1], b: 255 * e[2]
        }
      }, rgb_to_hsv: function (e, t, i) {
        var n = Math.min(e, t, i), o = Math.max(e, t, i);
        n = o - n;
        return 0 == o ? {
          h: NaN,
          s: 0,
          v: 0
        } : ((e = (e == o ? (t - i) / n : t == o ? 2 + (i - e) / n : 4 + (e - t) / n) / 6) < 0 && (e += 1), {
          h: 360 * e,
          s: n / o,
          v: o / 255
        })
      }, rgb_to_hex: function (e, t, i) {
        return e = this.hex_with_component(0, 2, e), e = this.hex_with_component(e, 1, t), this.hex_with_component(
          e,
          0,
          i
        )
      }, component_from_hex: function (e, t) {
        return e >> 8 * t & 255
      }, hex_with_component: function (e, t, i) {
        return i << (n = 8 * t) | e & ~(255 << n)
      }
    }
  }(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common),
  dat.utils.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
    window.setTimeout(e, 1e3 / 60)
  },
  dat.dom.CenteredDiv = function (i, t) {
    var e = function () {
      this.backgroundElement = document.createElement("div"), t.extend(
        this.backgroundElement.style,
        {
          backgroundColor: "rgba(0,0,0,0.8)",
          top: 0,
          left: 0,
          display: "none",
          zIndex: "1000",
          opacity: 0,
          WebkitTransition: "opacity 0.2s linear",
          transition: "opacity 0.2s linear"
        }
      ), i.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement(
        "div"), t.extend(
        this.domElement.style,
        {
          position: "fixed",
          display: "none",
          zIndex: "1001",
          opacity: 0,
          WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
          transition: "transform 0.2s ease-out, opacity 0.2s linear"
        }
      ), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var e = this;
      i.bind(this.backgroundElement, "click", function () {
        e.hide()
      })
    };
    return e.prototype.show = function () {
      var e = this;
      this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(
        function () {
          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
        })
    }, e.prototype.hide = function () {
      var e = this, t = function () {
        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", i.unbind(
          e.domElement,
          "webkitTransitionEnd",
          t
        ), i.unbind(e.domElement, "transitionend", t), i.unbind(e.domElement, "oTransitionEnd", t)
      };
      i.bind(this.domElement, "webkitTransitionEnd", t), i.bind(
        this.domElement,
        "transitionend",
        t
      ), i.bind(
        this.domElement,
        "oTransitionEnd",
        t
      ), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, e.prototype.layout = function () {
      this.domElement.style.left = window.innerWidth / 2 - i.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - i.getHeight(
        this.domElement) / 2 + "px"
    }, e
  }(dat.dom.dom, dat.utils.common),
  dat.dom.dom,
  dat.utils.common
);
var saveAs = saveAs || function (a) {
  "use strict";
  if (!(void 0 === a || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var e = a.document, l = function () {
        return a.URL || a.webkitURL || a
      }, h = e.createElementNS("http://www.w3.org/1999/xhtml", "a"), c = "download" in h,
      d = /constructor/i.test(a.HTMLElement) || a.safari, u = /CriOS\/[\d]+/.test(navigator.userAgent),
      p = function (e) {
        (a.setImmediate || a.setTimeout)(function () {
          throw e
        }, 0)
      }, f = function (e) {
        setTimeout(function () {
          "string" == typeof e ? l().revokeObjectURL(e) : e.remove()
        }, 4e4)
      }, m = function (e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(
          65279), e], {type: e.type}) : e
      }, n = function (e, i, t) {
        t || (e = m(e));
        var n, o = this, s = "application/octet-stream" === e.type, r = function () {
          !function (e, t, i) {
            for (var n = (t = [].concat(t)).length; n--;) {
              var o = e["on" + t[n]];
              if ("function" == typeof o) try {
                o.call(e, i || e)
              } catch (e) {
                p(e)
              }
            }
          }(o, "writestart progress write writeend".split(" "))
        };
        if (o.readyState = o.INIT, c) return n = l().createObjectURL(e), void setTimeout(function () {
          var e, t;
          h.href = n, h.download = i, e = h, t = new MouseEvent("click"), e.dispatchEvent(t), r(), f(n), o.readyState = o.DONE
        });
        !function () {
          if ((u || s && d) && a.FileReader) {
            var t = new FileReader;
            return t.onloadend = function () {
              var e = u ? t.result : t.result.replace(/^data:[^;]*;/, "data:attachment/file;");
              a.open(e, "_blank") || (a.location.href = e), e = void 0, o.readyState = o.DONE, r()
            }, t.readAsDataURL(e), o.readyState = o.INIT
          }
          n || (n = l().createObjectURL(e)), s ? a.location.href = n : a.open(n, "_blank") || (a.location.href = n);
          o.readyState = o.DONE, r(), f(n)
        }()
      }, t = n.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, i) {
      return t = t || e.name || "download", i || (e = m(e)), navigator.msSaveOrOpenBlob(e, t)
    } : (t.abort = function () {
    }, t.readyState = t.INIT = 0, t.WRITING = 1, t.DONE = 2, t.error = t.onwritestart = t.onprogress = t.onwrite = t.onabort = t.onerror = t.onwriteend = null, function (e, t, i) {
      return new n(e, t || e.name || "download", i)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);

function EventEmitter() {
  this.lists = {}, this.queue = {}, this.links = {}, arguments.length && this.when.apply(this, arguments)
}

function EventHandler(e, t, i, n) {
  if ("function" != typeof e) throw Error("EventHandler expects function as 1st argument");
  this.func = e, this.scope = t, this.data = null == i ? [] : [].concat(i), this.once = n, this.listens = []
}

function Observable(e, t, i, n, o) {
  this.id = ++Observable.count, this.value = e, this.targets = {}, this.sources = {}, this.set(t, i, n, o)
}

function Timer(e, t) {
  this.func = e, this.scope = t
}

function Defer() {
  this.set.apply(this, arguments), this.pending = !0
}

function Gate(e, t) {
  this.inputs = {}, this.method = e, this.value = t, this.events = new EventEmitter
}

function Loader() {
  this.reset(), this.data = {}
}

function Drag(e) {
  this.element = e, this.events = new EventEmitter, this.offset = {x: 0, y: 0}, this.origin = {
    x: 0,
    y: 0
  }, this.point = {x: 0, y: 0}, this.mouse = {x: 0, y: 0}, this.begin = {x: 0, y: 0}, this.delta = {
    x: 0,
    y: 0
  }, this.scale = {x: 1, y: 1}, this.moves = 0, this.min = {x: -1 / 0, y: -1 / 0}, this.max = {
    x: 1 / 0,
    y: 1 / 0
  }, this.bind("mousedown", this.element), this.bind("touchstart", this.element)
}

function Momentum() {
  this.speed = {x: 0, y: 0, z: 0}, this.point = {x: 0, y: 0, z: 0}, this.delta = {
    x: 0,
    y: 0,
    z: 0
  }, this.target = {x: 0, y: 0, z: 0}, this.points = []
}

function FileImport() {
  this.element = dom.div("file-import hand"), this.events = new EventEmitter, this.input = dom.input("file"), this.input.setAttribute(
    "accept",
    ".json, .fbx, .obj"
  ), this.input.setAttribute("multiple", "multiple"), Atlas.set(this.element, "i-file-load", "absmid"), dom.on(
    "change",
    this.input,
    f.binds(
      this.onInputChange,
      this
    )
  ), dom.on("tap", this.element, f.binds(this.input.click, this.input))
}

function TileView() {
  this.events = new EventEmitter, this.element = dom.div("tile-view"), this.econtent = dom.div(
    "tile-content",
    this.element
  ), this.ehelpers = dom.div("tile-helpers", this.element), this.setClients(), this.setLayout()
}

function PointProjector(e) {
  this.camera = e, this.points = [], this.matrix = new THREE.Matrix4, this.inverse = new THREE.Matrix4, this.viewport = new THREE.Vector3
}

function Imagery() {
  this.get = new Loader, this.list = {}, this.submaterialIndex = 0, this.slotIndex = 0, this.products = {}, this.productsList = [], this.obvMaterialsList = new Observable(
    []), this.obvProductsLoaded = new Observable(!1), this.pixel = this.makePixel("white"), this.bump = this.makePixel(
    "black"), this.normal = this.makePixel("rgb(127, 127, 255)"), this.buffer = document.createElement("canvas"), this.btx = this.buffer.getContext(
    "2d");
  var e = this.pixel.image;
  for (var t in this.skybox = new THREE.CubeTexture([e, e, e, e, e, e]), this.skybox.needsUpdate = !0, this.baseMaps = {
    norcon: {color: 16777215},
    subtract: {color: 16726391},
    connection: {color: "black"},
    wireframe: {color: "black"},
    normal: {},
    void: {}
  }, this.sampleMaterials = [], this.materials = {}, this.usedProducts = {}, this.baseMaps) this.addMaterial(t), this.setMaterial(
    t,
    null
  );
  this.materials.flume = this.materials.pipe = this.materials.drain, this.materials.flat = this.materials.floor, this.materials.slope = this.materials.roof, this.materials.Material__26 = this.materials.black, this.materials.wire_000000000 = this.materials.gold
}

function Sampler() {
  this.samples = []
}

function Sample(e, t) {
  for (var i in e) this[i] = e[i];
  this.parentSampler = t, this.dim = new TDimensions, this.joints = [], this.meshes = [], this.object && this.setData(
    this.object)
}

function SampleJoint(e, t) {
  this.point = new THREE.Vector3, this.normal = new THREE.Vector3, this.up = new THREE.Vector3, this.matrix = new THREE.Matrix4, this.setName(
    e), this.setMatrix(t)
}

function TDimensions() {
  this.box = new THREE.Box3, this.sphere = new THREE.Sphere, this.center = new THREE.Vector3, this.size = new THREE.Vector3, this.length = 1, this.mass = 0
}

"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null !== define.amd && define(
  "FileSaver.js",
  function () {
    return saveAs
  }
), EventEmitter.ADD = {}, EventEmitter.DEL = {}, EventEmitter.prototype = {
  _add: function (e, t) {
    e.tail ? (t.prev = e.tail, e.tail = e.tail.next = t) : e.head = e.tail = t
  }, _rem: function (e, t) {
    t.prev ? t.prev.next = t.next : e.head = t.next, t.next ? t.next.prev = t.prev : e.tail = t.prev
  }, when: function (e, t, i, n) {
    for (var o in e) this.on(o, e[o], t, i, n)
  }, once: function (e, t, i, n) {
    this.on(e, t, i, n, !0)
  }, on: function (e, t, i, n, o) {
    "function" == typeof t && this.emit(
      EventEmitter.ADD,
      {type: e, func: t, scope: i, data: null == n ? [] : [].concat(n), once: o}
    )
  }, off: function (e, t, i) {
    this.emit(EventEmitter.DEL, {type: e, func: t, scope: i})
  }, will: function (i, e) {
    var n = this, o = null == e ? [] : [].concat(e);
    return function () {
      for (var e = o.slice(), t = 0; t < arguments.length; t++) e.push(arguments[t]);
      n.emit(i, e)
    }
  }, emit: function (e, t) {
    if (this.debug && console.log(this.debug, e, t), this._add(
      this.queue,
      {type: e, data: null == t ? [] : t}
    ), !this.processing) {
      for (this.processing = !0; this.queue.head;) this.dispatch(this.queue.head), this._rem(
        this.queue,
        this.queue.head
      );
      this.processing = !1
    }
  }, dispatch: function (e) {
    var t = e.type, i = e.data;
    switch (t) {
      case EventEmitter.ADD:
        this._add(this.lists[i.type] || (this.lists[i.type] = {}), i);
        break;
      case EventEmitter.DEL:
        for (var t in this.lists) for (var n = (o = this.lists[t]).head; n; n = n.next) null != i.type && i.type !== t || null != i.func && i.func !== n.func || null != i.scope && i.scope !== n.scope || this._rem(
          o,
          n
        );
        break;
      default:
        var o;
        if (o = this.lists[t]) for (n = o.head; n; n = n.next) n.func.apply(
          n.scope,
          n.data.concat(i)
        ), n.once && this._rem(o, n);
        for (var s = this.links.head; s; s = s.next) s.emitter.emit(s.prefix ? s.prefix + t : t, s.data.concat(i))
    }
  }, relay: function (e, t, i) {
    this.on(e, t.emit, t, i || e)
  }, link: function (e, t, i) {
    if (e === this) throw Error("EventEmitter can't link to itself");
    this._add(this.links, {emitter: e, prefix: t, data: null == i ? [] : [].concat(i)})
  }, unlink: function (e, t) {
    for (var i = this.links.head; i; i = i.next) null != e && e !== i.emitter || null != t && t !== i.prefix || this._rem(
      this.links,
      i
    )
  }, clone: function () {
    var e = new EventEmitter;
    for (var t in this.lists) e.lists[t] = this.lists[t];
    return e
  }
}, EventHandler.prototype = {
  handleEvent: function (e) {
    return this.apply(e)
  }, apply: function (e) {
    return this.once && this.release(), this.func.apply(this.scope, [].concat(this.data, e || []))
  }, listen: function (e, t, i) {
    return this.element && this.release(), this.type = e, this.element = t, this.capture = !!i, this.element && this.element.addEventListener && this.element.addEventListener(
      this.type,
      this,
      this.capture
    ), this
  }, release: function () {
    return this.element && this.element.removeEventListener && this.element.removeEventListener(
      this.type,
      this,
      this.capture
    ), delete this.element, this
  }
}, Observable.count = 0, Observable.stack = [], Observable.context = null, Observable.unwrap = function (e) {
  return e instanceof Observable ? e.read() : e
}, Observable.inContext = function (e, t, i, n, o) {
  Observable.stack.push(Observable.context), Observable.context = e;
  try {
    return t.call(i, n, o)
  } finally {
    Observable.context = Observable.stack.pop()
  }
}, Observable.prototype = {
  set: function (e, t, i, n) {
    return this.reader = "function" == typeof t ? t : null, this.writer = "function" == typeof i ? i : null, this.equals = "function" == typeof n ? n : null, this.scope = e, this.stale = !0, this
  }, read: function () {
    var e = Observable.context;
    if (e && e.id !== this.id && ((this.targets[e.id] = e).sources[this.id] = this), this.stale) if (this.stale = !1, this.reader) {
      this.sources = {};
      var t = this.value;
      this.value = Observable.inContext(this, this.reader, this.scope, this.value), this.debug && console.log(
        "OB",
        this.id,
        "read",
        t,
        "->",
        this.value,
        "deps:",
        Object.keys(this.sources)
          .map(Number)
      )
    } else this.debug && console.log("OB", this.id, "read stale no reader", this.value); else this.debug && console.log(
      "OB",
      this.id,
      "read utmost",
      this.value
    );
    return this.value
  }, write: function (e) {
    return this.value !== e ? (this.writer && this.writer.call(this.scope, e, this.value), this.debug && console.log(
      "OB",
      this.id,
      "write ok",
      this.value,
      "->",
      e
    ), this.value = e, this.touch()) : this.debug && console.log("OB", this.id, "write fail", e), this
  }, touch: function (e) {
    this.stale = !0, this.debug && console.trace("OB", this.id, "touched");
    var t = this.debug;
    for (var i in this.targets) {
      var n = this.targets[i];
      delete this.targets[i], t |= n.touch()
    }
    return t && console.log("---\x3e OB", this.id), t
  }, destroy: function () {
    for (var e in this.sources) delete this.sources[e].targets[this.id], delete this.sources[e];
    this.touch()
  }
}, Timer.prototype = {
  time: 0, rate: 1, running: !1, play: function () {
    if (this.running) return this;
    this.running = !0;
    var t = this, i = 0, n = performance.now(), o = 0, s = 0;
    return document.addEventListener("visibilitychange", function () {
      n = performance.now()
    }), function e() {
      t.id = requestAnimationFrame(e), i++, o = performance.now(), s = (o - n) * t.rate, t.time += s, t.func.call(
        t.scope,
        t.time,
        s,
        i
      ), n = o
    }(), this
  }, stop: function () {
    return this.running && (this.running = !1, cancelAnimationFrame(this.id)), this
  }
}, Defer.safe = !0, Defer.soft = !0, Defer.silent = !1, Defer.prototype = {
  set: function (e, t, i, n) {
    return this.onresolve = "function" == typeof e ? e : null, this.onreject = "function" == typeof t ? t : null, this.onprogress = "function" == typeof i ? i : null, this.scope = this.onprogress ? n : this.onreject ? i : t || n, this
  }, abort: function () {
    return delete this.head, delete this.tail, this.set(null)
  }, then: function (e, t, i, n) {
    return this.push(new Defer(e, t, i, n))
  }, anyway: function (e, t) {
    return this.push(new Defer(e, e, t))
  }, delay: function (e) {
    return this.push(Defer.timer(e))
  }, push: function (e) {
    return this.tail ? this.tail = this.tail.next = e : this.head = this.tail = e, this.dispatch(), e
  }, willProgress: function () {
    var t = this;
    return function (e) {
      t.progress(e)
    }
  }, willResolve: function (e) {
    return this.willTransition(!0, e)
  }, willReject: function (e) {
    return this.willTransition(!1, e)
  }, willTransition: function (t, i) {
    var n = this;
    return function (e) {
      n.transition(t, null == i ? e : i)
    }
  }, progress: function (e) {
    if (!this.pending) return this;
    if (this.onprogress) this.onprogress.call(
      this.scope,
      e,
      this
    ); else for (var t = this.head; t;) t.progress(e), t = t.next;
    return this
  }, resolve: function (e) {
    return this.transition(!0, e)
  }, reject: function (e) {
    return this.transition(!1, e)
  }, transition: function (e, t) {
    if (this.debug && console.log(
      "defer",
      this.debug,
      e ? "resolve" : "reject",
      this.pending ? "ok" : "no",
      t
    ), !this.pending) return this;
    this.pending = !1;
    var i = e ? this.onresolve : this.onreject;
    if (i) if (Defer.safe) try {
      this.value = i.call(this.scope, t, e), this.success = !0
    } catch (e) {
      this.value = e, this.success = !1
    } else this.value = i.call(this.scope, t, e), this.success = !0; else this.success = e, this.value = t;
    return this.dispatch(), this
  }, dispatch: function () {
    if (this.pending) return this;
    var e = this.head;
    if (delete this.head, delete this.tail, e) if (this.value instanceof Defer) this.value.push(e); else for (; e;) e.transition(
      this.success,
      this.value
    ), e = e.next; else if (!this.success && !Defer.silent) {
      if (!Defer.soft) throw this.value;
      console.error(this.value)
    }
    return this
  }
}, Defer.all = function (n) {
  var o = new Defer, s = n && n.length || 0, r = new Array(n.length), i = new Array(n.length), a = 0, l = 0;
  if (!s) return o.resolve(r), o;
  for (var e = 0; e < s; e++) {
    var t = n[e];
    t instanceof Defer ? (i[e] = 0, t.then(c, c, h, t)) : (i[e] = 1, r[e] = t, a++)
  }

  function h(e) {
    var t = n.indexOf(this);
    -1 !== t && (i[t] = e, o.progress(i))
  }

  function c(e, t) {
    var i = n.indexOf(this);
    e instanceof Defer ? (n[i] = e).then(c, c) : (t ? ++a : ++l, t && (r[i] = e), s <= a + l && setTimeout(function () {
      o.transition(!l, r)
    }, 0))
  }

  return o
}, Defer.complete = function (e, t) {
  var i = new Defer;
  return i.pending = !1, i.success = e, i.value = t, i
}, Defer.timer = function (n) {
  function e(e, t) {
    var i = new Defer;
    return setTimeout(function () {
      i.transition(e, t)
    }, n || 0), i
  }

  return new Defer(e, e)
}, Gate.prototype = {
  on: function (e) {
    this.set(!0, e)
  }, off: function (e) {
    this.set(!1, e)
  }, set: function (e, t) {
    this.inputs[t] !== e && (this.inputs[t] = e, this.check())
  }, will: function (e, t) {
    var i = this;
    return function () {
      i.set(e, t)
    }
  }, check: function (e) {
    var t, i = Object.keys(this.inputs);
    if (i.length) {
      t = this.inputs[i[0]];
      for (var n = 1; n < i.length; n++) t = this.method(t, this.inputs[i[n]])
    } else t = this.value;
    (!this.value != !t || e) && this.events.emit(
      t ? "opened" : "closed",
      !!t
    ), (this.value !== t || e) && (this.value = t, this.events.emit("change", t))
  }, constructor: Gate
}, Gate.MULTIPLY = function (e, t) {
  return e * t
}, Gate.ADD = function (e, t) {
  return e + t
}, Gate.AND = function (e, t) {
  return e && t
}, Gate.OR = function (e, t) {
  return e || t
}, Loader.prototype = {
  randomize: !1, reset: function () {
    this.units = [], this.defers = []
  }, wait: function (e) {
    this.defers.push(e)
  }, abort: function (e) {
    e ? e.abort() : (this.units.forEach(this.abort, this), this.reset())
  }, load: function (e, t, i) {
    var n = Loader.Resource.types[e];
    if (!n) throw TypeError("Loader: unknown type: " + e);
    var o = {};
    for (var s in n) o[s] = n[s];
    for (var s in i) o[s] = i[s];
    var r = new Loader.Resource(t, o, this);
    return this.units.push(r), this.defers.push(r.deferTail), r.transport(), r.defer
  }, ready: function () {
    return Defer.all(this.defers, Loader.commonProgress)
  }
}, Loader.commonProgress = function (e) {
  for (var t = 0, i = 0, n = 0; n < e.length; n++) {
    var o = e[n];
    o && o.lengthComputable && (i += o.loaded, t += o.total)
  }
  return t ? i / t : 0
}, Loader.imageTransport = function () {
  var t = this, e = new Image;
  (t.data = e).onload = function () {
    t.deferHead.resolve(e)
  }, e.onerror = function (e) {
    t.deferHead.reject(e)
  }, e.onprogress = function (e) {
    t.deferHead.progress(e)
  }, e.src = t.source
}, Loader.ajaxTransport = function () {
  var t = this, e = new XMLHttpRequest, i = [];
  for (var n in t.query) i.push(encodeURIComponent(n) + "=" + encodeURIComponent(t.query[n]));
  var o = i.join("&");
  for (var s in t.request = e, t.requestType = t.requestType ? t.requestType.toUpperCase() : "GET", "GET" === t.requestType && o && (t.source += "?" + o), e.open(
    t.requestType,
    t.source,
    !0
  ), e.responseType = t.responseType || "", t.headers) e.setRequestHeader(s, t.headers[s]);
  e.onreadystatechange = function () {
    4 === e.readyState && (200 <= e.status && e.status < 400 ? (t.data = e[t.responseName || "responseText"], t.deferHead.resolve(
      t.data)) : t.deferHead.reject("HTTP " + e.status))
  }, e.onprogress = function (e) {
    t.deferHead.progress(e)
  }, e.send("POST" === t.requestType ? o : null)
}, Loader.extend = function (i, e) {
  Loader.prototype[i] && console.warn("Loader.extend: overwriting " + i), Loader.Resource.types[i] = e, Loader.prototype[i] = function (e, t) {
    return this.load(i, e, t)
  }
}, Loader.Resource = function (e, t, i) {
  for (var n in t) this[n] = t[n];
  this.url = e, this.loader = i, this.bytesTotal = 0, this.bytesLoaded = 0, this.source = (this.url + "").replace(
    /#.*$/,
    ""
  ), (this.randomize || i.randomize) && (this.source += "&?"[+!~this.source.indexOf("?")] + Math.random()), this.deferHead = new Defer(
    this.prepare,
    this
  ), this.saveAs || this.saveTo ? this.defer = this.deferHead.then(
    this.save,
    this
  ) : this.defer = this.deferHead.then(), this.deferTail = this.defer
}, Loader.Resource.prototype = {
  save: function (e) {
    return (this.saveTo || this.loader.data)[this.saveAs || "data"] = e
  }, abort: function () {
    return this.request && this.request.abort(), this.deferHead.init(null), this.deferTail.init(null), this
  }
}, Loader.Resource.types = {}, function () {
  var e = {
    image: {transport: Loader.imageTransport},
    text: {transport: Loader.ajaxTransport},
    post: {
      transport: Loader.ajaxTransport,
      requestType: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      query: null
    },
    json: {transport: Loader.ajaxTransport, prepare: JSON.parse},
    xml: {responseName: "responseXML", transport: Loader.ajaxTransport},
    buffer: {responseType: "arraybuffer", responseName: "response", transport: Loader.ajaxTransport}
  };
  for (var t in e) Loader.extend(t, e[t])
}(), Loader.extend("obj", {
  transport: Loader.ajaxTransport,
  saveMetadata: !1,
  computeBoundingBox: !1,
  randomColor: !0,
  verbose: !1,
  prepare: function (e) {
    var d, t, i, u = this, n = {vertices: [], normals: [], meshes: [], uvs: []}, o = 0, s = !0, r = new THREE.Object3D,
      a = r, l = new THREE.Vector2, p = new THREE.Vector3, f = new THREE.Vector3, m = [l, l, l];

    function h(e, t, i, n, o, s, r, a, l, h) {
      if (p.subVectors(r[i], r[t]), f.subVectors(r[e], r[t]), p.cross(f), p.x || p.y || p.z) {
        p.normalize();
        var c = new THREE.Face3(n[e], n[t], n[i]);
        c.normal.copy(p), l && c.vertexNormals.push(
          s[e],
          s[t],
          s[i]
        ), d.faceVertexUvs[0].push(a ? [o[e], o[t], o[i]] : m), d.faces.push(c)
      } else u.verbose && console.warn('[Loader.obj] collapsed face "' + u.url + '":', h, [e, t, i])
    }

    function c() {
      d && d.vertices.length && (u.computeBoundingBox && d.computeBoundingBox(), r.add(i))
    }

    function v() {
      s && (s = !1, c(), d = new THREE.Geometry, t = new THREE.MeshBasicMaterial, i = new THREE.Mesh(
        d,
        t
      ), u.randomColor && t.color.set(Math.round(16777215 * Math.random())), o = n.vertices.length, n.meshes.push(i))
    }

    for (var g, b = -1, w = 0; -1 !== w;) {
      var y = e.indexOf("\n", w + 1), E = e.substr(w, y - w).replace(/#.*/, "").trim();
      if (b++, w = y, E) {
        var x = E.split(/\s+/), T = x[0], _ = x.slice(1);
        switch (T) {
          case"mtllib":
          case"o":
          case"s":
            break;
          case"usemtl":
            i.material.name = _.join(" ");
            break;
          case"g":
            i.name = _.join(" ");
            break;
          case"v":
            v();
            var S = new THREE.Vector3(parseFloat(_[0]), parseFloat(_[1]), parseFloat(_[2]));
            n.vertices.push(S), d.vertices.push(S);
            break;
          case"vn":
            n.normals.push(new THREE.Vector3(parseFloat(_[0]), parseFloat(_[1]), parseFloat(_[2])));
            break;
          case"vt":
            n.uvs.push(new THREE.Vector2(parseFloat(_[0]), parseFloat(_[1])));
            break;
          case"f":
            for (var k = _.length, R = !0, A = !0, C = [], M = [], H = [], L = [], D = 0; D < k; D++) {
              var N = _[D].split("/"),
                P = ((g = parseInt(N[0]) - 1) < 0 && (g = n.vertices.length + g + 1), n.vertices[g] || u.verbose && console.warn(
                  "Loader.obj: undefined vertex " + g), g < o ? d.vertices.push(n.vertices[g]) - 1 : g - o),
                I = n.uvs[parseInt(N[1]) - 1], O = n.normals[parseInt(N[2]) - 1];
              C.push(P), M.push(I), H.push(O), L.push(d.vertices[P]), A &= !!I, R &= !!O
            }
            if (4 === k) h(0, 1, 3, C, M, H, L, A, R, b), h(1, 2, 3, C, M, H, L, A, R, b); else {
              if (3 !== k) {
                u.verbose && console.warn("[Loader.obj] unknown face with", k, "vertices");
                continue
              }
              h(0, 1, 2, C, M, H, L, A, R, b)
            }
            s = !0;
            break;
          default:
            u.verbose && console.log('Loader.obj: unhandled "' + E + '"')
        }
      }
    }
    return c(), this.saveMetadata && (a.metadata = n), a
  }
}), Drag.prototype = {
  active: !1, disabled: !1, start: function (e, t) {
    this.active = !0, this.moves = 0, this.begin.x = e, this.begin.y = t, this.origin.x = this.point.x, this.origin.y = this.point.y, this.offset.x = this.delta.x = 0, this.offset.y = this.delta.y = 0
  }, move: function (e, t) {
    this.active && (this.moves++, this.delta.x = -this.point.x, this.delta.y = -this.point.y, this.offset.x = (e - this.begin.x) * this.scale.x, this.offset.y = (t - this.begin.y) * this.scale.y, this.point.x = Math.min(
      this.max.x,
      Math.max(this.min.x, this.origin.x + this.offset.x)
    ), this.point.y = Math.min(
      this.max.y,
      Math.max(this.min.y, this.origin.y + this.offset.y)
    ), this.delta.x += this.point.x, this.delta.y += this.point.y)
  }, end: function () {
    this.active = !1
  }, enable: function () {
    this.disabled = !1
  }, disable: function () {
    this.active && this.end(), this.disabled = !0
  }, bind: function (e, t) {
    t && t.addEventListener(e, this)
  }, unbind: function (e, t) {
    t && t.removeEventListener(e, this)
  }, handleEvent: function (e) {
    if (!this.disabled) {
      if (this.mouse.x = 0, this.mouse.y = 0, e.touches) {
        for (var t = e.touches.length, i = 0; i < t; i++) {
          var n = e.touches[i];
          this.mouse.x += n.pageX, this.mouse.y += n.pageY
        }
        this.mouse.x /= t, this.mouse.y /= t
      } else this.mouse.x = e.pageX, this.mouse.y = e.pageY;
      var o;
      switch (e.type) {
        case"mousedown":
          if (1 !== e.which) return;
          this.mouseActive || (this.mouseActive = !0, this.bind("mousemove", window), this.bind(
            "mouseup",
            window
          )), this.start(this.mouse.x, this.mouse.y), o = "start";
          break;
        case"mousemove":
          if (!this.mouseActive) return;
          this.move(this.mouse.x, this.mouse.y), o = "drag";
          break;
        case"mouseup":
          if (!this.mouseActive) return;
          this.mouseActive = !1, this.unbind("mousemove", window), this.unbind(
            "mouseup",
            window
          ), this.end(), o = "end";
          break;
        case"touchstart":
          this.touchActive || (this.touchActive = !0, this.bind("touchstart", window), this.bind(
            "touchmove",
            window
          ), this.bind("touchend", window), this.unbind("touchstart", this.element)), this.start(
            this.mouse.x,
            this.mouse.y
          ), o = "start";
          break;
        case"touchmove":
          if (!this.touchActive) return;
          this.move(this.mouse.x, this.mouse.y), o = "drag";
          break;
        case"touchend":
          if (!this.touchActive) return;
          e.touches.length ? this.start(this.mouse.x, this.mouse.y) : (this.touchActive = !1, this.unbind(
            "touchstart",
            window
          ), this.unbind("touchmove", window), this.unbind("touchend", window), this.bind(
            "touchstart",
            this.element
          ), this.end(), o = "end")
      }
      o && this.events.emit(o, [this, e]), e.preventDefault()
    }
  }
}, Momentum.prototype = {
  pointsLength: 5, friction: Math.pow(.87, .06), threshold: 1e-5, time: function () {
    return window.performance && window.performance.now ? window.performance.now() : Date.now ? Date.now() : (new Date).getTime()
  }, push: function (e, t, i) {
    this.point.x = +e || 0, this.point.y = +t || 0, this.point.z = +i || 0, this.point.t = this.time(), this.points.push(
      {x: this.point.x, y: this.point.y, z: this.point.z, t: this.point.t});
    var n = this.points.length - this.pointsLength;
    0 < n && this.points.splice(0, n)
  }, updateSpeed: function () {
    this.speed0 = Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y + this.speed.z * this.speed.z)
  }, updateAccel: function (e) {
    this.limit = 1 / (1 - this.friction)
  }, updateTarget: function () {
    this.target.x = this.point.x + this.speed.x * this.limit, this.target.y = this.point.y + this.speed.y * this.limit, this.target.z = this.point.z + this.speed.z * this.limit
  }, updateDistance: function () {
    this.delta.x = this.target.x - this.point.x, this.delta.y = this.target.y - this.point.y, this.delta.z = this.target.z - this.point.z, this.distance = Math.sqrt(
      this.delta.x * this.delta.x + this.delta.y * this.delta.y + this.delta.z * this.delta.z)
  }, updateDuration: function () {
    this.duration = Math.log(this.threshold / this.speed0) / Math.log(this.friction)
  }, go: function () {
    if (!(this.points.length < 2)) {
      var e = this.points[0], t = this.point.x - e.x, i = this.point.y - e.y, n = this.point.z - e.z,
        o = this.point.t - e.t;
      this.speed.x = t / o, this.speed.y = i / o, this.speed.z = n / o, this.updateSpeed(), this.updateAccel(), this.updateTarget(), this.updateDuration(), this.updateDistance(), this.start()
    }
  }, to: function (e, t, i) {
    this.target.x = +e || 0, this.target.y = +t || 0, this.target.z = +i || 0, this.updateDistance(), this.updateAccel(), this.speed.x = this.delta.x / this.limit, this.speed.y = this.delta.y / this.limit, this.speed.z = this.delta.z / this.limit, this.updateSpeed(), this.updateDuration(), this.start()
  }, tot: function (e, t, i, n) {
    this.duration = +e || 0, this.target.x = +t || 0, this.target.y = +i || 0, this.target.z = +n || 0, this.updateDistance(), this.updateAccel();
    var o = this.duration, s = this.distance;
    this.speed.x = this.delta.x / this.limit, this.speed.y = this.delta.y / this.limit, this.speed.z = this.delta.z / this.limit, this.updateSpeed(), this.updateDuration(), this.updateTarget(), this.updateDistance();
    for (var r = 0; 1e-4 < Math.abs(o - this.duration) / o || 1e-4 < Math.abs(s - this.distance) / s;) {
      this.friction = Math.pow(
        this.threshold / this.speed0,
        1 / o
      ), this.limit = 1 / (1 - this.friction), this.updateTarget(), this.updateDistance();
      var a = s / this.distance;
      if (this.speed.x *= a, this.speed.y *= a, this.speed.z *= a, this.updateSpeed(), this.updateDuration(), 10 < ++r) break
    }
    this.updateTarget(), this.updateDistance(), this.start()
  }, update: function () {
    if (this.ended = !1, this.active) {
      this.timeNow = this.time(), this.timeDelta = Math.round(this.timeNow - this.timeLast), this.timeLast += this.timeDelta;
      for (var e = 0, t = 0; t < this.timeDelta; t++) e += Math.pow(this.friction, t);
      this.delta.x = this.speed.x * e, this.delta.y = this.speed.y * e, this.delta.z = this.speed.z * e, this.point.x += this.delta.x, this.point.y += this.delta.y, this.point.z += this.delta.z;
      var i = Math.pow(this.friction, this.timeDelta);
      this.speed.x *= i, this.speed.y *= i, this.speed.z *= i, this.updateSpeed(), this.speed0 < this.threshold && (this.ended = !0, this.stop())
    }
  }, start: function () {
    this.updateSpeed(), this.debug && console.log(
      this.debug,
      "start",
      this.speed0 < this.threshold
    ), this.speed0 < this.threshold || (this.timeLast = this.time(), this.timeStart = this.timeLast, this.timeEnd = this.timeStart + this.duration, this.active = !0)
  }, stop: function () {
    this.debug && console.log(this.debug, "stop", this.active), this.active && (this.points = [], this.active = !1)
  }
},
  window.Block = f.unit({
                    unitName: "Block",
                    etag: "div",
                    ename: "block",
                    einam: "absmid",
                    visibleMethod: dom.display,
                    cacheSize: !0,
                    events: null,
                    element: null,
                    visible: null,
                    template: null,
                    init: function (e) {
                      f.copy(
                        this,
                        e
                      ), this.watchAtlas = [], this.watchLocale = [], this.watchEvents = [], this.watchBlocks = [], this.protocall(
                        "create"), this.protocall("createPost")
                    },
                    protomerge: function (e) {
                      for (var t = {}, i = 0; i < this.protochain.length; i++) f.copy(t, this.protochain[i][e]);
                      return f.copy(t, this[e]), t
                    },
                    protocall: function (e) {
                      for (var t = 0; t < this.protochain.length; t++) {
                        var i = this.protochain[t], n = i[e];
                        Object.prototype.hasOwnProperty.call(i, e) && "function" == typeof n && n.call(this)
                      }
                    },
                    create: function () {
                      this.events instanceof EventEmitter == !1 && (this.events = new EventEmitter(
                        this.events,
                        this.eventScope || this
                      )), this.visible || (this.visible = new Gate(
                        Gate.AND,
                        !this.hidden
                      )), this.element || (this.element = dom.elem(this.etag)), this.eroot && dom.append(
                        this.eroot.element || this.eroot,
                        this.element
                      ), this.content = this.element
                    },
                    createPost: function () {
                      if (dom.addclass(
                        this.element,
                        this.ename
                      ), "string" == typeof this.data && dom.addclass(
                        this.element,
                        this.data
                      ), this.listens) for (var e = 0; e < this.listens.length; e++) this.events.on.apply(
                        this.events,
                        this.listens[e]
                      );
                      this.text && (console.warn("Block::text is [deprecated], use ::attr.text"), this.setAttribute(
                        "text",
                        this.text
                      )), this.title && (console.warn("Block::title is [deprecated], use ::attr.title"), this.setAttribute(
                        "title",
                        this.title
                      )), this.elabel && (console.warn("Block::elabel is [deprecated], use ::eattr.label"), this.setAttributeLocale(
                        "label",
                        this.elabel
                      )), this.etext && (console.warn("Block::etext is [deprecated], use ::eattr.text"), this.setAttributeLocale(
                        "text",
                        this.etext
                      )), this.etitle && (console.warn("Block::etitle is [deprecated], use ::eattr.title"), this.setAttributeLocale(
                        "title",
                        this.etitle
                      )), this.eicon && (console.warn("Block::eicon is [deprecated], use ::attr.icon"), this.setAttribute(
                        "icon",
                        this.eicon
                      )), this.setAttributes(this.attr), this.setAttributesLocale(this.eattr), this.visible.events.on(
                        "change",
                        this.visibleMethod,
                        this,
                        this.element
                      )
                    },
                    setIcon: function (e) {
                      dom.togclass(
                        this.element,
                        "eicon",
                        !!e
                      ), "undefined" != typeof Atlas && (null != e ? (this.atlasElement || (this.atlasElement = this.content, this.watchAtlas.push(
                        this.atlasElement)), this.atlasIcon = e, Atlas.set(
                        this.atlasElement,
                        this.atlasIcon,
                        this.einam
                      )) : this.atlasElement && (Atlas.free(this.atlasElement), f.adrop(
                        this.watchAtlas,
                        this.atlasElement
                      ), this.atlasElement = null))
                    },
                    setLabel: function (e) {
                      null != e ? (this.labelElement || (this.labelElement = dom.div(
                        "block-label",
                        this.content
                      ), dom.addclass(this.element, "labeled")), dom.text(
                        this.labelElement,
                        e
                      )) : this.labelElement && (dom.remclass(
                        this.element,
                        "labeled"
                      ), dom.remove(this.labelElement), this.labelElement = null)
                    },
                    setAttribute: function (e, t) {
                      switch (e) {
                        case"text":
                          dom.text(this.content, t);
                          break;
                        case"icon":
                          this.setIcon(t);
                          break;
                        case"label":
                          this.setLabel(t);
                          break;
                        default:
                          dom.attr(this.content, e, t)
                      }
                    },
                    setAttributeLocale: function (e, t) {
                      this.watchLocale.push(Locale.setAttribute(e, this.content, t))
                    },
                    setAttributes: function (e) {
                      for (var t in e) this.setAttribute(t, e[t])
                    },
                    setAttributesLocale: function (e) {
                      for (var t in e) this.setAttributeLocale(t, e[t])
                    },
                    destroy: function () {
                      "undefined" != typeof Atlas && (this.watchAtlas.forEach(Atlas.free), this.watchAtlas = []), "undefined" != typeof Locale && (this.watchLocale.forEach(
                        Locale.unwatch), this.watchLocale = []), this.watchEvents.forEach(f.func("release")), this.watchEvents = [], this.watchBlocks.forEach(
                        f.func("destroy")), this.watchBlocks = [], this.events.off(), dom.remove(this.element)
                    },
                    resize: function (e, t) {
                      e |= 0, t |= 0, this.cacheSize && this.width === e && this.height === t || (this.element.style.width = e + "px", this.element.style.height = t + "px", this.width = e, this.height = t, this.onResize())
                    },
                    autoresize: function () {
                      this.element.style.width = "", this.element.style.height = "";
                      var e = this.element.offsetWidth, t = this.element.offsetHeight;
                      this.cacheSize && this.width === e && this.height === t || (this.width = e, this.height = t, this.onResize())
                    },
                    onResize: function () {
                    }
                  }), Block.Toggle = f.unit(Block, {
  unitName: "Block_Toggle",
  ename: "toggle",
  auto: !0,
  active: !1,
  reset: !1,
  resetTime: 100,
  disabled: !1,
  deselect: !0,
  hovered: !1,
  create: function () {
    this.watchEvents.push(
      new EventHandler(this.ontap, this).listen("tap", this.element),
      new EventHandler(this.onenter, this).listen("mouseenter", this.element),
      new EventHandler(this.onleave, this).listen("mouseleave", this.element)
    )
  },
  createPost: function () {
    this.update()
  },
  ontap: function () {
    this.auto && this.toggle(!0)
  },
  onenter: function () {
    this.hovered = !0, this.events.emit("hover", this.hovered)
  },
  onleave: function () {
    this.hovered = !1, this.events.emit("hover", this.hovered)
  },
  toggle: function (e) {
    this.set(!this.active, e)
  },
  set: function (e, t, i) {
    var n = !!this.active, o = !!e;
    if (!i && (this.disabled || n === o || this.reset && this.active || !this.deselect && !e)) return !1;
    this.active = o, this.update(), t && (this.events.emit("change", o), this.events.emit(
      o ? "active" : "inactive",
      o
    ));
    var s = this;
    return !i && this.reset && setTimeout(function () {
      s.set(n, t, !0)
    }, this.resetTime), !0
  },
  update: function () {
    dom.togclass(this.element, "active", this.active), dom.togclass(
      this.element,
      "disabled",
      this.disabled
    ), dom.togclass(this.element, "hand", this.auto && !this.disabled && (!this.active || this.deselect))
  }
}), Block.List = f.unit(Block, {
  unitName: "Block_List",
  ename: "list",
  cname: "list-item",
  blocks: null,
  items: null,
  template: {factory: Block, ename: "list-item"},
  create: function () {
    this.blocks = [], this.template = this.protomerge("template"), this.container = this.element
  },
  createPost: function () {
    this.addItemList(this.items)
  },
  addItemList: function (e) {
    e && e.forEach(this.addItem, this)
  },
  addItem: function (e) {
    "object" != typeof e && (e = {data: e});
    var t = f.merge({eroot: this.container}, this.template, e), i = t.factory || Block;
    return this.addBlock(new i(t))
  },
  addBlock: function (e) {
    return this.blocks.push(e), this.events.emit("block_add", e), e
  },
  removeBlock: function (e, t) {
    var i = this.blocks.indexOf(e);
    return -1 !== i && (this.blocks.splice(i, 1), t ? e.destroy() : dom.remove(e.element), !0)
  },
  getIndex: function (e) {
    for (var t = 0; t < this.blocks.length; t++) {
      var i = this.blocks[t];
      if (i.hasOwnProperty("data") && i.data === e) return t
    }
    return -1
  },
  getBlock: function (e) {
    return this.blocks[this.getIndex(e)]
  },
  destroy: function () {
    Block.prototype.destroy.call(this), this.clearBlocks(!0)
  },
  clearBlocks: function (e) {
    for (var t = this.blocks.length - 1; 0 <= t; t--) this.removeBlock(this.blocks[t], e)
  }
}), Block.Menu = f.unit(Block.List, {
  unitName: "Block_Menu",
  ename: "menu",
  active: -1,
  template: {ename: "menu-item", factory: Block.Toggle},
  createPost: function () {
    this.set(this.active)
  },
  addBlock: function (e) {
    return e.events.when(
      {change: this.onitemchange, hover: this.onitemhover},
      this,
      e
    ), e.set(0), Block.List.prototype.addBlock.call(this, e)
  },
  removeBlock: function (e, t) {
    var i = Block.List.prototype.removeBlock.call(this, e, t);
    return i && e.events.off(null, null, this), i
  },
  update: function () {
    this.active = -1, this.activeBlock = null, this.activeItem = null;
    for (var e = this.blocks.length - 1; 0 <= e; e--) {
      var t = this.blocks[e];
      t.active && (this.active = e, this.activeBlock = t, this.activeItem = t.data)
    }
  },
  onitemchange: function (e, t) {
    t && this.unsetBlocks(e, !0);
    var i = this.active;
    this.update(), i !== this.active && this.events.emit("change", this.activeItem)
  },
  onitemhover: function (e, t) {
    this.events.emit("hover", [e, t])
  },
  set: function (e, t, i) {
    var n = this.blocks[e];
    return n !== this.activeBlock && (!(n && !n.set(1, t)) && (i || this.unsetBlocks(n, t), this.update(), !0))
  },
  setItem: function (e, t, i) {
    return this.set(this.getIndex(e), t, i)
  },
  unsetBlocks: function (e, t) {
    for (var i = 0; i < this.blocks.length; i++) {
      var n = this.blocks[i];
      n.active && n !== e && n.set(0, t, !0)
    }
  }
}), Block.Fade = f.unit(Block, {
  unitName: "Block_Fade", ename: "block-fade", fadeAxis: null, fadeTime: 300, fadeDistance: 20, create: function () {
    this.fadeTween = new TWEEN.Tween({v: 0}).to({v: 0}, this.fadeTime)
      .easing(TWEEN.Easing.Cubic.Out)
      .onStart(this.onTransitionStart, this)
      .onUpdate(this.onTransitionUpdate, this)
      .onComplete(this.onTransitionEnd, this)
  }, createPost: function () {
    this.fadeTween.source.v = +!this.hidden, this.fadeTween.target.v = +!this.hidden, this.visible.check(!0)
  }, visibleMethod: function () {
    this.visible.value && (dom.display(
      this.element,
      !0
    ), this.autoresize()), this.fadeTween.target.v = +this.visible.value, this.fadeTween.start()
  }, onTransitionStart: function () {
    this.inTransition = !0
  }, onTransitionUpdate: function () {
    var e = this.fadeTween.source.v, t = (1 - e) * this.fadeDistance, i = this.fadeAxis || {x: 0, y: 1};
    this.element.style.opacity = Math.max(0, e * e * 2 - 1), this.transform(this.element, t * i.x, t * i.y)
  }, onTransitionEnd: function () {
    this.visible.value || dom.display(this.element, !1), this.inTransition = !1
  }, transform: function (e, t, i, n) {
    var o = " translateX(" + f.hround(t || 0) + "px) translateY(" + f.hround(i || 0) + "px)      scale(" + f.hround(n || 1) + ")";
    e.style.webkitTransform = o, e.style.mozTransform = o, e.style.msTransform = o, e.style.OTransform = o, e.style.transform = o
  }
}), Block.Tip = f.unit(Block.Fade, {
  unitName: "Block_Tip",
  ename: "tip",
  hidden: !0,
  align: null,
  preferAlign: null,
  tipRoot: null,
  integerPosition: !1,
  distance: 8,
  arrowPadding: 8,
  animationTime: 200,
  create: function () {
    this.arrow = dom.div("tip-arrow", this.element), this.content = dom.div(
      "tip-content",
      this.element
    ), this.tipRoot || (this.tipRoot = this.eroot || this.element.parentNode), this.arrowPoint = {
      x: 0,
      y: 0
    }, this.elementPoint = {x: 0, y: 0}
  },
  getElementBox: function (e, t) {
    if (!e) return null;
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect(), n = dom.offset(t);
      return {x: i.left - n.x, y: i.top - n.y, w: i.width, h: i.height}
    }
    return {x: (n = dom.offset(e, t)).x, y: n.y, w: e.offsetWidth, h: e.offsetHeight}
  },
  moveToElement: function (e, t, i) {
    if (e) {
      var n = this.getElementBox(e, this.element.offsetParent);
      null == t && (t = this.align || this.getAlign(n.x, n.y, n.w, n.h));
      var o = n.x, s = n.y;
      switch (t) {
        case"left":
          s += n.h / 2;
          break;
        case"right":
          o += n.w, s += n.h / 2;
          break;
        case"top":
          o += n.w / 2;
          break;
        case"bottom":
          o += n.w / 2, s += n.h
      }
      this.move(o, s, t, i)
    }
  },
  move: function (e, t, i, n) {
    null == i && (i = this.align || this.getAlign(e, t, 0, 0));
    var o = this.element.offsetParent;
    if (o) {
      var s, r, a, l, h, c = this.arrow.offsetWidth, d = this.arrow.offsetHeight, u = Math.sqrt(c * c + d * d) / 2,
        p = this.arrowPadding, f = n || this.distance, m = this.element.offsetWidth, v = this.element.offsetHeight,
        g = this.content.offsetWidth, b = this.content.offsetHeight, w = o.offsetWidth, y = o.offsetHeight,
        E = Math.floor(m / 2), x = Math.floor(v / 2), T = Math.floor(g / 2), _ = Math.floor(b / 2);
      switch (i) {
        case"left":
          s = !1, r = e - m - f, a = t - x, l = g, h = _;
          break;
        case"right":
          s = !1, r = e + f, a = t - x, l = 0, h = _;
          break;
        case"top":
          s = !0, r = e - E, a = t - f - v, l = T, h = b;
          break;
        case"bottom":
          s = !0, r = e - E, a = t + f, l = T, h = 0;
          break;
        default:
          return
      }
      var S = Math.max(0, -r);
      S && (s && (l -= Math.min(T - u - p, S)), r += S);
      var k = Math.max(0, r + m - w);
      k && (s && (l += Math.min(T - u - p, k)), r -= k);
      var R = Math.max(0, -a);
      R && (s || (h -= Math.min(_ - u - p, R)), a += R);
      var A = Math.max(0, a + v - y);
      switch (A && (s || (h += Math.min(_ - u - p, A)), a -= A), i) {
        case"left":
          f += k - S;
          break;
        case"right":
          f += S - k;
          break;
        case"top":
          f += A - R;
          break;
        case"bottom":
          f += R - A
      }
      this.integerPosition && (r = Math.round(r), a = Math.round(a), l = Math.round(l), h = Math.round(h), f = Math.round(
        f)), this.arrowPoint.x === l && this.arrowPoint.y === h && Math.abs(this.elementPoint.x - r) < 2 && Math.abs(
        this.elementPoint.y - a) < 2 && this.lastDistance === f && this.lastAlign === i || (this.arrowPoint.x = l, this.arrowPoint.y = h, this.arrow.style.left = l + "px", this.arrow.style.top = h + "px", this.elementPoint.x = r, this.elementPoint.y = a, this.lastDistance = f, this.lastAlign = i, this.fadeAxis = this.alignAxes[this.lastAlign || this.align], this.updateTransform())
    }
  },
  getAlign: function (e, t, i, n) {
    var o = this.element.offsetParent;
    if (!o) return null;
    var s = o.offsetWidth, r = o.offsetHeight, a = this.element.offsetWidth, l = this.element.offsetHeight,
      h = ["top", "right", "bottom", "left"], c = [t - l, s - e - i - a, r - t - n - l, e - a];
    if (this.preferAlign && 0 < c[h.indexOf(this.preferAlign)]) return this.preferAlign;
    var d = Math.max.apply(null, c);
    return h[c.indexOf(d)]
  },
  alignAxes: {left: {x: 1, y: 0}, right: {x: -1, y: 0}, top: {x: 0, y: 1}, bottom: {x: 0, y: -1}},
  visibleMethod: function () {
    this.visible.value && (dom.append(
      this.tipRoot,
      this.element
    ), this.autoresize()), this.fadeTween.target.v = +this.visible.value, this.fadeTween.start()
  },
  updateTransform: function () {
    var e = (1 - this.fadeTween.source.v) * this.fadeDistance, t = this.elementPoint, i = this.fadeAxis || {x: 0, y: 0};
    this.transform(this.element, t.x + e * i.x, t.y + e * i.y)
  },
  onTransitionUpdate: function () {
    this.element.style.opacity = this.fadeTween.source.v, this.updateTransform()
  },
  onTransitionEnd: function () {
    this.visible.value || dom.remove(this.element), this.inTransition = !1
  }
}), Block.Dropdown = f.unit(
  Block.Toggle,
  {
    unitName: "Block_Dropdown",
    ename: "dropdown-toggle",
    cacheSize: !1,
    tipTemplate: {tipRoot: null, align: null, distance: 12},
    create: function () {
      this.tip = new Block.Tip(this.protomerge("tipTemplate")), this.content = this.tip.content, this.events.on(
        "active",
        Block.Dropdown.closeAll,
        null,
        this
      ), Block.Dropdown.instances.push(this)
    },
    destroy: function () {
      f.adrop(Block.Dropdown.instances, this), this.tip.destroy()
    },
    update: function () {
      Block.Toggle.prototype.update.apply(this, arguments), this.tip.visible.set(
        this.active,
        "dropdown"
      ), this.active && this.autoresize()
    },
    autoresize: function () {
      this.tip.moveToElement(this.element)
    }
  }
), Block.Dropdown.instances = [], Block.Dropdown.closeAll = function (t) {
  Block.Dropdown.instances.forEach(function (e) {
    e !== t && e.set(0, !0)
  }, this)
}, Block.Range = f.unit(Block, {
  unitName: "Block_Range", ename: "block-range", cacheSize: !1, value: 0, step: 0, min: 0, max: 1, create: function () {
    this.bar = dom.elem("block-range-bar", this.element), this.pos = dom.elem(
      "block-range-pos",
      this.element
    ), this.drag = new Drag(this.element), this.drag.events.when({
                                                                   start: this.onDragStart,
                                                                   end: this.onDragEnd,
                                                                   drag: this.onDrag
                                                                 }, this)
  }, onDragStart: function (e, t) {
    var i = (t.pageX - this.barOffset.x) / this.barWidth;
    dom.ancestor(t.target, this.pos) || (e.point.x = e.origin.x = i * this.barWidth, this.value = i)
  }, onDragEnd: function (e, t) {
  }, onDrag: function (e, t) {
    this.value = e.point.x / this.barWidth, this.update()
  }, onResize: function () {
    this.barOffset = dom.offset(this.bar), this.barWidth = this.bar.offsetWidth, this.barHeight = this.bar.offsetHeight, this.drag.min.x = this.min * this.barWidth, this.drag.max.x = this.max * this.barWidth, this.drag.point.x = f.clamp(
      this.drag.point.x,
      this.drag.min.x,
      this.drag.max.x
    ), this.drag.point.y = f.clamp(this.drag.point.y, this.drag.min.y, this.drag.max.y), this.update()
  }, update: function () {
    var e = f.hround(this.value * this.barWidth);
    dom.xstyle(this.pos, "transform", "translateX(" + e + "px)")
  }
}),
  window.Atlas = {
  svg: null, list: null, items: [], setSource: function (e) {
    if (e) {
      Atlas.svg = e.documentElement || e, Atlas.svg.removeAttribute("width"), Atlas.svg.removeAttribute("height"), Atlas.list = {};
      for (var t = Atlas.svg.getElementsByTagName("*"), i = 0; i < t.length; i++) {
        var n = t[i];
        "metadata" === n.nodeName.toLowerCase() ? n.parentNode && n.parentNode.removeChild(n) : n.id && (n.removeAttribute(
          "visibility"), Atlas.list[n.id] = n)
      }
      Atlas.update()
    }
  }, update: function () {
    Atlas.items.forEach(Atlas.updateItem)
  }, set: function (e, t, i) {
    var n = Atlas.pickItem(e);
    return n.id = t, n.name = i, Atlas.svg && Atlas.updateItem(n), e
  }, free: function (e) {
    for (var t = Atlas.items.length - 1; 0 <= t; t--) {
      var i = Atlas.items[t];
      e && i.element !== e || (i.element.removeChild(i.icon), Atlas.items.splice(t, 1))
    }
  }, pickItem: function (e) {
    for (var t = 0; t < Atlas.items.length; t++) {
      var i = Atlas.items[t];
      if (i.element === e) return i
    }
    return i = {element: e}, Atlas.items.push(i), i
  }, updateItem: function (e) {
    var t = Atlas.clone(e.id);
    t ? e.name && (t.className.baseVal += " " + e.name) : ((t = document.createElement("div")).className = e.id + " " + e.name, Atlas.svg && (t.textContent = e.id)), e.icon ? (e.element.insertBefore(
      t,
      e.icon
    ), e.element.removeChild(e.icon)) : e.element.appendChild(t), e.icon = t
  }, clone: function (e) {
    var t = Atlas.list && Atlas.list[e];
    if (!t) return null;
    var i = Atlas.svg.cloneNode(!1);
    return i.appendChild(t.cloneNode(!0)), i.className.baseVal = e, i
  }
},
  window.Locale = {
  name: null, data: null, counter: 0, assets: {}, items: [], add: function (e, t) {
    var i = Locale.assets[e];
    for (var n in i || (i = Locale.assets[e] = {}), t) i[n] = t[n]
  }, get: function (e) {
    return Locale.data && e in Locale.data ? Locale.data[e] : Locale.name + "/" + e
  }, set: function (e) {
    Locale.name = e, Locale.data = Locale.assets[Locale.name], Locale.update()
  }, update: function () {
    Locale.items.forEach(Locale.updateItem)
  }, updateItem: function (e) {
    e.func.call(e.scope, Locale.get(e.token), e.data)
  }, watch: function (e, t, i, n) {
    var o = {id: ++Locale.counter, token: e, func: t, scope: i, data: n};
    return Locale.items.push(o), Locale.updateItem(o), o.id
  }, unwatch: function (e) {
    for (var t = Locale.items.length - 1; 0 <= t; t--) if (Locale.items[t].id === e) return void Locale.items.splice(
      t,
      1
    )
  }, setText: function (e, t) {
    return Locale.watch(t, Locale._setText, null, e)
  }, setTitle: function (e, t) {
    return Locale.watch(t, Locale._setAttribute, null, {element: e, name: "title"})
  }, setAttribute: function (e, t, i) {
    return Locale.watch(i, Locale._setAttribute, null, {element: t, name: e})
  }, setHtml: function (e, t) {
    return Locale.watch(t, Locale._setHtml, null, e)
  }, _setAttribute: function (e, t) {
    t.element.setAttribute(t.name, e)
  }, _setText: function (e, t) {
    dom.text(t, e)
  }, _setHtml: function (e, t) {
    dom.html(t, e)
  }
}, THREE.Plane.prototype.intersectPlane = function (e, t) {
  for (var i = this.normal.toArray(), n = this.constant, o = e.normal.toArray(), s = e.constant, r = 0; r < 6; r++) {
    var a = r < 2 ? 1 : 0, l = r < 4 ? 2 : 1, h = r >> 1, c = r % 2 ? a : l, d = r % 2 ? l : a, u = i[h], p = i[c],
      f = o[h], m = o[c] * u - p * f, v = (f * n - u * s) / m, g = -(p * v + n) / u;
    if (1e-9 < Math.abs(u) && 1e-9 < Math.abs(m)) {
      var b = t || new THREE.Ray;
      return b.direction.crossVectors(this.normal, e.normal).normalize(), b.origin.setComponent(
        h,
        g
      ), b.origin.setComponent(c, v), b.origin.setComponent(d, 0), b
    }
  }
  return null
}, THREE.Box2.prototype.emptyEPS = function () {
  return this.max.x - this.min.x < 1e-9 || this.max.y - this.min.y < 1e-9
}, THREE.Ray.prototype.atY = function (e, t) {
  null == t && (t = new THREE.Vector3);
  var i = (e - this.origin.y) / this.direction.y;
  return this.at(i, t)
}, THREE.Ray.prototype.distanceToPlane = function (e, t) {
  var i = e.normal.dot(this.direction);
  if (0 == i) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
  var n = -(this.origin.dot(e.normal) + e.constant) / i;
  return t || 0 <= n ? n : null
}, THREE.Ray.prototype.intersectPlane = function (e, t, i) {
  null == t && (t = new THREE.Vector3);
  var n = this.distanceToPlane(e, i);
  return null === n ? null : this.at(n, t)
}, THREE.Sphere.prototype.expandByPoint = function (e) {
  this.center.sub(e);
  var t = this.center.length() + this.radius;
  return this.radius = t / 2, this.center.setLength(t), this.center.add(e), this
}, THREE.Sphere.prototype.union = function (e) {
  this.center.sub(e.center);
  var t = this.center.length() + this.radius, i = t + e.radius;
  return this.radius = i / 2, this.center.setLength(t), this.center.add(e.center), this.center.lerp(
    e.center,
    i / t
  ), this
}, function () {
  var s = {
    Scene: "SC",
    Sprite: "SP",
    PerspectiveCamera: "PC",
    Group: "GR",
    Object3D: "O3",
    Mesh: "MS",
    Line: "LN",
    LineSegments: "LS",
    LineLoop: "LL",
    Points: "PT",
    AmbientLight: "AL",
    PointLight: "PL",
    DirectionalLight: "DL"
  };

  function t(e, t) {
    for (var i = [], n = t.map || "tnmglprs", o = 0; o < n.length; o++) switch (0 < o && i.push(" "), n[o]) {
      case"t":
        i.push(s[e.type] || e.type);
        break;
      case"n":
        i.push("{" + (e.name || "") + "}");
        break;
      case"m":
        i.push(e.material ? "<" + (e.material instanceof Array ? "[" + e.material.map(function (e) {
          return e.name || ""
        }).join(",") + "]" : e.material.name || "") + ">" : "");
        break;
      case"g":
        i.push(e.geometry ? (e.geometry instanceof THREE.BufferGeometry ? e.geometry.attributes.position && e.geometry.attributes.position.count || 0 : e.geometry.vertices.length) + "v" : "");
        break;
      case"l":
        i.push(e.layers.mask + "=");
        break;
      case"p":
        i.push("[", f.mround(e.position.x, 3) + ", ", f.mround(e.position.y, 3) + ", ", f.mround(e.position.z, 3), "]");
        break;
      case"r":
        i.push(
          "[",
          f.hround(f.xdeg * e.rotation.x) + ", ",
          f.hround(f.xdeg * e.rotation.y) + ", ",
          f.hround(f.xdeg * e.rotation.z),
          "]"
        );
        break;
      case"s":
        i.push("[", f.mround(e.scale.x, 3) + ", ", f.mround(e.scale.y, 3) + ", ", f.mround(e.scale.z, 3), "]")
    }
    return i
  }

  THREE.Object3D.prototype.describe = function (e) {
    f.tmap(this, t, null, f.copy({property: "children", print: !0, align: [1, 1, 1]}, e))
  }
}(), THREE.OrbitControls = function (e, t) {
  this.object = e, this.domElement = void 0 !== t ? t : document, this.element = this.domElement === document ? this.domElement.body : this.domElement, this.enabled = !0, this.viewportW = 0, this.viewportH = 0, this.target = new THREE.Vector3, this.center = this.target, this.noZoom = !1, this.zoomSpeed = 2, this.minDistance = 0, this.maxDistance = 1 / 0, this.noRotate = !1, this.rotateSpeed = 1, this.noPan = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.radiusChanged = !0, this.borderBox = new THREE.Box3;
  var i = this.borderBox.min, n = this.borderBox.max;
  i.x = i.y = i.z = -1 / 0, n.x = n.y = n.z = 1 / 0, this.noKeys = !1, this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  };
  var a = this, o = 1e-6, l = new THREE.Vector2, h = new THREE.Vector2, c = new THREE.Vector2, d = new THREE.Vector2,
    u = new THREE.Vector2, p = new THREE.Vector2, s = new THREE.Vector3, r = new THREE.Vector3, f = new THREE.Vector2,
    m = new THREE.Vector2, v = new THREE.Vector2, g = 0, b = 0, w = 1, y = new THREE.Vector3, E = new THREE.Vector3,
    x = new THREE.Quaternion,
    T = {NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5}, _ = T.NONE;
  this.target0 = this.target.clone(), this.position0 = this.object.position.clone();
  var S = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)), k = S.clone().inverse(),
    R = {type: "change"}, A = {type: "start"}, C = {type: "end"};

  function M() {
    return 2 * Math.PI / 60 / 60 * a.autoRotateSpeed
  }

  function H() {
    return Math.pow(.95, a.zoomSpeed)
  }

  function L(e) {
    if (a.enabled) {
      var t = a.viewportW || a.element.clientWidth, i = a.viewportH || a.element.clientHeight,
        n = a.object.position.clone().sub(a.target).length();
      switch (n *= Math.tan(a.object.fov / 2 * Math.PI / 180), _) {
        case T.ROTATE:
          if (a.noRotate || a.orthoMode) return;
          h.set(e.clientX, e.clientY), c.subVectors(
            h,
            l
          ), a.rotateLeft(2 * Math.PI * c.x / t * a.rotateSpeed), a.rotateUp(2 * Math.PI * c.y / i * a.rotateSpeed), l.copy(
            h);
          break;
        case T.DOLLY:
          if (a.noZoom || a.orthoMode) return;
          m.set(e.clientX, e.clientY), v.subVectors(m, f), a.panUp(2 * v.y * n / i), f.copy(m);
          break;
        case T.PAN:
          if (a.noPan) return;
          u.set(e.clientX, e.clientY), p.subVectors(u, d);
          var o = 2 * p.x * n / t, s = 2 * p.y * n / i;
          a.panLeft(o), a.orthoMode ? a.panAbove(s) : a.panForward(s), d.copy(u);
          break;
        default:
          return
      }
      a.update(), e.preventDefault()
    }
  }

  function D() {
    !1 !== a.enabled && (a.down = !1, document.removeEventListener("mousemove", L, !1), document.removeEventListener(
      "mouseup",
      D,
      !1
    ), a.dispatchEvent(C), _ = T.NONE)
  }

  function N(e) {
    if (!1 !== a.enabled && !0 !== a.noZoom) {
      e.preventDefault(), e.stopPropagation();
      var t = 0;
      void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.deltaY ? t = -e.deltaY : void 0 !== e.detail && (t = -e.detail), 0 < t ? a.dollyOut() : a.dollyIn(), a.update(), a.dispatchEvent(
        A), a.dispatchEvent(C)
    }
  }

  this.rotateLeft = function (e) {
    void 0 === e && (e = M()), b -= e
  }, this.rotateUp = function (e) {
    void 0 === e && (e = M()), g -= e
  }, this.panLeft = function (e) {
    s.setFromMatrixColumn(this.object.matrix, 0);
    var t = s.length();
    s.y = 0, s.setLength(t), s.multiplyScalar(-e), y.add(s)
  }, this.panAbove = function (e) {
    s.setFromMatrixColumn(this.object.matrix, 1);
    var t = s.length();
    s.setLength(t), s.multiplyScalar(e), y.add(s)
  }, this.panUp = function (e) {
    s.setFromMatrixColumn(this.object.matrix, 1);
    var t = s.length();
    s.x = s.z = 0, s.setLength(t), s.multiplyScalar(e), y.add(s)
  }, this.panForward = function (e) {
    s.setFromMatrixColumn(this.object.matrix, 2);
    var t = s.length();
    s.y = 0, s.setLength(t), s.multiplyScalar(-e), y.add(s)
  }, this.pan = function (e, t) {
    var i = a.viewportW || a.element.clientWidth, n = a.viewportH || a.element.clientHeight;
    if (void 0 !== a.object.fov) {
      var o = a.object.position.clone().sub(a.target).length(),
        s = 2 * e * (o *= Math.tan(a.object.fov / 2 * Math.PI / 180)) / n, r = 2 * t * o / n;
      a.panLeft(s), a.orthoMode ? a.panAbove(r) : a.panForward(r)
    } else void 0 !== a.object.top ? (a.panLeft(e * (a.object.right - a.object.left) / i), a.panUp(t * (a.object.top - a.object.bottom) / n)) : console.warn(
      "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
  }, this.dollyIn = function (e) {
    void 0 === e && (e = H()), w /= e
  }, this.dollyOut = function (e) {
    void 0 === e && (e = H()), w *= e
  }, this.setSize = function (e, t) {
    this.viewportW = e, this.viewportH = t
  }, this.update = function () {
    var e = this.object.position;
    r.copy(e).sub(this.target), r.applyQuaternion(S);
    var t = Math.atan2(r.x, r.z), i = Math.atan2(Math.sqrt(r.x * r.x + r.z * r.z), r.y);
    this.autoRotate && this.rotateLeft(M()), t += b, i += g, this.disableBorders || (i = Math.max(
      this.minPolarAngle,
      Math.min(
        this.maxPolarAngle,
        i
      )
    )), i = Math.max(o, Math.min(Math.PI - o, i));
    var n = r.length() * w;
    this.disableBorders || (n = Math.max(
      this.minDistance,
      Math.min(this.maxDistance, n)
    )), Math.abs(n - this.radius) > o && (this.radiusChanged = !0), this.radius = n, this.target.add(y), this.disableBorders || this.borderBox.isEmpty() || (this.target.min(
      this.borderBox.max), this.target.max(this.borderBox.min)), r.x = this.radius * Math.sin(i) * Math.sin(t), r.y = this.radius * Math.cos(
      i), r.z = this.radius * Math.sin(i) * Math.cos(t), r.applyQuaternion(k), e.copy(this.target)
      .add(r), r.lengthSq() && this.object.lookAt(this.target), g = b = 0, w = 1, y.set(0, 0, 0), (E.distanceToSquared(
      this.object.position) > o || 8 * (1 - x.dot(this.object.quaternion)) > o) && (this.changed = !0, this.dispatchEvent(
      R), E.copy(this.object.position), x.copy(this.object.quaternion))
  }, this.reset = function () {
    _ = T.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.update()
  }, this.domElement.addEventListener("contextmenu", function (e) {
    !1 !== a.enabled && e.preventDefault()
  }, !1), this.onKeyDown = function (e) {
    if (!1 === a.enabled || !0 === a.noKeys || !0 === a.noPan) return !1;
    switch (e.keyCode) {
      case a.keys.UP:
        a.pan(0, a.keyPanSpeed), a.update();
        break;
      case a.keys.BOTTOM:
        a.pan(0, -a.keyPanSpeed), a.update();
        break;
      case a.keys.LEFT:
        a.pan(a.keyPanSpeed, 0), a.update();
        break;
      case a.keys.RIGHT:
        a.pan(-a.keyPanSpeed, 0), a.update();
        break;
      default:
        return !1
    }
    return !0
  }, this.domElement.addEventListener("mousedown", function (e) {
    if (!1 !== a.enabled) {
      switch (e.preventDefault(), a.down = !0, a.orthoMode ? ["pan", null, null][e.button] : ["rot", "dol", "pan"][e.button]) {
        case"rot":
          if (!0 === a.noRotate) return;
          _ = T.ROTATE, l.set(e.clientX, e.clientY);
          break;
        case"dol":
          if (!0 === a.noZoom) return;
          _ = T.DOLLY, f.set(e.clientX, e.clientY);
          break;
        case"pan":
          if (!0 === a.noPan) return;
          _ = T.PAN, d.set(e.clientX, e.clientY)
      }
      document.addEventListener("mousemove", L, !1), document.addEventListener("mouseup", D, !1), a.dispatchEvent(A)
    }
  }, !1), this.domElement.addEventListener("mousewheel", N, !1), this.domElement.addEventListener(
    "wheel",
    N,
    !1
  ), this.domElement.addEventListener("DOMMouseScroll", N, !1), this.domElement.addEventListener(
    "touchstart",
    function (e) {
      if (!1 !== a.enabled) {
        switch (e.preventDefault(), a.down = !0, a.orthoMode ? ["pan", null, null][e.touches.length - 1] : ["rot", "dol", "pan"][e.touches.length - 1]) {
          case"rot":
            if (!0 === a.noRotate) return;
            _ = T.TOUCH_ROTATE, l.set(
              e.touches[0].pageX,
              e.touches[0].pageY
            );
            break;
          case"dol":
            if (!0 === a.noZoom) return;
            _ = T.TOUCH_DOLLY;
            var t = e.touches[0].pageX - e.touches[1].pageX, i = e.touches[0].pageY - e.touches[1].pageY, n = Math.sqrt(
              t * t + i * i);
            f.set(0, n);
            break;
          case"pan":
            if (!0 === a.noPan) return;
            _ = T.TOUCH_PAN, d.set(
              e.touches[0].pageX,
              e.touches[0].pageY
            );
            break;
          default:
            _ = T.NONE
        }
        a.dispatchEvent(A)
      }
    },
    !1
  ), this.domElement.addEventListener("touchend", function () {
    !1 !== a.enabled && (a.down = !1, a.dispatchEvent(C), _ = T.NONE)
  }, !1), this.domElement.addEventListener("touchmove", function (e) {
    if (a.enabled) {
      var t = a.viewportW || a.element.clientWidth, i = a.viewportH || a.element.clientHeight,
        n = a.object.position.clone().sub(a.target).length();
      switch (n *= Math.tan(a.object.fov / 2 * Math.PI / 180), _) {
        case T.TOUCH_ROTATE:
          if (a.noRotate || a.orthoMode) return;
          h.set(e.touches[0].pageX, e.touches[0].pageY), c.subVectors(
            h,
            l
          ), a.rotateLeft(2 * Math.PI * c.x / t * a.rotateSpeed), a.rotateUp(2 * Math.PI * c.y / i * a.rotateSpeed), l.copy(
            h);
          break;
        case T.TOUCH_DOLLY:
          if (a.noZoom || a.orthoMode) return;
          var o = e.touches[0].pageX - e.touches[1].pageX, s = e.touches[0].pageY - e.touches[1].pageY,
            r = Math.sqrt(o * o + s * s);
          m.set(0, r), w *= f.y / m.y, f.copy(m);
          break;
        case T.TOUCH_PAN:
          if (a.noPan) return;
          u.set(e.touches[0].pageX, e.touches[0].pageY), p.subVectors(
            u,
            d
          ), o = 2 * p.x * n / t, s = 2 * p.y * n / i, a.panLeft(o), a.panAbove(s), d.copy(u);
          break;
        default:
          return
      }
      a.update(), e.preventDefault(), e.stopPropagation()
    }
  }, !1), this.update()
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), function () {
  "use strict";
  var s = function (e) {
    THREE.MeshBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.side = THREE.FrontSide, this.transparent = !0, this.setValues(
      e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function (e) {
      e ? (this.color.setRGB(
        1,
        1,
        0
      ), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
    }
  };
  (s.prototype = Object.create(THREE.MeshBasicMaterial.prototype)).constructor = s;
  var r = function (e) {
    THREE.LineBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.transparent = !0, this.linewidth = 1, this.setValues(
      e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function (e) {
      e ? (this.color.setRGB(
        1,
        1,
        0
      ), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
    }
  };
  (r.prototype = Object.create(THREE.LineBasicMaterial.prototype)).constructor = r;
  var a = new s({visible: !1, transparent: !1});
  THREE.TransformGizmo = function () {
    this.init = function () {
      THREE.Object3D.call(this), this.handles = new THREE.Object3D, this.pickers = new THREE.Object3D, this.planes = new THREE.Object3D, this.add(
        this.handles), this.add(this.pickers), this.add(this.planes);
      var e = new THREE.PlaneBufferGeometry(50, 50, 2, 2),
        t = new THREE.MeshBasicMaterial({visible: !1, side: THREE.DoubleSide}),
        i = {XY: new THREE.Mesh(e, t), YZ: new THREE.Mesh(e, t), XZ: new THREE.Mesh(e, t), XYZE: new THREE.Mesh(e, t)};
      for (var r in this.activePlane = i.XYZE, i.YZ.rotation.set(0, Math.PI / 2, 0), i.XZ.rotation.set(
        -Math.PI / 2,
        0,
        0
      ), i) i[r].name = r, this.planes.add(i[r]), this.planes[r] = i[r];
      var n = function (e, t) {
        for (var i in e) for (r = e[i].length; r--;) {
          var n = e[i][r][0], o = e[i][r][1], s = e[i][r][2];
          n.name = i, o && n.position.set(o[0], o[1], o[2]), s && n.rotation.set(s[0], s[1], s[2]), t.add(n)
        }
      };
      n(this.handleGizmos, this.handles), n(this.pickerGizmos, this.pickers), this.traverse(function (e) {
        if (e instanceof THREE.Mesh) {
          e.updateMatrix();
          var t = e.geometry.clone();
          t.applyMatrix(e.matrix), e.geometry = t, e.position.set(0, 0, 0), e.rotation.set(0, 0, 0), e.scale.set(
            1,
            1,
            1
          )
        }
      })
    }, this.highlight = function (t) {
      this.traverse(function (e) {
        e.material && e.material.highlight && (e.name === t ? e.material.highlight(!0) : e.material.highlight(!1))
      })
    }
  }, THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo, THREE.TransformGizmo.prototype.update = function (t, i) {
    var n = new THREE.Vector3(0, 0, 0), o = new THREE.Vector3(0, 1, 0), s = new THREE.Matrix4;
    this.traverse(function (e) {
      -1 !== e.name.search("E") ? e.quaternion.setFromRotationMatrix(s.lookAt(
        i,
        n,
        o
      )) : -1 === e.name.search("X") && -1 === e.name.search("Y") && -1 === e.name.search("Z") || e.quaternion.setFromEuler(
        t)
    })
  }, THREE.TransformGizmoTranslate = function () {
    THREE.TransformGizmo.call(this);
    var e = new THREE.Geometry, t = new THREE.Mesh(new THREE.CylinderGeometry(0, .05, .2, 12, 1, !1));
    t.position.y = .5, t.updateMatrix(), e.merge(t.geometry, t.matrix);
    var i = new THREE.BufferGeometry;
    i.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    var n = new THREE.BufferGeometry;
    n.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    var o = new THREE.BufferGeometry;
    o.addAttribute(
      "position",
      new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
    ), this.handleGizmos = {
      X: [[new THREE.Mesh(
        e,
        new s({color: 16711680})
      ), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(i, new r({color: 16711680}))]],
      Y: [[new THREE.Mesh(e, new s({color: 65280})), [0, .5, 0]], [new THREE.Line(n, new r({color: 65280}))]],
      Z: [[new THREE.Mesh(e, new s({color: 255})), [0, 0, .5], [Math.PI / 2, 0, 0]], [new THREE.Line(
        o,
        new r({color: 255})
      )]],
      XYZ: [[new THREE.Mesh(
        new THREE.OctahedronGeometry(.1, 0),
        new s({color: 16777215, opacity: .25})
      ), [0, 0, 0], [0, 0, 0]]],
      XY: [[new THREE.Mesh(
        new THREE.PlaneBufferGeometry(.29, .29),
        new s({color: 16776960, opacity: .25})
      ), [.15, .15, 0]]],
      YZ: [[new THREE.Mesh(
        new THREE.PlaneBufferGeometry(.29, .29),
        new s({color: 65535, opacity: .25})
      ), [0, .15, .15], [0, Math.PI / 2, 0]]],
      XZ: [[new THREE.Mesh(
        new THREE.PlaneBufferGeometry(.29, .29),
        new s({color: 16711935, opacity: .25})
      ), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1),
        a
      ), [.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), a), [0, .6, 0]]],
      Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), a), [0, 0, .6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(.2, 0), a)]],
      XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), a), [.2, .2, 0]]],
      YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), a), [0, .2, .2], [0, Math.PI / 2, 0]]],
      XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), a), [.2, 0, .2], [-Math.PI / 2, 0, 0]]]
    }, this.setActivePlane = function (e, t) {
      var i = new THREE.Matrix4;
      t.applyMatrix4(i.getInverse(i.extractRotation(this.planes.XY.matrixWorld))), "X" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), "Y" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), "Z" === e && (this.activePlane = this.planes.XZ, Math.abs(
        t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), "XYZ" === e && (this.activePlane = this.planes.XYZE), "XY" === e && (this.activePlane = this.planes.XY), "YZ" === e && (this.activePlane = this.planes.YZ), "XZ" === e && (this.activePlane = this.planes.XZ)
    }, this.init()
  }, THREE.TransformGizmoTranslate.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoTranslate.prototype.constructor = THREE.TransformGizmoTranslate, THREE.TransformGizmoRotate = function () {
    THREE.TransformGizmo.call(this);
    var e = function (e, t, i) {
      var n = new THREE.BufferGeometry, o = [];
      i = i || 1;
      for (var s = 0; s <= 64 * i; ++s) "x" === t && o.push(
        0,
        Math.cos(s / 32 * Math.PI) * e,
        Math.sin(s / 32 * Math.PI) * e
      ), "y" === t && o.push(Math.cos(s / 32 * Math.PI) * e, 0, Math.sin(s / 32 * Math.PI) * e), "z" === t && o.push(
        Math.sin(s / 32 * Math.PI) * e,
        Math.cos(s / 32 * Math.PI) * e,
        0
      );
      return n.addAttribute("position", new THREE.Float32BufferAttribute(o, 3)), n
    };
    this.handleGizmos = {
      X: [[new THREE.Line(new e(1, "x", .5), new r({color: 16711680}))]],
      Y: [[new THREE.Line(new e(1, "y", .5), new r({color: 65280}))]],
      Z: [[new THREE.Line(new e(1, "z", .5), new r({color: 255}))]],
      E: [[new THREE.Line(new e(1.25, "z", 1), new r({color: 13421568}))]],
      XYZE: [[new THREE.Line(new e(1, "z", 1), new r({color: 7895160}))]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI),
        a
      ), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), a), [0, 0, 0], [Math.PI / 2, 0, 0]]],
      Z: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), a), [0, 0, 0], [0, 0, -Math.PI / 2]]],
      E: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, .12, 2, 24), a)]],
      XYZE: [[new THREE.Mesh]]
    }, this.setActivePlane = function (e) {
      "E" === e && (this.activePlane = this.planes.XYZE), "X" === e && (this.activePlane = this.planes.YZ), "Y" === e && (this.activePlane = this.planes.XZ), "Z" === e && (this.activePlane = this.planes.XY)
    }, this.update = function (e, t) {
      THREE.TransformGizmo.prototype.update.apply(this, arguments);
      var i = new THREE.Matrix4, n = new THREE.Euler(0, 0, 1), o = new THREE.Quaternion, s = new THREE.Vector3(1, 0, 0),
        r = new THREE.Vector3(0, 1, 0), a = new THREE.Vector3(0, 0, 1), l = new THREE.Quaternion,
        h = new THREE.Quaternion, c = new THREE.Quaternion, d = t.clone();
      n.copy(this.planes.XY.rotation), o.setFromEuler(n), i.makeRotationFromQuaternion(o).getInverse(i), d.applyMatrix4(
        i), this.traverse(function (e) {
        o.setFromEuler(n), "X" === e.name && (l.setFromAxisAngle(s, Math.atan2(-d.y, d.z)), o.multiplyQuaternions(
          o,
          l
        ), e.quaternion.copy(o)), "Y" === e.name && (h.setFromAxisAngle(r, Math.atan2(d.x, d.z)), o.multiplyQuaternions(
          o,
          h
        ), e.quaternion.copy(o)), "Z" === e.name && (c.setFromAxisAngle(a, Math.atan2(d.y, d.x)), o.multiplyQuaternions(
          o,
          c
        ), e.quaternion.copy(o))
      })
    }, this.init()
  }, THREE.TransformGizmoRotate.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoRotate.prototype.constructor = THREE.TransformGizmoRotate, THREE.TransformGizmoScale = function () {
    THREE.TransformGizmo.call(this);
    var e = new THREE.Geometry, t = new THREE.Mesh(new THREE.BoxGeometry(.125, .125, .125));
    t.position.y = .5, t.updateMatrix(), e.merge(t.geometry, t.matrix);
    var i = new THREE.BufferGeometry;
    i.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    var n = new THREE.BufferGeometry;
    n.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    var o = new THREE.BufferGeometry;
    o.addAttribute(
      "position",
      new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
    ), this.handleGizmos = {
      X: [[new THREE.Mesh(
        e,
        new s({color: 16711680})
      ), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(i, new r({color: 16711680}))]],
      Y: [[new THREE.Mesh(e, new s({color: 65280})), [0, .5, 0]], [new THREE.Line(n, new r({color: 65280}))]],
      Z: [[new THREE.Mesh(e, new s({color: 255})), [0, 0, .5], [Math.PI / 2, 0, 0]], [new THREE.Line(
        o,
        new r({color: 255})
      )]],
      XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(.125, .125, .125), new s({color: 16777215, opacity: .25}))]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1),
        a
      ), [.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), a), [0, .6, 0]]],
      Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), a), [0, 0, .6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(.4, .4, .4), a)]]
    }, this.setActivePlane = function (e, t) {
      var i = new THREE.Matrix4;
      t.applyMatrix4(i.getInverse(i.extractRotation(this.planes.XY.matrixWorld))), "X" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), "Y" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), "Z" === e && (this.activePlane = this.planes.XZ, Math.abs(
        t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), "XYZ" === e && (this.activePlane = this.planes.XYZE)
    }, this.init()
  }, THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale, THREE.TransformControls = function (r, a) {
    THREE.Object3D.call(this), a = void 0 !== a ? a : document, this.object = void 0, this.visible = !1, this.translationSnap = null, this.rotationSnap = null, this.space = "world", this.size = 1, this.axis = null;
    var o = this, s = "translate", l = !1, h = {
      translate: new THREE.TransformGizmoTranslate,
      rotate: new THREE.TransformGizmoRotate,
      scale: new THREE.TransformGizmoScale
    };
    for (var e in h) {
      var t = h[e];
      t.visible = e === s, this.add(t)
    }
    var n = {type: "change"}, c = {type: "mouseDown"}, i = {type: "mouseUp", mode: s}, d = {type: "objectChange"},
      u = new THREE.Raycaster, p = new THREE.Vector2, f = new THREE.Vector3, m = new THREE.Vector3,
      v = new THREE.Vector3, g = new THREE.Vector3, b = 1, w = new THREE.Matrix4, y = new THREE.Vector3,
      E = new THREE.Matrix4, x = new THREE.Vector3, T = new THREE.Quaternion, _ = new THREE.Vector3(1, 0, 0),
      S = new THREE.Vector3(0, 1, 0), k = new THREE.Vector3(0, 0, 1), R = new THREE.Quaternion,
      A = new THREE.Quaternion, C = new THREE.Quaternion, M = new THREE.Quaternion, H = new THREE.Quaternion,
      L = new THREE.Vector3, D = new THREE.Vector3, N = new THREE.Matrix4, P = new THREE.Matrix4, I = new THREE.Vector3,
      O = new THREE.Vector3, B = new THREE.Euler, j = new THREE.Matrix4, F = new THREE.Vector3, z = new THREE.Euler;

    function V(e) {
      if (void 0 !== o.object && !0 !== l && (void 0 === e.button || 0 === e.button)) {
        var t = G(e.changedTouches ? e.changedTouches[0] : e, h[s].pickers.children), i = null;
        t && (i = t.object.name, e.preventDefault()), o.axis !== i && (o.axis = i, o.update(), o.dispatchEvent(n))
      }
    }

    function U(e) {
      if (void 0 !== o.object && !0 !== l && (void 0 === e.button || 0 === e.button)) {
        var t = e.changedTouches ? e.changedTouches[0] : e;
        if (0 === t.button || void 0 === t.button) {
          var i = G(t, h[s].pickers.children);
          if (i) {
            e.preventDefault(), e.stopPropagation(), o.dispatchEvent(c), o.axis = i.object.name, o.update(), y.copy(F)
              .sub(O)
              .normalize(), h[s].setActivePlane(o.axis, y);
            var n = G(t, [h[s].activePlane]);
            n && (L.copy(o.object.position), D.copy(o.object.scale), N.extractRotation(o.object.matrix), j.extractRotation(
              o.object.matrixWorld), P.extractRotation(o.object.parent.matrixWorld), I.setFromMatrixScale(E.getInverse(o.object.parent.matrixWorld)), m.copy(
              n.point))
          }
        }
        l = !0
      }
    }

    function W(e) {
      if (void 0 !== o.object && null !== o.axis && !1 !== l && (void 0 === e.button || 0 === e.button)) {
        var t = G(e.changedTouches ? e.changedTouches[0] : e, [h[s].activePlane]);
        !1 !== t && (e.preventDefault(), e.stopPropagation(), f.copy(t.point), "translate" === s ? (f.sub(m), f.multiply(
          I), "local" === o.space && (f.applyMatrix4(E.getInverse(j)), -1 === o.axis.search("X") && (f.x = 0), -1 === o.axis.search(
          "Y") && (f.y = 0), -1 === o.axis.search("Z") && (f.z = 0), f.applyMatrix4(N), o.object.position.copy(L), o.object.position.add(
          f)), "world" !== o.space && -1 === o.axis.search("XYZ") || (-1 === o.axis.search("X") && (f.x = 0), -1 === o.axis.search(
          "Y") && (f.y = 0), -1 === o.axis.search("Z") && (f.z = 0), f.applyMatrix4(E.getInverse(P)), o.object.position.copy(
          L), o.object.position.add(f)), null !== o.translationSnap && ("local" === o.space && o.object.position.applyMatrix4(
          E.getInverse(j)), -1 !== o.axis.search("X") && (o.object.position.x = Math.round(o.object.position.x / o.translationSnap) * o.translationSnap), -1 !== o.axis.search(
          "Y") && (o.object.position.y = Math.round(o.object.position.y / o.translationSnap) * o.translationSnap), -1 !== o.axis.search(
          "Z") && (o.object.position.z = Math.round(o.object.position.z / o.translationSnap) * o.translationSnap), "local" === o.space && o.object.position.applyMatrix4(
          j))) : "scale" === s ? (f.sub(m), f.multiply(I), "local" === o.space && ("XYZ" === o.axis ? (b = 1 + f.y / Math.max(
          D.x,
          D.y,
          D.z
        ), o.object.scale.x = D.x * b, o.object.scale.y = D.y * b, o.object.scale.z = D.z * b) : (f.applyMatrix4(E.getInverse(
          j)), "X" === o.axis && (o.object.scale.x = D.x * (1 + f.x / D.x)), "Y" === o.axis && (o.object.scale.y = D.y * (1 + f.y / D.y)), "Z" === o.axis && (o.object.scale.z = D.z * (1 + f.z / D.z))))) : "rotate" === s && (f.sub(
          O), f.multiply(I), x.copy(m)
          .sub(O), x.multiply(I), "E" === o.axis ? (f.applyMatrix4(E.getInverse(w)), x.applyMatrix4(E.getInverse(w)), v.set(
          Math.atan2(f.z, f.y),
          Math.atan2(f.x, f.z),
          Math.atan2(f.y, f.x)
        ), g.set(
          Math.atan2(x.z, x.y),
          Math.atan2(x.x, x.z),
          Math.atan2(x.y, x.x)
        ), T.setFromRotationMatrix(E.getInverse(P)), H.setFromAxisAngle(
          y,
          v.z - g.z
        ), R.setFromRotationMatrix(j), T.multiplyQuaternions(T, H), T.multiplyQuaternions(
          T,
          R
        ), o.object.quaternion.copy(T)) : "XYZE" === o.axis ? (H.setFromEuler(f.clone()
                                                                                .cross(x)
                                                                                .normalize()), T.setFromRotationMatrix(E.getInverse(
          P)), A.setFromAxisAngle(H, -f.clone().angleTo(x)), R.setFromRotationMatrix(j), T.multiplyQuaternions(
          T,
          A
        ), T.multiplyQuaternions(
          T,
          R
        ), o.object.quaternion.copy(T)) : "local" === o.space ? (f.applyMatrix4(E.getInverse(j)), x.applyMatrix4(E.getInverse(
          j)), v.set(Math.atan2(f.z, f.y), Math.atan2(f.x, f.z), Math.atan2(f.y, f.x)), g.set(
          Math.atan2(x.z, x.y),
          Math.atan2(x.x, x.z),
          Math.atan2(x.y, x.x)
        ), R.setFromRotationMatrix(N), null !== o.rotationSnap ? (A.setFromAxisAngle(
          _,
          Math.round((v.x - g.x) / o.rotationSnap) * o.rotationSnap
        ), C.setFromAxisAngle(S, Math.round((v.y - g.y) / o.rotationSnap) * o.rotationSnap), M.setFromAxisAngle(
          k,
          Math.round((v.z - g.z) / o.rotationSnap) * o.rotationSnap
        )) : (A.setFromAxisAngle(_, v.x - g.x), C.setFromAxisAngle(S, v.y - g.y), M.setFromAxisAngle(
          k,
          v.z - g.z
        )), "X" === o.axis && R.multiplyQuaternions(R, A), "Y" === o.axis && R.multiplyQuaternions(
          R,
          C
        ), "Z" === o.axis && R.multiplyQuaternions(R, M), o.object.quaternion.copy(R)) : "world" === o.space && (v.set(
          Math.atan2(f.z, f.y),
          Math.atan2(f.x, f.z),
          Math.atan2(f.y, f.x)
        ), g.set(
          Math.atan2(x.z, x.y),
          Math.atan2(x.x, x.z),
          Math.atan2(x.y, x.x)
        ), T.setFromRotationMatrix(E.getInverse(P)), null !== o.rotationSnap ? (A.setFromAxisAngle(
          _,
          Math.round((v.x - g.x) / o.rotationSnap) * o.rotationSnap
        ), C.setFromAxisAngle(S, Math.round((v.y - g.y) / o.rotationSnap) * o.rotationSnap), M.setFromAxisAngle(
          k,
          Math.round((v.z - g.z) / o.rotationSnap) * o.rotationSnap
        )) : (A.setFromAxisAngle(_, v.x - g.x), C.setFromAxisAngle(S, v.y - g.y), M.setFromAxisAngle(
          k,
          v.z - g.z
        )), R.setFromRotationMatrix(j), "X" === o.axis && T.multiplyQuaternions(
          T,
          A
        ), "Y" === o.axis && T.multiplyQuaternions(T, C), "Z" === o.axis && T.multiplyQuaternions(
          T,
          M
        ), T.multiplyQuaternions(
          T,
          R
        ), o.object.quaternion.copy(T))), o.update(), o.dispatchEvent(n), o.dispatchEvent(d))
      }
    }

    function X(e) {
      e.preventDefault(), void 0 !== e.button && 0 !== e.button || (l && null !== o.axis && (i.mode = s, o.dispatchEvent(
        i)), l = !1, "TouchEvent" in window && e instanceof TouchEvent ? (o.axis = null, o.update(), o.dispatchEvent(n)) : V(
        e))
    }

    function G(e, t) {
      var i = a.getBoundingClientRect(), n = (e.clientX - i.left) / i.width, o = (e.clientY - i.top) / i.height;
      p.set(2 * n - 1, -2 * o + 1), u.setFromCamera(p, r);
      var s = u.intersectObjects(t, !0);
      return !!s[0] && s[0]
    }

    a.addEventListener("mousedown", U, !1), a.addEventListener("touchstart", U, !1), a.addEventListener(
      "mousemove",
      V,
      !1
    ), a.addEventListener("touchmove", V, !1), a.addEventListener("mousemove", W, !1), a.addEventListener(
      "touchmove",
      W,
      !1
    ), a.addEventListener("mouseup", X, !1), a.addEventListener("mouseout", X, !1), a.addEventListener(
      "touchend",
      X,
      !1
    ), a.addEventListener("touchcancel", X, !1), a.addEventListener("touchleave", X, !1), this.dispose = function () {
      a.removeEventListener("mousedown", U), a.removeEventListener("touchstart", U), a.removeEventListener(
        "mousemove",
        V
      ), a.removeEventListener("touchmove", V), a.removeEventListener(
        "mousemove",
        W
      ), a.removeEventListener("touchmove", W), a.removeEventListener("mouseup", X), a.removeEventListener(
        "mouseout",
        X
      ), a.removeEventListener("touchend", X), a.removeEventListener("touchcancel", X), a.removeEventListener(
        "touchleave",
        X
      )
    }, this.attach = function (e) {
      this.object = e, this.visible = !0, this.update()
    }, this.detach = function () {
      this.object = void 0, this.visible = !1, this.axis = null
    }, this.getMode = function () {
      return s
    }, this.setMode = function (e) {
      for (var t in"scale" === (s = e || s) && (o.space = "local"), h) h[t].visible = t === s;
      this.update(), o.dispatchEvent(n)
    }, this.setTranslationSnap = function (e) {
      o.translationSnap = e
    }, this.setRotationSnap = function (e) {
      o.rotationSnap = e
    }, this.setSize = function (e) {
      o.size = e, this.update(), o.dispatchEvent(n)
    }, this.setSpace = function (e) {
      o.space = e, this.update(), o.dispatchEvent(n)
    }, this.update = function () {
      void 0 !== o.object && (o.object.updateMatrixWorld(), O.setFromMatrixPosition(o.object.matrixWorld), B.setFromRotationMatrix(
        E.extractRotation(o.object.matrixWorld)), r.updateMatrixWorld(), F.setFromMatrixPosition(r.matrixWorld), z.setFromRotationMatrix(
        E.extractRotation(r.matrixWorld)), b = O.distanceTo(F) / 6 * o.size, this.position.copy(O), this.scale.set(
        b,
        b,
        b
      ), r instanceof THREE.PerspectiveCamera ? y.copy(F)
        .sub(O)
        .normalize() : r instanceof THREE.OrthographicCamera && y.copy(F)
        .normalize(), "local" === o.space ? h[s].update(B, y) : "world" === o.space && h[s].update(
        new THREE.Euler,
        y
      ), h[s].highlight(o.axis))
    }
  }, THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformControls.prototype.constructor = THREE.TransformControls
}(), function () {
  function d(e) {
    var t, i = e.properties.Content, n = new Uint8Array(i), o = e.properties.RelativeFilename || e.properties.Filename,
      s = o.slice(o.lastIndexOf(".") + 1).toLowerCase();
    switch (s) {
      case"bmp":
        t = "image/bmp";
        break;
      case"jpg":
        t = "image/jpeg";
        break;
      case"png":
        t = "image/png";
        break;
      case"tif":
        t = "image/tiff";
        break;
      default:
        return void console.warn("FBXLoader: No support image type " + s)
    }
    return window.URL.createObjectURL(new Blob([n], {type: t}))
  }

  function u(e, t, i, n) {
    var o, s = e.id, r = e.name, a = e.properties.FileName, l = e.properties.RelativeFilename, h = n.get(s).children;
    if (void 0 !== h && 0 < h.length && i.has(h[0].ID)) o = i.get(h[0].ID); else if (void 0 !== l && "/" !== l[0] && null === l.match(
      /^[a-zA-Z]:/)) o = l; else {
      var c = a.split(/[\\\/]/);
      o = 0 < c.length ? c[c.length - 1] : a
    }
    var d = t.path;
    0 === o.indexOf("blob:") && t.setPath(void 0);
    var u = t.load(o);
    u.name = r, u.FBX_ID = s;
    var p = e.properties.Scaling;
    p && (u.repeat.x = p.value[0], u.repeat.y = p.value[1]);
    var f = e.properties.WrapModeU, m = e.properties.WrapModeV, v = void 0 !== f ? f.value : 0,
      g = void 0 !== m ? m.value : 0;
    return u.wrapS = 0 === v ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, u.wrapT = 0 === g ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping, t.setPath(
      d), u
  }

  function p(e, t, i) {
    var n = e.id, o = e.attrName, s = e.properties.ShadingModel;
    "object" == typeof s && (s = s.value);
    var r, a = i.get(n).children, l = function (e, t, i) {
      var n = {}, o = e.Diffuse || e.DiffuseColor;
      o && (n.color = x(o));
      var s = e.Specular || e.SpecularColor;
      s && (n.specular = x(s));
      e.Shininess && (n.shininess = e.Shininess.value);
      var r = e.Emissive || e.EmissiveColor;
      r && (n.emissive = x(r));
      e.EmissiveFactor && (n.emissiveIntensity = e.EmissiveFactor.value);
      e.Opacity && (n.opacity = e.Opacity.value);
      n.opacity < 1 && (n.transparent = !0);
      for (var a = 0, l = i.length; a < l; ++a) {
        var h = i[a], c = h.relationship;
        switch (c) {
          case"DiffuseColor":
          case' "DiffuseColor':
          case"3dsMax|maps|texmap_diffuse":
          case' "3dsMax|maps|texmap_diffuse':
            n.map = t.get(h.ID);
            break;
          case"Bump":
          case' "Bump':
          case"3dsMax|maps|texmap_bump":
          case' "3dsMax|maps|texmap_bump':
            n.bumpMap = t.get(h.ID);
            break;
          case"NormalMap":
          case' "NormalMap':
            n.normalMap = t.get(h.ID);
            break;
          case' "AmbientColor':
          case' "EmissiveColor':
          case"AmbientColor":
          case"EmissiveColor":
          default:
            console.warn("Unknown texture application of type " + c + ", skipping texture")
        }
      }
      return n
    }(e.properties, t, a);
    switch (s.toLowerCase()) {
      case"unknown":
      case"phong":
        r = new THREE.MeshPhongMaterial;
        break;
      case"lambert":
        r = new THREE.MeshLambertMaterial;
        break;
      default:
        console.warn("No implementation given for material type " + s + " in FBXLoader.js.  Defaulting to basic material"), r = new THREE.MeshBasicMaterial(
          {color: 3342591})
    }
    return r.setValues(l), r.name = o, r
  }

  function f(e, t) {
    for (var i = {}, n = e.children, o = 0, s = n.length; o < s; ++o) {
      var r = n[o], a = t[r.ID], l = {
        FBX_ID: r.ID,
        index: o,
        indices: [],
        weights: [],
        transform: ae(a.subNodes.Transform.properties.a),
        transformLink: ae(a.subNodes.TransformLink.properties.a),
        linkMode: a.properties.Mode
      };
      "Indexes" in a.subNodes && (l.indices = se(a.subNodes.Indexes.properties.a), l.weights = oe(a.subNodes.Weights.properties.a)), i[r.ID] = l
    }
    return {map: i, bones: []}
  }

  function m(e, t, i) {
    switch (e.attrType) {
      case"Mesh":
        return function (e, t, i) {
          for (var n = 0; n < t.children.length; ++n) {
            var o = i[t.children[n].ID];
            if (void 0 !== o) break
          }
          return function (e, t) {
            var i = new O, n = e.subNodes, o = oe(n.Vertices.properties.a), s = se(n.PolygonVertexIndex.properties.a);
            if (n.LayerElementNormal) var r = function (e) {
              var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
                n = oe(e.subNodes.Normals.properties.a), o = [];
              "IndexToDirect" === i && ("NormalIndex" in e.subNodes ? o = se(e.subNodes.NormalIndex.properties.a) : "NormalsIndex" in e.subNodes && (o = se(
                e.subNodes.NormalsIndex.properties.a)));
              return {dataSize: 3, buffer: n, indices: o, mappingType: t, referenceType: i}
            }(n.LayerElementNormal[0]);
            if (n.LayerElementUV) var a = function (e) {
              var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
                n = oe(e.subNodes.UV.properties.a), o = [];
              "IndexToDirect" === i && (o = se(e.subNodes.UVIndex.properties.a));
              return {dataSize: 2, buffer: n, indices: o, mappingType: t, referenceType: i}
            }(n.LayerElementUV[0]);
            if (n.LayerElementColor) var l = function (e) {
              var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
                n = oe(e.subNodes.Colors.properties.a), o = [];
              "IndexToDirect" === i && (o = oe(e.subNodes.ColorIndex.properties.a));
              return {dataSize: 4, buffer: n, indices: o, mappingType: t, referenceType: i}
            }(n.LayerElementColor[0]);
            if (n.LayerElementMaterial) var h = function (e) {
              var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType;
              if ("NoMappingInformation" === t) return {
                dataSize: 1,
                buffer: [0],
                indices: [0],
                mappingType: "AllSame",
                referenceType: i
              };
              for (var n = se(e.subNodes.Materials.properties.a), o = [], s = 0, r = n.length; s < r; ++s) o.push(s);
              return {dataSize: 1, buffer: n, indices: o, mappingType: t, referenceType: i}
            }(n.LayerElementMaterial[0]);
            for (var c = [], d = 0, u = 0; u < s.length; u++) {
              var p = s[u], f = !1;
              p < 0 && (p ^= -1, s[u] = p, f = !0);
              var m = new P, v = [], g = [];
              if (m.position.fromArray(o, 3 * p), t) {
                var b = t.map;
                for (var w in b) for (var y = b[w], E = y.indices, x = 0; x < E.length; x++) {
                  var T = E[x];
                  if (T === p) {
                    g.push(y.weights[x]), v.push(y.index);
                    break
                  }
                }
                if (4 < g.length) {
                  console.warn(
                    "FBXLoader: Vertex has more than 4 skinning weights assigned to vertex.  Deleting additional weights.");
                  var _ = [0, 0, 0, 0], S = [0, 0, 0, 0];
                  g.forEach(function (e, t) {
                    var o = e, s = v[t];
                    S.forEach(function (e, t, i) {
                      if (e < o) {
                        i[t] = o, o = e;
                        var n = _[t];
                        _[t] = s, s = n
                      }
                    })
                  }), v = _, g = S
                }
                for (var k = g.length; k < 4; ++k) g[k] = 0, v[k] = 0;
                m.skinWeights.fromArray(g), m.skinIndices.fromArray(v)
              }
              if (r && m.normal.fromArray(N(u, d, p, r)), a && m.uv.fromArray(N(
                u,
                d,
                p,
                a
              )), l && m.color.fromArray(N(u, d, p, l)), c.push(m), f) {
                var R = new I;
                if (R.genTrianglesFromVertices(c), void 0 !== h) {
                  var A = N(u, d, p, h);
                  R.materialIndex = A[0]
                } else R.materialIndex = 0;
                i.faces.push(R), d++, f = !(c = [])
              }
            }
            var C = i.flattenToBuffers(), M = new THREE.BufferGeometry;
            M.name = e.name, M.addAttribute(
              "position",
              new THREE.Float32BufferAttribute(C.vertexBuffer, 3)
            ), 0 < C.normalBuffer.length && M.addAttribute(
              "normal",
              new THREE.Float32BufferAttribute(C.normalBuffer, 3)
            );
            0 < C.uvBuffer.length && M.addAttribute("uv", new THREE.Float32BufferAttribute(C.uvBuffer, 2));
            n.LayerElementColor && M.addAttribute("color", new THREE.Float32BufferAttribute(C.colorBuffer, 3));
            t && (M.addAttribute("skinIndex", new THREE.Float32BufferAttribute(C.skinIndexBuffer, 4)), M.addAttribute(
              "skinWeight",
              new THREE.Float32BufferAttribute(C.skinWeightBuffer, 4)
            ), M.FBX_Deformer = t);
            for (var H = C.materialIndexBuffer, L = H[0], D = 0, k = 0; k < H.length; ++k) H[k] !== L && (M.addGroup(
              D,
              k - D,
              L
            ), L = H[k], D = k);
            return M
          }(e, o)
        }(e, t, i);
      case"NurbsCurve":
        return function (e) {
          if (void 0 === THREE.NURBSCurve) return console.error(
            "THREE.FBXLoader relies on THREE.NURBSCurve for any nurbs present in the model.  Nurbs will show up as empty geometry."), new THREE.BufferGeometry;
          var t = parseInt(e.properties.Order);
          if (isNaN(t)) return console.error("FBXLoader: Invalid Order " + e.properties.Order + " given for geometry ID: " + e.id), new THREE.BufferGeometry;
          for (var i, n, o = t - 1, s = oe(e.subNodes.KnotVector.properties.a), r = [], a = oe(e.subNodes.Points.properties.a), l = 0, h = a.length; l < h; l += 4) r.push(
            (new THREE.Vector4).fromArray(a, l));
          if ("Closed" === e.properties.Form) r.push(r[0]); else if ("Periodic" === e.properties.Form) {
            i = o, n = s.length - 1 - i;
            for (var l = 0; l < o; ++l) r.push(r[l])
          }
          for (var c = new THREE.NURBSCurve(
            o,
            s,
            r,
            i,
            n
          ).getPoints(7 * r.length), d = new Float32Array(3 * c.length), l = 0, h = c.length; l < h; ++l) c[l].toArray(
            d,
            3 * l
          );
          var u = new THREE.BufferGeometry;
          return u.addAttribute("position", new THREE.BufferAttribute(d, 3)), u
        }(e)
    }
  }

  THREE.FBXLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
  }, Object.assign(THREE.FBXLoader.prototype, {
    load: function (i, n, e, o) {
      var s = this, t = new THREE.FileLoader(this.manager);
      t.setResponseType("arraybuffer"), t.load(i, function (e) {
        try {
          var t = s.parse(e, i);
          n(t)
        } catch (e) {
          window.setTimeout(function () {
            o && o(e), s.manager.itemError(i)
          }, 0)
        }
      }, e, o)
    }, parse: function (e, t) {
      var i, n, o, s = t.split(/[\\\/]/);
      if (s.pop(), s = s.join("/") + "/", o = "Kaydara FBX Binary  \0", (n = e).byteLength >= o.length && o === T(
        n,
        0,
        o.length
      )) i = (new b).parse(e); else {
        var r = T(e);
        if (!function (i) {
          var e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"],
            n = 0;

          function t(e) {
            var t = i[e - 1];
            return i = i.slice(n + e), n++, t
          }

          for (var o = 0; o < e.length; ++o) {
            var s = t(1);
            if (s == e[o]) return !1
          }
          return !0
        }(r)) throw self.manager.itemError(t), new Error("FBXLoader: Unknown format.");
        if (E(r) < 7e3) throw self.manager.itemError(t), new Error("FBXLoader: FBX version not supported for file at " + t + ", FileVersion: " + E(
          r));
        i = (new g).parse(r)
      }
      var a = function (e) {
        var t = new Map;
        if ("Connections" in e) for (var i = e.Connections.properties.connections, n = 0, o = i.length; n < o; ++n) {
          var s = i[n];
          t.has(s[0]) || t.set(s[0], {parents: [], children: []});
          var r = {ID: s[1], relationship: s[2]};
          t.get(s[0]).parents.push(r), t.has(s[1]) || t.set(s[1], {parents: [], children: []});
          var a = {ID: s[0], relationship: s[2]};
          t.get(s[1]).children.push(a)
        }
        return t
      }(i), l = function (e) {
        var t = new Map;
        if ("Video" in e.Objects.subNodes) {
          var i = e.Objects.subNodes.Video;
          for (var n in i) {
            var o = i[n];
            if ("Content" in o.properties) {
              var s = d(i[n]);
              t.set(parseInt(n), s)
            }
          }
        }
        return t
      }(i), h = function (e, t, i) {
        var n = new Map;
        if ("Material" in e.Objects.subNodes) {
          var o = e.Objects.subNodes.Material;
          for (var s in o) {
            var r = p(o[s], t, i);
            n.set(parseInt(s), r)
          }
        }
        return n
      }(i, function (e, t, i, n) {
        var o = new Map;
        if ("Texture" in e.Objects.subNodes) {
          var s = e.Objects.subNodes.Texture;
          for (var r in s) {
            var a = u(s[r], t, i, n);
            o.set(parseInt(r), a)
          }
        }
        return o
      }(i, new THREE.TextureLoader(this.manager).setPath(s), l, a), a), c = function (e, t) {
        var i = {};
        if ("Deformer" in e.Objects.subNodes) {
          var n = e.Objects.subNodes.Deformer;
          for (var o in n) {
            var s = n[o];
            if ("Skin" === s.attrType) {
              var r = t.get(parseInt(o)), a = f(r, n);
              a.FBX_ID = parseInt(o), i[o] = a
            }
          }
        }
        return i
      }(i, a);
      return function (e, t, i, n, o) {
        var s = new THREE.Group, r = e.Objects.subNodes.Model, a = [], l = new Map;
        for (var h in r) {
          for (var c = parseInt(h), d = r[h], u = t.get(c), p = null, f = 0; f < u.parents.length; ++f) for (var m in i) {
            var v = i[m], g = v.map, b = g[u.parents[f].ID];
            if (b) {
              var w = p;
              p = new THREE.Bone, v.bones[b.index] = p, null !== w && p.add(w)
            }
          }
          if (!p) switch (d.attrType) {
            case"Mesh":
              for (var y = null, E = null, x = [], T = 0, _ = u.children.length; T < _; ++T) {
                var S = u.children[T];
                n.has(S.ID) && (y = n.get(S.ID)), o.has(S.ID) && x.push(o.get(S.ID))
              }
              if (1 < x.length ? E = x : 0 < x.length ? E = x[0] : (E = new THREE.MeshBasicMaterial({color: 3342591}), x.push(
                E)), "color" in y.attributes) for (var k = 0, R = x.length; k < R; ++k) x[k].vertexColors = THREE.VertexColors;
              if (y.FBX_Deformer) {
                for (var A = 0, C = x.length; A < C; ++A) x[A].skinning = !0;
                p = new THREE.SkinnedMesh(y, E)
              } else p = new THREE.Mesh(y, E);
              break;
            case"NurbsCurve":
              for (var y = null, T = 0, _ = u.children.length; T < _; ++T) {
                var S = u.children[T];
                n.has(S.ID) && (y = n.get(S.ID))
              }
              E = new THREE.LineBasicMaterial({color: 3342591, linewidth: 5}), p = new THREE.Line(y, E);
              break;
            default:
              p = new THREE.Object3D
          }
          p.name = d.attrName.replace(/:/, "").replace(/_/, "").replace(/-/, ""), p.FBX_ID = c, a.push(p), l.set(c, p)
        }
        for (var M = 0, H = a.length; M < H; ++M) {
          var p = a[M], d = r[p.FBX_ID];
          if ("Lcl_Translation" in d.properties && p.position.fromArray(oe(d.properties.Lcl_Translation.value)), "Lcl_Rotation" in d.properties) {
            var L = oe(d.properties.Lcl_Rotation.value).map(le);
            L.push("ZYX"), p.rotation.fromArray(L)
          }
          if ("Lcl_Scaling" in d.properties && p.scale.fromArray(oe(d.properties.Lcl_Scaling.value)), "PreRotation" in d.properties) {
            var D = (new THREE.Euler).setFromVector3(re(d.properties.PreRotation).multiplyScalar(he), "ZYX");
            D = (new THREE.Quaternion).setFromEuler(D);
            var N = (new THREE.Quaternion).setFromEuler(p.rotation);
            D.multiply(N), p.rotation.setFromQuaternion(D, "ZYX")
          }
          for (var u = t.get(p.FBX_ID), P = 0; P < u.parents.length; P++) {
            var I = ce(a, function (e) {
              return e.FBX_ID === u.parents[P].ID
            });
            if (-1 < I) {
              a[I].add(p);
              break
            }
          }
          null === p.parent && s.add(p)
        }
        s.updateMatrixWorld(!0);
        var O = e.Objects.subNodes.Pose;
        for (var h in O) if ("BindPose" === O[h].attrType) {
          O = O[h];
          break
        }
        if (O) for (var B = O.subNodes.PoseNode, j = new Map, F = 0, z = B.length; F < z; ++F) {
          var d = B[F], V = ae(d.subNodes.Matrix.properties.a);
          j.set(parseInt(d.id), V)
        }
        for (var m in i) {
          var v = i[m], g = v.map;
          for (var U in g) {
            var b = g[U], W = b.index, X = v.bones[W];
            if (!j.has(X.FBX_ID)) break;
            var G = j.get(X.FBX_ID);
            X.matrixWorld.copy(G)
          }
          v.skeleton = new THREE.Skeleton(v.bones);
          for (var u = t.get(v.FBX_ID), Y = u.parents, q = 0, Z = Y.length; q < Z; ++q) {
            var K = Y[q];
            if (n.has(K.ID)) for (var Q = K.ID, J = t.get(Q), f = 0; f < J.parents.length; ++f) if (l.has(J.parents[f].ID)) {
              var p = l.get(J.parents[f].ID);
              p.bind(v.skeleton, p.matrixWorld);
              break
            }
          }
        }
        s.updateMatrixWorld(!0), s.skeleton = {bones: a};
        var $ = function (e, t, i) {
          var n = e.Objects.subNodes.AnimationCurveNode, o = e.Objects.subNodes.AnimationCurve,
            s = e.Objects.subNodes.AnimationLayer, r = e.Objects.subNodes.AnimationStack,
            a = {curves: new Map, layers: {}, stacks: {}, length: 0, fps: 30, frames: 0}, l = [];
          for (var h in n) if (h.match(/\d+/)) {
            var c = ee(e, n[h], t, i);
            l.push(c)
          }
          for (var d = new Map, u = 0; u < l.length; ++u) null !== l[u] && d.set(l[u].id, l[u]);
          var p = [];
          for (h in o) if (h.match(/\d+/)) {
            var f = {
              version: null,
              id: (w = o[h]).id,
              internalID: w.id,
              times: oe(w.subNodes.KeyTime.properties.a).map(ne),
              values: oe(w.subNodes.KeyValueFloat.properties.a),
              attrFlag: se(w.subNodes.KeyAttrFlags.properties.a),
              attrData: oe(w.subNodes.KeyAttrDataFloat.properties.a)
            };
            if (!t.has(f.id)) continue;
            p.push(f);
            var m = t.get(f.id).parents[0], v = m.ID, g = m.relationship, b = "";
            if (g.match(/X/)) b = "x"; else if (g.match(/Y/)) b = "y"; else {
              if (!g.match(/Z/)) continue;
              b = "z"
            }
            d.get(v).curves[b] = f
          }
          var w;
          for (var h in d.forEach(function (e) {
            var t = e.containerBoneID;
            if (a.curves.has(t) || a.curves.set(
              t,
              {T: null, R: null, S: null}
            ), "R" === (a.curves.get(t)[e.attr] = e).attr) {
              var i = e.curves;
              if (i.x.values = i.x.values.map(le), i.y.values = i.y.values.map(le), i.z.values = i.z.values.map(le), null !== e.preRotations) {
                var n = (new THREE.Euler).setFromVector3(e.preRotations, "ZYX");
                n = (new THREE.Quaternion).setFromEuler(n);
                for (var o = new THREE.Euler, s = new THREE.Quaternion, r = 0; r < i.x.times.length; ++r) o.set(
                  i.x.values[r],
                  i.y.values[r],
                  i.z.values[r],
                  "ZYX"
                ), s.setFromEuler(o).premultiply(n), o.setFromQuaternion(
                  s,
                  "ZYX"
                ), i.x.values[r] = o.x, i.y.values[r] = o.y, i.z.values[r] = o.z
              }
            }
          }), s) {
            for (var y = [], E = t.get(parseInt(h)).children, x = 0; x < E.length; x++) if (d.has(E[x].ID)) {
              var T = d.get(E[x].ID), _ = T.containerBoneID;
              void 0 === y[_] && (y[_] = {T: null, R: null, S: null}), y[_][T.attr] = T
            }
            a.layers[h] = y
          }
          for (var h in r) {
            for (var S = [], E = t.get(parseInt(h)).children, k = {
              max: 0,
              min: Number.MAX_VALUE
            }, x = 0; x < E.length; ++x) {
              var R = a.layers[E[x].ID];
              if (void 0 !== R) {
                S.push(R);
                for (var A = 0, C = R.length; A < C; ++A) {
                  var y = R[A];
                  y && te(y, k)
                }
              }
            }
            k.min < k.max && (a.stacks[h] = {
              name: r[h].attrName,
              layers: S,
              length: k.max - k.min,
              frames: 30 * (k.max - k.min)
            })
          }
          return a
        }(e, t, s);
        return function (e, t) {
          void 0 === e.animations && (e.animations = []);
          var i = t.stacks;
          for (var n in i) {
            for (var o = i[n], s = {
              name: o.name,
              fps: 30,
              length: o.length,
              hierarchy: []
            }, r = e.skeleton.bones, a = 0, l = r.length; a < l; ++a) {
              var h = r[a], c = h.name.replace(/.*:/, ""), d = ce(r, function (e) {
                return h.parent === e
              });
              s.hierarchy.push({parent: d, name: c, keys: []})
            }
            for (var u = 0; u <= o.frames; u++) for (var a = 0, l = r.length; a < l; ++a) for (var h = r[a], p = a, f = o.layers[0][p], m = 0, v = s.hierarchy.length; m < v; ++m) {
              var g = s.hierarchy[m];
              g.name === h.name && g.keys.push(ie(t, f, h, u))
            }
            e.animations.push(THREE.AnimationClip.parseAnimation(s, r))
          }
        }(s, $), s
      }(i, a, c, function (e, t, i) {
        var n = new Map;
        if ("Geometry" in e.Objects.subNodes) {
          var o = e.Objects.subNodes.Geometry;
          for (var s in o) {
            var r = t.get(parseInt(s)), a = m(o[s], r, i);
            n.set(parseInt(s), a)
          }
        }
        return n
      }(i, a, c), h)
    }
  });
  var a = [], o = {
    ByPolygonVertex: {
      Direct: function (e, t, i, n) {
        var o = e * n.dataSize, s = e * n.dataSize + n.dataSize;
        return S(a, n.buffer, o, s)
      }, IndexToDirect: function (e, t, i, n) {
        var o = n.indices[e], s = o * n.dataSize, r = o * n.dataSize + n.dataSize;
        return S(a, n.buffer, s, r)
      }
    }, ByPolygon: {
      Direct: function (e, t, i, n) {
        var o = t * n.dataSize, s = t * n.dataSize + n.dataSize;
        return S(a, n.buffer, o, s)
      }, IndexToDirect: function (e, t, i, n) {
        var o = n.indices[t], s = o * n.dataSize, r = o * n.dataSize + n.dataSize;
        return S(a, n.buffer, s, r)
      }
    }, ByVertice: {
      Direct: function (e, t, i, n) {
        var o = i * n.dataSize, s = i * n.dataSize + n.dataSize;
        return S(a, n.buffer, o, s)
      }
    }, AllSame: {
      IndexToDirect: function (e, t, i, n) {
        var o = n.indices[0] * n.dataSize, s = n.indices[0] * n.dataSize + n.dataSize;
        return S(a, n.buffer, o, s)
      }
    }
  };

  function N(e, t, i, n) {
    return o[n.mappingType][n.referenceType](e, t, i, n)
  }

  function ee(e, t, i, n) {
    var o = e.Objects.subNodes.Model, s = {
      id: t.id,
      attr: t.attrName,
      internalID: t.id,
      attrX: !1,
      attrY: !1,
      attrZ: !1,
      containerBoneID: -1,
      containerID: -1,
      curves: {x: null, y: null, z: null},
      preRotations: null
    };
    if (!s.attr.match(/S|R|T/)) return null;
    for (var r in t.properties) r.match(/X/) && (s.attrX = !0), r.match(/Y/) && (s.attrY = !0), r.match(/Z/) && (s.attrZ = !0);
    for (var a = i.get(s.id).parents, l = a.length - 1; 0 <= l; --l) {
      var h = ce(n.skeleton.bones, function (e) {
        return e.FBX_ID === a[l].ID
      });
      if (-1 < h) {
        s.containerBoneID = h, s.containerID = a[l].ID;
        var c = o[s.containerID.toString()];
        "PreRotation" in c.properties && (s.preRotations = re(c.properties.PreRotation).multiplyScalar(Math.PI / 180));
        break
      }
    }
    return s
  }

  function te(e, t) {
    e.R && i(e.R.curves, t), e.S && i(e.S.curves, t), e.T && i(e.T.curves, t)
  }

  function i(e, t) {
    e.x && n(e.x, t), e.y && n(e.y, t), e.z && n(e.z, t)
  }

  function n(e, t) {
    t.max = e.times[e.times.length - 1] > t.max ? e.times[e.times.length - 1] : t.max, t.min = e.times[0] < t.min ? e.times[0] : t.min
  }

  var l = new THREE.Euler, h = new THREE.Quaternion;

  function ie(e, t, i, n) {
    var o = {time: n / e.fps, pos: i.position.toArray(), rot: i.quaternion.toArray(), scl: i.scale.toArray()};
    if (void 0 === t) return o;
    try {
      if (c(t, "T") && v(
        t.T,
        n
      ) && (o.pos = [t.T.curves.x.values[n], t.T.curves.y.values[n], t.T.curves.z.values[n]]), c(t, "R") && v(t.R, n)) {
        var s = t.R.curves.x.values[n], r = t.R.curves.y.values[n], a = t.R.curves.z.values[n];
        h.setFromEuler(l.set(s, r, a, "ZYX")), o.rot = h.toArray()
      }
      c(t, "S") && v(t.S, n) && (o.scl = [t.S.curves.x.values[n], t.S.curves.y.values[n], t.S.curves.z.values[n]])
    } catch (e) {
      console.log(i), console.log(e)
    }
    return o
  }

  var s = ["x", "y", "z"];

  function c(e, t) {
    if (void 0 === e) return !1;
    var i = e[t];
    return !!i && s.every(function (e) {
      return null !== i.curves[e]
    })
  }

  function v(n, o) {
    return s.every(function (e) {
      return t = n.curves[e], i = o, void 0 !== t.values[i];
      var t, i
    })
  }

  function P() {
    this.position = new THREE.Vector3, this.normal = new THREE.Vector3, this.uv = new THREE.Vector2, this.color = new THREE.Vector3, this.skinIndices = new THREE.Vector4(
      0,
      0,
      0,
      0
    ), this.skinWeights = new THREE.Vector4(0, 0, 0, 0)
  }

  function r() {
    this.vertices = []
  }

  function I() {
    this.triangles = [], this.materialIndex = 0
  }

  function O() {
    this.faces = [], this.skeleton = null
  }

  function g() {
  }

  function b() {
  }

  function w(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = void 0 === t || t
  }

  function y() {
  }

  function E(e) {
    var t = e.match(/FBXVersion: (\d+)/);
    if (t) return parseInt(t[1]);
    throw new Error("FBXLoader: Cannot find the version number for the file given.")
  }

  function ne(e) {
    return e / 46186158e3
  }

  function oe(e) {
    for (var t = e.split(","), i = 0, n = t.length; i < n; i++) t[i] = parseFloat(t[i]);
    return t
  }

  function se(e) {
    for (var t = e.split(","), i = 0, n = t.length; i < n; i++) t[i] = parseInt(t[i]);
    return t
  }

  function re(e) {
    return (new THREE.Vector3).fromArray(e.value)
  }

  function x(e) {
    return (new THREE.Color).fromArray(e.value)
  }

  function ae(e) {
    return (new THREE.Matrix4).fromArray(oe(e))
  }

  function T(e, t, i) {
    void 0 === t && (t = 0), void 0 === i && (i = e.byteLength);
    var n = new Uint8Array(e, t, i);
    if (void 0 !== window.TextDecoder) return (new TextDecoder).decode(n);
    for (var o = "", s = 0, r = n.length; s < r; s++) o += String.fromCharCode(n[s]);
    return o
  }

  function le(e) {
    return e * he
  }

  Object.assign(P.prototype, {
    copy: function (e) {
      var t = e || new P;
      return t.position.copy(this.position), t.normal.copy(this.normal), t.uv.copy(this.uv), t.skinIndices.copy(this.skinIndices), t.skinWeights.copy(
        this.skinWeights), t
    }, flattenToBuffers: function (e, t, i, n, o, s) {
      this.position.toArray(e, e.length), this.normal.toArray(t, t.length), this.uv.toArray(
        i,
        i.length
      ), this.color.toArray(n, n.length), this.skinIndices.toArray(o, o.length), this.skinWeights.toArray(s, s.length)
    }
  }), Object.assign(r.prototype, {
    copy: function (e) {
      for (var t = e || new r, i = 0; i < this.vertices.length; ++i) this.vertices[i].copy(t.vertices[i]);
      return t
    }, flattenToBuffers: function (e, t, i, n, o, s) {
      for (var r = this.vertices, a = 0, l = r.length; a < l; ++a) r[a].flattenToBuffers(e, t, i, n, o, s)
    }
  }), Object.assign(I.prototype, {
    copy: function (e) {
      for (var t = e || new I, i = 0; i < this.triangles.length; ++i) this.triangles[i].copy(t.triangles[i]);
      return t.materialIndex = this.materialIndex, t
    }, genTrianglesFromVertices: function (e) {
      for (var t = 2; t < e.length; ++t) {
        var i = new r;
        i.vertices[0] = e[0], i.vertices[1] = e[t - 1], i.vertices[2] = e[t], this.triangles.push(i)
      }
    }, flattenToBuffers: function (e, t, i, n, o, s, r) {
      for (var a = this.triangles, l = this.materialIndex, h = 0, c = a.length; h < c; ++h) a[h].flattenToBuffers(
        e,
        t,
        i,
        n,
        o,
        s
      ), _(r, [l, l, l])
    }
  }), Object.assign(O.prototype, {
    flattenToBuffers: function () {
      for (var e = [], t = [], i = [], n = [], o = [], s = [], r = [], a = this.faces, l = 0, h = a.length; l < h; ++l) a[l].flattenToBuffers(
        e,
        t,
        i,
        n,
        o,
        s,
        r
      );
      return {
        vertexBuffer: e,
        normalBuffer: t,
        uvBuffer: i,
        colorBuffer: n,
        skinIndexBuffer: o,
        skinWeightBuffer: s,
        materialIndexBuffer: r
      }
    }
  }), Object.assign(g.prototype, {
    getPrevNode: function () {
      return this.nodeStack[this.currentIndent - 2]
    }, getCurrentNode: function () {
      return this.nodeStack[this.currentIndent - 1]
    }, getCurrentProp: function () {
      return this.currentProp
    }, pushStack: function (e) {
      this.nodeStack.push(e), this.currentIndent += 1
    }, popStack: function () {
      this.nodeStack.pop(), this.currentIndent -= 1
    }, setCurrentProp: function (e, t) {
      this.currentProp = e, this.currentPropName = t
    }, parse: function (e) {
      this.currentIndent = 0, this.allNodes = new y, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
      var t = e.split("\n");
      for (var i in t) {
        if (!(a = t[i]).match(/^[\s\t]*;/) && !a.match(/^[\s\t]*$/)) {
          var n = new RegExp("^\\t{" + this.currentIndent + "}(\\w+):(.*){", "");
          if (l = a.match(n)) {
            for (var o = l[1].trim().replace(/^"/, "").replace(
              /"$/,
              ""
            ), s = l[2].split(","), r = 0, a = s.length; r < a; r++) s[r] = s[r].trim().replace(/^"/, "").replace(
              /"$/,
              ""
            );
            this.parseNodeBegin(a, o, s || null)
          } else {
            var l, h = new RegExp("^\\t{" + this.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
            if (l = a.match(h)) {
              var c = l[1].replace(/^"/, "").replace(/"$/, "").trim(),
                d = l[2].replace(/^"/, "").replace(/"$/, "").trim();
              this.parseNodeProperty(a, c, d)
            } else {
              var u = new RegExp("^\\t{" + (this.currentIndent - 1) + "}}");
              a.match(u) ? this.nodeEnd() : a.match(/^[^\s\t}]/) && this.parseNodePropertyContinued(a)
            }
          }
        }
      }
      return this.allNodes
    }, parseNodeBegin: function (e, t, i) {
      var n = {name: t, properties: {}, subNodes: {}}, o = this.parseNodeAttr(i), s = this.getCurrentNode();
      if (0 === this.currentIndent) this.allNodes.add(t, n); else if (t in s.subNodes) {
        var r = s.subNodes[t];
        this.isFlattenNode(s.subNodes[t]) && ("" === o.id ? (s.subNodes[t] = [], s.subNodes[t].push(r)) : (s.subNodes[t] = {}, s.subNodes[t][r.id] = r)), "" === o.id ? s.subNodes[t].push(
          n) : s.subNodes[t][o.id] = n
      } else "number" == typeof o.id || o.id.match(/^\d+$/) ? (s.subNodes[t] = {}, s.subNodes[t][o.id] = n) : s.subNodes[t] = n;
      i && (n.id = o.id, n.attrName = o.name, n.attrType = o.type), this.pushStack(n)
    }, parseNodeAttr: function (e) {
      var t = e[0];
      "" !== e[0] && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
      var i = "", n = "";
      return 1 < e.length && (i = e[1].replace(/^(\w+)::/, ""), n = e[2]), {id: t, name: i, type: n}
    }, parseNodeProperty: function (e, t, i) {
      var n = this.getCurrentNode(), o = n.name;
      if (void 0 !== o && o.match(/Properties(\d)+/)) return void this.parseNodeSpecialProperty(e, t, i);
      if ("C" == t) {
        var s = i.split(",").slice(1), r = parseInt(s[0]), a = parseInt(s[1]), l = i.split(",").slice(3);
        t = "connections", _(i = [r, a], l), void 0 === n.properties[t] && (n.properties[t] = [])
      }
      if ("Node" == t) {
        var h = parseInt(i);
        n.properties.id = h, n.id = h
      }
      t in n.properties ? Array.isArray(n.properties[t]) ? n.properties[t].push(i) : n.properties[t] += i : Array.isArray(
        n.properties[t]) ? n.properties[t].push(i) : n.properties[t] = i, this.setCurrentProp(n.properties, t)
    }, parseNodePropertyContinued: function (e) {
      this.currentProp[this.currentPropName] += e
    }, parseNodeSpecialProperty: function (e, t, i) {
      for (var n = i.split('",'), o = 0, s = n.length; o < s; o++) n[o] = n[o].trim().replace(/^\"/, "").replace(
        /\s/,
        "_"
      );
      var r = n[0], a = n[1], l = n[2], h = n[3], c = n[4];
      switch (a) {
        case"int":
        case"Bool":
        case"Integer":
          c = parseInt(c);
          break;
        case"double":
        case"Float":
        case"Number":
          c = parseFloat(c);
          break;
        case"Color":
        case"ColorRGB":
        case"Vector":
        case"Vector3D":
          c = oe(c)
      }
      this.getPrevNode().properties[r] = {
        type: a,
        type2: l,
        flag: h,
        value: c
      }, this.setCurrentProp(this.getPrevNode().properties, r)
    }, nodeEnd: function () {
      this.popStack()
    }, isFlattenNode: function (e) {
      return "subNodes" in e && "properties" in e
    }
  }), Object.assign(b.prototype, {
    parse: function (e) {
      var t = new w(e);
      t.skip(23);
      var i = t.getUint32();
      console.log("FBX binary version: " + i);
      for (var n = new y; !this.endOfContent(t);) {
        var o = this.parseNode(t, i);
        null !== o && n.add(o.name, o)
      }
      return n
    }, endOfContent: function (e) {
      return e.size() % 16 == 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 15 >= e.size()
    }, parseNode: function (e, t) {
      var i = 7500 <= t ? e.getUint64() : e.getUint32(), n = 7500 <= t ? e.getUint64() : e.getUint32(),
        o = 7500 <= t ? e.getUint64() : e.getUint32(), s = e.getUint8(), r = e.getString(s);
      if (this.propertyListLen = o, 0 === i) return null;
      for (var a = [], l = 0; l < n; l++) a.push(this.parseProperty(e));
      var h = 0 < a.length ? a[0] : "", c = 1 < a.length ? a[1] : "", d = 2 < a.length ? a[2] : "", u = {}, p = {},
        f = !1;
      for (1 === n && e.getOffset() === i && (f = !0); i > e.getOffset();) {
        var m = this.parseNode(e, t);
        if (null !== m) if (!0 !== m.singleProperty) if ("Connections" !== r || "C" !== m.name) if (m.name.match(
          /^Properties\d+$/)) {
          var v = Object.keys(m.properties);
          for (l = 0, _ = v.length; l < _; l++) {
            var g = v[l];
            p[g] = m.properties[g]
          }
        } else if (r.match(/^Properties\d+$/) && "P" === m.name) {
          var b, w = m.propertyList[0], y = m.propertyList[1], E = m.propertyList[2], x = m.propertyList[3];
          0 === w.indexOf("Lcl ") && (w = w.replace("Lcl ", "Lcl_")), 0 === y.indexOf("Lcl ") && (y = y.replace(
            "Lcl ",
            "Lcl_"
          )), b = "ColorRGB" === y || "Vector" === y || "Vector3D" === y || 0 === y.indexOf("Lcl_") ? [m.propertyList[4], m.propertyList[5], m.propertyList[6]] : m.propertyList[4], 0 === y.indexOf(
            "Lcl_") && (b = b.toString()), p[w] = {type: y, type2: E, flag: x, value: b}
        } else void 0 === u[m.name] ? "number" == typeof m.id ? (u[m.name] = {}, u[m.name][m.id] = m) : u[m.name] = m : "" === m.id ? (Array.isArray(
          u[m.name]) || (u[m.name] = [u[m.name]]), u[m.name].push(m)) : void 0 === u[m.name][m.id] ? u[m.name][m.id] = m : (Array.isArray(
          u[m.name][m.id]) || (u[m.name][m.id] = [u[m.name][m.id]]), u[m.name][m.id].push(m)); else {
          for (var T = [], l = 1, _ = m.propertyList.length; l < _; l++) T[l - 1] = m.propertyList[l];
          void 0 === p.connections && (p.connections = []), p.connections.push(T)
        } else {
          var S = m.propertyList[0];
          Array.isArray(S) ? (m.properties[m.name] = m.propertyList[0], (u[m.name] = m).properties.a = S.toString()) : p[m.name] = S
        }
      }
      return {singleProperty: f, id: h, attrName: c, attrType: d, name: r, properties: p, propertyList: a, subNodes: u}
    }, parseProperty: function (e) {
      var t = e.getChar();
      switch (t) {
        case"F":
          return e.getFloat32();
        case"D":
          return e.getFloat64();
        case"L":
          return e.getInt64();
        case"I":
          return e.getInt32();
        case"Y":
          return e.getInt16();
        case"C":
          return e.getBoolean();
        case"f":
        case"d":
        case"l":
        case"i":
        case"b":
          var i = e.getUint32(), n = e.getUint32(), o = e.getUint32();
          if (0 === n) switch (t) {
            case"f":
              return e.getFloat32Array(i);
            case"d":
              return e.getFloat64Array(i);
            case"l":
              return e.getInt64Array(i);
            case"i":
              return e.getInt32Array(i);
            case"b":
              return e.getBooleanArray(i)
          }
          if (void 0 === window.Zlib) throw new Error(
            "FBXLoader: Import inflate.min.js from https://github.com/imaya/zlib.js");
          var s = new w(new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(o))).decompress().buffer);
          switch (t) {
            case"f":
              return s.getFloat32Array(i);
            case"d":
              return s.getFloat64Array(i);
            case"l":
              return s.getInt64Array(i);
            case"i":
              return s.getInt32Array(i);
            case"b":
              return s.getBooleanArray(i)
          }
        case"S":
          var r = e.getUint32();
          return e.getString(r);
        case"R":
          r = e.getUint32();
          return e.getArrayBuffer(r);
        default:
          throw new Error("FBXLoader: Unknown property type " + t)
      }
    }
  }), Object.assign(w.prototype, {
    getOffset: function () {
      return this.offset
    }, size: function () {
      return this.dv.buffer.byteLength
    }, skip: function (e) {
      this.offset += e
    }, getBoolean: function () {
      return 1 == (1 & this.getUint8())
    }, getBooleanArray: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getBoolean());
      return t
    }, getInt8: function () {
      var e = this.dv.getInt8(this.offset);
      return this.offset += 1, e
    }, getInt8Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getInt8());
      return t
    }, getUint8: function () {
      var e = this.dv.getUint8(this.offset);
      return this.offset += 1, e
    }, getUint8Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getUint8());
      return t
    }, getInt16: function () {
      var e = this.dv.getInt16(this.offset, this.littleEndian);
      return this.offset += 2, e
    }, getInt16Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getInt16());
      return t
    }, getUint16: function () {
      var e = this.dv.getUint16(this.offset, this.littleEndian);
      return this.offset += 2, e
    }, getUint16Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getUint16());
      return t
    }, getInt32: function () {
      var e = this.dv.getInt32(this.offset, this.littleEndian);
      return this.offset += 4, e
    }, getInt32Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getInt32());
      return t
    }, getUint32: function () {
      var e = this.dv.getUint32(this.offset, this.littleEndian);
      return this.offset += 4, e
    }, getUint32Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getUint32());
      return t
    }, getInt64: function () {
      var e, t;
      return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 2147483648 & t ? (t = 4294967295 & ~t, 4294967295 === (e = 4294967295 & ~e) && (t = t + 1 & 4294967295), -(4294967296 * t + (e = e + 1 & 4294967295))) : 4294967296 * t + e
    }, getInt64Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getInt64());
      return t
    }, getUint64: function () {
      var e, t;
      return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 4294967296 * t + e
    }, getUint64Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getUint64());
      return t
    }, getFloat32: function () {
      var e = this.dv.getFloat32(this.offset, this.littleEndian);
      return this.offset += 4, e
    }, getFloat32Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getFloat32());
      return t
    }, getFloat64: function () {
      var e = this.dv.getFloat64(this.offset, this.littleEndian);
      return this.offset += 8, e
    }, getFloat64Array: function (e) {
      for (var t = [], i = 0; i < e; i++) t.push(this.getFloat64());
      return t
    }, getArrayBuffer: function (e) {
      var t = this.dv.buffer.slice(this.offset, this.offset + e);
      return this.offset += e, t
    }, getChar: function () {
      return String.fromCharCode(this.getUint8())
    }, getString: function (e) {
      for (var t = ""; 0 < e;) {
        var i = this.getUint8();
        if (e--, 0 === i) break;
        t += String.fromCharCode(i)
      }
      return this.skip(e), t
    }
  }), Object.assign(y.prototype, {
    add: function (e, t) {
      this[e] = t
    }, searchConnectionParent: function (e) {
      if (void 0 === this.__cache_search_connection_parent && (this.__cache_search_connection_parent = []), void 0 !== this.__cache_search_connection_parent[e]) return this.__cache_search_connection_parent[e];
      this.__cache_search_connection_parent[e] = [];
      for (var t = this.Connections.properties.connections, i = [], n = 0; n < t.length; ++n) if (t[n][0] == e) {
        var o = 0 === t[n][1] ? -1 : t[n][1];
        i.push(o)
      }
      return 0 < i.length ? (_(
        this.__cache_search_connection_parent[e],
        i
      ), i) : (this.__cache_search_connection_parent[e] = [-1], [-1])
    }, searchConnectionChildren: function (e) {
      if (void 0 === this.__cache_search_connection_children && (this.__cache_search_connection_children = []), void 0 !== this.__cache_search_connection_children[e]) return this.__cache_search_connection_children[e];
      this.__cache_search_connection_children[e] = [];
      for (var t = this.Connections.properties.connections, i = [], n = 0; n < t.length; ++n) t[n][1] == e && i.push(0 === t[n][0] ? -1 : t[n][0]);
      return 0 < i.length ? (_(
        this.__cache_search_connection_children[e],
        i
      ), i) : (this.__cache_search_connection_children[e] = [], [])
    }, searchConnectionType: function (e, t) {
      var i = e + "," + t;
      if (void 0 === this.__cache_search_connection_type && (this.__cache_search_connection_type = {}), void 0 !== this.__cache_search_connection_type[i]) return this.__cache_search_connection_type[i];
      this.__cache_search_connection_type[i] = "";
      for (var n = this.Connections.properties.connections, o = 0; o < n.length; ++o) if (n[o][0] == e && n[o][1] == t) return this.__cache_search_connection_type[i] = n[o][2], n[o][2];
      return this.__cache_search_connection_type[e] = null
    }
  });
  var he = Math.PI / 180;

  function ce(e, t) {
    for (var i = 0, n = e.length; i < n; i++) if (t(e[i])) return i;
    return -1
  }

  function _(e, t) {
    for (var i = 0, n = e.length, o = t.length; i < o; i++, n++) e[n] = t[i]
  }

  function S(e, t, i, n) {
    for (var o = i, s = 0; o < n; o++, s++) e[s] = t[o];
    return e
  }
}(), THREE.CopyShader = {
  uniforms: {tDiffuse: {value: null}, opacity: {value: 1}},
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join(
    "\n")
}, THREE.FillShader = {
  uniforms: {
    color: {value: new THREE.Color(1, 1, 1)},
    alpha: {value: 1},
    lineAlpha: {value: 1},
    fillAlpha: {value: .2}
  },
  vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform vec3  color;", "uniform float alpha;", "uniform float lineAlpha;", "uniform float fillAlpha;", "#define PI 3.141592653589793", "#define XRAD 0.017453292519943295", "float drawLine(float angle, float step, float thick) {", "float a = angle * XRAD;", "float ks = thick / step;", "float len = dot(gl_FragCoord.xy, vec2(cos(a), sin(a)));", "float dist = abs((2.0 * mod(len, step) / step) - 1.0);", "return clamp((ks - dist) / ks, 0.0, 1.0);", "}", "void main() {", "gl_FragColor = vec4(color, alpha);", "return;", "float line1 = drawLine(-30.0, 10.0, 2.0);", "float line2 = drawLine(80.0, 20.0, 2.0);", "float level = fillAlpha + lineAlpha * max(line1 * 0.9, line2 * 0.3);", "gl_FragColor = vec4(color, alpha * level);", "}"].join(
    "\n")
}, THREE.DepthShader = {
  uniforms: {normalDistance: {value: 1}},
  vertexShader: ["varying vec3 vPosition;", "void main() {", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "vPosition = vec3(mvPosition);", "gl_Position = projectionMatrix * mvPosition;", "}"].join(
    "\n"),
  fragmentShader: ["varying vec3 vPosition;", "uniform float normalDistance;", "//unpack a 32bit float from 4 8bit, [0;1] clamped floats", "float DecodeFloatRGBA( vec4 _packed)", "{", "vec4 rgba = 255.0 * _packed;", "float sign =  step(-128.0, -rgba[1]) * 2.0 - 1.0;", "float exponent = rgba[0] - 127.0;    ", "if (abs(exponent + 127.0) < 0.001)", "return 0.0;           ", "float mantissa =  mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + float(0x800000);", "return sign *  exp2(exponent-23.0) * mantissa ;     ", "}", "//pack a 32bit float into 4 8bit, [0;1] clamped floats", "vec4 EncodeFloatRGBA(float f) {", "float F = abs(f); ", "if(F == 0.0)", "{", "return  vec4(0,0,0,0);", "}", "float Sign =  step(0.0, -f);", "float Exponent = floor( log2(F)); ", "float Mantissa = F/ exp2(Exponent); ", "if(Mantissa < 1.0)", "Exponent -= 1.0;", "Exponent +=  127.0;", "vec4 rgba;", "rgba[0] = Exponent;", "rgba[1] = 128.0 * Sign +  mod(floor(Mantissa * float(128.0)),128.0);", "rgba[2] = floor( mod(floor(Mantissa* exp2(float(23.0 - 8.0))), exp2(8.0)));", "rgba[3] = floor( exp2(23.0)* mod(Mantissa, exp2(-15.0)));", "return (1.0 / 255.0) * rgba;", "}", "void main(void) {", "gl_FragColor = EncodeFloatRGBA(gl_FragCoord.z / normalDistance);", "}"].join(
    "\n")
}, THREE.OverlayShader = {
  uniforms: {
    tDiffuse: {value: null},
    width: {value: 512},
    height: {value: 512},
    drawColor: {value: new THREE.Color(1, 1, 1)},
    drawAlpha: {value: 1},
    lineAlpha: {value: .4},
    lineAngle: {value: 0},
    edgeAlpha: {value: .8},
    fillAlpha: {value: .1}
  },
  vertexShader: ["void main() {", "gl_Position = vec4(position, 1.0);", "}"].join("\n"),
  fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float width;", "uniform float height;", "uniform vec3  drawColor;", "uniform float drawAlpha;", "uniform float lineAlpha;", "uniform float lineAngle;", "uniform float fillAlpha;", "uniform float edgeAlpha;", "float drawLine(float angle, float step, float thick) {", "float pi = 3.141592653589793;", "float kx = cos(angle / 180.0 * pi);", "float ky = sin(angle / 180.0 * pi);", "float ks = thick / step;", "float len = dot(gl_FragCoord.xy, vec2(kx, ky));", "float dist = abs((2.0 * mod(len, step) / step) - 1.0);", "return clamp((ks - dist) * (1.0 / ks), 0.0, 1.0);", "}", "void main() {", "vec2 resolution = 1.0 / vec2(width, height);", "vec2 pixel = gl_FragCoord.xy * resolution;", "vec4 mtl = texture2D(tDiffuse, pixel + resolution * vec2(-1.0,  1.0));", "vec4 mtc = texture2D(tDiffuse, pixel + resolution * vec2( 0.0,  1.0));", "vec4 mtr = texture2D(tDiffuse, pixel + resolution * vec2( 1.0,  1.0));", "vec4 mcl = texture2D(tDiffuse, pixel + resolution * vec2(-1.0,  0.0));", "vec4 mcc = texture2D(tDiffuse, pixel + resolution * vec2( 0.0,  0.0));", "vec4 mcr = texture2D(tDiffuse, pixel + resolution * vec2( 1.0,  0.0));", "vec4 mbl = texture2D(tDiffuse, pixel + resolution * vec2(-1.0, -1.0));", "vec4 mbc = texture2D(tDiffuse, pixel + resolution * vec2( 0.0, -1.0));", "vec4 mbr = texture2D(tDiffuse, pixel + resolution * vec2( 1.0, -1.0));", "vec4 hi = max(mtl, max(mtc, max(mtr,", "max(mcl, max(mcc, max(mcr,", "max(mbl, max(mbc,     mbr))))))));", "vec3 pcc = mcc.rgb;", "float dtl = length(mtl.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dtc = length(mtc.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dtr = length(mtr.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dcl = length(mcl.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dcr = length(mcr.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dbl = length(mbl.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dbc = length(mbc.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float dbr = length(mbr.rgb - pcc) > 0.0 ? 1.0 : 0.0;", "float edge = 0.4 * (dtl * 0.5 + dtc + dtr * 0.5 + dcl + dcr + dbl * 0.5 + dbc + dbr * 0.5);", "float fill = mcc.a > 0.0 ? 1.0 : 0.0;", "float line1 = drawLine(-30.0 + lineAngle, 10.0, 2.0);", "float line2 = drawLine( 80.0 + lineAngle, 20.0, 2.0);", "float level = 0.0;", "level += edgeAlpha * edge;", "level += lineAlpha * max(fill * line1 * 0.9, fill * line2 * 0.3);", "level += fillAlpha * fill;", "if(level > 0.0) {", "gl_FragColor = vec4(hi.rgb, hi.a * level);", "} else {", "gl_FragColor = vec4(0.0);", "}", "}"].join(
    "\n")
}, THREE.HorizontalBlurShader = {
  uniforms: {tDiffuse: {value: null}, width: {value: 512}},
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float width;", "varying vec2 vUv;", "void main() {", "float h = 1.0 / width;", "vec4 sum = vec4( 0.0 );", "vec4 texn4 = texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) );", "vec4 texn3 = texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) );", "vec4 texn2 = texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) );", "vec4 texn1 = texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) );", "vec4 texc0 = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );", "vec4 texp1 = texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) );", "vec4 texp2 = texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) );", "vec4 texp3 = texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) );", "vec4 texp4 = texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) );", "vec4 col = max(texn4, max(texn3, max(texn2, max(texn1, max(texc0, max(texp1, max(texp2, max(texp3, texp4))))))));", "gl_FragColor = vec4(col.rgb, texc0.a * 0.1633", "+ texn4.a * 0.051 + texn3.a * 0.0918 + texn2.a * 0.12245 + texn1.a * 0.1531", "+ texp4.a * 0.051 + texp3.a * 0.0918 + texp2.a * 0.12245 + texp1.a * 0.1531);", "}"].join(
    "\n")
}, THREE.VerticalBlurShader = {
  uniforms: {tDiffuse: {value: null}, height: {value: 512}},
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float height;", "varying vec2 vUv;", "void main() {", "float v = 1.0 / height;", "vec4 sum = vec4( 0.0 );", "vec4 texn4 = texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) );", "vec4 texn3 = texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) );", "vec4 texn2 = texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) );", "vec4 texn1 = texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) );", "vec4 texc0 = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );", "vec4 texp1 = texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) );", "vec4 texp2 = texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) );", "vec4 texp3 = texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) );", "vec4 texp4 = texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) );", "vec4 col = max(texn4, max(texn3, max(texn2, max(texn1, max(texc0, max(texp1, max(texp2, max(texp3, texp4))))))));", "gl_FragColor = vec4(col.rgb, texc0.a * 0.1633", "+ texn4.a * 0.051 + texn3.a * 0.0918 + texn2.a * 0.12245 + texn1.a * 0.1531", "+ texp4.a * 0.051 + texp3.a * 0.0918 + texp2.a * 0.12245 + texp1.a * 0.1531);", "}"].join(
    "\n")
}, THREE.ACAAShader = {
  uniforms: {tDiffuse: {value: null}, width: {value: 512}, height: {value: 512}},
  vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float width;", "uniform float height;", "#define FXAA_REDUCE_MIN   (1.0/128.0)", "#define FXAA_REDUCE_MUL   (1.0/8.0)", "#define FXAA_SPAN_MAX     8.0", "void main() {", "vec2 resolution = 1.0 / vec2(width, height);", "float aNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).a;", "float aNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2(  1.0, -1.0 ) ) * resolution ).a;", "float aSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0,  1.0 ) ) * resolution ).a;", "float aSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2(  1.0,  1.0 ) ) * resolution ).a;", "float aM  = texture2D( tDiffuse,   gl_FragCoord.xy * resolution ).a;", "float aMin = min( aM, min( min( aNW, aNE ), min( aSW, aSE ) ) );", "float aMax = max( aM, max( max( aNW, aNE ), max( aSW, aSE ) ) );", "vec2 dir;", "dir.x = -((aNW + aNE) - (aSW + aSE));", "dir.y =  ((aNW + aSW) - (aNE + aSE));", "float dirReduce = max( ( aNW + aNE + aSW + aSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );", "float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );", "dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),", "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),", "dir * rcpDirMin)) * resolution;", "vec4 rgbA = (1.0/2.0) * (", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));", "vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));", "if ( ( rgbB.a < aMin ) || ( rgbB.a > aMax ) ) {", "gl_FragColor = rgbA;", "} else {", "gl_FragColor = rgbB;", "}", "}"].join(
    "\n")
}, THREE.SSAOShader = {
  uniforms: {
    tDepth: {value: null},
    size: {value: new THREE.Vector2(512, 512)},
    cameraNear: {value: .1},
    cameraFar: {value: 210},
    diffArea: {value: .45},
    gDisplace: {value: .62},
    radius: {value: 17},
    aoClamp: {value: .89},
    aoMin: {value: 1}
  },
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join(
    "\n"),
  fragmentShader: ["uniform float cameraNear;", "uniform float cameraFar;", "uniform vec2 size;", "uniform float aoClamp;", "uniform float aoMin;", "uniform float radius;", "uniform float diffArea;", "uniform float gDisplace;", "uniform sampler2D tDepth;", "varying vec2 vUv;", "#define DL 2.399963229728653", "#define EULER 2.718281828459045", "const int samples = 8;", "const bool useNoise = false;", "const float noiseAmount = 0.0003;", "#include <packing>", "vec2 rand( const vec2 coord ) {", "vec2 noise;", "if ( useNoise ) {", "float nx = dot ( coord, vec2( 12.9898, 78.233 ) );", "float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );", "noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );", "} else {", "float ff = fract( 1.0 - coord.s * ( size.x / 2.0 ) );", "float gg = fract( coord.t * ( size.y / 2.0 ) );", "noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;", "}", "return ( noise * 2.0  - 1.0 ) * noiseAmount;", "}", "float DecodeFloatRGBA( vec4 _packed) {", "vec4 rgba = 255.0 * _packed;", "float sign = step(-128.0, -rgba[1]) * 2.0 - 1.0;", "float exponent = rgba[0] - 127.0;", "if(abs(exponent + 127.0) < 0.001) {", "return 0.0;", "}", "float mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + float(0x800000);", "return sign * exp2(exponent-23.0) * mantissa;", "}", "float readDepth( const in vec2 coord ) {", "float depth = DecodeFloatRGBA(texture2D(tDepth, coord));", "return (2.0 * cameraNear) / (cameraFar + cameraNear - depth * (cameraFar - cameraNear));", "}", "float compareDepths( const in float depth1, const in float depth2, inout int far ) {", "float garea = 2.0;", "float diff = ( depth1 - depth2 ) * 100.0;", "if ( diff < gDisplace ) {", "garea = diffArea;", "} else {", "far = 1;", "}", "float dd = diff - gDisplace;", "float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );", "return gauss;", "}", "float calcAO( float depth, float dw, float dh ) {", "float dd = radius - depth * radius;", "vec2 vv = vec2( dw, dh );", "vec2 coord1 = vUv + dd * vv;", "vec2 coord2 = vUv - dd * vv;", "float temp1 = 0.0;", "float temp2 = 0.0;", "int far = 0;", "temp1 = compareDepths( depth, readDepth( coord1 ), far );", "if ( far > 0 ) {", "temp2 = compareDepths( readDepth( coord2 ), depth, far );", "temp1 += ( 1.0 - temp1 ) * temp2;", "}", "return temp1;", "}", "void main() {", "vec2 noise = rand( vUv );", "float depth = readDepth( vUv );", "float tt = clamp( depth, aoClamp, 1.0 );", "float w = ( 1.0 / size.x )  / tt + ( noise.x * ( 1.0 - noise.x ) );", "float h = ( 1.0 / size.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );", "float ao = 0.0;", "float dz = 1.0 / float( samples );", "float z = 1.0 - dz / 2.0;", "float l = 0.0;", "for ( int i = 0; i <= samples; i ++ ) {", "float r = sqrt( 1.0 - z );", "float pw = cos( l ) * r;", "float ph = sin( l ) * r;", "ao += calcAO( depth, pw * w, ph * h );", "z = z - dz;", "l = l + DL;", "}", "ao /= float( samples );", "gl_FragColor = vec4( vec3(0.0), min(aoMin, ao) );", "}"].join(
    "\n")
}, FileImport.prototype = {
  onInputChange: function () {
    for (var e = 0; e < this.input.files.length; e++) this.events.emit("import", this.input.files[e]);
    this.input.value = null
  }
}, TileView.VERTICAL_SPLIT = 1, TileView.HORIZONTAL_SPLIT = 2, TileView.prototype = {
  width: 0, height: 0, helperSize: 1, makeFrame: function (e, t) {
    var i = {source: e, parent: t};
    return e && e[0] ? (i.split = "v" === e[0] ? TileView.VERTICAL_SPLIT : TileView.HORIZONTAL_SPLIT, i.head = this.makeFrame(
      e[1],
      i
    ), i.tail = this.makeFrame(
      e[2],
      i
    ), i.position = e[3] || .5, this.splits.push(i)) : (i.index = this.frames.length, this.frames.push(i)), i
  }, setLayout: function (e) {
    this.splits = [], this.frames = [], this.root = this.makeFrame(e), this.helpers = [], this.ehelpers.innerHTML = "";
    for (var t = 0; t < this.splits.length; t++) {
      var i = this.splits[t], n = new Drag(dom.div("tile-helper", this.ehelpers));
      n.min.x = n.min.y = 0, n.max.x = n.max.y = 1, n.events.on("start", this.startHelper, this, i), n.events.on(
        "drag",
        this.dragHelper,
        this,
        i
      ), this.helpers.push(n)
    }
    this.update()
  }, setClients: function (e) {
    if (this.clients = e || [], this.econtent.innerHTML = "", e) for (var t = 0; t < e.length; t++) {
      var i = e[t];
      i && (i.element && (dom.addclass(i.element, "tile-client"), dom.append(this.econtent, i.element)))
    }
  }, resize: function (e, t) {
    this.width = e, this.height = t, this.setElement(this.element, NaN, NaN, this.width, this.height), this.update()
  }, autoresize: function () {
    this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.setElement(
      this.element,
      NaN,
      NaN,
      NaN,
      NaN
    ), this.update()
  }, update: function () {
    this.resizeFrame(this.root, 0, 0, this.width, this.height), this.helpers.forEach(
      this.updateHelper,
      this
    ), this.clients.forEach(this.updateClient, this), this.events.emit("update")
  }, resizeFrame: function (e, t, i, n, o) {
    switch (1 < arguments.length ? (e.x = t, e.y = i, e.w = n, e.h = o) : (t = e.x, i = e.y, n = e.w, o = e.h), e.split) {
      case TileView.VERTICAL_SPLIT:
        var s = e.h * e.position, r = e.h * (1 - e.position);
        this.resizeFrame(e.head, t, i, n, s), this.resizeFrame(e.tail, t, i + s, n, r);
        break;
      case TileView.HORIZONTAL_SPLIT:
        var a = e.w * e.position, l = e.w * (1 - e.position);
        this.resizeFrame(e.head, t, i, a, o), this.resizeFrame(e.tail, t + a, i, l, o)
    }
  }, setElement: function (e, t, i, n, o) {
    if (e) {
      var s = e.style;
      s.top = i + "px", s.left = t + "px", s.width = n + "px", s.height = o + "px"
    }
  }, showClients: function () {
    this.setClients(), this.frames.forEach(function (e, t) {
      var i = dom.div("tile-client tile-client-test", this.econtent), n = dom.div("tile-client-index absmid", i),
        o = dom.div("tile-client-size absmid", i);
      i.style.backgroundColor = f.rcolor(), n.innerHTML = t, this.clients[t] = {
        element: i, resize: function (e, t) {
          o.innerHTML = Math.round(e) + "x" + Math.round(t)
        }
      }
    }, this), this.update()
  }, startHelper: function (e, t) {
    t.point.x = t.origin.x = e.position, t.point.y = t.origin.y = e.position
  }, dragHelper: function (e, t) {
    e.split === TileView.VERTICAL_SPLIT ? e.position = f.clamp(t.point.y, 0, 1) : e.position = f.clamp(
      t.point.x,
      0,
      1
    ), e.source[3] = e.position, this.resizeFrame(e), this.update()
  }, updateHelper: function (e, t) {
    var i = this.splits[t];
    if (i.split === TileView.VERTICAL_SPLIT) {
      var n = i.position * i.h;
      this.setElement(e.element, i.x, i.y + n, i.w, this.helperSize), dom.addclass(
        e.element,
        "tile-helper-vertical"
      ), dom.remclass(e.element, "tile-helper-horizontal"), e.scale.y = 1 / i.h
    } else {
      var o = i.position * i.w;
      this.setElement(e.element, i.x + o, i.y, this.helperSize, i.h), dom.addclass(
        e.element,
        "tile-helper-horizontal"
      ), dom.remclass(e.element, "tile-helper-vertical"), e.scale.x = 1 / i.w
    }
  }, updateClient: function (e, t) {
    if (e) {
      var i = this.frames[t];
      e.element && dom.display(e.element, !!i), i && (this.setElement(
        e.element,
        i.x,
        i.y,
        i.w,
        i.h
      ), e.resize && e.resize(i.w, i.h), e.setViewport && e.setViewport(i))
    }
  }
}, PointProjector.prototype = {
  clear: function () {
    this.points = []
  }, addPoint: function (e, t) {
    var i = {world: new THREE.Vector3, screen: new THREE.Vector2, local: !!e, visible: !1};
    return t && this.points.push(i), i
  }, remPoint: function (e) {
    var t = this.points.indexOf(e);
    ~t && this.points.splice(t, 1)
  }, viewportToWorld: function (e, t, i) {
    return t || (t = new THREE.Vector3), t.copy(e), t.applyMatrix4(this.inverse), i && t.sub(this.camera.position), t
  }, worldToViewport: function (e, t, i) {
    return t || (t = new THREE.Vector3), t.copy(e), i && t.add(this.camera.position), t.applyMatrix4(this.matrix), t
  }, viewportToScreen: function (e, t) {
    return t || (t = new THREE.Vector2), t.x = (e.x / 2 + .5) * this.width, t.y = (-e.y / 2 + .5) * this.height, t
  }, screenToViewport: function (e, t) {
    return t || (t = new THREE.Vector3), t.x = e.x / this.width * 2 - 1, t.y = -(e.y / this.height * 2 - 1), t.z = -1, t
  }, screenToWorld: function (e, t, i) {
    return this.screenToViewport(e, this.viewport), this.viewportToWorld(this.viewport, t, i)
  }, worldToScreen: function (e, t, i) {
    return this.worldToViewport(e, this.viewport, i), this.viewportToScreen(this.viewport, t)
  }, resize: function (e, t) {
    this.width = e, this.height = t
  }, updateMatrices: function () {
    this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld), this.matrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse
    ), this.inverse.getInverse(this.camera.projectionMatrix), this.inverse.multiplyMatrices(
      this.camera.matrixWorld,
      this.inverse
    )
  }, updatePoint: function (e) {
    this.worldToViewport(e.world, this.viewport, e.local), this.viewportToScreen(
      this.viewport,
      e.screen
    ), e.local ? e.distance = e.world.length() : e.distance = e.world.distanceTo(this.camera.position), e.visible = -1 <= this.viewport.x && this.viewport.x <= 1 && -1 <= this.viewport.y && this.viewport.y <= 1 && -1 <= this.viewport.z && this.viewport.z <= 1
  }, update: function () {
    this.points.forEach(this.updatePoint, this)
  }
}, Imagery.prototype = {
  folders: {thumbs: "images/thumbs/", textures: "images/textures/"},
  types: {alpha: 1, normal: 2, texture: 3, logo: 11, thumb: 12, icon: 21},
  materialOptions: {
    defaults: {factory: THREE.MeshPhongMaterial, makeMap: !0, side: THREE.DoubleSide},
    norcon: {
      makeMap: !1,
      factory: THREE.LineBasicMaterial,
      vertexColors: THREE.VertexColors,
      linewidth: 2,
      visible: !1
    },
    subtract: {visible: !1, transparent: !0, opacity: .5},
    blue: {makeEnv: !0, reflectivity: .25, shininess: 22},
    gold: {makeEnv: !0, makeBump: !0, reflectivity: .8, shininess: 95},
    black: {makeEnv: !0, reflectivity: .3, shininess: 70},
    glass: {makeEnv: !0, transparent: !0, opacity: .9, reflectivity: .8, side: THREE.FrontSide},
    connection: {makeMap: !1, factory: THREE.LineBasicMaterial, transparent: !0, opacity: .5},
    normal: {factory: THREE.MeshNormalMaterial, makeMap: !1},
    wireframe: {factory: THREE.MeshBasicMaterial, wireframe: !0, color: 0}
  },
  textureOptions: {},
  makeTexture: function (e) {
    var t = new THREE.Texture;
    return t.wrapS = THREE.RepeatWrapping, t.wrapT = THREE.RepeatWrapping, t.minFilter = THREE.LinearMipMapLinearFilter, t.magFilter = THREE.LinearFilter, t.anisotropy = 4, t.image = this.pixel.image, f.copy(
      t,
      e
    ), t.needsUpdate = !0, t
  },
  makeMaterial: function (e, t) {
    var i = f.merge(this.materialOptions.defaults, this.materialOptions[e] || this.materialOptions[t], {name: e}),
      n = f.copy({}, this.textureOptions[e] || this.textureOptions[t]);
    i.makeMap && (i.map = this.makeTexture(n)), i.makeAlpha && (i.alphaMap = this.makeTexture(n)), i.makeNormal && (i.normalMap = this.makeTexture(
      n), i.normalMap.image = this.normal.image), i.makeBump && (i.bumpMap = this.makeTexture(n), i.bumpMap.image = this.bump.image), i.makeEnv && (i.envMap = this.skybox);
    var o = i.factory;
    delete i.makeMap, delete i.makeAlpha, delete i.makeNormal, delete i.makeBump, delete i.makeEnv, delete i.factory;
    var s = new o(i);
    return s.persistent = !0, s.implicit = !0, s.needsUpdate = !0, s.obvImplicit = new Observable(s.implicit), s.obvFabric = new Observable, s.obvLoaded = (new Observable).set(
      this,
      function () {
        this.setMaterialProduct(s, this.getLoadedProduct(s))
      }
    ), s
  },
  configureSampleMaterial: function (e) {
    if (e && e.material) if ("subtract" !== e.name) {
      var t = e.material;
      if (-1 === this.sampleMaterials.indexOf(t)) {
        this.sampleMaterials.push(t);
        for (var i = [t.map, t.bumpMap, t.normalMap].filter(Boolean), n = 0; n < i.length; n++) {
          var o = i[n];
          if (o.image) {
            var s = {image: o.image};
            this.tileTexture(s), o.wrapS = THREE.RepeatWrapping, o.wrapT = THREE.RepeatWrapping, o.image = s.image, o.repeat.x *= s.repeatX, o.repeat.y *= s.repeatY
          }
        }
        t.envMap = this.skybox, t.needsUpdate = !0
      }
    } else e.material = this.materials.subtract
  },
  readMaterialLoaded: function () {
    this.materials[m.name], this.usedProducts[m.name]
  },
  addMaterial: function (e, t) {
    var i = this.materials[e] = this.makeMaterial(e, t);
    return Observable.inContext(null, this.addMaterialInContext, this, i), i
  },
  addMaterialInContext: function (e) {
    this.obvMaterialsList.write(this.obvMaterialsList.read().concat(e))
  },
  remMaterialInContext: function (e) {
    this.obvMaterialsList.write(f.adrop(this.obvMaterialsList.read().slice(), e))
  },
  copyMaterial: function (e, t) {
    e && t && (e.implicit ? this.setMaterial(e, null) : this.setMaterial(e, this.usedProducts[t.name]))
  },
  rootMaterial: function (e) {
    var t = this.materials[e];
    if (t) {
      for (; t.parent;) t = t.parent;
      return t.name
    }
  },
  addSubmaterial: function (e) {
    var t = this.materials[e];
    if (t) {
      t.submaterials || (t.submaterials = []);
      var i = this.rootMaterial(e), n = t.name + "-" + ++this.submaterialIndex, o = this.addMaterial(n, i);
      return t.submaterials.push(o), o.parent = t, this.setMaterial(o, this.usedProducts[e]), o
    }
  },
  remSubmaterial: function (e) {
    var t = e instanceof THREE.Material ? e : this.materials[e];
    t && (t.parent && f.adrop(
      t.parent.submaterials,
      t
    ), t.dispose(), delete this.usedProducts[t.name], delete this.materials[t.name], Observable.inContext(
      null,
      this.remMaterialInContext,
      this,
      t
    ))
  },
  setMapImage: function (e, t, i) {
    e && t && (e.image !== t.image && (e.image = t.image, e.needsUpdate = !0), e.repeat.x = t.repeatX || 1, e.repeat.y = t.repeatY || 1, i && (e.repeat.x = 1 / (t.cloneX || 1)))
  },
  setMaterialProduct: function (e, t) {
    if (e && t) {
      e.obvFabric && e.obvFabric.write(t), e.color && e.color.set(t.color || 16777215);
      var i = -1 !== ["outer", "fouter"].indexOf(t.unit);
      if (this.setMapImage(e.map, t.texture || this.pixel, i), this.setMapImage(
        e.bumpMap,
        t.bump || this.bump,
        i
      ), this.setMapImage(e.normalMap, t.normal || this.normal, i), this.setMapImage(
        e.alphaMap,
        t.alpha || this.pixel,
        i
      ), e.submaterials) for (var n = 0; n < e.submaterials.length; n++) {
        var o = e.submaterials[n];
        o.implicit && this.setMaterialProduct(o, t)
      }
    }
  },
  setImplicitProduct: function (e, t) {
    if (t) {
      for (var i = e.parent; i && i.implicit;) i = i.parent;
      e.implicit = !!i && t === this.usedProducts[i.name]
    } else e.implicit = !0;
    e.implicit && (t = null), e.obvImplicit.write(e.implicit), this.usedProducts[e.name] = t;
    var n = e.submaterials;
    if (n) for (var o = 0; o < n.length; o++) {
      var s = n[o];
      this.setImplicitProduct(s, this.usedProducts[s.name])
    }
  },
  isProductLoaded: function (e) {
    return e && (!e.texture || Observable.unwrap(e.texture.loaded)) && (!e.normal || Observable.unwrap(e.normal.loaded)) && (!e.alpha || Observable.unwrap(
      e.alpha.loaded))
  },
  getLoadedProduct: function (e) {
    for (var t = "object" == typeof e ? e : this.materials[e]; t;) {
      var i = this.usedProducts[t.name];
      if (this.isProductLoaded(i)) return i;
      if (!t.parent) return this.baseMaps[t.name];
      t = t.parent
    }
  },
  getUsedProduct: function (e) {
    for (var t = "object" == typeof e ? e : this.materials[e]; t;) {
      var i = this.usedProducts[t.name];
      if (i) return i;
      if (!t.parent) return this.baseMaps[t.name];
      t = t.parent
    }
  },
  setMaterial: function (e, t) {
    var i = "object" == typeof e ? e : this.materials[e];
    i && ("object" != typeof t && (t = this.products[t]), t && !t.id && (t = null), this.setImplicitProduct(
      i,
      t
    ), this.setMaterialProduct(i, this.getLoadedProduct(i)))
  },
  textureColor: function (e, t, i) {
    if (!t || !i) return 0;
    this.buffer.width = t, this.buffer.height = i, this.btx.drawImage(e, 0, 0);
    for (var n = this.btx.getImageData(
      0,
      0,
      t,
      i
    ).data, o = n.length, s = 1 / (t * i), r = 0, a = 0, l = 0, h = 0; h < o; h += 4) r += n[h + 0], a += n[h + 1], l += n[h + 2];
    return r * s << 16 ^ a * s << 8 ^ l * s << 0
  },
  tileTexture: function (e) {
    if (e && e.image) {
      var t = e.image;
      e.width = t.naturalWidth || t.width, e.height = t.naturalHeight || t.height, e.color = this.textureColor(
        t,
        e.width,
        e.height
      );
      var i = 512 / e.height, n = e.height / e.width;
      e.cloneX = 1, e.cloneY = 1, e.repeatX = (e.resolution || 1) * i * n, e.repeatY = (e.resolution || 1) * i;
      var o = !(e.width & e.width - 1), s = !(e.height & e.height - 1);
      if (!o || !s) {
        for (var r = this.fitTileSize(e.width, e.height, 10), a = this.makeCanvas(
          r.spaceX,
          r.spaceY
        ), l = 0; l < r.cloneX; l++) for (var h = 0; h < r.cloneY; h++) a.drawImage(
          t,
          0,
          0,
          r.sourceX,
          r.sourceY,
          l * r.sizeX,
          h * r.sizeY,
          r.sizeX,
          r.sizeY
        );
        e.image = a.canvas, e.width = r.spaceX, e.height = r.spaceY, e.cloneX = r.cloneX, e.cloneY = r.cloneY, e.repeatX /= r.cloneX, e.repeatY /= r.cloneY, this.debugFit(
          r,
          e
        )
      }
    }
  },
  fitTileSize: function (e, t, i) {
    for (var n = {sourceX: e, sourceY: t, score: 1 / 0}, o = 0; o <= i; o++) {
      var s = 1 << o, r = Math.round(s / e), a = (s - e * r) / e;
      if (r) for (var l = 0; l <= i; l++) {
        var h = 1 << l, c = Math.round(h / t), d = (h - t * c) / t, u = Math.abs(a), p = Math.abs(d),
          f = Math.abs(a - d), m = u + p + f / 2 + Math.sqrt(r * c) / 10;
        c && m < n.score && (n.sizeX = s / r, n.sizeY = h / c, n.cloneX = r, n.cloneY = c, n.spaceX = s, n.spaceY = h, n.errorX = a, n.errorY = d, n.error = f, n.score = m)
      }
    }
    return n
  },
  debugFit: function (e, t) {
    var i;
    .4 < e.error ? i = console.error : .4 < Math.abs(e.errorX) || .4 < Math.abs(e.errorY) ? i = console.warn : this.debug && (i = console.log), i && i.call(
      console,
      "tile:",
      e.sourceX + "x" + e.sourceY,
      "->",
      Math.round(e.sizeX) + "x" + Math.round(e.sizeY),
      "(" + e.spaceX + "x" + e.spaceY + ",",
      e.cloneX + "x" + e.cloneY + ")",
      "errors:",
      +e.errorX.toFixed(2),
      "-",
      +e.errorY.toFixed(2),
      "=",
      e.error,
      "\n",
      t.url
    )
  },
  normalColor: function (e, t, i) {
    return "rgb(" + new THREE.Vector3(e, t, i).normalize()
      .multiplyScalar(127)
      .addScalar(127)
      .toArray()
      .map(Math.round) + ")"
  },
  displayImage: function (e, t) {
    this.displayedImage && (dom.remove(this.displayedImage), delete this.displayedImage), this.displayedImage = e, this.displayRoot || (this.displayRoot = this.createDisplayRoot()), e && (e.style.cssFloat = "left", e.style.imageRendering = "pixelated", dom.append(
      this.displayRoot,
      e
    ), t && setTimeout(dom.remove, t, e))
  },
  createDisplayRoot: function () {
    var e = dom.div("display-root", document.body), n = 1;

    function o(e) {
      var t = this.displayedImage;
      if (t) {
        var i = t.naturalWidth || t.width;
        t.style.width = i * e + "px", n = e
      }
    }

    return f.copy(
      e.style,
      {position: "absolute", backgroundColor: "black", border: "1px dashed white", zIndex: 1}
    ), new EventHandler(function () {
      dom.remove(this.displayedImage), delete this.displayedImage, o.call(this, 1)
    }, this).listen("tap", e), new EventHandler(function (e) {
      var t = e.wheelDeltaY || -e.deltaY, i = t / Math.abs(t);
      if (isNaN(i)) return;
      o.call(this, Math.pow(2, Math.ceil(Math.log2(n)) + i))
    }, this).listen("wheel", e), e
  },
  unwrapCubemap3x2: function (e) {
    for (var t = e.height / 2, i = [], n = 0; n < 2; n++) for (var o = 0; o < 3; o++) {
      var s = this.makeCanvas(t, t);
      s.drawImage(e, o * t, n * t, t, t, 0, 0, t, t), i.push(s.canvas)
    }
    var r = [i[2], i[0], i[4], i[3], i[5], i[1]];
    this.skybox.image = r, this.skybox.needsUpdate = !0
  },
  makeCanvas: function (e, t) {
    var i = document.createElement("canvas");
    return i.width = e, i.height = t, i.getContext("2d")
  },
  makePixel: function (e) {
    var t = this.makeCanvas(1, 1);
    return t.fillStyle = e, t.fillRect(0, 0, 1, 1), {image: t.canvas}
  },
  makePattern: function (e, t, i, n) {
    var o = this.makeCanvas(t, i);
    "function" == typeof n && n.apply(this, [o, t, i].concat([].slice.call(arguments, 4)));
    var s = 512 * e / i;
    return {loaded: !0, width: t, height: i, repeatX: s, repeatY: s, image: o.canvas}
  },
  drawDash: function (e, t, i, n, o, s) {
    e.fillStyle = n, e.fillRect(0, 0, t, i), e.lineWidth = o, e.strokeStyle = s, e.beginPath(), e.moveTo(
      2 * t,
      -i
    ), e.lineTo(-t, 2 * i), e.moveTo(2 * t, 0), e.lineTo(0, 2 * i), e.moveTo(t, -i), e.lineTo(-t, i), e.stroke()
  },
  drawGrid: function (e, t, i, n, o, s) {
    e.fillStyle = n, e.fillRect(0, 0, t, i), e.fillStyle = s, e.fillRect(0, 0, t, o), e.fillRect(0, 0, o, i)
  },
  drawStripe: function (e, t, i, n, o, s, r) {
    e.fillStyle = n, e.fillRect(0, 0, t, i), e.fillStyle = s, e.fillRect(0, 0, r ? o : t, r ? i : o)
  },
  drawChecker: function (e, t, i, n, o) {
    var s = t >> 1, r = i >> 1;
    e.fillStyle = n || "white", e.fillRect(0, 0, t, i), e.fillStyle = o || "black", e.fillRect(
      0,
      0,
      s,
      r
    ), e.fillRect(s, r, s, r)
  },
  drawCloud: function (e, t, i, n, o) {
    this.drawRandom(e, t, i, n, o), e.save(), e.globalAlpha = .4, e.scale(4, 4), e.drawImage(e.canvas, 0, 0), e.scale(
      4,
      4
    ), e.drawImage(e.canvas, 0, 0), e.restore()
  },
  drawRandom: function (e, t, i, n, o) {
    for (var s = e.getImageData(
      0,
      0,
      t,
      i
    ), r = s.data, a = 255 * n | 0, l = 255 * o | 0, h = 0; h < r.length; h += 4) r[h + 0] = r[h + 1] = r[h + 2] = f.rand(
      a) + l, r[h + 3] = 255;
    e.putImageData(s, 0, 0)
  }
}, Sampler.prototype = {
  folder: "", setImagery: function (e) {
    this.imagery = e
  }, addSample: function (e) {
    var t = new Sample(e, this), i = f.apick(this.samples, "src", t.src);
    return i && (f.adrop(this.samples, i), console.warn("Overwrite sample with src:", t.src)), this.samples.push(t), t
  }, remSample: function (e) {
    var t = f.apick(this.samples, "src", e);
    t && f.adrop(this.samples, t)
  }, getSample: function (e) {
    var t = f.apick(this.samples, "src", e);
    return t || (t = this.addSample({
                                      src: e,
                                      name: (e + "").replace(/\.[^\.]*$/, "").split("/").pop(),
                                      format: (e + "").replace(/^.*\.([^.]+)$/, "$1").toLowerCase()
                                    })), t
  }, prepare: function (e) {
    if (!e) return Defer.complete(!1, "no source");
    if (TSerial.isComplex(e)) return this.prepareComplex(e);
    var t = this.getSample(e);
    return t.defer || (t.defer = t.object ? Defer.complete(!0, t) : this.loadSample(t)), t.defer
  }, prepareComplex: function (e) {
    return TSerial.isComplex(e) ? Defer.all(e.types.map(this.prepare, this)).then(function () {
      return e
    }, this) : Defer.complete(!0, null)
  }, loadSample: function (t) {
    var e = this.folder + t.src, i = new Defer(function (e) {
      return t.setData(e), t
    }, function (e) {
      console.error("Sample load error", t.src, e)
    }, this);
    switch (t.format) {
      case"obj":
        (new Loader).obj(e).push(i);
        break;
      case"fbx":
        (new THREE.FBXLoader).load(e, i.willResolve(), i.willProgress(), i.willReject());
        break;
      default:
      case"json":
        (new Loader).json(e).then(function (e) {
          if (TSerial.isComplex(e)) return this.prepareComplex(e);
          var t = new THREE.ObjectLoader, i = new Defer;
          return t.parse(e, i.willResolve()), i
        }, this).push(i)
    }
    return i
  }, checkCirculars: function (e, t) {
    for (var i = [], n = [e]; n.length;) {
      var o = n.shift();
      if (-1 !== i.indexOf(o)) return !0;
      var s = this.getSample(e);
      s.data ? TSerial.isComplex(s.data) && (n = f.sor(n, s.data.types)) : console.error(
        "checkCirculars cant prove not loaded samples"), i.push(o)
    }
    return !1
  }, readFile: function (t) {
    if (!t) return Defer.complete(!0, null);
    var e = this.getSample(t.name), i = new FileReader, n = new Defer, o = new Defer(e.setData, e);
    switch (dom.on("load", i, function () {
      n.resolve(i.result)
    }), e.format) {
      case"obj":
        n.then(function (e) {
          return Loader.Resource.types.obj.prepare(e)
        }).push(o), i.readAsText(t);
        break;
      case"fbx":
        n.then(function (e) {
          return (new THREE.FBXLoader).parse(e, t.name)
        }).push(o), i.readAsArrayBuffer(t);
        break;
      default:
      case"json":
        n.then(JSON.parse).then(function (e) {
          TSerial.isComplex(e) ? o.resolve(e) : (new THREE.ObjectLoader).parse(e, o.willResolve())
        }), i.readAsText(t)
    }
    return o.then(function () {
      return e
    })
  }
}, Sample.prototype = {
  src: null, name: null, format: null, data: null, object: null, progress: 0, traverse: function (e, t, i, n, o, s) {
    if (e && (null == s && (s = 0), t.call(
      i || this,
      e,
      n,
      s
    ), e.children)) for (var r = e.children.length, a = o ? 0 : r - 1; o ? a < r : 0 <= a; o ? a++ : a--) Sample.prototype.traverse(
      e.children[a],
      t,
      i,
      n,
      o,
      s + 1
    )
  }, isLoaded: function () {
    return this.complex ? this.complex.types.every(function (e) {
      return this.parentSampler.getSample(e).isLoaded()
    }, this) : !!this.data
  }, setData: function (e) {
    this.data = e, this.joints = [], this.meshes = [], TSerial.isComplex(e) ? this.setComplex(e) : this.setObject(e)
  }, setComplex: function (e) {
    this.complex = e, this.node = TSerial.constructJSON(
      e,
      this.parentSampler,
      !1
    ), this.object = this.node.object, this.object.updateMatrixWorld(), this.node.getDimensions(this.dim), this.node.traverse(
      function (e) {
        this.meshes = this.meshes.concat(e.meshes)
      },
      this
    )
  }, setObject: function (e) {
    var t = new THREE.Box3;
    this.dim.box.makeEmpty(), this.object = e, this.object.updateMatrixWorld(), this.traverse(
      this.object,
      this.configureObject,
      this,
      t
    ), this.dim.box.getCenter(this.dim.center), this.dim.box.getSize(this.dim.size), this.dim.length = this.dim.size.length()
  }, configureObject: function (e, t) {
    var i = this.parentSampler.imagery;
    0 === e.name.indexOf(":") ? this.joints.push(new SampleJoint(
      e.name,
      e.matrixWorld
    )) : "subtract" === e.name || e.geometry && (i && i.configureSampleMaterial(e), e.geometry.boundingBox || e.geometry.computeBoundingBox(), t.copy(
      e.geometry.boundingBox).applyMatrix4(e.matrixWorld), this.dim.box.union(t), this.meshes.push(e))
  }, canReplace: function (e) {
    var t = this.joints.slice();
    e:for (var i = 0; i < e.length; i++) {
      for (var n = e[i], o = t.length - 1; 0 <= o; o--) {
        var s = t[o];
        if (n.canConnect(s)) {
          t.splice(o, 1);
          continue e
        }
      }
      return !1
    }
    return !0
  }
}, SampleJoint.prototype = {
  setName: function (e, t) {
    this.name = e, this.parts = this.name.slice(1)
      .split("_"), this.id = this.parts[0], this.param = this.parts[1], this.extra = this.parts[2], this.depth = this.parts[3]
  },
  setMatrix: function (e) {
    this.matrix.copy(e), this.point.setFromMatrixPosition(this.matrix), this.normal.set(1, 0, 0)
      .applyMatrix4(this.matrix)
      .sub(this.point)
      .normalize(), this.up.set(0, 1, 0).applyMatrix4(this.matrix).sub(this.point).normalize()
  },
  clone: function () {
    return new SampleJoint(this.name, this.matrix)
  },
  paramPairsAllow: [["f", "m"], ["u", "u"], ["u", "f"], ["u", "m"], ["fp", "mp"], ["female", "male"], ["uniform", "uniform"], ["uniform", "female"], ["uniform", "male"], ["in", "out"], ["inner", "outer"], ["internal", "external"], ["l", "r"], ["left", "right"]],
  paramPairsEqual: function (e) {
    return f.seq(e, this)
  },
  canConnect: function (e) {
    if (this.id !== e.id) return !1;
    var t = [this.param.toLowerCase(), e.param.toLowerCase()];
    return this.paramPairsAllow.some(this.paramPairsEqual, t)
  },
  canConnectList: function (e) {
    return e.filter(this.canConnect, this)
  },
  makeDebugTip: function () {
    var e = new THREE.BufferGeometry, t = new Float32Array(18), i = new Float32Array(18), n = new THREE.Vector3,
      o = new THREE.Color;
    n.set(0, 2, 0).toArray(t, 0), n.set(5, 0, 0).toArray(t, 3), n.set(0, 0, -1).toArray(t, 6), n.set(0, 0, 1).toArray(
      t,
      9
    ), n.set(0, 2, 0).toArray(t, 12), n.set(5, 0, 0).toArray(t, 15), o.set(65280).toArray(i, 0), o.set(16711680)
      .toArray(i, 3), o.set(0).toArray(i, 6), o.set(0).toArray(i, 9), o.set(65280).toArray(i, 12), o.set(16711680)
      .toArray(i, 15), e.addAttribute("position", new THREE.BufferAttribute(t, 3)), e.addAttribute(
      "color",
      new THREE.BufferAttribute(
        i,
        3
      )
    );
    var s = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors, side: THREE.DoubleSide}),
      r = new THREE.Mesh(e, s);
    return r.drawMode = THREE.TriangleStripDrawMode, r
  },
  makeDebugLine: function () {
    var e = new THREE.Line(new THREE.Geometry);
    return e.name = "debug-connection-normal", e.geometry.vertices.push(
      new THREE.Vector3,
      this.normal.clone().setLength(20)
    ), e.geometry.colors.push(new THREE.Color(0, 0, 0), new THREE.Color(1, 0, 0)), e.position.copy(this.point), e
  }
},
  window.View3 = f.unit({
                    unitName: "View3",
                    ename: "view-3",
                    enableRender: !0,
                    enableWireframe: !1,
                    enableRaycast: !0,
                    enableStencil: !0,
                    enableStencilAA: !1,
                    enableStencilBloom: !0,
                    enableSSAO: !1,
                    enableOnlyAO: !1,
                    enableAAAO: !1,
                    enableBlurAO: !0,
                    enableBloomAO: !0,
                    halfSizeOcclusion: !0,
                    debugDepth: !1,
                    renderTarget: null,
                    clearColor: "#f4f4f4",
                    focusThetaMin: .5,
                    focusThetaMax: 2.2,
                    focusDistance: 1,
                    focusDuration: 500,
                    directAngle: .28,
                    directK: -.5,
                    directLift: .5,
                    stencilRaycastMask: -1,
                    stencilNone: {value: 1, params: {drawAlpha: 0}},
                    stencilLit: {
                      value: 2,
                      params: {
                        drawColor: "#00f0ff",
                        drawAlpha: 1,
                        lineAlpha: .11,
                        lineAngle: 0,
                        edgeAlpha: .8,
                        fillAlpha: .2
                      }
                    },
                    stencilHover: {
                      value: 4,
                      params: {
                        drawColor: "#00ffb3",
                        drawAlpha: 1,
                        lineAlpha: .2,
                        lineAngle: 0,
                        edgeAlpha: .8,
                        fillAlpha: .11
                      }
                    },
                    stencilSelect: {
                      value: 8,
                      params: {
                        drawColor: "#00FF77",
                        drawAlpha: 1,
                        lineAlpha: .4,
                        lineAngle: 0,
                        edgeAlpha: .9,
                        fillAlpha: .2
                      }
                    },
                    init: function (e) {
                      for (var t in e) this[t] = e[t];
                      this.element = dom.div(
                        this.ename,
                        this.eroot
                      ), this.events = new EventEmitter, this.scene = new THREE.Scene, this.ambLight = new THREE.AmbientLight(
                        16777215,
                        .7
                      ), this.dirLight = new THREE.DirectionalLight(
                        16777215,
                        .5
                      ), this.camera = new THREE.PerspectiveCamera(30), this.orbit = new THREE.OrbitControls(
                        this.camera,
                        this.element
                      ), this.raycaster = new THREE.Raycaster, this.root = new THREE.Object3D, this.lastcam = new THREE.Matrix4, this.elementOffset = {
                        x: 0,
                        y: 0
                      }, this.highlightedNodes = [], this.globalConnections = [], this.animatedConnections = [], this.scene.autoUpdate = !1, this.mouse = new THREE.Vector2(
                        1 / 0,
                        1 / 0
                      ), this.mouse2 = new THREE.Vector3, this.mouse3 = new THREE.Vector3, this.updatePointer(), this.renderer || (this.renderer = new THREE.WebGLRenderer(
                        {antialias: !0}), this.renderer.autoClear = !1, this.renderer.clear(), dom.append(
                        this.element,
                        this.renderer.domElement
                      )), this.srScene = new THREE.Scene, this.srPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(
                        2,
                        2
                      )), this.srCamera = new THREE.OrthographicCamera(
                        -1,
                        1,
                        1,
                        -1,
                        -1,
                        1
                      ), this.srCamera.updateProjectionMatrix(), this.srScene.add(this.srPlane), this.smCopy = this.makeShader(
                        THREE.CopyShader), this.smFill = this.makeShader(THREE.FillShader), this.smOverlay = this.makeShader(
                        THREE.OverlayShader), this.smHBlur = this.makeShader(THREE.HorizontalBlurShader), this.smVBlur = this.makeShader(
                        THREE.VerticalBlurShader), this.smACAA = this.makeShader(THREE.ACAAShader), this.smSSAO = this.makeShader(
                        THREE.SSAOShader), this.smDepth = this.makeShader(THREE.DepthShader), this.smDepth.side = THREE.DoubleSide, this.clearButton = dom.div(
                        "view-clear out-02 hand",
                        this.element
                      ), Atlas.set(this.clearButton, "i-cross", "absmid"), new EventHandler(this.events.will(
                        "view_clear")).listen("tap", this.clearButton), this.transform = new THREE.TransformControls(
                        this.camera,
                        this.element
                      ), this.transform.addEventListener(
                        "change",
                        f.binds(this.onTransformControlsChange, this)
                      ), this.projector = new PointProjector(this.camera), this.markers = new UI.MarkerSystem({
                                                                                                                eroot: this.element,
                                                                                                                projector: this.projector
                                                                                                              }), this.markers.events.when(
                        {
                          marker_enter: this.onMarkerEnter,
                          marker_leave: this.onMarkerLeave,
                          marker_tap: this.onMarkerTap
                        },
                        this
                      ), this.markers.markersVisible.events.on("change", function (e) {
                        this.needsRedraw = !0
                      }, this), this.connectionLine = new THREE.LineSegments(
                        new THREE.BufferGeometry,
                        this.imagery.materials.connection
                      ), this.connectionLine.frustumCulled = !1, this.cameraTween = new TWEEN.Tween({
                                                                                                      x: 0,
                                                                                                      y: 0,
                                                                                                      z: 0
                                                                                                    }).easing(TWEEN.Easing.Cubic.Out), this.orbitTween = new TWEEN.Tween(
                        {x: 0, y: 0, z: 0}).easing(TWEEN.Easing.Cubic.Out), this.dirLight.position.set(
                        -100,
                        100,
                        100
                      ), this.dirLight.target.position.set(0, 0, 0), this.camera.position.set(
                        1,
                        1,
                        1
                      ), this.explodeDim = new TDimensions, this.assembleDim = new TDimensions, this.currentDim = new TDimensions, this.focusOnTree(
                        0), this.scene.add(this.ambLight), this.scene.add(this.dirLight), this.scene.add(this.root), this.scene.add(
                        this.connectionLine), new EventHandler(this.onMouseMove, this).listen(
                        "mousemove",
                        this.element
                      ), new EventHandler(this.onMouseOut, this).listen(
                        "mouseout",
                        this.element
                      ), new EventHandler(this.onTap, this).listen("tap", this.element)
                    },
                    makeShader: function (e) {
                      if (e) return new THREE.ShaderMaterial({
                                                               vertexShader: e.vertexShader,
                                                               fragmentShader: e.fragmentShader,
                                                               uniforms: THREE.UniformsUtils.clone(e.uniforms)
                                                             })
                    },
                    updateLights: function () {
                      var e = this.dirLight.position;
                      e.subVectors(this.camera.position, this.orbit.target);
                      var t = Math.atan2(e.z, e.x), i = e.length();
                      e.x = Math.cos(t - this.directAngle * Math.PI), e.z = Math.sin(t - this.directAngle * Math.PI), e.y = e.y / i * this.directK + this.directLift, this.dirLight.updateMatrixWorld()
                    },
                    orbitTo: function (e, t, i, n, o, s) {
                      if (!kbd.state.SHIFT) {
                        var r = this.camera.position, a = this.orbit.target;
                        e || (e = a);
                        var l = new THREE.Vector3, h = new THREE.Vector3, c = new THREE.Matrix4, d = r.distanceTo(a),
                          u = this.orbit.minDistance, p = this.orbit.maxDistance, m = f.clamp(isNaN(i) ? d : i, u, p);
                        l.subVectors(r, a), l.lengthSq() || l.set(1, 1, 1), l.setLength(m);
                        var v = Math.acos(l.y / m), g = Math.max(this.focusThetaMin, this.orbit.minPolarAngle),
                          b = Math.min(this.focusThetaMax, this.orbit.maxPolarAngle),
                          w = f.clamp(null == n ? v : n, g, b);
                        if (this.orbit.orthoMode && (w = v), 1e-9 < Math.abs(w - v)) {
                          var y = h;
                          y.set(-l.z, 0, l.x).normalize(), c.makeRotationAxis(y, v - w), l.applyMatrix4(c)
                        }
                        h.addVectors(
                          e,
                          l
                        ), this.orbitTween.stop(), this.cameraTween.stop(), t ? (null == s && (s = TWEEN.Easing.Quadratic.Out), 1e-9 < a.distanceToSquared(
                          e) && this.orbitTween.from(a)
                          .to(e, t)
                          .easing(s)
                          .start(), 1e-9 < r.distanceToSquared(h) && this.cameraTween.from(r)
                          .to(h, t)
                          .easing(s)
                          .start()) : (null != o ? (r.lerp(h, o), a.lerp(
                          e,
                          o
                        )) : (r.copy(h), a.copy(e)), this.orbit.update())
                      }
                    },
                    zoom: function (e, t) {
                      this.orbit.dollyIn(e), this.orbit.update(), this.needsRedraw = !0
                    },
                    focusOnTree: function (e, t, i, n, o, s) {
                      this.tree || (e = 0), null == e && (e = this.focusDuration), null == t && (t = this.currentDim), null == i && (i = 4 / 3);
                      var r = this.getFitDistance(t.size, i, i, o);
                      this.orbitTo(t.center, e, r, null, n, s)
                    },
                    focusOnNode: function (e, t) {
                      isNaN(t) && (t = this.focusDuration), this.orbitTo(e.local.center, t)
                    },
                    getFitDistance: function (e, t, i, n, o) {
                      null == e && (e = this.currentDim.size), null == t && (t = 1.5), null == i && (i = 1.5), null == n && (n = this.camera.aspect), null == o && (o = this.camera.fov);
                      var s = Math.max(e.x, e.y, e.z) / 2, r = o * f.xrad / 2, a = s * (t || 1) / Math.tan(r * n),
                        l = s * (i || 1) / Math.tan(r);
                      return isFinite(n) ? Math.max(a, l) : l
                    },
                    lookAt: function () {
                    },
                    setTree: function (e) {
                      this.selectNode(null), this.hoverNode(null), this.tree && (this.root.remove(this.tree.object), this.tree.events.off(
                        null,
                        null,
                        this
                      )), this.tree = e, this.scene.updateMatrixWorld(!0), this.tree && (this.root.add(this.tree.object), this.tree.traverse(
                        this.updateNodeStencil,
                        this
                      ), this.tree.events.on(
                        "animate_start",
                        this.onConnectStart,
                        this
                      )), this.animatedConnections.forEach(
                        this.onConnectEnd,
                        this
                      ), this.updateTreeSize(this.explodeDim, !0, 0), this.updateTreeSize(
                        this.assembleDim,
                        !0,
                        1
                      ), this.updateTreeSize(
                        this.currentDim,
                        !0,
                        null
                      ), this.updateProjection(), this.updateConnectionTree(), this.focusOnTree(), this.needsRetrace = !0, this.needsRedraw = !0
                    },
                    onConnectStart: function (e) {
                      -1 === this.animatedConnections.indexOf(e) && (this.animatedConnections.push(e), e.events.on(
                        "animate_end",
                        this.onConnectEnd,
                        this
                      ))
                    },
                    onConnectEnd: function (e) {
                      var t = this.animatedConnections.indexOf(e);
                      -1 !== t && (e.events.off(null, null, this), this.animatedConnections.splice(
                        t,
                        1
                      ), this.animatedConnectionsEnd = !0)
                    },
                    updateTreeSize: function (e, t, i) {
                      this.tree ? (t && this.tree.setConnectedState(i), this.tree.getDimensions(e)) : (e.box.makeEmpty(), e.center.set(
                        0,
                        0,
                        0
                      ), e.mass = 0, e.size.set(1, 1, 1).normalize(), e.length = 1, e.sphere.set(e.center, e.length))
                    },
                    updateConnectionTree: function () {
                      var e = this.markers.markers.slice();
                      this.globalConnections = [], this.tree && this.tree.traverseConnections(
                        this.updateConnection,
                        this,
                        e
                      );
                      for (var t = 0; t < e.length; t++) this.markers.removeMarker(e[t]);
                      var i = this.connectionLine.geometry, n = 3 * this.globalConnections.length * 2;
                      i.attributes.position && i.attributes.position.array.length === n || (i.removeAttribute("position"), i.addAttribute(
                        "position",
                        new THREE.BufferAttribute(new Float32Array(n), 3)
                      )), this.updateConnectionLine(this.globalConnections)
                    },
                    updateConnectionLine: function (e) {
                      var t = this.connectionLine.geometry.attributes.position;
                      if (t) {
                        for (var i = new THREE.Vector3, n = 0; n < e.length; n++) {
                          var o = e[n];
                          if (o.connected && o.master) {
                            var s = 2 * o.viewGlobalIndex * 3, r = o.node.object.matrixWorld, a = o.object.position,
                              l = o.connected.object.position;
                            i.copy(a).applyMatrix4(r).toArray(t.array, s + 0), i.addVectors(a, l)
                              .applyMatrix4(r)
                              .toArray(t.array, s + 3)
                          }
                        }
                        t.needsUpdate = !0
                      }
                    },
                    updateConnection: function (e, t) {
                      if (e.marker) {
                        this.markers.addMarker(e.marker);
                        var i = t.indexOf(e.marker);
                        -1 !== i && t.splice(i, 1)
                      }
                      e.animating && this.onConnectStart(e), e.connected && e.master && (e.viewGlobalIndex = this.globalConnections.length, this.globalConnections.push(
                        e))
                    },
                    updateProjection: function () {
                      var o = new THREE.Vector3, s = new THREE.Vector3;
                      return function () {
                        this.camera.aspect = this.width / this.height, isFinite(this.camera.aspect) || (this.camera.aspect = 1), o.subVectors(
                          this.orbit.target,
                          this.camera.position
                        ), s.subVectors(this.currentDim.sphere.center, this.camera.position);
                        var e = s.dot(o.normalize()), t = this.currentDim.sphere.radius, i = this.currentDim.length,
                          n = this.tree ? this.tree.local.length : 1;
                        this.camera.near = Math.max(e - t, .05 * n), this.camera.far = Math.max(
                          e + t,
                          i
                        ), this.camera.updateProjectionMatrix(), this.smSSAO && (this.smSSAO.uniforms.cameraNear.value = this.camera.near, this.smSSAO.uniforms.cameraFar.value = this.camera.far), this.projector.updateMatrices()
                      }
                    }(),
                    onTransformControlsChange: function () {
                      var e = this.transformConnection;
                      e && (e.updateControl(), this.updateConnectionTree()), this.needsRedraw = !0
                    },
                    onKey: function (e) {
                      if (e.ctrlKey || e.shiftKey || e.altKey) ; else if (kbd.down && kbd.changed) switch (kbd.key) {
                        case"1":
                          return this.transform.setMode("translate");
                        case"2":
                          return this.transform.setMode("rotate");
                        case"3":
                          return this.transform.setMode("scale");
                        case"q":
                          return this.transform.setSpace("local");
                        case"w":
                          return this.transform.setSpace("world");
                        case"x":
                          return this.debug = !this.debug, this.enableWireframe = this.debug, this.litNode(
                            this.tree,
                            this.debug
                          ), this.needsRedraw = !0, dom.togclass(
                            this.markers.element,
                            "debug",
                            this.debug
                          ), this.markers.debug = this.debug, void this.markers.update(!0);
                        case"s":
                          return this.verbose = !this.verbose, this.markers.verbose = this.verbose, void this.markers.update(
                            !0);
                        case"z":
                          return this.enableRender = !this.enableRender, void (this.needsRedraw = !0);
                        case"c":
                          return void this.focusOnTree()
                      }
                    },
                    setViewport: function (e) {
                      this.viewport = e, this.onResize()
                    },
                    updateConnectionType: function (e, t) {
                      console.log(e.marker)
                    },
                    setConnectionTypes: function (e) {
                      this.tree && this.tree.traverseConnections(this.updateConnectionType, this, e)
                    },
                    updateMeshStencil: function (e, t) {
                      e.stencilValue = t
                    },
                    updateNodeStencil: function (e) {
                      for (var t = e.selected ? this.stencilSelect.value : e.hovered ? this.stencilHover.value : e.lit ? this.stencilLit.value : this.stencilNone.value, i = 0; i < e.meshes.length; i++) e.meshes[i].stencilValue = t
                    },
                    selectConnection: function (e) {
                      (!e || e.inactive.value || e.connected) && (e = null);
                      var t = this.selectedConnection;
                      t !== e && (t && (t.selected = !1, t.marker.updateState(), this.selectNode(null)), (this.selectedConnection = e) && (e.selected = !0, e.marker.updateState(), this.selectNode(
                        e.node)), this.events.emit("connection_select", e))
                    },
                    selectNode: function (e) {
                      var t = this.nodeSelected;
                      e !== t && (t && (t.selected = !1, this.updateNodeStencil(t)), (this.nodeSelected = e) && (e.selected = !0, this.updateNodeStencil(
                        e)), this.events.emit("node_select", [e, t]), this.needsRedraw = !0)
                    },
                    hoverNode: function (e) {
                      var t = this.nodeHovered;
                      e !== t && (t && (t.hovered = !1, this.updateNodeStencil(t)), (this.nodeHovered = e) && (e.hovered = !0, this.updateNodeStencil(
                        e)), dom.togclass(this.element, "hand", !!e), this.events.emit(
                        "node_hover",
                        [e, t]
                      ), this.needsRedraw = !0)
                    },
                    litNode: function (e, t) {
                      if (e) {
                        e.lit = t;
                        var i = this.highlightedNodes.indexOf(e);
                        t ? -1 === i && this.highlightedNodes.push(e) : -1 !== i && this.highlightedNodes.splice(
                          i,
                          1
                        ), this.updateNodeStencil(e), this.needsRedraw = !0
                      }
                    },
                    litNodeList: function (e, t) {
                      if (e) for (var i = e.length - 1; 0 <= i; i--) this.litNode(e[i], t)
                    },
                    updatePointer: function (e) {
                      this.fpvEnabled ? (this.mouse.x = this.width / 2, this.mouse.y = this.height / 2, this.mouse2.x = 0, this.mouse2.y = 0) : (e && (this.mouse.x = e.pageX - this.elementOffset.x, this.mouse.y = e.pageY - this.elementOffset.y), this.mouse2.x = this.mouse.x / this.width * 2 - 1, this.mouse2.y = -this.mouse.y / this.height * 2 + 1), this.mouse2.z = -1
                    },
                    retrace: function () {
                      this.projector.viewportToWorld(
                        this.mouse2,
                        this.mouse3,
                        !0
                      ), this.raycaster.setFromCamera(this.mouse2, this.camera);
                      for (var e = this.raycaster.intersectObject(this.tree.object, !0), t = 0; t < e.length; t++) {
                        var i = e[t].object;
                        if (i.stencilValue & this.stencilRaycastMask) return void this.hoverNode(i.parentNode)
                      }
                      this.hoverNode(null)
                    },
                    onMouseMove: function (e) {
                      this.updatePointer(e), this.needsRetrace = !0
                    },
                    onMouseOut: function (e) {
                      this.mouse.x = 1 / 0, this.mouse.y = 1 / 0, this.updatePointer(), this.needsRetrace = !0
                    },
                    onTap: function (e) {
                      e.target === this.element && (this.transformConnection ? (this.transformConnection.detachControl(), this.transformConnection = null, this.updateConnectionTree(), this.needsRedraw = !0) : this.selectConnection(
                        null), this.selectNode(this.nodeHovered))
                    },
                    onMarkerEnter: function (e) {
                      this.hoverNode(e && e.connection && e.connection.node || null)
                    },
                    onMarkerLeave: function (e) {
                      this.hoverNode(null)
                    },
                    onMarkerTap: function (e) {
                      var t = e && e.connection;
                      t && (kbd.state.CTRL ? (this.transformConnection = t, this.transformConnection.attachControl(this.transform), this.needsRedraw = !0) : this.selectConnection(
                        t))
                    },
                    resizeRenderTargets: function (e, t) {
                      var i = e, n = t, o = i, s = n;
                      this.halfSizeOcclusion && (o = i >> 1, s = n >> 1), this.fullW === i && this.fullH === n || (this.fullW = i, this.fullH = n, this.rtDepthStencil = new THREE.WebGLRenderTarget(
                        this.fullW,
                        this.fullH,
                        {minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat}
                      ), this.rtB1 = new THREE.WebGLRenderTarget(
                        this.fullW,
                        this.fullH,
                        {
                          minFilter: THREE.LinearFilter,
                          magFilter: THREE.LinearFilter,
                          format: THREE.RGBAFormat
                        }
                      ), this.rtB2 = this.rtB1.clone()), this.halfW === o && this.halfH === s || (this.halfW = o, this.halfH = s, this.rt1 = new THREE.WebGLRenderTarget(
                        this.halfW,
                        this.halfH,
                        {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat}
                      ), this.rt2 = this.rt1.clone())
                    },
                    onResize: function () {
                      this.elementOffset = dom.offset(this.element), this.setSize(
                        this.element.offsetWidth || 1,
                        this.element.offsetHeight || 1
                      )
                    },
                    setSize: function (e, t) {
                      this.width === e && this.height === t || (this.width = e, this.height = t, this.projector.resize(
                        this.width,
                        this.height
                      ), this.viewport || (this.renderTarget || this.renderer.setSize(
                        this.width,
                        this.height
                      ), this.resizeRenderTargets(
                        this.width,
                        this.height
                      )), this.updateProjection(), this.needsRetrace = !0, this.needsRedraw = !0)
                    },
                    updateViewportSize: function () {
                      var e = this.viewport ? this.viewport.w : this.width,
                        t = this.viewport ? this.viewport.h : this.height;
                      this.orbit.setSize(e, t)
                    },
                    draw: function () {
                      var t, i, e = this.renderer.context, o = this.renderer, r = this.srPlane, n = this.srScene,
                        s = this.srCamera;

                      function a() {
                        var e = i;
                        i = t, t = e
                      }

                      function l(e, t, i) {
                        t || (t = n), i || (i = s), o.render(t, i, e)
                      }

                      function h(e, t, i, n) {
                        e ? o.clearTarget(e, t, i, n) : o.clear(t, i, n)
                      }

                      function c(e, t, i) {
                        for (var n in i) {
                          var o = e.uniforms[n];
                          if (o) {
                            var s = i[n];
                            o.value instanceof THREE.Color ? o.value.set(s) : o.value = s
                          }
                        }
                        t && (e.uniforms.tDiffuse.value = t.texture), r.material = e
                      }

                      var d = this.viewport;
                      d ? (o.setViewport(d.x, d.y, d.w, d.h), o.setScissor(
                        d.x,
                        d.y,
                        d.w,
                        d.h
                      ), o.setScissorTest(!0)) : o.setScissorTest(!1), this.renderer.setClearColor(
                        this.clearColor,
                        1
                      ), h(this.renderTarget), e.enable(e.DEPTH_TEST), this.enableRender && (this.root.visible = !0, this.renderer.stencilWrite = !1, l(
                        this.renderTarget,
                        this.scene,
                        this.camera
                      )), this.enableWireframe && (this.scene.overrideMaterial = this.imagery.materials.wireframe, this.connectionLine.visible = !1, l(
                        this.renderTarget,
                        this.scene,
                        this.camera
                      ), this.connectionLine.visible = !0, this.scene.overrideMaterial = null);
                      var u = null;
                      if (this.enableStencil && this.smOverlay) {
                        u = [];
                        this.highlightedNodes.length && u.push(this.stencilLit), this.nodeHovered && u.push(this.stencilHover), this.nodeSelected && u.push(
                          this.stencilSelect), 0 === u.length && (u = null)
                      }
                      if ((this.enableSSAO || u) && this.smDepth) {
                        var p = this.debugDepth ? this.renderTarget : this.rtDepthStencil;
                        e.enable(e.STENCIL_TEST), e.stencilMask(255), e.stencilFunc(
                          e.ALWAYS,
                          0,
                          255
                        ), e.stencilOp(
                          e.KEEP,
                          e.KEEP,
                          e.REPLACE
                        ), this.renderer.stencilWrite = !0, this.scene.overrideMaterial = this.smDepth, this.renderer.setClearColor(
                          16777215,
                          1
                        ), h(p), l(
                          p,
                          this.scene,
                          this.camera
                        ), this.scene.overrideMaterial = null, this.renderer.stencilWrite = !1, e.disable(e.STENCIL_TEST)
                      }
                      if (e.disable(e.DEPTH_TEST), !this.debugDepth && (t = this.rt1, i = this.rt2, this.enableSSAO && this.smSSAO && !this.debugStencil && (this.enableOnlyAO && (c(
                        this.smFill,
                        null,
                        {color: 16777215}
                      ), l(this.renderTarget)), h(i), c(
                        this.smSSAO,
                        null,
                        {tDepth: this.rtDepthStencil.texture}
                      ), l(i), this.enableAAAO && this.smACAA && (c(
                        this.smACAA,
                        i,
                        {width: this.halfW, height: this.halfH}
                      ), l(t), a()), this.enableBlurAO && this.smVBlur && this.smHBlur && (c(
                        this.smVBlur,
                        i,
                        {height: this.halfH}
                      ), l(t), c(this.smHBlur, t, {width: this.halfW}), e.enable(e.BLEND), e.blendFunc(
                        e.SRC_ALPHA,
                        e.ONE_MINUS_SRC_ALPHA
                      ), this.enableBloomAO ? l(this.renderTarget) : l(i), e.disable(e.BLEND)), e.enable(e.BLEND), e.blendFunc(
                        e.SRC_ALPHA,
                        e.ONE_MINUS_SRC_ALPHA
                      ), c(
                        this.smCopy,
                        i
                      ), l(this.renderTarget), e.disable(e.BLEND)), t = this.rtB1, i = this.rtB2, u)) {
                        this.renderer.setClearColor(0, 0), h(i), h(t), h(
                          this.rtDepthStencil,
                          !0,
                          !0,
                          !1
                        ), e.enable(e.STENCIL_TEST), e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
                        for (var f = 0; f < u.length; f++) {
                          var m = u[f];
                          e.stencilFunc(e.EQUAL, m.value, 255), c(
                            this.smFill,
                            null,
                            {color: m.params.drawColor, alpha: m.params.drawAlpha}
                          ), l(this.rtDepthStencil)
                        }
                        e.disable(e.STENCIL_TEST), c(
                          this.smOverlay,
                          this.rtDepthStencil,
                          {width: this.fullW, height: this.fullH}
                        ), l(i), this.enableStencilAA && this.smACAA && (c(
                          this.smACAA,
                          i,
                          {width: this.fullW, height: this.fullH}
                        ), l(t), a()), this.enableStencilBloom && this.smVBlur && this.smHBlur && (c(
                          this.smVBlur,
                          i,
                          {height: this.fullH}
                        ), l(t), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), c(
                          this.smHBlur,
                          t,
                          {width: this.fullW}
                        ), l(this.renderTarget), e.disable(e.BLEND)), e.enable(e.BLEND), e.blendFunc(
                          e.SRC_ALPHA,
                          e.ONE_MINUS_SRC_ALPHA
                        ), c(this.smCopy, i), l(this.renderTarget), e.disable(e.BLEND)
                      }
                    },
                    onTick: function (e) {
                      this.orbit.autoRotate && (this.orbit.update(), this.needsRedraw = !0), this.transform.update(), (this.animatedConnections.length || this.animatedConnectionsEnd) && (this.animatedConnectionsEnd = !1, this.needsRedraw = !0, this.needsRetrace = !0, this.needsProjection = !0, this.updateTreeSize(
                        this.currentDim), this.updateConnectionLine(this.globalConnections)), this.orbitTween.playing && (this.orbit.target.x += this.orbitTween.delta.x, this.orbit.target.y += this.orbitTween.delta.y, this.orbit.target.z += this.orbitTween.delta.z), this.cameraTween.playing && (this.camera.position.x += this.cameraTween.delta.x, this.camera.position.y += this.cameraTween.delta.y, this.camera.position.z += this.cameraTween.delta.z), (this.orbitTween.playing || this.cameraTween.playing) && (this.camera.lookAt(
                        this.orbit.target), this.orbit.update(), this.needsRedraw = !0), (this.orbitTween.ended || this.cameraTween.ended) && this.orbit.update(), this.camera.updateMatrixWorld(), this.lastcam.equals(
                        this.camera.matrixWorld) || (this.lastcam.copy(this.camera.matrixWorld), this.projector.updateMatrices(), this.updateLights(), this.needsRetrace = !0, this.needsRedraw = !0, this.needsProjection = !0), this.needsProjection && (this.needsProjection = !1, this.updateProjection()), this.needsRetrace && (!this.enableRaycast || !this.tree || this.orbit.down || this.orbitTween.playing || this.cameraTween.playing || (this.needsRetrace = !1, this.retrace())), this.needsRedraw && this.width && this.height && (this.needsRedraw = !1, this.draw(), this.projector.update(), this.markers.update())
                    }
                  }), THREE.Object3D.prototype.onBeforeRender = function (e, t, i, n, o, s) {
  if (e.stencilWrite) {
    var r = e.context;
    r.stencilFunc(r.ALWAYS, +this.stencilValue || 0, 255)
  }
}, THREE.Object3D.prototype.onAfterRender = function (e, t, i, n, o, s) {
},
  window.TNode = f.unit({
                    unitName: "TNode", init: function (e) {
    this.object = new THREE.Object3D, this.events = new EventEmitter, this.local = new TDimensions, this.meshes = [], this.connections = [], this.setId(
      ++TNode.count), e ? this.setSample(e) : console.warn("new TNode with no sample")
  }, setId: function (e) {
    this.id = e, this.object.name = "TN" + this.id
  }, traverse: function (e, t, i) {
    if ((o = e.call(t || this, this, i)) === TNode.TRSTOP) return o;
    for (var n = 0; n < this.connections.length; n++) {
      var o, s = this.connections[n];
      if (s && s.connected && s.master) if ((o = s.target.traverse(e, t, i)) === TNode.TRSTOP) return o
    }
  }, traverseConnections: function (e, t, i, n) {
    null == n && (n = 0);
    for (var o = 0; o < this.connections.length; o++) {
      var s = this.connections[o];
      s && (e.call(t || this, s, i, n), s.connected && s.master && s.target.traverseConnections(e, t, i, n + 1))
    }
  }, testConnection: function (e, t) {
    if (t && t.list) {
      for (var i in t.test) {
        var n = t.test[i], o = e[i];
        if (t.binary ? !o != !n : o !== n) return
      }
      t.list.push(e)
    }
  }, retrieveConnections: function (e, t) {
    var i = [];
    return this.traverseConnections(this.testConnection, this, {test: e, binary: t, list: i}), i
  }, setSample: function (e) {
    for (var t = this.meshes.length - 1; 0 <= t; t--) {
      (o = this.meshes[t]).parentNode = null, this.object.remove(o), this.meshes.splice(t, 1)
    }
    for (t = this.connections.length - 1; 0 <= t; t--) {
      var i = this.connections[t];
      this.connections.splice(t, 1)
    }
    if (this.sample = e, this.sample) {
      this.type = e.src;
      for (t = 0; t < e.meshes.length; t++) {
        var n = e.meshes[t], o = n.clone();
        n.matrixWorld.decompose(
          o.position,
          o.rotation,
          o.scale
        ), o.updateMatrix(), (o.parentNode = this).object.add(o), this.meshes.push(o)
      }
      for (t = 0; t < e.joints.length; t++) {
        var s = e.joints[t];
        (i = new TConnection(this, s, this.connections.length)).events.link(this.events), this.connections.push(i)
      }
    } else this.type = null
  }, getRoot: function () {
    for (var e = this; e.upnode;) e = e.upnode;
    return e
  }, goRoot: function (e) {
    if (this.upcon) {
      e && this.object.matrixWorld.identity(), this.object.matrixWorld.decompose(
        this.object.position,
        this.object.quaternion,
        this.object.scale
      ), this.object.updateMatrix();
      for (var t = this.upcon, i = null; t;) t = (i = t).target.upcon, i.goMaster();
      this.upcon = null, this.upnode = null
    }
  }, getCenter: function (e) {
    e && e.copy(this.sample.dim.center).applyMatrix4(this.object.matrixWorld)
  }, getConnectedList: function () {
    for (var e = [], t = 0; t < this.connections.length; t++) {
      var i = this.connections[t];
      i.connected && e.push(i.connected)
    }
    return e
  }, canBeReplacedBy: function (e) {
    if (!e || this.sample === e) return !1;
    for (var t = [], i = 0; i < this.connections.length; i++) {
      var n = this.connections[i];
      n.connected && t.push(n.connected.joint)
    }
    if (!t.length) return !0;
    var o = e.joints.slice();
    e:for (i = 0; i < t.length; i++) {
      for (var s = t[i], r = o.length - 1; 0 <= r; r--) {
        var a = o[r];
        if (s.canConnect(a)) {
          o.splice(r, 1);
          continue e
        }
      }
      return !1
    }
    return !0
  }, replace: function (e) {
    for (var t = e.getConnectedList(), i = 0; i < t.length; i++) {
      var n = t[i], o = n.node, s = n.master;
      n.disconnect();
      for (var r = 0; r < this.connections.length; r++) {
        var a = this.connections[r];
        if (!a.connected && n.canConnect(a)) {
          s ? o.connect(n.index, this, a.index) : this.connect(a.index, o, n.index);
          break
        }
      }
    }
  }, pinch: function () {
    var t = [], i = [], e = this.getRoot();
    e.traverse(function (e) {
      t.push(e)
    }), this.traverse(function (e) {
      i.push(e)
    });
    for (var n = this.upcon, o = f.snot(t, i), s = e, r = 0; r < this.connections.length; r++) {
      var a = this.connections[r];
      if (a.connected && a.master) {
        var l = a.connected.node, h = [];
        l.traverse(function (e) {
          h.push(e)
        }), h.length > o.length && (e, n = a.connected, o = h, s = l)
      }
    }
    return {nodes: f.snot(t, o), removeCon: n, nextRoot: s}
  }, pinchr: function () {
    var t = [];
    return this.traverse(function (e) {
      t.push(e)
    }), {nodes: t, removeCon: null, nextRoot: null}
  }, connect: function (e, t, i) {
    if (!t) return console.warn("TN.connect to undefined node");
    if (t === this) return console.error("TN.connect to itself");
    var n = this.connections[e], o = t.connections[i];
    return n && o ? n.connected || o.connected ? console.warn("TN.connect to used joint") : void n.connect(o) : console.warn(
      "TN.connect with undefined joint")
  }, disconnect: function () {
    for (var e = 0; e < this.connections.length; e++) {
      var t = this.connections[e];
      t.connected && t.disconnect()
    }
    this.upnode && this.events.unlink(this.upnode.events)
  }, destroy: function () {
    for (var e = 0; e < this.connections.length; e++) {
      this.connections[e].destroy()
    }
  }, rotate: function (e, t) {
    this.upcon && this.upcon.rotate(e, t)
  }, setConnectedState: function (t) {
    this.traverseConnections(function (e) {
      e.connected && e.master && e.transitionProgress(null == t ? e.connTween.source.connected : t)
    }, this)
  }, getDimensions: function (i) {
    i || (i = new Dimensions), i.box.makeEmpty(), i.center.set(
      0,
      0,
      0
    ), i.mass = 0, this.object.updateMatrixWorld(!0), this.traverse(function (e) {
      e.updateBox();
      var t = e.local;
      i.box.union(t.box), i.center.x += 1 * t.center.x, i.center.y += 1 * t.center.y, i.center.z += 1 * t.center.z, i.mass += 1
    }), 1e-6 < Math.abs(i.mass) ? i.center.multiplyScalar(1 / i.mass) : i.center.set(
      0,
      0,
      0
    ), i.box.getCenter(i.size), i.center.add(i.size)
      .multiplyScalar(.5), i.box.getSize(i.size), i.length = i.size.length(), i.box.getBoundingSphere(i.sphere)
  }, updateBox: function (e) {
    e || (e = this.local), this.sample ? (e.box.copy(this.sample.dim.box)
      .applyMatrix4(this.object.matrixWorld), e.center.copy(this.sample.dim.center)
      .applyMatrix4(this.object.matrixWorld)) : (e.box.makeEmpty(), e.center.set(
      0,
      0,
      0
    )), e.box.getSize(e.size), e.length = e.size.length(), e.mass = e.size.x * e.size.y * e.size.z
  }
                  }), TNode.count = 0, TNode.TRSTOP = {},
  window.TConnection = f.unit({
                                                                                 unitName: "TConnection",
                                                                                 transitionStages: null,
                                                                                 transitionTime: null,
                                                                                 transitionStageDuration: {
                                                                                   approachDelay: 100,
                                                                                   approachTime: 1200,
                                                                                   screwDelay: 100,
                                                                                   screwTime: 1200
                                                                                 },
                                                                                 init: function (e, t, i) {
                                                                                   this.node = e, this.index = i, this.target = null, this.master = null, this.connected = null, this.blocked = !1, this.inactive = new Gate(
                                                                                     Gate.AND,
                                                                                     !1
                                                                                   ), this.events = new EventEmitter, this.object = new THREE.Object3D, this.object.name = "TN" + this.node.id + "-TC" + this.index, this.joint = t.clone(), this.depth = parseFloat(
                                                                                     this.joint.depth) || 0, this.screw = "screw" === this.joint.extra, this.rotar = 0, this.connTween = new TWEEN.Tween(
                                                                                     {connected: 1}).to(
                                                                                     {connected: 1},
                                                                                     1e3
                                                                                   )
                                                                                     .easing(TWEEN.Easing.Linear.None)
                                                                                     .onStart(this.onTweenStart, this)
                                                                                     .onUpdate(this.onTweenUpdate, this)
                                                                                     .onComplete(
                                                                                       this.onTweenComplete,
                                                                                       this
                                                                                     )
                                                                                     .onStop(
                                                                                       this.onTweenComplete,
                                                                                       this
                                                                                     ), this.rotaTween = new TWEEN.Tween(
                                                                                     {angle: 0}).to({angle: 0}, 277)
                                                                                     .easing(TWEEN.Easing.Cubic.Out)
                                                                                     .onStart(this.onTweenStart, this)
                                                                                     .onUpdate(
                                                                                       this.onRotaTweenUpdate,
                                                                                       this
                                                                                     )
                                                                                     .onComplete(
                                                                                       this.onTweenComplete,
                                                                                       this
                                                                                     )
                                                                                     .onStop(
                                                                                       this.onTweenComplete,
                                                                                       this
                                                                                     ), this.marker = new UI.Marker({connection: this}), this.pointInner = new THREE.Vector3, this.pointOuter = new THREE.Vector3, this.updatePosition()
                                                                                 },
                                                                                 updatePosition: function () {
                                                                                   this.pointInner.copy(this.joint.point), this.pointOuter.copy(
                                                                                     this.joint.normal)
                                                                                     .setLength(this.depth)
                                                                                     .add(this.joint.point)
                                                                                 },
                                                                                 onTweenUpdate: function () {
                                                                                   this.transitionProgress(this.connTween.source.connected)
                                                                                 },
                                                                                 onTweenStart: function () {
                                                                                   this.animating = !0, this.events.emit(
                                                                                     "animate_start",
                                                                                     this
                                                                                   )
                                                                                 },
                                                                                 onTweenComplete: function () {
                                                                                   this.animating = !1, this.events.emit(
                                                                                     "animate_end",
                                                                                     this
                                                                                   )
                                                                                 },
                                                                                 getTransitionStages: function () {
                                                                                   if (!this.connected || !this.master) return [0];
                                                                                   var e = this.depth + this.connected.depth,
                                                                                     t = this.transitionStageDuration;
                                                                                   return 0 < e ? [t.approachDelay, t.approachTime, t.screwDelay, t.screwTime] : [t.approachDelay, t.approachTime]
                                                                                 },
                                                                                 transitionProgress: function (e) {
                                                                                   if (this.connected && this.master && this.transitionTime) {
                                                                                     for (var t = this, i = this.connected, n = Math.max(
                                                                                       0,
                                                                                       Math.min(1, e)
                                                                                     ) * this.transitionTime, o = this.transitionStages, s = 0, r = -1, a = 0, l = TWEEN.Easing.Cubic.InOut, h = 0; h < o.length; h++) {
                                                                                       if (n <= (s = o[h])) {
                                                                                         r = h, a = l(n / s);
                                                                                         break
                                                                                       }
                                                                                       n -= s
                                                                                     }
                                                                                     var c = t.depth + i.depth,
                                                                                       d = t.screw || i.screw ? 2 * Math.PI : 0,
                                                                                       u = (t.node.sample.dim.length + i.node.sample.dim.length) / 4,
                                                                                       p = 0, f = 0;
                                                                                     switch (r) {
                                                                                       case-1:
                                                                                         return;
                                                                                       case 0:
                                                                                         p = c + u, f = d;
                                                                                         break;
                                                                                       case 1:
                                                                                         p = c + u * (1 - a), f = d;
                                                                                         break;
                                                                                       case 2:
                                                                                         p = c, f = d;
                                                                                         break;
                                                                                       case 3:
                                                                                         p = c * (1 - a), f = d * (1 - a)
                                                                                     }
                                                                                     t.object.quaternion.setFromAxisAngle(
                                                                                       t.joint.normal,
                                                                                       f
                                                                                     ), i.object.position.copy(t.joint.normal)
                                                                                       .setLength(p)
                                                                                   }
                                                                                 },
                                                                                 playConnection: function (e, t, i) {
                                                                                   if (this.connected && this.master) {
                                                                                     var n = this.transitionStages.reduce(
                                                                                       f.sum);
                                                                                     isNaN(i) || (n *= i), this.connTween.target.connected = null != e ? +e : 1, null != t && (this.connTween.source.connected = +t), this.onTweenUpdate(), n ? this.connTween.duration(
                                                                                       n)
                                                                                       .start() : this.object.updateMatrixWorld()
                                                                                   }
                                                                                 },
                                                                                 getOuterPosition: function (e) {
                                                                                   return e || (e = new THREE.Vector3), e.copy(
                                                                                     this.pointOuter)
                                                                                     .applyMatrix4(this.node.object.matrixWorld), e
                                                                                 },
                                                                                 getInnerPosition: function (e) {
                                                                                   return e || (e = new THREE.Vector3), e.copy(
                                                                                     this.pointInner)
                                                                                     .applyMatrix4(this.node.object.matrixWorld), e
                                                                                 },
                                                                                 canConnect: function (e) {
                                                                                   return !this.blocked && this.joint.canConnect(
                                                                                     e.joint)
                                                                                 },
                                                                                 canConnectList: function (e) {
                                                                                   return e.filter(
                                                                                     this.canConnect,
                                                                                     this
                                                                                   )
                                                                                 },
                                                                                 connect: function (e) {
                                                                                   this.connected || this.setConnection(
                                                                                     this,
                                                                                     e,
                                                                                     !0,
                                                                                     !0
                                                                                   )
                                                                                 },
                                                                                 disconnect: function () {
                                                                                   if (this.connected) {
                                                                                     var e = this.master ? this : this.connected,
                                                                                       t = this.master ? this.connected : this;
                                                                                     this.setConnection(e, t, !1, !0)
                                                                                   }
                                                                                 },
                                                                                 setConnection: function (e, t, i, n) {
                                                                                   if (i) {
                                                                                     var o = new THREE.Vector3,
                                                                                       s = new THREE.Vector3;
                                                                                     e.node.object.add(e.object), e.object.position.copy(
                                                                                       e.joint.point), e.object.quaternion.set(
                                                                                       0,
                                                                                       0,
                                                                                       0,
                                                                                       1
                                                                                     ), e.object.add(t.object), o.copy(t.joint.normal)
                                                                                       .negate(), t.object.position.set(
                                                                                       0,
                                                                                       0,
                                                                                       0
                                                                                     ), t.object.quaternion.setFromUnitVectors(
                                                                                       o,
                                                                                       e.joint.normal
                                                                                     ), s.copy(t.joint.up)
                                                                                       .applyQuaternion(t.object.quaternion), t.object.rotateOnAxis(
                                                                                       o,
                                                                                       -e.joint.up.angleTo(s)
                                                                                     ), t.object.add(t.node.object), t.node.object.position.copy(
                                                                                       t.joint.point)
                                                                                       .negate(), t.node.object.quaternion.set(
                                                                                       0,
                                                                                       0,
                                                                                       0,
                                                                                       1
                                                                                     )
                                                                                   } else e.object.remove(t.object);
                                                                                   e.master = !!i || null, e.connected = i ? t : null, e.target = i ? t.node : null, t.master = !i && null, t.connected = i ? e : null, t.target = i ? e.node : null, t.node.upcon = i ? t : null, t.node.upnode = i ? e.node : null, i && (this.transitionStages = this.getTransitionStages(), this.transitionTime = this.transitionStages.reduce(
                                                                                     f.sum)), e.node.events.unlink(t.node.events), i ? t.node.events.link(
                                                                                     e.node.events) : t.node.events.unlink(
                                                                                     e.node.events), n && (e.events.emit(
                                                                                     i ? "connect" : "disconnect",
                                                                                     [e, t]
                                                                                   ), t.events.emit(
                                                                                     i ? "connect" : "disconnect",
                                                                                     [t, e]
                                                                                   ))
                                                                                 },
                                                                                 goMaster: function () {
                                                                                   if (this.connected && !this.master) {
                                                                                     var e = this.rotar;
                                                                                     this.rotate(-e), this.setConnection(
                                                                                       this,
                                                                                       this.connected,
                                                                                       !0
                                                                                     ), this.connected.rotate(e), this.connTween.from(
                                                                                       this.connected.connTween.source)
                                                                                       .to(this.connected.connTween.target), this.connected.connTween.playing && (this.connected.connTween.stop(), this.connTween.start()), this.onTweenUpdate()
                                                                                   }
                                                                                 },
                                                                                 rotate: function (e, t) {
                                                                                   if (this.connected && !isNaN(e)) {
                                                                                     if (this.master) return this.connected.rotate(
                                                                                       e,
                                                                                       t
                                                                                     );
                                                                                     this.rotar += e, this.rotaTween.target.angle = this.rotar, t ? this.rotaTween.start() : (this.rotaTween.source.angle = this.rotar, this.object.rotateOnAxis(
                                                                                       this.joint.normal,
                                                                                       e
                                                                                     ), this.object.updateMatrixWorld())
                                                                                   }
                                                                                 },
                                                                                 onRotaTweenUpdate: function () {
                                                                                   this.object.rotateOnAxis(
                                                                                     this.joint.normal,
                                                                                     this.rotaTween.delta.angle
                                                                                   )
                                                                                 },
                                                                                 destroy: function () {
                                                                                   this.marker.destroy()
                                                                                 },
                                                                                 attachControl: function (e) {
                                                                                   e && (this.control = e, this.controlObject = new THREE.Object3D, this.joint.matrix.decompose(
                                                                                     this.controlObject.position,
                                                                                     this.controlObject.rotation,
                                                                                     this.controlObject.scale
                                                                                   ), this.node.object.add(this.controlObject), e.attach(
                                                                                     this.controlObject))
                                                                                 },
                                                                                 updateControl: function () {
                                                                                   if (this.controlObject) {
                                                                                     this.joint.setMatrix(this.controlObject.matrix), this.updatePosition();
                                                                                     var e = this.connected;
                                                                                     e && (this.master ? this.connect(e) : e.connect(
                                                                                       this))
                                                                                   }
                                                                                 },
                                                                                 detachControl: function () {
                                                                                   this.control && (this.control.detach(), this.node.object.remove(
                                                                                     this.controlObject), delete this.controlObject, delete this.control)
                                                                                 }
                                                                               }),
  window.TSerial = {
  toJSON: function (e) {
    if (!e) return null;
    var i = [], n = [], o = [], s = [];
    e.traverse(function (e) {
      var t = i.indexOf(e.sample.src);
      -1 === t && (t = i.length, i.push(e.sample.src)), n.push(t), o.push(e), s.push(e.upcon)
    });
    for (var t = [], r = 1; r < o.length; r++) {
      var a = s[r];
      t.push({t: n[r], a: o.indexOf(a.connected.node), ai: a.connected.index, bi: a.index, r: a.rotar})
    }
    return {types: i, nodes: t}
  }, isComplex: function (e) {
    return e && e.types && e.types.length
  }, fromJSON: function (e, t, i) {
    return t.prepareComplex(e).then(function () {
      return TSerial.constructJSON(e, t, i)
    })
  }, constructJSON: function (e, t, i) {
    if (!e) return null;
    var n = e.types.map(t.getSample, t), o = new TNode(n[0]);
    if (e.nodes) {
      for (var s = [o], r = 0; r < e.nodes.length; r++) {
        var a = e.nodes[r];
        s.push(new TNode(n[a.t]))
      }
      for (r = 0; r < e.nodes.length; r++) {
        var l = s[(a = e.nodes[r]).a], h = s[r + 1], c = l.connections[a.ai];
        h.connections[a.bi];
        l.connect(a.ai, h, a.bi), a.r && h.rotate(a.r, i), i && c.playConnection()
      }
    }
    if (e.blacklist || e.whitelist) for (r = 0; r < s.length; r++) for (var d = s[r], u = d.connections.length - 1; 0 <= u; u--) {
      var p = d.connections[u], f = !1;
      if (e.blacklist) for (var m = 0; m < e.blacklist.length; m++) {
        var v = e.blacklist[m];
        if (v.a === r && v.ai === u) {
          f = !0;
          break
        }
      }
      var g = !0;
      if (e.whitelist) {
        for (m = 0; m < e.whitelist.length; m++) {
          var b = e.whitelist[m];
          if (b.a === r && b.ai === u) break
        }
        g = !1
      }
      g && !f || (p.blocked = !1, d.connections.splice(u, 1))
    }
    return o
  }, rationalApproximate: function (e, t, i) {
    if (!e) return [0, 1];
    null == t && (t = 65536), null == i && (i = 1e-6);
    for (var n, o, s, r, a, l, h = 0, c = 1, d = 1, u = 1, p = 1 / 0; a = (n = h + d) / (o = c + u), (l = Math.abs(a - e)) < p && (p = l, s = n, r = o), o * e < n ? (d = n, u = o) : (h = n, c = o), i < l && o < t;) ;
    return [s, r]
  }, toString: function (e) {
    for (var t = 2 * Math.PI, i = e.types.length, n = e.nodes.length, o = 0, s = [], r = [], a = (f.nextprime(), 0); a < e.nodes.length; a++) {
      var l = (E = e.nodes[a]).r / t;
      o = Math.max(o, E.ai, E.bi), s.push(l), r.push(TSerial.rationalApproximate(l)[1])
    }
    var h = f.lcm(r), c = Math.ceil(Math.log2(i)), d = Math.ceil(Math.log2(n + 1)), u = Math.ceil(Math.log2(o + 1)),
      p = Math.ceil(Math.log2(h)), m = "", v = 0, g = 0;

    function b(e, t) {
      if (e) for (v |= t << g, g += e; 7 < g;) m += String.fromCharCode(255 & v), v >>= 8, g -= 8
    }

    b(16, i);
    for (a = 0; a < i; a++) {
      var w = e.types[a];
      b(16, w.length);
      for (var y = 0; y < w.length; y++) b(8, w.charCodeAt(y))
    }
    b(16, o), b(16, n), b(16, h);
    for (a = 0; a < n; a++) {
      var E;
      b(c, (E = e.nodes[a]).t), b(d, E.a), b(u, E.ai), b(u, E.bi), b(p, Math.round(h * s[a]))
    }
    return b(8 - g, 0), btoa(m)
  }, fromString: function (e) {
    var t = 2 * Math.PI, i = atob(e), n = 0, o = 0, s = 0;

    function r(e) {
      if (!e) return 0;
      for (; s < e;) n |= i.charCodeAt(o) << s, s += 8, o++;
      var t = n & (1 << e) - 1;
      return n >>= e, s -= e, t
    }

    for (var a = {types: [], nodes: []}, l = r(16), h = 0; h < l; h++) {
      for (var c = r(16), d = "", u = 0; u < c; u++) d += String.fromCharCode(r(8));
      a.types.push(d)
    }
    var p = r(16), f = r(16), m = r(16), v = Math.ceil(Math.log2(l)), g = Math.ceil(Math.log2(f + 1)),
      b = Math.ceil(Math.log2(p + 1)), w = Math.ceil(Math.log2(m));
    for (h = 0; h < f; h++) a.nodes.push({t: r(v), a: r(g), ai: r(b), bi: r(b), r: r(w) / m * t});
    return a
  }
},
  window.UI = f.unit({unitName: "UI"}), UI.Prompt = f.unit(
  Block.Tip,
  {
    unitName: "Block_Tip",
    ename: "prompt prompt-tip tip",
    integerPosition: !0,
    distance: 8,
    arrowPadding: 8,
    animationTime: 200,
    buttonsTemplate: {ename: "prompt-button"},
    create: function () {
      this.buttons = new Block.Menu({
                                      eroot: this.content,
                                      ename: "prompt-button-list",
                                      template: this.protomerge("buttonsTemplate"),
                                      items: this.buttons
                                    })
    },
    createPost: function () {
      dom.append(this.content, this.buttons.element)
    }
  }
), UI.MarkerSystem = f.unit(Block, {
  unitName: "UI_MarkerSystem", ename: "marker-system noselect", create: function () {
    this.markers = [], this.markersVisible = new Gate(Gate.AND, !1), this.markersVisible.events.on(
      "change",
      this.onMarkersVisible,
      this
    )
  }, onMarkersVisible: function (e) {
    for (var t = 0; t < this.markers.length; t++) {
      var i = this.markers[t];
      i.undisposable || i.visible.set(e, "system")
    }
  }, addMarker: function (e) {
    -1 === this.markers.indexOf(e) && (this.markers.push(e), e.undisposable || e.visible.set(
      this.markersVisible.value,
      "system"
    ), e.plug(this), e.updateState())
  }, removeMarker: function (e) {
    var t = this.markers.indexOf(e);
    -1 !== t && (this.markers.splice(t, 1), e.unplug())
  }, clear: function () {
    for (; this.markers.length;) this.removeMarker(this.markers[0])
  }, update: function (e) {
    e && this.markers.forEach(f.func("updateState")), f.sort(
      this.markers,
      this.distanceSort,
      this
    ), this.markers.forEach(this.updateMarker, this)
  }, distanceSort: function (e) {
    return -e.point.distance
  }, updateMarker: function (e, t) {
    e.element.style.zIndex = t, e.update()
  }
}), UI.Marker = f.unit(Block.Tip, {
  unitName: "UI_Marker",
  ename: "marker hand",
  hidden: !0,
  align: "top",
  distance: 100,
  arrowWidth: 1,
  arrowPadding: -2,
  create: function () {
    dom.remclass(this.arrow, "tip-arrow"), dom.remclass(this.content, "tip-content"), dom.addclass(
      this.arrow,
      "marker-arrow"
    ), dom.addclass(this.content, "marker-content marker-interactive out-02"), this.arrowLine = dom.div(
      "marker-arrow-line marker-interactive out-02",
      this.arrow
    ), this.elemGroup = dom.span("marker-group", this.content), this.elemInfo = dom.span(
      "marker-info",
      this.content
    ), dom.display(this.elemGroup, !1), dom.display(this.elemInfo, !1), this.svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    ), this.svg.className.baseVal = "marker-depth-line marker-interactive out-02", this.svgLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    ), this.svgLine.setAttribute("x1", 0), this.svgLine.setAttribute(
      "y1",
      0
    ), this.svgLineShadow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    ), this.svgLineShadow.className.baseVal = "marker-depth-line-shadow", this.svgLineShadow.setAttribute(
      "x1",
      1
    ), this.svgLineShadow.setAttribute("y1", 1), dom.append(this.svg, this.svgLineShadow), dom.append(
      this.svg,
      this.svgLine
    ), dom.append(this.element, this.svg), this.state = {
      hover: !1,
      selected: !1,
      connected: !1,
      inactive: !1,
      master: !1
    }, this.connection && (dom.html(
      this.elemInfo,
      "[" + this.connection.index + "] " + this.connection.joint.name
    ), this.connection.events.when(
      {connect: this.updateState},
      this
    )), this.watchEvents.push(
      new EventHandler(this.onTap, this).listen("tap", this.element),
      new EventHandler(this.onEnter, this).listen("mouseenter", this.element),
      new EventHandler(this.onLeave, this).listen("mouseleave", this.element)
    ), this.system && this.system.addMarker(this)
  },
  plug: function (e) {
    this.system && this.system.removeMarker(this), this.system = e, this.system && (this.tipRoot = this.system.element, this.point = this.system.projector.addPoint(), this.inner = this.system.projector.addPoint())
  },
  unplug: function () {
    this.system && (dom.remove(this.element), this.system.projector.remPoint(this.point), this.system.projector.remPoint(
      this.inner), delete this.point, delete this.inner, delete this.tipRoot, delete this.system)
  },
  destroy: function () {
    Block.Tip.prototype.destroy.call(this), this.system && this.system.removeMarker(this), this.connection && this.connection.events.off(
      null,
      null,
      this
    ), Atlas.free(this.elemGroup)
  },
  updateState: function () {
    if (this.connection) {
      for (var e in this.state) {
        var t = this.connection[e];
        this.state[e] = t instanceof Gate ? t.value : t
      }
      this.state.connected ? (this.align = this.state.master ? "left" : "right", this.distance = 1e3) : (this.align = "top", this.distance = 100), Atlas.free(
        this.elemGroup), dom.text(this.elemGroup, "");
      var i = this.connection.group, n = !isNaN(this.connection.group);
      n && (-1 === i ? Atlas.set(this.elemGroup, "i-deny") : dom.text(
        this.elemGroup,
        String.fromCharCode(i + 65)
      )), dom.display(this.elemGroup, n), dom.setclass(this.element, this.state);
      var o = !1;
      o = !(!this.system || !this.system.verbose) || (this.system && this.system.debug ? !this.state.connected : n && !this.state.connected), this.visible.set(
        o,
        "state"
      )
    }
  },
  onEnter: function () {
    this.system && this.system.events.emit("marker_enter", this)
  },
  onLeave: function () {
    this.system && this.system.events.emit("marker_leave", this)
  },
  onTap: function () {
    this.system && this.system.events.emit("marker_tap", this)
  },
  update: function () {
    if (this.system) {
      this.connection && (this.connection.getOuterPosition(this.point.world), this.connection.getInnerPosition(this.inner.world)), this.system.projector.updatePoint(
        this.point), this.system.projector.updatePoint(this.inner);
      var e = this.visible.value || this.inTransition, t = Math.round(this.point.screen.x),
        i = Math.round(this.point.screen.y), n = this.inner.screen.x - t, o = this.inner.screen.y - i,
        s = e && this.connection && this.connection.depth && !isNaN(n) && !isNaN(o);
      if (dom.display(this.svg, s), e && (this.scale = .7 * (1.3 - Math.min(
        .7,
        this.point.distance / 1.5
      )), this.move(t, i, this.align), s)) {
        var r = Math.ceil(Math.abs(n)), a = Math.ceil(Math.abs(o)), l = Math.max(r, a);
        this.svg.setAttribute("width", 2 * l + 2), this.svg.setAttribute("height", 2 * l + 2), this.svg.setAttribute(
          "viewBox",
          [-l - 1, -l - 1, 2 * l + 2, 2 * l + 2].join(" ")
        ), this.svg.style.marginLeft = -l - 1 + "px", this.svg.style.marginTop = -l - 1 + "px", this.svg.style.left = t - this.elementPoint.x + "px", this.svg.style.top = i - this.elementPoint.y + "px", this.svgLineShadow.setAttribute(
          "x2",
          n + 1
        ), this.svgLineShadow.setAttribute("y2", o + 1), this.svgLine.setAttribute("x2", n), this.svgLine.setAttribute(
          "y2",
          o
        )
      }
    }
  },
  move: function () {
    Block.Tip.prototype.move.apply(this, arguments);
    var e = Math.max(0, this.lastDistance), t = this.arrowLine.style, i = this.arrowWidth + "px", n = e + "px";
    switch (t.left = t.right = t.top = t.bottom = "auto", t.width = t.height = i, this.lastAlign) {
      case"left":
        t.width = n, t.left = "100%";
        break;
      case"right":
        t.width = n, t.right = "100%";
        break;
      case"top":
        t.height = n, t.top = "100%";
        break;
      case"bottom":
        t.height = n, t.bottom = "100%"
    }
  }
}), UI.NodeMarker = f.unit(UI.Marker, {
  unitName: "UI_NodeMarker",
  ename: "node-marker marker hand",
  node: null,
  align: "bottom",
  integerPosition: !0,
  undisposable: !0,
  create: function () {
    dom.remclass(this.content, "marker-interactive");
    var e = this.node.upcon;
    dom.text(this.elemInfo, "[" + this.node.id + "] " + this.node.sample.src), dom.addclass(
      this.elemInfo,
      "marker-label"
    ), this.buttons = new Block.List({
                                       element: this.content,
                                       events: {block_add: this.onAddButton},
                                       eventScope: this,
                                       template: {
                                         factory: Block.Toggle,
                                         ename: "marker-action out-02",
                                         einam: "",
                                         eventScope: this,
                                         reset: !0
                                       }
                                     }), e && (this.buttons.addItem({
                                                                      action: "node_explode",
                                                                      attr: {icon: "i-explode"},
                                                                      reset: !1,
                                                                      active: !e.connected.connTween.target.connected,
                                                                      events: {hover: this.onHoverButton}
                                                                    }), this.buttons.addItem({
                                                                                               action: "node_rotate",
                                                                                               attr: {icon: "i-rotate"},
                                                                                               events: {hover: this.onHoverButton}
                                                                                             })), this.buttons.addItem({
                                                                                                                         action: "node_delete",
                                                                                                                         attr: {icon: "i-delete"}
                                                                                                                       }), this.node.sample.link && this.buttons.addItem(
      {etag: "a", attr: {icon: "i-info", href: this.node.sample.link, target: "_blank"}})
  },
  onAddButton: function (e) {
    e.action && e.events.on(e.reset ? "active" : "change", this.events.will(e.action, this.node))
  },
  onHoverButton: function (e) {
    this.events.emit("node_parent", [this.node, e])
  }
}), UI.LoadingBox = f.unit(
  Block,
  {
    unitName: "UI_LoadingBox",
    ename: "loading-box absmid out-03 hidden",
    progress: null,
    hidden: !0,
    blocksCount: 10,
    create: function () {
      this.blocks = [];
      for (var e = 0; e < this.blocksCount; e++) this.blocks.push(dom.div(
        "loading-block",
        this.element
      ));
      this.setProgress(0)
    },
    visibleMethod: function (e, t) {
      dom.togclass(this.element, "hidden", !t)
    },
    setProgress: function (e) {
      if (this.progress !== e) {
        this.progress = e;
        for (var t = this.blocks.length, i = f.clamp(
          e,
          0,
          1
        ) * t, n = Math.floor(i), o = i - n, s = 0; s < t; s++) this.blocks[s].style.opacity = s < n ? 1 : n < s ? 0 : o
      }
    }
  }
),
  window.Plumber = f.unit({
                      unitName: "Plumber",
                      version: 5,
                      mode: "constructor",
                      explodeEnabled: !1,
                      explodeStepped: !1,
                      explodeTimeScale: 1,
                      catchFiles: !1,
                      catchSamples: !0,
                      enableHotkeys: !1,
                      dirSamples: "",
                      srcAtlas: "/assets/images/Plumber/plumber-atlas.svg",
                      srcCubemap: "/assets/images/Plumber/plumber-cubemap.png",
                      stencilReplaceColor: "#00f0ff",
                      stencilDeleteColor: "#ff5500",
                      initFromHash: !1,
                      init: function (e) {
                        console.log(
                          "PB version",
                          this.version
                        ), this.get = new Loader, this.timer = new Timer(
                          this.onTick,
                          this
                        ), this.ready = new Defer, this.imagery = new Imagery, this.events = new EventEmitter, this.sampler = new Sampler, this.sampler.setImagery(
                          this.imagery), this.connectionParts = [], this.renderer = new THREE.WebGLRenderer({
                                                                                                              alpha: !1,
                                                                                                              depth: !0,
                                                                                                              stencil: !0,
                                                                                                              antialias: !0,
                                                                                                              preserveDrawingBuffer: !0
                                                                                                            }), this.renderer.autoClear = !1, this.canvas = this.renderer.domElement, this.tiles = new TileView, this.element = this.tiles.element, this.clipboard = dom.elem(
                          "textarea",
                          null,
                          this.element
                        ), dom.style(
                          this.clipboard,
                          {position: "absolute", zIndex: "-1"}
                        ), this.view = new View3({
                                                   ename: "view-3 view-3-1",
                                                   renderer: this.renderer,
                                                   imagery: this.imagery
                                                 }), this.enableViewRaycast = new Gate(
                          Gate.AND,
                          !0
                        ), this.enableViewRaycast.events.on("change", function (e) {
                          this.view.enableRaycast = e
                        }, this), this.view2 = new View3({
                                                           ename: "view-3 view-3-2",
                                                           renderer: this.renderer,
                                                           imagery: this.imagery,
                                                           enableRaycast: !1
                                                         }), this.loading = new UI.LoadingBox, this.viewTween = new TWEEN.Tween(
                          {split: 0}).to({split: 0}, 400).easing(TWEEN.Easing.Cubic.Out).onStart(
                          this.onViewTweenStart,
                          this
                        ).onHalfway(this.onViewTweenHalfway, this).onUpdate(this.onViewTweenUpdate, this).onComplete(
                          this.onViewTweenComplete,
                          this
                        ), this.createDOM(), this.setParams(e), this.setMode(this.mode, !0), this.fetch()
                      },
                      createDOM: function () {
                        this.buttonRoot = dom.div(
                          "vp-button-root",
                          this.element
                        ), this.actionList = new Block.List({
                                                              eroot: this.buttonRoot,
                                                              ename: "vp-list vp-list-action",
                                                              template: {
                                                                factory: Block.Toggle,
                                                                ename: "vp-button out-01",
                                                                reset: !0
                                                              },
                                                              items: [{
                                                                data: "zoom_in",
                                                                attr: {icon: "i-zoom-in", title: "Zoom in"}
                                                              }, {
                                                                data: "zoom_out",
                                                                attr: {icon: "i-zoom-out", title: "Zoom out"}
                                                              }, {
                                                                data: "zoom_fit",
                                                                attr: {icon: "i-zoom-fit", title: "Fit screen"}
                                                              }, {
                                                                data: "explode",
                                                                attr: {icon: "i-explode", title: "Exploded view"},
                                                                reset: !1,
                                                                eroot: this.element
                                                              }, {
                                                                data: "screenshot",
                                                                attr: {icon: "i-photo", title: "Screen shot"},
                                                                reset: !1,
                                                                eroot: this.element
                                                              }, {
                                                                data: "rotate",
                                                                attr: {icon: "i-autorotate", title: "Auto rotate"},
                                                                reset: !1
                                                              }],
                                                              events: {
                                                                block_add: function (e) {
                                                                  e.events.on(
                                                                    e.reset ? "active" : "change",
                                                                    this.onAction,
                                                                    this,
                                                                    e.data
                                                                  )
                                                                }
                                                              },
                                                              eventScope: this
                                                            }), this.displayMenu = new Block.Menu({
                                                                                                    eroot: this.buttonRoot,
                                                                                                    ename: "vp-menu vp-menu-display",
                                                                                                    template: {
                                                                                                      deselect: !1,
                                                                                                      ename: "vp-button out-01"
                                                                                                    },
                                                                                                    items: [{
                                                                                                      data: "transparent",
                                                                                                      attr: {
                                                                                                        icon: "i-dis-transparent",
                                                                                                        title: "Transparent view"
                                                                                                      }
                                                                                                    }, {
                                                                                                      data: "normal",
                                                                                                      attr: {
                                                                                                        icon: "i-dis-normal",
                                                                                                        title: "Normal view"
                                                                                                      }
                                                                                                    }, {
                                                                                                      data: "wireframe",
                                                                                                      attr: {
                                                                                                        icon: "i-dis-wireframe",
                                                                                                        title: "Wireframe view"
                                                                                                      }
                                                                                                    }],
                                                                                                    active: 1,
                                                                                                    events: {change: this.onDisplayChange},
                                                                                                    eventScope: this
                                                                                                  }), this.projectionMenu = new Block.Menu(
                          {
                            eroot: this.buttonRoot,
                            ename: "vp-menu vp-menu-projection",
                            template: {deselect: !1, ename: "vp-button out-01"},
                            items: [{
                              data: "perspective",
                              camera: [1, 1, 1],
                              attr: {icon: "i-prj-perspective", title: "Perspective"}
                            }, {
                              data: "left",
                              camera: [-1, 0, 0],
                              attr: {icon: "i-prj-left", title: "Left"}
                            }, {
                              data: "right",
                              camera: [1, 0, 0],
                              attr: {icon: "i-prj-right", title: "Right"}
                            }, {
                              data: "top",
                              camera: [0, 1, 0],
                              attr: {icon: "i-prj-top", title: "Top"}
                            }, {
                              data: "bottom",
                              camera: [0, -1, 0],
                              attr: {icon: "i-prj-bottom", title: "Bottom"}
                            }, {
                              data: "front",
                              camera: [0, 0, 1],
                              attr: {icon: "i-prj-front", title: "Front"}
                            }, {data: "back", camera: [0, 0, -1], attr: {icon: "i-prj-back", title: "Back"}}],
                            active: 0,
                            events: {change: this.onProjectionChange},
                            eventScope: this
                          }), this.splitViewMessage = dom.div("split-view-message"), dom.text(
                          this.splitViewMessage,
                          "no compatible connections"
                        ), this.splitViewMessageVisible = new Gate(
                          Gate.AND,
                          !0
                        ), this.splitViewMessageVisible.events.on(
                          "change",
                          dom.display,
                          dom,
                          this.splitViewMessage
                        ), this.splitViewMessageVisible.events.on(
                          "opened",
                          this.updateSplitViewMessagePosition,
                          this
                        ), this.splitViewMessageVisible.off("g_svm_cons"), this.emptyViewMessage = dom.div(
                          "empty-view-message out-03 absmid");
                        var e = dom.div("empty-view-message-center absmid", this.emptyViewMessage),
                          t = dom.div("empty-view-message-frame absmid", this.emptyViewMessage),
                          i = dom.div("empty-view-message-text absmid", this.emptyViewMessage);
                        f.nop(e, t), dom.html(
                          i,
                          // ["please", "add", "any product"].join("<br/>")
                          '<svg width="121px" height="121px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"\n' +
                            '     preserveAspectRatio="xMidYMid" class="lds-dual-ring" style="background: none;">\n' +
                            '    <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}"\n' +
                            '            ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none"\n' +
                            '            stroke-linecap="round" r="40" stroke-width="6" stroke="#28292f"\n' +
                            '            stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(157.221 50 50)">\n' +
                            '        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"\n' +
                            '                          keyTimes="0;1" dur="2.9s" begin="0s" repeatCount="indefinite"></animateTransform>\n' +
                            '    </circle>\n' +
                            '</svg>'
                        ), this.emptyViewMessageVisible = new Gate(
                          Gate.AND,
                          !0
                        ), this.emptyViewMessageVisible.events.on("change", function (e) {
                          dom.togclass(this.emptyViewMessage, "hidden", !e)
                        }, this), dom.addclass(
                          this.element,
                          "ontouchstart" in window ? "touch" : "no-touch"
                        ), dom.addclass(this.element, "plumber"), dom.addclass(this.canvas, "canvas-main"), dom.prepend(
                          this.element,
                          this.canvas
                        ), dom.append(this.element, this.splitViewMessage), dom.append(
                          this.element,
                          this.emptyViewMessage
                        ), dom.display(this.canvas, !1)
                      },
                      setParams: function (e) {
                        for (var t in e) switch (t) {
                          case"eroot":
                            dom.append(e.eroot, this.element);
                            break;
                          case"mode":
                            this.mode = e.mode;
                            break;
                          case"dirSamples":
                            this.sampler.folder = e.dirSamples;
                            break;
                          case"initFromHash":
                            this.initFromHash = !!e.initFromHash;
                            break;
                          default:
                            t in this && (this[t] = e[t])
                        }
                      },
                      setMode: function (e, t) {
                        if ("constructor" !== e && "viewer" !== e && (console.warn(
                          "unknown mode given:",
                          e,
                          'fallback to "viewer"'
                        ), e = "viewer"), this.mode !== e || t) {
                          var i, n;
                          switch (this.mode = e, this.modeis = {ctr: "constructor" === e, vwr: "viewer" === e}, e) {
                            case"constructor":
                              i = ["h", 0, 0, 1], n = [this.view, this.view2];
                              break;
                            default:
                            case"viewer":
                              i = 0, n = [this.view]
                          }
                          this.enableViewRaycast.set(
                            this.modeis.ctr,
                            "g_vr:mode"
                          ), this.tiles.setLayout(i), this.tiles.setClients(n), dom.setclass(
                            this.element,
                            {
                              "mode-constructor": this.modeis.ctr,
                              "mode-viewer": this.modeis.vwr
                            }
                          ), dom.display(this.view.clearButton, this.modeis.ctr), dom.display(
                            this.view2.clearButton,
                            this.modeis.ctr
                          ), dom.display(
                            this.buttonRoot,
                            this.modeis.vwr
                          ), this.splitViewFrame = this.tiles.splits[0], this.splitScreen(!1), this.view2.setTree(null), this.updateMarkerVisibility(), this.view.markers.markersVisible.set(
                            !!this.modeis.ctr,
                            "g_m_mode"
                          ), this.view2.markers.markersVisible.set(
                            !!this.modeis.ctr,
                            "g_m_mode"
                          ), this.onViewTweenUpdate(1), this.onViewTweenComplete()
                        }
                      },
                      makeGUI: function () {
                        var e = this;
                        this.gui = new dat.GUI({hideable: !1});
                        this.gui.closed = !0, this.gui.addColor(View3.prototype, "clearColor")
                          .name("Clear")
                          .onChange(s), this.gui.add(View3.prototype, "enableRender")
                          .name("Render")
                          .onChange(s), this.gui.add(View3.prototype, "debugDepth")
                          .name("Show Depth")
                          .onChange(s), this.gui.add(View3.prototype, "enableStencil")
                          .name("Stencil")
                          .onChange(s), this.gui.add(View3.prototype, "enableStencilAA")
                          .name("AA Stencil")
                          .onChange(s), this.gui.add(View3.prototype, "enableStencilBloom")
                          .name("Bloom Stencil")
                          .onChange(s), this.gui.add(View3.prototype, "enableSSAO")
                          .name("SSAO")
                          .onChange(s), this.gui.add(View3.prototype, "halfSizeOcclusion").name("Half SSAO").onChange(
                          function () {
                            e.onresize(), e.view.needsRedraw = !0, e.view2.needsRedraw = !0
                          }), this.gui.add(View3.prototype, "enableOnlyAO").name("Only AO").onChange(s), this.gui.add(
                          View3.prototype,
                          "enableAAAO"
                        ).name("AA AO").onChange(s), this.gui.add(View3.prototype, "enableBlurAO")
                          .name("Blur AO")
                          .onChange(s), this.gui.add(View3.prototype, "enableBloomAO").name("Bloom AO").onChange(s);
                        var t = this.view.smSSAO.uniforms, i = this.gui.addFolder("Occlusion");
                        i.add(t.diffArea, "value").min(0).max(2).name("diffArea").onChange(s), i.add(
                          t.gDisplace,
                          "value"
                        ).min(0).max(2).name("gDisplace").onChange(s), i.add(t.radius, "value").min(0).max(50).name(
                          "radius").onChange(s), i.add(t.aoClamp, "value")
                          .min(0)
                          .max(2)
                          .name("aoClamp")
                          .onChange(s), i.add(t.aoMin, "value")
                          .min(0)
                          .max(1)
                          .name("aoMin")
                          .onChange(s), ["stencilLit", "stencilHover", "stencilSelect"].forEach(function (e) {
                          var t = this.gui.addFolder(e), i = this.view[e].params;
                          t.addColor(i, "drawColor").onChange(s), t.add(i, "drawAlpha")
                            .min(0)
                            .max(1)
                            .onChange(s), t.add(i, "lineAlpha").min(0).max(1).onChange(s), t.add(i, "lineAngle")
                            .min(0)
                            .max(360)
                            .onChange(s), t.add(i, "edgeAlpha").min(0).max(1).onChange(s), t.add(i, "fillAlpha")
                            .min(0)
                            .max(1)
                            .onChange(s)
                        }, this), this.gui.add(this, "explodeStepped").name("Explode Step");
                        var n = this.gui.addFolder("Light");

                        function o() {
                          e.view.updateLights(), e.view.needsRedraw = !0
                        }

                        function s() {
                          e.view.needsRedraw = !0, e.view2.needsRedraw = !0
                        }

                        n.add(this.view, "directAngle")
                          .min(-1)
                          .max(1)
                          .name("Direct Angle")
                          .onChange(o), n.add(this.view, "directK").min(-1).max(1).name("Direct K").onChange(o), n.add(
                          this.view,
                          "directLift"
                        ).min(-1).max(1).name("Direct Lift").onChange(o), n.add(this.view.dirLight, "intensity")
                          .min(0)
                          .max(1)
                          .name("Direct Power")
                          .onChange(s), n.add(this.view.ambLight, "intensity")
                          .min(0)
                          .max(1)
                          .name("Ambient Power")
                          .onChange(s), this.gui.add(this.viewTween, "durationTime")
                          .min(400)
                          .max(1e4)
                          .name("Split Time"), this.gui.add(this, "explodeTimeScale").min(.1).max(90).name("Conn Scale")
                      },
                      fetch: function () {
                        this.get.xml(this.srcAtlas).then(Atlas.setSource), this.get.image(this.srcCubemap)
                          .then(this.imagery.unwrapCubemap3x2, this.imagery), this.get.ready().then(
                          this.run,
                          this,
                          null,
                          !0
                        )
                      },
                      run: function () {
                        this.makeGUI(), new EventHandler(this.onresize, this).listen(
                          "resize",
                          window
                        ), new EventHandler(this.onkey, this).listen(
                          "keydown",
                          window,
                          !0
                        ), new EventHandler(this.onkey, this).listen("keyup", window, !0), new EventHandler(
                          this.onTap,
                          this
                        ).listen("tap", this.element), new EventHandler(this.onDragOver, this).listen(
                          "dragover",
                          this.view.element
                        ), new EventHandler(this.onDragOver, this).listen(
                          "dragover",
                          this.view2.element
                        ), new EventHandler(this.onDrop, this).listen(
                          "drop",
                          this.view.element
                        ), new EventHandler(this.onDrop, this).listen("drop", this.view2.element), this.tiles.events.on(
                          "update",
                          this.onTilesUpdate,
                          this
                        ), this.view.events.on(
                          "connection_select",
                          this.onConnectionSelect,
                          this,
                          [this.view, 0]
                        ), this.view2.events.on(
                          "connection_select",
                          this.onConnectionSelect,
                          this,
                          [this.view2, 1]
                        ), this.view.events.on("view_clear", this.onViewClear, this), this.view2.events.on(
                          "view_clear",
                          this.onViewClear2,
                          this
                        ), this.view.events.on("node_select", this.onNodeSelect, this), dom.display(
                          this.canvas,
                          !0
                        ), this.onresize(), this.view.onTick(0), this.view2.onTick(0), "function" == typeof bootProgress && bootProgress(
                          1), this.ready.resolve(!0), this.initFromHash && this.loadFromHash(), this.timer.play()
                      },
                      loadFromHash: function () {
                        var e = location.hash.slice(1);
                        if (e) try {
                          this.importString(e, !0), location.hash = ""
                        } catch (e) {
                          console.warn("loadFromHash failed:", e)
                        }
                      },
                      onAction: function (e, t) {
                        switch (e) {
                          case"zoom_in":
                            this.view.zoom(1.5), this.view2.zoom(1.5);
                            break;
                          case"zoom_out":
                            this.view.zoom(1 / 1.5), this.view2.zoom(1 / 1.5);
                            break;
                          case"zoom_fit":
                            this.view.focusOnTree(), this.view2.focusOnTree();
                            break;
                          case"explode":
                            this.explode(t);
                            break;
                          case"rotate":
                            this.autorotate(t);
                            break;
                          case"screenshot":
                            this.makeScreenshot()
                        }
                      },
                      getConnectionsArray: function () {
                        return this.tree.retrieveConnections({connected: !0}, !0)
                      },
                      exportJSON: function (e) {
                        return TSerial.toJSON(e || this.tree)
                      },
                      importJSON: function (e, t) {
                        return TSerial.fromJSON(e, this.sampler, t).then(this.setTree1, this)
                      },
                      exportString: function (e) {
                        return TSerial.toString(this.exportJSON(e))
                      },
                      importString: function (e, t) {
                        return this.importJSON(TSerial.fromString(e), t)
                      },
                      litModeStart: function (e, t) {
                        switch (e) {
                          case"replace":
                            this.view.stencilLit.params.drawColor = this.stencilReplaceColor, this.view.stencilRaycastMask = this.view.stencilLit.value | this.view.stencilHover.value | this.view.stencilSelect.value;
                            break;
                          case"delete":
                            this.view.stencilLit.params.drawColor = this.stencilDeleteColor, this.view.stencilRaycastMask = -1;
                            break;
                          case"parent":
                            this.view.stencilLit.params.drawColor = this.stencilReplaceColor, this.view.stencilRaycastMask = 0
                        }
                        t && this.view.litNodeList(t, !0)
                      },
                      litModeClear: function () {
                        this.view.litNodeList(
                          this.view.highlightedNodes,
                          !1
                        ), this.view.needsRedraw = !0, this.view.stencilRaycastMask = -1
                      },
                      shotElement: function (e, a, l, h) {
                        var c = this.viewN;
                        return c || (c = this.viewN = new View3({
                                                                  renderer: this.renderer,
                                                                  imagery: this.imagery,
                                                                  enableStencil: !1,
                                                                  enableRaycast: !1
                                                                })), this.sampler.prepare(e).then(function (e) {
                          var t = c.renderTarget;
                          t && t.width === a && t.height === l || (t = c.renderTarget = new THREE.WebGLRenderTarget(
                            a,
                            l,
                            {
                              minFilter: THREE.LinearFilter,
                              magFilter: THREE.LinearFilter,
                              format: THREE.RGBAFormat
                            }
                          )), c.setSize(a, l), c.setTree(new TNode(e)), c.focusOnTree(0, null, h), c.onTick(0);
                          var i = this.renderer.context, n = t.__webglFramebuffer, o = this.imagery.makeCanvas(a, l),
                            s = o.createImageData(a, l), r = new Uint8Array(s.data.buffer);
                          return i.bindFramebuffer(i.FRAMEBUFFER, n), i.readPixels(
                            0,
                            0,
                            a,
                            l,
                            i.RGBA,
                            i.UNSIGNED_BYTE,
                            r
                          ), o.putImageData(s, 0, 0), o.translate(0, l), o.scale(1, -1), o.drawImage(
                            o.canvas,
                            0,
                            0
                          ), c.setTree(null), o.canvas
                        }, this)
                      },
                      deleteNodeWithPrompt: function (e) {
                        if (e) {
                          var t = e.pinch();
                          t && t.nodes.length && (t.nodes.length < 2 ? this.deleteNodeList(t) : (this.view.selectNode(
                            null), this.view.hoverNode(null), this.litModeStart(
                            "delete",
                            t.nodes
                          ), this.deletePromptTip = new UI.Prompt({
                                                                    tipRoot: this.element,
                                                                    arrow: !1,
                                                                    align: "bottom",
                                                                    distance: 64,
                                                                    point: this.view.projector.addPoint(),
                                                                    attr: {
                                                                      label: ["Do you want to delete", t.nodes.length, "nodes?"].join(
                                                                        " ")
                                                                    },
                                                                    deletingNode: e,
                                                                    deletingList: t,
                                                                    buttonsTemplate: {eventScope: this},
                                                                    buttons: [{
                                                                      data: !0,
                                                                      text: "Yes",
                                                                      events: {active: this.deleteNodeFromPrompt}
                                                                    }, {
                                                                      data: !1,
                                                                      text: "No",
                                                                      events: {active: this.closeDeletePromptAndSelectNode}
                                                                    }]
                                                                  }), this.deletePromptTip.visible.on()))
                        }
                      },
                      deleteNodeFromPrompt: function (e) {
                        var t = this.deletePromptTip;
                        t && (this.deleteNodeList(t.deletingList), this.closeDeletePrompt())
                      },
                      closeDeletePrompt: function () {
                        var e = this.deletePromptTip;
                        e && (this.view.litNodeList(
                          this.view.highlightedNodes,
                          !1
                        ), e.visible.off(), delete this.deletePromptTip)
                      },
                      closeDeletePromptAndSelectNode: function () {
                        var e = this.deletePromptTip;
                        this.view.selectNode(e && e.deletingNode || null), this.closeDeletePrompt()
                      },
                      autorotate: function (e) {
                        this.view.orbit.autoRotate = e, this.view2.orbit.autoRotate = e
                      },
                      onDisplayChange: function (e) {
                        var t = "transparent" === e, i = "normal" === e, n = "wireframe" === e;
                        this.imagery.sampleMaterials.forEach(
                          function (e) {
                            t ? (e.__pl_display_set = !0, e.__pl_transparent = e.transparent, e.__pl_opacity = e.opacity, e.__pl_depthtest = e.depthTest, e.__pl_depthwrite = e.depthWrite, e.transparent = !0, e.opacity = .5, e.depthTest = !1, e.depthWrite = !1, e.needsUpdate = !0) : e.__pl_display_set && (e.transparent = e.__pl_transparent, e.opacity = e.__pl_opacity, e.depthTest = e.__pl_depthtest, e.depthWrite = e.__pl_depthwrite, delete e.__pl_transparent, delete e.__pl_opacity, delete e.__pl_depthtest, delete e.__pl_depthwrite, delete e.__pl_display_set, e.needsUpdate = !0)
                          },
                          this
                        ), this.view.enableRender = i || t, this.view.enableWireframe = n, this.view.needsRedraw = !0, this.view2.enableRender = i || t, this.view2.enableWireframe = n, this.view2.needsRedraw = !0
                      },
                      onProjectionChange: function (e) {
                        var t = this.projectionMenu.getBlock(e), i = "perspective" === e;
                        this.view.camera.fov = i ? 30 : .5, this.view.camera.updateProjectionMatrix(), this.view2.camera.fov = i ? 30 : .5, this.view2.camera.updateProjectionMatrix(), this.view.camera.position.fromArray(
                          t.camera)
                          .setLength(this.view.getFitDistance())
                          .add(this.view.currentDim.center), this.view2.camera.position.fromArray(t.camera).setLength(
                          this.view2.getFitDistance()).add(this.view2.currentDim.center), this.view.orbit.target.copy(
                          this.view.currentDim.center), this.view2.orbit.target.copy(this.view2.currentDim.center), this.view.orbit.orthoMode = !i, this.view2.orbit.orthoMode = !i, this.view.orbit.update(), this.view2.orbit.update(), this.view.needsRedraw = !0, this.view2.needsRedraw = !0
                      },
                      makeScreenshot: function () {
                        var t = (new Date).toISOString().split(".")[0].replace(/:/g, ".");
                        this.canvas.toBlob(function (e) {
                          saveAs(e, "pb-screen-" + t + ".jpg")
                        }, "image/jpeg", .95)
                      },
                      onViewClear: function () {
                        this.clearTree()
                      },
                      onViewClear2: function () {
                        this.splitScreen(!1), this.addElementDefer && this.addElementDefer.reject({status: "canceled"})
                      },
                      clearTree: function () {
                        this.splitScreen(!1), this.tree && this.deleteNodeList(this.tree.pinchr())
                      },
                      onViewTweenUpdate: function (e) {
                        if (this.splitViewFrame) {
                          this.splitViewFrame.position = 1 - this.viewTween.source.split / 2, this.tiles.update();
                          var t = this.explodeEnabled ? this.view.explodeDim : this.view.assembleDim,
                            i = this.splitScreenEnabled ? 5 / 4 : 5 / 3;
                          this.view.focusOnTree(0, t, i, e)
                        }
                      },
                      onViewTweenHalfway: function () {
                        this.updateMarkerVisibility()
                      },
                      onViewTweenStart: function () {
                        dom.display(this.tiles.ehelpers, !0)
                      },
                      onViewTweenComplete: function () {
                        this.splitScreenEnabled || (this.view2.setTree(null), this.sampleView2 = null), dom.display(
                          this.tiles.ehelpers,
                          this.splitScreenEnabled
                        )
                      },
                      explode: function (r) {
                        if (this.explodeStepDefer && (this.explodeStepDefer.abort(), delete this.explodeStepDefer), this.explodeEnabled !== r) {
                          this.explodeEnabled = r, this.actionList.getBlock("explode").set(r);
                          var e = this.view.tree ? this.view : this.view2, t = e.tree;
                          if (t) {
                            var a = this.explodeTimeScale, i = 1500;
                            if (this.explodeStepped) {
                              var l = [], h = 0;
                              t.traverseConnections(function (e, t, i) {
                                e.connected && e.master && (l[i] || (l[i] = []), l[i].push(e))
                              }), function e() {
                                var t = l[h++];
                                if (t) {
                                  for (var i = [], n = 0; n < t.length; n++) {
                                    var o = t[n], s = new Defer;
                                    o.events.once("connect_end", s.resolve, s), o.playConnection(
                                      r ? 0 : 1,
                                      null,
                                      .4 * a
                                    ), i.push(s)
                                  }
                                  this.explodeStepDefer = Defer.all(i).then(e, this)
                                }
                              }.call(this)
                            } else t.traverseConnections(function (e) {
                              e.connected && e.master && (e.playConnection(
                                r ? 0 : 1,
                                null,
                                a
                              ), i < e.transitionTime && (i = e.transitionTime))
                            });
                            var n = i * a, o = r ? e.explodeDim : e.assembleDim, s = r ? 5 / 4 : 4 / 3,
                              c = r ? TWEEN.Easing.Quadratic.Out : TWEEN.Easing.Quadratic.InOut;
                            e.focusOnTree(n, o, s, null, null, c)
                          }
                        }
                      },
                      explodeNode: function (e, t) {
                        e.upcon && e.upcon.connected.playConnection(t ? 0 : 1, null, .6 * this.explodeTimeScale)
                      },
                      splitScreen: function (e) {
                        if (("viewer" !== this.mode || !e) && this.splitScreenEnabled !== !!e) {
                          this.splitScreenEnabled = !!e, this.splitViewMessageVisible.set(
                            this.splitScreenEnabled,
                            "g_svm_screen"
                          ), this.enableViewRaycast.set(!this.splitScreenEnabled, "g_vr:split"), this.view.hoverNode(
                            null), this.view.selectNode(null), this.view.selectConnection(null);
                          var t = this.splitScreenEnabled ? 1 : 0;
                          t !== this.viewTween.target.split && (this.viewTween.target.split = t, this.viewTween.start()), this.updateMarkerVisibility()
                        }
                      },
                      isComplexFigure: function (e) {
                        return e && e.types && e.types.length
                      },
                      isAlias: function (e) {
                        return e && "string" == typeof e
                      },
                      constructNode: function (e, i) {
                        if (!e) return Defer.complete(!0);
                        if (i && !this.isAlias(i) && (console.error(
                          "construct: only string aliases allowed:",
                          i
                        ), i = null), this.ready.pending) return this.ready.then(f.binda(
                          this.constructNode,
                          this,
                          arguments
                        ));
                        var t = this.splitScreenEnabled ? this.view2 : this.view;
                        return this.loading.element.parentNode !== t.element && dom.append(
                          t.element,
                          this.loading.element
                        ), this.loading.setProgress(0), this.loading.visible.on(), this.emptyViewMessageVisible.off(
                          "g_evm_tree"), this.sampler.prepare(e).then(function (e) {
                          this.loading.setProgress(1), this.loading.visible.off();
                          var t = TSerial.isComplex(e) ? TSerial.constructJSON(e, this.sampler, !1) : new TNode(e);
                          return i && t.setId(i), t
                        }, function (e) {
                          throw this.loading.setProgress(1), this.loading.visible.off(), e
                        }, function (e) {
                          this.loading.setProgress(Loader.commonProgress([].concat(e)))
                        }, this)
                      },
                      setTree2: function (e) {
                        if (e) {
                          if (this.view2.setTree(e), this.viewTween.source.split !== this.viewTween.target.split) {
                            var t = 1 - this.viewTween.target.split / 2, i = this.tiles.width * t,
                              n = this.tiles.height;
                            this.view2.focusOnTree(0, null, 5 / 4, null, i / n)
                          }
                          this.updateConnectionGroups(this.view.tree, this.view2.tree), this.updateMarkerVisibility()
                        }
                      },
                      setTree1: function (e) {
                        this.tree = e, this.view.setTree(this.tree), this.emptyViewMessageVisible.set(
                          !this.tree,
                          "g_evm_tree"
                        )
                      },
                      getElementIdList: function () {
                        var t = [];
                        return this.tree.traverse(function (e) {
                          t.push(e.id)
                        }, this), t
                      },
                      getElementById: function (t) {
                        var i = null;
                        return this.tree.traverse(function (e) {
                          if (e.id === t) return i = e, TNode.TRSTOP
                        }), i
                      },
                      updateMarkerVisibility: function () {
                        var e = this.view2.tree && 1 === this.viewTween.target.split && .5 < this.viewTween.source.split;
                        this.debug && (e = !0), this.view.markers.markersVisible.set(
                          !!e,
                          "g_m_split"
                        ), this.view2.markers.markersVisible.set(!!e, "g_m_split")
                      },
                      updateConnectionGroups: function (e, t) {
                        this.cons = e && e.retrieveConnections(
                          {connected: !1},
                          !0
                        ) || [], this.cons2 = t && t.retrieveConnections({connected: !1}, !0) || [];
                        for (var i = [], n = 0; n < this.cons2.length; n++) this.cons2[n].group = -1;
                        for (n = 0; n < this.cons.length; n++) {
                          var o = this.cons[n], s = o.canConnectList(this.cons2);
                          if (o.group = -1, s.length) {
                            for (var r = !1, a = 0; a < i.length; a++) if (f.seq(s, i[a])) {
                              o.group = a, r = !0;
                              break
                            }
                            if (!r) {
                              var l = i.length;
                              o.group = l;
                              for (a = 0; a < s.length; a++) s[a].group = l;
                              i.push(s)
                            }
                          }
                        }
                        this.hasAvailableConnections = i.length, this.splitViewMessageVisible.set(
                          !this.hasAvailableConnections,
                          "g_svm_cons"
                        ), this.updateSplitViewMessagePosition(), this.updateConnectionVisibilitySets(), this.addElementDefer && !this.hasAvailableConnections && this.addElementDefer.reject(
                          {status: "rejected", reason: "no match"}), this.view.needsRetrace = !0
                      },
                      updateConnectionVisibilitySets: function () {
                        if (this.cons) for (var e = 0; e < this.cons.length; e++) this.updateConnectionVisibility(
                          this.cons[e],
                          this.connectionParts[1]
                        );
                        if (this.cons2) for (e = 0; e < this.cons2.length; e++) this.updateConnectionVisibility(
                          this.cons2[e],
                          this.connectionParts[0]
                        )
                      },
                      updateConnectionVisibility: function (e, t) {
                        var i = -1 !== e.group, n = !t || e.canConnect(t);
                        e.inactive.set(
                          !i || !n,
                          "view2"
                        ), e.marker && (e.marker.visible.set(
                          !this.hasAvailableConnections || i,
                          "active"
                        ), e.marker.updateState())
                      },
                      connectRandomNode: function () {
                        var e = f.sort(this.sampler.samples.slice(), Math.random);
                        if (!this.tree && e.length) return this.constructNode(e[0].src).then(this.setTree1, this);
                        var t = this.tree.retrieveConnections({connected: !1}, !0);
                        f.sort(t, Math.random);
                        for (var i = 0; i < t.length; i++) for (var n = t[i], o = n.joint, s = 0; s < e.length; s++) {
                          var r = e[s];
                          if (r.object) for (var a = 0; a < r.joints.length; a++) {
                            var l = r.joints[a];
                            if (o.canConnect(l)) {
                              var h = new TNode(r);
                              return this.makeConnection(
                                n,
                                h.connections[a],
                                !0
                              ), void h.upcon.rotate(f.rand(4) * Math.PI / 2)
                            }
                          } else this.sampler.prepare(r.src)
                        }
                      },
                      connectNodeSomewhere: function (e) {
                        if (e) {
                          if (!this.tree) return this.setTree1(e);
                          var t = this.tree.retrieveConnections({connected: !1}, !0);
                          f.sort(t, Math.random);
                          e:for (var i = 0; i < t.length; i++) for (var n = t[i], o = 0; o < e.connections.length; o++) {
                            var s = e.connections[o];
                            if (s.canConnect(n)) {
                              this.makeConnection(n, s, !0);
                              break e
                            }
                          }
                          this.splitScreenEnabled && this.updateConnectionGroups(this.view.tree, this.view2.tree)
                        }
                      },
                      commonMethodMessages: {
                        src: "bad element: [#{src}]",
                        id: "invalid node id: [#{id}]",
                        con: "node [#{type}] don't have connection: [#{index}]",
                        used: "connection [#{type}][#{index}] already used",
                        match: "connections [#{typeA}][#{indexA}] and [#{typeB}][#{indexB}] don't match"
                      },
                      deferMethod: function (o, s, r, e) {
                        return (new Defer).anyway(function (e, t) {
                          var i = {method: o, params: s, success: t, status: t ? "connected" : "rejected"};
                          if ("object" == typeof e && f.copy(i, e), !t) {
                            var n = this.commonMethodMessages;
                            i.reason = e ? e.msg ? n[e.msg] ? f.implode(
                              n[e.msg],
                              e
                            ) : "undefined error" : e : "unknown error"
                          }
                          if (this.events.emit(r, i), t) return e;
                          throw i
                        }, this)
                      },
                      addElement: function (e, t, i) {
                        var n = this.deferMethod("addElement", arguments, "onAddElement");
                        this.view2.setTree(null);
                        var o = this.tree && "viewer" !== this.mode;
                        return this.splitScreen(o), this.addElementDefer = new Defer(function (e) {
                          var t = [];
                          return e.traverse(function (e) {
                            t.push(e.id)
                          }), {root: e, nodes: t}
                        }, this), this.constructNode(t, e).then(function (e) {
                          o ? this.setTree2(e) : (this.setTree1(e), this.addElementDefer.resolve(e))
                        }, this), this.addElementDefer.push(n)
                      },
                      connectElement: function (e, o, t, s, r, i) {
                        var a = this.deferMethod("connectElement", arguments, "onConnectElement"),
                          l = this.getElementById(t);
                        l || a.reject({msg: "id", id: t});
                        var h = l.connections[s];
                        return h || a.reject({
                                               msg: "con",
                                               type: l.type,
                                               index: s
                                             }), h.connected && a.reject({
                                                                           msg: "used",
                                                                           type: l.type,
                                                                           index: s
                                                                         }), this.constructNode(e, i)
                          .then(function (e) {
                            var t = e.connections[o];
                            t || a.reject({
                                            msg: "con",
                                            type: e.type,
                                            index: o
                                          }), h.canConnect(t) || a.reject({
                                                                            msg: "match",
                                                                            typeA: e.type,
                                                                            indexA: o,
                                                                            typeB: l.type,
                                                                            indexB: s
                                                                          });
                            var i = [], n = t.node;
                            n.traverse(function (e) {
                              i.push(e.id)
                            }), this.makeConnection(h, t, r), a.resolve({root: n, nodes: i})
                          }, function () {
                            a.reject({msg: "src", src: e})
                          }, this), a
                      },
                      replaceElement: function (e, t) {
                        var i = this.deferMethod("replaceElement", arguments, "onReplaceElement");
                        return this.tree ? this.sampler.prepare(e).then(function (e) {
                          return this.replaceElementBySample(e, t)
                        }, this).push(i) : i.reject("nothing to replace"), i
                      },
                      replaceElementBySample: function (i, n) {
                        if (!this.tree) throw"nothing to replace";
                        if (!i) throw"bad element";
                        var t = [];
                        if (-1 === n || 0 === n) this.tree.traverse(function (e) {
                          e.canBeReplacedBy(i) && t.push(e)
                        }, this); else {
                          var e = n instanceof TNode ? n : this.getElementById(n);
                          if (!e) throw"invalid param: " + n;
                          if (!e.canBeReplacedBy(i)) throw"sample can't replace this node: " + n;
                          t.push(e)
                        }
                        if (!t.length) throw"no suitable nodes";
                        if (0 === n && 1 < t.length) return this.litModeStart(
                          "replace",
                          t
                        ), this.issuedReplaceDefer = new Defer(function (e) {
                          delete this.issuedReplaceDefer, this.litModeClear();
                          var t = this.replaceNode(e, i, !0);
                          return {status: "replaced", replaced: [e.id], nodes: [t.id]}
                        }, this);
                        var o = "constructor" === this.mode && 1 === t.length, s = [];
                        return t.forEach(function (e) {
                          var t = this.replaceNode(e, i, o, n);
                          s.push(t.id)
                        }, this), this.view.needsRedraw = !0, {
                          status: "replaced",
                          replaced: t.map(f.prop("id")),
                          nodes: s
                        }
                      },
                      replaceNode: function (e, t, i, n) {
                        if (!e || !t || !e.canBeReplacedBy(t)) return null;
                        var o = new TNode(t), s = e.upcon ? this.view.tree : o, r = e.upcon ? e.upcon.rotar : 0;
                        return this.isAlias(n) && o.setId(n), o.replace(e), r && o.upcon && o.upcon.rotate(
                          r,
                          !1
                        ), this.setTree1(s), i && this.view.selectNode(o), o
                      },
                      getNodeReplacers: function (e, t) {
                        var i = [];
                        if (e) for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          e.canBeReplacedBy(o) && i.push(o)
                        }
                        return i
                      },
                      preloadAllSamples: function () {
                      },
                      showNodeParent: function (e, t) {
                        var i = e && e.upnode;
                        i && (t ? this.litModeStart("parent") : this.litModeClear(), this.view.litNode(i, t))
                      },
                      rotateElement: function (e, t, i) {
                        "number" != typeof t && (t = Math.PI / 6), e instanceof TNode == !1 && (e = this.getElementById(
                          e)), e && (e.rotate(t, !0), this.view.needsRedraw = !0)
                      },
                      deleteNodeList: function (e) {
                        e && (e.nextRoot && this.tree !== e.nextRoot && e.nextRoot.goRoot(!1), e.removeCon && e.removeCon.disconnect(), this.setTree1(
                          e.nextRoot), this.events.emit("onRemoveElement", {
                          nodes: e.nodes.map(function (e) {
                            return e.id
                          })
                        }))
                      },
                      onkey: function (e) {
                        if (this.enableHotkeys) {
                          if (e.altKey) ; else if (this.pasting && !kbd.down) this.pasting = !1, this.onPasteEnd(); else if (kbd.down && e.ctrlKey) switch (kbd.key) {
                            case"c":
                            case"x":
                              return void this.onCopy();
                            case"v":
                              return void this.onPasteEnd();
                            case"a":
                              return console.log("select all"), void e.preventDefault()
                          } else if (kbd.down && kbd.changed) switch (kbd.key) {
                            case"ENTER":
                              return void this.deleteNodeFromPrompt();
                            case"ESC":
                              return void this.closeDeletePromptAndSelectNode();
                            case"DEL":
                              return void this.deleteNodeWithPrompt(this.view.nodeSelected);
                            case"u":
                              return void (location.hash = this.exportString());
                            case"o":
                              return void this.explode(!this.explodeEnabled);
                            case"m":
                              return void (this.view.nodeSelected && (this.view.nodeSelected.goRoot(), this.setTree1(
                                this.view.nodeSelected)));
                            case"x":
                              this.debug = !this.debug, this.imagery.materials.subtract.visible = !!this.debug, this.imagery.materials.norcon.visible = !!this.debug, this.updateMarkerVisibility();
                              break;
                            case"r":
                              kbd.state.SHIFT ? this.rotateElement(this.view.nodeSelected) : this.onViewClear();
                              break;
                            case"e":
                              this.preloadAllSamples(), this.emptyViewMessageVisible.off("g_evm_tree");
                              break;
                            case"v":
                              return void (this.gui.closed ? this.gui.open() : this.gui.close())
                          }
                          this.view.onKey(e), this.view2.onKey(e)
                        }
                      },
                      onCopy: function () {
                        dom.text(
                          this.clipboard,
                          this.exportString()
                        ), this.clipboard.focus(), this.clipboard.select(), console.log(
                          "onCopy",
                          this.clipboard.textContent
                        )
                      },
                      onPaste: function () {
                        dom.text(this.clipboard, ""), this.clipboard.focus(), this.clipboard.select(), console.log(
                          "onPaste")
                      },
                      onPasteEnd: function () {
                        var e = TSerial.fromString(this.clipboard.textContent);
                        this.addElement(null, e), console.log("onPasteEnd", e)
                      },
                      onresize: function () {
                        var e = this.tiles.element, t = e.offsetWidth || 1, i = e.offsetHeight || 1;
                        this.renderer.setSize(t, i), this.tiles.autoresize(), this.view.resizeRenderTargets(
                          t,
                          i
                        ), this.view2.rtDepthStencil = this.view.rtDepthStencil, this.view2.rt1 = this.view.rt1, this.view2.rt2 = this.view.rt2, this.view2.rtB1 = this.view.rtB1, this.view2.rtB2 = this.view.rtB2, this.view.updateViewportSize(), this.view2.updateViewportSize()
                      },
                      updateSplitViewMessagePosition: function () {
                        if (this.splitViewFrame) {
                          var e = this.splitViewMessage, t = this.splitViewFrame, i = e.offsetWidth, n = e.offsetHeight,
                            o = t.split === TileView.VERTICAL_SPLIT ? .5 : t.position,
                            s = t.split === TileView.HORIZONTAL_SPLIT ? .5 : t.position, r = t.x + t.w * o - i / 2,
                            a = t.y + t.h * s - n / 2;
                          e.style.left = r + "px", e.style.top = a + .3 * t.h + "px"
                        }
                      },
                      onTilesUpdate: function () {
                        this.hasAvailableConnections || this.updateSplitViewMessagePosition()
                      },
                      onTap: function (e) {
                        this.deletePromptTip && (e.target !== this.view.element && e.target !== this.view2.element || this.closeDeletePromptAndSelectNode())
                      },
                      onDragOver: function (e) {
                        (this.catchFiles || this.catchSamples) && (e.dataTransfer.dropEffect = "copy", e.preventDefault())
                      },
                      onDrop: function (e) {
                        var t = e.dataTransfer;
                        if (t.files && t.files.length) this.catchFiles && this.importFile(t.files[0]); else if (this.catchSamples) {
                          var i = t.getData("text/sid");
                          i && this.constructNode(i).then(this.connectNodeSomewhere, this)
                        }
                        e.preventDefault()
                      },
                      importFile: function (e) {
                        return this.sampler.readFile(e).anyway(function (e, t) {
                          this.events.emit("onImportElement", t ? e : null)
                        }, this)
                      },
                      onNodeSelect: function (e, t) {
                        t && t.nodeMarker && (t.nodeMarker.destroy(), t.nodeMarker = null), this.issuedReplaceDefer && e && e.lit ? this.issuedReplaceDefer.resolve(
                          e) : (this.view.selectedConnection || (e ? (e.nodeMarker = new UI.NodeMarker({
                                                                                                         system: this.view.markers,
                                                                                                         hidden: !1,
                                                                                                         node: e,
                                                                                                         events: {
                                                                                                           node_rotate: this.rotateElement,
                                                                                                           node_delete: this.deleteNodeWithPrompt,
                                                                                                           node_explode: this.explodeNode,
                                                                                                           node_parent: this.showNodeParent
                                                                                                         },
                                                                                                         eventScope: this
                                                                                                       }), this.view.focusOnNode(
                          e), this.closeDeletePrompt()) : this.closeDeletePromptAndSelectNode()), this.events.emit(
                          "onNodeSelect",
                          [e && e.id, t && t.id]
                        ))
                      },
                      onConnectionSelect: function (e, t, i) {
                        this.connectionParts[t] = i, this.updateConnectionVisibilitySets();
                        var n = this.connectionParts[0], o = this.connectionParts[1];
                        if (n && o) {
                          this.view.selectConnection(null), this.view2.selectConnection(null), this.view2.setTree(null);
                          var s = [];
                          o.node.traverse(function (e) {
                            s.push(e.id)
                          }), this.makeConnection(
                            n,
                            o,
                            !0
                          ), this.splitScreen(!1), this.addElementDefer && this.addElementDefer.resolve(o.node)
                        }
                      },
                      makeConnection: function (e, t, i) {
                        if (t.node.goRoot(!0), t.object.updateMatrixWorld(), e.node.connect(
                          e.index,
                          t.node,
                          t.index
                        ), !i || this.explodeEnabled) {
                          var n = this.explodeEnabled ? 0 : 1;
                          e.playConnection(n, n, 0)
                        } else i && e.playConnection(1, 0, this.explodeTimeScale);
                        this.view.setTree(this.tree)
                      },
                      onTick: function (e, t) {
                        kbd.state.t && this.connectRandomNode(), this.view.onTick(t), this.view2.onTick(t);
                        var i = this.view.nodeSelected && this.view.nodeSelected.nodeMarker;
                        if (i && (this.view.nodeSelected.getCenter(i.point.world), this.view.projector.updatePoint(i.point), i.update()), this.deletePromptTip) {
                          var n = this.deletePromptTip.deletingNode, o = this.deletePromptTip.point;
                          n.getCenter(o.world), this.view.projector.updatePoint(o), this.deletePromptTip.move(
                            o.screen.x,
                            o.screen.y
                          )
                        }
                      }
                    });
