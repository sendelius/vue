import e from "./Input.js";
import t from "../progress/Progress.js";
import { t as n } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as r, Teleport as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createTextVNode as c, createVNode as l, nextTick as u, normalizeClass as d, normalizeStyle as f, onBeforeUnmount as p, onMounted as m, openBlock as h, ref as g, renderList as _, renderSlot as v, watch as y, withCtx as b, withModifiers as x } from "vue";
import '../../Autocomplete.css';// src/ui/form/Autocomplete.vue
var S = ["onMousedown"], C = {
	key: 0,
	class: "autocomplete-empty"
}, w = /*#__PURE__*/ n({
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
	setup(n, { expose: w, emit: T }) {
		let E = n, D = T, O = g(null), k = g(null), A = g(null), j = g(E.modelValue), M = g([]), N = g(-1), P = g(!1), F = g(!1), I = g(!1), L = g({}), R = g({
			"autocomplete-dropdown__top": !1,
			"autocomplete-dropdown__bottom": !0
		}), z = null, B = 0, V = () => {
			P.value = !1, M.value = [], F.value = !1, N.value = -1;
		}, H = async () => {
			let e = j.value;
			if (!E.autocomplete || e.length < E.minLength) {
				V();
				return;
			}
			let t = ++B;
			I.value = !0, P.value = !0, M.value = [], F.value = !1, N.value = -1;
			try {
				let n = await E.autocomplete(e);
				if (t !== B) return;
				M.value = n ?? [], F.value = M.value.length === 0, N.value = M.value.length ? 0 : -1;
			} catch {
				if (t !== B) return;
				M.value = [], F.value = !1, N.value = -1;
			} finally {
				t === B && (I.value = !1);
			}
			await u(), Y();
		}, U = () => {
			clearTimeout(z), j.value.length < E.minLength ? (B++, V(), I.value = !1) : z = setTimeout(H, E.delay);
		}, W = (e) => {
			V(), D("select", e);
		}, G = (e) => {
			if (M.value.length) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), N.value++, N.value >= M.value.length && (N.value = 0);
					break;
				case "ArrowUp":
					e.preventDefault(), N.value--, N.value < 0 && (N.value = M.value.length - 1);
					break;
				case "Enter":
					e.preventDefault(), N.value >= 0 && W(M.value[N.value]);
					break;
				case "Escape": e.preventDefault(), V();
			}
		}, K = async (e) => {
			D("focus", e), j.value.length >= E.minLength && (P.value = !0, await u(), Y());
		}, q = (e) => {
			D("blur", e);
		}, J = (e) => {
			O.value?.contains(e.target) || A.value?.contains(e.target) || V();
		}, Y = () => {
			if (!O.value) return;
			let e = O.value.getBoundingClientRect(), t = A.value?.offsetHeight ?? 0, n = window.innerHeight - e.bottom, r = e.top;
			t && n < t && r >= t ? (L.value = {
				bottom: `${window.innerHeight - e.top}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				top: "auto"
			}, R.value = {
				"autocomplete-dropdown__top": !0,
				"autocomplete-dropdown__bottom": !1
			}) : (L.value = {
				top: `${e.bottom}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				bottom: "auto"
			}, R.value = {
				"autocomplete-dropdown__top": !1,
				"autocomplete-dropdown__bottom": !0
			});
		};
		y(() => E.modelValue, (e) => {
			j.value = e;
		}), y(() => E.modelValue, (e) => {
			j.value = e;
		});
		let X = (e) => {
			j.value = e, D("update:modelValue", e), U();
		};
		return m(() => {
			document.addEventListener("mousedown", J), window.addEventListener("resize", Y), window.addEventListener("scroll", Y, !0);
		}), p(() => {
			clearTimeout(z), document.removeEventListener("mousedown", J), window.removeEventListener("resize", Y), window.removeEventListener("scroll", Y, !0);
		}), w({
			focus: () => k.value?.focus(),
			blur: () => k.value?.blur()
		}), (u, p) => (h(), s("div", {
			ref_key: "autocomplete",
			ref: O,
			class: d(["autocomplete", { "show-dropdown": P.value && (M.value.length || F.value) }])
		}, [l(e, {
			ref_key: "input",
			ref: k,
			"model-value": j.value,
			label: n.label,
			error: n.error,
			required: n.required,
			autocompleteOff: "",
			"onUpdate:modelValue": X,
			onFocus: K,
			onBlur: q,
			onKeydown: G
		}, {
			before: b(() => [v(u.$slots, "before", {}, void 0, !0)]),
			after: b(() => [l(t, { show: I.value }, null, 8, ["show"]), (h(), a(i, { to: "body" }, [P.value && (M.value.length || F.value) ? (h(), s("div", {
				key: 0,
				ref_key: "dropdown",
				ref: A,
				class: d(["autocomplete-dropdown", R.value]),
				style: f(L.value)
			}, [(h(!0), s(r, null, _(M.value, (e, t) => (h(), s("div", {
				key: e.id,
				class: d({ active: t === N.value }),
				onMousedown: x((t) => W(e), ["prevent"])
			}, [v(u.$slots, "default", {
				item: e,
				index: t
			}, void 0, !0)], 42, S))), 128)), F.value ? (h(), s("div", C, [v(u.$slots, "empty", {}, () => [p[0] ||= c(" Ничего не найдено ", -1)], !0)])) : o("", !0)], 6)) : o("", !0)]))]),
			_: 3
		}, 8, [
			"model-value",
			"label",
			"error",
			"required"
		])], 2));
	}
}, [["__scopeId", "data-v-a72106e6"]]);
export { w as default };
