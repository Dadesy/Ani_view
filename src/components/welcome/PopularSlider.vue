<template>
  <a-carousel :dots="false" arrows :slides-to-show="10" :slides-to-scroll="1">
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: -30px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: -30px">
        <right-circle-outlined />
      </div>
    </template>

    <div
      v-for="slide in props.sliders"
      :key="slide.id"
      class="group px-2 cursor-pointer overflow-visible"
    >
      <router-link :to="slide.slug_url">
        <div class="flex flex-col gap-2">
          <img
            :src="slide.cover.default"
            alt=""
            class="object-cover rounded-2xl w-32 h-40 transition-transform filter duration-300 ease-out group-hover:scale-105"
          />
          <a-typography class="truncate">
            {{ slide.rus_name }}
          </a-typography>
        </div>
      </router-link>
    </div>
  </a-carousel>
</template>

<script lang="ts" setup>
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

  import type { AnimeItem } from '@/views/welcome/services/list.d';

  const props = defineProps<{
    sliders: AnimeItem[] | null;
  }>();
</script>

<style scoped>
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
