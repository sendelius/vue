import e from "./ui/btn/Btn.js";
import { t } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as n, Teleport as r, Transition as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, getCurrentScope as m, guardReactiveProps as h, h as g, inject as _, mergeDefaults as v, mergeProps as y, nextTick as b, normalizeClass as x, normalizeProps as S, normalizeStyle as C, onBeforeUpdate as w, onMounted as T, onScopeDispose as E, onUnmounted as D, openBlock as O, provide as k, reactive as A, readonly as j, ref as M, renderList as N, renderSlot as P, resolveDynamicComponent as ee, shallowReadonly as F, shallowRef as te, toDisplayString as I, toRaw as ne, toRef as L, toValue as R, unref as z, useSlots as re, useTemplateRef as B, vShow as V, watch as H, withCtx as U, withDirectives as W, withKeys as ie, withModifiers as ae } from "vue";
import './InputDate.css';// node_modules/@vueuse/shared/dist/index.js
var G = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var K = Object.prototype.toString, q = (e) => K.call(e) === "[object Object]", oe = () => {}, se = /* #__PURE__ */ ce();
function ce() {
	var e, t;
	return G && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function le(e) {
	return Array.isArray(e) ? e : [e];
}
function ue(e, t, n) {
	return H(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/@vueuse/core/dist/index.js
var de = G ? window : void 0;
G && window.document, G && window.navigator, G && window.location;
function fe(e) {
	let t = R(e);
	return t?.$el ?? t;
}
function pe(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = a(() => {
		let t = le(R(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return ue(() => [
		n.value?.map((e) => fe(e)) ?? [de].filter((e) => e != null),
		le(R(n.value ? e[1] : e[0])),
		le(z(n.value ? e[2] : e[1])),
		R(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = q(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var me = !1;
function he(e, t, n = {}) {
	let { window: r = de, ignore: i = [], capture: a = !0, detectIframe: o = !1, controls: s = !1 } = n;
	if (!r) return s ? {
		stop: oe,
		cancel: oe,
		trigger: oe
	} : oe;
	if (se && !me) {
		me = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", oe, e)), r.document.documentElement.addEventListener("click", oe, e);
	}
	let c = !0, l = (e) => R(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = fe(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function u(e) {
		let t = R(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function d(e, t) {
		let n = R(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let f = (n) => {
		let r = fe(e);
		n.target != null && (!(r instanceof Element) && u(e) && d(e, n) || r && r !== n.target && !n.composedPath().includes(r) && ("detail" in n && n.detail === 0 && (c = !l(n)), c ? t(n) : c = !0));
	}, p = !1, m = [
		pe(r, "click", (e) => {
			p || (p = !0, setTimeout(() => {
				p = !1;
			}, 0), f(e));
		}, {
			passive: !0,
			capture: a
		}),
		pe(r, "pointerdown", (t) => {
			let n = fe(e);
			c = !l(t) && !(!n || t.composedPath().includes(n));
		}, { passive: !0 }),
		o && pe(r, "blur", (n) => {
			setTimeout(() => {
				let i = fe(e), a = r.document.activeElement;
				for (; a?.shadowRoot;) a = a.shadowRoot.activeElement;
				a?.tagName === "IFRAME" && !i?.contains(r.document.activeElement) && t(n);
			}, 0);
		}, { passive: !0 })
	].filter(Boolean), h = () => m.forEach((e) => e());
	return s ? {
		stop: h,
		cancel: () => {
			c = !1;
		},
		trigger: (e) => {
			c = !0, f(e), c = !1;
		}
	} : h;
}
function ge(e, t = {}) {
	let { threshold: n = 50, onSwipe: r, onSwipeEnd: i, onSwipeStart: o, passive: s = !0 } = t, c = A({
		x: 0,
		y: 0
	}), l = A({
		x: 0,
		y: 0
	}), u = a(() => c.x - l.x), d = a(() => c.y - l.y), { max: f, abs: p } = Math, m = a(() => f(p(u.value), p(d.value)) >= n), h = te(!1), g = a(() => m.value ? p(u.value) > p(d.value) ? u.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), _ = (e) => [e.touches[0].clientX, e.touches[0].clientY], v = (e, t) => {
		c.x = e, c.y = t;
	}, y = (e, t) => {
		l.x = e, l.y = t;
	}, b = {
		passive: s,
		capture: !s
	}, x = [
		pe(e, "touchstart", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			v(t, n), y(t, n), o?.(e);
		}, b),
		pe(e, "touchmove", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			y(t, n), b.capture && !b.passive && Math.abs(u.value) > Math.abs(d.value) && e.preventDefault(), !h.value && m.value && (h.value = !0), h.value && r?.(e);
		}, b),
		pe(e, ["touchend", "touchcancel"], (e) => {
			h.value && i?.(e, g.value), h.value = !1;
		}, b)
	];
	return {
		isSwiping: h,
		direction: g,
		coordsStart: c,
		coordsEnd: l,
		lengthX: u,
		lengthY: d,
		stop: () => x.forEach((e) => e())
	};
}
/* @__NO_SIDE_EFFECTS__ */
function _e() {
	let e = M([]);
	return e.value.set = (t) => {
		t && e.value.push(t);
	}, w(() => {
		e.value.length = 0;
	}), e;
}
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ve = Math.min, ye = Math.max, be = Math.round, xe = Math.floor, Se = (e) => ({
	x: e,
	y: e
}), Ce = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function we(e, t, n) {
	return ye(e, ve(t, n));
}
function Te(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ee(e) {
	return e.split("-")[0];
}
function De(e) {
	return e.split("-")[1];
}
function Oe(e) {
	return e === "x" ? "y" : "x";
}
function ke(e) {
	return e === "y" ? "height" : "width";
}
function Ae(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function je(e) {
	return Oe(Ae(e));
}
function Me(e, t, n) {
	n === void 0 && (n = !1);
	let r = De(e), i = je(e), a = ke(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Ve(o)), [o, Ve(o)];
}
function Ne(e) {
	let t = Ve(e);
	return [
		Pe(e),
		t,
		Pe(t)
	];
}
function Pe(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Fe = ["left", "right"], Ie = ["right", "left"], Le = ["top", "bottom"], Re = ["bottom", "top"];
function ze(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ie : Fe : t ? Fe : Ie;
		case "left":
		case "right": return t ? Le : Re;
		default: return [];
	}
}
function Be(e, t, n, r) {
	let i = De(e), a = ze(Ee(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Pe)))), a;
}
function Ve(e) {
	let t = Ee(e);
	return Ce[t] + e.slice(t.length);
}
function He(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Ue(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : He(e);
}
function We(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Ge(e, t, n) {
	let { reference: r, floating: i } = e, a = Ae(t), o = je(t), s = ke(o), c = Ee(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = De(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Ke(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Te(t, e), p = Ue(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = We(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = We(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var qe = 50, Je = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ke
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ge(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < qe && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Ge(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ye = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Te(e, t) || {};
		if (l == null) return {};
		let d = Ue(u), f = {
			x: n,
			y: r
		}, p = je(i), m = ke(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		C && await (o.isElement == null ? void 0 : o.isElement(S)) || (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = ve(d[_], T), D = ve(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = we(E, k, O), j = !c.arrow && De(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), Xe = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Te(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ee(r), _ = Ae(o), v = Ee(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Ve(o)] : Ne(o)), x = p !== "none";
			!d && x && b.push(...Be(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Me(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Ae(t) || T.every((e) => Ae(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Ae(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, Ze = /*#__PURE__*/ new Set(["left", "top"]);
async function Qe(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ee(n), s = De(n), c = Ae(n) === "y", l = Ze.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Te(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var $e = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Qe(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, et = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Te(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Ae(i), p = Oe(f), m = u[p], h = u[f], g = (e, t) => we(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
};
// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function tt() {
	return typeof window < "u";
}
function nt(e) {
	return at(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function rt(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function it(e) {
	return ((at(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function at(e) {
	return tt() ? e instanceof Node || e instanceof rt(e).Node : !1;
}
function ot(e) {
	return tt() ? e instanceof Element || e instanceof rt(e).Element : !1;
}
function st(e) {
	return tt() ? e instanceof HTMLElement || e instanceof rt(e).HTMLElement : !1;
}
function ct(e) {
	return !tt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof rt(e).ShadowRoot;
}
function lt(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = bt(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ut(e) {
	return /^(table|td|th)$/.test(nt(e));
}
function dt(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var ft = /transform|translate|scale|rotate|perspective|filter/, pt = /paint|layout|strict|content/, mt = (e) => !!e && e !== "none", ht;
function gt(e) {
	let t = ot(e) ? bt(e) : e;
	return mt(t.transform) || mt(t.translate) || mt(t.scale) || mt(t.rotate) || mt(t.perspective) || !vt() && (mt(t.backdropFilter) || mt(t.filter)) || ft.test(t.willChange || "") || pt.test(t.contain || "");
}
function _t(e) {
	let t = St(e);
	for (; st(t) && !yt(t);) {
		if (gt(t)) return t;
		if (dt(t)) return null;
		t = St(t);
	}
	return null;
}
function vt() {
	return ht ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ht;
}
function yt(e) {
	return /^(html|body|#document)$/.test(nt(e));
}
function bt(e) {
	return rt(e).getComputedStyle(e);
}
function xt(e) {
	return ot(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function St(e) {
	if (nt(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ct(e) && e.host || it(e);
	return ct(t) ? t.host : t;
}
function Ct(e) {
	let t = St(e);
	return yt(t) ? (e.ownerDocument || e).body : st(t) && lt(t) ? t : Ct(t);
}
function wt(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ct(e), i = r === e.ownerDocument?.body, a = rt(r);
	if (i) {
		let e = Tt(a);
		return t.concat(a, a.visualViewport || [], lt(r) ? r : [], e && n ? wt(e) : []);
	}
	return t.concat(r, wt(r, [], n));
}
function Tt(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Et(e) {
	let t = bt(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = st(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = be(n) !== a || be(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Dt(e) {
	return ot(e) ? e : e.contextElement;
}
function Ot(e) {
	let t = Dt(e);
	if (!st(t)) return Se(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Et(t), o = (a ? be(n.width) : n.width) / r, s = (a ? be(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var kt = /*#__PURE__*/ Se(0);
function At(e) {
	let t = rt(e);
	return !vt() || !t.visualViewport ? kt : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function jt(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === rt(e);
}
function Mt(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Dt(e), o = Se(1);
	t && (r ? ot(r) && (o = Ot(r)) : o = Ot(e));
	let s = jt(a, n, r) ? At(a) : Se(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = rt(a), t = ot(r) ? rt(r) : r, n = e, i = Tt(n);
		for (; i && t !== n;) {
			let e = Ot(i), t = i.getBoundingClientRect(), r = bt(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = rt(i), i = Tt(n);
		}
	}
	return We({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Nt(e, t) {
	let n = xt(e).scrollLeft;
	return t ? t.left + n : Mt(it(e)).left + n;
}
function Pt(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Nt(e, n),
		y: n.top + t.scrollTop
	};
}
function Ft(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = it(r), s = t ? dt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Se(1), u = Se(0), d = st(r);
	if ((d || !a) && ((nt(r) !== "body" || lt(o)) && (c = xt(r)), d)) {
		let e = Mt(r);
		l = Ot(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Pt(o, c) : Se(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function It(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Lt(e) {
	let t = xt(e), n = e.ownerDocument.body, r = ye(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = ye(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Nt(e), o = -t.scrollTop;
	return bt(n).direction === "rtl" && (a += ye(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Rt = 25;
function zt(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = rt(e), a = it(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !vt() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Nt(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Rt && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Bt(e, t) {
	let n = Mt(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ot(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Vt(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = zt(e, n, t);
	else if (t === "document") r = Lt(it(e));
	else if (ot(t)) r = Bt(t, n);
	else {
		let n = At(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return We(r);
}
function Ht(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = wt(e, [], !1).filter((e) => ot(e) && nt(e) !== "body"), i = null, a = bt(e).position === "fixed", o = a ? St(e) : e;
	for (; ot(o) && !yt(o);) {
		let e = bt(o), t = gt(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = St(o);
	}
	return t.set(e, r), r;
}
function Ut(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? dt(t) ? [] : Ht(t, this._c) : [].concat(n), r], o = Vt(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Vt(t, a[e], i);
		s = ye(n.top, s), c = ve(n.right, c), l = ve(n.bottom, l), u = ye(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Wt(e) {
	let { width: t, height: n } = Et(e);
	return {
		width: t,
		height: n
	};
}
function Gt(e, t, n) {
	let r = st(t), i = it(t), a = n === "fixed", o = Mt(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Se(0);
	if ((r || !a) && ((nt(t) !== "body" || lt(i)) && (s = xt(t)), r)) {
		let e = Mt(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Nt(i));
	let l = i && !r && !a ? Pt(i, s) : Se(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Kt(e) {
	return bt(e).position === "static";
}
function qt(e, t) {
	if (!st(e) || bt(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return it(e) === n && (n = n.ownerDocument.body), n;
}
function Jt(e, t) {
	let n = rt(e);
	if (dt(e)) return n;
	if (!st(e)) {
		let t = St(e);
		for (; t && !yt(t);) {
			if (ot(t) && !Kt(t)) return t;
			t = St(t);
		}
		return n;
	}
	let r = qt(e, t);
	for (; r && ut(r) && Kt(r);) r = qt(r, t);
	return r && yt(r) && Kt(r) && !gt(r) ? n : r || _t(e) || n;
}
var Yt = async function(e) {
	let t = this.getOffsetParent || Jt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Gt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Xt(e) {
	return bt(e).direction === "rtl";
}
var Zt = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ft,
	getDocumentElement: it,
	getClippingRect: Ut,
	getOffsetParent: Jt,
	getElementRects: Yt,
	getClientRects: It,
	getDimensions: Wt,
	getScale: Ot,
	isElement: ot,
	isRTL: Xt
};
function Qt(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $t(e, t, n) {
	let r = null, i, a = it(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = xe(d), h = xe(a.clientWidth - (u + f)), g = xe(a.clientHeight - (d + p)), _ = xe(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: ye(0, ve(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Qt(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = rt(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function en(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Dt(e), u = i || a ? [...l ? wt(l) : [], ...t ? wt(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? $t(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Mt(e) : null;
	c && g();
	function g() {
		let t = Mt(e);
		h && !Qt(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var tn = $e, nn = et, rn = Xe, an = Ye, on = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Zt,
		...i.platform,
		_c: r
	};
	return Je(e, t, {
		...i,
		platform: a
	});
};
// node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function sn(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function cn(e) {
	if (sn(e)) {
		let t = e.$el;
		return at(t) && nt(t) === "#comment" ? null : t;
	}
	return e;
}
function ln(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = cn(R(e.element));
			return n == null ? {} : an({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function un(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dn(e, t) {
	let n = un(e);
	return Math.round(t * n) / n;
}
function fn(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = a(() => R(n.open) ?? !0), o = a(() => R(n.middleware)), s = a(() => R(n.placement) ?? "bottom"), c = a(() => R(n.strategy) ?? "absolute"), l = a(() => R(n.transform) ?? !0), u = a(() => cn(e.value)), d = a(() => cn(t.value)), f = M(0), p = M(0), h = M(c.value), g = M(s.value), _ = te({}), v = M(!1), y = a(() => {
		let e = {
			position: h.value,
			left: "0",
			top: "0"
		};
		if (!d.value) return e;
		let t = dn(d.value, f.value), n = dn(d.value, p.value);
		return l.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...un(d.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: h.value,
			left: t + "px",
			top: n + "px"
		};
	}), b;
	function x() {
		if (u.value == null || d.value == null) return;
		let e = i.value;
		on(u.value, d.value, {
			middleware: o.value,
			placement: s.value,
			strategy: c.value
		}).then((t) => {
			f.value = t.x, p.value = t.y, h.value = t.strategy, g.value = t.placement, _.value = t.middlewareData, v.value = e !== !1;
		});
	}
	function S() {
		typeof b == "function" && (b(), b = void 0);
	}
	function C() {
		S(), r === void 0 ? x() : u.value != null && d.value != null && (b = r(u.value, d.value, x));
	}
	function w() {
		i.value || (v.value = !1);
	}
	return H([
		o,
		s,
		c,
		i
	], x, { flush: "sync" }), H([u, d], C, { flush: "sync" }), H(i, w, { flush: "sync" }), m() && E(S), {
		x: F(f),
		y: F(p),
		strategy: F(h),
		placement: F(g),
		middlewareData: F(_),
		isPositioned: F(v),
		floatingStyles: y,
		update: x
	};
}
var pn = 6048e5, mn = 864e5, hn = 6e4, gn = 36e5, _n = 1e3, vn = Symbol.for("constructDateFrom");
// node_modules/date-fns/constructFrom.js
function yn(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && vn in e ? e[vn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
// node_modules/date-fns/toDate.js
function J(e, t) {
	return yn(t || e, e);
}
// node_modules/date-fns/addDays.js
function bn(e, t, n) {
	let r = J(e, n?.in);
	return isNaN(t) ? yn(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
// node_modules/date-fns/addMonths.js
function xn(e, t, n) {
	let r = J(e, n?.in);
	if (isNaN(t)) return yn(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = yn(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
// node_modules/date-fns/add.js
function Sn(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = J(e, n?.in), d = i || r ? xn(u, i + r * 12) : u, f = o || a ? bn(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return yn(n?.in || e, +f + p);
}
// node_modules/date-fns/_lib/defaultOptions.js
var Cn = {};
function wn() {
	return Cn;
}
// node_modules/date-fns/startOfWeek.js
function Tn(e, t) {
	let n = wn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = J(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
// node_modules/date-fns/startOfISOWeek.js
function En(e, t) {
	return Tn(e, {
		...t,
		weekStartsOn: 1
	});
}
// node_modules/date-fns/getISOWeekYear.js
function Dn(e, t) {
	let n = J(e, t?.in), r = n.getFullYear(), i = yn(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = En(i), o = yn(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = En(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function On(e) {
	let t = J(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
// node_modules/date-fns/_lib/normalizeDates.js
function kn(e, ...t) {
	let n = yn.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
// node_modules/date-fns/startOfDay.js
function An(e, t) {
	let n = J(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/differenceInCalendarDays.js
function jn(e, t, n) {
	let [r, i] = kn(n?.in, e, t), a = An(r), o = An(i), s = +a - On(a), c = +o - On(o);
	return Math.round((s - c) / mn);
}
// node_modules/date-fns/startOfISOWeekYear.js
function Mn(e, t) {
	let n = Dn(e, t), r = yn(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), En(r);
}
// node_modules/date-fns/addQuarters.js
function Nn(e, t, n) {
	return xn(e, t * 3, n);
}
// node_modules/date-fns/addYears.js
function Pn(e, t, n) {
	return xn(e, t * 12, n);
}
// node_modules/date-fns/compareAsc.js
function Fn(e, t) {
	let n = +J(e) - J(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
// node_modules/date-fns/isSameDay.js
function In(e, t, n) {
	let [r, i] = kn(n?.in, e, t);
	return +An(r) == +An(i);
}
// node_modules/date-fns/isDate.js
function Ln(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
// node_modules/date-fns/isValid.js
function Rn(e) {
	return !(!Ln(e) && typeof e != "number" || isNaN(+J(e)));
}
// node_modules/date-fns/differenceInCalendarMonths.js
function zn(e, t, n) {
	let [r, i] = kn(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
// node_modules/date-fns/getQuarter.js
function Bn(e, t) {
	let n = J(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
// node_modules/date-fns/differenceInCalendarYears.js
function Vn(e, t, n) {
	let [r, i] = kn(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
// node_modules/date-fns/_lib/getRoundingMethod.js
function Hn(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
// node_modules/date-fns/endOfDay.js
function Un(e, t) {
	let n = J(e, t?.in);
	return n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/endOfMonth.js
function Wn(e, t) {
	let n = J(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/isLastDayOfMonth.js
function Gn(e, t) {
	let n = J(e, t?.in);
	return +Un(n, t) == +Wn(n, t);
}
// node_modules/date-fns/differenceInMonths.js
function Kn(e, t, n) {
	let [r, i, a] = kn(n?.in, e, e, t), o = Fn(i, a), s = Math.abs(zn(i, a));
	if (s < 1) return 0;
	i.getMonth() === 1 && i.getDate() > 27 && i.setDate(30), i.setMonth(i.getMonth() - o * s);
	let c = Fn(i, a) === -o;
	Gn(r) && s === 1 && Fn(r, a) === 1 && (c = !1);
	let l = o * (s - +c);
	return l === 0 ? 0 : l;
}
// node_modules/date-fns/differenceInYears.js
function qn(e, t, n) {
	let [r, i] = kn(n?.in, e, t), a = Fn(r, i), o = Math.abs(Vn(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(Fn(r, i) === -a));
	return s === 0 ? 0 : s;
}
// node_modules/date-fns/_lib/normalizeInterval.js
function Jn(e, t) {
	let [n, r] = kn(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
// node_modules/date-fns/eachDayOfInterval.js
function Yn(e, t) {
	let { start: n, end: r } = Jn(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(yn(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
// node_modules/date-fns/startOfQuarter.js
function Xn(e, t) {
	let n = J(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/eachQuarterOfInterval.js
function Zn(e, t) {
	let { start: n, end: r } = Jn(t?.in, e), i = +n > +r, a = i ? +Xn(n) : +Xn(r), o = Xn(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(yn(n, o)), o = Nn(o, s);
	return i ? c.reverse() : c;
}
// node_modules/date-fns/startOfMonth.js
function Qn(e, t) {
	let n = J(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfYear.js
function $n(e, t) {
	let n = J(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/startOfYear.js
function er(e, t) {
	let n = J(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfWeek.js
function tr(e, t) {
	let n = wn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = J(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
// node_modules/date-fns/endOfQuarter.js
function nr(e, t) {
	let n = J(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var rr = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, ir = (e, t, n) => {
	let r, i = rr[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function ar(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var or = {
	date: ar({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: ar({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: ar({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, sr = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, cr = (e, t, n, r) => sr[e];
// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function lr(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var ur = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: lr({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: lr({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: lr({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: lr({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: lr({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
// node_modules/date-fns/locale/_lib/buildMatchFn.js
function dr(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? pr(s, (e) => e.test(o)) : fr(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function fr(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function pr(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function mr(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
// node_modules/date-fns/locale/en-US.js
var hr = {
	code: "en-US",
	formatDistance: ir,
	formatLong: or,
	formatRelative: cr,
	localize: ur,
	match: {
		ordinalNumber: mr({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: dr({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: dr({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: dr({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: dr({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: dr({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
// node_modules/date-fns/getDayOfYear.js
function gr(e, t) {
	let n = J(e, t?.in);
	return jn(n, er(n)) + 1;
}
// node_modules/date-fns/getISOWeek.js
function _r(e, t) {
	let n = J(e, t?.in), r = +En(n) - Mn(n);
	return Math.round(r / pn) + 1;
}
// node_modules/date-fns/getWeekYear.js
function vr(e, t) {
	let n = J(e, t?.in), r = n.getFullYear(), i = wn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = yn(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Tn(o, t), c = yn(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Tn(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
// node_modules/date-fns/startOfWeekYear.js
function yr(e, t) {
	let n = wn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = vr(e, t), a = yn(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Tn(a, t);
}
// node_modules/date-fns/getWeek.js
function br(e, t) {
	let n = J(e, t?.in), r = +Tn(n, t) - yr(n, t);
	return Math.round(r / pn) + 1;
}
// node_modules/date-fns/_lib/addLeadingZeros.js
function xr(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
// node_modules/date-fns/_lib/format/lightFormatters.js
var Sr = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return xr(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : xr(n + 1, 2);
	},
	d(e, t) {
		return xr(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return xr(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return xr(e.getHours(), t.length);
	},
	m(e, t) {
		return xr(e.getMinutes(), t.length);
	},
	s(e, t) {
		return xr(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return xr(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Cr = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, wr = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return Sr.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = vr(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? xr(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : xr(a, t.length);
	},
	R: function(e, t) {
		return xr(Dn(e), t.length);
	},
	u: function(e, t) {
		return xr(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return xr(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return xr(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return Sr.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return xr(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = br(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : xr(i, t.length);
	},
	I: function(e, t, n) {
		let r = _r(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : xr(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Sr.d(e, t);
	},
	D: function(e, t, n) {
		let r = gr(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : xr(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return xr(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return xr(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return xr(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? Cr.noon : r === 0 ? Cr.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? Cr.evening : r >= 12 ? Cr.afternoon : r >= 4 ? Cr.morning : Cr.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return Sr.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Sr.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : xr(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : xr(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Sr.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Sr.s(e, t);
	},
	S: function(e, t) {
		return Sr.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Er(r);
			case "XXXX":
			case "XX": return Dr(r);
			default: return Dr(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Er(r);
			case "xxxx":
			case "xx": return Dr(r);
			default: return Dr(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Tr(r, ":");
			default: return "GMT" + Dr(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Tr(r, ":");
			default: return "GMT" + Dr(r, ":");
		}
	},
	t: function(e, t, n) {
		return xr(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return xr(+e, t.length);
	}
};
function Tr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + xr(a, 2);
}
function Er(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + xr(Math.abs(e) / 60, 2) : Dr(e, t);
}
function Dr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = xr(Math.trunc(r / 60), 2), a = xr(r % 60, 2);
	return n + i + t + a;
}
// node_modules/date-fns/_lib/format/longFormatters.js
var Or = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, kr = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Ar = {
	p: kr,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Or(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default: a = t.dateTime({ width: "full" });
		}
		return a.replace("{{date}}", Or(r, t)).replace("{{time}}", kr(i, t));
	}
}, jr = /^D+$/, Mr = /^Y+$/, Nr = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Pr(e) {
	return jr.test(e);
}
function Fr(e) {
	return Mr.test(e);
}
function Ir(e, t, n) {
	let r = Lr(e, t, n);
	if (console.warn(r), Nr.includes(e)) throw RangeError(r);
}
function Lr(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
// node_modules/date-fns/format.js
var Rr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Br = /^'([^]*?)'?$/, Vr = /''/g, Hr = /[a-zA-Z]/;
function Ur(e, t, n) {
	let r = wn(), i = n?.locale ?? r.locale ?? hr, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = J(e, n?.in);
	if (!Rn(s)) throw RangeError("Invalid time value");
	let c = t.match(zr).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Ar[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Rr).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Wr(e)
		};
		if (wr[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Hr)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && Fr(a) || !n?.useAdditionalDayOfYearTokens && Pr(a)) && Ir(a, t, String(e));
		let o = wr[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Wr(e) {
	let t = e.match(Br);
	return t ? t[1].replace(Vr, "'") : e;
}
// node_modules/date-fns/getDay.js
function Gr(e, t) {
	return J(e, t?.in).getDay();
}
// node_modules/date-fns/getDaysInMonth.js
function Kr(e, t) {
	let n = J(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = yn(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
// node_modules/date-fns/getDefaultOptions.js
function qr() {
	return Object.assign({}, wn());
}
// node_modules/date-fns/getHours.js
function Jr(e, t) {
	return J(e, t?.in).getHours();
}
// node_modules/date-fns/getISODay.js
function Yr(e, t) {
	let n = J(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
// node_modules/date-fns/getMinutes.js
function Xr(e, t) {
	return J(e, t?.in).getMinutes();
}
// node_modules/date-fns/getMonth.js
function Y(e, t) {
	return J(e, t?.in).getMonth();
}
// node_modules/date-fns/getSeconds.js
function Zr(e) {
	return J(e).getSeconds();
}
// node_modules/date-fns/getYear.js
function X(e, t) {
	return J(e, t?.in).getFullYear();
}
// node_modules/date-fns/isAfter.js
function Qr(e, t) {
	return +J(e) > +J(t);
}
// node_modules/date-fns/isBefore.js
function $r(e, t) {
	return +J(e) < +J(t);
}
// node_modules/date-fns/isEqual.js
function ei(e, t) {
	return +J(e) == +J(t);
}
// node_modules/date-fns/transpose.js
function ti(e, t) {
	let n = ni(t) ? new t(0) : yn(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function ni(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
// node_modules/date-fns/parse/_lib/Setter.js
var ri = 10, ii = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, ai = class extends ii {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, oi = class extends ii {
	priority = ri;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => yn(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : yn(e, ti(e, this.context));
	}
}, Z = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new ai(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, si = class extends Z {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, ci = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, li = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
// node_modules/date-fns/parse/_lib/utils.js
function ui(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function di(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function fi(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * gn + a * hn + o * _n),
		rest: t.slice(n[0].length)
	};
}
function pi(e) {
	return di(ci.anyDigitsSigned, e);
}
function mi(e, t) {
	switch (e) {
		case 1: return di(ci.singleDigit, t);
		case 2: return di(ci.twoDigits, t);
		case 3: return di(ci.threeDigits, t);
		case 4: return di(ci.fourDigits, t);
		default: return di(RegExp("^\\d{1," + e + "}"), t);
	}
}
function hi(e, t) {
	switch (e) {
		case 1: return di(ci.singleDigitSigned, t);
		case 2: return di(ci.twoDigitsSigned, t);
		case 3: return di(ci.threeDigitsSigned, t);
		case 4: return di(ci.fourDigitsSigned, t);
		default: return di(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function gi(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function _i(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function vi(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
// node_modules/date-fns/parse/_lib/parsers/YearParser.js
var yi = class extends Z {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return ui(mi(4, e), r);
			case "yo": return ui(n.ordinalNumber(e, { unit: "year" }), r);
			default: return ui(mi(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = _i(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, bi = class extends Z {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return ui(mi(4, e), r);
			case "Yo": return ui(n.ordinalNumber(e, { unit: "year" }), r);
			default: return ui(mi(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = vr(e, r);
		if (n.isTwoDigitYear) {
			let t = _i(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Tn(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Tn(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, xi = class extends Z {
	priority = 130;
	parse(e, t) {
		return hi(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = yn(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), En(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, Si = class extends Z {
	priority = 130;
	parse(e, t) {
		return hi(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Ci = class extends Z {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return mi(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, wi = class extends Z {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return mi(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Ti = class extends Z {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return ui(di(ci.month, e), r);
			case "MM": return ui(mi(2, e), r);
			case "Mo": return ui(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Ei = class extends Z {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return ui(di(ci.month, e), r);
			case "LL": return ui(mi(2, e), r);
			case "Lo": return ui(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
// node_modules/date-fns/setWeek.js
function Di(e, t, n) {
	let r = J(e, n?.in), i = br(r, n) - t;
	return r.setDate(r.getDate() - i * 7), J(r, n?.in);
}
// node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Oi = class extends Z {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return di(ci.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Tn(Di(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
// node_modules/date-fns/setISOWeek.js
function ki(e, t, n) {
	let r = J(e, n?.in), i = _r(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
// node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Ai = class extends Z {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return di(ci.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return En(ki(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, ji = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Mi = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Ni = class extends Z {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return di(ci.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		let n = vi(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Mi[r] : t >= 1 && t <= ji[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Pi = class extends Z {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return di(ci.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return vi(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
// node_modules/date-fns/setDay.js
function Fi(e, t, n) {
	let r = wn(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = J(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return bn(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
// node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Ii = class extends Z {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Fi(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Li = class extends Z {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return ui(mi(t.length, e), i);
			case "eo": return ui(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Fi(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, Ri = class extends Z {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return ui(mi(t.length, e), i);
			case "co": return ui(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Fi(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
// node_modules/date-fns/setISODay.js
function zi(e, t, n) {
	let r = J(e, n?.in);
	return bn(r, t - Yr(r, n), n);
}
// node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Bi = class extends Z {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return mi(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return ui(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return ui(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return ui(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return ui(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = zi(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, Vi = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(gi(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Hi = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(gi(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Ui = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(gi(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Wi = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return di(ci.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, Gi = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return di(ci.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, Ki = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return di(ci.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, qi = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return di(ci.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, Ji = class extends Z {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return di(ci.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Yi = class extends Z {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return di(ci.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return mi(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Xi = class extends Z {
	priority = 30;
	parse(e, t) {
		return ui(mi(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, Zi = class extends Z {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return fi(li.basicOptionalMinutes, e);
			case "XX": return fi(li.basic, e);
			case "XXXX": return fi(li.basicOptionalSeconds, e);
			case "XXXXX": return fi(li.extendedOptionalSeconds, e);
			default: return fi(li.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : yn(e, e.getTime() - On(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Qi = class extends Z {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return fi(li.basicOptionalMinutes, e);
			case "xx": return fi(li.basic, e);
			case "xxxx": return fi(li.basicOptionalSeconds, e);
			case "xxxxx": return fi(li.extendedOptionalSeconds, e);
			default: return fi(li.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : yn(e, e.getTime() - On(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, $i = class extends Z {
	priority = 40;
	parse(e) {
		return pi(e);
	}
	set(e, t, n) {
		return [yn(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, ea = class extends Z {
	priority = 20;
	parse(e) {
		return pi(e);
	}
	set(e, t, n) {
		return [yn(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, ta = {
	G: new si(),
	y: new yi(),
	Y: new bi(),
	R: new xi(),
	u: new Si(),
	Q: new Ci(),
	q: new wi(),
	M: new Ti(),
	L: new Ei(),
	w: new Oi(),
	I: new Ai(),
	d: new Ni(),
	D: new Pi(),
	E: new Ii(),
	e: new Li(),
	c: new Ri(),
	i: new Bi(),
	a: new Vi(),
	b: new Hi(),
	B: new Ui(),
	h: new Wi(),
	H: new Gi(),
	K: new Ki(),
	k: new qi(),
	m: new Ji(),
	s: new Yi(),
	S: new Xi(),
	X: new Zi(),
	x: new Qi(),
	t: new $i(),
	T: new ea()
}, na = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ra = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ia = /^'([^]*?)'?$/, aa = /''/g, oa = /\S/, sa = /[a-zA-Z]/;
function ca(e, t, n, r) {
	let i = () => yn(r?.in || n, NaN), a = qr(), o = r?.locale ?? a.locale ?? hr, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : J(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new oi(r?.in, n)], d = t.match(ra).map((e) => {
		let t = e[0];
		if (t in Ar) {
			let n = Ar[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(na), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Fr(n) && Ir(n, t, e), !r?.useAdditionalDayOfYearTokens && Pr(n) && Ir(n, t, e);
		let a = n[0], s = ta[a];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = f.find((e) => t.includes(e.token) || e.token === a);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${n}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && f.length > 0) throw RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
			f.push({
				token: a,
				fullToken: n
			});
			let r = s.run(e, n, o.match, l);
			if (!r) return i();
			u.push(r.setter), e = r.rest;
		} else {
			if (a.match(sa)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = la(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && oa.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = J(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function la(e) {
	return e.match(ia)[1].replace(aa, "'");
}
// node_modules/date-fns/isSameWeek.js
function ua(e, t, n) {
	let [r, i] = kn(n?.in, e, t);
	return +Tn(r, n) == +Tn(i, n);
}
// node_modules/date-fns/isSameQuarter.js
function da(e, t, n) {
	let [r, i] = kn(n?.in, e, t);
	return +Xn(r) == +Xn(i);
}
// node_modules/date-fns/subDays.js
function fa(e, t, n) {
	return bn(e, -t, n);
}
// node_modules/date-fns/roundToNearestMinutes.js
function pa(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return yn(e, NaN);
	let r = J(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = Hn(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
// node_modules/date-fns/setMonth.js
function ma(e, t, n) {
	let r = J(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = yn(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = Kr(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
// node_modules/date-fns/set.js
function Q(e, t, n) {
	let r = J(e, n?.in);
	return isNaN(+r) ? yn(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = ma(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
// node_modules/date-fns/setMilliseconds.js
function ha(e, t, n) {
	let r = J(e, n?.in);
	return r.setMilliseconds(t), r;
}
// node_modules/date-fns/setSeconds.js
function ga(e, t, n) {
	let r = J(e, n?.in);
	return r.setSeconds(t), r;
}
// node_modules/date-fns/setYear.js
function _a(e, t, n) {
	let r = J(e, n?.in);
	return isNaN(+r) ? yn(n?.in || e, NaN) : (r.setFullYear(t), r);
}
// node_modules/date-fns/subMonths.js
function va(e, t, n) {
	return xn(e, -t, n);
}
// node_modules/date-fns/sub.js
function ya(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = fa(va(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return yn(n?.in || e, +u - d);
}
// node_modules/date-fns/subYears.js
function ba(e, t, n) {
	return Pn(e, -t, n);
}
// node_modules/@date-fns/tz/tzName/index.js
function xa(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
// node_modules/@date-fns/tz/tzOffset/index.js
var Sa = {}, Ca = {};
function wa(e, t) {
	try {
		let n = (Sa[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Ca ? Ca[n] : Ea(n, n.split(":"));
	} catch {
		if (e in Ca) return Ca[e];
		let t = e?.match(Ta);
		return t ? Ea(e, t.slice(1)) : NaN;
	}
}
var Ta = /([+-]\d\d):?(\d\d)?/;
function Ea(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Ca[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
// node_modules/@date-fns/tz/date/mini.js
var Da = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(wa(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), ja(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -wa(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), ka(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Oa = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Oa.test(e)) return;
	let t = e.replace(Oa, "$1UTC");
	Da.prototype[t] && (e.startsWith("get") ? Da.prototype[e] = function() {
		return this.internal[t]();
	} : (Da.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Aa(this), +this;
	}, Da.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), ka(this), +this;
	}));
});
function ka(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-wa(e.timeZone, e) * 60));
}
function Aa(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ja(e);
}
function ja(e, t) {
	let n = Array.isArray(t) ? Ma(t) : +e.internal, r = wa(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = wa(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(wa(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = wa(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Na(e) - n === y * 60 * 1e3 && Na(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = wa(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	ka(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), ka(e));
}
function Ma(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Na(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-wa(e.timeZone, n) * 60)), +n;
}
// node_modules/@date-fns/tz/date/index.js
var Pa = class e extends Da {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${xa(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
};
// node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function Fa() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [
		g("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		g("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		g("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		g("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
function Ia() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), g("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function La() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Ra() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function za() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), g("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function Ba() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Va() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [g("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var Ha = Symbol("ContextKey"), Ua = (e, t) => {
	let { setTimeModelValue: n } = Po(), r = No(e), i = M(null), o = A({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0,
		actionInMenu: !1
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = M(""), l = M([{
		month: Y(s),
		year: X(s)
	}]), u = A({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, r.range.value.enabled);
	let d = a({
		get: () => i.value,
		set: (e) => {
			i.value = e;
		}
	}), f = a(() => (e) => l.value[e] ? l.value[e].month : 0), p = a(() => (e) => l.value[e] ? l.value[e].year : 0);
	k(Ha, {
		rootProps: e,
		defaults: r,
		modelValue: d,
		state: j(o),
		rootEmit: t,
		calendars: l,
		month: f,
		year: p,
		time: u,
		today: s,
		inputValue: c,
		setState: (e, t) => {
			o[e] = t;
		},
		updateTime: () => {
			n(u, d.value, s, r.range.value.enabled);
		},
		getDate: r.getDate,
		getDateFromParts: r.getDateFromParts
	});
}, Wa = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), Ga = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), Ka = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), qa = [
	"timestamp",
	"date",
	"iso"
], Ja = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), Ya = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), Xa = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), Za = Symbol("FlowKey"), Qa = (e, t) => {
	let { rootEmit: n, rootProps: r, defaults: { timeConfig: i, flow: o } } = $(), s = M(), c = A({
		[Ga.timePicker]: !i.value.enableTimePicker || r.timePicker || r.monthPicker || r.quarterPicker,
		[Ga.calendar]: !1,
		[Ga.header]: !1
	}), l = a(() => r.monthPicker || r.timePicker || r.quarterPicker), u = (e) => {
		let t = o.value?.steps.at(0);
		if (o.value?.steps?.length) {
			if (!e && l.value) return p(t);
			e && (c[e] = !0), Object.keys(c).filter((e) => !c[e]).length || p(t);
		}
	}, d = (e, i = !1) => {
		if (o.value?.steps?.length && s.value === e) {
			let e = o.value.steps.at(o.value.steps.indexOf(s.value) + 1);
			e ? (s.value = e, n("flow-step", s.value), p()) : r.autoApply && !i && b().then(() => t("auto-apply"));
		}
	}, f = (t, n, ...r) => {
		s.value === t && e.value && e.value[n]?.(...r);
	}, p = (e) => {
		e && (s.value = e), f(Ka.month, "toggleMonthPicker", !0), f(Ka.year, "toggleYearPicker", !0), f(Ka.calendar, "toggleTimePicker", !1), f(Ka.time, "toggleTimePicker", !0), (s.value === Ka.hours || s.value === Ka.minutes || s.value === Ka.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return k(Za, {
		childMount: u,
		updateFlowStep: d,
		flowStep: j(s)
	}), { executeFlow: p };
}, $ = () => {
	let e = _(Ha);
	if (!e) throw Error("Can't use context");
	return e;
}, $a = () => {
	let e = _(Za);
	if (!e) throw Error("Can't use flow");
	return e;
}, eo = () => {
	let { rootProps: e, state: t, defaults: { textInput: n } } = $(), r = a(() => t.arrowNavigationLevel), i = M(-1), o = M(-1);
	H(r, (e, t) => {
		y(n.value.enabled && n.value.selectOnFocus ? !0 : e === 0 && t > 0);
	});
	let s = M([]), c = M(/* @__PURE__ */ new Map()), l = () => {
		let e = Array.from(document.querySelectorAll(`[data-dp-action-element="${r.value}"]`)), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r.getBoundingClientRect(), i = e.top, a = e.left;
			t.has(i) || t.set(i, []), t.get(i).push(r), n.set(r, {
				row: i,
				col: a
			});
		}
		s.value = Array.from(t.entries()).sort((e, t) => e[0] - t[0]).map(([e, t]) => u(t, n)), c.value = n;
	}, u = (e, t) => e.sort((e, n) => {
		let r = t.get(e), i = t.get(n);
		return r.col - i.col;
	}), d = (e, t) => {
		r.value === 0 && (i.value = e, o.value = t);
	}, f = (e) => {
		if (![
			Ya.arrowUp,
			Ya.arrowDown,
			Ya.arrowLeft,
			Ya.arrowRight
		].includes(e.key)) return;
		let t = document.activeElement;
		if (!t?.hasAttribute("data-dp-action-element")) return;
		l(), e.preventDefault();
		let n = -1, r = -1;
		for (let e = 0; e < s.value.length; e++) {
			let i = s.value[e].indexOf(t);
			if (i !== -1) {
				n = e, r = i;
				break;
			}
		}
		if (n !== -1) switch (e.key) {
			case Ya.arrowLeft: return p(n, r);
			case Ya.arrowRight: return m(n, r);
			case Ya.arrowUp: return h(n, r);
			case Ya.arrowDown: return g(n, r);
			default: return;
		}
	}, p = (e, t) => {
		if (t > 0) {
			let n = s.value[e][t - 1];
			d(e, t - 1), n && n.focus();
		}
	}, m = (e, t) => {
		if (t < s.value[e].length - 1) {
			let n = s.value[e][t + 1];
			d(e, t + 1), n && n.focus();
		}
	}, h = (e, t) => {
		if (e > 0) {
			let n = s.value[e - 1], r = Math.min(t, n.length - 1), i = n[r];
			d(e - 1, r), i && i.focus();
		}
	}, g = (e, t) => {
		if (e < s.value.length - 1) {
			let n = s.value[e + 1], r = Math.min(t, n.length - 1), i = n[r];
			d(e + 1, r), i && i.focus();
		}
	}, _ = () => {
		b().then(() => {
			l();
			let e = s.value[i.value]?.[o.value];
			e && v(e);
		});
	}, v = (e) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				e.focus({ preventScroll: !0 });
			});
		});
	}, y = (e) => {
		if (e) return _();
		let t = document.querySelector(`[data-dp-element-active="${r.value}"]`);
		if (t && !e) v(t);
		else {
			let e = document.querySelector(`[data-dp-focus-target="true"][data-dp-action-element="${r.value}"]`) ?? document.querySelector(`[data-dp-action-element="${r.value}"]`);
			e && v(e);
		}
	}, x = () => n.value.enabled && document.activeElement?.getAttribute("data-test-id") === "dp-input";
	T(() => {
		e.arrowNavigation && (x() || y(!1), document.addEventListener("keydown", f));
	}), D(() => {
		e.arrowNavigation && document.removeEventListener("keydown", f);
	});
}, to = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = io(), { convertType: r, errorMapper: i } = Po(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = $(), { setTime: v, getWeekFromDate: y } = Fo(), { formatSelectedDate: b, formatForTextInput: x } = Lo();
	H(g, (e, t) => {
		o("internal-model-change", g.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && _();
	}, { deep: !0 }), H(d, (e, t) => {
		e.enabled !== t.enabled && (g.value = null, _());
	}), H(() => m.value.input, () => {
		ne();
	}), H(() => c.locale, () => {
		ne();
	});
	let S = (e) => e ? c.modelType ? R(e) : {
		hours: Jr(e),
		minutes: Xr(e),
		seconds: p.value.enableSeconds ? Zr(e) : 0
	} : null, C = (e) => c.modelType ? R(e) : {
		month: Y(e),
		year: X(e)
	}, w = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, _a(a(), e))) : t(() => [_a(a(), n[0]), n[1] ? _a(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : _a(a(), +n), T = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? L(e) : t, E = (e) => Array.isArray(e) ? [T(e[0], v(e[0])), T(e[1], v(e[1]))] : T(e, v(e)), D = (n) => {
		let r = Q(a(), { date: 1 });
		return Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, Q(r, {
			month: +e.month,
			year: +e.year
		}))) : t(() => [T(n[0], Q(r, {
			month: +n[0].month,
			year: +n[0].year
		})), T(n[1], n[1] ? Q(r, {
			month: +n[1].month,
			year: +n[1].year
		}) : e(d.value.partialRange))], d.value.enabled) : T(n, Q(r, {
			month: +n.month,
			year: +n.year
		}));
	}, O = (e) => {
		if (Array.isArray(e)) return e.map((e) => L(e));
		throw Error(i.dateArr("multi-dates"));
	}, k = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, A = (n) => c.modelAuto ? Array.isArray(n) ? [L(n[0]), L(n[1])] : c.autoApply ? [L(n)] : [L(n), null] : Array.isArray(n) ? t(() => n[1] ? [L(n[0]), n[1] ? L(n[1]) : e(d.value.partialRange)] : [L(n[0])], d.value.enabled) : L(n), j = () => {
		Array.isArray(g.value) && d.value.enabled && g.value.length === 1 && g.value.push(e(d.value.partialRange));
	}, M = () => {
		let t = g.value;
		return [R(t[0]), t[1] ? R(t[1]) : e(d.value.partialRange)];
	}, N = () => Array.isArray(g.value) ? g.value[1] ? M() : R(r(g.value[0])) : [], P = () => (g.value || []).map((e) => R(e)), ee = (e = !1) => (e || j(), c.modelAuto ? N() : f.value.enabled ? P() : Array.isArray(g.value) ? t(() => M(), d.value.enabled) : R(r(g.value))), F = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? E(r(e)) : c.monthPicker ? D(r(e)) : c.yearPicker ? w(r(e)) : f.value.enabled ? O(r(e)) : c.weekPicker ? k(r(e)) : A(r(e)), te = (e) => {
		if (s.isTextInputDate) return;
		let t = F(e);
		n(r(t)) ? (g.value = r(t), ne()) : (g.value = null, l.value = "");
	}, I = () => g.value ? f.value.enabled ? g.value.map((e) => b(e)).join("; ") : u.value.enabled ? x() : b(g.value) : "", ne = () => {
		l.value = I();
	}, L = (e) => c.modelType ? qa.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? ca(e, m.value.input, a(), { locale: c.locale }) : ca(e, c.modelType, a(), { locale: c.locale }) : a(e), R = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, z = (e) => {
		o("update:model-value", e);
	}, re = (e) => Array.isArray(g.value) ? f.value.enabled ? g.value.map((t) => e(t)) : [e(g.value[0]), g.value[1] ? e(g.value[1]) : null] : e(r(g.value)), B = () => {
		if (Array.isArray(g.value)) {
			let e = y(g.value[0], h.value), t = g.value[1] ? y(g.value[1], h.value) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return y(g.value, h.value).map((e) => a(e));
	}, V = (e) => z(r(re(e))), U = () => o("update:model-value", B());
	return {
		checkBeforeEmit: () => g.value ? d.value.enabled ? d.value.partialRange ? g.value.length >= 1 : g.value.length === 2 : !!g.value : !1,
		parseExternalModelValue: te,
		formatInputValue: ne,
		emitModelValue: () => (ne(), c.monthPicker ? V(C) : c.timePicker ? V(S) : c.yearPicker ? V(X) : c.weekPicker ? U() : z(ee()))
	};
}, no = () => {
	let { defaults: { transitions: e } } = $(), t = a(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = a(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, ro = (e) => {
	let { modelValue: t } = $();
	H(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, io = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: i }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Po(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Fo(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? X(t) > X(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? X(t) < X(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), a = r.value.months.map((e) => +e).includes(Y(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === Gr(e)) : !1, c = O(e), l = X(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || i || a || u || s || c);
	}, w = (t, n) => f(...H(e.value.minDate, t, n)) || m(...H(e.value.minDate, t, n)), T = (t, n) => p(...H(e.value.maxDate, t, n)) || m(...H(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !Yn({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = X(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = jn(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !i.value.enableTimePicker || o.monthPicker || o.yearPicker || i.value.ignoreTimeValidation, ee = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), F = (e, t, n) => t ? e.find((e) => +e.hours === Jr(t) && e.minutes === "*" || +e.minutes === Xr(t) && +e.hours === Jr(t)) && n : !1, te = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !F(r, a, n) && !F(i, o, n) && n;
	}, I = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(o.disabledTimes) ? Array.isArray(o.disabledTimes[0]) ? te(o.disabledTimes, n, e) : !n.some((t) => F(o.disabledTimes, t, e)) : e;
	}, ne = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !o.disabledTimes(n);
		return e && r;
	}, L = (e, t) => o.disabledTimes ? Array.isArray(o.disabledTimes) ? I(t, e) : ne(t, e) : t, R = (t) => {
		let n = !0;
		if (!t || P()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? ee(t) : t;
		return (o.maxTime || e.value.maxDate) && (n = W(o.maxTime, e.value.maxDate, "max", d(r), n)), (o.minTime || e.value.minDate) && (n = W(o.minTime, e.value.minDate, "min", d(r), n)), L(t, n);
	}, z = (t) => {
		if (!o.monthPicker) return !0;
		let n = !0, r = s(h(t));
		if (e.value.minDate && e.value.maxDate) {
			let t = s(h(e.value.minDate)), n = s(h(e.value.maxDate));
			return p(r, t) && f(r, n) || m(r, t) || m(r, n);
		}
		if (e.value.minDate) {
			let t = s(h(e.value.minDate));
			n = p(r, t) || m(r, t);
		}
		if (e.value.maxDate) {
			let t = s(h(e.value.maxDate));
			n = f(r, t) || m(r, t);
		}
		return n;
	}, re = a(() => (e) => !i.value.enableTimePicker || i.value.ignoreTimeValidation ? !0 : R(e)), B = a(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !z(e)).length : z(e) : !0), V = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? xn(t, 1) : va(t, 1), a = [Y(i), X(i)];
		return r ? !T(...a) : !w(...a);
	}, H = (e, t, n) => [Q(s(e), { date: 1 }), Q(s(), {
		month: t,
		year: n,
		date: 1
	})], U = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? $r(e, t) : Qr(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || ei(Q(e, i), Q(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, W = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = ie(e, r[0], t), o = ie(e, r[1], t);
			return U(r[0], a, n, !!t) && U(r[1], o, n, !!t) && i;
		}
		let a = ie(e, r, t);
		return U(r, a, n, !!t) && i;
	}, ie = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: k,
		validateDate: C,
		validateMonthYearInRange: D,
		isDateRangeAllowed: A,
		checkMinMaxRange: N,
		isValidTime: R,
		validateMonthYear: V,
		validateMinDate: w,
		validateMaxDate: T,
		isValidDate: (e) => Array.isArray(e) ? Rn(e[0]) && (!e[1] || Rn(e[1])) : e ? Rn(e) : !1,
		checkPartialRangeValue: (e) => {
			if (e) return null;
			throw Error(u.prop("partial-range"));
		},
		checkRangeEnabled: (e, t) => {
			if (t) return e();
			throw Error(u.prop("range"));
		},
		checkMinMaxValue: (e, t, n) => {
			let r = n != null, i = t != null;
			if (!r && !i) return !1;
			let a = +n, o = +t;
			return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
		},
		isTimeValid: re,
		isMonthValid: B
	};
};
function ao(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function oo(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
function so(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? lo(s, (e) => e.test(o)) : co(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function co(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function lo(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function uo(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
var fo = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, po = (e, t, n) => {
	let r, i = fo[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, mo = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, ho = (e, t, n, r) => mo[e], go = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: oo({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: oo({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: oo({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: oo({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: oo({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
}, _o = {
	ordinalNumber: uo({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: so({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: so({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (e) => e + 1
	}),
	month: so({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: so({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: so({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
}, vo = {
	code: "en-US",
	formatDistance: po,
	formatLong: {
		date: ao({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: ao({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: ao({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: ho,
	localize: go,
	match: _o,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, yo = {
	noDisabledRange: !1,
	showLastInRange: !0,
	minMaxRawRange: !1,
	partialRange: !0,
	disableTimeRangeValidation: !1,
	maxRange: void 0,
	minRange: void 0,
	autoRange: void 0,
	fixedStart: !1,
	fixedEnd: !1,
	autoSwitchStartEnd: !0,
	requireEndTime: !1
}, bo = {
	allowStopPropagation: !0,
	closeOnScroll: !1,
	modeHeight: 255,
	allowPreventDefault: !1,
	closeOnClearValue: !0,
	closeOnAutoApply: !0,
	noSwipe: !1,
	keepActionRow: !1,
	onClickOutside: void 0,
	onInternalKeydown: void 0,
	tabOutClosesMenu: !0,
	arrowLeft: void 0,
	keepViewOnOffsetClick: !1,
	timeArrowHoldThreshold: 0,
	shadowDom: !1,
	mobileBreakpoint: 600,
	setDateOnMenuClose: !1,
	escClose: !0,
	spaceConfirm: !0,
	monthChangeOnArrows: !0,
	monthChangeOnScroll: !0
}, xo = {
	enterSubmit: !0,
	tabSubmit: !0,
	openMenu: "open",
	selectOnFocus: !1,
	rangeSeparator: " - ",
	escClose: !0,
	format: void 0,
	maskFormat: void 0,
	applyOnBlur: !1,
	separators: void 0
}, So = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Co = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, wo = {
	toggleOverlay: "Toggle overlay",
	menu: "Datepicker menu",
	input: "Datepicker input",
	openTimePicker: "Open time picker",
	closeTimePicker: "Close time Picker",
	incrementValue: (e) => `Increment ${e}`,
	decrementValue: (e) => `Decrement ${e}`,
	openTpOverlay: (e) => `Open ${e} overlay`,
	amPmButton: "Switch AM/PM mode",
	openYearsOverlay: "Open years overlay",
	openMonthsOverlay: "Open months overlay",
	nextMonth: "Next month",
	prevMonth: "Previous month",
	nextYear: "Next year",
	prevYear: "Previous year",
	day: void 0,
	weekDay: void 0,
	clearInput: "Clear value",
	calendarIcon: "Calendar icon",
	timePicker: "Time picker",
	monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
	yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
	timeOverlay: (e) => `${e} overlay`
}, To = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Eo = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Do = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Oo = {
	enableTimePicker: !0,
	ignoreTimeValidation: !1,
	enableSeconds: !1,
	enableMinutes: !0,
	is24: !0,
	noHoursOverlay: !1,
	noMinutesOverlay: !1,
	noSecondsOverlay: !1,
	hoursGridIncrement: 1,
	minutesGridIncrement: 5,
	secondsGridIncrement: 5,
	hoursIncrement: 1,
	minutesIncrement: 1,
	secondsIncrement: 1,
	timePickerInline: !1,
	startTime: void 0
}, ko = {
	menuWrapRef: null,
	collapse: !1
}, Ao = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => vo,
	dark: !1,
	transitions: !0,
	hideNavigation: () => [],
	vertical: !1,
	hideMonthYearSelect: !1,
	disableYearSelect: !1,
	autoApply: !1,
	disabledDates: () => [],
	hideOffsetDates: !1,
	noToday: !1,
	markers: () => [],
	presetDates: () => [],
	preventMinMaxNavigation: !1,
	reverseYears: !1,
	weekPicker: !1,
	arrowNavigation: !1,
	monthPicker: !1,
	yearPicker: !1,
	quarterPicker: !1,
	timePicker: !1,
	modelAuto: !1,
	multiDates: !1,
	range: !1,
	inline: !1,
	sixWeeks: !1,
	focusStartDate: !1,
	yearFirst: !1,
	loading: !1,
	centered: !1
}, jo = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Mo = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, No = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = Po();
	function i(t, n) {
		let r;
		return r = e.timezone ? new Pa(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Q(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = (t, n, r = 1) => e.timezone ? new Pa(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
		let e = j.value.enableSeconds ? ":ss" : "", t = j.value.enableMinutes ? ":mm" : "";
		return j.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, c = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${w.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : j.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (e) => r(i(), e, j.value.enableSeconds), u = () => D.value.enabled ? j.value.startTime && Array.isArray(j.value.startTime) ? [l(j.value.startTime[0]), l(j.value.startTime[1])] : null : j.value.startTime && !Array.isArray(j.value.startTime) ? l(j.value.startTime) : null, d = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, f = (r) => {
		let a = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = i(e, p.value);
			return [t(n, a), n];
		}));
	}, p = a(() => e.monthPicker || e.yearPicker || e.quarterPicker), m = a(() => {
		let t = typeof e.multiCalendars == "object" && e.multiCalendars, n = {
			static: !0,
			solo: !1
		};
		if (!e.multiCalendars) return {
			...n,
			count: d(!1)
		};
		let r = t ? e.multiCalendars : {}, i = t ? r.count ?? !0 : e.multiCalendars, a = d(i);
		return Object.assign(n, r, { count: a });
	}), h = a(() => u()), g = a(() => ({
		...wo,
		...e.ariaLabels
	})), _ = a(() => ({
		...Eo,
		...e.filters
	})), v = a(() => typeof e.transitions == "boolean" ? e.transitions ? To : !1 : {
		...To,
		...e.transitions
	}), y = a(() => ({
		...Co,
		...e.actionRow
	})), b = a(() => typeof e.textInput == "object" ? {
		...xo,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : k.value.input,
		pattern: e.textInput.format ?? k.value.input,
		enabled: !0
	} : {
		...xo,
		format: k.value.input,
		pattern: k.value.input,
		enabled: e.textInput
	}), x = a(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), S = a(() => ({
		...bo,
		...e.config
	})), C = a(() => typeof e.highlight == "function" ? e.highlight : {
		...So,
		...e.highlight
	}), w = a(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Mo.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Mo.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Mo.label
	} : e.weekNumbers ? Mo : void 0), T = a(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), E = a(() => ({
		minDate: e.minDate ? i(e.minDate) : null,
		maxDate: e.maxDate ? i(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
		highlight: typeof C.value == "object" && Array.isArray(C.value.dates) ? f(C.value.dates) : C.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => {
			let n = i(e.date);
			return [t(n, Xa.DATE), ne(e)];
		})) : null
	})), D = a(() => typeof e.range == "object" ? {
		enabled: !0,
		...yo,
		...e.range
	} : {
		enabled: e.range,
		...yo
	}), O = a(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), k = a(() => ({
		...Do,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), A = a(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), j = a(() => ({
		...Oo,
		...e.timeConfig
	}));
	return {
		transitions: v,
		multiCalendars: m,
		startTime: h,
		ariaLabels: g,
		filters: _,
		actionRow: y,
		textInput: b,
		inline: x,
		config: S,
		highlight: C,
		weekNumbers: w,
		range: D,
		safeDates: E,
		multiDates: T,
		ui: O,
		formats: k,
		teleport: A,
		timeConfig: j,
		flow: a(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: a(() => {
			let t = b.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...jo,
				inputmode: t,
				...e.inputAttrs
			} : {
				...jo,
				inputmode: t
			};
		}),
		floatingConfig: a(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		weekStart: a(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : Gr(Tn(i(), { locale: e.locale }))),
		getDate: i,
		getDateFromParts: o
	};
}, Po = () => {
	let e = (e, t) => Ur(e, t ?? Xa.DATE), t = (e, t) => e ? Xa.MONTH_AND_YEAR : t ? Xa.YEAR : Xa.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => "a[href], area[href], input:not([disabled]):not([type='hidden']), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex='-1']), [data-datepicker-instance]", o = (e, t) => {
		let n = [...document.querySelectorAll(a())];
		n = n.filter((t) => !e.contains(t) || "datepicker-instance" in t.dataset);
		let r = n.indexOf(e);
		if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
	}, s = (e) => String(e).padStart(2, "0"), c = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), l = (e, t, n = !1) => {
		e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
	}, u = (e, t, n = !1, r = !0, i) => {
		if (e.key === Ya.enter || e.key === Ya.space && r) return n && e.preventDefault(), t();
		if (i) return i(e);
	}, d = (e, t) => {
		t.allowStopPropagation && e.stopPropagation(), t.allowPreventDefault && e.preventDefault();
	}, f = (e) => {
		if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
	}, p = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, m = (e) => [
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	][e], h = (e) => {
		let t = [], n = (e) => e.filter((e) => !!e);
		for (let r = 0; r < e.length; r += 3) {
			let i = [
				e[r],
				e[r + 1],
				e[r + 2]
			];
			t.push(n(i));
		}
		return t;
	}, g = {
		prop: (e) => `"${e}" prop must be enabled!`,
		dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
	}, _ = (e, t, n, r, i) => {
		let a = {
			hours: Jr,
			minutes: Xr,
			seconds: Zr
		};
		if (!t) return r ? [a[e](n), a[e](n)] : a[e](n);
		if (Array.isArray(t) && r) {
			let r = t[0] ?? n, o = t[1];
			return [a[e](r), o ? a[e](o) : i[e][1] ?? a[e](n)];
		}
		return Array.isArray(t) && !r ? a[e](t.at(-1) ?? n) : a[e](t);
	};
	return {
		getMapKey: e,
		getMapKeyType: t,
		getMapDate: n,
		convertType: r,
		getNumVal: i,
		findNextFocusableElement: o,
		padZero: s,
		getElWithin: c,
		checkStopPropagation: l,
		checkKeyDown: u,
		handleEventPropagation: d,
		findFocusableEl: f,
		isTouchDevice: p,
		hoursToAmPmHours: m,
		getGroupedList: h,
		setTimeModelValue: (e, t, n, r) => {
			e.hours = _("hours", t, n, r, e), e.minutes = _("minutes", t, n, r, e), e.seconds = _("seconds", t, n, r, e);
		},
		getTimeObjFromCurrent: (e, t, n) => {
			let r = {
				hours: Jr(e),
				minutes: Xr(e),
				seconds: n ? Zr(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, Fo = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = Po(), r = (t, n) => {
		if (!t) return e();
		let r = Q(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? Qn(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Q(r, {
			hours: +(t.hours ?? Jr(r)),
			minutes: +(t.minutes ?? Xr(r)),
			seconds: +(t.seconds ?? Zr(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [Tn(e, { weekStartsOn: +t }), tr(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : $r(r(e), r(t)), s = (e, t) => !e || !t ? !1 : ei(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Qr(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => Yn({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${Ur(e, "yyyy-MM-dd")}`, f = (t) => r(Q(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = X(e(n));
			if (r > t) return 12;
			if (r === t) return Y(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = X(e(n));
			return r < t ? -1 : r === t ? Y(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return X(e(t));
	}, g = (e) => ({
		hours: Jr(e),
		minutes: Xr(e),
		seconds: Zr(e)
	});
	return {
		resetDateTime: r,
		groupListAndMap: (e, t) => n(e).map((e) => e.map((e) => {
			let { active: n, disabled: r, isBetween: i, highlighted: a } = t(e);
			return {
				...e,
				active: n,
				disabled: r,
				className: {
					"dp--active dp--overlay-cell-active": n,
					"dp--overlay-cell": !n,
					"dp--overlay-cell-disabled": r,
					"dp--overlay-cell-pad": !0,
					"dp--overlay-cell-active-disabled": r && n,
					"dp--cell-in-between": i,
					"dp--highlighted": a
				}
			};
		})),
		setTime: i,
		getWeekFromDate: a,
		isDateAfter: c,
		isDateBefore: o,
		isDateBetween: l,
		isDateEqual: s,
		getDaysInBetween: u,
		getCellId: d,
		resetDate: f,
		getMinMonth: p,
		getMaxMonth: m,
		getYearFromDate: h,
		getTimeObj: g,
		setTimeValue: (t) => Q(e(), g(t)),
		sanitizeTime: (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
			"hours",
			"minutes",
			"seconds"
		].map((r) => r === t ? [r, n] : [r, Number.isNaN(+e[r]) ? void 0 : +e[r]])) : {
			hours: Number.isNaN(+e.hours) ? void 0 : +e.hours,
			minutes: Number.isNaN(+e.minutes) ? void 0 : +e.minutes,
			seconds: Number.isNaN(+(e.seconds ?? "")) ? void 0 : +e.seconds
		},
		getBeforeAndAfterInRange: (e, t) => ({
			before: fa(r(t), e),
			after: bn(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Io = () => {
	let { defaults: { config: e } } = $(), t = M(0);
	T(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), D(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: a(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Lo = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => Ur(_a(e(), t), i.value.year, { locale: r.locale }), s = (t) => Ur(ma(e(), t), i.value.month, { locale: r.locale }), c = (e) => Ur(e, i.value.weekDay, { locale: r.locale }), l = (e) => Ur(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => Ur(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${Ur(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? Ur(e[1], s, c) : ""}` : Ur(e, s, c);
	}, p = () => {
		let e = (e) => Ur(e, a.value.format, { locale: r.locale });
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : Ur(n.value, a.value.format, { locale: r.locale }) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Ro = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Lo();
	return {
		getMonths: () => [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		].map((e) => ({
			text: n(e),
			value: e
		})),
		getYears: () => {
			let n = [];
			for (let r = +e.yearRange[0]; r <= +e.yearRange[1]; r++) n.push({
				value: +r,
				text: t(r)
			});
			return e.reverseYears ? n.reverse() : n;
		},
		isOutOfYearRange: (t) => t < +e.yearRange[0] || t > +e.yearRange[1]
	};
}, zo = (e) => ({
	openMenu: () => e.value?.openMenu(),
	closeMenu: () => e.value?.closeMenu(),
	selectDate: () => e.value?.selectDate(),
	clearValue: () => e.value?.clearValue(),
	formatInputValue: () => e.value?.formatInputValue(),
	updateInternalModelValue: (t) => e.value?.updateInternalModelValue(t),
	setMonthYear: (t, n) => e.value?.setMonthYear(t, n),
	parseModel: () => e.value?.parseModel(),
	switchView: (t, n) => e.value?.switchView(t, n),
	executeFlow: (t) => e.value?.executeFlow(t),
	toggleMenu: () => e.value?.toggleMenu(),
	dpMenuRef: () => e.value?.dpMenuRef(),
	dpWrapMenuRef: () => e.value?.dpWrapMenuRef(),
	inputRef: () => e.value?.inputRef()
}), Bo = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), Vo = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: i } } = $(), { getTimeObjFromCurrent: o } = Po(), s = M(!1), c = a(() => Array.isArray(r.value) ? r.value[0] : r.value ?? o(e(), {}, i.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z0-9]+/g, r = t.split(n), i = e.split(n), a = e.match(n) || [], o = t.match(n) || [], s = "";
		for (let e = 0; e < r.length && e < i.length; e++) {
			e > 0 && o[e - 1] && (s += a[e - 1] || o[e - 1]);
			let t = r[e]?.length;
			s += i[e]?.slice(0, t);
		}
		return s;
	}, u = (n, r, i) => {
		let a = ca(n, l(r, n), e(), { locale: t.locale });
		return Rn(a) && Ln(a) ? i || s.value || t.timePicker ? a : Q(a, {
			hours: +c.value.hours,
			minutes: +c.value.minutes,
			seconds: +(c.value.seconds ?? 0),
			milliseconds: 0
		}) : null;
	};
	return {
		textPasted: s,
		parseFreeInput: (e, t) => {
			if (typeof n.value.pattern == "string") return u(e, n.value.pattern, t);
			if (Array.isArray(n.value.pattern)) {
				let r = null;
				for (let i of n.value.pattern) if (r = u(e, i, t), r) break;
				return r;
			}
			return typeof n.value.pattern == "function" ? n.value.pattern(e) : null;
		},
		applyMaxValues: (e, t) => {
			let n = {
				MM: 12,
				DD: 31,
				hh: 23,
				mm: 59,
				ss: 59
			}, r = "", i = 0;
			for (let a = 0; a < t.length; a++) {
				let o = t[a], s = o.length, c = e.slice(i, i + s);
				if (!c) break;
				if (c.length < s) r += c;
				else {
					let e = Number.parseInt(c, 10);
					n[o] && e > n[o] && (e = n[o]), r += e.toString().padStart(s, "0").slice(0, s);
				}
				i += s;
			}
			return r;
		},
		createMaskedValue: (e, t, n) => {
			let r = /(YYYY|MM|DD|hh|mm|ss)/g, i = [...t.matchAll(r)].map((e) => e[0]), a = t.replace(r, "|").split("|").filter(Boolean), o = i.map((e) => e.length), s = "", c = 0;
			for (let t = 0; t < i.length; t++) {
				let r = o[t], i = e.slice(c, c + r);
				if (!i) break;
				if (s += i, i.length === r && a[t]) {
					let i = e.length > c + r, o = s.length, l = n?.charAt(o) === a[t];
					(i || l) && (s += a[t]);
				}
				c += r;
			}
			return s;
		}
	};
}, Ho = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), Uo = [
	"time-input",
	"time-picker",
	"pass-trough"
], Wo = [
	{
		name: "trigger",
		use: ["input"]
	},
	{
		name: "input-icon",
		use: ["input"]
	},
	{
		name: "clear-icon",
		use: ["input"]
	},
	{
		name: "dp-input",
		use: ["input"]
	},
	{
		name: "clock-icon",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "arrow-left",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-right",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-up",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "arrow-down",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "calendar-icon",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "day",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "month-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker"
		]
	},
	{
		name: "year-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode",
			"year-picker"
		]
	},
	{
		name: "year-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "year-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "hours-overlay-value",
		use: Uo
	},
	{
		name: "hours-overlay-header",
		use: Uo
	},
	{
		name: "minutes-overlay-value",
		use: Uo
	},
	{
		name: "minutes-overlay-header",
		use: Uo
	},
	{
		name: "seconds-overlay-value",
		use: Uo
	},
	{
		name: "seconds-overlay-header",
		use: Uo
	},
	{
		name: "hours",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "minutes",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "seconds",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "month",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "year",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "action-buttons",
		use: ["action-row"]
	},
	{
		name: "action-preview",
		use: ["action-row"]
	},
	{
		name: "calendar-header",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "marker-tooltip",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "action-extra",
		use: ["menu"]
	},
	{
		name: "time-picker-overlay",
		use: [
			"time-picker",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "am-pm-button",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "left-sidebar",
		use: ["menu"]
	},
	{
		name: "right-sidebar",
		use: ["menu"]
	},
	{
		name: "month-year",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"year-picker"
		]
	},
	{
		name: "time-picker",
		use: ["date-picker", "pass-trough"]
	},
	{
		name: "action-row",
		use: ["action-row"]
	},
	{
		name: "marker",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "quarter",
		use: ["quarter-picker", "pass-trough"]
	},
	{
		name: "top-extra",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"quarter-picker",
			"year-picker"
		]
	},
	{
		name: "tp-inline-arrow-up",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "tp-inline-arrow-down",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "arrow",
		use: ["menu"]
	},
	{
		name: "menu-header",
		use: ["menu"]
	}
], Go = (e, t) => Wo.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), Ko = (e, t) => Wo.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), qo = {
	key: 1,
	class: "dp--input-wrap"
}, Jo = [
	"id",
	"name",
	"inputmode",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"value",
	"autocomplete",
	"aria-label",
	"aria-disabled",
	"aria-invalid",
	"aria-expanded",
	"aria-controls"
], Yo = {
	key: 1,
	class: "dp--clear-btn"
}, Xo = ["aria-label"], Zo = /* @__PURE__ */ p({
	__name: "DatepickerInput",
	props: { isMenuOpen: {
		type: Boolean,
		default: !1
	} },
	emits: [
		"clear",
		"open",
		"set-input-date",
		"close",
		"select-date",
		"set-empty-date",
		"toggle",
		"focus",
		"blur",
		"real-blur"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { rootEmit: u, state: d, inputValue: p, rootProps: m, defaults: { textInput: h, ariaLabels: g, inline: _, config: v, range: y, multiDates: S, ui: C, inputAttrs: w } } = $(), { checkMinMaxRange: T, isValidDate: E } = io(), { parseFreeInput: D, textPasted: k, createMaskedValue: A, applyMaxValues: j } = Vo(), { checkKeyDown: N, checkStopPropagation: ee } = Po(), { boolHtmlAttribute: F } = Bo(), te = B("dp-input"), I = M(null), ne = M(!1), L = M(!1), R = a(() => ({
			"dp--pointer": !m.disabled && !m.readonly && !h.value.enabled,
			"dp--disabled": m.disabled,
			"dp--input-readonly": !h.value.enabled,
			"dp--input": !0,
			"dp--input-not-clearable": !w.value.clearable,
			"dp--input-icon-pad": !w.value.hideInputIcon,
			"dp--input-valid": typeof w.value.state == "boolean" && w.value.state,
			"dp--input-invalid": typeof w.value.state == "boolean" && !w.value.state,
			"dp--input-focus": ne.value || i.isMenuOpen,
			"dp--input-reg": !h.value.enabled,
			...C.value.input
		})), re = () => {
			r("set-input-date", null), w && m.autoApply && (r("set-empty-date"), I.value = null);
		}, V = (e) => {
			if (h.value.separators?.length) {
				let t = new RegExp(h.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(h.value.rangeSeparator);
		}, H = (e) => {
			let [t, n] = V(e);
			if (t) {
				let e = D(t.trim(), p.value), r = n ? D(n.trim(), p.value) : void 0;
				if (Qr(e, r)) return;
				let i = e && r ? [e, r] : [e];
				T(r, i, 0) && (I.value = e ? i : null);
			}
		}, U = () => {
			k.value = !0;
		}, W = (e) => {
			if (y.value.enabled) H(e);
			else if (S.value.enabled) {
				let t = e.split(";");
				I.value = t.map((e) => D(e.trim())).filter((e) => !!e);
			} else I.value = D(e, p.value);
		}, ie = (e) => {
			L.value = !0;
			let t = typeof e == "string" ? e : e.target?.value, n = h?.value?.maskFormat, a = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]), r = t.replace(/\D/g, ""), i = j(r, e);
				a = A(i, n, t);
			}
			a === "" ? re() : (h.value.openMenu && !i.isMenuOpen && r("open"), W(a), r("set-input-date", I.value)), k.value = !1, p.value = a, u("text-input", e, I.value);
		}, G = (e) => {
			h.value.enabled ? (W(e.target.value), h.value.enterSubmit && E(I.value) && p.value !== "" ? (r("set-input-date", I.value, !0), I.value = null) : h.value.enterSubmit && p.value === "" && (I.value = null, r("clear"))) : oe(e);
		}, K = (e, t) => {
			h.value.enabled && h.value.tabSubmit && !t && W(e.target.value), h.value.enabled && h.value.tabSubmit && E(I.value) && p.value !== "" ? (r("set-input-date", I.value, !0, !0), I.value = null) : h.value.enabled && h.value.tabSubmit && p.value === "" && (I.value = null, r("clear"));
		}, q = () => {
			ne.value = !0, r("focus"), b().then(() => {
				if (h.value.enabled && h.value.selectOnFocus) te.value?.select();
				else {
					let e = p.value.length;
					te.value?.setSelectionRange(e, e);
				}
			});
		}, oe = (e) => {
			if (ee(e, v.value, !0), h.value.enabled && h.value.openMenu && !_.value.input) {
				if (h.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (h.value.openMenu === "toggle") return r("toggle");
			} else h.value.enabled || r("toggle");
		}, se = () => {
			r("real-blur"), ne.value = !1, (!i.isMenuOpen || _.value.enabled && _.value.input) && r("blur"), (m.autoApply && h.value.enabled && I.value && !i.isMenuOpen || h.value.applyOnBlur && !d.actionInMenu) && (L.value && (W(p.value), r("set-input-date", I.value), r("select-date")), L.value = !1, I.value = null);
		}, ce = (e) => {
			ee(e, v.value, !0), r("clear");
		}, le = () => {
			r("close");
		}, ue = (e) => {
			if (e.key === "Tab" && K(e), e.key === "Enter" && (G(e), v.value.allowPreventDefault && (e.preventDefault(), ee(e, v.value, !0))), e.key === "Escape" && h.value.escClose && le(), !h.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, de = () => {
			te.value?.focus({ preventScroll: !0 });
		}, fe = (e) => {
			I.value = e;
		}, pe = (e) => {
			e.key === Ya.tab && K(e, !0);
		};
		return t({
			focusInput: de,
			setParsedDate: fe
		}), (t, n) => (O(), c("div", { onClick: oe }, [!t.$slots["dp-input"] && !z(_).enabled ? P(t.$slots, "trigger", {}, void 0, void 0, 0) : s("", !0), !t.$slots.trigger && (!z(_).enabled || z(_).input) ? (O(), c("div", qo, [
			!t.$slots.trigger && (!z(_).enabled || z(_).enabled && z(_).input) ? P(t.$slots, "dp-input", {
				value: z(p),
				isMenuOpen: e.isMenuOpen,
				onInput: ie,
				onEnter: G,
				onTab: K,
				onClear: ce,
				onBlur: se,
				onKeypress: ue,
				onPaste: U,
				onFocus: q,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [l("input", {
				id: z(w).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: z(w).name,
				class: x(R.value),
				inputmode: z(w).inputmode,
				placeholder: z(m).placeholder,
				disabled: z(F)(z(m).disabled),
				readonly: z(F)(z(m).readonly),
				required: z(F)(z(w).required),
				value: z(p),
				autocomplete: z(w).autocomplete,
				"aria-label": z(g).input,
				"aria-disabled": z(m).disabled || void 0,
				"aria-invalid": z(w).state === !1 || void 0,
				role: "combobox",
				"aria-haspopup": "dialog",
				"aria-expanded": e.isMenuOpen,
				"aria-controls": z(m).menuId,
				onInput: ie,
				onBlur: se,
				onFocus: q,
				onKeypress: ue,
				onKeydown: n[0] ||= (e) => ue(e),
				onPaste: U,
				onInvalid: n[1] ||= (e) => z(u)("invalid", e)
			}, null, 42, Jo)], void 0, 0) : s("", !0),
			l("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !z(w).hideInputIcon ? (O(), c("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [P(t.$slots, "input-icon")])) : s("", !0), !t.$slots["input-icon"] && !z(w).hideInputIcon && !t.$slots["dp-input"] ? (O(), o(z(Fa), {
				key: 1,
				"aria-label": z(g)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : s("", !0)]),
			t.$slots["clear-icon"] && (z(w).alwaysClearable || z(p) && z(w).clearable && !z(m).disabled && !z(m).readonly) ? (O(), c("span", Yo, [P(t.$slots, "clear-icon", { clear: ce })])) : s("", !0),
			!t.$slots["clear-icon"] && (z(w).alwaysClearable || z(w).clearable && z(p) && !z(m).disabled && !z(m).readonly) ? (O(), c("button", {
				key: 2,
				"aria-label": z(g)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => z(N)(e, () => ce(e), !0, z(v).spaceConfirm, pe),
				onClick: n[6] ||= ae((e) => ce(e), ["prevent"])
			}, [f(z(Ia), { class: "dp--input-icons" })], 40, Xo)) : s("", !0)
		])) : s("", !0)]));
	}
}), Qo = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = $(), { isDateBefore: o } = Fo(), s = () => {
		let e = r();
		return t.actionRow?.nowBtnRound && (e = pa(e, {
			roundingMethod: t.actionRow.nowBtnRound.rounding ?? "ceil",
			nearestTo: t.actionRow.nowBtnRound.roundTo ?? 15
		})), e;
	}, c = () => {
		let e = s();
		!i.value.enabled && !a.value.enabled ? n.value = e : n.value && Array.isArray(n.value) && n.value[0] ? a.value.enabled ? n.value = [...n.value, e] : n.value = o(e, n.value[0]) ? [e, n.value[0]] : [n.value[0], e] : n.value = [e], l();
	}, l = () => {
		t.autoApply && e && e("select-date");
	};
	return {
		selectCurrentDate: c,
		selectOnAutoApply: l
	};
}, $o = {
	ref: "action-row",
	class: "dp--action-row"
}, es = ["title"], ts = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, ns = ["disabled"], rs = /* @__PURE__ */ p({
	__name: "ActionRow",
	props: {
		menuMount: {
			type: Boolean,
			default: !1
		},
		calendarWidth: { default: 0 }
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now"
	],
	setup(e, { emit: t }) {
		let r = t, i = e, { rootEmit: o, rootProps: u, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { selectCurrentDate: y } = Qo(r), { isTimeValid: b, isMonthValid: x } = io(), { formatPreview: S } = Lo(), { checkKeyDown: w, convertType: E } = Po(), { boolHtmlAttribute: k } = Bo(), A = B("action-buttons-container"), j = B("action-row"), N = M(!1), ee = M({});
		T(() => {
			F(), globalThis.addEventListener("resize", F);
		}), D(() => {
			globalThis.removeEventListener("resize", F);
		});
		let F = () => {
			N.value = !1, setTimeout(() => {
				let e = A.value?.getBoundingClientRect(), t = j.value?.getBoundingClientRect();
				e && t && (ee.value.maxWidth = `${t.width - e.width - 20}px`), N.value = !0;
			}, 0);
		}, te = a(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), ne = a(() => !b.value(f.value) || !x.value(f.value) || !te.value), L = () => {
			let e = v.value.preview;
			return u.timePicker || u.monthPicker, e(E(f.value));
		}, R = () => {
			let e = f.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, re = a(() => !f.value || !i.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? R() : _.value.enabled ? f.value.map((e) => `${S(e)}`) : u.modelAuto ? `${S(f.value[0])}` : `${S(f.value[0])} -` : S(f.value) : L()), V = () => _.value.enabled ? "; " : " - ", H = a(() => Array.isArray(re.value) ? re.value.join(V()) : re.value), U = () => {
			b.value(f.value) && x.value(f.value) && te.value ? r("select-date") : o("invalid-select");
		};
		return (e, t) => (O(), c("div", $o, [e.$slots["action-row"] ? P(e.$slots, "action-row", {
			modelValue: z(f),
			disabled: ne.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}, void 0, void 0, 0) : (O(), c(n, { key: 1 }, [z(p).showPreview ? (O(), c("div", {
			key: 0,
			class: "dp--selection-preview",
			title: H.value || void 0,
			style: C(ee.value)
		}, [e.$slots["action-preview"] && N.value ? P(e.$slots, "action-preview", {
			value: z(f),
			formatValue: H.value
		}, void 0, void 0, 0) : s("", !0), !e.$slots["action-preview"] && N.value ? (O(), c(n, { key: 1 }, [d(I(H.value), 1)], 64)) : s("", !0)], 12, es)) : s("", !0), l("div", ts, [e.$slots["action-buttons"] ? P(e.$slots, "action-buttons", {
			value: z(f),
			selectDate: U,
			selectionDisabled: ne.value
		}, void 0, void 0, 0) : s("", !0), e.$slots["action-buttons"] ? s("", !0) : (O(), c(n, { key: 1 }, [
			!z(h).enabled && z(p).showCancel ? (O(), c("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => z(w)(t, () => e.$emit("close-picker"))
			}, I(z(p).cancelBtnLabel), 545)) : s("", !0),
			z(p).showNow ? (O(), c("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: t[2] ||= (...e) => z(y) && z(y)(...e),
				onKeydown: t[3] ||= (e) => z(w)(e, () => z(y)())
			}, I(z(p).nowBtnLabel), 33)) : s("", !0),
			z(p).showSelect ? (O(), c("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-select",
				disabled: z(k)(ne.value),
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => z(w)(e, () => U()),
				onClick: U
			}, I(z(p).selectBtnLabel), 41, ns)) : s("", !0)
		], 64))], 512)], 64))], 512));
	}
}), is = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: a(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, as = ["role", "tabindex"], os = {
	ref: "header",
	class: "dp--selection-grid-header"
}, ss = ["aria-label"], cs = [
	"aria-label",
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-dp-focus-value",
	"data-dp-focus-target",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], ls = ["aria-label", "data-dp-action-element"], us = /* @__PURE__ */ p({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		useRelative: { type: Boolean },
		height: {},
		overlayLabel: {},
		isLast: { type: Boolean },
		level: {},
		focusValue: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"selected",
		"toggle",
		"hover-value"
	],
	setup(e, { emit: t }) {
		let r = t, i = e, { setState: o, defaults: { ariaLabels: u, config: f } } = $(), { hideNavigationButtons: p } = is(), { handleEventPropagation: m, checkKeyDown: h } = Po(), g = B("toggle-button"), _ = B("header"), v = B("overlay-container"), y = B("grid-wrap"), S = /* @__PURE__ */ _e(), E = M(!1), k = M(null), A = M(), j = M(0);
		w(() => {
			k.value = null;
		}), T(async () => {
			await b(), R(), o("arrowNavigationLevel", i.level ?? 1);
		}), D(() => {
			o("arrowNavigationLevel", (i.level ?? 1) - 1);
		});
		let ee = a(() => ({
			"dp--overlay": !0,
			"dp--overlay-absolute": !i.useRelative,
			"dp--overlay-relative": i.useRelative
		})), F = a(() => i.useRelative ? {
			height: `${i.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), te = a(() => ({ "dp--overlay-col": !0 })), ne = a(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--overlay-action": !0,
			"dp--over-action-scroll": E.value,
			"dp--button-bottom": i.isLast
		})), L = a(() => ({
			"dp--overlay-container": !0,
			"dp--container-flex": i.items?.length <= 6,
			"dp--container-block": i.items?.length > 6
		}));
		H(() => i.items, () => R(!1), { deep: !0 });
		let R = (e = !0) => {
			b().then(() => {
				let t = fe(y), n = fe(g), r = fe(v), a = fe(_), o = n ? n.getBoundingClientRect().height : 0;
				t && (t.getBoundingClientRect().height ? j.value = t.getBoundingClientRect().height - o - (a?.getBoundingClientRect().height ?? 0) : j.value = f.value.modeHeight - o - (a?.getBoundingClientRect().height ?? 0));
				let s = S.value?.find((e) => {
					let { dpElementActive: t } = e.dataset;
					return t === `${i.level ?? 1}`;
				}), c = i.focusValue !== void 0 && i.focusValue !== null ? S.value?.find((e) => Number(e.dataset.dpFocusValue) === i.focusValue) : void 0, l = s ?? c;
				l && r && e && (r.scrollTop = l.offsetTop - r.offsetTop - (j.value / 2 - l.getBoundingClientRect().height) - o), l && e && !i.noOverlayFocus && l.focus({ preventScroll: !0 });
			});
		}, re = (e) => {
			e.disabled || r("selected", e.value);
		}, U = () => {
			r("toggle");
		}, ie = (e) => {
			f.value.escClose && (U(), m(e, f.value));
		}, G = (e) => {
			A.value = e, r("hover-value", e);
		}, K = (e) => {
			if (e.key === Ya.esc) return ie(e);
		}, q = (e) => {
			if (e.key === Ya.enter) return U();
		};
		return (t, r) => (O(), c("div", {
			ref: "grid-wrap",
			class: x(ee.value),
			style: C(F.value),
			role: e.useRelative ? void 0 : "presentation",
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: K,
			onClick: r[0] ||= ae(() => {}, ["prevent"])
		}, [
			l("div", os, [P(t.$slots, "header")], 512),
			l("div", {
				ref: "overlay-container",
				"aria-label": e.overlayLabel,
				class: x(L.value),
				style: C({ "--dp-overlay-height": `${j.value}px` }),
				role: "listbox"
			}, [P(t.$slots, "overlay", {}, () => [(O(!0), c(n, null, N(e.items, (r, i) => (O(), c("div", {
				key: i,
				class: x(["dp--overlay-row", { "dp--flex-row": e.items.length >= 3 }]),
				role: "presentation"
			}, [(O(!0), c(n, null, N(r, (n) => (O(), c("div", {
				key: n.value,
				ref_for: !0,
				ref_key: "colRefs",
				ref: S,
				role: "option",
				class: x(te.value),
				"aria-label": n.ariaLabel ?? n.text,
				"aria-selected": n.active || void 0,
				"aria-disabled": n.disabled || void 0,
				"data-dp-action-element": e.level ?? 1,
				"data-dp-element-active": n.active ? e.level ?? 1 : void 0,
				"data-dp-focus-value": n.value,
				"data-dp-focus-target": e.focusValue !== void 0 && e.focusValue !== null && n.value === e.focusValue || void 0,
				tabindex: "0",
				"data-test-id": n.text,
				onClick: ae((e) => re(n), ["prevent"]),
				onKeydown: (e) => z(h)(e, () => re(n), !0),
				onMouseover: (e) => G(n.value)
			}, [l("div", { class: x(n.className) }, [P(t.$slots, "item", { item: n }, () => [d(I(n.text), 1)])], 2)], 42, cs))), 128))], 2))), 128))])], 14, ss),
			t.$slots["button-icon"] ? W((O(), c("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": z(u)?.toggleOverlay,
				class: x(ne.value),
				tabindex: "0",
				"data-dp-action-element": e.level ?? 1,
				onClick: U,
				onKeydown: q
			}, [P(t.$slots, "button-icon")], 42, ls)), [[V, !z(p)(e.type)]]) : s("", !0)
		], 46, as));
	}
}), ds = ["data-dp-mobile"], fs = /* @__PURE__ */ p({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Io(), r = a(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
		return (i, a) => (O(), c("div", {
			class: x({
				"dp--menu-inner": !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				"dp--flex-display": z(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": z(n)
		}, [P(i.$slots, "default", {
			instances: r.value,
			wrapClass: { "dp--instance-calendar": z(t).count > 0 }
		})], 10, ds));
	}
}), ps = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], ms = /* @__PURE__ */ p({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = Bo(), { checkKeyDown: r } = Po(), i = t;
		return (t, a) => (O(), c("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp--btn-base dp--bg-none dp--arrow-btn-nav",
			tabindex: e.inactive ? -1 : 0,
			inert: e.inactive || void 0,
			"aria-hidden": e.inactive || void 0,
			disabled: z(n)(e.disabled),
			"aria-label": e.ariaLabel,
			"aria-disabled": z(n)(e.disabled),
			onClick: a[0] ||= (e) => i("activate"),
			onKeydown: a[1] ||= (e) => z(r)(e, () => i("activate"), !0)
		}, [l("span", { class: x(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [P(t.$slots, "default")], 2)], 40, ps));
	}
}), hs = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], gs = /* @__PURE__ */ p({
	__name: "YearModePicker",
	props: {
		items: {},
		instance: {},
		year: {},
		showYearPicker: {
			type: Boolean,
			default: !1
		},
		isDisabled: {}
	},
	emits: [
		"handle-year",
		"year-select",
		"toggle-year-picker"
	],
	setup(e, { emit: t }) {
		let r = t, p = e, { showRightIcon: m, showLeftIcon: h } = is(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = $(), { showTransition: b, transitionName: S } = no(), { formatYear: C } = Lo(), { boolHtmlAttribute: w } = Bo(), T = M(!1), E = a(() => C(p.year)), D = (e) => {
			T.value = !T.value, r("toggle-year-picker", { show: e });
		}, k = (e) => {
			T.value = !1, r("year-select", e);
		}, A = (e = !1) => {
			r("handle-year", e);
		};
		return (t, r) => (O(), c(n, null, [l("div", { class: x(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			z(h)(e.instance) ? (O(), o(ms, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": z(v)?.prevYear,
				disabled: z(w)(e.isDisabled(!1)),
				class: x(z(y)?.navBtnPrev),
				onActivate: r[0] ||= (e) => A(!1)
			}, {
				default: U(() => [t.$slots["arrow-left"] ? P(t.$slots, "arrow-left", {}, void 0, void 0, 0) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (O(), o(z(La), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			l("button", {
				ref: "mpYearButtonRef",
				class: "dp--btn-base dp--bg-none dp--month-year-select-base dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${z(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"aria-haspopup": "dialog",
				"aria-expanded": e.showYearPicker,
				"data-dp-action-element": "0",
				onClick: r[1] ||= () => D(),
				onKeydown: r[2] ||= ie(ae(() => D(), ["prevent"]), ["enter"])
			}, [t.$slots.year ? P(t.$slots, "year", {
				text: E.value,
				value: e.year
			}, void 0, void 0, 0) : s("", !0), t.$slots.year ? s("", !0) : (O(), c(n, { key: 1 }, [d(I(e.year), 1)], 64))], 40, hs),
			z(m)(e.instance) ? (O(), o(ms, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": z(v)?.nextYear,
				disabled: z(w)(e.isDisabled(!0)),
				class: x(z(y)?.navBtnNext),
				onActivate: r[3] ||= (e) => A(!0)
			}, {
				default: U(() => [t.$slots["arrow-right"] ? P(t.$slots, "arrow-right", {}, void 0, void 0, 0) : s("", !0), t.$slots["arrow-right"] ? s("", !0) : (O(), o(z(Ra), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0)
		], 2), f(i, {
			name: z(S)(e.showYearPicker),
			css: z(b)
		}, {
			default: U(() => [e.showYearPicker ? (O(), o(us, {
				key: 0,
				items: e.items,
				"is-last": z(g).autoApply && !z(_).keepActionRow,
				"overlay-label": z(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: D,
				onSelected: r[4] ||= (e) => k(e)
			}, u({
				"button-icon": U(() => [t.$slots["calendar-icon"] ? P(t.$slots, "calendar-icon", {}, void 0, void 0, 0) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (O(), o(z(Fa), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: U(({ item: e }) => [P(t.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"overlay-label"
			])) : s("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), _s = () => {
	let { getDate: e, rootEmit: t, state: n, month: r, year: i, modelValue: o, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = $(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = Fo(), { getYears: v } = Ro(), { validateMonthYear: y, checkMinMaxValue: b } = io(), x = M([!1]), S = a(() => v()), C = a(() => (t, n) => {
		let a = Q(m(e()), {
			month: r.value(t),
			year: i.value(t)
		}), o = n ? $n(a) : er(a);
		return y(o, c.preventMinMaxNavigation, n);
	}), w = () => Array.isArray(o.value) && l.value.solo && o.value[1], E = () => {
		for (let t = 0; t < l.value.count; t++) if (t === 0) s.value[t] = s.value[0];
		else if (t === l.value.count - 1 && w()) s.value[t] = {
			month: Y(o.value[1]),
			year: X(o.value[1])
		};
		else {
			let n = Q(e(), s.value[t - 1]);
			s.value[t] = {
				month: Y(n),
				year: X(Pn(n, 1))
			};
		}
	}, D = (t) => {
		if (!t) return E();
		let n = Q(e(), s.value[t]);
		return s.value[0].year = X(ba(n, l.value.count - 1)), E();
	}, O = (e, t) => {
		let n = qn(t, e);
		return u.value.showLastInRange && n > 1 ? t : e;
	}, k = (e) => c.focusStartDate || l.value.solo ? e[0] : e[1] ? O(e[0], e[1]) : e[0], A = () => {
		if (o.value) {
			let e = Array.isArray(o.value) ? k(o.value) : o.value;
			s.value[0] = {
				month: Y(e),
				year: X(e)
			};
		}
	}, j = () => {
		A(), l.value.count && E();
	};
	H(o, (e, t) => {
		n.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && j();
	}), T(() => {
		j();
	});
	let N = (e, n) => {
		s.value[n].year = e, t("update-month-year", {
			instance: n,
			year: e,
			month: s.value[n].month
		}), l.value.count && !l.value.solo && D(n);
	}, P = a(() => (e) => _(S.value, (t) => ({
		active: i.value(e) === t.value,
		disabled: b(t.value, h(d.value.minDate), h(d.value.maxDate)) || f.value.years?.includes(t.value),
		highlighted: g(p.value, t.value)
	}))), ee = (e, t) => {
		N(e, t), te(t);
	}, F = (e, t = !1) => {
		if (!C.value(e, t)) {
			let n = t ? i.value(e) + 1 : i.value(e) - 1;
			N(n, e);
		}
	}, te = (e, n) => {
		n === void 0 ? x.value[e] = !x.value[e] : x.value[e] = n, x.value[e] ? t("overlay-toggle", {
			open: !0,
			overlay: Ka.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: Ka.year
		});
	};
	return {
		isDisabled: C,
		groupedYears: P,
		showYearPicker: x,
		selectYear: N,
		setStartDate: () => {
			c.startDate && (o.value && c.focusStartDate || !o.value) && N(X(e(c.startDate)), 0);
		},
		toggleYearPicker: te,
		handleYearSelect: ee,
		handleYear: F
	};
}, vs = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Fo(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
	return {
		getRangeWithFixedDate: (r) => Array.isArray(o.value) && (o.value.length === 2 || o.value.length === 1 && s.value.partialRange) ? s.value.fixedStart && (e(r, o.value[0]) || n(r, o.value[0])) ? [o.value[0], r] : s.value.fixedEnd && (t(r, o.value[1]) || n(r, o.value[1])) ? [r, o.value[1]] : (i("invalid-fixed-range", r), o.value) : [],
		setPresetDate: (e) => {
			Array.isArray(e.value) && e.value.length <= 2 && s.value.enabled ? o.value = e.value.map((e) => r(e)) : Array.isArray(e.value) || (o.value = r(e.value));
		},
		checkRangeAutoApply: (e, t, n) => {
			s && (e[0] && e[1] && a.autoApply && t("auto-apply", n), e[0] && !e[1] && (a.modelAuto || s.value.partialRange) && a.autoApply && t("auto-apply", n));
		},
		setMonthOrYearRange: (e) => {
			let n = o.value ? o.value.slice() : [];
			return n.length === 2 && n[1] !== null && (n = []), n.length ? (t(e, n[0]) ? n.unshift(e) : n[1] = e, i("range-end", e)) : (n = [e], i("range-start", e)), n;
		},
		handleMultiDatesSelect: (e, t) => {
			if (o.value && Array.isArray(o.value)) {
				if (o.value.some((t) => n(e, t))) {
					let t = o.value.filter((t) => !n(t, e));
					o.value = t.length ? t : null;
				} else (t && +t > o.value.length || !t) && o.value.push(e);
			} else o.value = [e];
		}
	};
}, ys = (e) => {
	let { getDate: t, rootEmit: n, state: r, calendars: i, year: o, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = $();
	ro(() => {
		r.isTextInputDate && R(X(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = io(), { isDateBetween: g, resetDateTime: _, resetDate: v, getMinMonth: y, getMaxMonth: x, checkHighlightMonth: S, groupListAndMap: C } = Fo(), { checkRangeAutoApply: w, getRangeWithFixedDate: E, handleMultiDatesSelect: D, setMonthOrYearRange: O, setPresetDate: k } = vs(), { padZero: A } = Po(), { getMonths: j, isOutOfYearRange: N } = Ro(), { updateFlowStep: P, childMount: ee } = $a(), F = a(() => j()), te = M(null), { groupedYears: I, showYearPicker: ne, isDisabled: L, selectYear: R, toggleYearPicker: z, handleYearSelect: re, handleYear: B, setStartDate: V } = _s();
	T(() => {
		ee(), V();
	});
	let H = (e) => e ? {
		month: Y(e),
		year: X(e)
	} : {
		month: null,
		year: null
	}, U = () => s.value ? Array.isArray(s.value) ? s.value.map((e) => H(e)) : H(s.value) : H(), W = (e, t) => {
		let n = i.value[e], r = U();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, ie = (e, t, n) => {
		let r = U();
		return Array.isArray(r) ? o.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, ae = (e, n) => {
		if (l.value.enabled) {
			let r = U();
			if (Array.isArray(s.value) && Array.isArray(r)) {
				let r = ie(e, n, 0) || ie(e, n, 1), i = Q(v(t()), {
					month: e,
					year: o.value(n)
				});
				return g(s.value, te.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, G = a(() => (e) => C(F.value, (t) => {
		let n = W(e, t.value), r = Ur(K(t.value, e), "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, y(o.value(e), d.value.minDate), x(o.value(e), d.value.maxDate)) || pe(d.value.disabledDates, o.value(e), t.value) || f.value.months?.includes(t.value) || !me(d.value.allowedDates, o.value(e), t.value) || N(o.value(e)),
			isBetween: ae(t.value, e),
			highlighted: S(u.value, t.value, o.value(e)),
			ariaLabel: r
		};
	})), K = (e, n) => Q(v(t()), {
		month: e,
		year: o.value(n)
	}), q = (n, r) => {
		let i = s.value ? s.value : v(t());
		s.value = Q(i, {
			month: n,
			year: o.value(r)
		}), e("auto-apply"), P("month", !0);
	}, oe = (t, n) => {
		let r = K(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = E(r) : s.value ? m(r, s.value) && (s.value = O(K(t, n))) : s.value = [K(t, n)], b().then(() => {
			w(s.value, e, s.value.length < 2);
		});
	}, se = (t, n) => {
		D(K(t, n), p.value.limit), e("auto-apply", !0);
	}, ce = (e, t) => (i.value[t].month = e, ue(t, i.value[t].year, e), p.value.enabled ? se(e, t) : l.value.enabled ? oe(e, t) : q(e, t)), le = (e, t) => {
		R(e, t), ue(t, e, null);
	}, ue = (e, t, r) => {
		let i = r;
		if (!i && i !== 0) {
			let t = U();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		n("update-month-year", {
			instance: e,
			year: t,
			month: i
		});
	}, de = (e, t) => {
		te.value = K(e, t);
	}, fe = (t) => {
		k({ value: t }), e("auto-apply");
	}, pe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${A(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" && e(_(Q(t(), {
			month: r,
			year: n
		}), !0));
	}, me = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${A(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: G,
		groupedYears: I,
		year: o,
		isDisabled: L,
		showYearPicker: ne,
		modelValue: s,
		toggleYearPicker: z,
		handleYearSelect: re,
		handleYear: B,
		presetDate: fe,
		setHoverDate: de,
		selectMonth: ce,
		selectYear: le,
		getModelMonthYear: U
	};
}, bs = /* @__PURE__ */ p({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = re(), { rootProps: l, defaults: { config: d } } = $(), p = Go(a, Ho.YearMode), { groupedMonths: m, groupedYears: h, year: g, isDisabled: _, showYearPicker: v, modelValue: b, presetDate: S, setHoverDate: C, selectMonth: w, selectYear: T, toggleYearPicker: E, handleYearSelect: D, handleYear: k, getModelMonthYear: A } = ys(i);
		return t({
			getSidebarProps: () => ({
				modelValue: b,
				year: g,
				getModelMonthYear: A,
				selectMonth: w,
				selectYear: T,
				handleYear: k
			}),
			presetDate: S,
			toggleYearPicker: (e) => E(0, e)
		}), (t, r) => (O(), o(fs, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: U(({ instances: r, wrapClass: i }) => [(O(!0), c(n, null, N(r, (n) => (O(), c("div", {
				key: n,
				class: x(i)
			}, [t.$slots["top-extra"] ? P(t.$slots, "top-extra", { value: z(b) }, void 0, void 0, 0) : s("", !0), P(t.$slots, "month-year", y({ ref_for: !0 }, {
				mode: "month",
				year: z(g),
				months: z(m)(n),
				years: z(h)(n),
				selectMonth: z(w),
				selectYear: z(T),
				instance: n
			}), () => [f(us, {
				items: z(m)(n),
				"is-last": z(l).autoApply && !z(d).keepActionRow,
				height: z(d).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || z(l).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => z(w)(e, n),
				onHoverValue: (e) => z(C)(e, n)
			}, u({
				header: U(() => [f(gs, {
					items: z(h)(n),
					instance: n,
					"show-year-picker": z(v)[n],
					year: z(g)(n),
					"is-disabled": (e) => z(_)(n, e),
					onHandleYear: (e) => z(k)(n, e),
					onYearSelect: (e) => z(D)(e, n),
					onToggleYearPicker: (e) => z(E)(n, e?.show)
				}, u({ _: 2 }, [N(z(p), (e) => ({
					name: e,
					fn: U((n) => [P(t.$slots, e, y({ ref_for: !0 }, n))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				_: 2
			}, [t.$slots["month-overlay-value"] ? {
				name: "item",
				fn: U(({ item: e }) => [P(t.$slots, "month-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"height",
				"no-overlay-focus",
				"onSelected",
				"onHoverValue"
			])])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), xs = (e) => {
	let { rootEmit: t, getDate: n, state: r, modelValue: i, rootProps: o, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = $(), { getYears: f } = Ro(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = Fo(), { checkRangeAutoApply: y, setMonthOrYearRange: x } = vs(), { checkMinMaxValue: S, checkMinMaxRange: C } = io();
	ro(() => {
		r.isTextInputDate && (E.value = X(n(o.startDate)));
	});
	let w = M(null), E = M();
	T(() => {
		o.startDate && (i.value && o.focusStartDate || !i.value) && (E.value = X(n(o.startDate)));
	});
	let D = (e) => Array.isArray(i.value) ? i.value.some((t) => X(t) === e) : i.value ? X(i.value) === e : !1, O = (e) => u.value.enabled && Array.isArray(i.value) ? p(i.value, w.value, N(e)) : !1, k = (e) => !d.value.allowedDates?.size || d.value.allowedDates.has(`${e}`), A = (e) => d.value.disabledDates instanceof Map ? d.value.disabledDates.size ? d.value.disabledDates.has(`${e}`) : !1 : typeof d.value.disabledDates != "function" || d.value.disabledDates(_a(h(er(n())), e)), j = a(() => v(f(), (e) => {
		let t = D(e.value);
		return {
			active: t,
			disabled: S(e.value, g(d.value.minDate), g(d.value.maxDate)) || l.value.years.includes(e.value) || !k(e.value) || A(e.value),
			isBetween: O(e.value) && !t,
			highlighted: _(s.value, e.value)
		};
	})), N = (e) => _a(m(er(n())), e);
	return {
		groupedYears: j,
		focusYear: E,
		setHoverValue: (e) => {
			w.value = _a(m(n()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r,
				month: NaN
			}), c.value.enabled) return i.value ? Array.isArray(i.value) && ((i.value?.map((e) => X(e))).includes(r) ? i.value = i.value.filter((e) => X(e) !== r) : i.value.push(_a(h(n()), r))) : i.value = [_a(h(er(n())), r)], e("auto-apply", !0);
			u.value.enabled ? C(N(r), i.value) && (i.value = x(N(r)), b().then(() => {
				y(i.value, e, i.value.length < 2);
			})) : (i.value = N(r), e("auto-apply"));
		}
	};
}, Ss = /* @__PURE__ */ p({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: i, defaults: { config: a }, rootProps: l } = $(), { groupedYears: d, focusYear: f, selectYear: p, setHoverValue: m } = xs(r);
		return t({ getSidebarProps: () => ({
			modelValue: i,
			selectYear: p
		}) }), (t, n) => (O(), c("div", null, [t.$slots["top-extra"] ? P(t.$slots, "top-extra", { value: z(i) }, void 0, void 0, 0) : s("", !0), t.$slots["month-year"] ? P(t.$slots, "month-year", S(h({
			mode: "year",
			years: z(d),
			selectYear: z(p)
		})), void 0, void 0, 1) : (O(), o(us, {
			key: 2,
			items: z(d),
			"is-last": z(l).autoApply && !z(a).keepActionRow,
			height: z(a).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || z(l).textInput),
			"focus-value": z(f),
			type: "year",
			"use-relative": "",
			onSelected: z(p),
			onHoverValue: z(m)
		}, u({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: U(({ item: e }) => [P(t.$slots, "year-overlay-value", {
				text: e.text,
				value: e.value
			})]),
			key: "0"
		} : void 0]), 1032, [
			"items",
			"is-last",
			"height",
			"no-overlay-focus",
			"focus-value",
			"onSelected",
			"onHoverValue"
		]))]));
	}
}), Cs = {
	key: 0,
	class: "dp--time-input"
}, ws = ["data-compact", "data-collapsed"], Ts = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Es = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Ds = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], Os = { key: 0 }, ks = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], As = /* @__PURE__ */ p({
	__name: "TimeInput",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		order: {},
		disabled: { type: Boolean },
		closeTimePickerBtn: {},
		disabledTimesConfig: {},
		validateTime: {}
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds",
		"overlay-opened",
		"overlay-closed",
		"set-hours",
		"set-minutes",
		"mounted"
	],
	setup(e, { expose: t, emit: r }) {
		let p = r, m = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: S, multiCalendars: C, timeConfig: w } } = $(), { checkKeyDown: E, hoursToAmPmHours: D } = Po(), { boolHtmlAttribute: k } = Bo(), { sanitizeTime: j, groupListAndMap: F } = Fo(), { transitionName: te, showTransition: ne } = no(), L = A({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), R = M("AM"), re = M(null), B = M(), V = M(!1);
		T(() => {
			p("mounted");
		});
		let H = (e) => Q(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: w.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), W = a(() => _.timePicker || w.value.timePickerInline ? 0 : 1), ie = a(() => (e) => me(e, m[e]) || G(e, m[e]) || m.disabled), ae = a(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), G = (e, t) => S.value.enabled && !S.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, K = (e, t) => {
			if (S.value.enabled && !S.value.disableTimeRangeValidation) {
				let n = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, q = a(() => (e) => !ye(+m[e] + +w.value[`${e}Increment`], e) || K(e, !0) || m.disabled), oe = a(() => (e) => !ye(+m[e] - w.value[`${e}Increment`], e) || K(e, !1) || m.disabled), se = (e, t) => Sn(Q(h(), e), t), ce = (e, t) => ya(Q(h(), e), t), le = a(() => ({
			"dp--time-col": !0,
			"dp--time-col-block": !w.value.timePickerInline,
			"dp--time-col-reg-block": !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
			"dp--time-col-reg-inline": !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
			"dp--time-col-reg-with-button": !w.value.enableSeconds && !w.value.is24,
			"dp--time-col-sec": w.value.enableSeconds && w.value.is24,
			"dp--time-col-sec-with-button": w.value.enableSeconds && !w.value.is24
		})), ue = a(() => w.value.timePickerInline && S.value.enabled && !C.value.count), de = a(() => {
			let e = [{ type: "hours" }];
			return w.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), w.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), fe = a(() => de.value.filter((e) => !e.separator)), pe = a(() => (e) => {
			if (e === "hours") {
				let e = Te(+m.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: m[e] < 10 ? `0${m[e]}` : `${m[e]}`,
				value: m[e]
			};
		}), me = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, he = (e, t) => t === "hours" ? R.value === "AM" ? e : e + 12 : e, ge = (e) => {
			let t = w.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +w.value[`${e}GridIncrement`], i = e === "hours" && !w.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: w.value.is24 ? t : he(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !w.value.is24 && a.unshift({
				value: R.value === "PM" ? 12 : 0,
				text: "12"
			}), F(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !ye(t.value, e) || me(e, t.value) || G(e, t.value)
			}));
		}, _e = (e) => e >= 0 ? e : 59, ve = (e) => e >= 0 ? e : 23, ye = (e, t) => {
			let n = _.minTime ? H(j(_.minTime)) : null, r = _.maxTime ? H(j(_.maxTime)) : null, i = H(j(ae.value, t, t === "minutes" || t === "seconds" ? _e(e) : ve(e)));
			return n && r ? ($r(i, r) || ei(i, r)) && (Qr(i, n) || ei(i, n)) : n ? Qr(i, n) || ei(i, n) : !r || $r(i, r) || ei(i, r);
		}, be = (e) => w.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || m.disabled, xe = (e) => {
			be(e) || (L[e] = !L[e], L[e] ? (V.value = !0, p("overlay-opened", e)) : (V.value = !1, p("overlay-closed", e)));
		}, Se = (e) => e === "hours" ? Jr : e === "minutes" ? Xr : Zr, Ce = () => {
			B.value && clearTimeout(B.value);
		}, we = (e, t = !0, n) => {
			let r = t ? se : ce, i = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`];
			ye(+m[e] + i, e) && p(`update:${e}`, Se(e)(r({ [e]: +m[e] }, { [e]: +w.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (B.value = setTimeout(() => {
				we(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, Te = (e) => w.value.is24 ? e : (e >= 12 ? R.value = "PM" : R.value = "AM", D(e)), Ee = () => {
			R.value === "PM" ? (R.value = "AM", p("update:hours", m.hours - 12)) : (R.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", R.value);
		}, De = (e) => {
			L[e] = !0;
		}, Oe = (e, t) => (xe(e), p(`update:${e}`, t));
		return t({ openChildCmp: De }), (t, r) => z(_).disabled ? s("", !0) : (O(), c("div", Cs, [
			(O(!0), c(n, null, N(de.value, (i, a) => (O(), c("div", {
				key: a,
				class: x(le.value),
				"data-compact": ue.value && !z(w).enableSeconds,
				"data-collapsed": ue.value && z(w).enableSeconds
			}, [i.separator ? (O(), c(n, { key: 0 }, [V.value ? s("", !0) : (O(), c(n, { key: 0 }, [d(":")], 64))], 64)) : (O(), c(n, { key: 1 }, [
				l("button", {
					type: "button",
					class: x({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !z(w).timePickerInline,
						"dp--inc-dec-button-inline": z(w).timePickerInline,
						"dp--tp-inline-btn-top": z(w).timePickerInline,
						"dp--inc-dec-button-disabled": q.value(i.type),
						"dp--hidden-el": V.value
					}),
					"data-test-id": `${i.type}-time-inc-btn-${m.order}`,
					"aria-label": z(v)?.incrementValue(i.type),
					tabindex: "0",
					disabled: z(k)(e.disabled),
					"data-dp-action-element": W.value,
					onKeydown: (e) => z(E)(e, () => we(i.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => z(b).timeArrowHoldThreshold ? void 0 : we(i.type, !0),
					onMousedown: (e) => z(b).timeArrowHoldThreshold ? we(i.type, !0) : void 0,
					onMouseup: Ce
				}, [z(w).timePickerInline ? P(t.$slots, "tp-inline-arrow-up", {}, () => [r[1] ||= l("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), r[2] ||= l("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)], void 0, 1) : P(t.$slots, "arrow-up", {}, () => [f(z(Ba))], void 0, 0)], 42, Ts),
				l("button", {
					type: "button",
					"aria-label": `${pe.value(i.type).text}-${z(v)?.openTpOverlay(i.type)}`,
					"aria-haspopup": "dialog",
					"aria-expanded": L[i.type],
					class: x({
						"dp--time-display": !0,
						"dp--time-display-block": !z(w).timePickerInline,
						"dp--time-display-inline": z(w).timePickerInline,
						"dp--btn-base dp--time-invalid": ie.value(i.type),
						"dp--btn-base dp--time-overlay-btn": !ie.value(i.type),
						"dp--hidden-el": V.value
					}),
					disabled: z(k)(be(i.type)),
					tabindex: "0",
					"data-dp-action-element": W.value,
					"data-test-id": `${i.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => z(E)(e, () => xe(i.type), !0),
					onClick: (e) => xe(i.type)
				}, [P(t.$slots, i.type, {
					text: pe.value(i.type).text,
					value: pe.value(i.type).value
				}, () => [d(I(pe.value(i.type).text), 1)])], 42, Es),
				l("button", {
					type: "button",
					class: x({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !z(w).timePickerInline,
						"dp--inc-dec-button-inline": z(w).timePickerInline,
						"dp--tp-inline-btn-bottom": z(w).timePickerInline,
						"dp--inc-dec-button-disabled": oe.value(i.type),
						"dp--hidden-el": V.value
					}),
					"data-test-id": `${i.type}-time-dec-btn-${m.order}`,
					"aria-label": z(v)?.decrementValue(i.type),
					tabindex: "0",
					"data-dp-action-element": W.value,
					disabled: z(k)(e.disabled),
					onKeydown: (e) => z(E)(e, () => we(i.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => z(b).timeArrowHoldThreshold ? void 0 : we(i.type, !1),
					onMousedown: (e) => z(b).timeArrowHoldThreshold ? we(i.type, !1) : void 0,
					onMouseup: Ce
				}, [z(w).timePickerInline ? P(t.$slots, "tp-inline-arrow-down", {}, () => [r[3] ||= l("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), r[4] ||= l("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)], void 0, 1) : P(t.$slots, "arrow-down", {}, () => [f(z(Va))], void 0, 0)], 42, Ds)
			], 64))], 10, ws))), 128)),
			z(w).is24 ? s("", !0) : (O(), c("div", Os, [P(t.$slots, "am-pm-button", {
				toggle: Ee,
				value: R.value
			}, () => [l("button", {
				ref_key: "amPmButton",
				ref: re,
				type: "button",
				class: "dp--pm-am-button",
				"aria-label": z(v)?.amPmButton,
				tabindex: "0",
				disabled: z(k)(e.disabled),
				"data-dp-action-element": W.value,
				"data-compact": ue.value,
				onClick: Ee,
				onKeydown: r[0] ||= (e) => z(E)(e, () => Ee(), !0)
			}, I(R.value), 41, ks)])])),
			(O(!0), c(n, null, N(fe.value, (e) => (O(), o(i, {
				key: e.type,
				name: z(te)(L[e.type]),
				css: z(ne)
			}, {
				default: U(() => [L[e.type] ? (O(), o(us, {
					key: 0,
					items: ge(e.type),
					"is-last": z(_).autoApply && !z(b).keepActionRow,
					type: e.type,
					"aria-labels": z(v),
					level: z(w).timePickerInline || z(_).timePicker ? 1 : 2,
					"overlay-label": z(v).timeOverlay?.(e.type),
					onSelected: (t) => Oe(e.type, t),
					onToggle: (t) => xe(e.type)
				}, u({
					"button-icon": U(() => [P(t.$slots, "clock-icon", {}, () => [t.$slots["clock-icon"] ? s("", !0) : (O(), o(ee(z(w).timePickerInline ? z(Fa) : z(za)), { key: 0 }))])]),
					_: 2
				}, [t.$slots[`${e.type}-overlay-value`] ? {
					name: "item",
					fn: U(({ item: n }) => [P(t.$slots, `${e.type}-overlay-value`, {
						text: n.text,
						value: n.value
					})]),
					key: "0"
				} : void 0, t.$slots[`${e.type}-overlay-header`] ? {
					name: "header",
					fn: U(() => [P(t.$slots, `${e.type}-overlay-header`, { toggle: () => xe(e.type) })]),
					key: "1"
				} : void 0]), 1032, [
					"items",
					"is-last",
					"type",
					"aria-labels",
					"level",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : s("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), js = ["data-dp-mobile"], Ms = ["aria-label", "tabindex"], Ns = [
	"role",
	"aria-label",
	"tabindex"
], Ps = ["aria-label"], Fs = /* @__PURE__ */ p({
	__name: "TimePicker",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		disabledTimesConfig: { type: [Function, null] },
		noOverlayFocus: { type: Boolean },
		validateTime: { type: Function }
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds"
	],
	setup(e, { expose: t, emit: r }) {
		let d = r, p = e, { rootEmit: m, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: S, config: w, range: E, timeConfig: k } } = $(), { isModelAuto: A } = Fo(), { checkKeyDown: j, findFocusableEl: ee } = Po(), { transitionName: F, showTransition: te } = no(), { hideNavigationButtons: I } = is(), { isMobile: ne } = Io(), { childMount: L } = $a(), R = re(), H = B("overlay"), ie = B("close-tp-btn"), ae = B("tp-input"), G = M(!1);
		T(() => {
			L(_.timePicker ? void 0 : Ga.timePicker);
		}), D(() => {
			q.value && h("arrowNavigationLevel", 0);
		});
		let K = a(() => E.value.enabled && _.modelAuto && !E.value.requireEndTime ? A(g.value) : !0), q = M(!1), oe = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), se = a(() => {
			let e = [];
			if (E.value.enabled) for (let t = 0; t < 2; t++) e.push(oe(t));
			else e.push(oe(0));
			return e;
		}), ce = (e, t = "") => {
			let n = e !== q.value;
			q.value = e, h("arrowNavigationLevel", +!!e), n && m("overlay-toggle", {
				open: e,
				overlay: Ka.time
			}), b().then(() => {
				t !== "" && ae.value?.[0] && ae.value[0].openChildCmp(t);
			});
		}, le = a(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": _.autoApply && !w.value.keepActionRow
		})), ue = Go(R, Ho.TimeInput), de = (e, t, n) => E.value.enabled ? t === 0 ? [e, se.value[1][n]] : [se.value[0][n], e] : e, fe = (e) => {
			d("update:hours", e);
		}, pe = (e) => {
			d("update:minutes", e);
		}, me = (e) => {
			d("update:seconds", e);
		}, he = () => {
			if (H.value && !S.value.enabled && !p.noOverlayFocus) {
				let e = ee(H.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, ge = (e) => {
			G.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, _e = (e) => {
			G.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return t({ toggleTimePicker: ce }), (t, r) => (O(), c("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": z(ne)
		}, [!z(_).timePicker && !z(k).timePickerInline ? W((O(), c("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: x({
				...le.value,
				"dp--hidden-el": q.value
			}),
			"aria-label": z(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: r[0] ||= (e) => z(j)(e, () => ce(!0)),
			onClick: r[1] ||= (e) => ce(!0)
		}, [P(t.$slots, "clock-icon", {}, () => [f(z(za))])], 42, Ms)), [[V, !z(I)("time")]]) : s("", !0), f(i, {
			name: z(F)(q.value),
			css: z(te) && !z(k).timePickerInline
		}, {
			default: U(() => [q.value || z(_).timePicker || z(k).timePickerInline ? (O(), c("div", {
				key: 0,
				ref: "overlay",
				role: z(k).timePickerInline ? void 0 : "dialog",
				class: x({
					"dp--overlay": !z(k).timePickerInline,
					"dp--overlay-absolute": !z(_).timePicker && !z(k).timePickerInline,
					"dp--overlay-relative": z(_).timePicker
				}),
				style: C(z(_).timePicker ? { height: `${z(w).modeHeight}px` } : void 0),
				"aria-label": z(v)?.timePicker,
				tabindex: z(k).timePickerInline ? void 0 : 0
			}, [l("div", {
				class: x(z(k).timePickerInline ? "dp--time-picker-inline-container" : "dp--overlay-container dp--container-flex dp--time-picker-overlay-container"),
				style: { display: "flex" }
			}, [P(t.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: fe,
				setMinutes: pe,
				setSeconds: me
			}, () => [l("div", { class: x(z(k).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(O(!0), c(n, null, N(se.value, (n, r) => W((O(), o(As, {
				key: r,
				ref_for: !0,
				ref: "tp-input",
				hours: n.hours,
				minutes: n.minutes,
				seconds: n.seconds,
				order: r,
				"close-time-picker-btn": ie.value,
				"disabled-times-config": e.disabledTimesConfig,
				disabled: r === 0 ? z(E).fixedStart : z(E).fixedEnd,
				"validate-time": (t, n) => e.validateTime(t, de(n, r, t)),
				"onUpdate:hours": (e) => fe(de(e, r, "hours")),
				"onUpdate:minutes": (e) => pe(de(e, r, "minutes")),
				"onUpdate:seconds": (e) => me(de(e, r, "seconds")),
				onMounted: he,
				onOverlayClosed: ge,
				onOverlayOpened: _e
			}, u({ _: 2 }, [N(z(ue), (e) => ({
				name: e,
				fn: U((n) => [P(t.$slots, e, y({ ref_for: !0 }, n))])
			}))]), 1032, [
				"hours",
				"minutes",
				"seconds",
				"order",
				"close-time-picker-btn",
				"disabled-times-config",
				"disabled",
				"validate-time",
				"onUpdate:hours",
				"onUpdate:minutes",
				"onUpdate:seconds"
			])), [[V, r === 0 || K.value]])), 128))], 2)]), !z(_).timePicker && !z(k).timePickerInline ? W((O(), c("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: x({
					...le.value,
					"dp--hidden-el": G.value
				}),
				"aria-label": z(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: r[2] ||= (e) => z(j)(e, () => ce(!1)),
				onClick: r[3] ||= (e) => ce(!1)
			}, [P(t.$slots, "calendar-icon", {}, () => [f(z(Fa))])], 42, Ps)), [[V, !z(I)("time")]]) : s("", !0)], 2)], 14, Ns)) : s("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, js));
	}
}), Is = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: r, defaults: { range: i, timeConfig: o, safeDates: s } } = $(), { updateFlowStep: c } = $a(), { isDateEqual: l, setTime: u } = Fo(), d = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], f = (e) => o.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, p = (t, r) => t ? u(r === void 0 ? {
		hours: n.hours,
		minutes: n.minutes,
		seconds: f()
	} : {
		hours: d("hours", r),
		minutes: d("minutes", r),
		seconds: f(r)
	}, t) : ga(e(), f(r)), m = (e, t) => {
		n[e] = t;
	}, h = a(() => r.modelAuto && i.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : i.value.enabled), g = (e, r) => {
		let a = Object.fromEntries(Object.keys(n).map((t) => t === e ? [t, r] : [t, n[t]].slice()));
		if (h.value && !i.value.disableTimeRangeValidation) {
			let e = (e) => t.value ? u({
				hours: a.hours[e],
				minutes: a.minutes[e],
				seconds: a.seconds[e]
			}, t.value[e]) : null, n = (e) => ha(t.value[e], 0);
			return !(l(e(0), e(1)) && (Qr(e(0), n(1)) || $r(e(1), n(0))));
		}
		return !0;
	}, _ = (e, t) => {
		let r = n[e] === t ? void 0 : e;
		g(e, t) && (m(e, t), r && b().then(() => c(e)));
	}, v = (e) => {
		_("hours", e);
	}, y = (e) => {
		_("minutes", e);
	}, x = (e) => {
		_("seconds", e);
	}, S = (e, n) => {
		v(e.hours), y(e.minutes), x(e.seconds), t.value && n(t.value);
	}, C = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			m("hours", n), m("minutes", r), o.value.enableSeconds && m("seconds", i);
		}
	}, w = (e, t) => {
		let a = {
			hours: Array.isArray(n.hours) ? n.hours[e] : n.hours,
			disabledArr: []
		};
		return (t || t === 0) && (a.hours = t), Array.isArray(r.disabledTimes) && (a.disabledArr = i.value.enabled && Array.isArray(r.disabledTimes[e]) ? r.disabledTimes[e] : r.disabledTimes), a;
	}, T = a(() => (e, t) => {
		let n = E(e, t);
		if (Array.isArray(r.disabledTimes)) {
			let { disabledArr: r, hours: i } = w(e, t), a = r.filter((e) => +e.hours === i);
			return a[0]?.minutes === "*" ? {
				hours: [i],
				minutes: void 0,
				seconds: void 0
			} : {
				hours: n.hours,
				minutes: [...a?.map((e) => +e.minutes) ?? [], ...n.minutes],
				seconds: [...a?.map((e) => e.seconds ? +e.seconds : void 0) ?? [], ...n.seconds]
			};
		}
		return n;
	}), E = (e, n) => {
		let r = {
			hours: [],
			minutes: [],
			seconds: []
		}, a = (i.value.enabled ? t.value?.[e] : t.value) ?? null;
		if (!a) return r;
		let { hours: c } = w(e, n);
		if (s.value.minDate && In(a, s.value.minDate)) {
			let e = Jr(s.value.minDate), t = Xr(s.value.minDate), n = Zr(s.value.minDate);
			for (let t = 0; t < e; t += 1) r.hours.push(t);
			if (c === e) {
				for (let e = 0; e < t; e += 1) r.minutes.push(e);
				if (o.value.enableSeconds) for (let e = 0; e < n; e += 1) r.seconds.push(e);
			}
		}
		if (s.value.maxDate && In(a, s.value.maxDate)) {
			let e = Jr(s.value.maxDate), t = Xr(s.value.maxDate), n = Zr(s.value.maxDate);
			for (let t = e + 1; t < 24; t += 1) r.hours.push(t);
			if (c === e) {
				for (let e = t + 1; e < 60; e += 1) r.minutes.push(e);
				if (o.value.enableSeconds) for (let e = n + 1; e < 60; e += 1) r.seconds.push(e);
			}
		}
		return r;
	};
	return {
		assignTime: m,
		updateHours: v,
		updateMinutes: y,
		updateSeconds: x,
		getSetDateTime: p,
		updateTimeValues: S,
		getSecondsValue: f,
		assignStartTime: C,
		validateTime: g,
		disabledTimesConfig: T
	};
}, Ls = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = Fo();
	ro(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Is(), h = (e) => {
		let { hours: t, minutes: n, seconds: r } = e;
		return {
			hours: +t,
			minutes: +n,
			seconds: r ? +r : 0
		};
	}, g = () => {
		if (s.value.startTime) {
			if (Array.isArray(s.value.startTime)) {
				let e = h(s.value.startTime[0]), n = h(s.value.startTime[1]);
				return [Q(t(), e), Q(t(), n)];
			}
			let e = h(s.value.startTime);
			return Q(t(), e);
		}
		return o.value.enabled ? [null, null] : null;
	}, _ = () => {
		if (o.value.enabled) {
			let [e, t] = g();
			r.value = [u(e, 0), u(t, 1)];
		} else r.value = u(g());
	}, v = (e) => Array.isArray(e) ? [c(t(e[0])), c(t(e[1]))] : [c(e ?? t())], y = (e, t, n) => {
		d("hours", e), d("minutes", t), d("seconds", s.value.enableSeconds ? n : 0);
	}, b = () => {
		let [e, t] = v(r.value);
		return o.value.enabled ? y([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : y(e.hours, e.minutes, e.seconds);
	};
	T(() => (f(a.value), r.value ? b() : _()));
	let x = () => {
		Array.isArray(r.value) ? r.value = r.value.map((e, t) => e && u(e, t)) : r.value = u(r.value), e("time-update");
	};
	return {
		modelValue: r,
		time: n,
		disabledTimesConfig: p,
		validateTime: m,
		updateTime: (e) => {
			l(e, x);
		}
	};
}, Rs = /* @__PURE__ */ p({
	__name: "TimePickerSolo",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"time-update",
		"mount",
		"update-flow-step"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = Go(re(), Ho.TimePicker), a = B("time-input"), { time: s, modelValue: c, disabledTimesConfig: d, updateTime: p, validateTime: m } = Ls(r);
		return T(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: c,
				time: s,
				updateTime: p
			}),
			toggleTimePicker: (e, t = "") => {
				a.value?.toggleTimePicker(e, t);
			}
		}), (e, t) => (O(), o(fs, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: U(({ wrapClass: n }) => [l("div", { class: x(n) }, [f(Fs, y({ ref: "time-input" }, e.$props, {
				hours: z(s).hours,
				minutes: z(s).minutes,
				seconds: z(s).seconds,
				"disabled-times-config": z(d),
				"validate-time": z(m),
				"onUpdate:hours": t[0] ||= (e) => z(p)({
					hours: e,
					minutes: z(s).minutes,
					seconds: z(s).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => z(p)({
					hours: z(s).hours,
					minutes: e,
					seconds: z(s).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => z(p)({
					hours: z(s).hours,
					minutes: z(s).minutes,
					seconds: e
				})
			}), u({ _: 2 }, [N(z(i), (t, n) => ({
				name: t,
				fn: U((n) => [P(e.$slots, t, S(h(n)))])
			}))]), 1040, [
				"hours",
				"minutes",
				"seconds",
				"disabled-times-config",
				"validate-time"
			])], 2)]),
			_: 3
		}));
	}
}), zs = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: i } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = io(), c = (e, t) => {
		let n = e;
		return i.value.months.includes(Y(n)) ? (n = t ? xn(e, 1) : va(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return i.value.years.includes(X(n)) ? (n = t ? Pn(e, 1) : ba(e, 1), l(n, t)) : n;
	}, u = (t, a = !1) => {
		let s = Q(n(), {
			month: e.month,
			year: e.year
		}), u = t ? xn(s, 1) : va(s, 1);
		r.disableYearSelect && (u = _a(u, e.year));
		let f = Y(u), p = X(u);
		i.value.months.includes(f) && (u = c(u, t), f = Y(u), p = X(u)), i.value.years.includes(p) && (u = l(u, t), p = X(u)), o(f, p, t, r.preventMinMaxNavigation) && d(f, p, a);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: a(() => (t) => s(Q(n(), {
			month: e.month,
			year: e.year
		}), r.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, Bs = { class: "dp--header-wrap" }, Vs = {
	key: 0,
	class: "dp--month-year-wrap"
}, Hs = { key: 0 }, Us = { class: "dp--month-year-wrap" }, Ws = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], Gs = /* @__PURE__ */ p({
	__name: "DpHeader",
	props: {
		month: {},
		year: {},
		instance: {},
		years: {},
		months: {},
		menuWrapRef: {}
	},
	emits: ["update-month-year"],
	setup(e, { expose: t, emit: r }) {
		let p = r, m = e, { rootEmit: g, rootProps: _, modelValue: v, defaults: { ariaLabels: b, filters: C, config: w, highlight: E, safeDates: D, ui: k } } = $(), { transitionName: A, showTransition: j } = no(), { showLeftIcon: F, showRightIcon: te } = is(), { handleMonthYearChange: ne, isDisabled: L, updateMonthYear: R } = zs(m, p), { getMaxMonth: re, getMinMonth: B, getYearFromDate: V, groupListAndMap: H, checkHighlightYear: W, checkHighlightMonth: ie } = Fo(), { checkKeyDown: ae } = Po(), { formatYear: G } = Lo(), { checkMinMaxValue: K } = io(), { boolHtmlAttribute: q } = Bo(), { childMount: oe } = $a(), se = M(!1), ce = M(!1), le = M(!1);
		T(() => {
			oe(Ga.header);
		});
		let ue = (e) => ({
			get: () => m[e],
			set: (t) => {
				let n = e === Wa.month ? Wa.year : Wa.month;
				p("update-month-year", {
					[e]: t,
					[n]: m[n]
				}), e === Wa.month ? ve() : ye();
			}
		}), de = a(ue(Wa.month)), fe = a(ue(Wa.year)), pe = a(() => (e) => ({
			month: m.month,
			year: m.year,
			items: e === Wa.month ? m.months : m.years,
			instance: m.instance,
			updateMonthYear: R,
			toggle: e === Wa.month ? ve : ye
		})), me = a(() => m.months.find((e) => e.value === m.month) || {
			text: "",
			value: 0
		}), he = a(() => H(m.months, (e) => ({
			active: m.month === e.value,
			disabled: K(e.value, B(m.year, D.value.minDate), re(m.year, D.value.maxDate)) || C.value.months.includes(e.value),
			highlighted: ie(E.value, e.value, m.year)
		}))), ge = a(() => H(m.years, (e) => ({
			active: m.year === e.value,
			disabled: K(e.value, V(D.value.minDate), V(D.value.maxDate)) || C.value.years.includes(e.value),
			highlighted: W(E.value, e.value)
		}))), _e = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (le.value = !0, g("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (le.value = !1, g("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, ve = (e) => {
			_e(se, Ka.month, e);
		}, ye = (e) => {
			_e(ce, Ka.year, e);
		}, be = a(() => [{
			type: Wa.month,
			index: 1,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: me.value.text,
			showSelectionGrid: se.value,
			items: he.value,
			ariaLabel: b.value?.openMonthsOverlay,
			overlayLabel: b.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Wa.year,
			index: 2,
			toggle: ye,
			modelValue: fe.value,
			updateModelValue: (e) => fe.value = e,
			text: G(m.year),
			showSelectionGrid: ce.value,
			items: ge.value,
			ariaLabel: b.value?.openYearsOverlay,
			overlayLabel: b.value.yearPicker?.(!0) ?? void 0
		}]), xe = a(() => _.disableYearSelect ? [be.value[0]] : _.yearFirst ? [...be.value].reverse() : be.value);
		return t({
			toggleMonthPicker: ve,
			toggleYearPicker: ye,
			handleMonthYearChange: ne
		}), (t, r) => (O(), c("div", Bs, [t.$slots["month-year"] ? (O(), c("div", Vs, [P(t.$slots, "month-year", S(h({
			mode: "date",
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: z(R),
			handleMonthYearChange: z(ne),
			instance: e.instance,
			isDisabled: z(L)
		})))])) : (O(), c(n, { key: 1 }, [t.$slots["top-extra"] ? (O(), c("div", Hs, [P(t.$slots, "top-extra", { value: z(v) })])) : s("", !0), l("div", Us, [
			z(F)(e.instance) && !z(_).vertical ? (O(), o(ms, {
				key: 0,
				"aria-label": z(b)?.prevMonth,
				disabled: z(q)(z(L)(!1)),
				inactive: le.value,
				class: x(z(k)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: r[0] ||= (e) => z(ne)(!1, !0)
			}, {
				default: U(() => [t.$slots["arrow-left"] ? P(t.$slots, "arrow-left", {}, void 0, void 0, 0) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (O(), o(z(La), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : s("", !0),
			l("div", { class: x(["dp--month-year-wrap", { "dp--year-disable-select": z(_).disableYearSelect }]) }, [(O(!0), c(n, null, N(xe.value, (r) => (O(), c(n, { key: r.type }, [l("button", {
				type: "button",
				"data-dp-element": `overlay-${r.type}`,
				class: x(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": le.value }]),
				"aria-label": `${r.text}-${r.ariaLabel}`,
				"aria-haspopup": "dialog",
				"aria-expanded": r.showSelectionGrid,
				"data-test-id": `${r.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => r.toggle(),
				onKeydown: (e) => z(ae)(e, () => r.toggle(), !0)
			}, [t.$slots[r.type] ? P(t.$slots, r.type, {
				text: r.text,
				value: m[r.type]
			}, void 0, void 0, 0) : s("", !0), t.$slots[r.type] ? s("", !0) : (O(), c(n, { key: 1 }, [d(I(r.text), 1)], 64))], 42, Ws), f(i, {
				name: z(A)(r.showSelectionGrid),
				css: z(j)
			}, {
				default: U(() => [r.showSelectionGrid ? (O(), o(us, {
					key: 0,
					items: r.items,
					"is-last": z(_).autoApply && !z(w).keepActionRow,
					"skip-button-ref": !1,
					type: r.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": r.overlayLabel,
					onSelected: r.updateModelValue,
					onToggle: r.toggle
				}, u({
					"button-icon": U(() => [t.$slots["calendar-icon"] ? P(t.$slots, "calendar-icon", {}, void 0, void 0, 0) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (O(), o(z(Fa), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${r.type}-overlay-value`] ? {
						name: "item",
						fn: U(({ item: e }) => [P(t.$slots, `${r.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${r.type}-overlay`] ? {
						name: "overlay",
						fn: U(() => [P(t.$slots, `${r.type}-overlay`, y({ ref_for: !0 }, pe.value(r.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${r.type}-overlay-header`] ? {
						name: "header",
						fn: U(() => [P(t.$slots, `${r.type}-overlay-header`, { toggle: r.toggle })]),
						key: "2"
					} : void 0
				]), 1032, [
					"items",
					"is-last",
					"type",
					"menu-wrap-ref",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : s("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			z(F)(e.instance) && z(_).vertical ? (O(), o(ms, {
				key: 1,
				"aria-label": z(b)?.prevMonth,
				"el-name": "action-prev",
				disabled: z(q)(z(L)(!1)),
				inactive: le.value,
				class: x(z(k)?.navBtnPrev),
				onActivate: r[1] ||= (e) => z(ne)(!1, !0)
			}, {
				default: U(() => [t.$slots["arrow-up"] ? P(t.$slots, "arrow-up", {}, void 0, void 0, 0) : s("", !0), t.$slots["arrow-up"] ? s("", !0) : (O(), o(z(Ba), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : s("", !0),
			z(te)(e.instance) ? (O(), o(ms, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: z(q)(z(L)(!0)),
				"aria-label": z(b)?.nextMonth,
				inactive: le.value,
				class: x(z(k)?.navBtnNext),
				onActivate: r[2] ||= (e) => z(ne)(!0, !0)
			}, {
				default: U(() => [t.$slots[z(_).vertical ? "arrow-down" : "arrow-right"] ? P(t.$slots, z(_).vertical ? "arrow-down" : "arrow-right", {}, void 0, void 0, 0) : s("", !0), t.$slots[z(_).vertical ? "arrow-down" : "arrow-right"] ? s("", !0) : (O(), o(ee(z(_).vertical ? z(Va) : z(Ra)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : s("", !0)
		])], 64))]));
	}
}), Ks = ["inert", "aria-hidden"], qs = {
	class: "dp--calendar-header",
	role: "row"
}, Js = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, Ys = ["aria-label"], Xs = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, Zs = { class: "dp--cell-inner" }, Qs = [
	"id",
	"aria-selected",
	"aria-disabled",
	"aria-label",
	"tabindex",
	"data-test-id",
	"data-dp-element-active",
	"onClick",
	"onTouchend",
	"onKeydown",
	"onMouseenter",
	"onMouseleave",
	"onMousedown"
], $s = /* @__PURE__ */ p({
	__name: "DpCalendar",
	props: {
		instance: {},
		mappedDates: {},
		month: {},
		year: {}
	},
	emits: [
		"select-date",
		"set-hover-date",
		"handle-scroll",
		"handle-swipe"
	],
	setup(e, { expose: t, emit: r }) {
		let o = r, u = e, { getDate: p, rootEmit: m, rootProps: h, state: g, defaults: { transitions: _, config: v, ariaLabels: y, multiCalendars: S, weekNumbers: w, multiDates: E, ui: k, weekStart: A } } = $(), { isDateAfter: j, isDateEqual: ee, resetDateTime: F, getCellId: te } = Fo(), { checkKeyDown: ne, checkStopPropagation: L, isTouchDevice: R } = Po(), { formatWeekDay: re } = Lo(), { childMount: V } = $a(), H = B("calendar-wrap"), W = B("active-tooltip"), ie = M([]), G = M(null), K = M(!0), q = M(!1), oe = M(""), se = M({
			bottom: "",
			left: "",
			transform: ""
		}), ce = M({ left: "50%" });
		ge(H, { onSwipeEnd: (e, t) => {
			v.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && o("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && o("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let le = a(() => h.calendar ? h.calendar(u.mappedDates) : u.mappedDates), ue = a(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Ne());
		T(() => {
			V(Ga.calendar), v.value.monthChangeOnScroll && H.value && H.value.addEventListener("wheel", De, { passive: !1 });
		}), D(() => {
			v.value.monthChangeOnScroll && H.value && H.value.removeEventListener("wheel", De);
		});
		let de = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", pe = (e, t) => {
			if (h.transitions) {
				let n = F(Q(p(), {
					month: u.month,
					year: u.year
				}));
				oe.value = j(F(Q(p(), {
					month: e,
					year: t
				})), n) ? _.value[de(!0)] : _.value[de(!1)], K.value = !1, b().then(() => K.value = !0);
			}
		}, me = a(() => ({ ...k.value.calendar })), he = (e) => ({
			type: "dot",
			...e
		}), _e = a(() => (e) => {
			let t = he(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), ve = a(() => (e) => ee(e, G.value)), ye = a(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": S.value.count > 0 && u.instance !== 0
		})), be = a(() => g.arrowNavigationLevel > 0), xe = a(() => (e) => !h.hideOffsetDates || e.current), Se = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			G.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await b(), W.value?.[0]) {
				let { left: e, width: t } = W.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ce.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ce.value.left = `${t - n / 2}px`);
			}
			se.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, Ce = async (e, t, n) => {
			let r = fe(ie.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? se.value = e.marker.customPosition(r) : await Se(r, e), m("tooltip-open", e.marker));
		}, we = async (e, t, n) => {
			if (q.value && E.value.enabled && E.value.dragSelect) return o("select-date", e);
			if (o("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await Ce(e, t, n);
			}
		}, Te = (e) => {
			G.value && (G.value = null, se.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, Ee = (e, t, n) => {
			e && (Array.isArray(ie.value[t]) ? ie.value[t][n] = e : ie.value[t] = [e]);
		}, De = (e) => {
			v.value.monthChangeOnScroll && (e.preventDefault(), o("handle-scroll", e));
		}, Oe = (e) => w.value ? w.value.type === "local" ? br(e.value, {
			weekStartsOn: A.value,
			locale: h.locale
		}) : w.value.type === "iso" ? _r(e.value) : typeof w.value.type == "function" ? w.value.type(e.value) : "" : "", ke = (e) => {
			let t = e[0];
			return w.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Oe(t) : "" : Oe(t);
		}, Ae = (e, t, n = !0) => {
			!n && R() || E.value.enabled && !v.value.allowPreventDefault || (L(e, v.value), o("select-date", t));
		}, je = (e) => {
			L(e, v.value);
		}, Me = (e) => {
			E.value.enabled && E.value.dragSelect ? (q.value = !0, o("select-date", e)) : E.value.enabled && o("select-date", e);
		}, Ne = () => {
			let e = p();
			return Yn({
				start: Tn(e, {
					locale: h.locale,
					weekStartsOn: A.value
				}),
				end: tr(e, {
					locale: h.locale,
					weekStartsOn: A.value
				})
			}).map((e) => re(e));
		}, Pe = (e) => y.value?.day?.(e) ?? Ur(e.value, "MMMM do, yyyy", { locale: h.locale });
		return t({ triggerTransition: pe }), (e, t) => (O(), c("div", {
			class: x(ye.value),
			inert: be.value || void 0,
			"aria-hidden": be.value || void 0
		}, [l("div", {
			ref: "calendar-wrap",
			class: x(me.value),
			role: "grid"
		}, [
			l("div", qs, [z(w) ? (O(), c("div", Js, I(z(w).label), 1)) : s("", !0), (O(!0), c(n, null, N(ue.value, (t, n) => (O(), c("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": z(y)?.weekDay?.(n)
			}, [P(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [d(I(t), 1)])], 8, Ys))), 128))]),
			t[2] ||= l("div", { class: "dp--calendar-header-separator" }, null, -1),
			f(i, {
				name: oe.value,
				css: !!z(_)
			}, {
				default: U(() => [K.value ? (O(), c("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => q.value = !1
				}, [(O(!0), c(n, null, N(le.value, (r, i) => (O(), c("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [z(w) ? (O(), c("div", Xs, [l("div", Zs, I(ke(r.days)), 1)])) : s("", !0), (O(!0), c(n, null, N(r.days, (r, a) => (O(), c("div", {
					id: z(te)(r.value),
					ref_for: !0,
					ref: (e) => Ee(e, i, a),
					key: a + i,
					role: "gridcell",
					class: "dp--calendar-item",
					"aria-selected": (r.classData["dp--active"] || r.classData["dp--range-border-start"] || r.classData["dp--range-border-end"]) ?? void 0,
					"aria-disabled": r.classData["dp--cell-disabled"] || void 0,
					"aria-label": Pe(r),
					tabindex: !r.current && z(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": z(te)(r.value),
					"data-dp-element-active": r.classData["dp--active"] ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: ae((e) => Ae(e, r), ["prevent"]),
					onTouchend: (e) => Ae(e, r, !1),
					onKeydown: (t) => z(ne)(t, () => e.$emit("select-date", r), !1, z(v).spaceConfirm, void 0),
					onMouseenter: (e) => we(r, i, a),
					onMouseleave: (e) => Te(r),
					onMousedown: (e) => Me(r),
					onMouseup: t[0] ||= (e) => q.value = !1
				}, [l("div", { class: x(["dp--cell-inner", r.classData]) }, [
					e.$slots.day && xe.value(r) ? P(e.$slots, "day", {
						day: +r.text,
						date: r.value
					}, void 0, void 0, 0) : s("", !0),
					e.$slots.day ? s("", !0) : (O(), c(n, { key: 1 }, [d(I(r.text), 1)], 64)),
					r.marker && xe.value(r) ? P(e.$slots, "marker", {
						marker: r.marker,
						day: +r.text,
						date: r.value
					}, () => [l("div", {
						class: x(_e.value(r.marker)),
						style: C(r.marker.color ? { backgroundColor: r.marker.color } : {})
					}, null, 6)], void 0, 2) : s("", !0),
					ve.value(r.value) ? (O(), c("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp--marker-tooltip",
						style: C(se.value)
					}, [r.marker?.tooltip ? (O(), c("div", {
						key: 0,
						class: "dp--tooltip-content",
						onClick: je
					}, [(O(!0), c(n, null, N(r.marker.tooltip, (t, n) => (O(), c("div", {
						key: n,
						class: "dp--tooltip-text"
					}, [P(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: r.value
					}, () => [l("div", {
						class: "dp--tooltip-mark",
						style: C(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), l("div", null, I(t.text), 1)])]))), 128)), l("div", {
						class: "dp--arrow-bottom-tp",
						style: C(ce.value)
					}, null, 4)])) : s("", !0)], 4)) : s("", !0)
				], 2)], 40, Qs))), 128))]))), 128))], 32)) : s("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, Ks));
	}
}), ec = (e, t) => {
	let n = M([]), r = M(/* @__PURE__ */ new Date()), i = M(), o = M(!1), { getDate: s, getDateFromParts: c, rootEmit: l, calendars: u, month: d, year: f, time: p, modelValue: m, rootProps: h, today: g, state: _, defaults: { multiCalendars: v, startTime: y, range: x, config: S, safeDates: C, multiDates: w, timeConfig: E, flow: D, weekStart: O } } = $(), { validateMonthYearInRange: k, isDisabled: A, isDateRangeAllowed: j, checkMinMaxRange: N } = io(), { updateTimeValues: P, getSetDateTime: ee, assignTime: F, assignStartTime: te, validateTime: I, disabledTimesConfig: ne } = Is(), { formatDay: L } = Lo(), { setTime: R, isDateBefore: z, getDaysInBetween: re } = Fo(), { checkRangeAutoApply: B, getRangeWithFixedDate: V, handleMultiDatesSelect: H, setPresetDate: U } = vs(), { getMapDate: W } = Po(), { selectOnAutoApply: ie } = Qo(e);
	ro(() => ue(_.isTextInputDate));
	let { updateFlowStep: ae, flowStep: G } = $a(), K = (e) => !S.value.keepViewOnOffsetClick || e ? !0 : !i.value, q = (e, t, n, r = !1, i = !1) => {
		K(i) && (!r && t !== null && n !== null && oe(e, t, n), u.value[e] ??= u.value[e] = {
			month: 0,
			year: 0
		}, u.value[e].month = t ?? u.value[e]?.month, u.value[e].year = n ?? u.value[e]?.year);
	}, oe = (e, t, n) => {
		(u.value.at(e)?.month !== t || u.value.at(e)?.year !== n) && l("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, se = () => {
		y.value && te(y.value);
	};
	T(() => {
		m.value || (Se(), se()), ue(!0), h.focusStartDate && h.startDate && Se();
	});
	let ce = a(() => !D.value?.steps?.length || D.value.steps.at(-1) === G.value), le = () => {
		h.autoApply && e("auto-apply", !ce.value);
	}, ue = (e = !1) => {
		if (m.value) return Array.isArray(m.value) ? (n.value = m.value, ve(e)) : me(m.value, e);
		if (v.value.count && e && !h.startDate) return pe(s(), e);
	}, de = () => Array.isArray(m.value) && x.value.enabled ? Y(m.value[0]) === Y(m.value[1] ?? m.value[0]) : !1, fe = (e) => {
		let t = xn(e, 1);
		return {
			month: Y(t),
			year: X(t)
		};
	}, pe = (e = s(), t = !1) => {
		if (v.value.count && v.value.static && !t || q(0, Y(e), X(e), t), v.value.count && (!m.value || de() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = Sn(Q(s(), {
				month: d.value(e - 1),
				year: f.value(e - 1)
			}), { months: 1 });
			u.value[e] = {
				month: Y(t),
				year: X(t)
			};
		}
	}, me = (e, t) => {
		pe(e, t), F("hours", Jr(e)), F("minutes", Xr(e)), F("seconds", Zr(e)), v.value.count && t && xe();
	}, he = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = Kn(e[0], e[1]);
			return Math.abs(t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, ge = (e, t) => {
		e[1] && x.value.showLastInRange ? pe(e[he(e)], t) : pe(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : p[n][1]];
		F("hours", n(Jr, "hours")), F("minutes", n(Xr, "minutes")), F("seconds", n(Zr, "seconds"));
	}, _e = (e, t) => {
		if ((x.value.enabled || h.weekPicker) && !w.value.enabled) return ge(e, t);
		if (w.value.enabled && t) {
			let n = e.at(-1);
			if (n) return me(n, t);
		}
	}, ve = (e) => {
		let t = m.value;
		_e(t, e), v.value.count && v.value.solo && xe();
	}, ye = (e, n) => {
		let r = Q(s(), {
			month: d.value(n),
			year: f.value(n)
		}), i = e < 0 ? xn(r, 1) : va(r, 1);
		k(Y(i), X(i), e < 0, h.preventMinMaxNavigation) && (q(n, Y(i), X(i)), v.value.count && !v.value.solo && be(n), t());
	}, be = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = va(Q(s(), {
				month: d.value(t + 1),
				year: f.value(t + 1)
			}), 1);
			q(t, Y(e), X(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = xn(Q(s(), {
				month: d.value(t - 1),
				year: f.value(t - 1)
			}), 1);
			q(t, Y(e), X(e));
		}
	}, xe = () => {
		if (Array.isArray(m.value) && m.value.length === 2) {
			let e = s(s(m.value[1] ?? xn(m.value[0], 1))), [t, n] = [Y(m.value[0]), X(m.value[0])], [r, i] = [Y(m.value[1]), X(m.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && q(1, Y(e), X(e));
		} else m.value && !Array.isArray(m.value) && (q(0, Y(m.value), X(m.value)), pe(s()));
	}, Se = () => {
		h.startDate && (q(0, Y(s(h.startDate)), X(s(h.startDate))), v.value.count && be(0));
	}, Ce = (e, t) => {
		if (S.value.monthChangeOnScroll) {
			let n = Date.now() - r.value.getTime(), i = Math.abs(e.deltaY), a = 500;
			i > 1 && (a = 100), i > 100 && (a = 0), n > a && (r.value = /* @__PURE__ */ new Date(), ye(S.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, we = (e, t, n = !1) => {
		S.value.monthChangeOnArrows && h.vertical === n && Te(e, t);
	}, Te = (e, t) => {
		ye(e === "right" ? -1 : 1, t);
	}, Ee = (e) => {
		if (C.value.markers) return W(e.value, C.value.markers);
	}, De = (e, t) => {
		switch (h.sixWeeks === !0 ? "append" : h.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, Oe = (e, t, n) => {
		if (n) {
			let r = n.days.at(-1);
			if (r) {
				let n = Ae(bn(r.value, 1), Y(t));
				e.push({ days: n });
			}
		}
	}, ke = (e, t, n, r) => {
		if (h.sixWeeks && e.length < 6) {
			let i = 6 - e.length, a = (t.getDay() + 7 - r) % 7, o = 6 - (n.getDay() + 7 - r) % 7, [s, c] = De(a, o);
			for (let n = 1; n <= i; n++) if (c ? !!(n % 2) == s : s) {
				let n = e[0].days[0], r = Ae(bn(n.value, -7), Y(t));
				e.unshift({ days: r });
			} else {
				let n = e.at(-1);
				Oe(e, t, n);
			}
		}
		return e;
	}, Ae = (e, t) => {
		let n = s(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = bn(n, e), a = Y(i) !== t;
			r.push({
				text: h.hideOffsetDates && a ? "" : L(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, je = (e, t) => {
		let n = [], r = c(t, e), i = c(t, e + 1, 0), a = Tn(r, { weekStartsOn: O.value }), o = (t) => {
			let r = Ae(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			if (z(a, i)) {
				let e = bn(t, 7);
				o(e);
			}
		};
		return o(a), ke(n, r, i, O.value);
	}, Me = (e) => {
		let t = R({
			hours: p.hours,
			minutes: p.minutes,
			seconds: ze()
		}, s(e.value));
		l("date-click", t), w.value.enabled ? H(t, w.value.limit) : m.value = t, ae("calendar", !0), b().then(() => {
			le();
		});
	}, Ne = (e) => x.value.noDisabledRange ? re(n.value[0], e).some((e) => A(e)) : !1, Pe = () => {
		n.value = m.value ? m.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(x.value.fixedStart || x.value.fixedEnd) && !o.value && (n.value = []);
	}, Fe = (e, t) => {
		let r = [s(e.value), bn(s(e.value), +x.value.autoRange)];
		j(r) ? (t && Ie(e.value), n.value = r) : l("invalid-date", e.value);
	}, Ie = (e) => {
		let t = Y(s(e)), n = X(s(e));
		if (q(0, t, n), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = fe(Q(s(e), {
				year: f.value(t - 1),
				month: d.value(t - 1)
			}));
			q(t, n.month, n.year);
		}
	}, Le = (e) => {
		if (Ne(e.value) || !N(e.value, m.value, +!x.value.fixedStart)) return l("invalid-date", e.value);
		n.value = V(s(e.value));
	}, Re = (e, t) => {
		if (Pe(), x.value.autoRange) return Fe(e, t);
		if (x.value.fixedStart || x.value.fixedEnd) return Le(e);
		n.value[0] ? N(s(e.value), m.value) && !Ne(e.value) ? (o.value = !1, z(s(e.value), s(n.value[0])) ? x.value.autoSwitchStartEnd ? (n.value.unshift(s(e.value)), l("range-end", n.value[0])) : (n.value[0] = s(e.value), l("range-start", n.value[0])) : (n.value[1] = s(e.value), l("range-end", n.value[1]))) : l("invalid-date", e.value) : (n.value[0] = s(e.value), l("range-start", n.value[0]), x.value.requireEndTime && h.modelAuto && (n.value[1] = s(e.value), o.value = !0));
	}, ze = (e = !0) => E.value.enableSeconds ? Array.isArray(p.seconds) ? e ? p.seconds[0] : p.seconds[1] : p.seconds : 0, Be = (e) => {
		n.value[e] = R({
			hours: p.hours[e],
			minutes: p.minutes[e],
			seconds: ze(e !== 1)
		}, n.value[e]);
	}, Ve = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), l("range-start", n.value[0]), l("range-end", n.value[1]));
	}, He = () => {
		n.value.length && (n.value[0] && !n.value[1] ? Be(0) : (Be(0), Be(1), ae("calendar", !0)), Ve(), m.value = n.value.slice(), B(n.value, e, n.value.length < 2 || D.value?.steps.length ? D.value?.steps.at(-1) !== G.value : !1));
	}, Ue = (e, t = !1) => {
		if (A(e.value) || !e.current && h.hideOffsetDates) return l("invalid-date", e.value);
		let { marker: n, ...r } = e;
		if (i.value = {
			...structuredClone(r),
			marker: n
		}, !x.value.enabled) return Me(e);
		Array.isArray(p.hours) && Array.isArray(p.minutes) && !w.value.enabled && (Re(e, t), He());
	}, We = (e, n) => {
		q(e, n.month, n.year, !1, !0), v.value.count && !v.value.solo && be(e), t(v.value.solo ? e : void 0), !n.fromNav && G.value && ae(G.value);
	}, Ge = (e) => {
		U({ value: e }), ie(), h.multiCalendars && b().then(() => ue(!0));
	}, Ke = () => {
		if (Array.isArray(m.value)) {
			if (w.value.enabled) {
				let e = qe();
				m.value[m.value.length - 1] = ee(e);
			} else m.value = m.value.map((e, t) => e && ee(e, t));
		} else m.value = ee(m.value);
		e("time-update");
	}, qe = () => Array.isArray(m.value) && m.value.length ? m.value[m.value.length - 1] : null, Je = (e) => {
		let t = "";
		if (x.value.enabled && Array.isArray(m.value)) for (let n of Object.keys(e)) {
			let r = e[n];
			Array.isArray(r) && (p[n][0] !== r[0] && (t = "range-start"), p[n][1] !== r[1] && (t = "range-start"));
		}
		return t;
	};
	return {
		calendars: u,
		modelValue: m,
		month: d,
		year: f,
		time: p,
		disabledTimesConfig: ne,
		today: g,
		validateTime: I,
		getCalendarDays: je,
		getMarker: Ee,
		handleScroll: Ce,
		handleSwipe: Te,
		handleArrow: we,
		selectDate: Ue,
		updateMonthYear: We,
		presetDate: Ge,
		updateTime: (e) => {
			let t = Je(e);
			P(e, Ke), t && l(t, m.value[t === "range-start" ? 0 : 1]), D.value?.steps.length && le();
		},
		assignMonthAndYear: pe,
		setStartTime: se
	};
}, tc = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Fo(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = $(), { isDisabled: y } = io(), b = M(null), x = (e) => {
		(e.current || !u.hideOffsetDates) && (b.value = e.value);
	}, S = () => {
		b.value = null;
	}, C = (e) => Array.isArray(v.value) && g.value.enabled && v.value[0] && b.value ? e ? n(b.value, v.value[0]) : r(b.value, v.value[0]) : !0, w = (e, t) => {
		let n = v.value && Array.isArray(v.value) && v.value ? t ? v.value[0] || null : v.value[1] : null;
		return a(c(e.value), n);
	}, T = (e) => {
		let t = Array.isArray(v.value) ? v.value[0] : null;
		return !e || !r(b.value, t);
	}, E = (e, t = !0) => (g.value.enabled || u.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? u.hideOffsetDates && !e.current ? !1 : a(c(e.value), v.value[+!t]) : g.value.enabled ? w(e, t) && T(t) || a(e.value, Array.isArray(v.value) ? v.value[0] : null) && C(t) : !1, D = (e, t) => {
		if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
			let i = a(e.value, b.value);
			return t ? n(v.value[0], e.value) && i : r(v.value[0], e.value) && i;
		}
		return !1;
	}, O = (e) => !v.value || u.hideOffsetDates && !e.current ? !1 : g.value.enabled ? u.modelAuto && Array.isArray(v.value) ? a(e.value, v.value[0] ?? l) : !1 : f.value.enabled && Array.isArray(v.value) ? v.value.some((t) => a(t, e.value)) : a(e.value, v.value ? v.value : l), k = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = bn(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = bn(b.value, +g.value.autoRange);
				if (u.hideOffsetDates && !e.current) return !1;
				let i = o(c(b.value), _.value);
				return u.weekPicker ? n(e.value, i[0]) && r(e.value, i[1]) : n(e.value, b.value) && r(e.value, t);
			}
			return !1;
		}
		return !1;
	}, j = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = o(c(b.value), _.value);
				return u.weekPicker ? a(t[0], e.value) : a(b.value, e.value);
			}
			return !1;
		}
		return !1;
	}, N = (e) => i(v.value, b.value, e.value), P = () => u.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, ee = () => !u.modelAuto || e(v.value), F = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !E(e) && !E(e, !1);
		return !y(e.value) && !O(e) && !(!e.current && u.hideOffsetDates) && t;
	}, te = (e) => g.value.enabled ? u.modelAuto ? P() && O(e) : !1 : O(e), I = (e) => m.value ? t(e.value, h.value.highlight) : !1, ne = (e) => {
		let t = y(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, L = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), R = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && ee() && (e.current || !u.hideOffsetDates) && !O(e) ? N(e) : !1, z = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, v.value[0]);
			return $r(e.value, t) || Qr(e.value, n);
		}
		return !1;
	}, re = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, v.value[0]);
			return i([t, n], v.value[0], e.value);
		}
		return !1;
	}, B = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? z(e) || re(e) : g.value.maxRange ? z(e) : re(e) : !1, V = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = ie(e), o = g.value.enabled ? t || i : !1;
		return {
			"dp--cell-offset": !e.current,
			"dp--pointer": !u.disabled && !(!e.current && u.hideOffsetDates) && !y(e.value) && !B(e),
			"dp--cell-disabled": y(e.value) || B(e),
			"dp--cell-highlight": !ne(e) && (I(e) || L(e)) && !te(e) && !o && !j(e) && !(R(e) && u.weekPicker) && !i,
			"dp--cell-highlight-active": !ne(e) && (I(e) || L(e)) && te(e),
			"dp--today": !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, H = (e) => ({
		"dp--active": te(e),
		"dp--date-hoverable": F(e)
	}), U = (e) => {
		if (v.value && !Array.isArray(v.value)) {
			let t = o(v.value, _.value);
			return {
				...oe(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...oe(e) };
	}, W = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...oe(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...oe(e) };
	}, ie = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && E(e) && ee() : E(e) && ee(),
		isRangeEnd: d.value.count > 0 ? e.current && E(e, !1) && ee() : E(e, !1) && ee()
	}), ae = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, G = (e, t, n, r) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && $r(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && Qr(e.value, v.value[1]) && !r, K = (e, t) => !ae(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && Qr(e.value, b.value) && $r(e.value, v.value[0]) : g.value.fixedStart && $r(e.value, b.value) && Qr(e.value, v.value[1]), q = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = ie(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": R(e) || K(e, !0) || K(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": D(e, !0) || G(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": D(e, !1) || G(e, !1, t, n)
		};
	}, oe = (e) => ({
		...q(e),
		"dp--range-preview dp--cell-auto-range": A(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": j(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": k(e)
	}), se = (e) => g.value.enabled ? g.value.autoRange ? oe(e) : u.modelAuto ? {
		...H(e),
		...q(e)
	} : u.weekPicker ? W(e) : q(e) : u.weekPicker ? U(e) : H(e);
	return {
		setHoverDate: x,
		clearHoverDate: S,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...V(e),
			...se(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, nc = { key: 0 }, rc = /* @__PURE__ */ p({
	__name: "DatePicker",
	props: /*@__PURE__*/ v({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, ko),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, { month: l, year: d, modelValue: p, time: m, disabledTimesConfig: g, today: _, validateTime: v, getCalendarDays: b, getMarker: C, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: k, presetDate: A, updateTime: j, assignMonthAndYear: M, setStartTime: ee } = ec(i, fe), F = re(), { setHoverDate: te, getDayClassData: I, clearHoverDate: ne } = tc(), { getDate: L, rootEmit: R, rootProps: V, defaults: { multiCalendars: W, timeConfig: ie } } = $(), { getYears: ae, getMonths: G } = Ro(), { getCellId: K } = Fo(), q = B("calendar-header"), oe = B("calendar"), se = B("time-picker"), ce = Go(F, Ho.Calendar), le = Go(F, Ho.DatePickerHeader), ue = Go(F, Ho.TimePicker);
		H(W, (e, t) => {
			e.count - t.count > 0 && M();
		}, { deep: !0 });
		let de = a(() => (e) => b(l.value(e), d.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = C(e), e.classData = I(e), e))
		})));
		function fe(e) {
			e || e === 0 ? oe.value?.[e]?.triggerTransition(l.value(e), d.value(e)) : oe.value?.forEach((e, t) => e?.triggerTransition(l.value(t), d.value(t)));
		}
		let pe = (e, t = 0) => {
			q.value?.[t]?.toggleMonthPicker(e);
		}, me = (e, t = 0) => {
			q.value?.[t]?.toggleYearPicker(e);
		}, he = (e, t) => {
			se.value?.toggleTimePicker(e, t);
		}, ge = (e, t) => {
			if (!V.range) {
				let n = p.value ? p.value : _, r = t ? L(t) : n, i = e ? Tn(r, { weekStartsOn: 1 }) : tr(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: Y(r) === l.value(0),
					text: "",
					classData: {}
				}), document.getElementById(K(i))?.focus();
			}
		}, _e = (e) => {
			q.value?.[0]?.handleMonthYearChange(e, !0);
		}, ve = (e) => {
			k(0, {
				month: l.value(0),
				year: d.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ye = (e) => {
			R("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: ne,
			presetDate: A,
			handleArrow: w,
			updateMonthYear: k,
			setStartTime: ee,
			toggleMonthPicker: pe,
			toggleYearPicker: me,
			toggleTimePicker: he,
			getSidebarProps: () => ({
				modelValue: p,
				month: l,
				year: d,
				time: m,
				updateTime: j,
				updateMonthYear: k,
				selectDate: D,
				presetDate: A
			}),
			changeMonth: _e,
			changeYear: ve,
			selectWeekDate: ge
		}), (t, r) => (O(), c(n, null, [f(fs, { collapse: e.collapse }, {
			default: U(({ instances: i, wrapClass: a }) => [(O(!0), c(n, null, N(i, (n) => (O(), c("div", {
				key: n,
				class: x(a)
			}, [z(V).hideMonthYearSelect ? s("", !0) : (O(), o(Gs, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: z(G)(),
				years: z(ae)(),
				month: z(l)(n),
				year: z(d)(n),
				instance: n,
				"menu-wrap-ref": e.menuWrapRef,
				onUpdateMonthYear: (e) => z(k)(n, e),
				onOverlayClosed: ye
			}, u({ _: 2 }, [N(z(le), (e) => ({
				name: e,
				fn: U((n) => [P(t.$slots, e, y({ ref_for: !0 }, n))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), f($s, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": de.value(n),
				instance: n,
				month: z(l)(n),
				year: z(d)(n),
				onSelectDate: (e) => z(D)(e, n !== 1),
				onSetHoverDate: r[0] ||= (e) => z(te)(e),
				onHandleScroll: (e) => z(T)(e, n),
				onHandleSwipe: (e) => z(E)(e, n)
			}, u({ _: 2 }, [N(z(ce), (e) => ({
				name: e,
				fn: U((n) => [P(t.$slots, e, y({ ref_for: !0 }, n))])
			}))]), 1032, [
				"mapped-dates",
				"instance",
				"month",
				"year",
				"onSelectDate",
				"onHandleScroll",
				"onHandleSwipe"
			])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]), z(ie).enableTimePicker ? (O(), c("div", nc, [P(t.$slots, "time-picker", S(h({
			time: z(m),
			updateTime: z(j)
		})), () => [f(Fs, {
			ref: "time-picker",
			hours: z(m).hours,
			minutes: z(m).minutes,
			seconds: z(m).seconds,
			"disabled-times-config": z(g),
			"validate-time": z(v),
			"no-overlay-focus": e.noOverlayFocus,
			"onUpdate:hours": r[1] ||= (e) => z(j)({
				hours: e,
				minutes: z(m).minutes,
				seconds: z(m).seconds
			}),
			"onUpdate:minutes": r[2] ||= (e) => z(j)({
				hours: z(m).hours,
				minutes: e,
				seconds: z(m).seconds
			}),
			"onUpdate:seconds": r[3] ||= (e) => z(j)({
				hours: z(m).hours,
				minutes: z(m).minutes,
				seconds: e
			})
		}, u({ _: 2 }, [N(z(ue), (e) => ({
			name: e,
			fn: U((n) => [P(t.$slots, e, S(h(n)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : s("", !0)], 64));
	}
}), ic = (e) => {
	let { getDate: t, modelValue: n, year: r, calendars: i, defaults: { highlight: o, range: s, multiDates: c } } = $(), { isDateBetween: l, isDateEqual: u } = Fo(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = vs();
	ro();
	let { isDisabled: m } = io(), { formatQuarterText: h } = Lo(), { childMount: g } = $a(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = _s(), E = M();
	T(() => {
		g(), w();
	});
	let D = a(() => (e) => n.value ? Array.isArray(n.value) ? n.value.some((t) => da(e, t)) : da(n.value, e) : !1), O = (e) => {
		if (s.value.enabled) {
			if (Array.isArray(n.value)) {
				let t = u(e, n.value[0]) || u(e, n.value[1]);
				return l(n.value, E.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === Bn(t) && e.year === X(t), A = (e) => typeof o.value == "function" ? o.value({
		quarter: Bn(e),
		year: X(e)
	}) : o.value.quarters.some((t) => k(t, e)), j = a(() => (e) => {
		let n = Q(t(), { year: r.value(e) });
		return Zn({
			start: er(n),
			end: $n(n)
		}).map((e) => {
			let t = Xn(e), n = nr(e), r = m(e), i = O(t), a = A(t);
			return {
				text: h(t, n),
				value: t,
				active: D.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), N = (t) => {
		f(t, c.value.limit), e("auto-apply", !0);
	}, P = (t) => {
		n.value = p(t), d(n.value, e, n.value.length < 2);
	}, ee = (t) => {
		n.value = t, e("auto-apply");
	};
	return {
		groupedYears: _,
		year: r,
		isDisabled: y,
		quarters: j,
		showYearPicker: v,
		modelValue: n,
		selectYear: b,
		toggleYearPicker: x,
		handleYearSelect: S,
		handleYear: C,
		setHoverDate: (e) => {
			E.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return i.value[t].month = Y(nr(e)), c.value.enabled ? N(e) : s.value.enabled ? P(e) : ee(e);
		}
	};
}, ac = { class: "dp--quarter-items" }, oc = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], sc = /* @__PURE__ */ p({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: r }) {
		let i = r, { defaults: { config: a } } = $(), p = re(), { boolHtmlAttribute: m } = Bo(), h = Go(p, Ho.YearMode), { groupedYears: g, year: _, isDisabled: v, quarters: b, modelValue: S, showYearPicker: w, setHoverDate: T, selectQuarter: E, toggleYearPicker: D, handleYearSelect: k, handleYear: A } = ic(i);
		return t({
			getSidebarProps: () => ({
				modelValue: S,
				year: _,
				selectQuarter: E,
				handleYearSelect: k,
				handleYear: A
			}),
			toggleYearPicker: (e) => D(0, e)
		}), (t, r) => (O(), o(fs, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: U(({ instances: e, wrapClass: r }) => [(O(!0), c(n, null, N(e, (e) => (O(), c("div", {
				key: e,
				class: x(r)
			}, [l("div", {
				class: "dp-quarter-picker-wrap",
				style: C({ minHeight: `${z(a).modeHeight}px` })
			}, [
				t.$slots["top-extra"] ? P(t.$slots, "top-extra", { value: z(S) }, void 0, void 0, 0) : s("", !0),
				l("div", null, [f(gs, {
					items: z(g)(e),
					instance: e,
					"show-year-picker": z(w)[e],
					year: z(_)(e),
					"is-disabled": (t) => z(v)(e, t),
					onHandleYear: (t) => z(A)(e, t),
					onYearSelect: (t) => z(k)(t, e),
					onToggleYearPicker: (t) => z(D)(e, t?.show)
				}, u({ _: 2 }, [N(z(h), (e) => ({
					name: e,
					fn: U((n) => [P(t.$slots, e, y({ ref_for: !0 }, n))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				l("div", ac, [(O(!0), c(n, null, N(z(b)(e), (n, r) => (O(), c("div", { key: r }, [l("button", {
					type: "button",
					class: x(["dp--btn-base dp--qr-btn", {
						"dp--active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": n.value,
					disabled: z(m)(n.disabled),
					onClick: (t) => z(E)(n.value, e, n.disabled),
					onMouseover: (e) => z(T)(n.value)
				}, [P(t.$slots, "quarter", {
					value: n.value,
					text: n.text
				}, () => [d(I(n.text), 1)])], 42, oc)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), cc = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], lc = {
	key: 0,
	class: "dp--menu-load-container"
}, uc = {
	key: 1,
	class: "dp--menu-header"
}, dc = ["data-dp-mobile"], fc = {
	key: 0,
	class: "dp--sidebar-left"
}, pc = ["data-dp-mobile"], mc = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], hc = { class: "dp--instance-calendar" }, gc = {
	key: 2,
	class: "dp--sidebar-right"
}, _c = {
	key: 2,
	class: "dp--action-extra"
}, vc = /* @__PURE__ */ p({
	__name: "DatepickerMenu",
	props: {
		collapse: { type: Boolean },
		noOverlayFocus: { type: Boolean },
		getInputRect: { type: Function }
	},
	emits: [
		"close-picker",
		"select-date",
		"auto-apply",
		"time-update",
		"menu-blur"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, d = re(), { state: f, rootProps: p, defaults: { textInput: m, inline: g, config: _, ui: v, ariaLabels: y }, rootEmit: b, setState: w } = $(), { isMobile: E } = Io(), { handleEventPropagation: k, getElWithin: A, checkStopPropagation: j, checkKeyDown: F } = Po(), { selectCurrentDate: te } = Qo(i);
		eo();
		let ne = B("inner-menu"), L = B("dp-menu"), V = B("dyn-cmp"), H = M(0), W = M(!1), ie = M(!1), { executeFlow: G } = Qa(V, i), K = (e) => {
			ie.value = !0, _.value.allowPreventDefault && e.preventDefault(), j(e, _.value, !0);
		};
		T(() => {
			w("actionInMenu", !1), W.value = !0, q(), globalThis.addEventListener("resize", q);
			let e = fe(L);
			e && !m.value.enabled && !g.value.enabled && w("menuFocused", !0), e && (e.addEventListener("pointerdown", K), e.addEventListener("mousedown", K), b("menu-mounted", e)), document.addEventListener("mousedown", De);
		}), D(() => {
			globalThis.removeEventListener("resize", q), document.removeEventListener("mousedown", De);
			let e = fe(L);
			e && (e.removeEventListener("pointerdown", K), e.removeEventListener("mousedown", K), b("menu-unmounted", e));
		});
		let q = () => {
			let e = fe(ne);
			e && (H.value = e.getBoundingClientRect().width);
		}, oe = a(() => p.monthPicker ? bs : p.yearPicker ? Ss : p.timePicker ? Rs : p.quarterPicker ? sc : rc), se = () => {
			let e = fe(L);
			e && e.focus({ preventScroll: !0 });
		}, ce = a(() => V.value?.getSidebarProps() || {}), le = Go(d, Ho.ActionRow), ue = Go(d, Ho.PassTrough), de = a(() => ({
			"dp--menu-unclickable dp--menu-disabled": p.disabled,
			"dp--menu-unclickable dp--menu-readonly": p.readonly,
			"dp--menu-unclickable dp-menu-loading": p.loading
		})), pe = a(() => ({
			"dp--menu": !0,
			"dp--menu-index": !g.value.enabled,
			"dp--relative": g.value.enabled,
			...v.value.menu
		})), me = (e) => {
			j(e, _.value, !0);
		}, he = (e) => {
			_.value.escClose && (i("close-picker"), k(e, _.value));
		}, ge = (e) => {
			p.arrowNavigation || (e === Ja.left || e === Ja.up ? be("handleArrow", Ja.left, 0, e === Ja.up) : be("handleArrow", Ja.right, 0, e === Ja.down));
		}, _e = (e) => {
			w("shiftKeyInMenu", e.shiftKey), _.value.tabOutClosesMenu && !p.hideMonthYearSelect && e.code === Ya.tab && e.target.classList.contains("dp--menu") && f.shiftKeyInMenu && (e.preventDefault(), j(e, _.value, !0), i("close-picker"));
		}, ve = (e) => {
			V.value?.toggleTimePicker(!1, !1), V.value?.toggleMonthPicker(!1, e), V.value?.toggleYearPicker(!1, e);
		}, ye = (e, t = 0) => e === "month" ? V.value?.toggleMonthPicker(!0, t) : e === "year" ? V.value?.toggleYearPicker(!0, t) : e === "time" ? V.value?.toggleTimePicker(!0) : ve(t), be = (e, ...t) => {
			V.value?.[e] && V.value?.[e](...t);
		}, xe = (e) => {
			be("presetDate", R(e));
		}, Se = () => {
			be("clearHoverDate");
		}, Ce = (e, t) => {
			be("updateMonthYear", e, t);
		}, we = (e, t) => {
			e.preventDefault(), ge(t);
		}, Te = (e) => {
			_.value.allowPreventDefault && (e.preventDefault(), j(e, _.value, !0));
		}, Ee = (e) => {
			if (_.value.onInternalKeydown?.(e) !== !1) {
				if (_e(e), e.key === Ya.home || e.key === Ya.end) return be("selectWeekDate", e.key === Ya.home, e.target.getAttribute("id"));
				switch ((e.key === Ya.pageUp || e.key === Ya.pageDown) && (e.shiftKey ? (be("changeYear", e.key === Ya.pageUp), A(L.value, "overlay-year")?.focus()) : (be("changeMonth", e.key === Ya.pageUp), A(L.value, e.key === Ya.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && L.value?.focus({ preventScroll: !0 })), e.key) {
					case Ya.esc: return he(e);
					case Ya.enter: return Te(e);
					case Ya.arrowLeft: return we(e, Ja.left);
					case Ya.arrowRight: return we(e, Ja.right);
					case Ya.arrowUp: return we(e, Ja.up);
					case Ya.arrowDown: return we(e, Ja.down);
					default: return;
				}
			}
		}, De = (e) => {
			g.value.enabled && !g.value.input && !L.value?.contains(e.target) && ie.value && (ie.value = !1, i("menu-blur"));
		};
		return t({
			updateMonthYear: Ce,
			switchView: ye,
			onValueCleared: () => {
				V.value?.setStartTime?.();
			},
			executeFlow: G
		}), (t, r) => (O(), c("div", {
			id: z(p).menuId,
			ref: "dp-menu",
			tabindex: z(g).enabled ? void 0 : "0",
			role: z(g).enabled ? void 0 : "dialog",
			"aria-label": z(y)?.menu,
			"aria-modal": !z(g).enabled || void 0,
			class: x(pe.value),
			onMousedown: r[5] ||= (e) => z(w)("actionInMenu", !0),
			onMouseleave: Se,
			onClick: me,
			onKeydown: Ee
		}, [
			(z(p).disabled || z(p).readonly) && z(g).enabled || z(p).loading ? (O(), c("div", {
				key: 0,
				class: x(de.value)
			}, [z(p).loading ? (O(), c("div", lc, [...r[6] ||= [l("span", { class: "dp--menu-loader" }, null, -1)]])) : s("", !0)], 2)) : s("", !0),
			t.$slots["menu-header"] ? (O(), c("div", uc, [P(t.$slots, "menu-header")])) : s("", !0),
			P(t.$slots, "arrow"),
			l("div", {
				ref: "inner-menu",
				class: x({
					"dp--menu-content-wrapper": z(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (z(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": z(E),
				style: C({ "--dp-menu-width": `${H.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (O(), c("div", fc, [P(t.$slots, "left-sidebar", S(h(ce.value)))])) : s("", !0),
				z(p).presetDates.length ? (O(), c("div", {
					key: 1,
					class: x({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": z(E)
				}, [(O(!0), c(n, null, N(z(p).presetDates, (r, i) => (O(), c(n, { key: i }, [r.slot ? P(t.$slots, r.slot, {
					presetDate: xe,
					label: r.label,
					value: r.value
				}, void 0, void 0, 0) : (O(), c("button", {
					key: 1,
					type: "button",
					style: C(r.style || {}),
					class: x(["dp--btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": z(E),
					onClick: ae((e) => xe(r.value), ["prevent"]),
					onKeydown: (e) => z(F)(e, () => xe(r.value), !0)
				}, I(r.label), 47, mc))], 64))), 128))], 10, pc)) : s("", !0),
				l("div", hc, [(O(), o(ee(oe.value), {
					ref: "dyn-cmp",
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": L.value,
					onFocusMenu: se,
					onSelectDate: r[0] ||= (e) => t.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => t.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => t.$emit("time-update")
				}, u({ _: 2 }, [N(z(ue), (e) => ({
					name: e,
					fn: U((n) => [P(t.$slots, e, S(h({ ...n })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				t.$slots["right-sidebar"] ? (O(), c("div", gc, [P(t.$slots, "right-sidebar", S(h(ce.value)))])) : s("", !0)
			], 14, dc),
			t.$slots["action-extra"] ? (O(), c("div", _c, [t.$slots["action-extra"] ? P(t.$slots, "action-extra", { selectCurrentDate: z(te) }, void 0, void 0, 0) : s("", !0)])) : s("", !0),
			!z(p).autoApply || z(_).keepActionRow ? (O(), o(rs, {
				key: 3,
				"menu-mount": W.value,
				"calendar-width": H.value,
				onClosePicker: r[3] ||= (e) => t.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => t.$emit("select-date"),
				onSelectNow: z(te)
			}, u({ _: 2 }, [N(z(le), (e) => ({
				name: e,
				fn: U((n) => [P(t.$slots, e, S(h(n)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : s("", !0)
		], 42, cc));
	}
}), yc = p({
	name: "MaybeTeleport",
	props: {
		to: {
			type: [String, Object],
			default: void 0
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { slots: t }) {
		return () => {
			let n = t.default?.();
			return e.to && !e.disabled ? g(r, { to: e.to }, n) : n;
		};
	}
}), bc = ["data-dp-mobile"], xc = ["inert"], Sc = /* @__PURE__ */ p({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: n, setState: r, inputValue: d, modelValue: p, rootProps: m, defaults: { inline: g, config: _, textInput: v, range: y, multiDates: w, teleport: E, floatingConfig: k, flow: A } } = $(), { validateDate: j, isValidTime: ee } = io(), { menuTransition: F, showTransition: te } = no(), { isMobile: I } = Io(), { findNextFocusableElement: ne, getNumVal: R } = Po(), V = re(), W = M(!1), ie = a(() => !g.value.enabled && (m.disabled || m.readonly)), ae = M(g.value.enabled), G = M(g.value.enabled || m.centered), K = L(m, "modelValue"), q = L(m, "timezone"), oe = B("dp-menu-wrap"), se = B("dp-menu"), ce = B("input-cmp"), le = B("picker-wrapper"), ue = B("menu-arrow"), de = M(!1), fe = M(!1), pe = M(!1), me = M(!0), { floatingStyles: ge, middlewareData: _e, placement: ve, y: ye } = fn(ce, oe, {
			strategy: k.value.strategy,
			placement: k.value.placement,
			middleware: ((e) => (k.value.flip && e.push(rn(typeof k.value.flip == "object" ? k.value.flip : {})), k.value.shift && e.push(nn(typeof k.value.shift == "object" ? k.value.shift : {})), k.value.arrow && e.push(ln({ element: k.value.arrow === !0 ? ue : k.value.arrow })), e))([tn(k.value.offset)]),
			whileElementsMounted: en
		});
		T(() => {
			Se(m.modelValue), b().then(() => {
				g.value.enabled || globalThis.addEventListener("resize", je);
			}), g.value.enabled && (W.value = !0), globalThis.addEventListener("keyup", Me), globalThis.addEventListener("keydown", Ne);
		}), D(() => {
			g.value.enabled || globalThis.removeEventListener("resize", je), globalThis.removeEventListener("keyup", Me), globalThis.removeEventListener("keydown", Ne);
		});
		let be = Ko(V, m.presetDates), xe = Go(V, Ho.Input);
		H([K, q], () => {
			Se(K.value);
		}, { deep: !0 }), H([ve, ye], () => {
			!g.value.enabled && !m.centered && me.value && (G.value = !1, b().then(() => {
				me.value = !1, G.value = !0;
			}));
		});
		let { parseExternalModelValue: Se, emitModelValue: Ce, formatInputValue: we, checkBeforeEmit: Te } = to(), Ee = a(() => ({
			"dp--main": !0,
			"dp--theme-dark": m.dark,
			"dp--theme-light": !m.dark,
			"dp--flex-display": g.value.enabled,
			"dp--flex-display-collapsed": pe.value,
			"dp--flex-display-with-input": g.value.input
		})), De = a(() => m.dark ? "dp--theme-dark" : "dp--theme-light"), Oe = a(() => g.value.enabled && (m.timePicker || m.monthPicker || m.yearPicker || m.quarterPicker)), ke = () => ce.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Ae = () => {
			W.value && _.value.closeOnScroll && He();
		}, je = () => {
			let e = se.value?.$el.getBoundingClientRect().width ?? 0;
			pe.value = document.body.offsetWidth <= e;
		}, Me = (e) => {
			if (e.key === "Tab" && !g.value.enabled && _.value.tabOutClosesMenu) {
				let e = le.value?.contains(document.activeElement), t = oe.value?.contains(document.activeElement);
				!e && !t && He();
			}
			fe.value = e.shiftKey;
		}, Ne = (e) => {
			fe.value = e.shiftKey;
		}, Pe = () => {
			!m.disabled && !m.readonly && (me.value = !0, ae.value = !0, W.value = !0, W.value && n("open"), W.value || Ve(), Se(m.modelValue));
		}, Fe = () => {
			d.value = "", Ve(), se.value?.onValueCleared(), ce.value?.setParsedDate(null), n("update:model-value", null), n("cleared"), _.value.closeOnClearValue && He();
		}, Ie = () => {
			let e = p.value;
			return !e || !Array.isArray(e) && j(e) ? !0 : Array.isArray(e) ? w.value.enabled || e.length === 2 && j(e[0]) && j(e[1]) ? !0 : y.value.partialRange && !m.timePicker ? j(e[0]) : !1 : !1;
		}, Le = () => {
			Te() && Ie() ? (Ce(), He(!1, !0)) : n("invalid-select");
		}, Re = (e) => {
			ze(), Ce(), _.value.closeOnAutoApply && !e && He(!1, !0);
		}, ze = () => {
			ce.value && v.value.enabled && ce.value.setParsedDate(p.value);
		}, Be = (e = !1) => {
			m.autoApply && ee(p.value) && Ie() && (y.value.enabled && Array.isArray(p.value) ? (y.value.partialRange || p.value.length === 2) && Re(e) : Re(e));
		}, Ve = () => {
			v.value.enabled || (p.value = null);
		}, He = (e = !1, t = !1) => {
			me.value = !0, e && p.value && _.value.setDateOnMenuClose && Le(), g.value.enabled || (W.value && (W.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), n("closed"), !t && d.value && Se(K.value)), Ve(), n("blur"));
		};
		H(ie, (e) => {
			e && W.value && He();
		});
		let Ue = () => {
			!g.value.enabled && !W.value && (ae.value = !1);
		}, We = (e, t, i = !1) => {
			if (!e) {
				p.value = null;
				return;
			}
			let a = Array.isArray(e) ? e.every((e) => j(e)) : j(e), o = ee(e);
			a && o ? (r("isTextInputDate", !0), p.value = e, t ? (de.value = i, Le(), n("text-submit")) : m.autoApply && Be(!0), b().then(() => {
				r("isTextInputDate", !1);
			})) : n("invalid-date", e);
		}, Ge = () => {
			m.autoApply && ee(p.value) && Ce(), ze();
		}, Ke = () => W.value ? He() : Pe(), qe = (e) => {
			p.value = e;
		}, Je = () => {
			v.value.enabled && (r("isInputFocused", !0), we()), n("focus");
		}, Ye = () => {
			v.value.enabled && (r("isInputFocused", !1), Se(m.modelValue), de.value && ne(le.value, fe.value)?.focus()), n("blur");
		}, Xe = (e, t) => {
			se.value && se.value.updateMonthYear(t ?? 0, {
				month: R(e.month),
				year: R(e.year)
			});
		}, Ze = (e) => {
			Se(e ?? m.modelValue);
		}, Qe = (e, t) => {
			se.value?.switchView(e, t);
		}, $e = (e, t) => {
			if (W.value) return _.value.onClickOutside ? _.value.onClickOutside(e, t) : He(!0);
		};
		return he(oe, (e) => $e(Ie, e), { ignore: [ce] }), t({
			closeMenu: He,
			selectDate: Le,
			clearValue: Fe,
			openMenu: Pe,
			onScroll: Ae,
			formatInputValue: we,
			updateInternalModelValue: qe,
			setMonthYear: Xe,
			parseModel: Ze,
			switchView: Qe,
			toggleMenu: Ke,
			executeFlow: (e) => {
				se.value?.executeFlow(e ?? A.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => oe,
			dpMenuRef: () => se,
			dpWrapMenuRef: () => oe,
			inputRef: () => ce
		}), (e, t) => (O(), c("div", {
			ref: "picker-wrapper",
			class: x(Ee.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": z(I)
		}, [f(Zo, {
			ref: "input-cmp",
			"is-menu-open": W.value,
			onClear: Fe,
			onOpen: Pe,
			onSetInputDate: We,
			onSetEmptyDate: z(Ce),
			onSelectDate: Le,
			onToggle: Ke,
			onClose: He,
			onFocus: Je,
			onBlur: Ye,
			onRealBlur: t[0] ||= (e) => z(r)("isInputFocused", !1)
		}, u({ _: 2 }, [N(z(xe), (t) => ({
			name: t,
			fn: U((n) => [P(e.$slots, t, S(h(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), f(z(yc), {
			to: z(E),
			disabled: !z(E)
		}, {
			default: U(() => [ae.value ? (O(), c("div", {
				key: 0,
				ref: "dp-menu-wrap",
				inert: ie.value,
				class: x({
					"dp--menu-wrapper": !z(g).enabled,
					"dp--outer-menu-wrap": !0,
					"dp--centered": z(m).centered
				}),
				style: C(!z(g).enabled && !z(m).centered ? z(ge) : void 0)
			}, [f(i, {
				name: z(F)(z(ve).startsWith("top")),
				css: z(te) && !z(g).enabled && !z(m).centered && G.value,
				appear: "",
				onAfterLeave: Ue
			}, {
				default: U(() => [W.value && G.value ? (O(), o(vc, {
					key: 0,
					ref: "dp-menu",
					class: x({ [De.value]: !0 }),
					"no-overlay-focus": Oe.value,
					collapse: pe.value,
					"get-input-rect": ke,
					onClosePicker: He,
					onSelectDate: Le,
					onAutoApply: Be,
					onTimeUpdate: Ge,
					onMenuBlur: t[1] ||= (e) => z(n)("blur")
				}, u({ _: 2 }, [N(z(be), (t) => ({
					name: t,
					fn: U((n) => [P(e.$slots, t, S(h({ ...n })))])
				})), !z(g).enabled && !z(m).centered && z(k).arrow === !0 ? {
					name: "arrow",
					fn: U(() => [l("div", {
						ref: "menu-arrow",
						class: x({
							"dp--arrow-top": z(ve).includes("bottom"),
							"dp--arrow-bottom": z(ve).includes("top")
						}),
						style: C({
							left: z(_e).arrow?.x == null ? "" : `${z(_e).arrow.x - z(_e).arrow.centerOffset}px`,
							top: z(_e).arrow?.y == null ? "" : `${z(_e).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : s("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 14, xc)) : s("", !0)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, bc));
	}
}), Cc = /* @__PURE__ */ p({
	__name: "VueDatePickerRoot",
	props: /*@__PURE__*/ v({
		multiCalendars: { type: [
			Boolean,
			Number,
			String,
			Object
		] },
		modelValue: {},
		modelType: {},
		dark: { type: Boolean },
		transitions: { type: [Boolean, Object] },
		ariaLabels: {},
		hideNavigation: {},
		timezone: {},
		vertical: { type: Boolean },
		hideMonthYearSelect: { type: Boolean },
		disableYearSelect: { type: Boolean },
		yearRange: {},
		autoApply: { type: Boolean },
		disabledDates: { type: [Array, Function] },
		startDate: {},
		hideOffsetDates: { type: Boolean },
		noToday: { type: Boolean },
		allowedDates: {},
		markers: {},
		presetDates: {},
		flow: {},
		preventMinMaxNavigation: { type: Boolean },
		reverseYears: { type: Boolean },
		weekPicker: { type: Boolean },
		filters: {},
		arrowNavigation: { type: Boolean },
		highlight: { type: [Function, Object] },
		teleport: { type: [Boolean, String] },
		centered: { type: Boolean },
		locale: {},
		weekStart: {},
		weekNumbers: { type: [Boolean, Object] },
		dayNames: { type: [Function, Array] },
		monthPicker: { type: Boolean },
		yearPicker: { type: Boolean },
		modelAuto: { type: Boolean },
		formats: {},
		multiDates: { type: [Boolean, Object] },
		minDate: {},
		maxDate: {},
		minTime: {},
		maxTime: {},
		inputAttrs: {},
		timeConfig: {},
		placeholder: {},
		timePicker: { type: Boolean },
		range: { type: [Boolean, Object] },
		menuId: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		inline: { type: [Boolean, Object] },
		textInput: { type: [Boolean, Object] },
		sixWeeks: { type: [Boolean, String] },
		actionRow: {},
		focusStartDate: { type: Boolean },
		disabledTimes: { type: [Function, Array] },
		calendar: { type: Function },
		config: {},
		quarterPicker: { type: Boolean },
		yearFirst: { type: Boolean },
		loading: { type: Boolean },
		ui: {},
		floating: {}
	}, Ao),
	emits: [
		"update:model-value",
		"internal-model-change",
		"text-submit",
		"text-input",
		"open",
		"closed",
		"focus",
		"blur",
		"cleared",
		"flow-step",
		"update-month-year",
		"invalid-select",
		"invalid-fixed-range",
		"invalid-date",
		"tooltip-open",
		"tooltip-close",
		"am-pm-change",
		"range-start",
		"range-end",
		"date-click",
		"overlay-toggle",
		"invalid",
		"menu-mounted",
		"menu-unmounted"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e;
		Ua(i, r);
		let a = Ko(re(), i.presetDates);
		return t(zo(B("date-picker"))), (e, t) => (O(), o(Sc, { ref: "date-picker" }, u({ _: 2 }, [N(z(a), (t) => ({
			name: t,
			fn: U((n) => [P(e.$slots, t, S(h(n)))])
		}))]), 1536));
	}
});
// node_modules/date-fns/locale/ru/_lib/formatDistance.js
function wc(e, t) {
	if (e.one !== void 0 && t === 1) return e.one;
	let n = t % 10, r = t % 100;
	return n === 1 && r !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (r < 10 || r > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Tc(e) {
	return (t, n) => n?.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? wc(e.future, t) : "через " + wc(e.regular, t) : e.past ? wc(e.past, t) : wc(e.regular, t) + " назад" : wc(e.regular, t);
}
var Ec = {
	lessThanXSeconds: Tc({
		regular: {
			one: "меньше секунды",
			singularNominative: "меньше {{count}} секунды",
			singularGenitive: "меньше {{count}} секунд",
			pluralGenitive: "меньше {{count}} секунд"
		},
		future: {
			one: "меньше, чем через секунду",
			singularNominative: "меньше, чем через {{count}} секунду",
			singularGenitive: "меньше, чем через {{count}} секунды",
			pluralGenitive: "меньше, чем через {{count}} секунд"
		}
	}),
	xSeconds: Tc({
		regular: {
			singularNominative: "{{count}} секунда",
			singularGenitive: "{{count}} секунды",
			pluralGenitive: "{{count}} секунд"
		},
		past: {
			singularNominative: "{{count}} секунду назад",
			singularGenitive: "{{count}} секунды назад",
			pluralGenitive: "{{count}} секунд назад"
		},
		future: {
			singularNominative: "через {{count}} секунду",
			singularGenitive: "через {{count}} секунды",
			pluralGenitive: "через {{count}} секунд"
		}
	}),
	halfAMinute: (e, t) => t?.addSuffix ? t.comparison && t.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
	lessThanXMinutes: Tc({
		regular: {
			one: "меньше минуты",
			singularNominative: "меньше {{count}} минуты",
			singularGenitive: "меньше {{count}} минут",
			pluralGenitive: "меньше {{count}} минут"
		},
		future: {
			one: "меньше, чем через минуту",
			singularNominative: "меньше, чем через {{count}} минуту",
			singularGenitive: "меньше, чем через {{count}} минуты",
			pluralGenitive: "меньше, чем через {{count}} минут"
		}
	}),
	xMinutes: Tc({
		regular: {
			singularNominative: "{{count}} минута",
			singularGenitive: "{{count}} минуты",
			pluralGenitive: "{{count}} минут"
		},
		past: {
			singularNominative: "{{count}} минуту назад",
			singularGenitive: "{{count}} минуты назад",
			pluralGenitive: "{{count}} минут назад"
		},
		future: {
			singularNominative: "через {{count}} минуту",
			singularGenitive: "через {{count}} минуты",
			pluralGenitive: "через {{count}} минут"
		}
	}),
	aboutXHours: Tc({
		regular: {
			singularNominative: "около {{count}} часа",
			singularGenitive: "около {{count}} часов",
			pluralGenitive: "около {{count}} часов"
		},
		future: {
			singularNominative: "приблизительно через {{count}} час",
			singularGenitive: "приблизительно через {{count}} часа",
			pluralGenitive: "приблизительно через {{count}} часов"
		}
	}),
	xHours: Tc({ regular: {
		singularNominative: "{{count}} час",
		singularGenitive: "{{count}} часа",
		pluralGenitive: "{{count}} часов"
	} }),
	xDays: Tc({ regular: {
		singularNominative: "{{count}} день",
		singularGenitive: "{{count}} дня",
		pluralGenitive: "{{count}} дней"
	} }),
	aboutXWeeks: Tc({
		regular: {
			singularNominative: "около {{count}} недели",
			singularGenitive: "около {{count}} недель",
			pluralGenitive: "около {{count}} недель"
		},
		future: {
			singularNominative: "приблизительно через {{count}} неделю",
			singularGenitive: "приблизительно через {{count}} недели",
			pluralGenitive: "приблизительно через {{count}} недель"
		}
	}),
	xWeeks: Tc({ regular: {
		singularNominative: "{{count}} неделя",
		singularGenitive: "{{count}} недели",
		pluralGenitive: "{{count}} недель"
	} }),
	aboutXMonths: Tc({
		regular: {
			singularNominative: "около {{count}} месяца",
			singularGenitive: "около {{count}} месяцев",
			pluralGenitive: "около {{count}} месяцев"
		},
		future: {
			singularNominative: "приблизительно через {{count}} месяц",
			singularGenitive: "приблизительно через {{count}} месяца",
			pluralGenitive: "приблизительно через {{count}} месяцев"
		}
	}),
	xMonths: Tc({ regular: {
		singularNominative: "{{count}} месяц",
		singularGenitive: "{{count}} месяца",
		pluralGenitive: "{{count}} месяцев"
	} }),
	aboutXYears: Tc({
		regular: {
			singularNominative: "около {{count}} года",
			singularGenitive: "около {{count}} лет",
			pluralGenitive: "около {{count}} лет"
		},
		future: {
			singularNominative: "приблизительно через {{count}} год",
			singularGenitive: "приблизительно через {{count}} года",
			pluralGenitive: "приблизительно через {{count}} лет"
		}
	}),
	xYears: Tc({ regular: {
		singularNominative: "{{count}} год",
		singularGenitive: "{{count}} года",
		pluralGenitive: "{{count}} лет"
	} }),
	overXYears: Tc({
		regular: {
			singularNominative: "больше {{count}} года",
			singularGenitive: "больше {{count}} лет",
			pluralGenitive: "больше {{count}} лет"
		},
		future: {
			singularNominative: "больше, чем через {{count}} год",
			singularGenitive: "больше, чем через {{count}} года",
			pluralGenitive: "больше, чем через {{count}} лет"
		}
	}),
	almostXYears: Tc({
		regular: {
			singularNominative: "почти {{count}} год",
			singularGenitive: "почти {{count}} года",
			pluralGenitive: "почти {{count}} лет"
		},
		future: {
			singularNominative: "почти через {{count}} год",
			singularGenitive: "почти через {{count}} года",
			pluralGenitive: "почти через {{count}} лет"
		}
	})
}, Dc = (e, t, n) => Ec[e](t, n), Oc = {
	date: ar({
		formats: {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		},
		defaultWidth: "full"
	}),
	time: ar({
		formats: {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: ar({
		formats: { any: "{{date}}, {{time}}" },
		defaultWidth: "any"
	})
}, kc = [
	"воскресенье",
	"понедельник",
	"вторник",
	"среду",
	"четверг",
	"пятницу",
	"субботу"
];
function Ac(e) {
	let t = kc[e];
	switch (e) {
		case 0: return "'в прошлое " + t + " в' p";
		case 1:
		case 2:
		case 4: return "'в прошлый " + t + " в' p";
		case 3:
		case 5:
		case 6: return "'в прошлую " + t + " в' p";
	}
}
function jc(e) {
	let t = kc[e];
	return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function Mc(e) {
	let t = kc[e];
	switch (e) {
		case 0: return "'в следующее " + t + " в' p";
		case 1:
		case 2:
		case 4: return "'в следующий " + t + " в' p";
		case 3:
		case 5:
		case 6: return "'в следующую " + t + " в' p";
	}
}
var Nc = {
	lastWeek: (e, t, n) => {
		let r = e.getDay();
		return ua(e, t, n) ? jc(r) : Ac(r);
	},
	yesterday: "'вчера в' p",
	today: "'сегодня в' p",
	tomorrow: "'завтра в' p",
	nextWeek: (e, t, n) => {
		let r = e.getDay();
		return ua(e, t, n) ? jc(r) : Mc(r);
	},
	other: "P"
}, Pc = {
	code: "ru",
	formatDistance: Dc,
	formatLong: Oc,
	formatRelative: (e, t, n, r) => {
		let i = Nc[e];
		return typeof i == "function" ? i(t, n, r) : i;
	},
	localize: {
		ordinalNumber: (e, t) => {
			let n = Number(e), r = t?.unit, i;
			return i = r === "date" ? "-е" : r === "week" || r === "minute" || r === "second" ? "-я" : "-й", n + i;
		},
		era: lr({
			values: {
				narrow: ["до н.э.", "н.э."],
				abbreviated: ["до н. э.", "н. э."],
				wide: ["до нашей эры", "нашей эры"]
			},
			defaultWidth: "wide"
		}),
		quarter: lr({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4"
				],
				abbreviated: [
					"1-й кв.",
					"2-й кв.",
					"3-й кв.",
					"4-й кв."
				],
				wide: [
					"1-й квартал",
					"2-й квартал",
					"3-й квартал",
					"4-й квартал"
				]
			},
			defaultWidth: "wide",
			argumentCallback: (e) => e - 1
		}),
		month: lr({
			values: {
				narrow: [
					"Я",
					"Ф",
					"М",
					"А",
					"М",
					"И",
					"И",
					"А",
					"С",
					"О",
					"Н",
					"Д"
				],
				abbreviated: [
					"янв.",
					"фев.",
					"март",
					"апр.",
					"май",
					"июнь",
					"июль",
					"авг.",
					"сент.",
					"окт.",
					"нояб.",
					"дек."
				],
				wide: [
					"январь",
					"февраль",
					"март",
					"апрель",
					"май",
					"июнь",
					"июль",
					"август",
					"сентябрь",
					"октябрь",
					"ноябрь",
					"декабрь"
				]
			},
			defaultWidth: "wide",
			formattingValues: {
				narrow: [
					"Я",
					"Ф",
					"М",
					"А",
					"М",
					"И",
					"И",
					"А",
					"С",
					"О",
					"Н",
					"Д"
				],
				abbreviated: [
					"янв.",
					"фев.",
					"мар.",
					"апр.",
					"мая",
					"июн.",
					"июл.",
					"авг.",
					"сент.",
					"окт.",
					"нояб.",
					"дек."
				],
				wide: [
					"января",
					"февраля",
					"марта",
					"апреля",
					"мая",
					"июня",
					"июля",
					"августа",
					"сентября",
					"октября",
					"ноября",
					"декабря"
				]
			},
			defaultFormattingWidth: "wide"
		}),
		day: lr({
			values: {
				narrow: [
					"В",
					"П",
					"В",
					"С",
					"Ч",
					"П",
					"С"
				],
				short: [
					"вс",
					"пн",
					"вт",
					"ср",
					"чт",
					"пт",
					"сб"
				],
				abbreviated: [
					"вск",
					"пнд",
					"втр",
					"срд",
					"чтв",
					"птн",
					"суб"
				],
				wide: [
					"воскресенье",
					"понедельник",
					"вторник",
					"среда",
					"четверг",
					"пятница",
					"суббота"
				]
			},
			defaultWidth: "wide"
		}),
		dayPeriod: lr({
			values: {
				narrow: {
					am: "ДП",
					pm: "ПП",
					midnight: "полн.",
					noon: "полд.",
					morning: "утро",
					afternoon: "день",
					evening: "веч.",
					night: "ночь"
				},
				abbreviated: {
					am: "ДП",
					pm: "ПП",
					midnight: "полн.",
					noon: "полд.",
					morning: "утро",
					afternoon: "день",
					evening: "веч.",
					night: "ночь"
				},
				wide: {
					am: "ДП",
					pm: "ПП",
					midnight: "полночь",
					noon: "полдень",
					morning: "утро",
					afternoon: "день",
					evening: "вечер",
					night: "ночь"
				}
			},
			defaultWidth: "any",
			formattingValues: {
				narrow: {
					am: "ДП",
					pm: "ПП",
					midnight: "полн.",
					noon: "полд.",
					morning: "утра",
					afternoon: "дня",
					evening: "веч.",
					night: "ночи"
				},
				abbreviated: {
					am: "ДП",
					pm: "ПП",
					midnight: "полн.",
					noon: "полд.",
					morning: "утра",
					afternoon: "дня",
					evening: "веч.",
					night: "ночи"
				},
				wide: {
					am: "ДП",
					pm: "ПП",
					midnight: "полночь",
					noon: "полдень",
					morning: "утра",
					afternoon: "дня",
					evening: "вечера",
					night: "ночи"
				}
			},
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: mr({
			matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: dr({
			matchPatterns: {
				narrow: /^((до )?н\.?\s?э\.?)/i,
				abbreviated: /^((до )?н\.?\s?э\.?)/i,
				wide: /^(до нашей эры|нашей эры|наша эра)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^д/i, /^н/i] },
			defaultParseWidth: "any"
		}),
		quarter: dr({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
				wide: /^[1234](-?[ыои]?й?)? квартал/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: dr({
			matchPatterns: {
				narrow: /^[яфмаисонд]/i,
				abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
				wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^я/i,
					/^ф/i,
					/^м/i,
					/^а/i,
					/^м/i,
					/^и/i,
					/^и/i,
					/^а/i,
					/^с/i,
					/^о/i,
					/^н/i,
					/^я/i
				],
				any: [
					/^я/i,
					/^ф/i,
					/^мар/i,
					/^ап/i,
					/^ма[йя]/i,
					/^июн/i,
					/^июл/i,
					/^ав/i,
					/^с/i,
					/^о/i,
					/^н/i,
					/^д/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: dr({
			matchPatterns: {
				narrow: /^[впсч]/i,
				short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
				abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
				wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^в/i,
					/^п/i,
					/^в/i,
					/^с/i,
					/^ч/i,
					/^п/i,
					/^с/i
				],
				any: [
					/^в[ос]/i,
					/^п[он]/i,
					/^в/i,
					/^ср/i,
					/^ч/i,
					/^п[ят]/i,
					/^с[уб]/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: dr({
			matchPatterns: {
				narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
				abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
				wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: {
				am: /^дп/i,
				pm: /^пп/i,
				midnight: /^полн/i,
				noon: /^полд/i,
				morning: /^у/i,
				afternoon: /^д[ен]/i,
				evening: /^в/i,
				night: /^н/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 1
	}
}, Fc = {
	key: 0,
	class: "label"
}, Ic = {
	key: 1,
	class: "error"
}, Lc = /*#__PURE__*/ t({
	__name: "InputDate",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		required: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: String,
			default: ""
		},
		timePicker: {
			type: Boolean,
			default: !1
		},
		classMenu: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur"
	],
	setup(t, { expose: n, emit: r }) {
		let i = t, o = r, l = M(null), u = a(() => [{
			"input-label": i.label,
			"input-error": i.error,
			"input-required": i.required,
			"input-disabled": i.disabled
		}]), p = M(!1), m = M(!1), h = (e) => {
			let t = e.getTimezoneOffset();
			return (/* @__PURE__ */ new Date(e.getTime() - t * 6e4)).toISOString().slice(0, 19);
		}, g = a({
			get: () => i.modelValue ? new Date(i.modelValue) : null,
			set: (e) => {
				p.value = !1, o("update:modelValue", e ? h(e) : "");
			}
		}), _ = () => {
			l.value?.selectDate();
		}, v = () => {
			l.value?.closeMenu();
		}, y = (e) => {
			m.value = !0, p.value = !e.text?.trim();
		}, b = (e) => {
			m.value = !1, p.value = !e;
		}, S = (e) => {
			i.required && p.value && (console.log("handleBlur", g.value, /* @__PURE__ */ new Date()), g.value = /* @__PURE__ */ new Date()), o("blur", e);
		};
		n({
			focus: () => l.value?.focus(),
			blur: () => l.value?.blur()
		});
		let C = M(!1);
		return H(() => i.modelValue, (e) => {
			p.value = !e, C.value || (C.value = !0, i.required && !e && (g.value = /* @__PURE__ */ new Date()));
		}, { immediate: !0 }), (n, r) => (O(), c("div", { class: x(["input-date", u.value]) }, [
			P(n.$slots, "before", {}, void 0, !0),
			f(z(Cc), {
				ref_key: "input",
				ref: l,
				modelValue: g.value,
				"onUpdate:modelValue": [r[2] ||= (e) => g.value = e, b],
				required: t.required,
				disabled: t.disabled,
				formats: { input: t.timePicker ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy" },
				"time-config": { enableTimePicker: t.timePicker },
				ui: { menu: t.classMenu },
				locale: z(Pc),
				teleport: !0,
				"text-input": "",
				onTextInput: y,
				onFocus: r[3] ||= (e) => o("focus", e),
				onBlur: S
			}, {
				"action-buttons": U(() => [f(e, {
					size: "small",
					variant: "gray",
					onClick: r[0] ||= (e) => v()
				}, {
					default: U(() => [...r[4] ||= [d("Отмена", -1)]]),
					_: 1
				}), f(e, {
					size: "small",
					onClick: r[1] ||= (e) => _()
				}, {
					default: U(() => [...r[5] ||= [d("Выбрать", -1)]]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"modelValue",
				"required",
				"disabled",
				"formats",
				"time-config",
				"ui",
				"locale"
			]),
			t.label ? (O(), c("div", Fc, I(t.label), 1)) : s("", !0),
			t.error ? (O(), c("div", Ic, I(t.error), 1)) : s("", !0),
			P(n.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-8350786b"]]);
export { Lc as t };
