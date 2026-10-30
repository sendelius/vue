import {ref} from 'vue'
import {defineStore} from 'pinia'
import {captcha as createCaptcha} from './captcha.js'

const useCaptchaStore = defineStore('captcha', () => {
    const token = ref('')
    const isInit = ref(false)
    const isLoading = ref(false)
    let promise = null
    const init = async () => {
        if (isInit.value) return token.value
        if (promise) return promise
        isLoading.value = true
        promise = createCaptcha().then(value => {
            token.value = value
            isInit.value = true
            return value
        }).finally(() => {
            isLoading.value = false
            promise = null
        })
        return promise
    }
    return {
        token,
        isInit,
        isLoading,
        init
    }
})

export function useCaptcha() {
    return useCaptchaStore()
}