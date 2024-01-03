import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/WorkView.vue'),
    },
    {
      path: '/work/:id',
      name: 'project',
      component: () => import('./views/ProjectView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/:queryParams(.*)',
      name: 'redirect',
      component: HomeView,
      props: true,
    },
  ],
});
