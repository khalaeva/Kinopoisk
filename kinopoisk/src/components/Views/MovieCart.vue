<template>
    <div class="cart">
        <img class="poster" alt="poster" :src="movie.poster.url">
        <div class="rating">
            <p style="font-size: 33px;">{{ movie.name }} </p>
            <p style="font-size: 18px;">{{ movie.year }} · {{ movie.movieLength }} мин</p>
            <p style="font-size: 15px;">KP: {{ movie.rating.kp.toFixed(1) }} &nbsp; IMBD: {{ movie.rating.imdb }}</p>
        </div>
        <div class="rating__small_screen">
            <p style="font-size: 20px; margin-bottom: 0">{{ movie.name }} </p>
        </div>
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
.rating {
    opacity: 0;
    position: absolute;
    bottom: 40px;
    left: 0;
    p {
        text-align: left;
        font-weight: 500;
        margin: 0 20px 5px 20px;
    }
} 
.cart {
    position: relative;
    margin-bottom: 50px;
    padding: 0 15px;
    width: 20%;
    min-width: 200px;
}
.poster {
    transition: 1s;
}
.cart:hover {
    cursor: pointer;
    .poster {
        opacity: 0.4;
        transform: scale(1.07) translateY(-7px); 
    }
    .rating {
        opacity: 1;
    }
}

.rating__small_screen {
    display: none;
}

@media (max-width: 1350px) { 
    .cart:hover {
        cursor: pointer;
        .poster {
            opacity: 0.4;
            transform: scale(1.07) translateY(-7px); 
        }
        .rating {
            opacity: 0;
        }
    }
    .rating__small_screen {
        display: block;
    }
}
</style>