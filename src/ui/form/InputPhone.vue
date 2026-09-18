<script setup>
import {computed, watch} from "vue"

import Input from "../form/Input.vue"
import {vMaska} from "maska/vue"

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  autocompleteOff: { type: Boolean, default: false },
  country: { type: String, default: 'RU' },
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: value => emit("update:modelValue", value)
})

const mask = computed(() =>
    props.country === "BY" ? "+375 (##) ###-##-##" : "+7 (###) ###-##-##"
)

watch(() => props.country, () => {
  emit("update:modelValue", "")
})
</script>

<template>
  <Input
      v-model="model"
      type="tel"
      :label="label"
      :required="required"
      :disabled="disabled"
      :error="error"
      :autocompleteOff="autocompleteOff"
      v-maska="mask"/>
</template>

<style scoped lang="scss">
</style>