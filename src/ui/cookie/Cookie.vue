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
  position: fixed;
  transform: translate(-50%);
  left: 50%;
  bottom: 20px;
  background: var(--snd-block);
  color: var(--snd-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.867rem;
  box-shadow: var(--snd-shadow-primary);
  z-index: 100100;
  :deep(.btn) {
    font-size: 0.867rem;
  }
  :deep(a) {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  button {
    margin-left: 8px;
  }
}
</style>