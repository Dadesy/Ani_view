<template>
  <a-carousel arrows autoplay class="overflow-visible">
    <div class="carousel-slide rounded-2xl relative h-80 bg-gray-800 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div class="absolute inset-0 flex flex-col items-start justify-center p-6 text-left">
        <div class="max-w-xl">
          <h2 class="text-3xl text-white mb-4">Добро пожаловать!</h2>
          <p class="text-sm text-gray-300 mb-4">
            Это мой первый проект, созданный с душой для таких же фанатов аниме, как и я. Здесь
            можно смотреть любимые тайтлы онлайн — без регистрации и надоедливой рекламы. Всё
            бесплатно, удобно и доступно на любом устройстве.
          </p>
          <p class="text-sm text-gray-300">
            Заходи почаще, делись мнением и помогай развивать это место для всех, кто любит аниме!
          </p>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
  import { AnimeItem } from '@/views/welcome/services/list.js';

  const props = defineProps<{
    sliders: AnimeItem[] | null;
  }>();
</script>

<style>
  .carousel-slide {
    width: 100%;
    height: 320px;
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: url(@/assets/img/slide.jpg) center/cover no-repeat;
  }
</style>
