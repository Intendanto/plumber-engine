var THREE = require('three');

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
  }, this.scale = {x: 1, y: 1}, this.moves = 0, this.min = {x: -(1 / 0), y: -(1 / 0)}, this.max = {
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
  this.skybox = new THREE.CubeTexture([e, e, e, e, e, e]), this.skybox.needsUpdate = !0, this.baseMaps = {
    norcon: {color: 16777215},
    subtract: {color: 16726391},
    connection: {color: "black"},
    wireframe: {color: "black"},
    normal: {},
    void: {}
  }, this.sampleMaterials = [], this.materials = {}, this.usedProducts = {};
  for (var t in this.baseMaps) this.addMaterial(t), this.setMaterial(t, null);
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

window.f = {}, f.nop = function () {
}, f.identity = function (e) {
  return e
}, f.nextprime = function (e) {
  if (!e) return [2, 3];
  e:for (var t = e[e.length - 1] + 2; 1; t++) {
    for (var i = 0; i < e.length; i++) if (t % e[i] === 0) continue e;
    return e.push(t), e
  }
}, f.factorize = function (e, t) {
  t || (t = f.nextprime());
  for (var i = [], n = e, o = 0; n > 1;) {
    for (; o > t.length - 1;) f.nextprime(t);
    for (var s = 0, r = t[o]; n / r % 1 === 0;) n /= r, s++;
    i.push(s), o++
  }
  return i
}, f.lcm = function (e) {
  for (var t = [], i = 0, n = f.nextprime(), o = 0; o < e.length; o++) for (var s = f.factorize(
    e[o],
    n
  ), i = Math.max(s.length, t.length), r = 0; r < i; r++) t[r] = Math.max(s[r] || 0, t[r] || 0);
  for (var a = 1, o = 0; o < t.length; o++) a *= t[o] * n[o];
  return a
}, f.sum = function (e, t) {
  return e + t
}, f.sub = function (e, t) {
  return e - t
}, f.nsort = function (e, t) {
  var i = t ? -1 : 1;
  return function (t, n) {
    return null == t || null == n ? -1 : i * (t[e] - n[e])
  }
}, f.zerosort = function (e, t) {
  return e && t ? e[0] - t[0] : 0
}, f.sort = function (e, t, i) {
  for (var n = e.length, o = [], s = 0; s < n; s++) {
    var r = e[s];
    o.push([t.call(i, r), r])
  }
  o.sort(f.zerosort);
  for (var s = 0; s < n; s++) e[s] = o[s][1];
  return e
}, f.max = function (e) {
  return Math.max.apply(0, e)
}, f.min = function (e) {
  return Math.min.apply(0, e)
}, f.amap = function (e, t, i, n, o, s) {
  if (e && e.length && "function" == typeof t) for (var r = 0, a = []; r < e.length; r++) a.push(t.call(
    i,
    e[r],
    n,
    o,
    s
  ));
  return a
}, f.atog = function (e, t, i) {
  if (e) {
    for (var n = e.length - 1; n >= 0; n--) if (e[n] === t) {
      if (i) return;
      e.splice(n, 1)
    }
    i && e.push(t)
  }
}, f.apick = function (e, t, i, n) {
  if (e) for (var o, s = 0, r = e.length; s < r; s++) if (o = e[s], (o && o[t] === i) ^ n) return o
}, f.apickf = function (e, t, i, n) {
  if (e) for (var o, s = 0, r = e.length; s < r; s++) if (o = e[s], t.call(i, o) ^ n) return o
}, f.afind = function (e, t, i, n) {
  if (e) for (var o, s = 0, r = e.length, a = []; s < r; s++) o = e[s], (o && o[t] === i) ^ n && a.push(o);
  return a
}, f.afindf = function (e, t, i, n) {
  if (e) for (var o, s = 0, r = e.length, a = []; s < r; s++) o = e[s], t.call(i, o) ^ n && a.push(o);
  return a
}, f.adiff = function (e, t) {
  for (var i = {
    prev: t || [],
    next: e || [],
    rem: [],
    remi: [],
    remc: 0,
    add: [],
    addi: [],
    addc: 0
  }, n = i.prev.length - 1; n >= 0; n--) {
    var o = i.prev[n], s = i.next.indexOf(o);
    s === -1 && (i.rem.push(o), i.remi.push(n), i.remc++)
  }
  for (var s = 0; s < i.next.length; s++) {
    var o = i.next[s], n = i.prev.indexOf(o);
    n === -1 && (i.add.push(o), i.addi.push(s), i.addc++)
  }
  return i
}, f.adrop = function (e, t) {
  var i = e.indexOf(t);
  return ~i && e.splice(i, 1), e
}, f.aflat = function (e) {
  return [].concat.apply([], e)
}, f.jeq = function (e, t) {
  if (e === t) return !0;
  var i = typeof e, n = typeof t;
  if (i !== n) return !1;
  switch (i) {
    case"boolean":
    case"number":
    case"string":
      return !1
  }
  if (!e || !t) return !1;
  if (e.length !== t.length) return !1;
  var o;
  for (o in e) if (o in t == !1) return !1;
  for (o in t) if (!f.jeq(e[o], t[o])) return !1;
  return !0
}, f.seq = function (e, t) {
  return e.length === t.length && 0 === f.snot(e, t).length
}, f.sor = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var i = arguments[t];
    if (i) for (var n = 0; n < i.length; n++) {
      var o = i[n];
      e.indexOf(o) === -1 && e.push(o)
    }
  }
  return e
}, f.sand = function (e, t) {
  if (!e || !t) return [];
  for (var i = [], n = 0, o = e.length; n < o; n++) {
    var s = e[n];
    t.indexOf(s) !== -1 && i.indexOf(s) === -1 && i.push(s)
  }
  return i
}, f.sxor = function (e, t) {
  if (!e || !t) return e ? e : t ? t : [];
  for (var i = [].concat(e, t), n = i.length - 1; n >= 0; n--) {
    var o = i.indexOf(i[n]);
    n !== o && (i.splice(n, 1), i.splice(o, 1), n--)
  }
  return i
}, f.snot = function (e, t) {
  e = e || [], t = t || [];
  for (var i = [], n = 0, o = e.length; n < o; n++) {
    var s = e[n];
    t.indexOf(s) === -1 && i.indexOf(s) === -1 && i.push(s)
  }
  return i
}, f.uniqp = function (e, t) {
  return function (i, n, o) {
    return !e ^ o.indexOf(i) === (t ? o.lastIndexOf(i) : n)
  }
}, f.uniq = function (e, t, i) {
  return i.indexOf(e) === t
}, f.uniqi = function (e, t, i) {
  return i.indexOf(e) !== t
}, f.uniqm = function (e, t, i) {
  return i.indexOf(e) === i.lastIndexOf(e)
}, f.uniqim = function (e, t, i) {
  return i.indexOf(e) !== i.lastIndexOf(e)
}, f.clamp = function (e, t, i) {
  return e < t ? t : e > i ? i : e
}, f.rand = function (e) {
  return Math.floor(Math.random() * (+e || 1))
}, f.any = function (e) {
  return e && e[f.rand(e.length)]
}, f.exp = function (e) {
  var t = 0, i = Math.abs(e);
  if (0 === i || !isFinite(i)) return i;
  if (i < 1) for (; Math.pow(10, t) > i;) t--; else for (; Math.pow(10, t + 1) <= i;) t++;
  return t
}, f.hround = function (e) {
  return Math.round(100 * e) / 100
}, f.pround = function (e, t) {
  var i = +t || 0;
  if (i < 0) {
    var n = Math.pow(10, -i);
    return Math.round(e / n) * n
  }
  var n = Math.pow(10, i);
  return Math.round(e * n) / n
}, f.mround = function (e, t) {
  return f.pround(e, t - f.exp(e))
}, f.xrad = Math.PI / 180, f.torad = function (e) {
  return e * f.xrad
}, f.xdeg = 180 / Math.PI, f.todeg = function (e) {
  return e * f.xdeg
}, f.radist = function (e) {
  return Math.abs(e) > Math.PI ? e - 2 * Math.PI * Math.ceil(Math.floor(Math.abs(e) / Math.PI) / 2) * (e < 0 ? -1 : 1) : e
}, f.prop = function (e) {
  var t = arguments;
  return function (e) {
    for (var i = 0; e && i < t.length; i++) e = e[t[i]];
    return e
  }
}, f.pset = function (e, t) {
  return function (i) {
    i[e] = t
  }
}, f.func = function (e) {
  for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
  return function (i) {
    return i[e] && "function" == typeof i[e].apply && i[e].apply(i, t)
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
  for (var n in t) i.indexOf(n) !== -1 && Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e
}, f.merge = function () {
  for (var e = {}, t = 0; t < arguments.length; t++) f.copy(e, arguments[t]);
  return e
}, f.throttle = function (e, t) {
  var i = 0;
  return function () {
    var n = new Date;
    if (n - i > e) return i = n, t.apply(this, arguments)
  }
}, f.postpone = function (e, t) {
  function i() {
    o ? (o = !1, setTimeout(i, e)) : (n = !1, t())
  }

  var n = !1, o = !1;
  return function () {
    n ? o = !0 : (n = !0, setTimeout(i, e))
  }
}, f.charmap = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", f.randchar = function () {
  return f.any(f.charmap)
}, f.implode = function (e, t, i, n) {
  return i || (i = /#\{(\w+)\}/g), e.replace(i, function (e, i) {
    return i in t ? t[i] : n ? e : ""
  })
}, f.nzformat = function (e, t, i) {
  if (isNaN(e)) return e + "";
  var n = Math.abs(e), o = t - Math.max(0, f.exp(n)), s = o > 1 ? Array(o).join(i || "0") : "";
  return (e < n ? "-" : "") + s + n
}, f.nformat = function (e, t, i) {
  var n = Math.abs(e), o = e < n, s = isNaN(e) ? 2 : f.exp(n), r = i ? "0" : " ", a = t - Math.max(0, s) - o - 1,
    l = a > 1 ? Array(a).join(r) : "", h = i && o ? "-" : r, c = !i && o ? e : n;
  return h + l + c
}, f.dformat = function (e, t) {
  var i = {Y: "getFullYear", M: "getMonth", D: "getDate", h: "getHours", i: "getMinutes", s: "getSeconds"}, n = {M: 1};
  return t.replace(/([YMDhis])(\1+)?/g, function (t, o) {
    return f.nzformat(e[i[o]]() + (n[o] || 0), t.length)
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
  for (var r = 0; r < i; r++) for (var l = s[r], h = 0; h < n; h++) {
    var c = l[h], d = o[h], u = Array(d + 1 - c.length).join(" ");
    l[h] = (t.align instanceof Array ? t.align[h] : t.align) ? c + u : u + c
  }
  for (var p = [], r = 0; r < i; r++) p.push(s[r].join(t.join));
  return p.join("\n")
}, f.tindsym = ["└", "├", " ", "│"], f.tind = function (e) {
  for (var t = ""; e > 1; e >>= 1) t = f.tindsym[e % 2 + 2 * !!t.length] + t;
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
  for (var c = h.length, d = n.reverse, u = d ? c - 1 : 0; d ? u >= 0 : u < c; d ? u-- : u++) f.tmap(
    h[u],
    t,
    i,
    n,
    o + 1,
    (s << 1) + +(u < c - 1),
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
}, f.bindr = function (e, t, i, n) {
  if ("function" != typeof e) throw Error("object to bind is not a function");
  return function () {
    for (var o = [], s = 0, r = 0; r < i.length; r++) o.push(i[r] === n ? arguments[s++] : i[r]);
    for (; s < arguments.length;) o.push(arguments[s++]);
    return e.apply(t, o)
  }
}, f.unit = function (parent, object) {
  arguments.length < 2 && "function" != typeof parent && (object = parent, parent = null);
  var proto = parent ? f.copy(Object.create(parent.prototype), object) : object,
    Unit = eval("(function " + (proto.unitName || "Unit") + '() {if(typeof this.init === "function") this.init.apply(this, arguments)})');
  return Unit.New = function () {
    var e = Object.create(Unit.prototype);
    return Unit.apply(e, arguments), e
  }, Unit.prototype = proto, proto.protochain = proto.protochain ? proto.protochain.concat(proto) : [proto], proto.constructor = Unit, Unit
}, !function () {
  if (Date.now || (Date.now = function () {
    return (new Date).getTime()
  }), window.performance || (window.performance = {}), !window.performance.now) {
    var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
    window.performance.now = function () {
      return Date.now() - e
    }
  }
}(), !function () {
  function e(e) {
    1 === e.which && (l.moves = 0, l.startEvent = e, l.startPoint = e, document.addEventListener("mousemove", t, !0))
  }

  function t(e) {
    l.startPoint.pageX === e.pageX && l.startPoint.pageY === e.pageY || l.moves++
  }

  function i(e) {
    document.removeEventListener("mousemove", t, !0), l.endPoint = e, l.endEvent = e, r(l)
  }

  function n(e) {
    h.startPoint = e.changedTouches[0], h.startEvent = e, h.moves = 0
  }

  function o(e) {
    h.startPoint.pageX === e.pageX && h.startPoint.pageY === e.pageY || h.moves++
  }

  function s(e) {
    h.endPoint = e.changedTouches[0], h.endEvent = e, r(h)
  }

  function r(e) {
    if (e.startPoint && e.endPoint && !(e.moves > 2)) {
      var t = e.endPoint.pageX - e.startPoint.pageX, i = e.endPoint.pageY - e.startPoint.pageY, n = e.touch ? 64 : 25;
      if (!(t * t + i * i > n)) {
        var o = window.performance.now();
        if (!(o - a < 50 && e.endEvent.isTrusted)) {
          a = o;
          var s = new MouseEvent(
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
          s.touch = e.touch, s.timeDelta = e.endEvent.timeStamp - e.startEvent.timeStamp;
          var r = e.endEvent.target;
          e.startPoint = null, e.endPoint = null, e.startEvent = null, e.endEvent = null, r.dispatchEvent(s)
        }
      }
    }
  }

  var a, l = {startPoint: null, startEvent: null, endPoint: null, endEvent: null, touch: !1, moves: 0},
    h = {startPoint: null, startEvent: null, endPoint: null, endEvent: null, touch: !0, moves: 0};
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
  document.addEventListener("touchstart", n, !0), document.addEventListener(
    "touchmove",
    o,
    !0
  ), document.addEventListener("touchend", s, !0), document.addEventListener(
    "mousedown",
    e,
    !0
  ), document.addEventListener("mouseup", i, !0)
}(), Function.prototype.bind || (Function.prototype.bind = function (e) {
  var t = Array.prototype.slice.call(arguments, 1), i = this;
  return function () {
    var n = Array.prototype.slice.call(arguments);
    return i.apply(e, t.concat(n))
  }
}), window.requestAnimationFrame = window.requestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
  return setTimeout(e, 1e3 / 60)
}, window.cancelAnimationFrame = window.cancelAnimationFrame || window.OCancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout,
  window.dom = {}, dom.one = function (e, t) {
  return (t || document).querySelector(e)
}, dom.all = function (e, t) {
  return [].slice.call((t || document).querySelectorAll(e))
}, dom.elem = function (e, t, i) {
  var n = document.createElement(e);
  return t && (n.className = t), i && i.appendChild(n), n
}, dom.span = function (e, t) {
  return dom.elem("span", e, t)
}, dom.div = function (e, t) {
  return dom.elem("div", e, t)
}, dom.input = function (e, t, i) {
  var n = dom.elem("input", t, i);
  return n.setAttribute("type", e), n
}, dom.option = function (e, t, i) {
  var n = dom.elem("option", null, i);
  return dom.text(n, t), n.value = e, n
}, dom.img = function (e, t, i) {
  var n = dom.elem("img", t, i);
  return e && (n.src = e), n
}, dom.a = function (e, t, i) {
  var n = dom.elem("a", t, i);
  return e && (n.href = e), n
}, dom.append = function (e, t) {
  if (e instanceof Node) for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i];
    t instanceof Node && e.appendChild(t)
  }
  return e
}, dom.prepend = function (e, t) {
  e instanceof Node && t instanceof Node && e.insertBefore(t, e.firstChild)
}, dom.insert = function (e, t, i) {
  e instanceof Node && t instanceof Node && e.insertBefore(t, i instanceof Node ? i : null)
}, dom.remove = function () {
  for (var e = 0; e < arguments.length; e++) {
    var t = arguments[e];
    t && t.parentNode && t.parentNode.removeChild(t)
  }
}, dom.empty = function (e) {
  for (; e.firstChild;) e.removeChild(e.firstChild)
}, dom.children = function () {
  function e(e) {
    return e.nodeType === Node.ELEMENT_NODE
  }

  var t = Array.prototype.slice;
  return function (i) {
    return t.call(i.childNodes).filter(e)
  }
}(), dom.ancestor = function (e, t) {
  for (; e;) {
    if (e === t) return !0;
    e = e.parentNode
  }
}, dom.onceover = function (e, t) {
  return !dom.ancestor(e.relatedTarget, t) && dom.ancestor(e.target, t)
},dom.onceout = function (e, t) {
  return !dom.ancestor(e.relatedTarget, t)
},dom.on = function (e, t, i, n) {
  t.addEventListener(e, i, !!n)
},dom.off = function (e, t, i, n) {
  t.removeEventListener(e, i, !!n)
},dom.pos = function (e, t, i) {
  e && (null != t && (e.style.left = "number" == typeof t ? Math.round(t) + "px" : t), null != i && (e.style.top = "number" == typeof i ? Math.round(
    i) + "px" : i))
},dom.size = function (e, t, i) {
  e && (null != t && (e.style.width = "number" == typeof t ? Math.round(t) + "px" : t), null != t && (e.style.height = "number" == typeof i ? Math.round(
    i) + "px" : i))
},dom.style = function (e, t) {
  f.copy(e.style, t)
},dom.xstyle = function (e, t, i) {
  var n = e.style;
  n["-webkit-" + t] = i, n["-moz-" + t] = i, n["-ms-" + t] = i, n["-o-" + t] = i, n[t] = i
},dom.attr = function (e, t, i) {
  e && (null == i ? e.removeAttribute(t) : e.setAttribute(t, i))
},dom.html = function (e, t) {
  e.innerHTML = t
},dom.text = function (e, t) {
  e.textContent = t
},dom.display = function (e, t, i) {
  e.style.display = t ? null != i ? i : "block" : "none"
},dom.visible = function (e, t) {
  e.style.visibility = t ? "visible" : "hidden"
},dom.respace = /\s+/,dom.addclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = t.split(dom.respace).filter(Boolean), o = f.sor(i, n);
    f.snot(o, i).length && (e.className = o.join(" "))
  }
},dom.remclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = t.split(dom.respace).filter(Boolean), o = f.snot(i, n);
    f.snot(i, o).length && (e.className = o.join(" "))
  }
},dom.hasclass = function (e, t, i) {
  if (e && t) {
    var n = e.className.split(dom.respace).filter(Boolean), o = t.split(dom.respace).filter(Boolean),
      s = f.sand(n, o).length;
    return i ? s : s === o.length
  }
},dom.togclass = function (e, t, i) {
  e && t && (arguments.length < 3 && (i = !dom.hasclass(e, t)), (i ? dom.addclass : dom.remclass)(e, t))
},dom.setclass = function (e, t) {
  if (e && t) {
    var i = e.className.split(dom.respace).filter(Boolean), n = i.slice();
    for (var o in t) f.atog(n, o, !!t[o]);
    f.sxor(i, n).length && (e.className = n.join(" "))
  }
},dom.offset = function (e, t, i) {
  for (var n = 0, o = 0; e && e !== t; e = e.offsetParent) n += e.offsetLeft || 0, o += e.offsetTop || 0, i && (n -= e.scrollLeft || 0, o -= e.scrollTop || 0);
  return {x: n, y: o}
},dom.out = function (e) {
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
},dom.ready = function (e) {
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
    for (var e = 65; e <= 90; e++) kbd.map[e] = String.fromCharCode(e).toLowerCase();
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
},kbd.init();
var perf = {
  precision: 4, values: {}, time: function () {
    return window.performance && window.performance.now ? window.performance.now() : Date.now ? Date.now() : (new Date).getTime()
  }, start: function (e) {
    var t = perf.values[e];
    t || (t = perf.values[e] = {
      totalTime: 0,
      totalCycles: 0,
      totalBest: 1 / 0,
      totalWorst: -(1 / 0),
      localTime: 0,
      localCycles: 0,
      localBest: 1 / 0,
      localWorst: -(1 / 0),
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
    t && (t.localTime = 0, t.localCycles = 0, t.localBest = 1 / 0, t.localWorst = -(1 / 0))
  }, show: function (e, t) {
    var i = perf.values[e];
    return i ? (console.log(
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
    ), void (t || perf.flushLocal(e))) : console.log("perf: no", e)
  }, monitor: function (e, t) {
    setInterval(perf.show, t || 1e3, e)
  }
}, TWEEN = {
  time: 0, tweens: [], getAll: function () {
    return TWEEN.tweens
  }, removeAll: function () {
    for (var e = TWEEN.tweens.length - 1; e >= 0; e--) TWEEN.tweens[e].updating = !1
  }, add: function (e) {
    e.updating = !0, TWEEN.tweens.indexOf(e) === -1 && TWEEN.tweens.push(e)
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
    for (var i = t - 1; i >= 0; i--) {
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
    this.playing = !1, TWEEN.remove(this), this.debug && console.trace(
      this.debug,
      "stop"
    ), null !== this.onStopCallback && this.onStopCallback.call(this.onStopScope, this.onStopData);
    for (var e in this.valuesTarget) {
      var t = this.valuesTarget[e];
      t instanceof TWEEN.Tween && t.stop()
    }
    return this.stopChainedTweens(), this
  }, stopChainedTweens: function () {
    for (var e = this.chainedTweens.length - 1; e >= 0; e--) this.chainedTweens[e].stop()
  }, updateSource: function () {
    this.valuesSource = {};
    for (var e in this.source) {
      var t = this.source[e], i = parseFloat(t, 10);
      isFinite(i) && (this.valuesSource[e] = i)
    }
    return this
  }, updateTarget: function () {
    this.valuesRelative = {}, this.valuesTarget = {};
    for (var e in this.target) {
      var t = this.target[e], i = this.valuesSource[e];
      if (t instanceof TWEEN.Tween) this.valuesTarget[e] = t; else if (e in this.valuesSource != !1) if (t instanceof Array) t.length && (this.valuesTarget[e] = [i].concat(
        t)); else if ("string" == typeof t) {
        var n = parseFloat(t, 10);
        isFinite(n) && (this.valuesRelative[e] = n, this.valuesTarget[e] = i + n)
      } else "number" == typeof t && isFinite(t) && (this.valuesTarget[e] = t)
    }
    return this
  }, start: function (e) {
    TWEEN.add(this), this.onStartCallbackFired = !1, this.onHalfwayCallbackFired = !1, this.ended = !1, this.elapsed = 0, this.progress = 0, this.prodelta = 0, this.startTime = isNaN(
      e) ? TWEEN.time : +e, this.startTime += this.delayTime, this.updateSource(), this.updateTarget(), this.delta = {};
    for (var t in this.valuesTarget) {
      var i = (this.valuesSource[t], this.valuesTarget[t]);
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
    if (e < this.startTime) return void (this.updating = !0);
    if (e - this.startTime > this.durationTime && 1 === this.elapsed) return void (this.updating = !1);
    if (this.onStartCallbackFired === !1 && (this.onStartCallbackFired = !0, this.playing = !0, null !== this.onStartCallback && this.onStartCallback.call(
      this.onStartScope,
      this.source,
      this.onStartData
    ), this.debug && console.log(
      this.debug,
      "playing"
    )), this.passedTime = e - this.startTime, this.remainTime = this.durationTime - this.passedTime, this.setProgress(
      this.passedTime / this.durationTime), this.updating = this.elapsed < 1 || this.repeatTimes > 0, this.debug && console.log(
      this.debug,
      "update",
      "\n\tvalues:",
      this.source,
      "\n\tdetta:",
      this.delta
    ), this.onHalfwayCallbackFired === !1 && this.progress > .5 && (this.onHalfwayCallbackFired = !0, null !== this.onHalfwayCallback && this.onHalfwayCallback.call(
      this.onHalfwayScope,
      this.onHalfwayData
    )), null !== this.onUpdateCallback && this.onUpdateCallback.call(
      this.onUpdateScope,
      this.progress,
      this.source
    ), 1 === this.elapsed) if (this.repeatTimes > 0) {
      this.repeatTimes--;
      for (var t in this.valuesSource) {
        var i = this.valuesSource[t], n = this.valuesTarget[t];
        t in this.valuesRelative && (i += this.valuesRelative[t]), this.enableYoyo && (this.valuesTarget[t] = i, i = n), this.valuesSource[t] = i
      }
      this.enableYoyo && (this.reversed = !this.reversed), this.startTime = e + this.delayTime
    } else {
      this.ended = !0, null !== this.onCompleteCallback && this.onCompleteCallback.call(
        this.onCompleteScope,
        this.onCompleteData
      );
      for (var o = this.chainedTweens.length - 1; o >= 0; o--) this.chainedTweens[o].start(this.startTime + this.durationTime)
    }
  }, setProgress: function (e) {
    var t = this.progress;
    this.elapsed = e > 1 ? 1 : e < 0 ? 0 : e, this.progress = this.easingFunction(this.elapsed), this.prodelta = this.progress - t;
    for (var i in this.valuesTarget) {
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
      return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(
        2,
        -10 * (e - 1)
      ) + 2)
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
      var t, i = .1, n = .4;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(
        2,
        10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }, Out: function (e) {
      var t, i = .1, n = .4;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(
        2,
        -10 * e
      ) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }, InOut: function (e) {
      var t, i = .1, n = .4;
      return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (i * Math.pow(
        2,
        10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / n)) : i * Math.pow(
        2,
        -10 * (e -= 1)
      ) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
  }, Back: {
    In: function (e) {
      var t = 1.70158;
      return e * e * ((t + 1) * e - t)
    }, Out: function (e) {
      var t = 1.70158;
      return --e * e * ((t + 1) * e + t) + 1
    }, InOut: function (e) {
      var t = 2.5949095;
      return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
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
    return t < 0 ? s(e[0], e[1], n) : t > 1 ? s(e[i], e[i - 1], i - n) : s(e[o], e[o + 1 > i ? i : o + 1], n - o);
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
    )) : t < 0 ? e[0] - (s(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[i] - (s(
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
      var e = [1];
      return function (t) {
        var i = 1;
        if (e[t]) return e[t];
        for (var n = t; n > 1; n--) i *= n;
        return e[t] = i, i
      }
    }(), CatmullRom: function (e, t, i, n, o) {
      var s = .5 * (i - e), r = .5 * (n - t), a = o * o, l = o * a;
      return (2 * t - 2 * i + s + r) * l + (-3 * t + 3 * i - 2 * s - r) * a + s * o + t
    }
  }
};
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function () {
  return {
    load: function (e, t) {
      t = t || document;
      var i = t.createElement("link");
      i.type = "text/css", i.rel = "stylesheet", i.href = e, t.getElementsByTagName("head")[0].appendChild(i)
    }, inject: function (e, t) {
      t = t || document;
      var i = document.createElement("style");
      i.type = "text/css", i.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(i)
    }
  }
}(), dat.utils.common = function () {
  var e = Array.prototype.forEach, t = Array.prototype.slice;
  return {
    BREAK: {}, extend: function (e) {
      return this.each(t.call(arguments, 1), function (t) {
        for (var i in t) this.isUndefined(t[i]) || (e[i] = t[i])
      }, this), e
    }, defaults: function (e) {
      return this.each(t.call(arguments, 1), function (t) {
        for (var i in t) this.isUndefined(e[i]) && (e[i] = t[i])
      }, this), e
    }, compose: function () {
      var e = t.call(arguments);
      return function () {
        for (var i = t.call(arguments), n = e.length - 1; 0 <= n; n--) i = [e[n].apply(this, i)];
        return i[0]
      }
    }, each: function (t, i, n) {
      if (t) if (e && t.forEach && t.forEach === e) t.forEach(
        i,
        n
      ); else if (t.length === t.length + 0) for (var o = 0, s = t.length; o < s && !(o in t && i.call(
        n,
        t[o],
        o
      ) === this.BREAK); o++) ; else for (o in t) if (i.call(n, t[o], o) === this.BREAK) break
    }, defer: function (e) {
      setTimeout(e, 0)
    }, toArray: function (e) {
      return e.toArray ? e.toArray() : t.call(e)
    }, isUndefined: function (e) {
      return void 0 === e
    }, isNull: function (e) {
      return null === e
    }, isNaN: function (e) {
      return e !== e
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
  return e.extend(t.prototype, {
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
}(dat.utils.common), dat.dom.dom = function (e) {
  function t(t) {
    return "0" === t || e.isUndefined(t) ? 0 : (t = t.match(n), e.isNull(t) ? 0 : parseFloat(t[1]))
  }

  var i = {};
  e.each({
           HTMLEvents: ["change"],
           MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
           KeyboardEvents: ["keydown"]
         }, function (t, n) {
    e.each(t, function (e) {
      i[e] = n
    })
  });
  var n = /(\d+(\.\d+)?)px/, o = {
    makeSelectable: function (e, t) {
      void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
        return !1
      } : function () {
      }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
    }, makeFullscreen: function (t, i, n) {
      e.isUndefined(i) && (i = !0), e.isUndefined(n) && (n = !0), t.style.position = "absolute", i && (t.style.left = 0, t.style.right = 0), n && (t.style.top = 0, t.style.bottom = 0)
    }, fakeEvent: function (t, n, o, s) {
      o = o || {};
      var r = i[n];
      if (!r) throw Error("Event type " + n + " not supported.");
      var a = document.createEvent(r);
      switch (r) {
        case"MouseEvents":
          a.initMouseEvent(
            n,
            o.bubbles || !1,
            o.cancelable || !0,
            window,
            o.clickCount || 1,
            0,
            0,
            o.x || o.clientX || 0,
            o.y || o.clientY || 0,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          );
          break;
        case"KeyboardEvents":
          r = a.initKeyboardEvent || a.initKeyEvent, e.defaults(
            o,
            {
              cancelable: !0,
              ctrlKey: !1,
              altKey: !1,
              shiftKey: !1,
              metaKey: !1,
              keyCode: void 0,
              charCode: void 0
            }
          ), r(
            n,
            o.bubbles || !1,
            o.cancelable,
            window,
            o.ctrlKey,
            o.altKey,
            o.shiftKey,
            o.metaKey,
            o.keyCode,
            o.charCode
          );
          break;
        default:
          a.initEvent(n, o.bubbles || !1, o.cancelable || !0)
      }
      e.defaults(a, s), t.dispatchEvent(a)
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
      return e = getComputedStyle(e), t(e["border-left-width"]) + t(e["border-right-width"]) + t(e["padding-left"]) + t(
        e["padding-right"]) + t(e.width)
    }, getHeight: function (e) {
      return e = getComputedStyle(e), t(e["border-top-width"]) + t(e["border-bottom-width"]) + t(e["padding-top"]) + t(e["padding-bottom"]) + t(
        e.height)
    }, getOffset: function (e) {
      var t = {left: 0, top: 0};
      if (e.offsetParent) do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
      return t
    }, isActive: function (e) {
      return e === document.activeElement && (e.type || e.href)
    }
  };
  return o
}(dat.utils.common), dat.controllers.OptionController = function (e, t, i) {
  var n = function (e, o, s) {
    n.superclass.call(this, e, o);
    var r = this;
    if (this.__select = document.createElement("select"), i.isArray(s)) {
      var a = {};
      i.each(s, function (e) {
        a[e] = e
      }), s = a
    }
    i.each(s, function (e, t) {
      var i = document.createElement("option");
      i.innerHTML = t, i.setAttribute("value", e), r.__select.appendChild(i)
    }), this.updateDisplay(), t.bind(this.__select, "change", function () {
      r.setValue(this.options[this.selectedIndex].value)
    }), this.domElement.appendChild(this.__select)
  };
  return n.superclass = e, i.extend(n.prototype, e.prototype, {
    setValue: function (e) {
      return e = n.superclass.prototype.setValue.call(
        this,
        e
      ), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
    }, updateDisplay: function () {
      return this.__select.value = this.getValue(), n.superclass.prototype.updateDisplay.call(this)
    }
  }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function (e, t) {
  function i(e) {
    return e = e.toString(), -1 < e.indexOf(".") ? e.length - e.indexOf(".") - 1 : 0
  }

  var n = function (e, o, s) {
    n.superclass.call(
      this,
      e,
      o
    ), s = s || {}, this.__min = s.min, this.__max = s.max, this.__step = s.step, t.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(
      10,
      Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)
    ) / 10 : this.__impliedStep = this.__step, this.__precision = i(this.__impliedStep)
  };
  return n.superclass = e, t.extend(n.prototype, e.prototype, {
    setValue: function (e) {
      return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && 0 != e % this.__step && (e = Math.round(
        e / this.__step) * this.__step), n.superclass.prototype.setValue.call(this, e)
    }, min: function (e) {
      return this.__min = e, this
    }, max: function (e) {
      return this.__max = e, this
    }, step: function (e) {
      return this.__impliedStep = this.__step = e, this.__precision = i(e), this
    }
  }), n
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function (e, t, i) {
  var n = function (e, o, s) {
    function r() {
      var e = parseFloat(c.__input.value);
      i.isNaN(e) || c.setValue(e)
    }

    function a(e) {
      var t = h - e.clientY;
      c.setValue(c.getValue() + t * c.__impliedStep), h = e.clientY
    }

    function l() {
      t.unbind(window, "mousemove", a), t.unbind(window, "mouseup", l)
    }

    this.__truncationSuspended = !1, n.superclass.call(this, e, o, s);
    var h, c = this;
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(
      this.__input,
      "change",
      r
    ), t.bind(this.__input, "blur", function () {
      r(), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
    }), t.bind(this.__input, "mousedown", function (e) {
      t.bind(window, "mousemove", a), t.bind(window, "mouseup", l), h = e.clientY
    }), t.bind(this.__input, "keydown", function (e) {
      13 === e.keyCode && (c.__truncationSuspended = !0, this.blur(), c.__truncationSuspended = !1)
    }), this.updateDisplay(), this.domElement.appendChild(this.__input)
  };
  return n.superclass = e, i.extend(n.prototype, e.prototype, {
    updateDisplay: function () {
      var e, t = this.__input;
      if (this.__truncationSuspended) e = this.getValue(); else {
        e = this.getValue();
        var i = Math.pow(10, this.__precision);
        e = Math.round(e * i) / i
      }
      return t.value = e, n.superclass.prototype.updateDisplay.call(this)
    }
  }), n
}(
  dat.controllers.NumberController,
  dat.dom.dom,
  dat.utils.common
), dat.controllers.NumberControllerSlider = function (e, t, i, n, o) {
  function s(e, t, i, n, o) {
    return n + (e - t) / (i - t) * (o - n)
  }

  var r = function (e, i, n, o, a) {
    function l(e) {
      e.preventDefault();
      var i = t.getOffset(c.__background), n = t.getWidth(c.__background);
      return c.setValue(s(e.clientX, i.left, i.left + n, c.__min, c.__max)), !1
    }

    function h() {
      t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", h), c.__onFinishChange && c.__onFinishChange.call(
        c,
        c.getValue()
      )
    }

    r.superclass.call(this, e, i, {min: n, max: o, step: a});
    var c = this;
    this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(
      this.__background,
      "mousedown",
      function (e) {
        t.bind(
          window,
          "mousemove",
          l
        ), t.bind(
          window,
          "mouseup",
          h
        ), l(e)
      }
    ), t.addClass(this.__background, "slider"), t.addClass(
      this.__foreground,
      "slider-fg"
    ), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
  };
  return r.superclass = e, r.useDefaultStyles = function () {
    i.inject(o)
  }, n.extend(r.prototype, e.prototype, {
    updateDisplay: function () {
      var e = (this.getValue() - this.__min) / (this.__max - this.__min);
      return this.__foreground.style.width = 100 * e + "%", r.superclass.prototype.updateDisplay.call(this)
    }
  }), r
}(
  dat.controllers.NumberController,
  dat.dom.dom,
  dat.utils.css,
  dat.utils.common,
  "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"
), dat.controllers.FunctionController = function (e, t, i) {
  var n = function (e, i, o) {
    n.superclass.call(this, e, i);
    var s = this;
    this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === o ? "Fire" : o, t.bind(
      this.__button,
      "click",
      function (e) {
        return e.preventDefault(), s.fire(), !1
      }
    ), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
  };
  return n.superclass = e, i.extend(n.prototype, e.prototype, {
    fire: function () {
      this.__onChange && this.__onChange.call(this), this.getValue()
        .call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
    }
  }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function (e, t, i) {
  var n = function (e, i) {
    n.superclass.call(this, e, i);
    var o = this;
    this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute(
      "type",
      "checkbox"
    ), t.bind(this.__checkbox, "change", function () {
      o.setValue(!o.__prev)
    }, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
  };
  return n.superclass = e, i.extend(n.prototype, e.prototype, {
    setValue: function (e) {
      return e = n.superclass.prototype.setValue.call(
        this,
        e
      ), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
    }, updateDisplay: function () {
      return !0 === this.getValue() ? (this.__checkbox.setAttribute(
        "checked",
        "checked"
      ), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, n.superclass.prototype.updateDisplay.call(this)
    }
  }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function (e) {
  return function (t) {
    if (1 == t.a || e.isUndefined(t.a)) {
      for (t = t.hex.toString(16); 6 > t.length;) t = "0" + t;
      return "#" + t
    }
    return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
  }
}(dat.utils.common), dat.color.interpret = function (e, t) {
  var i, n, o = [{
    litmus: t.isString, conversions: {
      THREE_CHAR_HEX: {
        read: function (e) {
          return e = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i), null !== e && {
            space: "HEX",
            hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
          }
        }, write: e
      }, SIX_CHAR_HEX: {
        read: function (e) {
          return e = e.match(/^#([A-F0-9]{6})$/i), null !== e && {space: "HEX", hex: parseInt("0x" + e[1].toString())}
        }, write: e
      }, CSS_RGB: {
        read: function (e) {
          return e = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/), null !== e && {
            space: "RGB",
            r: parseFloat(e[1]),
            g: parseFloat(e[2]),
            b: parseFloat(e[3])
          }
        }, write: e
      }, CSS_RGBA: {
        read: function (e) {
          return e = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/), null !== e && {
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
    litmus: t.isNumber, conversions: {
      HEX: {
        read: function (e) {
          return {space: "HEX", hex: e, conversionName: "HEX"}
        }, write: function (e) {
          return e.hex
        }
      }
    }
  }, {
    litmus: t.isArray, conversions: {
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
    litmus: t.isObject, conversions: {
      RGBA_OBJ: {
        read: function (e) {
          return !!(t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a)) && {
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
          return !!(t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b)) && {space: "RGB", r: e.r, g: e.g, b: e.b}
        }, write: function (e) {
          return {r: e.r, g: e.g, b: e.b}
        }
      }, HSVA_OBJ: {
        read: function (e) {
          return !!(t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a)) && {
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
          return !!(t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v)) && {space: "HSV", h: e.h, s: e.s, v: e.v}
        }, write: function (e) {
          return {h: e.h, s: e.s, v: e.v}
        }
      }
    }
  }];
  return function () {
    n = !1;
    var e = 1 < arguments.length ? t.toArray(arguments) : arguments[0];
    return t.each(o, function (o) {
      if (o.litmus(e)) return t.each(o.conversions, function (o, s) {
        if (i = o.read(e), !1 === n && !1 !== i) return n = i, i.conversionName = s, i.conversion = o, t.BREAK
      }), t.BREAK
    }), n
  }
}(
  dat.color.toString,
  dat.utils.common
), dat.GUI = dat.gui.GUI = function (e, t, i, n, o, s, r, a, l, h, c, d, u, p, f) {
  function m(e, t, i, s) {
    if (void 0 === t[i]) throw Error("Object " + t + ' has no property "' + i + '"');
    s.color ? t = new c(t, i) : (t = [t, i].concat(s.factoryArgs), t = n.apply(
      e,
      t
    )), s.before instanceof o && (s.before = s.before.__li), b(e, t), p.addClass(
      t.domElement,
      "c"
    ), i = document.createElement("span"), p.addClass(i, "property-name"), i.innerHTML = t.property;
    var r = document.createElement("div");
    return r.appendChild(i), r.appendChild(t.domElement), s = v(e, r, s.before), p.addClass(
      s,
      L.CLASS_CONTROLLER_ROW
    ), p.addClass(s, typeof t.getValue()), g(e, s, t), e.__controllers.push(t), t
  }

  function v(e, t, i) {
    var n = document.createElement("li");
    return t && n.appendChild(t), i ? e.__ul.insertBefore(n, params.before) : e.__ul.appendChild(n), e.onResize(), n
  }

  function g(e, t, i) {
    if (i.__li = t, i.__gui = e, f.extend(i, {
      options: function (t) {
        return 1 < arguments.length ? (i.remove(), m(
          e,
          i.object,
          i.property,
          {
            before: i.__li.nextElementSibling,
            factoryArgs: [f.toArray(arguments)]
          }
        )) : f.isArray(t) || f.isObject(t) ? (i.remove(), m(
          e,
          i.object,
          i.property,
          {before: i.__li.nextElementSibling, factoryArgs: [t]}
        )) : void 0
      }, name: function (e) {
        return i.__li.firstElementChild.firstElementChild.innerHTML = e, i
      }, listen: function () {
        return i.__gui.listen(i), i
      }, remove: function () {
        return i.__gui.remove(i), i
      }
    }), i instanceof l) {
      var n = new a(i.object, i.property, {min: i.__min, max: i.__max, step: i.__step});
      f.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
        var t = i[e], o = n[e];
        i[e] = n[e] = function () {
          var e = Array.prototype.slice.call(arguments);
          return t.apply(i, e), o.apply(n, e)
        }
      }), p.addClass(t, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
    } else if (i instanceof a) {
      var o = function (t) {
        return f.isNumber(i.__min) && f.isNumber(i.__max) ? (i.remove(), m(
          e,
          i.object,
          i.property,
          {
            before: i.__li.nextElementSibling,
            factoryArgs: [i.__min, i.__max, i.__step]
          }
        )) : t
      };
      i.min = f.compose(o, i.min), i.max = f.compose(o, i.max)
    } else i instanceof s ? (p.bind(t, "click", function () {
      p.fakeEvent(i.__checkbox, "click")
    }), p.bind(i.__checkbox, "click", function (e) {
      e.stopPropagation()
    })) : i instanceof r ? (p.bind(t, "click", function () {
      p.fakeEvent(i.__button, "click")
    }), p.bind(t, "mouseover", function () {
      p.addClass(i.__button, "hover")
    }), p.bind(t, "mouseout", function () {
      p.removeClass(i.__button, "hover")
    })) : i instanceof c && (p.addClass(t, "color"), i.updateDisplay = f.compose(function (e) {
      return t.style.borderLeftColor = i.__color.toString(), e
    }, i.updateDisplay), i.updateDisplay());
    i.setValue = f.compose(function (t) {
      return e.getRoot().__preset_select && i.isModified() && _(e.getRoot(), !0), t
    }, i.setValue)
  }

  function b(e, t) {
    var i = e.getRoot(), n = i.__rememberedObjects.indexOf(t.object);
    if (-1 != n) {
      var o = i.__rememberedObjectIndecesToControllers[n];
      if (void 0 === o && (o = {}, i.__rememberedObjectIndecesToControllers[n] = o), o[t.property] = t, i.load && i.load.remembered) {
        if (i = i.load.remembered, i[e.preset]) i = i[e.preset]; else {
          if (!i.Default) return;
          i = i.Default
        }
        i[n] && void 0 !== i[n][t.property] && (n = i[n][t.property], t.initialValue = n, t.setValue(n))
      }
    }
  }

  function w(e) {
    var t = e.__save_row = document.createElement("li");
    p.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), p.addClass(t, "save-row");
    var i = document.createElement("span");
    i.innerHTML = "&nbsp;", p.addClass(i, "button gears");
    var n = document.createElement("span");
    n.innerHTML = "Save", p.addClass(n, "button"), p.addClass(n, "save");
    var o = document.createElement("span");
    o.innerHTML = "New", p.addClass(o, "button"), p.addClass(o, "save-as");
    var s = document.createElement("span");
    s.innerHTML = "Revert", p.addClass(s, "button"), p.addClass(s, "revert");
    var r = e.__preset_select = document.createElement("select");
    if (e.load && e.load.remembered ? f.each(e.load.remembered, function (t, i) {
      T(e, i, i == e.preset)
    }) : T(e, "Default", !1), p.bind(r, "change", function () {
      for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
      e.preset = this.value
    }), t.appendChild(r), t.appendChild(i), t.appendChild(n), t.appendChild(o), t.appendChild(s), k) {
      var a = function () {
        l.style.display = e.useLocalStorage ? "block" : "none"
      }, t = document.getElementById("dg-save-locally"), l = document.getElementById("dg-local-explain");
      t.style.display = "block", t = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(
        document.location.href + ".isLocal") && t.setAttribute("checked", "checked"), a(), p.bind(
        t,
        "change",
        function () {
          e.useLocalStorage = !e.useLocalStorage, a()
        }
      )
    }
    var h = document.getElementById("dg-new-constructor");
    p.bind(h, "keydown", function (e) {
      !e.metaKey || 67 !== e.which && 67 != e.keyCode || R.hide()
    }), p.bind(i, "click", function () {
      h.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), R.show(), h.focus(), h.select()
    }), p.bind(n, "click", function () {
      e.save()
    }), p.bind(o, "click", function () {
      var t = prompt("Enter a new preset name.");
      t && e.saveAs(t)
    }), p.bind(s, "click", function () {
      e.revert()
    })
  }

  function y(e) {
    function t(t) {
      return t.preventDefault(), o = t.clientX, p.addClass(e.__closeButton, L.CLASS_DRAG), p.bind(
        window,
        "mousemove",
        i
      ), p.bind(window, "mouseup", n), !1
    }

    function i(t) {
      return t.preventDefault(), e.width += o - t.clientX, e.onResize(), o = t.clientX, !1
    }

    function n() {
      p.removeClass(e.__closeButton, L.CLASS_DRAG), p.unbind(window, "mousemove", i), p.unbind(window, "mouseup", n)
    }

    e.__resize_handle = document.createElement("div"), f.extend(
      e.__resize_handle.style,
      {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
      }
    );
    var o;
    p.bind(e.__resize_handle, "mousedown", t), p.bind(
      e.__closeButton,
      "mousedown",
      t
    ), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
  }

  function E(e, t) {
    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
  }

  function x(e, t) {
    var i = {};
    return f.each(e.__rememberedObjects, function (n, o) {
      var s = {};
      f.each(e.__rememberedObjectIndecesToControllers[o], function (e, i) {
        s[i] = t ? e.initialValue : e.getValue()
      }), i[o] = s
    }), i
  }

  function T(e, t, i) {
    var n = document.createElement("option");
    n.innerHTML = t, n.value = t, e.__preset_select.appendChild(n), i && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
  }

  function _(e, t) {
    var i = e.__preset_select[e.__preset_select.selectedIndex];
    i.innerHTML = t ? i.value + "*" : i.value
  }

  function S(e) {
    0 != e.length && d(function () {
      S(e)
    }), f.each(e, function (e) {
      e.updateDisplay()
    })
  }

  e.inject(i);
  var k;
  try {
    k = "localStorage" in window && null !== window.localStorage
  } catch (e) {
    k = !1
  }
  var R, C, A = !0, M = !1, H = [], L = function (e) {
    function t() {
      var e = i.getRoot();
      e.width += 1, f.defer(function () {
        --e.width
      })
    }

    var i = this;
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(
      this.__ul), p.addClass(
      this.domElement,
      "dg"
    ), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = f.defaults(
      e,
      {autoPlace: !0, width: L.DEFAULT_WIDTH}
    ), e = f.defaults(
      e,
      {resizable: e.autoPlace, hideable: e.autoPlace}
    ), f.isUndefined(e.load) ? e.load = {preset: "Default"} : e.preset && (e.load.preset = e.preset), f.isUndefined(e.parent) && e.hideable && H.push(
      this), e.resizable = f.isUndefined(e.parent) && e.resizable, e.autoPlace && f.isUndefined(e.scrollable) && (e.scrollable = !0);
    var n, o = k && "true" === localStorage.getItem(document.location.href + ".isLocal");
    if (Object.defineProperties(this, {
      parent: {
        get: function () {
          return e.parent
        }
      }, scrollable: {
        get: function () {
          return e.scrollable
        }
      }, autoPlace: {
        get: function () {
          return e.autoPlace
        }
      }, preset: {
        get: function () {
          return i.parent ? i.getRoot().preset : e.load.preset
        }, set: function (t) {
          for (i.parent ? i.getRoot().preset = t : e.load.preset = t, t = 0; t < this.__preset_select.length; t++) this.__preset_select[t].value == this.preset && (this.__preset_select.selectedIndex = t);
          i.revert()
        }
      }, width: {
        get: function () {
          return e.width
        }, set: function (t) {
          e.width = t, E(i, t)
        }
      }, name: {
        get: function () {
          return e.name
        }, set: function (t) {
          e.name = t, r && (r.innerHTML = e.name)
        }
      }, closed: {
        get: function () {
          return e.closed
        }, set: function (t) {
          e.closed = t, e.closed ? p.addClass(i.__ul, L.CLASS_CLOSED) : p.removeClass(
            i.__ul,
            L.CLASS_CLOSED
          ), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = t ? L.TEXT_OPEN : L.TEXT_CLOSED)
        }
      }, load: {
        get: function () {
          return e.load
        }
      }, useLocalStorage: {
        get: function () {
          return o
        }, set: function (e) {
          k && ((o = e) ? p.bind(window, "unload", n) : p.unbind(
            window,
            "unload",
            n
          ), localStorage.setItem(document.location.href + ".isLocal", e))
        }
      }
    }), f.isUndefined(e.parent)) {
      if (e.closed = !1, p.addClass(this.domElement, L.CLASS_MAIN), p.makeSelectable(this.domElement, !1), k && o) {
        i.useLocalStorage = !0;
        var s = localStorage.getItem(document.location.href + ".gui");
        s && (e.load = JSON.parse(s))
      }
      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = L.TEXT_CLOSED, p.addClass(
        this.__closeButton,
        L.CLASS_CLOSE_BUTTON
      ), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
        i.closed = !i.closed
      })
    } else {
      void 0 === e.closed && (e.closed = !0);
      var r = document.createTextNode(e.name);
      p.addClass(r, "controller-name"), s = v(i, r), p.addClass(this.__ul, L.CLASS_CLOSED), p.addClass(
        s,
        "title"
      ), p.bind(s, "click", function (e) {
        return e.preventDefault(), i.closed = !i.closed, !1
      }), e.closed || (this.closed = !1)
    }
    e.autoPlace && (f.isUndefined(e.parent) && (A && (C = document.createElement("div"), p.addClass(
      C,
      "dg"
    ), p.addClass(
      C,
      L.CLASS_AUTO_PLACE_CONTAINER
    ), document.body.appendChild(C), A = !1), C.appendChild(this.domElement), p.addClass(
      this.domElement,
      L.CLASS_AUTO_PLACE
    )), this.parent || E(i, e.width)), p.bind(window, "resize", function () {
      i.onResize()
    }), p.bind(this.__ul, "webkitTransitionEnd", function () {
      i.onResize()
    }), p.bind(this.__ul, "transitionend", function () {
      i.onResize()
    }), p.bind(this.__ul, "oTransitionEnd", function () {
      i.onResize()
    }), this.onResize(), e.resizable && y(this), this.saveToLocalStorageIfPossible = n = function () {
      k && "true" === localStorage.getItem(document.location.href + ".isLocal") && localStorage.setItem(
        document.location.href + ".gui",
        JSON.stringify(i.getSaveObject())
      )
    }, i.getRoot(), e.parent || t()
  };
  return L.toggleHide = function () {
    M = !M, f.each(H, function (e) {
      e.domElement.style.zIndex = M ? -999 : 999, e.domElement.style.opacity = M ? 0 : 1
    })
  }, L.CLASS_AUTO_PLACE = "a", L.CLASS_AUTO_PLACE_CONTAINER = "ac", L.CLASS_MAIN = "main", L.CLASS_CONTROLLER_ROW = "cr", L.CLASS_TOO_TALL = "taller-than-window", L.CLASS_CLOSED = "closed", L.CLASS_CLOSE_BUTTON = "close-button", L.CLASS_DRAG = "drag", L.DEFAULT_WIDTH = 245, L.TEXT_CLOSED = "Close Controls", L.TEXT_OPEN = "Open Controls", p.bind(
    window,
    "keydown",
    function (e) {
      "text" === document.activeElement.type || 72 !== e.which && 72 != e.keyCode || L.toggleHide()
    },
    !1
  ), f.extend(L.prototype, {
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
      this.autoPlace && C.removeChild(this.domElement)
    }, addFolder: function (e) {
      if (void 0 !== this.__folders[e]) throw Error('You already have a folder in this GUI by the name "' + e + '"');
      var t = {name: e, parent: this};
      return t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]), t = new L(
        t), this.__folders[e] = t, e = v(this, t.domElement), p.addClass(e, "folder"), t
    }, open: function () {
      this.closed = !1
    }, close: function () {
      this.closed = !0
    }, onResize: function () {
      var e = this.getRoot();
      if (e.scrollable) {
        var t = p.getOffset(e.__ul).top, i = 0;
        f.each(e.__ul.childNodes, function (t) {
          e.autoPlace && t === e.__save_row || (i += p.getHeight(t))
        }), window.innerHeight - t - 20 < i ? (p.addClass(
          e.domElement,
          L.CLASS_TOO_TALL
        ), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (p.removeClass(
          e.domElement,
          L.CLASS_TOO_TALL
        ), e.__ul.style.height = "auto")
      }
      e.__resize_handle && f.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
      }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
    }, remember: function () {
      if (f.isUndefined(R) && (R = new u, R.domElement.innerHTML = t), this.parent) throw Error(
        "You can only call remember on a top level GUI.");
      var e = this;
      f.each(Array.prototype.slice.call(arguments), function (t) {
        0 == e.__rememberedObjects.length && w(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(
          t)
      }), this.autoPlace && E(this, this.width)
    }, getRoot: function () {
      for (var e = this; e.parent;) e = e.parent;
      return e
    }, getSaveObject: function () {
      var e = this.load;
      return e.closed = this.closed, 0 < this.__rememberedObjects.length && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = x(
        this)), e.folders = {}, f.each(this.__folders, function (t, i) {
        e.folders[i] = t.getSaveObject()
      }), e
    }, save: function () {
      this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = x(this), _(
        this,
        !1
      ), this.saveToLocalStorageIfPossible()
    }, saveAs: function (e) {
      this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = x(
        this,
        !0
      )), this.load.remembered[e] = x(this), this.preset = e, T(this, e, !0), this.saveToLocalStorageIfPossible()
    }, revert: function (e) {
      f.each(this.__controllers, function (t) {
        this.getRoot().load.remembered ? b(e || this.getRoot(), t) : t.setValue(t.initialValue)
      }, this), f.each(this.__folders, function (e) {
        e.revert(e)
      }), e || _(this.getRoot(), !1)
    }, listen: function (e) {
      var t = 0 == this.__listening.length;
      this.__listening.push(e), t && S(this.__listening)
    }
  }), L
}(
  dat.utils.css,
  '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
  ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
  dat.controllers.factory = function (e, t, i, n, o, s, r) {
    return function (a, l, h, c) {
      var d = a[l];
      return r.isArray(h) || r.isObject(h) ? new e(a, l, h) : r.isNumber(d) ? r.isNumber(h) && r.isNumber(c) ? new i(
        a,
        l,
        h,
        c
      ) : new t(a, l, {min: h, max: c}) : r.isString(d) ? new n(a, l) : r.isFunction(d) ? new o(a, l, "") : r.isBoolean(
        d) ? new s(a, l) : void 0
    }
  }(
    dat.controllers.OptionController,
    dat.controllers.NumberControllerBox,
    dat.controllers.NumberControllerSlider,
    dat.controllers.StringController = function (e, t, i) {
      var n = function (e, i) {
        function o() {
          s.setValue(s.__input.value)
        }

        n.superclass.call(this, e, i);
        var s = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(
          this.__input,
          "keyup",
          o
        ), t.bind(this.__input, "change", o), t.bind(this.__input, "blur", function () {
          s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
        }), t.bind(this.__input, "keydown", function (e) {
          13 === e.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
      };
      return n.superclass = e, i.extend(n.prototype, e.prototype, {
        updateDisplay: function () {
          return t.isActive(this.__input) || (this.__input.value = this.getValue()), n.superclass.prototype.updateDisplay.call(
            this)
        }
      }), n
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
  dat.controllers.ColorController = function (e, t, i, n, o) {
    function s(e, t, i, n) {
      e.style.background = "", o.each(l, function (o) {
        e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + i + " 0%, " + n + " 100%); "
      })
    }

    function r(e) {
      e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }

    var a = function (e, l) {
      function h(e) {
        p(e), t.bind(window, "mousemove", p), t.bind(window, "mouseup", c)
      }

      function c() {
        t.unbind(window, "mousemove", p), t.unbind(window, "mouseup", c)
      }

      function d() {
        var e = n(this.value);
        !1 !== e ? (m.__color.__state = e, m.setValue(m.__color.toOriginal())) : this.value = m.__color.toString()
      }

      function u() {
        t.unbind(window, "mousemove", f), t.unbind(window, "mouseup", u)
      }

      function p(e) {
        e.preventDefault();
        var i = t.getWidth(m.__saturation_field), n = t.getOffset(m.__saturation_field),
          o = (e.clientX - n.left + document.body.scrollLeft) / i;
        return e = 1 - (e.clientY - n.top + document.body.scrollTop) / i, 1 < e ? e = 1 : 0 > e && (e = 0), 1 < o ? o = 1 : 0 > o && (o = 0), m.__color.v = e, m.__color.s = o, m.setValue(
          m.__color.toOriginal()), !1
      }

      function f(e) {
        e.preventDefault();
        var i = t.getHeight(m.__hue_field), n = t.getOffset(m.__hue_field);
        return e = 1 - (e.clientY - n.top + document.body.scrollTop) / i, 1 < e ? e = 1 : 0 > e && (e = 0), m.__color.h = 360 * e, m.setValue(
          m.__color.toOriginal()), !1
      }

      a.superclass.call(this, e, l), this.__color = new i(this.getValue()), this.__temp = new i(0);
      var m = this;
      this.domElement = document.createElement("div"), t.makeSelectable(
        this.domElement,
        !1
      ), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement(
        "div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement(
        "div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement(
        "input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(
        this.__input,
        "keydown",
        function (e) {
          13 === e.keyCode && d.call(this)
        }
      ), t.bind(this.__input, "blur", d), t.bind(this.__selector, "mousedown", function (e) {
        t.addClass(this, "drag").bind(window, "mouseup", function (e) {
          t.removeClass(m.__selector, "drag")
        })
      });
      var v = document.createElement("div");
      o.extend(
        this.__selector.style,
        {
          width: "122px",
          height: "102px",
          padding: "3px",
          backgroundColor: "#222",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }
      ), o.extend(
        this.__field_knob.style,
        {
          position: "absolute",
          width: "12px",
          height: "12px",
          border: this.__field_knob_border + (.5 > this.__color.v ? "#fff" : "#000"),
          boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
          borderRadius: "12px",
          zIndex: 1
        }
      ), o.extend(
        this.__hue_knob.style,
        {position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1}
      ), o.extend(
        this.__saturation_field.style,
        {
          width: "100px",
          height: "100px",
          border: "1px solid #555",
          marginRight: "3px",
          display: "inline-block",
          cursor: "pointer"
        }
      ), o.extend(v.style, {width: "100%", height: "100%", background: "none"}), s(
        v,
        "top",
        "rgba(0,0,0,0)",
        "#000"
      ), o.extend(
        this.__hue_field.style,
        {
          width: "15px",
          height: "100px",
          display: "inline-block",
          border: "1px solid #555",
          cursor: "ns-resize"
        }
      ), r(this.__hue_field), o.extend(
        this.__input.style,
        {
          outline: "none",
          textAlign: "center",
          color: "#fff",
          border: 0,
          fontWeight: "bold",
          textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }
      ), t.bind(this.__saturation_field, "mousedown", h), t.bind(
        this.__field_knob,
        "mousedown",
        h
      ), t.bind(this.__hue_field, "mousedown", function (e) {
        f(e), t.bind(window, "mousemove", f), t.bind(window, "mouseup", u)
      }), this.__saturation_field.appendChild(v), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(
        this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(
        this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    a.superclass = e, o.extend(a.prototype, e.prototype, {
      updateDisplay: function () {
        var e = n(this.getValue());
        if (!1 !== e) {
          var t = !1;
          o.each(i.COMPONENTS, function (i) {
            if (!o.isUndefined(e[i]) && !o.isUndefined(this.__color.__state[i]) && e[i] !== this.__color.__state[i]) return t = !0, {}
          }, this), t && o.extend(this.__color.__state, e)
        }
        o.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
        var r = .5 > this.__color.v || .5 < this.__color.s ? 255 : 0, a = 255 - r;
        o.extend(
          this.__field_knob.style,
          {
            marginLeft: 100 * this.__color.s - 7 + "px",
            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")"
          }
        ), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, s(
          this.__saturation_field,
          "left",
          "#fff",
          this.__temp.toString()
        ), o.extend(
          this.__input.style,
          {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: "rgb(" + r + "," + r + "," + r + ")",
            textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
          }
        )
      }
    });
    var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return a
  }(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (e, t, i, n) {
    function o(e, t, i) {
      Object.defineProperty(e, t, {
        get: function () {
          return "RGB" === this.__state.space ? this.__state[t] : (r(this, t, i), this.__state[t])
        }, set: function (e) {
          "RGB" !== this.__state.space && (r(this, t, i), this.__state.space = "RGB"), this.__state[t] = e
        }
      })
    }

    function s(e, t) {
      Object.defineProperty(e, t, {
        get: function () {
          return "HSV" === this.__state.space ? this.__state[t] : (a(this), this.__state[t])
        }, set: function (e) {
          "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[t] = e
        }
      })
    }

    function r(e, i, o) {
      if ("HEX" === e.__state.space) e.__state[i] = t.component_from_hex(e.__state.hex, o); else {
        if ("HSV" !== e.__state.space) throw"Corrupted color state";
        n.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
      }
    }

    function a(e) {
      var i = t.rgb_to_hsv(e.r, e.g, e.b);
      n.extend(
        e.__state,
        {s: i.s, v: i.v}
      ), n.isNaN(i.h) ? n.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = i.h
    }

    var l = function () {
      if (this.__state = e.apply(this, arguments), !1 === this.__state) throw"Failed to interpret color arguments";
      this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = "r g b h s v hex a".split(" "), n.extend(l.prototype, {
      toString: function () {
        return i(this)
      }, toOriginal: function () {
        return this.__state.conversion.write(this)
      }
    }), o(l.prototype, "r", 2), o(l.prototype, "g", 1), o(l.prototype, "b", 0), s(l.prototype, "h"), s(
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
        return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(
          this.r,
          this.g,
          this.b
        )), this.__state.hex
      }, set: function (e) {
        this.__state.space = "HEX", this.__state.hex = e
      }
    }), l
  }(dat.color.interpret, dat.color.math = function () {
    var e;
    return {
      hsv_to_rgb: function (e, t, i) {
        var n = e / 60 - Math.floor(e / 60), o = i * (1 - t), s = i * (1 - n * t);
        return t = i * (1 - (1 - n) * t), e = [[i, t, o], [s, i, o], [o, i, t], [o, s, i], [t, o, i], [i, o, s]][Math.floor(
          e / 60) % 6], {r: 255 * e[0], g: 255 * e[1], b: 255 * e[2]}
      }, rgb_to_hsv: function (e, t, i) {
        var n = Math.min(e, t, i), o = Math.max(e, t, i), n = o - n;
        return 0 == o ? {
          h: NaN,
          s: 0,
          v: 0
        } : (e = (e == o ? (t - i) / n : t == o ? 2 + (i - e) / n : 4 + (e - t) / n) / 6, 0 > e && (e += 1), {
          h: 360 * e,
          s: n / o,
          v: o / 255
        })
      }, rgb_to_hex: function (e, t, i) {
        return e = this.hex_with_component(0, 2, e), e = this.hex_with_component(
          e,
          1,
          t
        ), e = this.hex_with_component(e, 0, i)
      }, component_from_hex: function (e, t) {
        return e >> 8 * t & 255
      }, hex_with_component: function (t, i, n) {
        return n << (e = 8 * i) | t & ~(255 << e)
      }
    }
  }(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common),
  dat.utils.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
      window.setTimeout(e, 1e3 / 60)
    }
  }(),
  dat.dom.CenteredDiv = function (e, t) {
    var i = function () {
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
      ), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement(
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
      var i = this;
      e.bind(this.backgroundElement, "click", function () {
        i.hide()
      })
    };
    return i.prototype.show = function () {
      var e = this;
      this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(
        function () {
          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
        })
    }, i.prototype.hide = function () {
      var t = this, i = function () {
        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(
          t.domElement,
          "webkitTransitionEnd",
          i
        ), e.unbind(t.domElement, "transitionend", i), e.unbind(t.domElement, "oTransitionEnd", i)
      };
      e.bind(this.domElement, "webkitTransitionEnd", i), e.bind(
        this.domElement,
        "transitionend",
        i
      ), e.bind(
        this.domElement,
        "oTransitionEnd",
        i
      ), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, i.prototype.layout = function () {
      this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(
        this.domElement) / 2 + "px"
    }, i
  }(dat.dom.dom, dat.utils.common),
  dat.dom.dom,
  dat.utils.common
);
var saveAs = saveAs || function (e) {
  "use strict";
  if (!("undefined" == typeof e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document, i = function () {
        return e.URL || e.webkitURL || e
      }, n = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download" in n, s = function (e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      }, r = /constructor/i.test(e.HTMLElement) || e.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent),
      l = function (t) {
        (e.setImmediate || e.setTimeout)(function () {
          throw t
        }, 0)
      }, h = "application/octet-stream", c = 4e4, d = function (e) {
        var t = function () {
          "string" == typeof e ? i().revokeObjectURL(e) : e.remove()
        };
        setTimeout(t, c)
      }, u = function (e, t, i) {
        t = [].concat(t);
        for (var n = t.length; n--;) {
          var o = e["on" + t[n]];
          if ("function" == typeof o) try {
            o.call(e, i || e)
          } catch (e) {
            l(e)
          }
        }
      }, p = function (e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(
          65279), e], {type: e.type}) : e
      }, f = function (t, l, c) {
        c || (t = p(t));
        var f, m = this, v = t.type, g = v === h, b = function () {
          u(m, "writestart progress write writeend".split(" "))
        }, w = function () {
          if ((a || g && r) && e.FileReader) {
            var n = new FileReader;
            return n.onloadend = function () {
              var t = a ? n.result : n.result.replace(/^data:[^;]*;/, "data:attachment/file;"), i = e.open(t, "_blank");
              i || (e.location.href = t), t = void 0, m.readyState = m.DONE, b()
            }, n.readAsDataURL(t), void (m.readyState = m.INIT)
          }
          if (f || (f = i().createObjectURL(t)), g) e.location.href = f; else {
            var o = e.open(f, "_blank");
            o || (e.location.href = f)
          }
          m.readyState = m.DONE, b(), d(f)
        };
        return m.readyState = m.INIT, o ? (f = i().createObjectURL(t), void setTimeout(function () {
          n.href = f, n.download = l, s(n), b(), d(f), m.readyState = m.DONE
        })) : void w()
      }, m = f.prototype, v = function (e, t, i) {
        return new f(e, t || e.name || "download", i)
      };
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, i) {
      return t = t || e.name || "download", i || (e = p(e)), navigator.msSaveOrOpenBlob(e, t)
    } : (m.abort = function () {
    }, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, v)
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
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
  }, will: function (e, t) {
    var i = this, n = null == t ? [] : [].concat(t);
    return function () {
      for (var t = n.slice(), o = 0; o < arguments.length; o++) t.push(arguments[o]);
      i.emit(e, t)
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
        for (var t in this.lists) for (var n = this.lists[t], o = n.head; o; o = o.next) null != i.type && i.type !== t || null != i.func && i.func !== o.func || null != i.scope && i.scope !== o.scope || this._rem(
          n,
          o
        );
        break;
      default:
        var n = this.lists[t];
        if (n) for (var o = n.head; o; o = o.next) o.func.apply(o.scope, o.data.concat(i)), o.once && this._rem(n, o);
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
    if (e && e.id !== this.id && (this.targets[e.id] = e, e.sources[this.id] = this), this.stale) if (this.stale = !1, this.reader) {
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
    return t && console.log("---> OB", this.id), t
  }, destroy: function () {
    for (var e in this.sources) delete this.sources[e].targets[this.id], delete this.sources[e];
    this.touch()
  }
}, Timer.prototype = {
  time: 0, rate: 1, running: !1, play: function () {
    if (this.running) return this;
    this.running = !0;
    var e = this, t = 0, i = performance.now(), n = i, o = 0, s = 0;
    return document.addEventListener("visibilitychange", function () {
      n = performance.now()
    }), !function i() {
      e.id = requestAnimationFrame(i), t++, o = performance.now(), s = (o - n) * e.rate, e.time += s, e.func.call(
        e.scope,
        e.time,
        s,
        t
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
    var e = this;
    return function (t) {
      e.progress(t)
    }
  }, willResolve: function (e) {
    return this.willTransition(!0, e)
  }, willReject: function (e) {
    return this.willTransition(!1, e)
  }, willTransition: function (e, t) {
    var i = this;
    return function (n) {
      i.transition(e, null == t ? n : t)
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
}, Defer.all = function (e) {
  function t(t) {
    var i = e.indexOf(this);
    i !== -1 && (r[i] = t, n.progress(r))
  }

  function i(t, r) {
    var h = e.indexOf(this);
    return t instanceof Defer ? (e[h] = t, void t.then(
      i,
      i
    )) : (r ? ++a : ++l, r && (s[h] = t), void (a + l >= o && setTimeout(function () {
      n.transition(!l, s)
    }, 0)))
  }

  var n = new Defer, o = e && e.length || 0, s = new Array(e.length), r = new Array(e.length), a = 0, l = 0;
  if (!o) return n.resolve(s), n;
  for (var h = 0; h < o; h++) {
    var c = e[h];
    c instanceof Defer ? (r[h] = 0, c.then(i, i, t, c)) : (r[h] = 1, s[h] = c, a++)
  }
  return n
}, Defer.complete = function (e, t) {
  var i = new Defer;
  return i.pending = !1, i.success = e, i.value = t, i
}, Defer.timer = function (e) {
  function t(t, i) {
    var n = new Defer;
    return setTimeout(function () {
      n.transition(t, i)
    }, e || 0), n
  }

  return new Defer(t, t)
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
  var e = this, t = new Image;
  e.data = t, t.onload = function () {
    e.deferHead.resolve(t)
  }, t.onerror = function (t) {
    e.deferHead.reject(t)
  }, t.onprogress = function (t) {
    e.deferHead.progress(t)
  }, t.src = e.source
}, Loader.ajaxTransport = function () {
  var e = this, t = new XMLHttpRequest, i = [];
  for (var n in e.query) i.push(encodeURIComponent(n) + "=" + encodeURIComponent(e.query[n]));
  var o = i.join("&");
  e.request = t, e.requestType = e.requestType ? e.requestType.toUpperCase() : "GET", "GET" === e.requestType && o && (e.source += "?" + o), t.open(
    e.requestType,
    e.source,
    !0
  ), t.responseType = e.responseType || "";
  for (var s in e.headers) t.setRequestHeader(s, e.headers[s]);
  t.onreadystatechange = function () {
    4 === t.readyState && (200 <= t.status && t.status < 400 ? (e.data = t[e.responseName || "responseText"], e.deferHead.resolve(
      e.data)) : e.deferHead.reject("HTTP " + t.status))
  }, t.onprogress = function (t) {
    e.deferHead.progress(t)
  }, t.send("POST" === e.requestType ? o : null)
}, Loader.extend = function (e, t) {
  Loader.prototype[e] && console.warn("Loader.extend: overwriting " + e), Loader.Resource.types[e] = t, Loader.prototype[e] = function (t, i) {
    return this.load(e, t, i)
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
    var t = this.saveTo || this.loader.data, i = this.saveAs || "data";
    return t[i] = e
  }, abort: function () {
    return this.request && this.request.abort(), this.deferHead.init(null), this.deferTail.init(null), this
  }
}, Loader.Resource.types = {}, !function () {
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
    function t(e) {
      return e < 0 && (e = c.vertices.length + e + 1), c.vertices[e] || h.verbose && console.warn(
        "Loader.obj: undefined vertex " + e), e < d ? r.vertices.push(c.vertices[e]) - 1 : e - d
    }

    function i() {
      r = new THREE.Geometry, a = new THREE.MeshBasicMaterial, l = new THREE.Mesh(r, a), h.randomColor && a.color.set(
        Math.round(16777215 * Math.random())), d = c.vertices.length, c.meshes.push(l)
    }

    function n(e, t, i, n, o, s, a, l, c, d) {
      if (v.subVectors(a[i], a[t]), g.subVectors(
        a[e],
        a[t]
      ), v.cross(g), !v.x && !v.y && !v.z) return void (h.verbose && console.warn(
        '[Loader.obj] collapsed face "' + h.url + '":',
        d,
        [e, t, i]
      ));
      v.normalize();
      var u = new THREE.Face3(n[e], n[t], n[i]);
      u.normal.copy(v), c && u.vertexNormals.push(
        s[e],
        s[t],
        s[i]
      ), r.faceVertexUvs[0].push(l ? [o[e], o[t], o[i]] : b), r.faces.push(u)
    }

    function o() {
      r && r.vertices.length && (h.computeBoundingBox && r.computeBoundingBox(), p.add(l))
    }

    function s() {
      u && (u = !1, o(), i())
    }

    for (var r, a, l, h = this, c = {
      vertices: [],
      normals: [],
      meshes: [],
      uvs: []
    }, d = 0, u = !0, p = new THREE.Object3D, f = p, m = new THREE.Vector2, v = new THREE.Vector3, g = new THREE.Vector3, b = [m, m, m], w = -1, y = 0; y !== -1;) {
      var E = e.indexOf("\n", y + 1), x = e.substr(y, E - y).replace(/#.*/, "").trim();
      if (w++, y = E, x) {
        var T = x.split(/\s+/), _ = T[0], S = T.slice(1);
        switch (_) {
          case"mtllib":
            break;
          case"o":
            break;
          case"s":
            break;
          case"usemtl":
            l.material.name = S.join(" ");
            break;
          case"g":
            l.name = S.join(" ");
            break;
          case"v":
            s();
            var k = new THREE.Vector3(parseFloat(S[0]), parseFloat(S[1]), parseFloat(S[2]));
            c.vertices.push(k), r.vertices.push(k);
            break;
          case"vn":
            c.normals.push(new THREE.Vector3(parseFloat(S[0]), parseFloat(S[1]), parseFloat(S[2])));
            break;
          case"vt":
            c.uvs.push(new THREE.Vector2(parseFloat(S[0]), parseFloat(S[1])));
            break;
          case"f":
            for (var R = S.length, C = !0, A = !0, M = [], H = [], L = [], D = [], N = 0; N < R; N++) {
              var P = S[N].split("/"), I = t(parseInt(P[0]) - 1), O = c.uvs[parseInt(P[1]) - 1],
                B = c.normals[parseInt(P[2]) - 1];
              M.push(I), H.push(O), L.push(B), D.push(r.vertices[I]), A &= !!O, C &= !!B
            }
            if (4 === R) n(0, 1, 3, M, H, L, D, A, C, w), n(1, 2, 3, M, H, L, D, A, C, w); else {
              if (3 !== R) {
                h.verbose && console.warn("[Loader.obj] unknown face with", R, "vertices");
                continue
              }
              n(0, 1, 2, M, H, L, D, A, C, w)
            }
            u = !0;
            break;
          default:
            h.verbose && console.log('Loader.obj: unhandled "' + x + '"')
        }
      }
    }
    return o(), this.saveMetadata && (f.metadata = c), f
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
    n > 0 && this.points.splice(0, n)
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
    for (var r = 0; Math.abs(o - this.duration) / o > 1e-4 || Math.abs(s - this.distance) / s > 1e-4;) {
      this.friction = Math.pow(
        this.threshold / this.speed0,
        1 / o
      ), this.limit = 1 / (1 - this.friction), this.updateTarget(), this.updateDistance();
      var a = s / this.distance;
      if (this.speed.x *= a, this.speed.y *= a, this.speed.z *= a, this.updateSpeed(), this.updateDuration(), ++r > 10) break
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
    return i !== -1 && (this.blocks.splice(i, 1), t ? e.destroy() : dom.remove(e.element), !0)
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
    for (var t = this.blocks.length - 1; t >= 0; t--) this.removeBlock(this.blocks[t], e)
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
    for (var e = this.blocks.length - 1; e >= 0; e--) {
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
    var n = dom.offset(e, t);
    return {x: n.x, y: n.y, w: e.offsetWidth, h: e.offsetHeight}
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
      var C = Math.max(0, a + v - y);
      switch (C && (s || (h += Math.min(_ - u - p, C)), a -= C), i) {
        case"left":
          f += k - S;
          break;
        case"right":
          f += S - k;
          break;
        case"top":
          f += C - R;
          break;
        case"bottom":
          f += R - C
      }
      this.integerPosition && (r = Math.round(r), a = Math.round(a), l = Math.round(l), h = Math.round(h), f = Math.round(
        f)), this.arrowPoint.x === l && this.arrowPoint.y === h && Math.abs(this.elementPoint.x - r) < 2 && Math.abs(
        this.elementPoint.y - a) < 2 && this.lastDistance === f && this.lastAlign === i || (this.arrowPoint.x = l, this.arrowPoint.y = h, this.arrow.style.left = l + "px", this.arrow.style.top = h + "px", this.elementPoint.x = r, this.elementPoint.y = a, this.lastDistance = f, this.lastAlign = i, this.fadeAxis = this.alignAxes[this.lastAlign || this.align], this.updateTransform())
    }
  },
  getAlign: function (e, t, i, n) {
    var o = this.element.offsetParent;
    if (!o) return null;
    var s = o.offsetWidth, r = o.offsetHeight, a = this.element.offsetWidth, l = this.element.offsetHeight, h = t,
      c = s - e - i, d = r - t - n, u = e, p = ["top", "right", "bottom", "left"], f = [h - l, c - a, d - l, u - a];
    if (this.preferAlign && f[p.indexOf(this.preferAlign)] > 0) return this.preferAlign;
    var m = Math.max.apply(null, f), v = f.indexOf(m);
    return p[v]
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
), Block.Dropdown.instances = [], Block.Dropdown.closeAll = function (e) {
  Block.Dropdown.instances.forEach(function (t) {
    t !== e && t.set(0, !0)
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
        var n = t[i], o = n.nodeName.toLowerCase();
        "metadata" === o ? n.parentNode && n.parentNode.removeChild(n) : n.id && (n.removeAttribute("visibility"), Atlas.list[n.id] = n)
      }
      Atlas.update()
    }
  }, update: function () {
    Atlas.items.forEach(Atlas.updateItem)
  }, set: function (e, t, i) {
    var n = Atlas.pickItem(e);
    return n.id = t, n.name = i, Atlas.svg && Atlas.updateItem(n), e
  }, free: function (e) {
    for (var t = Atlas.items.length - 1; t >= 0; t--) {
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
    t ? e.name && (t.className.baseVal += " " + e.name) : (t = document.createElement("div"), t.className = e.id + " " + e.name, Atlas.svg && (t.textContent = e.id)), e.icon ? (e.element.insertBefore(
      t,
      e.icon
    ), e.element.removeChild(e.icon)) : e.element.appendChild(t), e.icon = t
  }, clone: function (e) {
    var t = Atlas.list && Atlas.list[e];
    if (!t) return null;
    var i = Atlas.svg.cloneNode(!1);
    return i.appendChild(t.cloneNode(!0)), i.className.baseVal = e, i
  }
}, window.Locale = {
  name: null, data: null, counter: 0, assets: {}, items: [], add: function (e, t) {
    var i = Locale.assets[e];
    i || (i = Locale.assets[e] = {});
    for (var n in t) i[n] = t[n]
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
    for (var t = Locale.items.length - 1; t >= 0; t--) if (Locale.items[t].id === e) return void Locale.items.splice(
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
  for (var i = 1e-9, n = this.normal.toArray(), o = this.constant, s = e.normal.toArray(), r = e.constant, a = 0; a < 6; a++) {
    var l = a < 2 ? 1 : 0, h = a < 4 ? 2 : 1, c = a >> 1, d = a % 2 ? l : h, u = a % 2 ? h : l, p = n[c], f = n[d],
      m = s[c], v = s[d], g = v * p - f * m, b = (m * o - p * r) / g, w = -(f * b + o) / p;
    if (Math.abs(p) > i && Math.abs(g) > i) {
      var y = t || new THREE.Ray;
      return y.direction.crossVectors(this.normal, e.normal).normalize(), y.origin.setComponent(
        c,
        w
      ), y.origin.setComponent(d, b), y.origin.setComponent(u, 0), y
    }
  }
  return null
}, THREE.Box2.prototype.emptyEPS = function () {
  var e = 1e-9;
  return this.max.x - this.min.x < e || this.max.y - this.min.y < e
}, THREE.Ray.prototype.atY = function (e, t) {
  null == t && (t = new THREE.Vector3);
  var i = (e - this.origin.y) / this.direction.y;
  return this.at(i, t)
}, THREE.Ray.prototype.distanceToPlane = function (e, t) {
  var i = e.normal.dot(this.direction);
  if (0 == i) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
  var n = -(this.origin.dot(e.normal) + e.constant) / i;
  return t || n >= 0 ? n : null
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
}, !function () {
  function e(e, i) {
    for (var n = [], o = i.map || "tnmglprs", s = 0; s < o.length; s++) switch (s > 0 && n.push(" "), o[s]) {
      case"t":
        n.push(t[e.type] || e.type);
        break;
      case"n":
        n.push("{" + (e.name || "") + "}");
        break;
      case"m":
        n.push(e.material ? "<" + (e.material instanceof Array ? "[" + e.material.map(function (e) {
          return e.name || ""
        }).join(",") + "]" : e.material.name || "") + ">" : "");
        break;
      case"g":
        n.push(e.geometry ? (e.geometry instanceof THREE.BufferGeometry ? e.geometry.attributes.position && e.geometry.attributes.position.count || 0 : e.geometry.vertices.length) + "v" : "");
        break;
      case"l":
        n.push(e.layers.mask + "=");
        break;
      case"p":
        n.push("[", f.mround(e.position.x, 3) + ", ", f.mround(e.position.y, 3) + ", ", f.mround(e.position.z, 3), "]");
        break;
      case"r":
        n.push(
          "[",
          f.hround(f.xdeg * e.rotation.x) + ", ",
          f.hround(f.xdeg * e.rotation.y) + ", ",
          f.hround(f.xdeg * e.rotation.z),
          "]"
        );
        break;
      case"s":
        n.push("[", f.mround(e.scale.x, 3) + ", ", f.mround(e.scale.y, 3) + ", ", f.mround(e.scale.z, 3), "]")
    }
    return n
  }

  var t = {
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
  THREE.Object3D.prototype.describe = function (t) {
    f.tmap(this, e, null, f.copy({property: "children", print: !0, align: [1, 1, 1]}, t))
  }
}(), THREE.OrbitControls = function (e, t) {
  function i() {
    return 2 * Math.PI / 60 / 60 * f.autoRotateSpeed
  }

  function n() {
    return Math.pow(.95, f.zoomSpeed)
  }

  function o(e) {
    if (f.enabled !== !1) {
      e.preventDefault(), f.down = !0;
      var t = f.orthoMode ? ["pan", null, null][e.button] : ["rot", "dol", "pan"][e.button];
      switch (t) {
        case"rot":
          if (f.noRotate === !0) return;
          N = D.ROTATE, v.set(e.clientX, e.clientY);
          break;
        case"dol":
          if (f.noZoom === !0) return;
          N = D.DOLLY, _.set(e.clientX, e.clientY);
          break;
        case"pan":
          if (f.noPan === !0) return;
          N = D.PAN, w.set(e.clientX, e.clientY)
      }
      document.addEventListener("mousemove", s, !1), document.addEventListener("mouseup", r, !1), f.dispatchEvent(B)
    }
  }

  function s(e) {
    if (f.enabled !== !1) {
      e.preventDefault();
      var t = f.viewportW || f.element.clientWidth, i = f.viewportH || f.element.clientHeight, n = f.object.position,
        o = n.clone().sub(f.target), s = o.length();
      if (s *= Math.tan(f.object.fov / 2 * Math.PI / 180), N === D.ROTATE) {
        if (f.orthoMode) return;
        if (f.noRotate === !0) return;
        g.set(e.clientX, e.clientY), b.subVectors(
          g,
          v
        ), f.rotateLeft(2 * Math.PI * b.x / t * f.rotateSpeed), f.rotateUp(2 * Math.PI * b.y / i * f.rotateSpeed), v.copy(
          g)
      } else if (N === D.DOLLY) {
        if (f.orthoMode) return;
        if (f.noZoom === !0) return;
        S.set(e.clientX, e.clientY), k.subVectors(S, _), f.panUp(2 * k.y * s / i), _.copy(S)
      } else if (N === D.PAN) {
        if (f.noPan === !0) return;
        y.set(e.clientX, e.clientY), E.subVectors(y, w);
        var r = 2 * E.x * s / t, a = 2 * E.y * s / i;
        f.panLeft(r), f.orthoMode ? f.panAbove(a) : f.panForward(a), w.copy(y)
      }
      f.update()
    }
  }

  function r() {
    f.enabled !== !1 && (f.down = !1, document.removeEventListener("mousemove", s, !1), document.removeEventListener(
      "mouseup",
      r,
      !1
    ), f.dispatchEvent(j), N = D.NONE)
  }

  function a(e) {
    if (f.enabled !== !1 && f.noZoom !== !0) {
      e.preventDefault(), e.stopPropagation();
      var t = 0;
      void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.deltaY ? t = -e.deltaY : void 0 !== e.detail && (t = -e.detail), t > 0 ? f.dollyOut() : f.dollyIn(), f.update(), f.dispatchEvent(
        B), f.dispatchEvent(j)
    }
  }

  function l(e) {
    if (f.enabled === !1 || f.noKeys === !0 || f.noPan === !0) return !1;
    switch (e.keyCode) {
      case f.keys.UP:
        f.pan(0, f.keyPanSpeed), f.update();
        break;
      case f.keys.BOTTOM:
        f.pan(0, -f.keyPanSpeed), f.update();
        break;
      case f.keys.LEFT:
        f.pan(f.keyPanSpeed, 0), f.update();
        break;
      case f.keys.RIGHT:
        f.pan(-f.keyPanSpeed, 0), f.update();
        break;
      default:
        return !1
    }
    return !0
  }

  function h(e) {
    if (f.enabled !== !1) {
      var t = f.orthoMode ? ["rot", "dol", "pan"][e.touches.length - 1] : ["pan", null, null][e.touches.length - 1];
      switch (t) {
        case"rot":
          if (f.noRotate === !0) return;
          N = D.TOUCH_ROTATE, v.set(e.touches[0].pageX, e.touches[0].pageY);
          break;
        case"dol":
          if (f.noZoom === !0) return;
          N = D.TOUCH_DOLLY;
          var i = e.touches[0].pageX - e.touches[1].pageX, n = e.touches[0].pageY - e.touches[1].pageY,
            o = Math.sqrt(i * i + n * n);
          _.set(0, o);
          break;
        case"pan":
          if (f.noPan === !0) return;
          N = D.TOUCH_PAN, w.set(e.touches[0].pageX, e.touches[0].pageY);
          break;
        default:
          N = D.NONE
      }
      f.dispatchEvent(B)
    }
  }

  function c(e) {
    if (f.enabled !== !1) {
      e.preventDefault(), e.stopPropagation();
      var t = f.viewportW || f.element.clientWidth, i = f.viewportH || f.element.clientHeight;
      switch (e.touches.length) {
        case 1:
          if (f.noRotate === !0) return;
          if (N !== D.TOUCH_ROTATE) return;
          g.set(e.touches[0].pageX, e.touches[0].pageY), b.subVectors(
            g,
            v
          ), f.rotateLeft(2 * Math.PI * b.x / t * f.rotateSpeed), f.rotateUp(2 * Math.PI * b.y / i * f.rotateSpeed), v.copy(
            g), f.update();
          break;
        case 2:
          if (f.noZoom === !0) return;
          if (N !== D.TOUCH_DOLLY) return;
          var n = e.touches[0].pageX - e.touches[1].pageX, o = e.touches[0].pageY - e.touches[1].pageY,
            s = Math.sqrt(n * n + o * o);
          S.set(0, s), A *= _.y / S.y, _.copy(S), f.update();
          break;
        case 3:
          if (f.noPan === !0) return;
          if (N !== D.TOUCH_PAN) return;
          y.set(e.touches[0].pageX, e.touches[0].pageY), E.subVectors(y, w), f.pan(E.x, E.y), w.copy(y), f.update();
          break;
        default:
          N = D.NONE
      }
    }
  }

  function d() {
    f.enabled !== !1 && (f.dispatchEvent(j), N = D.NONE)
  }

  this.object = e, this.domElement = void 0 !== t ? t : document, this.element = this.domElement === document ? this.domElement.body : this.domElement, this.enabled = !0, this.viewportW = 0, this.viewportH = 0, this.target = new THREE.Vector3, this.center = this.target, this.noZoom = !1, this.zoomSpeed = 2, this.minDistance = 0, this.maxDistance = 1 / 0, this.noRotate = !1, this.rotateSpeed = 1, this.noPan = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.radiusChanged = !0, this.borderBox = new THREE.Box3;
  var u = this.borderBox.min, p = this.borderBox.max;
  u.x = u.y = u.z = -(1 / 0), p.x = p.y = p.z = 1 / 0, this.noKeys = !1, this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  };
  var f = this, m = 1e-6, v = new THREE.Vector2, g = new THREE.Vector2, b = new THREE.Vector2, w = new THREE.Vector2,
    y = new THREE.Vector2, E = new THREE.Vector2, x = new THREE.Vector3, T = new THREE.Vector3, _ = new THREE.Vector2,
    S = new THREE.Vector2, k = new THREE.Vector2, R = 0, C = 0, A = 1, M = new THREE.Vector3, H = new THREE.Vector3,
    L = new THREE.Quaternion,
    D = {NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5}, N = D.NONE;
  this.target0 = this.target.clone(), this.position0 = this.object.position.clone();
  var P = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)), I = P.clone().inverse(),
    O = {type: "change"}, B = {type: "start"}, j = {type: "end"};
  this.rotateLeft = function (e) {
    void 0 === e && (e = i()), C -= e
  }, this.rotateUp = function (e) {
    void 0 === e && (e = i()), R -= e
  }, this.panLeft = function (e) {
    x.setFromMatrixColumn(this.object.matrix, 0);
    var t = x.length();
    x.y = 0, x.setLength(t), x.multiplyScalar(-e), M.add(x)
  }, this.panAbove = function (e) {
    x.setFromMatrixColumn(this.object.matrix, 1);
    var t = x.length();
    x.setLength(t), x.multiplyScalar(e), M.add(x)
  }, this.panUp = function (e) {
    x.setFromMatrixColumn(this.object.matrix, 1);
    var t = x.length();
    x.x = x.z = 0, x.setLength(t), x.multiplyScalar(e), M.add(x)
  }, this.panForward = function (e) {
    x.setFromMatrixColumn(this.object.matrix, 2);
    var t = x.length();
    x.y = 0, x.setLength(t), x.multiplyScalar(-e), M.add(x)
  }, this.pan = function (e, t) {
    var i = f.viewportW || f.element.clientWidth, n = f.viewportH || f.element.clientHeight;
    if (void 0 !== f.object.fov) {
      var o = f.object.position, s = o.clone().sub(f.target), r = s.length();
      r *= Math.tan(f.object.fov / 2 * Math.PI / 180);
      var a = 2 * e * r / n, l = 2 * t * r / n;
      f.panLeft(a), f.orthoMode ? f.panAbove(l) : f.panForward(l)
    } else void 0 !== f.object.top ? (f.panLeft(e * (f.object.right - f.object.left) / i), f.panUp(t * (f.object.top - f.object.bottom) / n)) : console.warn(
      "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
  }, this.dollyIn = function (e) {
    void 0 === e && (e = n()), A /= e
  }, this.dollyOut = function (e) {
    void 0 === e && (e = n()), A *= e
  }, this.setSize = function (e, t) {
    this.viewportW = e, this.viewportH = t
  }, this.update = function () {
    var e = this.object.position;
    T.copy(e).sub(this.target), T.applyQuaternion(P);
    var t = Math.atan2(T.x, T.z), n = Math.atan2(Math.sqrt(T.x * T.x + T.z * T.z), T.y);
    this.autoRotate && this.rotateLeft(i()), t += C, n += R, this.disableBorders || (n = Math.max(
      this.minPolarAngle,
      Math.min(
        this.maxPolarAngle,
        n
      )
    )), n = Math.max(m, Math.min(Math.PI - m, n));
    var o = T.length() * A;
    this.disableBorders || (o = Math.max(
      this.minDistance,
      Math.min(this.maxDistance, o)
    )), Math.abs(o - this.radius) > m && (this.radiusChanged = !0), this.radius = o, this.target.add(M), this.disableBorders || this.borderBox.isEmpty() || (this.target.min(
      this.borderBox.max), this.target.max(this.borderBox.min)), T.x = this.radius * Math.sin(n) * Math.sin(t), T.y = this.radius * Math.cos(
      n), T.z = this.radius * Math.sin(n) * Math.cos(t), T.applyQuaternion(I), e.copy(this.target)
      .add(T), T.lengthSq() && this.object.lookAt(this.target), C = 0, R = 0, A = 1, M.set(
      0,
      0,
      0
    ), (H.distanceToSquared(this.object.position) > m || 8 * (1 - L.dot(this.object.quaternion)) > m) && (this.changed = !0, this.dispatchEvent(
      O), H.copy(this.object.position), L.copy(this.object.quaternion))
  }, this.reset = function () {
    N = D.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.update()
  }, this.domElement.addEventListener("contextmenu", function (e) {
    f.enabled !== !1 && e.preventDefault()
  }, !1), this.onKeyDown = l, this.domElement.addEventListener("mousedown", o, !1), this.domElement.addEventListener(
    "mousewheel",
    a,
    !1
  ), this.domElement.addEventListener("wheel", a, !1), this.domElement.addEventListener(
    "DOMMouseScroll",
    a,
    !1
  ), this.domElement.addEventListener("touchstart", h, !1), this.domElement.addEventListener(
    "touchend",
    d,
    !1
  ), this.domElement.addEventListener("touchmove", c, !1), this.update()
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), function () {
  "use strict";
  var e = function (e) {
    THREE.MeshBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.side = THREE.FrontSide, this.transparent = !0, this.setValues(
      e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function (e) {
      e ? (this.color.setRGB(
        1,
        1,
        0
      ), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
    }
  };
  e.prototype = Object.create(THREE.MeshBasicMaterial.prototype), e.prototype.constructor = e;
  var t = function (e) {
    THREE.LineBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.transparent = !0, this.linewidth = 1, this.setValues(
      e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function (e) {
      e ? (this.color.setRGB(
        1,
        1,
        0
      ), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
    }
  };
  t.prototype = Object.create(THREE.LineBasicMaterial.prototype), t.prototype.constructor = t;
  var i = new e({visible: !1, transparent: !1});
  THREE.TransformGizmo = function () {
    this.init = function () {
      THREE.Object3D.call(this), this.handles = new THREE.Object3D, this.pickers = new THREE.Object3D, this.planes = new THREE.Object3D, this.add(
        this.handles), this.add(this.pickers), this.add(this.planes);
      var e = new THREE.PlaneBufferGeometry(50, 50, 2, 2),
        t = new THREE.MeshBasicMaterial({visible: !1, side: THREE.DoubleSide}),
        i = {XY: new THREE.Mesh(e, t), YZ: new THREE.Mesh(e, t), XZ: new THREE.Mesh(e, t), XYZE: new THREE.Mesh(e, t)};
      this.activePlane = i.XYZE, i.YZ.rotation.set(0, Math.PI / 2, 0), i.XZ.rotation.set(-Math.PI / 2, 0, 0);
      for (var n in i) i[n].name = n, this.planes.add(i[n]), this.planes[n] = i[n];
      var o = function (e, t) {
        for (var i in e) for (n = e[i].length; n--;) {
          var o = e[i][n][0], s = e[i][n][1], r = e[i][n][2];
          o.name = i, s && o.position.set(s[0], s[1], s[2]), r && o.rotation.set(r[0], r[1], r[2]), t.add(o)
        }
      };
      o(this.handleGizmos, this.handles), o(this.pickerGizmos, this.pickers), this.traverse(function (e) {
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
    }, this.highlight = function (e) {
      this.traverse(function (t) {
        t.material && t.material.highlight && (t.name === e ? t.material.highlight(!0) : t.material.highlight(!1))
      })
    }
  }, THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo, THREE.TransformGizmo.prototype.update = function (e, t) {
    var i = new THREE.Vector3(0, 0, 0), n = new THREE.Vector3(0, 1, 0), o = new THREE.Matrix4;
    this.traverse(function (s) {
      s.name.search("E") !== -1 ? s.quaternion.setFromRotationMatrix(o.lookAt(
        t,
        i,
        n
      )) : s.name.search("X") === -1 && s.name.search("Y") === -1 && s.name.search("Z") === -1 || s.quaternion.setFromEuler(
        e)
    })
  }, THREE.TransformGizmoTranslate = function () {
    THREE.TransformGizmo.call(this);
    var n = new THREE.Geometry, o = new THREE.Mesh(new THREE.CylinderGeometry(0, .05, .2, 12, 1, !1));
    o.position.y = .5, o.updateMatrix(), n.merge(o.geometry, o.matrix);
    var s = new THREE.BufferGeometry;
    s.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    var r = new THREE.BufferGeometry;
    r.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    var a = new THREE.BufferGeometry;
    a.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)), this.handleGizmos = {
      X: [[new THREE.Mesh(n, new e({color: 16711680})), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(
        s,
        new t({color: 16711680})
      )]],
      Y: [[new THREE.Mesh(n, new e({color: 65280})), [0, .5, 0]], [new THREE.Line(r, new t({color: 65280}))]],
      Z: [[new THREE.Mesh(n, new e({color: 255})), [0, 0, .5], [Math.PI / 2, 0, 0]], [new THREE.Line(
        a,
        new t({color: 255})
      )]],
      XYZ: [[new THREE.Mesh(
        new THREE.OctahedronGeometry(.1, 0),
        new e({color: 16777215, opacity: .25})
      ), [0, 0, 0], [0, 0, 0]]],
      XY: [[new THREE.Mesh(
        new THREE.PlaneBufferGeometry(.29, .29),
        new e({color: 16776960, opacity: .25})
      ), [.15, .15, 0]]],
      YZ: [[new THREE.Mesh(
        new THREE.PlaneBufferGeometry(.29, .29),
        new e({color: 65535, opacity: .25})
      ), [0, .15, .15], [0, Math.PI / 2, 0]]],
      XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.29, .29), new e({
                                                                            color: 16711935, opacity: .25
                                                                          })), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1),
        i
      ), [.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), i), [0, .6, 0]]],
      Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), i), [0, 0, .6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(.2, 0), i)]],
      XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), i), [.2, .2, 0]]],
      YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), i), [0, .2, .2], [0, Math.PI / 2, 0]]],
      XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), i), [.2, 0, .2], [-Math.PI / 2, 0, 0]]]
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
      i = i ? i : 1;
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
      X: [[new THREE.Line(new e(1, "x", .5), new t({color: 16711680}))]],
      Y: [[new THREE.Line(new e(1, "y", .5), new t({color: 65280}))]],
      Z: [[new THREE.Line(new e(1, "z", .5), new t({color: 255}))]],
      E: [[new THREE.Line(new e(1.25, "z", 1), new t({color: 13421568}))]],
      XYZE: [[new THREE.Line(new e(1, "z", 1), new t({color: 7895160}))]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI),
        i
      ), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), i), [0, 0, 0], [Math.PI / 2, 0, 0]]],
      Z: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), i), [0, 0, 0], [0, 0, -Math.PI / 2]]],
      E: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, .12, 2, 24), i)]],
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
    var n = new THREE.Geometry, o = new THREE.Mesh(new THREE.BoxGeometry(.125, .125, .125));
    o.position.y = .5, o.updateMatrix(), n.merge(o.geometry, o.matrix);
    var s = new THREE.BufferGeometry;
    s.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    var r = new THREE.BufferGeometry;
    r.addAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    var a = new THREE.BufferGeometry;
    a.addAttribute(
      "position",
      new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
    ), this.handleGizmos = {
      X: [[new THREE.Mesh(
        n,
        new e({color: 16711680})
      ), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(s, new t({color: 16711680}))]],
      Y: [[new THREE.Mesh(n, new e({color: 65280})), [0, .5, 0]], [new THREE.Line(r, new t({color: 65280}))]],
      Z: [[new THREE.Mesh(n, new e({color: 255})), [0, 0, .5], [Math.PI / 2, 0, 0]], [new THREE.Line(
        a,
        new t({color: 255})
      )]],
      XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(.125, .125, .125), new e({color: 16777215, opacity: .25}))]]
    }, this.pickerGizmos = {
      X: [[new THREE.Mesh(
        new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1),
        i
      ), [.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), i), [0, .6, 0]]],
      Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, !1), i), [0, 0, .6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(.4, .4, .4), i)]]
    }, this.setActivePlane = function (e, t) {
      var i = new THREE.Matrix4;
      t.applyMatrix4(i.getInverse(i.extractRotation(this.planes.XY.matrixWorld))), "X" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), "Y" === e && (this.activePlane = this.planes.XY, Math.abs(
        t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), "Z" === e && (this.activePlane = this.planes.XZ, Math.abs(
        t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), "XYZ" === e && (this.activePlane = this.planes.XYZE)
    }, this.init()
  }, THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale, THREE.TransformControls = function (e, t) {
    function i(e) {
      if (void 0 !== a.object && h !== !0 && (void 0 === e.button || 0 === e.button)) {
        var t = e.changedTouches ? e.changedTouches[0] : e, i = r(t, c[l].pickers.children), n = null;
        i && (n = i.object.name, e.preventDefault()), a.axis !== n && (a.axis = n, a.update(), a.dispatchEvent(p))
      }
    }

    function n(e) {
      if (void 0 !== a.object && h !== !0 && (void 0 === e.button || 0 === e.button)) {
        var t = e.changedTouches ? e.changedTouches[0] : e;
        if (0 === t.button || void 0 === t.button) {
          var i = r(t, c[l].pickers.children);
          if (i) {
            e.preventDefault(), e.stopPropagation(), a.dispatchEvent(f), a.axis = i.object.name, a.update(), S.copy(X)
              .sub(V)
              .normalize(), c[l].setActivePlane(a.axis, S);
            var n = r(t, [c[l].activePlane]);
            n && (O.copy(a.object.position), B.copy(a.object.scale), j.extractRotation(a.object.matrix), W.extractRotation(
              a.object.matrixWorld), F.extractRotation(a.object.parent.matrixWorld), z.setFromMatrixScale(k.getInverse(a.object.parent.matrixWorld)), y.copy(
              n.point))
          }
        }
        h = !0
      }
    }

    function o(e) {
      if (void 0 !== a.object && null !== a.axis && h !== !1 && (void 0 === e.button || 0 === e.button)) {
        var t = e.changedTouches ? e.changedTouches[0] : e, i = r(t, [c[l].activePlane]);
        i !== !1 && (e.preventDefault(), e.stopPropagation(), w.copy(i.point), "translate" === l ? (w.sub(y), w.multiply(
          z), "local" === a.space && (w.applyMatrix4(k.getInverse(W)), a.axis.search("X") === -1 && (w.x = 0), a.axis.search(
          "Y") === -1 && (w.y = 0), a.axis.search("Z") === -1 && (w.z = 0), w.applyMatrix4(j), a.object.position.copy(O), a.object.position.add(
          w)), "world" !== a.space && a.axis.search("XYZ") === -1 || (a.axis.search("X") === -1 && (w.x = 0), a.axis.search(
          "Y") === -1 && (w.y = 0), a.axis.search("Z") === -1 && (w.z = 0), w.applyMatrix4(k.getInverse(F)), a.object.position.copy(
          O), a.object.position.add(w)), null !== a.translationSnap && ("local" === a.space && a.object.position.applyMatrix4(
          k.getInverse(W)), a.axis.search("X") !== -1 && (a.object.position.x = Math.round(a.object.position.x / a.translationSnap) * a.translationSnap), a.axis.search(
          "Y") !== -1 && (a.object.position.y = Math.round(a.object.position.y / a.translationSnap) * a.translationSnap), a.axis.search(
          "Z") !== -1 && (a.object.position.z = Math.round(a.object.position.z / a.translationSnap) * a.translationSnap), "local" === a.space && a.object.position.applyMatrix4(
          W))) : "scale" === l ? (w.sub(y), w.multiply(z), "local" === a.space && ("XYZ" === a.axis ? (T = 1 + w.y / Math.max(
          B.x,
          B.y,
          B.z
        ), a.object.scale.x = B.x * T, a.object.scale.y = B.y * T, a.object.scale.z = B.z * T) : (w.applyMatrix4(k.getInverse(
          W)), "X" === a.axis && (a.object.scale.x = B.x * (1 + w.x / B.x)), "Y" === a.axis && (a.object.scale.y = B.y * (1 + w.y / B.y)), "Z" === a.axis && (a.object.scale.z = B.z * (1 + w.z / B.z))))) : "rotate" === l && (w.sub(
          V), w.multiply(z), R.copy(y)
          .sub(V), R.multiply(z), "E" === a.axis ? (w.applyMatrix4(k.getInverse(_)), R.applyMatrix4(k.getInverse(_)), E.set(
          Math.atan2(w.z, w.y),
          Math.atan2(w.x, w.z),
          Math.atan2(w.y, w.x)
        ), x.set(
          Math.atan2(R.z, R.y),
          Math.atan2(R.x, R.z),
          Math.atan2(R.y, R.x)
        ), C.setFromRotationMatrix(k.getInverse(F)), I.setFromAxisAngle(
          S,
          E.z - x.z
        ), L.setFromRotationMatrix(W), C.multiplyQuaternions(C, I), C.multiplyQuaternions(
          C,
          L
        ), a.object.quaternion.copy(C)) : "XYZE" === a.axis ? (I.setFromEuler(w.clone()
                                                                                .cross(R)
                                                                                .normalize()), C.setFromRotationMatrix(k.getInverse(
          F)), D.setFromAxisAngle(I, -w.clone().angleTo(R)), L.setFromRotationMatrix(W), C.multiplyQuaternions(
          C,
          D
        ), C.multiplyQuaternions(
          C,
          L
        ), a.object.quaternion.copy(C)) : "local" === a.space ? (w.applyMatrix4(k.getInverse(W)), R.applyMatrix4(k.getInverse(
          W)), E.set(Math.atan2(w.z, w.y), Math.atan2(w.x, w.z), Math.atan2(w.y, w.x)), x.set(
          Math.atan2(R.z, R.y),
          Math.atan2(R.x, R.z),
          Math.atan2(R.y, R.x)
        ), L.setFromRotationMatrix(j), null !== a.rotationSnap ? (D.setFromAxisAngle(
          A,
          Math.round((E.x - x.x) / a.rotationSnap) * a.rotationSnap
        ), N.setFromAxisAngle(M, Math.round((E.y - x.y) / a.rotationSnap) * a.rotationSnap), P.setFromAxisAngle(
          H,
          Math.round((E.z - x.z) / a.rotationSnap) * a.rotationSnap
        )) : (D.setFromAxisAngle(A, E.x - x.x), N.setFromAxisAngle(M, E.y - x.y), P.setFromAxisAngle(
          H,
          E.z - x.z
        )), "X" === a.axis && L.multiplyQuaternions(L, D), "Y" === a.axis && L.multiplyQuaternions(
          L,
          N
        ), "Z" === a.axis && L.multiplyQuaternions(L, P), a.object.quaternion.copy(L)) : "world" === a.space && (E.set(
          Math.atan2(w.z, w.y),
          Math.atan2(w.x, w.z),
          Math.atan2(w.y, w.x)
        ), x.set(
          Math.atan2(R.z, R.y),
          Math.atan2(R.x, R.z),
          Math.atan2(R.y, R.x)
        ), C.setFromRotationMatrix(k.getInverse(F)), null !== a.rotationSnap ? (D.setFromAxisAngle(
          A,
          Math.round((E.x - x.x) / a.rotationSnap) * a.rotationSnap
        ), N.setFromAxisAngle(M, Math.round((E.y - x.y) / a.rotationSnap) * a.rotationSnap), P.setFromAxisAngle(
          H,
          Math.round((E.z - x.z) / a.rotationSnap) * a.rotationSnap
        )) : (D.setFromAxisAngle(A, E.x - x.x), N.setFromAxisAngle(M, E.y - x.y), P.setFromAxisAngle(
          H,
          E.z - x.z
        )), L.setFromRotationMatrix(W), "X" === a.axis && C.multiplyQuaternions(
          C,
          D
        ), "Y" === a.axis && C.multiplyQuaternions(C, N), "Z" === a.axis && C.multiplyQuaternions(
          C,
          P
        ), C.multiplyQuaternions(
          C,
          L
        ), a.object.quaternion.copy(C))), a.update(), a.dispatchEvent(p), a.dispatchEvent(v))
      }
    }

    function s(e) {
      e.preventDefault(), void 0 !== e.button && 0 !== e.button || (h && null !== a.axis && (m.mode = l, a.dispatchEvent(
        m)), h = !1, "TouchEvent" in window && e instanceof TouchEvent ? (a.axis = null, a.update(), a.dispatchEvent(p)) : i(
        e))
    }

    function r(i, n) {
      var o = t.getBoundingClientRect(), s = (i.clientX - o.left) / o.width, r = (i.clientY - o.top) / o.height;
      b.set(2 * s - 1, -(2 * r) + 1), g.setFromCamera(b, e);
      var a = g.intersectObjects(n, !0);
      return !!a[0] && a[0]
    }

    THREE.Object3D.call(this), t = void 0 !== t ? t : document, this.object = void 0, this.visible = !1, this.translationSnap = null, this.rotationSnap = null, this.space = "world", this.size = 1, this.axis = null;
    var a = this, l = "translate", h = !1, c = {
      translate: new THREE.TransformGizmoTranslate,
      rotate: new THREE.TransformGizmoRotate,
      scale: new THREE.TransformGizmoScale
    };
    for (var d in c) {
      var u = c[d];
      u.visible = d === l, this.add(u)
    }
    var p = {type: "change"}, f = {type: "mouseDown"}, m = {type: "mouseUp", mode: l}, v = {type: "objectChange"},
      g = new THREE.Raycaster, b = new THREE.Vector2, w = new THREE.Vector3, y = new THREE.Vector3,
      E = new THREE.Vector3, x = new THREE.Vector3, T = 1, _ = new THREE.Matrix4, S = new THREE.Vector3,
      k = new THREE.Matrix4, R = new THREE.Vector3, C = new THREE.Quaternion, A = new THREE.Vector3(1, 0, 0),
      M = new THREE.Vector3(0, 1, 0), H = new THREE.Vector3(0, 0, 1), L = new THREE.Quaternion,
      D = new THREE.Quaternion, N = new THREE.Quaternion, P = new THREE.Quaternion, I = new THREE.Quaternion,
      O = new THREE.Vector3, B = new THREE.Vector3, j = new THREE.Matrix4, F = new THREE.Matrix4, z = new THREE.Vector3,
      V = new THREE.Vector3, U = new THREE.Euler, W = new THREE.Matrix4, X = new THREE.Vector3, G = new THREE.Euler;
    t.addEventListener("mousedown", n, !1), t.addEventListener("touchstart", n, !1), t.addEventListener(
      "mousemove",
      i,
      !1
    ), t.addEventListener("touchmove", i, !1), t.addEventListener("mousemove", o, !1), t.addEventListener(
      "touchmove",
      o,
      !1
    ), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", s, !1), t.addEventListener(
      "touchend",
      s,
      !1
    ), t.addEventListener("touchcancel", s, !1), t.addEventListener("touchleave", s, !1), this.dispose = function () {
      t.removeEventListener("mousedown", n), t.removeEventListener("touchstart", n), t.removeEventListener(
        "mousemove",
        i
      ), t.removeEventListener("touchmove", i), t.removeEventListener(
        "mousemove",
        o
      ), t.removeEventListener("touchmove", o), t.removeEventListener("mouseup", s), t.removeEventListener(
        "mouseout",
        s
      ), t.removeEventListener("touchend", s), t.removeEventListener("touchcancel", s), t.removeEventListener(
        "touchleave",
        s
      )
    }, this.attach = function (e) {
      this.object = e, this.visible = !0, this.update()
    }, this.detach = function () {
      this.object = void 0, this.visible = !1, this.axis = null
    }, this.getMode = function () {
      return l
    }, this.setMode = function (e) {
      l = e ? e : l, "scale" === l && (a.space = "local");
      for (var t in c) c[t].visible = t === l;
      this.update(), a.dispatchEvent(p)
    }, this.setTranslationSnap = function (e) {
      a.translationSnap = e
    }, this.setRotationSnap = function (e) {
      a.rotationSnap = e
    }, this.setSize = function (e) {
      a.size = e, this.update(), a.dispatchEvent(p)
    }, this.setSpace = function (e) {
      a.space = e, this.update(), a.dispatchEvent(p)
    }, this.update = function () {
      void 0 !== a.object && (a.object.updateMatrixWorld(), V.setFromMatrixPosition(a.object.matrixWorld), U.setFromRotationMatrix(
        k.extractRotation(a.object.matrixWorld)), e.updateMatrixWorld(), X.setFromMatrixPosition(e.matrixWorld), G.setFromRotationMatrix(
        k.extractRotation(e.matrixWorld)), T = V.distanceTo(X) / 6 * a.size, this.position.copy(V), this.scale.set(
        T,
        T,
        T
      ), e instanceof THREE.PerspectiveCamera ? S.copy(X)
        .sub(V)
        .normalize() : e instanceof THREE.OrthographicCamera && S.copy(X)
        .normalize(), "local" === a.space ? c[l].update(U, S) : "world" === a.space && c[l].update(
        new THREE.Euler,
        S
      ), c[l].highlight(a.axis))
    }
  }, THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformControls.prototype.constructor = THREE.TransformControls
}(), function () {
  function e(e) {
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
  }

  function t(e) {
    var t = new Map;
    if ("Video" in e.Objects.subNodes) {
      var n = e.Objects.subNodes.Video;
      for (var o in n) {
        var s = n[o];
        if ("Content" in s.properties) {
          var r = i(n[o]);
          t.set(parseInt(o), r)
        }
      }
    }
    return t
  }

  function i(e) {
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

  function n(e, t, i, n) {
    var s = new Map;
    if ("Texture" in e.Objects.subNodes) {
      var r = e.Objects.subNodes.Texture;
      for (var a in r) {
        var l = o(r[a], t, i, n);
        s.set(parseInt(a), l)
      }
    }
    return s
  }

  function o(e, t, i, n) {
    var o, s = e.id, r = e.name, a = e.properties.FileName, l = e.properties.RelativeFilename, h = n.get(s).children;
    if (void 0 !== h && h.length > 0 && i.has(h[0].ID)) o = i.get(h[0].ID); else if (void 0 !== l && "/" !== l[0] && null === l.match(
      /^[a-zA-Z]:/)) o = l; else {
      var c = a.split(/[\\\/]/);
      o = c.length > 0 ? c[c.length - 1] : a
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

  function s(e, t, i) {
    var n = new Map;
    if ("Material" in e.Objects.subNodes) {
      var o = e.Objects.subNodes.Material;
      for (var s in o) {
        var a = r(o[s], t, i);
        n.set(parseInt(s), a)
      }
    }
    return n
  }

  function r(e, t, i) {
    var n = e.id, o = e.attrName, s = e.properties.ShadingModel;
    "object" == typeof s && (s = s.value);
    var r, l = i.get(n).children, h = a(e.properties, t, l);
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
    return r.setValues(h), r.name = o, r
  }

  function a(e, t, i) {
    var n = {}, o = e.Diffuse || e.DiffuseColor;
    o && (n.color = Y(o));
    var s = e.Specular || e.SpecularColor;
    s && (n.specular = Y(s)), e.Shininess && (n.shininess = e.Shininess.value);
    var r = e.Emissive || e.EmissiveColor;
    r && (n.emissive = Y(r)), e.EmissiveFactor && (n.emissiveIntensity = e.EmissiveFactor.value), e.Opacity && (n.opacity = e.Opacity.value), n.opacity < 1 && (n.transparent = !0);
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
  }

  function l(e, t) {
    var i = {};
    if ("Deformer" in e.Objects.subNodes) {
      var n = e.Objects.subNodes.Deformer;
      for (var o in n) {
        var s = n[o];
        if ("Skin" === s.attrType) {
          var r = t.get(parseInt(o)), a = h(r, n);
          a.FBX_ID = parseInt(o), i[o] = a
        }
      }
    }
    return i
  }

  function h(e, t) {
    for (var i = {}, n = e.children, o = 0, s = n.length; o < s; ++o) {
      var r = n[o], a = t[r.ID], l = {
        FBX_ID: r.ID,
        index: o,
        indices: [],
        weights: [],
        transform: q(a.subNodes.Transform.properties.a),
        transformLink: q(a.subNodes.TransformLink.properties.a),
        linkMode: a.properties.Mode
      };
      "Indexes" in a.subNodes && (l.indices = X(a.subNodes.Indexes.properties.a), l.weights = W(a.subNodes.Weights.properties.a)), i[r.ID] = l
    }
    return {map: i, bones: []}
  }

  function c(e, t, i) {
    var n = new Map;
    if ("Geometry" in e.Objects.subNodes) {
      var o = e.Objects.subNodes.Geometry;
      for (var s in o) {
        var r = t.get(parseInt(s)), a = d(o[s], r, i);
        n.set(parseInt(s), a)
      }
    }
    return n
  }

  function d(e, t, i) {
    switch (e.attrType) {
      case"Mesh":
        return u(e, t, i);
      case"NurbsCurve":
        return w(e)
    }
  }

  function u(e, t, i) {
    for (var n = 0; n < t.children.length; ++n) {
      var o = i[t.children[n].ID];
      if (void 0 !== o) break
    }
    return p(e, o)
  }

  function p(e, t) {
    var i = new P, n = e.subNodes, o = W(n.Vertices.properties.a), s = X(n.PolygonVertexIndex.properties.a);
    if (n.LayerElementNormal) var r = f(n.LayerElementNormal[0]);
    if (n.LayerElementUV) var a = m(n.LayerElementUV[0]);
    if (n.LayerElementColor) var l = v(n.LayerElementColor[0]);
    if (n.LayerElementMaterial) var h = g(n.LayerElementMaterial[0]);
    for (var c = [], d = 0, u = 0; u < s.length; u++) {
      var p = s[u], w = !1;
      p < 0 && (p ^= -1, s[u] = p, w = !0);
      var y = new L, E = [], x = [];
      if (y.position.fromArray(o, 3 * p), t) {
        var T = t.map;
        for (var _ in T) for (var S = T[_], k = S.indices, R = 0; R < k.length; R++) {
          var C = k[R];
          if (C === p) {
            x.push(S.weights[R]), E.push(S.index);
            break
          }
        }
        if (x.length > 4) {
          console.warn(
            "FBXLoader: Vertex has more than 4 skinning weights assigned to vertex.  Deleting additional weights.");
          var A = [0, 0, 0, 0], M = [0, 0, 0, 0];
          x.forEach(function (e, t) {
            var i = e, n = E[t];
            M.forEach(function (e, t, o) {
              if (i > e) {
                o[t] = i, i = e;
                var s = A[t];
                A[t] = n, n = s
              }
            })
          }), E = A, x = M
        }
        for (var H = x.length; H < 4; ++H) x[H] = 0, E[H] = 0;
        y.skinWeights.fromArray(x), y.skinIndices.fromArray(E)
      }
      if (r && y.normal.fromArray(b(u, d, p, r)), a && y.uv.fromArray(b(u, d, p, a)), l && y.color.fromArray(b(
        u,
        d,
        p,
        l
      )), c.push(y), w) {
        var D = new N;
        if (D.genTrianglesFromVertices(c), void 0 !== h) {
          var I = b(u, d, p, h);
          D.materialIndex = I[0]
        } else D.materialIndex = 0;
        i.faces.push(D), c = [], d++, w = !1
      }
    }
    var O = i.flattenToBuffers(), B = new THREE.BufferGeometry;
    B.name = e.name, B.addAttribute(
      "position",
      new THREE.Float32BufferAttribute(O.vertexBuffer, 3)
    ), O.normalBuffer.length > 0 && B.addAttribute(
      "normal",
      new THREE.Float32BufferAttribute(O.normalBuffer, 3)
    ), O.uvBuffer.length > 0 && B.addAttribute(
      "uv",
      new THREE.Float32BufferAttribute(O.uvBuffer, 2)
    ), n.LayerElementColor && B.addAttribute(
      "color",
      new THREE.Float32BufferAttribute(O.colorBuffer, 3)
    ), t && (B.addAttribute("skinIndex", new THREE.Float32BufferAttribute(O.skinIndexBuffer, 4)), B.addAttribute(
      "skinWeight",
      new THREE.Float32BufferAttribute(O.skinWeightBuffer, 4)
    ), B.FBX_Deformer = t);
    for (var j = O.materialIndexBuffer, F = j[0], z = 0, H = 0; H < j.length; ++H) j[H] !== F && (B.addGroup(
      z,
      H - z,
      F
    ), F = j[H], z = H);
    return B
  }

  function f(e) {
    var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
      n = W(e.subNodes.Normals.properties.a), o = [];
    return "IndexToDirect" === i && ("NormalIndex" in e.subNodes ? o = X(e.subNodes.NormalIndex.properties.a) : "NormalsIndex" in e.subNodes && (o = X(
      e.subNodes.NormalsIndex.properties.a))), {dataSize: 3, buffer: n, indices: o, mappingType: t, referenceType: i}
  }

  function m(e) {
    var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
      n = W(e.subNodes.UV.properties.a), o = [];
    return "IndexToDirect" === i && (o = X(e.subNodes.UVIndex.properties.a)), {
      dataSize: 2,
      buffer: n,
      indices: o,
      mappingType: t,
      referenceType: i
    }
  }

  function v(e) {
    var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType,
      n = W(e.subNodes.Colors.properties.a), o = [];
    return "IndexToDirect" === i && (o = W(e.subNodes.ColorIndex.properties.a)), {
      dataSize: 4,
      buffer: n,
      indices: o,
      mappingType: t,
      referenceType: i
    }
  }

  function g(e) {
    var t = e.properties.MappingInformationType, i = e.properties.ReferenceInformationType;
    if ("NoMappingInformation" === t) return {
      dataSize: 1,
      buffer: [0],
      indices: [0],
      mappingType: "AllSame",
      referenceType: i
    };
    for (var n = X(e.subNodes.Materials.properties.a), o = [], s = 0, r = n.length; s < r; ++s) o.push(s);
    return {dataSize: 1, buffer: n, indices: o, mappingType: t, referenceType: i}
  }

  function b(e, t, i, n) {
    return te[n.mappingType][n.referenceType](e, t, i, n)
  }

  function w(e) {
    if (void 0 === THREE.NURBSCurve) return console.error(
      "THREE.FBXLoader relies on THREE.NURBSCurve for any nurbs present in the model.  Nurbs will show up as empty geometry."), new THREE.BufferGeometry;
    var t = parseInt(e.properties.Order);
    if (isNaN(t)) return console.error("FBXLoader: Invalid Order " + e.properties.Order + " given for geometry ID: " + e.id), new THREE.BufferGeometry;
    for (var i = t - 1, n = W(e.subNodes.KnotVector.properties.a), o = [], s = W(e.subNodes.Points.properties.a), r = 0, a = s.length; r < a; r += 4) o.push(
      (new THREE.Vector4).fromArray(s, r));
    var l, h;
    if ("Closed" === e.properties.Form) o.push(o[0]); else if ("Periodic" === e.properties.Form) {
      l = i, h = n.length - 1 - l;
      for (var r = 0; r < i; ++r) o.push(o[r])
    }
    for (var c = new THREE.NURBSCurve(
      i,
      n,
      o,
      l,
      h
    ), d = c.getPoints(7 * o.length), u = new Float32Array(3 * d.length), r = 0, a = d.length; r < a; ++r) d[r].toArray(
      u,
      3 * r
    );
    var p = new THREE.BufferGeometry;
    return p.addAttribute("position", new THREE.BufferAttribute(u, 3)), p
  }

  function y(e, t, i, n, o) {
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
          for (var y = null, x = null, T = [], _ = 0, S = u.children.length; _ < S; ++_) {
            var k = u.children[_];
            n.has(k.ID) && (y = n.get(k.ID)), o.has(k.ID) && T.push(o.get(k.ID))
          }
          if (T.length > 1 ? x = T : T.length > 0 ? x = T[0] : (x = new THREE.MeshBasicMaterial({color: 3342591}), T.push(
            x)), "color" in y.attributes) for (var C = 0, A = T.length; C < A; ++C) T[C].vertexColors = THREE.VertexColors;
          if (y.FBX_Deformer) {
            for (var M = 0, H = T.length; M < H; ++M) T[M].skinning = !0;
            p = new THREE.SkinnedMesh(y, x)
          } else p = new THREE.Mesh(y, x);
          break;
        case"NurbsCurve":
          for (var y = null, _ = 0, S = u.children.length; _ < S; ++_) {
            var k = u.children[_];
            n.has(k.ID) && (y = n.get(k.ID))
          }
          x = new THREE.LineBasicMaterial({color: 3342591, linewidth: 5}), p = new THREE.Line(y, x);
          break;
        default:
          p = new THREE.Object3D
      }
      p.name = d.attrName.replace(/:/, "").replace(/_/, "").replace(/-/, ""), p.FBX_ID = c, a.push(p), l.set(c, p)
    }
    for (var L = 0, D = a.length; L < D; ++L) {
      var p = a[L], d = r[p.FBX_ID];
      if ("Lcl_Translation" in d.properties && p.position.fromArray(W(d.properties.Lcl_Translation.value)), "Lcl_Rotation" in d.properties) {
        var N = W(d.properties.Lcl_Rotation.value).map(K);
        N.push("ZYX"), p.rotation.fromArray(N)
      }
      if ("Lcl_Scaling" in d.properties && p.scale.fromArray(W(d.properties.Lcl_Scaling.value)), "PreRotation" in d.properties) {
        var P = (new THREE.Euler).setFromVector3(G(d.properties.PreRotation).multiplyScalar(se), "ZYX");
        P = (new THREE.Quaternion).setFromEuler(P);
        var I = (new THREE.Quaternion).setFromEuler(p.rotation);
        P.multiply(I), p.rotation.setFromQuaternion(P, "ZYX")
      }
      for (var u = t.get(p.FBX_ID), O = 0; O < u.parents.length; O++) {
        var B = Q(a, function (e) {
          return e.FBX_ID === u.parents[O].ID
        });
        if (B > -1) {
          a[B].add(p);
          break
        }
      }
      null === p.parent && s.add(p)
    }
    s.updateMatrixWorld(!0);
    var j = e.Objects.subNodes.Pose;
    for (var h in j) if ("BindPose" === j[h].attrType) {
      j = j[h];
      break
    }
    if (j) for (var F = j.subNodes.PoseNode, z = new Map, V = 0, U = F.length; V < U; ++V) {
      var d = F[V], X = q(d.subNodes.Matrix.properties.a);
      z.set(parseInt(d.id), X)
    }
    for (var m in i) {
      var v = i[m], g = v.map;
      for (var Y in g) {
        var b = g[Y], Z = b.index, J = v.bones[Z];
        if (!z.has(J.FBX_ID)) break;
        var $ = z.get(J.FBX_ID);
        J.matrixWorld.copy($)
      }
      v.skeleton = new THREE.Skeleton(v.bones);
      for (var u = t.get(v.FBX_ID), ee = u.parents, te = 0, ie = ee.length; te < ie; ++te) {
        var ne = ee[te];
        if (n.has(ne.ID)) for (var oe = ne.ID, re = t.get(oe), f = 0; f < re.parents.length; ++f) if (l.has(re.parents[f].ID)) {
          var p = l.get(re.parents[f].ID);
          p.bind(v.skeleton, p.matrixWorld);
          break
        }
      }
    }
    s.updateMatrixWorld(!0), s.skeleton = {bones: a};
    var ae = E(e, t, s);
    return R(s, ae), s
  }

  function E(e, t, i) {
    var n = e.Objects.subNodes.AnimationCurveNode, o = e.Objects.subNodes.AnimationCurve,
      s = e.Objects.subNodes.AnimationLayer, r = e.Objects.subNodes.AnimationStack,
      a = {curves: new Map, layers: {}, stacks: {}, length: 0, fps: 30, frames: 0}, l = [];
    for (var h in n) if (h.match(/\d+/)) {
      var c = x(e, n[h], t, i);
      l.push(c)
    }
    for (var d = new Map, u = 0; u < l.length; ++u) null !== l[u] && d.set(l[u].id, l[u]);
    var p = [];
    for (h in o) if (h.match(/\d+/)) {
      var f = T(o[h]);
      if (!t.has(f.id)) continue;
      p.push(f);
      var m = t.get(f.id).parents[0], v = m.ID, g = m.relationship, b = "";
      if (g.match(/X/)) b = "x"; else if (g.match(/Y/)) b = "y"; else {
        if (!g.match(/Z/)) continue;
        b = "z"
      }
      d.get(v).curves[b] = f
    }
    d.forEach(function (e) {
      var t = e.containerBoneID;
      if (a.curves.has(t) || a.curves.set(
        t,
        {T: null, R: null, S: null}
      ), a.curves.get(t)[e.attr] = e, "R" === e.attr) {
        var i = e.curves;
        if (i.x.values = i.x.values.map(K), i.y.values = i.y.values.map(K), i.z.values = i.z.values.map(K), null !== e.preRotations) {
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
    });
    for (var h in s) {
      for (var w = [], y = t.get(parseInt(h)).children, E = 0; E < y.length; E++) if (d.has(y[E].ID)) {
        var S = d.get(y[E].ID), k = S.containerBoneID;
        void 0 === w[k] && (w[k] = {T: null, R: null, S: null}), w[k][S.attr] = S
      }
      a.layers[h] = w
    }
    for (var h in r) {
      for (var R = [], y = t.get(parseInt(h)).children, C = {max: 0, min: Number.MAX_VALUE}, E = 0; E < y.length; ++E) {
        var A = a.layers[y[E].ID];
        if (void 0 !== A) {
          R.push(A);
          for (var M = 0, H = A.length; M < H; ++M) {
            var w = A[M];
            w && _(w, C)
          }
        }
      }
      C.max > C.min && (a.stacks[h] = {
        name: r[h].attrName,
        layers: R,
        length: C.max - C.min,
        frames: 30 * (C.max - C.min)
      })
    }
    return a
  }

  function x(e, t, i, n) {
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
    for (var a = i.get(s.id), l = a.parents, h = l.length - 1; h >= 0; --h) {
      var c = Q(n.skeleton.bones, function (e) {
        return e.FBX_ID === l[h].ID
      });
      if (c > -1) {
        s.containerBoneID = c, s.containerID = l[h].ID;
        var d = o[s.containerID.toString()];
        "PreRotation" in d.properties && (s.preRotations = G(d.properties.PreRotation).multiplyScalar(Math.PI / 180));
        break
      }
    }
    return s
  }

  function T(e) {
    return {
      version: null,
      id: e.id,
      internalID: e.id,
      times: W(e.subNodes.KeyTime.properties.a).map(U),
      values: W(e.subNodes.KeyValueFloat.properties.a),
      attrFlag: X(e.subNodes.KeyAttrFlags.properties.a),
      attrData: W(e.subNodes.KeyAttrDataFloat.properties.a)
    }
  }

  function _(e, t) {
    e.R && S(e.R.curves, t), e.S && S(e.S.curves, t), e.T && S(e.T.curves, t)
  }

  function S(e, t) {
    e.x && k(e.x, t), e.y && k(e.y, t), e.z && k(e.z, t)
  }

  function k(e, t) {
    t.max = e.times[e.times.length - 1] > t.max ? e.times[e.times.length - 1] : t.max, t.min = e.times[0] < t.min ? e.times[0] : t.min
  }

  function R(e, t) {
    void 0 === e.animations && (e.animations = []);
    var i = t.stacks;
    for (var n in i) {
      for (var o = i[n], s = {
        name: o.name,
        fps: 30,
        length: o.length,
        hierarchy: []
      }, r = e.skeleton.bones, a = 0, l = r.length; a < l; ++a) {
        var h = r[a], c = h.name.replace(/.*:/, ""), d = Q(r, function (e) {
          return h.parent === e
        });
        s.hierarchy.push({parent: d, name: c, keys: []})
      }
      for (var u = 0; u <= o.frames; u++) for (var a = 0, l = r.length; a < l; ++a) for (var h = r[a], p = a, f = o.layers[0][p], m = 0, v = s.hierarchy.length; m < v; ++m) {
        var g = s.hierarchy[m];
        g.name === h.name && g.keys.push(C(t, f, h, u))
      }
      e.animations.push(THREE.AnimationClip.parseAnimation(s, r))
    }
  }

  function C(e, t, i, n) {
    var o = {time: n / e.fps, pos: i.position.toArray(), rot: i.quaternion.toArray(), scl: i.scale.toArray()};
    if (void 0 === t) return o;
    try {
      if (A(t, "T") && M(
        t.T,
        n
      ) && (o.pos = [t.T.curves.x.values[n], t.T.curves.y.values[n], t.T.curves.z.values[n]]), A(t, "R") && M(t.R, n)) {
        var s = t.R.curves.x.values[n], r = t.R.curves.y.values[n], a = t.R.curves.z.values[n];
        ne.setFromEuler(ie.set(s, r, a, "ZYX")), o.rot = ne.toArray()
      }
      A(t, "S") && M(t.S, n) && (o.scl = [t.S.curves.x.values[n], t.S.curves.y.values[n], t.S.curves.z.values[n]])
    } catch (e) {
      console.log(i), console.log(e)
    }
    return o
  }

  function A(e, t) {
    if (void 0 === e) return !1;
    var i = e[t];
    return !!i && oe.every(function (e) {
      return null !== i.curves[e]
    })
  }

  function M(e, t) {
    return oe.every(function (i) {
      return H(e.curves[i], t)
    })
  }

  function H(e, t) {
    return void 0 !== e.values[t]
  }

  function L() {
    this.position = new THREE.Vector3, this.normal = new THREE.Vector3, this.uv = new THREE.Vector2, this.color = new THREE.Vector3, this.skinIndices = new THREE.Vector4(
      0,
      0,
      0,
      0
    ), this.skinWeights = new THREE.Vector4(0, 0, 0, 0)
  }

  function D() {
    this.vertices = []
  }

  function N() {
    this.triangles = [], this.materialIndex = 0
  }

  function P() {
    this.faces = [], this.skeleton = null
  }

  function I() {
  }

  function O() {
  }

  function B(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = void 0 === t || t
  }

  function j() {
  }

  function F(e) {
    var t = "Kaydara FBX Binary  \0";
    return e.byteLength >= t.length && t === Z(e, 0, t.length)
  }

  function z(e) {
    function t(t) {
      var i = e[t - 1];
      return e = e.slice(n + t), n++, i
    }

    for (var i = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"], n = 0, o = 0; o < i.length; ++o) {
      var s = t(1);
      if (s == i[o]) return !1
    }
    return !0
  }

  function V(e) {
    var t = /FBXVersion: (\d+)/, i = e.match(t);
    if (i) {
      var n = parseInt(i[1]);
      return n
    }
    throw new Error("FBXLoader: Cannot find the version number for the file given.")
  }

  function U(e) {
    return e / 46186158e3
  }

  function W(e) {
    for (var t = e.split(","), i = 0, n = t.length; i < n; i++) t[i] = parseFloat(t[i]);
    return t
  }

  function X(e) {
    for (var t = e.split(","), i = 0, n = t.length; i < n; i++) t[i] = parseInt(t[i]);
    return t
  }

  function G(e) {
    return (new THREE.Vector3).fromArray(e.value)
  }

  function Y(e) {
    return (new THREE.Color).fromArray(e.value)
  }

  function q(e) {
    return (new THREE.Matrix4).fromArray(W(e))
  }

  function Z(e, t, i) {
    void 0 === t && (t = 0), void 0 === i && (i = e.byteLength);
    var n = new Uint8Array(e, t, i);
    if (void 0 !== window.TextDecoder) return (new TextDecoder).decode(n);
    for (var o = "", s = 0, r = n.length; s < r; s++) o += String.fromCharCode(n[s]);
    return o
  }

  function K(e) {
    return e * se
  }

  function Q(e, t) {
    for (var i = 0, n = e.length; i < n; i++) if (t(e[i])) return i;
    return -1
  }

  function J(e, t) {
    for (var i = 0, n = e.length, o = t.length; i < o; i++, n++) e[n] = t[i]
  }

  function $(e, t, i, n) {
    for (var o = i, s = 0; o < n; o++, s++) e[s] = t[o];
    return e
  }

  THREE.FBXLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
  }, Object.assign(THREE.FBXLoader.prototype, {
    load: function (e, t, i, n) {
      var o = this, s = new THREE.FileLoader(this.manager);
      s.setResponseType("arraybuffer"), s.load(e, function (i) {
        try {
          var s = o.parse(i, e);
          t(s)
        } catch (t) {
          window.setTimeout(function () {
            n && n(t), o.manager.itemError(e)
          }, 0)
        }
      }, i, n)
    }, parse: function (i, o) {
      var r = o.split(/[\\\/]/);
      r.pop(), r = r.join("/") + "/";
      var a;
      if (F(i)) a = (new O).parse(i); else {
        var h = Z(i);
        if (!z(h)) throw self.manager.itemError(o), new Error("FBXLoader: Unknown format.");
        if (V(h) < 7e3) throw self.manager.itemError(o), new Error("FBXLoader: FBX version not supported for file at " + o + ", FileVersion: " + V(
          h));
        a = (new I).parse(h)
      }
      var d = e(a), u = t(a), p = n(a, new THREE.TextureLoader(this.manager).setPath(r), u, d), f = s(a, p, d),
        m = l(a, d), v = c(a, d, m), g = y(a, d, m, v, f);
      return g
    }
  });
  var ee = [], te = {
    ByPolygonVertex: {
      Direct: function (e, t, i, n) {
        var o = e * n.dataSize, s = e * n.dataSize + n.dataSize;
        return $(ee, n.buffer, o, s)
      }, IndexToDirect: function (e, t, i, n) {
        var o = n.indices[e], s = o * n.dataSize, r = o * n.dataSize + n.dataSize;
        return $(ee, n.buffer, s, r)
      }
    }, ByPolygon: {
      Direct: function (e, t, i, n) {
        var o = t * n.dataSize, s = t * n.dataSize + n.dataSize;
        return $(ee, n.buffer, o, s)
      }, IndexToDirect: function (e, t, i, n) {
        var o = n.indices[t], s = o * n.dataSize, r = o * n.dataSize + n.dataSize;
        return $(ee, n.buffer, s, r)
      }
    }, ByVertice: {
      Direct: function (e, t, i, n) {
        var o = i * n.dataSize, s = i * n.dataSize + n.dataSize;
        return $(ee, n.buffer, o, s)
      }
    }, AllSame: {
      IndexToDirect: function (e, t, i, n) {
        var o = n.indices[0] * n.dataSize, s = n.indices[0] * n.dataSize + n.dataSize;
        return $(ee, n.buffer, o, s)
      }
    }
  }, ie = new THREE.Euler, ne = new THREE.Quaternion, oe = ["x", "y", "z"];
  Object.assign(L.prototype, {
    copy: function (e) {
      var t = e || new L;
      return t.position.copy(this.position), t.normal.copy(this.normal), t.uv.copy(this.uv), t.skinIndices.copy(this.skinIndices), t.skinWeights.copy(
        this.skinWeights), t
    }, flattenToBuffers: function (e, t, i, n, o, s) {
      this.position.toArray(e, e.length), this.normal.toArray(t, t.length), this.uv.toArray(
        i,
        i.length
      ), this.color.toArray(n, n.length), this.skinIndices.toArray(o, o.length), this.skinWeights.toArray(s, s.length)
    }
  }), Object.assign(D.prototype, {
    copy: function (e) {
      for (var t = e || new D, i = 0; i < this.vertices.length; ++i) this.vertices[i].copy(t.vertices[i]);
      return t
    }, flattenToBuffers: function (e, t, i, n, o, s) {
      for (var r = this.vertices, a = 0, l = r.length; a < l; ++a) r[a].flattenToBuffers(e, t, i, n, o, s)
    }
  }), Object.assign(N.prototype, {
    copy: function (e) {
      for (var t = e || new N, i = 0; i < this.triangles.length; ++i) this.triangles[i].copy(t.triangles[i]);
      return t.materialIndex = this.materialIndex, t
    }, genTrianglesFromVertices: function (e) {
      for (var t = 2; t < e.length; ++t) {
        var i = new D;
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
      ), J(r, [l, l, l])
    }
  }), Object.assign(P.prototype, {
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
  }), Object.assign(I.prototype, {
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
      this.currentIndent = 0, this.allNodes = new j, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
      var t = e.split("\n");
      for (var i in t) {
        var n = t[i];
        if (!n.match(/^[\s\t]*;/) && !n.match(/^[\s\t]*$/)) {
          var o = new RegExp("^\\t{" + this.currentIndent + "}(\\w+):(.*){", ""), s = n.match(o);
          if (s) {
            for (var r = s[1].trim().replace(/^"/, "").replace(
              /"$/,
              ""
            ), a = s[2].split(","), l = 0, n = a.length; l < n; l++) a[l] = a[l].trim().replace(/^"/, "").replace(
              /"$/,
              ""
            );
            this.parseNodeBegin(n, r, a || null)
          } else {
            var h = new RegExp("^\\t{" + this.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), s = n.match(h);
            if (s) {
              var c = s[1].replace(/^"/, "").replace(/"$/, "").trim(),
                d = s[2].replace(/^"/, "").replace(/"$/, "").trim();
              this.parseNodeProperty(n, c, d)
            } else {
              var u = new RegExp("^\\t{" + (this.currentIndent - 1) + "}}");
              n.match(u) ? this.nodeEnd() : n.match(/^[^\s\t}]/) && this.parseNodePropertyContinued(n)
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
      return e.length > 1 && (i = e[1].replace(/^(\w+)::/, ""), n = e[2]), {id: t, name: i, type: n}
    }, parseNodeProperty: function (e, t, i) {
      var n = this.getCurrentNode(), o = n.name;
      if (void 0 !== o) {
        var s = o.match(/Properties(\d)+/);
        if (s) return void this.parseNodeSpecialProperty(e, t, i)
      }
      if ("C" == t) {
        var r = i.split(",").slice(1), a = parseInt(r[0]), l = parseInt(r[1]), h = i.split(",").slice(3);
        t = "connections", i = [a, l], J(i, h), void 0 === n.properties[t] && (n.properties[t] = [])
      }
      if ("Node" == t) {
        var c = parseInt(i);
        n.properties.id = c, n.id = c
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
          c = W(c)
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
  }), Object.assign(O.prototype, {
    parse: function (e) {
      var t = new B(e);
      t.skip(23);
      var i = t.getUint32();
      console.log("FBX binary version: " + i);
      for (var n = new j; !this.endOfContent(t);) {
        var o = this.parseNode(t, i);
        null !== o && n.add(o.name, o)
      }
      return n
    }, endOfContent: function (e) {
      return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 15 >= e.size()
    }, parseNode: function (e, t) {
      var i = t >= 7500 ? e.getUint64() : e.getUint32(), n = t >= 7500 ? e.getUint64() : e.getUint32(),
        o = t >= 7500 ? e.getUint64() : e.getUint32(), s = e.getUint8(), r = e.getString(s);
      if (this.propertyListLen = o, 0 === i) return null;
      for (var a = [], l = 0; l < n; l++) a.push(this.parseProperty(e));
      var h = a.length > 0 ? a[0] : "", c = a.length > 1 ? a[1] : "", d = a.length > 2 ? a[2] : "", u = {}, p = {},
        f = !1;
      for (1 === n && e.getOffset() === i && (f = !0); i > e.getOffset();) {
        var m = this.parseNode(e, t);
        if (null !== m) if (m.singleProperty !== !0) if ("Connections" !== r || "C" !== m.name) if (m.name.match(
          /^Properties\d+$/)) for (var v = Object.keys(m.properties), l = 0, g = v.length; l < g; l++) {
          var b = v[l];
          p[b] = m.properties[b]
        } else if (r.match(/^Properties\d+$/) && "P" === m.name) {
          var w, y = m.propertyList[0], E = m.propertyList[1], x = m.propertyList[2], T = m.propertyList[3];
          0 === y.indexOf("Lcl ") && (y = y.replace("Lcl ", "Lcl_")), 0 === E.indexOf("Lcl ") && (E = E.replace(
            "Lcl ",
            "Lcl_"
          )), w = "ColorRGB" === E || "Vector" === E || "Vector3D" === E || 0 === E.indexOf("Lcl_") ? [m.propertyList[4], m.propertyList[5], m.propertyList[6]] : m.propertyList[4], 0 === E.indexOf(
            "Lcl_") && (w = w.toString()), p[y] = {type: E, type2: x, flag: T, value: w}
        } else void 0 === u[m.name] ? "number" == typeof m.id ? (u[m.name] = {}, u[m.name][m.id] = m) : u[m.name] = m : "" === m.id ? (Array.isArray(
          u[m.name]) || (u[m.name] = [u[m.name]]), u[m.name].push(m)) : void 0 === u[m.name][m.id] ? u[m.name][m.id] = m : (Array.isArray(
          u[m.name][m.id]) || (u[m.name][m.id] = [u[m.name][m.id]]), u[m.name][m.id].push(m)); else {
          for (var _ = [], l = 1, g = m.propertyList.length; l < g; l++) _[l - 1] = m.propertyList[l];
          void 0 === p.connections && (p.connections = []), p.connections.push(_)
        } else {
          var S = m.propertyList[0];
          Array.isArray(S) ? (m.properties[m.name] = m.propertyList[0], u[m.name] = m, m.properties.a = S.toString()) : p[m.name] = S
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
          var s = new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(o))), r = new B(s.decompress().buffer);
          switch (t) {
            case"f":
              return r.getFloat32Array(i);
            case"d":
              return r.getFloat64Array(i);
            case"l":
              return r.getInt64Array(i);
            case"i":
              return r.getInt32Array(i);
            case"b":
              return r.getBooleanArray(i)
          }
        case"S":
          var a = e.getUint32();
          return e.getString(a);
        case"R":
          var a = e.getUint32();
          return e.getArrayBuffer(a);
        default:
          throw new Error("FBXLoader: Unknown property type " + t)
      }
    }
  }), Object.assign(B.prototype, {
    getOffset: function () {
      return this.offset
    }, size: function () {
      return this.dv.buffer.byteLength
    }, skip: function (e) {
      this.offset += e
    }, getBoolean: function () {
      return 1 === (1 & this.getUint8())
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
      return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 2147483648 & t ? (t = 4294967295 & ~t, e = 4294967295 & ~e, 4294967295 === e && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(4294967296 * t + e)) : 4294967296 * t + e
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
      for (var t = ""; e > 0;) {
        var i = this.getUint8();
        if (e--, 0 === i) break;
        t += String.fromCharCode(i)
      }
      return this.skip(e), t
    }
  }), Object.assign(j.prototype, {
    add: function (e, t) {
      this[e] = t
    }, searchConnectionParent: function (e) {
      if (void 0 === this.__cache_search_connection_parent && (this.__cache_search_connection_parent = []), void 0 !== this.__cache_search_connection_parent[e]) return this.__cache_search_connection_parent[e];
      this.__cache_search_connection_parent[e] = [];
      for (var t = this.Connections.properties.connections, i = [], n = 0; n < t.length; ++n) if (t[n][0] == e) {
        var o = 0 === t[n][1] ? -1 : t[n][1];
        i.push(o)
      }
      return i.length > 0 ? (J(
        this.__cache_search_connection_parent[e],
        i
      ), i) : (this.__cache_search_connection_parent[e] = [-1], [-1])
    }, searchConnectionChildren: function (e) {
      if (void 0 === this.__cache_search_connection_children && (this.__cache_search_connection_children = []), void 0 !== this.__cache_search_connection_children[e]) return this.__cache_search_connection_children[e];
      this.__cache_search_connection_children[e] = [];
      for (var t = this.Connections.properties.connections, i = [], n = 0; n < t.length; ++n) t[n][1] == e && i.push(0 === t[n][0] ? -1 : t[n][0]);
      return i.length > 0 ? (J(
        this.__cache_search_connection_children[e],
        i
      ), i) : (this.__cache_search_connection_children[e] = [], [])
    }, searchConnectionType: function (e, t) {
      var i = e + "," + t;
      if (void 0 === this.__cache_search_connection_type && (this.__cache_search_connection_type = {}), void 0 !== this.__cache_search_connection_type[i]) return this.__cache_search_connection_type[i];
      this.__cache_search_connection_type[i] = "";
      for (var n = this.Connections.properties.connections, o = 0; o < n.length; ++o) if (n[o][0] == e && n[o][1] == t) return this.__cache_search_connection_type[i] = n[o][2], n[o][2];
      return this.__cache_search_connection_type[e] = null, null
    }
  });
  var se = Math.PI / 180
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
      i && i.element && (dom.addclass(i.element, "tile-client"), dom.append(this.econtent, i.element))
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
    switch (arguments.length > 1 ? (e.x = t, e.y = i, e.w = n, e.h = o) : (t = e.x, i = e.y, n = e.w, o = e.h), e.split) {
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
    this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld),
      this.matrix.multiplyMatrices(
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
    if (e && e.material) {
      if ("subtract" === e.name) return void (e.material = this.materials.subtract);
      var t = e.material;
      if (this.sampleMaterials.indexOf(t) === -1) {
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
    }
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
      var i = ["outer", "fouter"].indexOf(t.unit) !== -1;
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
    ), o = n.data, s = o.length, r = 1 / (t * i), a = 0, l = 0, h = 0, c = 0; c < s; c += 4) a += o[c + 0], l += o[c + 1], h += o[c + 2];
    return a * r << 16 ^ l * r << 8 ^ h * r << 0
  },
  tileTexture: function (e) {
    if (e && e.image) {
      var t = e.image;
      e.width = t.naturalWidth || t.width, e.height = t.naturalHeight || t.height, e.color = this.textureColor(
        t,
        e.width,
        e.height
      );
      var i = 512, n = i / e.height, o = e.height / e.width;
      e.cloneX = 1, e.cloneY = 1, e.repeatX = (e.resolution || 1) * n * o, e.repeatY = (e.resolution || 1) * n;
      var s = !(e.width & e.width - 1), r = !(e.height & e.height - 1);
      if (!s || !r) {
        for (var a = this.fitTileSize(e.width, e.height, 10), l = this.makeCanvas(
          a.spaceX,
          a.spaceY
        ), h = 0; h < a.cloneX; h++) for (var c = 0; c < a.cloneY; c++) l.drawImage(
          t,
          0,
          0,
          a.sourceX,
          a.sourceY,
          h * a.sizeX,
          c * a.sizeY,
          a.sizeX,
          a.sizeY
        );
        e.image = l.canvas, e.width = a.spaceX, e.height = a.spaceY, e.cloneX = a.cloneX, e.cloneY = a.cloneY, e.repeatX /= a.cloneX, e.repeatY /= a.cloneY, this.debugFit(
          a,
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
          f = Math.abs(a - d), m = Math.sqrt(r * c), v = u + p + f / 2 + m / 10;
        c && v < n.score && (n.sizeX = s / r, n.sizeY = h / c, n.cloneX = r, n.cloneY = c, n.spaceX = s, n.spaceY = h, n.errorX = a, n.errorY = d, n.error = f, n.score = v)
      }
    }
    return n
  },
  debugFit: function (e, t) {
    var i;
    e.error > .4 ? i = console.error : Math.abs(e.errorX) > .4 || Math.abs(e.errorY) > .4 ? i = console.warn : this.debug && (i = console.log), i && i.call(
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
    function e(e) {
      var t = e.wheelDeltaY || -e.deltaY, n = t / Math.abs(t);
      isNaN(n) || i.call(this, Math.pow(2, Math.ceil(Math.log2(o)) + n))
    }

    function t() {
      dom.remove(this.displayedImage), delete this.displayedImage, i.call(this, 1)
    }

    function i(e) {
      var t = this.displayedImage;
      if (t) {
        var i = t.naturalWidth || t.width;
        t.style.width = i * e + "px", o = e
      }
    }

    var n = dom.div("display-root", document.body), o = 1;
    return f.copy(
      n.style,
      {position: "absolute", backgroundColor: "black", border: "1px dashed white", zIndex: 1}
    ), new EventHandler(t, this).listen("tap", n), new EventHandler(e, this).listen("wheel", n), n
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
  }, loadSample: function (e) {
    var t = this.folder + e.src, i = new Defer(function (t) {
      return e.setData(t), e
    }, function (t) {
      console.error("Sample load error", e.src, t)
    }, this), n = null;
    switch (e.format) {
      case"obj":
        n = new Loader, n.obj(t).push(i);
        break;
      case"fbx":
        n = new THREE.FBXLoader, n.load(t, i.willResolve(), i.willProgress(), i.willReject());
        break;
      default:
      case"json":
        n = new Loader, n.json(t).then(function (e) {
          if (TSerial.isComplex(e)) return this.prepareComplex(e);
          var t = new THREE.ObjectLoader, i = new Defer;
          return t.parse(e, i.willResolve()), i
        }, this).push(i)
    }
    return i
  }, checkCirculars: function (e, t) {
    for (var i = [], n = [e]; n.length;) {
      var o = n.shift();
      if (i.indexOf(o) !== -1) return !0;
      var s = this.getSample(e);
      s.data ? TSerial.isComplex(s.data) && (n = f.sor(n, s.data.types)) : console.error(
        "checkCirculars cant prove not loaded samples"), i.push(o)
    }
    return !1
  }, readFile: function (e) {
    if (!e) return Defer.complete(!0, null);
    var t = this.getSample(e.name), i = new FileReader, n = new Defer, o = new Defer(t.setData, t);
    switch (dom.on("load", i, function () {
      n.resolve(i.result)
    }), t.format) {
      case"obj":
        n.then(function (e) {
          return Loader.Resource.types.obj.prepare(e)
        }).push(o), i.readAsText(e);
        break;
      case"fbx":
        n.then(function (t) {
          var i = new THREE.FBXLoader;
          return i.parse(t, e.name)
        }).push(o), i.readAsArrayBuffer(e);
        break;
      default:
      case"json":
        n.then(JSON.parse).then(function (e) {
          if (TSerial.isComplex(e)) o.resolve(e); else {
            var t = new THREE.ObjectLoader;
            t.parse(e, o.willResolve())
          }
        }), i.readAsText(e)
    }
    return o.then(function () {
      return t
    })
  }
}, Sample.prototype = {
  src: null, name: null, format: null, data: null, object: null, progress: 0, traverse: function (e, t, i, n, o, s) {
    if (e && (null == s && (s = 0), t.call(
      i || this,
      e,
      n,
      s
    ), e.children)) for (var r = e.children.length, a = o ? 0 : r - 1; o ? a < r : a >= 0; o ? a++ : a--) Sample.prototype.traverse(
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
      for (var n = e[i], o = t.length - 1; o >= 0; o--) {
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
    var e = 6, t = new THREE.BufferGeometry, i = new Float32Array(3 * e), n = new Float32Array(3 * e),
      o = new THREE.Vector3, s = new THREE.Color;
    o.set(0, 2, 0).toArray(i, 0), o.set(5, 0, 0).toArray(i, 3), o.set(0, 0, -1).toArray(i, 6), o.set(0, 0, 1).toArray(
      i,
      9
    ), o.set(0, 2, 0).toArray(i, 12), o.set(5, 0, 0).toArray(i, 15), s.set(65280).toArray(n, 0), s.set(16711680)
      .toArray(n, 3), s.set(0).toArray(n, 6), s.set(0).toArray(n, 9), s.set(65280).toArray(n, 12), s.set(16711680)
      .toArray(n, 15), t.addAttribute("position", new THREE.BufferAttribute(i, 3)), t.addAttribute(
      "color",
      new THREE.BufferAttribute(
        n,
        3
      )
    );
    var r = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors, side: THREE.DoubleSide}),
      a = new THREE.Mesh(t, r);
    return a.drawMode = THREE.TriangleStripDrawMode, a
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
                    enableSSAO: !0,
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
                        var r = 1e-9, a = this.camera.position, l = this.orbit.target;
                        e || (e = l);
                        var h = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Matrix4, u = a.distanceTo(l),
                          p = this.orbit.minDistance, m = this.orbit.maxDistance, v = f.clamp(isNaN(i) ? u : i, p, m);
                        h.subVectors(a, l), h.lengthSq() || h.set(1, 1, 1), h.setLength(v);
                        var g = Math.acos(h.y / v), b = Math.max(this.focusThetaMin, this.orbit.minPolarAngle),
                          w = Math.min(this.focusThetaMax, this.orbit.maxPolarAngle),
                          y = f.clamp(null == n ? g : n, b, w);
                        if (this.orbit.orthoMode && (y = g), Math.abs(y - g) > r) {
                          var E = c;
                          E.set(-h.z, 0, h.x).normalize(), d.makeRotationAxis(E, g - y), h.applyMatrix4(d)
                        }
                        c.addVectors(
                          e,
                          h
                        ), this.orbitTween.stop(), this.cameraTween.stop(), t ? (null == s && (s = TWEEN.Easing.Quadratic.Out), l.distanceToSquared(
                          e) > r && this.orbitTween.from(l)
                          .to(e, t)
                          .easing(s)
                          .start(), a.distanceToSquared(c) > r && this.cameraTween.from(a)
                          .to(c, t)
                          .easing(s)
                          .start()) : null != o ? (a.lerp(c, o), l.lerp(
                          e,
                          o
                        ), this.orbit.update()) : (a.copy(c), l.copy(e), this.orbit.update())
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
                      var t = this.animatedConnections.indexOf(e);
                      t === -1 && (this.animatedConnections.push(e), e.events.on(
                        "animate_end",
                        this.onConnectEnd,
                        this
                      ))
                    },
                    onConnectEnd: function (e) {
                      var t = this.animatedConnections.indexOf(e);
                      t !== -1 && (e.events.off(null, null, this), this.animatedConnections.splice(
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
                      var t = this.connectionLine.geometry, i = t.attributes.position;
                      if (i) {
                        for (var n = new THREE.Vector3, o = 0; o < e.length; o++) {
                          var s = e[o];
                          if (s.connected && s.master) {
                            var r = 2 * s.viewGlobalIndex * 3, a = s.node.object.matrixWorld, l = s.object.position,
                              h = s.connected.object.position;
                            n.copy(l).applyMatrix4(a).toArray(i.array, r + 0), n.addVectors(l, h)
                              .applyMatrix4(a)
                              .toArray(i.array, r + 3)
                          }
                        }
                        i.needsUpdate = !0
                      }
                    },
                    updateConnection: function (e, t) {
                      if (e.marker) {
                        this.markers.addMarker(e.marker);
                        var i = t.indexOf(e.marker);
                        i !== -1 && t.splice(i, 1)
                      }
                      e.animating && this.onConnectStart(e), e.connected && e.master && (e.viewGlobalIndex = this.globalConnections.length, this.globalConnections.push(
                        e))
                    },
                    updateProjection: function () {
                      var e = new THREE.Vector3, t = new THREE.Vector3;
                      return function () {
                        this.camera.aspect = this.width / this.height, isFinite(this.camera.aspect) || (this.camera.aspect = 1), e.subVectors(
                          this.orbit.target,
                          this.camera.position
                        ), t.subVectors(this.currentDim.sphere.center, this.camera.position);
                        var i = t.dot(e.normalize()), n = this.currentDim.sphere.radius, o = this.currentDim.length,
                          s = this.tree ? this.tree.local.length : 1;
                        this.camera.near = Math.max(i - n, .05 * s), this.camera.far = Math.max(
                          i + n,
                          o
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
                      t !== e && (t && (t.selected = !1, t.marker.updateState(), this.selectNode(null)), this.selectedConnection = e, e && (e.selected = !0, e.marker.updateState(), this.selectNode(
                        e.node)), this.events.emit("connection_select", e))
                    },
                    selectNode: function (e) {
                      var t = this.nodeSelected;
                      e !== t && (t && (t.selected = !1, this.updateNodeStencil(t)), this.nodeSelected = e, e && (e.selected = !0, this.updateNodeStencil(
                        e)), this.events.emit("node_select", [e, t]), this.needsRedraw = !0)
                    },
                    hoverNode: function (e) {
                      var t = this.nodeHovered;
                      e !== t && (t && (t.hovered = !1, this.updateNodeStencil(t)), this.nodeHovered = e, e && (e.hovered = !0, this.updateNodeStencil(
                        e)), dom.togclass(this.element, "hand", !!e), this.events.emit(
                        "node_hover",
                        [e, t]
                      ), this.needsRedraw = !0)
                    },
                    litNode: function (e, t) {
                      if (e) {
                        e.lit = t;
                        var i = this.highlightedNodes.indexOf(e);
                        t ? i === -1 && this.highlightedNodes.push(e) : i !== -1 && this.highlightedNodes.splice(
                          i,
                          1
                        ), this.updateNodeStencil(e), this.needsRedraw = !0
                      }
                    },
                    litNodeList: function (e, t) {
                      if (e) for (var i = e.length - 1; i >= 0; i--) this.litNode(e[i], t)
                    },
                    updatePointer: function (e) {
                      this.fpvEnabled ? (this.mouse.x = this.width / 2, this.mouse.y = this.height / 2, this.mouse2.x = 0, this.mouse2.y = 0) : (e && (this.mouse.x = e.pageX - this.elementOffset.x, this.mouse.y = e.pageY - this.elementOffset.y), this.mouse2.x = this.mouse.x / this.width * 2 - 1, this.mouse2.y = 2 * -(this.mouse.y / this.height) + 1), this.mouse2.z = -1
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
                      function e() {
                        var e = r;
                        r = s, s = e
                      }

                      function t() {
                        l ? (h.setViewport(l.x, l.y, l.w, l.h), h.setScissor(
                          l.x,
                          l.y,
                          l.w,
                          l.h
                        ), h.setScissorTest(!0)) : h.setScissorTest(!1)
                      }

                      function i(e, i, n) {
                        i || (i = d), n || (n = u), t(), h.render(i, n, e)
                      }

                      function n(e, i, n, o) {
                        t(), e ? h.clearTarget(e, i, n, o) : h.clear(i, n, o)
                      }

                      function o(e, t, i) {
                        for (var n in i) {
                          var o = e.uniforms[n];
                          if (o) {
                            var s = i[n];
                            o.value instanceof THREE.Color ? o.value.set(s) : o.value = s
                          }
                        }
                        t && (e.uniforms.tDiffuse.value = t.texture), c.material = e
                      }

                      var s, r, a = this.renderer.context, l = this.viewport, h = this.renderer, c = this.srPlane,
                        d = this.srScene, u = this.srCamera;
                      this.renderer.setClearColor(
                        this.clearColor,
                        1
                      ), n(this.renderTarget), a.enable(a.DEPTH_TEST), this.enableRender && (this.root.visible = !0, this.renderer.stencilWrite = !1, i(
                        this.renderTarget,
                        this.scene,
                        this.camera
                      )), this.enableWireframe && (this.scene.overrideMaterial = this.imagery.materials.wireframe, this.connectionLine.visible = !1, i(
                        this.renderTarget,
                        this.scene,
                        this.camera
                      ), this.connectionLine.visible = !0, this.scene.overrideMaterial = null);
                      var p = null;
                      if (this.enableStencil && this.smOverlay) {
                        var p = [];
                        this.highlightedNodes.length && p.push(this.stencilLit), this.nodeHovered && p.push(this.stencilHover), this.nodeSelected && p.push(
                          this.stencilSelect), 0 === p.length && (p = null)
                      }
                      if ((this.enableSSAO || p) && this.smDepth) {
                        var f = this.debugDepth ? this.renderTarget : this.rtDepthStencil;
                        a.enable(a.STENCIL_TEST), a.stencilMask(255), a.stencilFunc(
                          a.ALWAYS,
                          0,
                          255
                        ), a.stencilOp(
                          a.KEEP,
                          a.KEEP,
                          a.REPLACE
                        ), this.renderer.stencilWrite = !0, this.scene.overrideMaterial = this.smDepth, this.renderer.setClearColor(
                          16777215,
                          1
                        ), n(f), i(
                          f,
                          this.scene,
                          this.camera
                        ), this.scene.overrideMaterial = null, this.renderer.stencilWrite = !1, a.disable(a.STENCIL_TEST)
                      }
                      if (a.disable(a.DEPTH_TEST), !this.debugDepth && (s = this.rt1, r = this.rt2, this.enableSSAO && this.smSSAO && !this.debugStencil && (this.enableOnlyAO && (o(
                        this.smFill,
                        null,
                        {color: 16777215}
                      ), i(this.renderTarget)), n(r), o(
                        this.smSSAO,
                        null,
                        {tDepth: this.rtDepthStencil.texture}
                      ), i(r), this.enableAAAO && this.smACAA && (o(
                        this.smACAA,
                        r,
                        {width: this.halfW, height: this.halfH}
                      ), i(s), e()), this.enableBlurAO && this.smVBlur && this.smHBlur && (o(
                        this.smVBlur,
                        r,
                        {height: this.halfH}
                      ), i(s), o(this.smHBlur, s, {width: this.halfW}), a.enable(a.BLEND), a.blendFunc(
                        a.SRC_ALPHA,
                        a.ONE_MINUS_SRC_ALPHA
                      ), i(this.enableBloomAO ? this.renderTarget : r), a.disable(a.BLEND)), a.enable(a.BLEND), a.blendFunc(
                        a.SRC_ALPHA,
                        a.ONE_MINUS_SRC_ALPHA
                      ), o(
                        this.smCopy,
                        r
                      ), i(this.renderTarget), a.disable(a.BLEND)), s = this.rtB1, r = this.rtB2, p)) {
                        this.renderer.setClearColor(0, 0), n(r), n(s), n(
                          this.rtDepthStencil,
                          !0,
                          !0,
                          !1
                        ), a.enable(a.STENCIL_TEST), a.stencilOp(a.KEEP, a.KEEP, a.KEEP);
                        for (var m = 0; m < p.length; m++) {
                          var v = p[m];
                          a.stencilFunc(a.EQUAL, v.value, 255), o(
                            this.smFill,
                            null,
                            {color: v.params.drawColor, alpha: v.params.drawAlpha}
                          ), i(this.rtDepthStencil)
                        }
                        a.disable(a.STENCIL_TEST), o(
                          this.smOverlay,
                          this.rtDepthStencil,
                          {width: this.fullW, height: this.fullH}
                        ), i(r), this.enableStencilAA && this.smACAA && (o(
                          this.smACAA,
                          r,
                          {width: this.fullW, height: this.fullH}
                        ), i(s), e()), this.enableStencilBloom && this.smVBlur && this.smHBlur && (o(
                          this.smVBlur,
                          r,
                          {height: this.fullH}
                        ), i(s), a.enable(a.BLEND), a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), o(
                          this.smHBlur,
                          s,
                          {width: this.fullW}
                        ), i(this.renderTarget), a.disable(a.BLEND)), a.enable(a.BLEND), a.blendFunc(
                          a.SRC_ALPHA,
                          a.ONE_MINUS_SRC_ALPHA
                        ), o(this.smCopy, r), i(this.renderTarget), a.disable(a.BLEND)
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
}, window.TNode = f.unit({
                    unitName: "TNode", init: function (e) {
    this.object = new THREE.Object3D, this.events = new EventEmitter, this.local = new TDimensions, this.meshes = [], this.connections = [], this.setId(
      ++TNode.count), e ? this.setSample(e) : console.warn("new TNode with no sample")
  }, setId: function (e) {
    this.id = e, this.object.name = "TN" + this.id
  }, traverse: function (e, t, i) {
    var n = e.call(t || this, this, i);
    if (n === TNode.TRSTOP) return n;
    for (var o = 0; o < this.connections.length; o++) {
      var s = this.connections[o];
      if (s && s.connected && s.master) {
        var n = s.target.traverse(e, t, i);
        if (n === TNode.TRSTOP) return n
      }
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
    for (var t = this.meshes.length - 1; t >= 0; t--) {
      var i = this.meshes[t];
      i.parentNode = null, this.object.remove(i), this.meshes.splice(t, 1)
    }
    for (var t = this.connections.length - 1; t >= 0; t--) {
      var n = this.connections[t];
      this.connections.splice(t, 1)
    }
    if (this.sample = e, !this.sample) return void (this.type = null);
    this.type = e.src;
    for (var t = 0; t < e.meshes.length; t++) {
      var o = e.meshes[t], i = o.clone();
      o.matrixWorld.decompose(
        i.position,
        i.rotation,
        i.scale
      ), i.updateMatrix(), i.parentNode = this, this.object.add(i), this.meshes.push(i)
    }
    for (var t = 0; t < e.joints.length; t++) {
      var s = e.joints[t], n = new TConnection(this, s, this.connections.length);
      n.events.link(this.events), this.connections.push(n)
    }
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
      for (var t = this.upcon, i = null; t;) i = t, t = t.target.upcon, i.goMaster();
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
    e:for (var i = 0; i < t.length; i++) {
      for (var s = t[i], r = o.length - 1; r >= 0; r--) {
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
    for (var t = this, i = e.getConnectedList(), n = 0; n < i.length; n++) {
      var o = i[n], s = o.node, r = o.master;
      o.disconnect();
      for (var a = 0; a < t.connections.length; a++) {
        var l = t.connections[a];
        if (!l.connected && o.canConnect(l)) {
          r ? s.connect(o.index, t, l.index) : t.connect(l.index, s, o.index);
          break
        }
      }
    }
  }, pinch: function () {
    var e = [], t = [], i = this.getRoot();
    i.traverse(function (t) {
      e.push(t)
    }), this.traverse(function (e) {
      t.push(e)
    });
    for (var n = this, o = this.upcon, s = f.snot(e, t), r = i, a = 0; a < this.connections.length; a++) {
      var l = this.connections[a];
      if (l.connected && l.master) {
        var h = l.connected.node, c = [];
        h.traverse(function (e) {
          c.push(e)
        }), c.length > s.length && (n = i, o = l.connected, s = c, r = h)
      }
    }
    return {nodes: f.snot(e, s), removeCon: o, nextRoot: r}
  }, pinchr: function () {
    var e = [];
    return this.traverse(function (t) {
      e.push(t)
    }), {nodes: e, removeCon: null, nextRoot: null}
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
      var t = this.connections[e];
      t.destroy()
    }
  }, rotate: function (e, t) {
    this.upcon && this.upcon.rotate(e, t)
  }, setConnectedState: function (e) {
    this.traverseConnections(function (t) {
      t.connected && t.master && t.transitionProgress(null == e ? t.connTween.source.connected : e)
    }, this)
  }, getDimensions: function (e) {
    e || (e = new Dimensions), e.box.makeEmpty(), e.center.set(
      0,
      0,
      0
    ), e.mass = 0, this.object.updateMatrixWorld(!0), this.traverse(function (t) {
      t.updateBox();
      var i = t.local, n = 1;
      e.box.union(i.box), e.center.x += n * i.center.x, e.center.y += n * i.center.y, e.center.z += n * i.center.z, e.mass += n
    }), Math.abs(e.mass) > 1e-6 ? e.center.multiplyScalar(1 / e.mass) : e.center.set(
      0,
      0,
      0
    ), e.box.getCenter(e.size), e.center.add(e.size)
      .multiplyScalar(.5), e.box.getSize(e.size), e.length = e.size.length(), e.box.getBoundingSphere(e.sphere)
  }, updateBox: function (e) {
    e || (e = this.local), this.sample ? (e.box.copy(this.sample.dim.box)
      .applyMatrix4(this.object.matrixWorld), e.center.copy(this.sample.dim.center)
      .applyMatrix4(this.object.matrixWorld)) : (e.box.makeEmpty(), e.center.set(
      0,
      0,
      0
    )), e.box.getSize(e.size), e.length = e.size.length(), e.mass = e.size.x * e.size.y * e.size.z
  }
                  }), TNode.count = 0, TNode.TRSTOP = {}, window.TConnection = f.unit({
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
                                                                                   return e > 0 ? [t.approachDelay, t.approachTime, t.screwDelay, t.screwTime] : [t.approachDelay, t.approachTime]
                                                                                 },
                                                                                 transitionProgress: function (e) {
                                                                                   if (this.connected && this.master && this.transitionTime) {
                                                                                     for (var t = this, i = this.connected, n = Math.max(
                                                                                       0,
                                                                                       Math.min(1, e)
                                                                                     ) * this.transitionTime, o = this.transitionStages, s = 0, r = -1, a = 0, l = TWEEN.Easing.Cubic.InOut, h = 0; h < o.length; h++) {
                                                                                       if (s = o[h], n <= s) {
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
                                                                                     isNaN(i) || (n *= i), null != e ? this.connTween.target.connected = +e : this.connTween.target.connected = 1, null != t && (this.connTween.source.connected = +t), this.onTweenUpdate(), n ? this.connTween.duration(
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
    var t = [], i = [], n = [], o = [];
    e.traverse(function (e) {
      var s = t.indexOf(e.sample.src);
      s === -1 && (s = t.length, t.push(e.sample.src)), i.push(s), n.push(e), o.push(e.upcon)
    });
    for (var s = [], r = 1; r < n.length; r++) {
      var a = o[r];
      s.push({t: i[r], a: n.indexOf(a.connected.node), ai: a.connected.index, bi: a.index, r: a.rotar})
    }
    return {types: t, nodes: s}
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
      for (var r = 0; r < e.nodes.length; r++) {
        var a = e.nodes[r], l = s[a.a], h = s[r + 1], c = l.connections[a.ai];
        h.connections[a.bi];
        l.connect(a.ai, h, a.bi), a.r && h.rotate(a.r, i), i && c.playConnection()
      }
    }
    if (e.blacklist || e.whitelist) for (var r = 0; r < s.length; r++) for (var d = s[r], u = d.connections.length - 1; u >= 0; u--) {
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
        for (var m = 0; m < e.whitelist.length; m++) {
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
    var n, o, s, r, a, l, h = 0, c = 1, d = 1, u = 1, p = 1 / 0;
    do n = h + d, o = c + u, a = n / o, l = Math.abs(a - e), p > l && (p = l, s = n, r = o), n > o * e ? (d = n, u = o) : (h = n, c = o); while (l > i && o < t);
    return [s, r]
  }, toString: function (e) {
    function t(e, t) {
      if (e) for (w |= t << y, y += e; y > 7;) b += String.fromCharCode(255 & w), w >>= 8, y -= 8
    }

    function i() {
      t(8 - y, 0)
    }

    for (var n = 2 * Math.PI, o = e.types.length, s = e.nodes.length, r = 0, a = [], l = [], h = (f.nextprime(), 0); h < e.nodes.length; h++) {
      var c = e.nodes[h], d = c.r / n;
      r = Math.max(r, c.ai, c.bi), a.push(d), l.push(TSerial.rationalApproximate(d)[1])
    }
    var u = f.lcm(l), p = Math.ceil(Math.log2(o)), m = Math.ceil(Math.log2(s + 1)), v = Math.ceil(Math.log2(r + 1)),
      g = Math.ceil(Math.log2(u)), b = "", w = 0, y = 0;
    t(16, o);
    for (var h = 0; h < o; h++) {
      var E = e.types[h];
      t(16, E.length);
      for (var x = 0; x < E.length; x++) t(8, E.charCodeAt(x))
    }
    t(16, r), t(16, s), t(16, u);
    for (var h = 0; h < s; h++) {
      var c = e.nodes[h];
      t(p, c.t), t(m, c.a), t(v, c.ai), t(v, c.bi), t(g, Math.round(u * a[h]))
    }
    return i(), btoa(b)
  }, fromString: function (e) {
    function t(e) {
      if (!e) return 0;
      for (; r < e;) o |= n.charCodeAt(s) << r, r += 8, s++;
      var t = o & (1 << e) - 1;
      return o >>= e, r -= e, t
    }

    for (var i = 2 * Math.PI, n = atob(e), o = 0, s = 0, r = 0, a = {
      types: [],
      nodes: []
    }, l = t(16), h = 0; h < l; h++) {
      for (var c = t(16), d = "", u = 0; u < c; u++) d += String.fromCharCode(t(8));
      a.types.push(d)
    }
    for (var p = t(16), f = t(16), m = t(16), v = Math.ceil(Math.log2(l)), g = Math.ceil(Math.log2(f + 1)), b = Math.ceil(
      Math.log2(p + 1)), w = Math.ceil(Math.log2(m)), h = 0; h < f; h++) a.nodes.push({
                                                                                        t: t(v),
                                                                                        a: t(g),
                                                                                        ai: t(b),
                                                                                        bi: t(b),
                                                                                        r: t(w) / m * i
                                                                                      });
    return a
  }
}, window.UI = f.unit({unitName: "UI"}), UI.Prompt = f.unit(
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
    var t = this.markers.indexOf(e);
    t === -1 && (this.markers.push(e), e.undisposable || e.visible.set(
      this.markersVisible.value,
      "system"
    ), e.plug(this), e.updateState())
  }, removeMarker: function (e) {
    var t = this.markers.indexOf(e);
    t !== -1 && (this.markers.splice(t, 1), e.unplug())
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
      n && (i === -1 ? Atlas.set(this.elemGroup, "i-deny") : dom.text(
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
        i = Math.round(this.point.screen.y), n = this.inner.screen.x, o = this.inner.screen.y, s = n - t, r = o - i,
        a = e && this.connection && this.connection.depth && !isNaN(s) && !isNaN(r);
      if (dom.display(this.svg, a), e && (this.scale = .7 * (1.3 - Math.min(
        .7,
        this.point.distance / 1.5
      )), this.move(t, i, this.align), a)) {
        var l = Math.ceil(Math.abs(s)), h = Math.ceil(Math.abs(r)), c = Math.max(l, h);
        this.svg.setAttribute("width", 2 * c + 2), this.svg.setAttribute("height", 2 * c + 2), this.svg.setAttribute(
          "viewBox",
          [-c - 1, -c - 1, 2 * c + 2, 2 * c + 2].join(" ")
        ), this.svg.style.marginLeft = -c - 1 + "px", this.svg.style.marginTop = -c - 1 + "px", this.svg.style.left = t - this.elementPoint.x + "px", this.svg.style.top = i - this.elementPoint.y + "px", this.svgLineShadow.setAttribute(
          "x2",
          s + 1
        ), this.svgLineShadow.setAttribute("y2", r + 1), this.svgLine.setAttribute("x2", s), this.svgLine.setAttribute(
          "y2",
          r
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
        ) * t, n = Math.floor(i), o = i - n, s = 0; s < t; s++) this.blocks[s].style.opacity = s < n ? 1 : s > n ? 0 : o
      }
    }
  }
), window.Plumber = f.unit({
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
                      srcAtlas: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVC%0D%0ATElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNz%0D%0AL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNiAtLT4N%0D%0ACjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNl%0D%0AcnZlIiB3aWR0aD0iOC40NjY2bW0iIGhlaWdodD0iOC40NjY2bW0iIHZlcnNpb249IjEuMSIgc3R5%0D%0AbGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdl%0D%0Ab21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1y%0D%0AdWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDg0NyA4NDciDQog%0D%0AeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8%0D%0Ac3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzFD%0D%0AMUIxN30NCiAgICAuZmlsMSB7ZmlsbDpibGFja30NCiAgICAuZmlsMiB7ZmlsbDpibGFja30NCiAg%0D%0AICAuZmlsMyB7ZmlsbDojMUMxQjE3O2ZpbGwtcnVsZTpub256ZXJvfQ0KICAgIC5maWw0IHtmaWxs%0D%0AOmJsYWNrO2ZpbGwtcnVsZTpub256ZXJvfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0K%0D%0AIDxnIGlkPSJpLWRlbnkiPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTQyMyA4MjVjLTIyMSww%0D%0AIC00MDIsLTE4MCAtNDAyLC00MDIgMCwtMjIzIDE4MCwtNDAzIDQwMywtNDAzIDIyMiwwIDQwMiwx%0D%0AODEgNDAyLDQwMyAwLDIyMiAtMTgwLDQwMiAtNDAzLDQwMnptLTI1NyAtMjAxYzE1MywtMTUzIDMw%0D%0ANiwtMzA2IDQ1OSwtNDU5IC0xMDYsLTkwIC0yOTksLTEwNiAtNDMxLDI0IC0xMzIsMTMwIC0xMjAs%0D%0AMzI1IC0yOCw0MzV6bTU2IDU2YzExNiw5NiAzMTYsMTAzIDQ0MywtMzUgMTI0LC0xMzUgMTAyLC0z%0D%0AMjQgMTYsLTQyNCAtMTUzLDE1MyAtMzA2LDMwNiAtNDU5LDQ1OXoiLz4NCiA8L2c+DQogPGcgaWQ9%0D%0AImktZGVsZXRlIj4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik02ODYgMTE2bC0xMDcgMCAwIC03%0D%0AMGMwLC0xNCAtMTEsLTI1IC0yNSwtMjUgLTEsMCAtMiwwIC0zLDEgMCwwIC0xLC0xIC0yLC0xbC0y%0D%0ANTYgMGMtMTQsMCAtMjUsMTEgLTI1LDI1bDAgNzAgLTEwOCAwYy0zMSwwIC01NSwyNCAtNTUsNTVs%0D%0AMCA5MCA0OCAwIDAgNTExYzAsMzEgMjQsNTQgNTQsNTRsNDMyIDBjMzEsMCA1NSwtMjQgNTUsLTU0%0D%0AbDAgLTUxMSA0NyAwIDAgLTkwYzAsLTMxIC0yNCwtNTUgLTU1LC01NWwwIDB6bS0zNjggLTQ1bDIx%0D%0AMSAwIDAgNDUgLTIxMSAwIDAgLTQ1em0zMjYgNzAwYzAsMyAtMSw1IC01LDVsLTQzMiAwYy0zLDAg%0D%0ALTUsLTEgLTUsLTVsMCAtNTExIDQ0MSAwIDAgNTExem00NyAtNTYxbC01MzUgMCAwIC00MGMwLC0z%0D%0AIDEsLTUgNSwtNWw1MjYgMGMzLDAgNSwyIDUsNWwwIDQwem0tMTc2IDUyMWw1MCAwIDAgLTQxMiAt%0D%0ANTAgMCAwIDQxMnptLTExNiAwbDUwIDAgMCAtNDEyIC01MCAwIDAgNDEyem0tMTE2IDBsNTAgMCAw%0D%0AIC00MTIgLTUwIDAgMCA0MTJ6Ii8+DQogPC9nPg0KIDxnIGlkPSJpLWZpbGUtbG9hZCI+DQogIDxw%0D%0AYXRoIGNsYXNzPSJmaWwyIiBkPSJNMjEgMzA3bDAgMzgwYzAsMzQgMjgsNjIgNjIsNjJsNjgwIDBj%0D%0AMzQsMCA2MiwtMjggNjIsLTYybDAgLTM4MCAtODA0IDB6bTgwNCAtNzRjMCwtMzQgLTI4LC02MiAt%0D%0ANjIsLTYybC0zMzUgMGMtMzQsMCAtNjksLTE2IC03OCwtMzYgLTksLTIwIC00MywtMzYgLTc4LC0z%0D%0ANmwtMTU4IDBjLTM0LDAgLTY5LDE2IC03OCwzNiAtOSwyMCAtMTYsNjQgLTE2LDk5bDAgMTIgODA0%0D%0AIDAgMCAtMTJ6bS0yNzggMjc2bC0xMTIgLTEzNWMtNSwtNiAtMTksLTcgLTI0LDBsLTExMiAxMzZj%0D%0ALTUsNiAxLDE0IDExLDE0bDQ4IDAgMCAxMTJjMCwxMCAxMSwxNiAyNSwxNmw4MCAwYzE0LDAgMjMs%0D%0ALTcgMjMsLTE2bDAgLTExMiA1MCAwYzEwLDAgMTYsLTggMTEsLTE0eiIvPg0KIDwvZz4NCiA8ZyBp%0D%0AZD0iaS1tYXJrZXIiPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTU0OSAyMmM4LDMgMTYsNiAy%0D%0AMywxMCAyMSwxMyAzNiwzMiA1MCw1MiAyMiwzNCAzNyw3MiA0NywxMTEgNiwyNCAxMSw0OCA4LDcz%0D%0AIC0yLDIyIC04LDQzIC0xMiw2NCAtNSwyNyAtMTEsNTQgLTE2LDgyIC0yLDEzIC0xLDI2IC0xLDM4%0D%0AIDAsMyAwLDUgMCw5IC01MSwtOCAtMTAzLC0xMCAtMTU0LC0zIDAsLTMgMCwtNSAwLC03IDUsLTQ5%0D%0AIC0zLC05NiAtMjEsLTE0MiAtNywtMTkgLTE1LC0zOCAtMjIsLTU4IC05LC0yNSAtOCwtNTAgLTQs%0D%0ALTc2IDMsLTI1IDksLTUwIDE4LC03NCA5LC0yNSAyMSwtNTAgNDIsLTY3IDcsLTYgMTcsLTkgMjYs%0D%0ALTE0IDYsMCAxMSwwIDE3LDBsLTEgMnptLTI3NCA4MDRjLTEyLC00IC0yNSwtNyAtMzYsLTEzIC0x%0D%0AOSwtOSAtMjksLTI2IC0zNCwtNDcgLTgsLTMwIC04LC02MSAtOCwtOTEgMCwtOSAwLC0xOCAwLC0y%0D%0ANyAxNiwtMiAzMCwtNSA0NSwtNiAzNiwtMyA3MiwtMiAxMDgsMiA0LDEgNiwyIDcsNiA2LDI1IDEy%0D%0ALDUxIDEyLDc3IDAsMjEgLTIsNDEgLTEzLDU5IC0xMiwyMCAtMjksMzEgLTUxLDM2IC0zLDEgLTYs%0D%0AMiAtOSwyIC04LDAgLTE1LDAgLTIzLDBsMiAyem03OCAtMjAzYy01MiwtNyAtMTAzLC02IC0xNTQs%0D%0AMyAwLC0zIDAsLTUgMCwtNyAyLC0zMyAtNiwtNjUgLTEzLC05NyAtNSwtMjIgLTExLC00NCAtMTUs%0D%0ALTY2IC00LC0yNiAtMSwtNTIgNCwtNzcgMTAsLTQ1IDI2LC04OCA1MiwtMTI2IDE0LC0yMSAzMSwt%0D%0ANDAgNTQsLTUyIDIxLC0xMSA0NCwtOCA2MSw4IDE3LDE1IDI4LDM1IDM2LDU1IDE3LDQxIDI2LDg0%0D%0AIDI0LDEyOCAwLDEyIC00LDI0IC04LDM1IC0xMywzNCAtMjcsNjggLTM2LDEwNCAtNiwyNyAtOCw1%0D%0ANCAtNiw4MSAwLDMgMCw2IDEsMTFsMCAwem0yOTYgLTEwNGMwLDI2IC0xLDUzIC04LDc4IC02LDI0%0D%0AIC0yMSw0MSAtNDQsNTAgLTMyLDEyIC02MiwxMCAtOTAsLTExIC0xNywtMTMgLTI2LC0zMiAtMjks%0D%0ALTUzIC00LC0yOSAwLC01NyA3LC04NSA0LC0xNiAzLC0xNiAyMCwtMTggMzksLTUgNzgsLTUgMTE3%0D%0ALDAgNywxIDE0LDIgMjIsMyA1LDAgNywyIDcsNyAwLDEwIDAsMTkgMCwyOWwtMiAweiIvPg0KIDwv%0D%0AZz4NCiA8ZyBpZD0iaS1tZW51Ij4NCiAgPHBhdGggY2xhc3M9ImZpbDAiIGQ9Ik02NiAzNzdsNzE0%0D%0AIDBjMjUsMCA0NSwyMSA0NSw0NyAwLDI2IC0yMCw0NyAtNDUsNDdsLTcxNCAwYy0yNSwwIC00NSwt%0D%0AMjEgLTQ1LC00NyAwLC0yNiAyMCwtNDcgNDUsLTQ3em0wIDMzOWw3MTQgMGMyNSwwIDQ1LDIxIDQ1%0D%0ALDQ3IDAsMjYgLTIwLDQ3IC00NSw0N2wtNzE0IDBjLTI1LDAgLTQ1LC0yMSAtNDUsLTQ3IDAsLTI2%0D%0AIDIwLC00NyA0NSwtNDd6bTAgLTY3N2w3MTQgMGMyNSwwIDQ1LDIxIDQ1LDQ3IDAsMjYgLTIwLDQ3%0D%0AIC00NSw0N2wtNzE0IDBjLTI1LDAgLTQ1LC0yMSAtNDUsLTQ3IDAsLTI2IDIwLC00NyA0NSwtNDd6%0D%0AIi8+DQogPC9nPg0KIDxnIGlkPSJpLWltYWdlIj4NCiAgPHBhdGggY2xhc3M9ImZpbDAiIGQ9Ik00%0D%0ANDIgNjE4Yy00OCwtNDkgLTQ4LC0xMjkgLTEsLTE3OCA4MiwtODYgMjI2LC0yNyAyMjMsOTAgLTMs%0D%0AMTE4IC0xNDQsMTY4IC0yMjIsODh6bS0zNjkgLTEwbC01MiAtNDI3IDY1OCAtODAgMzEgMjU3IDEx%0D%0ANSAxMyAtNDIgMzcyIC01NzAgLTY1IDEwIC05MCAtMTUxIDE4em02MjcgLTI1MGwtMzAgLTI0NSAt%0D%0ANjM4IDc3IDQ5IDQwNiAxNDMgLTE3IDE1IC0xMzRjLTM5LC01NSAtNDAsLTE0OCAxNSwtMjA1IDk5%0D%0ALC0xMDMgMjY5LC0zNyAyNzgsOTlsMTY3IDE5em0tNDU4IDcxbDggLTcwYzAsLTYgMCwtMTEgMCwt%0D%0AMTcgMiwtMzAgMTIsLTUzIDMzLC03NiA3LC03IDEzLC03IDE4LDEgMTEsMTYgMjEsMzIgMzIsNDhs%0D%0AMzYgNGMtMTUsLTIyIC0yOSwtNDQgLTQ0LC02NiAtNiwtOSAtNCwtMTUgNiwtMTkgNzAsLTI5IDE1%0D%0ANCwyNCAxNjIsOTlsMzAgM2MtMTAsLTEzMiAtMTcwLC0xODUgLTI2MCwtOTEgLTQ2LDQ4IC01NSwx%0D%0AMjUgLTIxLDE4MnptMjYgLTEyMGw1MiA2Yy05LC0xNCAtMTgsLTI4IC0yNywtNDEgLTEsLTIgLTEs%0D%0ALTIgLTIsMCAtMTAsMTEgLTE3LDIyIC0yMiwzNnptLTMgMTBjLTEzLDExNyAtMjcsMjM0IC00MCwz%0D%0ANTJsNTUwIDYyIDQwIC0zNTJjLTE4MywtMjEgLTM2OCwtNDIgLTU1MCwtNjJ6bTIxOCAxNWwtMTAx%0D%0AIC0xMWMtMTYsLTI1IC0zMiwtNDkgLTQ4LC03MyAtMiwtMyAtMiwtMiAyLC00IDY0LC0yNiAxMzks%0D%0AMjEgMTQ4LDg5em0tMzUgMTEzYy00Myw0NSAtNDIsMTE5IDEsMTY0IDczLDc1IDIwMiwyNiAyMDQs%0D%0ALTgxIDIsLTEwOCAtMTMwLC0xNjIgLTIwNSwtODN6bS00IDQ0YzUsLTExIDExLC0yMSAxOSwtMzAg%0D%0ANiwtNiAxMSwtNiAxNiwxIDI4LDQyIDYxLDkyIDk0LDE0MyA1LDggMywxNCAtNiwxNiAtODYsMjEg%0D%0ALTE1NSwtNTAgLTEyMywtMTMwem0xMjEgMTIwYzAsMCAwLDAgMCwwIC0zNCwtNTAgLTY3LC0xMDAg%0D%0ALTk0LC0xNDMgLTIsLTIgLTE2LDI1IC0xNywyNyAtMjksNzIgMzQsMTM0IDExMiwxMTZ6bTIyIC0y%0D%0AMGMtMzAsLTQ2IC02MCwtOTMgLTkxLC0xMzggLTUsLTggLTMsLTEzIDUsLTE2IDkwLC0zNiAxNzMs%0D%0AODAgMTA2LDE1NyAtOCw5IC0xNCw3IC0yMSwtMnptLTgzIC0xNDRjMzEsNDYgNjEsOTIgOTEsMTM5%0D%0AIDIsMyAyLDQgNCwxIDYwLC02OSAtMTUsLTE3MyAtOTUsLTE0MSAtMSwxIC0xLDAgLTEsMXoiLz4N%0D%0ACiA8L2c+DQogPGcgaWQ9Imktc2VhcmNoIj4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik00ODkg%0D%0ANTk3Yy0xODksMTExIC00MzYsLTEgLTQ2NSwtMjIyIC0yMywtMTczIDk1LC0zMzAgMjY5LC0zNTAg%0D%0AMTY5LC0xOSAzMTgsOTQgMzQzLDI2MiAxMSw3NCAtNCwxNDEgLTQxLDIwNSAtMSwyIC0xLDMgMSw1%0D%0AIDY5LDY3IDEzOSwxMzQgMjA4LDIwMSA2OCw2NyAtMzEsMTc2IC0xMDUsMTAzIC03MCwtNjggLTEz%0D%0AOSwtMTM2IC0yMDksLTIwNHptMjYgLTI2NmMwLC0xMDEgLTgzLC0xODUgLTE4MywtMTg1IC0xMDEs%0D%0ALTEgLTE4NSw4MiAtMTg3LDE4MiAtMiwxMDMgODQsMTg5IDE4NiwxODggMTAwLDAgMTg0LC04NCAx%0D%0AODQsLTE4NXoiLz4NCiA8L2c+DQogPGcgaWQ9ImktYXJyb3ctcm91bmQiPg0KICA8cGF0aCBjbGFz%0D%0Acz0iZmlsMSIgZD0iTTU1NiAyNzFsMjY5IC04OSAwIDI2OCAtMTIzIC03OWMtODUsODggLTE5Miwx%0D%0ANTEgLTI5MywxOTUgLTE1Myw2NyAtMzA0LDkyIC0zODUsOTlsLTMgLTM0Yzc5LC03IDIyNiwtMzEg%0D%0AMzc1LC05NiA5OCwtNDMgMTk0LC0xMDAgMjc2LC0xODVsLTExNSAtNzl6Ii8+DQogPC9nPg0KIDxn%0D%0AIGlkPSJpLWFycm93LXRvcCI+DQogIDxwb2x5Z29uIGNsYXNzPSJmaWwwIiBwb2ludHM9IjgyNSwy%0D%0AMjIgNDIzLDYyNCAyMSwyMjIgIi8+DQogPC9nPg0KIDxnIGlkPSJpLWNyb3NzIj4NCiAgPHBhdGgg%0D%0AY2xhc3M9ImZpbDAiIGQ9Ik0zMCA3MzhsODQgODcgMzAxIC0zMDVjNCwtNSAxMSwtNiAxNiwwbDMw%0D%0AMSAzMDUgODQgLTg3YzUsLTQgNSwtMTEgMCwtMTZsLTI5NSAtMjk5IDI5NSAtMjk4YzUsLTUgNSwt%0D%0AMTIgMCwtMTZsLTg0IC04NyAtMzAwIDMwNWMtNSw2IC0xMiw0IC0xNiwwbC0zMDEgLTMwNSAtODQg%0D%0AODdjLTQsNCAtNCwxMSAwLDE2bDI5NSAyOTkgLTI5NSAyOThjLTMsNCAtNCwxMiAwLDE2eiIvPg0K%0D%0AIDwvZz4NCiA8ZyBpZD0iaS1tb3ZlLWJhY2t3YXJkIj4NCiAgPHBhdGggY2xhc3M9ImZpbDAiIGQ9%0D%0AIk04MjIgNDExbC04NSAtODkgLTI0NyAyNTEgMCAtNTMxYzAsLTEwIC0xMCwtMjEgLTIxLC0yMWwt%0D%0AOTMgMGMtMTAsMCAtMjEsMTAgLTIxLDIxbDAgNTMxIC0yNDUgLTI1MSAtODUgODljLTUsMyAtNSwx%0D%0AMCAwLDE2bDM4OSAzOTVjNSw1IDEzLDUgMTUsMGwzOTIgLTM5NWM1LC01IDUsLTEzIDAsLTE2eiIv%0D%0APg0KIDwvZz4NCiA8ZyBpZD0iaS1tb3ZlLWZvcndhcmQiPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIg%0D%0AZD0iTTM1NSAyNzRsMCA1MzFjMCwxMCAxMCwyMSAyMSwyMWw5MyAwYzEwLDAgMjEsLTEwIDIxLC0y%0D%0AMWwwIC01MzEgMjQ3IDI1MSA4NSAtODljNSwtMyA1LC0xMCAwLC0xNmwtMzkyIC0zOTVjLTMsLTUg%0D%0ALTEwLC01IC0xNSwwbC0zODkgMzk1Yy01LDUgLTUsMTMgMCwxNmw4NSA4OSAyNDUgLTI1MXoiLz4N%0D%0ACiA8L2c+DQogPGcgaWQ9Imktcm90YXRlLWRvd24iPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0i%0D%0ATTI0IDI3N2wzOTEgMzk2YzYsNCAxMyw0IDE2LDBsMzkxIC0zOTZjNSwtNiA1LC0xMyAwLC0xN2wt%0D%0AODUgLTg4IC0zMDUgMzA5Yy00LDYgLTExLDYgLTE2LDBsLTMwNSAtMzA5IC04NSA4OGMtNCw0IC00%0D%0ALDExIDAsMTdsMCAweiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS1yb3RhdGUtdXAiPg0KICA8cGF0aCBj%0D%0AbGFzcz0iZmlsMCIgZD0iTTI0IDU3MGMtNCw2IC00LDEzIDAsMTdsODUgODggMzA1IC0zMDljNSwt%0D%0ANiAxMywtNiAxNiwwbDMwNSAzMDkgODUgLTg4YzUsLTQgNSwtMTEgMCwtMTdsLTM5MSAtMzk2Yy00%0D%0ALC00IC0xMSwtNCAtMTYsMGwtMzkxIDM5NiAwIDB6Ii8+DQogPC9nPg0KIDxnIGlkPSJpLXJvdGF0%0D%0AZS1yaWdodCI+DQogIDxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNMjc3IDI0Yy02LC00IC0xMywtNCAt%0D%0AMTcsMGwtODggODUgMzA5IDMwNWM2LDUgNiwxMyAwLDE2bC0zMDkgMzA1IDg4IDg1YzQsNSAxMSw1%0D%0AIDE3LDBsMzk2IC0zOTFjNCwtNCA0LC0xMSAwLC0xNmwtMzk2IC0zOTEgMCAweiIvPg0KIDwvZz4N%0D%0ACiA8ZyBpZD0iaS1yb3RhdGUtbGVmdCI+DQogIDxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNNTcwIDI0%0D%0AbC0zOTYgMzkxYy00LDUgLTQsMTMgMCwxNmwzOTYgMzkxYzYsNSAxMyw1IDE3LDBsODggLTg1IC0z%0D%0AMDkgLTMwNWMtNiwtNCAtNiwtMTEgMCwtMTZsMzA5IC0zMDUgLTg4IC04NWMtNCwtNCAtMTEsLTQg%0D%0ALTE3LDBsMCAweiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS1yb3RhdGUiPg0KICA8cGF0aCBjbGFzcz0i%0D%0AZmlsMSIgZD0iTTQwMSA4MmMtNjQsNCAtMTIzLDIzIC0xNzYsNTcgLTUzLDM0IC05Niw3OSAtMTI3%0D%0ALDEzNCAtMzEsNTUgLTQ2LDExNSAtNDYsMTgwIDAsNTAgMTAsOTkgMzAsMTQ1IDIwLDQ2IDQ2LDg2%0D%0AIDc5LDExOSAzMywzMyA3Miw2MCAxMTgsNzkgNDYsMjAgOTQsMjkgMTQ1LDI5IDUwLDAgOTksLTEw%0D%0AIDE0NSwtMjkgNDYsLTIwIDg1LC00NiAxMTgsLTc5IDMzLC0zMyA2MCwtNzMgNzksLTExOSAyMCwt%0D%0ANDYgMzAsLTk0IDMwLC0xNDVsLTQ1IDBjMCw1OSAtMTUsMTE0IC00NCwxNjQgLTI5LDUwIC02OSw5%0D%0AMCAtMTE5LDExOSAtNTAsMjkgLTEwNSw0NCAtMTY0LDQ0IC01OSwwIC0xMTQsLTE1IC0xNjQsLTQ0%0D%0AIC01MCwtMjkgLTkwLC02OSAtMTE5LC0xMTkgLTI5LC01MCAtNDQsLTEwNSAtNDQsLTE2NCAwLC00%0D%0AMiA4LC04MyAyNCwtMTIyIDE2LC0zOSAzNywtNzMgNjQsLTEwMiAyNywtMjkgNTksLTUyIDk3LC03%0D%0AMCAzOCwtMTggNzcsLTI5IDExOSwtMzJsMCA2MSAxMTAgLTgyIC0xMTAgLTg1IDAgNjEgMCAweiIv%0D%0APg0KIDwvZz4NCiA8ZyBpZD0iaS1mZWF0dXJlIj4NCiAgPHBhdGggY2xhc3M9ImZpbDMiIGQ9Ik00%0D%0ANzYgNjYwYy0xNSwwIC0zMCwwIC00NSwwIC0yLDAgLTMsMCAtMywtMSAtMSwtMSAtMSwtMTEgMCwt%0D%0AMTIgMCwwIDEsMCAyLDBsMzcgMGMtNSwtMTAgLTEwLC0xOCAtMTQsLTI5IC02LDAgLTEyLDAgLTE3%0D%0ALDAgLTgsMCAtOSwtMiAtOSwtOSAwLC01OCAwLDAgMCwtMTc1IDAsLTIzIC0zLC0yNiAtMjUsLTI2%0D%0AbC0xMjIgMGMtMjYsMCAtMjgsMyAtMjgsMjggMCw1NiAwLDExMiAwLDE2OCAwLDE1IDEsMTMgLTEz%0D%0ALDEzIC00NSwwIC05MSwwIC0xMzYsMCAtMTAsMCAtMTEsLTEgLTExLC0xMSAyLC0xMTEgMSwtMjIy%0D%0AIDAsLTMzMyAwLC03IDIsLTEwIDgsLTEyIDc4LC0zMSAxNTYsLTYyIDIzNCwtOTMgNCwtMSAxMCwt%0D%0AMSAxNCwwIDQxLDE2IDgzLDMzIDEyMyw0OSAzNiwxNCA3MywyOSAxMDksNDMgNiwzIDgsNSA4LDEy%0D%0AIDAsNDIgMCw4MyAwLDEyNWw1IDBjNiwtMSAxMiwtMSAxNywtMWw3IDAgMCAtMTA3YzcsMCAxNSww%0D%0AIDIyLDAgMTMsMCAyMSwtNyAyMCwtMjAgMCwtMTEgMCwtMjEgMCwtMzEgMCwtMTAgLTQsLTE3IC0x%0D%0ANCwtMjEgLTExLC00IC0yMSwtOSAtMzIsLTEzIC01LC0yIC02LC00IC02LC05IDEsLTE0IDEsLTMw%0D%0AIDAsLTQ0IDAsLTcgMCwtMTEgNSwtMTQgMywtMiA1LC02IDUsLTEzIDAsLTExIDAsLTIyIDAsLTM0%0D%0AIDAsLTEzIC03LC0yMCAtMTksLTIwIC0yNSwwIC01MCwwIC03NSwwIC0xMywwIC0xOSw4IC0xOSwy%0D%0AMCAwLDExIDAsMjIgMCwzMyAwLDggMiwxMiA1LDE0IDcsNSA3LDEwIDYsMTkgMCwyIDAsNCAtMSw2%0D%0AIC00OSwtMTYgLTExMCwtNDUgLTE1OSwtNjUgLTExLC01IC0yMCwtNSAtMzEsMCAtOTIsMzggMCww%0D%0AIC0yODIsMTE2IC0yMSw4IC0yMiwxMCAtMjIsMzMgMCw1IDAsMTIgMCwyMCAwLDE5IDUsMjMgMjMs%0D%0AMjMgNiwwIDEyLDAgMTksMGwwIDM3M2MwLDIwIDQsMjQgMjQsMjRsNDE1IDBjLTEwLC05IC0xOSwt%0D%0AMTggLTI3LC0yOXptMTIwIC00MjJjLTI2LC0xMCAtNTMsLTIxIC03OSwtMzEgLTUzLC0yMSAtMTA4%0D%0ALC00MyAtMTYzLC02NCAtOCwtMyAtMjAsLTMgLTI4LDAgLTgyLDMyIC0xNjQsNjUgLTI0Niw5OCAt%0D%0AMTEsNCAtMTYsMTIgLTE3LDI0IC0zLC0xIC0xMiwtMiAtMTMsLTQgLTIsLTMgLTIsLTYgLTEsLTkg%0D%0AMSwtNCA1LC04IDExLC0xMCAyNzQsLTExMyAwLDAgMjc0LC0xMTMgNCwtMiAxMCwtMSAxNCwwIDc5%0D%0ALDMyIDE1OCw2NSAyMzUsOTdsNDAgMTZjNCwyIDgsNyA5LDEzIDEsMyAwLDUgLTEsNiAtMiwyIC0x%0D%0AMCwyIC0xMywzIDIsLTE3IC0xMSwtMjIgLTIwLC0yNXptLTkgLTEyMmMtMTcsMCAtMzUsMCAtNTIs%0D%0AMCAtNCwtNCAtMywtOCAwLC0xMiAxNywtMSAzMywtMSA1MCwwIDQsMyAzLDkgMiwxM3ptLTQ1IDI5%0D%0AYzExLDAgMjIsMCAzMywwIDEsMSAxLDEgMSwyIDAsMTUgMCwzMCAwLDQ0IC0xMSwtNCAtMjEsLTgg%0D%0ALTMyLC0xMyAtNCwtMyAtMywtMjggLTMsLTMzem0tMjYyIDUwOWMwLC03MSAwLC0xNDEgMCwtMjEy%0D%0AIDAsLTEgMiwtNCAzLC01IDM4LDAgNzUsMCAxMTMsMGwwIDIyMmMtMzcsMCAtNzQsLTEgLTExMSww%0D%0AIC01LDAgLTYsMCAtNiwtNnptLTE4OSA1Yy0xLC0xIDAsLTYgMSwtMTIgNTEsMCAxMDIsMCAxNTMs%0D%0AMCA2LDAgNywwIDcsNiAwLDQgLTEsNiAtMSw2IC0xLDEgLTIsMSAtNiwxIC0yMCwwIC0xNTIsMCAt%0D%0AMTUzLC0xem03MjQgNjljLTIwLC0yMCAtNDAsLTQwIC02MCwtNjAgLTcsLTcgLTE2LC0xMCAtMjUs%0D%0ALTcgLTIsLTIgLTQsLTQgLTYsLTYgODAsLTk0IDE3LC0yNDMgLTEwOSwtMjQ5IC01MiwtMiAtMTAx%0D%0ALDIyIC0xMzEsNjUgLTU4LDgyIC0yMCwxOTQgNzAsMjI4IDUzLDIwIDEwOCw5IDE1MiwtMjUgMiwy%0D%0AIDQsNCA2LDYgLTIsMTAgMSwxOSA4LDI2IDIwLDIwIDQwLDQxIDYxLDYxIDIyLDIxIDU5LC0xMyAz%0D%0ANCwtMzh6bS0xMjQgLTg4Yy03Miw3MiAtMjAwLDIzIC0yMDAsLTgzIDAsLTY3IDU3LC0xMjAgMTIz%0D%0ALC0xMTcgMTAyLDUgMTQ2LDEyOSA3NywxOTl6Ii8+DQogPC9nPg0KIDxnIGlkPSJpLXZpZXdwb3J0%0D%0AIj4NCiAgPHBhdGggY2xhc3M9ImZpbDAiIGQ9Ik02NDIgMTExYy0xMzAsLTkxIC0zMDYsLTkxIC00%0D%0AMzYsMGwxOTQgMjc4YzE1LC0xMSAzMywtMTEgNDgsMGwxOTQgLTI3OHoiLz4NCiA8L2c+DQogPGcg%0D%0AaWQ9ImktcGFub3JhbWEiPg0KICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTI3MiA0MTljMCwtNSA0%0D%0ANSwtOSA0NSwtNTMgMCwtMzggLTM4LC00OSAtNzAsLTQ5IC0yNiwwIC00OSw3IC02OCwyMGwyMCAz%0D%0AMGMxNCwtOSAyOCwtMTUgNDQsLTE1IDIwLDAgMzAsOCAzMCwyNCAwLDI2IC0yNiwyOCAtNDYsMjhs%0D%0ALTE2IDAgMCAzNCAxNiAwYzE5LDAgNTAsMSA1MCwyNyAwLDI2IC0yMCwzMSAtNDIsMzEgLTE5LDAg%0D%0ALTM5LC01IC01NSwtMTRsMCAzN2MxNyw3IDM3LDExIDYwLDExIDQyLDAgODQsLTE1IDg0LC02MyAw%0D%0ALC0zMSAtMjMsLTQ0IC01MSwtNDh6bTIxOSAzOWMwLC0zOCAtMTksLTY2IC01OSwtNjYgLTIxLDAg%0D%0ALTM2LDggLTQ1LDI0IC02LDAgNCwtMzMgNywtMzggMTIsLTIyIDM1LC0yNyA1OCwtMjcgOCwwIDE3%0D%0ALDEgMjUsM2wwIC0zNWMtNywtMSAtMTYsLTIgLTI4LC0yIC0zNSwwIC02MSwxMCAtNzgsMzAgLTE3%0D%0ALDIwIC0yNiw1MSAtMjYsOTIgMCwxOSAzLDM2IDksNDkgMTMsMjggMzYsNDIgNjcsNDIgNDUsMCA3%0D%0AMSwtMjggNzEsLTcyem0tNTAgMjdjLTExLDE0IC0zMywxMiAtNDQsLTIgLTExLC0xNCAtMTMsLTM2%0D%0AIDEsLTQ5IDEyLC0xMSAzNCwtMTMgNDQsMCAxMCwxMiA5LDM5IDAsNTF6bTE5NyAxOGMyNSwtMzYg%0D%0AMjQsLTEyNCAtMSwtMTYwIC0yNCwtMzYgLTg0LC0zNyAtMTA5LC0xIC0yNCwzNiAtMjQsMTI1IDEs%0D%0AMTYxIDI0LDM2IDg0LDM3IDEwOSwxem0tNzcgLTEzNWM5LC0yMyAzNSwtMjIgNDQsMCA5LDIzIDks%0D%0AODYgMCwxMDkgLTksMjIgLTM1LDIzIC00NCwwIC05LC0yMyAtOSwtODcgMCwtMTEwem0xNDcgLTMw%0D%0AYzAsLTEzIC0xMCwtMjMgLTIzLC0yMyAtMTMsMCAtMjMsMTAgLTIzLDIzIDAsMTMgMTAsMjMgMjMs%0D%0AMjMgMTMsMCAyMywtMTAgMjMsLTIzem0tMjg1IC0zMThjLTIyMiwwIC00MDIsMTgwIC00MDIsNDAy%0D%0AIDAsMTE2IDUxLDIyNiAxMzYsMzAxbC0zMSAzNyAxNDUgMjcgLTU3IC0xMzIgLTM0IDQwYy03Nywt%0D%0ANjkgLTEyMywtMTY4IC0xMjMsLTI3MyAwLC0yMDEgMTY0LC0zNjUgMzY1LC0zNjUgMjAxLDAgMzY1%0D%0ALDE2NCAzNjUsMzY1IDAsMjAxIC0xNjQsMzY1IC0zNjUsMzY1bDAgMzdjMjIyLDAgNDAyLC0xODAg%0D%0ANDAyLC00MDIgMCwtMjIyIC0xODAsLTQwMiAtNDAyLC00MDJ6Ii8+DQogPC9nPg0KIDxnIGlkPSJp%0D%0ALWluZm8iPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTQyOCAyMWM1MCwwIDkxLDQwIDkxLDg4%0D%0AIDAsNDkgLTQxLDg4IC05MSw4OCAtNTAsMCAtOTEsLTQwIC05MSwtODggMCwtNDkgNDEsLTg4IDkx%0D%0ALC04OHptLTE1MiAzNDdsMjM3IDAgMCAtMTAyIC0yMzcgMCAwIDEwMnptNjQgMGwxNzMgMCAwIDM1%0D%0AOSAtMTczIDAgMCAtMzU5em0yMzQgMzU5bC0zMDEgMCAwIDk4IDMwMSAwIDAgLTk4eiIvPg0KIDwv%0D%0AZz4NCiA8ZyBpZD0iaS1kaXMtd2lyZWZyYW1lIj4NCiAgPHBhdGggY2xhc3M9ImZpbDAiIGQ9Ik03%0D%0AOTUgNjgxYy0xMCw1MCAtMTU4LDEwMSAtMzcyLDEwMSAtNjEsMCAtMzU1LC0xNyAtMzcyLC0xMDEg%0D%0AMCwtOTQgMzAwLC0xMTIgMzcyLC0xMTEgMTg4LDAgMzI4LDQwIDM2NSw4NCAzLDQgMTAsMTMgNywy%0D%0AN3ptLTc3MSAwYzEwLDg0IDIxMSwxMjcgMzk5LDEyNyAxOTQsMCA0MDIsLTQ3IDQwMiwtMTM0IDAs%0D%0ALTMgMCwtNyAtMywtMTBsMCAtNDgzYzMsLTMgMywtNiAzLC0xMCAwLC04NyAtMjA4LC0xMzQgLTQw%0D%0AMiwtMTM0IC0xOTQsMCAtMzk5LDQ3IC0zOTksMTMxbC0zIDAgMCA1MTNtNDQgLTQ4M2MtOSwtOSAt%0D%0AMTMsLTE3IC0xMywtMzAgMCwtNDcgMTU0LC0xMDQgMzcyLC0xMDQgMjIxLDAgMzc1LDU3IDM3NSwx%0D%0AMDQgMCwxMyAtOCwyMiAtMTcsMzAgLTQwLDQwIC0xNzgsNzcgLTM1OSw3NyAtMTgxLDAgLTMxNSwt%0D%0AMzcgLTM1OSwtNzd6bTczMSA0MjZjLTY0LC01NCAtMjIxLC04MCAtMzcyLC04MCAtMTU0LDAgLTMx%0D%0ANSwzMCAtMzc1LDg0bDAgLTQwOWM2MCw1NyAyMjEsODQgMzc1LDg0IDE1MSwwIDMwOCwtMjcgMzcy%0D%0ALC04MGwwIDQwMnoiLz4NCiA8L2c+DQogPGcgaWQ9Imktc2xpY2UiPg0KICA8cGF0aCBjbGFzcz0i%0D%0AZmlsMSIgZD0iTTQ3OSA4MDRsLTQyNyAtMTMyYy0xOCwtNiAtMjgsLTIxIC0yOCwtNDBsLTMgLTQz%0D%0AOWMwLC0xNSA2LC0zNyA5LC00MyA1MiwtOTggMjkyLC0xMTQgMzg3LC0xMTQgMTI2LDAgNDA1LDE1%0D%0AIDQwNSwxOTAgMCwxNDEgMywyODIgMyw0MjQgMCwxMjMgLTIyNCwxNTAgLTMxMCwxNjAgLTksMCAt%0D%0AMjgsLTYgLTM3LC02em02IC0yMWwtNDI3IC0xMzJjLTksLTMgLTE1LC05IC0xNSwtMThsMCAtNDM5%0D%0AYzAsLTE1IDYsLTMxIDYsLTM0IDQ2LC04NiAyODIsLTEwMSAzNjgsLTEwMSAxMTQsMCAzODcsMTIg%0D%0AMzg3LDE2OSAwLDE0MSAwLDI4MiAwLDQyNCAwLDEwNCAtMjE4LDEzMiAtMjkyLDEzOCAwLDAgLTI1%0D%0ALC02IC0yOCwtNnptMjg2IC01OTZjMCwtNjEgLTE2MCwtMTA3IC0zNTMsLTEwNyAtMTc1LDAgLTMy%0D%0AMiwzNyAtMzUwLDg5bDQ1MSAxMjNjNDksLTQgMjUyLC0zMSAyNTIsLTEwNHptMTUgNDY0YzAsLTE0%0D%0AMSAtMywtMjgyIC0zLC00MjQgLTM3LDUyIC0xNDcsODAgLTI1NSw4OWwtMTUgNDUxYzE0NCwtMTIg%0D%0AMjczLC01MiAyNzMsLTExN3ptLTI4MiAtMzMybC00MzkgLTEyNiAtMyAwIDAgNDYgMyAzOTMgNDI3%0D%0AIDEzMiAxOCAtNDQ1IC02IDB6Ii8+DQogPC9nPg0KIDxnIGlkPSJpLWRpcy10cmFuc3BhcmVudCI+%0D%0ADQogIDxwYXRoIGNsYXNzPSJmaWwzIiBkPSJNNDIzIDc3NWMtMTc4LDAgLTM2NSwtNDAgLTM2OSwt%0D%0AMTE3IDAsLTE1OCAwLC0zMTUgMCwtNDczIDE5LC0xMDEgMzAxLC0xMjEgMzY5LC0xMjEgMTgxLDAg%0D%0AMzY5LDQ0IDM2OSwxMjEgMCwxNTIgMCwzMDQgMCw0NTYgMCwxMjkgLTI4MywxMzQgLTM2OSwxMzR6%0D%0AbTM0MiAtNTQwYy01Nyw0NyAtMjAxLDc0IC0zNDIsNzQgLTE0MSwwIC0yODgsLTI3IC0zNDUsLTc3%0D%0AbDAgMzc1YzY5LC01NyAyMjcsLTc3IDM0NSwtNzcgMTQxLDAgMjg1LDI3IDM0Miw3NyAwLC0xMjQg%0D%0AMCwtMjQ4IDAsLTM3MnptLTM0MiAzMjJjLTE2OCwwIC0yOTIsMzQgLTMzMiw3MCAtMTMxLDEzMSA2%0D%0ANzQsMTY2IDY3NCwyNyAwLC04MiAtMjkyLC05NyAtMzQyLC05N3ptMCAtNDY5Yy0yMDEsMCAtMzQy%0D%0ALDU0IC0zNDIsOTcgMCw4MSAyODIsOTcgMzQyLDk3IDQ5LDAgMzQ1LC0xNSAzNDUsLTk3IC0yMywt%0D%0AODEgLTI5NywtOTcgLTM0NSwtOTd6bTQwMiAxMDRjMCwtMTA3IC0yMDEsLTE1OCAtNDAyLC0xNTgg%0D%0ALTE2MSwwIC0zNjIsNDAgLTM5OSwxMzFsLTMgNDk5IDEwIDMwYzQ0LDg0IDIzOCwxMTcgMzkyLDEx%0D%0ANyAyMDEsMCA0MDIsLTUwIDQwMiwtMTU4IDAsLTMgLTMsLTQ0OSAtMywtNDQ5IDMsLTMgMywtMTAg%0D%0AMywtMTN6Ii8+DQogPC9nPg0KIDxnIGlkPSJpLWRpcy1ub3JtYWwiPg0KICA8cGF0aCBjbGFzcz0i%0D%0AZmlsMyIgZD0iTTQyMyA3NzVjLTE3OCwwIC0zNjUsLTQwIC0zNjksLTExNyAwLC0xNTggMCwtMzE1%0D%0AIDAsLTQ3MyAxOSwtMTAxIDMwMSwtMTIxIDM2OSwtMTIxIDE4MSwwIDM2OSw0NCAzNjksMTIxIDAs%0D%0AMTUyIDAsMzA0IDAsNDU2IDAsMTI5IC0yODMsMTM0IC0zNjksMTM0em0zNDIgLTU0MGMtNTcsNDcg%0D%0ALTIwMSw3NCAtMzQyLDc0IC0xNDEsMCAtMjg4LC0yNyAtMzQ1LC03N2wwIDQxNWMzMiw4MyAyMjgs%0D%0AMTAyIDM0NiwxMDIgMTQxLDAgMzE4LC0zMiAzNDEsLTkzIDAsLTEyNCAtMSwtMjk2IC0xLC00MjB6%0D%0AbS0zNDIgLTE0N2MtMjAxLDAgLTM0Miw1NCAtMzQyLDk3IDAsODEgMjgyLDk3IDM0Miw5NyA0OSww%0D%0AIDM0NSwtMTUgMzQ1LC05NyAtMjMsLTgxIC0yOTcsLTk3IC0zNDUsLTk3em00MDIgMTA0YzAsLTEw%0D%0ANyAtMjAxLC0xNTggLTQwMiwtMTU4IC0xNjEsMCAtMzYyLDQwIC0zOTksMTMxbC0zIDQ5OSAxMCAz%0D%0AMGM0NCw4NCAyMzgsMTE3IDM5MiwxMTcgMjAxLDAgNDAyLC01MCA0MDIsLTE1OCAwLC0zIC0zLC00%0D%0ANDkgLTMsLTQ0OSAzLC0zIDMsLTEwIDMsLTEzeiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS16b29tLWlu%0D%0AIj4NCiAgPHBvbHlnb24gY2xhc3M9ImZpbDAiIHBvaW50cz0iNDkyLDQ5MiA4MjYsNDkyIDgyNiwz%0D%0ANTUgNDkyLDM1NSA0OTIsMjEgMzU1LDIxIDM1NSwzNTUgMjEsMzU1IDIxLDQ5MiAzNTUsNDkyIDM1%0D%0ANSw4MjYgNDkyLDgyNiAiLz4NCiA8L2c+DQogPGcgaWQ9Imktem9vbS1vdXQiPg0KICA8cG9seWdv%0D%0AbiBjbGFzcz0iZmlsMCIgcG9pbnRzPSIyMSwzNTUgODI2LDM1NSA4MjYsNDkyIDIxLDQ5MiAiLz4N%0D%0ACiA8L2c+DQogPGcgaWQ9Imktem9vbS1maXQiPg0KICA8cGF0aCBjbGFzcz0iZmlsMSIgZD0iTTE5%0D%0ANCAyMDJsLTE3MyAwIDAgMTQ5IDMyMiAwIDAgLTMyMiAtMTQ5IDAgMCAxNzN6bTE0OSAyOTRsLTMy%0D%0AMiAwIDAgMTQ5IDE3MyAwIDAgMTczIDE0OSAwIDAgLTMyMnptMTYxIDBsMCAzMjIgMTQ5IDAgMCAt%0D%0AMTczIDE3MyAwIDAgLTE0OSAtMzIyIDB6bTE0OSAtMjk0bDAgLTE3MyAtMTQ5IDAgMCAzMjIgMzIy%0D%0AIDAgMCAtMTQ5IC0xNzMgMHoiLz4NCiA8L2c+DQogPGcgaWQ9ImktcGhvdG8iPg0KICA8cGF0aCBj%0D%0AbGFzcz0iZmlsMCIgZD0iTTQyMyAzNDNjLTY2LDAgLTEyMSw1NSAtMTIxLDEyMSAwLDY5IDU1LDEy%0D%0AMSAxMjEsMTIxIDY2LDAgMTIxLC01NSAxMjEsLTEyMSAwLC02NiAtNTUsLTEyMSAtMTIxLC0xMjF6%0D%0AbTMxOCAtMTIxYy0yOSwwIC01OSwwIC04NCwwIC0yNiwwIC0zNywtNyAtNDQsLTI5IC03LC0yMiAt%0D%0AMTUsLTQwIC0xOCwtNjIgLTExLC0yMiAtMTgsLTI5IC00MCwtMjkgLTg4LDAgLTE3NSwwIC0yNjMs%0D%0AMCAtMjIsMCAtMjksNyAtMzcsMjkgLTcsMjIgLTE1LDQwIC0yMiw2MiAtNywyMiAtMTgsMjkgLTQ0%0D%0ALDI5IC0yMiwwIC00OCwwIC02OSwwIC00OCwwIC04NCwxNSAtOTksNjYgMCwxMzIgMCwyNjAgMCwz%0D%0AOTEgMSwyNiAxMyw2NiA4MCw2NiAyMTYsMCA0MjgsMCA2NDMsMCA0NCwwIDc0LC0yNCA4MCwtNjYg%0D%0AMCwtMTMyIDAsLTI2MCAwLC0zOTEgLTYsLTM4IC0yNSwtNjYgLTg0LC02NnptLTMxOCA0NDJjLTEx%0D%0AMywwIC0yMDEsLTkxIC0yMDEsLTIwNSAwLC0xMDYgOTEsLTE5NyAyMDEsLTE5NyAxMTAsMCAyMDEs%0D%0AOTEgMjAxLDIwMSAwLDExMCAtOTEsMjAxIC0yMDEsMjAxem0yNjMgLTMzM2MtMSwtMjAgMTUsLTI5%0D%0AIDI5LC0yOSAxNSwwIDI5LDExIDI5LDI5IDEsMzQgLTU3LDQxIC01OSwweiIvPg0KIDwvZz4NCiA8%0D%0AZyBpZD0iaS1hdXRvcm90YXRlIj4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0zMTcgMTUwbDEx%0D%0ANCAtNzZjLTQzLC0xOSAtODIsLTM2IC0xMjUsLTUzbDQgMzhjLTE1Niw0OSAtMjY2LDE5NCAtMjY2%0D%0ALDM2NCAwLDE4NiAxMzMsMzQxIDMxMSwzNzJsMCAtMzBjLTE1OSwtMzQgLTI3NywtMTc1IC0yNzcs%0D%0ALTM0MSAwLC0xNTIgOTksLTI4MSAyMzUsLTMyNmw0IDUzem00ODYgMjczYzAsLTE4MiAtMTMzLC0z%0D%0AMzggLTMwNCwtMzcybDAgMzRjMTU2LDM0IDI2OSwxNzEgMjY5LDMzOCAwLDE1MiAtOTksMjgxIC0y%0D%0AMzUsMzMwbC04IC01NyAtMTE0IDgzYzQ0LDE1IDg2LDMwIDEyOSw0NmwtNCAtMzhjMTk0LC02OSAy%0D%0ANjYsLTIzNSAyNjYsLTM2NHptLTIzNSA0bC0yMDEgLTE0MCAwIDI3NyAyMDEgLTEzN3oiLz4NCiA8%0D%0AL2c+DQogPGcgaWQ9ImktcHJqLWxlZnQiPg0KICA8cGF0aCBjbGFzcz0iZmlsNCIgZD0iTTg1IDc4%0D%0AOGw0NzMgMCAwIC0yMDYgLTI4MSAwIC0xOTMgMjA2em00NzMgLTI0MGwwIC0yNTAgLTI3MCAwIDAg%0D%0AMjUwIDI3MCAwem0zNCAwbDE4OSAwIDAgLTQ2MCAtMTg5IDE5OSAwIDI2MHptMTY5IC00OTBsLTQ3%0D%0AMyAwIDAgMjA2IDI4MCAwIDE5MyAtMjA2em0wIDUyNGwtMTY5IDAgMCAxODMgMTY5IC0xODN6bTM3%0D%0AIC01NjFjMTAsMCAxNywxMCAxNywxNyAwLDE3NyAwLDM1NCAwLDUzMSAwLDcgMCwxMCAtMywxNGwt%0D%0AMjIzIDIzN2MtMywzIC0xMCw3IC0xNCw3bC01MjcgMGMtMTAsMCAtMTcsLTEwIC0xNywtMTcgMCwt%0D%0AMTc3IDAsLTM1NCAwLC01MzEgMCwtNyAwLC0xMCAzLC0xNGwyMjMgLTIzN2MzLC0zIDUsLTYgMTAs%0D%0ALTdsMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwYzE3NywwIDM1NCwwIDUz%0D%0AMSwweiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS1wcmotZnJvbnQiPg0KICA8cGF0aCBjbGFzcz0iZmls%0D%0AMSIgZD0iTTU3NSA4MjZsLTUyNyAwYy0xMCwwIC0xNywtMTAgLTE3LC0xNyAwLC0xNzcgMCwtMzU0%0D%0AIDAsLTUzMSAwLC03IDAsLTEwIDMsLTE0bDIyMyAtMjM3YzMsLTMgNiwtNyAxMCwtN2wwIDAgMCAw%0D%0AIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAzIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAg%0D%0ANTI3IDBjMTAsMCAxNywxMCAxNywxNyAwLDE3NyAwLDM1NCAwLDUzMSAwLDcgMCwxMCAtMywxNGwt%0D%0AMjIzIDIzN2MtMywzIC0xMCw3IC0xNCw3em0tMjg3IC01NjFsMjgxIDAgMTkzIC0yMDYgLTQ3MyAw%0D%0AIDAgMjA2em0zMDQgMjg0bDE4OSAwIDAgLTQ2MCAtMTg5IDE5OSAwIDI2MHptMTY5IDM0bC0xNjkg%0D%0AMCAwIDE4MyAxNjkgLTE4M3ptLTY3NiAtMzE4bDE2OSAwIDAgLTE4MyAtMTY5IDE4M3oiLz4NCiA8%0D%0AL2c+DQogPGcgaWQ9ImktcHJqLWJvdHRvbSI+DQogIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNTU5%0D%0AIDU0OGwwIC0yNTAgLTI3MCAwIDAgMjUwIDI3MCAwem0zNCAwbDE4OSAwIDAgLTQ2MCAtMTg5IDE5%0D%0AOSAwIDI2MHptMTY5IC00OTBsLTQ3MyAwIDAgMjA2IDI4MCAwIDE5MyAtMjA2em0tNDkwIC0zN2w1%0D%0AMjcgMGMxMCwwIDE3LDEwIDE3LDE3IDAsMTc3IDAsMzU0IDAsNTMxIDAsNyAwLDEwIC0zLDE0bC0y%0D%0AMjMgMjM3Yy0zLDMgLTEwLDcgLTE0LDdsLTUyNyAwYy0xMCwwIC0xNywtMTAgLTE3LC0xNyAwLC0x%0D%0ANzcgMCwtMzU0IDAsLTUzMSAwLC03IDAsLTEwIDMsLTE0bDIyMyAtMjM3YzIsLTMgNiwtNyAxMCwt%0D%0AN2wwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAzIDAgMCAwIDAgMCAwIDAgMCAw%0D%0AIDAgMCAwIDB6bS0xNyAyNzdsLTE4OSAwIDAgNDYwIDE4OSAtMTk5IDAgLTI2MHptMCAtMzRsMCAt%0D%0AMTgzIC0xNjkgMTgzIDE2OSAweiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS1wcmotdG9wIj4NCiAgPHBh%0D%0AdGggY2xhc3M9ImZpbDEiIGQ9Ik04NSA3ODhsNDczIDAgMCAtMjA2IC0yODEgMCAtMTkzIDIwNnpt%0D%0ANDczIC0yNDBsMCAtMTM1IDAgLTExNSAtMjcwIDAgMCAyNTAgMjcwIDB6bTM0IDBsMTg5IDAgMCAt%0D%0ANDYwIC0xODkgMTk5IDAgMjYwem0xNjkgMzRsLTE2OSAwIDAgMTgzIDE2OSAtMTgzem0tNDkwIC01%0D%0ANjFsNTI3IDBjMTAsMCAxNywxMCAxNywxNyAwLDE3NyAwLDM1NCAwLDUzMSAwLDcgMCwxMCAtMywx%0D%0ANGwtMjIzIDIzN2MtMywzIC0xMCw3IC0xNCw3bC01MjcgMGMtMTAsMCAtMTcsLTEwIC0xNywtMTcg%0D%0AMCwtMTc3IDAsLTM1NCAwLC01MzEgMCwtNyAwLC0xMCAzLC0xNGwyMjMgLTIzN2MxLC0yIDYsLTcg%0D%0AMTAsLTdsMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMyAwIDAgMCAwIDAgMCAw%0D%0AIDAgMCAwIDAgMCAwem0tMTcgMjc3bC0xODkgMCAwIDQ2MCAxODkgLTE5OSAwIC0yNjB6Ii8+DQog%0D%0APC9nPg0KIDxnIGlkPSJpLXByai1yaWdodCI+DQogIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNMjg4%0D%0AIDU0OGwyNzAgMCAwIC0yNTAgLTI3MCAwIDAgMjUwem01MjQgMzRsLTIyMyAyMzdjLTMsMyAtMTAs%0D%0ANyAtMTQsN2wtNTI3IDBjLTEwLDAgLTE3LC0xMCAtMTcsLTE3IDAsLTE3NyAwLC0zNTQgMCwtNTMx%0D%0AIDAsLTcgMCwtMTAgMywtMTRsMjIzIC0yMzdjNCwtNCA3LC03IDEyLC03bC0yIDAgMCAwIDAgMCAw%0D%0AIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMyAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAg%0D%0AMCA1MjcgMGMxMCwwIDE3LDEwIDE3LDE3IDAsMTc3IDAsMzU0IDAsNTMxIDAsNyAwLDEwIC0zLDE0%0D%0Aem0tMjQzIC0zMThsMTkzIC0yMDYgLTQ3MyAwIDAgMjA2IDI4MSAwem0tNDgzIDUyNGw0NzMgMCAw%0D%0AIC0yMDYgLTI4MSAwIC0xOTMgMjA2em0xNjkgLTQ5MGwtMTg5IDAgMCA0NjAgMTg5IC0xOTkgMCAt%0D%0AMjYwem0tMTY5IC0zNGwxNjkgMCAwIC0xODMgLTE2OSAxODN6Ii8+DQogPC9nPg0KIDxnIGlkPSJp%0D%0ALXByai1iYWNrIj4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik03NjEgNTgybC0xNjkgMCAwIDE4%0D%0AMyAxNjkgLTE4M3ptLTY3NiAyMDZsNDczIDAgMCAtMjA2IC0yODEgMCAtMTkzIDIwNnptMTY5IC00%0D%0AOTBsLTE4OSAwIDAgNDYwIDE4OSAtMTk5IDAgLTI2MHptMzE4IDUyN2wtNTI0IDBjLTEwLDAgLTE3%0D%0ALC0xMCAtMTcsLTE3IDAsLTE3NyAwLC0zNTQgMCwtNTMxIDAsLTcgMCwtMTAgMywtMTRsMjIzIC0y%0D%0AMzdjMywtMyAxMCwtNyAxNCwtN2w1MjcgMGMxMCwwIDE3LDEwIDE3LDE3IDAsMTc3IDAsMzU0IDAs%0D%0ANTMxIDAsNyAwLDEwIC0zLDE0bC0yMjYgMjM3Yy00LDQgLTcsNyAtMTQsN3ptLTQ4NyAtNTYxbDE2%0D%0AOSAwIDAgLTE4MyAtMTY5IDE4M3oiLz4NCiA8L2c+DQogPGcgaWQ9ImktcHJqLXBlcnNwZWN0aXZl%0D%0AIj4NCiAgPHBhdGggY2xhc3M9ImZpbDQiIGQ9Ik0xODUgNjM4bDQxNiAwIDE0NCAxNDQgLTU2MCAw%0D%0AIDAgLTE0NHptNDE5IC00ODNsLTQzNiAwIC03MCAtOTAgNTA2IDAgMCA5MHptNDQgMGwwIC02NyA4%0D%0ANCA2NyAtODQgMHptLTQ2MyA0MGw0MTkgMCAwIDM5OSAtNDE5IDAgMCAtMzk5em0tNDAgNDQybDAg%0D%0AOTAgLTU3IC05MCA1NyAwem0tNzAgLTQ0bDAgLTQ5MyA3MCA5MCAwIDQwMiAtNzAgMHptNTcwIDMw%0D%0AYzEsLTE0IDMsLTM4NSAzLC00MjlsMTI0IDAgMCA1NTYgLTEyNyAtMTI3em0xNTggLTQ2OWwtMTU4%0D%0AIC0xMjRjLTUsLTUgLTEzLC0xMCAtMjAsLTEwbC01NzMgMGMtMTAsMCAtMjAsMTAgLTIwLDIzbDAg%0D%0ANTczYzAsMyAxLDcgMywxMGwxMTQgMTk0YzMsMyA2LDMgMTcsM2w2MzAgMGMxMCwwIDIwLC0xMCAy%0D%0AMCwtMjNsMCAtNjI3YzAsLTEwIC03LC0xNyAtMTMsLTIweiIvPg0KIDwvZz4NCiA8ZyBpZD0iaS1l%0D%0AeHBsb2RlIj4NCiAgPHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0zMjkgMTI0bDgwIC00M2MzLC0zIDEx%0D%0ALC0zIDE2LDBsMTM2IDc3YzAsMCAwLDAgMCwwIDUsMyAxMSw4IDExLDE2bDAgMzcgOTEgLTUxYzUs%0D%0ALTUgMTEsLTUgMTYsMGwxMzYgNzdjOCw1IDEwLDggMTEsMTZsMCAxNTVjMCw4IC0zLDEzIC04LDE2%0D%0AbC05OSA1NiAwIDkzYzAsNSAtMywxMSAtOCwxM2wtMTMxIDc1IDAgODNjMCw1IC0zLDExIC04LDEz%0D%0AbC0xMzMgNzdjLTMsMyAtOCwzIC0xMSwzIC01LDAgLTgsMCAtMTEsLTNsLTEzMyAtNzdjLTUsLTMg%0D%0ALTExLC04IC0xMSwtMTNsMCAtODUgLTEyOCAtNzVjLTUsLTMgLTExLC04IC0xMSwtMTMgMCwtNTIg%0D%0AMCwtMTAzIDAsLTE1NSAwLC01IDUsLTExIDgsLTEzbDI3IC0xNiAtNjkgLTQzYy01LC0zIC0xMSwt%0D%0AOCAtMTEsLTEzbDAgLTE1N2MwLC03IDAsLTE1IDgsLTE5bDEzNiAtNzdjNSwtMyAxMSwtMyAxNiww%0D%0AbDgwIDQ1em0tMjkgNDM3bDM3IC0yMSAtMzcgLTIxIDAgNDN6bTMgLTY5bDIxIDEzIDkxIDUxIDAg%0D%0ALTEzNiAtMTE1IC02NyAwIDQwYzAsMCAwLDAgMCwzbDAgOTNjMCwwIDAsMCAwLDBsMCAzYzAsMCAz%0D%0ALDAgMywwem0xMzYgNjdjMzgsLTIyIDc0LC00NCAxMTIsLTY3IDMsMCAzLDAgMywwbDMgMCAwIC0x%0D%0ANDQgLTExNyA3MmMwLDQ2IDAsOTIgMCwxMzl6bTgwIC0xNmwzNyAyMSAwIC0xNmMwLDAgMCwwIDAs%0D%0ALTNsMCAtMjcgLTM3IDI0em0zNyA2N2wtMTE1IDY0IDAgMTMzIDExNSAtNjcgMCAtODBjMCwwIDAs%0D%0AMCAwLC0zbDAgLTQ4em0tMTQxIDY3bC0xMTUgLTY3IDAgMzdjMCwwIDAsMCAwLDNsMCAzYzAsMCAw%0D%0ALDAgMCwwbDAgMTFjMCwwIDAsMCAwLDNsMCA3NSAxMTUgNjcgMCAtMTMxem0tMTQxIC04OGMwLDAg%0D%0AMCwwIDAsMCAwLC0zIDAsLTMgMCwtM2wwIC04MCAtMTEyIC02NCAwIDEyNSAxMTIgNjQgMCAtNDN6%0D%0AbTEyMCAtMzM2bDggLTMgLTggLTMgMCA1em01OSAtM2w2NyA0MCAwIC0yOWMwLC0zIDAsLTUgMCwt%0D%0AOCAwLC01IDMsLTExIDgsLTEzbDE5IC0xMSAwIC0zNSAtOTMgNTZ6bTEyOCAyMDVsMCAyNCAyMSAt%0D%0AMTMgLTIxIC0xMXptLTMwNyAyMWwwIC02NCAtMjAgMTNjLTYsMyAtMTQsMiAtMjAsLTJsLTM3IC0y%0D%0AMSAtMjcgMTYgMTA0IDU5em0xNTIgLTc3bDExNyAtNzIgLTExNyAtNjQgLTExNyA2OWM0MCwyMSA3%0D%0AOCw0NCAxMTcsNjd6bTEzMyAtMTQ5bDExNyA2NyAxMTUgLTY0IC0xMjAgLTY3IC0xMTIgNjR6bTY3%0D%0AIDIyOWwtNDUgMjcgMCA4MGMwLDAgMCwzIDAsNWwwIDQzIDExMiAtNjQgMCAtNzUgLTExIDhjLTMs%0D%0AMyAtOCwzIC0xMSwzIC0zLDAgLTUsLTMgLTgsLTNsLTM3IC0yNHptNjEgLTE0MWwwIDEzMyAxMTIg%0D%0ALTY0IDAgLTEzMyAtMTEyIDY0em0tNDUzIDU2bDAgLTEzMyAtMTE3IC02NyAwIDEzMyAxMTcgNjd6%0D%0AbTggLTE1N2wxMTcgLTY3IC0xMTcgLTY5IC0xMjAgNjkgMTIwIDY3em0xNTIgLTYxYzAsMCAwLDMg%0D%0AMCw1bDAgMzcgMzIgMTkgMTA5IC02NCAtMTE3IC02NyAtNjEgMzIgMjkgMTljNSwzIDgsOCA4LDEz%0D%0AIDAsMyAwLDMgMCw1eiIvPg0KIDwvZz4NCjwvc3ZnPg0K",
                      srcCubemap: "https://github.com/Intendanto/plumber-engine/blob/master/plumber-cubemap.png?raw=true",
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
                                                                attr: {icon: "i-photo", title: "Screen shot"}
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
                          ["Loading..."].join("<br/>")
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
                          this.mode = e, this.modeis = {ctr: "constructor" === e, vwr: "viewer" === e};
                          var i, n;
                          switch (e) {
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
                        function e() {
                          n.view.updateLights(), n.view.needsRedraw = !0
                        }

                        function t() {
                          n.view.needsRedraw = !0, n.view2.needsRedraw = !0
                        }

                        function i() {
                          n.onresize(), n.view.needsRedraw = !0, n.view2.needsRedraw = !0
                        }

                        var n = this;
                        this.gui = new dat.GUI({hideable: !1});
                        var o = ["stencilLit", "stencilHover", "stencilSelect"];
                        this.gui.closed = !0, this.gui.addColor(View3.prototype, "clearColor")
                          .name("Clear")
                          .onChange(t), this.gui.add(View3.prototype, "enableRender")
                          .name("Render")
                          .onChange(t), this.gui.add(View3.prototype, "debugDepth")
                          .name("Show Depth")
                          .onChange(t), this.gui.add(View3.prototype, "enableStencil")
                          .name("Stencil")
                          .onChange(t), this.gui.add(View3.prototype, "enableStencilAA")
                          .name("AA Stencil")
                          .onChange(t), this.gui.add(View3.prototype, "enableStencilBloom")
                          .name("Bloom Stencil")
                          .onChange(t), this.gui.add(View3.prototype, "enableSSAO")
                          .name("SSAO")
                          .onChange(t), this.gui.add(View3.prototype, "halfSizeOcclusion")
                          .name("Half SSAO")
                          .onChange(i), this.gui.add(View3.prototype, "enableOnlyAO")
                          .name("Only AO")
                          .onChange(t), this.gui.add(View3.prototype, "enableAAAO")
                          .name("AA AO")
                          .onChange(t), this.gui.add(View3.prototype, "enableBlurAO")
                          .name("Blur AO")
                          .onChange(t), this.gui.add(View3.prototype, "enableBloomAO").name("Bloom AO").onChange(t);
                        var s = this.view.smSSAO.uniforms, r = this.gui.addFolder("Occlusion");
                        r.add(s.diffArea, "value").min(0).max(2).name("diffArea").onChange(t), r.add(
                          s.gDisplace,
                          "value"
                        ).min(0).max(2).name("gDisplace").onChange(t), r.add(s.radius, "value").min(0).max(50).name(
                          "radius").onChange(t), r.add(s.aoClamp, "value")
                          .min(0)
                          .max(2)
                          .name("aoClamp")
                          .onChange(t), r.add(s.aoMin, "value").min(0).max(1).name("aoMin").onChange(t), o.forEach(
                          function (e) {
                            var i = this.gui.addFolder(e), n = this.view[e].params;
                            i.addColor(n, "drawColor").onChange(t), i.add(n, "drawAlpha")
                              .min(0)
                              .max(1)
                              .onChange(t), i.add(n, "lineAlpha").min(0).max(1).onChange(t), i.add(n, "lineAngle")
                              .min(0)
                              .max(360)
                              .onChange(t), i.add(n, "edgeAlpha").min(0).max(1).onChange(t), i.add(n, "fillAlpha")
                              .min(0)
                              .max(1)
                              .onChange(t)
                          },
                          this
                        ), this.gui.add(this, "explodeStepped").name("Explode Step");
                        var a = this.gui.addFolder("Light");
                        a.add(this.view, "directAngle")
                          .min(-1)
                          .max(1)
                          .name("Direct Angle")
                          .onChange(e), a.add(this.view, "directK").min(-1).max(1).name("Direct K").onChange(e), a.add(
                          this.view,
                          "directLift"
                        ).min(-1).max(1).name("Direct Lift").onChange(e), a.add(this.view.dirLight, "intensity")
                          .min(0)
                          .max(1)
                          .name("Direct Power")
                          .onChange(t), a.add(this.view.ambLight, "intensity")
                          .min(0)
                          .max(1)
                          .name("Ambient Power")
                          .onChange(t), this.gui.add(this.viewTween, "durationTime")
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
                      shotElement: function (e, t, i, n) {
                        var o = this.viewN;
                        return o || (o = this.viewN = new View3({
                                                                  renderer: this.renderer,
                                                                  imagery: this.imagery,
                                                                  enableStencil: !1,
                                                                  enableRaycast: !1
                                                                })), this.sampler.prepare(e).then(function (e) {
                          var s = o.renderTarget;
                          s && s.width === t && s.height === i || (s = o.renderTarget = new THREE.WebGLRenderTarget(
                            t,
                            i,
                            {
                              minFilter: THREE.LinearFilter,
                              magFilter: THREE.LinearFilter,
                              format: THREE.RGBAFormat
                            }
                          )), o.setSize(t, i), o.setTree(new TNode(e)), o.focusOnTree(0, null, n), o.onTick(0);
                          var r = this.renderer.context, a = s.__webglFramebuffer, l = this.imagery.makeCanvas(t, i),
                            h = l.createImageData(t, i), c = new Uint8Array(h.data.buffer);
                          return r.bindFramebuffer(r.FRAMEBUFFER, a), r.readPixels(
                            0,
                            0,
                            t,
                            i,
                            r.RGBA,
                            r.UNSIGNED_BYTE,
                            c
                          ), l.putImageData(h, 0, 0), l.translate(0, i), l.scale(1, -1), l.drawImage(
                            l.canvas,
                            0,
                            0
                          ), o.setTree(null), l.canvas
                        }, this)
                      },
                      deleteNodeWithPrompt: function (e) {
                        if (e) {
                          var t = e.pinch();
                          if (t && t.nodes.length) {
                            if (t.nodes.length < 2) return void this.deleteNodeList(t);
                            this.view.selectNode(null), this.view.hoverNode(null), this.litModeStart(
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
                                                                    }), this.deletePromptTip.visible.on()
                          }
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
                        var e = (new Date).toISOString().split(".")[0].replace(/:/g, ".");
                        this.canvas.toBlob(function (t) {
                          saveAs(t, "pb-screen-" + e + ".jpg")
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
                      explode: function (e) {
                        function t() {
                          var i = r[a++];
                          if (i) {
                            for (var n = [], s = 0; s < i.length; s++) {
                              var l = i[s], h = new Defer;
                              l.events.once("connect_end", h.resolve, h), l.playConnection(
                                e ? 0 : 1,
                                null,
                                .4 * o
                              ), n.push(h)
                            }
                            this.explodeStepDefer = Defer.all(n).then(t, this)
                          }
                        }

                        if (this.explodeStepDefer && (this.explodeStepDefer.abort(), delete this.explodeStepDefer), this.explodeEnabled !== e) {
                          this.explodeEnabled = e, this.actionList.getBlock("explode").set(e);
                          var i = this.view.tree ? this.view : this.view2, n = i.tree;
                          if (n) {
                            var o = this.explodeTimeScale, s = 1500;
                            if (this.explodeStepped) {
                              var r = [], a = 0;
                              n.traverseConnections(function (e, t, i) {
                                e.connected && e.master && (r[i] || (r[i] = []), r[i].push(e))
                              }), t.call(this)
                            } else n.traverseConnections(function (t) {
                              t.connected && t.master && (t.playConnection(
                                e ? 0 : 1,
                                null,
                                o
                              ), s < t.transitionTime && (s = t.transitionTime))
                            });
                            var l = s * o, h = e ? i.explodeDim : i.assembleDim, c = e ? 5 / 4 : 4 / 3,
                              d = e ? TWEEN.Easing.Quadratic.Out : TWEEN.Easing.Quadratic.InOut;
                            i.focusOnTree(l, h, c, null, null, d)
                          }
                        }
                      },
                      explodeNode: function (e, t) {
                        if (e.upcon) {
                          var i = e.upcon.connected;
                          i.playConnection(t ? 0 : 1, null, .6 * this.explodeTimeScale)
                        }
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
                      constructNode: function (e, t) {
                        if (!e) return Defer.complete(!0);
                        if (t && !this.isAlias(t) && (console.error(
                          "construct: only string aliases allowed:",
                          t
                        ), t = null), this.ready.pending) return this.ready.then(f.binda(
                          this.constructNode,
                          this,
                          arguments
                        ));
                        var i = this.splitScreenEnabled ? this.view2 : this.view;
                        return this.loading.element.parentNode !== i.element && dom.append(
                          i.element,
                          this.loading.element
                        ), this.loading.setProgress(0), this.loading.visible.on(), this.emptyViewMessageVisible.off(
                          "g_evm_tree"), this.sampler.prepare(e).then(function (e) {
                          this.loading.setProgress(1), this.loading.visible.off();
                          var i = TSerial.isComplex(e) ? TSerial.constructJSON(e, this.sampler, !1) : new TNode(e);
                          return t && i.setId(t), i
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
                        var e = [];
                        return this.tree.traverse(function (t) {
                          e.push(t.id)
                        }, this), e
                      },
                      getElementById: function (e) {
                        var t = null;
                        return this.tree.traverse(function (i) {
                          if (i.id === e) return t = i, TNode.TRSTOP
                        }), t
                      },
                      updateMarkerVisibility: function () {
                        var e = this.view2.tree && 1 === this.viewTween.target.split && this.viewTween.source.split > .5;
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
                        for (var n = 0; n < this.cons.length; n++) {
                          var o = this.cons[n], s = o.canConnectList(this.cons2);
                          if (o.group = -1, s.length) {
                            for (var r = !1, a = 0; a < i.length; a++) if (f.seq(s, i[a])) {
                              o.group = a, r = !0;
                              break
                            }
                            if (!r) {
                              var l = i.length;
                              o.group = l;
                              for (var a = 0; a < s.length; a++) s[a].group = l;
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
                        if (this.cons2) for (var e = 0; e < this.cons2.length; e++) this.updateConnectionVisibility(
                          this.cons2[e],
                          this.connectionParts[0]
                        )
                      },
                      updateConnectionVisibility: function (e, t) {
                        var i = e.group !== -1, n = !t || e.canConnect(t);
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
                      deferMethod: function (e, t, i, n) {
                        return (new Defer).anyway(function (n, o) {
                          var s = {method: e, params: t, success: o, status: o ? "connected" : "rejected"};
                          if ("object" == typeof n && f.copy(s, n), !o) {
                            var r = this.commonMethodMessages;
                            s.reason = n ? n.msg ? r[n.msg] ? f.implode(
                              r[n.msg],
                              n
                            ) : "undefined error" : n : "unknown error"
                          }
                          if (this.events.emit(i, s), o) return n;
                          throw s
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
                      connectElement: function (e, t, i, n, o, s) {
                        var r = this.deferMethod("connectElement", arguments, "onConnectElement"),
                          a = this.getElementById(i);
                        a || r.reject({msg: "id", id: i});
                        var l = a.connections[n];
                        return l || r.reject({
                                               msg: "con",
                                               type: a.type,
                                               index: n
                                             }), l.connected && r.reject({
                                                                           msg: "used",
                                                                           type: a.type,
                                                                           index: n
                                                                         }), this.constructNode(e, s)
                          .then(function (e) {
                            var i = e.connections[t];
                            i || r.reject({
                                            msg: "con",
                                            type: e.type,
                                            index: t
                                          }), l.canConnect(i) || r.reject({
                                                                            msg: "match",
                                                                            typeA: e.type,
                                                                            indexA: t,
                                                                            typeB: a.type,
                                                                            indexB: n
                                                                          });
                            var s = [], h = i.node;
                            h.traverse(function (e) {
                              s.push(e.id)
                            }), this.makeConnection(l, i, o), r.resolve({root: h, nodes: s})
                          }, function () {
                            r.reject({msg: "src", src: e})
                          }, this), r
                      },
                      replaceElement: function (e, t) {
                        var i = this.deferMethod("replaceElement", arguments, "onReplaceElement");
                        return this.tree ? this.sampler.prepare(e).then(function (e) {
                          return this.replaceElementBySample(e, t)
                        }, this).push(i) : i.reject("nothing to replace"), i
                      },
                      replaceElementBySample: function (e, t) {
                        if (!this.tree) throw"nothing to replace";
                        if (!e) throw"bad element";
                        var i = [];
                        if (t === -1 || 0 === t) this.tree.traverse(function (t) {
                          t.canBeReplacedBy(e) && i.push(t)
                        }, this); else {
                          var n = t instanceof TNode ? t : this.getElementById(t);
                          if (!n) throw"invalid param: " + t;
                          if (!n.canBeReplacedBy(e)) throw"sample can't replace this node: " + t;
                          i.push(n)
                        }
                        if (!i.length) throw"no suitable nodes";
                        if (0 === t && i.length > 1) return this.litModeStart(
                          "replace",
                          i
                        ), this.issuedReplaceDefer = new Defer(function (t) {
                          delete this.issuedReplaceDefer, this.litModeClear();
                          var i = this.replaceNode(t, e, !0);
                          return {status: "replaced", replaced: [t.id], nodes: [i.id]}
                        }, this);
                        var o = "constructor" === this.mode && 1 === i.length, s = [];
                        return i.forEach(function (i) {
                          var n = this.replaceNode(i, e, o, t);
                          s.push(n.id)
                        }, this), this.view.needsRedraw = !0, {
                          status: "replaced",
                          replaced: i.map(f.prop("id")),
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
                              return void this.onCopy();
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
                        return t && t.nodeMarker && (t.nodeMarker.destroy(), t.nodeMarker = null), this.issuedReplaceDefer && e && e.lit ? void this.issuedReplaceDefer.resolve(
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
                          e), this.closeDeletePrompt()) : this.closeDeletePromptAndSelectNode()), void this.events.emit(
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
