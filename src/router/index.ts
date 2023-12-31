import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Catalog from '@/components/catalog/Catalog.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: AboutView,
      component: AboutView
    },
    {
      path: '/catalog',
      name: Catalog,
      component: Catalog
    },
  ]
})

export default router
