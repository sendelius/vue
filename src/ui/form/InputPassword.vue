<script setup>
import {ref, computed} from "vue"

import Input from "../form/Input.vue"

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  autocompleteOff: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
const show = ref(false)

const model = computed({
  get: () => props.modelValue,
  set: value => emit("update:modelValue", value)
})
</script>

<template>
  <Input
      v-model="model"
      :type="show ? 'text' : 'password'"
      :label="label"
      :required="required"
      :disabled="disabled"
      :error="error"
      :autocompleteOff="autocompleteOff">
    <template #after>
      <div class="input-password-control">
        <button type="button" v-show="!show" class="show-password" title="показать пароль" @click.prevent="show = true">
          <slot name="iconEyeOff">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="input-password-control-icon">
              <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"/>
              <path d="M3 15l2.5 -3.8"/>
              <path d="M21 14.976l-2.492 -3.776"/>
              <path d="M9 17l.5 -4"/>
              <path d="M15 17l-.5 -4"/>
            </svg>
          </slot>
        </button>
        <button type="button" v-show="show" class="hide-password" title="скрыть пароль" @click.prevent="show = false">
          <slot name="iconEyeOn">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="input-password-control-icon">
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>
            </svg>
          </slot>
        </button>
      </div>
    </template>
  </Input>
</template>

<style scoped lang="scss">
.input-password-control {
  --input-password-control-icon: var(--color-black, #000000);
  position: absolute;
  top: 2px;
  right: 2px;
  height: 36px;
  width: 36px;
  display: block;
  z-index: 4;
  .hide-password,
  .show-password {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    .input-password-control-icon {
      display: block;
      stroke: var(--input-password-control-icon);
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>