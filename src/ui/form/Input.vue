<script setup>
import {ref, computed} from "vue"

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  type: { type: [String, Boolean], default: 'text' },
  label: { type: [String, Boolean], default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  autocompleteOff: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const input = ref(null)

const browserError = ref("")
const classes = computed(() => [{
  'input-label': props.label,
  'input-error': props.error || browserError.value,
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

defineExpose({
  focus: () => input.value?.focus(),
  blur: () => input.value?.blur(),
  setCustomValidity: (message) => {
    input.value?.setCustomValidity(message)
  }
})
</script>

<template>
  <div class="input" :class="classes">
    <slot name="before"/>
    <input
        ref="input"
        :type="type"
        v-model="model"
        placeholder=" "
        :required="required"
        :disabled="disabled"
        @invalid.prevent="validate"
        @input="validate"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        :autocomplete="autocompleteOff ? 'off' : null"/>
    <div v-if="label" class="label">{{ label }}</div>
    <div v-if="error || browserError" class="error">{{ error || browserError }}</div>
    <slot name="after"/>
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
  z-index: 1;
  input {
    width: 100%;
    background: var(--snd-input);
    border: 2px solid var(--snd-input-border);
    height: var(--snd-input-height);
    color: var(--snd-text-primary);
    padding: 0 5px;
    border-radius: 8px;
    outline: none;
    font-size: 0.8rem;
    z-index: 3;
    position: relative;
    &:focus {
      border-color: var(--snd-accent-primary);
    }
    &:disabled {
      opacity: 0.5;
    }
    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px var(--snd-input) inset;
      -webkit-text-fill-color: var(--snd-text-primary);
      transition: background-color 9999s ease-in-out 0s;
    }
  }
  &.input-error {
    input {
      border-color: var(--snd-input-error);
      &:focus {
        border-color: var(--snd-input-error);
      }
    }
  }
  &.input-label {
    input {
      &:focus ~ .label,
      &:not(:placeholder-shown) ~ .label {
        transform: translate(5px) translateY(-12px);
        background: var(--snd-input-label);
        color: var(--snd-text-primary);
        z-index: 5;
        margin: 0;
      }
      &:disabled ~ .label {
        opacity: 0.5;
      }
    }
    .label {
      color: var(--snd-text-secondary);
      pointer-events: none;
      align-items: center;
      padding: 0 5px;
      font-size: 0.8rem;
      transition: all .5s;
      display: flex;
      position: absolute;
      top: 0;
      left: 2px;
      height: 21px;
      margin: 10px 0;
      border-radius: 5px;
      z-index: 3;
    }
  }
  .error {
    color: var(--snd-input-error);
    text-align: left;
    padding: 0 7px;
    font-size: 0.733rem;
    line-height: 0.867rem;
  }
}
</style>