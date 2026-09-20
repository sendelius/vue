import * as e from "vue";
import { Fragment as t, Teleport as n, Transition as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createStaticVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, effectScope as m, getCurrentInstance as h, getCurrentScope as g, guardReactiveProps as _, h as v, hasInjectionContext as y, inject as b, isReactive as x, isRef as S, markRaw as C, mergeDefaults as w, mergeProps as T, nextTick as E, normalizeClass as D, normalizeProps as O, normalizeStyle as k, onBeforeUnmount as A, onBeforeUpdate as j, onMounted as M, onScopeDispose as N, onUnmounted as P, openBlock as F, provide as I, reactive as ee, readonly as L, ref as R, renderList as z, renderSlot as B, resolveComponent as V, resolveDynamicComponent as te, shallowRef as ne, toDisplayString as H, toRaw as re, toRef as ie, toRefs as ae, toValue as U, unref as W, useSlots as oe, useTemplateRef as G, vModelCheckbox as se, vModelDynamic as ce, vModelSelect as le, vShow as ue, watch as K, withCtx as q, withDirectives as de, withKeys as fe, withModifiers as pe } from "vue";
//#region \0rolldown/runtime.js
var me = Object.defineProperty, he = Object.getOwnPropertyDescriptor, ge = Object.getOwnPropertyNames, _e = Object.prototype.hasOwnProperty, ve = (e, t) => {
	let n = {};
	for (var r in e) me(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || me(n, Symbol.toStringTag, { value: "Module" }), n;
}, ye = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ge(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !_e.call(e, s) && s !== n && me(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = he(t, s)) || r.enumerable
	});
	return e;
}, be = (e, t, n) => (ye(e, t, "default"), n && ye(n, t, "default"));
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function xe(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: Se } = Object.prototype, { getPrototypeOf: Ce } = Object, { iterator: we, toStringTag: Te } = Symbol, Ee = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), De = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Oe = (e, t, n) => e === Object.prototype || !n && t === null, ke = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (De(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, Ae = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = Ce(n);
		if (Oe(n, i, n === e)) return !1;
		if (Ee(n, t)) return !0;
		n = i;
	}
	return !1;
}, je = (e, t) => e != null && Ae(e, t) ? e[t] : void 0, Me = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = Ce(e);
	if (t === null && ke(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : Ce(a);
		if (Oe(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) De(t) || Ee(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, Ne = ((e) => (t) => {
	let n = Se.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), Pe = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), Fe = (e) => (t) => typeof t === e, { isArray: Ie } = Array, Le = Fe("undefined");
function Re(e) {
	return e !== null && !Le(e) && e.constructor !== null && !Le(e.constructor) && He(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var ze = Pe("ArrayBuffer");
function Be(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && ze(e.buffer), t;
}
var Ve = Fe("string"), He = Fe("function"), Ue = Fe("number"), We = (e) => typeof e == "object" && !!e, Ge = (e) => e === !0 || e === !1, Ke = (e) => {
	if (!We(e)) return !1;
	let t = Ce(e);
	return (t === null || t === Object.prototype || Ce(t) === null) && !Ae(e, Te) && !Ae(e, we);
}, qe = (e) => {
	if (!We(e) || Re(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, Je = Pe("Date"), Ye = Pe("File"), Xe = (e) => !!(e && e.uri !== void 0), Ze = (e) => e && e.getParts !== void 0, Qe = Pe("Blob"), $e = Pe("FileList"), et = Pe("Set"), tt = (e) => We(e) && He(e.pipe);
function nt() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var rt = nt(), it = rt.FormData === void 0 ? void 0 : rt.FormData, at = (e) => {
	if (!e) return !1;
	if (it && e instanceof it) return !0;
	let t = Ce(e);
	if (!t || t === Object.prototype || !He(e.append)) return !1;
	let n = Ne(e);
	return n === "formdata" || n === "object" && He(e.toString) && e.toString() === "[object FormData]";
}, ot = Pe("URLSearchParams"), [st, ct, lt, ut] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(Pe), dt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ft(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Ie(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Re(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function pt(e, t) {
	if (Re(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ht = (e) => !Le(e) && e !== mt;
function gt(...e) {
	let { caseless: t, skipUndefined: n } = ht(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && pt(r, i) || i, o = Ee(r, a) ? r[a] : void 0;
		Ke(o) && Ke(e) ? r[a] = gt(o, e) : Ke(e) ? r[a] = gt({}, e) : Ie(e) ? r[a] = e.slice() : (!n || !Le(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Re(n) || (ft(n, i), typeof n != "object" || Ie(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Ot.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var _t = (e, t, n, { allOwnKeys: r } = {}) => (ft(t, (t, r) => {
	n && He(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: xe(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), vt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yt = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, bt = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && Ce(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, xt = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, St = (e) => {
	if (!e) return null;
	if (Ie(e)) return e;
	let t = e.length;
	if (!Ue(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, Ct = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ce(Uint8Array)), wt = (e, t) => {
	let n = (e && e[we]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Tt = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Et = Pe("HTMLFormElement"), Dt = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Ot } = Object.prototype, kt = Pe("RegExp"), At = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	ft(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, jt = (e) => {
	At(e, (t, n) => {
		if (He(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (He(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Mt = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Ie(e) ? r(e) : r(String(e).split(t)), n;
}, Nt = () => {}, Pt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ft(e) {
	return !!(e && He(e.append) && e[Te] === "FormData" && e[we]);
}
var It = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (We(e)) {
			if (t.has(e)) return;
			if (Re(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (et(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!Le(e) && r.push(e);
					}
				} else r = Ie(e) ? [] : {}, ft(e, (e, t) => {
					let i = n(e);
					!Le(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Lt = Pe("AsyncFunction"), Rt = (e) => e && (We(e) || He(e)) && He(e.then) && He(e.catch), zt = ((e, t) => e ? setImmediate : t ? ((e, t) => (mt.addEventListener("message", ({ source: n, data: r }) => {
	n === mt && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), mt.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", He(mt.postMessage)), Bt = typeof queueMicrotask < "u" ? queueMicrotask.bind(mt) : typeof process < "u" && process.nextTick || zt, Vt = (e) => e != null && He(e[we]), J = {
	isArray: Ie,
	isArrayBuffer: ze,
	isBuffer: Re,
	isFormData: at,
	isArrayBufferView: Be,
	isString: Ve,
	isNumber: Ue,
	isBoolean: Ge,
	isObject: We,
	isPlainObject: Ke,
	isEmptyObject: qe,
	isReadableStream: st,
	isRequest: ct,
	isResponse: lt,
	isHeaders: ut,
	isUndefined: Le,
	isDate: Je,
	isFile: Ye,
	isReactNativeBlob: Xe,
	isReactNative: Ze,
	isBlob: Qe,
	isRegExp: kt,
	isFunction: He,
	isStream: tt,
	isURLSearchParams: ot,
	isTypedArray: Ct,
	isFileList: $e,
	forEach: ft,
	merge: gt,
	extend: _t,
	trim: dt,
	stripBOM: vt,
	inherits: yt,
	toFlatObject: bt,
	kindOf: Ne,
	kindOfTest: Pe,
	endsWith: xt,
	toArray: St,
	forEachEntry: wt,
	matchAll: Tt,
	isHTMLForm: Et,
	hasOwnProperty: Ee,
	hasOwnProp: Ee,
	hasOwnInPrototypeChain: Ae,
	getSafeProp: je,
	toSafeFlatObject: Me,
	reduceDescriptors: At,
	freezeMethods: jt,
	toObjectSet: Mt,
	toCamelCase: Dt,
	noop: Nt,
	toFiniteNumber: Pt,
	findKey: pt,
	global: mt,
	isContextDefined: ht,
	isSpecCompliantForm: Ft,
	toJSONObject: It,
	isAsyncFn: Lt,
	isThenable: Rt,
	setImmediate: zt,
	asap: Bt,
	isIterable: Vt,
	isSafeIterable: (e) => e != null && Ae(e, we) && Vt(e)
}, Ht = J.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]), Ut = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = J.hasOwnProp(t, n);
		!n || a && J.hasOwnProp(Ht, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function Wt(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Gt = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Kt = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function qt(e, t) {
	return J.isArray(e) ? e.map((e) => qt(e, t)) : Wt(String(e).replace(t, ""));
}
var Jt = (e) => qt(e, Gt), Yt = (e) => qt(e, Kt);
function Xt(e) {
	let t = Object.create(null);
	return J.forEach(e.toJSON(), (e, n) => {
		t[n] = Yt(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Zt = Symbol("internals");
function Qt(e) {
	return e && String(e).trim().toLowerCase();
}
function $t(e) {
	return e === !1 || e == null ? e : J.isArray(e) ? e.map($t) : Jt(String(e));
}
function en(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var tn = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function nn(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
function rn(e) {
	let t = e.length - 1;
	if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
	let n = "";
	for (let r = 1; r < t; r++) {
		let i = e.charCodeAt(r);
		if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
		n += e[r];
	}
	return n;
}
function an(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = nn(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = nn(i.slice(0, a));
		if (!tn.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = nn(i.slice(a + 1));
		t[s] = rn(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var on = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function sn(e, t, n, r, i) {
	if (J.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), J.isString(t)) {
		if (J.isString(r)) return t.indexOf(r) !== -1;
		if (J.isRegExp(r)) return r.test(t);
	}
}
function cn(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function ln(e, t) {
	let n = J.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var un = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Qt(t);
			if (!i) return;
			let a = J.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = $t(e));
		}
		let a = (e, t) => J.forEach(e, (e, n) => i(e, n, t));
		if (J.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (J.isString(e) && (e = e.trim()) && !on(e)) a(Ut(e), t);
		else if (J.isObject(e) && J.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!J.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], J.hasOwnProp(n, i) ? (r = n[i], n[i] = J.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Qt(e), e) {
			let n = J.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return en(e);
				if (J.isFunction(t)) return t.call(this, e, n);
				if (J.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Qt(e), e) {
			let n = J.findKey(this, e);
			return !(!n || this[n] === void 0 || t && !sn(this, this[n], n, t));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Qt(e), e) {
				let i = J.findKey(n, e);
				i && (!t || sn(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return J.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || sn(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return J.forEach(this, (r, i) => {
			let a = J.findKey(n, i);
			if (a) {
				t[a] = $t(r), delete t[i];
				return;
			}
			let o = e ? cn(i) : String(i).trim();
			o !== i && delete t[i], t[o] = $t(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return J.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && J.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		let e = this.get("set-cookie");
		return J.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return an(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Zt] = this[Zt] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Qt(e);
			t[r] || (ln(n, e), t[r] = !0);
		}
		return J.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
un.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), J.reduceDescriptors(un.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), J.freezeMethods(un);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var dn = "[REDACTED ****]";
function fn(e) {
	if (J.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (J.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function pn(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || J.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof un && (e = e.toJSON()), r.push(e);
		let t;
		if (J.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			J.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!J.isPlainObject(e) && fn(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? dn : i(a);
				J.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function mn(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function hn(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? mn(e.message) : mn(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var Y = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && J.isArray(t.errors) && t.errors.length && (s = hn(t));
		let c = new e(s, n || t.code, r, i, a);
		return Object.defineProperty(c, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && J.hasOwnProp(e, "redact") ? e.redact : void 0, n = J.isArray(t) && t.length > 0 ? pn(e, t) : J.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
Y.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", Y.ERR_BAD_OPTION = "ERR_BAD_OPTION", Y.ECONNABORTED = "ECONNABORTED", Y.ETIMEDOUT = "ETIMEDOUT", Y.ECONNREFUSED = "ECONNREFUSED", Y.ERR_NETWORK = "ERR_NETWORK", Y.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", Y.ERR_DEPRECATED = "ERR_DEPRECATED", Y.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", Y.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", Y.ERR_CANCELED = "ERR_CANCELED", Y.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", Y.ERR_INVALID_URL = "ERR_INVALID_URL", Y.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function gn(e) {
	return J.isPlainObject(e) || J.isArray(e);
}
function _n(e) {
	return J.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vn(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = _n(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function yn(e) {
	return J.isArray(e) && !e.some(gn);
}
var bn = J.toFlatObject(J, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function xn(e, t, n) {
	if (!J.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = J.getSafeProp(n, e);
		return J.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && J.isSpecCompliantForm(t), d = [];
	if (!J.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (J.isDate(e)) return e.toISOString();
		if (J.isBoolean(e)) return e.toString();
		if (!u && J.isBlob(e)) throw new Y("Blob is not supported. Use a Buffer instead.");
		if (J.isArrayBuffer(e) || J.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new Y("Blob is not supported. Use a Buffer instead.", Y.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new Y("Object is too deeply nested (" + e + " levels). Max depth: " + l, Y.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!J.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (J.isReactNative(t) && J.isReactNativeBlob(e)) return t.append(vn(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (J.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (J.isArray(e) && yn(e) || (J.isFileList(e) || J.endsWith(n, "[]")) && (a = J.toArray(e))) return n = _n(n), a.forEach(function(e, r) {
				!(J.isUndefined(e) || e === null) && t.append(s === !0 ? vn([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return gn(e) ? !0 : (t.append(vn(r, n, o), f(e)), !1);
	}
	let g = Object.assign(bn, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: gn
	});
	function _(e, n, r = 0) {
		if (!J.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), J.forEach(e, function(e, i) {
				(!(J.isUndefined(e) || e === null) && a.call(t, e, J.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!J.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function Sn(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function Cn(e, t) {
	this._pairs = [], e && xn(e, this, t);
}
var wn = Cn.prototype;
wn.append = function(e, t) {
	this._pairs.push([e, t]);
}, wn.toString = function(e) {
	let t = e ? (t) => e.call(this, t, Sn) : Sn;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function Tn(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function En(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = J.isFunction(n) ? { serialize: n } : n, i = J.getSafeProp(r, "encode") || Tn, a = J.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : J.isURLSearchParams(t) ? t.toString() : new Cn(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var Dn = Symbol("internals");
function On(e) {
	return e ? e.length : 0;
}
function kn(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function An(e, t) {
	let n = e.handlers, r = On(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var jn = class {
	constructor() {
		this.handlers = [], this[Dn] = {
			handlersRef: this.handlers,
			handlersLength: this.handlers.length,
			handlerEntries: /* @__PURE__ */ new Map(),
			iterationDepth: 0,
			nextId: 0
		};
	}
	use(e, t, n) {
		let r = {
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}, i = this[Dn];
		this.handlers ??= [], An(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[Dn];
		An(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (kn(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], An(this, this[Dn]));
	}
	forEach(e) {
		let t = this[Dn];
		An(this, t), t.iterationDepth++;
		try {
			J.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (An(this, t), kn(this.handlers), t.handlersLength = On(this.handlers));
		}
	}
}, Mn = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Nn = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Cn,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, Pn = /* @__PURE__ */ ve({
	hasBrowserEnv: () => Fn,
	hasStandardBrowserEnv: () => Ln,
	hasStandardBrowserWebWorkerEnv: () => Rn,
	navigator: () => In,
	origin: () => zn
}), Fn = typeof window < "u" && typeof document < "u", In = typeof navigator == "object" && navigator || void 0, Ln = Fn && (!In || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(In.product) < 0), Rn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zn = Fn && window.location.href || "http://localhost", Bn = {
	...Pn,
	...Nn
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Vn(e, t) {
	return xn(e, new Bn.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return Bn.isNode && J.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Hn = 100;
function Un(e) {
	if (e > Hn) throw new Y("FormData field is too deeply nested (" + e + " levels). Max depth: " + Hn, Y.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Wn(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Un(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Gn(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Kn(e) {
	function t(e, n, r, i) {
		Un(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && J.isArray(r) ? r.length : a, s ? (J.hasOwnProp(r, a) ? r[a] = J.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!J.hasOwnProp(r, a) || !J.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && J.isArray(r[a]) && (r[a] = Gn(r[a])), !o);
	}
	if (J.isFormData(e) && J.isFunction(e.entries)) {
		let n = {};
		return J.forEachEntry(e, (e, r) => {
			t(Wn(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var qn = Object.freeze([
	"get",
	"delete",
	"head",
	"options",
	"post",
	"put",
	"patch",
	"purge",
	"link",
	"unlink",
	"query"
]), Jn = (e, t) => e != null && J.hasOwnProp(e, t) ? e[t] : void 0;
function Yn(e, t, n) {
	if (J.isString(e)) try {
		return (t || JSON.parse)(e), J.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Xn = {
	transitional: Mn,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = J.isObject(e);
		if (i && J.isHTMLForm(e) && (e = new FormData(e)), J.isFormData(e)) return r ? JSON.stringify(Kn(e)) : e;
		if (J.isArrayBuffer(e) || J.isBuffer(e) || J.isStream(e) || J.isFile(e) || J.isBlob(e) || J.isReadableStream(e)) return e;
		if (J.isArrayBufferView(e)) return e.buffer;
		if (J.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Jn(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Vn(e, t).toString();
			if ((a = J.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Jn(this, "env"), r = n && n.FormData;
				return xn(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Yn(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Jn(this, "transitional") || Xn.transitional, n = t && t.forcedJSONParsing, r = Jn(this, "responseType"), i = r === "json";
		if (J.isResponse(e) || J.isReadableStream(e)) return e;
		if (e && J.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Jn(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? Y.from(e, Y.ERR_BAD_RESPONSE, this, null, Jn(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: Bn.classes.FormData,
		Blob: Bn.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
J.forEach(qn, (e) => {
	Xn.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Zn(e, t) {
	let n = this || Xn, r = t || n, i = un.from(r.headers), a = r.data;
	return J.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Qn(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var $n = class extends Y {
	constructor(e, t, n) {
		super(e ?? "canceled", Y.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function er(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new Y("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? Y.ERR_BAD_REQUEST : Y.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var tr = /[\t\n\r]/g;
function nr(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(tr, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function rr(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function ir(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
function ar(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [
		(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		},
		() => i && o(i),
		(...e) => o(e)
	];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var or = (e, t, n = 3) => {
	let r = 0, i = ir(50, 250);
	return ar((n) => {
		if (!n || !J.isNumber(n.loaded)) return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = Math.max(0, o == null ? a : Math.min(a, o)), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, sr = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, cr = (e, t = J.asap) => (...n) => t(() => e(...n)), lr = Bn.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Bn.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Bn.origin), Bn.navigator && /(msie|trident)/i.test(Bn.navigator.userAgent)) : () => !0, ur = Bn.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		J.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), J.isString(r) && s.push(`path=${r}`), J.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), J.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
function dr(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function fr(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var pr = /^https?:(?!\/\/)/i;
function mr(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${dn}`);
}
function hr(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${dn}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${dn}`);
	return n === -1 ? r : `${r}#${mr(t.slice(n + 1))}`;
}
function gr(e, t) {
	if (typeof e == "string") {
		let n = nr(e);
		if (pr.test(n)) throw new Y(`Invalid URL ${JSON.stringify(hr(n))}: missing "//" after protocol`, Y.ERR_INVALID_URL, t);
	}
}
function _r(e, t, n, r) {
	gr(t, r);
	let i = !dr(t);
	return e && (i || n === !1) ? (gr(e, r), fr(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var vr = (e) => e instanceof un ? { ...e } : e, yr = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function br(e, t) {
	e ||= {}, t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return J.isPlainObject(e) && J.isPlainObject(t) ? J.merge.call({ caseless: r }, e, t) : J.isPlainObject(t) ? J.merge({}, t) : J.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!J.isUndefined(t)) return r(e, t, n, i);
		if (!J.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!J.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!J.isUndefined(t)) return r(void 0, t);
		if (!J.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = J.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!J.isUndefined(r)) {
			if (J.isPlainObject(r)) {
				if (J.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = J.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (J.isPlainObject(i) && J.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (J.hasOwnProp(t, a)) return r(n, i);
		if (J.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutErrorMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(vr(e), vr(t), n, !0)
	};
	return J.forEach(yr({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = J.hasOwnProp(l, r) ? l[r] : i, o = a(J.hasOwnProp(e, r) ? e[r] : void 0, J.hasOwnProp(t, r) ? t[r] : void 0, r);
		J.isUndefined(o) && a !== c || (n[r] = o);
	}), J.hasOwnProp(t, "validateStatus") && J.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (J.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var xr = ["content-type", "content-length"];
function Sr(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		xr.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var Cr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function wr(e) {
	let t = br({}, e), n = (e) => J.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = un.from(s), t.url = En(_r(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = J.getSafeProp(c, "username") || "", n = J.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? Cr(n) : "")));
		} catch (t) {
			throw Y.from(t, Y.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (J.isFormData(r)) {
		let e = J.getSafeProp(r, "getHeaders");
		Bn.hasStandardBrowserEnv || Bn.hasStandardBrowserWebWorkerEnv || J.isReactNative(r) ? s.setContentType(void 0) : J.isFunction(e) && Sr(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (Bn.hasStandardBrowserEnv && (J.isFunction(i) && (i = i(t)), i === !0 || i == null && lr(t.url))) {
		let e = a && o && ur.read(o);
		e && s.set(a, e);
	}
	return t;
}
var Tr = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = wr(e), i = r.data, a = un.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (rr(nr(r.url)) || rr(Bn.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new Y("Request aborted", Y.ECONNABORTED, e, g)), h(), g = null;
				return;
			}
			try {
				i ? m && m(i) : p && p();
			} catch (e) {
				setTimeout(() => {
					throw e;
				});
			}
			if (!g) return;
			let a = un.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			er(function(e) {
				t(e), h();
			}, function(e) {
				n(e), h();
			}, {
				data: !o || o === "text" || o === "json" ? g.responseText : g.response,
				status: g.status,
				statusText: g.statusText,
				headers: a,
				config: e,
				request: g
			}), g = null;
		}
		"onloadend" in g ? g.onloadend = _ : g.onreadystatechange = function() {
			g && g.readyState === 4 && (g.status !== 0 || g.responseURL && g.responseURL.startsWith("file:")) && setTimeout(_);
		}, g.onabort = function() {
			g &&= (n(new Y("Request aborted", Y.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new Y(t && t.message ? t.message : "Network Error", Y.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Mn;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new Y(t, i.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && J.forEach(Xt(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), J.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = or(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = or(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new $n(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = rr(r.url);
		if (v && !Bn.protocols.includes(v)) {
			n(new Y("Unsupported protocol " + v + ":", Y.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, Er = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof Y ? t : new $n(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new Y(`timeout of ${t}ms exceeded`, Y.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => {
		if (!r) {
			if (e.aborted) {
				i.call(e);
				return;
			}
			e.addEventListener("abort", i, { once: !0 });
		}
	});
	let { signal: s } = n;
	return s.unsubscribe = () => J.asap(o), s;
}, Dr = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Or = async function* (e, t) {
	for await (let n of kr(e)) yield* Dr(n, t);
}, kr = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, Ar = (e, t, n, r) => {
	let i = Or(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, jr = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Mr = (e, t, n) => t + 2 < n && jr(e.charCodeAt(t + 1)) && jr(e.charCodeAt(t + 2)), Nr = (e) => e <= 57 ? e - 48 : (e & 223) - 55, Pr = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, Fr = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Ir = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Lr = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, Rr = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && Mr(e, a, t) && (o = Nr(e.charCodeAt(a + 1)) * 16 + Nr(e.charCodeAt(a + 2)), a += 2), !Fr(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!Pr(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Lr(e) : Ir(n);
}, zr = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && Mr(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function Br(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return zr(t === -1 ? e : e.slice(0, t), Rr);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Vr = "1.20.0", Hr = 65536, Ur = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Wr } = J, Gr = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Kr = (e) => {
	if (!J.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, qr = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Jr = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Yr = (e) => {
	let t = J.global !== void 0 && J.global !== null ? J.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = J.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Wr(i) : typeof fetch == "function", c = Wr(a), l = Wr(o);
	if (!s) return !1;
	let u = s && Wr(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && qr(() => {
		let e = !1, t = new a(Bn.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && qr(() => J.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new Y(`Response type '${e}' is not supported`, Y.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (J.isBlob(e)) return e.size;
		if (J.isSpecCompliantForm(e)) return (await new a(Bn.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (J.isArrayBufferView(e) || J.isArrayBuffer(e)) return e.byteLength;
		if (J.isURLSearchParams(e) && (e += ""), J.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => J.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: C, maxContentLength: w, maxBodyLength: T, maxRedirects: E } = wr(e), D = J.isNumber(w) && w > -1, O = J.isNumber(T) && T > -1, k = (t) => J.hasOwnProp(e, t) ? e[t] : void 0, A = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let j = Er([l, d && d.toAbortSignal()], _), M = null, N = j && j.unsubscribe && (() => {
			j.unsubscribe();
		}), P, F = null, I = () => new Y("Request body larger than maxBodyLength limit", Y.ERR_BAD_REQUEST, e, M);
		try {
			let i, l = k("auth");
			if (l && (i = {
				username: J.getSafeProp(l, "username") || "",
				password: J.getSafeProp(l, "password") || ""
			}), Jr(t)) {
				let e = new URL(t, Bn.origin);
				!i && (e.username || e.password) && (i = {
					username: Kr(e.username),
					password: Kr(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Gr((i.username || "") + ":" + (i.password || ""))))), D && typeof t == "string" && t.startsWith("data:") && Br(t) > w) throw new Y("maxContentLength size of " + w + " exceeded", Y.ERR_BAD_RESPONSE, e, M);
			if (O && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (P = e, e > T)) throw I();
			}
			let d = O && (J.isReadableStream(s) || J.isStream(s)), _ = (e, t, n) => Ar(e, Hr, (e) => {
				if (O && e > T) throw F = I();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (P ??= await g(x, s), P !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (J.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && sr(P, or(cr(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new Y("Stream request bodies are not supported by the current fetch implementation", Y.ERR_NOT_SUPPORT, e, M);
			J.isString(S) || (S = S ? "include" : "omit");
			let ee = c && "credentials" in a.prototype;
			if (J.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Vr, !1);
			let L = C == null ? C : Object.assign(Object.create(null), C);
			L && (delete L.body, delete L.headers, delete L.method, delete L.signal, delete L.duplex, delete L.credentials);
			let R = Object.assign(Object.create(null), L, {
				signal: j,
				method: n.toUpperCase(),
				headers: Xt(x.normalize()),
				body: s,
				duplex: "half",
				credentials: ee ? S : void 0
			});
			c && (J.forEach(Ur, (e, t) => {
				R[t] === void 0 && (R[t] = e);
			}), R.signal === void 0 && (R.signal = null), R.body === void 0 && (R.body = null)), E === 0 && (R.redirect = "manual", L && (L.redirect = "manual")), M = c && new a(t, R);
			let z = await (c ? A(M, L) : A(t, R)), B = un.from(z.headers);
			if (D) {
				let t = J.toFiniteNumber(B.getContentLength());
				if (t != null && t > w) throw new Y("maxContentLength size of " + w + " exceeded", Y.ERR_BAD_RESPONSE, e, M);
			}
			let V = p && (b === "stream" || b === "response");
			if (p && z.body && (v || D || V && N)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = z[e];
				});
				let n = J.toFiniteNumber(B.getContentLength()), [r, i] = v && sr(n, or(cr(v), !0)) || [], a = 0;
				z = new o(Ar(z.body, Hr, (t) => {
					if (D && (a = t, a > w)) throw new Y("maxContentLength size of " + w + " exceeded", Y.ERR_BAD_RESPONSE, e, M);
					r && r(t);
				}, () => {
					i && i(), N && N();
				}), t);
			}
			b ||= "text";
			let te = await m[J.findKey(m, b) || "text"](z, e);
			if (D && !p && !V) {
				let t;
				if (te != null && (typeof te.byteLength == "number" ? t = te.byteLength : typeof te.size == "number" ? t = te.size : typeof te == "string" && (t = typeof r == "function" ? new r().encode(te).byteLength : te.length)), typeof t == "number" && t > w) throw new Y("maxContentLength size of " + w + " exceeded", Y.ERR_BAD_RESPONSE, e, M);
			}
			return !V && N && N(), await new Promise((t, n) => {
				er(t, n, {
					data: te,
					headers: un.from(z.headers),
					status: z.status,
					statusText: z.statusText,
					config: e,
					request: M
				});
			});
		} catch (t) {
			if (N && N(), j && j.aborted && j.reason instanceof Y) {
				let n = j.reason;
				throw n.config = e, M && (n.request = M), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (F) throw M && !F.request && (F.request = M), F;
			if (t instanceof Y) throw M && !t.request && (t.request = M), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new Y("Network Error", Y.ERR_NETWORK, e, M, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw Y.from(t, t && t.code, e, M, t && t.response);
		}
	};
}, Xr = /* @__PURE__ */ new Map(), Zr = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Xr;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Yr(t)), l = c;
	return c;
};
Zr();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Qr = {
	http: null,
	xhr: Tr,
	fetch: { get: Zr }
};
J.forEach(Qr, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var $r = (e) => `- ${e}`, ei = (e) => J.isFunction(e) || e === null || e === !1;
function ti(e, t) {
	e = J.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !ei(r) && (i = Qr[(n = String(r)).toLowerCase()], i === void 0)) throw new Y(`Unknown adapter '${n}'`);
		if (i && (J.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new Y("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map($r).join("\n") : " " + $r(e[0]) : "as no adapter specified"), Y.ERR_NOT_SUPPORT);
	}
	return i;
}
var ni = {
	getAdapter: ti,
	adapters: Qr
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function ri(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new $n(null, e);
}
function ii(e) {
	let t = J.toSafeFlatObject(e);
	return ri(t), t.headers = un.from(J.getSafeProp(t, "headers")), t.data = Zn.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ni.getAdapter(t.adapter || Xn.adapter, t)(t).then(function(e) {
		ri(t), t.response = e;
		try {
			e.data = Zn.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = un.from(e.headers), e;
	}, function(e) {
		if (!Qn(e) && (ri(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Zn.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = un.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var ai = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	ai[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var oi = {};
ai.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Vr + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new Y(r(i, " has been removed" + (t ? " in " + t : "")), Y.ERR_DEPRECATED);
		return t && !oi[i] && (oi[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, ai.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function si(e, t, n) {
	if (typeof e != "object" || !e) throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new Y("option " + a + " must be " + n, Y.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new Y("Unknown option " + a, Y.ERR_BAD_OPTION);
	}
}
var ci = {
	assertOptions: si,
	validators: ai
}, li = ci.validators, ui = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new jn(),
			response: new jn()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) try {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = t.stack, r = "";
				if (typeof n == "string") {
					let e = n.indexOf("\n");
					r = e === -1 ? "" : n.slice(e + 1);
				}
				if (!e.stack) e.stack = r;
				else if (r) {
					let t = r.indexOf("\n"), n = t === -1 ? -1 : r.indexOf("\n", t + 1), i = n === -1 ? "" : r.slice(n + 1);
					String(e.stack).endsWith(i) || (e.stack += "\n" + r);
				}
			} catch {}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = br(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && ci.assertOptions(n, {
			silentJSONParsing: li.transitional(li.boolean),
			forcedJSONParsing: li.transitional(li.boolean),
			clarifyTimeoutError: li.transitional(li.boolean),
			legacyInterceptorReqResOrdering: li.transitional(li.boolean),
			advertiseZstdAcceptEncoding: li.transitional(li.boolean),
			validateStatusUndefinedResolves: li.transitional(li.boolean)
		}, !1), r != null && (J.isFunction(r) ? t.paramsSerializer = { serialize: r } : ci.assertOptions(r, {
			encode: li.function,
			serialize: li.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), ci.assertOptions(t, {
			baseUrl: li.spelling("baseURL"),
			withXsrfToken: li.spelling("withXSRFToken")
		}, !0), t.method = (J.getSafeProp(t, "method") || J.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && J.merge(i.common, i[t.method]);
		i && J.forEach(qn.concat("common"), (e) => {
			delete i[e];
		}), t.headers = un.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Mn;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [ii.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e ? e(f) : f;
			} catch (e) {
				if (!t) {
					l = Promise.reject(e);
					break;
				}
				try {
					let n = t.call(this, e);
					J.isThenable(n) && (l = Promise.resolve(n).then(() => ii.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = ii.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = br(this.defaults, e), En(_r(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
J.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	ui.prototype[e] = function(t, n) {
		return this.request(br(n || {}, {
			method: e,
			url: t,
			data: n && J.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), J.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(br(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	ui.prototype[e] = t(), e !== "query" && (ui.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var di = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new $n(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
function fi(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function pi(e) {
	return J.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var mi = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	ContentTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	UnprocessableContent: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerReturnsAnUnknownError: 520,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(mi).forEach(([e, t]) => {
	mi[t] === void 0 && (mi[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function hi(e) {
	let t = new ui(e), n = xe(ui.prototype.request, t);
	return J.extend(n, ui.prototype, t, { allOwnKeys: !0 }), J.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return hi(br(e, t));
	}, n;
}
var gi = hi(Xn);
gi.Axios = ui, gi.CanceledError = $n, gi.CancelToken = di, gi.isCancel = Qn, gi.VERSION = Vr, gi.toFormData = xn, gi.AxiosError = Y, gi.Cancel = gi.CanceledError, gi.all = function(e) {
	return Promise.all(e);
}, gi.spread = fi, gi.isAxiosError = pi, gi.mergeConfig = br, gi.AxiosHeaders = un, gi.formToJSON = (e) => Kn(J.isHTMLForm(e) ? new FormData(e) : e), gi.getAdapter = ni.getAdapter, gi.HttpStatusCode = mi, gi.default = gi;
//#endregion
//#region src/config/config.js
var _i = {
	title: "APP",
	dbName: "db-crypto",
	dbVersion: 1,
	storeName: "keys",
	router: null,
	baseURL: "",
	routeAfterLogin: "/app/",
	routeAfterLogout: "/",
	urlUserInfo: "/auth/user",
	urlLogin: "/auth/login",
	urlLogout: "/auth/logout",
	onUnauthorized: null,
	onLogout: null
}, vi = () => _i, yi = null, bi = () => {
	let e = vi();
	return yi = gi.create({
		baseURL: e.baseURL,
		withCredentials: !0,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
	}), yi;
}, xi = () => {
	if (!yi) throw Error("@sendelius/vue: configure() должен быть запущен до getClient().");
	return yi;
};
//#endregion
//#region node_modules/nostics/dist/index.mjs
function Si(e) {
	let t = `[${e.name}] ${e.message}`, n = [];
	return e.fix && n.push(`fix: ${e.fix}`), e.sources?.length && n.push(`sources: ${e.sources.join(", ")}`), e.docs && n.push(`see: ${e.docs}`), n.length === 0 ? t : [t, ...n.map((e, t) => `${t < n.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function Ci(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function wi({ method: e = "warn", formatter: t = Si } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var Ti = Error.captureStackTrace, Ei = class e extends Error {
	name;
	code;
	docs;
	fix;
	sources;
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), this.code = this.name = t.code, this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, Ti?.(this, n);
	}
	toJSON() {
		return {
			name: this.name,
			why: this.why,
			fix: this.fix,
			docs: this.docs,
			sources: this.sources,
			cause: this.cause,
			stack: this.stack
		};
	}
};
function Di(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e?.(t);
}
/* @__NO_SIDE_EFFECTS__ */
function Oi(e) {
	let t = e.reporters ?? [], n = {}, { docsBase: r } = e;
	for (let i of Object.keys(e.codes)) {
		let a = e.codes[i], o = a.docs === !1 ? void 0 : a.docs || Di(r, i), s = (e = {}, n = {}) => {
			let r = new Ei({
				code: i,
				why: Ci(a.why, e),
				fix: Ci(a.fix, e),
				docs: o,
				cause: e.cause,
				sources: e.sources
			}, s);
			for (let e of t) e(r, n);
			return r;
		};
		n[i] = s;
	}
	return n;
}
//#endregion
//#region node_modules/pinia/dist/pinia.js
var ki = typeof window < "u", Ai = /*#__PURE__*/ Oi({
	reporters: [/*#__PURE__*/ wi()],
	codes: {
		PINIA_R1001: {
			why: "Directly pass all stores to \"mapStores()\" without putting them in an array. This will fail in production.",
			fix: "Replace mapStores([useAuthStore, useCartStore]) with mapStores(useAuthStore, useCartStore).",
			docs: "https://pinia.vuejs.org/cookbook/options-api.html#Giving-access-to-the-whole-store"
		},
		PINIA_R1002: {
			why: (e) => `A getter cannot have the same name as another state property. Found "${e.name}" in store "${e.id}".`,
			fix: "Rename either the getter or the state property.",
			docs: "https://pinia.vuejs.org/core-concepts/getters.html#Accessing-other-getters"
		},
		PINIA_R1003: {
			why: (e) => `The "state" must be a plain object. Found in store "${e.id}".`,
			fix: "Return a plain object, e.g. avoid state: () => new MyClass().",
			docs: "https://pinia.vuejs.org/core-concepts/state.html#State"
		},
		PINIA_R1004: {
			why: "Pinia instance not found in context. This falls back to the global activePinia, which exposes you to cross-request pollution on the server.",
			fix: "\"useStore()\" is a composable and follows the same rules: call it at the top of setup() (or another composable), or pass the pinia instance explicitly when used outside of a component.",
			docs: "https://pinia.vuejs.org/ssr/#Using-the-store-outside-of-setup-"
		},
		PINIA_R1005: {
			why: (e) => `The store id changed from "${e.from}" to "${e.to}", forcing a reload.`,
			docs: "https://pinia.vuejs.org/cookbook/hot-module-replacement.html#HMR-Hot-Module-Replacement-"
		},
		PINIA_R1006: {
			why: (e) => `Property "${e.key}" of store "${e.id}" is not reactive (not a ref, reactive object, or shallowRef), so storeToRefs() ignores it.`,
			fix: "If it should be reactive state, wrap it with ref(), reactive(), or shallowRef(). If it is an intentional non-reactive property, wrap it with markRaw() so storeToRefs() skips it explicitly.",
			docs: "https://pinia.vuejs.org/core-concepts/plugins.html#Adding-new-external-properties"
		},
		PINIA_R1007: {
			why: (e) => `The same callback was passed to "$subscribe()" of store "${e.id}" more than once. Subscriptions are deduplicated, so the duplicate is ignored.`,
			fix: "Subscribe each callback only once. If you need to resubscribe, call the returned function to remove the previous subscription first, or create a new function.",
			docs: "https://pinia.vuejs.org/core-concepts/state.html#Subscribing-to-the-state"
		}
	}
}), ji, Mi = (e) => ji = e;
process.env.NODE_ENV;
var Ni = process.env.NODE_ENV === "production" ? /* istanbul ignore next */ Symbol() : Symbol("pinia");
function Pi(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Fi = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ii(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Li(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Hi(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ri(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function zi(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Bi = typeof navigator == "object" ? navigator : { userAgent: "" }, Vi = /Macintosh/.test(Bi.userAgent) && /AppleWebKit/.test(Bi.userAgent) && !/Safari/.test(Bi.userAgent), Hi = ki ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Vi ? Ui : "msSaveOrOpenBlob" in Bi ? Wi : Gi : () => {};
function Ui(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? zi(r) : Ri(r.href) ? Li(e, t, n) : (r.target = "_blank", zi(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		zi(r);
	}, 0));
}
function Wi(e, t = "download", n) {
	if (typeof e == "string") {
		if (Ri(e)) Li(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				zi(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Ii(e, n), t);
}
function Gi(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Li(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Fi.HTMLElement)) || "safari" in Fi, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Vi) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Ki } = Object;
function qi(e, t) {
	for (let n in t) {
		let r = t[n];
		if (!(n in e)) continue;
		let i = e[n];
		e[n] = Pi(i) && Pi(r) && !S(r) && !x(r) ? qi(i, r) : r;
	}
	return e;
}
var Ji = () => {};
function Yi(e, t, n, r = Ji) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && g() && N(i), i;
}
function Xi(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Zi = (e) => e(), Qi = Symbol(), $i = Symbol();
function ea(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		e[n] = Pi(i) && Pi(r) && Object.hasOwn(e, n) && !S(r) && !x(r) ? ea(i, r) : r;
	}
	return e;
}
var ta = process.env.NODE_ENV === "production" ? /* istanbul ignore next */ Symbol() : Symbol("pinia:skipHydration");
function na(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, ta);
}
var { assign: ra } = Object;
function ia(e) {
	return !!(S(e) && e.effect);
}
function aa(e, t, n, r) {
	let { state: a, actions: o, getters: s } = t, c = n.state.value[e], l;
	function u() {
		!c && (process.env.NODE_ENV === "production" || !r) && 
		/* istanbul ignore if */
		(n.state.value[e] = a ? a() : {});
		let t = process.env.NODE_ENV !== "production" && r ? ae(R(a ? a() : {}).value) : ae(n.state.value[e]);
		return ra(t, o, Object.keys(s || {}).reduce((r, a) => (process.env.NODE_ENV !== "production" && a in t && Ai.PINIA_R1002({
			name: a,
			id: e
		}), r[a] = C(i(() => {
			Mi(n);
			let t = n._s.get(e);
			return s[a].call(t, t);
		})), r), {}));
	}
	return l = oa(e, u, t, n, r, !0), l;
}
function oa(e, t, n = {}, r, a, o) {
	let s, c = ra({ actions: {} }, n);
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== "production" && !r._e.active) throw Error("Pinia destroyed");
	let l = { deep: !0 };
	/* istanbul ignore else */
	process.env.NODE_ENV !== "production" && (l.onTrigger = (e) => {
		/* istanbul ignore else */
		u ? h = e : u === !1 && !k._hotUpdating && 
		/* istanbul ignore else */
		(Array.isArray(h) ? h.push(e) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
	});
	let u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), h, g = r.state.value[e];
	!o && !g && (process.env.NODE_ENV === "production" || !a) && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let _ = /*#__PURE__*/ R({}), v;
	function y(t) {
		let n;
		u = d = !1, process.env.NODE_ENV !== "production" && (h = []), typeof t == "function" ? (t(r.state.value[e]), n = {
			type: "patch function",
			storeId: e,
			events: h
		}) : (ea(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: h
		});
		let i = v = Symbol();
		E().then(() => {
			v === i && (u = !0);
		}), d = !0, Xi(f, n, r.state.value[e]);
	}
	let b = o ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			ra(e, t);
		});
	} : process.env.NODE_ENV === "production" ? Ji : () => {
		throw Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
	};
	function w() {
		s.stop(), f.clear(), p.clear(), r._s.delete(e);
	}
	let T = (t, n = "") => {
		if (Qi in t) return t[$i] = n, t;
		let i = function() {
			Mi(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Xi(p, {
				args: n,
				name: i[$i],
				store: k,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : k, n);
			} catch (e) {
				throw Xi(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Xi(a, e), e)).catch((e) => (Xi(o, e), Promise.reject(e))) : (Xi(a, l), l);
		};
		return i[Qi] = !0, i[$i] = n, i;
	}, D = /*#__PURE__*/ C({
		actions: {},
		getters: {},
		state: [],
		hotState: _
	}), O = {
		_p: r,
		$id: e,
		$onAction: Yi.bind(null, p),
		$patch: y,
		$reset: b,
		$subscribe(t, n = {}) {
			if (f.has(t)) return process.env.NODE_ENV !== "production" && Ai.PINIA_R1007({ id: e }), Ji;
			let i = Yi(f, t, n.detached, () => a()), a = s.run(() => K(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? d : u) && t({
					storeId: e,
					type: "direct",
					events: h
				}, r);
			}, ra({}, l, n)));
			return i;
		},
		$dispose: w
	}, k = ee(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ki ? ra({
		_hmrPayload: D,
		_customProperties: C(/* @__PURE__ */ new Set())
	}, O) : O);
	r._s.set(e, k);
	let A = (r._a && r._a.runWithContext || Zi)(() => r._e.run(() => (s = m()).run(() => t({ action: T }))));
	for (let t in A) {
		let i = A[t];
		S(i) && !ia(i) || x(i) ? (process.env.NODE_ENV !== "production" && a ? _.value[t] = ie(A, t) : o || (g && na(i) && (S(i) ? i.value = g[t] : ((i instanceof Set || i instanceof Map) && i.clear(), ea(i, g[t]))), r.state.value[e][t] = i), process.env.NODE_ENV !== "production" && D.state.push(t)) : typeof i == "function" ? (A[t] = process.env.NODE_ENV !== "production" && a ? i : T(i, t), process.env.NODE_ENV !== "production" && (D.actions[t] = i), c.actions[t] = i) : process.env.NODE_ENV !== "production" && ia(i) && (D.getters[t] = o ? n.getters[t] : i, ki && (A._getters ||= C([])).push(t));
	}
	if (ra(k, A), ra(re(k), A), Object.defineProperty(k, "$state", {
		get: () => process.env.NODE_ENV !== "production" && a ? _.value : r.state.value[e],
		set: (e) => {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== "production" && a) throw Error("cannot set hotState");
			y((t) => {
				ra(t, e);
			});
		}
	}), process.env.NODE_ENV !== "production" && (k._hotUpdate = C((t) => {
		k._hotUpdating = !0, t._hmrPayload.state.forEach((e) => {
			if (e in k.$state) {
				let n = t.$state[e], r = k.$state[e];
				o && typeof n == "object" && Pi(n) && Pi(r) ? qi(n, r) : t.$state[e] = r;
			}
			k[e] = ie(t.$state, e);
		}), Object.keys(k.$state).forEach((e) => {
			e in t.$state || delete k[e];
		}), u = !1, d = !1, r.state.value[e] = ie(t._hmrPayload, "hotState"), d = !0, E().then(() => {
			u = !0;
		});
		for (let e in t._hmrPayload.actions) {
			let n = t[e];
			k[e] = T(n, e);
		}
		for (let e in t._hmrPayload.getters) {
			let n = t._hmrPayload.getters[e], a = o ? i(() => (Mi(r), n.call(k, k))) : n;
			k[e] = a;
		}
		Object.keys(k._hmrPayload.getters).forEach((e) => {
			e in t._hmrPayload.getters || delete k[e];
		}), Object.keys(k._hmrPayload.actions).forEach((e) => {
			e in t._hmrPayload.actions || delete k[e];
		}), k._hmrPayload = t._hmrPayload, k._getters = t._getters, k._hotUpdating = !1;
	})), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ki) {
		let e = {
			writable: !0,
			configurable: !0,
			enumerable: !1
		};
		[
			"_p",
			"_hmrPayload",
			"_getters",
			"_customProperties"
		].forEach((t) => {
			Object.defineProperty(k, t, ra({ value: k[t] }, e));
		});
	}
	return r._p.forEach((t) => {
		let n = s.run(() => t({
			store: k,
			app: r._a,
			pinia: r,
			options: c
		}));
		if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ki && Object.keys(n || {}).forEach((e) => k._customProperties.add(e)), process.env.NODE_ENV !== "production") for (let t in n) {
			let r = n[t];
			typeof r == "object" && !S(r) && !x(r) && !r?.__v_skip && Ai.PINIA_R1006({
				key: t,
				id: e
			});
		}
		ra(k, n);
	}), process.env.NODE_ENV !== "production" && k.$state && typeof k.$state == "object" && typeof k.$state.constructor == "function" && !k.$state.constructor.toString().includes("[native code]") && Ai.PINIA_R1003({ id: k.$id }), g && o && n.hydrate && n.hydrate(k.$state, g), u = !0, d = !0, k;
}
function sa(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, o) {
		let s = y();
		if (n = (process.env.NODE_ENV === "test" && ji && ji._testing ? null : n) || (s ? b(Ni, null) : null), n && Mi(n), process.env.NODE_ENV !== "production" && !ji) throw Error("[🍍]: \"getActivePinia()\" was called but there was no active Pinia. Are you trying to use a store before calling \"app.use(pinia)\"?\nSee https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.\nThis will fail in production.");
		n = ji, n._s.has(e) || (i ? oa(e, t, r, n) : aa(e, r, n), process.env.NODE_ENV !== "production" && (a._pinia = n));
		let c = n._s.get(e);
		if (process.env.NODE_ENV !== "production" && o) {
			let a = "__hot:" + e, s = i ? oa(a, t, r, n, !0) : aa(a, ra({}, r), n, !0);
			o._hotUpdate(s), delete n.state.value[a], n._s.delete(a);
		}
		if (process.env.NODE_ENV !== "production" && ki) {
			let t = h();
			if (t && t.proxy && !o) {
				let n = t.proxy, r = "_pStores" in n ? n._pStores : n._pStores = {};
				r[e] = c;
			}
		}
		return c;
	}
	return a.$id = e, a;
}
//#endregion
//#region src/core/errors.js
var ca = class extends Error {
	constructor(e) {
		let t = e.response?.data;
		super(t?.error ?? t?.message ?? "неизвестная ошибка"), this.name = "ApiError", this.status = e.response?.status ?? null, this.data = t ?? null, this.field = t?.field ?? null;
	}
};
//#endregion
//#region src/core/requests.js
async function la(e, t = {}, n = {}) {
	return ma("get", e, {
		params: t,
		...n
	});
}
async function ua(e, t = {}, n = {}) {
	return ma("post", e, t, n);
}
async function da(e, t = {}, n = {}) {
	return ma("put", e, t, n);
}
async function fa(e, t = {}, n = {}) {
	return ma("patch", e, t, n);
}
async function pa(e, t = {}, n = {}) {
	return ma("delete", e, t, n);
}
async function ma(e, t, n = {}, r = {}) {
	let i;
	try {
		i = e === "get" ? await xi().get(t, n) : e === "delete" ? await xi().delete(t, {
			data: n,
			...r
		}) : await xi()[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && vi().onUnauthorized?.(), new ca(e);
	}
	let a = i.data;
	if (a?.status !== "success") throw new ca({
		message: a?.error || a?.message || "неизвестная ошибка",
		status: i.status,
		data: a
	});
	return a;
}
//#endregion
//#region src/core/auth.js
var ha = sa("auth", {
	state: () => ({
		user: {},
		avatar: {
			color: "#000000",
			initials: "",
			image: ""
		},
		isAuth: !1,
		isInit: !1
	}),
	actions: {
		async init(e = !0) {
			if (this.isInit && e) return this.isAuth;
			try {
				let e = await la(vi().urlUserInfo);
				e?.user ? (this.user = e.user, this.avatar = e.user.avatar ?? this.avatar, this.isAuth = !0) : this.clear();
			} catch {
				this.clear();
			} finally {
				this.isInit = !0;
			}
			return this.isAuth;
		},
		async login(e, t, n) {
			n ||= "";
			try {
				await ua(vi().urlLogin, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = vi().router;
				return r && await r.push(vi().routeAfterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await pa(vi().urlLogout);
			} finally {
				this.clear(), vi().onLogout?.();
				let e = vi().router;
				e && await e.push(vi().routeAfterLogout);
			}
		},
		clear() {
			this.user = {}, this.avatar = {
				color: "#000000",
				initials: "",
				image: ""
			}, this.isAuth = !1;
		}
	}
});
function ga() {
	return ha();
}
//#endregion
//#region src/core/captcha.js
async function _a() {
	let e = await va(), t = await ba(e.challenge);
	return ya(e.id, t);
}
async function va() {
	return la("/captcha/challenge");
}
async function ya(e, t) {
	return (await ua("/captcha/verify", {
		id: e,
		nonce: t
	}))?.token;
}
async function ba(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await xa(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function xa(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
//#endregion
//#region src/helpers/declension.js
function Sa(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
//#endregion
//#region src/helpers/title.js
function Ca(e, t, n) {
	n ||= " - ", t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
//#endregion
//#region src/helpers/objects.js
function wa(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
//#endregion
//#region \0plugin-vue:export-helper
var Ta = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ea = {
	key: 0,
	class: "progress"
}, Da = /*#__PURE__*/ Ta({
	__name: "Progress",
	props: {
		label: {
			type: String,
			default: ""
		},
		show: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (n, r) => e.show ? (F(), s("div", Ea, [e.label ? (F(), s(t, { key: 0 }, [d(H(e.label) + " ...", 1)], 64)) : o("", !0), r[0] ||= c("span", { class: "progress-loader" }, null, -1)])) : o("", !0);
	}
}, [["__scopeId", "data-v-454e3267"]]), Oa = ["href"], ka = /*#__PURE__*/ Ta({
	__name: "Btn",
	props: {
		href: {
			type: String,
			default: ""
		},
		to: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"small",
				"big"
			].includes(e)
		},
		variant: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		},
		hover: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"blue",
				"red",
				"green"
			].includes(e)
		},
		progressLabel: {
			type: String,
			default: ""
		},
		progressShow: {
			type: Boolean,
			default: !1
		},
		withIcon: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = i(() => [{
			"btn-big": t.size === "big",
			"btn-small": t.size === "small",
			"btn-outline": t.variant === "outline",
			"btn-gray": t.variant === "gray",
			"btn-red": t.variant === "red",
			"btn-green": t.variant === "green",
			"btn-hover-blue": t.hover === "blue",
			"btn-hover-red": t.hover === "red",
			"btn-hover-green": t.hover === "green",
			"btn-progress": t.progressLabel,
			"btn-with-icon": t.withIcon
		}]);
		return (t, r) => {
			let i = V("RouterLink");
			return e.to ? (F(), a(i, {
				key: 0,
				to: e.to,
				class: D(["btn", n.value])
			}, {
				default: q(() => [f(Da, {
					show: e.progressShow,
					label: e.progressLabel
				}, null, 8, ["show", "label"]), e.progressShow ? o("", !0) : B(t.$slots, "default", {}, void 0, !0, 0)]),
				_: 3
			}, 8, ["to", "class"])) : e.href ? (F(), s("a", {
				key: 1,
				href: e.href,
				class: D(["btn", n.value])
			}, [f(Da, {
				show: e.progressShow,
				label: e.progressLabel
			}, null, 8, ["show", "label"]), e.progressShow ? o("", !0) : B(t.$slots, "default", {}, void 0, !0, 0)], 10, Oa)) : (F(), s("button", {
				key: 2,
				class: D(["btn", n.value])
			}, [f(Da, {
				show: e.progressShow,
				label: e.progressLabel
			}, null, 8, ["show", "label"]), e.progressShow ? o("", !0) : B(t.$slots, "default", {}, void 0, !0, 0)], 2));
		};
	}
}, [["__scopeId", "data-v-a0ffba5d"]]), Aa = {
	key: 0,
	class: "cookie"
}, ja = /*#__PURE__*/ Ta({
	__name: "Cookie",
	setup(e) {
		let t = R(!1), n = () => {
			localStorage.setItem("cookieAccepted", "1"), t.value = !1;
		};
		return M(() => {
			t.value = localStorage.getItem("cookieAccepted") !== "1";
		}), (e, r) => t.value ? (F(), s("div", Aa, [c("div", null, [B(e.$slots, "default", {}, void 0, !0)]), f(ka, { onClick: n }, {
			default: q(() => [...r[0] ||= [d("Согласен", -1)]]),
			_: 1
		})])) : o("", !0);
	}
}, [["__scopeId", "data-v-40628050"]]), Ma = [
	"type",
	"required",
	"disabled",
	"autocomplete"
], Na = {
	key: 0,
	class: "label"
}, Pa = {
	key: 1,
	class: "error"
}, Fa = /*#__PURE__*/ Ta({
	__name: "Input",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		type: {
			type: [String, Boolean],
			default: "text"
		},
		label: {
			type: [String, Boolean],
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
		autocompleteOff: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, a = n, l = R(null), u = R(""), d = i(() => [{
			"input-label": r.label,
			"input-error": r.error || u.value
		}]), f = i({
			get: () => r.modelValue,
			set: (e) => {
				a("update:modelValue", e), u.value = "";
			}
		}), p = () => {
			u.value = l.value?.validationMessage ?? "";
		};
		return t({
			focus: () => l.value?.focus(),
			blur: () => l.value?.blur(),
			setCustomValidity: (e) => {
				l.value?.setCustomValidity(e);
			}
		}), (t, n) => (F(), s("div", { class: D(["input", d.value]) }, [
			B(t.$slots, "before", {}, void 0, !0),
			de(c("input", {
				ref_key: "input",
				ref: l,
				type: e.type,
				"onUpdate:modelValue": n[0] ||= (e) => f.value = e,
				placeholder: " ",
				required: e.required,
				disabled: e.disabled,
				onInvalid: pe(p, ["prevent"]),
				onInput: p,
				onFocus: n[1] ||= (e) => a("focus", e),
				onBlur: n[2] ||= (e) => a("blur", e),
				autocomplete: e.autocompleteOff ? "off" : null
			}, null, 40, Ma), [[ce, f.value]]),
			e.label ? (F(), s("div", Na, H(e.label), 1)) : o("", !0),
			e.error || u.value ? (F(), s("div", Pa, H(e.error || u.value), 1)) : o("", !0),
			B(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-03732987"]]), Ia = ["onMousedown"], La = {
	key: 0,
	class: "autocomplete-empty"
}, Ra = /*#__PURE__*/ Ta({
	__name: "Autocomplete",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		autocomplete: {
			type: Function,
			default: null
		},
		label: {
			type: [String, Boolean],
			default: ""
		},
		error: {
			type: String,
			default: ""
		},
		required: {
			type: Boolean,
			default: !1
		},
		minLength: {
			type: Number,
			default: 2
		},
		delay: {
			type: Number,
			default: 300
		}
	},
	emits: [
		"update:modelValue",
		"select",
		"focus",
		"blur"
	],
	setup(e, { expose: r, emit: i }) {
		let c = e, l = i, u = R(null), p = R(null), m = R(null), h = R(c.modelValue), g = R([]), _ = R(-1), v = R(!1), y = R(!1), b = R(!1), x = R({}), S = R({
			"autocomplete-dropdown__top": !1,
			"autocomplete-dropdown__bottom": !0
		}), C = null, w = 0, T = () => {
			v.value = !1, g.value = [], y.value = !1, _.value = -1;
		}, O = async () => {
			let e = h.value;
			if (!c.autocomplete || e.length < c.minLength) {
				T();
				return;
			}
			let t = ++w;
			b.value = !0, v.value = !0, g.value = [], y.value = !1, _.value = -1;
			try {
				let n = await c.autocomplete(e);
				if (t !== w) return;
				g.value = n ?? [], y.value = g.value.length === 0, _.value = g.value.length ? 0 : -1;
			} catch {
				if (t !== w) return;
				g.value = [], y.value = !1, _.value = -1;
			} finally {
				t === w && (b.value = !1);
			}
			await E(), V();
		}, j = () => {
			if (clearTimeout(C), h.value.length < c.minLength) {
				w++, T(), b.value = !1;
				return;
			}
			C = setTimeout(O, c.delay);
		}, N = (e) => {
			T(), l("select", e);
		}, P = (e) => {
			if (g.value.length) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), _.value++, _.value >= g.value.length && (_.value = 0);
					break;
				case "ArrowUp":
					e.preventDefault(), _.value--, _.value < 0 && (_.value = g.value.length - 1);
					break;
				case "Enter":
					e.preventDefault(), _.value >= 0 && N(g.value[_.value]);
					break;
				case "Escape": e.preventDefault(), T();
			}
		}, I = async (e) => {
			l("focus", e), h.value.length >= c.minLength && (v.value = !0, await E(), V());
		}, ee = (e) => {
			l("blur", e);
		}, L = (e) => {
			u.value?.contains(e.target) || m.value?.contains(e.target) || T();
		}, V = () => {
			if (!u.value) return;
			let e = u.value.getBoundingClientRect(), t = m.value?.offsetHeight ?? 0, n = window.innerHeight - e.bottom, r = e.top;
			t && n < t && r >= t ? (x.value = {
				bottom: `${window.innerHeight - e.top}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				top: "auto"
			}, S.value = {
				"autocomplete-dropdown__top": !0,
				"autocomplete-dropdown__bottom": !1
			}) : (x.value = {
				top: `${e.bottom}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				bottom: "auto"
			}, S.value = {
				"autocomplete-dropdown__top": !1,
				"autocomplete-dropdown__bottom": !0
			});
		};
		K(() => c.modelValue, (e) => {
			h.value = e;
		}), K(() => c.modelValue, (e) => {
			h.value = e;
		});
		let te = (e) => {
			h.value = e, l("update:modelValue", e), j();
		};
		return M(() => {
			document.addEventListener("mousedown", L), window.addEventListener("resize", V), window.addEventListener("scroll", V, !0);
		}), A(() => {
			clearTimeout(C), document.removeEventListener("mousedown", L), window.removeEventListener("resize", V), window.removeEventListener("scroll", V, !0);
		}), r({
			focus: () => p.value?.focus(),
			blur: () => p.value?.blur()
		}), (r, i) => (F(), s("div", {
			ref_key: "autocomplete",
			ref: u,
			class: D(["autocomplete", { "show-dropdown": v.value && (g.value.length || y.value) }])
		}, [f(Fa, {
			ref_key: "input",
			ref: p,
			"model-value": h.value,
			label: e.label,
			error: e.error,
			required: e.required,
			autocompleteOff: "",
			"onUpdate:modelValue": te,
			onFocus: I,
			onBlur: ee,
			onKeydown: P
		}, {
			before: q(() => [B(r.$slots, "before", {}, void 0, !0)]),
			after: q(() => [f(Da, { show: b.value }, null, 8, ["show"]), (F(), a(n, { to: "body" }, [v.value && (g.value.length || y.value) ? (F(), s("div", {
				key: 0,
				ref_key: "dropdown",
				ref: m,
				class: D(["autocomplete-dropdown", S.value]),
				style: k(x.value)
			}, [(F(!0), s(t, null, z(g.value, (e, t) => (F(), s("div", {
				key: e.id,
				class: D({ active: t === _.value }),
				onMousedown: pe((t) => N(e), ["prevent"])
			}, [B(r.$slots, "default", {
				item: e,
				index: t
			}, void 0, !0)], 42, Ia))), 128)), y.value ? (F(), s("div", La, [B(r.$slots, "empty", {}, () => [i[0] ||= d(" Ничего не найдено ", -1)], !0)])) : o("", !0)], 6)) : o("", !0)]))]),
			_: 3
		}, 8, [
			"model-value",
			"label",
			"error",
			"required"
		])], 2));
	}
}, [["__scopeId", "data-v-d783e5e2"]]), za = Object.defineProperty, Ba = (e, t, n) => t in e ? za(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Va = (e, t, n) => Ba(e, typeof t == "symbol" ? t : t + "", n), Ha = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, Ua = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Wa = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), Ga = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = Wa(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = Ua(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = Wa(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = Ua(d, s, c), r + d;
}, Ka = (e) => JSON.parse(e.replaceAll("'", "\"")), qa = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Ya(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Ja(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Ja(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Ja(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Xa(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = Ja(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, Ja = (e) => e === "" || !!JSON.parse(e), Ya = (e) => e.startsWith("[") && e.endsWith("]") ? Ka(e) : e, Xa = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return Ka(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: Za() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, Za = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, Qa = class {
	constructor(e = {}) {
		Va(this, "opts", {}), Va(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...Ha,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = Za() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = Ha;
		Array.isArray(t.mask) && (t.mask = t.mask.length > 1 ? [...t.mask].sort((e, t) => e.length - t.length) : t.mask[0] ?? ""), t.mask === "" && (t.mask = null), this.opts = t;
	}
	masked(e) {
		return this.process(String(e), this.findMask(String(e)));
	}
	unmasked(e) {
		return this.process(String(e), this.findMask(String(e)), !1);
	}
	isEager() {
		return this.opts.eager === !0;
	}
	isReversed() {
		return this.opts.reversed === !0;
	}
	completed(e) {
		let t = this.findMask(String(e));
		if (this.opts.mask == null || t == null) return !1;
		let n = this.process(String(e), t).length;
		return typeof this.opts.mask == "string" ? n >= this.opts.mask.length : n >= t.length;
	}
	findMask(e) {
		let t = this.opts.mask;
		if (t == null) return null;
		if (typeof t == "string") return t;
		if (typeof t == "function") return t(e);
		let n = this.process(e, t.slice(-1).pop() ?? "", !1);
		return t.find((t) => this.process(e, t, !1).length >= n.length) ?? "";
	}
	escapeMask(e) {
		let t = [], n = [];
		return e.split("").forEach((r, i) => {
			r === "!" && e[i - 1] !== "!" ? n.push(i - n.length) : t.push(r);
		}), {
			mask: t.join(""),
			escaped: n
		};
	}
	process(e, t, n = !0) {
		if (this.opts.number != null) return Ga(e, n, this.opts);
		if (t == null) return e;
		let r = `v=${e},mr=${t},m=${+!!n}`;
		if (this.memo.has(r)) return this.memo.get(r);
		let { mask: i, escaped: a } = this.escapeMask(t), o = [], s = this.opts.tokens == null ? {} : this.opts.tokens, c = this.isReversed() ? -1 : 1, l = this.isReversed() ? "unshift" : "push", u = this.isReversed() ? 0 : i.length - 1, d = this.isReversed() ? () => h > -1 && g > -1 : () => h < i.length && g < e.length, f = (e) => !this.isReversed() && e <= u || this.isReversed() && e >= u, p, m = -1, h = this.isReversed() ? i.length - 1 : 0, g = this.isReversed() ? e.length - 1 : 0, _ = !1;
		for (; d();) {
			let t = i.charAt(h), r = s[t], d = r?.transform == null ? e.charAt(g) : r.transform(e.charAt(g));
			if (!a.includes(h) && r != null ? (d.match(r.pattern) == null ? r.multiple ? _ &&= (h += c, g -= c, !1) : d === p ? p = void 0 : r.optional && (h += c, g -= c) : (o[l](d), r.repeated ? (m === -1 ? m = h : h === u && h !== m && (h = m - c), u === m && (h -= c)) : r.multiple && (_ = !0, h -= c), h += c), g += c) : (n && !this.isEager() && o[l](t), d === t && !this.isEager() ? g += c : p = t, this.isEager() || (h += c)), this.isEager()) for (; f(h) && (s[i.charAt(h)] == null || a.includes(h));) {
				if (n) {
					if (o[l](i.charAt(h)), e.charAt(g) === i.charAt(h)) {
						h += c, g += c;
						continue;
					}
				} else i.charAt(h) === e.charAt(g) && (g += c);
				h += c;
			}
		}
		return this.memo.set(r, o.join("")), this.memo.get(r);
	}
}, $a = class {
	constructor(e, t = {}) {
		Va(this, "items", /* @__PURE__ */ new Map()), Va(this, "eventAbortController"), Va(this, "onInput", (e) => {
			if (e instanceof CustomEvent && e.type === "input" && !e.isTrusted && !e.bubbles) return;
			let t = e.target, n = this.items.get(t);
			if (n === void 0) return;
			let r = "inputType" in e && e.inputType.startsWith("delete"), i = n.isEager(), a = r && i && n.unmasked(t.value) === "" ? "" : t.value;
			this.fixCursor(t, r, () => this.setValue(t, a));
		}), this.options = t, this.eventAbortController = new AbortController(), this.init(this.getInputs(e));
	}
	update(e = {}) {
		this.options = { ...e }, this.init(Array.from(this.items.keys()));
	}
	updateValue(e) {
		e.value !== "" && e.value !== this.processInput(e)?.masked && this.setValue(e, e.value);
	}
	destroy() {
		this.eventAbortController.abort(), this.items.clear();
	}
	init(e) {
		let t = this.getOptions(this.options), n = [
			"text",
			"search",
			"url",
			"tel",
			"password"
		];
		for (let r of e) {
			if (!n.includes(r.type)) {
				console.warn("Maska: input of `%s` type is not supported", r.type);
				return;
			}
			if (!this.items.has(r)) {
				let { signal: e } = this.eventAbortController;
				r.addEventListener("input", this.onInput, {
					capture: !0,
					signal: e
				});
			}
			let e = new Qa(qa(r, t));
			this.items.set(r, e), queueMicrotask(() => this.updateValue(r));
		}
	}
	getInputs(e) {
		return typeof e == "string" ? Array.from(document.querySelectorAll(e)) : "length" in e ? Array.from(e) : [e];
	}
	getOptions(e) {
		let { onMaska: t, preProcess: n, postProcess: r, ...i } = e;
		return i;
	}
	fixCursor(e, t, n) {
		let r = e.selectionStart, i = e.value;
		if (n(), r === null || r === i.length && !t) return;
		let a = e.value, o = i.slice(0, r), s = a.slice(0, r), c = this.processInput(e, o)?.unmasked, l = this.processInput(e, s)?.unmasked;
		if (c === void 0 || l === void 0) return;
		let u = r;
		if (o !== s) {
			if (t) u += a.length - i.length;
			else if (c.length === 0) u = 0;
			else {
				u = a.length;
				for (let t = 1; t <= a.length; t++) if ((this.processInput(e, a.slice(0, t))?.unmasked ?? "").length >= c.length) {
					u = t;
					break;
				}
			}
		}
		e.setSelectionRange(u, u);
	}
	setValue(e, t) {
		let n = this.processInput(e, t);
		n !== void 0 && (e.value = n.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((e) => e(n)) : this.options.onMaska(n)), e.dispatchEvent(new CustomEvent("maska", { detail: n })), e.dispatchEvent(new CustomEvent("input", { detail: n.masked })));
	}
	processInput(e, t) {
		let n = this.items.get(e);
		if (n === void 0) return;
		let r = t ?? e.value;
		this.options.preProcess != null && (r = this.options.preProcess(r));
		let i = n.masked(r);
		return this.options.postProcess != null && (i = this.options.postProcess(i)), {
			masked: i,
			unmasked: n.unmasked(r),
			completed: n.completed(r)
		};
	}
}, eo = /* @__PURE__ */ new WeakMap(), to = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, no = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || r?.type === "file") return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			to(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	eo.has(r) ? (n = eo.get(r)) == null || n.update(i) : eo.set(r, new $a(r, i));
}, ro = {
	__name: "InputPhone",
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
		autocompleteOff: {
			type: Boolean,
			default: !1
		},
		country: {
			type: String,
			default: "RU"
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, o = i({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), s = i(() => n.country === "BY" ? "+375 (##) ###-##-##" : "+7 (###) ###-##-##");
		return K(() => n.country, () => {
			r("update:modelValue", "");
		}), (t, n) => de((F(), a(Fa, {
			modelValue: o.value,
			"onUpdate:modelValue": n[0] ||= (e) => o.value = e,
			type: "tel",
			label: e.label,
			required: e.required,
			disabled: e.disabled,
			error: e.error,
			autocompleteOff: e.autocompleteOff
		}, null, 8, [
			"modelValue",
			"label",
			"required",
			"disabled",
			"error",
			"autocompleteOff"
		])), [[W(no), s.value]]);
	}
}, io = ["required", "disabled"], ao = ["value", "disabled"], oo = {
	key: 0,
	class: "label"
}, so = {
	key: 1,
	class: "error"
}, co = /*#__PURE__*/ Ta({
	__name: "Select",
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
		options: {
			type: Array,
			default: () => []
		}
	},
	emits: ["update:modelValue"],
	setup(e, { expose: n, emit: r }) {
		let a = e, l = r, u = R(null), d = R(""), f = i(() => [{
			"select-label": a.label,
			"select-error": a.error || d.value,
			"select-disabled": a.disabled
		}]), p = () => {
			d.value = u.value?.validationMessage ?? "";
		}, m = i({
			get: () => a.modelValue,
			set: (e) => {
				l("update:modelValue", e), d.value = "";
			}
		});
		return n({
			focus: () => u.value?.focus(),
			blur: () => u.value?.blur()
		}), (n, r) => (F(), s("div", { class: D(["select", f.value]) }, [
			B(n.$slots, "before", {}, void 0, !0),
			de(c("select", {
				ref_key: "select",
				ref: u,
				"onUpdate:modelValue": r[0] ||= (e) => m.value = e,
				required: e.required,
				disabled: e.disabled,
				onInvalid: pe(p, ["prevent"]),
				onInput: p
			}, [(F(!0), s(t, null, z(e.options, (e) => (F(), s("option", {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, H(e.title), 9, ao))), 128)), B(n.$slots, "options", {}, void 0, !0)], 40, io), [[le, m.value]]),
			e.label ? (F(), s("div", oo, H(e.label), 1)) : o("", !0),
			e.error || d.value ? (F(), s("div", so, H(e.error || d.value), 1)) : o("", !0),
			B(n.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-60f9f346"]]), lo = { class: "input-city" }, uo = /*#__PURE__*/ Ta({
	__name: "InputCity",
	props: {
		city: {
			type: [String, Number],
			default: ""
		},
		region: {
			type: [String, Number],
			default: ""
		},
		country: {
			type: String,
			default: "RU"
		},
		label: {
			type: [String, Boolean],
			default: ""
		},
		error: {
			type: String,
			default: ""
		},
		autocomplete: {
			type: Function,
			default: null
		}
	},
	emits: [
		"update:city",
		"update:region",
		"update:country"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, a = n, o = [{
			title: "🇷🇺 Россия",
			value: "RU"
		}, {
			title: "🇧🇾 Беларусь",
			value: "BY"
		}], l = i({
			get: () => r.city,
			set: (e) => a("update:city", e)
		}), u = i({
			get: () => r.region,
			set: (e) => a("update:region", e)
		}), p = i({
			get: () => r.country,
			set: (e) => a("update:country", e)
		}), m = R(null), h = R(!1), g = i(() => !!m.value && m.value.city === l.value && m.value.country === p.value), _ = i(() => r.error ? r.error : !h.value || !l.value || g.value ? "" : "Выберите город из списка"), v = async (e) => (await r.autocomplete?.(e, p.value))?.cities ?? [], y = (e) => {
			h.value = !0, m.value = e, l.value = e.city, u.value = e.region, p.value = e.country;
		};
		return K(l, (e) => {
			m.value?.city !== e && (m.value = null, u.value = "");
		}), K(p, () => {
			l.value = "", u.value = "", m.value = null;
		}), t({ validate: () => (h.value = !0, l.value ? g.value : !1) }), (t, n) => (F(), s("div", lo, [f(co, {
			options: o,
			modelValue: p.value,
			"onUpdate:modelValue": n[0] ||= (e) => p.value = e,
			label: "Страна"
		}, null, 8, ["modelValue"]), f(Ra, {
			modelValue: l.value,
			"onUpdate:modelValue": n[1] ||= (e) => l.value = e,
			autocomplete: v,
			label: e.label,
			error: _.value,
			required: "",
			onSelect: y
		}, {
			default: q(({ item: e }) => [c("small", null, H(e.region), 1), d(" " + H(e.city), 1)]),
			empty: q(() => [...n[2] ||= [d(" Город не найден ", -1)]]),
			_: 1
		}, 8, [
			"modelValue",
			"label",
			"error"
		])]));
	}
}, [["__scopeId", "data-v-cf7e5a0c"]]), fo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var po = Object.prototype.toString, mo = (e) => po.call(e) === "[object Object]", ho = () => {}, go = /* #__PURE__ */ _o();
function _o() {
	var e, t;
	return fo && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function vo(e) {
	return Array.isArray(e) ? e : [e];
}
function yo(e, t, n) {
	return K(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var bo = fo ? window : void 0;
fo && window.document, fo && window.navigator, fo && window.location;
function xo(e) {
	let t = U(e);
	return t?.$el ?? t;
}
function So(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = i(() => {
		let t = vo(U(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return yo(() => [
		n.value?.map((e) => xo(e)) ?? [bo].filter((e) => e != null),
		vo(U(n.value ? e[1] : e[0])),
		vo(W(n.value ? e[2] : e[1])),
		U(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = mo(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Co = !1;
function wo(e, t, n = {}) {
	let { window: r = bo, ignore: i = [], capture: a = !0, detectIframe: o = !1, controls: s = !1 } = n;
	if (!r) return s ? {
		stop: ho,
		cancel: ho,
		trigger: ho
	} : ho;
	if (go && !Co) {
		Co = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", ho, e)), r.document.documentElement.addEventListener("click", ho, e);
	}
	let c = !0, l = (e) => U(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = xo(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function u(e) {
		let t = U(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function d(e, t) {
		let n = U(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let f = (n) => {
		let r = xo(e);
		if (n.target != null && !(!(r instanceof Element) && u(e) && d(e, n)) && r && r !== n.target && !n.composedPath().includes(r)) {
			if ("detail" in n && n.detail === 0 && (c = !l(n)), !c) {
				c = !0;
				return;
			}
			t(n);
		}
	}, p = !1, m = [
		So(r, "click", (e) => {
			p || (p = !0, setTimeout(() => {
				p = !1;
			}, 0), f(e));
		}, {
			passive: !0,
			capture: a
		}),
		So(r, "pointerdown", (t) => {
			let n = xo(e);
			c = !l(t) && !(!n || t.composedPath().includes(n));
		}, { passive: !0 }),
		o && So(r, "blur", (n) => {
			setTimeout(() => {
				let i = xo(e), a = r.document.activeElement;
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
function To(e, t = {}) {
	let { threshold: n = 50, onSwipe: r, onSwipeEnd: a, onSwipeStart: o, passive: s = !0 } = t, c = ee({
		x: 0,
		y: 0
	}), l = ee({
		x: 0,
		y: 0
	}), u = i(() => c.x - l.x), d = i(() => c.y - l.y), { max: f, abs: p } = Math, m = i(() => f(p(u.value), p(d.value)) >= n), h = ne(!1), g = i(() => m.value ? p(u.value) > p(d.value) ? u.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), _ = (e) => [e.touches[0].clientX, e.touches[0].clientY], v = (e, t) => {
		c.x = e, c.y = t;
	}, y = (e, t) => {
		l.x = e, l.y = t;
	}, b = {
		passive: s,
		capture: !s
	}, x = [
		So(e, "touchstart", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			v(t, n), y(t, n), o?.(e);
		}, b),
		So(e, "touchmove", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			y(t, n), b.capture && !b.passive && Math.abs(u.value) > Math.abs(d.value) && e.preventDefault(), !h.value && m.value && (h.value = !0), h.value && r?.(e);
		}, b),
		So(e, ["touchend", "touchcancel"], (e) => {
			h.value && a?.(e, g.value), h.value = !1;
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
function Eo() {
	let e = R([]);
	return e.value.set = (t) => {
		t && e.value.push(t);
	}, j(() => {
		e.value.length = 0;
	}), e;
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Do = Math.min, Oo = Math.max, ko = Math.round, Ao = Math.floor, jo = (e) => ({
	x: e,
	y: e
}), Mo = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function No(e, t, n) {
	return Oo(e, Do(t, n));
}
function Po(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Fo(e) {
	return e.split("-")[0];
}
function Io(e) {
	return e.split("-")[1];
}
function Lo(e) {
	return e === "x" ? "y" : "x";
}
function Ro(e) {
	return e === "y" ? "height" : "width";
}
function zo(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Bo(e) {
	return Lo(zo(e));
}
function Vo(e, t, n) {
	n === void 0 && (n = !1);
	let r = Io(e), i = Bo(e), a = Ro(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Xo(o)), [o, Xo(o)];
}
function Ho(e) {
	let t = Xo(e);
	return [
		Uo(e),
		t,
		Uo(t)
	];
}
function Uo(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Wo = ["left", "right"], Go = ["right", "left"], Ko = ["top", "bottom"], qo = ["bottom", "top"];
function Jo(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Go : Wo : t ? Wo : Go;
		case "left":
		case "right": return t ? Ko : qo;
		default: return [];
	}
}
function Yo(e, t, n, r) {
	let i = Io(e), a = Jo(Fo(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Uo)))), a;
}
function Xo(e) {
	let t = Fo(e);
	return Mo[t] + e.slice(t.length);
}
function Zo(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Qo(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Zo(e);
}
function $o(e) {
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
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function es(e, t, n) {
	let { reference: r, floating: i } = e, a = zo(t), o = Bo(t), s = Ro(o), c = Fo(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Io(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function ts(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Po(t, e), p = Qo(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = $o(await i.getClippingRect({
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
	}, y = $o(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var ns = 50, rs = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: ts
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = es(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < ns && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = es(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, is = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Po(e, t) || {};
		if (l == null) return {};
		let d = Qo(u), f = {
			x: n,
			y: r
		}, p = Bo(i), m = Ro(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Do(d[_], T), D = Do(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = No(E, k, O), j = !c.arrow && Io(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), as = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Po(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Fo(r), _ = zo(o), v = Fo(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Xo(o)] : Ho(o)), x = p !== "none";
			!d && x && b.push(...Yo(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Vo(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === zo(t) || T.every((e) => zo(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = zo(e.placement);
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
}, os = /*#__PURE__*/ new Set(["left", "top"]);
async function ss(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Fo(n), s = Io(n), c = zo(n) === "y", l = os.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Po(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var cs = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ss(t, e);
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
}, ls = function(e) {
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
			} }, ...l } = Po(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = zo(i), p = Lo(f), m = u[p], h = u[f], g = (e, t) => No(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function us() {
	return typeof window < "u";
}
function ds(e) {
	return ms(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fs(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ps(e) {
	return ((ms(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ms(e) {
	return us() ? e instanceof Node || e instanceof fs(e).Node : !1;
}
function hs(e) {
	return us() ? e instanceof Element || e instanceof fs(e).Element : !1;
}
function gs(e) {
	return us() ? e instanceof HTMLElement || e instanceof fs(e).HTMLElement : !1;
}
function _s(e) {
	return !us() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fs(e).ShadowRoot;
}
function vs(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ks(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ys(e) {
	return /^(table|td|th)$/.test(ds(e));
}
function bs(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var xs = /transform|translate|scale|rotate|perspective|filter/, Ss = /paint|layout|strict|content/, Cs = (e) => !!e && e !== "none", ws;
function Ts(e) {
	let t = hs(e) ? ks(e) : e;
	return Cs(t.transform) || Cs(t.translate) || Cs(t.scale) || Cs(t.rotate) || Cs(t.perspective) || !Ds() && (Cs(t.backdropFilter) || Cs(t.filter)) || xs.test(t.willChange || "") || Ss.test(t.contain || "");
}
function Es(e) {
	let t = js(e);
	for (; gs(t) && !Os(t);) {
		if (Ts(t)) return t;
		if (bs(t)) return null;
		t = js(t);
	}
	return null;
}
function Ds() {
	return ws ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ws;
}
function Os(e) {
	return /^(html|body|#document)$/.test(ds(e));
}
function ks(e) {
	return fs(e).getComputedStyle(e);
}
function As(e) {
	return hs(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function js(e) {
	if (ds(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || _s(e) && e.host || ps(e);
	return _s(t) ? t.host : t;
}
function Ms(e) {
	let t = js(e);
	return Os(t) ? (e.ownerDocument || e).body : gs(t) && vs(t) ? t : Ms(t);
}
function Ns(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ms(e), i = r === e.ownerDocument?.body, a = fs(r);
	if (i) {
		let e = Ps(a);
		return t.concat(a, a.visualViewport || [], vs(r) ? r : [], e && n ? Ns(e) : []);
	}
	return t.concat(r, Ns(r, [], n));
}
function Ps(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Fs(e) {
	let t = ks(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = gs(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ko(n) !== a || ko(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Is(e) {
	return hs(e) ? e : e.contextElement;
}
function Ls(e) {
	let t = Is(e);
	if (!gs(t)) return jo(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Fs(t), o = (a ? ko(n.width) : n.width) / r, s = (a ? ko(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Rs = /*#__PURE__*/ jo(0);
function zs(e) {
	let t = fs(e);
	return !Ds() || !t.visualViewport ? Rs : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Bs(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === fs(e);
}
function Vs(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Is(e), o = jo(1);
	t && (r ? hs(r) && (o = Ls(r)) : o = Ls(e));
	let s = Bs(a, n, r) ? zs(a) : jo(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = fs(a), t = hs(r) ? fs(r) : r, n = e, i = Ps(n);
		for (; i && t !== n;) {
			let e = Ls(i), t = i.getBoundingClientRect(), r = ks(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = fs(i), i = Ps(n);
		}
	}
	return $o({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Hs(e, t) {
	let n = As(e).scrollLeft;
	return t ? t.left + n : Vs(ps(e)).left + n;
}
function Us(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Hs(e, n),
		y: n.top + t.scrollTop
	};
}
function Ws(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = ps(r), s = t ? bs(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = jo(1), u = jo(0), d = gs(r);
	if ((d || !a) && ((ds(r) !== "body" || vs(o)) && (c = As(r)), d)) {
		let e = Vs(r);
		l = Ls(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Us(o, c) : jo(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Gs(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Ks(e) {
	let t = As(e), n = e.ownerDocument.body, r = Oo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Oo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Hs(e), o = -t.scrollTop;
	return ks(n).direction === "rtl" && (a += Oo(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var qs = 25;
function Js(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = fs(e), a = ps(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Ds() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Hs(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= qs && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ys(e, t) {
	let n = Vs(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ls(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Xs(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Js(e, n, t);
	else if (t === "document") r = Ks(ps(e));
	else if (hs(t)) r = Ys(t, n);
	else {
		let n = zs(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return $o(r);
}
function Zs(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ns(e, [], !1).filter((e) => hs(e) && ds(e) !== "body"), i = null, a = ks(e).position === "fixed", o = a ? js(e) : e;
	for (; hs(o) && !Os(o);) {
		let e = ks(o), t = Ts(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = js(o);
	}
	return t.set(e, r), r;
}
function Qs(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? bs(t) ? [] : Zs(t, this._c) : [].concat(n), r], o = Xs(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Xs(t, a[e], i);
		s = Oo(n.top, s), c = Do(n.right, c), l = Do(n.bottom, l), u = Oo(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function $s(e) {
	let { width: t, height: n } = Fs(e);
	return {
		width: t,
		height: n
	};
}
function ec(e, t, n) {
	let r = gs(t), i = ps(t), a = n === "fixed", o = Vs(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = jo(0);
	if ((r || !a) && ((ds(t) !== "body" || vs(i)) && (s = As(t)), r)) {
		let e = Vs(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Hs(i));
	let l = i && !r && !a ? Us(i, s) : jo(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function tc(e) {
	return ks(e).position === "static";
}
function nc(e, t) {
	if (!gs(e) || ks(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return ps(e) === n && (n = n.ownerDocument.body), n;
}
function rc(e, t) {
	let n = fs(e);
	if (bs(e)) return n;
	if (!gs(e)) {
		let t = js(e);
		for (; t && !Os(t);) {
			if (hs(t) && !tc(t)) return t;
			t = js(t);
		}
		return n;
	}
	let r = nc(e, t);
	for (; r && ys(r) && tc(r);) r = nc(r, t);
	return r && Os(r) && tc(r) && !Ts(r) ? n : r || Es(e) || n;
}
var ic = async function(e) {
	let t = this.getOffsetParent || rc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ec(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ac(e) {
	return ks(e).direction === "rtl";
}
var oc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ws,
	getDocumentElement: ps,
	getClippingRect: Qs,
	getOffsetParent: rc,
	getElementRects: ic,
	getClientRects: Gs,
	getDimensions: $s,
	getScale: Ls,
	isElement: hs,
	isRTL: ac
};
function sc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cc(e, t, n) {
	let r = null, i, a = ps(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Ao(d), h = Ao(a.clientWidth - (u + f)), g = Ao(a.clientHeight - (d + p)), _ = Ao(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Oo(0, Do(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!sc(l, e.getBoundingClientRect())) return s();
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
	let c = fs(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function lc(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Is(e), u = i || a ? [...l ? Ns(l) : [], ...t ? Ns(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? cc(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Vs(e) : null;
	c && g();
	function g() {
		let t = Vs(e);
		h && !sc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var uc = cs, dc = ls, fc = as, pc = is, mc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...oc,
		...i.platform,
		_c: r
	};
	return rs(e, t, {
		...i,
		platform: a
	});
}, hc = /* @__PURE__ */ ve({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => yc,
	install: () => _c,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => vc
});
import * as gc from "vue";
be(hc, gc);
function _c() {}
function vc(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function yc(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function bc(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function xc(e) {
	if (bc(e)) {
		let t = e.$el;
		return ms(t) && ds(t) === "#comment" ? null : t;
	}
	return e;
}
function Sc(e) {
	return typeof e == "function" ? e() : (0, hc.unref)(e);
}
function Cc(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = xc(Sc(e.element));
			return n == null ? {} : pc({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function wc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tc(e, t) {
	let n = wc(e);
	return Math.round(t * n) / n;
}
function Ec(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, hc.computed)(() => Sc(n.open) ?? !0), a = (0, hc.computed)(() => Sc(n.middleware)), o = (0, hc.computed)(() => Sc(n.placement) ?? "bottom"), s = (0, hc.computed)(() => Sc(n.strategy) ?? "absolute"), c = (0, hc.computed)(() => Sc(n.transform) ?? !0), l = (0, hc.computed)(() => xc(e.value)), u = (0, hc.computed)(() => xc(t.value)), d = (0, hc.ref)(0), f = (0, hc.ref)(0), p = (0, hc.ref)(s.value), m = (0, hc.ref)(o.value), h = (0, hc.shallowRef)({}), g = (0, hc.ref)(!1), _ = (0, hc.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Tc(u.value, d.value), n = Tc(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...wc(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		mc(l.value, u.value, {
			middleware: a.value,
			placement: o.value,
			strategy: s.value
		}).then((t) => {
			d.value = t.x, f.value = t.y, p.value = t.strategy, m.value = t.placement, h.value = t.middlewareData, g.value = e !== !1;
		});
	}
	function b() {
		typeof v == "function" && (v(), v = void 0);
	}
	function x() {
		if (b(), r === void 0) {
			y();
			return;
		}
		if (l.value != null && u.value != null) {
			v = r(l.value, u.value, y);
			return;
		}
	}
	function S() {
		i.value || (g.value = !1);
	}
	return (0, hc.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, hc.watch)([l, u], x, { flush: "sync" }), (0, hc.watch)(i, S, { flush: "sync" }), (0, hc.getCurrentScope)() && (0, hc.onScopeDispose)(b), {
		x: (0, hc.shallowReadonly)(d),
		y: (0, hc.shallowReadonly)(f),
		strategy: (0, hc.shallowReadonly)(p),
		placement: (0, hc.shallowReadonly)(m),
		middlewareData: (0, hc.shallowReadonly)(h),
		isPositioned: (0, hc.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/date-fns/constants.js
var Dc = 365.2425, Oc = 6048e5, kc = 864e5, Ac = 6e4, jc = 36e5, Mc = 1e3, Nc = 86400;
Nc * 7, Nc * Dc / 12 * 3;
var Pc = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
function Fc(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Pc in e ? e[Pc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/date-fns/toDate.js
function X(e, t) {
	return Fc(t || e, e);
}
//#endregion
//#region node_modules/date-fns/addDays.js
function Ic(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(t) ? Fc(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/date-fns/addMonths.js
function Lc(e, t, n) {
	let r = X(e, n?.in);
	if (isNaN(t)) return Fc(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = Fc(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/date-fns/add.js
function Rc(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = X(e, n?.in), d = i || r ? Lc(u, i + r * 12) : u, f = o || a ? Ic(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return Fc(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var zc = {};
function Bc() {
	return zc;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
function Vc(e, t) {
	let n = Bc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
function Hc(e, t) {
	return Vc(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
function Uc(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = Fc(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Hc(i), o = Fc(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Hc(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Wc(e) {
	let t = X(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function Gc(e, ...t) {
	let n = Fc.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
function Kc(e, t) {
	let n = X(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
function qc(e, t, n) {
	let [r, i] = Gc(n?.in, e, t), a = Kc(r), o = Kc(i), s = +a - Wc(a), c = +o - Wc(o);
	return Math.round((s - c) / kc);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
function Jc(e, t) {
	let n = Uc(e, t), r = Fc(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Hc(r);
}
//#endregion
//#region node_modules/date-fns/addQuarters.js
function Yc(e, t, n) {
	return Lc(e, t * 3, n);
}
//#endregion
//#region node_modules/date-fns/addYears.js
function Xc(e, t, n) {
	return Lc(e, t * 12, n);
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
function Zc(e, t) {
	let n = +X(e) - X(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/date-fns/isDate.js
function Qc(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
function $c(e) {
	return !(!Qc(e) && typeof e != "number" || isNaN(+X(e)));
}
//#endregion
//#region node_modules/date-fns/getQuarter.js
function el(e, t) {
	let n = X(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
function tl(e, t, n) {
	let [r, i] = Gc(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/date-fns/_lib/getRoundingMethod.js
function nl(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/date-fns/differenceInYears.js
function rl(e, t, n) {
	let [r, i] = Gc(n?.in, e, t), a = Zc(r, i), o = Math.abs(tl(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(Zc(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function il(e, t) {
	let [n, r] = Gc(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/date-fns/eachDayOfInterval.js
function al(e, t) {
	let { start: n, end: r } = il(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Fc(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfQuarter.js
function ol(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/eachQuarterOfInterval.js
function sl(e, t) {
	let { start: n, end: r } = il(t?.in, e), i = +n > +r, a = i ? +ol(n) : +ol(r), o = ol(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Fc(n, o)), o = Yc(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
function cl(e, t) {
	let n = X(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
function ll(e, t) {
	let n = X(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
function ul(e, t) {
	let n = X(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
function dl(e, t) {
	let n = Bc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/date-fns/endOfQuarter.js
function fl(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var pl = {
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
}, ml = (e, t, n) => {
	let r, i = pl[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function hl(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var gl = {
	date: hl({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: hl({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: hl({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, _l = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, vl = (e, t, n, r) => _l[e];
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function yl(e) {
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
var bl = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: yl({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: yl({
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
	month: yl({
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
	day: yl({
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
	dayPeriod: yl({
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
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function xl(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Cl(s, (e) => e.test(o)) : Sl(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Sl(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Cl(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function wl(e) {
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
//#endregion
//#region node_modules/date-fns/locale/en-US.js
var Tl = {
	code: "en-US",
	formatDistance: ml,
	formatLong: gl,
	formatRelative: vl,
	localize: bl,
	match: {
		ordinalNumber: wl({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: xl({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: xl({
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
		month: xl({
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
		day: xl({
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
		dayPeriod: xl({
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
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
function El(e, t) {
	let n = X(e, t?.in);
	return qc(n, ul(n)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
function Dl(e, t) {
	let n = X(e, t?.in), r = +Hc(n) - Jc(n);
	return Math.round(r / Oc) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
function Ol(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = Bc(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = Fc(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Vc(o, t), c = Fc(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Vc(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
function kl(e, t) {
	let n = Bc(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Ol(e, t), a = Fc(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Vc(a, t);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
function Al(e, t) {
	let n = X(e, t?.in), r = +Vc(n, t) - kl(n, t);
	return Math.round(r / Oc) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function jl(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var Ml = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return jl(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : jl(n + 1, 2);
	},
	d(e, t) {
		return jl(e.getDate(), t.length);
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
		return jl(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return jl(e.getHours(), t.length);
	},
	m(e, t) {
		return jl(e.getMinutes(), t.length);
	},
	s(e, t) {
		return jl(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return jl(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Nl = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Pl = {
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
		return Ml.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Ol(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? jl(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : jl(a, t.length);
	},
	R: function(e, t) {
		return jl(Uc(e), t.length);
	},
	u: function(e, t) {
		return jl(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return jl(r, 2);
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
			case "qq": return jl(r, 2);
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
			case "MM": return Ml.M(e, t);
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
			case "LL": return jl(r + 1, 2);
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
		let i = Al(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : jl(i, t.length);
	},
	I: function(e, t, n) {
		let r = Dl(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : jl(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ml.d(e, t);
	},
	D: function(e, t, n) {
		let r = El(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : jl(r, t.length);
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
			case "ee": return jl(a, 2);
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
			case "cc": return jl(a, t.length);
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
			case "ii": return jl(i, t.length);
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
		switch (i = r === 12 ? Nl.noon : r === 0 ? Nl.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? Nl.evening : r >= 12 ? Nl.afternoon : r >= 4 ? Nl.morning : Nl.night, t) {
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
		return Ml.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ml.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : jl(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : jl(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ml.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ml.s(e, t);
	},
	S: function(e, t) {
		return Ml.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Il(r);
			case "XXXX":
			case "XX": return Ll(r);
			default: return Ll(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Il(r);
			case "xxxx":
			case "xx": return Ll(r);
			default: return Ll(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Fl(r, ":");
			default: return "GMT" + Ll(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Fl(r, ":");
			default: return "GMT" + Ll(r, ":");
		}
	},
	t: function(e, t, n) {
		return jl(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return jl(+e, t.length);
	}
};
function Fl(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + jl(a, 2);
}
function Il(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + jl(Math.abs(e) / 60, 2) : Ll(e, t);
}
function Ll(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = jl(Math.trunc(r / 60), 2), a = jl(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var Rl = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, zl = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Bl = {
	p: zl,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Rl(e, t);
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
		return a.replace("{{date}}", Rl(r, t)).replace("{{time}}", zl(i, t));
	}
}, Vl = /^D+$/, Hl = /^Y+$/, Ul = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Wl(e) {
	return Vl.test(e);
}
function Gl(e) {
	return Hl.test(e);
}
function Kl(e, t, n) {
	let r = ql(e, t, n);
	if (console.warn(r), Ul.includes(e)) throw RangeError(r);
}
function ql(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var Jl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xl = /^'([^]*?)'?$/, Zl = /''/g, Ql = /[a-zA-Z]/;
function $l(e, t, n) {
	let r = Bc(), i = n?.locale ?? r.locale ?? Tl, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = X(e, n?.in);
	if (!$c(s)) throw RangeError("Invalid time value");
	let c = t.match(Yl).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Bl[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Jl).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: eu(e)
		};
		if (Pl[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Ql)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Gl(a) || !n?.useAdditionalDayOfYearTokens && Wl(a)) && Kl(a, t, String(e));
		let o = Pl[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function eu(e) {
	let t = e.match(Xl);
	return t ? t[1].replace(Zl, "'") : e;
}
//#endregion
//#region node_modules/date-fns/getDay.js
function tu(e, t) {
	return X(e, t?.in).getDay();
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
function nu(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = Fc(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
function ru() {
	return Object.assign({}, Bc());
}
//#endregion
//#region node_modules/date-fns/getHours.js
function iu(e, t) {
	return X(e, t?.in).getHours();
}
//#endregion
//#region node_modules/date-fns/getISODay.js
function au(e, t) {
	let n = X(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/date-fns/getMinutes.js
function ou(e, t) {
	return X(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/date-fns/getMonth.js
function su(e, t) {
	return X(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getSeconds.js
function cu(e) {
	return X(e).getSeconds();
}
//#endregion
//#region node_modules/date-fns/getYear.js
function Z(e, t) {
	return X(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
function lu(e, t) {
	return +X(e) > +X(t);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
function uu(e, t) {
	return +X(e) < +X(t);
}
//#endregion
//#region node_modules/date-fns/isEqual.js
function du(e, t) {
	return +X(e) == +X(t);
}
//#endregion
//#region node_modules/date-fns/transpose.js
function fu(e, t) {
	let n = pu(t) ? new t(0) : Fc(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function pu(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var mu = 10, hu = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, gu = class extends hu {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, _u = class extends hu {
	priority = mu;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => Fc(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : Fc(e, fu(e, this.context));
	}
}, vu = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new gu(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, yu = class extends vu {
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
}, bu = {
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
}, xu = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function Su(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Cu(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function wu(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * jc + a * Ac + o * Mc),
		rest: t.slice(n[0].length)
	};
}
function Tu(e) {
	return Cu(bu.anyDigitsSigned, e);
}
function Eu(e, t) {
	switch (e) {
		case 1: return Cu(bu.singleDigit, t);
		case 2: return Cu(bu.twoDigits, t);
		case 3: return Cu(bu.threeDigits, t);
		case 4: return Cu(bu.fourDigits, t);
		default: return Cu(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Du(e, t) {
	switch (e) {
		case 1: return Cu(bu.singleDigitSigned, t);
		case 2: return Cu(bu.twoDigitsSigned, t);
		case 3: return Cu(bu.threeDigitsSigned, t);
		case 4: return Cu(bu.fourDigitsSigned, t);
		default: return Cu(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Ou(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function ku(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function Au(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var ju = class extends vu {
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
			case "y": return Su(Eu(4, e), r);
			case "yo": return Su(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Su(Eu(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = ku(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Mu = class extends vu {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return Su(Eu(4, e), r);
			case "Yo": return Su(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Su(Eu(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Ol(e, r);
		if (n.isTwoDigitYear) {
			let t = ku(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Vc(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Vc(e, r);
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
}, Nu = class extends vu {
	priority = 130;
	parse(e, t) {
		return Du(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = Fc(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Hc(r);
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
}, Pu = class extends vu {
	priority = 130;
	parse(e, t) {
		return Du(t === "u" ? 4 : t.length, e);
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
}, Fu = class extends vu {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Eu(t.length, e);
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
}, Iu = class extends vu {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Eu(t.length, e);
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
}, Lu = class extends vu {
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
			case "M": return Su(Cu(bu.month, e), r);
			case "MM": return Su(Eu(2, e), r);
			case "Mo": return Su(n.ordinalNumber(e, { unit: "month" }), r);
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
}, Ru = class extends vu {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return Su(Cu(bu.month, e), r);
			case "LL": return Su(Eu(2, e), r);
			case "Lo": return Su(n.ordinalNumber(e, { unit: "month" }), r);
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
//#endregion
//#region node_modules/date-fns/setWeek.js
function zu(e, t, n) {
	let r = X(e, n?.in), i = Al(r, n) - t;
	return r.setDate(r.getDate() - i * 7), X(r, n?.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Bu = class extends vu {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Cu(bu.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Vc(zu(e, n, r), r);
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
//#endregion
//#region node_modules/date-fns/setISOWeek.js
function Vu(e, t, n) {
	let r = X(e, n?.in), i = Dl(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Hu = class extends vu {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Cu(bu.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return Hc(Vu(e, n));
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
}, Uu = [
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
], Wu = [
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
], Gu = class extends vu {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Cu(bu.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		let n = Au(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Wu[r] : t >= 1 && t <= Uu[r];
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
}, Ku = class extends vu {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Cu(bu.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		return Au(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
//#endregion
//#region node_modules/date-fns/setDay.js
function qu(e, t, n) {
	let r = Bc(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = X(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return Ic(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var Ju = class extends vu {
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
		return e = qu(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Yu = class extends vu {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return Su(Eu(t.length, e), i);
			case "eo": return Su(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = qu(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, Xu = class extends vu {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return Su(Eu(t.length, e), i);
			case "co": return Su(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = qu(e, n, r), e.setHours(0, 0, 0, 0), e;
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
//#endregion
//#region node_modules/date-fns/setISODay.js
function Zu(e, t, n) {
	let r = X(e, n?.in);
	return Ic(r, t - au(r, n), n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Qu = class extends vu {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Eu(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return Su(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return Su(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return Su(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return Su(n.day(e, {
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
		return e = Zu(e, n), e.setHours(0, 0, 0, 0), e;
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
}, $u = class extends vu {
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
		return e.setHours(Ou(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, ed = class extends vu {
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
		return e.setHours(Ou(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, td = class extends vu {
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
		return e.setHours(Ou(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, nd = class extends vu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Cu(bu.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Eu(t.length, e);
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
}, rd = class extends vu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Cu(bu.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Eu(t.length, e);
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
}, id = class extends vu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Cu(bu.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Eu(t.length, e);
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
}, ad = class extends vu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Cu(bu.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Eu(t.length, e);
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
}, od = class extends vu {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Cu(bu.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, sd = class extends vu {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Cu(bu.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Eu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, cd = class extends vu {
	priority = 30;
	parse(e, t) {
		return Su(Eu(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, ld = class extends vu {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return wu(xu.basicOptionalMinutes, e);
			case "XX": return wu(xu.basic, e);
			case "XXXX": return wu(xu.basicOptionalSeconds, e);
			case "XXXXX": return wu(xu.extendedOptionalSeconds, e);
			default: return wu(xu.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Fc(e, e.getTime() - Wc(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, ud = class extends vu {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return wu(xu.basicOptionalMinutes, e);
			case "xx": return wu(xu.basic, e);
			case "xxxx": return wu(xu.basicOptionalSeconds, e);
			case "xxxxx": return wu(xu.extendedOptionalSeconds, e);
			default: return wu(xu.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Fc(e, e.getTime() - Wc(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, dd = class extends vu {
	priority = 40;
	parse(e) {
		return Tu(e);
	}
	set(e, t, n) {
		return [Fc(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, fd = class extends vu {
	priority = 20;
	parse(e) {
		return Tu(e);
	}
	set(e, t, n) {
		return [Fc(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, pd = {
	G: new yu(),
	y: new ju(),
	Y: new Mu(),
	R: new Nu(),
	u: new Pu(),
	Q: new Fu(),
	q: new Iu(),
	M: new Lu(),
	L: new Ru(),
	w: new Bu(),
	I: new Hu(),
	d: new Gu(),
	D: new Ku(),
	E: new Ju(),
	e: new Yu(),
	c: new Xu(),
	i: new Qu(),
	a: new $u(),
	b: new ed(),
	B: new td(),
	h: new nd(),
	H: new rd(),
	K: new id(),
	k: new ad(),
	m: new od(),
	s: new sd(),
	S: new cd(),
	X: new ld(),
	x: new ud(),
	t: new dd(),
	T: new fd()
}, md = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gd = /^'([^]*?)'?$/, _d = /''/g, vd = /\S/, yd = /[a-zA-Z]/;
function bd(e, t, n, r) {
	let i = () => Fc(r?.in || n, NaN), a = ru(), o = r?.locale ?? a.locale ?? Tl, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : X(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new _u(r?.in, n)], d = t.match(hd).map((e) => {
		let t = e[0];
		if (t in Bl) {
			let n = Bl[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(md), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && Gl(n) && Kl(n, t, e), !r?.useAdditionalDayOfYearTokens && Wl(n) && Kl(n, t, e);
		let a = n[0], s = pd[a];
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
			if (a.match(yd)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = xd(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && vd.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = X(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function xd(e) {
	return e.match(gd)[1].replace(_d, "'");
}
//#endregion
//#region node_modules/date-fns/isSameWeek.js
function Sd(e, t, n) {
	let [r, i] = Gc(n?.in, e, t);
	return +Vc(r, n) == +Vc(i, n);
}
//#endregion
//#region node_modules/date-fns/isSameQuarter.js
function Cd(e, t, n) {
	let [r, i] = Gc(n?.in, e, t);
	return +ol(r) == +ol(i);
}
//#endregion
//#region node_modules/date-fns/subDays.js
function wd(e, t, n) {
	return Ic(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/roundToNearestMinutes.js
function Td(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return Fc(e, NaN);
	let r = X(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = nl(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
//#endregion
//#region node_modules/date-fns/setMonth.js
function Ed(e, t, n) {
	let r = X(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = Fc(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = nu(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/date-fns/set.js
function Q(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? Fc(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = Ed(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/date-fns/setMilliseconds.js
function Dd(e, t, n) {
	let r = X(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setSeconds.js
function Od(e, t, n) {
	let r = X(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/date-fns/setYear.js
function kd(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? Fc(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/date-fns/subMonths.js
function Ad(e, t, n) {
	return Lc(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/sub.js
function jd(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = wd(Ad(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return Fc(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/date-fns/subYears.js
function Md(e, t, n) {
	return Xc(e, -t, n);
}
//#endregion
//#region node_modules/@date-fns/tz/tzName/index.js
function Nd(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/@date-fns/tz/tzOffset/index.js
var Pd = {}, Fd = {};
function Id(e, t) {
	try {
		let n = (Pd[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Fd ? Fd[n] : Rd(n, n.split(":"));
	} catch {
		if (e in Fd) return Fd[e];
		let t = e?.match(Ld);
		return t ? Rd(e, t.slice(1)) : NaN;
	}
}
var Ld = /([+-]\d\d):?(\d\d)?/;
function Rd(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Fd[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/@date-fns/tz/date/mini.js
var zd = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Id(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Ud(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Id(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), Vd(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Bd = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Bd.test(e)) return;
	let t = e.replace(Bd, "$1UTC");
	zd.prototype[t] && (e.startsWith("get") ? zd.prototype[e] = function() {
		return this.internal[t]();
	} : (zd.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Hd(this), +this;
	}, zd.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Vd(this), +this;
	}));
});
function Vd(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Id(e.timeZone, e) * 60));
}
function Hd(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Ud(e);
}
function Ud(e, t) {
	let n = Array.isArray(t) ? Wd(t) : +e.internal, r = Id(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = Id(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(Id(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = Id(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Gd(e) - n === y * 60 * 1e3 && Gd(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = Id(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	Vd(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), Vd(e));
}
function Wd(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Gd(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Id(e.timeZone, n) * 60)), +n;
}
//#endregion
//#region node_modules/@date-fns/tz/date/index.js
var Kd = class e extends zd {
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
		return `${e} GMT${t}${n}${r} (${Nd(this.timeZone, this)})`;
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
//#endregion
//#region node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function qd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [
		v("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		v("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		v("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		v("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
function Jd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), v("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function Yd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Xd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function Zd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), v("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function Qd() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function $d() {
	return v("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [v("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var ef = Symbol("ContextKey"), tf = (e, t) => {
	let { setTimeModelValue: n } = Kf(), r = Gf(e), a = R(null), o = ee({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = R(""), l = R([{
		month: su(s),
		year: Z(s)
	}]), u = ee({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, r.range.value.enabled);
	let d = i({
		get: () => a.value,
		set: (e) => {
			a.value = e;
		}
	}), f = i(() => (e) => l.value[e] ? l.value[e].month : 0), p = i(() => (e) => l.value[e] ? l.value[e].year : 0);
	I(ef, {
		rootProps: e,
		defaults: r,
		modelValue: d,
		state: L(o),
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
}, nf = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), rf = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), af = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), of = [
	"timestamp",
	"date",
	"iso"
], sf = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), cf = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), lf = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), uf = Symbol("FlowKey"), df = (e, t) => {
	let { rootEmit: n, rootProps: r, defaults: { timeConfig: a, flow: o } } = $(), s = R(), c = ee({
		[rf.timePicker]: !a.value.enableTimePicker || r.timePicker || r.monthPicker || r.quarterPicker,
		[rf.calendar]: !1,
		[rf.header]: !1
	}), l = i(() => r.monthPicker || r.timePicker || r.quarterPicker), u = (e) => {
		let t = o.value?.steps.at(0);
		if (o.value?.steps?.length) {
			if (!e && l.value) return p(t);
			e && (c[e] = !0), Object.keys(c).filter((e) => !c[e]).length || p(t);
		}
	}, d = (e) => {
		if (o.value?.steps?.length && s.value === e) {
			let e = o.value.steps.at(o.value.steps.indexOf(s.value) + 1);
			e ? (s.value = e, n("flow-step", s.value), p()) : r.autoApply && E().then(() => t("auto-apply"));
		}
	}, f = (t, n, ...r) => {
		s.value === t && e.value && e.value[n]?.(...r);
	}, p = (e) => {
		e && (s.value = e), f(af.month, "toggleMonthPicker", !0), f(af.year, "toggleYearPicker", !0), f(af.calendar, "toggleTimePicker", !1), f(af.time, "toggleTimePicker", !0), (s.value === af.hours || s.value === af.minutes || s.value === af.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return I(uf, {
		childMount: u,
		updateFlowStep: d,
		flowStep: L(s)
	}), { executeFlow: p };
}, $ = () => {
	let e = b(ef);
	if (!e) throw Error("Can't use context");
	return e;
}, ff = () => {
	let e = b(uf);
	if (!e) throw Error("Can't use flow");
	return e;
}, pf = () => {
	let { rootProps: e, state: t, defaults: { textInput: n } } = $(), r = i(() => t.arrowNavigationLevel), a = R(-1), o = R(-1);
	K(r, (e, t) => {
		y(n.value.enabled && n.value.selectOnFocus ? !0 : e === 0 && t > 0);
	});
	let s = R([]), c = R(/* @__PURE__ */ new Map()), l = () => {
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
		r.value === 0 && (a.value = e, o.value = t);
	}, f = (e) => {
		if (![
			cf.arrowUp,
			cf.arrowDown,
			cf.arrowLeft,
			cf.arrowRight
		].includes(e.key)) return;
		l(), e.preventDefault();
		let t = document.activeElement;
		if (!t?.hasAttribute("data-dp-action-element")) return;
		let n = -1, r = -1;
		for (let e = 0; e < s.value.length; e++) {
			let i = s.value[e].indexOf(t);
			if (i !== -1) {
				n = e, r = i;
				break;
			}
		}
		if (n !== -1) switch (e.key) {
			case cf.arrowLeft: return p(n, r);
			case cf.arrowRight: return m(n, r);
			case cf.arrowUp: return h(n, r);
			case cf.arrowDown: return g(n, r);
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
		E().then(() => {
			l();
			let e = s.value[a.value]?.[o.value];
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
			let e = document.querySelector(`[data-dp-action-element="${r.value}"]`);
			e && v(e);
		}
	};
	M(() => {
		e.arrowNavigation && (y(!1), document.addEventListener("keydown", f));
	}), P(() => {
		e.arrowNavigation && document.removeEventListener("keydown", f);
	});
}, mf = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = _f(), { convertType: r, errorMapper: i } = Kf(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = $(), { setTime: v, getWeekFromDate: y } = qf(), { formatSelectedDate: b, formatForTextInput: x } = Yf();
	K(g, (e, t) => {
		o("internal-model-change", g.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && _();
	}, { deep: !0 }), K(d, (e, t) => {
		e.enabled !== t.enabled && (g.value = null, _());
	}), K(() => m.value.input, () => {
		R();
	});
	let S = (e) => e ? c.modelType ? B(e) : {
		hours: iu(e),
		minutes: ou(e),
		seconds: p.value.enableSeconds ? cu(e) : 0
	} : null, C = (e) => c.modelType ? B(e) : {
		month: su(e),
		year: Z(e)
	}, w = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, kd(a(), e))) : t(() => [kd(a(), n[0]), n[1] ? kd(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : kd(a(), +n), T = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, E = (e) => Array.isArray(e) ? [T(e[0], v(e[0])), T(e[1], v(e[1]))] : T(e, v(e)), D = (n) => {
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
		if (Array.isArray(e)) return e.map((e) => z(e));
		throw Error(i.dateArr("multi-dates"));
	}, k = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, A = (n) => c.modelAuto ? Array.isArray(n) ? [z(n[0]), z(n[1])] : c.autoApply ? [z(n)] : [z(n), null] : Array.isArray(n) ? t(() => n[1] ? [z(n[0]), n[1] ? z(n[1]) : e(d.value.partialRange)] : [z(n[0])], d.value.enabled) : z(n), j = () => {
		Array.isArray(g.value) && d.value.enabled && g.value.length === 1 && g.value.push(e(d.value.partialRange));
	}, M = () => {
		let t = g.value;
		return [B(t[0]), t[1] ? B(t[1]) : e(d.value.partialRange)];
	}, N = () => Array.isArray(g.value) ? g.value[1] ? M() : B(r(g.value[0])) : [], P = () => (g.value || []).map((e) => B(e)), F = (e = !1) => (e || j(), c.modelAuto ? N() : f.value.enabled ? P() : Array.isArray(g.value) ? t(() => M(), d.value.enabled) : B(r(g.value))), I = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? E(r(e)) : c.monthPicker ? D(r(e)) : c.yearPicker ? w(r(e)) : f.value.enabled ? O(r(e)) : c.weekPicker ? k(r(e)) : A(r(e)), ee = (e) => {
		if (s.isTextInputDate) return;
		let t = I(e);
		n(r(t)) ? (g.value = r(t), R()) : (g.value = null, l.value = "");
	}, L = () => g.value ? f.value.enabled ? g.value.map((e) => b(e)).join("; ") : u.value.enabled ? x() : b(g.value) : "", R = () => {
		l.value = L();
	}, z = (e) => c.modelType ? of.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? bd(e, m.value.input, a(), { locale: c.locale }) : bd(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, V = (e) => {
		o("update:model-value", e);
	}, te = (e) => Array.isArray(g.value) ? f.value.enabled ? g.value.map((t) => e(t)) : [e(g.value[0]), g.value[1] ? e(g.value[1]) : null] : e(r(g.value)), ne = () => {
		if (Array.isArray(g.value)) {
			let e = y(g.value[0], h.value), t = g.value[1] ? y(g.value[1], h.value) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return y(g.value, h.value).map((e) => a(e));
	}, H = (e) => V(r(te(e))), re = () => o("update:model-value", ne());
	return {
		checkBeforeEmit: () => g.value ? d.value.enabled ? d.value.partialRange ? g.value.length >= 1 : g.value.length === 2 : !!g.value : !1,
		parseExternalModelValue: ee,
		formatInputValue: R,
		emitModelValue: () => (R(), c.monthPicker ? H(C) : c.timePicker ? H(S) : c.yearPicker ? H(Z) : c.weekPicker ? re() : V(F()))
	};
}, hf = () => {
	let { defaults: { transitions: e } } = $(), t = i(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = i(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, gf = (e) => {
	let { modelValue: t } = $();
	K(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, _f = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: a }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Kf(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = qf(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? Z(t) > Z(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? Z(t) < Z(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), a = r.value.months.map((e) => +e).includes(su(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === tu(e)) : !1, c = O(e), l = Z(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || i || a || u || s || c);
	}, w = (t, n) => f(...re(e.value.minDate, t, n)) || m(...re(e.value.minDate, t, n)), T = (t, n) => p(...re(e.value.maxDate, t, n)) || m(...re(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !al({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = Z(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = qc(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !a.value.enableTimePicker || o.monthPicker || o.yearPicker || a.value.ignoreTimeValidation, F = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), I = (e, t, n) => t ? e.find((e) => +e.hours === iu(t) && e.minutes === "*" || +e.minutes === ou(t) && +e.hours === iu(t)) && n : !1, ee = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !I(r, a, n) && !I(i, o, n) && n;
	}, L = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(o.disabledTimes) ? Array.isArray(o.disabledTimes[0]) ? ee(o.disabledTimes, n, e) : !n.some((t) => I(o.disabledTimes, t, e)) : e;
	}, R = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !o.disabledTimes(n);
		return e && r;
	}, z = (e, t) => o.disabledTimes ? Array.isArray(o.disabledTimes) ? L(t, e) : R(t, e) : t, B = (t) => {
		let n = !0;
		if (!t || P()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? F(t) : t;
		return (o.maxTime || e.value.maxDate) && (n = ae(o.maxTime, e.value.maxDate, "max", d(r), n)), (o.minTime || e.value.minDate) && (n = ae(o.minTime, e.value.minDate, "min", d(r), n)), z(t, n);
	}, V = (t) => {
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
	}, te = i(() => (e) => !a.value.enableTimePicker || a.value.ignoreTimeValidation ? !0 : B(e)), ne = i(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !V(e)).length : V(e) : !0), H = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? Lc(t, 1) : Ad(t, 1), a = [su(i), Z(i)];
		return r ? !T(...a) : !w(...a);
	}, re = (e, t, n) => [Q(s(e), { date: 1 }), Q(s(), {
		month: t,
		year: n,
		date: 1
	})], ie = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? uu(e, t) : lu(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || du(Q(e, i), Q(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, ae = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = U(e, r[0], t), o = U(e, r[1], t);
			return ie(r[0], a, n, !!t) && ie(r[1], o, n, !!t) && i;
		}
		return ie(r, U(e, r, t), n, !!t) && i;
	}, U = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: k,
		validateDate: C,
		validateMonthYearInRange: D,
		isDateRangeAllowed: A,
		checkMinMaxRange: N,
		isValidTime: B,
		validateMonthYear: H,
		validateMinDate: w,
		validateMaxDate: T,
		isValidDate: (e) => Array.isArray(e) ? $c(e[0]) && (!e[1] || $c(e[1])) : e ? $c(e) : !1,
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
		isTimeValid: te,
		isMonthValid: ne
	};
};
function vf(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function yf(e) {
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
function bf(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Sf(s, (e) => e.test(o)) : xf(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function xf(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Sf(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Cf(e) {
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
var wf = {
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
}, Tf = (e, t, n) => {
	let r, i = wf[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Ef = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Df = (e, t, n, r) => Ef[e], Of = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: yf({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: yf({
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
	month: yf({
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
	day: yf({
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
	dayPeriod: yf({
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
}, kf = {
	ordinalNumber: Cf({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: bf({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: bf({
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
	month: bf({
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
	day: bf({
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
	dayPeriod: bf({
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
}, Af = {
	code: "en-US",
	formatDistance: Tf,
	formatLong: {
		date: vf({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: vf({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: vf({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Df,
	localize: Of,
	match: kf,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, jf = {
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
	autoSwitchStartEnd: !0
}, Mf = {
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
}, Nf = {
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
}, Pf = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Ff = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, If = {
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
}, Lf = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Rf = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, zf = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Bf = {
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
}, Vf = {
	menuWrapRef: null,
	collapse: !1
}, Hf = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => Af,
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
}, Uf = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Wf = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Gf = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = Kf();
	function a(t, n) {
		let r;
		return r = e.timezone ? new Kd(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Q(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = (t, n, r = 1) => e.timezone ? new Kd(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
		let e = j.value.enableSeconds ? ":ss" : "", t = j.value.enableMinutes ? ":mm" : "";
		return j.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, c = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${w.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : j.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (e) => r(a(), e, j.value.enableSeconds), u = () => D.value.enabled ? j.value.startTime && Array.isArray(j.value.startTime) ? [l(j.value.startTime[0]), l(j.value.startTime[1])] : null : j.value.startTime && !Array.isArray(j.value.startTime) ? l(j.value.startTime) : null, d = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, f = (r) => {
		let i = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = a(e, p.value);
			return [t(n, i), n];
		}));
	}, p = i(() => e.monthPicker || e.yearPicker || e.quarterPicker), m = i(() => {
		let t = typeof e.multiCalendars == "object" && e.multiCalendars, n = {
			static: !0,
			solo: !1
		};
		if (!e.multiCalendars) return {
			...n,
			count: d(!1)
		};
		let r = t ? e.multiCalendars : {}, i = d(t ? r.count ?? !0 : e.multiCalendars);
		return Object.assign(n, r, { count: i });
	}), h = i(() => u()), g = i(() => ({
		...If,
		...e.ariaLabels
	})), _ = i(() => ({
		...Rf,
		...e.filters
	})), v = i(() => typeof e.transitions == "boolean" ? e.transitions ? Lf : !1 : {
		...Lf,
		...e.transitions
	}), y = i(() => ({
		...Ff,
		...e.actionRow
	})), b = i(() => typeof e.textInput == "object" ? {
		...Nf,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : k.value.input,
		pattern: e.textInput.format ?? k.value.input,
		enabled: !0
	} : {
		...Nf,
		format: k.value.input,
		pattern: k.value.input,
		enabled: e.textInput
	}), x = i(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), S = i(() => ({
		...Mf,
		...e.config
	})), C = i(() => typeof e.highlight == "function" ? e.highlight : {
		...Pf,
		...e.highlight
	}), w = i(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Wf.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Wf.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Wf.label
	} : e.weekNumbers ? Wf : void 0), T = i(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), E = i(() => ({
		minDate: e.minDate ? a(e.minDate) : null,
		maxDate: e.maxDate ? a(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
		highlight: typeof C.value == "object" && Array.isArray(C.value.dates) ? f(C.value.dates) : C.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => [t(a(e.date), lf.DATE), e])) : null
	})), D = i(() => typeof e.range == "object" ? {
		enabled: !0,
		...jf,
		...e.range
	} : {
		enabled: e.range,
		...jf
	}), O = i(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), k = i(() => ({
		...zf,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), A = i(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), j = i(() => ({
		...Bf,
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
		flow: i(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: i(() => {
			let t = b.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...Uf,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Uf,
				inputmode: t
			};
		}),
		floatingConfig: i(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		weekStart: i(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : tu(Vc(a(), { locale: e.locale }))),
		getDate: a,
		getDateFromParts: o
	};
}, Kf = () => {
	let e = (e, t) => $l(e, t ?? lf.DATE), t = (e, t) => e ? lf.MONTH_AND_YEAR : t ? lf.YEAR : lf.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
		"a[href]",
		"area[href]",
		"input:not([disabled]):not([type='hidden'])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"button:not([disabled])",
		"[tabindex]:not([tabindex='-1'])",
		"[data-datepicker-instance]"
	].join(", "), o = (e, t) => {
		let n = [...document.querySelectorAll(a())];
		n = n.filter((t) => !e.contains(t) || "datepicker-instance" in t.dataset);
		let r = n.indexOf(e);
		if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
	}, s = (e) => String(e).padStart(2, "0"), c = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), l = (e, t, n = !1) => {
		e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
	}, u = (e, t, n = !1, r = !0, i) => {
		if (e.key === cf.enter || e.key === cf.space && r) return n && e.preventDefault(), t();
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
			hours: iu,
			minutes: ou,
			seconds: cu
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
				hours: iu(e),
				minutes: ou(e),
				seconds: n ? cu(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, qf = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = Kf(), r = (t, n) => {
		if (!t) return e();
		let r = Q(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? cl(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Q(r, {
			hours: +(t.hours ?? iu(r)),
			minutes: +(t.minutes ?? ou(r)),
			seconds: +(t.seconds ?? cu(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [Vc(e, { weekStartsOn: +t }), dl(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : uu(r(e), r(t)), s = (e, t) => !e || !t ? !1 : du(r(e), r(t)), c = (e, t) => !e || !t ? !1 : lu(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => al({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${$l(e, "yyyy-MM-dd")}`, f = (t) => r(Q(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = Z(e(n));
			if (r > t) return 12;
			if (r === t) return su(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = Z(e(n));
			return r < t ? -1 : r === t ? su(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return Z(e(t));
	}, g = (e) => ({
		hours: iu(e),
		minutes: ou(e),
		seconds: cu(e)
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
			before: wd(r(t), e),
			after: Ic(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Jf = () => {
	let { defaults: { config: e } } = $(), t = R(0);
	M(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), P(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: i(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Yf = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => $l(kd(e(), t), i.value.year, { locale: r.locale }), s = (t) => $l(Ed(e(), t), i.value.month, { locale: r.locale }), c = (e) => $l(e, i.value.weekDay, { locale: r.locale }), l = (e) => $l(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => $l(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${$l(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? $l(e[1], s, c) : ""}` : $l(e, s, c);
	}, p = () => {
		let e = (e) => $l(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : $l(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Xf = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Yf();
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
}, Zf = (e) => ({
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
}), Qf = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), $f = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: a } } = $(), { getTimeObjFromCurrent: o } = Kf(), s = R(!1), c = i(() => Array.isArray(r.value) ? r.value[0] : r.value ?? o(e(), {}, a.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z0-9]+/g, r = t.split(n), i = e.split(n), a = e.match(n) || [], o = t.match(n) || [], s = "";
		for (let e = 0; e < r.length && e < i.length; e++) {
			e > 0 && o[e - 1] && (s += a[e - 1] || o[e - 1]);
			let t = r[e]?.length;
			s += i[e]?.slice(0, t);
		}
		return s;
	}, u = (n, r, i) => {
		let a = bd(n, l(r, n), e(), { locale: t.locale });
		return $c(a) && Qc(a) ? i || s.value || t.timePicker ? a : Q(a, {
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
		createMaskedValue: (e, t) => {
			let n = /(YYYY|MM|DD|hh|mm|ss)/g, r = [...t.matchAll(n)].map((e) => e[0]), i = t.replace(n, "|").split("|").filter(Boolean), a = r.map((e) => e.length), o = "", s = 0;
			for (let t = 0; t < r.length; t++) {
				let n = a[t], r = e.slice(s, s + n);
				if (!r) break;
				o += r, r.length === n && i[t] && (o += i[t]), s += n;
			}
			return o;
		}
	};
}, ep = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), tp = [
	"time-input",
	"time-picker",
	"pass-trough"
], np = [
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
		use: tp
	},
	{
		name: "hours-overlay-header",
		use: tp
	},
	{
		name: "minutes-overlay-value",
		use: tp
	},
	{
		name: "minutes-overlay-header",
		use: tp
	},
	{
		name: "seconds-overlay-value",
		use: tp
	},
	{
		name: "seconds-overlay-header",
		use: tp
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
], rp = (e, t) => np.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), ip = (e, t) => np.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), ap = {
	key: 1,
	class: "dp--input-wrap"
}, op = [
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
], sp = {
	key: 1,
	class: "dp--clear-btn"
}, cp = ["aria-label"], lp = /* @__PURE__ */ p({
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
		let r = n, l = e, { rootEmit: u, inputValue: d, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: _, range: v, multiDates: y, ui: b, inputAttrs: x } } = $(), { checkMinMaxRange: S, isValidDate: C } = _f(), { parseFreeInput: w, textPasted: T, createMaskedValue: O, applyMaxValues: k } = $f(), { checkKeyDown: A, checkStopPropagation: j } = Kf(), { boolHtmlAttribute: M } = Qf(), N = G("dp-input"), P = R(null), I = R(!1), ee = i(() => ({
			"dp--pointer": !p.disabled && !p.readonly && !m.value.enabled,
			"dp--disabled": p.disabled,
			"dp--input-readonly": !m.value.enabled,
			"dp--input": !0,
			"dp--input-not-clearable": !x.value.clearable,
			"dp--input-icon-pad": !x.value.hideInputIcon,
			"dp--input-valid": typeof x.value.state == "boolean" && x.value.state,
			"dp--input-invalid": typeof x.value.state == "boolean" && !x.value.state,
			"dp--input-focus": I.value || l.isMenuOpen,
			"dp--input-reg": !m.value.enabled,
			...b.value.input
		})), L = () => {
			r("set-input-date", null), x && p.autoApply && (r("set-empty-date"), P.value = null);
		}, z = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, V = (e) => {
			let [t, n] = z(e);
			if (t) {
				let e = w(t.trim(), d.value), r = n ? w(n.trim(), d.value) : void 0;
				if (lu(e, r)) return;
				let i = e && r ? [e, r] : [e];
				S(r, i, 0) && (P.value = e ? i : null);
			}
		}, te = () => {
			T.value = !0;
		}, ne = (e) => {
			v.value.enabled ? V(e) : y.value.enabled ? P.value = e.split(";").map((e) => w(e.trim())).filter((e) => !!e) : P.value = w(e, d.value);
		}, H = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, i = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]);
				i = O(k(t.replace(/\D/g, ""), e), n);
			}
			i === "" ? L() : (m.value.openMenu && !l.isMenuOpen && r("open"), ne(i), r("set-input-date", P.value)), T.value = !1, d.value = i, u("text-input", e, P.value);
		}, re = (e) => {
			m.value.enabled ? (ne(e.target.value), m.value.enterSubmit && C(P.value) && d.value !== "" ? (r("set-input-date", P.value, !0), P.value = null) : m.value.enterSubmit && d.value === "" && (P.value = null, r("clear"))) : U(e);
		}, ie = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && ne(e.target.value), m.value.tabSubmit && C(P.value) && d.value !== "" ? (r("set-input-date", P.value, !0, !0), P.value = null) : m.value.tabSubmit && d.value === "" && (P.value = null, r("clear"));
		}, ae = () => {
			I.value = !0, r("focus"), E().then(() => {
				m.value.enabled && m.value.selectOnFocus && N.value?.select();
			});
		}, U = (e) => {
			if (j(e, _.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !l.isMenuOpen) return r("open");
				if (m.value.openMenu === "toggle") return r("toggle");
			} else m.value.enabled || r("toggle");
		}, oe = () => {
			r("real-blur"), I.value = !1, (!l.isMenuOpen || g.value.enabled && g.value.input) && r("blur"), (p.autoApply && m.value.enabled && P.value && !l.isMenuOpen || m.value.applyOnBlur) && (r("set-input-date", P.value), r("select-date"), P.value = null);
		}, se = (e) => {
			j(e, _.value, !0), r("clear");
		}, ce = () => {
			r("close");
		}, le = (e) => {
			if (e.key === "Tab" && ie(e), e.key === "Enter" && (re(e), _.value.allowPreventDefault && (e.preventDefault(), j(e, _.value, !0))), e.key === "Escape" && m.value.escClose && ce(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, ue = () => {
			N.value?.focus({ preventScroll: !0 });
		}, K = (e) => {
			P.value = e;
		}, q = (e) => {
			e.key === cf.tab && ie(e, !0);
		};
		return t({
			focusInput: ue,
			setParsedDate: K
		}), (t, n) => (F(), s("div", { onClick: U }, [!t.$slots["dp-input"] && !W(g).enabled ? B(t.$slots, "trigger", { key: 0 }) : o("", !0), !t.$slots.trigger && (!W(g).enabled || W(g).input) ? (F(), s("div", ap, [
			!t.$slots.trigger && (!W(g).enabled || W(g).enabled && W(g).input) ? B(t.$slots, "dp-input", {
				key: 0,
				value: W(d),
				isMenuOpen: e.isMenuOpen,
				onInput: H,
				onEnter: re,
				onTab: ie,
				onClear: se,
				onBlur: oe,
				onKeypress: le,
				onPaste: te,
				onFocus: ae,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [c("input", {
				id: W(x).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: W(x).name,
				class: D(ee.value),
				inputmode: W(x).inputmode,
				placeholder: W(p).placeholder,
				disabled: W(M)(W(p).disabled),
				readonly: W(M)(W(p).readonly),
				required: W(M)(W(x).required),
				value: W(d),
				autocomplete: W(x).autocomplete,
				"aria-label": W(h).input,
				"aria-disabled": W(p).disabled || void 0,
				"aria-invalid": W(x).state === !1 || void 0,
				role: "combobox",
				"aria-haspopup": "dialog",
				"aria-expanded": e.isMenuOpen,
				"aria-controls": W(p).menuId,
				onInput: H,
				onBlur: oe,
				onFocus: ae,
				onKeypress: le,
				onKeydown: n[0] ||= (e) => le(e),
				onPaste: te,
				onInvalid: n[1] ||= (e) => W(u)("invalid", e)
			}, null, 42, op)]) : o("", !0),
			c("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !W(x).hideInputIcon ? (F(), s("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [B(t.$slots, "input-icon")])) : o("", !0), !t.$slots["input-icon"] && !W(x).hideInputIcon && !t.$slots["dp-input"] ? (F(), a(W(qd), {
				key: 1,
				"aria-label": W(h)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : o("", !0)]),
			t.$slots["clear-icon"] && (W(x).alwaysClearable || W(d) && W(x).clearable && !W(p).disabled && !W(p).readonly) ? (F(), s("span", sp, [B(t.$slots, "clear-icon", { clear: se })])) : o("", !0),
			!t.$slots["clear-icon"] && (W(x).alwaysClearable || W(x).clearable && W(d) && !W(p).disabled && !W(p).readonly) ? (F(), s("button", {
				key: 2,
				"aria-label": W(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => W(A)(e, () => se(e), !0, W(_).spaceConfirm, q),
				onClick: n[6] ||= pe((e) => se(e), ["prevent"])
			}, [f(W(Jd), { class: "dp--input-icons" })], 40, cp)) : o("", !0)
		])) : o("", !0)]));
	}
}), up = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = $(), { isDateBefore: o } = qf(), s = () => {
		let e = r();
		return t.actionRow?.nowBtnRound && (e = Td(e, {
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
}, dp = {
	ref: "action-row",
	class: "dp--action-row"
}, fp = ["title"], pp = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, mp = ["disabled"], hp = /* @__PURE__ */ p({
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
	setup(e, { emit: n }) {
		let r = n, a = e, { rootEmit: l, rootProps: u, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { selectCurrentDate: y } = up(r), { isTimeValid: b, isMonthValid: x } = _f(), { formatPreview: S } = Yf(), { checkKeyDown: C, convertType: w } = Kf(), { boolHtmlAttribute: T } = Qf(), E = G("action-buttons-container"), D = G("action-row"), O = R(!1), A = R({});
		M(() => {
			j(), globalThis.addEventListener("resize", j);
		}), P(() => {
			globalThis.removeEventListener("resize", j);
		});
		let j = () => {
			O.value = !1, setTimeout(() => {
				let e = E.value?.getBoundingClientRect(), t = D.value?.getBoundingClientRect();
				e && t && (A.value.maxWidth = `${t.width - e.width - 20}px`), O.value = !0;
			}, 0);
		}, N = i(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), I = i(() => !b.value(f.value) || !x.value(f.value) || !N.value), ee = () => {
			let e = v.value.preview;
			return u.timePicker || u.monthPicker, e(w(f.value));
		}, L = () => {
			let e = f.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, z = i(() => !f.value || !a.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? L() : _.value.enabled ? f.value.map((e) => `${S(e)}`) : u.modelAuto ? `${S(f.value[0])}` : `${S(f.value[0])} -` : S(f.value) : ee()), V = () => _.value.enabled ? "; " : " - ", te = i(() => Array.isArray(z.value) ? z.value.join(V()) : z.value), ne = () => {
			b.value(f.value) && x.value(f.value) && N.value ? r("select-date") : l("invalid-select");
		};
		return (e, n) => (F(), s("div", dp, [e.$slots["action-row"] ? B(e.$slots, "action-row", {
			key: 0,
			modelValue: W(f),
			disabled: I.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}) : (F(), s(t, { key: 1 }, [W(p).showPreview ? (F(), s("div", {
			key: 0,
			class: "dp--selection-preview",
			title: te.value || void 0,
			style: k(A.value)
		}, [e.$slots["action-preview"] && O.value ? B(e.$slots, "action-preview", {
			key: 0,
			value: W(f),
			formatValue: te.value
		}) : o("", !0), !e.$slots["action-preview"] && O.value ? (F(), s(t, { key: 1 }, [d(H(te.value), 1)], 64)) : o("", !0)], 12, fp)) : o("", !0), c("div", pp, [e.$slots["action-buttons"] ? B(e.$slots, "action-buttons", {
			key: 0,
			value: W(f),
			selectDate: ne,
			selectionDisabled: I.value
		}) : o("", !0), e.$slots["action-buttons"] ? o("", !0) : (F(), s(t, { key: 1 }, [
			!W(h).enabled && W(p).showCancel ? (F(), s("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: n[1] ||= (t) => W(C)(t, () => e.$emit("close-picker"))
			}, H(W(p).cancelBtnLabel), 545)) : o("", !0),
			W(p).showNow ? (F(), s("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: n[2] ||= (...e) => W(y) && W(y)(...e),
				onKeydown: n[3] ||= (e) => W(C)(e, () => W(y)())
			}, H(W(p).nowBtnLabel), 33)) : o("", !0),
			W(p).showSelect ? (F(), s("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-select",
				disabled: W(T)(I.value),
				"data-test-id": "select-button",
				onKeydown: n[4] ||= (e) => W(C)(e, () => ne()),
				onClick: ne
			}, H(W(p).selectBtnLabel), 41, mp)) : o("", !0)
		], 64))], 512)], 64))], 512));
	}
}), gp = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: i(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: i(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: i(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, _p = ["role", "tabindex"], vp = {
	ref: "header",
	class: "dp--selection-grid-header"
}, yp = ["aria-label"], bp = [
	"aria-label",
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], xp = ["aria-label", "data-dp-action-element"], Sp = /* @__PURE__ */ p({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		useRelative: { type: Boolean },
		height: {},
		overlayLabel: {},
		isLast: { type: Boolean },
		level: {}
	},
	emits: [
		"selected",
		"toggle",
		"hover-value"
	],
	setup(e, { emit: n }) {
		let r = n, a = e, { setState: l, defaults: { ariaLabels: u, config: f } } = $(), { hideNavigationButtons: p } = gp(), { handleEventPropagation: m, checkKeyDown: h } = Kf(), g = G("toggle-button"), _ = G("header"), v = G("overlay-container"), y = G("grid-wrap"), b = /* @__PURE__ */ Eo(), x = R(!1), S = R(null), C = R(), w = R(0);
		j(() => {
			S.value = null;
		}), M(async () => {
			await E(), ee(), l("arrowNavigationLevel", a.level ?? 1);
		}), P(() => {
			l("arrowNavigationLevel", (a.level ?? 1) - 1);
		});
		let T = i(() => ({
			"dp--overlay": !0,
			"dp--overlay-absolute": !a.useRelative,
			"dp--overlay-relative": a.useRelative
		})), O = i(() => a.useRelative ? {
			height: `${a.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), A = i(() => ({ "dp--overlay-col": !0 })), N = i(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--overlay-action": !0,
			"dp--over-action-scroll": x.value,
			"dp--button-bottom": a.isLast
		})), I = i(() => ({
			"dp--overlay-container": !0,
			"dp--container-flex": a.items?.length <= 6,
			"dp--container-block": a.items?.length > 6
		}));
		K(() => a.items, () => ee(!1), { deep: !0 });
		let ee = (e = !0) => {
			E().then(() => {
				let t = xo(y), n = xo(g), r = xo(v), i = xo(_), o = n ? n.getBoundingClientRect().height : 0;
				t && (t.getBoundingClientRect().height ? w.value = t.getBoundingClientRect().height - o - (i?.getBoundingClientRect().height ?? 0) : w.value = f.value.modeHeight - o - (i?.getBoundingClientRect().height ?? 0));
				let s = b.value?.find((e) => {
					let { dpElementActive: t } = e.dataset;
					return t === `${a.level ?? 1}`;
				});
				s && r && e && (r.scrollTop = s.offsetTop - r.offsetTop - (w.value / 2 - s.getBoundingClientRect().height) - o);
			});
		}, L = (e) => {
			e.disabled || r("selected", e.value);
		}, V = () => {
			r("toggle");
		}, te = (e) => {
			f.value.escClose && (V(), m(e, f.value));
		}, ne = (e) => {
			C.value = e, r("hover-value", e);
		}, re = (e) => {
			if (e.key === cf.esc) return te(e);
		}, ie = (e) => {
			if (e.key === cf.enter) return V();
		};
		return (n, r) => (F(), s("div", {
			ref: "grid-wrap",
			class: D(T.value),
			style: k(O.value),
			role: e.useRelative ? void 0 : "presentation",
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: re,
			onClick: r[0] ||= pe(() => {}, ["prevent"])
		}, [
			c("div", vp, [B(n.$slots, "header")], 512),
			c("div", {
				ref: "overlay-container",
				"aria-label": e.overlayLabel,
				class: D(I.value),
				style: k({ "--dp-overlay-height": `${w.value}px` }),
				role: "listbox"
			}, [B(n.$slots, "overlay", {}, () => [(F(!0), s(t, null, z(e.items, (r, i) => (F(), s("div", {
				key: i,
				class: D(["dp--overlay-row", { "dp--flex-row": e.items.length >= 3 }]),
				role: "presentation"
			}, [(F(!0), s(t, null, z(r, (t) => (F(), s("div", {
				key: t.value,
				ref_for: !0,
				ref_key: "colRefs",
				ref: b,
				role: "option",
				class: D(A.value),
				"aria-label": t.ariaLabel ?? t.text,
				"aria-selected": t.active || void 0,
				"aria-disabled": t.disabled || void 0,
				"data-dp-action-element": e.level ?? 1,
				"data-dp-element-active": t.active ? e.level ?? 1 : void 0,
				tabindex: "0",
				"data-test-id": t.text,
				onClick: pe((e) => L(t), ["prevent"]),
				onKeydown: (e) => W(h)(e, () => L(t), !0),
				onMouseover: (e) => ne(t.value)
			}, [c("div", { class: D(t.className) }, [B(n.$slots, "item", { item: t }, () => [d(H(t.text), 1)])], 2)], 42, bp))), 128))], 2))), 128))])], 14, yp),
			n.$slots["button-icon"] ? de((F(), s("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": W(u)?.toggleOverlay,
				class: D(N.value),
				tabindex: "0",
				"data-dp-action-element": e.level ?? 1,
				onClick: V,
				onKeydown: ie
			}, [B(n.$slots, "button-icon")], 42, xp)), [[ue, !W(p)(e.type)]]) : o("", !0)
		], 46, _p));
	}
}), Cp = ["data-dp-mobile"], wp = /* @__PURE__ */ p({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Jf(), r = i(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
		return (i, a) => (F(), s("div", {
			class: D({
				"dp--menu-inner": !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				"dp--flex-display": W(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": W(n)
		}, [B(i.$slots, "default", {
			instances: r.value,
			wrapClass: { "dp--instance-calendar": W(t).count > 0 }
		})], 10, Cp));
	}
}), Tp = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], Ep = /* @__PURE__ */ p({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = Qf(), { checkKeyDown: r } = Kf(), i = t;
		return (t, a) => (F(), s("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp--btn-base dp--bg-none dp--arrow-btn-nav",
			tabindex: e.inactive ? -1 : 0,
			inert: e.inactive || void 0,
			"aria-hidden": e.inactive || void 0,
			disabled: W(n)(e.disabled),
			"aria-label": e.ariaLabel,
			"aria-disabled": W(n)(e.disabled),
			onClick: a[0] ||= (e) => i("activate"),
			onKeydown: a[1] ||= (e) => W(r)(e, () => i("activate"), !0)
		}, [c("span", { class: D(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [B(t.$slots, "default")], 2)], 40, Tp));
	}
}), Dp = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], Op = /* @__PURE__ */ p({
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
	setup(e, { emit: n }) {
		let u = n, p = e, { showRightIcon: m, showLeftIcon: h } = gp(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = $(), { showTransition: b, transitionName: x } = hf(), { formatYear: S } = Yf(), { boolHtmlAttribute: C } = Qf(), w = R(!1), T = i(() => S(p.year)), E = (e) => {
			w.value = !w.value, u("toggle-year-picker", { show: e });
		}, O = (e) => {
			w.value = !1, u("year-select", e);
		}, k = (e = !1) => {
			u("handle-year", e);
		};
		return (n, i) => (F(), s(t, null, [c("div", { class: D(["dp--year-mode-picker", { "dp--hidden-el": w.value }]) }, [
			W(h)(e.instance) ? (F(), a(Ep, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": W(v)?.prevYear,
				disabled: W(C)(e.isDisabled(!1)),
				class: D(W(y)?.navBtnPrev),
				onActivate: i[0] ||= (e) => k(!1)
			}, {
				default: q(() => [n.$slots["arrow-left"] ? B(n.$slots, "arrow-left", { key: 0 }) : o("", !0), n.$slots["arrow-left"] ? o("", !0) : (F(), a(W(Yd), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0),
			c("button", {
				ref: "mpYearButtonRef",
				class: "dp--btn-base dp--bg-none dp--month-year-select-base dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${W(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"aria-haspopup": "dialog",
				"aria-expanded": e.showYearPicker,
				"data-dp-action-element": "0",
				onClick: i[1] ||= () => E(),
				onKeydown: i[2] ||= fe(pe(() => E(), ["prevent"]), ["enter"])
			}, [n.$slots.year ? B(n.$slots, "year", {
				key: 0,
				text: T.value,
				value: e.year
			}) : o("", !0), n.$slots.year ? o("", !0) : (F(), s(t, { key: 1 }, [d(H(e.year), 1)], 64))], 40, Dp),
			W(m)(e.instance) ? (F(), a(Ep, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": W(v)?.nextYear,
				disabled: W(C)(e.isDisabled(!0)),
				class: D(W(y)?.navBtnNext),
				onActivate: i[3] ||= (e) => k(!0)
			}, {
				default: q(() => [n.$slots["arrow-right"] ? B(n.$slots, "arrow-right", { key: 0 }) : o("", !0), n.$slots["arrow-right"] ? o("", !0) : (F(), a(W(Xd), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0)
		], 2), f(r, {
			name: W(x)(e.showYearPicker),
			css: W(b)
		}, {
			default: q(() => [e.showYearPicker ? (F(), a(Sp, {
				key: 0,
				items: e.items,
				"is-last": W(g).autoApply && !W(_).keepActionRow,
				"overlay-label": W(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: E,
				onSelected: i[4] ||= (e) => O(e)
			}, l({
				"button-icon": q(() => [n.$slots["calendar-icon"] ? B(n.$slots, "calendar-icon", { key: 0 }) : o("", !0), n.$slots["calendar-icon"] ? o("", !0) : (F(), a(W(qd), { key: 1 }))]),
				_: 2
			}, [n.$slots["year-overlay-value"] ? {
				name: "item",
				fn: q(({ item: e }) => [B(n.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"overlay-label"
			])) : o("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), kp = () => {
	let { getDate: e, rootEmit: t, state: n, month: r, year: a, modelValue: o, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = $(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = qf(), { getYears: v } = Xf(), { validateMonthYear: y, checkMinMaxValue: b } = _f(), x = R([!1]), S = i(() => v()), C = i(() => (t, n) => {
		let i = Q(m(e()), {
			month: r.value(t),
			year: a.value(t)
		});
		return y(n ? ll(i) : ul(i), c.preventMinMaxNavigation, n);
	}), w = () => Array.isArray(o.value) && l.value.solo && o.value[1], T = () => {
		for (let t = 0; t < l.value.count; t++) if (t === 0) s.value[t] = s.value[0];
		else if (t === l.value.count - 1 && w()) s.value[t] = {
			month: su(o.value[1]),
			year: Z(o.value[1])
		};
		else {
			let n = Q(e(), s.value[t - 1]);
			s.value[t] = {
				month: su(n),
				year: Z(Xc(n, 1))
			};
		}
	}, E = (t) => {
		if (!t) return T();
		let n = Q(e(), s.value[t]);
		return s.value[0].year = Z(Md(n, l.value.count - 1)), T();
	}, D = (e, t) => {
		let n = rl(t, e);
		return u.value.showLastInRange && n > 1 ? t : e;
	}, O = (e) => c.focusStartDate || l.value.solo ? e[0] : e[1] ? D(e[0], e[1]) : e[0], k = () => {
		if (o.value) {
			let e = Array.isArray(o.value) ? O(o.value) : o.value;
			s.value[0] = {
				month: su(e),
				year: Z(e)
			};
		}
	}, A = () => {
		k(), l.value.count && T();
	};
	K(o, (e, t) => {
		n.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && A();
	}), M(() => {
		A();
	});
	let j = (e, n) => {
		s.value[n].year = e, t("update-month-year", {
			instance: n,
			year: e,
			month: s.value[n].month
		}), l.value.count && !l.value.solo && E(n);
	}, N = i(() => (e) => _(S.value, (t) => ({
		active: a.value(e) === t.value,
		disabled: b(t.value, h(d.value.minDate), h(d.value.maxDate)) || f.value.years?.includes(t.value),
		highlighted: g(p.value, t.value)
	}))), P = (e, t) => {
		j(e, t), I(t);
	}, F = (e, t = !1) => {
		C.value(e, t) || j(t ? a.value(e) + 1 : a.value(e) - 1, e);
	}, I = (e, n) => {
		n === void 0 ? x.value[e] = !x.value[e] : x.value[e] = n, x.value[e] ? t("overlay-toggle", {
			open: !0,
			overlay: af.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: af.year
		});
	};
	return {
		isDisabled: C,
		groupedYears: N,
		showYearPicker: x,
		selectYear: j,
		setStartDate: () => {
			c.startDate && (o.value && c.focusStartDate || !o.value) && j(Z(e(c.startDate)), 0);
		},
		toggleYearPicker: I,
		handleYearSelect: P,
		handleYear: F
	};
}, Ap = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = qf(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
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
}, jp = (e) => {
	let { getDate: t, rootEmit: n, state: r, calendars: a, year: o, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = $();
	gf(() => {
		r.isTextInputDate && B(Z(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = _f(), { isDateBetween: g, resetDateTime: _, resetDate: v, getMinMonth: y, getMaxMonth: b, checkHighlightMonth: x, groupListAndMap: S } = qf(), { checkRangeAutoApply: C, getRangeWithFixedDate: w, handleMultiDatesSelect: T, setMonthOrYearRange: D, setPresetDate: O } = Ap(), { padZero: k } = Kf(), { getMonths: A, isOutOfYearRange: j } = Xf(), { updateFlowStep: N, childMount: P } = ff(), F = i(() => A()), I = R(null), { groupedYears: ee, showYearPicker: L, isDisabled: z, selectYear: B, toggleYearPicker: V, handleYearSelect: te, handleYear: ne, setStartDate: H } = kp();
	M(() => {
		P(), H();
	});
	let re = (e) => e ? {
		month: su(e),
		year: Z(e)
	} : {
		month: null,
		year: null
	}, ie = () => s.value ? Array.isArray(s.value) ? s.value.map((e) => re(e)) : re(s.value) : re(), ae = (e, t) => {
		let n = a.value[e], r = ie();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, U = (e, t, n) => {
		let r = ie();
		return Array.isArray(r) ? o.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, W = (e, n) => {
		if (l.value.enabled) {
			let r = ie();
			if (Array.isArray(s.value) && Array.isArray(r)) {
				let r = U(e, n, 0) || U(e, n, 1), i = Q(v(t()), {
					month: e,
					year: o.value(n)
				});
				return g(s.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, oe = i(() => (e) => S(F.value, (t) => {
		let n = ae(e, t.value), r = $l(G(t.value, e), "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, y(o.value(e), d.value.minDate), b(o.value(e), d.value.maxDate)) || pe(d.value.disabledDates, o.value(e), t.value) || f.value.months?.includes(t.value) || !me(d.value.allowedDates, o.value(e), t.value) || j(o.value(e)),
			isBetween: W(t.value, e),
			highlighted: x(u.value, t.value, o.value(e)),
			ariaLabel: r
		};
	})), G = (e, n) => Q(v(t()), {
		month: e,
		year: o.value(n)
	}), se = (n, r) => {
		s.value = Q(s.value ? s.value : v(t()), {
			month: n,
			year: o.value(r)
		}), e("auto-apply"), N("month");
	}, ce = (t, n) => {
		let r = G(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = w(r) : s.value ? m(r, s.value) && (s.value = D(G(t, n))) : s.value = [G(t, n)], E().then(() => {
			C(s.value, e, s.value.length < 2);
		});
	}, le = (t, n) => {
		T(G(t, n), p.value.limit), e("auto-apply", !0);
	}, ue = (e, t) => (a.value[t].month = e, q(t, a.value[t].year, e), p.value.enabled ? le(e, t) : l.value.enabled ? ce(e, t) : se(e, t)), K = (e, t) => {
		B(e, t), q(t, e, null);
	}, q = (e, t, r) => {
		let i = r;
		if (!i && i !== 0) {
			let t = ie();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		n("update-month-year", {
			instance: e,
			year: t,
			month: i
		});
	}, de = (e, t) => {
		I.value = G(e, t);
	}, fe = (t) => {
		O({ value: t }), e("auto-apply");
	}, pe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${k(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" && e(_(Q(t(), {
			month: r,
			year: n
		}), !0));
	}, me = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${k(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: oe,
		groupedYears: ee,
		year: o,
		isDisabled: z,
		showYearPicker: L,
		modelValue: s,
		toggleYearPicker: V,
		handleYearSelect: te,
		handleYear: ne,
		presetDate: fe,
		setHoverDate: de,
		selectMonth: ue,
		selectYear: K,
		getModelMonthYear: ie
	};
}, Mp = /* @__PURE__ */ p({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: n, emit: r }) {
		let i = r, c = oe(), { rootProps: u, defaults: { config: d } } = $(), p = rp(c, ep.YearMode), { groupedMonths: m, groupedYears: h, year: g, isDisabled: _, showYearPicker: v, modelValue: y, presetDate: b, setHoverDate: x, selectMonth: S, selectYear: C, toggleYearPicker: w, handleYearSelect: E, handleYear: O, getModelMonthYear: k } = jp(i);
		return n({
			getSidebarProps: () => ({
				modelValue: y,
				year: g,
				getModelMonthYear: k,
				selectMonth: S,
				selectYear: C,
				handleYear: O
			}),
			presetDate: b,
			toggleYearPicker: (e) => w(0, e)
		}), (n, r) => (F(), a(wp, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: r, wrapClass: i }) => [(F(!0), s(t, null, z(r, (t) => (F(), s("div", {
				key: t,
				class: D(i)
			}, [n.$slots["top-extra"] ? B(n.$slots, "top-extra", {
				key: 0,
				value: W(y)
			}) : o("", !0), B(n.$slots, "month-year", T({ ref_for: !0 }, {
				mode: "month",
				year: W(g),
				months: W(m)(t),
				years: W(h)(t),
				selectMonth: W(S),
				selectYear: W(C),
				instance: t
			}), () => [f(Sp, {
				items: W(m)(t),
				"is-last": W(u).autoApply && !W(d).keepActionRow,
				height: W(d).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || W(u).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => W(S)(e, t),
				onHoverValue: (e) => W(x)(e, t)
			}, l({
				header: q(() => [f(Op, {
					items: W(h)(t),
					instance: t,
					"show-year-picker": W(v)[t],
					year: W(g)(t),
					"is-disabled": (e) => W(_)(t, e),
					onHandleYear: (e) => W(O)(t, e),
					onYearSelect: (e) => W(E)(e, t),
					onToggleYearPicker: (e) => W(w)(t, e?.show)
				}, l({ _: 2 }, [z(W(p), (e) => ({
					name: e,
					fn: q((t) => [B(n.$slots, e, T({ ref_for: !0 }, t))])
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
			}, [n.$slots["month-overlay-value"] ? {
				name: "item",
				fn: q(({ item: e }) => [B(n.$slots, "month-overlay-value", {
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
}), Np = (e) => {
	let { rootEmit: t, getDate: n, state: r, modelValue: a, rootProps: o, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = $(), { getYears: f } = Xf(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = qf(), { checkRangeAutoApply: y, setMonthOrYearRange: b } = Ap(), { checkMinMaxValue: x, checkMinMaxRange: S } = _f();
	gf(() => {
		r.isTextInputDate && (w.value = Z(n(o.startDate)));
	});
	let C = R(null), w = R();
	M(() => {
		o.startDate && (a.value && o.focusStartDate || !a.value) && (w.value = Z(n(o.startDate)));
	});
	let T = (e) => Array.isArray(a.value) ? a.value.some((t) => Z(t) === e) : a.value ? Z(a.value) === e : !1, D = (e) => u.value.enabled && Array.isArray(a.value) ? p(a.value, C.value, j(e)) : !1, O = (e) => !d.value.allowedDates?.size || d.value.allowedDates.has(`${e}`), k = (e) => d.value.disabledDates instanceof Map ? d.value.disabledDates.size ? d.value.disabledDates.has(`${e}`) : !1 : typeof d.value.disabledDates != "function" || d.value.disabledDates(kd(h(ul(n())), e)), A = i(() => v(f(), (e) => {
		let t = T(e.value);
		return {
			active: t,
			disabled: x(e.value, g(d.value.minDate), g(d.value.maxDate)) || l.value.years.includes(e.value) || !O(e.value) || k(e.value),
			isBetween: D(e.value) && !t,
			highlighted: _(s.value, e.value)
		};
	})), j = (e) => kd(m(ul(n())), e);
	return {
		groupedYears: A,
		focusYear: w,
		setHoverValue: (e) => {
			C.value = kd(m(n()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r,
				month: NaN
			}), c.value.enabled) return a.value ? Array.isArray(a.value) && ((a.value?.map((e) => Z(e))).includes(r) ? a.value = a.value.filter((e) => Z(e) !== r) : a.value.push(kd(h(n()), r))) : a.value = [kd(h(ul(n())), r)], e("auto-apply", !0);
			u.value.enabled ? S(j(r), a.value) && (a.value = b(j(r)), E().then(() => {
				y(a.value, e, a.value.length < 2);
			})) : (a.value = j(r), e("auto-apply"));
		}
	};
}, Pp = /* @__PURE__ */ p({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: i, defaults: { config: c }, rootProps: u } = $(), { groupedYears: d, focusYear: f, selectYear: p, setHoverValue: m } = Np(r);
		return t({ getSidebarProps: () => ({
			modelValue: i,
			selectYear: p
		}) }), (t, n) => (F(), s("div", null, [t.$slots["top-extra"] ? B(t.$slots, "top-extra", {
			key: 0,
			value: W(i)
		}) : o("", !0), t.$slots["month-year"] ? B(t.$slots, "month-year", O(T({ key: 1 }, {
			mode: "year",
			years: W(d),
			selectYear: W(p)
		}))) : (F(), a(Sp, {
			key: 2,
			items: W(d),
			"is-last": W(u).autoApply && !W(c).keepActionRow,
			height: W(c).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || W(u).textInput),
			"focus-value": W(f),
			type: "year",
			"use-relative": "",
			onSelected: W(p),
			onHoverValue: W(m)
		}, l({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: q(({ item: e }) => [B(t.$slots, "year-overlay-value", {
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
}), Fp = {
	key: 0,
	class: "dp--time-input"
}, Ip = ["data-compact", "data-collapsed"], Lp = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Rp = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], zp = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], Bp = { key: 0 }, Vp = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], Hp = /* @__PURE__ */ p({
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
	setup(e, { expose: n, emit: u }) {
		let p = u, m = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: x, multiCalendars: S, timeConfig: C } } = $(), { checkKeyDown: w, hoursToAmPmHours: T } = Kf(), { boolHtmlAttribute: E } = Qf(), { sanitizeTime: O, groupListAndMap: k } = qf(), { transitionName: A, showTransition: j } = hf(), N = ee({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), P = R("AM"), I = R(null), L = R(), V = R(!1);
		M(() => {
			p("mounted");
		});
		let ne = (e) => Q(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: C.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), re = i(() => _.timePicker || C.value.timePickerInline ? 0 : 1), ie = i(() => (e) => me(e, m[e]) || U(e, m[e]) || m.disabled), ae = i(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), U = (e, t) => x.value.enabled && !x.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, oe = (e, t) => {
			if (x.value.enabled && !x.value.disableTimeRangeValidation) {
				let n = t ? +C.value[`${e}Increment`] : -+C.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, G = i(() => (e) => !ye(+m[e] + +C.value[`${e}Increment`], e) || oe(e, !0) || m.disabled), se = i(() => (e) => !ye(m[e] - +C.value[`${e}Increment`], e) || oe(e, !1) || m.disabled), ce = (e, t) => Rc(Q(h(), e), t), le = (e, t) => jd(Q(h(), e), t), ue = i(() => ({
			"dp--time-col": !0,
			"dp--time-col-block": !C.value.timePickerInline,
			"dp--time-col-reg-block": !C.value.enableSeconds && C.value.is24 && !C.value.timePickerInline,
			"dp--time-col-reg-inline": !C.value.enableSeconds && C.value.is24 && C.value.timePickerInline,
			"dp--time-col-reg-with-button": !C.value.enableSeconds && !C.value.is24,
			"dp--time-col-sec": C.value.enableSeconds && C.value.is24,
			"dp--time-col-sec-with-button": C.value.enableSeconds && !C.value.is24
		})), K = i(() => C.value.timePickerInline && x.value.enabled && !S.value.count), de = i(() => {
			let e = [{ type: "hours" }];
			return C.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), C.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), fe = i(() => de.value.filter((e) => !e.separator)), pe = i(() => (e) => {
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
		}, he = (e, t) => t === "hours" ? P.value === "AM" ? e : e + 12 : e, ge = (e) => {
			let t = C.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +C.value[`${e}GridIncrement`], i = e === "hours" && !C.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: C.value.is24 ? t : he(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !C.value.is24 && a.unshift({
				value: P.value === "PM" ? 12 : 0,
				text: "12"
			}), k(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !ye(t.value, e) || me(e, t.value) || U(e, t.value)
			}));
		}, _e = (e) => e >= 0 ? e : 59, ve = (e) => e >= 0 ? e : 23, ye = (e, t) => {
			let n = _.minTime ? ne(O(_.minTime)) : null, r = _.maxTime ? ne(O(_.maxTime)) : null, i = ne(O(ae.value, t, t === "minutes" || t === "seconds" ? _e(e) : ve(e)));
			return n && r ? (uu(i, r) || du(i, r)) && (lu(i, n) || du(i, n)) : n ? lu(i, n) || du(i, n) : !r || uu(i, r) || du(i, r);
		}, be = (e) => C.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || m.disabled, xe = (e) => {
			be(e) || (N[e] = !N[e], N[e] ? (V.value = !0, p("overlay-opened", e)) : (V.value = !1, p("overlay-closed", e)));
		}, Se = (e) => e === "hours" ? iu : e === "minutes" ? ou : cu, Ce = () => {
			L.value && clearTimeout(L.value);
		}, we = (e, t = !0, n) => {
			let r = t ? ce : le, i = t ? +C.value[`${e}Increment`] : -+C.value[`${e}Increment`];
			ye(+m[e] + i, e) && p(`update:${e}`, Se(e)(r({ [e]: +m[e] }, { [e]: +C.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (L.value = setTimeout(() => {
				we(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, Te = (e) => C.value.is24 ? e : (e >= 12 ? P.value = "PM" : P.value = "AM", T(e)), Ee = () => {
			P.value === "PM" ? (P.value = "AM", p("update:hours", m.hours - 12)) : (P.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", P.value);
		}, De = (e) => {
			N[e] = !0;
		}, Oe = (e, t) => (xe(e), p(`update:${e}`, t));
		return n({ openChildCmp: De }), (n, i) => W(_).disabled ? o("", !0) : (F(), s("div", Fp, [
			(F(!0), s(t, null, z(de.value, (r, a) => (F(), s("div", {
				key: a,
				class: D(ue.value),
				"data-compact": K.value && !W(C).enableSeconds,
				"data-collapsed": K.value && W(C).enableSeconds
			}, [r.separator ? (F(), s(t, { key: 0 }, [V.value ? o("", !0) : (F(), s(t, { key: 0 }, [d(":")], 64))], 64)) : (F(), s(t, { key: 1 }, [
				c("button", {
					type: "button",
					class: D({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !W(C).timePickerInline,
						"dp--inc-dec-button-inline": W(C).timePickerInline,
						"dp--tp-inline-btn-top": W(C).timePickerInline,
						"dp--inc-dec-button-disabled": G.value(r.type),
						"dp--hidden-el": V.value
					}),
					"data-test-id": `${r.type}-time-inc-btn-${m.order}`,
					"aria-label": W(v)?.incrementValue(r.type),
					tabindex: "0",
					disabled: W(E)(e.disabled),
					"data-dp-action-element": re.value,
					onKeydown: (e) => W(w)(e, () => we(r.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => W(b).timeArrowHoldThreshold ? void 0 : we(r.type, !0),
					onMousedown: (e) => W(b).timeArrowHoldThreshold ? we(r.type, !0) : void 0,
					onMouseup: Ce
				}, [W(C).timePickerInline ? B(n.$slots, "tp-inline-arrow-up", { key: 1 }, () => [i[1] ||= c("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), i[2] ||= c("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : B(n.$slots, "arrow-up", { key: 0 }, () => [f(W(Qd))])], 42, Lp),
				c("button", {
					type: "button",
					"aria-label": `${pe.value(r.type).text}-${W(v)?.openTpOverlay(r.type)}`,
					"aria-haspopup": "dialog",
					"aria-expanded": N[r.type],
					class: D({
						"dp--time-display": !0,
						"dp--time-display-block": !W(C).timePickerInline,
						"dp--time-display-inline": W(C).timePickerInline,
						"dp--btn-base dp--time-invalid": ie.value(r.type),
						"dp--btn-base dp--time-overlay-btn": !ie.value(r.type),
						"dp--hidden-el": V.value
					}),
					disabled: W(E)(be(r.type)),
					tabindex: "0",
					"data-dp-action-element": re.value,
					"data-test-id": `${r.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => W(w)(e, () => xe(r.type), !0),
					onClick: (e) => xe(r.type)
				}, [B(n.$slots, r.type, {
					text: pe.value(r.type).text,
					value: pe.value(r.type).value
				}, () => [d(H(pe.value(r.type).text), 1)])], 42, Rp),
				c("button", {
					type: "button",
					class: D({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !W(C).timePickerInline,
						"dp--inc-dec-button-inline": W(C).timePickerInline,
						"dp--tp-inline-btn-bottom": W(C).timePickerInline,
						"dp--inc-dec-button-disabled": se.value(r.type),
						"dp--hidden-el": V.value
					}),
					"data-test-id": `${r.type}-time-dec-btn-${m.order}`,
					"aria-label": W(v)?.decrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": re.value,
					disabled: W(E)(be(r.type)),
					onKeydown: (e) => W(w)(e, () => we(r.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => W(b).timeArrowHoldThreshold ? void 0 : we(r.type, !1),
					onMousedown: (e) => W(b).timeArrowHoldThreshold ? we(r.type, !1) : void 0,
					onMouseup: Ce
				}, [W(C).timePickerInline ? B(n.$slots, "tp-inline-arrow-down", { key: 1 }, () => [i[3] ||= c("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), i[4] ||= c("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : B(n.$slots, "arrow-down", { key: 0 }, () => [f(W($d))])], 42, zp)
			], 64))], 10, Ip))), 128)),
			W(C).is24 ? o("", !0) : (F(), s("div", Bp, [B(n.$slots, "am-pm-button", {
				toggle: Ee,
				value: P.value
			}, () => [c("button", {
				ref_key: "amPmButton",
				ref: I,
				type: "button",
				class: "dp--pm-am-button",
				"aria-label": W(v)?.amPmButton,
				tabindex: "0",
				disabled: W(E)(e.disabled),
				"data-dp-action-element": re.value,
				"data-compact": K.value,
				onClick: Ee,
				onKeydown: i[0] ||= (e) => W(w)(e, () => Ee(), !0)
			}, H(P.value), 41, Vp)])])),
			(F(!0), s(t, null, z(fe.value, (e) => (F(), a(r, {
				key: e,
				name: W(A)(N[e.type]),
				css: W(j)
			}, {
				default: q(() => [N[e.type] ? (F(), a(Sp, {
					key: 0,
					items: ge(e.type),
					"is-last": W(_).autoApply && !W(b).keepActionRow,
					type: e.type,
					"aria-labels": W(v),
					level: W(C).timePickerInline || W(_).timePicker ? 1 : 2,
					"overlay-label": W(v).timeOverlay?.(e.type),
					onSelected: (t) => Oe(e.type, t),
					onToggle: (t) => xe(e.type)
				}, l({
					"button-icon": q(() => [B(n.$slots, "clock-icon", {}, () => [n.$slots["clock-icon"] ? o("", !0) : (F(), a(te(W(C).timePickerInline ? W(qd) : W(Zd)), { key: 0 }))])]),
					_: 2
				}, [n.$slots[`${e.type}-overlay-value`] ? {
					name: "item",
					fn: q(({ item: t }) => [B(n.$slots, `${e.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, n.$slots[`${e.type}-overlay-header`] ? {
					name: "header",
					fn: q(() => [B(n.$slots, `${e.type}-overlay-header`, { toggle: () => xe(e.type) })]),
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
				])) : o("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), Up = ["data-dp-mobile"], Wp = ["aria-label", "tabindex"], Gp = [
	"role",
	"aria-label",
	"tabindex"
], Kp = ["aria-label"], qp = /* @__PURE__ */ p({
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
	setup(e, { expose: n, emit: u }) {
		let d = u, p = e, { rootEmit: m, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: y, config: b, range: x, timeConfig: S } } = $(), { isModelAuto: C } = qf(), { checkKeyDown: w, findFocusableEl: O } = Kf(), { transitionName: A, showTransition: j } = hf(), { hideNavigationButtons: N } = gp(), { isMobile: P } = Jf(), { childMount: I } = ff(), ee = oe(), L = G("overlay"), V = G("close-tp-btn"), te = G("tp-input"), ne = R(!1);
		M(() => {
			I(_.timePicker ? void 0 : rf.timePicker);
		});
		let H = i(() => x.value.enabled && _.modelAuto ? C(g.value) : !0), re = R(!1), ie = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), ae = i(() => {
			let e = [];
			if (x.value.enabled) for (let t = 0; t < 2; t++) e.push(ie(t));
			else e.push(ie(0));
			return e;
		}), U = (e, t = "") => {
			let n = e !== re.value;
			re.value = e, h("arrowNavigationLevel", +!!e), n && m("overlay-toggle", {
				open: e,
				overlay: af.time
			}), E().then(() => {
				t !== "" && te.value?.[0] && te.value[0].openChildCmp(t);
			});
		}, se = i(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": _.autoApply && !b.value.keepActionRow
		})), ce = rp(ee, ep.TimeInput), le = (e, t, n) => x.value.enabled ? t === 0 ? [e, ae.value[1][n]] : [ae.value[0][n], e] : e, K = (e) => {
			d("update:hours", e);
		}, fe = (e) => {
			d("update:minutes", e);
		}, pe = (e) => {
			d("update:seconds", e);
		}, me = () => {
			if (L.value && !y.value.enabled && !p.noOverlayFocus) {
				let e = O(L.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, he = (e) => {
			ne.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, ge = (e) => {
			ne.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return n({ toggleTimePicker: U }), (n, i) => (F(), s("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": W(P)
		}, [!W(_).timePicker && !W(S).timePickerInline ? de((F(), s("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: D({
				...se.value,
				"dp--hidden-el": re.value
			}),
			"aria-label": W(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: i[0] ||= (e) => W(w)(e, () => U(!0)),
			onClick: i[1] ||= (e) => U(!0)
		}, [B(n.$slots, "clock-icon", {}, () => [f(W(Zd))])], 42, Wp)), [[ue, !W(N)("time")]]) : o("", !0), f(r, {
			name: W(A)(re.value),
			css: W(j) && !W(S).timePickerInline
		}, {
			default: q(() => [re.value || W(_).timePicker || W(S).timePickerInline ? (F(), s("div", {
				key: 0,
				ref: "overlay",
				role: W(S).timePickerInline ? void 0 : "dialog",
				class: D({
					"dp--overlay": !W(S).timePickerInline,
					"dp--overlay-absolute": !W(_).timePicker && !W(S).timePickerInline,
					"dp--overlay-relative": W(_).timePicker
				}),
				style: k(W(_).timePicker ? { height: `${W(b).modeHeight}px` } : void 0),
				"aria-label": W(v)?.timePicker,
				tabindex: W(S).timePickerInline ? void 0 : 0
			}, [c("div", {
				class: D(W(S).timePickerInline ? "dp--time-picker-inline-container" : "dp--overlay-container dp--container-flex dp--time-picker-overlay-container"),
				style: { display: "flex" }
			}, [B(n.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: K,
				setMinutes: fe,
				setSeconds: pe
			}, () => [c("div", { class: D(W(S).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(F(!0), s(t, null, z(ae.value, (t, r) => de((F(), a(Hp, {
				key: r,
				ref_for: !0,
				ref: "tp-input",
				hours: t.hours,
				minutes: t.minutes,
				seconds: t.seconds,
				order: r,
				"close-time-picker-btn": V.value,
				"disabled-times-config": e.disabledTimesConfig,
				disabled: r === 0 ? W(x).fixedStart : W(x).fixedEnd,
				"validate-time": (t, n) => e.validateTime(t, le(n, r, t)),
				"onUpdate:hours": (e) => K(le(e, r, "hours")),
				"onUpdate:minutes": (e) => fe(le(e, r, "minutes")),
				"onUpdate:seconds": (e) => pe(le(e, r, "seconds")),
				onMounted: me,
				onOverlayClosed: he,
				onOverlayOpened: ge
			}, l({ _: 2 }, [z(W(ce), (e) => ({
				name: e,
				fn: q((t) => [B(n.$slots, e, T({ ref_for: !0 }, t))])
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
			])), [[ue, r === 0 || H.value]])), 128))], 2)]), !W(_).timePicker && !W(S).timePickerInline ? de((F(), s("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: D({
					...se.value,
					"dp--hidden-el": ne.value
				}),
				"aria-label": W(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: i[2] ||= (e) => W(w)(e, () => U(!1)),
				onClick: i[3] ||= (e) => U(!1)
			}, [B(n.$slots, "calendar-icon", {}, () => [f(W(qd))])], 42, Kp)), [[ue, !W(N)("time")]]) : o("", !0)], 2)], 14, Gp)) : o("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Up));
	}
}), Jp = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: r, defaults: { range: a, timeConfig: o } } = $(), { updateFlowStep: s } = ff(), { isDateEqual: c, setTime: l } = qf(), u = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], d = (e) => o.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, f = (t, r) => t ? l(r === void 0 ? {
		hours: n.hours,
		minutes: n.minutes,
		seconds: d()
	} : {
		hours: u("hours", r),
		minutes: u("minutes", r),
		seconds: d(r)
	}, t) : Od(e(), d(r)), p = (e, t) => {
		n[e] = t;
	}, m = i(() => r.modelAuto && a.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : a.value.enabled), h = (e, r) => {
		let i = Object.fromEntries(Object.keys(n).map((t) => t === e ? [t, r] : [t, n[t]].slice()));
		if (m.value && !a.value.disableTimeRangeValidation) {
			let e = (e) => t.value ? l({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, t.value[e]) : null, n = (e) => Dd(t.value[e], 0);
			return !(c(e(0), e(1)) && (lu(e(0), n(1)) || uu(e(1), n(0))));
		}
		return !0;
	}, g = (e, t) => {
		let r = n[e] === t ? void 0 : e;
		h(e, t) && (p(e, t), r && E().then(() => s(e)));
	}, _ = (e) => {
		g("hours", e);
	}, v = (e) => {
		g("minutes", e);
	}, y = (e) => {
		g("seconds", e);
	}, b = (e, n) => {
		_(e.hours), v(e.minutes), y(e.seconds), t.value && n(t.value);
	}, x = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			p("hours", n), p("minutes", r), o.value.enableSeconds && p("seconds", i);
		}
	}, S = (e, t) => {
		let i = {
			hours: Array.isArray(n.hours) ? n.hours[e] : n.hours,
			disabledArr: []
		};
		return (t || t === 0) && (i.hours = t), Array.isArray(r.disabledTimes) && (i.disabledArr = a.value.enabled && Array.isArray(r.disabledTimes[e]) ? r.disabledTimes[e] : r.disabledTimes), i;
	};
	return {
		assignTime: p,
		updateHours: _,
		updateMinutes: v,
		updateSeconds: y,
		getSetDateTime: f,
		updateTimeValues: b,
		getSecondsValue: d,
		assignStartTime: x,
		validateTime: h,
		disabledTimesConfig: i(() => (e, t) => {
			if (Array.isArray(r.disabledTimes)) {
				let { disabledArr: n, hours: r } = S(e, t), i = n.filter((e) => +e.hours === r);
				return i[0]?.minutes === "*" ? {
					hours: [r],
					minutes: void 0,
					seconds: void 0
				} : {
					hours: [],
					minutes: i?.map((e) => +e.minutes) ?? [],
					seconds: i?.map((e) => e.seconds ? +e.seconds : void 0) ?? []
				};
			}
			return {
				hours: [],
				minutes: [],
				seconds: []
			};
		})
	};
}, Yp = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = qf();
	gf(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Jp(), h = (e) => {
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
	M(() => (f(a.value), r.value ? b() : _()));
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
}, Xp = /* @__PURE__ */ p({
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
		let r = n, i = rp(oe(), ep.TimePicker), o = G("time-input"), { time: s, modelValue: u, disabledTimesConfig: d, updateTime: p, validateTime: m } = Yp(r);
		return M(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: u,
				time: s,
				updateTime: p
			}),
			toggleTimePicker: (e, t = "") => {
				o.value?.toggleTimePicker(e, t);
			}
		}), (e, t) => (F(), a(wp, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: q(({ wrapClass: n }) => [c("div", { class: D(n) }, [f(qp, T({ ref: "time-input" }, e.$props, {
				hours: W(s).hours,
				minutes: W(s).minutes,
				seconds: W(s).seconds,
				"disabled-times-config": W(d),
				"validate-time": W(m),
				"onUpdate:hours": t[0] ||= (e) => W(p)({
					hours: e,
					minutes: W(s).minutes,
					seconds: W(s).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => W(p)({
					hours: W(s).hours,
					minutes: e,
					seconds: W(s).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => W(p)({
					hours: W(s).hours,
					minutes: W(s).minutes,
					seconds: e
				})
			}), l({ _: 2 }, [z(W(i), (t, n) => ({
				name: t,
				fn: q((n) => [B(e.$slots, t, O(_(n)))])
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
}), Zp = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: a } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = _f(), c = (e, t) => {
		let n = e;
		return a.value.months.includes(su(n)) ? (n = t ? Lc(e, 1) : Ad(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return a.value.years.includes(Z(n)) ? (n = t ? Xc(e, 1) : Md(e, 1), l(n, t)) : n;
	}, u = (t, i = !1) => {
		let s = Q(n(), {
			month: e.month,
			year: e.year
		}), u = t ? Lc(s, 1) : Ad(s, 1);
		r.disableYearSelect && (u = kd(u, e.year));
		let f = su(u), p = Z(u);
		a.value.months.includes(f) && (u = c(u, t), f = su(u), p = Z(u)), a.value.years.includes(p) && (u = l(u, t), p = Z(u)), o(f, p, t, r.preventMinMaxNavigation) && d(f, p, i);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: i(() => (t) => s(Q(n(), {
			month: e.month,
			year: e.year
		}), r.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, Qp = { class: "dp--header-wrap" }, $p = {
	key: 0,
	class: "dp--month-year-wrap"
}, em = { key: 0 }, tm = { class: "dp--month-year-wrap" }, nm = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], rm = /* @__PURE__ */ p({
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
	setup(e, { expose: n, emit: u }) {
		let p = u, m = e, { rootEmit: h, rootProps: g, modelValue: v, defaults: { ariaLabels: y, filters: b, config: x, highlight: S, safeDates: C, ui: w } } = $(), { transitionName: E, showTransition: k } = hf(), { showLeftIcon: A, showRightIcon: j } = gp(), { handleMonthYearChange: N, isDisabled: P, updateMonthYear: I } = Zp(m, p), { getMaxMonth: ee, getMinMonth: L, getYearFromDate: V, groupListAndMap: ne, checkHighlightYear: re, checkHighlightMonth: ie } = qf(), { checkKeyDown: ae } = Kf(), { formatYear: U } = Yf(), { checkMinMaxValue: oe } = _f(), { boolHtmlAttribute: G } = Qf(), { childMount: se } = ff(), ce = R(!1), le = R(!1), ue = R(!1);
		M(() => {
			se(rf.header);
		});
		let K = (e) => ({
			get: () => m[e],
			set: (t) => {
				let n = e === nf.month ? nf.year : nf.month;
				p("update-month-year", {
					[e]: t,
					[n]: m[n]
				}), e === nf.month ? ve() : ye();
			}
		}), de = i(K(nf.month)), fe = i(K(nf.year)), pe = i(() => (e) => ({
			month: m.month,
			year: m.year,
			items: e === nf.month ? m.months : m.years,
			instance: m.instance,
			updateMonthYear: I,
			toggle: e === nf.month ? ve : ye
		})), me = i(() => m.months.find((e) => e.value === m.month) || {
			text: "",
			value: 0
		}), he = i(() => ne(m.months, (e) => ({
			active: m.month === e.value,
			disabled: oe(e.value, L(m.year, C.value.minDate), ee(m.year, C.value.maxDate)) || b.value.months.includes(e.value),
			highlighted: ie(S.value, e.value, m.year)
		}))), ge = i(() => ne(m.years, (e) => ({
			active: m.year === e.value,
			disabled: oe(e.value, V(C.value.minDate), V(C.value.maxDate)) || b.value.years.includes(e.value),
			highlighted: re(S.value, e.value)
		}))), _e = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (ue.value = !0, h("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (ue.value = !1, h("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, ve = (e) => {
			_e(ce, af.month, e);
		}, ye = (e) => {
			_e(le, af.year, e);
		}, be = i(() => [{
			type: nf.month,
			index: 1,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: me.value.text,
			showSelectionGrid: ce.value,
			items: he.value,
			ariaLabel: y.value?.openMonthsOverlay,
			overlayLabel: y.value.monthPicker?.(!0) ?? void 0
		}, {
			type: nf.year,
			index: 2,
			toggle: ye,
			modelValue: fe.value,
			updateModelValue: (e) => fe.value = e,
			text: U(m.year),
			showSelectionGrid: le.value,
			items: ge.value,
			ariaLabel: y.value?.openYearsOverlay,
			overlayLabel: y.value.yearPicker?.(!0) ?? void 0
		}]), xe = i(() => g.disableYearSelect ? [be.value[0]] : g.yearFirst ? [...be.value].reverse() : be.value);
		return n({
			toggleMonthPicker: ve,
			toggleYearPicker: ye,
			handleMonthYearChange: N
		}), (n, i) => (F(), s("div", Qp, [n.$slots["month-year"] ? (F(), s("div", $p, [B(n.$slots, "month-year", O(_({
			mode: "date",
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: W(I),
			handleMonthYearChange: W(N),
			instance: e.instance,
			isDisabled: W(P)
		})))])) : (F(), s(t, { key: 1 }, [n.$slots["top-extra"] ? (F(), s("div", em, [B(n.$slots, "top-extra", { value: W(v) })])) : o("", !0), c("div", tm, [
			W(A)(e.instance) && !W(g).vertical ? (F(), a(Ep, {
				key: 0,
				"aria-label": W(y)?.prevMonth,
				disabled: W(G)(W(P)(!1)),
				inactive: ue.value,
				class: D(W(w)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: i[0] ||= (e) => W(N)(!1, !0)
			}, {
				default: q(() => [n.$slots["arrow-left"] ? B(n.$slots, "arrow-left", { key: 0 }) : o("", !0), n.$slots["arrow-left"] ? o("", !0) : (F(), a(W(Yd), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : o("", !0),
			c("div", { class: D(["dp--month-year-wrap", { "dp--year-disable-select": W(g).disableYearSelect }]) }, [(F(!0), s(t, null, z(xe.value, (i) => (F(), s(t, { key: i.type }, [c("button", {
				type: "button",
				"data-dp-element": `overlay-${i.type}`,
				class: D(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": ue.value }]),
				"aria-label": `${i.text}-${i.ariaLabel}`,
				"aria-haspopup": "dialog",
				"aria-expanded": i.showSelectionGrid,
				"data-test-id": `${i.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => i.toggle(),
				onKeydown: (e) => W(ae)(e, () => i.toggle(), !0)
			}, [n.$slots[i.type] ? B(n.$slots, i.type, {
				key: 0,
				text: i.text,
				value: m[i.type]
			}) : o("", !0), n.$slots[i.type] ? o("", !0) : (F(), s(t, { key: 1 }, [d(H(i.text), 1)], 64))], 42, nm), f(r, {
				name: W(E)(i.showSelectionGrid),
				css: W(k)
			}, {
				default: q(() => [i.showSelectionGrid ? (F(), a(Sp, {
					key: 0,
					items: i.items,
					"is-last": W(g).autoApply && !W(x).keepActionRow,
					"skip-button-ref": !1,
					type: i.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": i.overlayLabel,
					onSelected: i.updateModelValue,
					onToggle: i.toggle
				}, l({
					"button-icon": q(() => [n.$slots["calendar-icon"] ? B(n.$slots, "calendar-icon", { key: 0 }) : o("", !0), n.$slots["calendar-icon"] ? o("", !0) : (F(), a(W(qd), { key: 1 }))]),
					_: 2
				}, [
					n.$slots[`${i.type}-overlay-value`] ? {
						name: "item",
						fn: q(({ item: e }) => [B(n.$slots, `${i.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					n.$slots[`${i.type}-overlay`] ? {
						name: "overlay",
						fn: q(() => [B(n.$slots, `${i.type}-overlay`, T({ ref_for: !0 }, pe.value(i.type)))]),
						key: "1"
					} : void 0,
					n.$slots[`${i.type}-overlay-header`] ? {
						name: "header",
						fn: q(() => [B(n.$slots, `${i.type}-overlay-header`, { toggle: i.toggle })]),
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
				])) : o("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			W(A)(e.instance) && W(g).vertical ? (F(), a(Ep, {
				key: 1,
				"aria-label": W(y)?.prevMonth,
				"el-name": "action-prev",
				disabled: W(G)(W(P)(!1)),
				inactive: ue.value,
				class: D(W(w)?.navBtnPrev),
				onActivate: i[1] ||= (e) => W(N)(!1, !0)
			}, {
				default: q(() => [n.$slots["arrow-up"] ? B(n.$slots, "arrow-up", { key: 0 }) : o("", !0), n.$slots["arrow-up"] ? o("", !0) : (F(), a(W(Qd), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : o("", !0),
			W(j)(e.instance) ? (F(), a(Ep, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: W(G)(W(P)(!0)),
				"aria-label": W(y)?.nextMonth,
				inactive: ue.value,
				class: D(W(w)?.navBtnNext),
				onActivate: i[2] ||= (e) => W(N)(!0, !0)
			}, {
				default: q(() => [n.$slots[W(g).vertical ? "arrow-down" : "arrow-right"] ? B(n.$slots, W(g).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : o("", !0), n.$slots[W(g).vertical ? "arrow-down" : "arrow-right"] ? o("", !0) : (F(), a(te(W(g).vertical ? W($d) : W(Xd)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : o("", !0)
		])], 64))]));
	}
}), im = ["inert", "aria-hidden"], am = {
	class: "dp--calendar-header",
	role: "row"
}, om = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, sm = ["aria-label"], cm = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, lm = { class: "dp--cell-inner" }, um = [
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
], dm = /* @__PURE__ */ p({
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
	setup(e, { expose: n, emit: a }) {
		let l = a, u = e, { getDate: p, rootEmit: m, rootProps: h, state: g, defaults: { transitions: _, config: v, ariaLabels: y, multiCalendars: b, weekNumbers: x, multiDates: S, ui: C, weekStart: w } } = $(), { isDateAfter: T, isDateEqual: O, resetDateTime: A, getCellId: j } = qf(), { checkKeyDown: N, checkStopPropagation: I, isTouchDevice: ee } = Kf(), { formatWeekDay: L } = Yf(), { childMount: V } = ff(), te = G("calendar-wrap"), ne = G("active-tooltip"), re = R([]), ie = R(null), ae = R(!0), U = R(!1), oe = R(""), se = R({
			bottom: "",
			left: "",
			transform: ""
		}), ce = R({ left: "50%" });
		To(te, { onSwipeEnd: (e, t) => {
			v.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && l("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && l("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let le = i(() => h.calendar ? h.calendar(u.mappedDates) : u.mappedDates), ue = i(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : je());
		M(() => {
			V(rf.calendar), v.value.monthChangeOnScroll && te.value && te.value.addEventListener("wheel", Te, { passive: !1 });
		}), P(() => {
			v.value.monthChangeOnScroll && te.value && te.value.removeEventListener("wheel", Te);
		});
		let K = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", de = (e, t) => {
			if (h.transitions) {
				let n = A(Q(p(), {
					month: u.month,
					year: u.year
				}));
				oe.value = T(A(Q(p(), {
					month: e,
					year: t
				})), n) ? _.value[K(!0)] : _.value[K(!1)], ae.value = !1, E().then(() => ae.value = !0);
			}
		}, fe = i(() => ({ ...C.value.calendar })), me = (e) => ({
			type: "dot",
			...e
		}), he = i(() => (e) => {
			let t = me(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), ge = i(() => (e) => O(e, ie.value)), _e = i(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": b.value.count > 0 && u.instance !== 0
		})), ve = i(() => g.arrowNavigationLevel > 0), ye = i(() => (e) => !h.hideOffsetDates || e.current), be = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			ie.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await E(), ne.value?.[0]) {
				let { left: e, width: t } = ne.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ce.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ce.value.left = `${t - n / 2}px`);
			}
			se.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, xe = async (e, t, n) => {
			let r = xo(re.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? se.value = e.marker.customPosition(r) : await be(r, e), m("tooltip-open", e.marker));
		}, Se = async (e, t, n) => {
			if (U.value && S.value.enabled && S.value.dragSelect) return l("select-date", e);
			if (l("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await xe(e, t, n);
			}
		}, Ce = (e) => {
			ie.value && (ie.value = null, se.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, we = (e, t, n) => {
			e && (Array.isArray(re.value[t]) ? re.value[t][n] = e : re.value[t] = [e]);
		}, Te = (e) => {
			v.value.monthChangeOnScroll && (e.preventDefault(), l("handle-scroll", e));
		}, Ee = (e) => x.value ? x.value.type === "local" ? Al(e.value, {
			weekStartsOn: w.value,
			locale: h.locale
		}) : x.value.type === "iso" ? Dl(e.value) : typeof x.value.type == "function" ? x.value.type(e.value) : "" : "", De = (e) => {
			let t = e[0];
			return x.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Ee(t) : "" : Ee(t);
		}, Oe = (e, t, n = !0) => {
			!n && ee() || (!S.value.enabled || v.value.allowPreventDefault) && (I(e, v.value), l("select-date", t));
		}, ke = (e) => {
			I(e, v.value);
		}, Ae = (e) => {
			S.value.enabled && S.value.dragSelect ? (U.value = !0, l("select-date", e)) : S.value.enabled && l("select-date", e);
		}, je = () => {
			let e = p();
			return al({
				start: Vc(e, {
					locale: h.locale,
					weekStartsOn: w.value
				}),
				end: dl(e, {
					locale: h.locale,
					weekStartsOn: w.value
				})
			}).map((e) => L(e));
		}, Me = (e) => y.value?.day?.(e) ?? $l(e.value, "MMMM do, yyyy", { locale: h.locale });
		return n({ triggerTransition: de }), (e, n) => (F(), s("div", {
			class: D(_e.value),
			inert: ve.value || void 0,
			"aria-hidden": ve.value || void 0
		}, [c("div", {
			ref: "calendar-wrap",
			class: D(fe.value),
			role: "grid"
		}, [
			c("div", am, [W(x) ? (F(), s("div", om, H(W(x).label), 1)) : o("", !0), (F(!0), s(t, null, z(ue.value, (t, n) => (F(), s("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": W(y)?.weekDay?.(n)
			}, [B(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [d(H(t), 1)])], 8, sm))), 128))]),
			n[2] ||= c("div", { class: "dp--calendar-header-separator" }, null, -1),
			f(r, {
				name: oe.value,
				css: !!W(_)
			}, {
				default: q(() => [ae.value ? (F(), s("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: n[1] ||= (e) => U.value = !1
				}, [(F(!0), s(t, null, z(le.value, (r, i) => (F(), s("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [W(x) ? (F(), s("div", cm, [c("div", lm, H(De(r.days)), 1)])) : o("", !0), (F(!0), s(t, null, z(r.days, (r, a) => (F(), s("div", {
					id: W(j)(r.value),
					ref_for: !0,
					ref: (e) => we(e, i, a),
					key: a + i,
					role: "gridcell",
					class: "dp--calendar-item",
					"aria-selected": (r.classData["dp--active"] || r.classData["dp--range-border-start"] || r.classData["dp--range-border-end"]) ?? void 0,
					"aria-disabled": r.classData["dp--cell-disabled"] || void 0,
					"aria-label": Me(r),
					tabindex: !r.current && W(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": W(j)(r.value),
					"data-dp-element-active": r.classData["dp--active"] ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: pe((e) => Oe(e, r), ["prevent"]),
					onTouchend: (e) => Oe(e, r, !1),
					onKeydown: (t) => W(N)(t, () => e.$emit("select-date", r), !1, W(v).spaceConfirm, void 0),
					onMouseenter: (e) => Se(r, i, a),
					onMouseleave: (e) => Ce(r),
					onMousedown: (e) => Ae(r),
					onMouseup: n[0] ||= (e) => U.value = !1
				}, [c("div", { class: D(["dp--cell-inner", r.classData]) }, [
					e.$slots.day && ye.value(r) ? B(e.$slots, "day", {
						key: 0,
						day: +r.text,
						date: r.value
					}) : o("", !0),
					e.$slots.day ? o("", !0) : (F(), s(t, { key: 1 }, [d(H(r.text), 1)], 64)),
					r.marker && ye.value(r) ? B(e.$slots, "marker", {
						key: 2,
						marker: r.marker,
						day: +r.text,
						date: r.value
					}, () => [c("div", {
						class: D(he.value(r.marker)),
						style: k(r.marker.color ? { backgroundColor: r.marker.color } : {})
					}, null, 6)]) : o("", !0),
					ge.value(r.value) ? (F(), s("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp--marker-tooltip",
						style: k(se.value)
					}, [r.marker?.tooltip ? (F(), s("div", {
						key: 0,
						class: "dp--tooltip-content",
						onClick: ke
					}, [(F(!0), s(t, null, z(r.marker.tooltip, (t, n) => (F(), s("div", {
						key: n,
						class: "dp--tooltip-text"
					}, [B(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: r.value
					}, () => [c("div", {
						class: "dp--tooltip-mark",
						style: k(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), c("div", null, H(t.text), 1)])]))), 128)), c("div", {
						class: "dp--arrow-bottom-tp",
						style: k(ce.value)
					}, null, 4)])) : o("", !0)], 4)) : o("", !0)
				], 2)], 40, um))), 128))]))), 128))], 32)) : o("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, im));
	}
}), fm = (e, t) => {
	let n = R([]), r = R(/* @__PURE__ */ new Date()), a = R(), { getDate: o, getDateFromParts: s, rootEmit: c, calendars: l, month: u, year: d, time: f, modelValue: p, rootProps: m, today: h, state: g, defaults: { multiCalendars: _, startTime: v, range: y, config: b, safeDates: x, multiDates: S, timeConfig: C, flow: w, weekStart: T } } = $(), { validateMonthYearInRange: D, isDisabled: O, isDateRangeAllowed: k, checkMinMaxRange: A } = _f(), { updateTimeValues: j, getSetDateTime: N, assignTime: P, assignStartTime: F, validateTime: I, disabledTimesConfig: ee } = Jp(), { formatDay: L } = Yf(), { setTime: z, isDateBefore: B, getDaysInBetween: V } = qf(), { checkRangeAutoApply: te, getRangeWithFixedDate: ne, handleMultiDatesSelect: H, setPresetDate: re } = Ap(), { getMapDate: ie } = Kf(), { selectOnAutoApply: ae } = up(e);
	gf(() => K(g.isTextInputDate));
	let { updateFlowStep: U, flowStep: W } = ff(), oe = (e) => !b.value.keepViewOnOffsetClick || e ? !0 : !a.value, G = (e, t, n, r = !1, i = !1) => {
		oe(i) && (!r && t && n && se(e, t, n), l.value[e] ??= l.value[e] = {
			month: 0,
			year: 0
		}, l.value[e].month = t ?? l.value[e]?.month, l.value[e].year = n ?? l.value[e]?.year);
	}, se = (e, t, n) => {
		(l.value.at(e)?.month !== t || l.value.at(e)?.year !== n) && c("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, ce = () => {
		v.value && F(v.value);
	};
	M(() => {
		p.value || (xe(), ce()), K(!0), m.focusStartDate && m.startDate && xe();
	});
	let le = i(() => !w.value?.steps?.length || w.value.steps.at(-1) === W.value), ue = () => {
		m.autoApply && e("auto-apply", !le.value);
	}, K = (e = !1) => {
		if (p.value) return Array.isArray(p.value) ? (n.value = p.value, _e(e)) : pe(p.value, e);
		if (_.value.count && e && !m.startDate) return fe(o(), e);
	}, q = () => Array.isArray(p.value) && y.value.enabled ? su(p.value[0]) === su(p.value[1] ?? p.value[0]) : !1, de = (e) => {
		let t = Lc(e, 1);
		return {
			month: su(t),
			year: Z(t)
		};
	}, fe = (e = o(), t = !1) => {
		if ((!_.value.count || !_.value.static || t) && G(0, su(e), Z(e), t), _.value.count && (!p.value || q() || !_.value.solo) && (!_.value.solo || t)) for (let e = 1; e < _.value.count; e++) {
			let t = Rc(Q(o(), {
				month: u.value(e - 1),
				year: d.value(e - 1)
			}), { months: 1 });
			l.value[e] = {
				month: su(t),
				year: Z(t)
			};
		}
	}, pe = (e, t) => {
		fe(e, t), P("hours", iu(e)), P("minutes", ou(e)), P("seconds", cu(e)), _.value.count && t && be();
	}, me = (e) => {
		if (_.value.count) {
			if (_.value.solo) return 0;
			let t = su(e[0]), n = su(e[1]);
			return Math.abs(n - t) < _.value.count ? 0 : 1;
		}
		return 1;
	}, he = (e, t) => {
		e[1] && y.value.showLastInRange ? fe(e[me(e)], t) : fe(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : f[n][1]];
		P("hours", n(iu, "hours")), P("minutes", n(ou, "minutes")), P("seconds", n(cu, "seconds"));
	}, ge = (e, t) => {
		if ((y.value.enabled || m.weekPicker) && !S.value.enabled) return he(e, t);
		if (S.value.enabled && t) {
			let n = e.at(-1);
			if (n) return pe(n, t);
		}
	}, _e = (e) => {
		let t = p.value;
		ge(t, e), _.value.count && _.value.solo && be();
	}, ve = (e, n) => {
		let r = Q(o(), {
			month: u.value(n),
			year: d.value(n)
		}), i = e < 0 ? Lc(r, 1) : Ad(r, 1);
		D(su(i), Z(i), e < 0, m.preventMinMaxNavigation) && (G(n, su(i), Z(i)), _.value.count && !_.value.solo && ye(n), t());
	}, ye = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Ad(Q(o(), {
				month: u.value(t + 1),
				year: d.value(t + 1)
			}), 1);
			G(t, su(e), Z(e));
		}
		for (let t = e + 1; t <= _.value.count - 1; t++) {
			let e = Lc(Q(o(), {
				month: u.value(t - 1),
				year: d.value(t - 1)
			}), 1);
			G(t, su(e), Z(e));
		}
	}, be = () => {
		if (Array.isArray(p.value) && p.value.length === 2) {
			let e = o(o(p.value[1] ?? Lc(p.value[0], 1))), [t, n] = [su(p.value[0]), Z(p.value[0])], [r, i] = [su(p.value[1]), Z(p.value[1])];
			(t !== r || t === r && n !== i) && _.value.solo && G(1, su(e), Z(e));
		} else p.value && !Array.isArray(p.value) && (G(0, su(p.value), Z(p.value)), fe(o()));
	}, xe = () => {
		m.startDate && (G(0, su(o(m.startDate)), Z(o(m.startDate))), _.value.count && ye(0));
	}, Se = (e, t) => {
		if (b.value.monthChangeOnScroll) {
			let n = Date.now() - r.value.getTime(), i = Math.abs(e.deltaY), a = 500;
			i > 1 && (a = 100), i > 100 && (a = 0), n > a && (r.value = /* @__PURE__ */ new Date(), ve(b.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, Ce = (e, t, n = !1) => {
		b.value.monthChangeOnArrows && m.vertical === n && we(e, t);
	}, we = (e, t) => {
		ve(e === "right" ? -1 : 1, t);
	}, Te = (e) => {
		if (x.value.markers) return ie(e.value, x.value.markers);
	}, Ee = (e, t) => {
		switch (m.sixWeeks === !0 ? "append" : m.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, De = (e, t, n) => {
		if (n) {
			let r = n.days.at(-1);
			if (r) {
				let n = ke(Ic(r.value, 1), su(t));
				e.push({ days: n });
			}
		}
	}, Oe = (e, t, n, r) => {
		if (m.sixWeeks && e.length < 6) {
			let i = 6 - e.length, [a, o] = Ee((t.getDay() + 7 - r) % 7, 6 - (n.getDay() + 7 - r) % 7);
			for (let n = 1; n <= i; n++) if (o ? !!(n % 2) == a : a) {
				let n = e[0].days[0], r = ke(Ic(n.value, -7), su(t));
				e.unshift({ days: r });
			} else De(e, t, e.at(-1));
		}
		return e;
	}, ke = (e, t) => {
		let n = o(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = Ic(n, e), a = su(i) !== t;
			r.push({
				text: m.hideOffsetDates && a ? "" : L(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Ae = (e, t) => {
		let n = [], r = s(t, e), i = s(t, e + 1, 0), a = Vc(r, { weekStartsOn: T.value }), o = (t) => {
			let r = ke(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			B(a, i) && o(Ic(t, 7));
		};
		return o(a), Oe(n, r, i, T.value);
	}, je = (e) => {
		let t = z({
			hours: f.hours,
			minutes: f.minutes,
			seconds: Re()
		}, o(e.value));
		c("date-click", t), S.value.enabled ? H(t, S.value.limit) : p.value = t, U("calendar"), E().then(() => {
			ue();
		});
	}, Me = (e) => y.value.noDisabledRange ? V(n.value[0], e).some((e) => O(e)) : !1, Ne = () => {
		n.value = p.value ? p.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(y.value.fixedStart || y.value.fixedEnd) && (n.value = []);
	}, Pe = (e, t) => {
		let r = [o(e.value), Ic(o(e.value), +y.value.autoRange)];
		k(r) ? (t && Fe(e.value), n.value = r) : c("invalid-date", e.value);
	}, Fe = (e) => {
		if (G(0, su(o(e)), Z(o(e))), _.value.count > 0) for (let t = 1; t < _.value.count; t++) {
			let n = de(Q(o(e), {
				year: d.value(t - 1),
				month: u.value(t - 1)
			}));
			G(t, n.month, n.year);
		}
	}, Ie = (e) => {
		if (Me(e.value) || !A(e.value, p.value, +!y.value.fixedStart)) return c("invalid-date", e.value);
		n.value = ne(o(e.value));
	}, Le = (e, t) => {
		if (Ne(), y.value.autoRange) return Pe(e, t);
		if (y.value.fixedStart || y.value.fixedEnd) return Ie(e);
		n.value[0] ? A(o(e.value), p.value) && !Me(e.value) ? B(o(e.value), o(n.value[0])) ? y.value.autoSwitchStartEnd ? (n.value.unshift(o(e.value)), c("range-end", n.value[0])) : (n.value[0] = o(e.value), c("range-start", n.value[0])) : (n.value[1] = o(e.value), c("range-end", n.value[1])) : c("invalid-date", e.value) : (n.value[0] = o(e.value), c("range-start", n.value[0]));
	}, Re = (e = !0) => C.value.enableSeconds ? Array.isArray(f.seconds) ? e ? f.seconds[0] : f.seconds[1] : f.seconds : 0, ze = (e) => {
		n.value[e] = z({
			hours: f.hours[e],
			minutes: f.minutes[e],
			seconds: Re(e !== 1)
		}, n.value[e]);
	}, Be = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), c("range-start", n.value[0]), c("range-end", n.value[1]));
	}, Ve = () => {
		n.value.length && (n.value[0] && !n.value[1] ? ze(0) : (ze(0), ze(1), U("calendar")), Be(), p.value = n.value.slice(), te(n.value, e, n.value.length < 2 || w.value?.steps.length ? w.value?.steps.at(-1) !== W.value : !1));
	}, He = (e, t = !1) => {
		if (O(e.value) || !e.current && m.hideOffsetDates) return c("invalid-date", e.value);
		if (a.value = structuredClone(e), !y.value.enabled) return je(e);
		Array.isArray(f.hours) && Array.isArray(f.minutes) && !S.value.enabled && (Le(e, t), Ve());
	}, Ue = (e, n) => {
		let r = u.value(e) !== n.month;
		G(e, n.month, n.year, !1, !0), _.value.count && !_.value.solo && ye(e), t(_.value.solo ? e : void 0), n.fromNav || U(r ? "month" : "year");
	}, We = (e) => {
		re({ value: e }), ae(), m.multiCalendars && E().then(() => K(!0));
	}, Ge = () => {
		if (Array.isArray(p.value)) {
			if (S.value.enabled) {
				let e = Ke();
				p.value[p.value.length - 1] = N(e);
			} else p.value = p.value.map((e, t) => e && N(e, t));
		} else p.value = N(p.value);
		e("time-update");
	}, Ke = () => Array.isArray(p.value) && p.value.length ? p.value[p.value.length - 1] : null, qe = (e) => {
		let t = "";
		if (y.value.enabled && Array.isArray(p.value)) for (let n of Object.keys(e)) {
			let r = e[n];
			Array.isArray(r) && (f[n][0] !== r[0] && (t = "range-start"), f[n][1] !== r[1] && (t = "range-start"));
		}
		return t;
	};
	return {
		calendars: l,
		modelValue: p,
		month: u,
		year: d,
		time: f,
		disabledTimesConfig: ee,
		today: h,
		validateTime: I,
		getCalendarDays: Ae,
		getMarker: Te,
		handleScroll: Se,
		handleSwipe: we,
		handleArrow: Ce,
		selectDate: He,
		updateMonthYear: Ue,
		presetDate: We,
		updateTime: (e) => {
			let t = qe(e);
			j(e, Ge), t && c(t, p.value[t === "range-start" ? 0 : 1]), w.value?.steps.length && ue();
		},
		assignMonthAndYear: fe,
		setStartTime: ce
	};
}, pm = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = qf(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = $(), { isDisabled: y } = _f(), b = R(null), x = (e) => {
		!e.current && u.hideOffsetDates || (b.value = e.value);
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
				let t = Ic(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = Ic(b.value, +g.value.autoRange);
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
	}, M = (e) => i(v.value, b.value, e.value), N = () => u.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, P = () => !u.modelAuto || e(v.value), F = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !E(e) && !E(e, !1);
		return !y(e.value) && !O(e) && !(!e.current && u.hideOffsetDates) && t;
	}, I = (e) => g.value.enabled ? u.modelAuto ? N() && O(e) : !1 : O(e), ee = (e) => m.value ? t(e.value, h.value.highlight) : !1, L = (e) => {
		let t = y(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, z = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), B = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && P() && (e.current || !u.hideOffsetDates) && !O(e) ? M(e) : !1, V = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, v.value[0]);
			return uu(e.value, t) || lu(e.value, n);
		}
		return !1;
	}, te = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, v.value[0]);
			return i([t, n], v.value[0], e.value);
		}
		return !1;
	}, ne = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? V(e) || te(e) : g.value.maxRange ? V(e) : te(e) : !1, H = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = U(e), o = g.value.enabled ? t || i : !1;
		return {
			"dp--cell-offset": !e.current,
			"dp--pointer": !u.disabled && !(!e.current && u.hideOffsetDates) && !y(e.value) && !ne(e),
			"dp--cell-disabled": y(e.value) || ne(e),
			"dp--cell-highlight": !L(e) && (ee(e) || z(e)) && !I(e) && !o && !j(e) && !(B(e) && u.weekPicker) && !i,
			"dp--cell-highlight-active": !L(e) && (ee(e) || z(e)) && I(e),
			"dp--today": !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, re = (e) => ({
		"dp--active": I(e),
		"dp--date-hoverable": F(e)
	}), ie = (e) => {
		if (v.value && !Array.isArray(v.value)) {
			let t = o(v.value, _.value);
			return {
				...ce(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...ce(e) };
	}, ae = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...ce(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...ce(e) };
	}, U = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && E(e) && P() : E(e) && P(),
		isRangeEnd: d.value.count > 0 ? e.current && E(e, !1) && P() : E(e, !1) && P()
	}), W = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, oe = (e, t, n, r) => !W(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && uu(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && lu(e.value, v.value[1]) && !r, G = (e, t) => !W(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && lu(e.value, b.value) && uu(e.value, v.value[0]) : g.value.fixedStart && uu(e.value, b.value) && lu(e.value, v.value[1]), se = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = U(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": B(e) || G(e, !0) || G(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": D(e, !0) || oe(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": D(e, !1) || oe(e, !1, t, n)
		};
	}, ce = (e) => ({
		...se(e),
		"dp--range-preview dp--cell-auto-range": A(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": j(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": k(e)
	}), le = (e) => g.value.enabled ? g.value.autoRange ? ce(e) : u.modelAuto ? {
		...re(e),
		...se(e)
	} : u.weekPicker ? ae(e) : se(e) : u.weekPicker ? ie(e) : re(e);
	return {
		setHoverDate: x,
		clearHoverDate: S,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...H(e),
			...le(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, mm = { key: 0 }, hm = /* @__PURE__ */ p({
	__name: "DatePicker",
	props: /*@__PURE__*/ w({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Vf),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(e, { expose: n, emit: r }) {
		let c = r, { month: u, year: d, modelValue: p, time: m, disabledTimesConfig: h, today: g, validateTime: v, getCalendarDays: y, getMarker: b, handleArrow: x, handleScroll: S, handleSwipe: C, selectDate: w, updateMonthYear: E, presetDate: k, updateTime: A, assignMonthAndYear: j, setStartTime: M } = fm(c, fe), N = oe(), { setHoverDate: P, getDayClassData: I, clearHoverDate: ee } = pm(), { getDate: L, rootEmit: R, rootProps: V, defaults: { multiCalendars: te, timeConfig: ne } } = $(), { getYears: H, getMonths: re } = Xf(), { getCellId: ie } = qf(), ae = G("calendar-header"), U = G("calendar"), se = G("time-picker"), ce = rp(N, ep.Calendar), le = rp(N, ep.DatePickerHeader), ue = rp(N, ep.TimePicker);
		K(te, (e, t) => {
			e.count - t.count > 0 && j();
		}, { deep: !0 });
		let de = i(() => (e) => y(u.value(e), d.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = b(e), e.classData = I(e), e))
		})));
		function fe(e) {
			e || e === 0 ? U.value?.[e]?.triggerTransition(u.value(e), d.value(e)) : U.value?.forEach((e, t) => e?.triggerTransition(u.value(t), d.value(t)));
		}
		let pe = (e, t = 0) => {
			ae.value?.[t]?.toggleMonthPicker(e);
		}, me = (e, t = 0) => {
			ae.value?.[t]?.toggleYearPicker(e);
		}, he = (e, t) => {
			se.value?.toggleTimePicker(e, t);
		}, ge = (e, t) => {
			if (!V.range) {
				let n = p.value ? p.value : g, r = t ? L(t) : n, i = e ? Vc(r, { weekStartsOn: 1 }) : dl(r, { weekStartsOn: 1 });
				w({
					value: i,
					current: su(r) === u.value(0),
					text: "",
					classData: {}
				}), document.getElementById(ie(i))?.focus();
			}
		}, _e = (e) => {
			ae.value?.[0]?.handleMonthYearChange(e, !0);
		}, ve = (e) => {
			E(0, {
				month: u.value(0),
				year: d.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ye = (e) => {
			R("overlay-toggle", {
				open: !1,
				overlay: e
			}), c("focus-menu");
		};
		return n({
			clearHoverDate: ee,
			presetDate: k,
			handleArrow: x,
			updateMonthYear: E,
			setStartTime: M,
			toggleMonthPicker: pe,
			toggleYearPicker: me,
			toggleTimePicker: he,
			getSidebarProps: () => ({
				modelValue: p,
				month: u,
				year: d,
				time: m,
				updateTime: A,
				updateMonthYear: E,
				selectDate: w,
				presetDate: k
			}),
			changeMonth: _e,
			changeYear: ve,
			selectWeekDate: ge
		}), (n, r) => (F(), s(t, null, [f(wp, { collapse: e.collapse }, {
			default: q(({ instances: i, wrapClass: c }) => [(F(!0), s(t, null, z(i, (t) => (F(), s("div", {
				key: t,
				class: D(c)
			}, [W(V).hideMonthYearSelect ? o("", !0) : (F(), a(rm, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: W(re)(),
				years: W(H)(),
				month: W(u)(t),
				year: W(d)(t),
				instance: t,
				"menu-wrap-ref": e.menuWrapRef,
				onUpdateMonthYear: (e) => W(E)(t, e),
				onOverlayClosed: ye
			}, l({ _: 2 }, [z(W(le), (e) => ({
				name: e,
				fn: q((t) => [B(n.$slots, e, T({ ref_for: !0 }, t))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), f(dm, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": de.value(t),
				instance: t,
				month: W(u)(t),
				year: W(d)(t),
				onSelectDate: (e) => W(w)(e, t !== 1),
				onSetHoverDate: r[0] ||= (e) => W(P)(e),
				onHandleScroll: (e) => W(S)(e, t),
				onHandleSwipe: (e) => W(C)(e, t)
			}, l({ _: 2 }, [z(W(ce), (e) => ({
				name: e,
				fn: q((t) => [B(n.$slots, e, T({ ref_for: !0 }, t))])
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
		}, 8, ["collapse"]), W(ne).enableTimePicker ? (F(), s("div", mm, [B(n.$slots, "time-picker", O(_({
			time: W(m),
			updateTime: W(A)
		})), () => [f(qp, {
			ref: "time-picker",
			hours: W(m).hours,
			minutes: W(m).minutes,
			seconds: W(m).seconds,
			"disabled-times-config": W(h),
			"validate-time": W(v),
			"no-overlay-focus": e.noOverlayFocus,
			"onUpdate:hours": r[1] ||= (e) => W(A)({
				hours: e,
				minutes: W(m).minutes,
				seconds: W(m).seconds
			}),
			"onUpdate:minutes": r[2] ||= (e) => W(A)({
				hours: W(m).hours,
				minutes: e,
				seconds: W(m).seconds
			}),
			"onUpdate:seconds": r[3] ||= (e) => W(A)({
				hours: W(m).hours,
				minutes: W(m).minutes,
				seconds: e
			})
		}, l({ _: 2 }, [z(W(ue), (e) => ({
			name: e,
			fn: q((t) => [B(n.$slots, e, O(_(t)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : o("", !0)], 64));
	}
}), gm = (e) => {
	let { getDate: t, modelValue: n, year: r, calendars: a, defaults: { highlight: o, range: s, multiDates: c } } = $(), { isDateBetween: l, isDateEqual: u } = qf(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = Ap();
	gf();
	let { isDisabled: m } = _f(), { formatQuarterText: h } = Yf(), { childMount: g } = ff(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = kp(), T = R();
	M(() => {
		g(), w();
	});
	let E = i(() => (e) => n.value ? Array.isArray(n.value) ? n.value.some((t) => Cd(e, t)) : Cd(n.value, e) : !1), D = (e) => {
		if (s.value.enabled) {
			if (Array.isArray(n.value)) {
				let t = u(e, n.value[0]) || u(e, n.value[1]);
				return l(n.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, O = (e, t) => e.quarter === el(t) && e.year === Z(t), k = (e) => typeof o.value == "function" ? o.value({
		quarter: el(e),
		year: Z(e)
	}) : o.value.quarters.some((t) => O(t, e)), A = i(() => (e) => {
		let n = Q(t(), { year: r.value(e) });
		return sl({
			start: ul(n),
			end: ll(n)
		}).map((e) => {
			let t = ol(e), n = fl(e), r = m(e), i = D(t), a = k(t);
			return {
				text: h(t, n),
				value: t,
				active: E.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), j = (t) => {
		f(t, c.value.limit), e("auto-apply", !0);
	}, N = (t) => {
		n.value = p(t), d(n.value, e, n.value.length < 2);
	}, P = (t) => {
		n.value = t, e("auto-apply");
	};
	return {
		groupedYears: _,
		year: r,
		isDisabled: y,
		quarters: A,
		showYearPicker: v,
		modelValue: n,
		selectYear: b,
		toggleYearPicker: x,
		handleYearSelect: S,
		handleYear: C,
		setHoverDate: (e) => {
			T.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return a.value[t].month = su(fl(e)), c.value.enabled ? j(e) : s.value.enabled ? N(e) : P(e);
		}
	};
}, _m = { class: "dp--quarter-items" }, vm = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], ym = /* @__PURE__ */ p({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: n, emit: r }) {
		let i = r, { defaults: { config: u } } = $(), p = oe(), { boolHtmlAttribute: m } = Qf(), h = rp(p, ep.YearMode), { groupedYears: g, year: _, isDisabled: v, quarters: y, modelValue: b, showYearPicker: x, setHoverDate: S, selectQuarter: C, toggleYearPicker: w, handleYearSelect: E, handleYear: O } = gm(i);
		return n({
			getSidebarProps: () => ({
				modelValue: b,
				year: _,
				selectQuarter: C,
				handleYearSelect: E,
				handleYear: O
			}),
			toggleYearPicker: (e) => w(0, e)
		}), (n, r) => (F(), a(wp, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: e, wrapClass: r }) => [(F(!0), s(t, null, z(e, (e) => (F(), s("div", {
				key: e,
				class: D(r)
			}, [c("div", {
				class: "dp-quarter-picker-wrap",
				style: k({ minHeight: `${W(u).modeHeight}px` })
			}, [
				n.$slots["top-extra"] ? B(n.$slots, "top-extra", {
					key: 0,
					value: W(b)
				}) : o("", !0),
				c("div", null, [f(Op, {
					items: W(g)(e),
					instance: e,
					"show-year-picker": W(x)[e],
					year: W(_)(e),
					"is-disabled": (t) => W(v)(e, t),
					onHandleYear: (t) => W(O)(e, t),
					onYearSelect: (t) => W(E)(t, e),
					onToggleYearPicker: (t) => W(w)(e, t?.show)
				}, l({ _: 2 }, [z(W(h), (e) => ({
					name: e,
					fn: q((t) => [B(n.$slots, e, T({ ref_for: !0 }, t))])
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
				c("div", _m, [(F(!0), s(t, null, z(W(y)(e), (t, r) => (F(), s("div", { key: r }, [c("button", {
					type: "button",
					class: D(["dp--btn-base dp--qr-btn", {
						"dp--active": t.active,
						"dp--qr-btn-between": t.isBetween,
						"dp--qr-btn-disabled": t.disabled,
						"dp--highlighted": t.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": t.value,
					disabled: W(m)(t.disabled),
					onClick: (n) => W(C)(t.value, e, t.disabled),
					onMouseover: (e) => W(S)(t.value)
				}, [B(n.$slots, "quarter", {
					value: t.value,
					text: t.text
				}, () => [d(H(t.text), 1)])], 42, vm)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), bm = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], xm = {
	key: 0,
	class: "dp--menu-load-container"
}, Sm = {
	key: 1,
	class: "dp--menu-header"
}, Cm = ["data-dp-mobile"], wm = {
	key: 0,
	class: "dp--sidebar-left"
}, Tm = ["data-dp-mobile"], Em = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], Dm = { class: "dp--instance-calendar" }, Om = {
	key: 2,
	class: "dp--sidebar-right"
}, km = {
	key: 2,
	class: "dp--action-extra"
}, Am = /* @__PURE__ */ p({
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
	setup(e, { expose: n, emit: r }) {
		let u = r, d = oe(), { state: f, rootProps: p, defaults: { textInput: m, inline: h, config: g, ui: v, ariaLabels: y }, rootEmit: b, setState: x } = $(), { isMobile: S } = Jf(), { handleEventPropagation: C, getElWithin: w, checkStopPropagation: T, checkKeyDown: E } = Kf(), { selectCurrentDate: A } = up();
		pf();
		let j = G("inner-menu"), N = G("dp-menu"), I = G("dyn-cmp"), ee = R(0), L = R(!1), V = R(!1), { executeFlow: ne } = df(I, u), re = (e) => {
			V.value = !0, g.value.allowPreventDefault && e.preventDefault(), T(e, g.value, !0);
		};
		M(() => {
			L.value = !0, ie(), globalThis.addEventListener("resize", ie);
			let e = xo(N);
			e && !m.value.enabled && !h.value.enabled && x("menuFocused", !0), e && (e.addEventListener("pointerdown", re), e.addEventListener("mousedown", re), b("menu-mounted", e)), document.addEventListener("mousedown", Ee);
		}), P(() => {
			globalThis.removeEventListener("resize", ie), document.removeEventListener("mousedown", Ee);
			let e = xo(N);
			e && (e.removeEventListener("pointerdown", re), e.removeEventListener("mousedown", re), b("menu-unmounted", e));
		});
		let ie = () => {
			let e = xo(j);
			e && (ee.value = e.getBoundingClientRect().width);
		}, ae = i(() => p.monthPicker ? Mp : p.yearPicker ? Pp : p.timePicker ? Xp : p.quarterPicker ? ym : hm), se = () => {
			let e = xo(N);
			e && e.focus({ preventScroll: !0 });
		}, ce = i(() => I.value?.getSidebarProps() || {}), le = rp(d, ep.ActionRow), ue = rp(d, ep.PassTrough), K = i(() => ({
			"dp--menu-unclickable dp--menu-disabled": p.disabled,
			"dp--menu-unclickable dp--menu-readonly": p.readonly,
			"dp--menu-unclickable dp-menu-loading": p.loading
		})), de = i(() => ({
			"dp--menu": !0,
			"dp--menu-index": !h.value.enabled,
			"dp--relative": h.value.enabled,
			...v.value.menu
		})), fe = (e) => {
			T(e, g.value, !0);
		}, me = (e) => {
			g.value.escClose && (u("close-picker"), C(e, g.value));
		}, he = (e) => {
			p.arrowNavigation || (e === sf.left || e === sf.up ? ye("handleArrow", sf.left, 0, e === sf.up) : ye("handleArrow", sf.right, 0, e === sf.down));
		}, ge = (e) => {
			x("shiftKeyInMenu", e.shiftKey), g.value.tabOutClosesMenu && !p.hideMonthYearSelect && e.code === cf.tab && e.target.classList.contains("dp--menu") && f.shiftKeyInMenu && (e.preventDefault(), T(e, g.value, !0), u("close-picker"));
		}, _e = (e) => {
			I.value?.toggleTimePicker(!1, !1), I.value?.toggleMonthPicker(!1, e), I.value?.toggleYearPicker(!1, e);
		}, ve = (e, t = 0) => e === "month" ? I.value?.toggleMonthPicker(!0, t) : e === "year" ? I.value?.toggleYearPicker(!0, t) : e === "time" ? I.value?.toggleTimePicker(!0) : _e(t), ye = (e, ...t) => {
			I.value?.[e] && I.value?.[e](...t);
		}, be = (e) => {
			ye("presetDate", U(e));
		}, xe = () => {
			ye("clearHoverDate");
		}, Se = (e, t) => {
			ye("updateMonthYear", e, t);
		}, Ce = (e, t) => {
			e.preventDefault(), he(t);
		}, we = (e) => {
			g.value.allowPreventDefault && (e.preventDefault(), T(e, g.value, !0));
		}, Te = (e) => {
			if (g.value.onInternalKeydown?.(e) !== !1) {
				if (ge(e), e.key === cf.home || e.key === cf.end) return ye("selectWeekDate", e.key === cf.home, e.target.getAttribute("id"));
				switch ((e.key === cf.pageUp || e.key === cf.pageDown) && (e.shiftKey ? (ye("changeYear", e.key === cf.pageUp), w(N.value, "overlay-year")?.focus()) : (ye("changeMonth", e.key === cf.pageUp), w(N.value, e.key === cf.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && N.value?.focus({ preventScroll: !0 })), e.key) {
					case cf.esc: return me(e);
					case cf.enter: return we(e);
					case cf.arrowLeft: return Ce(e, sf.left);
					case cf.arrowRight: return Ce(e, sf.right);
					case cf.arrowUp: return Ce(e, sf.up);
					case cf.arrowDown: return Ce(e, sf.down);
					default: return;
				}
			}
		}, Ee = (e) => {
			h.value.enabled && !h.value.input && !N.value?.contains(e.target) && V.value && (V.value = !1, u("menu-blur"));
		};
		return n({
			updateMonthYear: Se,
			switchView: ve,
			onValueCleared: () => {
				I.value?.setStartTime?.();
			},
			executeFlow: ne
		}), (n, r) => (F(), s("div", {
			id: W(p).menuId,
			ref: "dp-menu",
			tabindex: W(h).enabled ? void 0 : "0",
			role: W(h).enabled ? void 0 : "dialog",
			"aria-label": W(y)?.menu,
			"aria-modal": !W(h).enabled || void 0,
			class: D(de.value),
			onMouseleave: xe,
			onClick: fe,
			onKeydown: Te
		}, [
			(W(p).disabled || W(p).readonly) && W(h).enabled || W(p).loading ? (F(), s("div", {
				key: 0,
				class: D(K.value)
			}, [W(p).loading ? (F(), s("div", xm, [...r[5] ||= [c("span", { class: "dp--menu-loader" }, null, -1)]])) : o("", !0)], 2)) : o("", !0),
			n.$slots["menu-header"] ? (F(), s("div", Sm, [B(n.$slots, "menu-header")])) : o("", !0),
			B(n.$slots, "arrow"),
			c("div", {
				ref: "inner-menu",
				class: D({
					"dp--menu-content-wrapper": W(p).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (W(p).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"])
				}),
				"data-dp-mobile": W(S),
				style: k({ "--dp-menu-width": `${ee.value}px` })
			}, [
				n.$slots["left-sidebar"] ? (F(), s("div", wm, [B(n.$slots, "left-sidebar", O(_(ce.value)))])) : o("", !0),
				W(p).presetDates.length ? (F(), s("div", {
					key: 1,
					class: D({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": W(S)
				}, [(F(!0), s(t, null, z(W(p).presetDates, (r, i) => (F(), s(t, { key: i }, [r.slot ? B(n.$slots, r.slot, {
					key: 0,
					presetDate: be,
					label: r.label,
					value: r.value
				}) : (F(), s("button", {
					key: 1,
					type: "button",
					style: k(r.style || {}),
					class: D(["dp--btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": W(S),
					onClick: pe((e) => be(r.value), ["prevent"]),
					onKeydown: (e) => W(E)(e, () => be(r.value), !0)
				}, H(r.label), 47, Em))], 64))), 128))], 10, Tm)) : o("", !0),
				c("div", Dm, [(F(), a(te(ae.value), {
					ref: "dyn-cmp",
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": N.value,
					onFocusMenu: se,
					onSelectDate: r[0] ||= (e) => n.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => n.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => n.$emit("time-update")
				}, l({ _: 2 }, [z(W(ue), (e) => ({
					name: e,
					fn: q((t) => [B(n.$slots, e, O(_({ ...t })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				n.$slots["right-sidebar"] ? (F(), s("div", Om, [B(n.$slots, "right-sidebar", O(_(ce.value)))])) : o("", !0)
			], 14, Cm),
			n.$slots["action-extra"] ? (F(), s("div", km, [n.$slots["action-extra"] ? B(n.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: W(A)
			}) : o("", !0)])) : o("", !0),
			!W(p).autoApply || W(g).keepActionRow ? (F(), a(hp, {
				key: 3,
				"menu-mount": L.value,
				"calendar-width": ee.value,
				onClosePicker: r[3] ||= (e) => n.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => n.$emit("select-date"),
				onSelectNow: W(A)
			}, l({ _: 2 }, [z(W(le), (e) => ({
				name: e,
				fn: q((t) => [B(n.$slots, e, O(_(t)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : o("", !0)
		], 42, bm));
	}
}), jm = p({
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
			let r = t.default?.();
			return e.to && !e.disabled ? v(n, { to: e.to }, r) : r;
		};
	}
}), Mm = ["data-dp-mobile"], Nm = /* @__PURE__ */ p({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: n, setState: u, inputValue: d, modelValue: p, rootProps: m, defaults: { inline: h, config: g, textInput: v, range: y, multiDates: b, teleport: x, floatingConfig: S, flow: C } } = $(), { validateDate: w, isValidTime: T } = _f(), { menuTransition: A, showTransition: j } = hf(), { isMobile: N } = Jf(), { findNextFocusableElement: I, getNumVal: ee } = Kf(), L = oe(), V = R(!1), te = R(h.value.enabled), ne = R(h.value.enabled || m.centered), H = ie(m, "modelValue"), re = ie(m, "timezone"), ae = G("dp-menu-wrap"), U = G("dp-menu"), se = G("input-cmp"), ce = G("picker-wrapper"), le = G("menu-arrow"), ue = R(!1), de = R(!1), fe = R(!1), pe = R(!0), { floatingStyles: me, middlewareData: he, placement: ge, y: _e } = Ec(se, ae, {
			strategy: S.value.strategy,
			placement: S.value.placement,
			middleware: ((e) => (S.value.flip && e.push(fc(typeof S.value.flip == "object" ? S.value.flip : {})), S.value.shift && e.push(dc(typeof S.value.shift == "object" ? S.value.shift : {})), S.value.arrow && e.push(Cc({ element: S.value.arrow === !0 ? le : S.value.arrow })), e))([uc(S.value.offset)]),
			whileElementsMounted: lc
		});
		M(() => {
			be(m.modelValue), E().then(() => {
				h.value.enabled || globalThis.addEventListener("resize", ke);
			}), h.value.enabled && (V.value = !0), globalThis.addEventListener("keyup", Ae), globalThis.addEventListener("keydown", je);
		}), P(() => {
			h.value.enabled || globalThis.removeEventListener("resize", ke), globalThis.removeEventListener("keyup", Ae), globalThis.removeEventListener("keydown", je);
		});
		let ve = ip(L, m.presetDates), ye = rp(L, ep.Input);
		K([H, re], () => {
			be(H.value);
		}, { deep: !0 }), K([ge, _e], () => {
			!h.value.enabled && !m.centered && pe.value && (ne.value = !1, E().then(() => {
				pe.value = !1, ne.value = !0;
			}));
		});
		let { parseExternalModelValue: be, emitModelValue: xe, formatInputValue: Se, checkBeforeEmit: Ce } = mf(), we = i(() => ({
			"dp--main": !0,
			"dp--theme-dark": m.dark,
			"dp--theme-light": !m.dark,
			"dp--flex-display": h.value.enabled,
			"dp--flex-display-collapsed": fe.value,
			"dp--flex-display-with-input": h.value.input
		})), Te = i(() => m.dark ? "dp--theme-dark" : "dp--theme-light"), Ee = i(() => h.value.enabled && (m.timePicker || m.monthPicker || m.yearPicker || m.quarterPicker)), De = () => se.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Oe = () => {
			V.value && g.value.closeOnScroll && Be();
		}, ke = () => {
			let e = U.value?.$el.getBoundingClientRect().width ?? 0;
			fe.value = document.body.offsetWidth <= e;
		}, Ae = (e) => {
			if (e.key === "Tab" && !h.value.enabled && g.value.tabOutClosesMenu) {
				let e = ce.value?.contains(document.activeElement), t = ae.value?.contains(document.activeElement);
				!e && !t && Be();
			}
			de.value = e.shiftKey;
		}, je = (e) => {
			de.value = e.shiftKey;
		}, Me = () => {
			!m.disabled && !m.readonly && (pe.value = !0, te.value = !0, V.value = !0, V.value && n("open"), V.value || ze(), be(m.modelValue));
		}, Ne = () => {
			d.value = "", ze(), U.value?.onValueCleared(), se.value?.setParsedDate(null), n("update:model-value", null), n("cleared"), g.value.closeOnClearValue && Be();
		}, Pe = () => {
			let e = p.value;
			return !e || !Array.isArray(e) && w(e) ? !0 : Array.isArray(e) ? b.value.enabled || e.length === 2 && w(e[0]) && w(e[1]) ? !0 : y.value.partialRange && !m.timePicker ? w(e[0]) : !1 : !1;
		}, Fe = () => {
			Ce() && Pe() ? (xe(), Be()) : n("invalid-select");
		}, Ie = (e) => {
			Le(), xe(), g.value.closeOnAutoApply && !e && Be();
		}, Le = () => {
			se.value && v.value.enabled && se.value.setParsedDate(p.value);
		}, Re = (e = !1) => {
			m.autoApply && T(p.value) && Pe() && (y.value.enabled && Array.isArray(p.value) ? (y.value.partialRange || p.value.length === 2) && Ie(e) : Ie(e));
		}, ze = () => {
			v.value.enabled || (p.value = null);
		}, Be = (e = !1) => {
			pe.value = !0, e && p.value && g.value.setDateOnMenuClose && Fe(), h.value.enabled || (V.value && (V.value = !1, u("menuFocused", !1), u("shiftKeyInMenu", !1), n("closed"), d.value && be(H.value)), ze(), n("blur"));
		}, Ve = () => {
			!h.value.enabled && !V.value && (te.value = !1);
		}, He = (e, t, r = !1) => {
			if (!e) {
				p.value = null;
				return;
			}
			let i = Array.isArray(e) ? e.every((e) => w(e)) : w(e), a = T(e);
			i && a ? (u("isTextInputDate", !0), p.value = e, t ? (ue.value = r, Fe(), n("text-submit")) : m.autoApply && Re(!0), E().then(() => {
				u("isTextInputDate", !1);
			})) : n("invalid-date", e);
		}, Ue = () => {
			m.autoApply && T(p.value) && xe(), Le();
		}, We = () => V.value ? Be() : Me(), Ge = (e) => {
			p.value = e;
		}, Ke = () => {
			v.value.enabled && (u("isInputFocused", !0), Se()), n("focus");
		}, qe = () => {
			v.value.enabled && (u("isInputFocused", !1), be(m.modelValue), ue.value && I(ce.value, de.value)?.focus()), n("blur");
		}, Je = (e, t) => {
			U.value && U.value.updateMonthYear(t ?? 0, {
				month: ee(e.month),
				year: ee(e.year)
			});
		}, Ye = (e) => {
			be(e ?? m.modelValue);
		}, Xe = (e, t) => {
			U.value?.switchView(e, t);
		}, Ze = (e, t) => {
			if (V.value) return g.value.onClickOutside ? g.value.onClickOutside(e, t) : Be(!0);
		};
		return wo(ae, (e) => Ze(Pe, e), { ignore: [se] }), t({
			closeMenu: Be,
			selectDate: Fe,
			clearValue: Ne,
			openMenu: Me,
			onScroll: Oe,
			formatInputValue: Se,
			updateInternalModelValue: Ge,
			setMonthYear: Je,
			parseModel: Ye,
			switchView: Xe,
			toggleMenu: We,
			executeFlow: (e) => {
				U.value?.executeFlow(e ?? C.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => ae,
			dpMenuRef: () => U,
			dpWrapMenuRef: () => ae,
			inputRef: () => se
		}), (e, t) => (F(), s("div", {
			ref: "picker-wrapper",
			class: D(we.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": W(N)
		}, [f(lp, {
			ref: "input-cmp",
			"is-menu-open": V.value,
			onClear: Ne,
			onOpen: Me,
			onSetInputDate: He,
			onSetEmptyDate: W(xe),
			onSelectDate: Fe,
			onToggle: We,
			onClose: Be,
			onFocus: Ke,
			onBlur: qe,
			onRealBlur: t[0] ||= (e) => W(u)("isInputFocused", !1)
		}, l({ _: 2 }, [z(W(ye), (t) => ({
			name: t,
			fn: q((n) => [B(e.$slots, t, O(_(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), f(W(jm), {
			to: W(x),
			disabled: !W(x)
		}, {
			default: q(() => [te.value ? (F(), s("div", {
				key: 0,
				ref: "dp-menu-wrap",
				class: D({
					"dp--menu-wrapper": !W(h).enabled,
					"dp--outer-menu-wrap": !0,
					"dp--centered": W(m).centered
				}),
				style: k(!W(h).enabled && !W(m).centered ? W(me) : void 0)
			}, [f(r, {
				name: W(A)(W(ge).startsWith("top")),
				css: W(j) && !W(h).enabled && !W(m).centered && ne.value,
				appear: "",
				onAfterLeave: Ve
			}, {
				default: q(() => [V.value && ne.value ? (F(), a(Am, {
					key: 0,
					ref: "dp-menu",
					class: D({ [Te.value]: !0 }),
					"no-overlay-focus": Ee.value,
					collapse: fe.value,
					"get-input-rect": De,
					onClosePicker: Be,
					onSelectDate: Fe,
					onAutoApply: Re,
					onTimeUpdate: Ue,
					onMenuBlur: t[1] ||= (e) => W(n)("blur")
				}, l({ _: 2 }, [z(W(ve), (t) => ({
					name: t,
					fn: q((n) => [B(e.$slots, t, O(_({ ...n })))])
				})), !W(h).enabled && !W(m).centered && W(S).arrow === !0 ? {
					name: "arrow",
					fn: q(() => [c("div", {
						ref: "menu-arrow",
						class: D({
							"dp--arrow-top": W(ge).includes("bottom"),
							"dp--arrow-bottom": W(ge).includes("top")
						}),
						style: k({
							left: W(he).arrow?.x == null ? "" : `${W(he).arrow.x - W(he).arrow.centerOffset}px`,
							top: W(he).arrow?.y == null ? "" : `${W(he).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : o("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 6)) : o("", !0)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, Mm));
	}
}), Pm = /* @__PURE__ */ p({
	__name: "VueDatePickerRoot",
	props: /*@__PURE__*/ w({
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
	}, Hf),
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
		tf(i, r);
		let o = ip(oe(), i.presetDates);
		return t(Zf(G("date-picker"))), (e, t) => (F(), a(Nm, { ref: "date-picker" }, l({ _: 2 }, [z(W(o), (t) => ({
			name: t,
			fn: q((n) => [B(e.$slots, t, O(_(n)))])
		}))]), 1536));
	}
});
//#endregion
//#region node_modules/date-fns/locale/ru/_lib/formatDistance.js
function Fm(e, t) {
	if (e.one !== void 0 && t === 1) return e.one;
	let n = t % 10, r = t % 100;
	return n === 1 && r !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (r < 10 || r > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Im(e) {
	return (t, n) => n?.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? Fm(e.future, t) : "через " + Fm(e.regular, t) : e.past ? Fm(e.past, t) : Fm(e.regular, t) + " назад" : Fm(e.regular, t);
}
var Lm = {
	lessThanXSeconds: Im({
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
	xSeconds: Im({
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
	lessThanXMinutes: Im({
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
	xMinutes: Im({
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
	aboutXHours: Im({
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
	xHours: Im({ regular: {
		singularNominative: "{{count}} час",
		singularGenitive: "{{count}} часа",
		pluralGenitive: "{{count}} часов"
	} }),
	xDays: Im({ regular: {
		singularNominative: "{{count}} день",
		singularGenitive: "{{count}} дня",
		pluralGenitive: "{{count}} дней"
	} }),
	aboutXWeeks: Im({
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
	xWeeks: Im({ regular: {
		singularNominative: "{{count}} неделя",
		singularGenitive: "{{count}} недели",
		pluralGenitive: "{{count}} недель"
	} }),
	aboutXMonths: Im({
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
	xMonths: Im({ regular: {
		singularNominative: "{{count}} месяц",
		singularGenitive: "{{count}} месяца",
		pluralGenitive: "{{count}} месяцев"
	} }),
	aboutXYears: Im({
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
	xYears: Im({ regular: {
		singularNominative: "{{count}} год",
		singularGenitive: "{{count}} года",
		pluralGenitive: "{{count}} лет"
	} }),
	overXYears: Im({
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
	almostXYears: Im({
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
}, Rm = (e, t, n) => Lm[e](t, n), zm = {
	date: hl({
		formats: {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		},
		defaultWidth: "full"
	}),
	time: hl({
		formats: {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: hl({
		formats: { any: "{{date}}, {{time}}" },
		defaultWidth: "any"
	})
}, Bm = [
	"воскресенье",
	"понедельник",
	"вторник",
	"среду",
	"четверг",
	"пятницу",
	"субботу"
];
function Vm(e) {
	let t = Bm[e];
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
function Hm(e) {
	let t = Bm[e];
	return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function Um(e) {
	let t = Bm[e];
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
var Wm = {
	lastWeek: (e, t, n) => {
		let r = e.getDay();
		return Sd(e, t, n) ? Hm(r) : Vm(r);
	},
	yesterday: "'вчера в' p",
	today: "'сегодня в' p",
	tomorrow: "'завтра в' p",
	nextWeek: (e, t, n) => {
		let r = e.getDay();
		return Sd(e, t, n) ? Hm(r) : Um(r);
	},
	other: "P"
}, Gm = {
	code: "ru",
	formatDistance: Rm,
	formatLong: zm,
	formatRelative: (e, t, n, r) => {
		let i = Wm[e];
		return typeof i == "function" ? i(t, n, r) : i;
	},
	localize: {
		ordinalNumber: (e, t) => {
			let n = Number(e), r = t?.unit, i;
			return i = r === "date" ? "-е" : r === "week" || r === "minute" || r === "second" ? "-я" : "-й", n + i;
		},
		era: yl({
			values: {
				narrow: ["до н.э.", "н.э."],
				abbreviated: ["до н. э.", "н. э."],
				wide: ["до нашей эры", "нашей эры"]
			},
			defaultWidth: "wide"
		}),
		quarter: yl({
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
		month: yl({
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
		day: yl({
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
		dayPeriod: yl({
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
		ordinalNumber: wl({
			matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: xl({
			matchPatterns: {
				narrow: /^((до )?н\.?\s?э\.?)/i,
				abbreviated: /^((до )?н\.?\s?э\.?)/i,
				wide: /^(до нашей эры|нашей эры|наша эра)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^д/i, /^н/i] },
			defaultParseWidth: "any"
		}),
		quarter: xl({
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
		month: xl({
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
		day: xl({
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
		dayPeriod: xl({
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
}, Km = {
	key: 0,
	class: "label"
}, qm = {
	key: 1,
	class: "error"
}, Jm = /*#__PURE__*/ Ta({
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
	setup(e, { expose: t, emit: n }) {
		let r = e, a = n, c = R(null), l = i(() => [{
			"input-label": r.label,
			"input-error": r.error,
			"input-required": r.required,
			"input-disabled": r.disabled
		}]), u = R(!1), p = R(!1), m = (e) => {
			let t = e.getTimezoneOffset();
			return (/* @__PURE__ */ new Date(e.getTime() - t * 6e4)).toISOString().slice(0, 19);
		}, h = i({
			get: () => r.modelValue ? new Date(r.modelValue) : null,
			set: (e) => {
				u.value = !1, a("update:modelValue", e ? m(e) : "");
			}
		}), g = () => {
			c.value?.selectDate();
		}, _ = () => {
			c.value?.closeMenu();
		}, v = (e) => {
			p.value = !0, u.value = !e.text?.trim();
		}, y = (e) => {
			p.value = !1, u.value = !e;
		}, b = (e) => {
			r.required && u.value && (console.log("handleBlur", h.value, /* @__PURE__ */ new Date()), h.value = /* @__PURE__ */ new Date()), a("blur", e);
		};
		t({
			focus: () => c.value?.focus(),
			blur: () => c.value?.blur()
		});
		let x = R(!1);
		return K(() => r.modelValue, (e) => {
			u.value = !e, x.value || (x.value = !0, r.required && !e && (h.value = /* @__PURE__ */ new Date()));
		}, { immediate: !0 }), (t, n) => (F(), s("div", { class: D(["input-date", l.value]) }, [
			B(t.$slots, "before", {}, void 0, !0),
			f(W(Pm), {
				ref_key: "input",
				ref: c,
				modelValue: h.value,
				"onUpdate:modelValue": [n[2] ||= (e) => h.value = e, y],
				required: e.required,
				disabled: e.disabled,
				formats: { input: e.timePicker ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy" },
				"time-config": { enableTimePicker: e.timePicker },
				ui: { menu: e.classMenu },
				locale: W(Gm),
				teleport: !0,
				"text-input": "",
				onTextInput: v,
				onFocus: n[3] ||= (e) => a("focus", e),
				onBlur: b
			}, {
				"action-buttons": q(() => [f(ka, {
					size: "small",
					variant: "gray",
					onClick: n[0] ||= (e) => _()
				}, {
					default: q(() => [...n[4] ||= [d("Отмена", -1)]]),
					_: 1
				}), f(ka, {
					size: "small",
					onClick: n[1] ||= (e) => g()
				}, {
					default: q(() => [...n[5] ||= [d("Выбрать", -1)]]),
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
			e.label ? (F(), s("div", Km, H(e.label), 1)) : o("", !0),
			e.error ? (F(), s("div", qm, H(e.error), 1)) : o("", !0),
			B(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-91ba6a0f"]]), Ym = { class: "input-password-control" }, Xm = /*#__PURE__*/ Ta({
	__name: "InputPassword",
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
		autocompleteOff: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, o = R(!1), s = i({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		});
		return (t, n) => (F(), a(Fa, {
			modelValue: s.value,
			"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
			type: o.value ? "text" : "password",
			label: e.label,
			required: e.required,
			disabled: e.disabled,
			error: e.error,
			autocompleteOff: e.autocompleteOff
		}, {
			after: q(() => [c("div", Ym, [de(c("button", {
				type: "button",
				class: "show-password",
				title: "показать пароль",
				onClick: n[0] ||= pe((e) => o.value = !0, ["prevent"])
			}, [B(t.$slots, "iconEyeOff", {}, () => [n[3] ||= c("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "input-password-control-icon"
			}, [
				c("path", { d: "M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" }),
				c("path", { d: "M3 15l2.5 -3.8" }),
				c("path", { d: "M21 14.976l-2.492 -3.776" }),
				c("path", { d: "M9 17l.5 -4" }),
				c("path", { d: "M15 17l-.5 -4" })
			], -1)], !0)], 512), [[ue, !o.value]]), de(c("button", {
				type: "button",
				class: "hide-password",
				title: "скрыть пароль",
				onClick: n[1] ||= pe((e) => o.value = !1, ["prevent"])
			}, [B(t.$slots, "iconEyeOn", {}, () => [n[4] ||= c("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "input-password-control-icon"
			}, [c("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }), c("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })], -1)], !0)], 512), [[ue, o.value]])])]),
			_: 3
		}, 8, [
			"modelValue",
			"type",
			"label",
			"required",
			"disabled",
			"error",
			"autocompleteOff"
		]));
	}
}, [["__scopeId", "data-v-d018c024"]]), Zm = [
	"value",
	"required",
	"disabled"
], Qm = { key: 0 }, $m = { key: 1 }, eh = {
	key: 0,
	class: "error"
}, th = /*#__PURE__*/ Ta({
	__name: "Checkbox",
	props: {
		modelValue: {
			type: [String, Boolean],
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
		value: {
			type: String,
			default: ""
		},
		error: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = oe(), r = e, a = t, l = R(null), u = `checkbox-${Math.random().toString(16).slice(2)}`, d = R(""), f = i(() => [{ "checkbox-error": r.error || d.value }]), p = i({
			get: () => r.modelValue,
			set: (e) => {
				a("update:modelValue", e), d.value = "";
			}
		}), m = () => {
			d.value = l.value?.validationMessage ?? "";
		};
		return (t, r) => (F(), s("div", { class: D(["checkbox", f.value]) }, [
			B(t.$slots, "before", {}, void 0, !0),
			de(c("input", {
				ref_key: "input",
				ref: l,
				id: u,
				type: "checkbox",
				"onUpdate:modelValue": r[0] ||= (e) => p.value = e,
				value: e.value,
				required: e.required,
				disabled: e.disabled,
				onInvalid: pe(m, ["prevent"]),
				onInput: m
			}, null, 40, Zm), [[se, p.value]]),
			c("label", { for: u }, [e.label ? (F(), s("span", Qm, H(e.label), 1)) : W(n).label ? (F(), s("span", $m, [B(t.$slots, "label", {}, void 0, !0)])) : o("", !0)]),
			e.error || d.value ? (F(), s("div", eh, H(e.error || d.value), 1)) : o("", !0),
			B(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-5152abd6"]]), nh = { class: "warning" }, rh = { class: "warning-item" }, ih = { class: "warning-icon" }, ah = ["innerHTML"], oh = {
	key: 1,
	class: "warning-text"
}, sh = {
	key: 0,
	class: "warning-actions"
}, ch = /*#__PURE__*/ Ta({
	__name: "Warning",
	props: {
		content: {
			type: String,
			default: ""
		},
		cancelAction: {
			type: Boolean,
			default: !1
		},
		cancelText: {
			type: String,
			default: "Отменить"
		},
		cancelVariant: {
			type: String,
			default: "gray",
			validator: (e) => [
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		}
	},
	emits: ["confirm", "cancel"],
	setup(e, { emit: t }) {
		let n = oe(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return M(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), A(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (F(), s("div", nh, [c("div", rh, [c("div", ih, [B(t.$slots, "icon", {}, () => [r[1] ||= c("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			class: "icon icon-warning icon-stroke"
		}, [
			c("path", { d: "M12 9v4" }),
			c("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" }),
			c("path", { d: "M12 16h.01" })
		], -1)], !0)]), e.content ? (F(), s("div", {
			key: 0,
			class: "warning-text",
			innerHTML: e.content
		}, null, 8, ah)) : W(n).content ? (F(), s("div", oh, [B(t.$slots, "content", {}, void 0, !0)])) : o("", !0)]), e.cancelAction ? (F(), s("div", sh, [f(ka, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: q(() => [d(H(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-9792c046"]]), lh = { class: "error" }, uh = { class: "error-item" }, dh = { class: "error-icon" }, fh = { class: "error-text" }, ph = {
	key: 0,
	class: "error-title"
}, mh = { key: 0 }, hh = {
	key: 1,
	class: "error-title"
}, gh = ["innerHTML"], _h = {
	key: 3,
	class: "error-content"
}, vh = {
	key: 0,
	class: "error-actions"
}, yh = /*#__PURE__*/ Ta({
	__name: "Error",
	props: {
		title: {
			type: String,
			default: "Ошибка"
		},
		content: {
			type: String,
			default: ""
		},
		cancelAction: {
			type: Boolean,
			default: !1
		},
		cancelText: {
			type: String,
			default: "Отменить"
		},
		cancelVariant: {
			type: String,
			default: "gray",
			validator: (e) => [
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		}
	},
	emits: ["confirm", "cancel"],
	setup(e, { emit: t }) {
		let n = oe(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return M(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), A(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (F(), s("div", lh, [c("div", uh, [c("div", dh, [B(t.$slots, "icon", {}, () => [r[1] ||= c("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			class: "icon icon-error icon-stroke"
		}, [
			c("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
			c("path", { d: "M12 9v4" }),
			c("path", { d: "M12 16v.01" })
		], -1)], !0)]), c("div", fh, [e.title ? (F(), s("div", ph, [d(H(e.title), 1), e.content ? (F(), s("span", mh, ":")) : o("", !0)])) : W(n).title ? (F(), s("div", hh, [B(t.$slots, "title", {}, void 0, !0)])) : o("", !0), e.content ? (F(), s("div", {
			key: 2,
			class: "error-content",
			innerHTML: e.content
		}, null, 8, gh)) : W(n).content ? (F(), s("div", _h, [B(t.$slots, "content", {}, void 0, !0)])) : o("", !0)])]), e.cancelAction ? (F(), s("div", vh, [f(ka, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: q(() => [d(H(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-a63387e8"]]), bh = { class: "success" }, xh = { class: "success-item" }, Sh = { class: "success-icon" }, Ch = ["innerHTML"], wh = {
	key: 1,
	class: "success-text"
}, Th = {
	key: 0,
	class: "success-actions"
}, Eh = /*#__PURE__*/ Ta({
	__name: "Success",
	props: {
		content: {
			type: String,
			default: ""
		},
		cancelAction: {
			type: Boolean,
			default: !1
		},
		cancelText: {
			type: String,
			default: "Отменить"
		},
		cancelVariant: {
			type: String,
			default: "gray",
			validator: (e) => [
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		}
	},
	emits: ["confirm", "cancel"],
	setup(e, { emit: t }) {
		let n = oe(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return M(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), A(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (F(), s("div", bh, [c("div", xh, [c("div", Sh, [B(t.$slots, "icon", {}, () => [r[1] ||= c("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			class: "icon icon-success icon-stroke"
		}, [c("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }), c("path", { d: "M9 12l2 2l4 -4" })], -1)], !0)]), e.content ? (F(), s("div", {
			key: 0,
			class: "success-text",
			innerHTML: e.content
		}, null, 8, Ch)) : W(n).content ? (F(), s("div", wh, [B(t.$slots, "content", {}, void 0, !0)])) : o("", !0)]), e.cancelAction ? (F(), s("div", Th, [f(ka, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: q(() => [d(H(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-4a83407c"]]), Dh = R(!1), Oh = R("popup"), kh = R(""), Ah = R(""), jh = R("Подтвердить"), Mh = R("Отменить"), Nh = R(""), Ph = R("gray"), Fh = R(!0), Ih = null, Lh = (e = {}) => (kh.value = e.title ?? "", Ah.value = e.content ?? "", Oh.value = e.type ?? "popup", Dh.value = !0, new Promise((e) => {
	Ih = e;
})), Rh = (e = null) => {
	Dh.value = !1, Ih &&= (Ih(e), null);
}, zh = (e, t = {}) => (kh.value = t.title ?? "Подтверждение", Ah.value = e, jh.value = t.confirmText ?? "Подтвердить", Mh.value = t.cancelText ?? "Отменить", Nh.value = t.confirmVariant ?? "", Ph.value = t.cancelVariant ?? "gray", Oh.value = "confirm", Dh.value = !0, Fh.value = !1, new Promise((e) => {
	Ih = e;
})), Bh = (e, t = {}) => (kh.value = e, Ah.value = t.content ?? "", Mh.value = t.cancelText ?? "Понятно", Ph.value = t.cancelVariant ?? "gray", Oh.value = "error", Dh.value = !0, Fh.value = !1, new Promise((e) => {
	Ih = e;
})), Vh = (e, t = {}) => (kh.value = t.title ?? "", Ah.value = e, Mh.value = t.cancelText ?? "Понятно", Ph.value = t.cancelVariant ?? "gray", Oh.value = "success", Dh.value = !0, Fh.value = !1, new Promise((e) => {
	Ih = e;
})), Hh = (e, t = {}) => (kh.value = t.title ?? "", Ah.value = e, Mh.value = t.cancelText ?? "Понятно", Ph.value = t.cancelVariant ?? "gray", Oh.value = "warning", Dh.value = !0, Fh.value = !1, new Promise((e) => {
	Ih = e;
})), Uh = () => ({
	visible: Dh,
	type: Oh,
	title: kh,
	content: Ah,
	confirmText: jh,
	cancelText: Mh,
	showClose: Fh,
	confirmVariant: Nh,
	cancelVariant: Ph,
	popupOpen: Lh,
	popupClose: Rh,
	popupConfirm: zh,
	popupError: Bh,
	popupSuccess: Vh,
	popupWarning: Hh
}), Wh = { class: "confirm" }, Gh = { class: "confirm-actions" }, Kh = /*#__PURE__*/ Ta({
	__name: "Confirm",
	props: {
		confirmText: {
			type: String,
			default: "Подтвердить"
		},
		cancelText: {
			type: String,
			default: "Отменить"
		},
		confirmVariant: {
			type: String,
			default: "",
			validator: (e) => [
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		},
		cancelVariant: {
			type: String,
			default: "gray",
			validator: (e) => [
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		}
	},
	emits: ["confirm", "cancel"],
	setup(e, { emit: t }) {
		let n = t, r = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), n("confirm"));
		};
		return M(() => {
			document.addEventListener("keydown", r);
		}), A(() => {
			document.removeEventListener("keydown", r);
		}), (t, r) => (F(), s("div", Wh, [c("div", Gh, [f(ka, {
			variant: e.confirmVariant,
			onClick: r[0] ||= (e) => n("confirm")
		}, {
			default: q(() => [d(H(e.confirmText), 1)]),
			_: 1
		}, 8, ["variant"]), f(ka, {
			variant: e.cancelVariant,
			onClick: r[1] ||= (e) => n("cancel")
		}, {
			default: q(() => [d(H(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])]));
	}
}, [["__scopeId", "data-v-3fb94df6"]]), qh = {
	class: "popup",
	role: "dialog",
	"aria-modal": "true"
}, Jh = {
	key: 0,
	class: "popup-title"
}, Yh = ["innerHTML"], Xh = ["innerHTML"], Zh = /*#__PURE__*/ Ta({
	__name: "Popup",
	setup(e) {
		let { visible: t, type: i, title: l, content: u, confirmText: d, cancelText: p, showClose: m, confirmVariant: h, cancelVariant: g, popupClose: _ } = Uh(), v = (e) => {
			t.value && e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), _(!1));
		};
		K(t, async (e) => {
			e ? (document.addEventListener("keydown", v), document.body.classList.add("popupIsOpen"), await E()) : (document.removeEventListener("keydown", v), document.body.classList.remove("popupIsOpen"));
		}, { immediate: !0 }), A(() => {
			document.removeEventListener("keydown", v), document.body.classList.remove("popupIsOpen");
		});
		let y = () => {
			_(!1);
		};
		return (e, v) => (F(), a(n, { to: "body" }, [f(r, { name: "popup" }, {
			default: q(() => [W(t) ? (F(), s("div", {
				key: 0,
				class: "popup-wrap",
				onClick: pe(y, ["self"])
			}, [c("div", qh, [
				W(l) && W(i) !== "error" ? (F(), s("div", Jh, H(W(l)), 1)) : o("", !0),
				W(u) && W(i) !== "error" && W(i) !== "success" ? (F(), s("div", {
					key: 1,
					class: "popup-content",
					innerHTML: W(u)
				}, null, 8, Yh)) : o("", !0),
				W(i) === "confirm" ? (F(), a(Kh, {
					key: 2,
					"confirm-text": W(d),
					"cancel-text": W(p),
					"confirm-variant": W(h),
					"cancel-variant": W(g),
					onConfirm: v[0] ||= (e) => W(_)(!0),
					onCancel: v[1] ||= (e) => W(_)(!1)
				}, null, 8, [
					"confirm-text",
					"cancel-text",
					"confirm-variant",
					"cancel-variant"
				])) : W(i) === "error" ? (F(), a(yh, {
					key: 3,
					title: W(l),
					content: W(u),
					"cancel-action": !0,
					"cancel-text": W(p),
					"cancel-variant": W(g),
					onCancel: v[2] ||= (e) => W(_)(!1)
				}, null, 8, [
					"title",
					"content",
					"cancel-text",
					"cancel-variant"
				])) : W(i) === "success" ? (F(), a(Eh, {
					key: 4,
					content: W(u),
					"cancel-action": !0,
					"cancel-text": W(p),
					"cancel-variant": W(g),
					onCancel: v[3] ||= (e) => W(_)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : W(i) === "warning" ? (F(), a(ch, {
					key: 5,
					content: W(u),
					"cancel-action": !0,
					"cancel-text": W(p),
					"cancel-variant": W(g),
					onCancel: v[4] ||= (e) => W(_)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : (F(), s("div", {
					key: 6,
					class: "popup-content",
					innerHTML: W(u)
				}, null, 8, Xh)),
				W(m) ? (F(), a(ka, {
					key: 7,
					class: "popup-close",
					variant: "gray",
					size: "small",
					hover: "red",
					onClick: v[5] ||= (e) => W(_)(!1)
				}, {
					default: q(() => [...v[6] ||= [c("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "icon icon-close icon-stroke"
					}, [c("path", { d: "M18 6l-12 12" }), c("path", { d: "M6 6l12 12" })], -1)]]),
					_: 1
				})) : o("", !0)
			])])) : o("", !0)]),
			_: 1
		})]));
	}
}, [["__scopeId", "data-v-5b952bdc"]]), Qh = {
	key: 0,
	class: "table-pagination"
}, $h = /*#__PURE__*/ Ta({
	__name: "TablePagination",
	props: {
		pagination: {
			type: Object,
			default: {}
		},
		navigate: {
			type: Function,
			default: null
		}
	},
	setup(e) {
		let t = e, n = (e) => `${window.location.pathname.replace(/\/page\/\d+\/?$/, "").replace(/\/+$/, "")}/page/${e}`, r = () => {
			let e = Number(t.pagination.page);
			(!e || e < 1) && (e = 1), e > t.pagination.last && (e = t.pagination.last), t.pagination.page !== e && (t.pagination.page = e), t.navigate?.(n(e));
		}, i = (e) => {
			e.target.select();
		};
		return (t, l) => e.pagination && e.pagination.last > 1 ? (F(), s("div", Qh, [
			e.pagination.prev ? (F(), a(ka, {
				key: 0,
				size: "small",
				variant: "gray",
				to: n(e.pagination.prev)
			}, {
				default: q(() => [B(t.$slots, "iconPaginationPrev", {}, () => [l[1] ||= c("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "table-pagination-icon"
				}, [
					c("path", { d: "M5 12l14 0" }),
					c("path", { d: "M5 12l4 4" }),
					c("path", { d: "M5 12l4 -4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : o("", !0),
			l[3] ||= d(" Страница ", -1),
			f(Fa, {
				type: "number",
				modelValue: e.pagination.page,
				"onUpdate:modelValue": l[0] ||= (t) => e.pagination.page = t,
				min: "1",
				max: e.pagination.last,
				onFocus: i,
				onKeydown: fe(r, ["enter"])
			}, null, 8, ["modelValue", "max"]),
			l[4] ||= d(" из ", -1),
			c("strong", null, H(e.pagination.last), 1),
			e.pagination.next ? (F(), a(ka, {
				key: 1,
				size: "small",
				variant: "gray",
				to: n(e.pagination.next)
			}, {
				default: q(() => [B(t.$slots, "iconPaginationNext", {}, () => [l[2] ||= c("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "table-pagination-icon"
				}, [
					c("path", { d: "M5 12l14 0" }),
					c("path", { d: "M15 16l4 -4" }),
					c("path", { d: "M15 8l4 4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : o("", !0)
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-8262809b"]]), eg = {
	key: 0,
	class: "table-footer-actions__left"
}, tg = { class: "table-footer-actions__right" }, ng = /*#__PURE__*/ Ta({
	__name: "TableFooter",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
		},
		pagination: {
			type: Object,
			default: {}
		},
		bulk: {
			type: Boolean,
			default: !1
		},
		actions: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Array,
			required: !0
		},
		tableWrap: {
			type: Object,
			required: !0
		},
		table: {
			type: Object,
			required: !0
		},
		navigate: {
			type: Function,
			default: null
		},
		bulkActions: {
			type: Array,
			default: []
		}
	},
	emits: ["update:scroll-left"],
	setup(e, { expose: n, emit: r }) {
		let a = e, l = r, u = R(null), d = R(null), p = R(!1), m = R({}), h = R({}), g = R({}), _ = R(null), v = i(() => [{
			title: "Действие с выбранными",
			value: null
		}, ...a.bulkActions]), y = () => {
			if (!u.value || !a.tableWrap) return;
			let e = a.tableWrap.getBoundingClientRect(), t = u.value.offsetHeight, n = window.innerHeight, r = e.bottom, i = e.top;
			r > n && i < n - t ? p.value || (p.value = !0, h.value = {
				height: `${t}px`,
				display: "block"
			}) : (p.value = !1, m.value = {}, h.value = { display: "none" });
		}, b = () => {
			if (!p.value || !a.tableWrap || !a.table) return;
			let e = a.tableWrap.getBoundingClientRect();
			m.value = {
				width: `${a.tableWrap.clientWidth}px`,
				left: `${e.left}px`,
				overflow: "hidden"
			}, g.value = { width: `${a.table.offsetWidth}px` };
		}, x = () => {
			y(), b();
		}, S = () => {
			d.value && l("update:scroll-left", d.value.scrollLeft);
		};
		n({ syncScroll: (e) => {
			d.value && d.value.scrollLeft !== e && (d.value.scrollLeft = e);
		} }), K(_, async (e) => {
			if (!e) return;
			let t = a.bulkActions.find((t) => t.value === e);
			try {
				typeof t?.action == "function" && await t.action([...a.selected]);
			} finally {
				_.value = null;
			}
		});
		let C = null;
		return M(async () => {
			window.addEventListener("scroll", x), window.addEventListener("resize", x), d.value?.addEventListener("scroll", S), await E(), x(), requestAnimationFrame(() => {
				x();
			}), C = new ResizeObserver(() => {
				x();
			}), a.tableWrap && C.observe(a.tableWrap);
		}), A(() => {
			window.removeEventListener("scroll", x), window.removeEventListener("resize", x), d.value?.removeEventListener("scroll", S), C?.disconnect();
		}), (n, r) => (F(), s(t, null, [c("div", {
			ref_key: "footer",
			ref: u,
			class: D(["table-footer", { fixed: p.value }]),
			style: k(m.value)
		}, [
			e.bulk && e.selected.length ? (F(), s("div", eg, [B(n.$slots, "iconFooterActions", {}, () => [r[1] ||= c("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "table-footer-icon"
			}, [c("path", { d: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" })], -1)], !0), f(co, {
				modelValue: _.value,
				"onUpdate:modelValue": r[0] ||= (e) => _.value = e,
				options: v.value
			}, null, 8, ["modelValue", "options"])])) : o("", !0),
			c("div", tg, [f($h, {
				pagination: e.pagination,
				navigate: e.navigate
			}, {
				iconPaginationPrev: q(() => [B(n.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: q(() => [B(n.$slots, "iconPaginationNext", {}, void 0, !0)]),
				_: 3
			}, 8, ["pagination", "navigate"])]),
			c("div", {
				ref_key: "footerScroll",
				ref: d,
				class: "table-footer-scroll"
			}, [c("div", {
				class: "table-footer-scroll-content",
				style: k(g.value)
			}, null, 4)], 512)
		], 6), c("div", {
			class: "table-footer-placeholder",
			style: k(h.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-86b580c7"]]), rg = ["onClick"], ig = { class: "table-row__sortable-title" }, ag = "table-sort", og = /*#__PURE__*/ Ta({
	__name: "TableHeader",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
		},
		bulk: {
			type: Boolean,
			default: !1
		},
		actions: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Array,
			required: !0
		},
		tableWrap: {
			type: Object,
			required: !0
		},
		table: {
			type: Object,
			required: !0
		},
		sort: {
			type: Object,
			default: {}
		}
	},
	emits: ["update:selected", "update:sort"],
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r, l = R(null), p = R(!1), m = R({}), h = R({}), g = R({}), _ = R({}), v = R({}), y = (e) => {
			e.target && a("update:selected", e.target.checked ? i.items.map((e) => e.id) : []);
		}, b = (e) => i.columns.find((t) => t.key === e && t.sortable), x = () => {
			try {
				let e = localStorage.getItem(ag);
				if (!e) return;
				let t = JSON.parse(e);
				if (!t?.key || !["asc", "desc"].includes(t.type) || !b(t.key)) return;
				a("update:sort", t);
			} catch {}
		}, S = (e) => {
			if (!b(e)) return;
			let t = {
				key: e,
				type: i.sort?.key === e && i.sort?.type === "asc" ? "desc" : "asc"
			};
			localStorage.setItem(ag, JSON.stringify(t)), a("update:sort", t);
		}, C = () => {
			if (!l.value || !i.tableWrap) return;
			let e = i.tableWrap.getBoundingClientRect(), t = l.value.offsetHeight;
			e.top <= 0 ? p.value || (p.value = !0, h.value = {
				height: `${t}px`,
				display: "block"
			}) : (p.value = !1, m.value = {}, h.value = { display: "none" }, g.value = { transform: "none" }, _.value = {}, v.value = {});
		}, w = () => {
			if (!i.tableWrap || !i.table || !p.value) return;
			let e = i.tableWrap, t = i.table, n = e.getBoundingClientRect();
			m.value = {
				width: `${e.clientWidth}px`,
				left: `${n.left}px`,
				overflow: "hidden"
			};
			let r = t.querySelector(".table-bulk")?.offsetWidth || 0;
			g.value = {
				width: `${t.offsetWidth}px`,
				transform: `translate3d(${r - e.scrollLeft}px, 0, 0)`
			};
			let a = t.querySelector(".table-item .table-bulk"), o = t.querySelector(".table-item .table-actions");
			if (a) {
				let t = a.getBoundingClientRect();
				v.value = {
					position: "fixed",
					left: `${t.left - n.left + e.scrollLeft - r}px`
				};
			}
			if (o) {
				let t = o.getBoundingClientRect();
				_.value = {
					position: "fixed",
					right: "auto",
					left: `${t.left - n.left + e.scrollLeft - r}px`
				};
			}
		}, O = () => {
			C(), w();
		};
		n({ syncScroll: (e) => {
			w();
		} });
		let j = null;
		return M(async () => {
			x(), window.addEventListener("scroll", O), window.addEventListener("resize", O), await E(), O(), requestAnimationFrame(() => {
				O();
			}), j = new ResizeObserver(() => {
				O();
			}), i.tableWrap && j.observe(i.tableWrap);
		}), A(() => {
			window.removeEventListener("scroll", O), window.removeEventListener("resize", O), j?.disconnect();
		}), (n, r) => (F(), s(t, null, [c("div", {
			ref_key: "header",
			ref: l,
			class: D(["table-header", { fixed: p.value }]),
			style: k(m.value)
		}, [c("div", {
			class: "table-header-inner",
			style: k(g.value)
		}, [
			e.bulk ? (F(), s("div", {
				key: 0,
				class: "table-bulk",
				style: k(v.value)
			}, [f(th, {
				"model-value": e.selected.length === e.items.length && e.items.length > 0,
				onChange: y
			}, null, 8, ["model-value"])], 4)) : o("", !0),
			(F(!0), s(t, null, z(e.columns, (e) => (F(), s("div", T({
				key: e.key,
				class: { "table-row__grow": e.grow },
				style: {
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px",
					sortable: e.sortable
				}
			}, { ref_for: !0 }, e.label ? { title: e.label } : {}), [e.sortable ? (F(), s("div", {
				key: 0,
				class: "table-row__sortable",
				onClick: (t) => S(e.key)
			}, [
				c("div", ig, H(e.title), 1),
				i.sort?.key === e.key && i.sort?.type === "desc" ? B(n.$slots, "iconHeaderSortDesc", {}, () => [r[0] ||= u("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l9 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l7 0\" data-v-6e19f0ae></path><path d=\"M15 15l3 3l3 -3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 0) : o("", !0),
				i.sort?.key === e.key && i.sort?.type === "asc" ? B(n.$slots, "iconHeaderSortAsc", {}, () => [r[1] ||= u("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l7 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l9 0\" data-v-6e19f0ae></path><path d=\"M15 9l3 -3l3 3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 1) : o("", !0)
			], 8, rg)) : o("", !0), c("template", null, [d(H(e.title), 1)])], 16))), 128)),
			e.actions ? (F(), s("div", {
				key: 1,
				class: "table-actions",
				style: k(_.value)
			}, "Действия", 4)) : o("", !0)
		], 4)], 6), c("div", {
			class: "table-header-placeholder",
			style: k(h.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-6e19f0ae"]]), sg = ["onMousedown", "onMouseenter"], cg = {
	key: 1,
	class: "table-actions"
}, lg = /*#__PURE__*/ Ta({
	__name: "TableItems",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
		},
		bulk: {
			type: Boolean,
			default: !1
		},
		actions: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Array,
			required: !0
		}
	},
	emits: ["update:selected"],
	setup(e, { emit: n }) {
		let r = e, i = n, a = R(!1), c = R(!1), l = R(!1), u = R(null), p = (e, t) => typeof e.format == "function" ? e.format(t[e.key], t) : t[e.key], m = (e) => {
			a.value = !0, l.value = !1, u.value = e, c.value = !r.selected.includes(e.id);
		}, h = (e) => {
			if (!a.value) return;
			l.value = !0;
			let t = new Set(r.selected);
			u.value && (c.value ? t.add(u.value.id) : t.delete(u.value.id)), c.value ? t.add(e.id) : t.delete(e.id), i("update:selected", [...t]), u.value = null;
		}, g = () => {
			a.value = !1, u.value = null;
		}, _ = (e) => {
			a.value && h(e);
		}, v = (e) => {
			l.value && (e.preventDefault(), e.stopPropagation());
		};
		return M(() => {
			window.addEventListener("mouseup", g);
		}), A(() => {
			window.removeEventListener("mouseup", g);
		}), (n, r) => (F(!0), s(t, null, z(e.items, (a, c) => (F(), s("div", {
			key: c,
			class: D(["table-item", { "table-item__selected": e.selected.includes(a.id) }])
		}, [
			e.bulk ? (F(), s("div", {
				key: 0,
				class: "table-bulk",
				onMousedown: (e) => m(a),
				onMouseenter: (e) => _(a),
				onClick: v
			}, [f(th, {
				"model-value": e.selected,
				value: a.id,
				"onUpdate:modelValue": r[0] ||= (e) => i("update:selected", e)
			}, null, 8, ["model-value", "value"])], 40, sg)) : o("", !0),
			(F(!0), s(t, null, z(e.columns, (e) => (F(), s("div", {
				key: e.key,
				class: D({ "table-row__grow": e.grow }),
				style: k({
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px"
				})
			}, [B(n.$slots, `cell-${e.key}`, {
				item: a,
				value: a[e.key]
			}, () => [d(H(p(e, a)), 1)], !0)], 6))), 128)),
			e.actions ? (F(), s("div", cg, [B(n.$slots, "actions", { item: a }, void 0, !0)])) : o("", !0)
		], 2))), 128));
	}
}, [["__scopeId", "data-v-acb86dea"]]), ug = {
	key: 1,
	class: "table-empty"
}, dg = /*#__PURE__*/ Ta({
	__name: "Table",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
		},
		pagination: {
			type: Object,
			default: {}
		},
		bulk: {
			type: Boolean,
			default: !1
		},
		actions: {
			type: Boolean,
			default: !1
		},
		bulkActions: {
			type: Array,
			default: () => []
		},
		sort: {
			type: Object,
			default: {}
		},
		textEmpty: {
			type: String,
			default: "нет записей"
		},
		navigate: {
			type: Function,
			default: null
		},
		bulkWidth: {
			type: [Number, String],
			default: 30
		},
		actionsWidth: {
			type: [Number, String],
			default: 100
		}
	},
	emits: ["update:sort"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = R(null), a = R(null), o = R(null), u = R(null), d = R([]), p = () => {
			if (!i.value) return;
			let e = i.value.scrollLeft;
			o.value?.syncScroll(e), u.value?.syncScroll(e);
		}, m = (e) => {
			i.value && (i.value.scrollLeft = e);
		}, h = (e) => {
			r("update:sort", e);
		}, g = async () => {
			await E(), i.value && (i.value.removeEventListener("scroll", p), i.value.addEventListener("scroll", p));
		};
		return K(() => n.items.length, async () => {
			if (!n.items.length) {
				d.value = [];
				return;
			}
			await g();
		}), K(() => [
			n.sort?.key,
			n.sort?.type,
			n.pagination?.page
		], () => {
			d.value = [];
		}), M(async () => {
			await g();
		}), A(() => {
			i.value?.removeEventListener("scroll", p);
		}), (t, n) => e.items.length ? (F(), s("div", {
			key: 0,
			ref_key: "tableWrap",
			ref: i,
			class: "table-wrap",
			style: k({
				"--table-bulk-width": `${e.bulkWidth}px`,
				"--table-actions-width": `${e.actionsWidth}px`
			})
		}, [c("div", {
			ref_key: "table",
			ref: a,
			class: "table"
		}, [
			f(og, {
				ref_key: "header",
				ref: o,
				columns: e.columns,
				items: e.items,
				bulk: e.bulk,
				actions: e.actions,
				"table-wrap": i.value,
				table: a.value,
				sort: e.sort,
				"onUpdate:sort": h,
				selected: d.value,
				"onUpdate:selected": n[0] ||= (e) => d.value = e
			}, {
				iconHeaderSortDesc: q(() => [B(t.$slots, "iconHeaderSortDesc", {}, void 0, !0)]),
				iconHeaderSortAsc: q(() => [B(t.$slots, "iconHeaderSortAsc", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"columns",
				"items",
				"bulk",
				"actions",
				"table-wrap",
				"table",
				"sort",
				"selected"
			]),
			f(lg, {
				columns: e.columns,
				items: e.items,
				bulk: e.bulk,
				actions: e.actions,
				selected: d.value,
				"onUpdate:selected": n[1] ||= (e) => d.value = e
			}, l({
				actions: q((e) => [B(t.$slots, "actions", O(_(e)), void 0, !0)]),
				_: 2
			}, [z(e.columns, (e) => ({
				name: `cell-${e.key}`,
				fn: q((n) => [B(t.$slots, `cell-${e.key}`, O(_(n)), void 0, !0)])
			}))]), 1032, [
				"columns",
				"items",
				"bulk",
				"actions",
				"selected"
			]),
			f(ng, {
				ref_key: "footer",
				ref: u,
				columns: e.columns,
				items: e.items,
				pagination: e.pagination,
				bulk: e.bulk,
				actions: e.actions,
				"bulk-actions": e.bulkActions,
				selected: d.value,
				"table-wrap": i.value,
				table: a.value,
				navigate: e.navigate,
				"onUpdate:scrollLeft": m
			}, {
				iconPaginationPrev: q(() => [B(t.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: q(() => [B(t.$slots, "iconPaginationNext", {}, void 0, !0)]),
				iconFooterActions: q(() => [B(t.$slots, "iconFooterActions", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"columns",
				"items",
				"pagination",
				"bulk",
				"actions",
				"bulk-actions",
				"selected",
				"table-wrap",
				"table",
				"navigate"
			])
		], 512)], 4)) : (F(), s("div", ug, H(e.textEmpty), 1));
	}
}, [["__scopeId", "data-v-ec7fece0"]]);
//#endregion
export { ca as ApiError, Ra as SndAutocomplete, ka as SndBtn, th as SndCheckbox, ja as SndCookie, yh as SndError, Fa as SndInput, uo as SndInputCity, Jm as SndInputDate, Xm as SndInputPassword, ro as SndInputPhone, Zh as SndPopup, Da as SndProgress, co as SndSelect, Eh as SndSuccess, dg as SndTable, ch as SndWarning, _a as captcha, Sa as declension, la as get, xi as getClient, bi as initApi, wa as isEmpty, fa as patch, ua as post, da as put, pa as remove, ma as request, Ca as setTitle, ga as useAuth, Uh as usePopup };
