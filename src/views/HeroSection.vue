<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import LinkButton from '@/views/components/LinkButton.vue';
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative">
    <RevealOnScroll>
      <div class="text-center z-10 px-4">
        <h1
          class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          ¡Hola! <br />
          Soy J. Ortega <span class="text-white">👋</span>
        </h1>

        <p class="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Ingeniero de Software. Siempre aprendiendo algo nuevo ✨
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <LinkButton
            label="GitHub"
            href="https://github.com/miikuru002"
            icon="tabler:brand-github"
            external
          />
          <LinkButton
            label="Mi blog"
            href="https://blog.miikuru002.dev"
            icon="tabler:notebook"
            external
            outlined
          />
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>
