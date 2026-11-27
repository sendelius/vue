import e from "../btn/Btn.js";
import { t } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, onMounted as s, openBlock as c, ref as l, renderSlot as u, withCtx as d } from "vue";
import '../../Cookie.css';// src/ui/cookie/Cookie.vue
var f = {
	key: 0,
	class: "cookie"
}, p = /*#__PURE__*/ t({
	__name: "Cookie",
	setup(t) {
		let p = l(!1), m = () => {
			localStorage.setItem("cookieAccepted", "1"), p.value = !1;
		};
		return s(() => {
			p.value = localStorage.getItem("cookieAccepted") !== "1";
		}), (t, s) => p.value ? (c(), r("div", f, [i("div", null, [u(t.$slots, "default", {}, void 0, !0)]), o(e, { onClick: m }, {
			default: d(() => [...s[0] ||= [a("Согласен", -1)]]),
			_: 1
		})])) : n("", !0);
	}
}, [["__scopeId", "data-v-af5c9b60"]]);
export { p as default };
