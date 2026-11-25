import { t as e } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, openBlock as o, toDisplayString as s } from "vue";
import '../../assets/Progress-B8_LrV8N.css';// src/ui/progress/Progress.vue
var c = {
	key: 0,
	class: "progress"
}, l = /*#__PURE__*/ e({
	__name: "Progress",
	props: {
		label: {
			type: String,
			default: ""
		},
		show: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (l, u) => e.show ? (o(), r("div", c, [e.label ? (o(), r(t, { key: 0 }, [a(s(e.label) + " ...", 1)], 64)) : n("", !0), u[0] ||= i("span", { class: "progress-loader" }, null, -1)])) : n("", !0);
	}
}, [["__scopeId", "data-v-b8d72681"]]);
export { l as default };
