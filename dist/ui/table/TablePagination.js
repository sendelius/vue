import e from "../form/Input.js";
import t from "../btn/Btn.js";
import { t as n } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, openBlock as l, renderSlot as u, toDisplayString as d, withCtx as f, withKeys as p } from "vue";
import '../../TablePagination.css';// src/ui/table/TablePagination.vue
var m = {
	key: 0,
	class: "table-pagination"
}, h = /*#__PURE__*/ n({
	__name: "TablePagination",
	props: {
		pagination: {
			type: Object,
			default: {}
		},
		navigate: {
			type: Function,
			default: null
		}
	},
	setup(n) {
		let h = n, g = (e) => `${window.location.pathname.replace(/\/page\/\d+\/?$/, "").replace(/\/+$/, "")}/page/${e}`, _ = () => {
			let e = Number(h.pagination.page);
			(!e || e < 1) && (e = 1), e > h.pagination.last && (e = h.pagination.last), h.pagination.page !== e && (h.pagination.page = e), h.navigate?.(g(e));
		}, v = (e) => {
			e.target.select();
		};
		return (h, y) => n.pagination && n.pagination.last > 1 ? (l(), a("div", m, [
			n.pagination.prev ? (l(), r(t, {
				key: 0,
				size: "small",
				variant: "gray",
				to: g(n.pagination.prev)
			}, {
				default: f(() => [u(h.$slots, "iconPaginationPrev", {}, () => [y[1] ||= o("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "table-pagination-icon"
				}, [
					o("path", { d: "M5 12l14 0" }),
					o("path", { d: "M5 12l4 4" }),
					o("path", { d: "M5 12l4 -4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : i("", !0),
			y[3] ||= s(" Страница ", -1),
			c(e, {
				type: "number",
				modelValue: n.pagination.page,
				"onUpdate:modelValue": y[0] ||= (e) => n.pagination.page = e,
				min: "1",
				max: n.pagination.last,
				onFocus: v,
				onKeydown: p(_, ["enter"])
			}, null, 8, ["modelValue", "max"]),
			y[4] ||= s(" из ", -1),
			o("strong", null, d(n.pagination.last), 1),
			n.pagination.next ? (l(), r(t, {
				key: 1,
				size: "small",
				variant: "gray",
				to: g(n.pagination.next)
			}, {
				default: f(() => [u(h.$slots, "iconPaginationNext", {}, () => [y[2] ||= o("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					class: "table-pagination-icon"
				}, [
					o("path", { d: "M5 12l14 0" }),
					o("path", { d: "M15 16l4 -4" }),
					o("path", { d: "M15 8l4 4" })
				], -1)], !0)]),
				_: 3
			}, 8, ["to"])) : i("", !0)
		])) : i("", !0);
	}
}, [["__scopeId", "data-v-8262809b"]]);
export { h as default };
