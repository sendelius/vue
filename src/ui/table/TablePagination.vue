<script setup>
import Input from "../form/Input.vue"
import Btn from "../btn/Btn.vue"

const props = defineProps({
  pagination: { type: Object, default: {} },
  navigate: { type: Function, default: null },
})

const getPageUrl = (page) => {
  const path = window.location.pathname.replace(/\/page\/\d+\/?$/, '').replace(/\/+$/, '')

  return `${path}/page/${page}`
}

const goToPage = () => {
  let page = Number(props.pagination.page)
  if (!page || page < 1) page = 1
  if (page > props.pagination.last) page = props.pagination.last
  if (props.pagination.page !== page) props.pagination.page = page
  props.navigate?.(getPageUrl(page))
}

const focusInput = (event) => {
  event.target.select()
}
</script>

<template>
  <div class="table-pagination" v-if="pagination && pagination.last>1">
    <Btn size="small" variant="gray" v-if="pagination.prev" :to="getPageUrl(pagination.prev)">
      <slot name="iconPaginationPrev">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="18"
             height="18"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="table-pagination-icon">
          <path d="M5 12l14 0"/>
          <path d="M5 12l4 4"/>
          <path d="M5 12l4 -4"/>
        </svg>
      </slot>
    </Btn>

    Страница
    <Input type="number" v-model="pagination.page" min="1" :max="pagination.last" @focus="focusInput" @keydown.enter="goToPage"/>
    из <strong>{{ pagination.last }}</strong>

    <Btn size="small" variant="gray" v-if="pagination.next" :to="getPageUrl(pagination.next)">
      <slot name="iconPaginationNext">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="18"
             height="18"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="table-pagination-icon">
          <path d="M5 12l14 0"/>
          <path d="M15 16l4 -4"/>
          <path d="M15 8l4 4"/>
        </svg>
      </slot>
    </Btn>
  </div>
</template>

<style scoped lang="scss">
.table-pagination {
  --table-pagination-icon: var(--color-black, #000000);
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  .table-pagination-icon {
    display: block;
    stroke: var(--table-pagination-icon);
  }
  :deep(input) {
    text-align: center;
    width: 50px;
    font-weight: bold;
  }
}
</style>