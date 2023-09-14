<template>
    <div class="movie-cart">
        <MovieCart v-for="movie of mainStore.recommendMovies"  :movie="movie" :liked="liked(movie)"/>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore';
import MovieCart from './MovieCart.vue';

const mainStore = useMainStore()

const props = defineProps({
    movie: {
        type: Object,
        require: true
    }
})

mainStore.recommend(props.movie.shortDescription)

function liked(movie) {
    return (localStorage.getItem(`${movie.id}`) !== null)
}
</script>

<style lang="scss" scoped>
.movie-cart {
    display: flex;
    flex-wrap: wrap;
}
</style>