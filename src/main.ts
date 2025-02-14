import { createApp } from 'vue';
import App from './App.vue';
import TableResizable from './directive/table-resizable.ts';

const app = createApp(App);
app.use(TableResizable);
app.mount('#app');
