<template>
  <BaseLayout>
    <div v-auto-animate class="flex flex-col gap-5">
      <the-slider :sliders="sliderItems" />

      <div class="my-10">
        <a-typography-title>Рекомендации</a-typography-title>
        <popular-slider :sliders="sliderItems" />
      </div>

      <a-typography-title>Каталог</a-typography-title>
      <div v-auto-animate class="flex w-full items-center justify-center mb-5">
        <content-type-switcher @change="onContentTypeSelected" />
      </div>
      <div
        v-auto-animate
        class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch"
      >
        <anime-card v-for="item in currentItems" :key="item.id" :item="item" />
      </div>
    </div>
  </BaseLayout>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed, Ref } from 'vue';

  import BaseLayout from '@/layout/BaseLayout.vue';
  import ContentTypeSwitcher from '@/components/welcome/content-type-switcher/ContentTypeSwitcher.vue';
  import AnimeCard from '@/components/welcome/anime-card/AnimeCard.vue';
  import TheSlider from '@/components/welcome/TheSlider.vue';
  import PopularSlider from '@/components/welcome/PopularSlider.vue';

  import { ContentType } from '@/components/welcome/content-type-switcher/types';
  import {
    fetchLatestUpdates,
    fetchTopViews,
    fetchNewEpisodes,
    fetchList
  } from '@/views/welcome/services';

  import { LastUpdateItem } from '@/views/welcome/services/lastest-updates';
  import { TopViewItem } from '@/views/welcome/services/top-views';
  import { AnimeItem } from '@/views/welcome/services/list.js';

  const selectedContentType = ref<ContentType>(ContentType.Popular);
  const topViews = ref<TopViewItem[] | null>(null);
  const lastUpdates = ref<LastUpdateItem[] | null>(null);
  const newEpisodes = ref<LastUpdateItem[] | null>(null);
  const sliderItems = ref<AnimeItem[] | null>(null);

  const currentItems = computed(() => itemsMap[selectedContentType.value]?.value ?? []);

  const fetchActions: Record<ContentType, () => Promise<void>> = {
    [ContentType.Popular]: async () => {
      const { data } = await fetchTopViews();
      topViews.value = data;
    },
    [ContentType.New]: async () => {
      const { data } = await fetchLatestUpdates();
      lastUpdates.value = data;
    },
    [ContentType.NewEpisodes]: async () => {
      const { data } = await fetchNewEpisodes();
      newEpisodes.value = data;
    }
  };

  const onContentTypeSelected = async (type: ContentType): Promise<void> => {
    selectedContentType.value = type;
    await fetchActions[type]();
  };

  const fetchContentPage = async () => {
    const response = await fetchList();
    sliderItems.value = response.data.popular;
  };

  onMounted(async () => {
    await onContentTypeSelected(selectedContentType.value);
    await fetchContentPage();
  });

  const itemsMap: Record<ContentType, Ref<any[] | null>> = {
    [ContentType.Popular]: topViews,
    [ContentType.New]: lastUpdates,
    [ContentType.NewEpisodes]: newEpisodes
  };
</script>
