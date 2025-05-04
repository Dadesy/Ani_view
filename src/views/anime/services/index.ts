import axios from '@/utils/axios.js';
import { animeRequestOptions } from '@/views/anime/config.js';
import { AnimeApiResponse } from '@/views/anime/services/anime-api.js';
import { EpisodeDetailsResponse, EpisodesListResponse } from '@/views/anime/services/episode.js';
import { RelatedMediaResponse } from '@/views/anime/services/relations.js';
import { SimilarResponse } from '@/views/anime/services/similar.js';

export async function fetchAnime(slug_url: string): Promise<AnimeApiResponse> {
  const { data } = await axios.get<AnimeApiResponse>(`api/anime/${slug_url}`, {
    params: animeRequestOptions
  });
  return data;
}

export async function fetchEpisodes(slug_url: string): Promise<EpisodesListResponse> {
  const { data } = await axios.get<EpisodesListResponse>(`api/episodes`, {
    params: {
      anime_id: slug_url
    }
  });
  return data;
}

export async function fetchDetailEpisode(id: number): Promise<EpisodeDetailsResponse> {
  const { data } = await axios.get<EpisodeDetailsResponse>(`api/episodes/${id}`, {});
  console.log('fetchDetailEpisode', data);
  return data;
}

export async function fetchRelations(slug_url: string): Promise<RelatedMediaResponse> {
  const { data } = await axios.get<RelatedMediaResponse>(`api/anime/${slug_url}/relations`, {});
  return data;
}

export async function fetchSimilar(slug_url: string): Promise<SimilarResponse> {
  const { data } = await axios.get<SimilarResponse>(`api/anime/${slug_url}/similar`, {});
  return data;
}
