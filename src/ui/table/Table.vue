<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'

import TableFooter from "./TableFooter.vue"
import TableHeader from "./TableHeader.vue"
import TableItems from "./TableItems.vue"

const props = defineProps({
  columns: { type: Array, required: true },
  items: { type: Array, required: true },
  pagination: { type: Object, default: {} },
  bulk: { type: Boolean, default: false },
  actions: { type: Boolean, default: false },
  bulkActions: { type: Array, default: () => [] },
  sort: { type: Object, default: {} },
  textEmpty: { type: String, default: 'нет записей' },
  navigate: { type: Function, default: null },
  bulkWidth: { type: [Number, String], default: 30 },
  actionsWidth: { type: [Number, String], default: 100 },
})

const emit = defineEmits(['update:sort'])

/** @type {import('vue').Ref<HTMLElement|null>} */
const tableWrap = ref(null)
/** @type {import('vue').Ref<HTMLElement|null>} */
const table = ref(null)
/** @type {import('vue').Ref<HTMLElement|null>} */
const header = ref(null)
/** @type {import('vue').Ref<HTMLElement|null>} */
const footer = ref(null)

const selected = ref([])

const syncScroll = () => {
  if (!tableWrap.value) return
  const scrollLeft = tableWrap.value.scrollLeft
  header.value?.syncScroll(scrollLeft)
  footer.value?.syncScroll(scrollLeft)
}

const syncComponentScroll = (value) => {
  if (!tableWrap.value) return
  tableWrap.value.scrollLeft = value
}

const updateSort = (value) => {
  emit('update:sort', value)
}

const initTable = async () => {
  await nextTick()
  if (!tableWrap.value) return
  tableWrap.value.removeEventListener('scroll', syncScroll)
  tableWrap.value.addEventListener('scroll', syncScroll)
}

watch(() => props.items.length, async () => {
  if (!props.items.length) {
    selected.value = []
    return
  }
  await initTable()
})

watch(() => [props.sort?.key, props.sort?.type, props.pagination?.page,], () => {
  selected.value = []
})

onMounted(async () => {
  await initTable()
})

onBeforeUnmount(() => {
  tableWrap.value?.removeEventListener('scroll', syncScroll)
})
</script>

<template>
  <div v-if="items.length" ref="tableWrap" class="table-wrap" :style="{ '--table-bulk-width': `${bulkWidth}px`, '--table-actions-width': `${actionsWidth}px` }">
    <div ref="table" class="table">
      <TableHeader
          ref="header"
          :columns="columns"
          :items="items"
          :bulk="bulk"
          :actions="actions"
          :table-wrap="tableWrap"
          :table="table"
          :sort="sort"
          @update:sort="updateSort"
          v-model:selected="selected">
        <template #iconHeaderSortDesc>
          <slot name="iconHeaderSortDesc"/>
        </template>
        <template #iconHeaderSortAsc>
          <slot name="iconHeaderSortAsc"/>
        </template>
      </TableHeader>
      <TableItems
          :columns="columns"
          :items="items"
          :bulk="bulk"
          :actions="actions"
          :selected="selected"
          @update:selected="selected = $event">
        <template v-for="col in columns" :key="col.key" #[`cell-${col.key}`]="slotProps">
          <slot :name="`cell-${col.key}`" v-bind="slotProps"/>
        </template>
        <template #actions="slotProps">
          <slot name="actions" v-bind="slotProps"/>
        </template>
      </TableItems>
      <TableFooter
          ref="footer"
          :columns="columns"
          :items="items"
          :pagination="pagination"
          :bulk="bulk"
          :actions="actions"
          :bulk-actions="bulkActions"
          :selected="selected"
          :table-wrap="tableWrap"
          :table="table"
          :navigate="navigate"
          @update:scroll-left="syncComponentScroll">
        <template #iconPaginationPrev>
          <slot name="iconPaginationPrev"/>
        </template>
        <template #iconPaginationNext>
          <slot name="iconPaginationNext"/>
        </template>
        <template #iconFooterActions>
          <slot name="iconFooterActions"/>
        </template>
      </TableFooter>
    </div>
  </div>
  <div v-else class="table-empty">{{ textEmpty }}</div>
</template>

<style scoped lang="scss">
.table-wrap {
  --table-border: var(--color-gray-blue-medium, #b1b4c7);
  --table-actions-bg: var(--color-white-blue, #edf1ff);
  --table-actions-shadow: var(--color-primary-alpha-15, rgba(29, 79, 145, 0.15));
  --table-bulk-bg: var(--color-white-blue, #edf1ff);
  --table-bulk-shadow: var(--color-primary-alpha-15, rgba(29, 79, 145, 0.15));
  overflow-x: auto;
  margin: 0 -10px;
  width: calc(100% + 20px);
  .table {
    width: fit-content;
    min-width: 100%;
    border-top: 1px solid var(--table-border);
  }
}
:deep(.table-header),
:deep(.table-item) {
  .table-header-inner > div.table-actions,
  .table-actions {
    height: 35px;
    min-height: 35px;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 2;
    background: var(--table-actions-bg);
    box-shadow: -4px 0 4px 0 var(--table-actions-shadow);
    width: var(--table-actions-width);
    min-width: var(--table-actions-width);
    max-width: var(--table-actions-width);
    flex-shrink: 0;
    gap: 6px;
  }
  .table-header-inner > div.table-bulk,
  .table-bulk {
    height: 35px;
    min-height: 35px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    background: var(--table-bulk-bg);
    box-shadow: 4px 0 4px 0 var(--table-bulk-shadow);
    width: var(--table-bulk-width);
    min-width: var(--table-bulk-width);
    max-width: var(--table-bulk-width);
    flex-shrink: 0;
    padding: 0;
    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>