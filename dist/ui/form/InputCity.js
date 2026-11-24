import e from "./Select.js";
import t from "./Autocomplete.js";
import { t as n } from "../../_plugin-vue_export-helper-Djzt4Yr7.js";
import { computed as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, openBlock as c, ref as l, toDisplayString as u, watch as d, withCtx as f } from "vue";
import '../../InputCity.css';// src/ui/form/InputCity.vue
var p = { class: "input-city" }, m = /*#__PURE__*/ n({
	__name: "InputCity",
	props: {
		city: {
			type: [String, Number],
			default: ""
		},
		region: {
			type: [String, Number],
			default: ""
		},
		country: {
			type: String,
			default: "RU"
		},
		label: {
			type: [String, Boolean],
			default: ""
		},
		error: {
			type: String,
			default: ""
		},
		autocomplete: {
			type: Function,
			default: null
		}
	},
	emits: [
		"update:city",
		"update:region",
		"update:country"
	],
	setup(n, { expose: m, emit: h }) {
		let g = n, _ = h, v = [{
			title: "🇷🇺 Россия",
			value: "RU"
		}, {
			title: "🇧🇾 Беларусь",
			value: "BY"
		}], y = r({
			get: () => g.city,
			set: (e) => _("update:city", e)
		}), b = r({
			get: () => g.region,
			set: (e) => _("update:region", e)
		}), x = r({
			get: () => g.country,
			set: (e) => _("update:country", e)
		}), S = l(null), C = l(!1), w = r(() => !!S.value && S.value.city === y.value && S.value.country === x.value), T = r(() => g.error ? g.error : !C.value || !y.value || w.value ? "" : "Выберите город из списка"), E = async (e) => (await g.autocomplete?.(e, x.value))?.cities ?? [], D = (e) => {
			C.value = !0, S.value = e, y.value = e.city, b.value = e.region, x.value = e.country;
		};
		return d(y, (e) => {
			S.value?.city !== e && (S.value = null, b.value = "");
		}), d(x, () => {
			y.value = "", b.value = "", S.value = null;
		}), m({ validate: () => (C.value = !0, y.value ? w.value : !1) }), (r, l) => (c(), i("div", p, [s(e, {
			options: v,
			modelValue: x.value,
			"onUpdate:modelValue": l[0] ||= (e) => x.value = e,
			label: "Страна"
		}, null, 8, ["modelValue"]), s(t, {
			modelValue: y.value,
			"onUpdate:modelValue": l[1] ||= (e) => y.value = e,
			autocomplete: E,
			label: n.label,
			error: T.value,
			required: "",
			onSelect: D
		}, {
			default: f(({ item: e }) => [a("small", null, u(e.region), 1), o(" " + u(e.city), 1)]),
			empty: f(() => [...l[2] ||= [o(" Город не найден ", -1)]]),
			_: 1
		}, 8, [
			"modelValue",
			"label",
			"error"
		])]));
	}
}, [["__scopeId", "data-v-cf7e5a0c"]]);
export { m as default };
