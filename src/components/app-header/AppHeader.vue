<template>
  <a-layout-header class="h-16 flex items-center px-4 justify-between">
    <RouterLink to="/" class="text-2xl font-semibold text-white">ANI_VIEW</RouterLink>

    <a-select
      v-model:value="selectedItem"
      show-search
      allow-clear
      placeholder="Поиск..."
      class="mx-auto w-96 focus:w-80 transition-all duration-300"
      :filter-option="false"
      :loading="isSearching"
      @search="onSearch"
      @select="onSelect"
    >
      <a-select-option v-for="item in optionsList" :key="item.id" :value="item">
        <div class="flex items-center gap-2">
          <img :src="item.cover.thumbnail" alt="обложка" class="w-8 h-8 rounded" />
          <span>{{ item.rus_name }}</span>
        </div>
      </a-select-option>
    </a-select>

    <a-avatar icon="user" class="ml-4 text-white/80" />
  </a-layout-header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import type { AnimeItem } from '@/views/welcome/services/list.js';

  const router = useRouter();
  const optionsList = ref<AnimeItem[]>([]);
  const selectedItem = ref<AnimeItem | null>(null);
  const isSearching = ref(false);

  let searchTimeout: number;

  function onSearch(value: string) {
    clearTimeout(searchTimeout);
    optionsList.value = [];
    if (!value) {
      isSearching.value = false;
      return;
    }
    isSearching.value = true;
    searchTimeout = window.setTimeout(async () => {
      try {
        const resp = await axios.get<{ data: AnimeItem[] }>('https://api.cdnlibs.org/api/anime', {
          params: {
            q: value,
            'fields[]': ['rate_avg', 'rate', 'releaseDate']
          }
        });
        optionsList.value = resp.data.data;
      } catch (e) {
        console.error('Ошибка поиска аниме:', e);
      } finally {
        isSearching.value = false;
      }
    }, 500);
  }

  async function onSelect(item: AnimeItem) {
    await router.push({ name: 'animeDetail', params: { slug_url: item.slug_url } });
  }
</script>

<style scoped>
  .ant-layout-header {
    background: none;
    backdrop-filter: blur(10px);
  }
</style>
