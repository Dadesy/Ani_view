import axios from '@/utils/axios.js';
export async function fetchAnime(query) {
    const { data } = await axios.get(`api/anime`, {
        params: {
            q: query,
            'fields[]': ['rate_avg', 'rate', 'releaseDate']
        }
    });
    return data;
}
//# sourceMappingURL=index.js.map