<script setup>
import {ref, computed, watch} from "vue"

import {VueDatePicker} from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {ru} from "date-fns/locale"
import Btn from "../btn/Btn.vue"

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  timePicker: { type: Boolean, default: false },
  classMenu: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const input = ref(null)

const classes = computed(() => [{
  'input-label': props.label,
  'input-error': props.error,
  'input-required': props.required,
  'input-disabled': props.disabled,
}])
const textEmpty = ref(false)
const textChanged = ref(false)

const toLocalISOString = (date) => {
  const offset = date.getTimezoneOffset()
  const local = new Date(date.getTime() - offset * 60000)

  return local.toISOString().slice(0, 19)
}

const model = computed({
  get: () => {
    if (!props.modelValue) return null
    return new Date(props.modelValue)
  },
  set: value => {
    textEmpty.value = false
    emit("update:modelValue", value ? toLocalISOString(value) : '')
  }
})

const selectDate = () => {
  input.value?.selectDate();
}

const closeMenu = () => {
  input.value?.closeMenu();
}

const handleTextInput = event => {
  textChanged.value = true
  textEmpty.value = !event.text?.trim()
}

const handleModelUpdate = value => {
  textChanged.value = false
  textEmpty.value = !value
}

const handleBlur = (event) => {
  if (props.required && textEmpty.value) {
    console.log('handleBlur', model.value, new Date())
    model.value = new Date()
  }
  emit('blur', event)
}

defineExpose({
  focus: () => input.value?.focus(),
  blur: () => input.value?.blur(),
})

const initialized = ref(false)

watch(() => props.modelValue, value => {
  textEmpty.value = !value
  if (!initialized.value) {
    initialized.value = true
    if (props.required && !value) {
      model.value = new Date()
    }
  }
}, { immediate: true })
</script>

<template>
  <div class="input-date" :class="classes">
    <slot name="before"/>
    <VueDatePicker
        ref="input"
        v-model="model"
        :required="required"
        :disabled="disabled"
        :formats="{ input: (timePicker) ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy' }"
        :time-config="{ enableTimePicker: timePicker }"
        :ui="{ menu: classMenu }"
        :locale="ru"
        :teleport="true"
        text-input
        @update:model-value="handleModelUpdate"
        @text-input="handleTextInput"
        @focus="emit('focus', $event)"
        @blur="handleBlur">
      <template #action-buttons>
        <Btn size="small" variant="gray" @click="closeMenu()">Отмена</Btn>
        <Btn size="small" @click="selectDate()">Выбрать</Btn>
      </template>
    </VueDatePicker>
    <div v-if="label" class="label">{{ label }}</div>
    <div v-if="error" class="error">{{ error }}</div>
    <slot name="after"/>
  </div>
</template>

<style scoped lang="scss">
.input-date {
  --input-date-color: var(--color-black, #000000);
  --input-date-bg: var(--color-white-blue-light, #f6f8ff);
  --input-date-border: var(--color-gray-blue-medium, #b1b4c7);
  --input-date-focus-border: var(--color-primary, #2f80ed);
  --input-date-error: var(--color-red, #c10d18);
  --input-date-label-focus-color: var(--color-black, #000000);
  --input-date-label-focus-bg: var(--color-gray-blue-lighter, #d5d8ea);
  --input-date-label-disabled-color: var(--color-black-light, #777777);
  --input-date-label-disabled-bg: var(--color-gray-blue-lightest, #dee2fb);
  --input-date-height: var(--input-height, 40px);
  position: relative;
  z-index: 1;
  :deep(.dp--input-icons) {
    padding: 0 6px;
  }
  :deep(input) {
    background: var(--input-date-bg);
    border: 2px solid var(--input-date-border);
    width: 100%;
    height: var(--input-date-height);
    color: var(--input-date-color);
    border-radius: 8px;
    outline: none;
    font-size: 0.9231rem;
    padding: 0 26px;
    &:focus {
      border-color: var(--input-date-focus-border);
    }
    &:disabled {
      opacity: 0.5;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px var(--input-date-bg) inset;
      -webkit-text-fill-color: var(--input-date-color);
      transition: background-color 9999s ease-in-out 0s;
    }
  }
  &.input-error {
    :deep(input) {
      border-color: var(--input-date-error);
      &:focus {
        border-color: var(--input-date-error);
      }
    }
  }
  &.input-label {
    .label {
      pointer-events: none;
      align-items: center;
      padding: 0 5px;
      font-size: 0.9231rem;
      transition: all .5s;
      display: flex;
      position: absolute;
      top: 0;
      left: 2px;
      height: 21px;
      border-radius: 5px;
      transform: translate(5px) translateY(-12px);
      background: var(--input-date-label-focus-bg);
      color: var(--input-date-label-focus-color);
      z-index: 3;
      margin: 0;
    }
    &.input-disabled .label {
      background: var(--input-date-label-disabled-bg);
      color: var(--input-date-label-disabled-color);
    }
  }
  &.input-required {
    :deep(input) {
      padding: 0 5px 0 26px;
    }
    :deep(.dp--clear-btn) {
      display: none;
    }
  }
  .error {
    color: var(--input-date-error);
    text-align: left;
    padding: 0 7px;
    font-size: 0.8461rem;
    line-height: 1rem;
  }
  :global(.dp--menu-wrapper) {
    --dp-font-family: var(--font-family), sans-serif;
    --dp-font-size: 0.9231rem;
    --dp-preview-font-size: 0.9231rem;
    --dp-cell-size: 25px;
    --dp-cell-padding: 2px;
    --dp-menu-min-width: 240px;
    --dp-common-padding: 5px;
  }
  :global(.dp--theme-light) {
    --dp-primary-color: var(--color-primary, #2f80ed);
    --dp-background-color: var(--color-white-blue, #edf1ff);
    --dp-menu-border-color: var(--color-white-blue, #edf1ff);
    --dp-hover-color: var(--color-gray-blue-lighter, #d5d8ea);
  }
  :global(.dp--action-buttons) {
    gap: 5px;
  }
  :global(.dp--action-buttons .btn) {
    font-size: 0.9231rem;
    font-weight: 500;
  }
  :global(.dp--menu) {
    border-radius: 8px;
    box-shadow: 0 0 6px var(--color-black-alpha-25, rgba(0, 0, 0, 0.25));
  }
}
</style>