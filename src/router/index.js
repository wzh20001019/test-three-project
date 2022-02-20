import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
