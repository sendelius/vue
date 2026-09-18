<script setup>
import {onBeforeUnmount, onMounted, useSlots} from 'vue'
import Btn from '../btn/Btn.vue'

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
  <div class="success">
    <div class="success-item">
      <div class="success-icon">
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
               class="icon icon-success icon-stroke">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M9 12l2 2l4 -4"/>
          </svg>
        </slot>
      </div>
      <div class="success-text" v-if="content" v-html="content"></div>
      <div class="success-text" v-else-if="!!slots['content']">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="success-actions" v-if="cancelAction">
      <Btn :variant="cancelVariant" @click="emit('cancel')">{{ cancelText }}</Btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.success {
  --notice-success-color: var(--color-black, #000000);
  --notice-success-bg: var(--color-gray-blue-lightest, #dee2fb);
  --notice-success-border: var(--color-green, #06a76a);
  --notice-success-icon: var(--color-green, #06a76a);
  .success-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--notice-success-bg);
    padding: 10px;
    border-left: 3px solid var(--notice-success-border);
    border-radius: 8px;
    .success-icon svg {
      stroke: var(--notice-success-icon);
    }
    .success-text {
      color: var(--notice-success-color);
      font-weight: 600;
      font-size: 1.0769rem;
      line-height: 1.3846rem;
    }
  }
  .success-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>