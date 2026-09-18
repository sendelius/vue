<script setup>
import {onBeforeUnmount, onMounted, useSlots} from 'vue'
import Btn from "../btn/Btn.vue"

const slots = useSlots()
const props = defineProps({
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
  <div class="warning">
    <div class="warning-item">
      <div class="warning-icon">
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
               class="icon icon-warning icon-stroke">
            <path d="M12 9v4"/>
            <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"/>
            <path d="M12 16h.01"/>
          </svg>
        </slot>
      </div>
      <div class="warning-text" v-if="content" v-html="content"></div>
      <div class="warning-text" v-else-if="!!slots['content']">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="warning-actions" v-if="cancelAction">
      <Btn :variant="cancelVariant" @click="emit('cancel')">{{ cancelText }}</Btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.warning {
  --notice-warning-color: var(--color-black, #000000);
  --notice-warning-bg: var(--color-gray-blue-lightest, #dee2fb);
  --notice-warning-border: var(--color-red, #c10d18);
  --notice-warning-icon: var(--color-red, #c10d18);
  .warning-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--notice-warning-bg);
    padding: 10px;
    border-left: 3px solid var(--notice-warning-border);
    border-radius: 8px;
    .warning-icon svg {
      stroke: var(--notice-warning-icon);
    }
    .warning-text {
      color: var(--notice-warning-color);
      font-weight: 600;
      font-size: 1.0769rem;
      line-height: 1.3846rem;
    }
  }
  .warning-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>