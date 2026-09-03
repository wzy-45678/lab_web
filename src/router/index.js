import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../views/ResearchView.vue'),
    meta: { title: '研究方向' },
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: () => import('../views/CompetitionsView.vue'),
    meta: { title: '竞赛活动' },
  },
  {
    path: '/honors',
    name: 'honors',
    component: () => import('../views/HonorsView.vue'),
    meta: { title: '实验室荣誉' },
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/WorksView.vue'),
    meta: { title: '作品展示' },
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('../views/LearningView.vue'),
    meta: { title: '技术学习' },
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/JoinView.vue'),
    meta: { title: '加入我们' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | 创新创业实验室`
})

export default router
