<template>
    <div class="movie_cart">
        <img alt="poster" :src="img">
        <p>{{ name }} ({{ year }})</p>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
    img: String,
    year: Number, 
})
</script>

<style lang="scss" scoped>
.movie_cart {
    padding: 10px 10px 10px 10px;
    display: grid;
    grid-template-columns: 110px 1fr;
}
.movie_cart:hover {
    background-color: rgb(18, 18, 22, 0.05);
    cursor: pointer;
}
img {
    height: 100%;
    width: 100px;
}

p {
    margin-top: 10px;
    color: rgb(18, 18, 22);
    font-size: 20px;
    font-weight: 500;
}
</style>