import e from "../form/Checkbox.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createStaticVNode as o, createTextVNode as s, createVNode as c, mergeProps as l, nextTick as u, normalizeClass as d, normalizeStyle as f, onBeforeUnmount as p, onMounted as m, openBlock as h, ref as g, renderList as _, renderSlot as v, toDisplayString as y } from "vue";
import '../../TableHeader.css';// src/ui/table/TableHeader.vue
var b = ["onClick"], x = { class: "table-row__sortable-title" }, S = "table-sort", C = /*#__PURE__*/ t({
	__name: "TableHeader",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		items: {
			type: Array,
			required: !0
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
		sort: {
			type: Object,
			default: {}
		}
	},
	emits: ["update:selected", "update:sort"],
	setup(t, { expose: C, emit: w }) {
		let T = t, E = w, D = g(null), O = g(!1), k = g({}), A = g({}), j = g({}), M = g({}), N = g({}), P = (e) => {
			e.target && E("update:selected", e.target.checked ? T.items.map((e) => e.id) : []);
		}, F = (e) => T.columns.find((t) => t.key === e && t.sortable), I = () => {
			try {
				let e = localStorage.getItem(S);
				if (!e) return;
				let t = JSON.parse(e);
				if (!t?.key || !["asc", "desc"].includes(t.type) || !F(t.key)) return;
				E("update:sort", t);
			} catch {}
		}, L = (e) => {
			if (!F(e)) return;
			let t = {
				key: e,
				type: T.sort?.key === e && T.sort?.type === "asc" ? "desc" : "asc"
			};
			localStorage.setItem(S, JSON.stringify(t)), E("update:sort", t);
		}, R = () => {
			if (!D.value || !T.tableWrap) return;
			let e = T.tableWrap.getBoundingClientRect(), t = D.value.offsetHeight;
			e.top <= 0 ? O.value || (O.value = !0, A.value = {
				height: `${t}px`,
				display: "block"
			}) : (O.value = !1, k.value = {}, A.value = { display: "none" }, j.value = { transform: "none" }, M.value = {}, N.value = {});
		}, z = () => {
			if (!T.tableWrap || !T.table || !O.value) return;
			let e = T.tableWrap, t = T.table, n = e.getBoundingClientRect();
			k.value = {
				width: `${e.clientWidth}px`,
				left: `${n.left}px`,
				overflow: "hidden"
			};
			let r = t.querySelector(".table-bulk")?.offsetWidth || 0;
			j.value = {
				width: `${t.offsetWidth}px`,
				transform: `translate3d(${r - e.scrollLeft}px, 0, 0)`
			};
			let i = t.querySelector(".table-item .table-bulk"), a = t.querySelector(".table-item .table-actions");
			if (i) {
				let t = i.getBoundingClientRect();
				N.value = {
					position: "fixed",
					left: `${t.left - n.left + e.scrollLeft - r}px`
				};
			}
			if (a) {
				let t = a.getBoundingClientRect();
				M.value = {
					position: "fixed",
					right: "auto",
					left: `${t.left - n.left + e.scrollLeft - r}px`
				};
			}
		}, B = () => {
			R(), z();
		};
		C({ syncScroll: (e) => {
			z();
		} });
		let V = null;
		return m(async () => {
			I(), window.addEventListener("scroll", B), window.addEventListener("resize", B), await u(), B(), requestAnimationFrame(() => {
				B();
			}), V = new ResizeObserver(() => {
				B();
			}), T.tableWrap && V.observe(T.tableWrap);
		}), p(() => {
			window.removeEventListener("scroll", B), window.removeEventListener("resize", B), V?.disconnect();
		}), (u, p) => (h(), i(n, null, [a("div", {
			ref_key: "header",
			ref: D,
			class: d(["table-header", { fixed: O.value }]),
			style: f(k.value)
		}, [a("div", {
			class: "table-header-inner",
			style: f(j.value)
		}, [
			t.bulk ? (h(), i("div", {
				key: 0,
				class: "table-bulk",
				style: f(N.value)
			}, [c(e, {
				"model-value": t.selected.length === t.items.length && t.items.length > 0,
				onChange: P
			}, null, 8, ["model-value"])], 4)) : r("", !0),
			(h(!0), i(n, null, _(t.columns, (e) => (h(), i("div", l({
				key: e.key,
				class: { "table-row__grow": e.grow },
				style: {
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px",
					sortable: e.sortable
				}
			}, { ref_for: !0 }, e.label ? { title: e.label } : {}), [e.sortable ? (h(), i("div", {
				key: 0,
				class: "table-row__sortable",
				onClick: (t) => L(e.key)
			}, [
				a("div", x, y(e.title), 1),
				T.sort?.key === e.key && T.sort?.type === "desc" ? v(u.$slots, "iconHeaderSortDesc", {}, () => [p[0] ||= o("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l9 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l7 0\" data-v-6e19f0ae></path><path d=\"M15 15l3 3l3 -3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 0) : r("", !0),
				T.sort?.key === e.key && T.sort?.type === "asc" ? v(u.$slots, "iconHeaderSortAsc", {}, () => [p[1] ||= o("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"table-header-icon\" data-v-6e19f0ae><path d=\"M4 6l7 0\" data-v-6e19f0ae></path><path d=\"M4 12l7 0\" data-v-6e19f0ae></path><path d=\"M4 18l9 0\" data-v-6e19f0ae></path><path d=\"M15 9l3 -3l3 3\" data-v-6e19f0ae></path><path d=\"M18 6l0 12\" data-v-6e19f0ae></path></svg>", 1)], !0, 1) : r("", !0)
			], 8, b)) : r("", !0), a("template", null, [s(y(e.title), 1)])], 16))), 128)),
			t.actions ? (h(), i("div", {
				key: 1,
				class: "table-actions",
				style: f(M.value)
			}, "Действия", 4)) : r("", !0)
		], 4)], 6), a("div", {
			class: "table-header-placeholder",
			style: f(A.value)
		}, null, 4)], 64));
	}
}, [["__scopeId", "data-v-6e19f0ae"]]);
export { C as default };
