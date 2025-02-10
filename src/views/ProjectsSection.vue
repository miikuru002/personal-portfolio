<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const projects = ref([
  {
    title: 'Hannami Tools',
    description: 'Herramientas simplificadas e inteligentes para el día a día.',
    technologies: ['Vue', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Docker', 'IA', 'WebLLM', 'Keycloak', 'Stripe'],
    image: '/images/s1-hannami-web.png',
    link: 'https://hannami.xyz/login',
  },
  {
    title: 'Hannami Discord Bot',
    description: 'Chatbot para Discord con funcionalidades de entretenimiento y utilidades para comunidades.',
    technologies: ['Node.js', 'Discord.js', 'TypeScript', 'MongoDB'],
    image: '/images/s1-hannami-bot.png',
    link: 'https://discord.com/oauth2/authorize?client_id=978184569729736756&permissions=274878295040&scope=bot%20applications.commands'
  },
  {
    title: 'ProWallet',
    description: 'Aplicación web para gestionar descuentos de facturas, carteras de clientes y reportes.',
    technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'Keycloak'],
    image: '/images/s1-prowallet.png',
    repository: 'https://github.com/miikuru002/prowallet-web',
    link: 'https://prowallet-web.vercel.app/login',
  },
  {
    title: 'FlexiDorms Microservices',
    description: 'Plataforma de alquiler de habitaciones para estudiantes con arquitectura de microservicios.',
    technologies: ['Spring Boot', 'Spring Cloud', 'Docker', 'PostgreSQL', 'Apache Kafka', 'Keycloak'],
    image: '/images/s1-flexidorms.png',
    repository: 'https://github.com/miikuru002/FlexiDorms'
  },
  {
    title: 'Articles Finder',
    description: 'Motor de búsqueda de artículos usando algoritmos BFS (Breadth First Search), colas y grafos.',
    technologies: ['Django', 'Python', 'SQLite'],
    image: '/images/articles-finder.png',
    repository: 'https://github.com/miikuru002/ArticlesProject'
  },
  {
    title: 'AorraP Landing Page',
    description: 'Landing page para una empresa de servicios de finanzas personales.',
    technologies: ['React', 'Styled Components', 'TypeScript'],
    image: '/images/s1-aorrap.png',
    repository: 'https://github.com/miikuru002/Finanzia-AorraP-landing',
    link: 'https://aorrap.netlify.app/'
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
            class="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col h-full"
          >
            <!-- Imagen del Proyecto -->
            <div class="overflow-hidden rounded-lg mb-4">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Contenido principal -->
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4">{{ project.description }}</p>

              <!-- Tecnologías -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, key) in project.technologies"
                  :key="key"
                  class="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Botones -->
            <div class="mt-auto flex justify-between items-center gap-3">
              <a
                v-if="project.repository"
                :href="project.repository"
                target="_blank"
                class="flex items-center gap-2 px-4 py-[5px] rounded-lg transition-all duration-200 border border-blue-400/50 text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-400/10"
              >
                <Icon icon="tabler:code" class="w-5 h-5" />
                Ver Repositorio
              </a>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition ml-auto"
              >
                Ver Proyecto
                <Icon icon="tabler:external-link" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>
