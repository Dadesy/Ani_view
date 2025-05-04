<template>
  <a-layout class="min-h-screen">
    <a-affix>
      <app-header />
    </a-affix>
    <a-layout-content class="pt-16 container mx-auto p-4">
      <slot />
    </a-layout-content>
    <app-footer />
  </a-layout>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/app-header/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>
