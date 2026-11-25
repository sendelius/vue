import e from "../form/Select.js";
import t from "./TablePagination.js";
import { t as n } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as r, computed as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createVNode as c, nextTick as l, normalizeClass as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, openBlock as m, ref as h, renderSlot as g, watch as _, withCtx as v } from "vue";
import '../../TableFooter.css';// src/ui/table/TableFooter.vue
var y = {
	key: 0,
	class: "table-footer-actions__left"
}, b = { class: "table-footer-actions__right" }, x = /*#__PURE__*/ n({
	__name: "TableFooter",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
		},
		pagination: {
			type: Object,
			default: {}
		},
		bulk: {
			type: Boolean,
			default: !1
		},
		actions: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Array,
			required: !0
		},
		tableWrap: {
			type: Object,
			required: !0
		},
		table: {
			type: Object,
			required: !0
		},
		navigate: {
			type: Function,
			default: null
		},
		bulkActions: {
			type: Array,
			default: []
		}
	},
	emits: ["update:scroll-left"],
	setup(n, { expose: x, emit: S }) {
		let C = n, w = S, T = h(null), E = h(null), D = h(!1), O = h({}), k = h({}), A = h({}), j = h(null), M = i(() => [{
			title: "Действие с выбранными",
			value: null
		}, ...C.bulkActions]), N = () => {
			if (!T.value || !C.tableWrap) return;
			let e = C.tableWrap.getBoundingClientRect(), t = T.value.offsetHeight, n = window.innerHeight, r = e.bottom, i = e.top;
			r > n && i < n - t ? D.value || (D.value = !0, k.value = {
				height: `${t}px`,
				display: "block"
			}) : (D.value = !1, O.value = {}, k.value = { display: "none" });
		}, P = () => {
			if (!D.value || !C.tableWrap || !C.table) return;
			let e = C.tableWrap.getBoundingClientRect();
			O.value = {
				width: `${C.tableWrap.clientWidth}px`,
				left: `${e.left}px`,
				overflow: "hidden"
			}, A.value = { width: `${C.table.offsetWidth}px` };
		}, F = () => {
			N(), P();
		}, I = () => {
			E.value && w("update:scroll-left", E.value.scrollLeft);
		};
		x({ syncScroll: (e) => {
			E.value && E.value.scrollLeft !== e && (E.value.scrollLeft = e);
		} }), _(j, async (e) => {
			if (!e) return;
			let t = C.bulkActions.find((t) => t.value === e);
			try {
				typeof t?.action == "function" && await t.action([...C.selected]);
			} finally {
				j.value = null;
			}
		});
		let L = null;
		return p(async () => {
			window.addEventListener("scroll", F), window.addEventListener("resize", F), E.value?.addEventListener("scroll", I), await l(), F(), requestAnimationFrame(() => {
				F();
			}), L = new ResizeObserver(() => {
				F();
			}), C.tableWrap && L.observe(C.tableWrap);
		}), f(() => {
			window.removeEventListener("scroll", F), window.removeEventListener("resize", F), E.value?.removeEventListener("scroll", I), L?.disconnect();
		}), (i, l) => (m(), o(r, null, [s("div", {
			ref_key: "footer",
			ref: T,
			class: u(["table-footer", { fixed: D.value }]),
			style: d(O.value)
		}, [
			n.bulk && n.selected.length ? (m(), o("div", y, [g(i.$slots, "iconFooterActions", {}, () => [l[1] ||= s("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "table-footer-icon"
			}, [s("path", { d: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" })], -1)], !0), c(e, {
				modelValue: j.value,
				"onUpdate:modelValue": l[0] ||= (e) => j.value = e,
				options: M.value
			}, null, 8, ["modelValue", "options"])])) : a("", !0),
			s("div", b, [c(t, {
				pagination: n.pagination,
				navigate: n.navigate
			}, {
				iconPaginationPrev: v(() => [g(i.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: v(() => [g(i.$slots, "iconPaginationNext", {}, void 0, !0)]),
				_: 3
			}, 8, ["pagination", "navigate"])]),
			s("div", {
				ref_key: "footerScroll",
				ref: E,
				class: "table-footer-scroll"
			}, [s("div", {
				class: "table-footer-scroll-content",
				style: d(A.value)
			}, null, 4)], 512)
		], 6), s("div", {
			class: "table-footer-placeholder",
			style: d(k.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-5fab884c"]]);
export { x as default };
