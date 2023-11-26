import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import mitt from 'mitt';
import './index.css'
import App from './App.vue'
import router from './router';

const emitter = mitt();
const app = createApp(App);
const head = createHead();

app.provide('emitter', emitter);
app.use(head);
app.use(router);
app.mount('#app');
