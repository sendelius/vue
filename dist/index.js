import e from "./ui/progress/Progress.js";
import t from "./ui/btn/Btn.js";
import n from "./ui/cookie/Cookie.js";
import r from "./ui/form/Input.js";
import i from "./ui/form/Autocomplete.js";
import { t as a } from "./InputPhone-CTq4y49q.js";
import o from "./ui/form/Select.js";
import s from "./ui/form/InputCity.js";
import { t as c } from "./InputDate-CRpVPH9p.js";
import l from "./ui/form/InputPassword.js";
import u from "./ui/form/Checkbox.js";
import d from "./ui/notice/Warning.js";
import f from "./ui/notice/Error.js";
import p from "./ui/notice/Success.js";
import { n as m, t as h } from "./Popup-BIJpeS3t.js";
import g from "./ui/table/Table.js";
import _ from "axios";
import { defineStore as v } from "pinia";
import { ref as y } from "vue";
// src/config/config.js
var b = {
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
}, x = (e = {}) => {
	b = {
		...b,
		...e
	};
}, S = () => b, C = {}, w = () => {
	let e = S(), t = {
		withCredentials: !0,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		}
	};
	return Object.entries(e.api).forEach(([e, n]) => {
		C[e] = _.create({
			...t,
			baseURL: n
		});
	}), C;
}, T = (e = "default") => {
	let t = C[e] || C.default;
	if (!t) throw Error("@sendelius/vue: API-клиенты не инициализированы. Вызови initApi().");
	return t;
}, E = class extends Error {
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
async function D(e, t, n = {}, r = {}, i = "default") {
	let a = T(i), o;
	try {
		o = e === "get" ? await a.get(t, {
			params: n,
			...r
		}) : e === "delete" ? await a.delete(t, {
			data: n,
			...r
		}) : await a[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && S().callbacks.onUnauthorized?.(), new E({
			status: e.response?.status ?? null,
			data: e.response?.data ?? null
		});
	}
	let s = o.data;
	if (s?.status !== "success") throw new E({
		status: o.status,
		data: s
	});
	return s;
}
function O(e = "default") {
	return {
		get: (t, n = {}, r = {}) => D("get", t, n, r, e),
		post: (t, n = {}, r = {}) => D("post", t, n, r, e),
		put: (t, n = {}, r = {}) => D("put", t, n, r, e),
		patch: (t, n = {}, r = {}) => D("patch", t, n, r, e),
		remove: (t, n = {}, r = {}) => D("delete", t, n, r, e),
		request: (t, n, r = {}, i = {}) => D(t, n, r, i, e)
	};
}
// src/auth/auth.js
var { get: k, post: A, remove: j } = O("auth"), M = v("auth", {
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
				let e = await k(S().endpoints.auth.me);
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
				await A(S().endpoints.auth.login, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = S().router;
				return r && await r.push(S().redirects.afterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await j(S().endpoints.auth.logout);
			} finally {
				this.clear(), S().callbacks.onLogout?.();
				let e = S().router;
				e && await e.push(S().redirects.afterLogout);
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
function N() {
	return M();
}
// src/captcha/captcha.js
var { get: P, post: F } = O("auth");
async function I() {
	let e = await L(), t = await z(e.challenge);
	return R(e.id, t);
}
async function L() {
	return P(S().endpoints.captcha.challenge);
}
async function R(e, t) {
	return (await F(S().endpoints.captcha.verify, {
		id: e,
		nonce: t
	}))?.token;
}
async function z(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await B(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function B(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
// src/captcha/store.js
var V = v("captcha", () => {
	let e = y(""), t = y(!1), n = y(!1), r = null;
	return {
		token: e,
		isInit: t,
		isLoading: n,
		init: async () => t.value ? e.value : r || (n.value = !0, r = I().then((n) => (e.value = n, t.value = !0, n)).finally(() => {
			n.value = !1, r = null;
		}), r)
	};
});
function H() {
	return V();
}
// src/helpers/declension.js
function U(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
// src/helpers/title.js
function W(e, t, n) {
	t ??= S().title.default, n ??= S().title.separator, t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
// src/helpers/objects.js
function G(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
export { E as ApiError, i as SndAutocomplete, t as SndBtn, u as SndCheckbox, n as SndCookie, f as SndError, r as SndInput, s as SndInputCity, c as SndInputDate, l as SndInputPassword, a as SndInputPhone, h as SndPopup, e as SndProgress, o as SndSelect, p as SndSuccess, g as SndTable, d as SndWarning, x as configure, U as declension, T as getClient, S as getConfig, w as initApi, G as isEmpty, W as setTitle, O as useApi, N as useAuth, H as useCaptcha, m as usePopup };
