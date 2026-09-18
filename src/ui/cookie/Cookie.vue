<script setup>
import {ref, onMounted} from 'vue'

import Btn from "../btn/Btn.vue"

const visible = ref(false)

const accept = () => {
  localStorage.setItem('cookieAccepted', '1')
  visible.value = false
}

onMounted(() => {
  visible.value = localStorage.getItem('cookieAccepted') !== '1'
})
</script>

<template>
  <div v-if="visible" class="cookie">
    <div>
      <slot/>
    </div>
    <Btn @click="accept">Согласен</Btn>
  </div>
</template>

<style scoped lang="scss">
.cookie {
  --cookie-color: var(--color-black, #000000);
  --cookie-bg: var(--color-white-blue, #edf1ff);
  --cookie-shadow: var(--color-black-alpha-25, rgba(0, 0, 0, 0.25));
  --cookie-link: var(--color-primary, #2f80ed);
  --cookie-link-hover: var(--color-primary-dark, #1d4f91);
  position: fixed;
  transform: translate(-50%);
  left: 50%;
  bottom: 20px;
  background: var(--cookie-bg);
  color: var(--cookie-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.0769rem;
  box-shadow: 0 0 6px var(--cookie-shadow);
  z-index: 100100;
  :deep(a) {
    text-decoration: none;
    color: var(--cookie-link);
    &:hover {
      color: var(--cookie-link-hover);
    }
  }
  button {
    margin-left: 8px;
  }
}
</style>