var he, b, Ue, Xe, pe, Ye, Ve, qe, ye = {},
    Ge = [],
    ln = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function G(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function Ke(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function X(e, t, r) {
    var a, u, l, h = {};
    for (l in t) l == "key" ? a = t[l] : l == "ref" ? u = t[l] : h[l] = t[l];
    if (arguments.length > 2 && (h.children = arguments.length > 3 ? he.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (l in e.defaultProps) h[l] === void 0 && (h[l] = e.defaultProps[l]);
    return de(e, h, a, u, null)
}

function de(e, t, r, a, u) {
    var l = {
        type: e,
        props: t,
        key: r,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: u == null ? ++Ue : u
    };
    return u == null && b.vnode != null && b.vnode(l), l
}

function Qe() {
    return {
        current: null
    }
}

function K(e) {
    return e.children
}

function Y(e, t) {
    this.props = e, this.context = t
}

function ae(e, t) {
    if (t == null) return e.__ ? ae(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? ae(e) : null
}

function Je(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            } return Je(e)
    }
}

function Le(e) {
    (!e.__d && (e.__d = !0) && pe.push(e) && !we.__r++ || Ve !== b.debounceRendering) && ((Ve = b.debounceRendering) || Ye)(we)
}

function we() {
    for (var e; we.__r = pe.length;) e = pe.sort(function(t, r) {
        return t.__v.__b - r.__v.__b
    }), pe = [], e.some(function(t) {
        var r, a, u, l, h, v;
        t.__d && (h = (l = (r = t).__v).__e, (v = r.__P) && (a = [], (u = G({}, l)).__v = l.__v + 1, He(v, l, u, r.__n, v.ownerSVGElement !== void 0, l.__h != null ? [h] : null, a, h == null ? ae(l) : h, l.__h), at(a, l), l.__e != h && Je(l)))
    })
}

function et(e, t, r, a, u, l, h, v, k, H) {
    var _, M, x, C, L, N, P, W = a && a.__k || Ge,
        Z = W.length;
    for (r.__k = [], _ = 0; _ < t.length; _++)
        if ((C = r.__k[_] = (C = t[_]) == null || typeof C == "boolean" ? null : typeof C == "string" || typeof C == "number" || typeof C == "bigint" ? de(null, C, null, null, C) : Array.isArray(C) ? de(K, {
                children: C
            }, null, null, null) : C.__b > 0 ? de(C.type, C.props, C.key, null, C.__v) : C) != null) {
            if (C.__ = r, C.__b = r.__b + 1, (x = W[_]) === null || x && C.key == x.key && C.type === x.type) W[_] = void 0;
            else
                for (M = 0; M < Z; M++) {
                    if ((x = W[M]) && C.key == x.key && C.type === x.type) {
                        W[M] = void 0;
                        break
                    }
                    x = null
                }
            He(e, C, x = x || ye, u, l, h, v, k, H), L = C.__e, (M = C.ref) && x.ref != M && (P || (P = []), x.ref && P.push(x.ref, null, C), P.push(M, C.__c || L, C)), L != null ? (N == null && (N = L), typeof C.type == "function" && C.__k === x.__k ? C.__d = k = tt(C, k, e) : k = nt(e, C, x, W, L, k), typeof r.type == "function" && (r.__d = k)) : k && x.__e == k && k.parentNode != e && (k = ae(x))
        } for (r.__e = N, _ = Z; _--;) W[_] != null && (typeof r.type == "function" && W[_].__e != null && W[_].__e == r.__d && (r.__d = ae(a, _ + 1)), st(W[_], W[_]));
    if (P)
        for (_ = 0; _ < P.length; _++) lt(P[_], P[++_], P[++_])
}

function tt(e, t, r) {
    for (var a, u = e.__k, l = 0; u && l < u.length; l++)(a = u[l]) && (a.__ = e, t = typeof a.type == "function" ? tt(a, t, r) : nt(r, a, a, u, a.__e, t));
    return t
}

function V(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(r) {
        V(r, t)
    }) : t.push(e)), t
}

function nt(e, t, r, a, u, l) {
    var h, v, k;
    if (t.__d !== void 0) h = t.__d, t.__d = void 0;
    else if (r == null || u != l || u.parentNode == null) e: if (l == null || l.parentNode !== e) e.appendChild(u), h = null;
        else {
            for (v = l, k = 0;
                (v = v.nextSibling) && k < a.length; k += 2)
                if (v == u) break e;
            e.insertBefore(u, l), h = l
        } return h !== void 0 ? h : u.nextSibling
}

function sn(e, t, r, a, u) {
    var l;
    for (l in r) l === "children" || l === "key" || l in t || be(e, l, null, r[l], a);
    for (l in t) u && typeof t[l] != "function" || l === "children" || l === "key" || l === "value" || l === "checked" || r[l] === t[l] || be(e, l, t[l], r[l], a)
}

function rt(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r) : e[t] = r == null ? "" : typeof r != "number" || ln.test(t) ? r : r + "px"
}

function be(e, t, r, a, u) {
    var l;
    e: if (t === "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof a == "string" && (e.style.cssText = a = ""), a)
                for (t in a) r && t in r || rt(e.style, t, "");
            if (r)
                for (t in r) a && r[t] === a[t] || rt(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n") l = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + l] = r, r ? a || e.addEventListener(t, l ? ot : it, l) : e.removeEventListener(t, l ? ot : it, l);
    else if (t !== "dangerouslySetInnerHTML") {
        if (u) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
            e[t] = r == null ? "" : r;
            break e
        } catch {}
        typeof r == "function" || (r != null && (r !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, r) : e.removeAttribute(t))
    }
}

function it(e) {
    this.l[e.type + !1](b.event ? b.event(e) : e)
}

function ot(e) {
    this.l[e.type + !0](b.event ? b.event(e) : e)
}

function He(e, t, r, a, u, l, h, v, k) {
    var H, _, M, x, C, L, N, P, W, Z, B, U = t.type;
    if (t.constructor !== void 0) return null;
    r.__h != null && (k = r.__h, v = t.__e = r.__e, t.__h = null, l = [v]), (H = b.__b) && H(t);
    try {
        e: if (typeof U == "function") {
            if (P = t.props, W = (H = U.contextType) && a[H.__c], Z = H ? W ? W.props.value : H.__ : a, r.__c ? N = (_ = t.__c = r.__c).__ = _.__E : ("prototype" in U && U.prototype.render ? t.__c = _ = new U(P, Z) : (t.__c = _ = new Y(P, Z), _.constructor = U, _.render = cn), W && W.sub(_), _.props = P, _.state || (_.state = {}), _.context = Z, _.__n = a, M = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), U.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = G({}, _.__s)), G(_.__s, U.getDerivedStateFromProps(P, _.__s))), x = _.props, C = _.state, M) U.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
            else {
                if (U.getDerivedStateFromProps == null && P !== x && _.componentWillReceiveProps != null && _.componentWillReceiveProps(P, Z), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(P, _.__s, Z) === !1 || t.__v === r.__v) {
                    _.props = P, _.state = _.__s, t.__v !== r.__v && (_.__d = !1), _.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(J) {
                        J && (J.__ = t)
                    }), _.__h.length && h.push(_);
                    break e
                }
                _.componentWillUpdate != null && _.componentWillUpdate(P, _.__s, Z), _.componentDidUpdate != null && _.__h.push(function() {
                    _.componentDidUpdate(x, C, L)
                })
            }
            _.context = Z, _.props = P, _.state = _.__s, (H = b.__r) && H(t), _.__d = !1, _.__v = t, _.__P = e, H = _.render(_.props, _.state, _.context), _.state = _.__s, _.getChildContext != null && (a = G(G({}, a), _.getChildContext())), M || _.getSnapshotBeforeUpdate == null || (L = _.getSnapshotBeforeUpdate(x, C)), B = H != null && H.type === K && H.key == null ? H.props.children : H, et(e, Array.isArray(B) ? B : [B], t, r, a, u, l, h, v, k), _.base = t.__e, t.__h = null, _.__h.length && h.push(_), N && (_.__E = _.__ = null), _.__e = !1
        } else l == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = un(r.__e, t, r, a, u, l, h, k);
        (H = b.diffed) && H(t)
    }
    catch (J) {
        t.__v = null, (k || l != null) && (t.__e = v, t.__h = !!k, l[l.indexOf(v)] = null), b.__e(J, t, r)
    }
}

function at(e, t) {
    b.__c && b.__c(t, e), e.some(function(r) {
        try {
            e = r.__h, r.__h = [], e.some(function(a) {
                a.call(r)
            })
        } catch (a) {
            b.__e(a, r.__v)
        }
    })
}

function un(e, t, r, a, u, l, h, v) {
    var k, H, _, M = r.props,
        x = t.props,
        C = t.type,
        L = 0;
    if (C === "svg" && (u = !0), l != null) {
        for (; L < l.length; L++)
            if ((k = l[L]) && "setAttribute" in k == !!C && (C ? k.localName === C : k.nodeType === 3)) {
                e = k, l[L] = null;
                break
            }
    }
    if (e == null) {
        if (C === null) return document.createTextNode(x);
        e = u ? document.createElementNS("http://www.w3.org/2000/svg", C) : document.createElement(C, x.is && x), l = null, v = !1
    }
    if (C === null) M === x || v && e.data === x || (e.data = x);
    else {
        if (l = l && he.call(e.childNodes), H = (M = r.props || ye).dangerouslySetInnerHTML, _ = x.dangerouslySetInnerHTML, !v) {
            if (l != null)
                for (M = {}, L = 0; L < e.attributes.length; L++) M[e.attributes[L].name] = e.attributes[L].value;
            (_ || H) && (_ && (H && _.__html == H.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""))
        }
        if (sn(e, x, M, u, v), _) t.__k = [];
        else if (L = t.props.children, et(e, Array.isArray(L) ? L : [L], t, r, a, u && C !== "foreignObject", l, h, l ? l[0] : r.__k && ae(r, 0), v), l != null)
            for (L = l.length; L--;) l[L] != null && Ke(l[L]);
        v || ("value" in x && (L = x.value) !== void 0 && (L !== M.value || L !== e.value || C === "progress" && !L) && be(e, "value", L, M.value, !1), "checked" in x && (L = x.checked) !== void 0 && L !== e.checked && be(e, "checked", L, M.checked, !1))
    }
    return e
}

function lt(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (a) {
        b.__e(a, r)
    }
}

function st(e, t, r) {
    var a, u;
    if (b.unmount && b.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || lt(a, null, t)), (a = e.__c) != null) {
        if (a.componentWillUnmount) try {
            a.componentWillUnmount()
        } catch (l) {
            b.__e(l, t)
        }
        a.base = a.__P = null
    }
    if (a = e.__k)
        for (u = 0; u < a.length; u++) a[u] && st(a[u], t, typeof e.type != "function");
    r || e.__e == null || Ke(e.__e), e.__e = e.__d = void 0
}

function cn(e, t, r) {
    return this.constructor(e, r)
}

function le(e, t, r) {
    var a, u, l;
    b.__ && b.__(e, t), u = (a = typeof r == "function") ? null : r && r.__k || t.__k, l = [], He(t, e = (!a && r || t).__k = X(K, null, [e]), u || ye, ye, t.ownerSVGElement !== void 0, !a && r ? [r] : u ? null : t.firstChild ? he.call(t.childNodes) : null, l, !a && r ? r : u ? u.__e : t.firstChild, a), at(l, e)
}

function Pe(e, t) {
    le(e, t, Pe)
}

function ut(e, t, r) {
    var a, u, l, h = G({}, e.props);
    for (l in t) l == "key" ? a = t[l] : l == "ref" ? u = t[l] : h[l] = t[l];
    return arguments.length > 2 && (h.children = arguments.length > 3 ? he.call(arguments, 2) : r), de(e.type, h, a || e.key, u || e.ref, null)
}

function ct(e, t) {
    var r = {
        __c: t = "__cC" + qe++,
        __: e,
        Consumer: function(a, u) {
            return a.children(u)
        },
        Provider: function(a) {
            var u, l;
            return this.getChildContext || (u = [], (l = {})[t] = this, this.getChildContext = function() {
                return l
            }, this.shouldComponentUpdate = function(h) {
                this.props.value !== h.value && u.some(Le)
            }, this.sub = function(h) {
                u.push(h);
                var v = h.componentWillUnmount;
                h.componentWillUnmount = function() {
                    u.splice(u.indexOf(h), 1), v && v.call(h)
                }
            }), a.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
he = Ge.slice, b = {
    __e: function(e, t) {
        for (var r, a, u; t = t.__;)
            if ((r = t.__c) && !r.__) try {
                if ((a = r.constructor) && a.getDerivedStateFromError != null && (r.setState(a.getDerivedStateFromError(e)), u = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e), u = r.__d), u) return r.__E = r
            } catch (l) {
                e = l
            }
        throw e
    }
}, Ue = 0, Xe = function(e) {
    return e != null && e.constructor === void 0
}, Y.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = G({}, this.state), typeof e == "function" && (e = e(G({}, r), this.props)), e && G(r, e), e != null && this.__v && (t && this.__h.push(t), Le(this))
}, Y.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Le(this))
}, Y.prototype.render = K, pe = [], Ye = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, we.__r = 0, qe = 0;
var fn = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        render: le,
        hydrate: Pe,
        createElement: X,
        h: X,
        Fragment: K,
        createRef: Qe,
        get isValidElement() {
            return Xe
        },
        Component: Y,
        cloneElement: ut,
        createContext: ct,
        toChildArray: V,
        get options() {
            return b
        }
    }),
    se, I, ft, ue = 0,
    Ae = [],
    _t = b.__b,
    ht = b.__r,
    pt = b.diffed,
    dt = b.__c,
    mt = b.unmount;

function me(e, t) {
    b.__h && b.__h(I, e, ue || t), ue = 0;
    var r = I.__H || (I.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({}), r.__[e]
}

function _n(e) {
    return ue = 1, vt(wt, e)
}

function vt(e, t, r) {
    var a = me(se++, 2);
    return a.t = e, a.__c || (a.__ = [r ? r(t) : wt(void 0, t), function(u) {
        var l = a.t(a.__[0], u);
        a.__[0] !== l && (a.__ = [l, a.__[1]], a.__c.setState({}))
    }], a.__c = I), a.__
}

function hn(e, t) {
    var r = me(se++, 3);
    !b.__s && Te(r.__H, t) && (r.__ = e, r.__H = t, I.__H.__h.push(r))
}

function gt(e, t) {
    var r = me(se++, 4);
    !b.__s && Te(r.__H, t) && (r.__ = e, r.__H = t, I.__h.push(r))
}

function pn(e) {
    return ue = 5, Me(function() {
        return {
            current: e
        }
    }, [])
}

function dn(e, t, r) {
    ue = 6, gt(function() {
        typeof e == "function" ? e(t()) : e && (e.current = t())
    }, r == null ? r : r.concat(e))
}

function Me(e, t) {
    var r = me(se++, 7);
    return Te(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__
}

function mn(e, t) {
    return ue = 8, Me(function() {
        return e
    }, t)
}

function vn(e) {
    var t = I.context[e.__c],
        r = me(se++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(I)), t.props.value) : e.__
}

function gn(e, t) {
    b.useDebugValue && b.useDebugValue(t ? t(e) : e)
}

function yn() {
    Ae.forEach(function(e) {
        if (e.__P) try {
            e.__H.__h.forEach(xe), e.__H.__h.forEach(Ne), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], b.__e(t, e.__v)
        }
    }), Ae = []
}
b.__b = function(e) {
    I = null, _t && _t(e)
}, b.__r = function(e) {
    ht && ht(e), se = 0;
    var t = (I = e.__c).__H;
    t && (t.__h.forEach(xe), t.__h.forEach(Ne), t.__h = [])
}, b.diffed = function(e) {
    pt && pt(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (Ae.push(t) !== 1 && ft === b.requestAnimationFrame || ((ft = b.requestAnimationFrame) || function(r) {
        var a, u = function() {
                clearTimeout(l), yt && cancelAnimationFrame(a), setTimeout(r)
            },
            l = setTimeout(u, 100);
        yt && (a = requestAnimationFrame(u))
    })(yn)), I = null
}, b.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(xe), r.__h = r.__h.filter(function(a) {
                return !a.__ || Ne(a)
            })
        } catch (a) {
            t.some(function(u) {
                u.__h && (u.__h = [])
            }), t = [], b.__e(a, r.__v)
        }
    }), dt && dt(e, t)
}, b.unmount = function(e) {
    mt && mt(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(a) {
        try {
            xe(a)
        } catch (u) {
            t = u
        }
    }), t && b.__e(t, r.__v))
};
var yt = typeof requestAnimationFrame == "function";

function xe(e) {
    var t = I,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), I = t
}

function Ne(e) {
    var t = I;
    e.__c = e.__(), I = t
}

function Te(e, t) {
    return !e || e.length !== t.length || t.some(function(r, a) {
        return r !== e[a]
    })
}

function wt(e, t) {
    return typeof t == "function" ? t(e) : t
}

function bt(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function ze(e, t) {
    for (var r in e)
        if (r !== "__source" && !(r in t)) return !0;
    for (var a in t)
        if (a !== "__source" && e[a] !== t[a]) return !0;
    return !1
}

function $e(e) {
    this.props = e
}

function wn(e, t) {
    function r(u) {
        var l = this.props.ref,
            h = l == u.ref;
        return !h && l && (l.call ? l(null) : l.current = null), t ? !t(this.props, u) || !h : ze(this.props, u)
    }

    function a(u) {
        return this.shouldComponentUpdate = r, X(e, u)
    }
    return a.displayName = "Memo(" + (e.displayName || e.name) + ")", a.prototype.isReactComponent = !0, a.__f = !0, a
}($e.prototype = new Y).isPureReactComponent = !0, $e.prototype.shouldComponentUpdate = function(e, t) {
    return ze(this.props, e) || ze(this.state, t)
};
var xt = b.__b;
b.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), xt && xt(e)
};
var bn = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function xn(e) {
    function t(r, a) {
        var u = bt({}, r);
        return delete u.ref, e(u, (a = r.ref || a) && (typeof a != "object" || "current" in a) ? a : null)
    }
    return t.$$typeof = bn, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Ct = function(e, t) {
        return e == null ? null : V(V(e).map(t))
    },
    Cn = {
        map: Ct,
        forEach: Ct,
        count: function(e) {
            return e ? V(e).length : 0
        },
        only: function(e) {
            var t = V(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: V
    },
    En = b.__e;
b.__e = function(e, t, r) {
    if (e.then) {
        for (var a, u = t; u = u.__;)
            if ((a = u.__c) && a.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), a.__c(e, t)
    }
    En(e, t, r)
};
var Et = b.unmount;

function Ce() {
    this.__u = 0, this.t = null, this.__b = null
}

function kt(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function kn(e) {
    var t, r, a;

    function u(l) {
        if (t || (t = e()).then(function(h) {
                r = h.default || h
            }, function(h) {
                a = h
            }), a) throw a;
        if (!r) throw t;
        return X(r, l)
    }
    return u.displayName = "Lazy", u.__f = !0, u
}

function ve() {
    this.u = null, this.o = null
}
b.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Et && Et(e)
}, (Ce.prototype = new Y).__c = function(e, t) {
    var r = t.__c,
        a = this;
    a.t == null && (a.t = []), a.t.push(r);
    var u = kt(a.__v),
        l = !1,
        h = function() {
            l || (l = !0, r.__R = null, u ? u(v) : v())
        };
    r.__R = h;
    var v = function() {
            if (!--a.__u) {
                if (a.state.__e) {
                    var H = a.state.__e;
                    a.__v.__k[0] = function M(x, C, L) {
                        return x && (x.__v = null, x.__k = x.__k && x.__k.map(function(N) {
                            return M(N, C, L)
                        }), x.__c && x.__c.__P === C && (x.__e && L.insertBefore(x.__e, x.__d), x.__c.__e = !0, x.__c.__P = L)), x
                    }(H, H.__c.__P, H.__c.__O)
                }
                var _;
                for (a.setState({
                        __e: a.__b = null
                    }); _ = a.t.pop();) _.forceUpdate()
            }
        },
        k = t.__h === !0;
    a.__u++ || k || a.setState({
        __e: a.__b = a.__v.__k[0]
    }), e.then(h, h)
}, Ce.prototype.componentWillUnmount = function() {
    this.t = []
}, Ce.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"),
                a = this.__v.__k[0].__c;
            this.__v.__k[0] = function l(h, v, k) {
                return h && (h.__c && h.__c.__H && (h.__c.__H.__.forEach(function(H) {
                    typeof H.__c == "function" && H.__c()
                }), h.__c.__H = null), (h = bt({}, h)).__c != null && (h.__c.__P === k && (h.__c.__P = v), h.__c = null), h.__k = h.__k && h.__k.map(function(H) {
                    return l(H, v, k)
                })), h
            }(this.__b, r, a.__O = a.__P)
        }
        this.__b = null
    }
    var u = t.__e && X(K, null, e.fallback);
    return u && (u.__h = null), [X(K, null, t.__e ? null : e.children), u]
};
var Rt = function(e, t, r) {
    if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (r = e.u; r;) {
            for (; r.length > 3;) r.pop()();
            if (r[1] < r[0]) break;
            e.u = r = r[2]
        }
};

function Rn(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Sn(e) {
    var t = this,
        r = e.i;
    t.componentWillUnmount = function() {
        le(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== r && t.componentWillUnmount(), e.__v ? (t.l || (t.i = r, t.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        appendChild: function(a) {
            this.childNodes.push(a), t.i.appendChild(a)
        },
        insertBefore: function(a, u) {
            this.childNodes.push(a), t.i.appendChild(a)
        },
        removeChild: function(a) {
            this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), t.i.removeChild(a)
        }
    }), le(X(Rn, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function On(e, t) {
    return X(Sn, {
        __v: e,
        i: t
    })
}(ve.prototype = new Y).__e = function(e) {
    var t = this,
        r = kt(t.__v),
        a = t.o.get(e);
    return a[0]++,
        function(u) {
            var l = function() {
                t.props.revealOrder ? (a.push(u), Rt(t, e, a)) : u()
            };
            r ? r(l) : l()
        }
}, ve.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = V(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--;) this.o.set(t[r], this.u = [1, 0, this.u]);
    return e.children
}, ve.prototype.componentDidUpdate = ve.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, r) {
        Rt(e, r, t)
    })
};
var St = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103,
    Ln = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Hn = typeof document != "undefined",
    Pn = function(e) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };

function An(e, t, r) {
    return t.__k == null && (t.textContent = ""), le(e, t), typeof r == "function" && r(), e ? e.__c : null
}

function Mn(e, t, r) {
    return Pe(e, t), typeof r == "function" && r(), e ? e.__c : null
}
Y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Y.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var Ot = b.event;

function Nn() {}

function Tn() {
    return this.cancelBubble
}

function zn() {
    return this.defaultPrevented
}
b.event = function(e) {
    return Ot && (e = Ot(e)), e.persist = Nn, e.isPropagationStopped = Tn, e.isDefaultPrevented = zn, e.nativeEvent = e
};
var Lt, Ht = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Pt = b.vnode;
b.vnode = function(e) {
    var t = e.type,
        r = e.props,
        a = r;
    if (typeof t == "string") {
        var u = t.indexOf("-") === -1;
        for (var l in a = {}, r) {
            var h = r[l];
            Hn && l === "children" && t === "noscript" || l === "value" && "defaultValue" in r && h == null || (l === "defaultValue" && "value" in r && r.value == null ? l = "value" : l === "download" && h === !0 ? h = "" : /ondoubleclick/i.test(l) ? l = "ondblclick" : /^onchange(textarea|input)/i.test(l + t) && !Pn(r.type) ? l = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(l) ? l = l.toLowerCase() : u && Ln.test(l) ? l = l.replace(/[A-Z0-9]/, "-$&").toLowerCase() : h === null && (h = void 0), a[l] = h)
        }
        t == "select" && a.multiple && Array.isArray(a.value) && (a.value = V(r.children).forEach(function(v) {
            v.props.selected = a.value.indexOf(v.props.value) != -1
        })), t == "select" && a.defaultValue != null && (a.value = V(r.children).forEach(function(v) {
            v.props.selected = a.multiple ? a.defaultValue.indexOf(v.props.value) != -1 : a.defaultValue == v.props.value
        })), e.props = a, r.class != r.className && (Ht.enumerable = "className" in r, r.className != null && (a.class = r.className), Object.defineProperty(a, "className", Ht))
    }
    e.$$typeof = St, Pt && Pt(e)
};
var At = b.__r;
b.__r = function(e) {
    At && At(e), Lt = e.__c
};
var $n = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return Lt.__n[e.__c].props.value
            }
        }
    }
};

function Wn(e) {
    return X.bind(null, e)
}

function Mt(e) {
    return !!e && e.$$typeof === St
}

function Fn(e) {
    return Mt(e) ? ut.apply(null, arguments) : e
}

function Dn(e) {
    return !!e.__k && (le(null, e), !0)
}

function In(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var Zn = function(e, t) {
        return e(t)
    },
    jn = function(e, t) {
        return e(t)
    },
    ne = {
        useState: _n,
        useReducer: vt,
        useEffect: hn,
        useLayoutEffect: gt,
        useRef: pn,
        useImperativeHandle: dn,
        useMemo: Me,
        useCallback: mn,
        useContext: vn,
        useDebugValue: gn,
        version: "17.0.2",
        Children: Cn,
        render: An,
        hydrate: Mn,
        unmountComponentAtNode: Dn,
        createPortal: On,
        createElement: X,
        createContext: ct,
        createFactory: Wn,
        cloneElement: Fn,
        createRef: Qe,
        Fragment: K,
        isValidElement: Mt,
        findDOMNode: In,
        Component: Y,
        PureComponent: $e,
        memo: wn,
        forwardRef: xn,
        flushSync: jn,
        unstable_batchedUpdates: Zn,
        StrictMode: K,
        Suspense: Ce,
        SuspenseList: ve,
        lazy: kn,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $n
    },
    Nt = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Tt = ne.createContext && ne.createContext(Nt),
    Q = globalThis && globalThis.__assign || function() {
        return Q = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++) {
                t = arguments[r];
                for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u])
            }
            return e
        }, Q.apply(this, arguments)
    },
    Bn = globalThis && globalThis.__rest || function(e, t) {
        var r = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var u = 0, a = Object.getOwnPropertySymbols(e); u < a.length; u++) t.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[u]) && (r[a[u]] = e[a[u]]);
        return r
    };

function zt(e) {
    return e && e.map(function(t, r) {
        return ne.createElement(t.tag, Q({
            key: r
        }, t.attr), zt(t.child))
    })
}

function ge(e) {
    return function(t) {
        return ne.createElement(Un, Q({
            attr: Q({}, e.attr)
        }, t), zt(e.child))
    }
}

function Un(e) {
    var t = function(r) {
        var a = e.attr,
            u = e.size,
            l = e.title,
            h = Bn(e, ["attr", "size", "title"]),
            v = u || r.size || "1em",
            k;
        return r.className && (k = r.className), e.className && (k = (k ? k + " " : "") + e.className), ne.createElement("svg", Q({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, a, h, {
            className: k,
            style: Q(Q({
                color: e.color || r.color
            }, r.style), e.style),
            height: v,
            width: v,
            xmlns: "http://www.w3.org/2000/svg"
        }), l && ne.createElement("title", null, l), e.children)
    };
    return Tt !== void 0 ? ne.createElement(Tt.Consumer, null, function(r) {
        return t(r)
    }) : t(Nt)
}

function Jn(e) {
    return ge({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"
            }
        }]
    })(e)
}

function er(e) {
    return ge({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            }
        }]
    })(e)
}

function tr(e) {
    return ge({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
            }
        }]
    })(e)
}

function nr(e) {
    return ge({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"
            }
        }]
    })(e)
}

function rr(e) {
    return ge({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M567.1 512l318.5-319.3c5-5 1.5-13.7-5.6-13.7h-90.5c-2.1 0-4.2.8-5.6 2.3l-273.3 274-90.2-90.5c12.5-22.1 19.7-47.6 19.7-74.8 0-83.9-68.1-152-152-152s-152 68.1-152 152 68.1 152 152 152c27.7 0 53.6-7.4 75.9-20.3l90 90.3-90.1 90.3A151.04 151.04 0 0 0 288 582c-83.9 0-152 68.1-152 152s68.1 152 152 152 152-68.1 152-152c0-27.2-7.2-52.7-19.7-74.8l90.2-90.5 273.3 274c1.5 1.5 3.5 2.3 5.6 2.3H880c7.1 0 10.7-8.6 5.6-13.7L567.1 512zM288 370c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0 444c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
            }
        }]
    })(e)
}
var Xn = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function Yn(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(e).forEach(function(r) {
        var a = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r, a.get ? a : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), t
}
var We = {
    exports: {}
};
(function(e, t) {
    (function(r, a) {
        typeof t.nodeName != "string" ? e.exports = a() : r.Croppie = a()
    })(typeof self != "undefined" ? self : Xn, function() {
        if (typeof Promise != "function") {
            /*! promise-polyfill 3.1.0 */
            (function(n) {
                function o(p, y) {
                    return function() {
                        p.apply(y, arguments)
                    }
                }

                function i(p) {
                    if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
                    if (typeof p != "function") throw new TypeError("not a function");
                    this._state = null, this._value = null, this._deferreds = [], R(p, o(f, this), o(c, this))
                }

                function s(p) {
                    var y = this;
                    return this._state === null ? void this._deferreds.push(p) : void S(function() {
                        var d = y._state ? p.onFulfilled : p.onRejected;
                        if (d === null) return void(y._state ? p.resolve : p.reject)(y._value);
                        var w;
                        try {
                            w = d(y._value)
                        } catch (O) {
                            return void p.reject(O)
                        }
                        p.resolve(w)
                    })
                }

                function f(p) {
                    try {
                        if (p === this) throw new TypeError("A promise cannot be resolved with itself.");
                        if (p && (typeof p == "object" || typeof p == "function")) {
                            var y = p.then;
                            if (typeof y == "function") return void R(o(y, p), o(f, this), o(c, this))
                        }
                        this._state = !0, this._value = p, m.call(this)
                    } catch (d) {
                        c.call(this, d)
                    }
                }

                function c(p) {
                    this._state = !1, this._value = p, m.call(this)
                }

                function m() {
                    for (var p = 0, y = this._deferreds.length; y > p; p++) s.call(this, this._deferreds[p]);
                    this._deferreds = null
                }

                function g(p, y, d, w) {
                    this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof y == "function" ? y : null, this.resolve = d, this.reject = w
                }

                function R(p, y, d) {
                    var w = !1;
                    try {
                        p(function(O) {
                            w || (w = !0, y(O))
                        }, function(O) {
                            w || (w = !0, d(O))
                        })
                    } catch (O) {
                        if (w) return;
                        w = !0, d(O)
                    }
                }
                var E = setTimeout,
                    S = typeof setImmediate == "function" && setImmediate || function(p) {
                        E(p, 1)
                    },
                    A = Array.isArray || function(p) {
                        return Object.prototype.toString.call(p) === "[object Array]"
                    };
                i.prototype.catch = function(p) {
                    return this.then(null, p)
                }, i.prototype.then = function(p, y) {
                    var d = this;
                    return new i(function(w, O) {
                        s.call(d, new g(p, y, w, O))
                    })
                }, i.all = function() {
                    var p = Array.prototype.slice.call(arguments.length === 1 && A(arguments[0]) ? arguments[0] : arguments);
                    return new i(function(y, d) {
                        function w(z, $) {
                            try {
                                if ($ && (typeof $ == "object" || typeof $ == "function")) {
                                    var j = $.then;
                                    if (typeof j == "function") return void j.call($, function(D) {
                                        w(z, D)
                                    }, d)
                                }
                                p[z] = $, --O == 0 && y(p)
                            } catch (D) {
                                d(D)
                            }
                        }
                        if (p.length === 0) return y([]);
                        for (var O = p.length, T = 0; T < p.length; T++) w(T, p[T])
                    })
                }, i.resolve = function(p) {
                    return p && typeof p == "object" && p.constructor === i ? p : new i(function(y) {
                        y(p)
                    })
                }, i.reject = function(p) {
                    return new i(function(y, d) {
                        d(p)
                    })
                }, i.race = function(p) {
                    return new i(function(y, d) {
                        for (var w = 0, O = p.length; O > w; w++) p[w].then(y, d)
                    })
                }, i._setImmediateFn = function(p) {
                    S = p
                }, e.exports ? e.exports = i : n.Promise || (n.Promise = i)
            })(this)
        }
        typeof window != "undefined" && typeof window.CustomEvent != "function" && function() {
            function n(o, i) {
                i = i || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var s = document.createEvent("CustomEvent");
                return s.initCustomEvent(o, i.bubbles, i.cancelable, i.detail), s
            }
            n.prototype = window.Event.prototype, window.CustomEvent = n
        }(), typeof HTMLCanvasElement != "undefined" && !HTMLCanvasElement.prototype.toBlob && Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
            value: function(n, o, i) {
                for (var s = atob(this.toDataURL(o, i).split(",")[1]), f = s.length, c = new Uint8Array(f), m = 0; m < f; m++) c[m] = s.charCodeAt(m);
                n(new Blob([c], {
                    type: o || "image/png"
                }))
            }
        });
        var r = ["Webkit", "Moz", "ms"],
            a = typeof document != "undefined" ? document.createElement("div").style : {},
            u = [1, 8, 3, 6],
            l = [2, 7, 4, 5],
            h, v, k;

        function H(n) {
            if (n in a) return n;
            for (var o = n[0].toUpperCase() + n.slice(1), i = r.length; i--;)
                if (n = r[i] + o, n in a) return n
        }
        v = H("transform"), h = H("transformOrigin"), k = H("userSelect");

        function _(n, o) {
            var i = u.indexOf(n) > -1 ? u : l,
                s = i.indexOf(n),
                f = o / 90 % i.length;
            return i[(i.length + s + f % i.length) % i.length]
        }

        function M(n, o) {
            n = n || {};
            for (var i in o) o[i] && o[i].constructor && o[i].constructor === Object ? (n[i] = n[i] || {}, M(n[i], o[i])) : n[i] = o[i];
            return n
        }

        function x(n) {
            return M({}, n)
        }

        function C(n, o, i) {
            var s;
            return function() {
                var f = this,
                    c = arguments,
                    m = function() {
                        s = null, i || n.apply(f, c)
                    },
                    g = i && !s;
                clearTimeout(s), s = setTimeout(m, o), g && n.apply(f, c)
            }
        }

        function L(n) {
            if ("createEvent" in document) {
                var o = document.createEvent("HTMLEvents");
                o.initEvent("change", !1, !0), n.dispatchEvent(o)
            } else n.fireEvent("onchange")
        }

        function N(n, o, i) {
            if (typeof o == "string") {
                var s = o;
                o = {}, o[s] = i
            }
            for (var f in o) n.style[f] = o[f]
        }

        function P(n, o) {
            n.classList ? n.classList.add(o) : n.className += " " + o
        }

        function W(n, o) {
            n.classList ? n.classList.remove(o) : n.className = n.className.replace(o, "")
        }

        function Z(n, o) {
            for (var i in o) n.setAttribute(i, o[i])
        }

        function B(n) {
            return parseInt(n, 10)
        }

        function U(n, o) {
            if (!n) throw "Source image missing";
            var i = new Image;
            return i.style.opacity = "0", new Promise(function(s, f) {
                function c() {
                    i.style.opacity = "1", setTimeout(function() {
                        s(i)
                    }, 1)
                }
                i.removeAttribute("crossOrigin"), n.match(/^https?:\/\/|^\/\//) && i.setAttribute("crossOrigin", "anonymous"), i.onload = function() {
                    o ? EXIF.getData(i, function() {
                        c()
                    }) : c()
                }, i.onerror = function(m) {
                    i.style.opacity = 1, setTimeout(function() {
                        f(m)
                    }, 1)
                }, i.src = n
            })
        }

        function J(n, o) {
            var i = n.naturalWidth,
                s = n.naturalHeight,
                f = o || Ee(n);
            if (f && f >= 5) {
                var c = i;
                i = s, s = c
            }
            return {
                width: i,
                height: s
            }
        }
        var Wt = {
                translate3d: {
                    suffix: ", 0px"
                },
                translate: {
                    suffix: ""
                }
            },
            F = function(n, o, i) {
                this.x = parseFloat(n), this.y = parseFloat(o), this.scale = parseFloat(i)
            };
        F.parse = function(n) {
            return n.style ? F.parse(n.style[v]) : n.indexOf("matrix") > -1 || n.indexOf("none") > -1 ? F.fromMatrix(n) : F.fromString(n)
        }, F.fromMatrix = function(n) {
            var o = n.substring(7).split(",");
            return (!o.length || n === "none") && (o = [1, 0, 0, 1, 0, 0]), new F(B(o[4]), B(o[5]), parseFloat(o[0]))
        }, F.fromString = function(n) {
            var o = n.split(") "),
                i = o[0].substring(q.globals.translate.length + 1).split(","),
                s = o.length > 1 ? o[1].substring(6) : 1,
                f = i.length > 1 ? i[0] : 0,
                c = i.length > 1 ? i[1] : 0;
            return new F(f, c, s)
        }, F.prototype.toString = function() {
            var n = Wt[q.globals.translate].suffix || "";
            return q.globals.translate + "(" + this.x + "px, " + this.y + "px" + n + ") scale(" + this.scale + ")"
        };
        var ce = function(n) {
            if (!n || !n.style[h]) {
                this.x = 0, this.y = 0;
                return
            }
            var o = n.style[h].split(" ");
            this.x = parseFloat(o[0]), this.y = parseFloat(o[1])
        };
        ce.prototype.toString = function() {
            return this.x + "px " + this.y + "px"
        };

        function Ee(n) {
            return n.exifdata && n.exifdata.Orientation ? B(n.exifdata.Orientation) : 1
        }

        function De(n, o, i) {
            var s = o.width,
                f = o.height,
                c = n.getContext("2d");
            switch (n.width = o.width, n.height = o.height, c.save(), i) {
                case 2:
                    c.translate(s, 0), c.scale(-1, 1);
                    break;
                case 3:
                    c.translate(s, f), c.rotate(180 * Math.PI / 180);
                    break;
                case 4:
                    c.translate(0, f), c.scale(1, -1);
                    break;
                case 5:
                    n.width = f, n.height = s, c.rotate(90 * Math.PI / 180), c.scale(1, -1);
                    break;
                case 6:
                    n.width = f, n.height = s, c.rotate(90 * Math.PI / 180), c.translate(0, -f);
                    break;
                case 7:
                    n.width = f, n.height = s, c.rotate(-90 * Math.PI / 180), c.translate(-s, f), c.scale(1, -1);
                    break;
                case 8:
                    n.width = f, n.height = s, c.translate(0, s), c.rotate(-90 * Math.PI / 180);
                    break
            }
            c.drawImage(o, 0, 0, s, f), c.restore()
        }

        function Ft() {
            var n = this,
                o = "croppie-container",
                i = n.options.viewport.type ? "cr-vp-" + n.options.viewport.type : null,
                s, f, c, m, g, R;
            n.options.useCanvas = n.options.enableOrientation || ke.call(n), n.data = {}, n.elements = {}, s = n.elements.boundary = document.createElement("div"), c = n.elements.viewport = document.createElement("div"), f = n.elements.img = document.createElement("img"), m = n.elements.overlay = document.createElement("div"), n.options.useCanvas ? (n.elements.canvas = document.createElement("canvas"), n.elements.preview = n.elements.canvas) : n.elements.preview = f, P(s, "cr-boundary"), s.setAttribute("aria-dropeffect", "none"), g = n.options.boundary.width, R = n.options.boundary.height, N(s, {
                width: g + (isNaN(g) ? "" : "px"),
                height: R + (isNaN(R) ? "" : "px")
            }), P(c, "cr-viewport"), i && P(c, i), N(c, {
                width: n.options.viewport.width + "px",
                height: n.options.viewport.height + "px"
            }), c.setAttribute("tabindex", 0), P(n.elements.preview, "cr-image"), Z(n.elements.preview, {
                alt: "preview",
                "aria-grabbed": "false"
            }), P(m, "cr-overlay"), n.element.appendChild(s), s.appendChild(n.elements.preview), s.appendChild(c), s.appendChild(m), P(n.element, o), n.options.customClass && P(n.element, n.options.customClass), Bt.call(this), n.options.enableZoom && It.call(n), n.options.enableResize && Dt.call(n)
        }

        function ke() {
            return this.options.enableExif && window.EXIF
        }

        function Dt() {
            var n = this,
                o = document.createElement("div"),
                i = !1,
                s, f, c, m = 50,
                g, R, E, S;
            P(o, "cr-resizer"), N(o, {
                width: this.options.viewport.width + "px",
                height: this.options.viewport.height + "px"
            }), this.options.resizeControls.height && (E = document.createElement("div"), P(E, "cr-resizer-vertical"), o.appendChild(E)), this.options.resizeControls.width && (S = document.createElement("div"), P(S, "cr-resizer-horisontal"), o.appendChild(S));

            function A(d) {
                if (!(d.button !== void 0 && d.button !== 0) && (d.preventDefault(), !i)) {
                    var w = n.elements.overlay.getBoundingClientRect();
                    if (i = !0, f = d.pageX, c = d.pageY, s = d.currentTarget.className.indexOf("vertical") !== -1 ? "v" : "h", g = w.width, R = w.height, d.touches) {
                        var O = d.touches[0];
                        f = O.pageX, c = O.pageY
                    }
                    window.addEventListener("mousemove", p), window.addEventListener("touchmove", p), window.addEventListener("mouseup", y), window.addEventListener("touchend", y), document.body.style[k] = "none"
                }
            }

            function p(d) {
                var w = d.pageX,
                    O = d.pageY;
                if (d.preventDefault(), d.touches) {
                    var T = d.touches[0];
                    w = T.pageX, O = T.pageY
                }
                var z = w - f,
                    $ = O - c,
                    j = n.options.viewport.height + $,
                    D = n.options.viewport.width + z;
                s === "v" && j >= m && j <= R ? (N(o, {
                    height: j + "px"
                }), n.options.boundary.height += $, N(n.elements.boundary, {
                    height: n.options.boundary.height + "px"
                }), n.options.viewport.height += $, N(n.elements.viewport, {
                    height: n.options.viewport.height + "px"
                })) : s === "h" && D >= m && D <= g && (N(o, {
                    width: D + "px"
                }), n.options.boundary.width += z, N(n.elements.boundary, {
                    width: n.options.boundary.width + "px"
                }), n.options.viewport.width += z, N(n.elements.viewport, {
                    width: n.options.viewport.width + "px"
                })), _e.call(n), Se.call(n), fe.call(n), ie.call(n), c = O, f = w
            }

            function y() {
                i = !1, window.removeEventListener("mousemove", p), window.removeEventListener("touchmove", p), window.removeEventListener("mouseup", y), window.removeEventListener("touchend", y), document.body.style[k] = ""
            }
            E && (E.addEventListener("mousedown", A), E.addEventListener("touchstart", A)), S && (S.addEventListener("mousedown", A), S.addEventListener("touchstart", A)), this.elements.boundary.appendChild(o)
        }

        function re(n) {
            if (this.options.enableZoom) {
                var o = this.elements.zoomer,
                    i = ee(n, 4);
                o.value = Math.max(parseFloat(o.min), Math.min(parseFloat(o.max), i)).toString()
            }
        }

        function It() {
            var n = this,
                o = n.elements.zoomerWrap = document.createElement("div"),
                i = n.elements.zoomer = document.createElement("input");
            P(o, "cr-slider-wrap"), P(i, "cr-slider"), i.type = "range", i.step = "0.0001", i.value = "1", i.style.display = n.options.showZoomer ? "" : "none", i.setAttribute("aria-label", "zoom"), n.element.appendChild(o), o.appendChild(i), n._currentZoom = 1;

            function s() {
                Zt.call(n, {
                    value: parseFloat(i.value),
                    origin: new ce(n.elements.preview),
                    viewportRect: n.elements.viewport.getBoundingClientRect(),
                    transform: F.parse(n.elements.preview)
                })
            }

            function f(c) {
                var m, g;
                if (n.options.mouseWheelZoom === "ctrl" && c.ctrlKey !== !0) return 0;
                c.wheelDelta ? m = c.wheelDelta / 1200 : c.deltaY ? m = c.deltaY / 1060 : c.detail ? m = c.detail / -60 : m = 0, g = n._currentZoom + m * n._currentZoom, c.preventDefault(), re.call(n, g), s.call(n)
            }
            n.elements.zoomer.addEventListener("input", s), n.elements.zoomer.addEventListener("change", s), n.options.mouseWheelZoom && (n.elements.boundary.addEventListener("mousewheel", f), n.elements.boundary.addEventListener("DOMMouseScroll", f))
        }

        function Zt(n) {
            var o = this,
                i = n ? n.transform : F.parse(o.elements.preview),
                s = n ? n.viewportRect : o.elements.viewport.getBoundingClientRect(),
                f = n ? n.origin : new ce(o.elements.preview);

            function c() {
                var E = {};
                E[v] = i.toString(), E[h] = f.toString(), N(o.elements.preview, E)
            }
            if (o._currentZoom = n ? n.value : o._currentZoom, i.scale = o._currentZoom, o.elements.zoomer.setAttribute("aria-valuenow", o._currentZoom), c(), o.options.enforceBoundary) {
                var m = jt.call(o, s),
                    g = m.translate,
                    R = m.origin;
                i.x >= g.maxX && (f.x = R.minX, i.x = g.maxX), i.x <= g.minX && (f.x = R.maxX, i.x = g.minX), i.y >= g.maxY && (f.y = R.minY, i.y = g.maxY), i.y <= g.minY && (f.y = R.maxY, i.y = g.minY)
            }
            c(), Ut.call(o), ie.call(o)
        }

        function jt(n) {
            var o = this,
                i = o._currentZoom,
                s = n.width,
                f = n.height,
                c = o.elements.boundary.clientWidth / 2,
                m = o.elements.boundary.clientHeight / 2,
                g = o.elements.preview.getBoundingClientRect(),
                R = g.width,
                E = g.height,
                S = s / 2,
                A = f / 2,
                p = (S / i - c) * -1,
                y = p - (R * (1 / i) - s * (1 / i)),
                d = (A / i - m) * -1,
                w = d - (E * (1 / i) - f * (1 / i)),
                O = 1 / i * S,
                T = R * (1 / i) - O,
                z = 1 / i * A,
                $ = E * (1 / i) - z;
            return {
                translate: {
                    maxX: p,
                    minX: y,
                    maxY: d,
                    minY: w
                },
                origin: {
                    maxX: T,
                    minX: O,
                    maxY: $,
                    minY: z
                }
            }
        }

        function fe(n) {
            var o = this,
                i = o._currentZoom,
                s = o.elements.preview.getBoundingClientRect(),
                f = o.elements.viewport.getBoundingClientRect(),
                c = F.parse(o.elements.preview.style[v]),
                m = new ce(o.elements.preview),
                g = f.top - s.top + f.height / 2,
                R = f.left - s.left + f.width / 2,
                E = {},
                S = {};
            if (n) {
                var A = m.x,
                    p = m.y,
                    y = c.x,
                    d = c.y;
                E.y = A, E.x = p, c.y = y, c.x = d
            } else E.y = g / i, E.x = R / i, S.y = (E.y - m.y) * (1 - i), S.x = (E.x - m.x) * (1 - i), c.x -= S.x, c.y -= S.y;
            var w = {};
            w[h] = E.x + "px " + E.y + "px", w[v] = c.toString(), N(o.elements.preview, w)
        }

        function Bt() {
            var n = this,
                o = !1,
                i, s, f, c, m;

            function g(d, w) {
                var O = n.elements.preview.getBoundingClientRect(),
                    T = m.y + w,
                    z = m.x + d;
                n.options.enforceBoundary ? (c.top > O.top + w && c.bottom < O.bottom + w && (m.y = T), c.left > O.left + d && c.right < O.right + d && (m.x = z)) : (m.y = T, m.x = z)
            }

            function R(d) {
                n.elements.preview.setAttribute("aria-grabbed", d), n.elements.boundary.setAttribute("aria-dropeffect", d ? "move" : "none")
            }

            function E(d) {
                var w = 37,
                    O = 38,
                    T = 39,
                    z = 40;
                if (d.shiftKey && (d.keyCode === O || d.keyCode === z)) {
                    var $;
                    d.keyCode === O ? $ = parseFloat(n.elements.zoomer.value) + parseFloat(n.elements.zoomer.step) : $ = parseFloat(n.elements.zoomer.value) - parseFloat(n.elements.zoomer.step), n.setZoom($)
                } else if (n.options.enableKeyMovement && d.keyCode >= 37 && d.keyCode <= 40) {
                    d.preventDefault();
                    var j = D(d.keyCode);
                    m = F.parse(n.elements.preview), document.body.style[k] = "none", c = n.elements.viewport.getBoundingClientRect(), S(j)
                }

                function D(oe) {
                    switch (oe) {
                        case w:
                            return [1, 0];
                        case O:
                            return [0, 1];
                        case T:
                            return [-1, 0];
                        case z:
                            return [0, -1]
                    }
                }
            }

            function S(d) {
                var w = d[0],
                    O = d[1],
                    T = {};
                g(w, O), T[v] = m.toString(), N(n.elements.preview, T), _e.call(n), document.body.style[k] = "", fe.call(n), ie.call(n), f = 0
            }

            function A(d) {
                if (!(d.button !== void 0 && d.button !== 0) && (d.preventDefault(), !o)) {
                    if (o = !0, i = d.pageX, s = d.pageY, d.touches) {
                        var w = d.touches[0];
                        i = w.pageX, s = w.pageY
                    }
                    R(o), m = F.parse(n.elements.preview), window.addEventListener("mousemove", p), window.addEventListener("touchmove", p), window.addEventListener("mouseup", y), window.addEventListener("touchend", y), document.body.style[k] = "none", c = n.elements.viewport.getBoundingClientRect()
                }
            }

            function p(d) {
                d.preventDefault();
                var w = d.pageX,
                    O = d.pageY;
                if (d.touches) {
                    var T = d.touches[0];
                    w = T.pageX, O = T.pageY
                }
                var z = w - i,
                    $ = O - s,
                    j = {};
                if (d.type === "touchmove" && d.touches.length > 1) {
                    var D = d.touches[0],
                        oe = d.touches[1],
                        Be = Math.sqrt((D.pageX - oe.pageX) * (D.pageX - oe.pageX) + (D.pageY - oe.pageY) * (D.pageY - oe.pageY));
                    f || (f = Be / n._currentZoom);
                    var an = Be / f;
                    re.call(n, an), L(n.elements.zoomer);
                    return
                }
                g(z, $), j[v] = m.toString(), N(n.elements.preview, j), _e.call(n), s = O, i = w
            }

            function y() {
                o = !1, R(o), window.removeEventListener("mousemove", p), window.removeEventListener("touchmove", p), window.removeEventListener("mouseup", y), window.removeEventListener("touchend", y), document.body.style[k] = "", fe.call(n), ie.call(n), f = 0
            }
            n.elements.overlay.addEventListener("mousedown", A), n.elements.viewport.addEventListener("keydown", E), n.elements.overlay.addEventListener("touchstart", A)
        }

        function _e() {
            if (!!this.elements) {
                var n = this,
                    o = n.elements.boundary.getBoundingClientRect(),
                    i = n.elements.preview.getBoundingClientRect();
                N(n.elements.overlay, {
                    width: i.width + "px",
                    height: i.height + "px",
                    top: i.top - o.top + "px",
                    left: i.left - o.left + "px"
                })
            }
        }
        var Ut = C(_e, 500);

        function ie() {
            var n = this,
                o = n.get();
            if (!!Ie.call(n))
                if (n.options.update.call(n, o), n.$ && typeof Prototype == "undefined") n.$(n.element).trigger("update.croppie", o);
                else {
                    var i;
                    window.CustomEvent ? i = new CustomEvent("update", {
                        detail: o
                    }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent("update", !0, !0, o)), n.element.dispatchEvent(i)
                }
        }

        function Ie() {
            return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0
        }

        function Re() {
            var n = this,
                o = 1,
                i = {},
                s = n.elements.preview,
                f, c = new F(0, 0, o),
                m = new ce,
                g = Ie.call(n);
            !g || n.data.bound || (n.data.bound = !0, i[v] = c.toString(), i[h] = m.toString(), i.opacity = 1, N(s, i), f = n.elements.preview.getBoundingClientRect(), n._originalImageWidth = f.width, n._originalImageHeight = f.height, n.data.orientation = ke.call(n) ? Ee(n.elements.img) : n.data.orientation, n.options.enableZoom ? Se.call(n, !0) : n._currentZoom = o, c.scale = n._currentZoom, i[v] = c.toString(), N(s, i), n.data.points.length ? Xt.call(n, n.data.points) : Yt.call(n), fe.call(n), _e.call(n))
        }

        function Se(n) {
            var o = this,
                i = Math.max(o.options.minZoom, 0) || 0,
                s = o.options.maxZoom || 1.5,
                f, c, m = o.elements.zoomer,
                g = parseFloat(m.value),
                R = o.elements.boundary.getBoundingClientRect(),
                E = J(o.elements.img, o.data.orientation),
                S = o.elements.viewport.getBoundingClientRect(),
                A, p;
            o.options.enforceBoundary && (A = S.width / E.width, p = S.height / E.height, i = Math.max(A, p)), i >= s && (s = i + 1), m.min = ee(i, 4), m.max = ee(s, 4), !n && (g < m.min || g > m.max) ? re.call(o, g < m.min ? m.min : m.max) : n && (c = Math.max(R.width / E.width, R.height / E.height), f = o.data.boundZoom !== null ? o.data.boundZoom : c, re.call(o, f)), L(m)
        }

        function Xt(n) {
            if (n.length !== 4) throw "Croppie - Invalid number of points supplied: " + n;
            var o = this,
                i = n[2] - n[0],
                s = o.elements.viewport.getBoundingClientRect(),
                f = o.elements.boundary.getBoundingClientRect(),
                c = {
                    left: s.left - f.left,
                    top: s.top - f.top
                },
                m = s.width / i,
                g = n[1],
                R = n[0],
                E = -1 * n[1] + c.top,
                S = -1 * n[0] + c.left,
                A = {};
            A[h] = R + "px " + g + "px", A[v] = new F(S, E, m).toString(), N(o.elements.preview, A), re.call(o, m), o._currentZoom = m
        }

        function Yt() {
            var n = this,
                o = n.elements.preview.getBoundingClientRect(),
                i = n.elements.viewport.getBoundingClientRect(),
                s = n.elements.boundary.getBoundingClientRect(),
                f = i.left - s.left,
                c = i.top - s.top,
                m = f - (o.width - i.width) / 2,
                g = c - (o.height - i.height) / 2,
                R = new F(m, g, n._currentZoom);
            N(n.elements.preview, v, R.toString())
        }

        function Vt(n) {
            var o = this,
                i = o.elements.canvas,
                s = o.elements.img,
                f = i.getContext("2d");
            f.clearRect(0, 0, i.width, i.height), i.width = s.width, i.height = s.height;
            var c = o.options.enableOrientation && n || Ee(s);
            De(i, s, c)
        }

        function Oe(n) {
            var o = this,
                i = n.points,
                s = B(i[0]),
                f = B(i[1]),
                c = B(i[2]),
                m = B(i[3]),
                g = c - s,
                R = m - f,
                E = n.circle,
                S = document.createElement("canvas"),
                A = S.getContext("2d"),
                p = n.outputWidth || g,
                y = n.outputHeight || R;
            S.width = p, S.height = y, n.backgroundColor && (A.fillStyle = n.backgroundColor, A.fillRect(0, 0, p, y));
            var d = s,
                w = f,
                O = g,
                T = R,
                z = 0,
                $ = 0,
                j = p,
                D = y;
            return s < 0 && (d = 0, z = Math.abs(s) / g * p), O + d > o._originalImageWidth && (O = o._originalImageWidth - d, j = O / g * p), f < 0 && (w = 0, $ = Math.abs(f) / R * y), T + w > o._originalImageHeight && (T = o._originalImageHeight - w, D = T / R * y), A.drawImage(this.elements.preview, d, w, O, T, z, $, j, D), E && (A.fillStyle = "#fff", A.globalCompositeOperation = "destination-in", A.beginPath(), A.arc(S.width / 2, S.height / 2, S.width / 2, 0, Math.PI * 2, !0), A.closePath(), A.fill()), S
        }

        function qt(n) {
            var o = n.points,
                i = document.createElement("div"),
                s = document.createElement("img"),
                f = o[2] - o[0],
                c = o[3] - o[1];
            return P(i, "croppie-result"), i.appendChild(s), N(s, {
                left: -1 * o[0] + "px",
                top: -1 * o[1] + "px"
            }), s.src = n.url, N(i, {
                width: f + "px",
                height: c + "px"
            }), i
        }

        function Gt(n) {
            return Oe.call(this, n).toDataURL(n.format, n.quality)
        }

        function Kt(n) {
            var o = this;
            return new Promise(function(i) {
                Oe.call(o, n).toBlob(function(s) {
                    i(s)
                }, n.format, n.quality)
            })
        }

        function Qt(n) {
            this.elements.img.parentNode && (Array.prototype.forEach.call(this.elements.img.classList, function(o) {
                n.classList.add(o)
            }), this.elements.img.parentNode.replaceChild(n, this.elements.img), this.elements.preview = n), this.elements.img = n
        }

        function Ze(n, o) {
            var i = this,
                s, f = [],
                c = null,
                m = ke.call(i);
            if (typeof n == "string") s = n, n = {};
            else if (Array.isArray(n)) f = n.slice();
            else {
                if (typeof n == "undefined" && i.data.url) return Re.call(i), ie.call(i), null;
                s = n.url, f = n.points || [], c = typeof n.zoom == "undefined" ? null : n.zoom
            }
            return i.data.bound = !1, i.data.url = s || i.data.url, i.data.boundZoom = c, U(s, m).then(function(g) {
                if (Qt.call(i, g), f.length) i.options.relative && (f = [f[0] * g.naturalWidth / 100, f[1] * g.naturalHeight / 100, f[2] * g.naturalWidth / 100, f[3] * g.naturalHeight / 100]);
                else {
                    var R = J(g),
                        E = i.elements.viewport.getBoundingClientRect(),
                        S = E.width / E.height,
                        A = R.width / R.height,
                        p, y;
                    A > S ? (y = R.height, p = y * S) : (p = R.width, y = R.height / S);
                    var d = (R.width - p) / 2,
                        w = (R.height - y) / 2,
                        O = d + p,
                        T = w + y;
                    i.data.points = [d, w, O, T]
                }
                i.data.orientation = n.orientation || 1, i.data.points = f.map(function(z) {
                    return parseFloat(z)
                }), i.options.useCanvas && Vt.call(i, i.data.orientation), Re.call(i), ie.call(i), o && o()
            })
        }

        function ee(n, o) {
            return parseFloat(n).toFixed(o || 0)
        }

        function je() {
            var n = this,
                o = n.elements.preview.getBoundingClientRect(),
                i = n.elements.viewport.getBoundingClientRect(),
                s = i.left - o.left,
                f = i.top - o.top,
                c = (i.width - n.elements.viewport.offsetWidth) / 2,
                m = (i.height - n.elements.viewport.offsetHeight) / 2,
                g = s + n.elements.viewport.offsetWidth + c,
                R = f + n.elements.viewport.offsetHeight + m,
                E = n._currentZoom;
            (E === 1 / 0 || isNaN(E)) && (E = 1);
            var S = n.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
            return s = Math.max(S, s / E), f = Math.max(S, f / E), g = Math.max(S, g / E), R = Math.max(S, R / E), {
                points: [ee(s), ee(f), ee(g), ee(R)],
                zoom: E,
                orientation: n.data.orientation
            }
        }
        var Jt = {
                type: "canvas",
                format: "png",
                quality: 1
            },
            en = ["jpeg", "webp", "png"];

        function tn(n) {
            var o = this,
                i = je.call(o),
                s = M(x(Jt), x(n)),
                f = typeof n == "string" ? n : s.type || "base64",
                c = s.size || "viewport",
                m = s.format,
                g = s.quality,
                R = s.backgroundColor,
                E = typeof s.circle == "boolean" ? s.circle : o.options.viewport.type === "circle",
                S = o.elements.viewport.getBoundingClientRect(),
                A = S.width / S.height,
                p;
            return c === "viewport" ? (i.outputWidth = S.width, i.outputHeight = S.height) : typeof c == "object" && (c.width && c.height ? (i.outputWidth = c.width, i.outputHeight = c.height) : c.width ? (i.outputWidth = c.width, i.outputHeight = c.width / A) : c.height && (i.outputWidth = c.height * A, i.outputHeight = c.height)), en.indexOf(m) > -1 && (i.format = "image/" + m, i.quality = g), i.circle = E, i.url = o.data.url, i.backgroundColor = R, p = new Promise(function(y) {
                switch (f.toLowerCase()) {
                    case "rawcanvas":
                        y(Oe.call(o, i));
                        break;
                    case "canvas":
                    case "base64":
                        y(Gt.call(o, i));
                        break;
                    case "blob":
                        Kt.call(o, i).then(y);
                        break;
                    default:
                        y(qt.call(o, i));
                        break
                }
            }), p
        }

        function nn() {
            Re.call(this)
        }

        function rn(n) {
            if (!this.options.useCanvas || !this.options.enableOrientation) throw "Croppie: Cannot rotate without enableOrientation && EXIF.js included";
            var o = this,
                i = o.elements.canvas;
            if (o.data.orientation = _(o.data.orientation, n), De(i, o.elements.img, o.data.orientation), fe.call(o, !0), Se.call(o), Math.abs(n) / 90 % 2 == 1) {
                var s = o._originalImageHeight,
                    f = o._originalImageWidth;
                o._originalImageWidth = s, o._originalImageHeight = f
            }
        }

        function on() {
            var n = this;
            n.element.removeChild(n.elements.boundary), W(n.element, "croppie-container"), n.options.enableZoom && n.element.removeChild(n.elements.zoomerWrap), delete n.elements
        }
        if (typeof window != "undefined" && window.jQuery) {
            var te = window.jQuery;
            te.fn.croppie = function(n) {
                var o = typeof n;
                if (o === "string") {
                    var i = Array.prototype.slice.call(arguments, 1),
                        s = te(this).data("croppie");
                    return n === "get" ? s.get() : n === "result" ? s.result.apply(s, i) : n === "bind" ? s.bind.apply(s, i) : this.each(function() {
                        var f = te(this).data("croppie");
                        if (!!f) {
                            var c = f[n];
                            if (te.isFunction(c)) c.apply(f, i), n === "destroy" && te(this).removeData("croppie");
                            else throw "Croppie " + n + " method not found"
                        }
                    })
                } else return this.each(function() {
                    var f = new q(this, n);
                    f.$ = te, te(this).data("croppie", f)
                })
            }
        }

        function q(n, o) {
            if (n.className.indexOf("croppie-container") > -1) throw new Error("Croppie: Can't initialize croppie more than once");
            if (this.element = n, this.options = M(x(q.defaults), o), this.element.tagName.toLowerCase() === "img") {
                var i = this.element;
                P(i, "cr-original-image"), Z(i, {
                    "aria-hidden": "true",
                    alt: ""
                });
                var s = document.createElement("div");
                this.element.parentNode.appendChild(s), s.appendChild(i), this.element = s, this.options.url = this.options.url || i.src
            }
            if (Ft.call(this), this.options.url) {
                var f = {
                    url: this.options.url,
                    points: this.options.points
                };
                delete this.options.url, delete this.options.points, Ze.call(this, f)
            }
        }
        return q.defaults = {
            viewport: {
                width: 100,
                height: 100,
                type: "square"
            },
            boundary: {},
            orientationControls: {
                enabled: !0,
                leftClass: "",
                rightClass: ""
            },
            resizeControls: {
                width: !0,
                height: !0
            },
            customClass: "",
            showZoomer: !0,
            enableZoom: !0,
            enableResize: !1,
            mouseWheelZoom: !0,
            enableExif: !1,
            enforceBoundary: !0,
            enableOrientation: !1,
            enableKeyMovement: !0,
            update: function() {}
        }, q.globals = {
            translate: "translate3d"
        }, M(q.prototype, {
            bind: function(n, o) {
                return Ze.call(this, n, o)
            },
            get: function() {
                var n = je.call(this),
                    o = n.points;
                return this.options.relative && (o[0] /= this.elements.img.naturalWidth / 100, o[1] /= this.elements.img.naturalHeight / 100, o[2] /= this.elements.img.naturalWidth / 100, o[3] /= this.elements.img.naturalHeight / 100), n
            },
            result: function(n) {
                return tn.call(this, n)
            },
            refresh: function() {
                return nn.call(this)
            },
            setZoom: function(n) {
                re.call(this, n), L(this.elements.zoomer)
            },
            rotate: function(n) {
                rn.call(this, n)
            },
            destroy: function() {
                return on.call(this)
            }
        }), q
    })
})(We, We.exports);
var ir = We.exports,
    Vn = Yn(fn),
    qn, Gn, Kn, Fe = Vn,
    Qn = 0;

function $t(e, t, r, a, u) {
    var l, h, v = {};
    for (h in t) h == "ref" ? l = t[h] : v[h] = t[h];
    var k = {
        type: e,
        props: v,
        key: r,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Qn,
        __source: a,
        __self: u
    };
    if (typeof e == "function" && (l = e.defaultProps))
        for (h in l) v[h] === void 0 && (v[h] = l[h]);
    return Fe.options.vnode && Fe.options.vnode(k), k
}
Kn = Fe.Fragment, Gn = $t, qn = $t;
export {
    Jn as A, ir as C, Kn as F, le as S, qn as a, tr as b, nr as c, er as d, rr as e, Gn as j, _n as l, hn as y
};
