<script setup>
import {computed, ref} from "vue"

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  options: { type: Array, default: () => [] },
})

const emit = defineEmits(['update:modelValue'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const select = ref(null)

const browserError = ref("")
const classes = computed(() => [{
  'select-label': props.label,
  'select-error': props.error || browserError.value,
  'select-disabled': props.disabled,
}])

const validate = () => {
  browserError.value = select.value?.validationMessage ?? ""
}

const model = computed({
  get: () => props.modelValue,
  set: value => {
    emit("update:modelValue", value)
    browserError.value = ""
  }
})

defineExpose({
  focus: () => select.value?.focus(),
  blur: () => select.value?.blur()
})
</script>

<template>
  <div class="select" :class="classes">
    <slot name="before"/>
    <select
        ref="select"
        v-model="model"
        :required="required"
        :disabled="disabled"
        @invalid.prevent="validate"
        @input="validate">
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled">
        {{ option.title }}
      </option>
      <slot name="options"/>
    </select>
    <div v-if="label" class="label">{{ label }}</div>
    <div v-if="error || browserError" class="error">{{ error || browserError }}</div>
    <slot name="after"/>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  select {
    width: 100%;
    cursor: pointer;
    background: var(--snd-input);
    border: 2px solid var(--snd-input-border);
    height: var(--snd-input-height);
    color: var(--snd-text-primary);
    padding: 0 5px;
    border-radius: 8px;
    outline: none;
    font-size: 0.9231rem;
    &:focus {
      border-color: var(--snd-accent-primary);
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  &.select-error {
    select {
      border-color: var(--snd-input-error);
      &:focus {
        border-color: var(--snd-input-error);
      }
    }
  }
  &.select-label {
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
      background: var(--snd-input-label);
      color: var(--snd-text-primary);
      z-index: 2;
      margin: 0;
    }
    &.select-disabled .label {
      opacity: 0.5;
    }
  }
  .error {
    color: var(--snd-input-error);
    text-align: left;
    padding: 0 7px;
    font-size: 0.8461rem;
    line-height: 1rem;
  }
}
</style>