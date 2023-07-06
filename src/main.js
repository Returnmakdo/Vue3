import './assets/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';

const app = createApp(App);
app.use(person, { name: '안치영' });
app.use(funcPlugins);
app.use(objPlugins, { name: '치영' });
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
