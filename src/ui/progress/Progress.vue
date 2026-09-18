<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  show: { type: Boolean, default: false }
})
</script>

<template>
  <div v-if="show" class="progress">
    <template v-if="label">{{ label }} ...</template>
    <span class="progress-loader"/>
  </div>
</template>

<style scoped lang="scss">
.progress {
  --progress-border: var(--color-primary, #2f80ed);
  display: flex;
  align-items: center;
  gap: 6px;
  .progress-loader {
    min-width: 15px;
    width: 15px;
    height: 15px;
    border: 2px solid var(--progress-border);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: sndProgressRotate 1s linear infinite;
  }
}
@keyframes sndProgressRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>