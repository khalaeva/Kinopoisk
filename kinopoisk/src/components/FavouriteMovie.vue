<template>
    <section class="films-list">
        <SortMovies/>
        <div class="movie-cart">
            <MovieCart 
                v-for="movie of mainStore.moviesByPages[numberPage - 1]"  
                :movie="movie" 
                :liked="liked(movie)"
            />
        </div>
        <div class="pagination">
            <a-pagination 
                v-model:current="numberPage" 
                @change="onChange" 
                :pageSize="20" 
                :total="mainStore.moviesByPages.length * 20" 
                :show-size-changer="false"
            />
        </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import MovieCart from './Views/MovieCart.vue'
import SortMovies from './SortMovies.vue';
import { ref } from 'vue'

const mainStore = useMainStore()
const numberPage = ref(1)

mainStore.getMoviesFromLocalStorage()

function liked(movie) {
    if (localStorage.getItem(`${movie.id}`)) {
        return JSON.parse(localStorage.getItem(`${movie.id}`)).liked
    }
    else return false
}

function onChange() {
    window.scrollTo(0,0)
}
</script>

<style lang="scss" scoped>
.movie-cart {
    display: flex;
    flex-wrap: wrap;
}
.films-list {
    margin: 50px 3% 50px 3%;
}
</style>