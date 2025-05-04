import axios from '@/utils/axios';
import type { LastUpdatesResponse } from '@/views/welcome/services/lastest-updates.d';
import type { TopViewsResponse } from '@/views/welcome/services/top-views.d';
import type { AnimeListResponse } from '@/views/welcome/services/list.d';

export async function fetchList(): Promise<AnimeListResponse> {
  const { data } = await axios.get<AnimeListResponse>('/api');
  return data;
}

export async function fetchTopViews(
  page = 1,
  popularity = 21,
  time: 'day' | 'week' = 'day'
): Promise<TopViewsResponse> {
  const { data } = await axios.get<TopViewsResponse>('/api/media/top-views', {
    params: { page, popularity, time }
  });
  return data;
}

export async function fetchLatestUpdates(page = 1): Promise<LastUpdatesResponse> {
  const { data } = await axios.get<LastUpdatesResponse>('/api/latest-updates', {
    params: { page }
  });
  return data;
}

export async function fetchNewEpisodes() {
  const response = await axios.get('/api/anime', {
    params: {
      sort_by: 'created_at'
    }
  });
  return response.data;
}
