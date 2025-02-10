<script setup lang="ts">
import { computed } from 'vue';
import type { ILinkButtonProps } from '@/typings/props';

const props = defineProps<ILinkButtonProps>();

const baseClasses = 'font-medium px-5 rounded-lg transition-all duration-200';

const filledClasses = 'py-2 bg-blue-500 text-white hover:bg-blue-600 shadow-lg';

const outlinedClasses =
  'py-[5px] border border-blue-400/50 text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-400/10';

const buttonClasses = computed(() =>
  [baseClasses, props.outlined ? outlinedClasses : filledClasses].join(' ')
);
</script>

<template>
  <a :href="props.href" :class="buttonClasses">
    {{ props.label }}
  </a>
</template>
