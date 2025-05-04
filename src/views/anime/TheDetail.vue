<template>
  <base-layout>
    <div class="flex flex-col gap-4">
      <a-alert v-if="errorMessage" type="error" show-icon :message="errorMessage" />

      <a-skeleton :loading="isLoadingAnime" active paragraph :title="false">
        <div
          class="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl"
        >
          <div
            v-if="anime?.background?.url"
            class="absolute inset-0 rounded-2xl"
            :style="{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0)), url(${anime.background.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          ></div>

          <div class="relative h-full flex items-center px-6 md:px-12">
            <div class="text-white max-w-3xl space-y-3">
              <a-typography-title level="2" class="!text-white text-3xl md:text-4xl">
                {{ anime?.rus_name || anime?.name }}
              </a-typography-title>
              <a-typography-paragraph class="text-sm md:text-base text-gray-200">
                {{ anime?.summary }}
              </a-typography-paragraph>
            </div>
          </div>
        </div>
      </a-skeleton>
      <a-typography-title level="4" class="">Серия {{ episodeDetail?.number }}</a-typography-title>

      <a-select
        v-if="episodeDetail?.players"
        class="w-[200px]"
        :value="selectedPlayerId"
        @change="selectPlayer"
        placeholder="Выберите плеер"
      >
        <a-select-option v-for="p in episodeDetail.players" :key="p.id" :value="p.id">
          {{ p.team.name }} ({{ p.translation_type.label }})
        </a-select-option>
      </a-select>

      <a-row :gutter="16">
        <a-col :xs="24" :lg="16">
          <a-skeleton :loading="isLoadingDetail" active>
            <div v-if="episodeDetail">
              <div v-if="currentSrc" class="relative w-full h-[500px]">
                <iframe
                  :src="currentSrc"
                  frameborder="0"
                  allowfullscreen
                  class="absolute inset-0 w-full h-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </a-skeleton>
        </a-col>

        <a-col :xs="24" :lg="8">
          <a-skeleton
            :loading="isLoadingEpisodes"
            active
            paragraph="{ rows: 8 }"
            title="{ width: '60%' }"
          >
            <div class="h-[500px] overflow-auto">
              <a-list
                bordered
                class="h-full overflow-auto"
                :style="{ padding: '10px' }"
                :data-source="episodes"
              >
                <template #renderItem="{ item }">
                  <a-list-item
                    @click="selectEpisode(item.id)"
                    class="group transition-all duration-200 ease-in-out cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-500/50 dark:hover:bg-gray-700"
                    :class="[
                      'cursor-pointer py-2',
                      item.id === selectedEpisodeId ? 'bg-gray-400' : ''
                    ]"
                  >
                    <div class="flex items-center gap-4">
                      <img
                        class="w-20 h-20 object-cover rounded-xl shadow-sm"
                        :src="anime?.cover?.default"
                        alt="Обложка серии"
                      />

                      <div class="flex flex-col justify-center">
                        <span class="font-semibold text-base">Серия {{ item.number }}</span>
                        <span class="text-sm">Нажмите для просмотра</span>
                      </div>
                    </div>
                  </a-list-item>
                </template>
              </a-list>
            </div>
          </a-skeleton>
        </a-col>
      </a-row>

      <div class="my-10">
        <a-typography-title>Связанное</a-typography-title>

        <a-carousel
          :dots="false"
          :autoplay="false"
          :slides-to-show="10"
          :slides-to-scroll="1"
          :responsive="[
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
          ]"
        >
          <div v-for="relation in relations" :key="relation.media.id" class="px-2">
            <div class="flex flex-col items-center gap-2 group">
              <img
                :src="relation.media.cover.default"
                alt=""
                class="object-cover rounded-2xl w-32 h-40 transition-transform duration-300 ease-out group-hover:scale-105 shadow"
              />
              <a-typography-text class="truncate text-center max-w-[8rem]">
                {{ relation.media.rus_name }}
              </a-typography-text>
            </div>
          </div>
        </a-carousel>
      </div>

      <div class="my-10">
        <a-typography-title>Вам может понравится</a-typography-title>

        <a-carousel :dots="false" :autoplay="false" :slides-to-show="10" :slides-to-scroll="1">
          <div v-for="similar in similars" :key="similar.id" class="px-2">
            <div class="flex flex-col items-center gap-2 group">
              <img
                :src="similar.media.cover.default"
                alt=""
                class="object-cover rounded-2xl w-32 h-40 transition-transform duration-300 ease-out group-hover:scale-105 shadow"
              />
              <a-typography-text class="truncate text-center max-w-[8rem]">
                {{ similar.media.rus_name }}
              </a-typography-text>
            </div>
          </div>
        </a-carousel>
      </div>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    fetchAnime,
    fetchEpisodes,
    fetchDetailEpisode,
    fetchRelations,
    fetchSimilar
  } from '@/views/anime/services/index.js';
  import type { AnimeEpisode, EpisodeWithPlayers } from '@/views/anime/services/episode.js';
  import type { AnimeData } from '@/views/anime/services/anime-api.js';

  import BaseLayout from '@/layout/BaseLayout.vue';
  import { RelatedMediaItem } from '@/views/anime/services/relations.js';
  import { SimilarItem } from '@/views/anime/services/similar.js';

  const route = useRoute();
  const slug = String(route.params.slug_url);

  const anime = ref<AnimeData | null>(null);
  const isLoadingAnime = ref(false);

  const episodes = ref<AnimeEpisode[]>([]);
  const selectedEpisodeId = ref<number | null>(null);
  const isLoadingEpisodes = ref(false);

  const episodeDetail = ref<EpisodeWithPlayers | null>(null);
  const selectedPlayerId = ref<number | null>(null);
  const isLoadingDetail = ref(false);

  const relations = ref<RelatedMediaItem[] | null>(null);

  const similars = ref<SimilarItem[] | null>(null);

  const errorMessage = ref<string | null>(null);

  async function loadAnime() {
    isLoadingAnime.value = true;
    try {
      const resp = await fetchAnime(slug);
      anime.value = resp.data;
    } catch {
      errorMessage.value = 'Не удалось загрузить данные аниме.';
    } finally {
      isLoadingAnime.value = false;
    }
  }

  async function loadRelations() {
    try {
      const resp = await fetchRelations(slug);
      relations.value = resp.data;
    } catch {
      errorMessage.value = 'Не удалось загрузить список эпизодов.';
    } finally {
    }
  }

  async function loadSimilars() {
    try {
      const resp = await fetchSimilar(slug);
      similars.value = resp.data;
    } catch {
      errorMessage.value = 'Не удалось загрузить список похожих аниме.';
    }
  }
  async function loadEpisodes() {
    isLoadingEpisodes.value = true;
    try {
      const resp = await fetchEpisodes(slug);
      episodes.value = resp.data;
      selectedEpisodeId.value = resp.data[0]?.id ?? null;
    } catch {
      errorMessage.value = 'Не удалось загрузить список эпизодов.';
    } finally {
      isLoadingEpisodes.value = false;
    }
  }

  async function loadEpisodeDetail(id: number) {
    isLoadingDetail.value = true;
    try {
      const resp = await fetchDetailEpisode(id);
      episodeDetail.value = resp.data;
      selectedPlayerId.value = resp.data.players[0]?.id ?? null;
    } catch {
      errorMessage.value = 'Не удалось загрузить детали эпизода.';
    } finally {
      isLoadingDetail.value = false;
    }
  }

  function selectEpisode(id: number) {
    selectedEpisodeId.value = id;
  }

  function selectPlayer(id: number) {
    selectedPlayerId.value = id;
  }

  onMounted(async () => {
    await loadAnime();
    await loadEpisodes();
    await loadRelations();
    await loadSimilars();
  });

  watch(
    selectedEpisodeId,
    (id) => {
      if (id == null) {
        episodeDetail.value = null;
        selectedPlayerId.value = null;
        return;
      }
      loadEpisodeDetail(id);
    },
    { immediate: true }
  );

  const currentSrc = computed(() => {
    console.log('episodeDetail.value', episodeDetail.value);
    const pl = episodeDetail.value?.players.find((p) => p.id === selectedPlayerId.value);
    if (!pl) return '';
    return pl.src.startsWith('//') ? `https:${pl.src}` : pl.src;
  });
</script>

<style>
  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #ffffff;
    transition: ease all 0.3s;
    z-index: 1;
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }

  :deep(.slick-slide h3) {
    color: #fff;
  }
</style>
