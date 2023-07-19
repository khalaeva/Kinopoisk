import { createRouter, createWebHistory } from 'vue-router';

import FilmsList from '@/components/FilmsList.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'home',
            component: FilmsList
        }
    ]
})

export default router