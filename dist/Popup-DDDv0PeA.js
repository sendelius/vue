import e from "./ui/popup/Confirm.js";
import t from "./ui/notice/Error.js";
import n from "./ui/notice/Success.js";
import r from "./ui/notice/Warning.js";
import i from "./ui/btn/Btn.js";
import { t as a } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { Teleport as o, Transition as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createVNode as f, nextTick as p, onBeforeUnmount as m, openBlock as h, ref as g, toDisplayString as _, unref as v, watch as y, withCtx as b, withModifiers as x } from "vue";
import './Popup.css';// src/ui/popup/usePopup.js
var S = g(!1), C = g("popup"), w = g(""), T = g(""), E = g("Подтвердить"), D = g("Отменить"), O = g(""), k = g("gray"), A = g(!0), j = null, M = (e = {}) => (w.value = e.title ?? "", T.value = e.content ?? "", C.value = e.type ?? "popup", S.value = !0, new Promise((e) => {
	j = e;
})), N = (e = null) => {
	S.value = !1, j &&= (j(e), null);
}, P = (e, t = {}) => (w.value = t.title ?? "Подтверждение", T.value = e, E.value = t.confirmText ?? "Подтвердить", D.value = t.cancelText ?? "Отменить", O.value = t.confirmVariant ?? "", k.value = t.cancelVariant ?? "gray", C.value = "confirm", S.value = !0, A.value = !1, new Promise((e) => {
	j = e;
})), F = (e, t = {}) => (w.value = e, T.value = t.content ?? "", D.value = t.cancelText ?? "Понятно", k.value = t.cancelVariant ?? "gray", C.value = "error", S.value = !0, A.value = !1, new Promise((e) => {
	j = e;
})), I = (e, t = {}) => (w.value = t.title ?? "", T.value = e, D.value = t.cancelText ?? "Понятно", k.value = t.cancelVariant ?? "gray", C.value = "success", S.value = !0, A.value = !1, new Promise((e) => {
	j = e;
})), L = (e, t = {}) => (w.value = t.title ?? "", T.value = e, D.value = t.cancelText ?? "Понятно", k.value = t.cancelVariant ?? "gray", C.value = "warning", S.value = !0, A.value = !1, new Promise((e) => {
	j = e;
})), R = () => ({
	visible: S,
	type: C,
	title: w,
	content: T,
	confirmText: E,
	cancelText: D,
	showClose: A,
	confirmVariant: O,
	cancelVariant: k,
	popupOpen: M,
	popupClose: N,
	popupConfirm: P,
	popupError: F,
	popupSuccess: I,
	popupWarning: L
}), z = {
	class: "popup",
	role: "dialog",
	"aria-modal": "true"
}, B = {
	key: 0,
	class: "popup-title"
}, V = ["innerHTML"], H = ["innerHTML"], U = /*#__PURE__*/ a({
	__name: "Popup",
	setup(a) {
		let { visible: g, type: S, title: C, content: w, confirmText: T, cancelText: E, showClose: D, confirmVariant: O, cancelVariant: k, popupClose: A } = R(), j = (e) => {
			g.value && e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), A(!1));
		};
		y(g, async (e) => {
			e ? (document.addEventListener("keydown", j), document.body.classList.add("popupIsOpen"), await p()) : (document.removeEventListener("keydown", j), document.body.classList.remove("popupIsOpen"));
		}, { immediate: !0 }), m(() => {
			document.removeEventListener("keydown", j), document.body.classList.remove("popupIsOpen");
		});
		let M = () => {
			A(!1);
		};
		return (a, p) => (h(), c(o, { to: "body" }, [f(s, { name: "popup" }, {
			default: b(() => [v(g) ? (h(), u("div", {
				key: 0,
				class: "popup-wrap",
				onClick: x(M, ["self"])
			}, [d("div", z, [
				v(C) && v(S) !== "error" ? (h(), u("div", B, _(v(C)), 1)) : l("", !0),
				v(w) && v(S) !== "error" && v(S) !== "success" ? (h(), u("div", {
					key: 1,
					class: "popup-content",
					innerHTML: v(w)
				}, null, 8, V)) : l("", !0),
				v(S) === "confirm" ? (h(), c(e, {
					key: 2,
					"confirm-text": v(T),
					"cancel-text": v(E),
					"confirm-variant": v(O),
					"cancel-variant": v(k),
					onConfirm: p[0] ||= (e) => v(A)(!0),
					onCancel: p[1] ||= (e) => v(A)(!1)
				}, null, 8, [
					"confirm-text",
					"cancel-text",
					"confirm-variant",
					"cancel-variant"
				])) : v(S) === "error" ? (h(), c(t, {
					key: 3,
					title: v(C),
					content: v(w),
					"cancel-action": !0,
					"cancel-text": v(E),
					"cancel-variant": v(k),
					onCancel: p[2] ||= (e) => v(A)(!1)
				}, null, 8, [
					"title",
					"content",
					"cancel-text",
					"cancel-variant"
				])) : v(S) === "success" ? (h(), c(n, {
					key: 4,
					content: v(w),
					"cancel-action": !0,
					"cancel-text": v(E),
					"cancel-variant": v(k),
					onCancel: p[3] ||= (e) => v(A)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : v(S) === "warning" ? (h(), c(r, {
					key: 5,
					content: v(w),
					"cancel-action": !0,
					"cancel-text": v(E),
					"cancel-variant": v(k),
					onCancel: p[4] ||= (e) => v(A)(!1)
				}, null, 8, [
					"content",
					"cancel-text",
					"cancel-variant"
				])) : (h(), u("div", {
					key: 6,
					class: "popup-content",
					innerHTML: v(w)
				}, null, 8, H)),
				v(D) ? (h(), c(i, {
					key: 7,
					class: "popup-close",
					variant: "gray",
					size: "small",
					hover: "red",
					onClick: p[5] ||= (e) => v(A)(!1)
				}, {
					default: b(() => [...p[6] ||= [d("svg", {
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
					}, [d("path", { d: "M18 6l-12 12" }), d("path", { d: "M6 6l12 12" })], -1)]]),
					_: 1
				})) : l("", !0)
			])])) : l("", !0)]),
			_: 1
		})]));
	}
}, [["__scopeId", "data-v-a7401887"]]);
export { R as n, U as t };
