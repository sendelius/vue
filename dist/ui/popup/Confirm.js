import e from "../btn/Btn.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, onBeforeUnmount as o, onMounted as s, openBlock as c, toDisplayString as l, withCtx as u } from "vue";
import '../../Confirm.css';// src/ui/popup/Confirm.vue
var d = { class: "confirm" }, f = { class: "confirm-actions" }, p = /*#__PURE__*/ t({
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
	setup(t, { emit: p }) {
		let m = p, h = (e) => {
			e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), m("confirm"));
		};
		return s(() => {
			document.addEventListener("keydown", h);
		}), o(() => {
			document.removeEventListener("keydown", h);
		}), (o, s) => (c(), n("div", d, [r("div", f, [a(e, {
			variant: t.confirmVariant,
			onClick: s[0] ||= (e) => m("confirm")
		}, {
			default: u(() => [i(l(t.confirmText), 1)]),
			_: 1
		}, 8, ["variant"]), a(e, {
			variant: t.cancelVariant,
			onClick: s[1] ||= (e) => m("cancel")
		}, {
			default: u(() => [i(l(t.cancelText), 1)]),
			_: 1
		}, 8, ["variant"])])]));
	}
}, [["__scopeId", "data-v-a607a673"]]);
export { p as default };
