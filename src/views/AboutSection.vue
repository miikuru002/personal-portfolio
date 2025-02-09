<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';

const programmingLanguages = ['JS', 'TS', 'Java', 'C#', 'C++', 'Python', 'SQL'];
const frontendSkills = ['React', 'Vue', 'JSX', 'Tailwind'];
const backendSkills = ['Node.js', 'Spring Boot', '.NET', 'AWS', 'Docker'];
</script>

<template>
  <section id="about" class="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div class="max-w-3xl mx-auto px-4">
        <h2
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Sobre mí
        </h2>

        <!-- Descripción y Tecnologías -->
        <div class="rounded-xl p-8 border-white/10 border">
          <p class="text-gray-300 mb-6">
            Programador especializado en desarrollo web, enfocado en crear sistemas escalables, bien
            estructurados y de alto rendimiento, con una arquitectura robusta.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Lenguajes de programación</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(lang, index) in programmingLanguages"
                  :key="index"
                  class="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {{ lang }}
                </span>
              </div>
            </div>

            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Tecnologías Frontend</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in frontendSkills"
                  :key="index"
                  class="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Backend & DevOps</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in backendSkills"
                  :key="index"
                  class="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Educación y Experiencia -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="p-6 rounded-xl border-white/10 border">
            <h3 class="text-xl font-bold mb-4">🎓 Educación</h3>
            <ul class="space-y-4 text-gray-300">
              <li>
                <div class="font-semibold">Ingeniería de Software</div>
                <div class="text-sm text-gray-400">Universidad Peruana de Ciencias Aplicadas</div>
                <div class="text-sm text-gray-400">2019 - Actualidad</div>
              </li>
              <li>
                <div class="font-semibold">Diseño y Desarrollo de Software</div>
                <div class="text-sm text-gray-400">Instituto Tecnológico Superior Tecsup</div>
                <div class="text-sm text-gray-400">2019 - 2022</div>
              </li>
              <li>
                <div class="font-semibold">Inglés avanzado (B2)</div>
                <div class="text-sm text-gray-400">Asociación Cultural Peruano Británica</div>
              </li>
            </ul>
          </div>

          <div class="p-6 rounded-xl border-white/10 border">
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
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
</template>
