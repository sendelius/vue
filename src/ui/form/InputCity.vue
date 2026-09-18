<script setup>
import {computed, ref, watch} from "vue"

import Select from "../form/Select.vue"
import Autocomplete from "../form/Autocomplete.vue"

const props = defineProps({
  city: { type: [String, Number], default: '' },
  region: { type: [String, Number], default: '' },
  country: { type: String, default: 'RU' },
  label: { type: [String, Boolean], default: '' },
  error: { type: String, default: '' },
  autocomplete: { type: Function, default: null },
})

const emit = defineEmits([
  'update:city',
  'update:region',
  'update:country',
])

const countries = [
  { title: "🇷🇺 Россия", value: "RU" },
  { title: "🇧🇾 Беларусь", value: "BY" },
]

const city = computed({
  get: () => props.city,
  set: value => emit("update:city", value)
})

const region = computed({
  get: () => props.region,
  set: value => emit("update:region", value)
})

const country = computed({
  get: () => props.country,
  set: value => emit("update:country", value)
})

const selectedCity = ref(null)
const touched = ref(false)

const isValid = computed(() => {
  return !!selectedCity.value && selectedCity.value.city === city.value && selectedCity.value.country === country.value
})

const localError = computed(() => {
  if (props.error) return props.error
  if (!touched.value) return ""
  if (!city.value) return ""
  if (!isValid.value) return "Выберите город из списка"
  return ""
})

const findCities = async value => {
  const response = await props.autocomplete?.(
      value,
      country.value
  )
  return response?.cities ?? []
}

const selectCity = item => {
  touched.value = true
  selectedCity.value = item
  city.value = item.city
  region.value = item.region
  country.value = item.country
}

const validate = () => {
  touched.value = true
  if (!city.value) return false
  return isValid.value
}

watch(city, value => {
  if (selectedCity.value?.city !== value) {
    selectedCity.value = null
    region.value = ""
  }
})

watch(country, () => {
  city.value = ""
  region.value = ""
  selectedCity.value = null
})

defineExpose({
  validate
})
</script>

<template>
  <div class="input-city">
    <Select :options="countries" v-model="country" label="Страна"/>
    <Autocomplete
        v-model="city"
        :autocomplete="findCities"
        :label="label"
        :error="localError"
        required
        @select="selectCity">
      <template #default="{ item }">
        <small>{{ item.region }}</small>
        {{ item.city }}
      </template>
      <template #empty>
        Город не найден
      </template>
    </Autocomplete>
  </div>
</template>

<style scoped lang="scss">
.input-city {
  --input-city-small-color: var(--color-slate-light, #484e71);
  --input-city-small-hover-color: var(--color-white-blue, #edf1ff);
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  .select {
    width: 110px;
    min-width: 110px;
  }
  :deep(.autocomplete) {
    flex-grow: 1;
  }
}
</style>