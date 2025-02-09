<script setup lang="ts">
import type { IMobileMenuProps } from '@/typings/props';
import { IconX } from '@tabler/icons-vue';

const props = defineProps<IMobileMenuProps>();
const emit = defineEmits(['update:menuOpen']);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
           transition-all duration-300 ease-in-out"
    :class="{
      'h-screen opacity-100 pointer-events-auto': props.menuOpen,
      'h-0 opacity-0 pointer-events-none': !props.menuOpen,
    }"
  >
    <button
      @click="emit('update:menuOpen', false)"
      class="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      aria-label="Close Menu"
    >
      <IconX class="w-7 h-7" />
    </button>

    <a
      href="#home"
      @click="emit('update:menuOpen', false)"
      class="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      :class="{ 'opacity-100 translate-y-0': props.menuOpen, 'opacity-0 translate-y-5': !props.menuOpen }"
    >
      Inicio
    </a>
    <a
      href="#about"
      @click="emit('update:menuOpen', false)"
      class="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      :class="{ 'opacity-100 translate-y-0': props.menuOpen, 'opacity-0 translate-y-5': !props.menuOpen }"
    >
      Sobre mi
    </a>
    <a
      href="#projects"
      @click="emit('update:menuOpen', false)"
      class="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      :class="{ 'opacity-100 translate-y-0': props.menuOpen, 'opacity-0 translate-y-5': !props.menuOpen }"
    >
      Proyectos
    </a>
    <a
      href="#contact"
      @click="emit('update:menuOpen', false)"
      class="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      :class="{ 'opacity-100 translate-y-0': props.menuOpen, 'opacity-0 translate-y-5': !props.menuOpen }"
    >
      Contacto
    </a>
  </div>
</template>
