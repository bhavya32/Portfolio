import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/stack',
      name: 'stack',
      component: () => import('../views/TechStack.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/Connect.vue')
    }
  ]
})

export default router
