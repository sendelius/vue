import e from "./TableFooter.js";
import t from "./TableHeader.js";
import n from "./TableItems.js";
import { t as r } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createElementBlock as i, createElementVNode as a, createSlots as o, createVNode as s, guardReactiveProps as c, nextTick as l, normalizeProps as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, openBlock as m, ref as h, renderList as g, renderSlot as _, toDisplayString as v, watch as y, withCtx as b } from "vue";
import '../../Table.css';// src/ui/table/Table.vue
var x = {
	key: 1,
	class: "table-empty"
}, S = /*#__PURE__*/ r({
	__name: "Table",
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
		bulkActions: {
			type: Array,
			default: () => []
		},
		sort: {
			type: Object,
			default: {}
		},
		textEmpty: {
			type: String,
			default: "нет записей"
		},
		navigate: {
			type: Function,
			default: null
		},
		bulkWidth: {
			type: [Number, String],
			default: 30
		},
		actionsWidth: {
			type: [Number, String],
			default: 100
		}
	},
	emits: ["update:sort"],
	setup(r, { emit: S }) {
		let C = r, w = S, T = h(null), E = h(null), D = h(null), O = h(null), k = h([]), A = () => {
			if (!T.value) return;
			let e = T.value.scrollLeft;
			D.value?.syncScroll(e), O.value?.syncScroll(e);
		}, j = (e) => {
			T.value && (T.value.scrollLeft = e);
		}, M = (e) => {
			w("update:sort", e);
		}, N = async () => {
			await l(), T.value && (T.value.removeEventListener("scroll", A), T.value.addEventListener("scroll", A));
		};
		return y(() => C.items.length, async () => {
			C.items.length ? await N() : k.value = [];
		}), y(() => [
			C.sort?.key,
			C.sort?.type,
			C.pagination?.page
		], () => {
			k.value = [];
		}), p(async () => {
			await N();
		}), f(() => {
			T.value?.removeEventListener("scroll", A);
		}), (l, f) => r.items.length ? (m(), i("div", {
			key: 0,
			ref_key: "tableWrap",
			ref: T,
			class: "table-wrap",
			style: d({
				"--table-bulk-width": `${r.bulkWidth}px`,
				"--table-actions-width": `${r.actionsWidth}px`
			})
		}, [a("div", {
			ref_key: "table",
			ref: E,
			class: "table"
		}, [
			s(t, {
				ref_key: "header",
				ref: D,
				columns: r.columns,
				items: r.items,
				bulk: r.bulk,
				actions: r.actions,
				"table-wrap": T.value,
				table: E.value,
				sort: r.sort,
				"onUpdate:sort": M,
				selected: k.value,
				"onUpdate:selected": f[0] ||= (e) => k.value = e
			}, {
				iconHeaderSortDesc: b(() => [_(l.$slots, "iconHeaderSortDesc", {}, void 0, !0)]),
				iconHeaderSortAsc: b(() => [_(l.$slots, "iconHeaderSortAsc", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"columns",
				"items",
				"bulk",
				"actions",
				"table-wrap",
				"table",
				"sort",
				"selected"
			]),
			s(n, {
				columns: r.columns,
				items: r.items,
				bulk: r.bulk,
				actions: r.actions,
				selected: k.value,
				"onUpdate:selected": f[1] ||= (e) => k.value = e
			}, o({
				actions: b((e) => [_(l.$slots, "actions", u(c(e)), void 0, !0)]),
				_: 2
			}, [g(r.columns, (e) => ({
				name: `cell-${e.key}`,
				fn: b((t) => [_(l.$slots, `cell-${e.key}`, u(c(t)), void 0, !0)])
			}))]), 1032, [
				"columns",
				"items",
				"bulk",
				"actions",
				"selected"
			]),
			s(e, {
				ref_key: "footer",
				ref: O,
				columns: r.columns,
				items: r.items,
				pagination: r.pagination,
				bulk: r.bulk,
				actions: r.actions,
				"bulk-actions": r.bulkActions,
				selected: k.value,
				"table-wrap": T.value,
				table: E.value,
				navigate: r.navigate,
				"onUpdate:scrollLeft": j
			}, {
				iconPaginationPrev: b(() => [_(l.$slots, "iconPaginationPrev", {}, void 0, !0)]),
				iconPaginationNext: b(() => [_(l.$slots, "iconPaginationNext", {}, void 0, !0)]),
				iconFooterActions: b(() => [_(l.$slots, "iconFooterActions", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"columns",
				"items",
				"pagination",
				"bulk",
				"actions",
				"bulk-actions",
				"selected",
				"table-wrap",
				"table",
				"navigate"
			])
		], 512)], 4)) : (m(), i("div", x, v(r.textEmpty), 1));
	}
}, [["__scopeId", "data-v-5bb29c0c"]]);
export { S as default };
