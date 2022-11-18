import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import globalRegister from './global';
import './assets/main.css';
import 'element-plus/dist/index.css';

import './service/axios_demo';

const app = createApp(App);
//* 注册element ui
app.use(globalRegister);

app.use(createPinia());
app.use(router);

app.mount('#app');
