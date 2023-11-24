import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Pages/Home/HomePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
})
