import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Pages/Home/HomePage.vue';
import Services from './components/Pages/Services/ServicesPage.vue';
import FAQS from './components/Pages/FAQS/FAQSPage.vue';
import About from './components/Pages/About/AboutPage.vue';
// import Contact from './components/Pages/Contact/ContactPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/services',
      component: Services,
    },
    {
      path: '/faqs',
      component: FAQS,
    },
    {
      path: '/about-us',
      component: About,
    }
  ],
})
