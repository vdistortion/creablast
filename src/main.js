import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import { YoutubeAPI, YoutubeVideo } from './plugins/youtube';
import './assets/styles.styl';

createApp(App)
  .use(createPinia())
  .use(router)
  .provide(YoutubeAPI.name, YoutubeAPI)
  .component('youtube-video', YoutubeVideo)
  .mount('#app');
