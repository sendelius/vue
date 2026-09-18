import {defineStore} from 'pinia'
import {get, post, remove} from "./requests.js"
import {getConfig} from "../config/config.js"

const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
        avatar: {
            color: '#000000',
            initials: '',
            image: '',
        },
        isAuth: false,
        isInit: false,
    }),
    actions: {
        async init(check = true) {
            if (this.isInit && check) {
                return this.isAuth
            }

            try {
                const data = await get(getConfig().urlUserInfo)
                if (data?.user) {
                    this.user = data.user
                    this.avatar = data.user.avatar ?? this.avatar
                    this.isAuth = true
                } else {
                    this.clear()
                }
            } catch (error) {
                this.clear()
            } finally {
                this.isInit = true
            }

            return this.isAuth
        },
        async login(login, password, captcha) {
            if (!captcha) captcha = ''
            try {
                await post(getConfig().urlLogin, { login, password, captcha })
                await this.init(false)

                const router = getConfig().router
                if (router) {
                    await router.push(getConfig().routeAfterLogin)
                }

                return true
            } catch (error) {
                throw error
            }
        },
        async logout() {
            try {
                await remove(getConfig().urlLogout)
            } finally {
                this.clear()
                getConfig().onLogout?.()
                const router = getConfig().router
                if (router) {
                    await router.push(getConfig().routeAfterLogout)
                }
            }
        },
        clear() {
            this.user = {}
            this.avatar = {
                color: '#000000',
                initials: '',
                image: '',
            }
            this.isAuth = false
        },
    }
})

export function useAuth() {
    return useAuthStore()
}