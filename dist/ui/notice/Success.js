import e from "../btn/Btn.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, onBeforeUnmount as s, onMounted as c, openBlock as l, renderSlot as u, toDisplayString as d, unref as f, useSlots as p, withCtx as m } from "vue";
import '../../assets/Success-kURJlRwB.css';// src/ui/notice/Success.vue
var h = { class: "success" }, g = { class: "success-item" }, _ = { class: "success-icon" }, v = ["innerHTML"], y = {
	key: 1,
	class: "success-text"
}, b = {
	key: 0,
	class: "success-actions"
}, x = /*#__PURE__*/ t({
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
	setup(t, { emit: x }) {
		let S = p(), C = t, w = x, T = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), w("confirm"));
		};
		return c(() => {
			C.cancelAction && document.addEventListener("keydown", T);
		}), s(() => {
			C.cancelAction && document.removeEventListener("keydown", T);
		}), (s, c) => (l(), r("div", h, [i("div", g, [i("div", _, [u(s.$slots, "icon", {}, () => [c[1] ||= i("svg", {
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
		}, [i("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }), i("path", { d: "M9 12l2 2l4 -4" })], -1)], !0)]), t.content ? (l(), r("div", {
			key: 0,
			class: "success-text",
			innerHTML: t.content
		}, null, 8, v)) : f(S).content ? (l(), r("div", y, [u(s.$slots, "content", {}, void 0, !0)])) : n("", !0)]), t.cancelAction ? (l(), r("div", b, [o(e, {
			variant: t.cancelVariant,
			onClick: c[0] ||= (e) => w("cancel")
		}, {
			default: m(() => [a(d(t.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : n("", !0)]));
	}
}, [["__scopeId", "data-v-4a83407c"]]);
export { x as default };
