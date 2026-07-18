<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { Icon } from '@iconify/vue';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'"
    :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
    class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200
      text-gray-300 hover:text-white hover:bg-white/10
      light:text-gray-600 light:hover:text-gray-900 light:hover:bg-black/5"
  >
    <Icon :icon="theme === 'dark' ? 'tabler:sun' : 'tabler:moon'" class="w-5 h-5" />
  </button>
</template>
