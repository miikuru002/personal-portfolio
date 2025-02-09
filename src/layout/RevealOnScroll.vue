<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const revealRef = ref<Element | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealRef.value?.classList.add('visible');
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  if (revealRef.value) observer.observe(revealRef.value);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div ref="revealRef" class="reveal">
    <slot />
  </div>
</template>
