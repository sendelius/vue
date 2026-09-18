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
  --btn-color: var(--color-white, #ffffff);
  --btn-bg: var(--color-primary, #2f80ed);
  --btn-icon: var(--color-white, #ffffff);
  --btn-progress-white: var(--color-white, #ffffff);
  --btn-progress-primary: var(--color-primary, #2f80ed);
  --btn-hover-bg: var(--color-primary-hover, #276fcf);
  // outline
  --btn-outline-color: var(--color-black, #000000);
  --btn-outline-border: var(--color-primary, #2f80ed);
  --btn-outline-icon: var(--color-black, #000000);
  --btn-outline-hover-border: var(--color-primary-hover, #276fcf);
  --btn-outline-hover-color: var(--color-primary-hover, #276fcf);
  --btn-outline-hover-icon: var(--color-primary-hover, #276fcf);
  // gray
  --btn-gray-color: var(--color-black, #000000);
  --btn-gray-bg: var(--color-gray-blue-lighter, #9299c3);
  --btn-gray-icon: var(--color-black, #000000);
  --btn-gray-hover-bg: var(--color-gray-blue-medium, #b1b4c7);
  // red
  --btn-red-color: var(--color-white, #ffffff);
  --btn-red-bg: var(--color-red, #c10d18);
  --btn-red-icon: var(--color-white, #ffffff);
  --btn-red-hover-bg: var(--color-red-medium, #9c060f);
  // green
  --btn-green-color: var(--color-white, #ffffff);
  --btn-green-bg: var(--color-green, #06a76a);
  --btn-green-icon: var(--color-white, #ffffff);
  --btn-green-hover-bg: var(--color-green-dark, #05774c);
  // hover-blue
  --btn-hover-blue-color: var(--color-white, #ffffff);
  --btn-hover-blue-bg: var(--color-primary, #2f80ed);
  --btn-hover-blue-icon: var(--color-white, #ffffff);
  // hover-red
  --btn-hover-red-color: var(--color-white, #ffffff);
  --btn-hover-red-bg: var(--color-red, #c10d18);
  --btn-hover-red-icon: var(--color-white, #ffffff);
  // hover-green
  --btn-hover-green-color: var(--color-white, #ffffff);
  --btn-hover-green-bg: var(--color-green, #06a76a);
  --btn-hover-green-icon: var(--color-white, #ffffff);

  color: var(--btn-color);
  background: var(--btn-bg);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 3px 10px;
  font-weight: 600;
  border: 2px solid var(--btn-bg);
  cursor: pointer;
  height: 30px;
  min-width: 30px;
  :deep(.icon).icon-fill {
    fill: var(--btn-icon);
  }
  :deep(.icon).icon-stroke {
    stroke: var(--btn-icon);
  }
  :deep(.progress) {
    --progress-border: var(--btn-progress-white);
  }
  &:hover {
    background: var(--btn-hover-bg);
    border-color: var(--btn-hover-bg);
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
    color: var(--btn-outline-color);
    border-color: var(--btn-outline-border);
    background: none;
    :deep(.icon).icon-fill {
      fill: var(--btn-outline-icon);
    }
    :deep(.icon).icon-stroke {
      stroke: var(--btn-outline-icon);
    }
    :deep(.progress) {
      --progress-border: var(--btn-progress-primary);
    }
    &:hover {
      background: none;
      border-color: var(--btn-outline-hover-border);
      color: var(--btn-outline-hover-color);
      :deep(.icon).icon-fill {
        fill: var(--btn-outline-hover-icon);
      }
      :deep(.icon).icon-stroke {
        stroke: var(--btn-outline-hover-icon);
      }
    }
  }
  &.btn-gray {
    color: var(--btn-gray-color);
    border-color: var(--btn-gray-bg);
    background: var(--btn-gray-bg);
    :deep(.icon).icon-fill {
      fill: var(--btn-gray-icon);
    }
    :deep(.icon).icon-stroke {
      stroke: var(--btn-gray-icon);
    }
    :deep(.progress) {
      --progress-border: var(--btn-progress-primary);
    }
    &:hover {
      background: var(--btn-gray-hover-bg);
      border-color: var(--btn-gray-hover-bg);
    }
  }
  &.btn-red {
    color: var(--btn-red-color);
    border-color: var(--btn-red-bg);
    background: var(--btn-red-bg);
    :deep(.icon).icon-fill {
      fill: var(--btn-red-icon);
    }
    :deep(.icon).icon-stroke {
      stroke: var(--btn-red-icon);
    }
    &:hover {
      background: var(--btn-red-hover-bg);
      border-color: var(--btn-red-hover-bg);
    }
  }
  &.btn-green {
    color: var(--btn-green-color);
    border-color: var(--btn-green-bg);
    background: var(--btn-green-bg);
    :deep(.icon).icon-fill {
      fill: var(--btn-green-icon);
    }
    :deep(.icon).icon-stroke {
      stroke: var(--btn-green-icon);
    }
    &:hover {
      background: var(--btn-green-hover-bg);
      border-color: var(--btn-green-hover-bg);
    }
  }
  &.btn-outline.btn-hover-blue,
  &.btn-gray.btn-hover-blue,
  &.btn-hover-blue {
    &:hover {
      color: var(--btn-hover-blue-color);
      background: var(--btn-hover-blue-bg);
      border-color: var(--btn-hover-blue-bg);
      :deep(.icon).icon-fill {
        fill: var(--btn-hover-blue-icon);
      }
      :deep(.icon).icon-stroke {
        stroke: var(--btn-hover-blue-icon);
      }
    }
  }
  &.btn-outline.btn-hover-red,
  &.btn-gray.btn-hover-red,
  &.btn-hover-red {
    &:hover {
      color: var(--btn-hover-red-color);
      background: var(--btn-hover-red-bg);
      border-color: var(--btn-hover-red-bg);
      :deep(.icon).icon-fill {
        fill: var(--btn-hover-red-icon);
      }
      :deep(.icon).icon-stroke {
        stroke: var(--btn-hover-red-icon);
      }
    }
  }
  &.btn-outline.btn-hover-green,
  &.btn-gray.btn-hover-green,
  &.btn-hover-green {
    &:hover {
      color: var(--btn-hover-green-color);
      background: var(--btn-hover-green-bg);
      border-color: var(--btn-hover-green-bg);
      :deep(.icon).icon-fill {
        fill: var(--btn-hover-green-icon);
      }
      :deep(.icon).icon-stroke {
        stroke: var(--btn-hover-green-icon);
      }
    }
  }
}
</style>