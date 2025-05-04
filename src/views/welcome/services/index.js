import axios from '@/utils/axios.js';
export async function fetchList() {
    const { data } = await axios.get('/api');
    return data;
}
export async function fetchTopViews(page = 1, popularity = 21, time = 'day') {
    const { data } = await axios.get('/api/media/top-views', {
        params: { page, popularity, time }
    });
    return data;
}
export async function fetchLatestUpdates(page = 1) {
    const { data } = await axios.get('/api/latest-updates', {
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
//# sourceMappingURL=index.js.map