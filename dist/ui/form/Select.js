import { t as e } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as t, computed as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, normalizeClass as o, openBlock as s, ref as c, renderList as l, renderSlot as u, toDisplayString as d, vModelSelect as f, withDirectives as p, withModifiers as m } from "vue";
import '../../assets/Select-D0tN9-im.css';// src/ui/form/Select.vue
var h = ["required", "disabled"], g = ["value", "disabled"], _ = {
	key: 0,
	class: "label"
}, v = {
	key: 1,
	class: "error"
}, y = /*#__PURE__*/ e({
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
	setup(e, { expose: y, emit: b }) {
		let x = e, S = b, C = c(null), w = c(""), T = n(() => [{
			"select-label": x.label,
			"select-error": x.error || w.value,
			"select-disabled": x.disabled
		}]), E = () => {
			w.value = C.value?.validationMessage ?? "";
		}, D = n({
			get: () => x.modelValue,
			set: (e) => {
				S("update:modelValue", e), w.value = "";
			}
		});
		return y({
			focus: () => C.value?.focus(),
			blur: () => C.value?.blur()
		}), (n, c) => (s(), i("div", { class: o(["select", T.value]) }, [
			u(n.$slots, "before", {}, void 0, !0),
			p(a("select", {
				ref_key: "select",
				ref: C,
				"onUpdate:modelValue": c[0] ||= (e) => D.value = e,
				required: e.required,
				disabled: e.disabled,
				onInvalid: m(E, ["prevent"]),
				onInput: E
			}, [(s(!0), i(t, null, l(e.options, (e) => (s(), i("option", {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, d(e.title), 9, g))), 128)), u(n.$slots, "options", {}, void 0, !0)], 40, h), [[f, D.value]]),
			e.label ? (s(), i("div", _, d(e.label), 1)) : r("", !0),
			e.error || w.value ? (s(), i("div", v, d(e.error || w.value), 1)) : r("", !0),
			u(n.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-60f9f346"]]);
export { y as default };
