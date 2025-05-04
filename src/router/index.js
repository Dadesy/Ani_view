import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/views/welcome/TheWelcome.vue'),
        },
        {
            path: '/:slug_url',
            name: 'animeDetail',
            component: () => import('@/views/anime/TheDetail.vue'),
        },
    ],
});
export default router;
//# sourceMappingURL=index.js.map