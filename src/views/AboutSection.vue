<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import { Icon } from '@iconify/vue';

const skillGroups = [
  {
    title: 'Tecnologías Frontend',
    skills: [
      { name: 'Angular', icon: 'simple-icons:angular', color: '#DD0031' },
      { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs', color: '#42B883' },
      { name: 'Flutter', icon: 'simple-icons:flutter', color: '#3aa0f6' },
    ],
  },
  {
    title: 'Tecnologías Backend',
    skills: [
      { name: 'Spring Boot', icon: 'simple-icons:springboot', color: '#6DB33F' },
      { name: 'Spring Cloud', icon: 'simple-icons:spring', color: '#6DB33F' },
      { name: 'Quarkus', icon: 'simple-icons:quarkus', color: '#4695EB' },
      { name: '.NET', icon: 'devicon-plain:dot-net', color: '#855eff' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#8CC84B' },
      { name: 'Kafka', icon: 'simple-icons:apachekafka', color: '#b0b0b0' },
    ],
  },
  {
    title: 'Bases de datos',
    skills: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
      { name: 'SQL Server', icon: 'devicon-plain:microsoftsqlserver', color: '#CC2927' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A248' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
      { name: 'Azure', icon: 'devicon-plain:azure', color: '#0089D6' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'simple-icons:kubernetes', color: '#326CE5' },
      { name: 'Terraform', icon: 'simple-icons:terraform', color: '#7B42BC' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF' },
    ],
  },
];

const getStyles = (color: string) => ({
  border: `1px solid ${color}33`, //20% opacity
  color: `${color}`,
  boxShadow: `0 2px 8px ${color}33`, //20% opacity shadow
});
</script>

<template>
  <section id="about" class="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div class="max-w-3xl mx-auto px-4">
        <h2
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Sobre mí
        </h2>

        <!-- Descripción y Tecnologías -->
        <div class="rounded-xl p-8 border-white/10 border">
          <p class="text-gray-300 mb-6">
            Me especializo en backend y cloud: microservicios con Spring Boot, procesamiento de
            eventos con Kafka, autenticación con OAuth 2.0 e infraestructura en AWS y Azure.
            Disfruto resolver problemas de arquitectura y dejar sistemas que sean simples de
            mantener y de operar. Comparto lo que aprendo en mi blog y, fuera del trabajo, me
            encontrarás escuchando música o viendo anime.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div v-for="group in skillGroups" :key="group.title" class="rounded-xl p-6">
              <h3 class="text-lg font-bold mb-4">{{ group.title }}</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in group.skills"
                  :key="tech.name"
                  class="flex items-center gap-2 py-1 px-3 rounded-full text-sm"
                  :style="getStyles(tech.color)"
                >
                  <Icon :icon="tech.icon" class="w-3 h-3" />
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Educación -->
        <div class="grid grid-cols-1 gap-6 mt-8">
          <div class="p-6 rounded-xl border-white/10 border">
            <h3 class="text-xl font-bold mb-4">🎓 Educación</h3>
            <ul class="space-y-4 text-gray-300">
              <li>
                <div class="flex items-baseline justify-between gap-4">
                  <div class="font-semibold">Ingeniería de Software</div>
                  <div class="text-sm text-gray-400 shrink-0">2019 - 2026</div>
                </div>
                <div class="text-sm text-gray-400">Universidad Peruana de Ciencias Aplicadas</div>
              </li>
              <li>
                <div class="flex items-baseline justify-between gap-4">
                  <div class="font-semibold">Diseño y Desarrollo de Software</div>
                  <div class="text-sm text-gray-400 shrink-0">2019 - 2022</div>
                </div>
                <div class="text-sm text-gray-400">Instituto Tecnológico Superior Tecsup</div>
              </li>
              <li>
                <div class="flex items-baseline justify-between gap-4">
                  <div class="font-semibold">Inglés avanzado (B2)</div>
                </div>
                <div class="text-sm text-gray-400">Asociación Cultural Peruano Británica</div>
              </li>
            </ul>
          </div>

          <!-- <div class="p-6 rounded-xl border-white/10 border">
            <h3 class="text-xl font-bold mb-4">💼 Experiencia Laboral</h3>
            <ul class="space-y-4 text-gray-300">
              <li>
                <div class="font-semibold">Analista de Sistemas de T.I</div>
                <div class="text-sm text-gray-400">E.T Armadillo • 2024 - Actualidad</div>
                <p class="text-sm text-gray-400">Desarrollo de sistemas de seguridad basados en streaming de videos e IoT.</p>
              </li>
              <li>
                <div class="font-semibold">Practicante Profesional</div>
                <div class="text-sm text-gray-400">Sapiens Consulting • 2022</div>
                <p class="text-sm text-gray-400">Desarrollé nuevos features y reportes para aplicaciones web gubernamentales.</p>
              </li>
              <li>
                <div class="font-semibold">Pasante</div>
                <div class="text-sm text-gray-400">Precor S.A • 2021</div>
                <p class="text-sm text-gray-400">Desarrollé un chatbot para RRHH, optimicé datos y diseñé interfaces gráficas.</p>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>
