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
	baseURL: "",
	baseTitle: "",
	baseTitleSeparator: " - ",
	routeAfterLogin: "/app/",
	routeAfterLogout: "/",
	urlUserInfo: "/auth/me",
	urlLogin: "/auth/login",
	urlLogout: "/auth/logout",
	onUnauthorized: null,
	onLogout: null
}, x = (e = {}) => {
	b = {
		...b,
		...e
	};
}, S = () => b, C = null, w = () => (C = _.create({
	baseURL: S().baseURL,
	withCredentials: !0,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
}), C), T = () => {
	if (!C) throw Error("@sendelius/vue: initApi() должен быть запущен до getClient().");
	return C;
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
async function D(e, t = {}, n = {}) {
	return M("get", e, {
		params: t,
		...n
	});
}
async function O(e, t = {}, n = {}) {
	return M("post", e, t, n);
}
async function k(e, t = {}, n = {}) {
	return M("put", e, t, n);
}
async function A(e, t = {}, n = {}) {
	return M("patch", e, t, n);
}
async function j(e, t = {}, n = {}) {
	return M("delete", e, t, n);
}
async function M(e, t, n = {}, r = {}) {
	let i;
	try {
		i = e === "get" ? await T().get(t, n) : e === "delete" ? await T().delete(t, {
			data: n,
			...r
		}) : await T()[e](t, n, r);
	} catch (e) {
		throw e.response?.status === 401 && S().onUnauthorized?.(), new E({
			status: e.response?.status ?? null,
			data: e.response?.data ?? null
		});
	}
	let a = i.data;
	if (a?.status !== "success") throw new E({
		status: i.status,
		data: a
	});
	return a;
}
// src/auth/auth.js
var N = v("auth", {
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
				let e = await D(S().urlUserInfo);
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
				await O(S().urlLogin, {
					login: e,
					password: t,
					captcha: n
				}), await this.init(!1);
				let r = S().router;
				return r && await r.push(S().routeAfterLogin), !0;
			} catch (e) {
				throw e;
			}
		},
		async logout() {
			try {
				await j(S().urlLogout);
			} finally {
				this.clear(), S().onLogout?.();
				let e = S().router;
				e && await e.push(S().routeAfterLogout);
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
async function F() {
	let e = await I(), t = await R(e.challenge);
	return L(e.id, t);
}
async function I() {
	return D("/captcha/challenge");
}
async function L(e, t) {
	return (await O("/captcha/verify", {
		id: e,
		nonce: t
	}))?.token;
}
async function R(e) {
	let t = "0".repeat(4), n = 0;
	for (;;) {
		if ((await z(`${e}:${n}`)).startsWith(t)) return n;
		n++;
	}
}
async function z(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t);
	return Array.from(new Uint8Array(n)).map((e) => e.toString(16).padStart(2, "0")).join("");
}
// src/captcha/store.js
var B = v("captcha", () => {
	let e = y(""), t = y(!1), n = y(!1), r = null;
	return {
		token: e,
		isInit: t,
		isLoading: n,
		init: async () => t.value ? e.value : r || (n.value = !0, r = F().then((n) => (e.value = n, t.value = !0, n)).finally(() => {
			n.value = !1, r = null;
		}), r)
	};
});
function V() {
	return B();
}
// src/helpers/declension.js
function H(e, t, n, r) {
	let i = Math.abs(e) % 100, a = i % 10, o;
	return o = i >= 11 && i <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r, `${e} ${o}`;
}
// src/helpers/title.js
function U(e, t, n) {
	t ??= S().baseTitle, n ??= S().baseTitleSeparator, t || (n = ""), document.title = e ? `${e}${n}${t}` : t;
}
// src/helpers/objects.js
function W(e) {
	return Array.isArray(e) ? e.length === 0 : e && typeof e == "object" ? Object.keys(e).length === 0 : !0;
}
export { E as ApiError, i as SndAutocomplete, t as SndBtn, u as SndCheckbox, n as SndCookie, f as SndError, r as SndInput, s as SndInputCity, c as SndInputDate, l as SndInputPassword, a as SndInputPhone, h as SndPopup, e as SndProgress, o as SndSelect, p as SndSuccess, g as SndTable, d as SndWarning, x as configure, H as declension, D as get, T as getClient, S as getConfig, w as initApi, W as isEmpty, A as patch, O as post, k as put, j as remove, M as request, U as setTitle, P as useAuth, V as useCaptcha, m as usePopup };
