<script setup lang="ts">
import { watch } from 'vue';
import type { INavBarProps } from '@/typings/props';
import LinkButton from '@/views/components/LinkButton.vue';
import { IconMenu3 } from '@tabler/icons-vue';

const props = defineProps<INavBarProps>();
const emit = defineEmits(['update:menuOpen']);

//se controla el overflow del body cuando `menuOpen` cambia
watch(() => props.menuOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : '';
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
  >
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a href="#home" class="font-mono text-xl font-bold text-white">
          miikuru002<span class="text-blue-500">.dev</span>
        </a>

        <div
          class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white cursor-pointer z-40 md:hidden
          rounded-lg  hover:bg-blue-600 transition-all duration-200"
          @click="emit('update:menuOpen', !props.menuOpen)"
        >
          <IconMenu3 class="w-6 h-6" />
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-300 hover:text-white transition-colors">Inicio</a>
          <a href="#about" class="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
          <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Proyectos</a>
          <LinkButton label="Contacto" href="#contact" outlined />
        </div>
      </div>
    </div>
  </nav>
</template>
