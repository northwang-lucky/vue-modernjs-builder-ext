import { createApp } from 'vue';
import App from './App.vue';

const root = document.createElement('div');
root.id = 'chrome-extension-vue-root';
document.body.append(root);

const app = createApp(App);
setTimeout(() => app.mount('#chrome-extension-vue-root'), 10);
