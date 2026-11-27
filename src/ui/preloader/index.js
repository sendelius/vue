import './style.scss'

import {reactive} from 'vue'

export const preloaderState = reactive({
    show: false,
    label: 'Загрузка интерфейса'
})
let initialized = false
let loadHandler = null

const preloader = {
    init() {
        if (initialized) return
        initialized = true
        preloaderState.show = true
        preloaderState.label = 'Загрузка интерфейса'
        document.body.classList.add('isLoading')
        document.body.classList.remove('isLoaded')
        if (document.readyState === 'complete') {
            this.hide()
        } else {
            loadHandler = () => this.hide()
            window.addEventListener('load', loadHandler, {once: true})
        }
    },
    show(label = 'Загрузка интерфейса') {
        if (loadHandler) {
            window.removeEventListener('load', loadHandler)
            loadHandler = null
        }
        preloaderState.label = label
        preloaderState.show = true
        document.body.classList.add('isLoading')
        document.body.classList.remove('isLoaded')
    },
    setStage(label) {
        preloaderState.label = label
    },
    hide() {
        if (loadHandler) {
            window.removeEventListener('load', loadHandler)
            loadHandler = null
        }
        preloaderState.show = false
        document.body.classList.remove('isLoading')
        document.body.classList.add('isLoaded')
    }
}

export default preloader
