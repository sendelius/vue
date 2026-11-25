import { t as e } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { createElementBlock as t, createElementVNode as n, createStaticVNode as r, onMounted as i, openBlock as a, ref as o } from "vue";
import '../../ThemeSwitcher.css';// src/ui/theme/ThemeSwitcher.vue
var s = { class: "theme-switcher" }, c = ["aria-pressed"], l = ["width", "height"], u = ["aria-pressed"], d = ["width", "height"], f = /*#__PURE__*/ e({
	__name: "ThemeSwitcher",
	props: { iconSize: {
		type: [String, Number],
		default: 20
	} },
	setup(e) {
		let f = o("light"), p = (e) => {
			f.value = e, document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", e);
		};
		return i(() => {
			let e = document.documentElement.getAttribute("data-theme");
			(e === "light" || e === "dark") && (f.value = document.documentElement.getAttribute("data-theme") || "light");
		}), (i, o) => (a(), t("div", s, [n("button", {
			class: "theme-switcher__dark",
			type: "button",
			"aria-label": "Тёмная тема",
			"aria-pressed": f.value === "dark",
			onClick: o[0] ||= (e) => p("dark")
		}, [(a(), t("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: e.iconSize,
			height: e.iconSize,
			viewBox: "0 0 24 24",
			fill: "currentColor",
			class: "icon icon-moon"
		}, [...o[2] ||= [n("path", { d: "M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" }, null, -1)]], 8, l))], 8, c), n("button", {
			class: "theme-switcher__light",
			type: "button",
			"aria-label": "Светлая тема",
			"aria-pressed": f.value === "light",
			onClick: o[1] ||= (e) => p("light")
		}, [(a(), t("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: e.iconSize,
			height: e.iconSize,
			viewBox: "0 0 24 24",
			fill: "currentColor",
			class: "icon icon-sun"
		}, [...o[3] ||= [r("<path d=\"M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z\" data-v-9bc0735c></path><path d=\"M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z\" data-v-9bc0735c></path><path d=\"M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z\" data-v-9bc0735c></path><path d=\"M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z\" data-v-9bc0735c></path><path d=\"M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z\" data-v-9bc0735c></path><path d=\"M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z\" data-v-9bc0735c></path><path d=\"M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z\" data-v-9bc0735c></path><path d=\"M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z\" data-v-9bc0735c></path><path d=\"M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z\" data-v-9bc0735c></path>", 9)]], 8, d))], 8, u)]));
	}
}, [["__scopeId", "data-v-9bc0735c"]]);
export { f as default };
