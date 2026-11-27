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
import { n as v, t as y } from "./Preloader-MeT5gdWq.js";
import b from "axios";
import { defineStore as x } from "pinia";
import { ref as S } from "vue";
// src/config/config.js
var C = {
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
}, w = (e = {}) => {
	C = {
		...C,
		...e
	};
}, T = () => C, E = {}, D = () => {
	let e = T(), t = {
		withCredentials: !0,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
	};
	return Object.entries(e.api).forEach(([e, n]) => {
		E[e] = b.create({
			...t,
			baseURL: n
		});
	}), E;
}, O = (e = "default") => {
	let t = E[e] || E.default;
	if (!t) throw Error("@sendelius/vue: API-клиенты не инициализированы. Вызови initApi().");
	return t;
}, k = class extends Error {
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
async function A(e, t, n = {}, r = {}, i = "default") {
	let a = O(i), o;
	try {
		o = e === "get" ? await a.get(t, {
			params: n,
			...r
		}) : e === "delete" ? await a.delete(t, {
			data: n,
			...r
		}) : await a[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && T().callbacks.onUnauthorized?.(), new k({
			status: e.response?.status ?? null,
			data: e.response?.data ?? null
		});
	}
	let s = o.data;
	if (s?.status !== "success") throw new k({
		status: o.status,
		data: s
	});
	return s;
}
function j(e = "default") {
	return {
		get: (t, n = {}, r = {}) => A("get", t, n, r, e),
		post: (t, n = {}, r = {}) => A("post", t, n, r, e),
		put: (t, n = {}, r = {}) => A("put", t, n, r, e),
		patch: (t, n = {}, r = {}) => A("patch", t, n, r, e),
		remove: (t, n = {}, r = {}) => A("delete", t, n, r, e),
		request: (t, n, r = {}, i = {}) => A(t, n, r, i, e)
	};
}
// src/auth/auth.js
var { get: M, post: N, remove: P } = j("auth"), F = x("auth", {
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
				let e = await M(T().endpoints.auth.me);
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
				await N(T().endpoints.auth.login, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = T().router;
				return r && await r.push(T().redirects.afterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await P(T().endpoints.auth.logout);
			} finally {
				this.clear(), T().callbacks.onLogout?.();
				let e = T().router;
				e && await e.push(T().redirects.afterLogout);
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
function I() {
	return F();
}
// src/captcha/captcha.js
var { get: L, post: R } = j("auth");
async function z() {
	let e = await B(), t = await H(e.challenge);
	return V(e.id, t);
}
async function B() {
	return L(T().endpoints.captcha.challenge);
}
async function V(e, t) {
	return (await R(T().endpoints.captcha.verify, {
		id: e,
		nonce: t
	}))?.token;
}
async function H(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await U(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function U(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
// src/captcha/store.js
var W = x("captcha", () => {
	let e = S(""), t = S(!1), n = S(!1), r = null;
	return {
		token: e,
		isInit: t,
		isLoading: n,
		init: async () => t.value ? e.value : r || (n.value = !0, r = z().then((n) => (e.value = n, t.value = !0, n)).finally(() => {
			n.value = !1, r = null;
		}), r)
	};
});
function G() {
	return W();
}
// src/helpers/declension.js
function K(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
// src/helpers/title.js
function q(e, t, n) {
	t ??= T().title.default, n ??= T().title.separator, t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
// src/helpers/objects.js
function J(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
export { k as ApiError, i as SndAutocomplete, t as SndBtn, u as SndCheckbox, n as SndCookie, f as SndError, r as SndInput, s as SndInputCity, c as SndInputDate, l as SndInputPassword, a as SndInputPhone, h as SndPopup, y as SndPreloader, e as SndProgress, o as SndSelect, p as SndSuccess, g as SndTable, _ as SndThemeSwitcher, d as SndWarning, w as configure, K as declension, O as getClient, T as getConfig, D as initApi, J as isEmpty, v as preloader, q as setTitle, j as useApi, I as useAuth, G as useCaptcha, m as usePopup };
