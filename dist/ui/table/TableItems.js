import e from "../form/Checkbox.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as n, createCommentVNode as r, createElementBlock as i, createTextVNode as a, createVNode as o, normalizeClass as s, normalizeStyle as c, onBeforeUnmount as l, onMounted as u, openBlock as d, ref as f, renderList as p, renderSlot as m, toDisplayString as h } from "vue";
import '../../TableItems.css';// src/ui/table/TableItems.vue
var g = ["onMousedown", "onMouseenter"], _ = {
	key: 1,
	class: "table-actions"
}, v = /*#__PURE__*/ t({
	__name: "TableItems",
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
		}
	},
	emits: ["update:selected"],
	setup(t, { emit: v }) {
		let y = t, b = v, x = f(!1), S = f(!1), C = f(!1), w = f(null), T = (e, t) => typeof e.format == "function" ? e.format(t[e.key], t) : t[e.key], E = (e) => {
			x.value = !0, C.value = !1, w.value = e, S.value = !y.selected.includes(e.id);
		}, D = (e) => {
			if (!x.value) return;
			C.value = !0;
			let t = new Set(y.selected);
			w.value && (S.value ? t.add(w.value.id) : t.delete(w.value.id)), S.value ? t.add(e.id) : t.delete(e.id), b("update:selected", [...t]), w.value = null;
		}, O = () => {
			x.value = !1, w.value = null;
		}, k = (e) => {
			x.value && D(e);
		}, A = (e) => {
			C.value && (e.preventDefault(), e.stopPropagation());
		};
		return u(() => {
			window.addEventListener("mouseup", O);
		}), l(() => {
			window.removeEventListener("mouseup", O);
		}), (l, u) => (d(!0), i(n, null, p(t.items, (f, v) => (d(), i("div", {
			key: v,
			class: s(["table-item", { "table-item__selected": t.selected.includes(f.id) }])
		}, [
			t.bulk ? (d(), i("div", {
				key: 0,
				class: "table-bulk",
				onMousedown: (e) => E(f),
				onMouseenter: (e) => k(f),
				onClick: A
			}, [o(e, {
				"model-value": t.selected,
				value: f.id,
				"onUpdate:modelValue": u[0] ||= (e) => b("update:selected", e)
			}, null, 8, ["model-value", "value"])], 40, g)) : r("", !0),
			(d(!0), i(n, null, p(t.columns, (e) => (d(), i("div", {
				key: e.key,
				class: s({ "table-row__grow": e.grow }),
				style: c({
					width: e.width + "px",
					minWidth: e.width + "px",
					maxWidth: e.width + "px"
				})
			}, [m(l.$slots, `cell-${e.key}`, {
				item: f,
				value: f[e.key]
			}, () => [a(h(T(e, f)), 1)], !0)], 6))), 128)),
			t.actions ? (d(), i("div", _, [m(l.$slots, "actions", { item: f }, void 0, !0)])) : r("", !0)
		], 2))), 128));
	}
}, [["__scopeId", "data-v-dc170bfa"]]);
export { v as default };
