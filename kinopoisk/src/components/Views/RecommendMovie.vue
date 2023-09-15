<template>
    <div class="recommend">
        <p class="recommend-txt">Рекомендуем:</p>
        <div class="movie-cart">
            <MovieCart v-for="movie of mainStore.recommendMovies"  :movie="movie" :liked="liked(movie)"/>
        </div>
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
.recommend {
    margin: 150px 80px 50px 80px;
    text-align: start;
    &-txt {
        color: white;
        font-size: 30px;
        font-weight: 480;
        margin-left: 20px;
        margin-bottom: 30px;
    }
}
.movie-cart::-webkit-scrollbar {
    width: 20px; /* Ширина всего элемента навигации */
}
.movie-cart::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5); /* Цвет дорожки */
    border-radius: 50px;
}

.movie-cart::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.9);; /* Цвет бегунка */
    border-radius: 50px; /* Округление бегунка */
}
.movie-cart {
    
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
}
</style>