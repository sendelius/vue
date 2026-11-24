import e from "./ui/form/Input.js";
import { computed as t, createBlock as n, openBlock as r, unref as i, watch as a, withDirectives as o } from "vue";
// node_modules/maska/dist/index-ncVkAPXj.mjs
var s = Object.defineProperty, c = (e, t, n) => t in e ? s(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, l = (e, t, n) => c(e, typeof t == "symbol" ? t : t + "", n), u = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, d = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), f = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), p = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = f(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = d(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = f(u[1].length <= i ? u[1].length : i, i, n));
	let p = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (p += c) : p = d(p, s, c), r + p;
}, m = (e) => JSON.parse(e.replaceAll("'", "\"")), h = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = _(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = g(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = g(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = g(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = v(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = g(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, g = (e) => e === "" || !!JSON.parse(e), _ = (e) => e.startsWith("[") && e.endsWith("]") ? m(e) : e, v = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return m(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: y() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, y = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, b = class {
	constructor(e = {}) {
		l(this, "opts", {}), l(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...u,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = y() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = u;
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
		if (this.opts.number != null) return p(e, n, this.opts);
		if (t == null) return e;
		let r = `v=${e},mr=${t},m=${+!!n}`;
		if (this.memo.has(r)) return this.memo.get(r);
		let { mask: i, escaped: a } = this.escapeMask(t), o = [], s = this.opts.tokens == null ? {} : this.opts.tokens, c = this.isReversed() ? -1 : 1, l = this.isReversed() ? "unshift" : "push", u = this.isReversed() ? 0 : i.length - 1, d = this.isReversed() ? () => g > -1 && _ > -1 : () => g < i.length && _ < e.length, f = (e) => !this.isReversed() && e <= u || this.isReversed() && e >= u, m, h = -1, g = this.isReversed() ? i.length - 1 : 0, _ = this.isReversed() ? e.length - 1 : 0, v = !1;
		for (; d();) {
			let t = i.charAt(g), r = s[t], d = r?.transform == null ? e.charAt(_) : r.transform(e.charAt(_));
			if (!a.includes(g) && r != null ? (d.match(r.pattern) == null ? r.multiple ? v &&= (g += c, _ -= c, !1) : d === m ? m = void 0 : r.optional && (g += c, _ -= c) : (o[l](d), r.repeated ? (h === -1 ? h = g : g === u && g !== h && (g = h - c), u === h && (g -= c)) : r.multiple && (v = !0, g -= c), g += c), _ += c) : (n && !this.isEager() && o[l](t), d === t && !this.isEager() ? _ += c : m = t, this.isEager() || (g += c)), this.isEager()) for (; f(g) && (s[i.charAt(g)] == null || a.includes(g));) {
				if (n) {
					if (o[l](i.charAt(g)), e.charAt(_) === i.charAt(g)) {
						g += c, _ += c;
						continue;
					}
				} else i.charAt(g) === e.charAt(_) && (_ += c);
				g += c;
			}
		}
		return this.memo.set(r, o.join("")), this.memo.get(r);
	}
}, x = [
	"text",
	"search",
	"url",
	"tel",
	"password"
], S = class {
	constructor(e, t = {}) {
		l(this, "items", /* @__PURE__ */ new Map()), l(this, "eventAbortController"), l(this, "onInput", (e) => {
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
			if (!x.includes(n.type)) return;
			if (!this.items.has(n)) {
				let { signal: e } = this.eventAbortController;
				n.addEventListener("input", this.onInput, {
					capture: !0,
					signal: e
				});
			}
			let e = new b(h(n, t));
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
}, C = /* @__PURE__ */ new WeakMap(), w = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, T = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || !x.includes(r.type)) return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			w(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	C.has(r) ? (n = C.get(r)) == null || n.update(i) : C.set(r, new S(r, i));
}, E = {
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
	setup(s, { emit: c }) {
		let l = s, u = c, d = t({
			get: () => l.modelValue,
			set: (e) => u("update:modelValue", e)
		}), f = t(() => l.country === "BY" ? "+375 (##) ###-##-##" : "+7 (###) ###-##-##");
		return a(() => l.country, () => {
			u("update:modelValue", "");
		}), (t, a) => o((r(), n(e, {
			modelValue: d.value,
			"onUpdate:modelValue": a[0] ||= (e) => d.value = e,
			type: "tel",
			label: s.label,
			required: s.required,
			disabled: s.disabled,
			error: s.error,
			autocompleteOff: s.autocompleteOff
		}, null, 8, [
			"modelValue",
			"label",
			"required",
			"disabled",
			"error",
			"autocompleteOff"
		])), [[i(T), f.value]]);
	}
};
export { E as t };
