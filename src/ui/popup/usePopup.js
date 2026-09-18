import {ref} from 'vue'

const visible = ref(false)
const type = ref('popup')
const title = ref('')
const content = ref('')
const confirmText = ref('Подтвердить')
const cancelText = ref('Отменить')
const confirmVariant = ref('')
const cancelVariant = ref('gray')
const showClose = ref(true)

let resolvePromise = null

const popupOpen = (options = {}) => {
    title.value = options.title ?? ''
    content.value = options.content ?? ''
    type.value = options.type ?? 'popup'
    visible.value = true
    return new Promise((resolve) => {
        resolvePromise = resolve
    })
}

const popupClose = (result = null) => {
    visible.value = false
    if (resolvePromise) {
        resolvePromise(result)
        resolvePromise = null
    }
}

const popupConfirm = (contentValue, options = {}) => {
    title.value = options.title ?? 'Подтверждение'
    content.value = contentValue
    confirmText.value = options.confirmText ?? 'Подтвердить'
    cancelText.value = options.cancelText ?? 'Отменить'
    confirmVariant.value = options.confirmVariant ?? ''
    cancelVariant.value = options.cancelVariant ?? 'gray'
    type.value = 'confirm'
    visible.value = true
    showClose.value = false
    return new Promise((resolve) => {
        resolvePromise = resolve
    })
}

const popupError = (titleValue, options = {}) => {
    title.value = titleValue
    content.value = options.content ?? ''
    cancelText.value = options.cancelText ?? 'Понятно'
    cancelVariant.value = options.cancelVariant ?? 'gray'
    type.value = 'error'
    visible.value = true
    showClose.value = false
    return new Promise((resolve) => {
        resolvePromise = resolve
    })
}

const popupSuccess = (contentValue, options = {}) => {
    title.value = options.title ?? ''
    content.value = contentValue
    cancelText.value = options.cancelText ?? 'Понятно'
    cancelVariant.value = options.cancelVariant ?? 'gray'
    type.value = 'success'
    visible.value = true
    showClose.value = false
    return new Promise((resolve) => {
        resolvePromise = resolve
    })
}

const popupWarning = (contentValue, options = {}) => {
    title.value = options.title ?? ''
    content.value = contentValue
    cancelText.value = options.cancelText ?? 'Понятно'
    cancelVariant.value = options.cancelVariant ?? 'gray'
    type.value = 'warning'
    visible.value = true
    showClose.value = false
    return new Promise((resolve) => {
        resolvePromise = resolve
    })
}

export const usePopup = () => {
    return {
        visible,
        type,
        title,
        content,
        confirmText,
        cancelText,
        showClose,
        confirmVariant,
        cancelVariant,
        popupOpen,
        popupClose,
        popupConfirm,
        popupError,
        popupSuccess,
        popupWarning,
    }
}