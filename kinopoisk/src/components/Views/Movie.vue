<template>
    <div :style="{ backgroundColor: mainStore.currentMovie.color}" class="current_movie">
        <img class="poster" alt="poster" :src="mainStore.currentMovie.poster.url">
        <div class="rating">
            <p style="font-size: 33px;">{{ mainStore.currentMovie.name }} </p>
            <p style="font-size: 18px;">{{ mainStore.currentMovie.year }} · {{ mainStore.currentMovie.movieLength }} мин</p>
            <p style="font-size: 15px;">KP: {{ mainStore.currentMovie.rating.kp.toFixed(1) }} &nbsp; IMBD: {{ mainStore.currentMovie.rating.imdb }}</p>
            <p style="font-size: 15px;">{{ mainStore.currentMovie.description }} </p>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const mainStore = useMainStore()

mainStore.getMovieById(route.params.id)
</script>

<style lang="scss" scoped>
.current_movie {
    margin: 10px 100px 10px 100px;
    display: grid; 
    grid-template-columns: 400px 1fr;
}
</style>