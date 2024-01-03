import { createApp } from 'vue';

// 引入自定义指令
import directives from '@/directives';
import App from '@/App.vue';
import router from './router';
import store from './store';

// 引入全局样式
import '@/assets/styles/index.scss';
const app = createApp(App);

// 注册自定义指令
directives(app);

app.use(store);
app.use(router);
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app');
