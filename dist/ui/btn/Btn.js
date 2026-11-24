import e from "../progress/Progress.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createVNode as o, normalizeClass as s, openBlock as c, renderSlot as l, resolveComponent as u, withCtx as d } from "vue";
import '../../Btn.css';// src/ui/btn/Btn.vue
var f = ["href"], p = /*#__PURE__*/ t({
	__name: "Btn",
	props: {
		href: {
			type: String,
			default: ""
		},
		to: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"small",
				"big"
			].includes(e)
		},
		variant: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"outline",
				"gray",
				"red",
				"green"
			].includes(e)
		},
		hover: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"blue",
				"red",
				"green"
			].includes(e)
		},
		progressLabel: {
			type: String,
			default: ""
		},
		progressShow: {
			type: Boolean,
			default: !1
		},
		withIcon: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let p = t, m = n(() => [{
			"btn-big": p.size === "big",
			"btn-small": p.size === "small",
			"btn-outline": p.variant === "outline",
			"btn-gray": p.variant === "gray",
			"btn-red": p.variant === "red",
			"btn-green": p.variant === "green",
			"btn-hover-blue": p.hover === "blue",
			"btn-hover-red": p.hover === "red",
			"btn-hover-green": p.hover === "green",
			"btn-progress": p.progressLabel,
			"btn-with-icon": p.withIcon
		}]);
		return (n, p) => {
			let h = u("RouterLink");
			return t.to ? (c(), r(h, {
				key: 0,
				to: t.to,
				class: s(["btn", m.value])
			}, {
				default: d(() => [o(e, {
					show: t.progressShow,
					label: t.progressLabel
				}, null, 8, ["show", "label"]), t.progressShow ? i("", !0) : l(n.$slots, "default", {}, void 0, !0, 0)]),
				_: 3
			}, 8, ["to", "class"])) : t.href ? (c(), a("a", {
				key: 1,
				href: t.href,
				class: s(["btn", m.value])
			}, [o(e, {
				show: t.progressShow,
				label: t.progressLabel
			}, null, 8, ["show", "label"]), t.progressShow ? i("", !0) : l(n.$slots, "default", {}, void 0, !0, 0)], 10, f)) : (c(), a("button", {
				key: 2,
				class: s(["btn", m.value])
			}, [o(e, {
				show: t.progressShow,
				label: t.progressLabel
			}, null, 8, ["show", "label"]), t.progressShow ? i("", !0) : l(n.$slots, "default", {}, void 0, !0, 0)], 2));
		};
	}
}, [["__scopeId", "data-v-c1783165"]]);
export { p as default };
