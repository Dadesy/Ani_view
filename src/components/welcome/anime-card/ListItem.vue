<template>
  <li>
    <strong>{{ label }}</strong>
    {{ value }}
  </li>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: { type: String, required: true },
    value: { type: [String, Number], required: true }
  });
</script>
