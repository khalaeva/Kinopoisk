<template>
    <div class="cart">
        <img class="poster" alt="poster" :src="movie.poster.url">
        <p>{{ movie.name }} ({{ movie.year }})</p>
    </div>
</template>

<script setup>
const props = defineProps({
    movie: {
        type: Object, 
        require: true
    }
})
</script>

<style lang="scss" scoped>
.cart {
    margin-bottom: 37px;
    padding: 0 15px;
    width: 20%;
    min-width: 120px;
}
</style>