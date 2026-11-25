import e from "./Input.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { computed as n, createBlock as r, createElementVNode as i, openBlock as a, ref as o, renderSlot as s, vShow as c, withCtx as l, withDirectives as u, withModifiers as d } from "vue";
import '../../assets/InputPassword-pxH4E4bi.css';// src/ui/form/InputPassword.vue
var f = { class: "input-password-control" }, p = /*#__PURE__*/ t({
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
	setup(t, { emit: p }) {
		let m = t, h = p, g = o(!1), _ = n({
			get: () => m.modelValue,
			set: (e) => h("update:modelValue", e)
		});
		return (n, o) => (a(), r(e, {
			modelValue: _.value,
			"onUpdate:modelValue": o[2] ||= (e) => _.value = e,
			type: g.value ? "text" : "password",
			label: t.label,
			required: t.required,
			disabled: t.disabled,
			error: t.error,
			autocompleteOff: t.autocompleteOff
		}, {
			after: l(() => [i("div", f, [u(i("button", {
				type: "button",
				class: "show-password",
				title: "показать пароль",
				onClick: o[0] ||= d((e) => g.value = !0, ["prevent"])
			}, [s(n.$slots, "iconEyeOff", {}, () => [o[3] ||= i("svg", {
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
				i("path", { d: "M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" }),
				i("path", { d: "M3 15l2.5 -3.8" }),
				i("path", { d: "M21 14.976l-2.492 -3.776" }),
				i("path", { d: "M9 17l.5 -4" }),
				i("path", { d: "M15 17l-.5 -4" })
			], -1)], !0)], 512), [[c, !g.value]]), u(i("button", {
				type: "button",
				class: "hide-password",
				title: "скрыть пароль",
				onClick: o[1] ||= d((e) => g.value = !1, ["prevent"])
			}, [s(n.$slots, "iconEyeOn", {}, () => [o[4] ||= i("svg", {
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
			}, [i("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }), i("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })], -1)], !0)], 512), [[c, g.value]])])]),
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
}, [["__scopeId", "data-v-d018c024"]]);
export { p as default };
