import e from "axios";
import { defineStore as t } from "pinia";
import * as n from "vue";
import { Fragment as r, Teleport as i, Transition as a, computed as o, createBlock as s, createCommentVNode as c, createElementBlock as l, createElementVNode as u, createSlots as d, createStaticVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, guardReactiveProps as g, h as _, inject as v, mergeDefaults as y, mergeProps as b, nextTick as x, normalizeClass as S, normalizeProps as C, normalizeStyle as w, onBeforeUnmount as T, onBeforeUpdate as E, onMounted as D, onUnmounted as O, openBlock as k, provide as A, reactive as j, readonly as M, ref as N, renderList as P, renderSlot as F, resolveComponent as ee, resolveDynamicComponent as I, shallowRef as te, toDisplayString as L, toRef as R, toValue as z, unref as B, useSlots as ne, useTemplateRef as V, vModelCheckbox as H, vModelDynamic as U, vModelSelect as W, vShow as re, watch as G, withCtx as K, withDirectives as ie, withKeys as q, withModifiers as J } from "vue";
// \0rolldown/runtime.js
var ae = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, se = Object.getOwnPropertyNames, ce = Object.prototype.hasOwnProperty, le = (e, t) => {
	let n = {};
	for (var r in e) ae(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ae(n, Symbol.toStringTag, { value: "Module" }), n;
}, ue = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = se(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ce.call(e, s) && s !== n && ae(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = oe(t, s)) || r.enumerable
	});
	return e;
}, de = (e, t, n) => (ue(e, t, "default"), n && ue(n, t, "default")), fe = {
	router: null,
	baseURL: "",
	routeAfterLogin: "/app/",
	routeAfterLogout: "/",
	urlUserInfo: "/auth/me",
	urlLogin: "/auth/login",
	urlLogout: "/auth/logout",
	onUnauthorized: null,
	onLogout: null
}, pe = (e = {}) => {
	fe = {
		...fe,
		...e
	};
}, me = () => fe, he = null, ge = () => (he = e.create({
	baseURL: me().baseURL,
	withCredentials: !0,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
}), he), _e = () => {
	if (!he) throw Error("@sendelius/vue: initApi() должен быть запущен до getClient().");
	return he;
}, ve = class extends Error {
	constructor({ status: e = null, data: t = null } = {}) {
		let n = t?.error, r = {
			code: n?.code ?? "UNKNOWN_ERROR",
			message: n?.message ?? "неизвестная ошибка",
			field: n?.field ?? null
		};
		super(r.message), this.name = "ApiError", this.status = e, this.data = t, this.error = r, this.field = r.field;
	}
};
// src/api/requests.js
async function ye(e, t = {}, n = {}) {
	return we("get", e, {
		params: t,
		...n
	});
}
async function be(e, t = {}, n = {}) {
	return we("post", e, t, n);
}
async function xe(e, t = {}, n = {}) {
	return we("put", e, t, n);
}
async function Se(e, t = {}, n = {}) {
	return we("patch", e, t, n);
}
async function Ce(e, t = {}, n = {}) {
	return we("delete", e, t, n);
}
async function we(e, t, n = {}, r = {}) {
	let i;
	try {
		i = e === "get" ? await _e().get(t, n) : e === "delete" ? await _e().delete(t, {
			data: n,
			...r
		}) : await _e()[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && me().onUnauthorized?.(), new ve({
			status: e.response?.status ?? null,
			data: e.response?.data ?? null
		});
	}
	let a = i.data;
	if (a?.status !== "success") throw new ve({
		status: i.status,
		data: a
	});
	return a;
}
// src/auth/auth.js
var Te = t("auth", {
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
				let e = await ye(me().urlUserInfo);
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
				await be(me().urlLogin, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = me().router;
				return r && await r.push(me().routeAfterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await Ce(me().urlLogout);
			} finally {
				this.clear(), me().onLogout?.();
				let e = me().router;
				e && await e.push(me().routeAfterLogout);
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
function Ee() {
	return Te();
}
// src/captcha/captcha.js
async function De() {
	let e = await Oe(), t = await Ae(e.challenge);
	return ke(e.id, t);
}
async function Oe() {
	return ye("/captcha/challenge");
}
async function ke(e, t) {
	return (await be("/captcha/verify", {
		id: e,
		nonce: t
	}))?.token;
}
async function Ae(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await je(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function je(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
// src/captcha/store.js
var Me = t("captcha", () => {
	let e = N(""), t = N(!1), n = N(!1), r = null;
	return {
		token: e,
		isInit: t,
		isLoading: n,
		init: async () => t.value ? e.value : r || (n.value = !0, r = De().then((n) => (e.value = n, t.value = !0, n)).finally(() => {
			n.value = !1, r = null;
		}), r)
	};
});
function Ne() {
	return Me();
}
// src/helpers/declension.js
function Pe(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
// src/helpers/title.js
function Fe(e, t, n) {
	n ||= " - ", t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
// src/helpers/objects.js
function Ie(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
// \0plugin-vue:export-helper
var Le = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Re = {
	key: 0,
	class: "progress"
}, ze = /*#__PURE__*/ Le({
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
		return (t, n) => e.show ? (k(), l("div", Re, [e.label ? (k(), l(r, { key: 0 }, [p(L(e.label) + " ...", 1)], 64)) : c("", !0), n[0] ||= u("span", { class: "progress-loader" }, null, -1)])) : c("", !0);
	}
}, [["__scopeId", "data-v-454e3267"]]), Be = ["href"], Ve = /*#__PURE__*/ Le({
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
		let t = e, n = o(() => [{
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
			let i = ee("RouterLink");
			return e.to ? (k(), s(i, {
				key: 0,
				to: e.to,
				class: S(["btn", n.value])
			}, {
				default: K(() => [m(ze, {
					show: e.progressShow,
					label: e.progressLabel
				}, null, 8, ["show", "label"]), e.progressShow ? c("", !0) : F(t.$slots, "default", {}, void 0, !0, 0)]),
				_: 3
			}, 8, ["to", "class"])) : e.href ? (k(), l("a", {
				key: 1,
				href: e.href,
				class: S(["btn", n.value])
			}, [m(ze, {
				show: e.progressShow,
				label: e.progressLabel
			}, null, 8, ["show", "label"]), e.progressShow ? c("", !0) : F(t.$slots, "default", {}, void 0, !0, 0)], 10, Be)) : (k(), l("button", {
				key: 2,
				class: S(["btn", n.value])
			}, [m(ze, {
				show: e.progressShow,
				label: e.progressLabel
			}, null, 8, ["show", "label"]), e.progressShow ? c("", !0) : F(t.$slots, "default", {}, void 0, !0, 0)], 2));
		};
	}
}, [["__scopeId", "data-v-a0ffba5d"]]), He = {
	key: 0,
	class: "cookie"
}, Ue = /*#__PURE__*/ Le({
	__name: "Cookie",
	setup(e) {
		let t = N(!1), n = () => {
			localStorage.setItem("cookieAccepted", "1"), t.value = !1;
		};
		return D(() => {
			t.value = localStorage.getItem("cookieAccepted") !== "1";
		}), (e, r) => t.value ? (k(), l("div", He, [u("div", null, [F(e.$slots, "default", {}, void 0, !0)]), m(Ve, { onClick: n }, {
			default: K(() => [...r[0] ||= [p("Согласен", -1)]]),
			_: 1
		})])) : c("", !0);
	}
}, [["__scopeId", "data-v-40628050"]]), We = [
	"type",
	"required",
	"disabled",
	"autocomplete"
], Ge = {
	key: 0,
	class: "label"
}, Ke = {
	key: 1,
	class: "error"
}, qe = /*#__PURE__*/ Le({
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
		let r = e, i = n, a = N(null), s = N(""), d = o(() => [{
			"input-label": r.label,
			"input-error": r.error || s.value
		}]), f = o({
			get: () => r.modelValue,
			set: (e) => {
				i("update:modelValue", e), s.value = "";
			}
		}), p = () => {
			s.value = a.value?.validationMessage ?? "";
		};
		return t({
			focus: () => a.value?.focus(),
			blur: () => a.value?.blur(),
			setCustomValidity: (e) => {
				a.value?.setCustomValidity(e);
			}
		}), (t, n) => (k(), l("div", { class: S(["input", d.value]) }, [
			F(t.$slots, "before", {}, void 0, !0),
			ie(u("input", {
				ref_key: "input",
				ref: a,
				type: e.type,
				"onUpdate:modelValue": n[0] ||= (e) => f.value = e,
				placeholder: " ",
				required: e.required,
				disabled: e.disabled,
				onInvalid: J(p, ["prevent"]),
				onInput: p,
				onFocus: n[1] ||= (e) => i("focus", e),
				onBlur: n[2] ||= (e) => i("blur", e),
				autocomplete: e.autocompleteOff ? "off" : null
			}, null, 40, We), [[U, f.value]]),
			e.label ? (k(), l("div", Ge, L(e.label), 1)) : c("", !0),
			e.error || s.value ? (k(), l("div", Ke, L(e.error || s.value), 1)) : c("", !0),
			F(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-03732987"]]), Je = ["onMousedown"], Ye = {
	key: 0,
	class: "autocomplete-empty"
}, Xe = /*#__PURE__*/ Le({
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
	setup(e, { expose: t, emit: n }) {
		let a = e, o = n, u = N(null), d = N(null), f = N(null), h = N(a.modelValue), g = N([]), _ = N(-1), v = N(!1), y = N(!1), b = N(!1), C = N({}), E = N({
			"autocomplete-dropdown__top": !1,
			"autocomplete-dropdown__bottom": !0
		}), O = null, A = 0, j = () => {
			v.value = !1, g.value = [], y.value = !1, _.value = -1;
		}, M = async () => {
			let e = h.value;
			if (!a.autocomplete || e.length < a.minLength) {
				j();
				return;
			}
			let t = ++A;
			b.value = !0, v.value = !0, g.value = [], y.value = !1, _.value = -1;
			try {
				let n = await a.autocomplete(e);
				if (t !== A) return;
				g.value = n ?? [], y.value = g.value.length === 0, _.value = g.value.length ? 0 : -1;
			} catch {
				if (t !== A) return;
				g.value = [], y.value = !1, _.value = -1;
			} finally {
				t === A && (b.value = !1);
			}
			await x(), B();
		}, ee = () => {
			clearTimeout(O), h.value.length < a.minLength ? (A++, j(), b.value = !1) : O = setTimeout(M, a.delay);
		}, I = (e) => {
			j(), o("select", e);
		}, te = (e) => {
			if (g.value.length) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), _.value++, _.value >= g.value.length && (_.value = 0);
					break;
				case "ArrowUp":
					e.preventDefault(), _.value--, _.value < 0 && (_.value = g.value.length - 1);
					break;
				case "Enter":
					e.preventDefault(), _.value >= 0 && I(g.value[_.value]);
					break;
				case "Escape": e.preventDefault(), j();
			}
		}, L = async (e) => {
			o("focus", e), h.value.length >= a.minLength && (v.value = !0, await x(), B());
		}, R = (e) => {
			o("blur", e);
		}, z = (e) => {
			u.value?.contains(e.target) || f.value?.contains(e.target) || j();
		}, B = () => {
			if (!u.value) return;
			let e = u.value.getBoundingClientRect(), t = f.value?.offsetHeight ?? 0, n = window.innerHeight - e.bottom, r = e.top;
			t && n < t && r >= t ? (C.value = {
				bottom: `${window.innerHeight - e.top}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				top: "auto"
			}, E.value = {
				"autocomplete-dropdown__top": !0,
				"autocomplete-dropdown__bottom": !1
			}) : (C.value = {
				top: `${e.bottom}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				bottom: "auto"
			}, E.value = {
				"autocomplete-dropdown__top": !1,
				"autocomplete-dropdown__bottom": !0
			});
		};
		G(() => a.modelValue, (e) => {
			h.value = e;
		}), G(() => a.modelValue, (e) => {
			h.value = e;
		});
		let ne = (e) => {
			h.value = e, o("update:modelValue", e), ee();
		};
		return D(() => {
			document.addEventListener("mousedown", z), window.addEventListener("resize", B), window.addEventListener("scroll", B, !0);
		}), T(() => {
			clearTimeout(O), document.removeEventListener("mousedown", z), window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0);
		}), t({
			focus: () => d.value?.focus(),
			blur: () => d.value?.blur()
		}), (t, n) => (k(), l("div", {
			ref_key: "autocomplete",
			ref: u,
			class: S(["autocomplete", { "show-dropdown": v.value && (g.value.length || y.value) }])
		}, [m(qe, {
			ref_key: "input",
			ref: d,
			"model-value": h.value,
			label: e.label,
			error: e.error,
			required: e.required,
			autocompleteOff: "",
			"onUpdate:modelValue": ne,
			onFocus: L,
			onBlur: R,
			onKeydown: te
		}, {
			before: K(() => [F(t.$slots, "before", {}, void 0, !0)]),
			after: K(() => [m(ze, { show: b.value }, null, 8, ["show"]), (k(), s(i, { to: "body" }, [v.value && (g.value.length || y.value) ? (k(), l("div", {
				key: 0,
				ref_key: "dropdown",
				ref: f,
				class: S(["autocomplete-dropdown", E.value]),
				style: w(C.value)
			}, [(k(!0), l(r, null, P(g.value, (e, n) => (k(), l("div", {
				key: e.id,
				class: S({ active: n === _.value }),
				onMousedown: J((t) => I(e), ["prevent"])
			}, [F(t.$slots, "default", {
				item: e,
				index: n
			}, void 0, !0)], 42, Je))), 128)), y.value ? (k(), l("div", Ye, [F(t.$slots, "empty", {}, () => [n[0] ||= p(" Ничего не найдено ", -1)], !0)])) : c("", !0)], 6)) : c("", !0)]))]),
			_: 3
		}, 8, [
			"model-value",
			"label",
			"error",
			"required"
		])], 2));
	}
}, [["__scopeId", "data-v-d783e5e2"]]), Ze = Object.defineProperty, Qe = (e, t, n) => t in e ? Ze(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, $e = (e, t, n) => Qe(e, typeof t == "symbol" ? t : t + "", n), et = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, tt = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), nt = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), rt = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = nt(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = tt(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = nt(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = tt(d, s, c), r + d;
}, it = (e) => JSON.parse(e.replaceAll("'", "\"")), at = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = st(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = ot(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = ot(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = ot(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = ct(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = ot(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, ot = (e) => e === "" || !!JSON.parse(e), st = (e) => e.startsWith("[") && e.endsWith("]") ? it(e) : e, ct = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return it(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: lt() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, lt = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, ut = class {
	constructor(e = {}) {
		$e(this, "opts", {}), $e(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...et,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = lt() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = et;
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
		if (this.opts.number != null) return rt(e, n, this.opts);
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
}, dt = [
	"text",
	"search",
	"url",
	"tel",
	"password"
], ft = class {
	constructor(e, t = {}) {
		$e(this, "items", /* @__PURE__ */ new Map()), $e(this, "eventAbortController"), $e(this, "onInput", (e) => {
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
		let t = this.getOptions(this.options);
		for (let n of e) {
			if (!dt.includes(n.type)) return;
			if (!this.items.has(n)) {
				let { signal: e } = this.eventAbortController;
				n.addEventListener("input", this.onInput, {
					capture: !0,
					signal: e
				});
			}
			let e = new ut(at(n, t));
			this.items.set(n, e), queueMicrotask(() => this.updateValue(n));
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
}, pt = /* @__PURE__ */ new WeakMap(), mt = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, ht = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || !dt.includes(r.type)) return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			mt(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	pt.has(r) ? (n = pt.get(r)) == null || n.update(i) : pt.set(r, new ft(r, i));
}, gt = {
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
		let n = e, r = t, i = o({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = o(() => n.country === "BY" ? "+375 (##) ###-##-##" : "+7 (###) ###-##-##");
		return G(() => n.country, () => {
			r("update:modelValue", "");
		}), (t, n) => ie((k(), s(qe, {
			modelValue: i.value,
			"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
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
		])), [[B(ht), a.value]]);
	}
}, _t = ["required", "disabled"], vt = ["value", "disabled"], yt = {
	key: 0,
	class: "label"
}, bt = {
	key: 1,
	class: "error"
}, xt = /*#__PURE__*/ Le({
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
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, s = N(null), d = N(""), f = o(() => [{
			"select-label": i.label,
			"select-error": i.error || d.value,
			"select-disabled": i.disabled
		}]), p = () => {
			d.value = s.value?.validationMessage ?? "";
		}, m = o({
			get: () => i.modelValue,
			set: (e) => {
				a("update:modelValue", e), d.value = "";
			}
		});
		return t({
			focus: () => s.value?.focus(),
			blur: () => s.value?.blur()
		}), (t, n) => (k(), l("div", { class: S(["select", f.value]) }, [
			F(t.$slots, "before", {}, void 0, !0),
			ie(u("select", {
				ref_key: "select",
				ref: s,
				"onUpdate:modelValue": n[0] ||= (e) => m.value = e,
				required: e.required,
				disabled: e.disabled,
				onInvalid: J(p, ["prevent"]),
				onInput: p
			}, [(k(!0), l(r, null, P(e.options, (e) => (k(), l("option", {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, L(e.title), 9, vt))), 128)), F(t.$slots, "options", {}, void 0, !0)], 40, _t), [[W, m.value]]),
			e.label ? (k(), l("div", yt, L(e.label), 1)) : c("", !0),
			e.error || d.value ? (k(), l("div", bt, L(e.error || d.value), 1)) : c("", !0),
			F(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-60f9f346"]]), St = { class: "input-city" }, Ct = /*#__PURE__*/ Le({
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
		let r = e, i = n, a = [{
			title: "🇷🇺 Россия",
			value: "RU"
		}, {
			title: "🇧🇾 Беларусь",
			value: "BY"
		}], s = o({
			get: () => r.city,
			set: (e) => i("update:city", e)
		}), c = o({
			get: () => r.region,
			set: (e) => i("update:region", e)
		}), d = o({
			get: () => r.country,
			set: (e) => i("update:country", e)
		}), f = N(null), h = N(!1), g = o(() => !!f.value && f.value.city === s.value && f.value.country === d.value), _ = o(() => r.error ? r.error : !h.value || !s.value || g.value ? "" : "Выберите город из списка"), v = async (e) => (await r.autocomplete?.(e, d.value))?.cities ?? [], y = (e) => {
			h.value = !0, f.value = e, s.value = e.city, c.value = e.region, d.value = e.country;
		};
		return G(s, (e) => {
			f.value?.city !== e && (f.value = null, c.value = "");
		}), G(d, () => {
			s.value = "", c.value = "", f.value = null;
		}), t({ validate: () => (h.value = !0, s.value ? g.value : !1) }), (t, n) => (k(), l("div", St, [m(xt, {
			options: a,
			modelValue: d.value,
			"onUpdate:modelValue": n[0] ||= (e) => d.value = e,
			label: "Страна"
		}, null, 8, ["modelValue"]), m(Xe, {
			modelValue: s.value,
			"onUpdate:modelValue": n[1] ||= (e) => s.value = e,
			autocomplete: v,
			label: e.label,
			error: _.value,
			required: "",
			onSelect: y
		}, {
			default: K(({ item: e }) => [u("small", null, L(e.region), 1), p(" " + L(e.city), 1)]),
			empty: K(() => [...n[2] ||= [p(" Город не найден ", -1)]]),
			_: 1
		}, 8, [
			"modelValue",
			"label",
			"error"
		])]));
	}
}, [["__scopeId", "data-v-cf7e5a0c"]]), wt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Tt = Object.prototype.toString, Et = (e) => Tt.call(e) === "[object Object]", Dt = () => {}, Ot = /* #__PURE__ */ kt();
function kt() {
	var e, t;
	return wt && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function At(e) {
	return Array.isArray(e) ? e : [e];
}
function jt(e, t, n) {
	return G(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/@vueuse/core/dist/index.js
var Mt = wt ? window : void 0;
wt && window.document, wt && window.navigator, wt && window.location;
function Nt(e) {
	let t = z(e);
	return t?.$el ?? t;
}
function Pt(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = o(() => {
		let t = At(z(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return jt(() => [
		n.value?.map((e) => Nt(e)) ?? [Mt].filter((e) => e != null),
		At(z(n.value ? e[1] : e[0])),
		At(B(n.value ? e[2] : e[1])),
		z(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Et(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Ft = !1;
function It(e, t, n = {}) {
	let { window: r = Mt, ignore: i = [], capture: a = !0, detectIframe: o = !1, controls: s = !1 } = n;
	if (!r) return s ? {
		stop: Dt,
		cancel: Dt,
		trigger: Dt
	} : Dt;
	if (Ot && !Ft) {
		Ft = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", Dt, e)), r.document.documentElement.addEventListener("click", Dt, e);
	}
	let c = !0, l = (e) => z(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = Nt(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function u(e) {
		let t = z(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function d(e, t) {
		let n = z(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let f = (n) => {
		let r = Nt(e);
		n.target != null && (!(r instanceof Element) && u(e) && d(e, n) || r && r !== n.target && !n.composedPath().includes(r) && ("detail" in n && n.detail === 0 && (c = !l(n)), c ? t(n) : c = !0));
	}, p = !1, m = [
		Pt(r, "click", (e) => {
			p || (p = !0, setTimeout(() => {
				p = !1;
			}, 0), f(e));
		}, {
			passive: !0,
			capture: a
		}),
		Pt(r, "pointerdown", (t) => {
			let n = Nt(e);
			c = !l(t) && !(!n || t.composedPath().includes(n));
		}, { passive: !0 }),
		o && Pt(r, "blur", (n) => {
			setTimeout(() => {
				let i = Nt(e), a = r.document.activeElement;
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
function Lt(e, t = {}) {
	let { threshold: n = 50, onSwipe: r, onSwipeEnd: i, onSwipeStart: a, passive: s = !0 } = t, c = j({
		x: 0,
		y: 0
	}), l = j({
		x: 0,
		y: 0
	}), u = o(() => c.x - l.x), d = o(() => c.y - l.y), { max: f, abs: p } = Math, m = o(() => f(p(u.value), p(d.value)) >= n), h = te(!1), g = o(() => m.value ? p(u.value) > p(d.value) ? u.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), _ = (e) => [e.touches[0].clientX, e.touches[0].clientY], v = (e, t) => {
		c.x = e, c.y = t;
	}, y = (e, t) => {
		l.x = e, l.y = t;
	}, b = {
		passive: s,
		capture: !s
	}, x = [
		Pt(e, "touchstart", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			v(t, n), y(t, n), a?.(e);
		}, b),
		Pt(e, "touchmove", (e) => {
			if (e.touches.length !== 1) return;
			let [t, n] = _(e);
			y(t, n), b.capture && !b.passive && Math.abs(u.value) > Math.abs(d.value) && e.preventDefault(), !h.value && m.value && (h.value = !0), h.value && r?.(e);
		}, b),
		Pt(e, ["touchend", "touchcancel"], (e) => {
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
function Rt() {
	let e = N([]);
	return e.value.set = (t) => {
		t && e.value.push(t);
	}, E(() => {
		e.value.length = 0;
	}), e;
}
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var zt = Math.min, Bt = Math.max, Vt = Math.round, Ht = Math.floor, Ut = (e) => ({
	x: e,
	y: e
}), Wt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Gt(e, t, n) {
	return Bt(e, zt(t, n));
}
function Kt(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function qt(e) {
	return e.split("-")[0];
}
function Jt(e) {
	return e.split("-")[1];
}
function Yt(e) {
	return e === "x" ? "y" : "x";
}
function Xt(e) {
	return e === "y" ? "height" : "width";
}
function Zt(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Qt(e) {
	return Yt(Zt(e));
}
function $t(e, t, n) {
	n === void 0 && (n = !1);
	let r = Jt(e), i = Qt(e), a = Xt(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = ln(o)), [o, ln(o)];
}
function en(e) {
	let t = ln(e);
	return [
		tn(e),
		t,
		tn(t)
	];
}
function tn(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var nn = ["left", "right"], rn = ["right", "left"], an = ["top", "bottom"], on = ["bottom", "top"];
function sn(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? rn : nn : t ? nn : rn;
		case "left":
		case "right": return t ? an : on;
		default: return [];
	}
}
function cn(e, t, n, r) {
	let i = Jt(e), a = sn(qt(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(tn)))), a;
}
function ln(e) {
	let t = qt(e);
	return Wt[t] + e.slice(t.length);
}
function un(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function dn(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : un(e);
}
function fn(e) {
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
function pn(e, t, n) {
	let { reference: r, floating: i } = e, a = Zt(t), o = Qt(t), s = Xt(o), c = qt(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Jt(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function mn(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Kt(t, e), p = dn(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = fn(await i.getClippingRect({
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
	}, y = fn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var hn = 50, gn = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: mn
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = pn(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < hn && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = pn(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, _n = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Kt(e, t) || {};
		if (l == null) return {};
		let d = dn(u), f = {
			x: n,
			y: r
		}, p = Qt(i), m = Xt(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		C && await (o.isElement == null ? void 0 : o.isElement(S)) || (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = zt(d[_], T), D = zt(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = Gt(E, k, O), j = !c.arrow && Jt(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), vn = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Kt(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = qt(r), _ = Zt(o), v = qt(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [ln(o)] : en(o)), x = p !== "none";
			!d && x && b.push(...cn(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = $t(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Zt(t) || T.every((e) => Zt(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = Zt(e.placement);
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
}, yn = /*#__PURE__*/ new Set(["left", "top"]);
async function bn(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = qt(n), s = Jt(n), c = Zt(n) === "y", l = yn.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Kt(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var xn = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await bn(t, e);
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
}, Sn = function(e) {
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
			} }, ...l } = Kt(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Zt(i), p = Yt(f), m = u[p], h = u[f], g = (e, t) => Gt(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
function Cn() {
	return typeof window < "u";
}
function wn(e) {
	return Dn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tn(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function En(e) {
	return ((Dn(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Dn(e) {
	return Cn() ? e instanceof Node || e instanceof Tn(e).Node : !1;
}
function On(e) {
	return Cn() ? e instanceof Element || e instanceof Tn(e).Element : !1;
}
function kn(e) {
	return Cn() ? e instanceof HTMLElement || e instanceof Tn(e).HTMLElement : !1;
}
function An(e) {
	return !Cn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tn(e).ShadowRoot;
}
function jn(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Hn(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Mn(e) {
	return /^(table|td|th)$/.test(wn(e));
}
function Nn(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Pn = /transform|translate|scale|rotate|perspective|filter/, Fn = /paint|layout|strict|content/, In = (e) => !!e && e !== "none", Ln;
function Rn(e) {
	let t = On(e) ? Hn(e) : e;
	return In(t.transform) || In(t.translate) || In(t.scale) || In(t.rotate) || In(t.perspective) || !Bn() && (In(t.backdropFilter) || In(t.filter)) || Pn.test(t.willChange || "") || Fn.test(t.contain || "");
}
function zn(e) {
	let t = Wn(e);
	for (; kn(t) && !Vn(t);) {
		if (Rn(t)) return t;
		if (Nn(t)) return null;
		t = Wn(t);
	}
	return null;
}
function Bn() {
	return Ln ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ln;
}
function Vn(e) {
	return /^(html|body|#document)$/.test(wn(e));
}
function Hn(e) {
	return Tn(e).getComputedStyle(e);
}
function Un(e) {
	return On(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Wn(e) {
	if (wn(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || An(e) && e.host || En(e);
	return An(t) ? t.host : t;
}
function Gn(e) {
	let t = Wn(e);
	return Vn(t) ? (e.ownerDocument || e).body : kn(t) && jn(t) ? t : Gn(t);
}
function Kn(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Gn(e), i = r === e.ownerDocument?.body, a = Tn(r);
	if (i) {
		let e = qn(a);
		return t.concat(a, a.visualViewport || [], jn(r) ? r : [], e && n ? Kn(e) : []);
	}
	return t.concat(r, Kn(r, [], n));
}
function qn(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Jn(e) {
	let t = Hn(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = kn(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Vt(n) !== a || Vt(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Yn(e) {
	return On(e) ? e : e.contextElement;
}
function Xn(e) {
	let t = Yn(e);
	if (!kn(t)) return Ut(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Jn(t), o = (a ? Vt(n.width) : n.width) / r, s = (a ? Vt(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var Zn = /*#__PURE__*/ Ut(0);
function Qn(e) {
	let t = Tn(e);
	return !Bn() || !t.visualViewport ? Zn : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function $n(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Tn(e);
}
function er(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Yn(e), o = Ut(1);
	t && (r ? On(r) && (o = Xn(r)) : o = Xn(e));
	let s = $n(a, n, r) ? Qn(a) : Ut(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Tn(a), t = On(r) ? Tn(r) : r, n = e, i = qn(n);
		for (; i && t !== n;) {
			let e = Xn(i), t = i.getBoundingClientRect(), r = Hn(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Tn(i), i = qn(n);
		}
	}
	return fn({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function tr(e, t) {
	let n = Un(e).scrollLeft;
	return t ? t.left + n : er(En(e)).left + n;
}
function nr(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - tr(e, n),
		y: n.top + t.scrollTop
	};
}
function rr(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = En(r), s = t ? Nn(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Ut(1), u = Ut(0), d = kn(r);
	if ((d || !a) && ((wn(r) !== "body" || jn(o)) && (c = Un(r)), d)) {
		let e = er(r);
		l = Xn(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? nr(o, c) : Ut(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ir(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function ar(e) {
	let t = Un(e), n = e.ownerDocument.body, r = Bt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Bt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + tr(e), o = -t.scrollTop;
	return Hn(n).direction === "rtl" && (a += Bt(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var or = 25;
function sr(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Tn(e), a = En(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Bn() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (tr(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= or && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function cr(e, t) {
	let n = er(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Xn(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function lr(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = sr(e, n, t);
	else if (t === "document") r = ar(En(e));
	else if (On(t)) r = cr(t, n);
	else {
		let n = Qn(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return fn(r);
}
function ur(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Kn(e, [], !1).filter((e) => On(e) && wn(e) !== "body"), i = null, a = Hn(e).position === "fixed", o = a ? Wn(e) : e;
	for (; On(o) && !Vn(o);) {
		let e = Hn(o), t = Rn(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Wn(o);
	}
	return t.set(e, r), r;
}
function dr(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Nn(t) ? [] : ur(t, this._c) : [].concat(n), r], o = lr(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = lr(t, a[e], i);
		s = Bt(n.top, s), c = zt(n.right, c), l = zt(n.bottom, l), u = Bt(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function fr(e) {
	let { width: t, height: n } = Jn(e);
	return {
		width: t,
		height: n
	};
}
function pr(e, t, n) {
	let r = kn(t), i = En(t), a = n === "fixed", o = er(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Ut(0);
	if ((r || !a) && ((wn(t) !== "body" || jn(i)) && (s = Un(t)), r)) {
		let e = er(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = tr(i));
	let l = i && !r && !a ? nr(i, s) : Ut(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function mr(e) {
	return Hn(e).position === "static";
}
function hr(e, t) {
	if (!kn(e) || Hn(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return En(e) === n && (n = n.ownerDocument.body), n;
}
function gr(e, t) {
	let n = Tn(e);
	if (Nn(e)) return n;
	if (!kn(e)) {
		let t = Wn(e);
		for (; t && !Vn(t);) {
			if (On(t) && !mr(t)) return t;
			t = Wn(t);
		}
		return n;
	}
	let r = hr(e, t);
	for (; r && Mn(r) && mr(r);) r = hr(r, t);
	return r && Vn(r) && mr(r) && !Rn(r) ? n : r || zn(e) || n;
}
var _r = async function(e) {
	let t = this.getOffsetParent || gr, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: pr(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function vr(e) {
	return Hn(e).direction === "rtl";
}
var yr = {
	convertOffsetParentRelativeRectToViewportRelativeRect: rr,
	getDocumentElement: En,
	getClippingRect: dr,
	getOffsetParent: gr,
	getElementRects: _r,
	getClientRects: ir,
	getDimensions: fr,
	getScale: Xn,
	isElement: On,
	isRTL: vr
};
function br(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xr(e, t, n) {
	let r = null, i, a = En(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Ht(d), h = Ht(a.clientWidth - (u + f)), g = Ht(a.clientHeight - (d + p)), _ = Ht(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Bt(0, zt(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!br(l, e.getBoundingClientRect())) return s();
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
	let c = Tn(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Sr(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Yn(e), u = i || a ? [...l ? Kn(l) : [], ...t ? Kn(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? xr(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? er(e) : null;
	c && g();
	function g() {
		let t = er(e);
		h && !br(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Cr = xn, wr = Sn, Tr = vn, Er = _n, Dr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...yr,
		...i.platform,
		_c: r
	};
	return gn(e, t, {
		...i,
		platform: a
	});
}, Or = /* @__PURE__ */ le({
	Vue: () => n,
	Vue2: () => void 0,
	del: () => Mr,
	install: () => Ar,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => jr
});
import * as kr from "vue";
de(Or, kr);
function Ar() {}
function jr(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Mr(e, t) {
	Array.isArray(e) ? e.splice(t, 1) : delete e[t];
}
// node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Nr(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Pr(e) {
	if (Nr(e)) {
		let t = e.$el;
		return Dn(t) && wn(t) === "#comment" ? null : t;
	}
	return e;
}
function Fr(e) {
	return typeof e == "function" ? e() : (0, Or.unref)(e);
}
function Ir(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Pr(Fr(e.element));
			return n == null ? {} : Er({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Lr(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rr(e, t) {
	let n = Lr(e);
	return Math.round(t * n) / n;
}
function zr(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, Or.computed)(() => Fr(n.open) ?? !0), a = (0, Or.computed)(() => Fr(n.middleware)), o = (0, Or.computed)(() => Fr(n.placement) ?? "bottom"), s = (0, Or.computed)(() => Fr(n.strategy) ?? "absolute"), c = (0, Or.computed)(() => Fr(n.transform) ?? !0), l = (0, Or.computed)(() => Pr(e.value)), u = (0, Or.computed)(() => Pr(t.value)), d = (0, Or.ref)(0), f = (0, Or.ref)(0), p = (0, Or.ref)(s.value), m = (0, Or.ref)(o.value), h = (0, Or.shallowRef)({}), g = (0, Or.ref)(!1), _ = (0, Or.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Rr(u.value, d.value), n = Rr(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Lr(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Dr(l.value, u.value, {
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
		b(), r === void 0 ? y() : l.value != null && u.value != null && (v = r(l.value, u.value, y));
	}
	function S() {
		i.value || (g.value = !1);
	}
	return (0, Or.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, Or.watch)([l, u], x, { flush: "sync" }), (0, Or.watch)(i, S, { flush: "sync" }), (0, Or.getCurrentScope)() && (0, Or.onScopeDispose)(b), {
		x: (0, Or.shallowReadonly)(d),
		y: (0, Or.shallowReadonly)(f),
		strategy: (0, Or.shallowReadonly)(p),
		placement: (0, Or.shallowReadonly)(m),
		middlewareData: (0, Or.shallowReadonly)(h),
		isPositioned: (0, Or.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
var Br = 6048e5, Vr = 864e5, Hr = 6e4, Ur = 36e5, Wr = 1e3, Gr = Symbol.for("constructDateFrom");
// node_modules/date-fns/constructFrom.js
function Kr(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Gr in e ? e[Gr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
// node_modules/date-fns/toDate.js
function Y(e, t) {
	return Kr(t || e, e);
}
// node_modules/date-fns/addDays.js
function qr(e, t, n) {
	let r = Y(e, n?.in);
	return isNaN(t) ? Kr(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
// node_modules/date-fns/addMonths.js
function Jr(e, t, n) {
	let r = Y(e, n?.in);
	if (isNaN(t)) return Kr(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = Kr(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
// node_modules/date-fns/add.js
function Yr(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Y(e, n?.in), d = i || r ? Jr(u, i + r * 12) : u, f = o || a ? qr(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return Kr(n?.in || e, +f + p);
}
// node_modules/date-fns/_lib/defaultOptions.js
var Xr = {};
function Zr() {
	return Xr;
}
// node_modules/date-fns/startOfWeek.js
function Qr(e, t) {
	let n = Zr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Y(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
// node_modules/date-fns/startOfISOWeek.js
function $r(e, t) {
	return Qr(e, {
		...t,
		weekStartsOn: 1
	});
}
// node_modules/date-fns/getISOWeekYear.js
function ei(e, t) {
	let n = Y(e, t?.in), r = n.getFullYear(), i = Kr(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = $r(i), o = Kr(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = $r(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function ti(e) {
	let t = Y(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
// node_modules/date-fns/_lib/normalizeDates.js
function ni(e, ...t) {
	let n = Kr.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
// node_modules/date-fns/startOfDay.js
function ri(e, t) {
	let n = Y(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/differenceInCalendarDays.js
function ii(e, t, n) {
	let [r, i] = ni(n?.in, e, t), a = ri(r), o = ri(i), s = +a - ti(a), c = +o - ti(o);
	return Math.round((s - c) / Vr);
}
// node_modules/date-fns/startOfISOWeekYear.js
function ai(e, t) {
	let n = ei(e, t), r = Kr(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $r(r);
}
// node_modules/date-fns/addQuarters.js
function oi(e, t, n) {
	return Jr(e, t * 3, n);
}
// node_modules/date-fns/addYears.js
function si(e, t, n) {
	return Jr(e, t * 12, n);
}
// node_modules/date-fns/compareAsc.js
function ci(e, t) {
	let n = +Y(e) - Y(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
// node_modules/date-fns/isDate.js
function li(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
// node_modules/date-fns/isValid.js
function ui(e) {
	return !(!li(e) && typeof e != "number" || isNaN(+Y(e)));
}
// node_modules/date-fns/getQuarter.js
function di(e, t) {
	let n = Y(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
// node_modules/date-fns/differenceInCalendarYears.js
function fi(e, t, n) {
	let [r, i] = ni(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
// node_modules/date-fns/_lib/getRoundingMethod.js
function pi(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
// node_modules/date-fns/differenceInYears.js
function mi(e, t, n) {
	let [r, i] = ni(n?.in, e, t), a = ci(r, i), o = Math.abs(fi(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(ci(r, i) === -a));
	return s === 0 ? 0 : s;
}
// node_modules/date-fns/_lib/normalizeInterval.js
function hi(e, t) {
	let [n, r] = ni(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
// node_modules/date-fns/eachDayOfInterval.js
function gi(e, t) {
	let { start: n, end: r } = hi(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Kr(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
// node_modules/date-fns/startOfQuarter.js
function _i(e, t) {
	let n = Y(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/eachQuarterOfInterval.js
function vi(e, t) {
	let { start: n, end: r } = hi(t?.in, e), i = +n > +r, a = i ? +_i(n) : +_i(r), o = _i(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Kr(n, o)), o = oi(o, s);
	return i ? c.reverse() : c;
}
// node_modules/date-fns/startOfMonth.js
function yi(e, t) {
	let n = Y(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfYear.js
function bi(e, t) {
	let n = Y(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/startOfYear.js
function xi(e, t) {
	let n = Y(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfWeek.js
function Si(e, t) {
	let n = Zr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Y(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
// node_modules/date-fns/endOfQuarter.js
function Ci(e, t) {
	let n = Y(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var wi = {
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
}, Ti = (e, t, n) => {
	let r, i = wi[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Ei(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Di = {
	date: Ei({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ei({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ei({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Oi = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, ki = (e, t, n, r) => Oi[e];
// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Ai(e) {
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
var ji = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Ai({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Ai({
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
	month: Ai({
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
	day: Ai({
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
	dayPeriod: Ai({
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
function Mi(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Pi(s, (e) => e.test(o)) : Ni(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ni(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Pi(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Fi(e) {
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
var Ii = {
	code: "en-US",
	formatDistance: Ti,
	formatLong: Di,
	formatRelative: ki,
	localize: ji,
	match: {
		ordinalNumber: Fi({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Mi({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Mi({
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
		month: Mi({
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
		day: Mi({
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
		dayPeriod: Mi({
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
function Li(e, t) {
	let n = Y(e, t?.in);
	return ii(n, xi(n)) + 1;
}
// node_modules/date-fns/getISOWeek.js
function Ri(e, t) {
	let n = Y(e, t?.in), r = +$r(n) - ai(n);
	return Math.round(r / Br) + 1;
}
// node_modules/date-fns/getWeekYear.js
function zi(e, t) {
	let n = Y(e, t?.in), r = n.getFullYear(), i = Zr(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = Kr(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Qr(o, t), c = Kr(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Qr(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
// node_modules/date-fns/startOfWeekYear.js
function Bi(e, t) {
	let n = Zr(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = zi(e, t), a = Kr(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Qr(a, t);
}
// node_modules/date-fns/getWeek.js
function Vi(e, t) {
	let n = Y(e, t?.in), r = +Qr(n, t) - Bi(n, t);
	return Math.round(r / Br) + 1;
}
// node_modules/date-fns/_lib/addLeadingZeros.js
function Hi(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
// node_modules/date-fns/_lib/format/lightFormatters.js
var Ui = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Hi(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Hi(n + 1, 2);
	},
	d(e, t) {
		return Hi(e.getDate(), t.length);
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
		return Hi(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Hi(e.getHours(), t.length);
	},
	m(e, t) {
		return Hi(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Hi(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Hi(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Wi = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Gi = {
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
		return Ui.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = zi(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Hi(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Hi(a, t.length);
	},
	R: function(e, t) {
		return Hi(ei(e), t.length);
	},
	u: function(e, t) {
		return Hi(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Hi(r, 2);
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
			case "qq": return Hi(r, 2);
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
			case "MM": return Ui.M(e, t);
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
			case "LL": return Hi(r + 1, 2);
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
		let i = Vi(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Hi(i, t.length);
	},
	I: function(e, t, n) {
		let r = Ri(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Hi(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ui.d(e, t);
	},
	D: function(e, t, n) {
		let r = Li(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Hi(r, t.length);
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
			case "ee": return Hi(a, 2);
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
			case "cc": return Hi(a, t.length);
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
			case "ii": return Hi(i, t.length);
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
		switch (i = r === 12 ? Wi.noon : r === 0 ? Wi.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? Wi.evening : r >= 12 ? Wi.afternoon : r >= 4 ? Wi.morning : Wi.night, t) {
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
		return Ui.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ui.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Hi(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Hi(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ui.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ui.s(e, t);
	},
	S: function(e, t) {
		return Ui.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return qi(r);
			case "XXXX":
			case "XX": return Ji(r);
			default: return Ji(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return qi(r);
			case "xxxx":
			case "xx": return Ji(r);
			default: return Ji(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Ki(r, ":");
			default: return "GMT" + Ji(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Ki(r, ":");
			default: return "GMT" + Ji(r, ":");
		}
	},
	t: function(e, t, n) {
		return Hi(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Hi(+e, t.length);
	}
};
function Ki(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Hi(a, 2);
}
function qi(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Hi(Math.abs(e) / 60, 2) : Ji(e, t);
}
function Ji(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Hi(Math.trunc(r / 60), 2), a = Hi(r % 60, 2);
	return n + i + t + a;
}
// node_modules/date-fns/_lib/format/longFormatters.js
var Yi = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Xi = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Zi = {
	p: Xi,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Yi(e, t);
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
		return a.replace("{{date}}", Yi(r, t)).replace("{{time}}", Xi(i, t));
	}
}, Qi = /^D+$/, $i = /^Y+$/, ea = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function ta(e) {
	return Qi.test(e);
}
function na(e) {
	return $i.test(e);
}
function ra(e, t, n) {
	let r = ia(e, t, n);
	if (console.warn(r), ea.includes(e)) throw RangeError(r);
}
function ia(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
// node_modules/date-fns/format.js
var aa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sa = /^'([^]*?)'?$/, ca = /''/g, la = /[a-zA-Z]/;
function ua(e, t, n) {
	let r = Zr(), i = n?.locale ?? r.locale ?? Ii, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Y(e, n?.in);
	if (!ui(s)) throw RangeError("Invalid time value");
	let c = t.match(oa).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Zi[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(aa).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: da(e)
		};
		if (Gi[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(la)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && na(a) || !n?.useAdditionalDayOfYearTokens && ta(a)) && ra(a, t, String(e));
		let o = Gi[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function da(e) {
	let t = e.match(sa);
	return t ? t[1].replace(ca, "'") : e;
}
// node_modules/date-fns/getDay.js
function fa(e, t) {
	return Y(e, t?.in).getDay();
}
// node_modules/date-fns/getDaysInMonth.js
function pa(e, t) {
	let n = Y(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = Kr(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
// node_modules/date-fns/getDefaultOptions.js
function ma() {
	return Object.assign({}, Zr());
}
// node_modules/date-fns/getHours.js
function ha(e, t) {
	return Y(e, t?.in).getHours();
}
// node_modules/date-fns/getISODay.js
function ga(e, t) {
	let n = Y(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
// node_modules/date-fns/getMinutes.js
function _a(e, t) {
	return Y(e, t?.in).getMinutes();
}
// node_modules/date-fns/getMonth.js
function X(e, t) {
	return Y(e, t?.in).getMonth();
}
// node_modules/date-fns/getSeconds.js
function va(e) {
	return Y(e).getSeconds();
}
// node_modules/date-fns/getYear.js
function Z(e, t) {
	return Y(e, t?.in).getFullYear();
}
// node_modules/date-fns/isAfter.js
function ya(e, t) {
	return +Y(e) > +Y(t);
}
// node_modules/date-fns/isBefore.js
function ba(e, t) {
	return +Y(e) < +Y(t);
}
// node_modules/date-fns/isEqual.js
function xa(e, t) {
	return +Y(e) == +Y(t);
}
// node_modules/date-fns/transpose.js
function Sa(e, t) {
	let n = Ca(t) ? new t(0) : Kr(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Ca(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
// node_modules/date-fns/parse/_lib/Setter.js
var wa = 10, Ta = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Ea = class extends Ta {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Da = class extends Ta {
	priority = wa;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => Kr(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : Kr(e, Sa(e, this.context));
	}
}, Oa = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Ea(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, ka = class extends Oa {
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
}, Aa = {
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
}, ja = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
// node_modules/date-fns/parse/_lib/utils.js
function Ma(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Na(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Pa(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Ur + a * Hr + o * Wr),
		rest: t.slice(n[0].length)
	};
}
function Fa(e) {
	return Na(Aa.anyDigitsSigned, e);
}
function Ia(e, t) {
	switch (e) {
		case 1: return Na(Aa.singleDigit, t);
		case 2: return Na(Aa.twoDigits, t);
		case 3: return Na(Aa.threeDigits, t);
		case 4: return Na(Aa.fourDigits, t);
		default: return Na(RegExp("^\\d{1," + e + "}"), t);
	}
}
function La(e, t) {
	switch (e) {
		case 1: return Na(Aa.singleDigitSigned, t);
		case 2: return Na(Aa.twoDigitsSigned, t);
		case 3: return Na(Aa.threeDigitsSigned, t);
		case 4: return Na(Aa.fourDigitsSigned, t);
		default: return Na(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Ra(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function za(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function Ba(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
// node_modules/date-fns/parse/_lib/parsers/YearParser.js
var Va = class extends Oa {
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
			case "y": return Ma(Ia(4, e), r);
			case "yo": return Ma(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Ma(Ia(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = za(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Ha = class extends Oa {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return Ma(Ia(4, e), r);
			case "Yo": return Ma(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Ma(Ia(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = zi(e, r);
		if (n.isTwoDigitYear) {
			let t = za(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Qr(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Qr(e, r);
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
}, Ua = class extends Oa {
	priority = 130;
	parse(e, t) {
		return La(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = Kr(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $r(r);
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
}, Wa = class extends Oa {
	priority = 130;
	parse(e, t) {
		return La(t === "u" ? 4 : t.length, e);
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
}, Ga = class extends Oa {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Ia(t.length, e);
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
}, Ka = class extends Oa {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Ia(t.length, e);
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
}, qa = class extends Oa {
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
			case "M": return Ma(Na(Aa.month, e), r);
			case "MM": return Ma(Ia(2, e), r);
			case "Mo": return Ma(n.ordinalNumber(e, { unit: "month" }), r);
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
}, Ja = class extends Oa {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return Ma(Na(Aa.month, e), r);
			case "LL": return Ma(Ia(2, e), r);
			case "Lo": return Ma(n.ordinalNumber(e, { unit: "month" }), r);
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
function Ya(e, t, n) {
	let r = Y(e, n?.in), i = Vi(r, n) - t;
	return r.setDate(r.getDate() - i * 7), Y(r, n?.in);
}
// node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var Xa = class extends Oa {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Na(Aa.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Qr(Ya(e, n, r), r);
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
function Za(e, t, n) {
	let r = Y(e, n?.in), i = Ri(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
// node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var Qa = class extends Oa {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Na(Aa.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return $r(Za(e, n));
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
}, $a = [
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
], eo = [
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
], to = class extends Oa {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Na(Aa.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		let n = Ba(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= eo[r] : t >= 1 && t <= $a[r];
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
}, no = class extends Oa {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Na(Aa.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		return Ba(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function ro(e, t, n) {
	let r = Zr(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = Y(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return qr(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
// node_modules/date-fns/parse/_lib/parsers/DayParser.js
var io = class extends Oa {
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
		return e = ro(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, ao = class extends Oa {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return Ma(Ia(t.length, e), i);
			case "eo": return Ma(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = ro(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, oo = class extends Oa {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return Ma(Ia(t.length, e), i);
			case "co": return Ma(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = ro(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function so(e, t, n) {
	let r = Y(e, n?.in);
	return qr(r, t - ga(r, n), n);
}
// node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var co = class extends Oa {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Ia(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return Ma(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return Ma(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return Ma(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return Ma(n.day(e, {
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
		return e = so(e, n), e.setHours(0, 0, 0, 0), e;
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
}, lo = class extends Oa {
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
		return e.setHours(Ra(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, uo = class extends Oa {
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
		return e.setHours(Ra(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, fo = class extends Oa {
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
		return e.setHours(Ra(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, po = class extends Oa {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Na(Aa.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Ia(t.length, e);
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
}, mo = class extends Oa {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Na(Aa.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Ia(t.length, e);
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
}, ho = class extends Oa {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Na(Aa.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Ia(t.length, e);
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
}, go = class extends Oa {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Na(Aa.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Ia(t.length, e);
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
}, _o = class extends Oa {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Na(Aa.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, vo = class extends Oa {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Na(Aa.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Ia(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, yo = class extends Oa {
	priority = 30;
	parse(e, t) {
		return Ma(Ia(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, bo = class extends Oa {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Pa(ja.basicOptionalMinutes, e);
			case "XX": return Pa(ja.basic, e);
			case "XXXX": return Pa(ja.basicOptionalSeconds, e);
			case "XXXXX": return Pa(ja.extendedOptionalSeconds, e);
			default: return Pa(ja.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Kr(e, e.getTime() - ti(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, xo = class extends Oa {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Pa(ja.basicOptionalMinutes, e);
			case "xx": return Pa(ja.basic, e);
			case "xxxx": return Pa(ja.basicOptionalSeconds, e);
			case "xxxxx": return Pa(ja.extendedOptionalSeconds, e);
			default: return Pa(ja.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Kr(e, e.getTime() - ti(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, So = class extends Oa {
	priority = 40;
	parse(e) {
		return Fa(e);
	}
	set(e, t, n) {
		return [Kr(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Co = class extends Oa {
	priority = 20;
	parse(e) {
		return Fa(e);
	}
	set(e, t, n) {
		return [Kr(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, wo = {
	G: new ka(),
	y: new Va(),
	Y: new Ha(),
	R: new Ua(),
	u: new Wa(),
	Q: new Ga(),
	q: new Ka(),
	M: new qa(),
	L: new Ja(),
	w: new Xa(),
	I: new Qa(),
	d: new to(),
	D: new no(),
	E: new io(),
	e: new ao(),
	c: new oo(),
	i: new co(),
	a: new lo(),
	b: new uo(),
	B: new fo(),
	h: new po(),
	H: new mo(),
	K: new ho(),
	k: new go(),
	m: new _o(),
	s: new vo(),
	S: new yo(),
	X: new bo(),
	x: new xo(),
	t: new So(),
	T: new Co()
}, To = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Eo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Do = /^'([^]*?)'?$/, Oo = /''/g, ko = /\S/, Ao = /[a-zA-Z]/;
function jo(e, t, n, r) {
	let i = () => Kr(r?.in || n, NaN), a = ma(), o = r?.locale ?? a.locale ?? Ii, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : Y(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Da(r?.in, n)], d = t.match(Eo).map((e) => {
		let t = e[0];
		if (t in Zi) {
			let n = Zi[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(To), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && na(n) && ra(n, t, e), !r?.useAdditionalDayOfYearTokens && ta(n) && ra(n, t, e);
		let a = n[0], s = wo[a];
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
			if (a.match(Ao)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Mo(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && ko.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = Y(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function Mo(e) {
	return e.match(Do)[1].replace(Oo, "'");
}
// node_modules/date-fns/isSameWeek.js
function No(e, t, n) {
	let [r, i] = ni(n?.in, e, t);
	return +Qr(r, n) == +Qr(i, n);
}
// node_modules/date-fns/isSameQuarter.js
function Po(e, t, n) {
	let [r, i] = ni(n?.in, e, t);
	return +_i(r) == +_i(i);
}
// node_modules/date-fns/subDays.js
function Fo(e, t, n) {
	return qr(e, -t, n);
}
// node_modules/date-fns/roundToNearestMinutes.js
function Io(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return Kr(e, NaN);
	let r = Y(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = pi(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
// node_modules/date-fns/setMonth.js
function Lo(e, t, n) {
	let r = Y(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = Kr(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = pa(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
// node_modules/date-fns/set.js
function Q(e, t, n) {
	let r = Y(e, n?.in);
	return isNaN(+r) ? Kr(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = Lo(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
// node_modules/date-fns/setMilliseconds.js
function Ro(e, t, n) {
	let r = Y(e, n?.in);
	return r.setMilliseconds(t), r;
}
// node_modules/date-fns/setSeconds.js
function zo(e, t, n) {
	let r = Y(e, n?.in);
	return r.setSeconds(t), r;
}
// node_modules/date-fns/setYear.js
function Bo(e, t, n) {
	let r = Y(e, n?.in);
	return isNaN(+r) ? Kr(n?.in || e, NaN) : (r.setFullYear(t), r);
}
// node_modules/date-fns/subMonths.js
function Vo(e, t, n) {
	return Jr(e, -t, n);
}
// node_modules/date-fns/sub.js
function Ho(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Fo(Vo(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return Kr(n?.in || e, +u - d);
}
// node_modules/date-fns/subYears.js
function Uo(e, t, n) {
	return si(e, -t, n);
}
// node_modules/@date-fns/tz/tzName/index.js
function Wo(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
// node_modules/@date-fns/tz/tzOffset/index.js
var Go = {}, Ko = {};
function qo(e, t) {
	try {
		let n = (Go[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Ko ? Ko[n] : Yo(n, n.split(":"));
	} catch {
		if (e in Ko) return Ko[e];
		let t = e?.match(Jo);
		return t ? Yo(e, t.slice(1)) : NaN;
	}
}
var Jo = /([+-]\d\d):?(\d\d)?/;
function Yo(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Ko[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
// node_modules/@date-fns/tz/date/mini.js
var Xo = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(qo(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), es(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -qo(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), Qo(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Zo = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Zo.test(e)) return;
	let t = e.replace(Zo, "$1UTC");
	Xo.prototype[t] && (e.startsWith("get") ? Xo.prototype[e] = function() {
		return this.internal[t]();
	} : (Xo.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), $o(this), +this;
	}, Xo.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Qo(this), +this;
	}));
});
function Qo(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-qo(e.timeZone, e) * 60));
}
function $o(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), es(e);
}
function es(e, t) {
	let n = Array.isArray(t) ? ts(t) : +e.internal, r = qo(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = qo(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(qo(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = qo(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && ns(e) - n === y * 60 * 1e3 && ns(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = qo(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	Qo(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), Qo(e));
}
function ts(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function ns(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-qo(e.timeZone, n) * 60)), +n;
}
// node_modules/@date-fns/tz/date/index.js
var rs = class e extends Xo {
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
		return `${e} GMT${t}${n}${r} (${Wo(this.timeZone, this)})`;
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
function is() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [
		_("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		_("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		_("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		_("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
function as() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), _("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function os() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function ss() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function cs() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), _("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function ls() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function us() {
	return _("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp--icon",
		role: "img"
	}, [_("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var ds = Symbol("ContextKey"), fs = (e, t) => {
	let { setTimeModelValue: n } = nc(), r = tc(e), i = N(null), a = j({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = N(""), l = N([{
		month: X(s),
		year: Z(s)
	}]), u = j({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, r.range.value.enabled);
	let d = o({
		get: () => i.value,
		set: (e) => {
			i.value = e;
		}
	}), f = o(() => (e) => l.value[e] ? l.value[e].month : 0), p = o(() => (e) => l.value[e] ? l.value[e].year : 0);
	A(ds, {
		rootProps: e,
		defaults: r,
		modelValue: d,
		state: M(a),
		rootEmit: t,
		calendars: l,
		month: f,
		year: p,
		time: u,
		today: s,
		inputValue: c,
		setState: (e, t) => {
			a[e] = t;
		},
		updateTime: () => {
			n(u, d.value, s, r.range.value.enabled);
		},
		getDate: r.getDate,
		getDateFromParts: r.getDateFromParts
	});
}, ps = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e;
}({}), ms = /* @__PURE__ */ function(e) {
	return e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e;
}({}), hs = /* @__PURE__ */ function(e) {
	return e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e;
}({}), gs = [
	"timestamp",
	"date",
	"iso"
], _s = /* @__PURE__ */ function(e) {
	return e.up = "up", e.down = "down", e.left = "left", e.right = "right", e;
}({}), vs = /* @__PURE__ */ function(e) {
	return e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e;
}({}), ys = /* @__PURE__ */ function(e) {
	return e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e;
}({}), bs = Symbol("FlowKey"), xs = (e, t) => {
	let { rootEmit: n, rootProps: r, defaults: { timeConfig: i, flow: a } } = $(), s = N(), c = j({
		[ms.timePicker]: !i.value.enableTimePicker || r.timePicker || r.monthPicker || r.quarterPicker,
		[ms.calendar]: !1,
		[ms.header]: !1
	}), l = o(() => r.monthPicker || r.timePicker || r.quarterPicker), u = (e) => {
		let t = a.value?.steps.at(0);
		if (a.value?.steps?.length) {
			if (!e && l.value) return p(t);
			e && (c[e] = !0), Object.keys(c).filter((e) => !c[e]).length || p(t);
		}
	}, d = (e) => {
		if (a.value?.steps?.length && s.value === e) {
			let e = a.value.steps.at(a.value.steps.indexOf(s.value) + 1);
			e ? (s.value = e, n("flow-step", s.value), p()) : r.autoApply && x().then(() => t("auto-apply"));
		}
	}, f = (t, n, ...r) => {
		s.value === t && e.value && e.value[n]?.(...r);
	}, p = (e) => {
		e && (s.value = e), f(hs.month, "toggleMonthPicker", !0), f(hs.year, "toggleYearPicker", !0), f(hs.calendar, "toggleTimePicker", !1), f(hs.time, "toggleTimePicker", !0), (s.value === hs.hours || s.value === hs.minutes || s.value === hs.seconds) && f(s.value, "toggleTimePicker", !0, s.value);
	};
	return A(bs, {
		childMount: u,
		updateFlowStep: d,
		flowStep: M(s)
	}), { executeFlow: p };
}, $ = () => {
	let e = v(ds);
	if (!e) throw Error("Can't use context");
	return e;
}, Ss = () => {
	let e = v(bs);
	if (!e) throw Error("Can't use flow");
	return e;
}, Cs = () => {
	let { rootProps: e, state: t, defaults: { textInput: n } } = $(), r = o(() => t.arrowNavigationLevel), i = N(-1), a = N(-1);
	G(r, (e, t) => {
		y(n.value.enabled && n.value.selectOnFocus ? !0 : e === 0 && t > 0);
	});
	let s = N([]), c = N(/* @__PURE__ */ new Map()), l = () => {
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
		r.value === 0 && (i.value = e, a.value = t);
	}, f = (e) => {
		if (![
			vs.arrowUp,
			vs.arrowDown,
			vs.arrowLeft,
			vs.arrowRight
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
			case vs.arrowLeft: return p(n, r);
			case vs.arrowRight: return m(n, r);
			case vs.arrowUp: return h(n, r);
			case vs.arrowDown: return g(n, r);
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
		x().then(() => {
			l();
			let e = s.value[i.value]?.[a.value];
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
	D(() => {
		e.arrowNavigation && (y(!1), document.addEventListener("keydown", f));
	}), O(() => {
		e.arrowNavigation && document.removeEventListener("keydown", f);
	});
}, ws = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = Ds(), { convertType: r, errorMapper: i } = nc(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m, weekStart: h }, modelValue: g, updateTime: _ } = $(), { setTime: v, getWeekFromDate: y } = rc(), { formatSelectedDate: b, formatForTextInput: x } = ac();
	G(g, (e, t) => {
		o("internal-model-change", g.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && _();
	}, { deep: !0 }), G(d, (e, t) => {
		e.enabled !== t.enabled && (g.value = null, _());
	}), G(() => m.value.input, () => {
		L();
	});
	let S = (e) => e ? c.modelType ? z(e) : {
		hours: ha(e),
		minutes: _a(e),
		seconds: p.value.enableSeconds ? va(e) : 0
	} : null, C = (e) => c.modelType ? z(e) : {
		month: X(e),
		year: Z(e)
	}, w = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => T(e, Bo(a(), e))) : t(() => [Bo(a(), n[0]), n[1] ? Bo(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : Bo(a(), +n), T = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? R(e) : t, E = (e) => Array.isArray(e) ? [T(e[0], v(e[0])), T(e[1], v(e[1]))] : T(e, v(e)), D = (n) => {
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
		if (Array.isArray(e)) return e.map((e) => R(e));
		throw Error(i.dateArr("multi-dates"));
	}, k = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, A = (n) => c.modelAuto ? Array.isArray(n) ? [R(n[0]), R(n[1])] : c.autoApply ? [R(n)] : [R(n), null] : Array.isArray(n) ? t(() => n[1] ? [R(n[0]), n[1] ? R(n[1]) : e(d.value.partialRange)] : [R(n[0])], d.value.enabled) : R(n), j = () => {
		Array.isArray(g.value) && d.value.enabled && g.value.length === 1 && g.value.push(e(d.value.partialRange));
	}, M = () => {
		let t = g.value;
		return [z(t[0]), t[1] ? z(t[1]) : e(d.value.partialRange)];
	}, N = () => Array.isArray(g.value) ? g.value[1] ? M() : z(r(g.value[0])) : [], P = () => (g.value || []).map((e) => z(e)), F = (e = !1) => (e || j(), c.modelAuto ? N() : f.value.enabled ? P() : Array.isArray(g.value) ? t(() => M(), d.value.enabled) : z(r(g.value))), ee = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? E(r(e)) : c.monthPicker ? D(r(e)) : c.yearPicker ? w(r(e)) : f.value.enabled ? O(r(e)) : c.weekPicker ? k(r(e)) : A(r(e)), I = (e) => {
		if (s.isTextInputDate) return;
		let t = ee(e);
		n(r(t)) ? (g.value = r(t), L()) : (g.value = null, l.value = "");
	}, te = () => g.value ? f.value.enabled ? g.value.map((e) => b(e)).join("; ") : u.value.enabled ? x() : b(g.value) : "", L = () => {
		l.value = te();
	}, R = (e) => c.modelType ? gs.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? jo(e, m.value.input, a(), { locale: c.locale }) : jo(e, c.modelType, a(), { locale: c.locale }) : a(e), z = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? b(e) : b(e, c.modelType) : e : null, B = (e) => {
		o("update:model-value", e);
	}, ne = (e) => Array.isArray(g.value) ? f.value.enabled ? g.value.map((t) => e(t)) : [e(g.value[0]), g.value[1] ? e(g.value[1]) : null] : e(r(g.value)), V = () => {
		if (Array.isArray(g.value)) {
			let e = y(g.value[0], h.value), t = g.value[1] ? y(g.value[1], h.value) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return y(g.value, h.value).map((e) => a(e));
	}, H = (e) => B(r(ne(e))), U = () => o("update:model-value", V());
	return {
		checkBeforeEmit: () => g.value ? d.value.enabled ? d.value.partialRange ? g.value.length >= 1 : g.value.length === 2 : !!g.value : !1,
		parseExternalModelValue: I,
		formatInputValue: L,
		emitModelValue: () => (L(), c.monthPicker ? H(C) : c.timePicker ? H(S) : c.yearPicker ? H(Z) : c.weekPicker ? U() : B(F()))
	};
}, Ts = () => {
	let { defaults: { transitions: e } } = $(), t = o(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = o(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, Es = (e) => {
	let { modelValue: t } = $();
	G(t, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, Ds = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: i }, rootProps: a, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = nc(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = rc(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? a.yearPicker ? Z(t) > Z(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? a.yearPicker ? Z(t) < Z(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), o = r.value.months.map((e) => +e).includes(X(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === fa(e)) : !1, c = O(e), l = Z(e), u = l < +a.yearRange[0] || l > +a.yearRange[1];
		return !(t || n || i || o || u || s || c);
	}, w = (t, n) => f(...U(e.value.minDate, t, n)) || m(...U(e.value.minDate, t, n)), T = (t, n) => p(...U(e.value.maxDate, t, n)) || m(...U(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(a.monthPicker, a.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !gi({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = Z(e);
			return t >= +a.yearRange[0] && t <= a.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = ii(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !i.value.enableTimePicker || a.monthPicker || a.yearPicker || i.value.ignoreTimeValidation, F = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), ee = (e, t, n) => t ? e.find((e) => +e.hours === ha(t) && e.minutes === "*" || +e.minutes === _a(t) && +e.hours === ha(t)) && n : !1, I = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !ee(r, a, n) && !ee(i, o, n) && n;
	}, te = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(a.disabledTimes) ? Array.isArray(a.disabledTimes[0]) ? I(a.disabledTimes, n, e) : !n.some((t) => ee(a.disabledTimes, t, e)) : e;
	}, L = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !a.disabledTimes(n);
		return e && r;
	}, R = (e, t) => a.disabledTimes ? Array.isArray(a.disabledTimes) ? te(t, e) : L(t, e) : t, z = (t) => {
		let n = !0;
		if (!t || P()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? F(t) : t;
		return (a.maxTime || e.value.maxDate) && (n = re(a.maxTime, e.value.maxDate, "max", d(r), n)), (a.minTime || e.value.minDate) && (n = re(a.minTime, e.value.minDate, "min", d(r), n)), R(t, n);
	}, B = (t) => {
		if (!a.monthPicker) return !0;
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
	}, ne = o(() => (e) => !i.value.enableTimePicker || i.value.ignoreTimeValidation ? !0 : z(e)), V = o(() => (e) => a.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !B(e)).length : B(e) : !0), H = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? Jr(t, 1) : Vo(t, 1), a = [X(i), Z(i)];
		return r ? !T(...a) : !w(...a);
	}, U = (e, t, n) => [Q(s(e), { date: 1 }), Q(s(), {
		month: t,
		year: n,
		date: 1
	})], W = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? ba(e, t) : ya(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || xa(Q(e, i), Q(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, re = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = G(e, r[0], t), o = G(e, r[1], t);
			return W(r[0], a, n, !!t) && W(r[1], o, n, !!t) && i;
		}
		return W(r, G(e, r, t), n, !!t) && i;
	}, G = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: k,
		validateDate: C,
		validateMonthYearInRange: D,
		isDateRangeAllowed: A,
		checkMinMaxRange: N,
		isValidTime: z,
		validateMonthYear: H,
		validateMinDate: w,
		validateMaxDate: T,
		isValidDate: (e) => Array.isArray(e) ? ui(e[0]) && (!e[1] || ui(e[1])) : e ? ui(e) : !1,
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
		isTimeValid: ne,
		isMonthValid: V
	};
};
function Os(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function ks(e) {
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
function As(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ms(s, (e) => e.test(o)) : js(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function js(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Ms(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Ns(e) {
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
var Ps = {
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
}, Fs = (e, t, n) => {
	let r, i = Ps[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Is = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Ls = (e, t, n, r) => Is[e], Rs = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: ks({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: ks({
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
	month: ks({
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
	day: ks({
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
	dayPeriod: ks({
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
}, zs = {
	ordinalNumber: Ns({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: As({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: As({
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
	month: As({
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
	day: As({
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
	dayPeriod: As({
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
}, Bs = {
	code: "en-US",
	formatDistance: Fs,
	formatLong: {
		date: Os({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: Os({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: Os({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Ls,
	localize: Rs,
	match: zs,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, Vs = {
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
}, Hs = {
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
}, Us = {
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
}, Ws = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Gs = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, Ks = {
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
}, qs = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Js = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Ys = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Xs = {
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
}, Zs = {
	menuWrapRef: null,
	collapse: !1
}, Qs = {
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => Bs,
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
}, $s = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, ec = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, tc = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = nc();
	function i(t, n) {
		let r;
		return r = e.timezone ? new rs(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Q(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let a = (t, n, r = 1) => e.timezone ? new rs(t, n, r, e.timezone) : new Date(t, n, r), s = () => {
		let e = j.value.enableSeconds ? ":ss" : "", t = j.value.enableMinutes ? ":mm" : "";
		return j.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, c = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${w.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : j.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (e) => r(i(), e, j.value.enableSeconds), u = () => D.value.enabled ? j.value.startTime && Array.isArray(j.value.startTime) ? [l(j.value.startTime[0]), l(j.value.startTime[1])] : null : j.value.startTime && !Array.isArray(j.value.startTime) ? l(j.value.startTime) : null, d = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, f = (r) => {
		let a = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = i(e, p.value);
			return [t(n, a), n];
		}));
	}, p = o(() => e.monthPicker || e.yearPicker || e.quarterPicker), m = o(() => {
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
	}), h = o(() => u()), g = o(() => ({
		...Ks,
		...e.ariaLabels
	})), _ = o(() => ({
		...Js,
		...e.filters
	})), v = o(() => typeof e.transitions == "boolean" ? e.transitions ? qs : !1 : {
		...qs,
		...e.transitions
	}), y = o(() => ({
		...Gs,
		...e.actionRow
	})), b = o(() => typeof e.textInput == "object" ? {
		...Us,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : k.value.input,
		pattern: e.textInput.format ?? k.value.input,
		enabled: !0
	} : {
		...Us,
		format: k.value.input,
		pattern: k.value.input,
		enabled: e.textInput
	}), x = o(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), S = o(() => ({
		...Hs,
		...e.config
	})), C = o(() => typeof e.highlight == "function" ? e.highlight : {
		...Ws,
		...e.highlight
	}), w = o(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? ec.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? ec.hideOnOffsetDates,
		label: e.weekNumbers.label ?? ec.label
	} : e.weekNumbers ? ec : void 0), T = o(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), E = o(() => ({
		minDate: e.minDate ? i(e.minDate) : null,
		maxDate: e.maxDate ? i(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
		highlight: typeof C.value == "object" && Array.isArray(C.value.dates) ? f(C.value.dates) : C.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => [t(i(e.date), ys.DATE), e])) : null
	})), D = o(() => typeof e.range == "object" ? {
		enabled: !0,
		...Vs,
		...e.range
	} : {
		enabled: e.range,
		...Vs
	}), O = o(() => Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	}))), k = o(() => ({
		...Ys,
		...e.formats,
		input: e.formats?.input ?? c(),
		preview: e.formats?.preview ?? e.formats?.input ?? c()
	})), A = o(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), j = o(() => ({
		...Xs,
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
		flow: o(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: o(() => {
			let t = b.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...$s,
				inputmode: t,
				...e.inputAttrs
			} : {
				...$s,
				inputmode: t
			};
		}),
		floatingConfig: o(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		weekStart: o(() => e.weekStart || e.weekStart === 0 || e.weekStart === "0" ? +e.weekStart : fa(Qr(i(), { locale: e.locale }))),
		getDate: i,
		getDateFromParts: a
	};
}, nc = () => {
	let e = (e, t) => ua(e, t ?? ys.DATE), t = (e, t) => e ? ys.MONTH_AND_YEAR : t ? ys.YEAR : ys.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => "a[href], area[href], input:not([disabled]):not([type='hidden']), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex='-1']), [data-datepicker-instance]", o = (e, t) => {
		let n = [...document.querySelectorAll(a())];
		n = n.filter((t) => !e.contains(t) || "datepicker-instance" in t.dataset);
		let r = n.indexOf(e);
		if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
	}, s = (e) => String(e).padStart(2, "0"), c = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), l = (e, t, n = !1) => {
		e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
	}, u = (e, t, n = !1, r = !0, i) => {
		if (e.key === vs.enter || e.key === vs.space && r) return n && e.preventDefault(), t();
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
			hours: ha,
			minutes: _a,
			seconds: va
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
				hours: ha(e),
				minutes: _a(e),
				seconds: n ? va(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, rc = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = nc(), r = (t, n) => {
		if (!t) return e();
		let r = Q(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? yi(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Q(r, {
			hours: +(t.hours ?? ha(r)),
			minutes: +(t.minutes ?? _a(r)),
			seconds: +(t.seconds ?? va(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [Qr(e, { weekStartsOn: +t }), Si(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : ba(r(e), r(t)), s = (e, t) => !e || !t ? !1 : xa(r(e), r(t)), c = (e, t) => !e || !t ? !1 : ya(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => gi({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${ua(e, "yyyy-MM-dd")}`, f = (t) => r(Q(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = Z(e(n));
			if (r > t) return 12;
			if (r === t) return X(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = Z(e(n));
			return r < t ? -1 : r === t ? X(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return Z(e(t));
	}, g = (e) => ({
		hours: ha(e),
		minutes: _a(e),
		seconds: va(e)
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
			before: Fo(r(t), e),
			after: qr(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, ic = () => {
	let { defaults: { config: e } } = $(), t = N(0);
	D(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), O(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: o(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, ac = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => ua(Bo(e(), t), i.value.year, { locale: r.locale }), s = (t) => ua(Lo(e(), t), i.value.month, { locale: r.locale }), c = (e) => ua(e, i.value.weekDay, { locale: r.locale }), l = (e) => ua(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => ua(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${ua(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? ua(e[1], s, c) : ""}` : ua(e, s, c);
	}, p = () => {
		let e = (e) => ua(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])}${a.value.rangeSeparator}${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : typeof a.value.format == "function" ? a.value.format(n.value) : ua(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, oc = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = ac();
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
}, sc = (e) => ({
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
}), cc = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), lc = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: i } } = $(), { getTimeObjFromCurrent: a } = nc(), s = N(!1), c = o(() => Array.isArray(r.value) ? r.value[0] : r.value ?? a(e(), {}, i.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z0-9]+/g, r = t.split(n), i = e.split(n), a = e.match(n) || [], o = t.match(n) || [], s = "";
		for (let e = 0; e < r.length && e < i.length; e++) {
			e > 0 && o[e - 1] && (s += a[e - 1] || o[e - 1]);
			let t = r[e]?.length;
			s += i[e]?.slice(0, t);
		}
		return s;
	}, u = (n, r, i) => {
		let a = jo(n, l(r, n), e(), { locale: t.locale });
		return ui(a) && li(a) ? i || s.value || t.timePicker ? a : Q(a, {
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
}, uc = /* @__PURE__ */ function(e) {
	return e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e;
}({}), dc = [
	"time-input",
	"time-picker",
	"pass-trough"
], fc = [
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
		use: dc
	},
	{
		name: "hours-overlay-header",
		use: dc
	},
	{
		name: "minutes-overlay-value",
		use: dc
	},
	{
		name: "minutes-overlay-header",
		use: dc
	},
	{
		name: "seconds-overlay-value",
		use: dc
	},
	{
		name: "seconds-overlay-header",
		use: dc
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
], pc = (e, t) => fc.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), mc = (e, t) => fc.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), hc = {
	key: 1,
	class: "dp--input-wrap"
}, gc = [
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
], _c = {
	key: 1,
	class: "dp--clear-btn"
}, vc = ["aria-label"], yc = /* @__PURE__ */ h({
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
		let r = n, i = e, { rootEmit: a, inputValue: d, rootProps: f, defaults: { textInput: p, ariaLabels: h, inline: g, config: _, range: v, multiDates: y, ui: b, inputAttrs: C } } = $(), { checkMinMaxRange: w, isValidDate: T } = Ds(), { parseFreeInput: E, textPasted: D, createMaskedValue: O, applyMaxValues: A } = lc(), { checkKeyDown: j, checkStopPropagation: M } = nc(), { boolHtmlAttribute: P } = cc(), ee = V("dp-input"), I = N(null), te = N(!1), L = o(() => ({
			"dp--pointer": !f.disabled && !f.readonly && !p.value.enabled,
			"dp--disabled": f.disabled,
			"dp--input-readonly": !p.value.enabled,
			"dp--input": !0,
			"dp--input-not-clearable": !C.value.clearable,
			"dp--input-icon-pad": !C.value.hideInputIcon,
			"dp--input-valid": typeof C.value.state == "boolean" && C.value.state,
			"dp--input-invalid": typeof C.value.state == "boolean" && !C.value.state,
			"dp--input-focus": te.value || i.isMenuOpen,
			"dp--input-reg": !p.value.enabled,
			...b.value.input
		})), R = () => {
			r("set-input-date", null), C && f.autoApply && (r("set-empty-date"), I.value = null);
		}, z = (e) => {
			if (p.value.separators?.length) {
				let t = new RegExp(p.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(p.value.rangeSeparator);
		}, ne = (e) => {
			let [t, n] = z(e);
			if (t) {
				let e = E(t.trim(), d.value), r = n ? E(n.trim(), d.value) : void 0;
				if (ya(e, r)) return;
				let i = e && r ? [e, r] : [e];
				w(r, i, 0) && (I.value = e ? i : null);
			}
		}, H = () => {
			D.value = !0;
		}, U = (e) => {
			v.value.enabled ? ne(e) : y.value.enabled ? I.value = e.split(";").map((e) => E(e.trim())).filter((e) => !!e) : I.value = E(e, d.value);
		}, W = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = p?.value?.maskFormat, o = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]);
				o = O(A(t.replace(/\D/g, ""), e), n);
			}
			o === "" ? R() : (p.value.openMenu && !i.isMenuOpen && r("open"), U(o), r("set-input-date", I.value)), D.value = !1, d.value = o, a("text-input", e, I.value);
		}, re = (e) => {
			p.value.enabled ? (U(e.target.value), p.value.enterSubmit && T(I.value) && d.value !== "" ? (r("set-input-date", I.value, !0), I.value = null) : p.value.enterSubmit && d.value === "" && (I.value = null, r("clear"))) : ie(e);
		}, G = (e, t) => {
			p.value.enabled && p.value.tabSubmit && !t && U(e.target.value), p.value.tabSubmit && T(I.value) && d.value !== "" ? (r("set-input-date", I.value, !0, !0), I.value = null) : p.value.tabSubmit && d.value === "" && (I.value = null, r("clear"));
		}, K = () => {
			te.value = !0, r("focus"), x().then(() => {
				p.value.enabled && p.value.selectOnFocus && ee.value?.select();
			});
		}, ie = (e) => {
			if (M(e, _.value, !0), p.value.enabled && p.value.openMenu && !g.value.input) {
				if (p.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (p.value.openMenu === "toggle") return r("toggle");
			} else p.value.enabled || r("toggle");
		}, q = () => {
			r("real-blur"), te.value = !1, (!i.isMenuOpen || g.value.enabled && g.value.input) && r("blur"), (f.autoApply && p.value.enabled && I.value && !i.isMenuOpen || p.value.applyOnBlur) && (r("set-input-date", I.value), r("select-date"), I.value = null);
		}, ae = (e) => {
			M(e, _.value, !0), r("clear");
		}, oe = () => {
			r("close");
		}, se = (e) => {
			if (e.key === "Tab" && G(e), e.key === "Enter" && (re(e), _.value.allowPreventDefault && (e.preventDefault(), M(e, _.value, !0))), e.key === "Escape" && p.value.escClose && oe(), !p.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, ce = () => {
			ee.value?.focus({ preventScroll: !0 });
		}, le = (e) => {
			I.value = e;
		}, ue = (e) => {
			e.key === vs.tab && G(e, !0);
		};
		return t({
			focusInput: ce,
			setParsedDate: le
		}), (t, n) => (k(), l("div", { onClick: ie }, [!t.$slots["dp-input"] && !B(g).enabled ? F(t.$slots, "trigger", { key: 0 }) : c("", !0), !t.$slots.trigger && (!B(g).enabled || B(g).input) ? (k(), l("div", hc, [
			!t.$slots.trigger && (!B(g).enabled || B(g).enabled && B(g).input) ? F(t.$slots, "dp-input", {
				key: 0,
				value: B(d),
				isMenuOpen: e.isMenuOpen,
				onInput: W,
				onEnter: re,
				onTab: G,
				onClear: ae,
				onBlur: q,
				onKeypress: se,
				onPaste: H,
				onFocus: K,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [u("input", {
				id: B(C).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: B(C).name,
				class: S(L.value),
				inputmode: B(C).inputmode,
				placeholder: B(f).placeholder,
				disabled: B(P)(B(f).disabled),
				readonly: B(P)(B(f).readonly),
				required: B(P)(B(C).required),
				value: B(d),
				autocomplete: B(C).autocomplete,
				"aria-label": B(h).input,
				"aria-disabled": B(f).disabled || void 0,
				"aria-invalid": B(C).state === !1 || void 0,
				role: "combobox",
				"aria-haspopup": "dialog",
				"aria-expanded": e.isMenuOpen,
				"aria-controls": B(f).menuId,
				onInput: W,
				onBlur: q,
				onFocus: K,
				onKeypress: se,
				onKeydown: n[0] ||= (e) => se(e),
				onPaste: H,
				onInvalid: n[1] ||= (e) => B(a)("invalid", e)
			}, null, 42, gc)]) : c("", !0),
			u("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !B(C).hideInputIcon ? (k(), l("span", {
				key: 0,
				class: "dp--input-icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [F(t.$slots, "input-icon")])) : c("", !0), !t.$slots["input-icon"] && !B(C).hideInputIcon && !t.$slots["dp-input"] ? (k(), s(B(is), {
				key: 1,
				"aria-label": B(h)?.calendarIcon,
				class: "dp--input-icon dp--input-icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : c("", !0)]),
			t.$slots["clear-icon"] && (B(C).alwaysClearable || B(d) && B(C).clearable && !B(f).disabled && !B(f).readonly) ? (k(), l("span", _c, [F(t.$slots, "clear-icon", { clear: ae })])) : c("", !0),
			!t.$slots["clear-icon"] && (B(C).alwaysClearable || B(C).clearable && B(d) && !B(f).disabled && !B(f).readonly) ? (k(), l("button", {
				key: 2,
				"aria-label": B(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => B(j)(e, () => ae(e), !0, B(_).spaceConfirm, ue),
				onClick: n[6] ||= J((e) => ae(e), ["prevent"])
			}, [m(B(as), { class: "dp--input-icons" })], 40, vc)) : c("", !0)
		])) : c("", !0)]));
	}
}), bc = (e) => {
	let { rootProps: t, modelValue: n, getDate: r, defaults: { range: i, multiDates: a } } = $(), { isDateBefore: o } = rc(), s = () => {
		let e = r();
		return t.actionRow?.nowBtnRound && (e = Io(e, {
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
}, xc = {
	ref: "action-row",
	class: "dp--action-row"
}, Sc = ["title"], Cc = {
	ref: "action-buttons-container",
	class: "dp--action-buttons",
	"data-dp-element": "action-row"
}, wc = ["disabled"], Tc = /* @__PURE__ */ h({
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
		let n = t, i = e, { rootEmit: a, rootProps: s, modelValue: d, defaults: { actionRow: f, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { selectCurrentDate: y } = bc(n), { isTimeValid: b, isMonthValid: x } = Ds(), { formatPreview: S } = ac(), { checkKeyDown: C, convertType: T } = nc(), { boolHtmlAttribute: E } = cc(), A = V("action-buttons-container"), j = V("action-row"), M = N(!1), P = N({});
		D(() => {
			ee(), globalThis.addEventListener("resize", ee);
		}), O(() => {
			globalThis.removeEventListener("resize", ee);
		});
		let ee = () => {
			M.value = !1, setTimeout(() => {
				let e = A.value?.getBoundingClientRect(), t = j.value?.getBoundingClientRect();
				e && t && (P.value.maxWidth = `${t.width - e.width - 20}px`), M.value = !0;
			}, 0);
		}, I = o(() => g.value.enabled && !g.value.partialRange && d.value ? d.value.length === 2 : !0), te = o(() => !b.value(d.value) || !x.value(d.value) || !I.value), R = () => {
			let e = v.value.preview;
			return s.timePicker || s.monthPicker, e(T(d.value));
		}, z = () => {
			let e = d.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, ne = o(() => !d.value || !i.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(d.value) ? d.value.length === 2 && d.value[1] ? z() : _.value.enabled ? d.value.map((e) => `${S(e)}`) : s.modelAuto ? `${S(d.value[0])}` : `${S(d.value[0])} -` : S(d.value) : R()), H = () => _.value.enabled ? "; " : " - ", U = o(() => Array.isArray(ne.value) ? ne.value.join(H()) : ne.value), W = () => {
			b.value(d.value) && x.value(d.value) && I.value ? n("select-date") : a("invalid-select");
		};
		return (e, t) => (k(), l("div", xc, [e.$slots["action-row"] ? F(e.$slots, "action-row", {
			key: 0,
			modelValue: B(d),
			disabled: te.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}) : (k(), l(r, { key: 1 }, [B(f).showPreview ? (k(), l("div", {
			key: 0,
			class: "dp--selection-preview",
			title: U.value || void 0,
			style: w(P.value)
		}, [e.$slots["action-preview"] && M.value ? F(e.$slots, "action-preview", {
			key: 0,
			value: B(d),
			formatValue: U.value
		}) : c("", !0), !e.$slots["action-preview"] && M.value ? (k(), l(r, { key: 1 }, [p(L(U.value), 1)], 64)) : c("", !0)], 12, Sc)) : c("", !0), u("div", Cc, [e.$slots["action-buttons"] ? F(e.$slots, "action-buttons", {
			key: 0,
			value: B(d),
			selectDate: W,
			selectionDisabled: te.value
		}) : c("", !0), e.$slots["action-buttons"] ? c("", !0) : (k(), l(r, { key: 1 }, [
			!B(h).enabled && B(f).showCancel ? (k(), l("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => B(C)(t, () => e.$emit("close-picker"))
			}, L(B(f).cancelBtnLabel), 545)) : c("", !0),
			B(f).showNow ? (k(), l("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-cancel",
				onClick: t[2] ||= (...e) => B(y) && B(y)(...e),
				onKeydown: t[3] ||= (e) => B(C)(e, () => B(y)())
			}, L(B(f).nowBtnLabel), 33)) : c("", !0),
			B(f).showSelect ? (k(), l("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp--action-button dp--action-select",
				disabled: B(E)(te.value),
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => B(C)(e, () => W()),
				onClick: W
			}, L(B(f).selectBtnLabel), 41, wc)) : c("", !0)
		], 64))], 512)], 64))], 512));
	}
}), Ec = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: o(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: o(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: o(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, Dc = ["role", "tabindex"], Oc = {
	ref: "header",
	class: "dp--selection-grid-header"
}, kc = ["aria-label"], Ac = [
	"aria-label",
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], jc = ["aria-label", "data-dp-action-element"], Mc = /* @__PURE__ */ h({
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
	setup(e, { emit: t }) {
		let n = t, i = e, { setState: a, defaults: { ariaLabels: s, config: d } } = $(), { hideNavigationButtons: f } = Ec(), { handleEventPropagation: m, checkKeyDown: h } = nc(), g = V("toggle-button"), _ = V("header"), v = V("overlay-container"), y = V("grid-wrap"), b = /* @__PURE__ */ Rt(), C = N(!1), T = N(null), A = N(), j = N(0);
		E(() => {
			T.value = null;
		}), D(async () => {
			await x(), z(), a("arrowNavigationLevel", i.level ?? 1);
		}), O(() => {
			a("arrowNavigationLevel", (i.level ?? 1) - 1);
		});
		let M = o(() => ({
			"dp--overlay": !0,
			"dp--overlay-absolute": !i.useRelative,
			"dp--overlay-relative": i.useRelative
		})), ee = o(() => i.useRelative ? {
			height: `${i.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), I = o(() => ({ "dp--overlay-col": !0 })), te = o(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--overlay-action": !0,
			"dp--over-action-scroll": C.value,
			"dp--button-bottom": i.isLast
		})), R = o(() => ({
			"dp--overlay-container": !0,
			"dp--container-flex": i.items?.length <= 6,
			"dp--container-block": i.items?.length > 6
		}));
		G(() => i.items, () => z(!1), { deep: !0 });
		let z = (e = !0) => {
			x().then(() => {
				let t = Nt(y), n = Nt(g), r = Nt(v), a = Nt(_), o = n ? n.getBoundingClientRect().height : 0;
				t && (t.getBoundingClientRect().height ? j.value = t.getBoundingClientRect().height - o - (a?.getBoundingClientRect().height ?? 0) : j.value = d.value.modeHeight - o - (a?.getBoundingClientRect().height ?? 0));
				let s = b.value?.find((e) => {
					let { dpElementActive: t } = e.dataset;
					return t === `${i.level ?? 1}`;
				});
				s && r && e && (r.scrollTop = s.offsetTop - r.offsetTop - (j.value / 2 - s.getBoundingClientRect().height) - o);
			});
		}, ne = (e) => {
			e.disabled || n("selected", e.value);
		}, H = () => {
			n("toggle");
		}, U = (e) => {
			d.value.escClose && (H(), m(e, d.value));
		}, W = (e) => {
			A.value = e, n("hover-value", e);
		}, K = (e) => {
			if (e.key === vs.esc) return U(e);
		}, q = (e) => {
			if (e.key === vs.enter) return H();
		};
		return (t, n) => (k(), l("div", {
			ref: "grid-wrap",
			class: S(M.value),
			style: w(ee.value),
			role: e.useRelative ? void 0 : "presentation",
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: K,
			onClick: n[0] ||= J(() => {}, ["prevent"])
		}, [
			u("div", Oc, [F(t.$slots, "header")], 512),
			u("div", {
				ref: "overlay-container",
				"aria-label": e.overlayLabel,
				class: S(R.value),
				style: w({ "--dp-overlay-height": `${j.value}px` }),
				role: "listbox"
			}, [F(t.$slots, "overlay", {}, () => [(k(!0), l(r, null, P(e.items, (n, i) => (k(), l("div", {
				key: i,
				class: S(["dp--overlay-row", { "dp--flex-row": e.items.length >= 3 }]),
				role: "presentation"
			}, [(k(!0), l(r, null, P(n, (n) => (k(), l("div", {
				key: n.value,
				ref_for: !0,
				ref_key: "colRefs",
				ref: b,
				role: "option",
				class: S(I.value),
				"aria-label": n.ariaLabel ?? n.text,
				"aria-selected": n.active || void 0,
				"aria-disabled": n.disabled || void 0,
				"data-dp-action-element": e.level ?? 1,
				"data-dp-element-active": n.active ? e.level ?? 1 : void 0,
				tabindex: "0",
				"data-test-id": n.text,
				onClick: J((e) => ne(n), ["prevent"]),
				onKeydown: (e) => B(h)(e, () => ne(n), !0),
				onMouseover: (e) => W(n.value)
			}, [u("div", { class: S(n.className) }, [F(t.$slots, "item", { item: n }, () => [p(L(n.text), 1)])], 2)], 42, Ac))), 128))], 2))), 128))])], 14, kc),
			t.$slots["button-icon"] ? ie((k(), l("button", {
				key: 0,
				ref: "toggle-button",
				type: "button",
				"aria-label": B(s)?.toggleOverlay,
				class: S(te.value),
				tabindex: "0",
				"data-dp-action-element": e.level ?? 1,
				onClick: H,
				onKeydown: q
			}, [F(t.$slots, "button-icon")], 42, jc)), [[re, !B(f)(e.type)]]) : c("", !0)
		], 46, Dc));
	}
}), Nc = ["data-dp-mobile"], Pc = /* @__PURE__ */ h({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = ic(), r = o(() => t.value.count > 0 ? [...Array.from({ length: t.value.count }).keys()] : [0]);
		return (i, a) => (k(), l("div", {
			class: S({
				"dp--menu-inner": !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				"dp--flex-display": B(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": B(n)
		}, [F(i.$slots, "default", {
			instances: r.value,
			wrapClass: { "dp--instance-calendar": B(t).count > 0 }
		})], 10, Nc));
	}
}), Fc = [
	"data-dp-element",
	"tabindex",
	"inert",
	"aria-hidden",
	"disabled",
	"aria-label",
	"aria-disabled"
], Ic = /* @__PURE__ */ h({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean },
		inactive: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { boolHtmlAttribute: n } = cc(), { checkKeyDown: r } = nc(), i = t;
		return (t, a) => (k(), l("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp--btn-base dp--bg-none dp--arrow-btn-nav",
			tabindex: e.inactive ? -1 : 0,
			inert: e.inactive || void 0,
			"aria-hidden": e.inactive || void 0,
			disabled: B(n)(e.disabled),
			"aria-label": e.ariaLabel,
			"aria-disabled": B(n)(e.disabled),
			onClick: a[0] ||= (e) => i("activate"),
			onKeydown: a[1] ||= (e) => B(r)(e, () => i("activate"), !0)
		}, [u("span", { class: S(["dp--inner-nav", { "dp--inner-nav-disabled": e.disabled }]) }, [F(t.$slots, "default")], 2)], 40, Fc));
	}
}), Lc = [
	"aria-label",
	"data-test-id",
	"aria-expanded"
], Rc = /* @__PURE__ */ h({
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
		let n = t, i = e, { showRightIcon: f, showLeftIcon: h } = Ec(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = $(), { showTransition: b, transitionName: x } = Ts(), { formatYear: C } = ac(), { boolHtmlAttribute: w } = cc(), T = N(!1), E = o(() => C(i.year)), D = (e) => {
			T.value = !T.value, n("toggle-year-picker", { show: e });
		}, O = (e) => {
			T.value = !1, n("year-select", e);
		}, A = (e = !1) => {
			n("handle-year", e);
		};
		return (t, n) => (k(), l(r, null, [u("div", { class: S(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			B(h)(e.instance) ? (k(), s(Ic, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": B(v)?.prevYear,
				disabled: B(w)(e.isDisabled(!1)),
				class: S(B(y)?.navBtnPrev),
				onActivate: n[0] ||= (e) => A(!1)
			}, {
				default: K(() => [t.$slots["arrow-left"] ? F(t.$slots, "arrow-left", { key: 0 }) : c("", !0), t.$slots["arrow-left"] ? c("", !0) : (k(), s(B(os), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : c("", !0),
			u("button", {
				ref: "mpYearButtonRef",
				class: "dp--btn-base dp--bg-none dp--month-year-select-base dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${B(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"aria-haspopup": "dialog",
				"aria-expanded": e.showYearPicker,
				"data-dp-action-element": "0",
				onClick: n[1] ||= () => D(),
				onKeydown: n[2] ||= q(J(() => D(), ["prevent"]), ["enter"])
			}, [t.$slots.year ? F(t.$slots, "year", {
				key: 0,
				text: E.value,
				value: e.year
			}) : c("", !0), t.$slots.year ? c("", !0) : (k(), l(r, { key: 1 }, [p(L(e.year), 1)], 64))], 40, Lc),
			B(f)(e.instance) ? (k(), s(Ic, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": B(v)?.nextYear,
				disabled: B(w)(e.isDisabled(!0)),
				class: S(B(y)?.navBtnNext),
				onActivate: n[3] ||= (e) => A(!0)
			}, {
				default: K(() => [t.$slots["arrow-right"] ? F(t.$slots, "arrow-right", { key: 0 }) : c("", !0), t.$slots["arrow-right"] ? c("", !0) : (k(), s(B(ss), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : c("", !0)
		], 2), m(a, {
			name: B(x)(e.showYearPicker),
			css: B(b)
		}, {
			default: K(() => [e.showYearPicker ? (k(), s(Mc, {
				key: 0,
				items: e.items,
				"is-last": B(g).autoApply && !B(_).keepActionRow,
				"overlay-label": B(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: D,
				onSelected: n[4] ||= (e) => O(e)
			}, d({
				"button-icon": K(() => [t.$slots["calendar-icon"] ? F(t.$slots, "calendar-icon", { key: 0 }) : c("", !0), t.$slots["calendar-icon"] ? c("", !0) : (k(), s(B(is), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: K(({ item: e }) => [F(t.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"overlay-label"
			])) : c("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), zc = () => {
	let { getDate: e, rootEmit: t, state: n, month: r, year: i, modelValue: a, calendars: s, rootProps: c, defaults: { multiCalendars: l, range: u, safeDates: d, filters: f, highlight: p } } = $(), { resetDate: m, getYearFromDate: h, checkHighlightYear: g, groupListAndMap: _ } = rc(), { getYears: v } = oc(), { validateMonthYear: y, checkMinMaxValue: b } = Ds(), x = N([!1]), S = o(() => v()), C = o(() => (t, n) => {
		let a = Q(m(e()), {
			month: r.value(t),
			year: i.value(t)
		});
		return y(n ? bi(a) : xi(a), c.preventMinMaxNavigation, n);
	}), w = () => Array.isArray(a.value) && l.value.solo && a.value[1], T = () => {
		for (let t = 0; t < l.value.count; t++) if (t === 0) s.value[t] = s.value[0];
		else if (t === l.value.count - 1 && w()) s.value[t] = {
			month: X(a.value[1]),
			year: Z(a.value[1])
		};
		else {
			let n = Q(e(), s.value[t - 1]);
			s.value[t] = {
				month: X(n),
				year: Z(si(n, 1))
			};
		}
	}, E = (t) => {
		if (!t) return T();
		let n = Q(e(), s.value[t]);
		return s.value[0].year = Z(Uo(n, l.value.count - 1)), T();
	}, O = (e, t) => {
		let n = mi(t, e);
		return u.value.showLastInRange && n > 1 ? t : e;
	}, k = (e) => c.focusStartDate || l.value.solo ? e[0] : e[1] ? O(e[0], e[1]) : e[0], A = () => {
		if (a.value) {
			let e = Array.isArray(a.value) ? k(a.value) : a.value;
			s.value[0] = {
				month: X(e),
				year: Z(e)
			};
		}
	}, j = () => {
		A(), l.value.count && T();
	};
	G(a, (e, t) => {
		n.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && j();
	}), D(() => {
		j();
	});
	let M = (e, n) => {
		s.value[n].year = e, t("update-month-year", {
			instance: n,
			year: e,
			month: s.value[n].month
		}), l.value.count && !l.value.solo && E(n);
	}, P = o(() => (e) => _(S.value, (t) => ({
		active: i.value(e) === t.value,
		disabled: b(t.value, h(d.value.minDate), h(d.value.maxDate)) || f.value.years?.includes(t.value),
		highlighted: g(p.value, t.value)
	}))), F = (e, t) => {
		M(e, t), I(t);
	}, ee = (e, t = !1) => {
		C.value(e, t) || M(t ? i.value(e) + 1 : i.value(e) - 1, e);
	}, I = (e, n) => {
		n === void 0 ? x.value[e] = !x.value[e] : x.value[e] = n, x.value[e] ? t("overlay-toggle", {
			open: !0,
			overlay: hs.year
		}) : t("overlay-toggle", {
			open: !1,
			overlay: hs.year
		});
	};
	return {
		isDisabled: C,
		groupedYears: P,
		showYearPicker: x,
		selectYear: M,
		setStartDate: () => {
			c.startDate && (a.value && c.focusStartDate || !a.value) && M(Z(e(c.startDate)), 0);
		},
		toggleYearPicker: I,
		handleYearSelect: F,
		handleYear: ee
	};
}, Bc = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = rc(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
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
}, Vc = (e) => {
	let { getDate: t, rootEmit: n, state: r, calendars: i, year: a, modelValue: s, rootProps: c, defaults: { range: l, highlight: u, safeDates: d, filters: f, multiDates: p } } = $();
	Es(() => {
		r.isTextInputDate && z(Z(t(c.startDate)), 0);
	});
	let { checkMinMaxRange: m, checkMinMaxValue: h } = Ds(), { isDateBetween: g, resetDateTime: _, resetDate: v, getMinMonth: y, getMaxMonth: b, checkHighlightMonth: S, groupListAndMap: C } = rc(), { checkRangeAutoApply: w, getRangeWithFixedDate: T, handleMultiDatesSelect: E, setMonthOrYearRange: O, setPresetDate: k } = Bc(), { padZero: A } = nc(), { getMonths: j, isOutOfYearRange: M } = oc(), { updateFlowStep: P, childMount: F } = Ss(), ee = o(() => j()), I = N(null), { groupedYears: te, showYearPicker: L, isDisabled: R, selectYear: z, toggleYearPicker: B, handleYearSelect: ne, handleYear: V, setStartDate: H } = zc();
	D(() => {
		F(), H();
	});
	let U = (e) => e ? {
		month: X(e),
		year: Z(e)
	} : {
		month: null,
		year: null
	}, W = () => s.value ? Array.isArray(s.value) ? s.value.map((e) => U(e)) : U(s.value) : U(), re = (e, t) => {
		let n = i.value[e], r = W();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, G = (e, t, n) => {
		let r = W();
		return Array.isArray(r) ? a.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, K = (e, n) => {
		if (l.value.enabled) {
			let r = W();
			if (Array.isArray(s.value) && Array.isArray(r)) {
				let r = G(e, n, 0) || G(e, n, 1), i = Q(v(t()), {
					month: e,
					year: a.value(n)
				});
				return g(s.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, ie = o(() => (e) => C(ee.value, (t) => {
		let n = re(e, t.value), r = ua(q(t.value, e), "MMMM", { locale: c.locale });
		return {
			active: n,
			disabled: h(t.value, y(a.value(e), d.value.minDate), b(a.value(e), d.value.maxDate)) || fe(d.value.disabledDates, a.value(e), t.value) || f.value.months?.includes(t.value) || !pe(d.value.allowedDates, a.value(e), t.value) || M(a.value(e)),
			isBetween: K(t.value, e),
			highlighted: S(u.value, t.value, a.value(e)),
			ariaLabel: r
		};
	})), q = (e, n) => Q(v(t()), {
		month: e,
		year: a.value(n)
	}), J = (n, r) => {
		s.value = Q(s.value ? s.value : v(t()), {
			month: n,
			year: a.value(r)
		}), e("auto-apply"), P("month");
	}, ae = (t, n) => {
		let r = q(t, n);
		l.value.fixedEnd || l.value.fixedStart ? s.value = T(r) : s.value ? m(r, s.value) && (s.value = O(q(t, n))) : s.value = [q(t, n)], x().then(() => {
			w(s.value, e, s.value.length < 2);
		});
	}, oe = (t, n) => {
		E(q(t, n), p.value.limit), e("auto-apply", !0);
	}, se = (e, t) => (i.value[t].month = e, le(t, i.value[t].year, e), p.value.enabled ? oe(e, t) : l.value.enabled ? ae(e, t) : J(e, t)), ce = (e, t) => {
		z(e, t), le(t, e, null);
	}, le = (e, t, r) => {
		let i = r;
		if (!i && i !== 0) {
			let t = W();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		n("update-month-year", {
			instance: e,
			year: t,
			month: i
		});
	}, ue = (e, t) => {
		I.value = q(e, t);
	}, de = (t) => {
		k({ value: t }), e("auto-apply");
	}, fe = (e, n, r) => {
		if (e instanceof Map) {
			let t = `${A(r + 1)}-${n}`;
			return e.size ? e.has(t) : !1;
		}
		return typeof e == "function" && e(_(Q(t(), {
			month: r,
			year: n
		}), !0));
	}, pe = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${A(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: ie,
		groupedYears: te,
		year: a,
		isDisabled: R,
		showYearPicker: L,
		modelValue: s,
		toggleYearPicker: B,
		handleYearSelect: ne,
		handleYear: V,
		presetDate: de,
		setHoverDate: ue,
		selectMonth: se,
		selectYear: ce,
		getModelMonthYear: W
	};
}, Hc = /* @__PURE__ */ h({
	__name: "MonthPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let i = n, a = ne(), { rootProps: o, defaults: { config: u } } = $(), f = pc(a, uc.YearMode), { groupedMonths: p, groupedYears: h, year: g, isDisabled: _, showYearPicker: v, modelValue: y, presetDate: x, setHoverDate: C, selectMonth: w, selectYear: T, toggleYearPicker: E, handleYearSelect: D, handleYear: O, getModelMonthYear: A } = Vc(i);
		return t({
			getSidebarProps: () => ({
				modelValue: y,
				year: g,
				getModelMonthYear: A,
				selectMonth: w,
				selectYear: T,
				handleYear: O
			}),
			presetDate: x,
			toggleYearPicker: (e) => E(0, e)
		}), (t, n) => (k(), s(Pc, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: K(({ instances: n, wrapClass: i }) => [(k(!0), l(r, null, P(n, (n) => (k(), l("div", {
				key: n,
				class: S(i)
			}, [t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
				key: 0,
				value: B(y)
			}) : c("", !0), F(t.$slots, "month-year", b({ ref_for: !0 }, {
				mode: "month",
				year: B(g),
				months: B(p)(n),
				years: B(h)(n),
				selectMonth: B(w),
				selectYear: B(T),
				instance: n
			}), () => [m(Mc, {
				items: B(p)(n),
				"is-last": B(o).autoApply && !B(u).keepActionRow,
				height: B(u).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || B(o).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => B(w)(e, n),
				onHoverValue: (e) => B(C)(e, n)
			}, d({
				header: K(() => [m(Rc, {
					items: B(h)(n),
					instance: n,
					"show-year-picker": B(v)[n],
					year: B(g)(n),
					"is-disabled": (e) => B(_)(n, e),
					onHandleYear: (e) => B(O)(n, e),
					onYearSelect: (e) => B(D)(e, n),
					onToggleYearPicker: (e) => B(E)(n, e?.show)
				}, d({ _: 2 }, [P(B(f), (e) => ({
					name: e,
					fn: K((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
				fn: K(({ item: e }) => [F(t.$slots, "month-overlay-value", {
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
}), Uc = (e) => {
	let { rootEmit: t, getDate: n, state: r, modelValue: i, rootProps: a, defaults: { highlight: s, multiDates: c, filters: l, range: u, safeDates: d } } = $(), { getYears: f } = oc(), { isDateBetween: p, resetDate: m, resetDateTime: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = rc(), { checkRangeAutoApply: y, setMonthOrYearRange: b } = Bc(), { checkMinMaxValue: S, checkMinMaxRange: C } = Ds();
	Es(() => {
		r.isTextInputDate && (T.value = Z(n(a.startDate)));
	});
	let w = N(null), T = N();
	D(() => {
		a.startDate && (i.value && a.focusStartDate || !i.value) && (T.value = Z(n(a.startDate)));
	});
	let E = (e) => Array.isArray(i.value) ? i.value.some((t) => Z(t) === e) : i.value ? Z(i.value) === e : !1, O = (e) => u.value.enabled && Array.isArray(i.value) ? p(i.value, w.value, M(e)) : !1, k = (e) => !d.value.allowedDates?.size || d.value.allowedDates.has(`${e}`), A = (e) => d.value.disabledDates instanceof Map ? d.value.disabledDates.size ? d.value.disabledDates.has(`${e}`) : !1 : typeof d.value.disabledDates != "function" || d.value.disabledDates(Bo(h(xi(n())), e)), j = o(() => v(f(), (e) => {
		let t = E(e.value);
		return {
			active: t,
			disabled: S(e.value, g(d.value.minDate), g(d.value.maxDate)) || l.value.years.includes(e.value) || !k(e.value) || A(e.value),
			isBetween: O(e.value) && !t,
			highlighted: _(s.value, e.value)
		};
	})), M = (e) => Bo(m(xi(n())), e);
	return {
		groupedYears: j,
		focusYear: T,
		setHoverValue: (e) => {
			w.value = Bo(m(n()), e);
		},
		selectYear: (r) => {
			if (t("update-month-year", {
				instance: 0,
				year: r,
				month: NaN
			}), c.value.enabled) return i.value ? Array.isArray(i.value) && ((i.value?.map((e) => Z(e))).includes(r) ? i.value = i.value.filter((e) => Z(e) !== r) : i.value.push(Bo(h(n()), r))) : i.value = [Bo(h(xi(n())), r)], e("auto-apply", !0);
			u.value.enabled ? C(M(r), i.value) && (i.value = b(M(r)), x().then(() => {
				y(i.value, e, i.value.length < 2);
			})) : (i.value = M(r), e("auto-apply"));
		}
	};
}, Wc = /* @__PURE__ */ h({
	__name: "YearPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, { modelValue: i, defaults: { config: a }, rootProps: o } = $(), { groupedYears: u, focusYear: f, selectYear: p, setHoverValue: m } = Uc(r);
		return t({ getSidebarProps: () => ({
			modelValue: i,
			selectYear: p
		}) }), (t, n) => (k(), l("div", null, [t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
			key: 0,
			value: B(i)
		}) : c("", !0), t.$slots["month-year"] ? F(t.$slots, "month-year", C(b({ key: 1 }, {
			mode: "year",
			years: B(u),
			selectYear: B(p)
		}))) : (k(), s(Mc, {
			key: 2,
			items: B(u),
			"is-last": B(o).autoApply && !B(a).keepActionRow,
			height: B(a).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || B(o).textInput),
			"focus-value": B(f),
			type: "year",
			"use-relative": "",
			onSelected: B(p),
			onHoverValue: B(m)
		}, d({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: K(({ item: e }) => [F(t.$slots, "year-overlay-value", {
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
}), Gc = {
	key: 0,
	class: "dp--time-input"
}, Kc = ["data-compact", "data-collapsed"], qc = [
	"data-test-id",
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Jc = [
	"aria-label",
	"aria-expanded",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Yc = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"disabled",
	"onKeydown",
	"onClick",
	"onMousedown"
], Xc = { key: 0 }, Zc = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-compact"
], Qc = /* @__PURE__ */ h({
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
	setup(e, { expose: t, emit: n }) {
		let i = n, f = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: x, multiCalendars: C, timeConfig: w } } = $(), { checkKeyDown: T, hoursToAmPmHours: E } = nc(), { boolHtmlAttribute: O } = cc(), { sanitizeTime: A, groupListAndMap: M } = rc(), { transitionName: ee, showTransition: te } = Ts(), R = j({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), z = N("AM"), ne = N(null), V = N(), H = N(!1);
		D(() => {
			i("mounted");
		});
		let U = (e) => Q(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: w.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), W = o(() => _.timePicker || w.value.timePickerInline ? 0 : 1), re = o(() => (e) => pe(e, f[e]) || ie(e, f[e]) || f.disabled), G = o(() => ({
			hours: f.hours,
			minutes: f.minutes,
			seconds: f.seconds
		})), ie = (e, t) => x.value.enabled && !x.value.disableTimeRangeValidation ? !f.validateTime(e, t) : !1, q = (e, t) => {
			if (x.value.enabled && !x.value.disableTimeRangeValidation) {
				let n = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`], r = f[e] + n;
				return !f.validateTime(e, r);
			}
			return !1;
		}, J = o(() => (e) => !ve(+f[e] + +w.value[`${e}Increment`], e) || q(e, !0) || f.disabled), ae = o(() => (e) => !ve(f[e] - +w.value[`${e}Increment`], e) || q(e, !1) || f.disabled), oe = (e, t) => Yr(Q(h(), e), t), se = (e, t) => Ho(Q(h(), e), t), ce = o(() => ({
			"dp--time-col": !0,
			"dp--time-col-block": !w.value.timePickerInline,
			"dp--time-col-reg-block": !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
			"dp--time-col-reg-inline": !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
			"dp--time-col-reg-with-button": !w.value.enableSeconds && !w.value.is24,
			"dp--time-col-sec": w.value.enableSeconds && w.value.is24,
			"dp--time-col-sec-with-button": w.value.enableSeconds && !w.value.is24
		})), le = o(() => w.value.timePickerInline && x.value.enabled && !C.value.count), ue = o(() => {
			let e = [{ type: "hours" }];
			return w.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), w.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), de = o(() => ue.value.filter((e) => !e.separator)), fe = o(() => (e) => {
			if (e === "hours") {
				let e = we(+f.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: f[e] < 10 ? `0${f[e]}` : `${f[e]}`,
				value: f[e]
			};
		}), pe = (e, t) => {
			if (!f.disabledTimesConfig) return !1;
			let n = f.disabledTimesConfig(f.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, me = (e, t) => t === "hours" ? z.value === "AM" ? e : e + 12 : e, he = (e) => {
			let t = w.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +w.value[`${e}GridIncrement`], i = e === "hours" && !w.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: w.value.is24 ? t : me(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !w.value.is24 && a.unshift({
				value: z.value === "PM" ? 12 : 0,
				text: "12"
			}), M(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !ve(t.value, e) || pe(e, t.value) || ie(e, t.value)
			}));
		}, ge = (e) => e >= 0 ? e : 59, _e = (e) => e >= 0 ? e : 23, ve = (e, t) => {
			let n = _.minTime ? U(A(_.minTime)) : null, r = _.maxTime ? U(A(_.maxTime)) : null, i = U(A(G.value, t, t === "minutes" || t === "seconds" ? ge(e) : _e(e)));
			return n && r ? (ba(i, r) || xa(i, r)) && (ya(i, n) || xa(i, n)) : n ? ya(i, n) || xa(i, n) : !r || ba(i, r) || xa(i, r);
		}, ye = (e) => w.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`] || f.disabled, be = (e) => {
			ye(e) || (R[e] = !R[e], R[e] ? (H.value = !0, i("overlay-opened", e)) : (H.value = !1, i("overlay-closed", e)));
		}, xe = (e) => e === "hours" ? ha : e === "minutes" ? _a : va, Se = () => {
			V.value && clearTimeout(V.value);
		}, Ce = (e, t = !0, n) => {
			let r = t ? oe : se, a = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`];
			ve(+f[e] + a, e) && i(`update:${e}`, xe(e)(r({ [e]: +f[e] }, { [e]: +w.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (V.value = setTimeout(() => {
				Ce(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, we = (e) => w.value.is24 ? e : (e >= 12 ? z.value = "PM" : z.value = "AM", E(e)), Te = () => {
			z.value === "PM" ? (z.value = "AM", i("update:hours", f.hours - 12)) : (z.value = "PM", i("update:hours", f.hours + 12)), g("am-pm-change", z.value);
		}, Ee = (e) => {
			R[e] = !0;
		}, De = (e, t) => (be(e), i(`update:${e}`, t));
		return t({ openChildCmp: Ee }), (t, n) => B(_).disabled ? c("", !0) : (k(), l("div", Gc, [
			(k(!0), l(r, null, P(ue.value, (i, a) => (k(), l("div", {
				key: a,
				class: S(ce.value),
				"data-compact": le.value && !B(w).enableSeconds,
				"data-collapsed": le.value && B(w).enableSeconds
			}, [i.separator ? (k(), l(r, { key: 0 }, [H.value ? c("", !0) : (k(), l(r, { key: 0 }, [p(":")], 64))], 64)) : (k(), l(r, { key: 1 }, [
				u("button", {
					type: "button",
					class: S({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !B(w).timePickerInline,
						"dp--inc-dec-button-inline": B(w).timePickerInline,
						"dp--tp-inline-btn-top": B(w).timePickerInline,
						"dp--inc-dec-button-disabled": J.value(i.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${i.type}-time-inc-btn-${f.order}`,
					"aria-label": B(v)?.incrementValue(i.type),
					tabindex: "0",
					disabled: B(O)(e.disabled),
					"data-dp-action-element": W.value,
					onKeydown: (e) => B(T)(e, () => Ce(i.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => B(b).timeArrowHoldThreshold ? void 0 : Ce(i.type, !0),
					onMousedown: (e) => B(b).timeArrowHoldThreshold ? Ce(i.type, !0) : void 0,
					onMouseup: Se
				}, [B(w).timePickerInline ? F(t.$slots, "tp-inline-arrow-up", { key: 1 }, () => [n[1] ||= u("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), n[2] ||= u("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : F(t.$slots, "arrow-up", { key: 0 }, () => [m(B(ls))])], 42, qc),
				u("button", {
					type: "button",
					"aria-label": `${fe.value(i.type).text}-${B(v)?.openTpOverlay(i.type)}`,
					"aria-haspopup": "dialog",
					"aria-expanded": R[i.type],
					class: S({
						"dp--time-display": !0,
						"dp--time-display-block": !B(w).timePickerInline,
						"dp--time-display-inline": B(w).timePickerInline,
						"dp--btn-base dp--time-invalid": re.value(i.type),
						"dp--btn-base dp--time-overlay-btn": !re.value(i.type),
						"dp--hidden-el": H.value
					}),
					disabled: B(O)(ye(i.type)),
					tabindex: "0",
					"data-dp-action-element": W.value,
					"data-test-id": `${i.type}-toggle-overlay-btn-${f.order}`,
					onKeydown: (e) => B(T)(e, () => be(i.type), !0),
					onClick: (e) => be(i.type)
				}, [F(t.$slots, i.type, {
					text: fe.value(i.type).text,
					value: fe.value(i.type).value
				}, () => [p(L(fe.value(i.type).text), 1)])], 42, Jc),
				u("button", {
					type: "button",
					class: S({
						"dp--btn-base dp--bg-none": !0,
						"dp--inc-dec-button": !B(w).timePickerInline,
						"dp--inc-dec-button-inline": B(w).timePickerInline,
						"dp--tp-inline-btn-bottom": B(w).timePickerInline,
						"dp--inc-dec-button-disabled": ae.value(i.type),
						"dp--hidden-el": H.value
					}),
					"data-test-id": `${i.type}-time-dec-btn-${f.order}`,
					"aria-label": B(v)?.decrementValue(i.type),
					tabindex: "0",
					"data-dp-action-element": W.value,
					disabled: B(O)(ye(i.type)),
					onKeydown: (e) => B(T)(e, () => Ce(i.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => B(b).timeArrowHoldThreshold ? void 0 : Ce(i.type, !1),
					onMousedown: (e) => B(b).timeArrowHoldThreshold ? Ce(i.type, !1) : void 0,
					onMouseup: Se
				}, [B(w).timePickerInline ? F(t.$slots, "tp-inline-arrow-down", { key: 1 }, () => [n[3] ||= u("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-l" }, null, -1), n[4] ||= u("span", { class: "dp--tp-inline-btn-bar dp--tp-btn-in-r" }, null, -1)]) : F(t.$slots, "arrow-down", { key: 0 }, () => [m(B(us))])], 42, Yc)
			], 64))], 10, Kc))), 128)),
			B(w).is24 ? c("", !0) : (k(), l("div", Xc, [F(t.$slots, "am-pm-button", {
				toggle: Te,
				value: z.value
			}, () => [u("button", {
				ref_key: "amPmButton",
				ref: ne,
				type: "button",
				class: "dp--pm-am-button",
				"aria-label": B(v)?.amPmButton,
				tabindex: "0",
				disabled: B(O)(e.disabled),
				"data-dp-action-element": W.value,
				"data-compact": le.value,
				onClick: Te,
				onKeydown: n[0] ||= (e) => B(T)(e, () => Te(), !0)
			}, L(z.value), 41, Zc)])])),
			(k(!0), l(r, null, P(de.value, (e) => (k(), s(a, {
				key: e,
				name: B(ee)(R[e.type]),
				css: B(te)
			}, {
				default: K(() => [R[e.type] ? (k(), s(Mc, {
					key: 0,
					items: he(e.type),
					"is-last": B(_).autoApply && !B(b).keepActionRow,
					type: e.type,
					"aria-labels": B(v),
					level: B(w).timePickerInline || B(_).timePicker ? 1 : 2,
					"overlay-label": B(v).timeOverlay?.(e.type),
					onSelected: (t) => De(e.type, t),
					onToggle: (t) => be(e.type)
				}, d({
					"button-icon": K(() => [F(t.$slots, "clock-icon", {}, () => [t.$slots["clock-icon"] ? c("", !0) : (k(), s(I(B(w).timePickerInline ? B(is) : B(cs)), { key: 0 }))])]),
					_: 2
				}, [t.$slots[`${e.type}-overlay-value`] ? {
					name: "item",
					fn: K(({ item: n }) => [F(t.$slots, `${e.type}-overlay-value`, {
						text: n.text,
						value: n.value
					})]),
					key: "0"
				} : void 0, t.$slots[`${e.type}-overlay-header`] ? {
					name: "header",
					fn: K(() => [F(t.$slots, `${e.type}-overlay-header`, { toggle: () => be(e.type) })]),
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
				])) : c("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), $c = ["data-dp-mobile"], el = ["aria-label", "tabindex"], tl = [
	"role",
	"aria-label",
	"tabindex"
], nl = ["aria-label"], rl = /* @__PURE__ */ h({
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
	setup(e, { expose: t, emit: n }) {
		let i = n, f = e, { rootEmit: p, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: y, config: C, range: T, timeConfig: E } } = $(), { isModelAuto: O } = rc(), { checkKeyDown: A, findFocusableEl: j } = nc(), { transitionName: M, showTransition: ee } = Ts(), { hideNavigationButtons: I } = Ec(), { isMobile: te } = ic(), { childMount: L } = Ss(), R = ne(), z = V("overlay"), H = V("close-tp-btn"), U = V("tp-input"), W = N(!1);
		D(() => {
			L(_.timePicker ? void 0 : ms.timePicker);
		});
		let G = o(() => T.value.enabled && _.modelAuto ? O(g.value) : !0), q = N(!1), J = (e) => ({
			hours: Array.isArray(f.hours) ? f.hours[e] : f.hours,
			minutes: Array.isArray(f.minutes) ? f.minutes[e] : f.minutes,
			seconds: Array.isArray(f.seconds) ? f.seconds[e] : f.seconds
		}), ae = o(() => {
			let e = [];
			if (T.value.enabled) for (let t = 0; t < 2; t++) e.push(J(t));
			else e.push(J(0));
			return e;
		}), oe = (e, t = "") => {
			let n = e !== q.value;
			q.value = e, h("arrowNavigationLevel", +!!e), n && p("overlay-toggle", {
				open: e,
				overlay: hs.time
			}), x().then(() => {
				t !== "" && U.value?.[0] && U.value[0].openChildCmp(t);
			});
		}, se = o(() => ({
			"dp--btn-base dp--bg-none": !0,
			"dp--button": !0,
			"dp--button-bottom": _.autoApply && !C.value.keepActionRow
		})), ce = pc(R, uc.TimeInput), le = (e, t, n) => T.value.enabled ? t === 0 ? [e, ae.value[1][n]] : [ae.value[0][n], e] : e, ue = (e) => {
			i("update:hours", e);
		}, de = (e) => {
			i("update:minutes", e);
		}, fe = (e) => {
			i("update:seconds", e);
		}, pe = () => {
			if (z.value && !y.value.enabled && !f.noOverlayFocus) {
				let e = j(z.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, me = (e) => {
			W.value = !1, p("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, he = (e) => {
			W.value = !0, p("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return t({ toggleTimePicker: oe }), (t, n) => (k(), l("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": B(te)
		}, [!B(_).timePicker && !B(E).timePickerInline ? ie((k(), l("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: S({
				...se.value,
				"dp--hidden-el": q.value
			}),
			"aria-label": B(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: n[0] ||= (e) => B(A)(e, () => oe(!0)),
			onClick: n[1] ||= (e) => oe(!0)
		}, [F(t.$slots, "clock-icon", {}, () => [m(B(cs))])], 42, el)), [[re, !B(I)("time")]]) : c("", !0), m(a, {
			name: B(M)(q.value),
			css: B(ee) && !B(E).timePickerInline
		}, {
			default: K(() => [q.value || B(_).timePicker || B(E).timePickerInline ? (k(), l("div", {
				key: 0,
				ref: "overlay",
				role: B(E).timePickerInline ? void 0 : "dialog",
				class: S({
					"dp--overlay": !B(E).timePickerInline,
					"dp--overlay-absolute": !B(_).timePicker && !B(E).timePickerInline,
					"dp--overlay-relative": B(_).timePicker
				}),
				style: w(B(_).timePicker ? { height: `${B(C).modeHeight}px` } : void 0),
				"aria-label": B(v)?.timePicker,
				tabindex: B(E).timePickerInline ? void 0 : 0
			}, [u("div", {
				class: S(B(E).timePickerInline ? "dp--time-picker-inline-container" : "dp--overlay-container dp--container-flex dp--time-picker-overlay-container"),
				style: { display: "flex" }
			}, [F(t.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: ue,
				setMinutes: de,
				setSeconds: fe
			}, () => [u("div", { class: S(B(E).timePickerInline ? "dp--flex" : "dp--overlay-row dp--flex-row") }, [(k(!0), l(r, null, P(ae.value, (n, r) => ie((k(), s(Qc, {
				key: r,
				ref_for: !0,
				ref: "tp-input",
				hours: n.hours,
				minutes: n.minutes,
				seconds: n.seconds,
				order: r,
				"close-time-picker-btn": H.value,
				"disabled-times-config": e.disabledTimesConfig,
				disabled: r === 0 ? B(T).fixedStart : B(T).fixedEnd,
				"validate-time": (t, n) => e.validateTime(t, le(n, r, t)),
				"onUpdate:hours": (e) => ue(le(e, r, "hours")),
				"onUpdate:minutes": (e) => de(le(e, r, "minutes")),
				"onUpdate:seconds": (e) => fe(le(e, r, "seconds")),
				onMounted: pe,
				onOverlayClosed: me,
				onOverlayOpened: he
			}, d({ _: 2 }, [P(B(ce), (e) => ({
				name: e,
				fn: K((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
			])), [[re, r === 0 || G.value]])), 128))], 2)]), !B(_).timePicker && !B(E).timePickerInline ? ie((k(), l("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: S({
					...se.value,
					"dp--hidden-el": W.value
				}),
				"aria-label": B(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: n[2] ||= (e) => B(A)(e, () => oe(!1)),
				onClick: n[3] ||= (e) => oe(!1)
			}, [F(t.$slots, "calendar-icon", {}, () => [m(B(is))])], 42, nl)), [[re, !B(I)("time")]]) : c("", !0)], 2)], 14, tl)) : c("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, $c));
	}
}), il = () => {
	let { getDate: e, modelValue: t, time: n, rootProps: r, defaults: { range: i, timeConfig: a } } = $(), { updateFlowStep: s } = Ss(), { isDateEqual: c, setTime: l } = rc(), u = (e, t) => Array.isArray(n[e]) ? n[e][t] : n[e], d = (e) => a.value.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[e] : n.seconds : 0, f = (t, r) => t ? l(r === void 0 ? {
		hours: n.hours,
		minutes: n.minutes,
		seconds: d()
	} : {
		hours: u("hours", r),
		minutes: u("minutes", r),
		seconds: d(r)
	}, t) : zo(e(), d(r)), p = (e, t) => {
		n[e] = t;
	}, m = o(() => r.modelAuto && i.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : i.value.enabled), h = (e, r) => {
		let a = Object.fromEntries(Object.keys(n).map((t) => t === e ? [t, r] : [t, n[t]].slice()));
		if (m.value && !i.value.disableTimeRangeValidation) {
			let e = (e) => t.value ? l({
				hours: a.hours[e],
				minutes: a.minutes[e],
				seconds: a.seconds[e]
			}, t.value[e]) : null, n = (e) => Ro(t.value[e], 0);
			return !(c(e(0), e(1)) && (ya(e(0), n(1)) || ba(e(1), n(0))));
		}
		return !0;
	}, g = (e, t) => {
		let r = n[e] === t ? void 0 : e;
		h(e, t) && (p(e, t), r && x().then(() => s(e)));
	}, _ = (e) => {
		g("hours", e);
	}, v = (e) => {
		g("minutes", e);
	}, y = (e) => {
		g("seconds", e);
	}, b = (e, n) => {
		_(e.hours), v(e.minutes), y(e.seconds), t.value && n(t.value);
	}, S = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			p("hours", n), p("minutes", r), a.value.enableSeconds && p("seconds", i);
		}
	}, C = (e, t) => {
		let a = {
			hours: Array.isArray(n.hours) ? n.hours[e] : n.hours,
			disabledArr: []
		};
		return (t || t === 0) && (a.hours = t), Array.isArray(r.disabledTimes) && (a.disabledArr = i.value.enabled && Array.isArray(r.disabledTimes[e]) ? r.disabledTimes[e] : r.disabledTimes), a;
	};
	return {
		assignTime: p,
		updateHours: _,
		updateMinutes: v,
		updateSeconds: y,
		getSetDateTime: f,
		updateTimeValues: b,
		getSecondsValue: d,
		assignStartTime: S,
		validateTime: h,
		disabledTimesConfig: o(() => (e, t) => {
			if (Array.isArray(r.disabledTimes)) {
				let { disabledArr: n, hours: r } = C(e, t), i = n.filter((e) => +e.hours === r);
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
}, al = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = rc();
	Es(() => {
		i.isTextInputDate && b();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = il(), h = (e) => {
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
	D(() => (f(a.value), r.value ? b() : _()));
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
}, ol = /* @__PURE__ */ h({
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
		let r = n, i = pc(ne(), uc.TimePicker), a = V("time-input"), { time: o, modelValue: c, disabledTimesConfig: l, updateTime: f, validateTime: p } = al(r);
		return D(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: c,
				time: o,
				updateTime: f
			}),
			toggleTimePicker: (e, t = "") => {
				a.value?.toggleTimePicker(e, t);
			}
		}), (e, t) => (k(), s(Pc, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: K(({ wrapClass: n }) => [u("div", { class: S(n) }, [m(rl, b({ ref: "time-input" }, e.$props, {
				hours: B(o).hours,
				minutes: B(o).minutes,
				seconds: B(o).seconds,
				"disabled-times-config": B(l),
				"validate-time": B(p),
				"onUpdate:hours": t[0] ||= (e) => B(f)({
					hours: e,
					minutes: B(o).minutes,
					seconds: B(o).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => B(f)({
					hours: B(o).hours,
					minutes: e,
					seconds: B(o).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => B(f)({
					hours: B(o).hours,
					minutes: B(o).minutes,
					seconds: e
				})
			}), d({ _: 2 }, [P(B(i), (t, n) => ({
				name: t,
				fn: K((n) => [F(e.$slots, t, C(g(n)))])
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
}), sl = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: i } } = $(), { validateMonthYearInRange: a, validateMonthYear: s } = Ds(), c = (e, t) => {
		let n = e;
		return i.value.months.includes(X(n)) ? (n = t ? Jr(e, 1) : Vo(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return i.value.years.includes(Z(n)) ? (n = t ? si(e, 1) : Uo(e, 1), l(n, t)) : n;
	}, u = (t, o = !1) => {
		let s = Q(n(), {
			month: e.month,
			year: e.year
		}), u = t ? Jr(s, 1) : Vo(s, 1);
		r.disableYearSelect && (u = Bo(u, e.year));
		let f = X(u), p = Z(u);
		i.value.months.includes(f) && (u = c(u, t), f = X(u), p = Z(u)), i.value.years.includes(p) && (u = l(u, t), p = Z(u)), a(f, p, t, r.preventMinMaxNavigation) && d(f, p, o);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: o(() => (t) => s(Q(n(), {
			month: e.month,
			year: e.year
		}), r.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, cl = { class: "dp--header-wrap" }, ll = {
	key: 0,
	class: "dp--month-year-wrap"
}, ul = { key: 0 }, dl = { class: "dp--month-year-wrap" }, fl = [
	"data-dp-element",
	"aria-label",
	"aria-expanded",
	"data-test-id",
	"onClick",
	"onKeydown"
], pl = /* @__PURE__ */ h({
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
	setup(e, { expose: t, emit: n }) {
		let i = n, f = e, { rootEmit: h, rootProps: _, modelValue: v, defaults: { ariaLabels: y, filters: x, config: w, highlight: T, safeDates: E, ui: O } } = $(), { transitionName: A, showTransition: j } = Ts(), { showLeftIcon: M, showRightIcon: ee } = Ec(), { handleMonthYearChange: te, isDisabled: R, updateMonthYear: z } = sl(f, i), { getMaxMonth: ne, getMinMonth: V, getYearFromDate: H, groupListAndMap: U, checkHighlightYear: W, checkHighlightMonth: re } = rc(), { checkKeyDown: G } = nc(), { formatYear: ie } = ac(), { checkMinMaxValue: q } = Ds(), { boolHtmlAttribute: J } = cc(), { childMount: ae } = Ss(), oe = N(!1), se = N(!1), ce = N(!1);
		D(() => {
			ae(ms.header);
		});
		let le = (e) => ({
			get: () => f[e],
			set: (t) => {
				let n = e === ps.month ? ps.year : ps.month;
				i("update-month-year", {
					[e]: t,
					[n]: f[n]
				}), e === ps.month ? _e() : ve();
			}
		}), ue = o(le(ps.month)), de = o(le(ps.year)), fe = o(() => (e) => ({
			month: f.month,
			year: f.year,
			items: e === ps.month ? f.months : f.years,
			instance: f.instance,
			updateMonthYear: z,
			toggle: e === ps.month ? _e : ve
		})), pe = o(() => f.months.find((e) => e.value === f.month) || {
			text: "",
			value: 0
		}), me = o(() => U(f.months, (e) => ({
			active: f.month === e.value,
			disabled: q(e.value, V(f.year, E.value.minDate), ne(f.year, E.value.maxDate)) || x.value.months.includes(e.value),
			highlighted: re(T.value, e.value, f.year)
		}))), he = o(() => U(f.years, (e) => ({
			active: f.year === e.value,
			disabled: q(e.value, H(E.value.minDate), H(E.value.maxDate)) || x.value.years.includes(e.value),
			highlighted: W(T.value, e.value)
		}))), ge = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (ce.value = !0, h("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (ce.value = !1, h("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, _e = (e) => {
			ge(oe, hs.month, e);
		}, ve = (e) => {
			ge(se, hs.year, e);
		}, ye = o(() => [{
			type: ps.month,
			index: 1,
			toggle: _e,
			modelValue: ue.value,
			updateModelValue: (e) => ue.value = e,
			text: pe.value.text,
			showSelectionGrid: oe.value,
			items: me.value,
			ariaLabel: y.value?.openMonthsOverlay,
			overlayLabel: y.value.monthPicker?.(!0) ?? void 0
		}, {
			type: ps.year,
			index: 2,
			toggle: ve,
			modelValue: de.value,
			updateModelValue: (e) => de.value = e,
			text: ie(f.year),
			showSelectionGrid: se.value,
			items: he.value,
			ariaLabel: y.value?.openYearsOverlay,
			overlayLabel: y.value.yearPicker?.(!0) ?? void 0
		}]), be = o(() => _.disableYearSelect ? [ye.value[0]] : _.yearFirst ? [...ye.value].reverse() : ye.value);
		return t({
			toggleMonthPicker: _e,
			toggleYearPicker: ve,
			handleMonthYearChange: te
		}), (t, n) => (k(), l("div", cl, [t.$slots["month-year"] ? (k(), l("div", ll, [F(t.$slots, "month-year", C(g({
			mode: "date",
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: B(z),
			handleMonthYearChange: B(te),
			instance: e.instance,
			isDisabled: B(R)
		})))])) : (k(), l(r, { key: 1 }, [t.$slots["top-extra"] ? (k(), l("div", ul, [F(t.$slots, "top-extra", { value: B(v) })])) : c("", !0), u("div", dl, [
			B(M)(e.instance) && !B(_).vertical ? (k(), s(Ic, {
				key: 0,
				"aria-label": B(y)?.prevMonth,
				disabled: B(J)(B(R)(!1)),
				inactive: ce.value,
				class: S(B(O)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: n[0] ||= (e) => B(te)(!1, !0)
			}, {
				default: K(() => [t.$slots["arrow-left"] ? F(t.$slots, "arrow-left", { key: 0 }) : c("", !0), t.$slots["arrow-left"] ? c("", !0) : (k(), s(B(os), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : c("", !0),
			u("div", { class: S(["dp--month-year-wrap", { "dp--year-disable-select": B(_).disableYearSelect }]) }, [(k(!0), l(r, null, P(be.value, (n) => (k(), l(r, { key: n.type }, [u("button", {
				type: "button",
				"data-dp-element": `overlay-${n.type}`,
				class: S(["dp--btn-base dp--bg-none dp--month-year-select-base dp--month-year-select", { "dp--hidden-el": ce.value }]),
				"aria-label": `${n.text}-${n.ariaLabel}`,
				"aria-haspopup": "dialog",
				"aria-expanded": n.showSelectionGrid,
				"data-test-id": `${n.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => n.toggle(),
				onKeydown: (e) => B(G)(e, () => n.toggle(), !0)
			}, [t.$slots[n.type] ? F(t.$slots, n.type, {
				key: 0,
				text: n.text,
				value: f[n.type]
			}) : c("", !0), t.$slots[n.type] ? c("", !0) : (k(), l(r, { key: 1 }, [p(L(n.text), 1)], 64))], 42, fl), m(a, {
				name: B(A)(n.showSelectionGrid),
				css: B(j)
			}, {
				default: K(() => [n.showSelectionGrid ? (k(), s(Mc, {
					key: 0,
					items: n.items,
					"is-last": B(_).autoApply && !B(w).keepActionRow,
					"skip-button-ref": !1,
					type: n.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": n.overlayLabel,
					onSelected: n.updateModelValue,
					onToggle: n.toggle
				}, d({
					"button-icon": K(() => [t.$slots["calendar-icon"] ? F(t.$slots, "calendar-icon", { key: 0 }) : c("", !0), t.$slots["calendar-icon"] ? c("", !0) : (k(), s(B(is), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${n.type}-overlay-value`] ? {
						name: "item",
						fn: K(({ item: e }) => [F(t.$slots, `${n.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${n.type}-overlay`] ? {
						name: "overlay",
						fn: K(() => [F(t.$slots, `${n.type}-overlay`, b({ ref_for: !0 }, fe.value(n.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${n.type}-overlay-header`] ? {
						name: "header",
						fn: K(() => [F(t.$slots, `${n.type}-overlay-header`, { toggle: n.toggle })]),
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
				])) : c("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			B(M)(e.instance) && B(_).vertical ? (k(), s(Ic, {
				key: 1,
				"aria-label": B(y)?.prevMonth,
				"el-name": "action-prev",
				disabled: B(J)(B(R)(!1)),
				inactive: ce.value,
				class: S(B(O)?.navBtnPrev),
				onActivate: n[1] ||= (e) => B(te)(!1, !0)
			}, {
				default: K(() => [t.$slots["arrow-up"] ? F(t.$slots, "arrow-up", { key: 0 }) : c("", !0), t.$slots["arrow-up"] ? c("", !0) : (k(), s(B(ls), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"inactive",
				"class"
			])) : c("", !0),
			B(ee)(e.instance) ? (k(), s(Ic, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: B(J)(B(R)(!0)),
				"aria-label": B(y)?.nextMonth,
				inactive: ce.value,
				class: S(B(O)?.navBtnNext),
				onActivate: n[2] ||= (e) => B(te)(!0, !0)
			}, {
				default: K(() => [t.$slots[B(_).vertical ? "arrow-down" : "arrow-right"] ? F(t.$slots, B(_).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : c("", !0), t.$slots[B(_).vertical ? "arrow-down" : "arrow-right"] ? c("", !0) : (k(), s(I(B(_).vertical ? B(us) : B(ss)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"inactive",
				"class"
			])) : c("", !0)
		])], 64))]));
	}
}), ml = ["inert", "aria-hidden"], hl = {
	class: "dp--calendar-header",
	role: "row"
}, gl = {
	key: 0,
	class: "dp--calendar-header-item",
	role: "gridcell"
}, _l = ["aria-label"], vl = {
	key: 0,
	class: "dp--calendar-item dp--week-num",
	role: "gridcell"
}, yl = { class: "dp--cell-inner" }, bl = [
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
], xl = /* @__PURE__ */ h({
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
	setup(e, { expose: t, emit: n }) {
		let i = n, s = e, { getDate: d, rootEmit: f, rootProps: h, state: g, defaults: { transitions: _, config: v, ariaLabels: y, multiCalendars: b, weekNumbers: C, multiDates: T, ui: E, weekStart: A } } = $(), { isDateAfter: j, isDateEqual: M, resetDateTime: ee, getCellId: I } = rc(), { checkKeyDown: te, checkStopPropagation: R, isTouchDevice: z } = nc(), { formatWeekDay: ne } = ac(), { childMount: H } = Ss(), U = V("calendar-wrap"), W = V("active-tooltip"), re = N([]), G = N(null), ie = N(!0), q = N(!1), ae = N(""), oe = N({
			bottom: "",
			left: "",
			transform: ""
		}), se = N({ left: "50%" });
		Lt(U, { onSwipeEnd: (e, t) => {
			v.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && i("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && i("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let ce = o(() => h.calendar ? h.calendar(s.mappedDates) : s.mappedDates), le = o(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Ae());
		D(() => {
			H(ms.calendar), v.value.monthChangeOnScroll && U.value && U.value.addEventListener("wheel", we, { passive: !1 });
		}), O(() => {
			v.value.monthChangeOnScroll && U.value && U.value.removeEventListener("wheel", we);
		});
		let ue = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", de = (e, t) => {
			if (h.transitions) {
				let n = ee(Q(d(), {
					month: s.month,
					year: s.year
				}));
				ae.value = j(ee(Q(d(), {
					month: e,
					year: t
				})), n) ? _.value[ue(!0)] : _.value[ue(!1)], ie.value = !1, x().then(() => ie.value = !0);
			}
		}, fe = o(() => ({ ...E.value.calendar })), pe = (e) => ({
			type: "dot",
			...e
		}), me = o(() => (e) => {
			let t = pe(e);
			return {
				"dp--marker-base": !0,
				"dp--marker-dot": t.type === "dot",
				"dp--marker-line": t.type === "line"
			};
		}), he = o(() => (e) => M(e, G.value)), ge = o(() => ({
			"dp--calendar": !0,
			"dp--calendar-next": b.value.count > 0 && s.instance !== 0
		})), _e = o(() => g.arrowNavigationLevel > 0), ve = o(() => (e) => !h.hideOffsetDates || e.current), ye = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			G.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await x(), W.value?.[0]) {
				let { left: e, width: t } = W.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, se.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, se.value.left = `${t - n / 2}px`);
			}
			oe.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, be = async (e, t, n) => {
			let r = Nt(re.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? oe.value = e.marker.customPosition(r) : await ye(r, e), f("tooltip-open", e.marker));
		}, xe = async (e, t, n) => {
			if (q.value && T.value.enabled && T.value.dragSelect) return i("select-date", e);
			if (i("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await be(e, t, n);
			}
		}, Se = (e) => {
			G.value && (G.value = null, oe.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), f("tooltip-close", e.marker));
		}, Ce = (e, t, n) => {
			e && (Array.isArray(re.value[t]) ? re.value[t][n] = e : re.value[t] = [e]);
		}, we = (e) => {
			v.value.monthChangeOnScroll && (e.preventDefault(), i("handle-scroll", e));
		}, Te = (e) => C.value ? C.value.type === "local" ? Vi(e.value, {
			weekStartsOn: A.value,
			locale: h.locale
		}) : C.value.type === "iso" ? Ri(e.value) : typeof C.value.type == "function" ? C.value.type(e.value) : "" : "", Ee = (e) => {
			let t = e[0];
			return C.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Te(t) : "" : Te(t);
		}, De = (e, t, n = !0) => {
			!n && z() || (!T.value.enabled || v.value.allowPreventDefault) && (R(e, v.value), i("select-date", t));
		}, Oe = (e) => {
			R(e, v.value);
		}, ke = (e) => {
			T.value.enabled && T.value.dragSelect ? (q.value = !0, i("select-date", e)) : T.value.enabled && i("select-date", e);
		}, Ae = () => {
			let e = d();
			return gi({
				start: Qr(e, {
					locale: h.locale,
					weekStartsOn: A.value
				}),
				end: Si(e, {
					locale: h.locale,
					weekStartsOn: A.value
				})
			}).map((e) => ne(e));
		}, je = (e) => y.value?.day?.(e) ?? ua(e.value, "MMMM do, yyyy", { locale: h.locale });
		return t({ triggerTransition: de }), (e, t) => (k(), l("div", {
			class: S(ge.value),
			inert: _e.value || void 0,
			"aria-hidden": _e.value || void 0
		}, [u("div", {
			ref: "calendar-wrap",
			class: S(fe.value),
			role: "grid"
		}, [
			u("div", hl, [B(C) ? (k(), l("div", gl, L(B(C).label), 1)) : c("", !0), (k(!0), l(r, null, P(le.value, (t, n) => (k(), l("div", {
				key: n,
				class: "dp--calendar-header-item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": B(y)?.weekDay?.(n)
			}, [F(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [p(L(t), 1)])], 8, _l))), 128))]),
			t[2] ||= u("div", { class: "dp--calendar-header-separator" }, null, -1),
			m(a, {
				name: ae.value,
				css: !!B(_)
			}, {
				default: K(() => [ie.value ? (k(), l("div", {
					key: 0,
					class: "dp--calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => q.value = !1
				}, [(k(!0), l(r, null, P(ce.value, (n, i) => (k(), l("div", {
					key: i,
					class: "dp--calendar-row",
					role: "row"
				}, [B(C) ? (k(), l("div", vl, [u("div", yl, L(Ee(n.days)), 1)])) : c("", !0), (k(!0), l(r, null, P(n.days, (n, a) => (k(), l("div", {
					id: B(I)(n.value),
					ref_for: !0,
					ref: (e) => Ce(e, i, a),
					key: a + i,
					role: "gridcell",
					class: "dp--calendar-item",
					"aria-selected": (n.classData["dp--active"] || n.classData["dp--range-border-start"] || n.classData["dp--range-border-end"]) ?? void 0,
					"aria-disabled": n.classData["dp--cell-disabled"] || void 0,
					"aria-label": je(n),
					tabindex: !n.current && B(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": B(I)(n.value),
					"data-dp-element-active": n.classData["dp--active"] ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: J((e) => De(e, n), ["prevent"]),
					onTouchend: (e) => De(e, n, !1),
					onKeydown: (t) => B(te)(t, () => e.$emit("select-date", n), !1, B(v).spaceConfirm, void 0),
					onMouseenter: (e) => xe(n, i, a),
					onMouseleave: (e) => Se(n),
					onMousedown: (e) => ke(n),
					onMouseup: t[0] ||= (e) => q.value = !1
				}, [u("div", { class: S(["dp--cell-inner", n.classData]) }, [
					e.$slots.day && ve.value(n) ? F(e.$slots, "day", {
						key: 0,
						day: +n.text,
						date: n.value
					}) : c("", !0),
					e.$slots.day ? c("", !0) : (k(), l(r, { key: 1 }, [p(L(n.text), 1)], 64)),
					n.marker && ve.value(n) ? F(e.$slots, "marker", {
						key: 2,
						marker: n.marker,
						day: +n.text,
						date: n.value
					}, () => [u("div", {
						class: S(me.value(n.marker)),
						style: w(n.marker.color ? { backgroundColor: n.marker.color } : {})
					}, null, 6)]) : c("", !0),
					he.value(n.value) ? (k(), l("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp--marker-tooltip",
						style: w(oe.value)
					}, [n.marker?.tooltip ? (k(), l("div", {
						key: 0,
						class: "dp--tooltip-content",
						onClick: Oe
					}, [(k(!0), l(r, null, P(n.marker.tooltip, (t, r) => (k(), l("div", {
						key: r,
						class: "dp--tooltip-text"
					}, [F(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: n.value
					}, () => [u("div", {
						class: "dp--tooltip-mark",
						style: w(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), u("div", null, L(t.text), 1)])]))), 128)), u("div", {
						class: "dp--arrow-bottom-tp",
						style: w(se.value)
					}, null, 4)])) : c("", !0)], 4)) : c("", !0)
				], 2)], 40, bl))), 128))]))), 128))], 32)) : c("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 10, ml));
	}
}), Sl = (e, t) => {
	let n = N([]), r = N(/* @__PURE__ */ new Date()), i = N(), { getDate: a, getDateFromParts: s, rootEmit: c, calendars: l, month: u, year: d, time: f, modelValue: p, rootProps: m, today: h, state: g, defaults: { multiCalendars: _, startTime: v, range: y, config: b, safeDates: S, multiDates: C, timeConfig: w, flow: T, weekStart: E } } = $(), { validateMonthYearInRange: O, isDisabled: k, isDateRangeAllowed: A, checkMinMaxRange: j } = Ds(), { updateTimeValues: M, getSetDateTime: P, assignTime: F, assignStartTime: ee, validateTime: I, disabledTimesConfig: te } = il(), { formatDay: L } = ac(), { setTime: R, isDateBefore: z, getDaysInBetween: B } = rc(), { checkRangeAutoApply: ne, getRangeWithFixedDate: V, handleMultiDatesSelect: H, setPresetDate: U } = Bc(), { getMapDate: W } = nc(), { selectOnAutoApply: re } = bc(e);
	Es(() => ce(g.isTextInputDate));
	let { updateFlowStep: G, flowStep: K } = Ss(), ie = (e) => !b.value.keepViewOnOffsetClick || e ? !0 : !i.value, q = (e, t, n, r = !1, i = !1) => {
		ie(i) && (!r && t && n && J(e, t, n), l.value[e] ??= l.value[e] = {
			month: 0,
			year: 0
		}, l.value[e].month = t ?? l.value[e]?.month, l.value[e].year = n ?? l.value[e]?.year);
	}, J = (e, t, n) => {
		(l.value.at(e)?.month !== t || l.value.at(e)?.year !== n) && c("update-month-year", {
			month: t,
			year: n,
			instance: e
		});
	}, ae = () => {
		v.value && ee(v.value);
	};
	D(() => {
		p.value || (be(), ae()), ce(!0), m.focusStartDate && m.startDate && be();
	});
	let oe = o(() => !T.value?.steps?.length || T.value.steps.at(-1) === K.value), se = () => {
		m.autoApply && e("auto-apply", !oe.value);
	}, ce = (e = !1) => {
		if (p.value) return Array.isArray(p.value) ? (n.value = p.value, ge(e)) : fe(p.value, e);
		if (_.value.count && e && !m.startDate) return de(a(), e);
	}, le = () => Array.isArray(p.value) && y.value.enabled ? X(p.value[0]) === X(p.value[1] ?? p.value[0]) : !1, ue = (e) => {
		let t = Jr(e, 1);
		return {
			month: X(t),
			year: Z(t)
		};
	}, de = (e = a(), t = !1) => {
		if (_.value.count && _.value.static && !t || q(0, X(e), Z(e), t), _.value.count && (!p.value || le() || !_.value.solo) && (!_.value.solo || t)) for (let e = 1; e < _.value.count; e++) {
			let t = Yr(Q(a(), {
				month: u.value(e - 1),
				year: d.value(e - 1)
			}), { months: 1 });
			l.value[e] = {
				month: X(t),
				year: Z(t)
			};
		}
	}, fe = (e, t) => {
		de(e, t), F("hours", ha(e)), F("minutes", _a(e)), F("seconds", va(e)), _.value.count && t && ye();
	}, pe = (e) => {
		if (_.value.count) {
			if (_.value.solo) return 0;
			let t = X(e[0]), n = X(e[1]);
			return Math.abs(n - t) < _.value.count ? 0 : 1;
		}
		return 1;
	}, me = (e, t) => {
		e[1] && y.value.showLastInRange ? de(e[pe(e)], t) : de(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : f[n][1]];
		F("hours", n(ha, "hours")), F("minutes", n(_a, "minutes")), F("seconds", n(va, "seconds"));
	}, he = (e, t) => {
		if ((y.value.enabled || m.weekPicker) && !C.value.enabled) return me(e, t);
		if (C.value.enabled && t) {
			let n = e.at(-1);
			if (n) return fe(n, t);
		}
	}, ge = (e) => {
		let t = p.value;
		he(t, e), _.value.count && _.value.solo && ye();
	}, _e = (e, n) => {
		let r = Q(a(), {
			month: u.value(n),
			year: d.value(n)
		}), i = e < 0 ? Jr(r, 1) : Vo(r, 1);
		O(X(i), Z(i), e < 0, m.preventMinMaxNavigation) && (q(n, X(i), Z(i)), _.value.count && !_.value.solo && ve(n), t());
	}, ve = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = Vo(Q(a(), {
				month: u.value(t + 1),
				year: d.value(t + 1)
			}), 1);
			q(t, X(e), Z(e));
		}
		for (let t = e + 1; t <= _.value.count - 1; t++) {
			let e = Jr(Q(a(), {
				month: u.value(t - 1),
				year: d.value(t - 1)
			}), 1);
			q(t, X(e), Z(e));
		}
	}, ye = () => {
		if (Array.isArray(p.value) && p.value.length === 2) {
			let e = a(a(p.value[1] ?? Jr(p.value[0], 1))), [t, n] = [X(p.value[0]), Z(p.value[0])], [r, i] = [X(p.value[1]), Z(p.value[1])];
			(t !== r || t === r && n !== i) && _.value.solo && q(1, X(e), Z(e));
		} else p.value && !Array.isArray(p.value) && (q(0, X(p.value), Z(p.value)), de(a()));
	}, be = () => {
		m.startDate && (q(0, X(a(m.startDate)), Z(a(m.startDate))), _.value.count && ve(0));
	}, xe = (e, t) => {
		if (b.value.monthChangeOnScroll) {
			let n = Date.now() - r.value.getTime(), i = Math.abs(e.deltaY), a = 500;
			i > 1 && (a = 100), i > 100 && (a = 0), n > a && (r.value = /* @__PURE__ */ new Date(), _e(b.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, Se = (e, t, n = !1) => {
		b.value.monthChangeOnArrows && m.vertical === n && Ce(e, t);
	}, Ce = (e, t) => {
		_e(e === "right" ? -1 : 1, t);
	}, we = (e) => {
		if (S.value.markers) return W(e.value, S.value.markers);
	}, Te = (e, t) => {
		switch (m.sixWeeks === !0 ? "append" : m.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, Ee = (e, t, n) => {
		if (n) {
			let r = n.days.at(-1);
			if (r) {
				let n = Oe(qr(r.value, 1), X(t));
				e.push({ days: n });
			}
		}
	}, De = (e, t, n, r) => {
		if (m.sixWeeks && e.length < 6) {
			let i = 6 - e.length, [a, o] = Te((t.getDay() + 7 - r) % 7, 6 - (n.getDay() + 7 - r) % 7);
			for (let n = 1; n <= i; n++) if (o ? !!(n % 2) == a : a) {
				let n = e[0].days[0], r = Oe(qr(n.value, -7), X(t));
				e.unshift({ days: r });
			} else Ee(e, t, e.at(-1));
		}
		return e;
	}, Oe = (e, t) => {
		let n = a(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = qr(n, e), a = X(i) !== t;
			r.push({
				text: m.hideOffsetDates && a ? "" : L(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, ke = (e, t) => {
		let n = [], r = s(t, e), i = s(t, e + 1, 0), a = Qr(r, { weekStartsOn: E.value }), o = (t) => {
			let r = Oe(t, e);
			n.push({ days: r });
			let a = r.at(-1)?.value;
			z(a, i) && o(qr(t, 7));
		};
		return o(a), De(n, r, i, E.value);
	}, Ae = (e) => {
		let t = R({
			hours: f.hours,
			minutes: f.minutes,
			seconds: Le()
		}, a(e.value));
		c("date-click", t), C.value.enabled ? H(t, C.value.limit) : p.value = t, G("calendar"), x().then(() => {
			se();
		});
	}, je = (e) => y.value.noDisabledRange ? B(n.value[0], e).some((e) => k(e)) : !1, Me = () => {
		n.value = p.value ? p.value.slice().filter((e) => !!e) : [], n.value.length === 2 && !(y.value.fixedStart || y.value.fixedEnd) && (n.value = []);
	}, Ne = (e, t) => {
		let r = [a(e.value), qr(a(e.value), +y.value.autoRange)];
		A(r) ? (t && Pe(e.value), n.value = r) : c("invalid-date", e.value);
	}, Pe = (e) => {
		if (q(0, X(a(e)), Z(a(e))), _.value.count > 0) for (let t = 1; t < _.value.count; t++) {
			let n = ue(Q(a(e), {
				year: d.value(t - 1),
				month: u.value(t - 1)
			}));
			q(t, n.month, n.year);
		}
	}, Fe = (e) => {
		if (je(e.value) || !j(e.value, p.value, +!y.value.fixedStart)) return c("invalid-date", e.value);
		n.value = V(a(e.value));
	}, Ie = (e, t) => {
		if (Me(), y.value.autoRange) return Ne(e, t);
		if (y.value.fixedStart || y.value.fixedEnd) return Fe(e);
		n.value[0] ? j(a(e.value), p.value) && !je(e.value) ? z(a(e.value), a(n.value[0])) ? y.value.autoSwitchStartEnd ? (n.value.unshift(a(e.value)), c("range-end", n.value[0])) : (n.value[0] = a(e.value), c("range-start", n.value[0])) : (n.value[1] = a(e.value), c("range-end", n.value[1])) : c("invalid-date", e.value) : (n.value[0] = a(e.value), c("range-start", n.value[0]));
	}, Le = (e = !0) => w.value.enableSeconds ? Array.isArray(f.seconds) ? e ? f.seconds[0] : f.seconds[1] : f.seconds : 0, Re = (e) => {
		n.value[e] = R({
			hours: f.hours[e],
			minutes: f.minutes[e],
			seconds: Le(e !== 1)
		}, n.value[e]);
	}, ze = () => {
		n.value[0] && n.value[1] && +n.value?.[0] > +n.value?.[1] && (n.value.reverse(), c("range-start", n.value[0]), c("range-end", n.value[1]));
	}, Be = () => {
		n.value.length && (n.value[0] && !n.value[1] ? Re(0) : (Re(0), Re(1), G("calendar")), ze(), p.value = n.value.slice(), ne(n.value, e, n.value.length < 2 || T.value?.steps.length ? T.value?.steps.at(-1) !== K.value : !1));
	}, Ve = (e, t = !1) => {
		if (k(e.value) || !e.current && m.hideOffsetDates) return c("invalid-date", e.value);
		if (i.value = structuredClone(e), !y.value.enabled) return Ae(e);
		Array.isArray(f.hours) && Array.isArray(f.minutes) && !C.value.enabled && (Ie(e, t), Be());
	}, He = (e, n) => {
		let r = u.value(e) !== n.month;
		q(e, n.month, n.year, !1, !0), _.value.count && !_.value.solo && ve(e), t(_.value.solo ? e : void 0), n.fromNav || G(r ? "month" : "year");
	}, Ue = (e) => {
		U({ value: e }), re(), m.multiCalendars && x().then(() => ce(!0));
	}, We = () => {
		if (Array.isArray(p.value)) {
			if (C.value.enabled) {
				let e = Ge();
				p.value[p.value.length - 1] = P(e);
			} else p.value = p.value.map((e, t) => e && P(e, t));
		} else p.value = P(p.value);
		e("time-update");
	}, Ge = () => Array.isArray(p.value) && p.value.length ? p.value[p.value.length - 1] : null, Ke = (e) => {
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
		disabledTimesConfig: te,
		today: h,
		validateTime: I,
		getCalendarDays: ke,
		getMarker: we,
		handleScroll: xe,
		handleSwipe: Ce,
		handleArrow: Se,
		selectDate: Ve,
		updateMonthYear: He,
		presetDate: Ue,
		updateTime: (e) => {
			let t = Ke(e);
			M(e, We), t && c(t, p.value[t === "range-start" ? 0 : 1]), T.value?.steps.length && se();
		},
		assignMonthAndYear: de,
		setStartTime: ae
	};
}, Cl = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = rc(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g, weekStart: _ }, modelValue: v } = $(), { isDisabled: y } = Ds(), b = N(null), x = (e) => {
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
				let t = qr(b.value, +g.value.autoRange), n = o(c(b.value), _.value);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (b.value) {
				let t = qr(b.value, +g.value.autoRange);
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
	}, M = (e) => i(v.value, b.value, e.value), P = () => u.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, F = () => !u.modelAuto || e(v.value), ee = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !E(e) && !E(e, !1);
		return !y(e.value) && !O(e) && !(!e.current && u.hideOffsetDates) && t;
	}, I = (e) => g.value.enabled ? u.modelAuto ? P() && O(e) : !1 : O(e), te = (e) => m.value ? t(e.value, h.value.highlight) : !1, L = (e) => {
		let t = y(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, R = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), z = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && F() && (e.current || !u.hideOffsetDates) && !O(e) ? M(e) : !1, B = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, v.value[0]);
			return ba(e.value, t) || ya(e.value, n);
		}
		return !1;
	}, ne = (e) => {
		if (Array.isArray(v.value) && v.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, v.value[0]);
			return i([t, n], v.value[0], e.value);
		}
		return !1;
	}, V = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? B(e) || ne(e) : g.value.maxRange ? B(e) : ne(e) : !1, H = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = G(e), o = g.value.enabled ? t || i : !1;
		return {
			"dp--cell-offset": !e.current,
			"dp--pointer": !u.disabled && !(!e.current && u.hideOffsetDates) && !y(e.value) && !V(e),
			"dp--cell-disabled": y(e.value) || V(e),
			"dp--cell-highlight": !L(e) && (te(e) || R(e)) && !I(e) && !o && !j(e) && !(z(e) && u.weekPicker) && !i,
			"dp--cell-highlight-active": !L(e) && (te(e) || R(e)) && I(e),
			"dp--today": !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, U = (e) => ({
		"dp--active": I(e),
		"dp--date-hoverable": ee(e)
	}), W = (e) => {
		if (v.value && !Array.isArray(v.value)) {
			let t = o(v.value, _.value);
			return {
				...ae(e),
				"dp--range-border-start dp--active": a(t[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...ae(e) };
	}, re = (e) => {
		if (v.value && Array.isArray(v.value)) {
			let t = o(v.value[0], _.value), i = v.value[1] ? o(v.value[1], _.value) : [];
			return {
				...ae(e),
				"dp--range-border-start dp--active": a(t[0], e.value) || a(i[0], e.value),
				"dp--range-border-end dp--active": a(t[1], e.value) || a(i[1], e.value),
				"dp--range-preview dp--range-between-week": n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				"dp--range-between": n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...ae(e) };
	}, G = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && E(e) && F() : E(e) && F(),
		isRangeEnd: d.value.count > 0 ? e.current && E(e, !1) && F() : E(e, !1) && F()
	}), K = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(e) && e.length === 2, ie = (e, t, n, r) => !K(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && a(e.value, b.value) && ba(e.value, v.value[0]) && !n : g.value.fixedStart && a(e.value, b.value) && ya(e.value, v.value[1]) && !r, q = (e, t) => !K(v.value) || !b.value ? !1 : t ? g.value.fixedEnd && ya(e.value, b.value) && ba(e.value, v.value[0]) : g.value.fixedStart && ba(e.value, b.value) && ya(e.value, v.value[1]), J = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = G(e);
		return {
			"dp--range-border-start dp--active": t,
			"dp--range-border-end dp--active": n,
			"dp--range-between": z(e) || q(e, !0) || q(e, !1),
			"dp--date-hoverable": a(e.value, b.value) && !t && !n && !u.weekPicker,
			"dp--date-hoverable dp--date-hoverable-start": D(e, !0) || ie(e, !0, t, n),
			"dp--date-hoverable dp--date-hoverable-end": D(e, !1) || ie(e, !1, t, n)
		};
	}, ae = (e) => ({
		...J(e),
		"dp--range-preview dp--cell-auto-range": A(e),
		"dp--range-preview dp--range-border-start dp--cell-auto-range-start": j(e),
		"dp--range-preview dp--range-border-end dp--cell-auto-range-end": k(e)
	}), oe = (e) => g.value.enabled ? g.value.autoRange ? ae(e) : u.modelAuto ? {
		...U(e),
		...J(e)
	} : u.weekPicker ? re(e) : J(e) : u.weekPicker ? W(e) : U(e);
	return {
		setHoverDate: x,
		clearHoverDate: S,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...H(e),
			...oe(e),
			[p.value.dayClass ? p.value.dayClass(e.value, v.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, wl = { key: 0 }, Tl = /* @__PURE__ */ h({
	__name: "DatePicker",
	props: /*@__PURE__*/ y({
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Zs),
	emits: [
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(e, { expose: t, emit: n }) {
		let i = n, { month: a, year: u, modelValue: f, time: p, disabledTimesConfig: h, today: _, validateTime: v, getCalendarDays: y, getMarker: x, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: O, presetDate: A, updateTime: j, assignMonthAndYear: M, setStartTime: N } = Sl(i, de), ee = ne(), { setHoverDate: I, getDayClassData: te, clearHoverDate: L } = Cl(), { getDate: R, rootEmit: z, rootProps: H, defaults: { multiCalendars: U, timeConfig: W } } = $(), { getYears: re, getMonths: ie } = oc(), { getCellId: q } = rc(), J = V("calendar-header"), ae = V("calendar"), oe = V("time-picker"), se = pc(ee, uc.Calendar), ce = pc(ee, uc.DatePickerHeader), le = pc(ee, uc.TimePicker);
		G(U, (e, t) => {
			e.count - t.count > 0 && M();
		}, { deep: !0 });
		let ue = o(() => (e) => y(a.value(e), u.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = x(e), e.classData = te(e), e))
		})));
		function de(e) {
			e || e === 0 ? ae.value?.[e]?.triggerTransition(a.value(e), u.value(e)) : ae.value?.forEach((e, t) => e?.triggerTransition(a.value(t), u.value(t)));
		}
		let fe = (e, t = 0) => {
			J.value?.[t]?.toggleMonthPicker(e);
		}, pe = (e, t = 0) => {
			J.value?.[t]?.toggleYearPicker(e);
		}, me = (e, t) => {
			oe.value?.toggleTimePicker(e, t);
		}, he = (e, t) => {
			if (!H.range) {
				let n = f.value ? f.value : _, r = t ? R(t) : n, i = e ? Qr(r, { weekStartsOn: 1 }) : Si(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: X(r) === a.value(0),
					text: "",
					classData: {}
				}), document.getElementById(q(i))?.focus();
			}
		}, ge = (e) => {
			J.value?.[0]?.handleMonthYearChange(e, !0);
		}, _e = (e) => {
			O(0, {
				month: a.value(0),
				year: u.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ve = (e) => {
			z("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: L,
			presetDate: A,
			handleArrow: w,
			updateMonthYear: O,
			setStartTime: N,
			toggleMonthPicker: fe,
			toggleYearPicker: pe,
			toggleTimePicker: me,
			getSidebarProps: () => ({
				modelValue: f,
				month: a,
				year: u,
				time: p,
				updateTime: j,
				updateMonthYear: O,
				selectDate: D,
				presetDate: A
			}),
			changeMonth: ge,
			changeYear: _e,
			selectWeekDate: he
		}), (t, n) => (k(), l(r, null, [m(Pc, { collapse: e.collapse }, {
			default: K(({ instances: i, wrapClass: o }) => [(k(!0), l(r, null, P(i, (r) => (k(), l("div", {
				key: r,
				class: S(o)
			}, [B(H).hideMonthYearSelect ? c("", !0) : (k(), s(pl, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: B(ie)(),
				years: B(re)(),
				month: B(a)(r),
				year: B(u)(r),
				instance: r,
				"menu-wrap-ref": e.menuWrapRef,
				onUpdateMonthYear: (e) => B(O)(r, e),
				onOverlayClosed: ve
			}, d({ _: 2 }, [P(B(ce), (e) => ({
				name: e,
				fn: K((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), m(xl, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": ue.value(r),
				instance: r,
				month: B(a)(r),
				year: B(u)(r),
				onSelectDate: (e) => B(D)(e, r !== 1),
				onSetHoverDate: n[0] ||= (e) => B(I)(e),
				onHandleScroll: (e) => B(T)(e, r),
				onHandleSwipe: (e) => B(E)(e, r)
			}, d({ _: 2 }, [P(B(se), (e) => ({
				name: e,
				fn: K((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
		}, 8, ["collapse"]), B(W).enableTimePicker ? (k(), l("div", wl, [F(t.$slots, "time-picker", C(g({
			time: B(p),
			updateTime: B(j)
		})), () => [m(rl, {
			ref: "time-picker",
			hours: B(p).hours,
			minutes: B(p).minutes,
			seconds: B(p).seconds,
			"disabled-times-config": B(h),
			"validate-time": B(v),
			"no-overlay-focus": e.noOverlayFocus,
			"onUpdate:hours": n[1] ||= (e) => B(j)({
				hours: e,
				minutes: B(p).minutes,
				seconds: B(p).seconds
			}),
			"onUpdate:minutes": n[2] ||= (e) => B(j)({
				hours: B(p).hours,
				minutes: e,
				seconds: B(p).seconds
			}),
			"onUpdate:seconds": n[3] ||= (e) => B(j)({
				hours: B(p).hours,
				minutes: B(p).minutes,
				seconds: e
			})
		}, d({ _: 2 }, [P(B(le), (e) => ({
			name: e,
			fn: K((n) => [F(t.$slots, e, C(g(n)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : c("", !0)], 64));
	}
}), El = (e) => {
	let { getDate: t, modelValue: n, year: r, calendars: i, defaults: { highlight: a, range: s, multiDates: c } } = $(), { isDateBetween: l, isDateEqual: u } = rc(), { checkRangeAutoApply: d, handleMultiDatesSelect: f, setMonthOrYearRange: p } = Bc();
	Es();
	let { isDisabled: m } = Ds(), { formatQuarterText: h } = ac(), { childMount: g } = Ss(), { groupedYears: _, showYearPicker: v, isDisabled: y, selectYear: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = zc(), T = N();
	D(() => {
		g(), w();
	});
	let E = o(() => (e) => n.value ? Array.isArray(n.value) ? n.value.some((t) => Po(e, t)) : Po(n.value, e) : !1), O = (e) => {
		if (s.value.enabled) {
			if (Array.isArray(n.value)) {
				let t = u(e, n.value[0]) || u(e, n.value[1]);
				return l(n.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === di(t) && e.year === Z(t), A = (e) => typeof a.value == "function" ? a.value({
		quarter: di(e),
		year: Z(e)
	}) : a.value.quarters.some((t) => k(t, e)), j = o(() => (e) => {
		let n = Q(t(), { year: r.value(e) });
		return vi({
			start: xi(n),
			end: bi(n)
		}).map((e) => {
			let t = _i(e), n = Ci(e), r = m(e), i = O(t), a = A(t);
			return {
				text: h(t, n),
				value: t,
				active: E.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), M = (t) => {
		f(t, c.value.limit), e("auto-apply", !0);
	}, P = (t) => {
		n.value = p(t), d(n.value, e, n.value.length < 2);
	}, F = (t) => {
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
			T.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return i.value[t].month = X(Ci(e)), c.value.enabled ? M(e) : s.value.enabled ? P(e) : F(e);
		}
	};
}, Dl = { class: "dp--quarter-items" }, Ol = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], kl = /* @__PURE__ */ h({
	__name: "QuarterPicker",
	props: {
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let i = n, { defaults: { config: a } } = $(), o = ne(), { boolHtmlAttribute: f } = cc(), h = pc(o, uc.YearMode), { groupedYears: g, year: _, isDisabled: v, quarters: y, modelValue: x, showYearPicker: C, setHoverDate: T, selectQuarter: E, toggleYearPicker: D, handleYearSelect: O, handleYear: A } = El(i);
		return t({
			getSidebarProps: () => ({
				modelValue: x,
				year: _,
				selectQuarter: E,
				handleYearSelect: O,
				handleYear: A
			}),
			toggleYearPicker: (e) => D(0, e)
		}), (t, n) => (k(), s(Pc, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: K(({ instances: e, wrapClass: n }) => [(k(!0), l(r, null, P(e, (e) => (k(), l("div", {
				key: e,
				class: S(n)
			}, [u("div", {
				class: "dp-quarter-picker-wrap",
				style: w({ minHeight: `${B(a).modeHeight}px` })
			}, [
				t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
					key: 0,
					value: B(x)
				}) : c("", !0),
				u("div", null, [m(Rc, {
					items: B(g)(e),
					instance: e,
					"show-year-picker": B(C)[e],
					year: B(_)(e),
					"is-disabled": (t) => B(v)(e, t),
					onHandleYear: (t) => B(A)(e, t),
					onYearSelect: (t) => B(O)(t, e),
					onToggleYearPicker: (t) => B(D)(e, t?.show)
				}, d({ _: 2 }, [P(B(h), (e) => ({
					name: e,
					fn: K((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
				u("div", Dl, [(k(!0), l(r, null, P(B(y)(e), (n, r) => (k(), l("div", { key: r }, [u("button", {
					type: "button",
					class: S(["dp--btn-base dp--qr-btn", {
						"dp--active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": n.value,
					disabled: B(f)(n.disabled),
					onClick: (t) => B(E)(n.value, e, n.disabled),
					onMouseover: (e) => B(T)(n.value)
				}, [F(t.$slots, "quarter", {
					value: n.value,
					text: n.text
				}, () => [p(L(n.text), 1)])], 42, Ol)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), Al = [
	"id",
	"tabindex",
	"role",
	"aria-label",
	"aria-modal"
], jl = {
	key: 0,
	class: "dp--menu-load-container"
}, Ml = {
	key: 1,
	class: "dp--menu-header"
}, Nl = ["data-dp-mobile"], Pl = {
	key: 0,
	class: "dp--sidebar-left"
}, Fl = ["data-dp-mobile"], Il = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], Ll = { class: "dp--instance-calendar" }, Rl = {
	key: 2,
	class: "dp--sidebar-right"
}, zl = {
	key: 2,
	class: "dp--action-extra"
}, Bl = /* @__PURE__ */ h({
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
	setup(e, { expose: t, emit: n }) {
		let i = n, a = ne(), { state: f, rootProps: p, defaults: { textInput: m, inline: h, config: _, ui: v, ariaLabels: y }, rootEmit: b, setState: x } = $(), { isMobile: T } = ic(), { handleEventPropagation: E, getElWithin: A, checkStopPropagation: j, checkKeyDown: M } = nc(), { selectCurrentDate: ee } = bc();
		Cs();
		let te = V("inner-menu"), R = V("dp-menu"), H = V("dyn-cmp"), U = N(0), W = N(!1), re = N(!1), { executeFlow: G } = xs(H, i), ie = (e) => {
			re.value = !0, _.value.allowPreventDefault && e.preventDefault(), j(e, _.value, !0);
		};
		D(() => {
			W.value = !0, q(), globalThis.addEventListener("resize", q);
			let e = Nt(R);
			e && !m.value.enabled && !h.value.enabled && x("menuFocused", !0), e && (e.addEventListener("pointerdown", ie), e.addEventListener("mousedown", ie), b("menu-mounted", e)), document.addEventListener("mousedown", Te);
		}), O(() => {
			globalThis.removeEventListener("resize", q), document.removeEventListener("mousedown", Te);
			let e = Nt(R);
			e && (e.removeEventListener("pointerdown", ie), e.removeEventListener("mousedown", ie), b("menu-unmounted", e));
		});
		let q = () => {
			let e = Nt(te);
			e && (U.value = e.getBoundingClientRect().width);
		}, ae = o(() => p.monthPicker ? Hc : p.yearPicker ? Wc : p.timePicker ? ol : p.quarterPicker ? kl : Tl), oe = () => {
			let e = Nt(R);
			e && e.focus({ preventScroll: !0 });
		}, se = o(() => H.value?.getSidebarProps() || {}), ce = pc(a, uc.ActionRow), le = pc(a, uc.PassTrough), ue = o(() => ({
			"dp--menu-unclickable dp--menu-disabled": p.disabled,
			"dp--menu-unclickable dp--menu-readonly": p.readonly,
			"dp--menu-unclickable dp-menu-loading": p.loading
		})), de = o(() => ({
			"dp--menu": !0,
			"dp--menu-index": !h.value.enabled,
			"dp--relative": h.value.enabled,
			...v.value.menu
		})), fe = (e) => {
			j(e, _.value, !0);
		}, pe = (e) => {
			_.value.escClose && (i("close-picker"), E(e, _.value));
		}, me = (e) => {
			p.arrowNavigation || (e === _s.left || e === _s.up ? ve("handleArrow", _s.left, 0, e === _s.up) : ve("handleArrow", _s.right, 0, e === _s.down));
		}, he = (e) => {
			x("shiftKeyInMenu", e.shiftKey), _.value.tabOutClosesMenu && !p.hideMonthYearSelect && e.code === vs.tab && e.target.classList.contains("dp--menu") && f.shiftKeyInMenu && (e.preventDefault(), j(e, _.value, !0), i("close-picker"));
		}, ge = (e) => {
			H.value?.toggleTimePicker(!1, !1), H.value?.toggleMonthPicker(!1, e), H.value?.toggleYearPicker(!1, e);
		}, _e = (e, t = 0) => e === "month" ? H.value?.toggleMonthPicker(!0, t) : e === "year" ? H.value?.toggleYearPicker(!0, t) : e === "time" ? H.value?.toggleTimePicker(!0) : ge(t), ve = (e, ...t) => {
			H.value?.[e] && H.value?.[e](...t);
		}, ye = (e) => {
			ve("presetDate", z(e));
		}, be = () => {
			ve("clearHoverDate");
		}, xe = (e, t) => {
			ve("updateMonthYear", e, t);
		}, Se = (e, t) => {
			e.preventDefault(), me(t);
		}, Ce = (e) => {
			_.value.allowPreventDefault && (e.preventDefault(), j(e, _.value, !0));
		}, we = (e) => {
			if (_.value.onInternalKeydown?.(e) !== !1) {
				if (he(e), e.key === vs.home || e.key === vs.end) return ve("selectWeekDate", e.key === vs.home, e.target.getAttribute("id"));
				switch ((e.key === vs.pageUp || e.key === vs.pageDown) && (e.shiftKey ? (ve("changeYear", e.key === vs.pageUp), A(R.value, "overlay-year")?.focus()) : (ve("changeMonth", e.key === vs.pageUp), A(R.value, e.key === vs.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && R.value?.focus({ preventScroll: !0 })), e.key) {
					case vs.esc: return pe(e);
					case vs.enter: return Ce(e);
					case vs.arrowLeft: return Se(e, _s.left);
					case vs.arrowRight: return Se(e, _s.right);
					case vs.arrowUp: return Se(e, _s.up);
					case vs.arrowDown: return Se(e, _s.down);
					default: return;
				}
			}
		}, Te = (e) => {
			h.value.enabled && !h.value.input && !R.value?.contains(e.target) && re.value && (re.value = !1, i("menu-blur"));
		};
		return t({
			updateMonthYear: xe,
			switchView: _e,
			onValueCleared: () => {
				H.value?.setStartTime?.();
			},
			executeFlow: G
		}), (t, n) => (k(), l("div", {
			id: B(p).menuId,
			ref: "dp-menu",
			tabindex: B(h).enabled ? void 0 : "0",
			role: B(h).enabled ? void 0 : "dialog",
			"aria-label": B(y)?.menu,
			"aria-modal": !B(h).enabled || void 0,
			class: S(de.value),
			onMouseleave: be,
			onClick: fe,
			onKeydown: we
		}, [
			(B(p).disabled || B(p).readonly) && B(h).enabled || B(p).loading ? (k(), l("div", {
				key: 0,
				class: S(ue.value)
			}, [B(p).loading ? (k(), l("div", jl, [...n[5] ||= [u("span", { class: "dp--menu-loader" }, null, -1)]])) : c("", !0)], 2)) : c("", !0),
			t.$slots["menu-header"] ? (k(), l("div", Ml, [F(t.$slots, "menu-header")])) : c("", !0),
			F(t.$slots, "arrow"),
			u("div", {
				ref: "inner-menu",
				class: S({
					"dp--menu-content-wrapper": B(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (B(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": B(T),
				style: w({ "--dp-menu-width": `${U.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (k(), l("div", Pl, [F(t.$slots, "left-sidebar", C(g(se.value)))])) : c("", !0),
				B(p).presetDates.length ? (k(), l("div", {
					key: 1,
					class: S({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": B(T)
				}, [(k(!0), l(r, null, P(B(p).presetDates, (n, i) => (k(), l(r, { key: i }, [n.slot ? F(t.$slots, n.slot, {
					key: 0,
					presetDate: ye,
					label: n.label,
					value: n.value
				}) : (k(), l("button", {
					key: 1,
					type: "button",
					style: w(n.style || {}),
					class: S(["dp--btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": n.testId ?? void 0,
					"data-dp-mobile": B(T),
					onClick: J((e) => ye(n.value), ["prevent"]),
					onKeydown: (e) => B(M)(e, () => ye(n.value), !0)
				}, L(n.label), 47, Il))], 64))), 128))], 10, Fl)) : c("", !0),
				u("div", Ll, [(k(), s(I(ae.value), {
					ref: "dyn-cmp",
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": R.value,
					onFocusMenu: oe,
					onSelectDate: n[0] ||= (e) => t.$emit("select-date"),
					onAutoApply: n[1] ||= (e) => t.$emit("auto-apply", e),
					onTimeUpdate: n[2] ||= (e) => t.$emit("time-update")
				}, d({ _: 2 }, [P(B(le), (e) => ({
					name: e,
					fn: K((n) => [F(t.$slots, e, C(g({ ...n })))])
				}))]), 1064, [
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref"
				]))]),
				t.$slots["right-sidebar"] ? (k(), l("div", Rl, [F(t.$slots, "right-sidebar", C(g(se.value)))])) : c("", !0)
			], 14, Nl),
			t.$slots["action-extra"] ? (k(), l("div", zl, [t.$slots["action-extra"] ? F(t.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: B(ee)
			}) : c("", !0)])) : c("", !0),
			!B(p).autoApply || B(_).keepActionRow ? (k(), s(Tc, {
				key: 3,
				"menu-mount": W.value,
				"calendar-width": U.value,
				onClosePicker: n[3] ||= (e) => t.$emit("close-picker"),
				onSelectDate: n[4] ||= (e) => t.$emit("select-date"),
				onSelectNow: B(ee)
			}, d({ _: 2 }, [P(B(ce), (e) => ({
				name: e,
				fn: K((n) => [F(t.$slots, e, C(g(n)))])
			}))]), 1032, [
				"menu-mount",
				"calendar-width",
				"onSelectNow"
			])) : c("", !0)
		], 42, Al));
	}
}), Vl = h({
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
			return e.to && !e.disabled ? _(i, { to: e.to }, n) : n;
		};
	}
}), Hl = ["data-dp-mobile"], Ul = /* @__PURE__ */ h({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: n, setState: r, inputValue: i, modelValue: f, rootProps: p, defaults: { inline: h, config: _, textInput: v, range: y, multiDates: b, teleport: T, floatingConfig: E, flow: A } } = $(), { validateDate: j, isValidTime: M } = Ds(), { menuTransition: ee, showTransition: I } = Ts(), { isMobile: te } = ic(), { findNextFocusableElement: L, getNumVal: z } = nc(), H = ne(), U = N(!1), W = N(h.value.enabled), re = N(h.value.enabled || p.centered), ie = R(p, "modelValue"), q = R(p, "timezone"), J = V("dp-menu-wrap"), ae = V("dp-menu"), oe = V("input-cmp"), se = V("picker-wrapper"), ce = V("menu-arrow"), le = N(!1), ue = N(!1), de = N(!1), fe = N(!0), { floatingStyles: pe, middlewareData: me, placement: he, y: ge } = zr(oe, J, {
			strategy: E.value.strategy,
			placement: E.value.placement,
			middleware: ((e) => (E.value.flip && e.push(Tr(typeof E.value.flip == "object" ? E.value.flip : {})), E.value.shift && e.push(wr(typeof E.value.shift == "object" ? E.value.shift : {})), E.value.arrow && e.push(Ir({ element: E.value.arrow === !0 ? ce : E.value.arrow })), e))([Cr(E.value.offset)]),
			whileElementsMounted: Sr
		});
		D(() => {
			ye(p.modelValue), x().then(() => {
				h.value.enabled || globalThis.addEventListener("resize", Oe);
			}), h.value.enabled && (U.value = !0), globalThis.addEventListener("keyup", ke), globalThis.addEventListener("keydown", Ae);
		}), O(() => {
			h.value.enabled || globalThis.removeEventListener("resize", Oe), globalThis.removeEventListener("keyup", ke), globalThis.removeEventListener("keydown", Ae);
		});
		let _e = mc(H, p.presetDates), ve = pc(H, uc.Input);
		G([ie, q], () => {
			ye(ie.value);
		}, { deep: !0 }), G([he, ge], () => {
			!h.value.enabled && !p.centered && fe.value && (re.value = !1, x().then(() => {
				fe.value = !1, re.value = !0;
			}));
		});
		let { parseExternalModelValue: ye, emitModelValue: be, formatInputValue: xe, checkBeforeEmit: Se } = ws(), Ce = o(() => ({
			"dp--main": !0,
			"dp--theme-dark": p.dark,
			"dp--theme-light": !p.dark,
			"dp--flex-display": h.value.enabled,
			"dp--flex-display-collapsed": de.value,
			"dp--flex-display-with-input": h.value.input
		})), we = o(() => p.dark ? "dp--theme-dark" : "dp--theme-light"), Te = o(() => h.value.enabled && (p.timePicker || p.monthPicker || p.yearPicker || p.quarterPicker)), Ee = () => oe.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, De = () => {
			U.value && _.value.closeOnScroll && ze();
		}, Oe = () => {
			let e = ae.value?.$el.getBoundingClientRect().width ?? 0;
			de.value = document.body.offsetWidth <= e;
		}, ke = (e) => {
			if (e.key === "Tab" && !h.value.enabled && _.value.tabOutClosesMenu) {
				let e = se.value?.contains(document.activeElement), t = J.value?.contains(document.activeElement);
				!e && !t && ze();
			}
			ue.value = e.shiftKey;
		}, Ae = (e) => {
			ue.value = e.shiftKey;
		}, je = () => {
			!p.disabled && !p.readonly && (fe.value = !0, W.value = !0, U.value = !0, U.value && n("open"), U.value || Re(), ye(p.modelValue));
		}, Me = () => {
			i.value = "", Re(), ae.value?.onValueCleared(), oe.value?.setParsedDate(null), n("update:model-value", null), n("cleared"), _.value.closeOnClearValue && ze();
		}, Ne = () => {
			let e = f.value;
			return !e || !Array.isArray(e) && j(e) ? !0 : Array.isArray(e) ? b.value.enabled || e.length === 2 && j(e[0]) && j(e[1]) ? !0 : y.value.partialRange && !p.timePicker ? j(e[0]) : !1 : !1;
		}, Pe = () => {
			Se() && Ne() ? (be(), ze()) : n("invalid-select");
		}, Fe = (e) => {
			Ie(), be(), _.value.closeOnAutoApply && !e && ze();
		}, Ie = () => {
			oe.value && v.value.enabled && oe.value.setParsedDate(f.value);
		}, Le = (e = !1) => {
			p.autoApply && M(f.value) && Ne() && (y.value.enabled && Array.isArray(f.value) ? (y.value.partialRange || f.value.length === 2) && Fe(e) : Fe(e));
		}, Re = () => {
			v.value.enabled || (f.value = null);
		}, ze = (e = !1) => {
			fe.value = !0, e && f.value && _.value.setDateOnMenuClose && Pe(), h.value.enabled || (U.value && (U.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), n("closed"), i.value && ye(ie.value)), Re(), n("blur"));
		}, Be = () => {
			!h.value.enabled && !U.value && (W.value = !1);
		}, Ve = (e, t, i = !1) => {
			if (!e) {
				f.value = null;
				return;
			}
			let a = Array.isArray(e) ? e.every((e) => j(e)) : j(e), o = M(e);
			a && o ? (r("isTextInputDate", !0), f.value = e, t ? (le.value = i, Pe(), n("text-submit")) : p.autoApply && Le(!0), x().then(() => {
				r("isTextInputDate", !1);
			})) : n("invalid-date", e);
		}, He = () => {
			p.autoApply && M(f.value) && be(), Ie();
		}, Ue = () => U.value ? ze() : je(), We = (e) => {
			f.value = e;
		}, Ge = () => {
			v.value.enabled && (r("isInputFocused", !0), xe()), n("focus");
		}, Ke = () => {
			v.value.enabled && (r("isInputFocused", !1), ye(p.modelValue), le.value && L(se.value, ue.value)?.focus()), n("blur");
		}, qe = (e, t) => {
			ae.value && ae.value.updateMonthYear(t ?? 0, {
				month: z(e.month),
				year: z(e.year)
			});
		}, Je = (e) => {
			ye(e ?? p.modelValue);
		}, Ye = (e, t) => {
			ae.value?.switchView(e, t);
		}, Xe = (e, t) => {
			if (U.value) return _.value.onClickOutside ? _.value.onClickOutside(e, t) : ze(!0);
		};
		return It(J, (e) => Xe(Ne, e), { ignore: [oe] }), t({
			closeMenu: ze,
			selectDate: Pe,
			clearValue: Me,
			openMenu: je,
			onScroll: De,
			formatInputValue: xe,
			updateInternalModelValue: We,
			setMonthYear: qe,
			parseModel: Je,
			switchView: Ye,
			toggleMenu: Ue,
			executeFlow: (e) => {
				ae.value?.executeFlow(e ?? A.value?.steps?.at(0));
			},
			getDpWrapMenuRef: () => J,
			dpMenuRef: () => ae,
			dpWrapMenuRef: () => J,
			inputRef: () => oe
		}), (e, t) => (k(), l("div", {
			ref: "picker-wrapper",
			class: S(Ce.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": B(te)
		}, [m(yc, {
			ref: "input-cmp",
			"is-menu-open": U.value,
			onClear: Me,
			onOpen: je,
			onSetInputDate: Ve,
			onSetEmptyDate: B(be),
			onSelectDate: Pe,
			onToggle: Ue,
			onClose: ze,
			onFocus: Ge,
			onBlur: Ke,
			onRealBlur: t[0] ||= (e) => B(r)("isInputFocused", !1)
		}, d({ _: 2 }, [P(B(ve), (t) => ({
			name: t,
			fn: K((n) => [F(e.$slots, t, C(g(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), m(B(Vl), {
			to: B(T),
			disabled: !B(T)
		}, {
			default: K(() => [W.value ? (k(), l("div", {
				key: 0,
				ref: "dp-menu-wrap",
				class: S({
					"dp--menu-wrapper": !B(h).enabled,
					"dp--outer-menu-wrap": !0,
					"dp--centered": B(p).centered
				}),
				style: w(!B(h).enabled && !B(p).centered ? B(pe) : void 0)
			}, [m(a, {
				name: B(ee)(B(he).startsWith("top")),
				css: B(I) && !B(h).enabled && !B(p).centered && re.value,
				appear: "",
				onAfterLeave: Be
			}, {
				default: K(() => [U.value && re.value ? (k(), s(Bl, {
					key: 0,
					ref: "dp-menu",
					class: S({ [we.value]: !0 }),
					"no-overlay-focus": Te.value,
					collapse: de.value,
					"get-input-rect": Ee,
					onClosePicker: ze,
					onSelectDate: Pe,
					onAutoApply: Le,
					onTimeUpdate: He,
					onMenuBlur: t[1] ||= (e) => B(n)("blur")
				}, d({ _: 2 }, [P(B(_e), (t) => ({
					name: t,
					fn: K((n) => [F(e.$slots, t, C(g({ ...n })))])
				})), !B(h).enabled && !B(p).centered && B(E).arrow === !0 ? {
					name: "arrow",
					fn: K(() => [u("div", {
						ref: "menu-arrow",
						class: S({
							"dp--arrow-top": B(he).includes("bottom"),
							"dp--arrow-bottom": B(he).includes("top")
						}),
						style: w({
							left: B(me).arrow?.x == null ? "" : `${B(me).arrow.x - B(me).arrow.centerOffset}px`,
							top: B(me).arrow?.y == null ? "" : `${B(me).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : c("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 6)) : c("", !0)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, Hl));
	}
}), Wl = /* @__PURE__ */ h({
	__name: "VueDatePickerRoot",
	props: /*@__PURE__*/ y({
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
	}, Qs),
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
		fs(i, r);
		let a = mc(ne(), i.presetDates);
		return t(sc(V("date-picker"))), (e, t) => (k(), s(Ul, { ref: "date-picker" }, d({ _: 2 }, [P(B(a), (t) => ({
			name: t,
			fn: K((n) => [F(e.$slots, t, C(g(n)))])
		}))]), 1536));
	}
});
// node_modules/date-fns/locale/ru/_lib/formatDistance.js
function Gl(e, t) {
	if (e.one !== void 0 && t === 1) return e.one;
	let n = t % 10, r = t % 100;
	return n === 1 && r !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (r < 10 || r > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function Kl(e) {
	return (t, n) => n?.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? Gl(e.future, t) : "через " + Gl(e.regular, t) : e.past ? Gl(e.past, t) : Gl(e.regular, t) + " назад" : Gl(e.regular, t);
}
var ql = {
	lessThanXSeconds: Kl({
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
	xSeconds: Kl({
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
	lessThanXMinutes: Kl({
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
	xMinutes: Kl({
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
	aboutXHours: Kl({
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
	xHours: Kl({ regular: {
		singularNominative: "{{count}} час",
		singularGenitive: "{{count}} часа",
		pluralGenitive: "{{count}} часов"
	} }),
	xDays: Kl({ regular: {
		singularNominative: "{{count}} день",
		singularGenitive: "{{count}} дня",
		pluralGenitive: "{{count}} дней"
	} }),
	aboutXWeeks: Kl({
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
	xWeeks: Kl({ regular: {
		singularNominative: "{{count}} неделя",
		singularGenitive: "{{count}} недели",
		pluralGenitive: "{{count}} недель"
	} }),
	aboutXMonths: Kl({
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
	xMonths: Kl({ regular: {
		singularNominative: "{{count}} месяц",
		singularGenitive: "{{count}} месяца",
		pluralGenitive: "{{count}} месяцев"
	} }),
	aboutXYears: Kl({
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
	xYears: Kl({ regular: {
		singularNominative: "{{count}} год",
		singularGenitive: "{{count}} года",
		pluralGenitive: "{{count}} лет"
	} }),
	overXYears: Kl({
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
	almostXYears: Kl({
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
}, Jl = (e, t, n) => ql[e](t, n), Yl = {
	date: Ei({
		formats: {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		},
		defaultWidth: "full"
	}),
	time: Ei({
		formats: {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: Ei({
		formats: { any: "{{date}}, {{time}}" },
		defaultWidth: "any"
	})
}, Xl = [
	"воскресенье",
	"понедельник",
	"вторник",
	"среду",
	"четверг",
	"пятницу",
	"субботу"
];
function Zl(e) {
	let t = Xl[e];
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
function Ql(e) {
	let t = Xl[e];
	return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function $l(e) {
	let t = Xl[e];
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
var eu = {
	lastWeek: (e, t, n) => {
		let r = e.getDay();
		return No(e, t, n) ? Ql(r) : Zl(r);
	},
	yesterday: "'вчера в' p",
	today: "'сегодня в' p",
	tomorrow: "'завтра в' p",
	nextWeek: (e, t, n) => {
		let r = e.getDay();
		return No(e, t, n) ? Ql(r) : $l(r);
	},
	other: "P"
}, tu = {
	code: "ru",
	formatDistance: Jl,
	formatLong: Yl,
	formatRelative: (e, t, n, r) => {
		let i = eu[e];
		return typeof i == "function" ? i(t, n, r) : i;
	},
	localize: {
		ordinalNumber: (e, t) => {
			let n = Number(e), r = t?.unit, i;
			return i = r === "date" ? "-е" : r === "week" || r === "minute" || r === "second" ? "-я" : "-й", n + i;
		},
		era: Ai({
			values: {
				narrow: ["до н.э.", "н.э."],
				abbreviated: ["до н. э.", "н. э."],
				wide: ["до нашей эры", "нашей эры"]
			},
			defaultWidth: "wide"
		}),
		quarter: Ai({
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
		month: Ai({
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
		day: Ai({
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
		dayPeriod: Ai({
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
		ordinalNumber: Fi({
			matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Mi({
			matchPatterns: {
				narrow: /^((до )?н\.?\s?э\.?)/i,
				abbreviated: /^((до )?н\.?\s?э\.?)/i,
				wide: /^(до нашей эры|нашей эры|наша эра)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^д/i, /^н/i] },
			defaultParseWidth: "any"
		}),
		quarter: Mi({
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
		month: Mi({
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
		day: Mi({
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
		dayPeriod: Mi({
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
}, nu = {
	key: 0,
	class: "label"
}, ru = {
	key: 1,
	class: "error"
}, iu = /*#__PURE__*/ Le({
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
		let r = e, i = n, a = N(null), s = o(() => [{
			"input-label": r.label,
			"input-error": r.error,
			"input-required": r.required,
			"input-disabled": r.disabled
		}]), u = N(!1), d = N(!1), f = (e) => {
			let t = e.getTimezoneOffset();
			return (/* @__PURE__ */ new Date(e.getTime() - t * 6e4)).toISOString().slice(0, 19);
		}, h = o({
			get: () => r.modelValue ? new Date(r.modelValue) : null,
			set: (e) => {
				u.value = !1, i("update:modelValue", e ? f(e) : "");
			}
		}), g = () => {
			a.value?.selectDate();
		}, _ = () => {
			a.value?.closeMenu();
		}, v = (e) => {
			d.value = !0, u.value = !e.text?.trim();
		}, y = (e) => {
			d.value = !1, u.value = !e;
		}, b = (e) => {
			r.required && u.value && (console.log("handleBlur", h.value, /* @__PURE__ */ new Date()), h.value = /* @__PURE__ */ new Date()), i("blur", e);
		};
		t({
			focus: () => a.value?.focus(),
			blur: () => a.value?.blur()
		});
		let x = N(!1);
		return G(() => r.modelValue, (e) => {
			u.value = !e, x.value || (x.value = !0, r.required && !e && (h.value = /* @__PURE__ */ new Date()));
		}, { immediate: !0 }), (t, n) => (k(), l("div", { class: S(["input-date", s.value]) }, [
			F(t.$slots, "before", {}, void 0, !0),
			m(B(Wl), {
				ref_key: "input",
				ref: a,
				modelValue: h.value,
				"onUpdate:modelValue": [n[2] ||= (e) => h.value = e, y],
				required: e.required,
				disabled: e.disabled,
				formats: { input: e.timePicker ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy" },
				"time-config": { enableTimePicker: e.timePicker },
				ui: { menu: e.classMenu },
				locale: B(tu),
				teleport: !0,
				"text-input": "",
				onTextInput: v,
				onFocus: n[3] ||= (e) => i("focus", e),
				onBlur: b
			}, {
				"action-buttons": K(() => [m(Ve, {
					size: "small",
					variant: "gray",
					onClick: n[0] ||= (e) => _()
				}, {
					default: K(() => [...n[4] ||= [p("Отмена", -1)]]),
					_: 1
				}), m(Ve, {
					size: "small",
					onClick: n[1] ||= (e) => g()
				}, {
					default: K(() => [...n[5] ||= [p("Выбрать", -1)]]),
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
			e.label ? (k(), l("div", nu, L(e.label), 1)) : c("", !0),
			e.error ? (k(), l("div", ru, L(e.error), 1)) : c("", !0),
			F(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-91ba6a0f"]]), au = { class: "input-password-control" }, ou = /*#__PURE__*/ Le({
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
		let n = e, r = t, i = N(!1), a = o({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		});
		return (t, n) => (k(), s(qe, {
			modelValue: a.value,
			"onUpdate:modelValue": n[2] ||= (e) => a.value = e,
			type: i.value ? "text" : "password",
			label: e.label,
			required: e.required,
			disabled: e.disabled,
			error: e.error,
			autocompleteOff: e.autocompleteOff
		}, {
			after: K(() => [u("div", au, [ie(u("button", {
				type: "button",
				class: "show-password",
				title: "показать пароль",
				onClick: n[0] ||= J((e) => i.value = !0, ["prevent"])
			}, [F(t.$slots, "iconEyeOff", {}, () => [n[3] ||= u("svg", {
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
				u("path", { d: "M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" }),
				u("path", { d: "M3 15l2.5 -3.8" }),
				u("path", { d: "M21 14.976l-2.492 -3.776" }),
				u("path", { d: "M9 17l.5 -4" }),
				u("path", { d: "M15 17l-.5 -4" })
			], -1)], !0)], 512), [[re, !i.value]]), ie(u("button", {
				type: "button",
				class: "hide-password",
				title: "скрыть пароль",
				onClick: n[1] ||= J((e) => i.value = !1, ["prevent"])
			}, [F(t.$slots, "iconEyeOn", {}, () => [n[4] ||= u("svg", {
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
			}, [u("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }), u("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })], -1)], !0)], 512), [[re, i.value]])])]),
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
}, [["__scopeId", "data-v-d018c024"]]), su = [
	"value",
	"required",
	"disabled"
], cu = { key: 0 }, lu = { key: 1 }, uu = {
	key: 0,
	class: "error"
}, du = /*#__PURE__*/ Le({
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
		let n = ne(), r = e, i = t, a = N(null), s = `checkbox-${Math.random().toString(16).slice(2)}`, d = N(""), f = o(() => [{ "checkbox-error": r.error || d.value }]), p = o({
			get: () => r.modelValue,
			set: (e) => {
				i("update:modelValue", e), d.value = "";
			}
		}), m = () => {
			d.value = a.value?.validationMessage ?? "";
		};
		return (t, r) => (k(), l("div", { class: S(["checkbox", f.value]) }, [
			F(t.$slots, "before", {}, void 0, !0),
			ie(u("input", {
				ref_key: "input",
				ref: a,
				id: s,
				type: "checkbox",
				"onUpdate:modelValue": r[0] ||= (e) => p.value = e,
				value: e.value,
				required: e.required,
				disabled: e.disabled,
				onInvalid: J(m, ["prevent"]),
				onInput: m
			}, null, 40, su), [[H, p.value]]),
			u("label", { for: s }, [e.label ? (k(), l("span", cu, L(e.label), 1)) : B(n).label ? (k(), l("span", lu, [F(t.$slots, "label", {}, void 0, !0)])) : c("", !0)]),
			e.error || d.value ? (k(), l("div", uu, L(e.error || d.value), 1)) : c("", !0),
			F(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-5152abd6"]]), fu = { class: "warning" }, pu = { class: "warning-item" }, mu = { class: "warning-icon" }, hu = ["innerHTML"], gu = {
	key: 1,
	class: "warning-text"
}, _u = {
	key: 0,
	class: "warning-actions"
}, vu = /*#__PURE__*/ Le({
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
		let n = ne(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return D(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), T(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (k(), l("div", fu, [u("div", pu, [u("div", mu, [F(t.$slots, "icon", {}, () => [r[1] ||= u("svg", {
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
			u("path", { d: "M12 9v4" }),
			u("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" }),
			u("path", { d: "M12 16h.01" })
		], -1)], !0)]), e.content ? (k(), l("div", {
			key: 0,
			class: "warning-text",
			innerHTML: e.content
		}, null, 8, hu)) : B(n).content ? (k(), l("div", gu, [F(t.$slots, "content", {}, void 0, !0)])) : c("", !0)]), e.cancelAction ? (k(), l("div", _u, [m(Ve, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: K(() => [p(L(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : c("", !0)]));
	}
}, [["__scopeId", "data-v-9792c046"]]), yu = { class: "error" }, bu = { class: "error-item" }, xu = { class: "error-icon" }, Su = { class: "error-text" }, Cu = {
	key: 0,
	class: "error-title"
}, wu = { key: 0 }, Tu = {
	key: 1,
	class: "error-title"
}, Eu = ["innerHTML"], Du = {
	key: 3,
	class: "error-content"
}, Ou = {
	key: 0,
	class: "error-actions"
}, ku = /*#__PURE__*/ Le({
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
		let n = ne(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return D(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), T(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (k(), l("div", yu, [u("div", bu, [u("div", xu, [F(t.$slots, "icon", {}, () => [r[1] ||= u("svg", {
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
			u("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
			u("path", { d: "M12 9v4" }),
			u("path", { d: "M12 16v.01" })
		], -1)], !0)]), u("div", Su, [e.title ? (k(), l("div", Cu, [p(L(e.title), 1), e.content ? (k(), l("span", wu, ":")) : c("", !0)])) : B(n).title ? (k(), l("div", Tu, [F(t.$slots, "title", {}, void 0, !0)])) : c("", !0), e.content ? (k(), l("div", {
			key: 2,
			class: "error-content",
			innerHTML: e.content
		}, null, 8, Eu)) : B(n).content ? (k(), l("div", Du, [F(t.$slots, "content", {}, void 0, !0)])) : c("", !0)])]), e.cancelAction ? (k(), l("div", Ou, [m(Ve, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: K(() => [p(L(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : c("", !0)]));
	}
}, [["__scopeId", "data-v-a63387e8"]]), Au = { class: "success" }, ju = { class: "success-item" }, Mu = { class: "success-icon" }, Nu = ["innerHTML"], Pu = {
	key: 1,
	class: "success-text"
}, Fu = {
	key: 0,
	class: "success-actions"
}, Iu = /*#__PURE__*/ Le({
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
		let n = ne(), r = e, i = t, a = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("confirm"));
		};
		return D(() => {
			r.cancelAction && document.addEventListener("keydown", a);
		}), T(() => {
			r.cancelAction && document.removeEventListener("keydown", a);
		}), (t, r) => (k(), l("div", Au, [u("div", ju, [u("div", Mu, [F(t.$slots, "icon", {}, () => [r[1] ||= u("svg", {
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
		}, [u("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }), u("path", { d: "M9 12l2 2l4 -4" })], -1)], !0)]), e.content ? (k(), l("div", {
			key: 0,
			class: "success-text",
			innerHTML: e.content
		}, null, 8, Nu)) : B(n).content ? (k(), l("div", Pu, [F(t.$slots, "content", {}, void 0, !0)])) : c("", !0)]), e.cancelAction ? (k(), l("div", Fu, [m(Ve, {
			variant: e.cancelVariant,
			onClick: r[0] ||= (e) => i("cancel")
		}, {
			default: K(() => [p(L(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : c("", !0)]));
	}
}, [["__scopeId", "data-v-4a83407c"]]), Lu = N(!1), Ru = N("popup"), zu = N(""), Bu = N(""), Vu = N("Подтвердить"), Hu = N("Отменить"), Uu = N(""), Wu = N("gray"), Gu = N(!0), Ku = null, qu = (e = {}) => (zu.value = e.title ?? "", Bu.value = e.content ?? "", Ru.value = e.type ?? "popup", Lu.value = !0, new Promise((e) => {
	Ku = e;
})), Ju = (e = null) => {
	Lu.value = !1, Ku &&= (Ku(e), null);
}, Yu = (e, t = {}) => (zu.value = t.title ?? "Подтверждение", Bu.value = e, Vu.value = t.confirmText ?? "Подтвердить", Hu.value = t.cancelText ?? "Отменить", Uu.value = t.confirmVariant ?? "", Wu.value = t.cancelVariant ?? "gray", Ru.value = "confirm", Lu.value = !0, Gu.value = !1, new Promise((e) => {
	Ku = e;
})), Xu = (e, t = {}) => (zu.value = e, Bu.value = t.content ?? "", Hu.value = t.cancelText ?? "Понятно", Wu.value = t.cancelVariant ?? "gray", Ru.value = "error", Lu.value = !0, Gu.value = !1, new Promise((e) => {
	Ku = e;
})), Zu = (e, t = {}) => (zu.value = t.title ?? "", Bu.value = e, Hu.value = t.cancelText ?? "Понятно", Wu.value = t.cancelVariant ?? "gray", Ru.value = "success", Lu.value = !0, Gu.value = !1, new Promise((e) => {
	Ku = e;
})), Qu = (e, t = {}) => (zu.value = t.title ?? "", Bu.value = e, Hu.value = t.cancelText ?? "Понятно", Wu.value = t.cancelVariant ?? "gray", Ru.value = "warning", Lu.value = !0, Gu.value = !1, new Promise((e) => {
	Ku = e;
})), $u = () => ({
	visible: Lu,
	type: Ru,
	title: zu,
	content: Bu,
	confirmText: Vu,
	cancelText: Hu,
	showClose: Gu,
	confirmVariant: Uu,
	cancelVariant: Wu,
	popupOpen: qu,
	popupClose: Ju,
	popupConfirm: Yu,
	popupError: Xu,
	popupSuccess: Zu,
	popupWarning: Qu
}), ed = { class: "confirm" }, td = { class: "confirm-actions" }, nd = /*#__PURE__*/ Le({
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
		return D(() => {
			document.addEventListener("keydown", r);
		}), T(() => {
			document.removeEventListener("keydown", r);
		}), (t, r) => (k(), l("div", ed, [u("div", td, [m(Ve, {
			variant: e.confirmVariant,
			onClick: r[0] ||= (e) => n("confirm")
		}, {
			default: K(() => [p(L(e.confirmText), 1)]),
			_: 1
		}, 8, ["variant"]), m(Ve, {
			variant: e.cancelVariant,
			onClick: r[1] ||= (e) => n("cancel")
		}, {
			default: K(() => [p(L(e.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])]));
	}
}, [["__scopeId", "data-v-3fb94df6"]]), rd = {
	class: "popup",
	role: "dialog",
	"aria-modal": "true"
}, id = {
	key: 0,
	class: "popup-title"
}, ad = ["innerHTML"], od = ["innerHTML"], sd = /*#__PURE__*/ Le({
	__name: "Popup",
	setup(e) {
		let { visible: t, type: n, title: r, content: o, confirmText: d, cancelText: f, showClose: p, confirmVariant: h, cancelVariant: g, popupClose: _ } = $u(), v = (e) => {
			t.value && e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), _(!1));
		};
		G(t, async (e) => {
			e ? (document.addEventListener("keydown", v), document.body.classList.add("popupIsOpen"), await x()) : (document.removeEventListener("keydown", v), document.body.classList.remove("popupIsOpen"));
		}, { immediate: !0 }), T(() => {
			document.removeEventListener("keydown", v), document.body.classList.remove("popupIsOpen");
		});
		let y = () => {
			_(!1);
		};
		return (e, v) => (k(), s(i, { to: "body" }, [m(a, { name: "popup" }, {
			default: K(() => [B(t) ? (k(), l("div", {
				key: 0,
				class: "popup-wrap",
				onClick: J(y, ["self"])
			}, [u("div", rd, [
				B(r) && B(n) !== "error" ? (k(), l("div", id, L(B(r)), 1)) : c("", !0),
				B(o) && B(n) !== "error" && B(n) !== "success" ? (k(), l("div", {
					key: 1,
					class: "popup-content",
					innerHTML: B(o)
				}, null, 8, ad)) : c("", !0),
				B(n) === "confirm" ? (k(), s(nd, {
					key: 2,
					"confirm-text": B(d),
					"cancel-text": B(f),
					"confirm-variant": B(h),
					"cancel-variant": B(g),
					onConfirm: v[0] ||= (e) => B(_)(!0),
					onCancel: v[1] ||= (e) => B(_)(!1)
				}, null, 8, [
					"confirm-text",
					"cancel-text",
					"confirm-variant",
					"cancel-variant"
				])) : B(n) === "error" ? (k(), s(ku, {
					key: 3,
					title: B(r),
					content: B(o),
					"cancel-action": !0,
					"cancel-text": B(f),
					"cancel-variant": B(g),
					onCancel: v[2] ||= (e) => B(_)(!1)
				}, null, 8, [
					"title",
					"content",
					"cancel-text",
					"cancel-variant"
				])) : B(n) === "success" ? (k(), s(Iu, {
					key: 4,
					content: B(o),
					"cancel-action": !0,
					"cancel-text": B(f),
					"cancel-variant": B(g),
					onCancel: v[3] ||= (e) => B(_)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : B(n) === "warning" ? (k(), s(vu, {
					key: 5,
					content: B(o),
					"cancel-action": !0,
					"cancel-text": B(f),
					"cancel-variant": B(g),
					onCancel: v[4] ||= (e) => B(_)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : (k(), l("div", {
					key: 6,
					class: "popup-content",
					innerHTML: B(o)
				}, null, 8, od)),
				B(p) ? (k(), s(Ve, {
					key: 7,
					class: "popup-close",
					variant: "gray",
					size: "small",
					hover: "red",
					onClick: v[5] ||= (e) => B(_)(!1)
				}, {
					default: K(() => [...v[6] ||= [u("svg", {
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
					}, [u("path", { d: "M18 6l-12 12" }), u("path", { d: "M6 6l12 12" })], -1)]]),
					_: 1
				})) : c("", !0)
			])])) : c("", !0)]),
			_: 1
		})]));
	}
}, [["__scopeId", "data-v-5b952bdc"]]), cd = {
	key: 0,
	class: "table-pagination"
}, ld = /*#__PURE__*/ Le({
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
		return (t, a) => e.pagination && e.pagination.last > 1 ? (k(), l("div", cd, [
			e.pagination.prev ? (k(), s(Ve, {
				key: 0,
				size: "small",
				variant: "gray",
				to: n(e.pagination.prev)
			}, {
				default: K(() => [F(t.$slots, "iconPaginationPrev", {}, () => [a[1] ||= u("svg", {
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
					u("path", { d: "M5 12l14 0" }),
					u("path", { d: "M5 12l4 4" }),
					u("path", { d: "M5 12l4 -4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : c("", !0),
			a[3] ||= p(" Страница ", -1),
			m(qe, {
				type: "number",
				modelValue: e.pagination.page,
				"onUpdate:modelValue": a[0] ||= (t) => e.pagination.page = t,
				min: "1",
				max: e.pagination.last,
				onFocus: i,
				onKeydown: q(r, ["enter"])
			}, null, 8, ["modelValue", "max"]),
			a[4] ||= p(" из ", -1),
			u("strong", null, L(e.pagination.last), 1),
			e.pagination.next ? (k(), s(Ve, {
				key: 1,
				size: "small",
				variant: "gray",
				to: n(e.pagination.next)
			}, {
				default: K(() => [F(t.$slots, "iconPaginationNext", {}, () => [a[2] ||= u("svg", {
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
					u("path", { d: "M5 12l14 0" }),
					u("path", { d: "M15 16l4 -4" }),
					u("path", { d: "M15 8l4 4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : c("", !0)
		])) : c("", !0);
	}
}, [["__scopeId", "data-v-8262809b"]]), ud = {
	key: 0,
	class: "table-footer-actions__left"
}, dd = { class: "table-footer-actions__right" }, fd = /*#__PURE__*/ Le({
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
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, s = N(null), d = N(null), f = N(!1), p = N({}), h = N({}), g = N({}), _ = N(null), v = o(() => [{
			title: "Действие с выбранными",
			value: null
		}, ...i.bulkActions]), y = () => {
			if (!s.value || !i.tableWrap) return;
			let e = i.tableWrap.getBoundingClientRect(), t = s.value.offsetHeight, n = window.innerHeight, r = e.bottom, a = e.top;
			r > n && a < n - t ? f.value || (f.value = !0, h.value = {
				height: `${t}px`,
				display: "block"
			}) : (f.value = !1, p.value = {}, h.value = { display: "none" });
		}, b = () => {
			if (!f.value || !i.tableWrap || !i.table) return;
			let e = i.tableWrap.getBoundingClientRect();
			p.value = {
				width: `${i.tableWrap.clientWidth}px`,
				left: `${e.left}px`,
				overflow: "hidden"
			}, g.value = { width: `${i.table.offsetWidth}px` };
		}, C = () => {
			y(), b();
		}, E = () => {
			d.value && a("update:scroll-left", d.value.scrollLeft);
		};
		t({ syncScroll: (e) => {
			d.value && d.value.scrollLeft !== e && (d.value.scrollLeft = e);
		} }), G(_, async (e) => {
			if (!e) return;
			let t = i.bulkActions.find((t) => t.value === e);
			try {
				typeof t?.action == "function" && await t.action([...i.selected]);
			} finally {
				_.value = null;
			}
		});
		let O = null;
		return D(async () => {
			window.addEventListener("scroll", C), window.addEventListener("resize", C), d.value?.addEventListener("scroll", E), await x(), C(), requestAnimationFrame(() => {
				C();
			}), O = new ResizeObserver(() => {
				C();
			}), i.tableWrap && O.observe(i.tableWrap);
		}), T(() => {
			window.removeEventListener("scroll", C), window.removeEventListener("resize", C), d.value?.removeEventListener("scroll", E), O?.disconnect();
		}), (t, n) => (k(), l(r, null, [u("div", {
			ref_key: "footer",
			ref: s,
			class: S(["table-footer", { fixed: f.value }]),
			style: w(p.value)
		}, [
			e.bulk && e.selected.length ? (k(), l("div", ud, [F(t.$slots, "iconFooterActions", {}, () => [n[1] ||= u("svg", {
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
			}, [u("path", { d: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" })], -1)], !0), m(xt, {
				modelValue: _.value,
				"onUpdate:modelValue": n[0] ||= (e) => _.value = e,
				options: v.value
			}, null, 8, ["modelValue", "options"])])) : c("", !0),
			u("div", dd, [m(ld, {
				pagination: e.pagination,
				navigate: e.navigate
			}, {
				iconPaginationPrev: K(() => [F(t.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: K(() => [F(t.$slots, "iconPaginationNext", {}, void 0, !0)]),
				_: 3
			}, 8, ["pagination", "navigate"])]),
			u("div", {
				ref_key: "footerScroll",
				ref: d,
				class: "table-footer-scroll"
			}, [u("div", {
				class: "table-footer-scroll-content",
				style: w(g.value)
			}, null, 4)], 512)
		], 6), u("div", {
			class: "table-footer-placeholder",
			style: w(h.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-86b580c7"]]), pd = ["onClick"], md = { class: "table-row__sortable-title" }, hd = "table-sort", gd = /*#__PURE__*/ Le({
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
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, o = N(null), s = N(!1), d = N({}), h = N({}), g = N({}), _ = N({}), v = N({}), y = (e) => {
			e.target && a("update:selected", e.target.checked ? i.items.map((e) => e.id) : []);
		}, C = (e) => i.columns.find((t) => t.key === e && t.sortable), E = () => {
			try {
				let e = localStorage.getItem(hd);
				if (!e) return;
				let t = JSON.parse(e);
				if (!t?.key || !["asc", "desc"].includes(t.type) || !C(t.key)) return;
				a("update:sort", t);
			} catch {}
		}, O = (e) => {
			if (!C(e)) return;
			let t = {
				key: e,
				type: i.sort?.key === e && i.sort?.type === "asc" ? "desc" : "asc"
			};
			localStorage.setItem(hd, JSON.stringify(t)), a("update:sort", t);
		}, A = () => {
			if (!o.value || !i.tableWrap) return;
			let e = i.tableWrap.getBoundingClientRect(), t = o.value.offsetHeight;
			e.top <= 0 ? s.value || (s.value = !0, h.value = {
				height: `${t}px`,
				display: "block"
			}) : (s.value = !1, d.value = {}, h.value = { display: "none" }, g.value = { transform: "none" }, _.value = {}, v.value = {});
		}, j = () => {
			if (!i.tableWrap || !i.table || !s.value) return;
			let e = i.tableWrap, t = i.table, n = e.getBoundingClientRect();
			d.value = {
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
		}, M = () => {
			A(), j();
		};
		t({ syncScroll: (e) => {
			j();
		} });
		let ee = null;
		return D(async () => {
			E(), window.addEventListener("scroll", M), window.addEventListener("resize", M), await x(), M(), requestAnimationFrame(() => {
				M();
			}), ee = new ResizeObserver(() => {
				M();
			}), i.tableWrap && ee.observe(i.tableWrap);
		}), T(() => {
			window.removeEventListener("scroll", M), window.removeEventListener("resize", M), ee?.disconnect();
		}), (t, n) => (k(), l(r, null, [u("div", {
			ref_key: "header",
			ref: o,
			class: S(["table-header", { fixed: s.value }]),
			style: w(d.value)
		}, [u("div", {
			class: "table-header-inner",
			style: w(g.value)
		}, [
			e.bulk ? (k(), l("div", {
				key: 0,
				class: "table-bulk",
				style: w(v.value)
			}, [m(du, {
				"model-value": e.selected.length === e.items.length && e.items.length > 0,
				onChange: y
			}, null, 8, ["model-value"])], 4)) : c("", !0),
			(k(!0), l(r, null, P(e.columns, (e) => (k(), l("div", b({
				key: e.key,
				class: { "table-row__grow": e.grow },
				style: {
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px",
					sortable: e.sortable
				}
			}, { ref_for: !0 }, e.label ? { title: e.label } : {}), [e.sortable ? (k(), l("div", {
				key: 0,
				class: "table-row__sortable",
				onClick: (t) => O(e.key)
			}, [
				u("div", md, L(e.title), 1),
				i.sort?.key === e.key && i.sort?.type === "desc" ? F(t.$slots, "iconHeaderSortDesc", {}, () => [n[0] ||= f("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l9 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l7 0\" data-v-6e19f0ae></path><path d=\"M15 15l3 3l3 -3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 0) : c("", !0),
				i.sort?.key === e.key && i.sort?.type === "asc" ? F(t.$slots, "iconHeaderSortAsc", {}, () => [n[1] ||= f("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l7 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l9 0\" data-v-6e19f0ae></path><path d=\"M15 9l3 -3l3 3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 1) : c("", !0)
			], 8, pd)) : c("", !0), u("template", null, [p(L(e.title), 1)])], 16))), 128)),
			e.actions ? (k(), l("div", {
				key: 1,
				class: "table-actions",
				style: w(_.value)
			}, "Действия", 4)) : c("", !0)
		], 4)], 6), u("div", {
			class: "table-header-placeholder",
			style: w(h.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-6e19f0ae"]]), _d = ["onMousedown", "onMouseenter"], vd = {
	key: 1,
	class: "table-actions"
}, yd = /*#__PURE__*/ Le({
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
	setup(e, { emit: t }) {
		let n = e, i = t, a = N(!1), o = N(!1), s = N(!1), u = N(null), d = (e, t) => typeof e.format == "function" ? e.format(t[e.key], t) : t[e.key], f = (e) => {
			a.value = !0, s.value = !1, u.value = e, o.value = !n.selected.includes(e.id);
		}, h = (e) => {
			if (!a.value) return;
			s.value = !0;
			let t = new Set(n.selected);
			u.value && (o.value ? t.add(u.value.id) : t.delete(u.value.id)), o.value ? t.add(e.id) : t.delete(e.id), i("update:selected", [...t]), u.value = null;
		}, g = () => {
			a.value = !1, u.value = null;
		}, _ = (e) => {
			a.value && h(e);
		}, v = (e) => {
			s.value && (e.preventDefault(), e.stopPropagation());
		};
		return D(() => {
			window.addEventListener("mouseup", g);
		}), T(() => {
			window.removeEventListener("mouseup", g);
		}), (t, n) => (k(!0), l(r, null, P(e.items, (a, o) => (k(), l("div", {
			key: o,
			class: S(["table-item", { "table-item__selected": e.selected.includes(a.id) }])
		}, [
			e.bulk ? (k(), l("div", {
				key: 0,
				class: "table-bulk",
				onMousedown: (e) => f(a),
				onMouseenter: (e) => _(a),
				onClick: v
			}, [m(du, {
				"model-value": e.selected,
				value: a.id,
				"onUpdate:modelValue": n[0] ||= (e) => i("update:selected", e)
			}, null, 8, ["model-value", "value"])], 40, _d)) : c("", !0),
			(k(!0), l(r, null, P(e.columns, (e) => (k(), l("div", {
				key: e.key,
				class: S({ "table-row__grow": e.grow }),
				style: w({
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px"
				})
			}, [F(t.$slots, `cell-${e.key}`, {
				item: a,
				value: a[e.key]
			}, () => [p(L(d(e, a)), 1)], !0)], 6))), 128)),
			e.actions ? (k(), l("div", vd, [F(t.$slots, "actions", { item: a }, void 0, !0)])) : c("", !0)
		], 2))), 128));
	}
}, [["__scopeId", "data-v-acb86dea"]]), bd = {
	key: 1,
	class: "table-empty"
}, xd = /*#__PURE__*/ Le({
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
		let n = e, r = t, i = N(null), a = N(null), o = N(null), s = N(null), c = N([]), f = () => {
			if (!i.value) return;
			let e = i.value.scrollLeft;
			o.value?.syncScroll(e), s.value?.syncScroll(e);
		}, p = (e) => {
			i.value && (i.value.scrollLeft = e);
		}, h = (e) => {
			r("update:sort", e);
		}, _ = async () => {
			await x(), i.value && (i.value.removeEventListener("scroll", f), i.value.addEventListener("scroll", f));
		};
		return G(() => n.items.length, async () => {
			n.items.length ? await _() : c.value = [];
		}), G(() => [
			n.sort?.key,
			n.sort?.type,
			n.pagination?.page
		], () => {
			c.value = [];
		}), D(async () => {
			await _();
		}), T(() => {
			i.value?.removeEventListener("scroll", f);
		}), (t, n) => e.items.length ? (k(), l("div", {
			key: 0,
			ref_key: "tableWrap",
			ref: i,
			class: "table-wrap",
			style: w({
				"--table-bulk-width": `${e.bulkWidth}px`,
				"--table-actions-width": `${e.actionsWidth}px`
			})
		}, [u("div", {
			ref_key: "table",
			ref: a,
			class: "table"
		}, [
			m(gd, {
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
				selected: c.value,
				"onUpdate:selected": n[0] ||= (e) => c.value = e
			}, {
				iconHeaderSortDesc: K(() => [F(t.$slots, "iconHeaderSortDesc", {}, void 0, !0)]),
				iconHeaderSortAsc: K(() => [F(t.$slots, "iconHeaderSortAsc", {}, void 0, !0)]),
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
			m(yd, {
				columns: e.columns,
				items: e.items,
				bulk: e.bulk,
				actions: e.actions,
				selected: c.value,
				"onUpdate:selected": n[1] ||= (e) => c.value = e
			}, d({
				actions: K((e) => [F(t.$slots, "actions", C(g(e)), void 0, !0)]),
				_: 2
			}, [P(e.columns, (e) => ({
				name: `cell-${e.key}`,
				fn: K((n) => [F(t.$slots, `cell-${e.key}`, C(g(n)), void 0, !0)])
			}))]), 1032, [
				"columns",
				"items",
				"bulk",
				"actions",
				"selected"
			]),
			m(fd, {
				ref_key: "footer",
				ref: s,
				columns: e.columns,
				items: e.items,
				pagination: e.pagination,
				bulk: e.bulk,
				actions: e.actions,
				"bulk-actions": e.bulkActions,
				selected: c.value,
				"table-wrap": i.value,
				table: a.value,
				navigate: e.navigate,
				"onUpdate:scrollLeft": p
			}, {
				iconPaginationPrev: K(() => [F(t.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: K(() => [F(t.$slots, "iconPaginationNext", {}, void 0, !0)]),
				iconFooterActions: K(() => [F(t.$slots, "iconFooterActions", {}, void 0, !0)]),
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
		], 512)], 4)) : (k(), l("div", bd, L(e.textEmpty), 1));
	}
}, [["__scopeId", "data-v-ec7fece0"]]);
export { ve as ApiError, Xe as SndAutocomplete, Ve as SndBtn, du as SndCheckbox, Ue as SndCookie, ku as SndError, qe as SndInput, Ct as SndInputCity, iu as SndInputDate, ou as SndInputPassword, gt as SndInputPhone, sd as SndPopup, ze as SndProgress, xt as SndSelect, Iu as SndSuccess, xd as SndTable, vu as SndWarning, pe as configure, Pe as declension, ye as get, _e as getClient, me as getConfig, ge as initApi, Ie as isEmpty, Se as patch, be as post, xe as put, Ce as remove, we as request, Fe as setTitle, Ee as useAuth, Ne as useCaptcha, $u as usePopup };
