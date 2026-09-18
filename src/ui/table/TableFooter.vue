<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, computed, watch} from 'vue'

import Select from "../form/Select.vue"
import TablePagination from "./TablePagination.vue"

const props = defineProps({
  columns: { type: Array, required: true },
  items: { type: Array, required: true },
  pagination: { type: Object, default: {} },
  bulk: { type: Boolean, default: false },
  actions: { type: Boolean, default: false },
  selected: { type: Array, required: true },
  tableWrap: { type: Object, required: true },
  table: { type: Object, required: true },
  navigate: { type: Function, default: null },
  bulkActions: { type: Array, default: [] },
})

const emit = defineEmits(['update:scroll-left'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const footer = ref(null)
/** @type {import('vue').Ref<HTMLElement|null>} */
const footerScroll = ref(null)

const isFixed = ref(false)
const style = ref({})
const placeholderStyle = ref({})
const scrollContentStyle = ref({})
const selectedBulkOption = ref(null)

const bulkOptions = computed(() => [
  { title: 'Действие с выбранными', value: null },
  ...props.bulkActions,
])

const fixed = () => {
  if (!footer.value || !props.tableWrap) return

  const rect = props.tableWrap.getBoundingClientRect()
  const footerHeight = footer.value.offsetHeight
  const viewportHeight = window.innerHeight
  const tableBottom = rect.bottom
  const tableTop = rect.top

  if (tableBottom > viewportHeight && tableTop < viewportHeight - footerHeight) {
    if (!isFixed.value) {
      isFixed.value = true
      placeholderStyle.value = {
        height: `${footerHeight}px`,
        display: 'block',
      }
    }
  } else {
    isFixed.value = false
    style.value = {}
    placeholderStyle.value = {
      display: 'none',
    }
  }
}

const position = () => {
  if (!isFixed.value || !props.tableWrap || !props.table) return
  const rect = props.tableWrap.getBoundingClientRect()
  style.value = {
    width: `${props.tableWrap.clientWidth}px`,
    left: `${rect.left}px`,
    overflow: 'hidden',
  }
  scrollContentStyle.value = {
    width: `${props.table.offsetWidth}px`,
  }
}

const sync = () => {
  fixed()
  position()
}

const syncComponentScroll = () => {
  if (!footerScroll.value) return

  emit('update:scroll-left', footerScroll.value.scrollLeft)
}

const syncScroll = (scrollLeft) => {
  if (!footerScroll.value) return

  if (footerScroll.value.scrollLeft !== scrollLeft) {
    footerScroll.value.scrollLeft = scrollLeft
  }
}

defineExpose({
  syncScroll,
})

watch(selectedBulkOption, async (value) => {
  if (!value) return

  const option = props.bulkActions.find(item => item.value === value)

  try {
    if (typeof option?.action === 'function') {
      await option.action([...props.selected])
    }
  } finally {
    selectedBulkOption.value = null
  }
})

let resizeObserver = null

onMounted(async () => {
  window.addEventListener('scroll', sync)
  window.addEventListener('resize', sync)
  footerScroll.value?.addEventListener('scroll', syncComponentScroll)

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
  footerScroll.value?.removeEventListener('scroll', syncComponentScroll)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="footer" class="table-footer" :class="{ fixed: isFixed }" :style="style">
    <div v-if="bulk && selected.length" class="table-footer-actions__left">
      <slot name="iconFooterActions">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="table-footer-icon">
          <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4"/>
        </svg>
      </slot>
      <Select v-model="selectedBulkOption" :options="bulkOptions"/>
    </div>
    <div class="table-footer-actions__right">
      <TablePagination :pagination="pagination" :navigate="navigate">
        <template #iconPaginationPrev>
          <slot name="iconPaginationPrev"/>
        </template>
        <template #iconPaginationNext>
          <slot name="iconPaginationNext"/>
        </template>
      </TablePagination>
    </div>
    <div ref="footerScroll" class="table-footer-scroll">
      <div class="table-footer-scroll-content" :style="scrollContentStyle"/>
    </div>
  </div>
  <div class="table-footer-placeholder" :style="placeholderStyle"/>
</template>

<style scoped lang="scss">
.table-footer {
  --table-footer-bg: var(--color-white-blue, #edf1ff);
  --table-footer-fixed-shadow: var(--color-primary-alpha-15, rgba(29, 79, 145, 0.15));
  --table-footer-icon: var(--color-black, #000000);
  background: var(--table-footer-bg);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  :deep(.input) {
    --input-height: 30px;
  }
  :deep(.select) {
    --select-height: 30px;
  }
  .table-footer-icon {
    display: block;
    stroke: var(--table-footer-icon);
  }
  .table-footer-actions__left,
  .table-footer-actions__right {
    height: 35px;
    position: sticky;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .table-footer-actions__left {
    left: 0;
    .table-footer-icon {
      margin-left: 9px;
    }
  }
  .table-footer-actions__right {
    right: 0;
    margin-left: auto;
    justify-content: flex-end;
  }
  .table-footer-scroll {
    width: 100%;
    height: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    display: block;
    visibility: hidden;
    .table-footer-scroll-content {
      height: 1px;
    }
  }
  &.fixed {
    z-index: 3;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -2px 2px 0 var(--table-footer-fixed-shadow);
    .table-footer-scroll {
      visibility: visible;
    }
  }
}
.table-footer-placeholder {
  height: 35px;
  min-height: 35px;
  display: none;
}
</style>