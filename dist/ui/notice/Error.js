import e from "../btn/Btn.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, onBeforeUnmount as s, onMounted as c, openBlock as l, renderSlot as u, toDisplayString as d, unref as f, useSlots as p, withCtx as m } from "vue";
import '../../Error.css';// src/ui/notice/Error.vue
var h = { class: "error" }, g = { class: "error-item" }, _ = { class: "error-icon" }, v = { class: "error-text" }, y = {
	key: 0,
	class: "error-title"
}, b = { key: 0 }, x = {
	key: 1,
	class: "error-title"
}, S = ["innerHTML"], C = {
	key: 3,
	class: "error-content"
}, w = {
	key: 0,
	class: "error-actions"
}, T = /*#__PURE__*/ t({
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
	setup(t, { emit: T }) {
		let E = p(), D = t, O = T, k = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), O("confirm"));
		};
		return c(() => {
			D.cancelAction && document.addEventListener("keydown", k);
		}), s(() => {
			D.cancelAction && document.removeEventListener("keydown", k);
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
			class: "icon icon-error icon-stroke"
		}, [
			i("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
			i("path", { d: "M12 9v4" }),
			i("path", { d: "M12 16v.01" })
		], -1)], !0)]), i("div", v, [t.title ? (l(), r("div", y, [a(d(t.title), 1), t.content ? (l(), r("span", b, ":")) : n("", !0)])) : f(E).title ? (l(), r("div", x, [u(s.$slots, "title", {}, void 0, !0)])) : n("", !0), t.content ? (l(), r("div", {
			key: 2,
			class: "error-content",
			innerHTML: t.content
		}, null, 8, S)) : f(E).content ? (l(), r("div", C, [u(s.$slots, "content", {}, void 0, !0)])) : n("", !0)])]), t.cancelAction ? (l(), r("div", w, [o(e, {
			variant: t.cancelVariant,
			onClick: c[0] ||= (e) => O("cancel")
		}, {
			default: m(() => [a(d(t.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])) : n("", !0)]));
	}
}, [["__scopeId", "data-v-55aaf65f"]]);
export { T as default };
