/*! Isotope PACKAGED v3.0.5 Licensed GPLv3 for open source use or Isotope Commercial License for commercial use https://isotope.metafizzy.co Copyright 2017 Metafizzy */
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width),
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , I = a.borderTopWidth + a.borderBottomWidth
              , z = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + I),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ,
    i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i || 100)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, n, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = this.layout.size
          , r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10)
          , a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r,
        a = isNaN(a) ? 0 : a,
        r -= e ? s.paddingLeft : s.paddingRight,
        a -= i ? s.paddingTop : s.paddingBottom,
        this.position.x = r,
        this.position.y = a
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = parseInt(t, 10)
          , s = parseInt(e, 10)
          , r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e),
        r && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i
          , u = e - o
          , h = {};
        h.transform = this.getTranslate(a, u),
        this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});
/*! @vimeo/player v2.2.0 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {},
    e.Vimeo.Player = t())
}(this, function() {
    "use strict";
    function e(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }
    function t(e, t, n) {
        var r = E.get(e.element) || {};
        t in r || (r[t] = []),
        r[t].push(n),
        E.set(e.element, r)
    }
    function n(e, t) {
        return (E.get(e.element) || {})[t] || []
    }
    function r(e, t, n) {
        var r = E.get(e.element) || {};
        if (!r[t])
            return !0;
        if (!n)
            return r[t] = [],
            E.set(e.element, r),
            !0;
        var i = r[t].indexOf(n);
        return -1 !== i && r[t].splice(i, 1),
        E.set(e.element, r),
        r[t] && 0 === r[t].length
    }
    function i(e, t) {
        var i = n(e, t);
        if (i.length < 1)
            return !1;
        var o = i.shift();
        return r(e, t, o),
        o
    }
    function o(e, t) {
        var n = E.get(e);
        E.set(t, n),
        E.delete(e)
    }
    function a(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
    }
    function u(e) {
        return e instanceof window.HTMLElement
    }
    function s(e) {
        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
    }
    function c(e) {
        return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)
    }
    function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = e.id
          , n = e.url
          , r = t || n;
        if (!r)
            throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (s(r))
            return "https://vimeo.com/" + r;
        if (c(r))
            return r.replace("http:", "https:");
        if (t)
            throw new TypeError("“" + t + "” is not a valid video id.");
        throw new TypeError("“" + r + "” is not a vimeo.com url.")
    }
    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return T.reduce(function(t, n) {
            var r = e.getAttribute("data-vimeo-" + n);
            return (r || "" === r) && (t[n] = "" === r ? 1 : r),
            t
        }, t)
    }
    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(n, r) {
            if (!c(e))
                throw new TypeError("“" + e + "” is not a vimeo.com url.");
            var i = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
            for (var o in t)
                t.hasOwnProperty(o) && (i += "&" + o + "=" + encodeURIComponent(t[o]));
            var a = "XDomainRequest"in window ? new XDomainRequest : new XMLHttpRequest;
            a.open("GET", i, !0),
            a.onload = function() {
                if (404 === a.status)
                    return void r(new Error("“" + e + "” was not found."));
                if (403 === a.status)
                    return void r(new Error("“" + e + "” is not embeddable."));
                try {
                    var t = JSON.parse(a.responseText);
                    n(t)
                } catch (e) {
                    r(e)
                }
            }
            ,
            a.onerror = function() {
                var e = a.status ? " (" + a.status + ")" : "";
                r(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
            }
            ,
            a.send()
        }
        )
    }
    function d(e, t) {
        var n = e.html;
        if (!t)
            throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized"))
            return t.querySelector("iframe");
        var r = document.createElement("div");
        return r.innerHTML = n,
        t.appendChild(r.firstChild),
        t.setAttribute("data-vimeo-initialized", "true"),
        t.querySelector("iframe")
    }
    function v(e) {
        return "string" == typeof e && (e = JSON.parse(e)),
        e
    }
    function p(e, t, n) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var r = {
                method: t
            };
            void 0 !== n && (r.value = n);
            var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            i >= 8 && i < 10 && (r = JSON.stringify(r)),
            e.element.contentWindow.postMessage(r, e.origin)
        }
    }
    function y(e, t) {
        t = v(t);
        var o = []
          , a = void 0;
        if (t.event) {
            if ("error" === t.event) {
                n(e, t.data.method).forEach(function(n) {
                    var i = new Error(t.data.message);
                    i.name = t.data.name,
                    n.reject(i),
                    r(e, t.data.method, n)
                })
            }
            o = n(e, "event:" + t.event),
            a = t.data
        } else if (t.method) {
            var u = i(e, t.method);
            u && (o.push(u),
            a = t.value)
        }
        o.forEach(function(t) {
            try {
                if ("function" == typeof t)
                    return void t.call(e, a);
                t.resolve(a)
            } catch (e) {}
        })
    }
    function m(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var g = void 0 !== Array.prototype.indexOf
      , w = void 0 !== window.postMessage;
    if (!g || !w)
        throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var k = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , b = (e(function(e, t) {
        !function(e) {
            function t(e, t) {
                function r(e) {
                    if (!this || this.constructor !== r)
                        return new r(e);
                    this._keys = [],
                    this._values = [],
                    this._itp = [],
                    this.objectOnly = t,
                    e && n.call(this, e)
                }
                return t || w(e, "size", {
                    get: y
                }),
                e.constructor = r,
                r.prototype = e,
                r
            }
            function n(e) {
                this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
                    this.set(e[0], e[1])
                }, this)
            }
            function r(e) {
                return this.has(e) && (this._keys.splice(g, 1),
                this._values.splice(g, 1),
                this._itp.forEach(function(e) {
                    g < e[0] && e[0]--
                })),
                -1 < g
            }
            function i(e) {
                return this.has(e) ? this._values[g] : void 0
            }
            function o(e, t) {
                if (this.objectOnly && t !== Object(t))
                    throw new TypeError("Invalid value used as weak collection key");
                if (t != t || 0 === t)
                    for (g = e.length; g-- && !k(e[g], t); )
                        ;
                else
                    g = e.indexOf(t);
                return -1 < g
            }
            function a(e) {
                return o.call(this, this._values, e)
            }
            function u(e) {
                return o.call(this, this._keys, e)
            }
            function s(e, t) {
                return this.has(e) ? this._values[g] = t : this._values[this._keys.push(e) - 1] = t,
                this
            }
            function c(e) {
                return this.has(e) || this._values.push(e),
                this
            }
            function f() {
                (this._keys || 0).length = this._values.length = 0
            }
            function l() {
                return p(this._itp, this._keys)
            }
            function h() {
                return p(this._itp, this._values)
            }
            function d() {
                return p(this._itp, this._keys, this._values)
            }
            function v() {
                return p(this._itp, this._values, this._values)
            }
            function p(e, t, n) {
                var r = [0]
                  , i = !1;
                return e.push(r),
                {
                    next: function() {
                        var o, a = r[0];
                        return !i && a < t.length ? (o = n ? [t[a], n[a]] : t[a],
                        r[0]++) : (i = !0,
                        e.splice(e.indexOf(r), 1)),
                        {
                            done: i,
                            value: o
                        }
                    }
                }
            }
            function y() {
                return this._values.length
            }
            function m(e, t) {
                for (var n = this.entries(); ; ) {
                    var r = n.next();
                    if (r.done)
                        break;
                    e.call(t, r.value[1], r.value[0], this)
                }
            }
            var g, w = Object.defineProperty, k = function(e, t) {
                return e === t || e !== e && t !== t
            };
            "undefined" == typeof WeakMap && (e.WeakMap = t({
                delete: r,
                clear: f,
                get: i,
                has: u,
                set: s
            }, !0)),
            "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (e.Map = t({
                delete: r,
                has: u,
                get: i,
                set: s,
                keys: l,
                values: h,
                entries: d,
                forEach: m,
                clear: f
            })),
            "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = t({
                has: a,
                add: c,
                delete: r,
                clear: f,
                keys: h,
                values: h,
                entries: v,
                forEach: m
            })),
            "undefined" == typeof WeakSet && (e.WeakSet = t({
                delete: r,
                add: c,
                clear: f,
                has: a
            }, !0))
        }(void 0 !== k ? k : window)
    }),
    e(function(e) {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(t, n, r) {
            n[t] = n[t] || r(),
            e.exports && (e.exports = n[t])
        }("Promise", k, function() {
            function e(e, t) {
                d.add(e, t),
                h || (h = p(d.drain))
            }
            function n(e) {
                var n, r = void 0 === e ? "undefined" : t(e);
                return null == e || "object" != r && "function" != r || (n = e.then),
                "function" == typeof n && n
            }
            function r() {
                for (var e = 0; e < this.chain.length; e++)
                    i(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }
            function i(e, t, r) {
                var i, o;
                try {
                    !1 === t ? r.reject(e.msg) : (i = !0 === t ? e.msg : t.call(void 0, e.msg),
                    i === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (o = n(i)) ? o.call(i, r.resolve, r.reject) : r.resolve(i))
                } catch (e) {
                    r.reject(e)
                }
            }
            function o(t) {
                var i, u = this;
                if (!u.triggered) {
                    u.triggered = !0,
                    u.def && (u = u.def);
                    try {
                        (i = n(t)) ? e(function() {
                            var e = new s(u);
                            try {
                                i.call(t, function() {
                                    o.apply(e, arguments)
                                }, function() {
                                    a.apply(e, arguments)
                                })
                            } catch (t) {
                                a.call(e, t)
                            }
                        }) : (u.msg = t,
                        u.state = 1,
                        u.chain.length > 0 && e(r, u))
                    } catch (e) {
                        a.call(new s(u), e)
                    }
                }
            }
            function a(t) {
                var n = this;
                n.triggered || (n.triggered = !0,
                n.def && (n = n.def),
                n.msg = t,
                n.state = 2,
                n.chain.length > 0 && e(r, n))
            }
            function u(e, t, n, r) {
                for (var i = 0; i < t.length; i++)
                    !function(i) {
                        e.resolve(t[i]).then(function(e) {
                            n(i, e)
                        }, r)
                    }(i)
            }
            function s(e) {
                this.def = e,
                this.triggered = !1
            }
            function c(e) {
                this.promise = e,
                this.state = 0,
                this.triggered = !1,
                this.chain = [],
                this.msg = void 0
            }
            function f(t) {
                if ("function" != typeof t)
                    throw TypeError("Not a function");
                if (0 !== this.__NPO__)
                    throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var n = new c(this);
                this.then = function(t, i) {
                    var o = {
                        success: "function" != typeof t || t,
                        failure: "function" == typeof i && i
                    };
                    return o.promise = new this.constructor(function(e, t) {
                        if ("function" != typeof e || "function" != typeof t)
                            throw TypeError("Not a function");
                        o.resolve = e,
                        o.reject = t
                    }
                    ),
                    n.chain.push(o),
                    0 !== n.state && e(r, n),
                    o.promise
                }
                ,
                this.catch = function(e) {
                    return this.then(void 0, e)
                }
                ;
                try {
                    t.call(void 0, function(e) {
                        o.call(n, e)
                    }, function(e) {
                        a.call(n, e)
                    })
                } catch (e) {
                    a.call(n, e)
                }
            }
            var l, h, d, v = Object.prototype.toString, p = "undefined" != typeof setImmediate ? function(e) {
                return setImmediate(e)
            }
            : setTimeout;
            try {
                Object.defineProperty({}, "x", {}),
                l = function(e, t, n, r) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !1 !== r
                    })
                }
            } catch (e) {
                l = function(e, t, n) {
                    return e[t] = n,
                    e
                }
            }
            d = function() {
                function e(e, t) {
                    this.fn = e,
                    this.self = t,
                    this.next = void 0
                }
                var t, n, r;
                return {
                    add: function(i, o) {
                        r = new e(i,o),
                        n ? n.next = r : t = r,
                        n = r,
                        r = void 0
                    },
                    drain: function() {
                        var e = t;
                        for (t = n = h = void 0; e; )
                            e.fn.call(e.self),
                            e = e.next
                    }
                }
            }();
            var y = l({}, "constructor", f, !1);
            return f.prototype = y,
            l(y, "__NPO__", 0, !1),
            l(f, "resolve", function(e) {
                var n = this;
                return e && "object" == (void 0 === e ? "undefined" : t(e)) && 1 === e.__NPO__ ? e : new n(function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    t(e)
                }
                )
            }),
            l(f, "reject", function(e) {
                return new this(function(t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                        throw TypeError("Not a function");
                    n(e)
                }
                )
            }),
            l(f, "all", function(e) {
                var t = this;
                return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                        throw TypeError("Not a function");
                    var i = e.length
                      , o = Array(i)
                      , a = 0;
                    u(t, e, function(e, t) {
                        o[e] = t,
                        ++a === i && n(o)
                    }, r)
                }
                )
            }),
            l(f, "race", function(e) {
                var t = this;
                return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                        throw TypeError("Not a function");
                    u(t, e, function(e, t) {
                        n(t)
                    }, r)
                }
                )
            }),
            f
        })
    }))
      , E = new WeakMap
      , T = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive", "speed"]
      , _ = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , j = new WeakMap
      , x = new WeakMap
      , Player = function() {
        function Player(e) {
            var t = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (m(this, Player),
            window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
            e = e[0]),
            "string" == typeof e && (e = document.getElementById(e)),
            !u(e))
                throw new TypeError("You must pass either a valid element or a valid id.");
            if ("IFRAME" !== e.nodeName) {
                var r = e.querySelector("iframe");
                r && (e = r)
            }
            if ("IFRAME" === e.nodeName && !c(e.getAttribute("src") || ""))
                throw new Error("The player element passed isn’t a Vimeo embed.");
            if (j.has(e))
                return j.get(e);
            this.element = e,
            this.origin = "*";
            var i = new b(function(r, i) {
                var a = function(e) {
                    if (c(e.origin) && t.element.contentWindow === e.source) {
                        "*" === t.origin && (t.origin = e.origin);
                        var n = v(e.data)
                          , i = "event"in n && "ready" === n.event
                          , o = "method"in n && "ping" === n.method;
                        if (i || o)
                            return t.element.setAttribute("data-ready", "true"),
                            void r();
                        y(t, n)
                    }
                };
                if (window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a),
                "IFRAME" !== t.element.nodeName) {
                    var u = l(e, n);
                    h(f(u), u).then(function(n) {
                        var r = d(n, e);
                        return t.element = r,
                        o(e, r),
                        j.set(t.element, t),
                        n
                    }).catch(function(e) {
                        return i(e)
                    })
                }
            }
            );
            return x.set(this, i),
            j.set(this.element, this),
            "IFRAME" === this.element.nodeName && p(this, "ping"),
            this
        }
        return _(Player, [{
            key: "callMethod",
            value: function(e) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new b(function(i, o) {
                    return n.ready().then(function() {
                        t(n, e, {
                            resolve: i,
                            reject: o
                        }),
                        p(n, e, r)
                    })
                }
                )
            }
        }, {
            key: "get",
            value: function(e) {
                var n = this;
                return new b(function(r, i) {
                    return e = a(e, "get"),
                    n.ready().then(function() {
                        t(n, e, {
                            resolve: r,
                            reject: i
                        }),
                        p(n, e)
                    })
                }
                )
            }
        }, {
            key: "set",
            value: function(e, n) {
                var r = this;
                return b.resolve(n).then(function(n) {
                    if (e = a(e, "set"),
                    void 0 === n || null === n)
                        throw new TypeError("There must be a value to set.");
                    return r.ready().then(function() {
                        return new b(function(i, o) {
                            t(r, e, {
                                resolve: i,
                                reject: o
                            }),
                            p(r, e, n)
                        }
                        )
                    })
                })
            }
        }, {
            key: "on",
            value: function(e, r) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (!r)
                    throw new TypeError("You must pass a callback function.");
                if ("function" != typeof r)
                    throw new TypeError("The callback must be a function.");
                0 === n(this, "event:" + e).length && this.callMethod("addEventListener", e).catch(function() {}),
                t(this, "event:" + e, r)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                r(this, "event:" + e, t) && this.callMethod("removeEventListener", e).catch(function(e) {})
            }
        }, {
            key: "loadVideo",
            value: function(e) {
                return this.callMethod("loadVideo", e)
            }
        }, {
            key: "ready",
            value: function() {
                var e = x.get(this);
                return b.resolve(e)
            }
        }, {
            key: "addCuePoint",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: e,
                    data: t
                })
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                return this.callMethod("removeCuePoint", e)
            }
        }, {
            key: "enableTextTrack",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: e,
                    kind: t
                })
            }
        }, {
            key: "disableTextTrack",
            value: function() {
                return this.callMethod("disableTextTrack")
            }
        }, {
            key: "pause",
            value: function() {
                return this.callMethod("pause")
            }
        }, {
            key: "play",
            value: function() {
                return this.callMethod("play")
            }
        }, {
            key: "unload",
            value: function() {
                return this.callMethod("unload")
            }
        }, {
            key: "getAutopause",
            value: function() {
                return this.get("autopause")
            }
        }, {
            key: "setAutopause",
            value: function(e) {
                return this.set("autopause", e)
            }
        }, {
            key: "getColor",
            value: function() {
                return this.get("color")
            }
        }, {
            key: "setColor",
            value: function(e) {
                return this.set("color", e)
            }
        }, {
            key: "getCuePoints",
            value: function() {
                return this.get("cuePoints")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.get("currentTime")
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                return this.set("currentTime", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.get("duration")
            }
        }, {
            key: "getEnded",
            value: function() {
                return this.get("ended")
            }
        }, {
            key: "getLoop",
            value: function() {
                return this.get("loop")
            }
        }, {
            key: "setLoop",
            value: function(e) {
                return this.set("loop", e)
            }
        }, {
            key: "getPaused",
            value: function() {
                return this.get("paused")
            }
        }, {
            key: "getPlaybackRate",
            value: function() {
                return this.get("playbackRate")
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                return this.set("playbackRate", e)
            }
        }, {
            key: "getTextTracks",
            value: function() {
                return this.get("textTracks")
            }
        }, {
            key: "getVideoEmbedCode",
            value: function() {
                return this.get("videoEmbedCode")
            }
        }, {
            key: "getVideoId",
            value: function() {
                return this.get("videoId")
            }
        }, {
            key: "getVideoTitle",
            value: function() {
                return this.get("videoTitle")
            }
        }, {
            key: "getVideoWidth",
            value: function() {
                return this.get("videoWidth")
            }
        }, {
            key: "getVideoHeight",
            value: function() {
                return this.get("videoHeight")
            }
        }, {
            key: "getVideoUrl",
            value: function() {
                return this.get("videoUrl")
            }
        }, {
            key: "getVolume",
            value: function() {
                return this.get("volume")
            }
        }, {
            key: "setVolume",
            value: function(e) {
                return this.set("volume", e)
            }
        }]),
        Player
    }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document
          , t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
          , n = function(e) {
            "console"in window && console.error && console.error("There was an error creating an embed: " + e)
        };
        t.forEach(function(e) {
            try {
                if (null !== e.getAttribute("data-vimeo-defer"))
                    return;
                var t = l(e);
                h(f(t), t).then(function(t) {
                    return d(t, e)
                }).catch(n)
            } catch (e) {
                n(e)
            }
        })
    }(),
    function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document
          , t = function(t) {
            if (c(t.origin) && t.data && "spacechange" === t.data.event)
                for (var n = e.querySelectorAll("iframe"), r = 0; r < n.length; r++)
                    if (n[r].contentWindow === t.source) {
                        var i = n[r].parentElement;
                        i && -1 !== i.className.indexOf("vimeo-space") && (i.style.paddingBottom = t.data.data[0].bottom + "px");
                        break
                    }
        };
        window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t)
    }(),
    Player
});
jQuery(function($) {
    var $section = $('section.s123-page-data.s123-module-gallery.s123-page-data-gallery');
    var $details = $section.find('.g-item-details');
    var isShowSocialIcons = true;
    if ($section.data('hide-social-icons') && $section.data('hide-social-icons') == 'on') {
        isShowSocialIcons = false;
    }
    if ($section.data('hide-info-bar') && $section.data('hide-info-bar') == 'on')
        return;
    var buttons = [];
    if ($section.data('print-image-btn') && $section.data('print-image-btn') == 'on') {
        buttons.push('print');
    }
    if ($section.data('download-image-btn') && $section.data('download-image-btn') == 'on') {
        buttons.push('download');
    }
    var imageURL = $details.closest('.g-item-container').find('img').attr('src');
    var caption = Gallery_getImageMagnificPopupCaption($details.data('module-title'), $details.data('description'), $details.data('external-link'), $details.data('external-link-text'), $details.data('page-url'), $details.data('title'), isShowSocialIcons, imageURL, buttons);
    $details.html(caption);
    $details.find('.gallery-link-popup').on('click', function(event) {
        Gallery_popuplink($(this).data('link'));
    });
    if ($section.data('prevent-download-image') && $section.data('prevent-download-image') == 'on') {
        $section.find('.g-item-container img').get(0).oncontextmenu = function() {
            return false;
        }
    }
});
jQuery(function($) {
    GalleryModuleInitialize();
});
function GalleryModuleInitialize() {
    $(document).on('s123.page.ready', function(event) {
        var skipHistoryEntry = false;
        var fixImagesWithJob = false;
        $(document).off('pjax_magnific_popup_reset').on('pjax_magnific_popup_reset', function() {
            skipHistoryEntry = true;
            $.magnificPopup.instance.close();
            skipHistoryEntry = false;
        });
        var $section = $('section.s123-module-gallery.isotope-gallery:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $isotopeContainer = $sectionThis.find('.isotope-gallery-container');
            var $categories = $sectionThis.find('.gallery-category');
            var $isotopeFilter = $sectionThis.find('.filter');
            var layout_customize = $sectionThis.find('.layout-customize').length > 0 ? tryParseJSON($sectionThis.find('.layout-customize').val()) : {};
            var $galleryItem = $sectionThis.find('.gallery-item');
            var $videoBar = '';
            $sectionThis.data('layout-customize', layout_customize);
            if (parseInt(layout_customize.mobile_number_images_in_row) > 1) {
                $sectionThis.addClass('m-m-i-in-row');
            }
            $sectionThis.magnificPopup({
                fixedContentPos: true,
                mainClass: 'mfp-module-gallery disable-context-menu',
                delegate: '.mfp-image:visible',
                // Isotope Filter
                closeOnContentClick: true,
                closeBtnInside: false,
                tLoading: translations.loading,
                // Text that is displayed during loading
                autoFocusLast: false,
                gallery: {
                    enabled: true,
                    tClose: translations.closeEsc,
                    // Alt text on close button
                    tPrev: translations.previousLeftArrowKey,
                    // Alt text on left arrow
                    tNext: translations.NextRightArrowKey,
                    // Alt text on right arrow
                    tCounter: '%curr% ' + translations.of + ' %total%'// Markup for "1 of 7" counter
                },
                image: {
                    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar fancy-scrollbar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<span class="mfp-caption-close">' + S123.s123IconToSvg.getHtml('times', '', '') + '</span>' + '</div>' + '</div>',
                    titleSrc: function(item) {
                        if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                            item.img.get(0).oncontextmenu = function() {
                                return false;
                            }
                        }
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        return Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                    },
                    tError: translations.imageCouldNotLoaded // Error message when image could not be loaded
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="video-bottom-bar">' + '<div class="mfp-title" style="position: absolute; padding-top: 5px;"></div>' + '</div>' + '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        youtu: {
                            index: 'youtu.be/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: function(url) {
                                var matches = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                if (!matches || !matches[5])
                                    return null;
                                return matches[5];
                            },
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        site123: {
                            index: $GLOBALS['cdn-user-videos-files'],
                            id: function(url) {
                                if (isMobileDevice.iOS())
                                    url += '&deviceType=ios';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        },
                        site123Processing: {
                            index: '/files/images/video-processing.png',
                            id: function(url) {
                                if (isMobileDevice.any())
                                    url += '&autoplay=0';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        }
                    }
                },
                callbacks: {
                    elementParse: function(item) {
                        if (item.el.data('type') === 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                    markupParse: function(template, values, item) {
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if (item.el.data('type') != 'video') {
                            if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                                buttons.push('print');
                            }
                            if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                                buttons.push('download');
                            }
                        }
                        values.title = Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                        setTimeout(function() {
                            $('.mfp-title').off('click').click(function(event) {
                                event.stopPropagation();
                            });
                            $('.mfp-content .gallery-link-popup').on('click', function(event) {
                                Gallery_popuplink($(this).data('link'));
                            });
                        }, 500);
                        if (!this.mp_currentPageUrl)
                            this.mp_currentPageUrl = window.location.href;
                        window.history.replaceState(this.mp_currentPageUrl, 'Title', item.el.data('image-page-url'));
                        $videoBar = template.find('.video-bottom-bar');
                    },
                    updateStatus: function(data) {
                        var $bar = $('.mfp-bottom-bar');
                        var $close = $('.mfp-caption-close');
                        if ($sectionThis.data('info-bar-position') && $sectionThis.data('info-bar-position') == 'top') {
                            $bar.addClass('custom-top-position');
                        }
                        if ($sectionThis.data('hide-info-bar') && $sectionThis.data('hide-info-bar') == 'on') {
                            $bar.hide();
                            if ($videoBar ? $videoBar.hide() : false)
                                ;
                        } else {
                            $bar.show();
                            if ($videoBar ? $videoBar.show() : false)
                                ;
                        }
                        $close.off('click').on('click', function(event) {
                            event.stopPropagation();
                            $bar.hide();
                        });
                        $bar.height() > 50 ? $close.show() : $close.hide();
                    },
                    imageLoadComplete: function() {
                        this.contentContainer.removeClass('mfp-tall-images-handler');
                        var $bottomBar = this.content.find('.mfp-bottom-bar');
                        var $scrollContainer = isMobileDevice.any() ? $bottomBar.s123ScrollParent() : $bottomBar;
                        if ($scrollContainer.get(0).scrollHeight > $scrollContainer.outerHeight()) {
                            this.contentContainer.addClass('mfp-tall-images-handler');
                        }
                    },
                    open: function(item) {
                        var mc = new Hammer(this.container.get(0));
                        mc.on('swipeleft', function() {
                            $.magnificPopup.instance.next();
                        });
                        mc.on('swiperight', function() {
                            $.magnificPopup.instance.prev();
                        });
                        $sectionThis.data('hammer-js', mc);
                    },
                    change: function() {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    },
                    close: function(item) {
                        $sectionThis.data('hammer-js').destroy();
                        if (!skipHistoryEntry) {
                            window.history.replaceState('', 'Title', this.mp_currentPageUrl);
                        }
                        setTimeout(function() {
                            $(window).trigger('resize.gallery_handler');
                        }, 100);
                        bootbox.hideAll();
                    }
                }
            });
            gallery_SetImageSize($sectionThis);
            $(document).off('gallery.isotope.handler').on('gallery.isotope.handler', function(event, $category) {
                var $isotopeContainer = $category.find('.isotope-gallery-container');
                if ($isotopeContainer.data('isotope')) {
                    $isotopeContainer.isotope('layout');
                } else {
                    var transitionDuration = $.isNumeric($isotopeContainer.data('isotope-transition')) ? $isotopeContainer.data('isotope-transition') : '0.4s';
                    $isotopeContainer.isotope({
                        itemSelector: '.s123-module-gallery .gallery-item-wrapper',
                        transitionDuration: transitionDuration
                    });
                    $isotopeContainer.on('layoutComplete', function(event) {
                        $(document).trigger('s123.page.ready.refreshAOS');
                    });
                }
            });
            if ($isotopeFilter.length !== 0) {
                var $firstCategory = $isotopeFilter.find('[data-filter]').first();
                var hash = window.location.hash.substring(1);
                if ($isotopeFilter.find('[data-unique-id="' + hash + '"]').length > 0) {
                    $firstCategory = $isotopeFilter.find('[data-unique-id="' + window.location.hash.replace('#', '') + '"]');
                }
                $categories.hide();
                $categories.filter('[data-filter="' + $firstCategory.attr('data-filter') + '"]').show();
                $(document).trigger('gallery.isotope.handler', [$categories.filter('[data-filter="' + $firstCategory.attr('data-filter') + '"]')]);
                $isotopeFilter.find('li').removeClass('active');
                $firstCategory.addClass('active');
                $sectionThis.find('.gallery-show-more-btn').hide();
                $sectionThis.find('.gallery-show-more-btn[data-filter="' + $firstCategory.data('filter') + '"]').show();
            }
            $isotopeFilter.find('[data-filter]').off('click').on('click', function() {
                var filter = $(this).attr('data-filter');
                var $hideCategories = $categories.filter(':not([data-filter="' + filter + '"]):visible');
                var $showCategories = $categories.filter('[data-filter="' + filter + '"]');
                $sectionThis.css({
                    minHeight: $sectionThis.height()
                });
                $hideCategories.stop().fadeOut(200, function() {
                    $showCategories.stop().fadeIn(200, function() {
                        disableEnableInfinityScroll($sectionThis);
                        $sectionThis.css({
                            minHeight: ''
                        });
                        showMoreButton($sectionThis, filter);
                        $(document).trigger('gallery.isotope.handler', [$(this)]);
                    });
                });
                $isotopeFilter.find('[data-filter]').removeClass('active');
                $(this).addClass('active');
                return false;
            });
            if (!IsHomepage() && !IsRichPage()) {
                galleryAddInfinityScroll($sectionThis);
                $sectionThis.find('.s123-infinity-scroll').off('infiniteScroll.loaded').on('infiniteScroll.loaded', function(event, data) {
                    var $this = $(this);
                    var $items = $(data.itemsHtml);
                    $this.find('.isotope-gallery-container').append($items);
                    gallery_SetImageSize($this.find('.isotope-gallery-container').closest('section'));
                    $this.find('.isotope-gallery-container').isotope('appended', $items);
                    window.myLazyLoad.update();
                    if (IsIE11()) {
                        $.each($items, function(index, image) {
                            $(document).trigger('lazyload_enter.image', [$(image)]);
                        });
                    }
                });
                gallery_BrowserBackButtonHandler($isotopeFilter);
            }
            if (IsIE11()) {
                $.each($isotopeContainer.find('img'), function(index, image) {
                    $(image).attr('src', $(image).attr('data-src'));
                });
            }
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
        });
        $(window).off('resize.gallery_handler').on('resize.gallery_handler', function(event) {
            $section.each(function(index) {
                gallery_SetImageSize($(this));
                $(document).trigger('gallery.isotope.handler', [$(this).find('.gallery-category:visible')]);
            });
        });
        $(document).off('lazyload_enter.image').on('lazyload_enter.image', function(event, $img) {
            if ($img.closest('.s123-module-gallery.isotope-gallery').length === 0)
                return;
            var $sectionThis = $img.closest('section');
            var $galleryItemWrapper = $img.closest('.gallery-item-wrapper');
            if ($sectionThis.hasClass('o-c-s')) {
                $galleryItemWrapper.imagesLoaded().progress(function(instance, image) {
                    $(document).trigger('gallery.isotope.handler', [$galleryItemWrapper.closest('.gallery-category')]);
                });
            } else {
                $img.one('load', function() {
                    var dbRatio = parseInt($galleryItemWrapper.data('original-width')) / parseInt($galleryItemWrapper.data('original-height'));
                    $img.addClass('size-tester');
                    var imageWidth = $img.width();
                    var imageHeight = $img.height();
                    var imageRatio = imageWidth / imageHeight;
                    $img.removeClass('size-tester');
                    if (!((Math.abs(dbRatio.toFixed(3) - imageRatio.toFixed(3)).toFixed(3)) <= 0.01)) {
                        $galleryItemWrapper.data('original-width', imageWidth);
                        $galleryItemWrapper.data('original-height', imageHeight);
                        fixImagesOnFly($galleryItemWrapper, imageRatio);
                        if (!fixImagesWithJob) {
                            fixImagesWithJob = true;
                            $.ajax({
                                type: "POST",
                                url: '/versions/' + $('#versionNUM').val() + '/wizard/modules/gallery/recalculateGalleryImages.php',
                                data: {
                                    websiteID: $('#websiteID').val(),
                                    w: $('#w').val()
                                },
                                success: function(data) {}
                            });
                        }
                    }
                });
            }
        });
        function fixImagesOnFly($galleryItemWrapper, imageRatio) {
            $galleryItemWrapper.height(($galleryItemWrapper.width() / imageRatio));
            $(document).trigger('gallery.isotope.handler', [$galleryItemWrapper.closest('.gallery-category')]);
        }
    });
    function showMoreButton($sectionThis, filter) {
        $sectionThis.find('.gallery-show-more-btn').hide();
        $sectionThis.find('.gallery-show-more-btn[data-filter="' + filter + '"]').show();
    }
}
function gallery_BrowserBackButtonHandler($categoriesFilter) {
    var $categories = $categoriesFilter.find('[data-unique-id]');
    $categories.off('click.back_button_handler').on('click.back_button_handler', function(event, flag) {
        event.preventDefault();
        var hash = window.location.hash.substring(1);
        if (hash === $(this).data('unique-id'))
            return;
        if (flag == 'skipHistory')
            return;
        window.history.pushState('forward', null, '#' + $(this).data('unique-id'));
    });
    if (window.history && window.history.pushState) {
        $(window).off('popstate.back_button_handler').on('popstate.back_button_handler', function() {
            var hash = window.location.hash.substring(1);
            if (hash.length === 0) {
                $categories.first().trigger('click', ['skipHistory']);
            } else {
                $categories.filter('[data-unique-id="' + hash + '"]').trigger('click', ['skipHistory']);
            }
        });
    }
}
function galleryAddInfinityScroll($sectionThis) {
    $.each($sectionThis.find('.s123-infinity-scroll'), function(index, container) {
        var $this = $(this);
        var infiniteScroll = new s123InfiniteScroll({
            isMobile: false,
            $container: $this,
            id: $this.data('unique-id'),
            offset: $('footer.global_footer').outerHeight(),
            ajax: {
                type: 'GET',
                url: '/versions/2/wizard/modules/gallery/front/infiniteScroll.php',
                data: {
                    w: $('#w').val(),
                    websiteID: $('#websiteID').val(),
                    uniquePageID: $this.data('module-id'),
                    toolTitle: $this.data('tool-title'),
                    pageUrl: $this.data('page-url'),
                    limit: isMobileDevice.any() ? 25 : $this.data('limit'),
                    initiRecordsAmount: $this.data('limit'),
                    filter: $this.data('filter'),
                    toolStyle: $this.data('tool-style'),
                    tranW: $this.data('language')
                },
                success: function(data) {
                    $this.trigger('infiniteScroll.loaded', [data]);
                }
            }
        });
    });
    disableEnableInfinityScroll($sectionThis);
}
function disableEnableInfinityScroll($sectionThis) {
    $.each($sectionThis.find('.s123-infinity-scroll'), function(index, category) {
        var $this = $(this);
        if (!$this.data('s123InfiniteScroll'))
            return;
        if ($this.is(':visible')) {
            $this.data('s123InfiniteScroll').enable();
        } else {
            $this.data('s123InfiniteScroll').disable();
        }
    });
}
function gallery_DecideNumberOfImageByScreenWidth($sectionThis) {
    var screen = $sectionThis.find('.isotope-gallery-container:visible').width();
    if (screen <= 400) {
        if ($sectionThis.data('layout-customize') && $sectionThis.data('layout-customize').mobile_number_images_in_row) {
            return $sectionThis.data('layout-customize').mobile_number_images_in_row;
        } else {
            return 1;
        }
    }
    if (screen <= 768) {
        return 2;
    }
    if (screen <= 992) {
        if ($sectionThis.data('layout-customize') && $sectionThis.data('layout-customize').number_images_in_row) {
            return $sectionThis.data('layout-customize').number_images_in_row;
        } else {
            return 3;
        }
    }
    if (screen <= 1600) {
        if ($sectionThis.data('layout-customize') && $sectionThis.data('layout-customize').number_images_in_row) {
            return $sectionThis.data('layout-customize').number_images_in_row;
        } else {
            return 3;
        }
    }
    if (screen > 1600) {
        if ($sectionThis.data('layout-customize') && $sectionThis.data('layout-customize').number_images_in_row) {
            return $sectionThis.data('layout-customize').number_images_in_row;
        } else {
            return 4;
        }
    }
}
function gallery_SetImageSize($sectionThis) {
    var imageWidth = Math.floor($sectionThis.find('.isotope-gallery-container:visible').width() / gallery_DecideNumberOfImageByScreenWidth($sectionThis));
    var isOldCustomer = false;
    if ($sectionThis.hasClass('layout-1')) {
        imageWidth = imageWidth - 10;
    }
    $sectionThis.find('.gallery-item-wrapper').each(function(index, itemWrapper) {
        var $this = $(this);
        $this.width(imageWidth);
        if ($.isNumeric($this.data('original-width')) && $.isNumeric($this.data('original-height'))) {
            var aspectRatio = (parseInt($this.data('original-width')) / parseInt($this.data('original-height')));
            var newHeight = (imageWidth / aspectRatio);
            $this.height(newHeight);
        } else {
            isOldCustomer = true;
        }
    });
    galleryImageResize.init({
        section: $sectionThis,
        container: '.isotope-gallery-container',
        attr: 'data-src',
        element: '.gallery-thumb img',
        rowImageNum: 1,
        galleryNum: 1,
        imageWidth: imageWidth,
        calcImageWidth: false,
        magnificPopup: true,
        magnificPopupEle: '.mfp-image',
        magnificAttr: 'data-mfp-src'
    });
    if (isOldCustomer) {
        $sectionThis.addClass('o-c-s');
    }
}
function Gallery_getSocialLinks(url, title) {
    var url = encodeURIComponent(window.location.origin + url);
    var title = encodeURIComponent(title);
    var html = '<div class="gallery-social-links">';
    html += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + title + '" title="Share on Facebook" target="_blank">' + S123.s123IconToSvg.getHtml('facebook', '', '') + '</a>';
    html += '<a href="https://twitter.com/intent/tweet?source=' + url + '&text=' + title + ':%20' + url + '" target="_blank" title="Tweet">' + S123.s123IconToSvg.getHtml('twitter', '', '') + '</a>';
    html += '<a href="https://pinterest.com/pin/create/button/?url=' + url + '&description=' + title + '" target="_blank" title="Pin it">' + S123.s123IconToSvg.getHtml('pinterest', '', '') + '</a>';
    html += '<a href="https://tumblr.com/share/link?url=' + url + '&description=' + title + '" target="_blank" title="tumblr">' + S123.s123IconToSvg.getHtml('tumblr', '', '') + '</a>';
    html += '<a href="mailto:?subject=' + title + '&amp;body=Check out this image ' + url + '" target="_blank" title="Share by Email">' + S123.s123IconToSvg.getHtml('envelope', '', '') + '</a>';
    html += '<a href="https://wa.me/?text=' + title + ' - ' + url + '" target="_blank" title="whatsapp">' + S123.s123IconToSvg.getHtml('whatsapp', '', '') + '</a>';
    html += '<a class="gallery-link-popup" href="javascript:void(0);" data-link="' + url + '" title="link" style="cursor: pointer;">' + S123.s123IconToSvg.getHtml('link', '', '') + '</a>';
    html += '</div>';
    return html;
}
function Gallery_popuplink(link) {
    let html = '';
    html += '<div class="share-copy input-group field">';
    html += '<input type="text" id="copyLinkInput" value="' + decodeURIComponent(link) + '" class="form-control" readonly>';
    html += '<span class="input-group-btn">';
    html += '<button class="btn btn-primary copy-link-btn">' + S123.s123IconToSvg.getHtml('clipboard', '', '') + '</button>';
    html += '</span>'
    html += '</div>';
    $html = $(html);
    $html.find('button.copy-link-btn').off('click').on('click', function() {
        var copyText = $html.find('#copyLinkInput').get(0);
        S123.CopyToClipboard.copy(copyText);
        return false;
    });
    const galleryLinkBox = bootbox.dialog({
        className: 's123-modal gallery-link-bootbox',
        message: $html,
        show: false,
        backdrop: true,
        keyboard: false,
        container: '.mfp-wrap.mfp-module-gallery',
    });
    galleryLinkBox.find('.bootbox-body').off('click').on('click', function(event) {
        event.stopPropagation();
    });
    galleryLinkBox.on('click', '.modal-backdrop', function() {
        event.stopPropagation();
        galleryLinkBox.modal('hide');
    });
    galleryLinkBox.modal('show');
}
function Gallery_getImageMagnificPopupCaption(toolTitle, imageDescription, externalLink, externalLinkText, imagePageURL, title, addSocial, imageURL, buttons) {
    var caption = '<div class="gallery-image-text">';
    if (!title == '' && !imageDescription == '') {
        caption += title + ' - ' + imageDescription;
    } else if (!title == '') {
        caption += title;
    } else if (!imageDescription == '') {
        caption += imageDescription;
    } else if (!addSocial && buttons.length == 0) {
        caption += '&nbsp;';
    }
    caption += '</div>';
    if (!externalLink == '') {
        caption += '<a class="gallery-image-external-link" target="_blank" href="' + externalLink + '">';
        caption += !externalLinkText == '' ? externalLinkText : externalLink;
        caption += '</a>';
    }
    if (addSocial) {
        if (title === '') {
            socialShareTitle = toolTitle;
        } else {
            socialShareTitle = title + ' - ' + toolTitle;
        }
        caption += Gallery_getSocialLinks(imagePageURL, socialShareTitle);
    }
    var printImageTitle = title === '' ? translations.image : title;
    caption += Gallery_getDownloadPrintBtns(imageURL, buttons, printImageTitle);
    return caption;
}
function Gallery_getDownloadPrintBtns(imageURL, buttons, title) {
    if (!buttons || buttons.length == 0)
        return '';
    var html = '<div class="gallery-download-print-btns">';
    if (buttons.includes('download')) {
        html += '<a href="/versions/' + $('#versionNUM').val() + '/wizard/modules/fileManager/downloadDigitalFile.php?' + ($('#w').val().length > 0 ? 'w=' + $('#websiteID').val() + '&' : '') + 'url=' + encodeURIComponent(imageURL.replace('2000_', 'normal_')) + '">' + S123.s123IconToSvg.getHtml('download', '', '') + '</a>';
    }
    if (buttons.includes('print')) {
        html += '<a href="#" onclick="Gallery_printImg(\'' + imageURL + '\',\'' + title + '\')" title="' + translations.print + '">' + S123.s123IconToSvg.getHtml('print', '', '') + '</a>';
    }
    html += '</div>';
    return html;
}
function Gallery_getImgSourcetoPrint(url, title) {
    return "<html><head><script>function step1(){\n" + "setTimeout('step2()', 10);}\n" + "function step2(){window.print();window.close()}\n" + "</scri" + "pt><title>" + title + "</title></head><body onload='step1()'>\n" + "<img src='" + url + "' /></body></html>";
}
function Gallery_printImg(url, title) {
    var printImg = window.open(document.URL, "_new");
    printImg.document.open();
    printImg.document.write(Gallery_getImgSourcetoPrint(url, title));
    printImg.document.close();
}
var galleryImageResize = function() {
    var _ = {
        dpr: 2,
        coverImageScale: 1,
        rowImageNum: 1,
        imageWidth: false,
        customSizes: {
            '100': {
                width: 0,
                name: 100
            },
            '200': {
                width: 200,
                name: 400
            },
            '400': {
                width: 400,
                name: 800
            },
            '600': {
                width: 600,
                name: 800
            },
            '800': {
                width: 0,
                name: 800
            },
            '1200': {
                width: 1200,
                name: 2000
            },
            '1600': {
                width: 1600,
                name: 2000
            },
            '2000': {
                width: 0,
                name: 2000
            },
        }
    };
    _.init = (settings)=>{
        _.settings = settings;
        _.resize();
    }
    _.resize = ()=>{
        if ($(_.settings.container).length == 0)
            return;
        _.coverImageScale = [4, 5, 8].includes(_.settings.galleryNum) ? 1.5 : 1;
        if (_.settings.calcImageWidth) {
            _.rowImageNum = _.numberOfImagesInRow(_.settings.container);
            _.imageWidth = Math.floor(_.settings.section.find(_.settings.container).width() / _.rowImageNum);
        } else {
            _.imageWidth = _.settings.imageWidth;
        }
        _.settings.section.find(_.settings.element).each(function(index) {
            const $this = $(this);
            _.setSize($this);
            if (_.settings.magnificPopup) {
                _.resizePopupImage($this.closest(_.settings.magnificPopupEle));
            }
        });
    }
    _.isRetina = ()=>{
        return window.devicePixelRatio >= _.dpr;
    }
    _.getSize = ($this,magnificSize)=>{
        let width = !_.imageWidth ? $this.width() : _.imageWidth;
        if (magnificSize)
            width = magnificSize;
        const calcWidth = (_.isRetina() ? (width * _.coverImageScale) * _.dpr : width * _.coverImageScale);
        if (calcWidth <= 100) {
            return _.customSizes['100'];
        } else if (calcWidth > 100 && calcWidth <= 200) {
            return _.customSizes['200'];
        } else if (calcWidth > 200 && calcWidth <= 400) {
            return _.customSizes['400']
        } else if (calcWidth > 400 && calcWidth <= 600) {
            return _.customSizes['600']
        } else if (calcWidth > 600 && calcWidth <= 800) {
            return _.customSizes['800']
        } else if (calcWidth > 800 && calcWidth <= 1200) {
            return _.customSizes['1200']
        } else if (calcWidth > 1200 && calcWidth <= 1600) {
            return _.customSizes['1600']
        } else {
            return _.customSizes['2000'];
        }
    }
    _.setSize = ($this)=>{
        if (!$this.attr(_.settings.attr))
            return;
        if ($this.attr('data-img-resize') && $this.attr('data-img-resize') == 'true')
            return;
        let attribute = '';
        const newSize = _.getSize($this, 0);
        attribute = newSize['width'] != 0 ? $this.attr(_.settings.attr) + '?width=' + newSize['width'] : $this.attr(_.settings.attr);
        attribute = newSize['name'] ? attribute.replace('2000_', `${newSize['name']}_`) : attribute;
        $this.attr(_.settings.attr, attribute);
        $this.attr('data-img-resize', true);
    }
    _.setPopupImageSize = ($this,newWidth)=>{
        let attribute = '';
        const newSize = _.getSize($this, newWidth);
        attribute = newSize['width'] != 0 ? $this.attr(_.settings.magnificAttr) + '?width=' + newSize['width'] : $this.attr(_.settings.magnificAttr);
        attribute = newSize['name'] ? attribute.replace('2000_', `${newSize['name']}_`) : attribute;
        $this.attr(_.settings.magnificAttr, attribute);
        $this.attr('data-img-resize', true);
    }
    _.resizePopupImage = ($this)=>{
        if (!$this.attr(_.settings.magnificAttr))
            return;
        if ($this.attr('data-img-resize') && $this.attr('data-img-resize') == 'true')
            return;
        if ($this.attr('data-original-width') > $(window).width()) {
            _.setPopupImageSize($this, $(window).width());
        } else if ($this.attr('data-original-height') > $(window).height()) {
            _.setPopupImageSize($this, $(window).height());
        } else {
            _.setPopupImageSize($this, $this.attr('data-original-width'));
        }
    }
    _.numberOfImagesInRow = ()=>{
        if (_.settings.section.find(_.settings.container).length == 0)
            return;
        let rowNumber = _.settings.section.find(_.settings.container).data('row-number');
        // example 'in-row-4 mobile-in-row-2'
        rowNumber = rowNumber.split(' ');
        rowNumber[0] = rowNumber[0].replace('in-row-', '');
        rowNumber[1] = rowNumber[1].replace('mobile-in-row-', '');
        return isMobileDevice.any() ? rowNumber[1] : rowNumber[0];
    }
    _.isWidthSet = (url,field)=>{
        if (url.indexOf('?' + field + '=') != -1) {
            return true;
        } else if (url.indexOf('&' + field + '=') != -1) {
            return true;
        }
        return false;
    }
    return _;
}();
jQuery(function($) {
    GalleryModuleInitialize_Layout4();
});
function GalleryModuleInitialize_Layout4() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-4:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $categoriesFilter = $sectionThis.find('.filter li');
            var $categories = $sectionThis.find('.gallery-category');
            var $images = $sectionThis.find('.gallery-image');
            var $firstCategory = $categoriesFilter.first();
            var $galleryItem = $sectionThis.find('.gallery-image');
            var $videoBar = '';
            var hash = window.location.hash.substring(1);
            if ($categoriesFilter.filter('[data-unique-id="' + hash + '"]').length > 0) {
                $firstCategory = $categoriesFilter.filter('[data-unique-id="' + hash + '"]');
            }
            $sectionThis.magnificPopup({
                fixedContentPos: true,
                mainClass: 'mfp-module-gallery disable-context-menu',
                delegate: '.mfp-image:visible',
                // Categories Filter
                closeOnContentClick: true,
                closeBtnInside: false,
                tLoading: translations.loading,
                // Text that is displayed during loading
                gallery: {
                    enabled: true,
                    tClose: translations.closeEsc,
                    // Alt text on close button
                    tPrev: translations.previousLeftArrowKey,
                    // Alt text on left arrow
                    tNext: translations.NextRightArrowKey,
                    // Alt text on right arrow
                    tCounter: '%curr% ' + translations.of + ' %total%'// Markup for "1 of 7" counter
                },
                image: {
                    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar fancy-scrollbar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<span class="mfp-caption-close">' + S123.s123IconToSvg.getHtml('times', '', '') + '</span>' + '</div>' + '</div>',
                    titleSrc: function(item) {
                        if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                            item.img.get(0).oncontextmenu = function() {
                                return false;
                            }
                        }
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        return Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                    },
                    tError: translations.imageCouldNotLoaded // Error message when image could not be loaded
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="video-bottom-bar">' + '<div class="mfp-title" style="position: absolute; padding-top: 5px;"></div>' + '</div>' + '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        youtu: {
                            index: 'youtu.be/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: function(url) {
                                var matches = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                if (!matches || !matches[5])
                                    return null;
                                return matches[5];
                            },
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        site123: {
                            index: $GLOBALS['cdn-user-videos-files'],
                            id: function(url) {
                                if (isMobileDevice.iOS())
                                    url += '&deviceType=ios';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        },
                        site123Processing: {
                            index: '/files/images/video-processing.png',
                            id: function(url) {
                                if (isMobileDevice.any())
                                    url += '&autoplay=0';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        }
                    }
                },
                callbacks: {
                    elementParse: function(item) {
                        if (item.el.data('type') === 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                    markupParse: function(template, values, item) {
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        values.title = Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                        setTimeout(function() {
                            $('.mfp-title').off('click').click(function(event) {
                                event.stopPropagation();
                            });
                            $('.mfp-content .gallery-link-popup').on('click', function(event) {
                                Gallery_popuplink($(this).data('link'));
                            });
                        }, 500);
                        if (!this.mp_currentPageUrl)
                            this.mp_currentPageUrl = window.location.href;
                        window.history.replaceState(this.mp_currentPageUrl, 'Title', item.el.data('image-page-url'));
                        $videoBar = template.find('.video-bottom-bar');
                    },
                    updateStatus: function(data) {
                        var $bar = $('.mfp-bottom-bar');
                        var $close = $('.mfp-caption-close');
                        if ($sectionThis.data('info-bar-position') && $sectionThis.data('info-bar-position') == 'top') {
                            $bar.addClass('custom-top-position');
                        }
                        if ($sectionThis.data('hide-info-bar') && $sectionThis.data('hide-info-bar') == 'on') {
                            $bar.hide();
                            if ($videoBar ? $videoBar.hide() : false)
                                ;
                        } else {
                            $bar.show();
                            if ($videoBar ? $videoBar.show() : false)
                                ;
                        }
                        $close.off('click').on('click', function(event) {
                            event.stopPropagation();
                            $bar.hide();
                        });
                        $bar.height() > 50 ? $close.show() : $close.hide();
                    },
                    imageLoadComplete: function() {
                        this.contentContainer.removeClass('mfp-tall-images-handler');
                        var $bottomBar = this.content.find('.mfp-bottom-bar');
                        var $scrollContainer = isMobileDevice.any() ? $bottomBar.s123ScrollParent() : $bottomBar;
                        if ($scrollContainer.get(0).scrollHeight > $scrollContainer.outerHeight()) {
                            this.contentContainer.addClass('mfp-tall-images-handler');
                        }
                    },
                    open: function(item) {
                        var mc = new Hammer(this.container.get(0));
                        mc.on('swipeleft', function() {
                            $.magnificPopup.instance.next();
                        });
                        mc.on('swiperight', function() {
                            $.magnificPopup.instance.prev();
                        });
                        $sectionThis.data('hammer-js', mc);
                    },
                    change: function() {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    },
                    close: function(item) {
                        $sectionThis.data('hammer-js').destroy();
                        window.history.replaceState('', 'Title', this.mp_currentPageUrl);
                        bootbox.hideAll();
                    }
                }
            });
            $categoriesFilter.off('click').on('click', function(event, pageLoad) {
                event.preventDefault();
                var $this = $(this);
                var filter = $this.data('filter');
                var $hideCategories = $categories.filter(':not([data-filter="' + filter + '"]):visible');
                var $showCategories = $categories.filter('[data-filter="' + filter + '"]');
                if ($showCategories.length === 0 || $hideCategories.length === 0)
                    return;
                $categoriesFilter.removeClass('active');
                $this.addClass('active');
                $sectionThis.css({
                    minHeight: $sectionThis.height()
                });
                $hideCategories.stop().fadeOut(200, function() {
                    $showCategories.stop().fadeIn(200, function() {
                        $sectionThis.css({
                            minHeight: ''
                        });
                        showMoreButton($sectionThis, filter);
                        disableEnableInfinityScroll($sectionThis);
                        $(window).trigger('scroll');
                    });
                });
                if (pageLoad) {
                    showMoreButton($sectionThis, filter);
                }
            });
            if (!IsHomepage() && !IsRichPage()) {
                galleryAddInfinityScroll($sectionThis);
                $categories.off('infiniteScroll.loaded').on('infiniteScroll.loaded', function(event, data) {
                    var $this = $(this);
                    var $items = $(data.itemsHtml);
                    $this.append($items);
                    window.myLazyLoad.update();
                });
                gallery_BrowserBackButtonHandler($sectionThis.find('.filter'));
            }
            $firstCategory.trigger('click', [true]);
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
            galleryImageResize.init({
                section: $sectionThis,
                container: '.gallery-category',
                attr: 'data-bg',
                element: '.gallery-image a',
                rowImageNum: 1,
                galleryNum: 4,
                imageWidth: false,
                calcImageWidth: true,
                magnificPopup: true,
                magnificPopupEle: '.mfp-image',
                magnificAttr: 'data-mfp-src'
            });
        });
    });
    function showMoreButton($sectionThis, filter) {
        $sectionThis.find('.gallery-show-more-btn').hide();
        $sectionThis.find('.gallery-show-more-btn[data-filter="' + filter + '"]').show();
        $(document).trigger('s123.page.ready.refreshAOS');
    }
}
jQuery(function($) {
    GalleryModuleInitialize_Layout5();
});
function GalleryModuleInitialize_Layout5() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-5:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $categoriesFilter = $sectionThis.find('.filter li');
            var $categories = $sectionThis.find('.gallery-category');
            var $images = $sectionThis.find('.gallery-image');
            var $firstCategory = $categoriesFilter.first();
            var $galleryItem = $sectionThis.find('.gallery-image-box');
            var $videoBar = '';
            var hash = window.location.hash.substring(1);
            if ($categoriesFilter.filter('[data-unique-id="' + hash + '"]').length > 0) {
                $firstCategory = $categoriesFilter.filter('[data-unique-id="' + hash + '"]');
            }
            $sectionThis.magnificPopup({
                fixedContentPos: true,
                mainClass: 'mfp-module-gallery disable-context-menu',
                delegate: '.mfp-image:visible',
                // Categories Filter
                closeOnContentClick: true,
                closeBtnInside: false,
                tLoading: translations.loading,
                // Text that is displayed during loading
                gallery: {
                    enabled: true,
                    tClose: translations.closeEsc,
                    // Alt text on close button
                    tPrev: translations.previousLeftArrowKey,
                    // Alt text on left arrow
                    tNext: translations.NextRightArrowKey,
                    // Alt text on right arrow
                    tCounter: '%curr% ' + translations.of + ' %total%'// Markup for "1 of 7" counter
                },
                image: {
                    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar fancy-scrollbar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<span class="mfp-caption-close">' + S123.s123IconToSvg.getHtml('times', '', '') + '</span>' + '</div>' + '</div>',
                    titleSrc: function(item) {
                        if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                            item.img.get(0).oncontextmenu = function() {
                                return false;
                            }
                        }
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        return Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                    },
                    tError: translations.imageCouldNotLoaded // Error message when image could not be loaded
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="video-bottom-bar">' + '<div class="mfp-title" style="position: absolute; padding-top: 5px;"></div>' + '</div>' + '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        youtu: {
                            index: 'youtu.be/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: function(url) {
                                var matches = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                if (!matches || !matches[5])
                                    return null;
                                return matches[5];
                            },
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        site123: {
                            index: $GLOBALS['cdn-user-videos-files'],
                            id: function(url) {
                                if (isMobileDevice.iOS())
                                    url += '&deviceType=ios';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        },
                        site123Processing: {
                            index: '/files/images/video-processing.png',
                            id: function(url) {
                                if (isMobileDevice.any())
                                    url += '&autoplay=0';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        }
                    }
                },
                callbacks: {
                    elementParse: function(item) {
                        if (item.el.data('type') === 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                    markupParse: function(template, values, item) {
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        values.title = Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                        setTimeout(function() {
                            $('.mfp-title').off('click').click(function(event) {
                                event.stopPropagation();
                            });
                            $('.mfp-content .gallery-link-popup').on('click', function(event) {
                                Gallery_popuplink($(this).data('link'));
                            });
                        }, 500);
                        if (!this.mp_currentPageUrl)
                            this.mp_currentPageUrl = window.location.href;
                        window.history.replaceState(this.mp_currentPageUrl, 'Title', item.el.data('image-page-url'));
                        $videoBar = template.find('.video-bottom-bar');
                    },
                    updateStatus: function(data) {
                        var $bar = $('.mfp-bottom-bar');
                        var $close = $('.mfp-caption-close');
                        if ($sectionThis.data('info-bar-position') && $sectionThis.data('info-bar-position') == 'top') {
                            $bar.addClass('custom-top-position');
                        }
                        if ($sectionThis.data('hide-info-bar') && $sectionThis.data('hide-info-bar') == 'on') {
                            $bar.hide();
                            if ($videoBar ? $videoBar.hide() : false)
                                ;
                        } else {
                            $bar.show();
                            if ($videoBar ? $videoBar.show() : false)
                                ;
                        }
                        $close.off('click').on('click', function(event) {
                            event.stopPropagation();
                            $bar.hide();
                        });
                        $bar.height() > 50 ? $close.show() : $close.hide();
                    },
                    imageLoadComplete: function() {
                        this.contentContainer.removeClass('mfp-tall-images-handler');
                        var $bottomBar = this.content.find('.mfp-bottom-bar');
                        var $scrollContainer = isMobileDevice.any() ? $bottomBar.s123ScrollParent() : $bottomBar;
                        if ($scrollContainer.get(0).scrollHeight > $scrollContainer.outerHeight()) {
                            this.contentContainer.addClass('mfp-tall-images-handler');
                        }
                    },
                    open: function(item) {
                        var mc = new Hammer(this.container.get(0));
                        mc.on('swipeleft', function() {
                            $.magnificPopup.instance.next();
                        });
                        mc.on('swiperight', function() {
                            $.magnificPopup.instance.prev();
                        });
                        $sectionThis.data('hammer-js', mc);
                    },
                    change: function() {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    },
                    close: function(item) {
                        $sectionThis.data('hammer-js').destroy();
                        window.history.replaceState('', 'Title', this.mp_currentPageUrl);
                        bootbox.hideAll();
                    }
                }
            });
            $categoriesFilter.off('click').on('click', function(event, pageLoad) {
                event.preventDefault();
                var $this = $(this);
                var filter = $this.data('filter');
                var $hideCategories = $categories.filter(':not([data-filter="' + filter + '"]):visible');
                var $showCategories = $categories.filter('[data-filter="' + filter + '"]');
                if ($showCategories.length === 0 || $hideCategories.length === 0)
                    return;
                $categoriesFilter.removeClass('active');
                $this.addClass('active');
                $sectionThis.css({
                    minHeight: $sectionThis.height()
                });
                $hideCategories.stop().fadeOut(200, function() {
                    $showCategories.stop().fadeIn(200, function() {
                        $sectionThis.css({
                            minHeight: ''
                        });
                        showMoreButton($sectionThis, filter);
                        disableEnableInfinityScroll($sectionThis);
                        $(window).trigger('scroll');
                    });
                });
                if (pageLoad) {
                    showMoreButton($sectionThis, filter);
                }
            });
            if (!IsHomepage() && !IsRichPage()) {
                galleryAddInfinityScroll($sectionThis);
                $categories.off('infiniteScroll.loaded').on('infiniteScroll.loaded', function(event, data) {
                    var $this = $(this);
                    var $items = $(data.itemsHtml);
                    $this.find('.gallery-images-container').append($items);
                    window.myLazyLoad.update();
                });
                gallery_BrowserBackButtonHandler($sectionThis.find('.filter'));
            }
            $firstCategory.trigger('click', [true]);
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
            galleryImageResize.init({
                section: $sectionThis,
                container: '.gallery-images-container',
                attr: 'data-bg',
                element: '.gallery-image a',
                rowImageNum: 1,
                galleryNum: 5,
                imageWidth: false,
                calcImageWidth: true,
                magnificPopup: true,
                magnificPopupEle: '.mfp-image',
                magnificAttr: 'data-mfp-src'
            });
        });
    });
    function showMoreButton($sectionThis, filter) {
        $sectionThis.find('.gallery-show-more-btn').hide();
        $sectionThis.find('.gallery-show-more-btn[data-filter="' + filter + '"]').show();
        $(document).trigger('s123.page.ready.refreshAOS');
    }
}
jQuery(function($) {
    GalleryModuleInitialize_Layout6();
});
function GalleryModuleInitialize_Layout6() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-6:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $isotopeContainer = $sectionThis.find('.isotope-gallery-container');
            var $categories = $sectionThis.find('.filter li');
            var $flickityContainer = $sectionThis.find('.gallery-images-container');
            var layout_customize = $sectionThis.find('.layout-customize').length > 0 ? tryParseJSON($sectionThis.find('.layout-customize').val()) : {};
            var flickitySettings = {
                imagesLoaded: true,
                initialIndex: 1,
                lazyLoad: 2
            };
            var $galleryItem = $sectionThis.find('.gallery-image');
            if (layout_customize && layout_customize.display_type === 'carousel') {
                flickitySettings.friction = 0.28;
                var animationOffset = flickitySettings.friction;
                flickitySettings.wrapAround = true;
                flickitySettings.pauseAutoPlayOnHover = true;
                flickitySettings.autoPlay = layout_customize.autoPlay ? parseFloat(layout_customize.carouselInterval) : false;
                if ($.isNumeric(flickitySettings.autoPlay)) {
                    if (flickitySettings.autoPlay === 0)
                        flickitySettings.autoPlay = animationOffset;
                    flickitySettings.autoPlay = (flickitySettings.autoPlay + animationOffset) * 1000;
                }
            }
            $flickityContainer.flickity(flickitySettings);
            $isotopeContainer.isotope({
                itemSelector: '.gallery-images-container, .gallery-image-caption'
            });
            $flickityContainer.on('settle.flickity', function() {
                var $this = $(this);
                var flkty = Flickity.data(this);
                var caption = Gallery_getImageMagnificPopupCaption($(flkty.selectedElement).data('tool-title'), $(flkty.selectedElement).data('image-description'), $(flkty.selectedElement).data('image-link'), $(flkty.selectedElement).data('image-link-text'), $(flkty.selectedElement).data('image-page-url'), $(flkty.selectedElement).attr('title'), false, '', []);
                $this.next('.gallery-image-caption').html(caption);
                $sectionThis.find('.gallery-image:not(.is-selected) iframe').each(function() {
                    // YouTube/Vimeo
                    switch ($(this).data('player')) {
                    case 'youtube':
                        if (this.src.indexOf("youtube.com") > -1) {
                            this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                        }
                        break;
                    case 'vimeo':
                        if (this.src.indexOf("vimeo.com") > -1) {
                            var player = new Vimeo.Player(this);
                            player.pause();
                        }
                        break;
                    case 'site123':
                        if (this.contentWindow.player)
                            this.contentWindow.player.pause();
                        break;
                    }
                });
                $isotopeContainer.isotope('layout');
            });
            $isotopeContainer.on('arrangeComplete', function(event, filteredItems) {
                $flickityContainer.flickity('resize');
            });
            $categories.off('click').on('click', function() {
                var $this = $(this);
                $isotopeContainer.isotope({
                    filter: function() {
                        return gallery_Filter_Layout6($(this), $this.data('filter'));
                    }
                });
                $categories.removeClass('active');
                $this.addClass('active');
                $flickityContainer.flickity('resize');
                return false;
            });
            $categories.first().trigger('click');
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
        });
    });
}
function gallery_Filter_Layout6($item, filter) {
    return $item.attr('data-filter') == filter;
}
jQuery(function($) {
    GalleryModuleInitialize_Layout7();
});
function GalleryModuleInitialize_Layout7() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-7:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $isotopeContainer = $sectionThis.find('.isotope-gallery-container');
            var $categories = $sectionThis.find('.filter li');
            var $flickityContainer = $sectionThis.find('.gallery-images-container');
            var layout_customize = $sectionThis.find('.layout-customize').length > 0 ? tryParseJSON($sectionThis.find('.layout-customize').val()) : {};
            var flickitySettings = {
                imagesLoaded: true,
                initialIndex: 1,
                lazyLoad: 2
            };
            var $galleryItem = $sectionThis.find('.g-i');
            if (layout_customize && layout_customize.display_type === 'carousel') {
                flickitySettings.friction = 0.28;
                var animationOffset = flickitySettings.friction;
                flickitySettings.wrapAround = true;
                flickitySettings.pauseAutoPlayOnHover = true;
                flickitySettings.autoPlay = layout_customize.autoPlay ? parseFloat(layout_customize.carouselInterval) : false;
                if ($.isNumeric(flickitySettings.autoPlay)) {
                    if (flickitySettings.autoPlay === 0)
                        flickitySettings.autoPlay = animationOffset;
                    flickitySettings.autoPlay = (flickitySettings.autoPlay + animationOffset) * 1000;
                }
            }
            $flickityContainer.flickity(flickitySettings);
            $isotopeContainer.isotope({
                itemSelector: '.gallery-images-container, .gallery-image-caption'
            });
            $flickityContainer.on('settle.flickity', function() {
                var $this = $(this);
                var flkty = Flickity.data(this);
                var caption = Gallery_getImageMagnificPopupCaption($(flkty.selectedElement).data('tool-title'), $(flkty.selectedElement).data('image-description'), $(flkty.selectedElement).data('image-link'), $(flkty.selectedElement).data('image-link-text'), $(flkty.selectedElement).data('image-page-url'), $(flkty.selectedElement).attr('title'), false, '', []);
                $this.next('.gallery-image-caption').html(caption);
                $sectionThis.find('.gallery-video-container:not(.is-selected) iframe').each(function() {
                    // YouTube/Vimeo
                    switch ($(this).data('player')) {
                    case 'youtube':
                        if (this.src.indexOf("youtube.com") > -1) {
                            this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                        }
                        break;
                    case 'vimeo':
                        if (this.src.indexOf("vimeo.com") > -1) {
                            var player = new Vimeo.Player(this);
                            player.pause();
                        }
                        break;
                    case 'site123':
                        if (this.contentWindow.player)
                            this.contentWindow.player.pause();
                        break;
                    }
                });
                $isotopeContainer.isotope('layout');
            });
            $isotopeContainer.on('arrangeComplete', function(event, filteredItems) {
                $flickityContainer.flickity('resize');
            });
            $categories.off('click').on('click', function() {
                var $this = $(this);
                $isotopeContainer.isotope({
                    filter: function() {
                        return gallery_Filter_Layout7($(this), $this.data('filter'));
                    }
                });
                $categories.removeClass('active');
                $this.addClass('active');
                $flickityContainer.flickity('resize');
                return false;
            });
            $categories.first().trigger('click');
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
        });
    });
}
function gallery_Filter_Layout7($item, filter) {
    return $item.attr('data-filter') == filter;
}
jQuery(function($) {
    GalleryModuleInitialize_Layout8();
});
function GalleryModuleInitialize_Layout8() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-8:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $categoriesFilter = $sectionThis.find('.filter li');
            var $categories = $sectionThis.find('.gallery-category');
            var $images = $sectionThis.find('.gallery-image');
            var $firstCategory = $categoriesFilter.first();
            var $galleryItem = $sectionThis.find('.gallery-image-box');
            var $videoBar = '';
            var hash = window.location.hash.substring(1);
            if ($categoriesFilter.filter('[data-unique-id="' + hash + '"]').length > 0) {
                $firstCategory = $categoriesFilter.filter('[data-unique-id="' + hash + '"]');
            }
            $sectionThis.magnificPopup({
                fixedContentPos: true,
                mainClass: 'mfp-module-gallery disable-context-menu',
                delegate: '.mfp-image:visible',
                // Categories Filter
                closeOnContentClick: true,
                closeBtnInside: false,
                tLoading: translations.loading,
                // Text that is displayed during loading
                gallery: {
                    enabled: true,
                    tClose: translations.closeEsc,
                    // Alt text on close button
                    tPrev: translations.previousLeftArrowKey,
                    // Alt text on left arrow
                    tNext: translations.NextRightArrowKey,
                    // Alt text on right arrow
                    tCounter: '%curr% ' + translations.of + ' %total%'// Markup for "1 of 7" counter
                },
                image: {
                    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar fancy-scrollbar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<span class="mfp-caption-close">' + S123.s123IconToSvg.getHtml('times', '', '') + '</span>' + '</div>' + '</div>',
                    titleSrc: function(item) {
                        if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                            item.img.get(0).oncontextmenu = function() {
                                return false;
                            }
                        }
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        return Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                    },
                    tError: translations.imageCouldNotLoaded // Error message when image could not be loaded
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="video-bottom-bar">' + '<div class="mfp-title" style="position: absolute; padding-top: 5px;"></div>' + '</div>' + '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        youtu: {
                            index: 'youtu.be/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: function(url) {
                                var matches = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                if (!matches || !matches[5])
                                    return null;
                                return matches[5];
                            },
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        site123: {
                            index: $GLOBALS['cdn-user-videos-files'],
                            id: function(url) {
                                if (isMobileDevice.iOS())
                                    url += '&deviceType=ios';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        },
                        site123Processing: {
                            index: '/files/images/video-processing.png',
                            id: function(url) {
                                if (isMobileDevice.any())
                                    url += '&autoplay=0';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        }
                    }
                },
                callbacks: {
                    elementParse: function(item) {
                        if (item.el.data('type') === 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                    markupParse: function(template, values, item) {
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        values.title = Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                        setTimeout(function() {
                            $('.mfp-title').off('click').click(function(event) {
                                event.stopPropagation();
                            });
                            $('.mfp-content .gallery-link-popup').on('click', function(event) {
                                Gallery_popuplink($(this).data('link'));
                            });
                        }, 500);
                        if (!this.mp_currentPageUrl)
                            this.mp_currentPageUrl = window.location.href;
                        window.history.replaceState(this.mp_currentPageUrl, 'Title', item.el.data('image-page-url'));
                        $videoBar = template.find('.video-bottom-bar');
                    },
                    updateStatus: function(data) {
                        var $bar = $('.mfp-bottom-bar');
                        var $close = $('.mfp-caption-close');
                        if ($sectionThis.data('info-bar-position') && $sectionThis.data('info-bar-position') == 'top') {
                            $bar.addClass('custom-top-position');
                        }
                        if ($sectionThis.data('hide-info-bar') && $sectionThis.data('hide-info-bar') == 'on') {
                            $bar.hide();
                            if ($videoBar ? $videoBar.hide() : false)
                                ;
                        } else {
                            $bar.show();
                            if ($videoBar ? $videoBar.show() : false)
                                ;
                        }
                        $close.off('click').on('click', function(event) {
                            event.stopPropagation();
                            $bar.hide();
                        });
                        $bar.height() > 50 ? $close.show() : $close.hide();
                    },
                    imageLoadComplete: function() {
                        this.contentContainer.removeClass('mfp-tall-images-handler');
                        var $bottomBar = this.content.find('.mfp-bottom-bar');
                        var $scrollContainer = isMobileDevice.any() ? $bottomBar.s123ScrollParent() : $bottomBar;
                        if ($scrollContainer.get(0).scrollHeight > $scrollContainer.outerHeight()) {
                            this.contentContainer.addClass('mfp-tall-images-handler');
                        }
                    },
                    open: function(item) {
                        var mc = new Hammer(this.container.get(0));
                        mc.on('swipeleft', function() {
                            $.magnificPopup.instance.next();
                        });
                        mc.on('swiperight', function() {
                            $.magnificPopup.instance.prev();
                        });
                        $sectionThis.data('hammer-js', mc);
                    },
                    change: function() {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    },
                    close: function(item) {
                        $sectionThis.data('hammer-js').destroy();
                        window.history.replaceState('', 'Title', this.mp_currentPageUrl);
                        bootbox.hideAll();
                    }
                }
            });
            $categoriesFilter.off('click').on('click', function(event, pageLoad) {
                event.preventDefault();
                var $this = $(this);
                var filter = $this.data('filter');
                var $hideCategories = $categories.filter(':not([data-filter="' + filter + '"]):visible');
                var $showCategories = $categories.filter('[data-filter="' + filter + '"]');
                if ($showCategories.length === 0 || $hideCategories.length === 0)
                    return;
                $categoriesFilter.removeClass('active');
                $this.addClass('active');
                $sectionThis.css({
                    minHeight: $sectionThis.height()
                });
                $hideCategories.stop().fadeOut(200, function() {
                    $showCategories.stop().fadeIn(200, function() {
                        $sectionThis.css({
                            minHeight: ''
                        });
                        showMoreButton($sectionThis, filter);
                        disableEnableInfinityScroll($sectionThis);
                        $(window).trigger('scroll');
                    });
                });
                if (pageLoad) {
                    showMoreButton($sectionThis, filter);
                }
            });
            if (!IsHomepage() && !IsRichPage()) {
                galleryAddInfinityScroll($sectionThis);
                $categories.off('infiniteScroll.loaded').on('infiniteScroll.loaded', function(event, data) {
                    var $this = $(this);
                    var $items = $(data.itemsHtml);
                    $this.find('.gallery-images-container').append($items);
                    window.myLazyLoad.update();
                });
                gallery_BrowserBackButtonHandler($sectionThis.find('.filter'));
            }
            $firstCategory.trigger('click', [true]);
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
            galleryImageResize.init({
                section: $sectionThis,
                container: '.gallery-images-container',
                attr: 'data-bg',
                element: '.gallery-image a',
                rowImageNum: 1,
                galleryNum: 8,
                imageWidth: false,
                calcImageWidth: true,
                magnificPopup: true,
                magnificPopupEle: '.mfp-image',
                magnificAttr: 'data-mfp-src'
            });
        });
    });
    function showMoreButton($sectionThis, filter) {
        $sectionThis.find('.gallery-show-more-btn').hide();
        $sectionThis.find('.gallery-show-more-btn[data-filter="' + filter + '"]').show();
        $(document).trigger('s123.page.ready.refreshAOS');
    }
}
jQuery(function($) {
    GalleryModuleInitialize_Layout9();
});
function GalleryModuleInitialize_Layout9() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-gallery.layout-9:not(.s123-module-videos)');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $categoriesFilter = $sectionThis.find('.filter li');
            var $categories = $sectionThis.find('.gallery-category');
            var $firstCategory = $categoriesFilter.first();
            var $galleryItem = $sectionThis.find('.grid-item');
            var $videoBar = '';
            var hash = window.location.hash.substring(1);
            if ($categoriesFilter.filter('[data-unique-id="' + hash + '"]').length > 0) {
                $firstCategory = $categoriesFilter.filter('[data-unique-id="' + hash + '"]');
            }
            $sectionThis.magnificPopup({
                fixedContentPos: true,
                mainClass: 'mfp-module-gallery disable-context-menu',
                delegate: '.mfp-image:visible',
                // Categories Filter
                closeOnContentClick: true,
                closeBtnInside: false,
                tLoading: translations.loading,
                // Text that is displayed during loading
                gallery: {
                    enabled: true,
                    tClose: translations.closeEsc,
                    // Alt text on close button
                    tPrev: translations.previousLeftArrowKey,
                    // Alt text on left arrow
                    tNext: translations.NextRightArrowKey,
                    // Alt text on right arrow
                    tCounter: '%curr% ' + translations.of + ' %total%'// Markup for "1 of 7" counter
                },
                image: {
                    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar fancy-scrollbar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<span class="mfp-caption-close">' + S123.s123IconToSvg.getHtml('times', '', '') + '</span>' + '</div>' + '</div>',
                    titleSrc: function(item) {
                        if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                            item.img.get(0).oncontextmenu = function() {
                                return false;
                            }
                        }
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        return Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.data('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                    },
                    tError: translations.imageCouldNotLoaded // Error message when image could not be loaded
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="video-bottom-bar">' + '<div class="mfp-title" style="position: absolute; padding-top: 5px;"></div>' + '</div>' + '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        youtu: {
                            index: 'youtu.be/',
                            id: function(url) {
                                var videoID = youtube_parser(url);
                                return videoID ? videoID : null;
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: function(url) {
                                var matches = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                if (!matches || !matches[5])
                                    return null;
                                return matches[5];
                            },
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        site123: {
                            index: $GLOBALS['cdn-user-videos-files'],
                            id: function(url) {
                                if (isMobileDevice.iOS())
                                    url += '&deviceType=ios';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        },
                        site123Processing: {
                            index: '/files/images/video-processing.png',
                            id: function(url) {
                                if (isMobileDevice.any())
                                    url += '&autoplay=0';
                                return url;
                            },
                            src: '/include/globalVideoPlayer.php?websiteID=' + $('#websiteID').val() + '&website_uniqueID=' + $('#website_uniqueID').val() + '&cad=1&url=%id%'
                        }
                    }
                },
                callbacks: {
                    elementParse: function(item) {
                        if (item.el.data('type') === 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                    markupParse: function(template, values, item) {
                        var isShowSocialIcons = true;
                        if ($sectionThis.data('hide-social-icons') && $sectionThis.data('hide-social-icons') == 'on') {
                            isShowSocialIcons = false;
                        }
                        var buttons = [];
                        if ($sectionThis.data('print-image-btn') && $sectionThis.data('print-image-btn') == 'on') {
                            buttons.push('print');
                        }
                        if ($sectionThis.data('download-image-btn') && $sectionThis.data('download-image-btn') == 'on') {
                            buttons.push('download');
                        }
                        values.title = Gallery_getImageMagnificPopupCaption($categories.data('tool-title'), item.el.data('image-description'), item.el.data('image-link'), item.el.data('image-link-text'), item.el.data('image-page-url'), item.el.attr('title'), isShowSocialIcons, item.el.data('mfp-src'), buttons);
                        setTimeout(function() {
                            $('.mfp-title').off('click').click(function(event) {
                                event.stopPropagation();
                            });
                            $('.mfp-content .gallery-link-popup').on('click', function(event) {
                                Gallery_popuplink($(this).data('link'));
                            });
                        }, 500);
                        if (!this.mp_currentPageUrl)
                            this.mp_currentPageUrl = window.location.href;
                        window.history.replaceState(this.mp_currentPageUrl, 'Title', item.el.data('image-page-url'));
                        $videoBar = template.find('.video-bottom-bar');
                    },
                    updateStatus: function(data) {
                        var $bar = $('.mfp-bottom-bar');
                        var $close = $('.mfp-caption-close');
                        if ($sectionThis.data('info-bar-position') && $sectionThis.data('info-bar-position') == 'top') {
                            $bar.addClass('custom-top-position');
                        }
                        if ($sectionThis.data('hide-info-bar') && $sectionThis.data('hide-info-bar') == 'on') {
                            $bar.hide();
                            if ($videoBar ? $videoBar.hide() : false)
                                ;
                        } else {
                            $bar.show();
                            if ($videoBar ? $videoBar.show() : false)
                                ;
                        }
                        $close.off('click').on('click', function(event) {
                            event.stopPropagation();
                            $bar.hide();
                        });
                        $bar.height() > 50 ? $close.show() : $close.hide();
                    },
                    imageLoadComplete: function() {
                        this.contentContainer.removeClass('mfp-tall-images-handler');
                        var $bottomBar = this.content.find('.mfp-bottom-bar');
                        var $scrollContainer = isMobileDevice.any() ? $bottomBar.s123ScrollParent() : $bottomBar;
                        if ($scrollContainer.get(0).scrollHeight > $scrollContainer.outerHeight()) {
                            this.contentContainer.addClass('mfp-tall-images-handler');
                        }
                    },
                    open: function(item) {
                        var mc = new Hammer(this.container.get(0));
                        mc.on('swipeleft', function() {
                            $.magnificPopup.instance.next();
                        });
                        mc.on('swiperight', function() {
                            $.magnificPopup.instance.prev();
                        });
                        $sectionThis.data('hammer-js', mc);
                    },
                    change: function() {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    },
                    close: function(item) {
                        $sectionThis.data('hammer-js').destroy();
                        window.history.replaceState('', 'Title', this.mp_currentPageUrl);
                        bootbox.hideAll();
                    }
                }
            });
            $categoriesFilter.off('click').on('click', function(event, pageLoad) {
                event.preventDefault();
                var $this = $(this);
                var filter = $this.data('filter');
                var $hideCategories = $categories.filter(':not([data-filter="' + filter + '"]):visible');
                var $showCategories = $categories.filter('[data-filter="' + filter + '"]');
                if ($showCategories.length === 0 || $hideCategories.length === 0)
                    return;
                $categoriesFilter.removeClass('active');
                $this.addClass('active');
                $sectionThis.css({
                    minHeight: $sectionThis.height()
                });
                $hideCategories.stop().fadeOut(200, function() {
                    $showCategories.stop().fadeIn(200, function() {
                        $sectionThis.css({
                            minHeight: ''
                        });
                        showMoreButton($sectionThis, filter);
                        disableEnableInfinityScroll($sectionThis);
                        $(window).trigger('scroll');
                    });
                });
                if (pageLoad) {
                    showMoreButton($sectionThis, filter);
                }
            });
            if (!IsHomepage() && !IsRichPage()) {
                galleryAddInfinityScroll($sectionThis);
                $categories.off('infiniteScroll.loaded').on('infiniteScroll.loaded', function(event, data) {
                    var $this = $(this);
                    var $items = $(data.itemsHtml);
                    $this.append($items);
                    window.myLazyLoad.update();
                });
                gallery_BrowserBackButtonHandler($sectionThis.find('.filter'));
            }
            $firstCategory.trigger('click', [true]);
            if ($sectionThis.data('prevent-download-image') && $sectionThis.data('prevent-download-image') == 'on') {
                $.each($galleryItem, function(index, image) {
                    image.oncontextmenu = function() {
                        return false;
                    }
                });
            }
            galleryImageResize.init({
                section: $sectionThis,
                container: '.gallery-category',
                attr: 'data-src',
                element: '.grid-item img',
                rowImageNum: 1,
                galleryNum: 9,
                imageWidth: false,
                calcImageWidth: false,
                magnificPopup: true,
                magnificPopupEle: '.mfp-image',
                magnificAttr: 'data-mfp-src'
            });
        });
    });
    function showMoreButton($sectionThis, filter) {
        $sectionThis.find('.gallery-show-more-btn').hide();
        $sectionThis.find('.gallery-show-more-btn[data-filter="' + filter + '"]').show();
        $(document).trigger('s123.page.ready.refreshAOS');
    }
}
jQuery(function($) {
    ServicesModuleInitialize();
});
function ServicesModuleInitialize() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-services');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var categories = new ModuleLayoutCategories({
                $items: $sectionThis.find('.services-category'),
                $categoriesContainer: $sectionThis.find('.categories-panel'),
                $filterButton: $sectionThis.find('.items-responsive-filter'),
                $categories: $sectionThis.find('.items-categories-container li')
            });
        });
    });
}
jQuery(function($) {
    headersModuleInitialize_Layout();
});
function headersModuleInitialize_Layout() {
    $(document).on("s123.page.ready", function(event) {
        var $sections = $('section.s123-module-headers:is(.layout-6,.layout-7,.layout-8,.layout-9,.layout-18,.layout-20,.layout-22,.layout-23,.layout-24,.layout-25,.layout-26,.layout-27,.layout-29,.layout-30,.layout-35,.layout-39,.layout-40)');
        $sections.each(function(index) {
            var $s = $(this);
            var $carousel = $s.find('[data-ride="carousel"]');
            var sliderSpeed = $s.data('slider-speed');
            if (sliderSpeed == '' || parseInt(sliderSpeed) < 1 || parseInt(sliderSpeed) > 21) {
                sliderSpeed = 5000;
            } else {
                sliderSpeed = parseInt(sliderSpeed) * 1000;
            }
            if ($s.hasClass('layout-20')) {
                var $firstImage = $s.find('.headers-image').first();
                if ($firstImage.length > 0) {
                    var img = new Image();
                    img.src = $firstImage.data('bg');
                    img.onload = function() {
                        var aspectRatio = this.width / this.height;
                        $s.find('.headers-image').css('aspect-ratio', String(aspectRatio));
                        if ($s.find('.headers-container').hasClass('circle-under-image') && aspectRatio < 1) {
                            $s.addClass('corner-circle');
                        }
                    }
                    ;
                }
            }
            if ($s.hasClass('layout-22') || $s.hasClass('layout-29')) {
                var $headersDescription = $s.find('.headers-description');
                var $headersimage = $s.find('.headers-image');
                if ($headersimage.length > 0 && $headersDescription.length > 0) {
                    if (($headersDescription.get(0).offsetHeight - 60) > $headersimage.get(0).offsetHeight) {
                        $s.get(0).style.setProperty('--headers-description-height', $headersDescription.get(0).offsetHeight + 'px');
                    }
                }
            }
            $carousel.carousel({
                interval: sliderSpeed
            });
        });
    });
}
jQuery(function($) {
    HeadersModuleInitialize_Layout5();
});
function HeadersModuleInitialize_Layout5() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-headers.layout-5');
        $section.each(function(index) {
            var $sectionThis = $(this);
            var $flickityContainer = $sectionThis.find('.carousel');
            var originalFirstImageSize = {};
            if ($flickityContainer.length === 0)
                return;
            $flickityContainer.flickity({
                imagesLoaded: true,
                lazyLoad: 2,
                pageDots: false,
                wrapAround: true,
                percentPosition: false
            });
        });
    });
}
jQuery(function($) {
    HeadersModuleInitialize_Layout30();
});
function HeadersModuleInitialize_Layout30() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.s123-module-headers.layout-30');
        $section.each(function(index) {
            var $sectionThis = $(this);
            $sectionThis.find('.contactUsForm').each(function(index) {
                var $form = $(this);
                var customFormMultiSteps = new CustomFormMultiSteps();
                customFormMultiSteps.init({
                    $form: $form,
                    $nextButton: $form.find('.next-form-btn'),
                    $submitButton: $form.find('.submit-form-btn'),
                    $previousButton: $form.find('.previous-form-btn'),
                    totalSteps: $form.find('.custom-form-steps').data('total-steps')
                });
                var forms_GoogleRecaptcha = new Forms_GoogleRecaptcha();
                forms_GoogleRecaptcha.init($form);
                $form.validate({
                    errorElement: 'div',
                    errorClass: 'help-block',
                    focusInvalid: true,
                    ignore: ':hidden:not(.custom-form-step:visible input[name^="datePicker-"])',
                    highlight: function(e) {
                        $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
                    },
                    success: function(e) {
                        $(e).closest('.form-group').removeClass('has-error');
                        $(e).remove();
                    },
                    errorPlacement: function(error, element) {
                        if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
                            var controls = element.closest('div[class*="col-"]');
                            if (controls.find(':checkbox,:radio').length > 0)
                                element.closest('.form-group').append(error);
                            else
                                error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
                        } else if (element.is('.select2')) {
                            error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
                        } else if (element.is('.chosen-select')) {
                            error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
                        } else {
                            error.appendTo(element.closest('.form-group'));
                        }
                    },
                    submitHandler: function(form) {
                        var $form = $(form);
                        var clickAction = $form.data('click-action');
                        $form.append($('<div class="conv-code-container"></div>'));
                        var $convCodeContainer = $form.find('.conv-code-container');
                        var thankYouMessage = translations.ThankYouAfterSubmmit;
                        if ($form.data('thanks-msg')) {
                            thankYouMessage = $form.data('thanks-msg');
                        }
                        $form.find('button:submit').prop('disabled', true);
                        S123.ButtonLoading.start($form.find('button:submit'));
                        var url = "/versions/" + $('#versionNUM').val() + "/include/contactO.php";
                        if ($form.hasClass('custom-form') || $form.hasClass('horizontal-custom-form')) {
                            if (!CustomForm_IsLastStep($form)) {
                                $form.find('.next-form-btn:visible').trigger('click');
                                S123.ButtonLoading.stop($form.find('button:submit'));
                                $form.find('button:submit').prop('disabled', false);
                                return false;
                            }
                            if (!CustomForm_IsFillOutAtLeastOneField($form)) {
                                bootbox.alert(translations.fillOutAtLeastOneField);
                                S123.ButtonLoading.stop($form.find('button:submit'));
                                $form.find('button:submit').prop('disabled', false);
                                return false;
                            }
                            url = "/versions/" + $('#versionNUM').val() + "/include/customFormO.php";
                        }
                        if (forms_GoogleRecaptcha.isActive && !forms_GoogleRecaptcha.isGotToken) {
                            forms_GoogleRecaptcha.getToken();
                            return false;
                        }
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: $form.serialize(),
                            success: function(data) {
                                var dataObj = jQuery.parseJSON(data);
                                $form.trigger("reset");
                                if (clickAction == 'thankYouMessage' || clickAction == '') {
                                    bootbox.alert({
                                        title: translations.sent,
                                        message: thankYouMessage + '<iframe src="/versions/' + $('#versionNUM').val() + '/include/contactSentO.php?w=' + $('#w').val() + '&websiteID=' + dataObj.websiteID + '&moduleID=' + dataObj.moduleID + '" style="width:100%;height:30px;" frameborder="0"></iframe>',
                                        className: 'contactUsConfirm',
                                        buttons: {
                                            ok: {
                                                label: translations.Ok
                                            }
                                        },
                                        backdrop: true
                                    });
                                } else {
                                    if (dataObj.conv_code.length > 0) {
                                        var $convCode = $('<div>' + dataObj.conv_code + '</div>');
                                        $convCodeContainer.html($convCode.text());
                                    }
                                    if (top.$('#websitePreviewIframe').length) {
                                        bootbox.alert({
                                            title: translations.previewExternalLinkTitle,
                                            message: translations.previewExternalLinkMsg.replace('{{externalLink}}', '<b>' + dataObj.action.url + '</b>'),
                                            className: 'externalAlert'
                                        });
                                    } else {
                                        window.open(dataObj.action.url, '_self');
                                    }
                                }
                                customFormMultiSteps.reset();
                                forms_GoogleRecaptcha.reset();
                                S123.ButtonLoading.stop($form.find('button:submit'));
                                $form.find('button:submit').prop('disabled', false);
                                WizardNotificationUpdate();
                            }
                        });
                        return false;
                    }
                });
                $form.find('.f-b-date-timePicker').each(function() {
                    var $option = $(this);
                    var $datePicker = $option.find('.fake-input.date-time-picker');
                    var $hiddenInput = $option.find('[data-id="' + $datePicker.data('related-id') + '"]');
                    var $datePickerIcon = $option.find('.f-b-date-timePicker-icon');
                    var formBuilderCalendar = new calendar_handler();
                    $datePicker.data('date-format', $form.data('date-format'));
                    formBuilderCalendar.init({
                        $fakeInput: $datePicker,
                        $hiddenInput: $hiddenInput,
                        $fakeInputIcon: $datePickerIcon,
                        type: 'datePicker',
                        title: translations.chooseDate,
                        calendarSettings: {
                            format: $datePicker.data('date-format'),
                            weekStart: 0,
                            todayBtn: "linked",
                            clearBtn: false,
                            language: languageCode,
                            todayHighlight: true
                        },
                        onSubmit: function(selectedDate) {
                            $datePicker.html(selectedDate);
                            $hiddenInput.val(selectedDate);
                        }
                    });
                });
                CustomForm_DisableTwoColumns($form);
            });
        });
    });
}
