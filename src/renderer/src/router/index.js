import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@renderer/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
    meta: { authorize: [] }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
