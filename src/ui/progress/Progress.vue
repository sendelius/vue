<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  show: { type: Boolean, default: false }
})
</script>

<template>
  <div v-if="show" class="progress">
    <template v-if="label">{{ label }} ...</template>
    <span class="progress__spinner"/>
  </div>
</template>

<style scoped lang="scss">
.progress {
  --snd-progress: var(--snd-accent-primary);
  display: flex;
  align-items: center;
  gap: 6px;
  &__spinner {
    min-width: 15px;
    width: 15px;
    height: 15px;
    border: 3px solid transparent;
    border-top-color: var(--snd-progress);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: progress-spin .7s linear infinite;
  }
}
@keyframes progress-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .progress__spinner {
    animation-duration: 2s;
  }
}
</style>