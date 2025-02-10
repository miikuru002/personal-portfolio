<script setup lang="ts">
import RevealOnScroll from '@/layout/RevealOnScroll.vue';
import { Icon } from '@iconify/vue';

const programmingLanguages = [
  { name: 'JS', icon: 'simple-icons:javascript', color: '#F7DF1E' },
  { name: 'TS', icon: 'simple-icons:typescript', color: '#57a1f3' },
  { name: 'Java', icon: 'nonicons:java-16', color: '#ED8B00' },
  { name: 'C#', icon: 'simple-icons:csharp', color: '#9B4993' },
  { name: 'Python', icon: 'simple-icons:python', color: '#629ccc' },
  { name: 'Swift', icon: 'simple-icons:swift', color: '#FA7343' },
];

const frontendSkills = [
  { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
  { name: 'Vue', icon: 'simple-icons:vuedotjs', color: '#42B883' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#38B2AC' },
  { name: 'Flutter', icon: 'simple-icons:flutter', color: '#3aa0f6' }
];

const backendSkills = [
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#8CC84B' },
  { name: 'Spring Boot', icon: 'simple-icons:springboot', color: '#6DB33F' },
  { name: '.NET', icon: 'devicon-plain:dot-net', color: '#855eff' },
  { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
  { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' }
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
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Sobre mí
        </h2>

        <!-- Descripción y Tecnologías -->
        <div class="rounded-xl p-8 border-white/10 border">
          <p class="text-gray-300 mb-6">
            Soy desarrollador de software especializado en backend y DevOps. Aunque también me desempeño bien en frontend, mi pasión radica en crear sistemas escalables y bien estructurados.
            En mi tiempo libre, disfruto escuchar música, ver anime y desarrollar nuevos proyectos que me desafíen y me ayuden a seguir aprendiendo.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Lenguajes de programación</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(lang, index) in programmingLanguages"
                  :key="index"
                  class="flex items-center gap-2 py-1 px-3 rounded-full text-sm"
                  :style="getStyles(lang.color)"
                >
                  <Icon :icon="lang.icon" class="w-3 h-3" />
                  {{ lang.name }}
                </span>
              </div>
            </div>

            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Tecnologías Frontend</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in frontendSkills"
                  :key="index"
                  class="flex items-center gap-2 py-1 px-3 rounded-full text-sm"
                  :style="getStyles(tech.color)"
                >
                  <Icon :icon="tech.icon" class="w-3 h-3" />
                  {{ tech.name }}
                </span>
              </div>
            </div>

            <div class="rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4">Backend & DevOps</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in backendSkills"
                  :key="index"
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
