<script setup>
import {onMounted, ref} from "vue"

defineProps({
  iconSize: {
    type: [String, Number],
    default: 20
  }
})

const theme = ref('light')

const setTheme = (value) => {
  theme.value = value
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem('theme', value)
}

onMounted(() => {
  const documentTheme = document.documentElement.getAttribute('data-theme')
  if (documentTheme === 'light' || documentTheme === 'dark') {
    theme.value = document.documentElement.getAttribute('data-theme') || 'light'
  }
})
</script>

<template>
  <div class="theme-switcher">
    <button class="theme-switcher__dark" type="button" aria-label="Тёмная тема" :aria-pressed="theme === 'dark'" @click="setTheme('dark')">
      <svg xmlns="http://www.w3.org/2000/svg"
           :width="iconSize"
           :height="iconSize"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="icon icon-moon">
        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"/>
      </svg>
    </button>
    <button class="theme-switcher__light" type="button" aria-label="Светлая тема" :aria-pressed="theme === 'light'" @click="setTheme('light')">
      <svg xmlns="http://www.w3.org/2000/svg"
           :width="iconSize"
           :height="iconSize"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="icon icon-sun">
        <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
        <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"/>
        <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
        <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"/>
        <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    transition: color .2s, color .2s;
    .icon {
      color: var(--snd-icons);
    }
    &:hover .icon {
      color: var(--snd-accent-primary);
    }
  }
}
:root[data-theme="light"] .theme-switcher__light .icon {
  color: var(--snd-icons-active);
}
:root[data-theme="dark"] .theme-switcher__dark .icon {
  color: var(--snd-icons-active);
}
</style>