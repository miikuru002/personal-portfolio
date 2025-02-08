<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import LinkButton from '@/views/components/LinkButton.vue';
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative">
    <RevealOnScroll>
      <div class="text-center z-10 px-4">
        <h1
          class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hola! <br> Soy J. Ortega <span class="text-white">👋</span>
        </h1>

        <p class="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Desarrollador web especializado en backend y futuro ingeniero de software con experiencia en la creación de aplicaciones y servicios web escalables
        </p>

        <div class="flex justify-center space-x-4">
          <LinkButton label="Ver mis proyectos" href="#projects" />
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>
