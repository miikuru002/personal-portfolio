<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['complete']);

const currentLog = ref('');
const spinner = ref('\\');
const progress = ref(0);

let logInterval: number;
let spinnerInterval: number;

const logMessages = [
  'Resolving dependencies...',
  'Fetching packages...',
  'Verifying integrity...',
  'Installing modules...',
  'Finalizing setup...',
];

onMounted(() => {
  let index = 0;
  const totalDuration = 3000;
  const logIntervalTime = totalDuration / logMessages.length; //~500ms por mensaje

  //se muestran los mensajes uno por uno
  logInterval = setInterval(() => {
    if (index < logMessages.length) {
      currentLog.value = logMessages[index];
      progress.value = Math.round(((index + 1) / logMessages.length) * 100);
      index++;
    } else {
      clearInterval(logInterval);
      setTimeout(() => {
        emit('complete');
      }, 500);
    }
  }, logIntervalTime);

  //spinner tipo npm (\ | / -)
  const spinnerChars = ['\\', '|', '/', '-'];
  let spinnerIndex = 0;
  spinnerInterval = setInterval(() => {
    spinner.value = spinnerChars[spinnerIndex++ % spinnerChars.length];
  }, 100);
});

onUnmounted(() => {
  clearInterval(logInterval);
  clearInterval(spinnerInterval);
});
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black flex items-center justify-center text-blue-400 font-mono">
    <div class="w-[400px] p-4">
      <!-- Spinner + Mensaje -->
      <div class="text-sm flex items-center">
        <span class="text-lg font-bold mr-2">{{ spinner }}</span> {{ currentLog }}
      </div>

      <!-- Barra de carga estilo retro -->
      <div class="w-full h-5 bg-blue-500 mt-2" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>
