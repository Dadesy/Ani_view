import axios from '@/utils/axios.js';
import { animeRequestOptions } from '@/views/anime/config.js';
import { AnimeApiResponse } from '@/views/anime/services/anime-api.js';

export async function fetchAnime(query: string): Promise<AnimeApiResponse> {
  const { data } = await axios.get<AnimeApiResponse>(`api/anime`, {
    params: {
      q: query,
      'fields[]': ['rate_avg', 'rate', 'releaseDate']
    }
  });
  return data;
}
