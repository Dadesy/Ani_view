<template>
  <a-config-provider :theme="theme">
    <Analytics />
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
  import { theme } from '@/theme.js';
  import { Analytics } from '@vercel/analytics/vue';
</script>
