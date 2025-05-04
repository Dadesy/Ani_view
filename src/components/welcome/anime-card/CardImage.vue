<template>
  <div
    class="absolute inset-0 bg-cover bg-center transition-transform filter duration-300 ease-out group-hover:scale-110 group-hover:blur-sm"
    :style="bgStyle"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  coverUrl: { type: String, required: true }
})

const bgStyle = { backgroundImage: `url(${props.coverUrl})` }
</script>
