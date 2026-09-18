<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from "vue"

import Input from "./Input.vue"
import Progress from "../progress/Progress.vue"

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  autocomplete: { type: Function, default: null },
  label: { type: [String, Boolean], default: '' },
  error: { type: String, default: '' },
  required: { type: Boolean, default: false },
  minLength: { type: Number, default: 2 },
  delay: { type: Number, default: 300 },
})

const emit = defineEmits(['update:modelValue', 'select', 'focus', 'blur'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const autocomplete = ref(null)
/** @type {import('vue').Ref<InstanceType<typeof Input>|null>} */
const input = ref(null)
/** @type {import('vue').Ref<HTMLElement|null>} */
const dropdown = ref(null)

const model = ref(props.modelValue)
const items = ref([])
const activeIndex = ref(-1)
const show = ref(false)
const empty = ref(false)
const progress = ref(false)
const dropdownStyle = ref({})
const dropdownClasses = ref({
  'autocomplete-dropdown__top': false,
  'autocomplete-dropdown__bottom': true,
})

let timer = null
let requestId = 0

const hide = () => {
  show.value = false
  items.value = []
  empty.value = false
  activeIndex.value = -1
}

const load = async () => {
  const value = model.value

  if (!props.autocomplete || value.length < props.minLength) {
    hide()
    return
  }

  const id = ++requestId
  progress.value = true
  show.value = true
  items.value = []
  empty.value = false
  activeIndex.value = -1

  try {
    const response = await props.autocomplete(value)
    if (id !== requestId) return
    items.value = response ?? []
    empty.value = items.value.length === 0
    activeIndex.value = items.value.length ? 0 : -1
  } catch {
    if (id !== requestId) return
    items.value = []
    empty.value = false
    activeIndex.value = -1
  } finally {
    if (id === requestId) {
      progress.value = false
    }
  }

  await nextTick()
  updateDropdownPosition()
}

const schedule = () => {
  clearTimeout(timer)
  if (model.value.length < props.minLength) {
    requestId++
    hide()
    progress.value = false
    return
  }
  timer = setTimeout(load, props.delay)
}

const select = (item) => {
  hide()
  emit('select', item)
}

const keydown = (event) => {
  if (!items.value.length) return
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      activeIndex.value++
      if (activeIndex.value >= items.value.length) {
        activeIndex.value = 0
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      activeIndex.value--
      if (activeIndex.value < 0) {
        activeIndex.value = items.value.length - 1
      }
      break
    case 'Enter':
      event.preventDefault()
      if (activeIndex.value >= 0) {
        select(items.value[activeIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      hide()
      break
  }
}

const focus = async (event) => {
  emit('focus', event)
  if (model.value.length >= props.minLength) {
    show.value = true
    await nextTick()
    updateDropdownPosition()
  }
}

const blur = (event) => {
  emit('blur', event)
}

const clickOutside = (event) => {
  if (autocomplete.value?.contains(event.target)) return
  if (dropdown.value?.contains(event.target)) return
  hide()
}

const updateDropdownPosition = () => {
  if (!autocomplete.value) return
  const rect = autocomplete.value.getBoundingClientRect()
  const dropdownHeight = dropdown.value?.offsetHeight ?? 0
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top
  if (dropdownHeight && spaceBelow < dropdownHeight && spaceAbove >= dropdownHeight) {
    dropdownStyle.value = {
      bottom: `${window.innerHeight - rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      top: 'auto',
    }
    dropdownClasses.value = {
      'autocomplete-dropdown__top': true,
      'autocomplete-dropdown__bottom': false,
    }
  } else {
    dropdownStyle.value = {
      top: `${rect.bottom}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      bottom: 'auto',
    }
    dropdownClasses.value = {
      'autocomplete-dropdown__top': false,
      'autocomplete-dropdown__bottom': true,
    }
  }
}

watch(() => props.modelValue, value => {
  model.value = value
})

watch(() => props.modelValue, value => {
  model.value = value
})

const change = value => {
  model.value = value
  emit('update:modelValue', value)
  schedule()
}

onMounted(() => {
  document.addEventListener('mousedown', clickOutside)
  window.addEventListener('resize', updateDropdownPosition)
  window.addEventListener('scroll', updateDropdownPosition, true)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
  document.removeEventListener('mousedown', clickOutside)
  window.removeEventListener('resize', updateDropdownPosition)
  window.removeEventListener('scroll', updateDropdownPosition, true)
})

defineExpose({
  focus: () => input.value?.focus(),
  blur: () => input.value?.blur(),
})
</script>

<template>
  <div ref="autocomplete" class="autocomplete" :class="{'show-dropdown': show && (items.length || empty)}">
    <Input
        ref="input"
        :model-value="model"
        :label="label"
        :error="error"
        :required="required"
        autocompleteOff
        @update:model-value="change"
        @focus="focus"
        @blur="blur"
        @keydown="keydown">
      <template #before>
        <slot name="before"/>
      </template>
      <template #after>
        <Progress :show="progress"/>
        <Teleport to="body">
          <div ref="dropdown" v-if="show && (items.length || empty)" class="autocomplete-dropdown" :class="dropdownClasses" :style="dropdownStyle">
            <div v-for="(item, index) in items" :key="item.id" :class="{ active: index === activeIndex }" @mousedown.prevent="select(item)">
              <slot :item="item" :index="index"/>
            </div>
            <div v-if="empty" class="autocomplete-empty">
              <slot name="empty">
                Ничего не найдено
              </slot>
            </div>
          </div>
        </Teleport>
      </template>
    </Input>
  </div>
</template>

<style scoped lang="scss">
.autocomplete {
  position: relative;
  width: 100%;
  z-index: 4;
  &.show-dropdown {
    z-index: 51;
  }
  :deep(.input) {
    input {
      padding-right: 30px;
    }
  }
  :deep(.progress) {
    position: absolute;
    top: 13px;
    right: 10px;
    z-index: 3;
  }
}
.autocomplete-dropdown {
  --autocomplete-color: var(--color-black, #000000);
  --autocomplete-bg: var(--color-white-blue-light, #f6f8ff);
  --autocomplete-shadow: var(--color-slate-alpha-30, rgba(34, 60, 80, 0.3));
  --autocomplete-hover-color: var(--color-white, #ffffff);
  --autocomplete-hover-bg: var(--color-primary-hover, #276fcf);
  position: fixed;
  z-index: 50;
  text-align: left;
  border-radius: 8px;
  background: var(--autocomplete-bg);
  font-size: 0.9231rem;
  box-shadow: 0 0 10px 0 var(--autocomplete-shadow);
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  & > div {
    padding: 3px 5px;
    display: flex;
    flex-direction: column;
    line-height: 1.1538rem;
    font-weight: 600;
    color: var(--autocomplete-color);
    :deep(small) {
      font-size: 0.8461rem;
      font-weight: normal;
      color: var(--autocomplete-small-color);
    }
    &.active,
    &:hover {
      background: var(--autocomplete-hover-bg);
      color: var(--autocomplete-hover-color);
      border-radius: 5px;
      cursor: pointer;
      :deep(small) {
        color: var(--autocomplete-small-hover-color);
      }
    }
    &.autocomplete-empty {
      font-weight: normal;
      &.active,
      &:hover {
        background: none;
        border-radius: 0;
        cursor: default;
        color: var(--autocomplete-color);
      }
    }
  }
  &.autocomplete-dropdown__bottom {
    padding: 20px 2px 7px 2px;
    margin-top: -14px;
  }
  &.autocomplete-dropdown__top {
    padding: 7px 2px 30px 2px;
    margin-bottom: -14px;
  }
}
</style>