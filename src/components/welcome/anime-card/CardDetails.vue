<template>
  <div
    class="absolute inset-0 p-4 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  >
    <h3 class="text-white text-xl font-bold mb-1">{{ rusName }}</h3>
    <p class="text-gray-200 text-sm mb-2">{{ engName }}</p>
    <ul class="text-gray-300 text-xs space-y-1">
      <list-item label="Возраст:" :value="ageLabel" />
      <list-item label="Тип:" :value="typeLabel" />
      <list-item label="Рейтинг:" :value="ratingText" />
      <list-item label="Просмотров/день:" :value="viewsPerDay" />
      <list-item label="Статус:" :value="statusLabel" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import ListItem from './ListItem.vue';

  const props = defineProps({
    rusName: { type: String, required: true },
    engName: { type: String, required: true },
    ageLabel: { type: String, required: true },
    typeLabel: { type: String, required: true },
    ratingText: { type: String, required: true },
    viewsPerDay: { type: [String, Number], required: true },
    statusLabel: { type: String, required: true }
  });
</script>
