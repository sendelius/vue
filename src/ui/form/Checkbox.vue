<script setup>
import {computed, ref, useSlots} from "vue"

const slots = useSlots()
const props = defineProps({
  modelValue: { type: [String, Boolean], default: '' },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  value: { type: String, default: '' },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const input = ref(null)

const uniqueId = `checkbox-${Math.random().toString(16).slice(2)}`
const browserError = ref("")
const classes = computed(() => [{
  'checkbox-error': props.error || browserError.value,
}])

const model = computed({
  get: () => props.modelValue,
  set: value => {
    emit("update:modelValue", value)
    browserError.value = ""
  }
})

const validate = () => {
  browserError.value = input.value?.validationMessage ?? ""
}
</script>

<template>
  <div class="checkbox" :class="classes">
    <slot name="before"/>
    <input
        ref="input"
        :id="uniqueId"
        type="checkbox"
        v-model="model"
        :value="value"
        :required="required"
        :disabled="disabled"
        @invalid.prevent="validate"
        @input="validate">
    <label :for="uniqueId">
      <span v-if="label">{{ label }}</span>
      <span v-else-if="!!slots['label']"><slot name="label"></slot></span>
    </label>
    <div class="error" v-if="error || browserError">{{ error || browserError }}</div>
    <slot name="after"/>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  --checkbox-label-color: var(--color-black, #000000);
  --checkbox-border: var(--color-gray-blue-medium, #b1b4c7);
  --checkbox-bg: var(--color-white-blue-light, #f6f8ff);
  --checkbox-hover-border: var(--color-primary, #2f80ed);
  --checkbox-checked-border: var(--color-primary, #2f80ed);
  --checkbox-checked-bg: var(--color-primary, #2f80ed);
  --checkbox-error: var(--color-red, #c10d18);
  label span {
    margin-left: 10px;
    line-height: 1.2308rem;
  }
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    outline: none;
    margin: 0;
    width: 2px;
    height: 2px;
    & + label {
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
      color: var(--checkbox-label-color);
      &:before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid var(--checkbox-border);
        border-radius: 5px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 60% 60%;
        background-color: var(--checkbox-bg);
        cursor: pointer;
      }
    }
    &:not(:disabled):not(:checked) + label:hover::before {
      border-color: var(--checkbox-hover-border);
    }
    &:checked + label::before {
      border-color: var(--checkbox-checked-border);
      background-color: var(--checkbox-checked-bg);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    &:disabled + label::before {
      opacity: 0.5;
    }
  }
  &.checkbox-error {
    input {
      &:not(:disabled):not(:checked) + label::before {
        border-color: var(--checkbox-error);
      }
    }
  }
  .error {
    color: var(--checkbox-error);
    text-align: left;
    padding: 3px 0 0 0;
    font-size: 0.8461rem;
    line-height: 1rem;
  }
}
</style>