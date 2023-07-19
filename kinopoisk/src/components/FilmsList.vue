<template>
    <div class="movie-cart">
        <MovieCart v-for="movie of mainStore.movies"  :movie="movie"/>
        <a-pagination :total="100" v-model="current" @change="onChange(current)"></a-pagination>
    </div>
    
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { onMounted } from 'vue'
import MovieCart from './Views/MovieCart.vue'
import { ref } from 'vue'

const mainStore = useMainStore()
const current = ref(1);

onMounted (() => {
    mainStore.getMoviesFromAPI()
})
function onChange(current) {
        this.current = current;
        console.log(current)  
      }
</script>

<style lang="scss" scoped>
.movie-cart {
    display: flex;
    flex-wrap: wrap;
}
</style>