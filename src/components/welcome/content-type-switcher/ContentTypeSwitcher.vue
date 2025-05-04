<template>
  <a-radio-group v-model:value="selectedContentType">
    <a-radio-button :value="ContentType.Popular">Популярное</a-radio-button>
    <a-radio-button :value="ContentType.New">Новые серии</a-radio-button>
    <a-radio-button :value="ContentType.NewEpisodes">Новинки</a-radio-button>
  </a-radio-group>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { ContentType } from '@/components/welcome/content-type-switcher/types';

  const emits = defineEmits<{
    (e: 'change', contentType: ContentType): void;
  }>();

  const selectedContentType = ref<ContentType>(ContentType.Popular);

  watch(selectedContentType, (newType) => {
    emits('change', newType);
  });
</script>
