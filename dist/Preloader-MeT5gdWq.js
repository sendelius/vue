import { t as e } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { Teleport as t, Transition as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createVNode as s, onMounted as c, openBlock as l, reactive as u, toDisplayString as d, unref as f, withCtx as p } from "vue";
import './Preloader.css';// src/ui/preloader/index.js
var m = u({
	show: !1,
	label: "Загрузка интерфейса"
}), h = !1, g = null, _ = {
	init() {
		h || (h = !0, m.show = !0, m.label = "Загрузка интерфейса", document.body.classList.add("isLoading"), document.body.classList.remove("isLoaded"), document.readyState === "complete" ? this.hide() : (g = () => this.hide(), window.addEventListener("load", g, { once: !0 })));
	},
	show(e = "Загрузка интерфейса") {
		g &&= (window.removeEventListener("load", g), null), m.label = e, m.show = !0, document.body.classList.add("isLoading"), document.body.classList.remove("isLoaded");
	},
	setStage(e) {
		m.label = e;
	},
	hide() {
		g &&= (window.removeEventListener("load", g), null), m.show = !1, document.body.classList.remove("isLoading"), document.body.classList.add("isLoaded");
	}
}, v = {
	key: 0,
	class: "preloader",
	role: "status",
	"aria-live": "polite"
}, y = /*#__PURE__*/ e({
	__name: "Preloader",
	setup(e) {
		return c(() => {
			document.getElementById("preloader")?.remove();
		}), (e, c) => (l(), r(t, { to: "body" }, [s(n, { name: "preloader" }, {
			default: p(() => [f(m).show ? (l(), a("div", v, [c[0] ||= o("div", { class: "preloader__spinner" }, null, -1), s(n, {
				name: "preloader-label",
				mode: "out-in"
			}, {
				default: p(() => [(l(), a("span", {
					key: f(m).label,
					class: "preloader__label"
				}, d(f(m).label), 1))]),
				_: 1
			})])) : i("", !0)]),
			_: 1
		})]));
	}
}, [["__scopeId", "data-v-e4195266"]]);
export { _ as n, y as t };
