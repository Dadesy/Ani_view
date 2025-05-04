<template>
  <a-badge :count="average" :number-style="badgeStyle">
    <slot />
  </a-badge>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { PropType } from 'vue';
  import colors from 'tailwindcss/colors';

  const props = defineProps({
    average: { type: Number as PropType<number>, required: true }
  });

  const badgeStyle = computed(() => {
    const r = props.average;
    if (r <= 2) {
      return { backgroundColor: colors.red[500], borderColor: colors.red[500] };
    }
    if (r <= 4) {
      return { backgroundColor: colors.orange[500], borderColor: colors.orange[500] };
    }
    if (r <= 6) {
      return { backgroundColor: colors.yellow[500], borderColor: colors.yellow[500] };
    }
    if (r <= 8) {
      return { backgroundColor: colors.lime[500], borderColor: colors.lime[500] };
    }
    return { backgroundColor: colors.green[500], borderColor: colors.green[500] };
  });
</script>
