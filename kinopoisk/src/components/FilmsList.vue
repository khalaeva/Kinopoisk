<template>
    <section class="films-list">
            <div class="movie-cart">
                <MovieCart v-for="movie of mainStore.moviesByPages[numberPage - 1]"  :movie="movie"/>
            </div>
            <div class="pagination">
                <a-pagination v-model:current="numberPage" @change="onChange" :pageSize="20" :total="mainStore.moviesByPages.length * 20" :show-size-changer="false"/>
            </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { onMounted, ref } from 'vue'
import MovieCart from './Views/MovieCart.vue'

const mainStore = useMainStore()
const numberPage = ref(1)

onMounted (() => {
    mainStore.getMoviesFromAPI()
})

function onChange() {
    console.log(numberPage)
}
</script>

<style lang="scss" scoped>
.movie-cart {
    display: flex;
    flex-wrap: wrap;
}
</style>