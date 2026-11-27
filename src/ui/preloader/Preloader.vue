<script setup>
import {onMounted} from 'vue'
import {preloaderState} from './index.js'

onMounted(() => {
  document.getElementById('preloader')?.remove()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="preloader">
      <div v-if="preloaderState.show" class="preloader" role="status" aria-live="polite">
        <div class="preloader__spinner"></div>
        <Transition name="preloader-label" mode="out-in">
          <span :key="preloaderState.label" class="preloader__label">{{ preloaderState.label }}</span>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: var(--snd-background);
  color: var(--snd-text-primary);
  &__spinner {
    width: 42px;
    height: 42px;
    border: 3px solid var(--snd-background);
    border-top-color: #2f80ed;
    border-radius: 50%;
    animation: preloader-spin .7s linear infinite;
  }
  &__label {
    font-size: 1rem;
    font-weight: 500;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity .3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  &-label-enter-active,
  &-label-leave-active {
    transition: opacity .15s ease;
  }
  &-label-enter-from,
  &-label-leave-to {
    opacity: 0;
  }
}
@keyframes preloader-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .preloader__spinner {
    animation-duration: 2s;
  }
  .preloader-enter-active,
  .preloader-leave-active,
  .preloader-label-enter-active,
  .preloader-label-leave-active {
    transition-duration: .01ms;
  }
}
</style>
