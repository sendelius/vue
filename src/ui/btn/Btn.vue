<script setup>
import {computed} from "vue"
import Progress from "../progress/Progress.vue"

const props = defineProps({
  href: { type: String, default: '' },
  to: { type: String, default: '' },
  size: { type: String, default: '', validator: value => ['', 'small', 'big'].includes(value) },
  variant: { type: String, default: '', validator: value => ['', 'outline', 'gray', 'red', 'green'].includes(value) },
  hover: { type: String, default: '', validator: value => ['', 'blue', 'red', 'green'].includes(value) },
  progressLabel: { type: String, default: '' },
  progressShow: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
})

const classes = computed(() => [{
  'btn-big': props.size === 'big',
  'btn-small': props.size === 'small',
  'btn-outline': props.variant === 'outline',
  'btn-gray': props.variant === 'gray',
  'btn-red': props.variant === 'red',
  'btn-green': props.variant === 'green',
  'btn-hover-blue': props.hover === 'blue',
  'btn-hover-red': props.hover === 'red',
  'btn-hover-green': props.hover === 'green',
  'btn-progress': props.progressLabel,
  'btn-with-icon': props.withIcon,
}])
</script>

<template>
  <RouterLink v-if="to" :to="to" class="btn" :class="classes">
    <Progress :show="progressShow" :label="progressLabel"/>
    <slot v-if="!progressShow"></slot>
  </RouterLink>
  <a v-else-if="href" :href="href" class="btn" :class="classes">
    <Progress :show="progressShow" :label="progressLabel"/>
    <slot v-if="!progressShow"></slot>
  </a>
  <button v-else class="btn" :class="classes">
    <Progress :show="progressShow" :label="progressLabel"/>
    <slot v-if="!progressShow"></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  color: var(--snd-btn-color);
  background: var(--snd-accent-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 3px 10px;
  font-weight: 600;
  border: 2px solid var(--snd-accent-primary);
  cursor: pointer;
  height: 30px;
  min-width: 30px;
  :deep(.progress) {
    --snd-progress: var(--snd-btn-color);
  }
  &:hover {
    background: var(--snd-accent-primary-hover);
    border-color: var(--snd-accent-primary-hover);
  }
  &.btn-big {
    height: 40px;
    min-width: 40px;
  }
  &.btn-small {
    padding: 1px 2px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
  }
  &.btn-with-icon {
    padding: 3px 5px;
    :deep(.icon) {
      margin-right: 8px;
    }
  }
  &.btn-outline {
    color: var(--snd-text-primary);
    border-color: var(--snd-accent-primary);
    background: none;
    :deep(.progress) {
      --snd-progress: var(--snd-accent-primary);
    }
    &:hover {
      background: none;
      border-color: var(--snd-accent-primary-hover);
      color: var(--snd-accent-primary-hover);
    }
  }
  &.btn-gray {
    color: var(--snd-text-primary);
    border-color: var(--snd-btn-gray);
    background: var(--snd-btn-gray);
    :deep(.progress) {
      --snd-progress: var(--snd-accent-primary);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  &.btn-red {
    color: var(--snd-text-white);
    border-color: var(--snd-btn-red);
    background: var(--snd-btn-red);
    &:hover {
      opacity: 0.8;
    }
  }
  &.btn-green {
    color: var(--snd-text-white);
    border-color: var(--snd-btn-green);
    background: var(--snd-btn-green);
    &:hover {
      opacity: 0.8;
    }
  }
  &.btn-outline.btn-hover-blue,
  &.btn-gray.btn-hover-blue,
  &.btn-hover-blue {
    &:hover {
      color: var(--snd-text-white);
      background: var(--snd-accent-primary);
      border-color: var(--snd-accent-primary);
    }
  }
  &.btn-outline.btn-hover-red,
  &.btn-gray.btn-hover-red,
  &.btn-hover-red {
    &:hover {
      color: var(--snd-text-white);
      background: var(--snd-btn-red);
      border-color: var(--snd-btn-red);
    }
  }
  &.btn-outline.btn-hover-green,
  &.btn-gray.btn-hover-green,
  &.btn-hover-green {
    &:hover {
      color: var(--snd-text-white);
      background: var(--snd-btn-green);
      border-color: var(--snd-btn-green);
    }
  }
}
</style>