<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue"
import Checkbox from "../form/Checkbox.vue"

const props = defineProps({
  columns: { type: Array, required: true },
  items: { type: Array, required: true },
  bulk: { type: Boolean, default: false },
  actions: { type: Boolean, default: false },
  selected: { type: Array, required: true },
})

const emit = defineEmits(['update:selected'])

const selecting = ref(false)
const selectValue = ref(false)
const dragged = ref(false)
const startItem = ref(null)

const cellValue = (col, item) => {
  if (typeof col.format === 'function') return col.format(item[col.key], item)
  return item[col.key]
}

const startSelection = (item) => {
  selecting.value = true
  dragged.value = false
  startItem.value = item
  selectValue.value = !props.selected.includes(item.id)
}

const updateSelection = (item) => {
  if (!selecting.value) return
  dragged.value = true
  const selected = new Set(props.selected)
  if (startItem.value) {
    if (selectValue.value) {
      selected.add(startItem.value.id)
    } else {
      selected.delete(startItem.value.id)
    }
  }
  if (selectValue.value) {
    selected.add(item.id)
  } else {
    selected.delete(item.id)
  }
  emit('update:selected', [...selected])
  startItem.value = null
}

const stopSelection = () => {
  selecting.value = false
  startItem.value = null
}

const handleMouseEnter = (item) => {
  if (!selecting.value) return
  updateSelection(item)
}

const handleClick = (event) => {
  if (dragged.value) {
    event.preventDefault()
    event.stopPropagation()
  }
}

onMounted(() => {
  window.addEventListener('mouseup', stopSelection)
})

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', stopSelection)
})
</script>

<template>
  <div v-for="(item, index) in items" :key="index" class="table-item" :class="{'table-item__selected': selected.includes(item.id)}">
    <div v-if="bulk" class="table-bulk" @mousedown="startSelection(item)" @mouseenter="handleMouseEnter(item)" @click="handleClick">
      <Checkbox :model-value="selected" :value="item.id" @update:model-value="emit('update:selected', $event)"/>
    </div>
    <div v-for="col in columns" :key="col.key" :class="{'table-row__grow': col.grow}" :style="{ width: col.width + 'px', minWidth: col.width + 'px', maxWidth: col.width + 'px' }">
      <slot :name="`cell-${col.key}`" :item="item" :value="item[col.key]">
        {{ cellValue(col, item) }}
      </slot>
    </div>
    <div v-if="actions" class="table-actions">
      <slot name="actions" :item="item"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-item {
  --table-item-border: var(--color-gray-blue-medium, #b1b4c7);
  --table-item-hover-bg: var(--color-gray-blue-lightest, #dee2fb);
  min-height: 35px;
  display: flex;
  border-bottom: 1px solid var(--table-item-border);
  align-items: stretch;
  & > div {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    line-height: 1.0769rem;
    word-break: break-word;
    height: auto;
    &.table-row__grow {
      flex-grow: 1;
    }
  }
  &.table-item__selected,
  &:hover {
    background: var(--table-item-hover-bg);
    .table-bulk,
    .table-actions {
      background: var(--table-item-hover-bg);
    }
  }
}
</style>