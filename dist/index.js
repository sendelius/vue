import e from "./ui/progress/Progress.js";
import t from "./ui/btn/Btn.js";
import n from "./ui/cookie/Cookie.js";
import r from "./ui/form/Input.js";
import i from "./ui/form/Autocomplete.js";
import { t as a } from "./InputPhone-CTq4y49q.js";
import o from "./ui/form/Select.js";
import s from "./ui/form/InputCity.js";
import { t as c } from "./InputDate-B_pfZ3Fy.js";
import l from "./ui/form/InputPassword.js";
import u from "./ui/form/Checkbox.js";
import d from "./ui/notice/Warning.js";
import f from "./ui/notice/Error.js";
import p from "./ui/notice/Success.js";
import { n as m, t as h } from "./Popup-DpbA-yj5.js";
import g from "./ui/table/Table.js";
import _ from "./ui/theme/ThemeSwitcher.js";
import v from "axios";
import { defineStore as y } from "pinia";
import { ref as b } from "vue";
// src/config/config.js
var x = {
	router: null,
	api: { default: "" },
	endpoints: {
		auth: {
			me: "/v1/auth/me",
			login: "/v1/auth/login",
			logout: "/v1/auth/logout"
		},
		captcha: {
			challenge: "/v1/captcha/challenge",
			verify: "/v1/captcha/verify"
		}
	},
	title: {
		default: "",
		separator: " - "
	},
	redirects: {
		afterLogin: "/",
		afterLogout: "/"
	},
	callbacks: {
		onUnauthorized: null,
		onLogout: null
	}
}, S = (e = {}) => {
	x = {
		...x,
		...e
	};
}, C = () => x, w = {}, T = () => {
	let e = C(), t = {
		withCredentials: !0,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
	};
	return Object.entries(e.api).forEach(([e, n]) => {
		w[e] = v.create({
			...t,
			baseURL: n
		});
	}), w;
}, E = (e = "default") => {
	let t = w[e] || w.default;
	if (!t) throw Error("@sendelius/vue: API-клиенты не инициализированы. Вызови initApi().");
	return t;
}, D = class extends Error {
	constructor({ status: e = null, data: t = null } = {}) {
		let n = t?.error, r = {
			code: n?.code ?? "UNKNOWN_ERROR",
			message: n?.message ?? "неизвестная ошибка",
			field: n?.field ?? null
		};
		super(r.message), this.name = "ApiError", this.status = e, this.data = t, this.error = r, this.field = r.field;
	}
};
// src/api/requests.js
async function O(e, t, n = {}, r = {}, i = "default") {
	let a = E(i), o;
	try {
		o = e === "get" ? await a.get(t, {
			params: n,
			...r
		}) : e === "delete" ? await a.delete(t, {
			data: n,
			...r
		}) : await a[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && C().callbacks.onUnauthorized?.(), new D({
			status: e.response?.status ?? null,
			data: e.response?.data ?? null
		});
	}
	let s = o.data;
	if (s?.status !== "success") throw new D({
		status: o.status,
		data: s
	});
	return s;
}
function k(e = "default") {
	return {
		get: (t, n = {}, r = {}) => O("get", t, n, r, e),
		post: (t, n = {}, r = {}) => O("post", t, n, r, e),
		put: (t, n = {}, r = {}) => O("put", t, n, r, e),
		patch: (t, n = {}, r = {}) => O("patch", t, n, r, e),
		remove: (t, n = {}, r = {}) => O("delete", t, n, r, e),
		request: (t, n, r = {}, i = {}) => O(t, n, r, i, e)
	};
}
// src/auth/auth.js
var { get: A, post: j, remove: M } = k("auth"), N = y("auth", {
	state: () => ({
		user: {},
		avatar: {
			color: "#000000",
			initials: "",
			image: ""
		},
		isAuth: !1,
		isInit: !1
	}),
	actions: {
		async init(e = !0) {
			if (this.isInit && e) return this.isAuth;
			try {
				let e = await A(C().endpoints.auth.me);
				e?.user ? (this.user = e.user, this.avatar = e.user.avatar ?? this.avatar, this.isAuth = !0) : this.clear();
			} catch {
				this.clear();
			} finally {
				this.isInit = !0;
			}
			return this.isAuth;
		},
		async login(e, t, n) {
			n ||= "";
			try {
				await j(C().endpoints.auth.login, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = C().router;
				return r && await r.push(C().redirects.afterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await M(C().endpoints.auth.logout);
			} finally {
				this.clear(), C().callbacks.onLogout?.();
				let e = C().router;
				e && await e.push(C().redirects.afterLogout);
			}
		},
		clear() {
			this.user = {}, this.avatar = {
				color: "#000000",
				initials: "",
				image: ""
			}, this.isAuth = !1;
		}
	}
});
function P() {
	return N();
}
// src/captcha/captcha.js
var { get: F, post: I } = k("auth");
async function L() {
	let e = await R(), t = await B(e.challenge);
	return z(e.id, t);
}
async function R() {
	return F(C().endpoints.captcha.challenge);
}
async function z(e, t) {
	return (await I(C().endpoints.captcha.verify, {
		id: e,
		nonce: t
	}))?.token;
}
async function B(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await V(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function V(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
// src/captcha/store.js
var H = y("captcha", () => {
	let e = b(""), t = b(!1), n = b(!1), r = null;
	return {
		token: e,
		isInit: t,
		isLoading: n,
		init: async () => t.value ? e.value : r || (n.value = !0, r = L().then((n) => (e.value = n, t.value = !0, n)).finally(() => {
			n.value = !1, r = null;
		}), r)
	};
});
function U() {
	return H();
}
// src/helpers/declension.js
function W(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
// src/helpers/title.js
function G(e, t, n) {
	t ??= C().title.default, n ??= C().title.separator, t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
// src/helpers/objects.js
function K(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
export { D as ApiError, i as SndAutocomplete, t as SndBtn, u as SndCheckbox, n as SndCookie, f as SndError, r as SndInput, s as SndInputCity, c as SndInputDate, l as SndInputPassword, a as SndInputPhone, h as SndPopup, e as SndProgress, o as SndSelect, p as SndSuccess, g as SndTable, _ as SndThemeSwitcher, d as SndWarning, S as configure, W as declension, E as getClient, C as getConfig, T as initApi, K as isEmpty, G as setTitle, k as useApi, P as useAuth, U as useCaptcha, m as usePopup };
