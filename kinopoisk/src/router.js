import { createRouter, createWebHistory } from 'vue-router';

import FilmsList from '@/components/FilmsList.vue'
import Movie from '@/components/Views/Movie.vue'
import FavouriteMovie from '@/components/FavouriteMovie.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'home',
            component: FilmsList
        },
        {
            path: '/films/:id',
            name: 'movie',
            component: Movie
        },
        {
            path: '/fav',
            name: 'favourite',
            component: FavouriteMovie
        }
    ]
})

export default router