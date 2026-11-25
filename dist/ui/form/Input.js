import { t as e } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, normalizeClass as a, openBlock as o, ref as s, renderSlot as c, toDisplayString as l, vModelDynamic as u, withDirectives as d, withModifiers as f } from "vue";
import '../../Input.css';// src/ui/form/Input.vue
var p = [
	"type",
	"required",
	"disabled",
	"autocomplete"
], m = {
	key: 0,
	class: "label"
}, h = {
	key: 1,
	class: "error"
}, g = /*#__PURE__*/ e({
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
	setup(e, { expose: g, emit: _ }) {
		let v = e, y = _, b = s(null), x = s(""), S = t(() => [{
			"input-label": v.label,
			"input-error": v.error || x.value
		}]), C = t({
			get: () => v.modelValue,
			set: (e) => {
				y("update:modelValue", e), x.value = "";
			}
		}), w = () => {
			x.value = b.value?.validationMessage ?? "";
		};
		return g({
			focus: () => b.value?.focus(),
			blur: () => b.value?.blur(),
			setCustomValidity: (e) => {
				b.value?.setCustomValidity(e);
			}
		}), (t, s) => (o(), r("div", { class: a(["input", S.value]) }, [
			c(t.$slots, "before", {}, void 0, !0),
			d(i("input", {
				ref_key: "input",
				ref: b,
				type: e.type,
				"onUpdate:modelValue": s[0] ||= (e) => C.value = e,
				placeholder: " ",
				required: e.required,
				disabled: e.disabled,
				onInvalid: f(w, ["prevent"]),
				onInput: w,
				onFocus: s[1] ||= (e) => y("focus", e),
				onBlur: s[2] ||= (e) => y("blur", e),
				autocomplete: e.autocompleteOff ? "off" : null
			}, null, 40, p), [[u, C.value]]),
			e.label ? (o(), r("div", m, l(e.label), 1)) : n("", !0),
			e.error || x.value ? (o(), r("div", h, l(e.error || x.value), 1)) : n("", !0),
			c(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-03732987"]]);
export { g as default };
