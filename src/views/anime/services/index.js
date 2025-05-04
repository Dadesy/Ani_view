import axios from '@/utils/axios.js';
import { animeRequestOptions } from '@/views/anime/config.js';
export async function fetchAnime(slug_url) {
    const { data } = await axios.get(`api/anime/${slug_url}`, {
        params: animeRequestOptions
    });
    return data;
}
export async function fetchEpisodes(slug_url) {
    const { data } = await axios.get(`api/episodes`, {
        params: {
            anime_id: slug_url
        }
    });
    return data;
}
export async function fetchDetailEpisode(id) {
    const { data } = await axios.get(`api/episodes/${id}`, {});
    console.log('fetchDetailEpisode', data);
    return data;
}
export async function fetchRelations(slug_url) {
    const { data } = await axios.get(`api/anime/${slug_url}/relations`, {});
    return data;
}
export async function fetchSimilar(slug_url) {
    const { data } = await axios.get(`api/anime/${slug_url}/similar`, {});
    return data;
}
//# sourceMappingURL=index.js.map