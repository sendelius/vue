<script setup>
import {onBeforeUnmount, onMounted} from 'vue'
import Btn from '../btn/Btn.vue'

defineProps({
  confirmText: { type: String, default: 'Подтвердить' },
  cancelText: { type: String, default: 'Отменить' },
  confirmVariant: { type: String, default: '', validator: value => ['outline', 'gray', 'red', 'green'].includes(value) },
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
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="confirm">
    <div class="confirm-actions">
      <Btn :variant="confirmVariant" @click="emit('confirm')">{{ confirmText }}</Btn>
      <Btn :variant="cancelVariant" @click="emit('cancel')">{{ cancelText }}</Btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.confirm {
  .confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>