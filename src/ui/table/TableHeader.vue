<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue'

import Checkbox from "../form/Checkbox.vue"

const props = defineProps({
  columns: { type: Array, required: true },
  items: { type: Array, required: true },
  bulk: { type: Boolean, default: false },
  actions: { type: Boolean, default: false },
  selected: { type: Array, required: true },
  tableWrap: { type: Object, required: true },
  table: { type: Object, required: true },
  sort: { type: Object, default: {} },
})

const emit = defineEmits(['update:selected', 'update:sort'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const header = ref(null)

const isFixed = ref(false)
const style = ref({})
const placeholderStyle = ref({})
const innerStyle = ref({})
const actionsStyle = ref({})
const bulkStyle = ref({})

const SORT_STORAGE_KEY = 'table-sort'

const bulkCheckAll = (event) => {
  if (!event.target) return
  emit('update:selected', event.target.checked ? props.items.map(item => item.id) : [])
}


const getSortableColumn = (key) => {
  return props.columns.find(
      col => col.key === key && col.sortable
  )
}

const loadSort = () => {
  try {
    const saved = localStorage.getItem(SORT_STORAGE_KEY)
    if (!saved) return

    const sort = JSON.parse(saved)
    if (!sort?.key || !['asc', 'desc'].includes(sort.type)) {
      return
    }

    if (!getSortableColumn(sort.key)) {
      return
    }

    emit('update:sort', sort)
  } catch {
    // битое значение в localStorage просто игнорируем
  }
}

const sort = (columnKey) => {
  if (!getSortableColumn(columnKey)) return

  const sort = {
    key: columnKey,
    type: props.sort?.key === columnKey && props.sort?.type === 'asc' ? 'desc' : 'asc',
  }

  localStorage.setItem(SORT_STORAGE_KEY, JSON.stringify(sort))
  emit('update:sort', sort)
}

const fixed = () => {
  if (!header.value || !props.tableWrap) return

  const rect = props.tableWrap.getBoundingClientRect()
  const headerHeight = header.value.offsetHeight

  if (rect.top <= 0) {
    if (!isFixed.value) {
      isFixed.value = true
      placeholderStyle.value = {
        height: `${headerHeight}px`,
        display: 'block',
      }
    }
  } else {
    isFixed.value = false
    style.value = {}
    placeholderStyle.value = {
      display: 'none',
    }
    innerStyle.value = {
      transform: 'none',
    }
    actionsStyle.value = {}
    bulkStyle.value = {}
  }
}

const position = () => {
  if (!props.tableWrap || !props.table || !isFixed.value) return

  const wrap = props.tableWrap
  const table = props.table
  const rect = wrap.getBoundingClientRect()

  style.value = {
    width: `${wrap.clientWidth}px`,
    left: `${rect.left}px`,
    overflow: 'hidden',
  }

  const bulkWidth = table.querySelector('.table-bulk')?.offsetWidth || 0

  innerStyle.value = {
    width: `${table.offsetWidth}px`,
    transform: `translate3d(${bulkWidth - wrap.scrollLeft}px, 0, 0)`,
  }

  const firstBulk = table.querySelector('.table-item .table-bulk')
  const firstActions = table.querySelector('.table-item .table-actions')

  if (firstBulk) {
    const bulkRect = firstBulk.getBoundingClientRect()
    bulkStyle.value = {
      position: 'fixed',
      left: `${bulkRect.left - rect.left + wrap.scrollLeft - bulkWidth}px`,
    }
  }

  if (firstActions) {
    const actionsRect = firstActions.getBoundingClientRect()
    actionsStyle.value = {
      position: 'fixed',
      right: 'auto',
      left: `${actionsRect.left - rect.left + wrap.scrollLeft - bulkWidth}px`,
    }
  }
}

const sync = () => {
  fixed()
  position()
}

const syncScroll = (scrollLeft) => {
  position()
}

defineExpose({
  syncScroll,
})

let resizeObserver = null

onMounted(async () => {
  loadSort()
  window.addEventListener('scroll', sync)
  window.addEventListener('resize', sync)
  await nextTick()
  sync()

  requestAnimationFrame(() => {
    sync()
  })

  // синхронизации при ресайзе таблицы
  resizeObserver = new ResizeObserver(() => {
    sync()
  })
  if (props.tableWrap) {
    resizeObserver.observe(props.tableWrap)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', sync)
  window.removeEventListener('resize', sync)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="header" class="table-header" :class="{ fixed: isFixed }" :style="style">
    <div class="table-header-inner" :style="innerStyle">
      <div v-if="bulk" class="table-bulk" :style="bulkStyle">
        <Checkbox :model-value="selected.length === items.length && items.length > 0" @change="bulkCheckAll"/>
      </div>
      <div v-for="col in columns" :key="col.key" :class="{'table-row__grow': col.grow}" :style="{ width: col.width + 'px', minWidth: col.width + 'px', maxWidth: col.width + 'px', sortable: col.sortable }" v-bind="col.label ? { title: col.label } : {}">
        <div class="table-row__sortable" v-if="col.sortable" @click="sort(col.key)">
          <div class="table-row__sortable-title">{{ col.title }}</div>
          <template v-if="props.sort?.key === col.key && props.sort?.type === 'desc'">
            <slot name="iconHeaderSortDesc">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="table-header-icon">
                <path d="M4 6l9 0"/>
                <path d="M4 12l7 0"/>
                <path d="M4 18l7 0"/>
                <path d="M15 15l3 3l3 -3"/>
                <path d="M18 6l0 12"/>
              </svg>
            </slot>
          </template>
          <template v-if="props.sort?.key === col.key && props.sort?.type === 'asc'">
            <slot name="iconHeaderSortAsc">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="table-header-icon">
                <path d="M4 6l7 0"/>
                <path d="M4 12l7 0"/>
                <path d="M4 18l9 0"/>
                <path d="M15 9l3 -3l3 3"/>
                <path d="M18 6l0 12"/>
              </svg>
            </slot>
          </template>
        </div>
        <template>{{ col.title }}</template>
      </div>
      <div v-if="actions" class="table-actions" :style="actionsStyle">Действия</div>
    </div>
  </div>
  <div class="table-header-placeholder" :style="placeholderStyle"/>
</template>

<style scoped lang="scss">
.table-header {
  --table-header-border: var(--color-gray-blue-medium, #b1b4c7);
  --table-header-fixed-bg: var(--color-white-blue, #edf1ff);
  --table-header-fixed-shadow: var(--color-primary-alpha-15, rgba(29, 79, 145, 0.15));
  --table-header-icon: var(--color-black, #000000);
  --table-header-sortable-hover: var(--color-primary, #2f80ed);
  height: 35px;
  min-height: 35px;
  display: flex;
  border-bottom: 1px solid var(--table-header-border);
  .table-header-icon {
    display: block;
    stroke: var(--table-header-icon);
  }
  &.fixed {
    position: fixed;
    top: 0;
    z-index: 3;
    background: var(--table-header-fixed-bg);
    box-shadow: 0 5px 5px 0 var(--table-header-fixed-shadow);
  }
  .table-header-inner {
    height: 35px;
    min-height: 35px;
    display: flex;
    flex: 1 0 auto;
    will-change: transform;
    & > div {
      width: 200px;
      min-width: 200px;
      max-width: 200px;
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 4px 10px;
      border-bottom: 1px solid var(--table-header-border);
      &.table-row__grow {
        flex-grow: 1;
      }
      .table-row__sortable {
        display: flex;
        align-items: center;
        width: 100%;
        .table-row__sortable-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: calc(100% - 21px);
        }
        .table-header-icon {
          margin-left: 5px;
        }
        &:hover {
          cursor: pointer;
          color: var(--table-header-sortable-hover);
          .table-header-icon {
            display: block;
            stroke: var(--table-header-sortable-hover);
          }
        }
      }
    }
  }
}
.table-header-placeholder {
  height: 35px;
  min-height: 35px;
  display: none;
}
</style>