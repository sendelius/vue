import { t as e } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, normalizeClass as a, openBlock as o, ref as s, renderSlot as c, toDisplayString as l, unref as u, useSlots as d, vModelCheckbox as f, withDirectives as p, withModifiers as m } from "vue";
import '../../Checkbox.css';// src/ui/form/Checkbox.vue
var h = [
	"value",
	"required",
	"disabled"
], g = { key: 0 }, _ = { key: 1 }, v = {
	key: 0,
	class: "error"
}, y = /*#__PURE__*/ e({
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
	setup(e, { emit: y }) {
		let b = d(), x = e, S = y, C = s(null), w = `checkbox-${Math.random().toString(16).slice(2)}`, T = s(""), E = t(() => [{ "checkbox-error": x.error || T.value }]), D = t({
			get: () => x.modelValue,
			set: (e) => {
				S("update:modelValue", e), T.value = "";
			}
		}), O = () => {
			T.value = C.value?.validationMessage ?? "";
		};
		return (t, s) => (o(), r("div", { class: a(["checkbox", E.value]) }, [
			c(t.$slots, "before", {}, void 0, !0),
			p(i("input", {
				ref_key: "input",
				ref: C,
				id: w,
				type: "checkbox",
				"onUpdate:modelValue": s[0] ||= (e) => D.value = e,
				value: e.value,
				required: e.required,
				disabled: e.disabled,
				onInvalid: m(O, ["prevent"]),
				onInput: O
			}, null, 40, h), [[f, D.value]]),
			i("label", { for: w }, [e.label ? (o(), r("span", g, l(e.label), 1)) : u(b).label ? (o(), r("span", _, [c(t.$slots, "label", {}, void 0, !0)])) : n("", !0)]),
			e.error || T.value ? (o(), r("div", v, l(e.error || T.value), 1)) : n("", !0),
			c(t.$slots, "after", {}, void 0, !0)
		], 2));
	}
}, [["__scopeId", "data-v-5152abd6"]]);
export { y as default };
