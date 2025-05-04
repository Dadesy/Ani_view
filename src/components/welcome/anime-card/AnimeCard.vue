<template>
  <rating-badge :average="avgNumber">
    <RouterLink :to="`${item.slug_url}`">
      <div
        v-auto-animate
        class="relative group h-96 w-72 rounded-2xl overflow-hidden cursor-pointer"
      >
        <card-image :coverUrl="coverUrl" />
        <card-overlay />
        <card-details
          :rusName="item.rus_name"
          :engName="item.eng_name"
          :ageLabel="item.ageRestriction.label"
          :typeLabel="item.type.label"
          :ratingText="`${item.rating.averageFormated} (${item.rating.votesFormated} голосов)`"
          :statusLabel="item.status.label"
        />
      </div>
    </RouterLink>
  </rating-badge>
</template>

<script setup lang="ts">
  import RatingBadge from '@/components/welcome/anime-card/RatingBadge.vue';
  import CardImage from '@/components/welcome/anime-card/CardImage.vue';
  import CardOverlay from '@/components/welcome/anime-card/CardOverlay.vue';
  import CardDetails from '@/components/welcome/anime-card/CardDetails.vue';
  import { AnimeItem } from '@/components/welcome/anime-card/anime-card.js';

  const props = defineProps<{
    item: AnimeItem;
  }>();

  const avgNumber = Number(props.item.rating.averageFormated);
  const coverUrl = props.item.cover.default;
</script>
