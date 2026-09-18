<script setup>
import {nextTick, onBeforeUnmount, watch} from 'vue'

import {usePopup} from './usePopup'
import Confirm from './Confirm.vue'
import Error from '../notice/Error.vue'
import Success from '../notice/Success.vue'
import Warning from '../notice/Warning.vue'
import Btn from '../btn/Btn.vue'

const {
  visible,
  type,
  title,
  content,
  confirmText,
  cancelText,
  showClose,
  confirmVariant,
  cancelVariant,
  popupClose,
} = usePopup()

const onKeydown = (event) => {
  if (visible.value && event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    popupClose(false)
  }
}

watch(visible, async (value) => {
  if (value) {
    document.addEventListener('keydown', onKeydown)
    document.body.classList.add('popupIsOpen')
    await nextTick()
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.body.classList.remove('popupIsOpen')
  }
}, { immediate: true })

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('popupIsOpen')
})

const onOverlayClick = () => {
  popupClose(false)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="visible" class="popup-wrap" @click.self="onOverlayClick">
        <div class="popup" role="dialog" aria-modal="true">
          <div class="popup-title" v-if="title && type !== 'error'">{{ title }}</div>
          <div class="popup-content" v-if="content && type !== 'error' && type !== 'success'" v-html="content"></div>
          <Confirm
              v-if="type === 'confirm'"
              :confirm-text="confirmText"
              :cancel-text="cancelText"
              :confirm-variant="confirmVariant"
              :cancel-variant="cancelVariant"
              @confirm="popupClose(true)"
              @cancel="popupClose(false)"
          />
          <Error
              v-else-if="type === 'error'"
              :title="title"
              :content="content"
              :cancel-action="true"
              :cancel-text="cancelText"
              :cancel-variant="cancelVariant"
              @cancel="popupClose(false)"
          />
          <Success
              v-else-if="type === 'success'"
              :content="content"
              :cancel-action="true"
              :cancel-text="cancelText"
              :cancel-variant="cancelVariant"
              @cancel="popupClose(false)"
          />
          <Warning
              v-else-if="type === 'warning'"
              :content="content"
              :cancel-action="true"
              :cancel-text="cancelText"
              :cancel-variant="cancelVariant"
              @cancel="popupClose(false)"
          />
          <div v-else class="popup-content" v-html="content"></div>
          <Btn v-if="showClose" class="popup-close" variant="gray" size="small" hover="red" @click="popupClose(false)">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="icon icon-close icon-stroke">
              <path d="M18 6l-12 12"/>
              <path d="M6 6l12 12"/>
            </svg>
          </Btn>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.popup-wrap {
  --popup-bg: var(--color-white-blue, #edf1ff);
  --popup-bg-overflow: var(--color-black-alpha-50, rgba(0, 0, 0, 0.50));
  --popup-bg-shadow: var(--color-black-alpha-25, rgba(0, 0, 0, 0.25));
  position: fixed;
  inset: 0;
  z-index: 100500;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: var(--popup-bg-overflow);
  padding: 20px;
  overflow: auto;
  .popup {
    position: relative;
    width: 100%;
    max-width: 600px;
    background: var(--popup-bg);
    border-radius: 10px;
    box-shadow: 0 10px 40px var(--popup-bg-shadow);
    padding: 20px;
    .popup-title {
      margin-bottom: 10px;
      font-size: 1.3846rem;
      font-weight: 600;
    }
    .popup-close {
      position: absolute;
      right: 5px;
      top: 5px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.2s ease;
  .popup {
    transition: transform 0.2s ease,
    opacity 0.2s ease;
  }
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  .popup {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
  }
}
:global(body.popupIsOpen) {
  overflow: hidden;
}
:global(body.popupIsOpen #app) {
  filter: blur(2px);
}
</style>