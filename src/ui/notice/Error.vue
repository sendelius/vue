<script setup>
import {onBeforeUnmount, onMounted, useSlots} from 'vue'
import Btn from '../btn/Btn.vue'

const slots = useSlots()
const props = defineProps({
  title: { type: String, default: 'Ошибка' },
  content: { type: String, default: '' },
  cancelAction: { type: Boolean, default: false },
  cancelText: { type: String, default: 'Отменить' },
  cancelVariant: { type: String, default: 'gray', validator: value => ['outline', 'gray', 'red', 'green'].includes(value) },
})

const emit = defineEmits(['confirm', 'cancel'])

const onKeydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()
    emit('confirm')
  }
}

onMounted(() => {
  if (props.cancelAction) document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (props.cancelAction) document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="error">
    <div class="error-item">
      <div class="error-icon">
        <slot name="icon">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="icon icon-error icon-stroke">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M12 9v4"/>
            <path d="M12 16v.01"/>
          </svg>
        </slot>
      </div>
      <div class="error-text">
        <div class="error-title" v-if="title">{{ title }}<span v-if="content">:</span></div>
        <div class="error-title" v-else-if="!!slots['title']">
          <slot name="title"></slot>
        </div>
        <div class="error-content" v-if="content" v-html="content"></div>
        <div class="error-content" v-else-if="!!slots['content']">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="error-actions" v-if="cancelAction">
      <Btn :variant="cancelVariant" @click="emit('cancel')">{{ cancelText }}</Btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  --notice-error-color: var(--color-black, #000000);
  --notice-error-bg: var(--color-gray-blue-lightest, #dee2fb);
  --notice-error-border: var(--color-red, #c10d18);
  --notice-error-icon: var(--color-red, #c10d18);
  .error-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--notice-error-bg);
    padding: 10px;
    border-left: 3px solid var(--notice-error-border);
    border-radius: 8px;
    .error-icon svg {
      stroke: var(--notice-error-icon);
    }
    .error-text {
      color: var(--notice-error-color);
      font-size: 1.0769rem;
      line-height: 1.3846rem;
      .error-title {
        font-weight: 600;
      }
      .error-content::first-letter {
        text-transform: uppercase;
      }
    }
  }
  .error-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>