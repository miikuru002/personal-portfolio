<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Hannami Tools',
    description: 'Herramientas simplificadas e inteligentes para el día a día.',
    technologies: ['Vue', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Docker', 'IA', 'WebLLM','Keycloak', 'Stripe']
  },
  {
    title: 'Hannami Discord Bot',
    description: 'Chatbot para Discord con funcionalidades de entretenimiento y utilidades para comunidades.',
    technologies: ['Node.js', 'Discord.js', 'TypeScript', 'MongoDB']
  },
  {
    title: 'ProWallet',
    description: 'Aplicación web para gestionar descuentos de facturas.',
    technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'Keycloak']
  },
  {
    title: 'FlexiDorms Microservices',
    description: 'Plataforma de alquiler de habitaciones para estudiantes con arquitectura de microservicios.',
    technologies: ['Spring Boot', 'Spring Cloud', 'Docker', 'PostgreSQL', 'Apache Kafka', 'Keycloak']
  },
  {
    title: 'Articles Finder',
    description: 'Motor de búsqueda de artículos usando algoritmos BFS (Breadth First Search), colas y grafos.',
    technologies: ['Django', 'Python', 'SQLite']
  },
  {
    title: 'AorraP Landing Page',
    description: 'Landing page para una empresa de servicios de finanzas personales.',
    technologies: ['React', 'Styled Components', 'TypeScript']
  }
]);
</script>

<template>
  <section id="projects" class="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div class="max-w-5xl mx-auto px-4">
        <h2
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Proyectos destacados
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, key) in project.technologies"
                :key="key"
                class="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors my-4">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>

