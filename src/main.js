import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Antd from 'ant-design-vue';
import App from '@/App.vue';
import router from '@/router/index';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(autoAnimatePlugin);
app.mount('#app');
//# sourceMappingURL=main.js.map