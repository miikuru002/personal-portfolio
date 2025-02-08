<script setup lang="ts">
import '@/assets/main.css'
import { ref } from 'vue'
import NavBar from '@/layout/NavBar.vue';
import MobileMenu from '@/layout/MobileMenu.vue';
import LoadingScreen from '@/layout/LoadingScreen.vue';
import HeroSection from '@/views/HeroSection.vue';
import AboutSection from '@/views/AboutSection.vue';
import ProjectsSection from '@/views/ProjectsSection.vue';
import ContactSection from '@/views/ContactSection.vue';

const menuOpen = ref(false);
const isLoaded = ref(false);
</script>

<template>
  <LoadingScreen v-if="!isLoaded" @complete="isLoaded = true" />

  <div
    class="min-h-screen transition-opacity duration-700 bg-black text-gray-100"
    :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
  >
    <NavBar :menuOpen="menuOpen" @update:menuOpen="menuOpen = $event" />
    <MobileMenu :menuOpen="menuOpen" @update:menuOpen="menuOpen = $event" />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
